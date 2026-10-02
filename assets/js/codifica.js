// Strumenti interattivi della lezione 02 di Fondamenti dell'Informatica: testo, colori, suoni e numeri scritti in bit.
// Il compilatore (strumenti/lezioni.mjs) scrive <figure class="widget" data-widget="codifica" data-modo="…">; qui si disegna
// lo strumento. Modi: «testo» (punti di codice Unicode e byte di UTF-8 di una parola), «colori» (rosso, verde e blu di un
// pixel), «suono» (un'onda, i suoi campioni e il suono ricostruito, più il conto dei byte), «binario» (bit da cambiare con
// un clic, con il valore di ogni posizione, anche dopo la virgola), «divisioni» (dalla base 10 alla base 2 con le divisioni
// per 2), «somma» (somma in colonna di due numeri in binario, di solito 8 bit, con i riporti e l'overflow).
// I modi hanno anche i nomi inglesi (text, colours, sound, binary, divisions, addition) per le pagine del sito in inglese.
// Solo nodi creati con il DOM, nessun HTML scritto come testo.
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
  const sv = (tag, attr = {}) => {
    const e = document.createElementNS(NS, tag);
    for (const [k, v] of Object.entries(attr)) e.setAttribute(k, v);
    return e;
  };
  const num = n => n.toLocaleString(en ? 'en-GB' : 'it-IT', { maximumFractionDigits: 6 });
  const mega = byte => num(byte < 1e7 ? Math.round(byte / 1e5) / 10 : Math.round(byte / 1e6));   // MB, con un decimale sotto i 10
  const campo = (etichetta, controllo) => el('div', { class: 'w-campo' }, el('label', { text: etichetta }), controllo);
  const dato = (fig, ...nomi) => { for (const n of nomi) if (fig.dataset[n] !== undefined) return fig.dataset[n]; return undefined; };
  const bin = (v, n) => v.toString(2).padStart(n, '0');
  // come le tabelle della pagina (lezione.js): se la tabella non entra nel riquadro prende la classe cd-stretta, che
  // nasconde le colonne meno importanti; si ricontrolla quando cambia la larghezza
  function stringi(contenitore) {
    const adatta = () => {
      const tab = contenitore.firstElementChild;
      if (!tab) return;
      tab.classList.remove('cd-stretta');
      if (contenitore.scrollWidth > contenitore.clientWidth + 1) tab.classList.add('cd-stretta');
    };
    let larghezza = -1;
    if ('ResizeObserver' in window) new ResizeObserver(voci => {
      const w = Math.round(voci[0].contentRect.width);
      if (w !== larghezza) { larghezza = w; adatta(); }
    }).observe(contenitore);
    if (document.fonts) document.fonts.ready.then(adatta);      // con i caratteri definitivi le misure cambiano
    return adatta;
  }
  const hex2 = v => v.toString(16).toUpperCase().padStart(2, '0');

  /* ---------- testo: Unicode e UTF-8 ---------- */

  // byte di UTF-8 di un punto di codice, con la parte fissa di ogni byte (0, 110, 1110, 11110 nel primo, 10 negli altri)
  function utf8(cp) {
    if (cp >= 0xD800 && cp <= 0xDFFF) cp = 0xFFFD;   // metà di una coppia di surrogati: non è un simbolo
    if (cp < 0x80) return [[cp, 1]];
    if (cp < 0x800) return [[0xC0 | (cp >> 6), 3], [0x80 | (cp & 63), 2]];
    if (cp < 0x10000) return [[0xE0 | (cp >> 12), 4], [0x80 | ((cp >> 6) & 63), 2], [0x80 | (cp & 63), 2]];
    return [[0xF0 | (cp >> 18), 5], [0x80 | ((cp >> 12) & 63), 2], [0x80 | ((cp >> 6) & 63), 2], [0x80 | (cp & 63), 2]];
  }
  const nomeSimbolo = (ch, cp) => (cp === 32 ? t('spazio', 'space') : cp < 32 || cp === 127 ? t('comando', 'control') : ch);

  function testo(fig) {
    const ingresso = el('input', { type: 'text', class: 'w-largo', maxlength: '24', spellcheck: 'false', autocomplete: 'off',
      value: dato(fig, 'testo', 'text') || 'Ciao, è 5€!', 'aria-label': t('testo da scrivere in UTF-8', 'text to encode in UTF-8') });
    const aiuto = el('p', { class: 'w-aiuto', text: t('Nell\'ultima colonna le parti fisse dello schema di UTF-8 sono sbiadite: gli altri sono i bit del punto di codice.',
      'In the last column the fixed parts of the UTF-8 pattern are faded: the others are the bits of the code point.') });
    const tabella = el('div', { class: 'cd-scorre' });
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(el('div', { class: 'w-riga' }, campo(t('Testo', 'Text'), ingresso)), aiuto, tabella, lettura);
    const adatta = stringi(tabella);

    function disegna() {
      const simboli = Array.from(ingresso.value).slice(0, 24);
      let byte = 0, ascii = true;
      const righe = simboli.map(ch => {
        const cp = ch.codePointAt(0);
        const b = utf8(cp);
        byte += b.length;
        if (cp > 127) ascii = false;
        const bit = el('td', { class: 'cd-bit cd-lista' });       // si va a capo solo tra un byte e l'altro
        b.forEach(([v, fissi], k) => {
          const s = bin(v, 8);
          if (k) bit.append(' ');
          bit.append(el('span', { class: 'cd-byte' }, el('span', { class: 'cd-fisso', text: s.slice(0, fissi) }), el('span', { class: 'cd-dati', text: s.slice(fissi) })));
        });
        // le colonne «cd-largo» spariscono quando la tabella non entra, per esempio su un telefono
        return el('tr', {},
          el('td', { class: 'cd-simbolo', text: nomeSimbolo(ch, cp) }),
          el('td', { text: 'U+' + cp.toString(16).toUpperCase().padStart(4, '0') }),
          el('td', { class: 'cd-largo', text: String(cp) }),
          el('td', { class: 'cd-largo', text: String(b.length) }),
          el('td', { class: 'cd-bit cd-largo', text: b.map(([v]) => hex2(v)).join(' ') }),
          bit);
      });
      if (!simboli.length) {
        tabella.replaceChildren();
        lettura.replaceChildren(el('p', { text: t('Scrivi qualcosa nel riquadro.', 'Type something in the box.') }));
        return;
      }
      const testa = el('tr', {}, ...[[t('Simbolo', 'Symbol')], [t('Punto di codice', 'Code point')], [t('In decimale', 'In decimal'), 'cd-largo'],
        [t('Byte', 'Bytes'), 'cd-largo'], [t('UTF-8 in esadecimale', 'UTF-8 in hexadecimal'), 'cd-largo'], [t('UTF-8 in bit', 'UTF-8 in bits')]]
        .map(([x, c]) => el('th', c ? { class: c, text: x } : { text: x })));
      tabella.replaceChildren(el('table', { class: 'cd-tabella' }, el('thead', {}, testa), el('tbody', {}, ...righe)));
      adatta();
      const quanti = simboli.length === 1 ? t('1 simbolo, ', '1 symbol, ') : t(`${simboli.length} simboli, `, `${simboli.length} symbols, `);
      lettura.replaceChildren(
        el('p', {}, quanti, el('b', { text: byte === 1 ? t('1 byte in UTF-8', '1 byte in UTF-8') : t(`${byte} byte in UTF-8`, `${byte} bytes in UTF-8`) }), '.'),
        el('p', { text: ascii ? t('Tutti i simboli stanno in ASCII: in UTF-8 ognuno occupa un byte, uguale a quello di ASCII.', 'Every symbol is in ASCII: in UTF-8 each one takes one byte, the same as in ASCII.')
          : t('Alcuni simboli non stanno in ASCII, che ha solo i punti di codice fino a 127: in UTF-8 occupano più di un byte.', 'Some symbols are not in ASCII, which only has the code points up to 127: in UTF-8 they take more than one byte.') }));
    }
    ingresso.addEventListener('input', disegna);
    disegna();
  }

  /* ---------- colori: rosso, verde e blu ---------- */

  const NOMI_COLORI = [
    [t('nero', 'black'), 0, 0, 0], [t('bianco', 'white'), 255, 255, 255], [t('rosso', 'red'), 255, 0, 0], [t('verde', 'green'), 0, 255, 0],
    [t('blu', 'blue'), 0, 0, 255], [t('giallo', 'yellow'), 255, 255, 0], [t('ciano', 'cyan'), 0, 255, 255], [t('magenta', 'magenta'), 255, 0, 255],
    [t('grigio', 'grey'), 128, 128, 128], [t('arancione', 'orange'), 255, 128, 0]];

  function colori(fig) {
    const st = [dato(fig, 'r'), dato(fig, 'g'), dato(fig, 'b')].map(v => Math.max(0, Math.min(255, parseInt(v, 10) || 0)));
    const nomi = [t('Rosso', 'Red'), t('Verde', 'Green'), t('Blu', 'Blue')];
    const cursori = [], numeri = [];
    const righe = nomi.map((nome, k) => {
      const c = el('input', { type: 'range', min: '0', max: '255', step: '1', value: String(st[k]), 'aria-label': nome });
      const n = el('input', { type: 'number', min: '0', max: '255', value: String(st[k]), 'aria-label': nome });
      c.addEventListener('input', () => { st[k] = Number(c.value); disegna(); });
      n.addEventListener('input', () => { const v = Number(n.value); if (Number.isInteger(v) && v >= 0 && v <= 255) { st[k] = v; disegna(n); } });
      cursori.push(c); numeri.push(n);
      return el('div', { class: 'cd-cursore' }, el('span', { class: 'w-etichetta', text: nome }), c, n);
    });
    const campione = el('div', { class: 'cd-campione', role: 'img' });
    const bottoni = el('div', { class: 'w-chips' }, ...NOMI_COLORI.map(([nome, r, g, b]) => {
      const x = el('button', { type: 'button', class: 'btn', text: nome });
      x.addEventListener('click', () => { st[0] = r; st[1] = g; st[2] = b; disegna(); });
      return x;
    }));
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(el('div', { class: 'cd-colore' }, el('div', { class: 'cd-cursori' }, ...righe), campione), bottoni, lettura);

    function disegna(dalNumero) {
      st.forEach((v, k) => { cursori[k].value = String(v); if (numeri[k] !== dalNumero) numeri[k].value = String(v); });
      const [r, g, b] = st;
      campione.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      const esa = '#' + st.map(hex2).join('');
      const noto = NOMI_COLORI.find(([, a, c, d]) => a === r && c === g && d === b);
      campione.setAttribute('aria-label', t(`colore ${esa}`, `colour ${esa}`));
      const bit = el('span', { class: 'cd-bit' });
      st.forEach((v, k) => { if (k) bit.append(' '); bit.append(el('span', { class: 'cd-dati', text: bin(v, 8) })); });
      lettura.replaceChildren(
        el('p', {}, el('b', { text: `(${r}, ${g}, ${b})` }), ` · ${t('in esadecimale', 'in hexadecimal')} `, el('b', { text: esa }),
          noto ? ` · ${noto[0]}` : r === g && g === b ? ` · ${t('un grigio', 'a grey')}` : ''),
        el('p', {}, t('I 24 bit del pixel: ', 'The 24 bits of the pixel: '), bit),
        el('p', { class: 'w-nota', text: t('Ogni colore va da 0 a 255, cioè un byte: in tutto 256 · 256 · 256 = 16.777.216 colori.', 'Each colour goes from 0 to 255, that is one byte: 256 · 256 · 256 = 16,777,216 colours in all.') }));
    }
    disegna();
  }

  /* ---------- suono: campioni ---------- */

  function suono(fig) {
    const L = 560, A = 200, M = 14;                      // misure del disegno e margine
    const onda = x => 0.62 * Math.sin(2 * Math.PI * 1.5 * x) + 0.3 * Math.sin(2 * Math.PI * 4 * x + 0.6);   // x da 0 a 1
    const quanti = el('input', { type: 'range', min: '4', max: '64', step: '1', value: dato(fig, 'campioni', 'samples') || '16', 'aria-label': t('campioni nel disegno', 'samples in the drawing') });
    const bitSel = el('select', { 'aria-label': t('bit per campione', 'bits per sample') });
    for (const b of [2, 3, 4, 8]) bitSel.append(el('option', { value: String(b), text: `${b} ${t('bit', 'bits')} · ${2 ** b} ${t('livelli', 'levels')}` }));
    bitSel.value = dato(fig, 'bit', 'bits') || '3';
    if (!bitSel.value) bitSel.value = '3';
    const disegno = el('div', { class: 'cd-scorre' });
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    // conto dei byte
    const freq = el('select', { 'aria-label': t('campioni al secondo', 'samples per second') });
    for (const [v, nome] of [[8000, t('8000 (telefono)', '8000 (telephone)')], [22050, t('22 050', '22,050')], [44100, t('44 100 (CD)', '44,100 (CD)')], [48000, t('48 000 (video)', '48,000 (video)')]]) freq.append(el('option', { value: String(v), text: nome }));
    freq.value = '44100';
    const bitCampione = el('select', { 'aria-label': t('bit per campione', 'bits per sample') });
    for (const b of [8, 16, 24]) bitCampione.append(el('option', { value: String(b), text: `${b} ${t('bit', 'bits')}` }));
    bitCampione.value = '16';
    const canali = el('select', { 'aria-label': t('canali', 'channels') });
    canali.append(el('option', { value: '1', text: t('1 (mono)', '1 (mono)') }), el('option', { value: '2', text: t('2 (stereo)', '2 (stereo)') }));
    canali.value = '2';
    const minuti = el('input', { type: 'number', min: '1', max: '600', value: '60', 'aria-label': t('minuti', 'minutes') });
    const conto = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(
      el('div', { class: 'w-riga' }, el('div', { class: 'w-campo w-cursore' }, el('label', { text: t('Campioni nel disegno', 'Samples in the drawing') }), quanti), campo(t('Bit per campione', 'Bits per sample'), bitSel)),
      el('p', { class: 'w-aiuto', text: t('La linea grigia è l\'onda vera, i pallini sono i campioni, la linea a gradini è il suono che si ricostruisce tenendo ogni campione fino al successivo.',
        'The grey line is the real wave, the dots are the samples, the stepped line is the sound rebuilt by holding each sample until the next one.') }),
      disegno, lettura,
      el('p', { class: 'w-etichetta', text: t('Quanti byte occupa', 'How many bytes it takes') }),
      el('div', { class: 'w-riga' }, campo(t('Campioni al secondo', 'Samples per second'), freq), campo(t('Bit per campione', 'Bits per sample'), bitCampione),
        campo(t('Canali', 'Channels'), canali), campo(t('Minuti', 'Minutes'), minuti)),
      conto);

    const px = x => M + x * (L - 2 * M), py = y => A / 2 - y * (A / 2 - M);
    function disegna() {
      const n = Number(quanti.value), b = Number(bitSel.value), livelli = 2 ** b;
      const q = y => Math.round((y + 1) / 2 * (livelli - 1)) / (livelli - 1) * 2 - 1;   // il livello più vicino
      const s = sv('svg', { viewBox: `0 0 ${L} ${A}`, class: 'cd-svg', role: 'img',
        'aria-label': t(`Un'onda con ${n} campioni da ${b} bit`, `A wave with ${n} samples of ${b} bits`) });
      for (let k = 0; k < livelli && livelli <= 16; k++) {     // le righe dei livelli possibili, se non sono troppe
        const y = py(k / (livelli - 1) * 2 - 1);
        s.append(sv('line', { x1: M, x2: L - M, y1: y, y2: y, class: 'livello' }));
      }
      s.append(sv('line', { x1: M, x2: L - M, y1: py(0), y2: py(0), class: 'asse' }));
      const vera = [];
      for (let i = 0; i <= 240; i++) vera.push(`${px(i / 240).toFixed(1)},${py(onda(i / 240)).toFixed(1)}`);
      s.append(sv('polyline', { points: vera.join(' '), class: 'onda' }));
      const passi = [];
      let errore = 0;
      for (let k = 0; k < n; k++) {
        const x0 = k / n, x1 = (k + 1) / n, v = q(onda(x0));
        errore += Math.abs(v - onda((x0 + x1) / 2));
        passi.push(`${px(x0).toFixed(1)},${py(v).toFixed(1)} ${px(x1).toFixed(1)},${py(v).toFixed(1)}`);
      }
      s.append(sv('polyline', { points: passi.join(' '), class: 'ricostruito' }));
      for (let k = 0; k < n; k++) {
        const x = px(k / n), y = py(q(onda(k / n)));
        s.append(sv('line', { x1: x, x2: x, y1: py(0), y2: y, class: 'asta' }), sv('circle', { cx: x, cy: y, r: n > 32 ? 3 : 4.5, class: 'punto' }));
      }
      disegno.replaceChildren(s);
      const bitTotali = n * b;
      lettura.replaceChildren(
        el('p', {}, el('b', { text: t(`${n} campioni da ${b} bit`, `${n} samples of ${b} bits`) }),
          t(`: ogni campione può avere ${livelli} valori, e in tutto servono ${n} · ${b} = ${bitTotali} bit.`, `: each sample can take ${livelli} values, and ${n} · ${b} = ${bitTotali} bits are needed in all.`)),
        el('p', { class: 'w-nota', text: t(`Distanza media tra il suono ricostruito e l'onda vera: ${num(Math.round(errore / n * 1000) / 1000)}. Più campioni e più bit la fanno scendere, ma occupano più spazio.`,
          `Average distance between the rebuilt sound and the real wave: ${num(Math.round(errore / n * 1000) / 1000)}. More samples and more bits bring it down, but take more space.`) }));
      const f = Number(freq.value), c = Number(canali.value), bit = Number(bitCampione.value), m = Number(minuti.value);
      if (!Number.isInteger(m) || m < 1 || m > 600) { conto.replaceChildren(el('p', { class: 'w-errore', text: t('Scegli da 1 a 600 minuti.', 'Choose from 1 to 600 minutes.') })); return; }
      const alSecondo = f * (bit / 8) * c, tot = alSecondo * 60 * m;
      conto.replaceChildren(
        el('p', { text: t(`Ogni secondo: ${num(f)} · ${bit / 8} byte · ${c} = ${num(alSecondo)} byte.`, `Each second: ${num(f)} · ${bit / 8} ${bit === 8 ? 'byte' : 'bytes'} · ${c} = ${num(alSecondo)} bytes.`) }),
        el('p', {}, m === 1 ? t('In un minuto, cioè 60 secondi: ', 'In one minute, that is 60 seconds: ')
          : t(`In ${m} minuti, cioè ${num(60 * m)} secondi: `, `In ${m} minutes, that is ${num(60 * m)} seconds: `), el('b', { text: `${num(tot)} ${t('byte', 'bytes')}` }),
          t(`, circa ${mega(tot)} MB.`, `, about ${mega(tot)} MB.`)));
    }
    [quanti, bitSel, freq, bitCampione, canali, minuti].forEach(x => x.addEventListener('input', disegna));
    disegna();
  }

  /* ---------- binario: bit e valore delle posizioni ---------- */

  const mcd = (a, b) => (b ? mcd(b, a % b) : a);
  // un numero con al massimo 6 bit dopo la virgola: parte intera e frazione (numeratore, denominatore) ridotta
  function aParole(intero, numeratore, denominatore) {
    if (!numeratore) return String(intero);
    const g = mcd(numeratore, denominatore), fr = `${numeratore / g}/${denominatore / g}`;
    return intero ? t(`${intero} e ${fr}`, `${intero} and ${fr}`) : fr;
  }

  function binario(fig) {
    let tutti = (dato(fig, 'bit', 'bits') || '00100101').replace(/[^01]/g, '').slice(0, 16);
    const f = Math.max(0, Math.min(6, parseInt(dato(fig, 'frazioni', 'fractions') || '0', 10) || 0));
    if (tutti.length <= f) tutti = '0'.repeat(f + 1 - tutti.length) + tutti;
    const st = tutti.split('').map(Number), interi = st.length - f;
    const pesi = st.map((_, i) => interi - 1 - i);              // esponente del 2 di ogni posizione
    const aiuto = el('p', { class: 'w-aiuto', text: f ? t('Clicca su un bit per cambiarlo. Sopra ogni bit c\'è il valore della sua posizione: dopo la virgola 1/2, 1/4, 1/8…',
      'Click a bit to change it. Above each bit you see the value of its position: after the point 1/2, 1/4, 1/8…')
      : t('Clicca su un bit per cambiarlo. Sopra ogni bit c\'è il valore della sua posizione.', 'Click a bit to change it. Above each bit you see the value of its position.') });
    const riga = el('div', { class: 'cd-bits' });
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    const piu = el('button', { type: 'button', class: 'btn', text: '+ 1' });
    const meno = el('button', { type: 'button', class: 'btn', text: '− 1' });
    const zero = el('button', { type: 'button', class: 'btn', text: t('Tutti a 0', 'All 0') });
    fig.append(aiuto, el('div', { class: 'cd-scorre' }, riga), el('div', { class: 'w-riga' }, piu, meno, zero), lettura);

    const intero = () => st.slice(0, interi).reduce((v, b) => 2 * v + b, 0);
    const imposta = v => { for (let i = interi - 1; i >= 0; i--) { st[i] = v & 1; v = Math.floor(v / 2); } };
    let nota = '';
    piu.addEventListener('click', () => {
      const v = intero() + 1;
      nota = v === 2 ** interi ? t(`Con ${interi} bit dopo ${2 ** interi - 1} si torna a 0: è l'overflow.`, `With ${interi} bits, after ${2 ** interi - 1} you go back to 0: that is overflow.`) : '';
      imposta(v % 2 ** interi); disegna();
    });
    meno.addEventListener('click', () => {
      const v = intero() - 1;
      nota = v < 0 ? t(`Sotto lo 0 si torna a ${2 ** interi - 1}: gli interi senza segno non hanno numeri negativi.`, `Below 0 you go back to ${2 ** interi - 1}: unsigned integers have no negative numbers.`) : '';
      imposta((v + 2 ** interi) % 2 ** interi); disegna();
    });
    zero.addEventListener('click', () => { st.fill(0); nota = ''; disegna(); });

    function disegna(fuoco = -1) {
      const celle = [];
      st.forEach((b, i) => {
        if (i === interi && f) celle.push(el('div', { class: 'cd-colonnina' }, el('span', { class: 'cd-peso', text: '' }), el('span', { class: 'cd-virgola', text: en ? '.' : ',' })));
        const e = pesi[i];
        const bt = el('button', { type: 'button', class: 'pt-bit', text: String(b), 'aria-pressed': b ? 'true' : 'false',
          'aria-label': t(`bit che vale ${e >= 0 ? 2 ** e : '1/' + 2 ** -e}, ora ${b}`, `bit worth ${e >= 0 ? 2 ** e : '1/' + 2 ** -e}, now ${b}`) });
        bt.addEventListener('click', () => { st[i] = 1 - st[i]; nota = ''; disegna(i); });
        celle.push(el('div', { class: 'cd-colonnina' }, el('span', { class: 'cd-peso', text: e >= 0 ? String(2 ** e) : `1/${2 ** -e}` }), bt));
      });
      riga.replaceChildren(...celle);
      const voci = [];
      let numeratore = 0;
      st.forEach((b, i) => {
        if (!b) return;
        const e = pesi[i];
        voci.push(e >= 0 ? String(2 ** e) : `1/${2 ** -e}`);
        if (e < 0) numeratore += 2 ** (f + e);
      });
      const v = intero(), den = 2 ** f;
      const scritto = st.slice(0, interi).join('') + (f ? (en ? '.' : ',') + st.slice(interi).join('') : '');
      const decimale = v + numeratore / den;
      // 101,101 = 4 + 1 + 1/2 + 1/8 = 5 e 5/8 = 5,625, senza ripetere due volte la stessa cosa (00100000 = 32)
      const addendi = voci.join(' + ') || '0', parole = aParole(v, numeratore, den);
      const conto = el('p', {}, el('b', { text: scritto }));
      if (addendi !== parole) conto.append(` = ${addendi}`);
      conto.append(' = ', el('b', { text: parole }));
      if (numeratore) conto.append(` = ${num(decimale)}`);
      const frasi = [conto];
      if (!f && interi % 4 === 0) frasi.push(el('p', { class: 'w-nota', text: t(`In esadecimale: ${v.toString(16).toUpperCase().padStart(interi / 4, '0')}.`, `In hexadecimal: ${v.toString(16).toUpperCase().padStart(interi / 4, '0')}.`) }));
      if (nota) frasi.push(el('p', { class: 'cd-overflow', text: nota }));
      lettura.replaceChildren(...frasi);
      if (fuoco >= 0) riga.querySelectorAll('.pt-bit')[fuoco].focus();
    }
    if (f) { piu.hidden = true; meno.hidden = true; }
    disegna();
  }

  /* ---------- divisioni per 2 ---------- */

  function divisioni(fig) {
    const ingresso = el('input', { type: 'number', min: '0', max: '1000000', value: dato(fig, 'numero', 'number') || '13', 'aria-label': t('numero in base 10', 'number in base ten') });
    const tabella = el('div', { class: 'cd-scorre' });
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(el('div', { class: 'w-riga' }, campo(t('Numero in base 10', 'Number in base ten'), ingresso)), tabella, lettura);

    function disegna() {
      const n = Number(ingresso.value);
      if (!Number.isInteger(n) || n < 0 || n > 1000000) {
        tabella.replaceChildren();
        lettura.replaceChildren(el('p', { class: 'w-errore', text: t(`Scegli un intero da 0 a ${num(1e6)}.`, `Choose a whole number from 0 to ${num(1e6)}.`) }));
        return;
      }
      if (n === 0) { tabella.replaceChildren(); lettura.replaceChildren(el('p', { text: t('0 in binario è 0: non c\'è niente da dividere.', '0 in binary is 0: there is nothing to divide.') })); return; }
      const righe = [], resti = [];
      for (let x = n; x > 0; x = Math.floor(x / 2)) {
        resti.push(x % 2);
        righe.push(el('tr', {}, el('td', { text: `${num(x)} : 2` }), el('td', { text: num(Math.floor(x / 2)) }), el('td', { class: 'cd-dati', text: String(x % 2) })));
      }
      tabella.replaceChildren(el('table', { class: 'cd-tabella' },
        el('thead', {}, el('tr', {}, el('th', { text: t('Divisione', 'Division') }), el('th', { text: t('Quoziente', 'Quotient') }), el('th', { text: t('Resto', 'Remainder') }))),
        el('tbody', {}, ...righe)));
      const binarioLetto = resti.slice().reverse().join('');
      const somma = [];
      resti.forEach((r, k) => { if (r) somma.unshift(num(2 ** k)); });
      lettura.replaceChildren(
        el('p', {}, t('I resti dall\'ultimo al primo: ', 'The remainders from the last to the first: '), el('b', { class: 'cd-bit', text: binarioLetto }), '.'),
        el('p', { class: 'w-nota', text: t(`Controllo: ${somma.join(' + ')} = ${num(n)}.`, `Check: ${somma.join(' + ')} = ${num(n)}.`) }));
    }
    ingresso.addEventListener('input', disegna);
    disegna();
  }

  /* ---------- somma in colonna ---------- */

  function somma(fig) {
    const pulisci = s => (s || '').replace(/[^01]/g, '');
    const a = pulisci(dato(fig, 'a')) || '00111010', b = pulisci(dato(fig, 'b')) || '00011011';
    const n = Math.max(4, Math.min(12, Math.max(a.length, b.length)));   // tanti bit quanti ne ha il numero più lungo
    const leggi = s => s.slice(-n).padStart(n, '0').split('').map(Number);
    const A = leggi(a), B = leggi(b);
    const aiuto = el('p', { class: 'w-aiuto', text: t(`Clicca sui bit dei due numeri. La somma si fa colonna per colonna, da destra; nella prima riga ci sono i riporti. Con ${n} bit gli interi senza segno vanno da 0 a ${2 ** n - 1}.`,
      `Click the bits of the two numbers. The sum goes column by column, from the right; the first row holds the carries. With ${n} bits, unsigned integers go from 0 to ${2 ** n - 1}.`) });
    const tabella = el('div', { class: 'cd-scorre' });
    const lettura = el('div', { class: 'w-lettura', 'aria-live': 'polite' });
    fig.append(aiuto, tabella, lettura);
    const adatta = stringi(tabella);                             // su uno schermo stretto spariscono le etichette delle righe
    const valore = v => v.reduce((x, b) => 2 * x + b, 0);

    function disegna(fuoco = '') {
      const riporti = Array(n + 1).fill(0), s = Array(n).fill(0);
      for (let i = n - 1; i >= 0; i--) {
        const c = A[i] + B[i] + riporti[i + 1];
        s[i] = c % 2;
        riporti[i] = c >> 1;                                   // riporti[i] va nella colonna a sinistra di i
      }
      const fuori = riporti[0];
      const bottoni = (v, nome) => v.map((b, i) => {
        const bt = el('button', { type: 'button', class: 'pt-bit', text: String(b), 'aria-pressed': b ? 'true' : 'false', 'data-k': `${nome}${i}`,
          'aria-label': t(`${nome === 'a' ? 'primo' : 'secondo'} numero, bit ${i + 1} di ${n}, vale ${b}`, `${nome === 'a' ? 'first' : 'second'} number, bit ${i + 1} of ${n}, value ${b}`) });
        bt.addEventListener('click', () => { v[i] = 1 - v[i]; disegna(`${nome}${i}`); });
        return el('td', {}, bt);
      });
      const va = valore(A), vb = valore(B), vs = valore(s);
      // prima dei bit c'è una colonna in più: lì finisce il riporto dell'ultima colonna, che nel risultato non ha posto
      const riga = (nome, extra, celle, classe = '') => el('tr', { class: classe }, el('th', { text: nome }), extra, ...celle);
      const vuota = () => el('td', { class: 'cd-fuori' });
      tabella.replaceChildren(el('table', { class: 'cd-tabella cd-colonne' }, el('tbody', {},
        riga(t('riporti', 'carries'), el('td', { class: 'cd-fuori cd-riporto', text: fuori ? '1' : '' }),
          riporti.slice(1).map(r => el('td', { class: 'cd-riporto', text: r ? '1' : '' }))),
        riga(String(va), vuota(), bottoni(A, 'a')),
        riga(`+ ${vb}`, vuota(), bottoni(B, 'b')),
        riga(`= ${vs}`, el('td', fuori ? { class: 'cd-fuori cd-perso', text: '1', title: t('bit perso', 'lost bit') } : { class: 'cd-fuori' }),
          s.map(b => el('td', { class: 'cd-dati cd-somma', text: String(b) })), 'cd-totale'))));
      adatta();
      const frasi = [el('p', {}, `${va} + ${vb} = ${va + vb}`, ' · ', el('b', { class: 'cd-bit', text: (fuori ? '1' : '') + s.join('') }))];
      if (fuori) frasi.push(el('p', { class: 'cd-overflow', text: t(`Overflow: l'ultima colonna a sinistra dà un riporto che non ha posto. Con ${n} bit resta ${s.join('')}, cioè ${vs} invece di ${va + vb}: sbagliato di ${2 ** n}.`,
        `Overflow: the last column on the left gives a carry that has no room. With ${n} bits what is left is ${s.join('')}, that is ${vs} instead of ${va + vb}: wrong by ${2 ** n}.`) }));
      else frasi.push(el('p', { class: 'w-nota', text: t(`Nessun overflow: ${va + vb} sta in ${n} bit, che arrivano a ${2 ** n - 1}.`, `No overflow: ${va + vb} fits in ${n} bits, which go up to ${2 ** n - 1}.`) }));
      lettura.replaceChildren(...frasi);
      if (fuoco) { const b = tabella.querySelector(`[data-k="${fuoco}"]`); if (b) b.focus(); }
    }
    disegna();
  }

  const MODI = { testo, text: testo, colori, colours: colori, colors: colori, suono, sound: suono, binario, binary: binario,
    divisioni, divisions: divisioni, somma, addition: somma };
  document.querySelectorAll('figure.widget[data-widget="codifica"]').forEach(fig => {
    const carica = fig.querySelector('.widget-carica');
    if (carica) carica.remove();
    (MODI[fig.dataset.modo || fig.dataset.mode] || binario)(fig);
  });
})();
