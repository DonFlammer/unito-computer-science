// Strumenti interattivi delle lezioni di Fondamenti dell'Informatica: porte logiche, flip-flop e notazione esadecimale.
// Il compilatore (strumenti/lezioni.mjs) scrive <figure class="widget" data-widget="porte" data-modo="…">; qui si disegna lo strumento.
// Modi: «porte» (AND, OR, XOR e NOT con due ingressi da cambiare), «flipflop» (il flip-flop della figura 1.3 del libro:
// una porta OR, una AND e una NOT, con l'uscita che torna all'ingresso dell'OR), «esadecimale» (bit da cambiare con un clic,
// letti a gruppi di quattro). Solo nodi creati con il DOM, nessun HTML scritto come testo.
(() => {
  'use strict';
  const en = (document.documentElement.lang || '').startsWith('en');
  const t = (it, eng) => (en ? eng : it);
  const NS = 'http://www.w3.org/2000/svg';
  const el = (tag, attr = {}, ...figli) => {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attr)) {
      if (k === 'class') e.className = v; else if (k === 'text') e.textContent = v; else e.setAttribute(k, v);
    }
    figli.forEach(f => e.append(f));
    return e;
  };
  const sv = (tag, attr = {}, testo) => {
    const e = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attr)) e.setAttribute(k, v);
    if (testo !== undefined) e.textContent = testo;
    return e;
  };
  const tela = (w, h, titolo) => sv('svg', { viewBox: `0 0 ${w} ${h}`, class: 'pt-svg', role: 'img', 'aria-label': titolo });
  const meno = () => document.documentElement.classList.contains('meno-moto');

  // corpo delle porte in un riquadro largo 56 e alto 40: ingressi a sinistra, uscita a destra a metà altezza
  const CORPO = {
    AND: 'M0 0 H28 A20 20 0 0 1 28 40 H0 Z',
    OR: 'M0 0 Q14 20 0 40 Q36 40 56 20 Q36 0 0 0 Z',
    XOR: 'M7 0 Q21 20 7 40 Q40 40 56 20 Q40 0 7 0 Z',
    NOT: 'M0 3 L40 20 L0 37 Z',
  };
  function porta(tipo, x, y, nome = '') {
    const g = sv('g', { transform: `translate(${x} ${y})` });
    g.append(sv('path', { d: CORPO[tipo], class: 'porta' }));
    if (tipo === 'XOR') g.append(sv('path', { d: 'M0 0 Q14 20 0 40', class: 'porta-linea' }));
    if (tipo === 'NOT') g.append(sv('circle', { cx: 44.5, cy: 20, r: 4.5, class: 'porta' }));
    if (nome) g.append(sv('text', { x: tipo === 'NOT' ? 15 : 24, y: 24, class: 'nome', 'text-anchor': 'middle' }, nome));
    return g;
  }
  const filo = (punti, v) => sv('polyline', { points: punti, class: v ? 'filo uno' : 'filo' });
  const scritta = (x, y, testo, classe = '', ancora = 'start') => sv('text', { x, y, class: classe, 'text-anchor': ancora }, testo);

  /* ---------- le quattro porte ---------- */

  const OPERA = { AND: (a, b) => a & b, OR: (a, b) => a | b, XOR: (a, b) => a ^ b };
  const PERCHE = {
    AND: u => (u ? t('tutti e due gli ingressi valgono 1', 'both inputs are 1') : t('almeno un ingresso vale 0', 'at least one input is 0')),
    OR: u => (u ? t('almeno un ingresso vale 1', 'at least one input is 1') : t('tutti e due gli ingressi valgono 0', 'both inputs are 0')),
    XOR: u => (u ? t('i due ingressi sono diversi', 'the two inputs are different') : t('i due ingressi sono uguali', 'the two inputs are equal')),
  };

  function porte(fig) {
    const st = { A: Number(fig.dataset.a === '1'), B: Number(fig.dataset.b === '1') };
    const bottoni = {};
    const riga = el('div', { class: 'w-riga pt-ingressi' });
    for (const k of ['A', 'B']) {
      const b = el('button', { type: 'button', class: 'btn' });
      b.addEventListener('click', () => { st[k] = 1 - st[k]; disegna(); });
      bottoni[k] = b;
      riga.append(b);
    }
    const aiuto = el('p', { class: 'w-aiuto', text: t('Clicca su A o su B per passare da 0 a 1 e viceversa. I fili che valgono 1 si colorano.',
      'Click A or B to switch it between 0 and 1. The wires carrying 1 light up.') });
    const griglia = el('div', { class: 'pt-griglia' });
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(riga, aiuto, griglia, lettura);

    function scheda(tipo) {
      const a = st.A, b = st.B;
      const u = tipo === 'NOT' ? 1 - a : OPERA[tipo](a, b);
      const s = tela(196, 64, tipo === 'NOT' ? `NOT A, A = ${a}: ${u}` : `A ${tipo} B, A = ${a}, B = ${b}: ${u}`);
      if (tipo === 'NOT') {
        s.append(filo('30,32 64,32', a), filo('108,32 164,32', u), scritta(4, 36, `A=${a}`, a ? 'uno' : ''));
      } else {
        s.append(filo('30,22 68,22', a), filo('30,42 68,42', b), filo('116,32 164,32', u),
          scritta(4, 26, `A=${a}`, a ? 'uno' : ''), scritta(4, 46, `B=${b}`, b ? 'uno' : ''));
      }
      s.append(porta(tipo, 60, 12), scritta(190, 37, String(u), u ? 'uno grande' : 'grande', 'end'));
      return el('div', { class: 'pt-scheda' }, el('h4', { text: tipo === 'NOT' ? 'NOT A' : `A ${tipo} B` }), s);
    }

    function disegna() {
      for (const k of ['A', 'B']) {
        bottoni[k].textContent = `${k} = ${st[k]}`;
        bottoni[k].setAttribute('aria-pressed', st[k] ? 'true' : 'false');
      }
      griglia.replaceChildren(...['AND', 'OR', 'XOR', 'NOT'].map(scheda));
      const voci = ['AND', 'OR', 'XOR'].map(tipo => {
        const u = OPERA[tipo](st.A, st.B);
        return el('li', {}, el('b', { text: `${tipo}: ${u}` }), `, ${t('perché', 'because')} ${PERCHE[tipo](u)};`);
      });
      voci.push(el('li', {}, el('b', { text: `NOT A: ${1 - st.A}` }), `, ${t("perché NOT dà il contrario dell'ingresso", 'because NOT gives the opposite of its input')}.`));
      lettura.replaceChildren(el('p', { text: t(`Con A = ${st.A} e B = ${st.B}:`, `With A = ${st.A} and B = ${st.B}:`) }), el('ul', { class: 'w-passi' }, ...voci));
    }
    disegna();
  }

  /* ---------- il flip-flop della figura 1.3 ---------- */

  function flipflop(fig) {
    const st = { alto: 0, basso: 0, q: Number(fig.dataset.uscita === '1') };
    let fili = { or: 0, not: 1, and: st.q };
    const storia = [];
    const bAlto = el('button', { type: 'button', class: 'btn' });
    const bBasso = el('button', { type: 'button', class: 'btn' });
    const impAlto = el('button', { type: 'button', class: 'btn primary', text: t('Impulso in alto', 'Pulse on the upper input') });
    const impBasso = el('button', { type: 'button', class: 'btn', text: t('Impulso in basso', 'Pulse on the lower input') });
    const aiuto = el('p', { class: 'w-aiuto', text: t('Un impulso porta un ingresso a 1 e poi di nuovo a 0. Con i due pulsanti a sinistra puoi anche tenere un ingresso fermo a 1.',
      'A pulse sets an input to 1 and then back to 0. With the two buttons on the left you can also hold an input at 1.') });
    const disegno = el('div', { class: 'pt-flipflop' });
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    const lista = el('ol', { class: 'w-passi pt-storia', reversed: '' });
    fig.append(el('div', { class: 'w-riga pt-ingressi' }, bAlto, bBasso, impAlto, impBasso), aiuto, disegno, lettura, lista);

    // calcola i fili finché il circuito smette di cambiare: l'uscita dell'AND torna all'ingresso dell'OR
    function assesta() {
      for (let k = 0; k < 8; k++) {
        const or = st.alto | st.q, not = 1 - st.basso, and = or & not;
        fili = { or, not, and };
        if (and === st.q) break;
        st.q = and;
      }
    }

    function cambia(ingresso, valore) {
      const prima = st.q;
      st[ingresso] = valore;
      assesta();
      const nome = ingresso === 'alto' ? t('Ingresso in alto', 'Upper input') : t('Ingresso in basso', 'Lower input');
      let frase = `${nome} ${valore ? t('a 1', 'set to 1') : t('torna a 0', 'back to 0')}: ${t("l'OR dà", 'the OR gives')} ${fili.or}, ` +
        `${t('il NOT dà', 'the NOT gives')} ${fili.not}, ${t("l'AND dà", 'the AND gives')} ${fili.and}. `;
      if (st.q === prima) frase += t(`L'uscita resta ${st.q}`, `The output stays ${st.q}`) +
        (!valore && st.q === 1 ? t(": l'OR riceve ancora l'uscita, che vale 1. Il flip-flop ricorda.", ': the OR still receives the output, which is 1. The flip-flop remembers.') : '.');
      else frase += t(`L'uscita passa da ${prima} a ${st.q}.`, `The output changes from ${prima} to ${st.q}.`);
      if (st.alto && st.basso) frase += ' ' + t('Con i due ingressi a 1 insieme l\'uscita è 0: è un caso che non si usa.', 'With both inputs at 1 the output is 0: this case is not used.');
      storia.unshift(frase);
      if (storia.length > 6) storia.pop();
      disegna();
    }

    let occupato = false;
    function impulso(ingresso) {
      if (occupato || st[ingresso]) return;
      cambia(ingresso, 1);
      if (meno()) { cambia(ingresso, 0); return; }
      occupato = true;
      [impAlto, impBasso, bAlto, bBasso].forEach(b => { b.disabled = true; });
      setTimeout(() => {
        cambia(ingresso, 0);
        occupato = false;
        [impAlto, impBasso, bAlto, bBasso].forEach(b => { b.disabled = false; });
      }, 900);
    }

    function disegna() {
      bAlto.textContent = `${t('in alto', 'upper')} = ${st.alto}`;
      bBasso.textContent = `${t('in basso', 'lower')} = ${st.basso}`;
      bAlto.setAttribute('aria-pressed', st.alto ? 'true' : 'false');
      bBasso.setAttribute('aria-pressed', st.basso ? 'true' : 'false');
      const q = st.q;
      const s = tela(400, 118, t(`Flip-flop: ingresso in alto ${st.alto}, ingresso in basso ${st.basso}, uscita ${q}`,
        `Flip-flop: upper input ${st.alto}, lower input ${st.basso}, output ${q}`));
      s.append(
        filo('300,75 300,8 100,8 100,30 128,30', q),             // l'uscita torna all'ingresso dell'OR
        filo('48,50 128,50', st.alto),                            // ingresso in alto → OR
        filo('176,40 196,40 196,65 226,65', fili.or),             // OR → AND
        filo('48,85 134,85', st.basso),                           // ingresso in basso → NOT
        filo('178,85 226,85', fili.not),                          // NOT → AND
        filo('266,75 352,75', q),                                 // AND → uscita
        sv('circle', { cx: 300, cy: 75, r: 3.5, class: q ? 'nodo uno' : 'nodo' }),
        porta('OR', 120, 20, 'OR'), porta('AND', 218, 55, 'AND'), porta('NOT', 130, 65, 'NOT'),
        scritta(4, 46, t('alto', 'upper'), 'nome'), scritta(4, 59, String(st.alto), st.alto ? 'uno' : ''),
        scritta(4, 81, t('basso', 'lower'), 'nome'), scritta(4, 94, String(st.basso), st.basso ? 'uno' : ''),
        scritta(396, 68, t('uscita', 'output'), 'nome', 'end'), scritta(396, 92, String(q), q ? 'uno grande' : 'grande', 'end'),
      );
      disegno.replaceChildren(s);
      lettura.replaceChildren(el('p', {}, t('Uscita del flip-flop: ', 'Flip-flop output: '), el('b', { text: String(q) })));
      lista.replaceChildren(...storia.map(f => el('li', { text: f })));
    }

    bAlto.addEventListener('click', () => cambia('alto', 1 - st.alto));
    bBasso.addEventListener('click', () => cambia('basso', 1 - st.basso));
    impAlto.addEventListener('click', () => impulso('alto'));
    impBasso.addEventListener('click', () => impulso('basso'));
    assesta();
    disegna();
  }

  /* ---------- notazione esadecimale ---------- */

  function esadecimale(fig) {
    let bit = (fig.dataset.bit || '0110101011110010').replace(/[^01]/g, '').slice(0, 32);
    if (!bit) bit = '0000000000000000';
    bit = bit.padStart(Math.ceil(bit.length / 4) * 4, '0');
    const st = bit.split('').map(Number);
    const aiuto = el('p', { class: 'w-aiuto', text: t('Clicca su un bit per cambiarlo. Sotto ogni gruppo di quattro bit c\'è la sua cifra esadecimale.',
      'Click a bit to change it. Below each group of four bits you see its hexadecimal digit.') });
    const gruppi = el('div', { class: 'pt-gruppi' });
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(aiuto, gruppi, lettura);

    function disegna(fuoco = -1) {
      const blocchi = [];
      let esa = '';
      for (let g = 0; g < st.length / 4; g++) {
        const quattro = st.slice(4 * g, 4 * g + 4);
        const valore = quattro.reduce((v, b) => 2 * v + b, 0);
        const cifra = valore.toString(16).toUpperCase();
        esa += cifra;
        const bits = el('div', { class: 'pt-bits' });
        quattro.forEach((b, k) => {
          const i = 4 * g + k;
          const bt = el('button', { type: 'button', class: 'pt-bit', text: String(b), 'aria-pressed': b ? 'true' : 'false',
            'aria-label': t(`bit ${i + 1} di ${st.length}, vale ${b}`, `bit ${i + 1} of ${st.length}, value ${b}`) });
          bt.addEventListener('click', () => { st[i] = 1 - st[i]; disegna(i); });
          bits.append(bt);
        });
        blocchi.push(el('div', { class: 'pt-gruppo' }, bits, el('span', { class: 'pt-cifra', text: cifra }),
          el('span', { class: 'w-nota', text: t(`vale ${valore}`, `value ${valore}`) })));
      }
      gruppi.replaceChildren(...blocchi);
      lettura.replaceChildren(el('p', {}, t(`I ${st.length} bit in esadecimale: `, `The ${st.length} bits in hexadecimal: `), el('b', { class: 'pt-esa', text: esa })));
      if (fuoco >= 0) gruppi.querySelectorAll('.pt-bit')[fuoco].focus();
    }
    disegna();
  }

  const MODI = { porte, gates: porte, flipflop, esadecimale, hexadecimal: esadecimale };
  document.querySelectorAll('figure.widget[data-widget="porte"]').forEach(fig => {
    const carica = fig.querySelector('.widget-carica');
    if (carica) carica.remove();
    (MODI[fig.dataset.modo || fig.dataset.mode] || porte)(fig);
  });
})();
