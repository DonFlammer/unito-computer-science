// Simulatore della macchina di Von Neumann per le lezioni di Programmazione I: esegue passo per passo i programmi
// in assembly delle slide (addizione e moltiplicazione per somme ripetute), con memoria, registri, PC e IR.
// Ogni istruzione occupa 4 byte (una parola da 32 bit): la riga k sta all'indirizzo 4·(k − 1), come nelle slide.
(() => {
  'use strict';
  const en = (document.documentElement.lang || '').startsWith('en');
  const t = (it, eng) => (en ? eng : it);
  const PROGRAMMI = {
    addizione: {
      nome: t('Addizione tra interi (slide 5–14)', 'Integer addition (slides 5–14)'),
      dati: [['A', 400, 12], ['B', 404, -8]],
      righe: [
        ['LOAD', 'R0', '@A', t('carica in R0 il numero all\'indirizzo A', 'load into R0 the number at address A')],
        ['LOAD', 'R1', '@B', t('carica in R1 il numero all\'indirizzo B', 'load into R1 the number at address B')],
        ['ADD', 'R0', 'R1', t('R0 ← R0 + R1', 'R0 ← R0 + R1')],
        ['STORE', 'R0', '@A', t('copia R0 all\'indirizzo A', 'copy R0 to address A')],
      ],
    },
    moltiplicazione: {
      nome: t('Moltiplicazione per somme ripetute (slide 15–16)', 'Multiplication by repeated addition (slides 15–16)'),
      dati: [['m', 400, 4], ['n', 404, 3]],
      righe: [
        ['LOAD', 'R0', '0', t('inizializza R0 come accumulatore s', 'initialise R0 as the accumulator s')],
        ['LOAD', 'R1', '0', t('inizializza R1 come contatore i', 'initialise R1 as the counter i')],
        ['LOAD', 'R2', '@m', t('carica il valore all\'indirizzo m in R2', 'load the value at address m into R2')],
        ['LOAD', 'R3', '@n', t('carica il valore all\'indirizzo n in R3', 'load the value at address n into R3')],
        ['CMP', 'R1', 'R3', t('confronta R1 e R3, cioè i e n', 'compare R1 and R3, that is i and n')],
        ['JMPEQ', '10', '', t('se i = n salta alla riga 10, altrimenti continua', 'if i = n jump to line 10, otherwise go on')],
        ['ADD', 'R0', 'R2', t('R0 ← R0 + R2, cioè s ← s + m', 'R0 ← R0 + R2, that is s ← s + m')],
        ['INC', 'R1', '', t('R1 ← R1 + 1, cioè i ← i + 1', 'R1 ← R1 + 1, that is i ← i + 1')],
        ['JMP', '5', '', t('salto incondizionato alla riga 5', 'unconditional jump to line 5')],
        ['STORE', 'R0', '@m', t('salva R0, cioè il risultato s, all\'indirizzo di m', 'store R0, that is the result s, at the address of m')],
      ],
    },
  };
  const el = (tag, attr = {}, ...figli) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attr)) { if (k === 'class') e.className = v; else if (k === 'text') e.textContent = v; else e.setAttribute(k, v); }
    figli.forEach(f => e.append(f));
    return e;
  };
  const num = v => (v === null || v === undefined ? '—' : String(v).replace('-', '−'));
  let contatore = 0;

  function macchina(fig) {
    const d = fig.dataset;
    const scelto = { addition: 'addizione', multiplication: 'moltiplicazione' }[d.program] || d.programma || d.program;
    let chiave = scelto in PROGRAMMI ? scelto : 'moltiplicazione';
    const id = `mc${++contatore}`;
    const sel = el('select', { id: `${id}-p` });
    for (const [k, p] of Object.entries(PROGRAMMI)) sel.append(el('option', { value: k, text: p.nome }));
    sel.value = chiave;
    const inM = el('input', { type: 'number', id: `${id}-m`, min: '-20', max: '20', step: '1' });
    const inN = el('input', { type: 'number', id: `${id}-n`, min: '0', max: '12', step: '1' });
    const campo = (lab, input) => el('div', { class: 'field' }, el('label', { for: input.id, text: lab }), input);
    const cM = campo('m', inM), cN = campo('n', inN);
    const passo = el('button', { type: 'button', class: 'btn primary', text: t('Passo', 'Step') });
    const esegui = el('button', { type: 'button', class: 'btn', text: t('Esegui', 'Run'), 'aria-pressed': 'false' });
    const fine = el('button', { type: 'button', class: 'btn', text: t('Fino alla fine', 'To the end') });
    const ricomincia = el('button', { type: 'button', class: 'btn', text: t('Ricomincia', 'Restart') });
    const stato = el('p', { class: 'status', 'aria-live': 'polite' });
    const codice = el('ol', { class: 'prog', 'aria-label': t('Programma in assembly', 'Assembly program') });
    const registri = el('div', { class: 'vars' });
    const memoria = el('div', { class: 'vars mc-memoria' });
    const traccia = el('tbody');
    const tab = el('table', {}, el('thead', {}, el('tr', {}, ...['#', t('Fase', 'Phase'), 'PC', 'IR', t('Che cosa succede', 'What happens')].map(s => el('th', { text: s })))), traccia);
    fig.append(
      el('div', { class: 'sim-controls' }, campo(t('programma', 'program'), sel), cM, cN),
      el('div', { class: 'btns' }, passo, esegui, fine, ricomincia),
      stato,
      el('div', { class: 'sim-grid' }, el('div', {}, codice), el('div', {},
        el('p', { class: 'mc-titoletto', text: t('Registri della CPU', 'CPU registers') }), registri,
        el('p', { class: 'mc-titoletto', text: t('Memoria (area dati)', 'Memory (data area)') }), memoria)),
      el('div', { class: 'trace-box' }, tab));

    let st, timer = null;
    const P = () => PROGRAMMI[chiave];
    const reset = msg => {
      ferma();
      const p = P();
      if (chiave === 'moltiplicazione') { p.dati[0][2] = clamp(inM.value, -20, 20, 4); p.dati[1][2] = clamp(inN.value, 0, 12, 3); }
      inM.value = String(p.dati[0][2]); inN.value = String(p.dati[1][2]);
      cM.hidden = cN.hidden = chiave !== 'moltiplicazione';
      st = { pc: 0, ir: null, fase: 'preleva', reg: { R0: null, R1: null, R2: null, R3: null }, sr: null, mem: Object.fromEntries(p.dati.map(([, a, v]) => [a, v])), n: 0, finito: false, cambiato: null };
      traccia.innerHTML = '';
      stato.className = 'status';
      stato.textContent = msg || t('Pronto: il PC vale 0, cioè punta alla prima istruzione. Premi «Passo»: ogni istruzione richiede due passi, prelievo ed esecuzione.', 'Ready: PC is 0, so it points to the first instruction. Press "Step": each instruction takes two steps, fetch and execute.');
      disegna();
    };
    const clamp = (v, a, b, def) => { const x = parseInt(v, 10); return Number.isNaN(x) ? def : Math.min(b, Math.max(a, x)); };
    const indirizzo = op => { const nome = op.slice(1); const r = P().dati.find(([n]) => n === nome); return r ? r[1] : null; };
    function disegna() {
      const p = P();
      codice.innerHTML = '';
      p.righe.forEach((r, k) => {
        const li = el('li');
        const corrente = !st.finito && st.pc === 4 * k;
        if (corrente) li.classList.add(st.fase === 'preleva' ? 'is-current' : 'is-last');
        li.append(el('span', { class: 'ln', text: `${k + 1}.` }), el('span', { class: 'tx' },
          el('span', { class: 'kw', text: r[0] }), document.createTextNode(` ${[r[1], r[2]].filter(Boolean).join(', ').replace(/^(\d+)$/, `<${t('riga', 'line')} $1>`)}`),
          el('span', { class: 'cm', text: `  // ${r[3]}` })));
        codice.append(li);
      });
      registri.innerHTML = '';
      const riga = st.pc / 4 + 1;
      for (const [k, v] of [['R0', st.reg.R0], ['R1', st.reg.R1], ['R2', st.reg.R2], ['R3', st.reg.R3],
        ['PC', st.pc], ['IR', st.ir ? st.ir[0] : null], ['SR', st.sr]]) {
        if (chiave === 'addizione' && (k === 'R2' || k === 'R3' || k === 'SR')) continue;
        const nome = k === 'PC' && !st.finito ? `PC · ${t('riga', 'line')} ${riga}` : k;
        const box = el('div', { class: 'var' + (st.cambiato === k ? ' mc-cambiato' : '') }, el('span', { class: 'k', text: nome }), el('span', { class: 'v', text: num(v) }));
        registri.append(box);
      }
      memoria.innerHTML = '';
      for (const [nome, a] of p.dati) {
        memoria.append(el('div', { class: 'var' + (st.cambiato === a ? ' mc-cambiato' : '') }, el('span', { class: 'k', text: `${t('byte', 'byte')} ${a} · ${nome}` }), el('span', { class: 'v', text: num(st.mem[a]) })));
      }
    }
    function riga(fase, testo) {
      st.n += 1;
      const tr = el('tr');
      [String(st.n), fase, String(st.pc), st.ir ? `${st.ir[0]} ${[st.ir[1], st.ir[2]].filter(Boolean).join(', ')}` : '—', testo].forEach((v, i) => tr.append(el('td', { text: v, class: i === 0 || i === 2 ? 'num' : i === 3 ? 'mono' : '' })));
      traccia.append(tr);
      tab.parentElement.scrollTop = tab.parentElement.scrollHeight;
    }
    function passa() {
      if (st.finito) return;
      const p = P();
      st.cambiato = null;
      if (st.fase === 'preleva') {
        st.ir = p.righe[st.pc / 4];
        st.fase = 'esegui';
        st.cambiato = 'IR';
        const testo = t(`Prelievo: l'unità di controllo legge l'istruzione all'indirizzo PC = ${st.pc} e la copia in IR.`, `Fetch: the control unit reads the instruction at address PC = ${st.pc} and copies it into IR.`);
        riga(t('prelievo', 'fetch'), testo);
        stato.textContent = testo;
      } else {
        const [op, a, b] = st.ir;
        let salto = null, testo = '';
        if (op === 'LOAD') {
          const v = b.startsWith('@') ? st.mem[indirizzo(b)] : Number(b);
          st.reg[a] = v; st.cambiato = a;
          testo = b.startsWith('@') ? `${a} ← ${t('memoria', 'memory')}[${indirizzo(b)}] = ${num(v)}` : `${a} ← ${num(v)}`;
        } else if (op === 'ADD') {
          const v = st.reg[a] + st.reg[b];
          testo = t(`la ALU somma: ${a} ← ${num(st.reg[a])} + ${num(st.reg[b])} = ${num(v)}`, `the ALU adds: ${a} ← ${num(st.reg[a])} + ${num(st.reg[b])} = ${num(v)}`);
          st.reg[a] = v; st.cambiato = a;
        } else if (op === 'INC') {
          st.reg[a] += 1; st.cambiato = a;
          testo = `${a} ← ${num(st.reg[a] - 1)} + 1 = ${num(st.reg[a])}`;
        } else if (op === 'CMP') {
          st.sr = st.reg[a] === st.reg[b] ? t('uguali', 'equal') : t('diversi', 'different');
          st.cambiato = 'SR';
          testo = t(`la ALU confronta ${a} = ${num(st.reg[a])} e ${b} = ${num(st.reg[b])}: sono ${st.sr}; il risultato va nel registro di stato SR`, `the ALU compares ${a} = ${num(st.reg[a])} and ${b} = ${num(st.reg[b])}: they are ${st.sr}; the result goes into the status register SR`);
        } else if (op === 'JMPEQ') {
          if (st.sr === t('uguali', 'equal')) { salto = 4 * (Number(a) - 1); testo = t(`SR dice «uguali»: salto condizionato, PC ← ${salto} (riga ${a})`, `SR says "equal": conditional jump, PC ← ${salto} (line ${a})`); }
          else testo = t('SR dice «diversi»: nessun salto, si prosegue con la riga successiva', 'SR says "different": no jump, go on with the next line');
        } else if (op === 'JMP') {
          salto = 4 * (Number(a) - 1);
          testo = t(`salto incondizionato: PC ← ${salto} (riga ${a})`, `unconditional jump: PC ← ${salto} (line ${a})`);
        } else if (op === 'STORE') {
          const ind = indirizzo(b);
          st.mem[ind] = st.reg[a]; st.cambiato = ind;
          testo = `${t('memoria', 'memory')}[${ind}] ← ${a} = ${num(st.reg[a])}`;
        }
        riga(t('esecuzione', 'execute'), testo);
        st.pc = salto !== null ? salto : st.pc + 4;
        st.fase = 'preleva';
        if (st.pc / 4 >= p.righe.length) {
          st.finito = true;
          const [nome, ind] = chiave === 'moltiplicazione' ? p.dati[0] : p.dati[0];
          stato.className = 'status ok';
          stato.textContent = chiave === 'moltiplicazione'
            ? t(`Fine: il risultato ${num(st.mem[ind])} = ${p.dati[0][2]} × ${p.dati[1][2]} è in memoria all'indirizzo ${ind} (quello di ${nome}). ${st.n} passi.`, `End: the result ${num(st.mem[ind])} = ${p.dati[0][2]} × ${p.dati[1][2]} is in memory at address ${ind} (that of ${nome}). ${st.n} steps.`)
            : t(`Fine: all'indirizzo A (${ind}) ora c'è ${num(st.mem[ind])} = 12 + (−8). ${st.n} passi.`, `End: address A (${ind}) now holds ${num(st.mem[ind])} = 12 + (−8). ${st.n} steps.`);
          ferma();
        } else stato.textContent = `${testo}. ${t('PC ora vale', 'PC is now')} ${st.pc}.`;
      }
      disegna();
    }
    function ferma() { if (timer) { clearInterval(timer); timer = null; } esegui.textContent = t('Esegui', 'Run'); esegui.setAttribute('aria-pressed', 'false'); }
    passo.addEventListener('click', () => { ferma(); passa(); });
    esegui.addEventListener('click', () => {
      if (timer) { ferma(); return; }
      if (st.finito) reset();
      if (document.documentElement.classList.contains('meno-moto')) { while (!st.finito) passa(); return; }
      esegui.textContent = t('Pausa', 'Pause'); esegui.setAttribute('aria-pressed', 'true');
      timer = setInterval(passa, 450);
    });
    fine.addEventListener('click', () => { ferma(); let g = 0; while (!st.finito && g++ < 500) passa(); });
    ricomincia.addEventListener('click', () => reset());
    sel.addEventListener('change', () => { chiave = sel.value; reset(); });
    inM.addEventListener('change', () => reset());
    inN.addEventListener('change', () => reset());
    if (d.m) inM.value = d.m;
    if (d.n) inN.value = d.n;
    reset();
  }

  document.querySelectorAll('figure.widget[data-widget="macchina"]').forEach(fig => {
    const carica = fig.querySelector('.widget-carica');
    if (carica) carica.remove();
    macchina(fig);
  });
})();
