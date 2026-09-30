// Strumenti interattivi delle lezioni di matematica: <figure class="widget" data-widget="…" data-…> generate da
// strumenti/lezioni.mjs. Piano complesso, vettori del piano, matrici 2×2 come trasformazioni, calcolatrice di Gauss
// con tutti i passaggi (frazioni esatte), Ruffini e radici razionali, vettori nello spazio in 3D.
// Le mosse di Gauss seguono le dispense del corso: Ri ↔ Rj, Ri → λRi, Ri → Ri + λRj; pA(λ) = det(A − λI).
(() => {
  'use strict';
  const en = (document.documentElement.lang || '').startsWith('en');
  const t = (it, eng) => (en ? eng : it);

  /* ---------- utilità del DOM ---------- */
  function el(tag, attr, ...figli) {
    const e = document.createElement(tag);
    for (const [k, v] of Object.entries(attr || {})) {
      if (v === false || v === null || v === undefined) continue;
      if (k === 'class') e.className = v;
      else if (k === 'text') e.textContent = v;
      else if (k === 'html') e.innerHTML = v;
      else if (k.startsWith('on')) e.addEventListener(k.slice(2), v);
      else e.setAttribute(k, v === true ? '' : v);
    }
    for (const f of figli.flat()) if (f !== null && f !== undefined && f !== false) e.append(f.nodeType ? f : document.createTextNode(String(f)));
    return e;
  }
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  let contatore = 0;
  const nuovoId = p => `${p}-${++contatore}`;
  const campo = (etichetta, input, classe = '') => {
    if (!input.id) input.id = nuovoId('w');
    return el('div', { class: 'w-campo ' + classe }, el('label', { for: input.id, text: etichetta }), input);
  };
  const scelta = (opzioni, valore) => {
    const s = el('select', {});
    for (const [v, testo] of opzioni) s.append(el('option', { value: v, text: testo, selected: v === valore }));
    return s;
  };

  /* ---------- numeri ---------- */
  const SEGNO = '−';
  function num(x, cifre = 2) {
    if (!Number.isFinite(x)) return '—';
    const r = Math.round(x);
    let s = Math.abs(x - r) < 1e-9 ? String(r) : String(+x.toFixed(cifre));
    if (s === '-0') s = '0';
    s = s.replace('-', SEGNO);
    return en ? s : s.replace('.', ',');
  }
  function angolo(th) {
    // gradi e, se è un multiplo «bello» di π, anche la frazione di π
    let g = th * 180 / Math.PI;
    if (Math.abs(g) < 1e-9) g = 0;
    let pi = '';
    for (const den of [1, 2, 3, 4, 6]) {
      const k = th * den / Math.PI;
      if (Math.abs(k - Math.round(k)) < 1e-7) {
        const n = Math.round(k);
        if (n === 0) { pi = '0'; break; }
        const s = n < 0 ? SEGNO : '', a = Math.abs(n);
        pi = den === 1 ? `${s}${a === 1 ? '' : a}π` : `${s}${a === 1 ? '' : a}π/${den}`;
        break;
      }
    }
    return `${num(g, 1)}°${pi && pi !== '0' ? ` = ${pi}` : ''}`;
  }
  function complesso(re, im) {
    if (Math.abs(re) < 1e-9) re = 0;
    if (Math.abs(im) < 1e-9) im = 0;
    const b = Math.abs(im) === 1 ? 'i' : `${num(Math.abs(im))}i`;
    if (!im) return num(re);
    if (!re) return (im < 0 ? SEGNO : '') + b;
    return `${num(re)} ${im < 0 ? SEGNO : '+'} ${b}`;
  }
  function leggiComplesso(s) {
    const x = String(s).replace(/\s+/g, '').replace(/−/g, '-').replace(/,/g, '.').replace(/j/g, 'i');
    if (!x) return null;
    const m = x.match(/^([+-]?(?:\d+(?:\.\d+)?|\.\d+))?(?:([+-])((?:\d+(?:\.\d+)?|\.\d+)?)\*?i)?$/);
    const soloI = x.match(/^([+-]?)((?:\d+(?:\.\d+)?|\.\d+)?)\*?i$/);
    if (soloI) return [0, (soloI[1] === '-' ? -1 : 1) * (soloI[2] ? Number(soloI[2]) : 1)];
    if (!m || (!m[1] && !m[2])) return null;
    const re = m[1] ? Number(m[1]) : 0;
    const im = m[2] ? (m[2] === '-' ? -1 : 1) * (m[3] ? Number(m[3]) : 1) : 0;
    return Number.isFinite(re) && Number.isFinite(im) ? [re, im] : null;
  }

  /* frazioni esatte con BigInt */
  const mcd = (a, b) => { a = a < 0n ? -a : a; b = b < 0n ? -b : b; while (b) [a, b] = [b, a % b]; return a; };
  class Q {
    constructor(n, d = 1n) {
      if (d === 0n) throw new Error(t('divisione per zero', 'division by zero'));
      if (d < 0n) { n = -n; d = -d; }
      const g = mcd(n, d) || 1n;
      this.n = n / g; this.d = d / g;
    }
    static int(k) { return new Q(BigInt(k)); }
    add(b) { return new Q(this.n * b.d + b.n * this.d, this.d * b.d); }
    sub(b) { return new Q(this.n * b.d - b.n * this.d, this.d * b.d); }
    mul(b) { return new Q(this.n * b.n, this.d * b.d); }
    div(b) { return new Q(this.n * b.d, this.d * b.n); }
    neg() { return new Q(-this.n, this.d); }
    get zero() { return this.n === 0n; }
    get uno() { return this.n === 1n && this.d === 1n; }
    eq(b) { return this.n === b.n && this.d === b.d; }
    get segno() { return this.n > 0n ? 1 : this.n < 0n ? -1 : 0; }
    abs() { return this.n < 0n ? this.neg() : this; }
    get val() { return Number(this.n) / Number(this.d); }
    toString() { const a = this.n < 0n ? -this.n : this.n; return (this.n < 0n ? SEGNO : '') + a + (this.d === 1n ? '' : '/' + this.d); }
  }
  const Q0 = Q.int(0), Q1 = Q.int(1);
  function leggiQ(s) {
    const x = String(s).trim().replace(/−/g, '-').replace(',', '.');
    let m = x.match(/^([+-]?\d+)\/([+-]?\d+)$/);
    if (m) { if (/^[+-]?0+$/.test(m[2])) throw new Error(t(`«${s}»: denominatore nullo`, `"${s}": zero denominator`)); return new Q(BigInt(m[1]), BigInt(m[2])); }
    m = x.match(/^([+-]?)(\d*)\.(\d+)$/);
    if (m) return new Q(BigInt(m[1] + (m[2] || '0') + m[3]), 10n ** BigInt(m[3].length));
    if (/^[+-]?\d+$/.test(x)) return new Q(BigInt(x));
    throw new Error(t(`«${s}» non è un numero (scrivi interi, frazioni come 3/4 o decimali come 0,5)`, `"${s}" is not a number (write integers, fractions such as 3/4 or decimals such as 0.5)`));
  }
  function leggiMatrice(testo) {
    const righe = String(testo).split(/[;\n]+/).map(r => r.trim()).filter(Boolean);
    if (!righe.length) throw new Error(t('scrivi almeno una riga', 'write at least one row'));
    const M = righe.map(r => r.split(/[\s]+|,(?=\s)|\t/).filter(Boolean).map(leggiQ));
    const n = M[0].length;
    if (M.some(r => r.length !== n)) throw new Error(t('le righe devono avere tutte lo stesso numero di elementi', 'all rows must have the same number of entries'));
    if (M.length > 8 || n > 9) throw new Error(t('al massimo 8 righe e 9 colonne', 'at most 8 rows and 9 columns'));
    return M;
  }
  const copia = M => M.map(r => r.slice());
  const pedice = k => String(k).split('').map(c => '₀₁₂₃₄₅₆₇₈₉'[+c]).join('');

  /* matrice in HTML (una griglia di <span>, così può stare dentro un paragrafo), con parentesi, riga verticale prima
     dei termini noti, righe appena cambiate e pivot evidenziati */
  function matriceHtml(M, { barra = 0, pivot = [], cambiate = [] } = {}) {
    const piv = new Set(pivot.map(([r, c]) => `${r},${c}`));
    const celle = M.map((r, i) => r.map((x, j) => {
      const cl = [barra && j === r.length - barra ? 'mx-barra' : '', piv.has(`${i},${j}`) ? 'mx-pivot' : '', cambiate.includes(i) ? 'mx-cambiata' : ''].filter(Boolean).join(' ');
      return `<span${cl ? ` class="${cl}"` : ''}>${esc(String(x))}</span>`;
    }).join('')).join('');
    return `<span class="mx"><span class="mx-g" style="grid-template-columns:repeat(${M[0].length},auto)">${celle}</span></span>`;
  }
  // un vettore di una base riscritto con numeri interi (moltiplicato per un numero positivo): (0, 1/2, 1) → (0, 1, 2)
  function intero(v) {
    let den = 1n, g = 0n;
    for (const x of v) den = den / mcd(den, x.d) * x.d;
    const k = v.map(x => x.n * (den / x.d));
    for (const x of k) g = mcd(g, x);
    return g ? k.map(x => new Q(x / g)) : v;
  }
  const vettoreHtml = v => matriceHtml(intero(v).map(x => [x]));

  /* ---------- algoritmo di Gauss (come nelle dispense) e Gauss–Jordan, con i passaggi ---------- */
  function mossaIII(i, lam, j) {
    // Ri → Ri + λRj, scritto come si fa a mano
    const s = lam.segno < 0 ? SEGNO : '+';
    const a = lam.abs();
    return `R${pedice(i + 1)} → R${pedice(i + 1)} ${s} ${a.uno ? '' : a + ' '}R${pedice(j + 1)}`;
  }
  function gauss(M0, { colonne = null, jordan = false } = {}) {
    const M = copia(M0);
    const m = M.length, n = M[0].length, fino = colonne ?? n;
    const passi = [], pivot = [];
    let r = 0, scambi = 0;
    for (let c = 0; c < fino && r < m; c++) {
      let p = r;
      while (p < m && M[p][c].zero) p++;
      if (p === m) continue;                           // colonna nulla: si passa alla successiva
      if (p !== r) {
        [M[p], M[r]] = [M[r], M[p]];
        scambi++;
        passi.push({ mossa: `R${pedice(r + 1)} ↔ R${pedice(p + 1)}`, M: copia(M), cambiate: [r, p] });
      }
      const cambiate = [], mosse = [];
      for (let i = r + 1; i < m; i++) {
        if (M[i][c].zero) continue;
        const lam = M[i][c].div(M[r][c]).neg();
        M[i] = M[i].map((x, k) => x.add(lam.mul(M[r][k])));
        mosse.push(mossaIII(i, lam, r));
        cambiate.push(i);
      }
      if (mosse.length) passi.push({ mossa: mosse.join(', '), M: copia(M), cambiate });
      pivot.push([r, c]);
      r++;
    }
    const scala = copia(M);
    if (jordan) {
      for (const [k, c] of pivot) {
        const cambiate = [], mosse = [];
        for (let i = 0; i < k; i++) {
          if (M[i][c].zero) continue;
          const lam = M[i][c].div(M[k][c]).neg();
          M[i] = M[i].map((x, q) => x.add(lam.mul(M[k][q])));
          mosse.push(mossaIII(i, lam, k));
          cambiate.push(i);
        }
        if (mosse.length) passi.push({ mossa: mosse.join(', '), M: copia(M), cambiate, fase: 2 });
      }
      const cambiate = [], mosse = [];
      for (const [k, c] of pivot) {
        if (M[k][c].uno) continue;
        const lam = Q1.div(M[k][c]);
        M[k] = M[k].map(x => x.mul(lam));
        mosse.push(`R${pedice(k + 1)} → ${lam.eq(Q.int(-1)) ? SEGNO : lam + ' '}R${pedice(k + 1)}`);
        cambiate.push(k);
      }
      if (mosse.length) passi.push({ mossa: mosse.join(', '), M: copia(M), cambiate, fase: 2 });
    }
    return { M, scala, pivot, scambi, passi };
  }
  function nucleo(R, pivot, n) {
    // R ridotta con Gauss–Jordan: una base del nucleo, un vettore per ogni variabile libera
    const colPivot = new Map(pivot.map(([r, c]) => [c, r]));
    const libere = [];
    for (let c = 0; c < n; c++) if (!colPivot.has(c)) libere.push(c);
    return { libere, base: libere.map(f => {
      const v = Array.from({ length: n }, () => Q0);
      v[f] = Q1;
      for (const [c, r] of colPivot) if (c < n) v[c] = R[r][f].neg();
      return v;
    }) };
  }

  /* polinomi a coefficienti razionali (coefficienti dal grado 0 in su) */
  const polTrim = p => { const q = p.slice(); while (q.length > 1 && q[q.length - 1].zero) q.pop(); return q; };
  const polMul = (a, b) => { const r = Array.from({ length: a.length + b.length - 1 }, () => Q0); a.forEach((x, i) => b.forEach((y, j) => { r[i + j] = r[i + j].add(x.mul(y)); })); return polTrim(r); };
  const polAdd = (a, b) => polTrim(Array.from({ length: Math.max(a.length, b.length) }, (_, i) => (a[i] || Q0).add(b[i] || Q0)));
  function polValuta(p, x) { let s = Q0; for (let i = p.length - 1; i >= 0; i--) s = s.mul(x).add(p[i]); return s; }
  function polStr(p, v = 'x') {
    const parti = [];
    for (let i = p.length - 1; i >= 0; i--) {
      const c = p[i];
      if (c.zero) continue;
      const a = c.abs();
      const coeff = i === 0 ? String(a) : a.uno ? '' : (a.d !== 1n ? `(${a})` : String(a));
      const pot = i === 0 ? '' : i === 1 ? v : v + String(i).split('').map(d => '⁰¹²³⁴⁵⁶⁷⁸⁹'[+d]).join('');
      parti.push({ s: c.segno < 0 ? SEGNO : '+', t: coeff + pot });
    }
    if (!parti.length) return '0';
    return parti.map((q, k) => (k === 0 ? (q.s === '+' ? '' : SEGNO) : ` ${q.s} `) + q.t).join('');
  }
  function divisori(k) {
    k = k < 0n ? -k : k;
    const d = [];
    for (let i = 1n; i * i <= k && i <= 100000n; i++) if (k % i === 0n) { d.push(i); if (i * i !== k) d.push(k / i); }
    return d;
  }
  function radiciRazionali(p0) {
    // candidati ±(divisori del termine noto)/(divisori del coefficiente direttivo), dopo aver tolto i denominatori
    let p = polTrim(p0);
    const radici = [];
    while (p.length > 1 && p[0].zero) { radici.push(Q0); p = p.slice(1); }
    if (p.length <= 1) return { radici, resto: p };
    let den = 1n;
    for (const c of p) den = den / mcd(den, c.d) * c.d;
    const intero = p.map(c => c.n * (den / c.d));
    const cand = [];
    for (const a of divisori(intero[0])) for (const b of divisori(intero[intero.length - 1])) { cand.push(new Q(a, b)); cand.push(new Q(-a, b)); }
    const visti = new Set();
    for (const c of cand) {
      const k = String(c);
      if (visti.has(k)) continue;
      visti.add(k);
      while (p.length > 1 && polValuta(p, c).zero) { radici.push(c); p = ruffini(p, c).quoziente; }
    }
    return { radici, resto: p };
  }
  function ruffini(p, a) {
    // p dal grado 0 in su; restituisce quoziente (dal grado 0) e resto, più le righe della tabella
    const alto = p.slice().reverse();
    const giu = [alto[0]], prodotti = [null];
    for (let i = 1; i < alto.length; i++) { const pr = giu[i - 1].mul(a); prodotti.push(pr); giu.push(alto[i].add(pr)); }
    const resto = giu[giu.length - 1];
    return { quoziente: giu.slice(0, -1).reverse(), resto, alto, prodotti, giu };
  }
  function radiceQuadrata(q) {
    // √(n/d) = (k/d)·√s con s senza fattori quadrati: [k/d, s]
    if (q.segno < 0) return null;
    let m = q.n * q.d, k = 1n;
    for (let f = 2n; f * f <= m && f < 100000n; f++) while (m % (f * f) === 0n) { m /= f * f; k *= f; }
    return [new Q(k, q.d), m];
  }
  function radiciSecondoGrado(p) {
    // p = [c, b, a]: radici esatte (anche irrazionali o complesse) come testo
    const [c, b, a] = p;
    const delta = b.mul(b).sub(Q.int(4).mul(a).mul(c));
    const meno = b.neg().div(Q.int(2).mul(a));
    if (delta.zero) return { tipo: 'doppia', testi: [String(meno)], valori: [meno.val], razionali: [meno, meno] };
    const r = radiceQuadrata(delta.abs());
    const fattore = r[0].div(Q.int(2).mul(a)).abs();
    if (r[1] === 1n && delta.segno > 0) {
      const x1 = meno.add(fattore), x2 = meno.sub(fattore);
      return { tipo: 'razionali', testi: [String(x1), String(x2)], valori: [x1.val, x2.val], razionali: [x1, x2] };
    }
    // parte = q·√s, con q tra parentesi se è una frazione: 3/2 + (1/2)√5
    const q = fattore.uno ? '' : fattore.d !== 1n ? `(${fattore})` : String(fattore);
    const rad = r[1] === 1n ? '' : `√${r[1]}`;
    const coppia = parte => [`${meno.zero ? '' : meno + ' + '}${parte}`, `${meno.zero ? SEGNO : meno + ` ${SEGNO} `}${parte}`];
    if (delta.segno > 0) {
      const v = Math.sqrt(delta.val) / (2 * Math.abs(a.val));
      return { tipo: 'irrazionali', testi: coppia(`${q}${rad}`), valori: [meno.val + v, meno.val - v] };
    }
    return { tipo: 'complesse', testi: coppia(`${q}${rad ? rad + ' ' : ''}i`.replace(/^i$/, 'i')), valori: [] };
  }

  /* ---------- tela con coordinate del piano, punti trascinabili, colori del tema ---------- */
  function colori() {
    const s = getComputedStyle(document.documentElement);
    const c = n => s.getPropertyValue(n).trim() || '#888';
    return { accento: c('--accent'), blu: c('--blue'), ambra: c('--amber'), rosa: c('--rose'), verde: c('--green'), viola: c('--violet'),
      testo: c('--text'), testo2: c('--text-2'), testo3: c('--text-3'), linea: c('--line-2'), griglia: c('--grid'), fondo: c('--code-bg') };
  }
  class Tela {
    constructor(padre, { x = [-5, 5], y = [-5, 5], passo = 0.5, disegna }) {
      this.x = x; this.y = y; this.passo = passo; this.disegna = disegna; this.punti = [];
      this.canvas = el('canvas', { class: 'w-tela', role: 'img' });
      padre.append(this.canvas);
      this.ctx = this.canvas.getContext('2d');
      const ridisegna = () => this.ridisegna();
      if ('ResizeObserver' in window) new ResizeObserver(ridisegna).observe(this.canvas);
      window.addEventListener('resize', ridisegna);
      window.addEventListener('appunti:tema', ridisegna);
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(ridisegna);
      let preso = null;
      const pos = e => { const r = this.canvas.getBoundingClientRect(); return [this.mx(e.clientX - r.left), this.my(e.clientY - r.top)]; };
      this.canvas.addEventListener('pointerdown', e => {
        const [px, py] = pos(e);
        let meglio = null, dist = (e.pointerType === 'touch' ? 26 : 16) / this.scala;
        for (const p of this.punti) { if (p.attivo === false) continue; const [qx, qy] = p.get(); const d = Math.hypot(qx - px, qy - py); if (d < dist) { dist = d; meglio = p; } }
        if (!meglio) return;
        preso = meglio;
        this.canvas.setPointerCapture(e.pointerId);
        e.preventDefault();
      });
      this.canvas.addEventListener('pointermove', e => {
        if (!preso) {
          const [px, py] = pos(e);
          const vicino = this.punti.some(p => { if (p.attivo === false) return false; const [qx, qy] = p.get(); return Math.hypot(qx - px, qy - py) < 16 / this.scala; });
          this.canvas.style.cursor = vicino ? 'grab' : '';
          return;
        }
        const [px, py] = pos(e);
        const s = this.passo, lim = (v, [a, b]) => Math.min(b, Math.max(a, v));
        preso.set(lim(Math.round(px / s) * s, this.x), lim(Math.round(py / s) * s, this.y));
        this.canvas.style.cursor = 'grabbing';
      });
      const lascia = () => { preso = null; this.canvas.style.cursor = ''; };
      this.canvas.addEventListener('pointerup', lascia);
      this.canvas.addEventListener('pointercancel', lascia);
    }
    X(x) { return (x - this.x[0]) * this.scala; }
    Y(y) { return (this.y[1] - y) * this.scala; }
    mx(px) { return px / this.scala + this.x[0]; }
    my(py) { return this.y[1] - py / this.scala; }
    ridisegna() {
      const w = Math.max(200, this.canvas.clientWidth || 300);
      this.scala = w / (this.x[1] - this.x[0]);
      const h = Math.round((this.y[1] - this.y[0]) * this.scala);
      this.canvas.style.height = h + 'px';
      const dpr = Math.min(3, window.devicePixelRatio || 1);
      if (this.canvas.width !== Math.round(w * dpr) || this.canvas.height !== Math.round(h * dpr)) { this.canvas.width = Math.round(w * dpr); this.canvas.height = Math.round(h * dpr); }
      const c = this.ctx;
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      this.c = colori();
      c.fillStyle = this.c.fondo; c.fillRect(0, 0, w, h);
      this.w = w; this.h = h;
      this.griglia();
      this.disegna(this);
    }
    griglia() {
      const c = this.ctx, k = this.c;
      c.lineWidth = 1; c.strokeStyle = k.griglia;
      c.beginPath();
      for (let v = Math.ceil(this.x[0]); v <= this.x[1]; v++) { c.moveTo(this.X(v) + .5, 0); c.lineTo(this.X(v) + .5, this.h); }
      for (let v = Math.ceil(this.y[0]); v <= this.y[1]; v++) { c.moveTo(0, this.Y(v) + .5); c.lineTo(this.w, this.Y(v) + .5); }
      c.stroke();
      c.strokeStyle = k.testo3; c.lineWidth = 1.2;
      c.beginPath(); c.moveTo(0, this.Y(0)); c.lineTo(this.w, this.Y(0)); c.moveTo(this.X(0), 0); c.lineTo(this.X(0), this.h); c.stroke();
      c.fillStyle = k.testo3; c.font = '11px "Plex Mono", ui-monospace, monospace'; c.textAlign = 'center'; c.textBaseline = 'top';
      const salto = this.scala < 26 ? 2 : 1;
      for (let v = Math.ceil(this.x[0]); v <= this.x[1]; v++) if (v && v % salto === 0 && v > this.x[0] && v < this.x[1]) c.fillText(num(v), this.X(v), this.Y(0) + 4);
      c.textAlign = 'right'; c.textBaseline = 'middle';
      for (let v = Math.ceil(this.y[0]); v <= this.y[1]; v++) if (v && v % salto === 0 && v > this.y[0] && v < this.y[1]) c.fillText(num(v), this.X(0) - 5, this.Y(v));
    }
    freccia(x0, y0, x1, y1, colore, { spessore = 2.4, tratteggio = false } = {}) {
      const c = this.ctx, a = this.X(x0), b = this.Y(y0), p = this.X(x1), q = this.Y(y1);
      const L = Math.hypot(p - a, q - b);
      c.strokeStyle = colore; c.fillStyle = colore; c.lineWidth = spessore; c.setLineDash(tratteggio ? [6, 5] : []);
      if (L < 1) { c.setLineDash([]); return; }
      const ux = (p - a) / L, uy = (q - b) / L, punta = Math.min(12, L * 0.45);
      c.beginPath(); c.moveTo(a, b); c.lineTo(p - ux * punta * 0.8, q - uy * punta * 0.8); c.stroke();
      c.setLineDash([]);
      c.beginPath(); c.moveTo(p, q); c.lineTo(p - ux * punta - uy * punta * 0.45, q - uy * punta + ux * punta * 0.45); c.lineTo(p - ux * punta + uy * punta * 0.45, q - uy * punta - ux * punta * 0.45); c.closePath(); c.fill();
    }
    segmento(x0, y0, x1, y1, colore, { spessore = 1.4, tratteggio = true } = {}) {
      const c = this.ctx;
      c.strokeStyle = colore; c.lineWidth = spessore; c.setLineDash(tratteggio ? [5, 5] : []);
      c.beginPath(); c.moveTo(this.X(x0), this.Y(y0)); c.lineTo(this.X(x1), this.Y(y1)); c.stroke(); c.setLineDash([]);
    }
    retta(px, py, dx, dy, colore, opz) { const k = 100; this.segmento(px - k * dx, py - k * dy, px + k * dx, py + k * dy, colore, opz); }
    punto(x, y, colore, r = 5) {
      const c = this.ctx;
      c.fillStyle = colore; c.strokeStyle = this.c.fondo; c.lineWidth = 2;
      c.beginPath(); c.arc(this.X(x), this.Y(y), r, 0, 2 * Math.PI); c.fill(); c.stroke();
    }
    maniglia(x, y, colore) {
      const c = this.ctx;
      c.strokeStyle = colore; c.lineWidth = 1.5; c.setLineDash([2, 3]);
      c.beginPath(); c.arc(this.X(x), this.Y(y), 11, 0, 2 * Math.PI); c.stroke(); c.setLineDash([]);
      this.punto(x, y, colore, 5.5);
    }
    poligono(pts, colore, alfa = 0.18) {
      const c = this.ctx;
      c.save(); c.globalAlpha = alfa; c.fillStyle = colore;
      c.beginPath(); pts.forEach(([x, y], i) => (i ? c.lineTo(this.X(x), this.Y(y)) : c.moveTo(this.X(x), this.Y(y)))); c.closePath(); c.fill();
      c.restore();
    }
    cerchio(x, y, r, colore, { tratteggio = true, spessore = 1.2 } = {}) {
      const c = this.ctx;
      c.strokeStyle = colore; c.lineWidth = spessore; c.setLineDash(tratteggio ? [4, 5] : []);
      c.beginPath(); c.arc(this.X(x), this.Y(y), r * this.scala, 0, 2 * Math.PI); c.stroke(); c.setLineDash([]);
    }
    arco(r, t0, t1, colore) {
      const c = this.ctx;
      c.strokeStyle = colore; c.lineWidth = 1.6;
      c.beginPath(); c.arc(this.X(0), this.Y(0), r * this.scala, -t0, -t1, t1 > t0); c.stroke();
    }
    testo(s, x, y, colore, { dx = 8, dy = -8, allinea = 'left', grassetto = true } = {}) {
      const c = this.ctx;
      c.font = `${grassetto ? 600 : 500} 13.5px "Plex Sans", system-ui, sans-serif`;
      c.textAlign = allinea; c.textBaseline = 'middle';
      let px = this.X(x) + dx, py = this.Y(y) + dy;
      const w = c.measureText(s).width;
      if (allinea === 'left' && px + w > this.w - 4) px = this.X(x) - dx - w;
      px = Math.max(4, px); py = Math.min(this.h - 10, Math.max(10, py));
      c.lineWidth = 4; c.strokeStyle = this.c.fondo; c.strokeText(s, allinea === 'left' ? px : px, py);
      c.fillStyle = colore; c.fillText(s, px, py);
    }
    dentro(x, y) { return x >= this.x[0] && x <= this.x[1] && y >= this.y[0] && y <= this.y[1]; }
  }
  const lettura = () => el('div', { class: 'w-lettura', 'aria-live': 'polite' });
  const riga = (...figli) => el('div', { class: 'w-riga' }, ...figli);
  const leggiCoppia = (s, def) => { const v = String(s || '').replace(/,/g, '.').trim().split(/[\s;]+/).map(Number); return v.length === 2 && v.every(Number.isFinite) ? v : def; };

  /* ---------- 1. piano complesso ---------- */
  function complessi(fig) {
    const d = fig.dataset;
    const R = Number(d.raggio) || 4;
    let z = leggiComplesso(d.z || '1+2i') || [1, 2], w = leggiComplesso(d.w || '2-i') || [2, -1];
    let modo = d.modo || 'somma', n = Math.min(8, Math.max(2, Number(d.n) || 3));
    const modi = [['somma', 'z + w'], ['prodotto', 'z · w'], ['coniugato', t('coniugato e inverso di z', 'conjugate and inverse of z')],
      ['potenza', t('potenze zⁿ', 'powers zⁿ')], ['radici', t('radici n-esime di z', 'n-th roots of z')]];
    const selModo = scelta((d.modi ? modi.filter(([k]) => d.modi.split(/[\s,]+/).includes(k)) : modi), modo);
    const inZ = el('input', { type: 'text', inputmode: 'text', value: complesso(...z).replace(/\s/g, ''), spellcheck: 'false', autocomplete: 'off' });
    const inW = el('input', { type: 'text', inputmode: 'text', value: complesso(...w).replace(/\s/g, ''), spellcheck: 'false', autocomplete: 'off' });
    const inN = el('input', { type: 'number', min: '2', max: '8', step: '1', value: String(n) });
    const campoW = campo('w', inW), campoN = campo('n', inN);
    const out = lettura();
    const tela = new Tela(fig, { x: [-R, R], y: [-R, R], passo: Number(d.passo) || 0.5, disegna });
    fig.append(riga(campo(t('modo', 'mode'), selModo), campo('z', inZ), campoW, campoN), out);
    const polare = ([a, b]) => [Math.hypot(a, b), Math.atan2(b, a)];
    tela.punti = [{ get: () => z, set: (x, y) => { z = [x, y]; inZ.value = complesso(x, y).replace(/\s/g, ''); tela.ridisegna(); } },
      { get: () => w, set: (x, y) => { w = [x, y]; inW.value = complesso(x, y).replace(/\s/g, ''); tela.ridisegna(); }, solo: () => modo === 'somma' || modo === 'prodotto' }];
    function disegna(T) {
      const k = T.c;
      campoW.hidden = !(modo === 'somma' || modo === 'prodotto');
      campoN.hidden = !(modo === 'potenza' || modo === 'radici');
      T.punti.forEach(p => { p.attivo = !p.solo || p.solo(); });
      T.cerchio(0, 0, 1, k.testo3);
      T.testo(t('asse reale', 'real axis'), T.x[1], 0, k.testo3, { dx: -6, dy: -12, allinea: 'right', grassetto: false });
      T.testo(t('asse immaginario', 'imaginary axis'), 0, T.y[1], k.testo3, { dx: 8, dy: 12, grassetto: false });
      const [rz, tz] = polare(z);
      let righe = [`<b>z</b> = ${complesso(...z)} · |z| = ${num(rz)} · arg z = ${rz ? angolo(tz) : '—'}`];
      const fuori = [];
      const mostra = (p, colore, nome) => { if (!T.dentro(...p)) fuori.push(nome); T.freccia(0, 0, p[0], p[1], colore); T.testo(nome, p[0], p[1], colore); };
      if (modo === 'somma' || modo === 'prodotto') {
        const [rw, tw] = polare(w);
        righe.push(`<b>w</b> = ${complesso(...w)} · |w| = ${num(rw)} · arg w = ${rw ? angolo(tw) : '—'}`);
        if (modo === 'somma') {
          const s = [z[0] + w[0], z[1] + w[1]];
          T.poligono([[0, 0], z, s, w], k.ambra, 0.1);
          T.segmento(z[0], z[1], s[0], s[1], k.blu); T.segmento(w[0], w[1], s[0], s[1], k.accento);
          mostra(s, k.ambra, 'z + w');
          righe.push(`<b>z + w</b> = (${num(z[0])} + ${num(w[0])}) + (${num(z[1])} + ${num(w[1])})i = <b>${complesso(...s)}</b> · ${t('regola del parallelogramma: si sommano le parti reali e le parti immaginarie', 'parallelogram rule: add the real parts and the imaginary parts')}`);
        } else {
          const p = [z[0] * w[0] - z[1] * w[1], z[0] * w[1] + z[1] * w[0]];
          if (rz) T.arco(0.55, 0, tz, k.accento);
          if (rw) T.arco(0.75, 0, tw, k.blu);
          if (rz && rw) T.arco(0.95, 0, tz + tw, k.ambra);
          mostra(p, k.ambra, 'z · w');
          righe.push(`<b>z · w</b> = <b>${complesso(...p)}</b> · |z·w| = |z|·|w| = ${num(rz)} · ${num(rw)} = ${num(rz * rw)} · arg = arg z + arg w = ${rz && rw ? angolo(tz + tw) : '—'} · ${t('i moduli si moltiplicano, gli angoli si sommano', 'moduli multiply, angles add up')}`);
        }
        T.freccia(0, 0, w[0], w[1], k.blu); T.testo('w', w[0], w[1], k.blu); T.maniglia(w[0], w[1], k.blu);
      } else if (modo === 'coniugato') {
        const c = [z[0], -z[1]];
        T.segmento(z[0], z[1], c[0], c[1], k.testo3);
        mostra(c, k.viola, 'z̄');
        if (rz > 1e-9) {
          const inv = [z[0] / (rz * rz), -z[1] / (rz * rz)];
          mostra(inv, k.ambra, '1/z');
          righe.push(`<b>z̄</b> = ${complesso(...c)} (${t('simmetrico rispetto all\'asse reale', 'mirror image in the real axis')}) · <b>1/z</b> = z̄ / |z|² = ${complesso(...inv)} · |1/z| = 1/|z| = ${num(1 / rz)}, arg(1/z) = ${angolo(-tz)}`);
        } else righe.push(t('z = 0 non ha inverso.', 'z = 0 has no inverse.'));
      } else if (modo === 'potenza') {
        let p = [1, 0];
        const pts = [];
        for (let j = 1; j <= n; j++) { p = [p[0] * z[0] - p[1] * z[1], p[0] * z[1] + p[1] * z[0]]; pts.push(p); }
        pts.slice(0, -1).forEach((q, j) => { T.punto(q[0], q[1], k.testo3, 3.5); T.testo(`z${'⁰¹²³⁴⁵⁶⁷⁸⁹'[j + 1]}`, q[0], q[1], k.testo3, { grassetto: false }); });
        mostra(pts[n - 1], k.ambra, `z${'⁰¹²³⁴⁵⁶⁷⁸⁹'[n]}`);
        righe.push(`<b>z${'⁰¹²³⁴⁵⁶⁷⁸⁹'[n]}</b> = ${complesso(...pts[n - 1])} · ${t('modulo', 'modulus')} |z|${'⁰¹²³⁴⁵⁶⁷⁸⁹'[n]} = ${num(Math.pow(rz, n))} · ${t('argomento', 'argument')} ${n}·arg z = ${rz ? angolo(n * tz) : '—'}`);
      } else if (modo === 'radici') {
        const r = Math.pow(rz, 1 / n), pts = [];
        for (let j = 0; j < n; j++) { const a = tz / n + 2 * Math.PI * j / n; pts.push([r * Math.cos(a), r * Math.sin(a)]); }
        if (rz > 1e-9) {
          T.poligono(pts, k.ambra, 0.12);
          T.cerchio(0, 0, r, k.ambra);
          pts.forEach((q, j) => { T.segmento(0, 0, q[0], q[1], k.ambra, { spessore: 1 }); T.punto(q[0], q[1], k.ambra, 5); T.testo(`w${pedice(j)}`, q[0], q[1], k.ambra); });
          righe.push(`${t('Le', 'The')} ${n} ${t('radici di', 'roots of')} w${'⁰¹²³⁴⁵⁶⁷⁸⁹'[n]} = z ${t('hanno modulo', 'have modulus')} ${n === 2 ? '√' : `${n}√`}|z| = ${num(r, 3)} ${t('e argomenti', 'and arguments')} (arg z + 2kπ)/${n}, k = 0, …, ${n - 1}: ${t('sono i vertici di un poligono regolare con', 'they are the vertices of a regular polygon with')} ${n} ${t('lati', 'sides')}.`);
          righe.push(pts.map((q, j) => `w${pedice(j)} = ${complesso(q[0], q[1])}`).join(' · '));
        } else righe.push(t('Con z = 0 l\'unica radice è 0.', 'With z = 0 the only root is 0.'));
      }
      T.freccia(0, 0, z[0], z[1], k.accento); T.testo('z', z[0], z[1], k.accento); T.maniglia(z[0], z[1], k.accento);
      if (fuori.length) righe.push(`<span class="w-nota">${fuori.join(', ')} ${t('esce dal disegno', 'is outside the picture')}</span>`);
      out.innerHTML = righe.map(r => `<p>${r}</p>`).join('');
      T.canvas.setAttribute('aria-label', t('Piano complesso: ', 'Complex plane: ') + out.textContent);
    }
    const aggiorna = () => tela.ridisegna();
    selModo.addEventListener('change', () => { modo = selModo.value; aggiorna(); });
    inZ.addEventListener('change', () => { const v = leggiComplesso(inZ.value); if (v) z = v; inZ.value = complesso(...z).replace(/\s/g, ''); aggiorna(); });
    inW.addEventListener('change', () => { const v = leggiComplesso(inW.value); if (v) w = v; inW.value = complesso(...w).replace(/\s/g, ''); aggiorna(); });
    inN.addEventListener('change', () => { n = Math.min(8, Math.max(2, Math.round(Number(inN.value)) || 3)); inN.value = String(n); aggiorna(); });
    tela.ridisegna();
  }

  /* ---------- 2. vettori del piano ---------- */
  function vettori(fig) {
    const d = fig.dataset;
    const R = Number(d.raggio) || 5;
    let u = leggiCoppia(d.u, [3, 1]), v = leggiCoppia(d.v, [1, 2]);
    let modo = d.modo || 'somma', lam = Number(d.lambda) || 2, mu = Number(d.mu) || 1;
    const modi = [['somma', 'u + v'], ['multiplo', t('multiplo λu', 'multiple λu')], ['combinazione', t('combinazione λu + μv', 'combination λu + μv')],
      ['scalare', t('prodotto scalare e proiezione', 'dot product and projection')]];
    const selModo = scelta(d.modi ? modi.filter(([k]) => d.modi.split(/[\s,]+/).includes(k)) : modi, modo);
    const cursore = (val) => el('input', { type: 'range', min: '-3', max: '3', step: '0.25', value: String(val) });
    const inL = cursore(lam), inM = cursore(mu);
    const campoL = campo('λ', inL, 'w-cursore'), campoM = campo('μ', inM, 'w-cursore');
    const out = lettura();
    const tela = new Tela(fig, { x: [-R, R], y: [-R, R], passo: Number(d.passo) || 0.5, disegna });
    fig.append(riga(campo(t('modo', 'mode'), selModo), campoL, campoM), out);
    tela.punti = [{ get: () => u, set: (x, y) => { u = [x, y]; tela.ridisegna(); } }, { get: () => v, set: (x, y) => { v = [x, y]; tela.ridisegna(); } }];
    const cop = ([a, b]) => `(${num(a)}, ${num(b)})`;
    function disegna(T) {
      const k = T.c;
      campoL.hidden = !(modo === 'multiplo' || modo === 'combinazione');
      campoM.hidden = modo !== 'combinazione';
      campoL.querySelector('label').textContent = `λ = ${num(lam)}`;
      campoM.querySelector('label').textContent = `μ = ${num(mu)}`;
      const righe = [`<b>u</b> = ${cop(u)} · <b>v</b> = ${cop(v)}`];
      const det = u[0] * v[1] - u[1] * v[0];
      if (modo === 'somma') {
        const s = [u[0] + v[0], u[1] + v[1]];
        T.poligono([[0, 0], u, s, v], k.ambra, 0.1);
        T.segmento(u[0], u[1], s[0], s[1], k.blu); T.segmento(v[0], v[1], s[0], s[1], k.accento);
        T.freccia(0, 0, s[0], s[1], k.ambra); T.testo('u + v', s[0], s[1], k.ambra);
        righe.push(`<b>u + v</b> = (${num(u[0])} + ${num(v[0])}, ${num(u[1])} + ${num(v[1])}) = <b>${cop(s)}</b> · ${t('componente per componente: è la diagonale del parallelogramma', 'component by component: it is the diagonal of the parallelogram')}`);
      } else if (modo === 'multiplo') {
        if (u[0] || u[1]) T.retta(0, 0, u[0], u[1], k.testo3, { spessore: 1 });
        const p = [lam * u[0], lam * u[1]];
        T.freccia(0, 0, p[0], p[1], k.ambra, { spessore: 3.2 }); T.testo('λu', p[0], p[1], k.ambra, { dy: 12 });
        righe.push(`<b>λu</b> = ${num(lam)} · ${cop(u)} = <b>${cop(p)}</b> · ${lam < 0 ? t('λ < 0: il verso si inverte', 'λ < 0: the direction is reversed') : lam === 0 ? t('λ = 0: si ottiene il vettore nullo', 'λ = 0: you get the zero vector') : Math.abs(lam) < 1 ? t('|λ| < 1: il vettore si accorcia', '|λ| < 1: the vector gets shorter') : t('|λ| > 1: il vettore si allunga', '|λ| > 1: the vector gets longer')} · ${t('tutti i multipli di u stanno sulla retta tratteggiata, Span(u)', 'all multiples of u lie on the dashed line, Span(u)')}`);
      } else if (modo === 'combinazione') {
        const a = [lam * u[0], lam * u[1]], s = [a[0] + mu * v[0], a[1] + mu * v[1]];
        if (Math.abs(det) < 1e-9) { if (u[0] || u[1]) T.retta(0, 0, u[0], u[1], k.rosa, { spessore: 1.4 }); else if (v[0] || v[1]) T.retta(0, 0, v[0], v[1], k.rosa, { spessore: 1.4 }); }
        T.freccia(0, 0, a[0], a[1], k.accento, { spessore: 1.6, tratteggio: true });
        T.freccia(a[0], a[1], s[0], s[1], k.blu, { spessore: 1.6, tratteggio: true });
        T.freccia(0, 0, s[0], s[1], k.ambra, { spessore: 3 }); T.testo('λu + μv', s[0], s[1], k.ambra);
        righe.push(`<b>λu + μv</b> = ${num(lam)}·${cop(u)} + ${num(mu)}·${cop(v)} = <b>${cop(s)}</b>`);
        righe.push(Math.abs(det) > 1e-9
          ? `${t('u e v non sono multipli uno dell\'altro (linearmente indipendenti): con λ e μ adatti si raggiunge <b>ogni</b> punto del piano, quindi Span(u, v) = ℝ² e {u, v} è una base.', 'u and v are not multiples of each other (linearly independent): with suitable λ and μ you reach <b>every</b> point of the plane, so Span(u, v) = ℝ² and {u, v} is a basis.')}`
          : `${t('u e v sono multipli uno dell\'altro (linearmente dipendenti): le combinazioni restano sulla retta rossa, non si esce mai da lì. Span(u, v) è una retta (o solo l\'origine).', 'u and v are multiples of each other (linearly dependent): the combinations stay on the red line and never leave it. Span(u, v) is a line (or just the origin).')}`);
      } else if (modo === 'scalare') {
        const pr = u[0] * v[0] + u[1] * v[1], nu = Math.hypot(...u), nv = Math.hypot(...v);
        if (nu > 1e-9) {
          const c = pr / (nu * nu), p = [c * u[0], c * u[1]];
          T.retta(0, 0, u[0], u[1], k.testo3, { spessore: 1 });
          T.segmento(v[0], v[1], p[0], p[1], k.viola);
          T.freccia(0, 0, p[0], p[1], k.ambra, { spessore: 3.2 }); T.testo(t('proiezione', 'projection'), p[0], p[1], k.ambra, { dy: 14 });
          righe.push(`<b>u · v</b> = ${num(u[0])}·${num(v[0])} + ${num(u[1])}·${num(v[1])} = <b>${num(pr)}</b> · ‖u‖ = ${num(nu)} · ‖v‖ = ${num(nv)}`);
          if (nv > 1e-9) righe.push(`cos θ = (u·v)/(‖u‖‖v‖) = ${num(pr / (nu * nv), 3)} · θ = ${angolo(Math.acos(Math.max(-1, Math.min(1, pr / (nu * nv)))))}${Math.abs(pr) < 1e-9 ? ` · <b>${t('u e v sono ortogonali', 'u and v are orthogonal')}</b>` : ''}`);
          righe.push(`${t('proiezione di v su u', 'projection of v onto u')} = (u·v)/(u·u) · u = ${num(c, 3)} · u = <b>${cop(p)}</b>`);
        } else righe.push(t('Con u = 0 la proiezione non è definita.', 'With u = 0 the projection is not defined.'));
      }
      T.freccia(0, 0, v[0], v[1], k.blu); T.testo('v', v[0], v[1], k.blu); T.maniglia(v[0], v[1], k.blu);
      T.freccia(0, 0, u[0], u[1], k.accento); T.testo('u', u[0], u[1], k.accento); T.maniglia(u[0], u[1], k.accento);
      out.innerHTML = righe.map(r => `<p>${r}</p>`).join('');
      T.canvas.setAttribute('aria-label', t('Vettori nel piano: ', 'Vectors in the plane: ') + out.textContent);
    }
    selModo.addEventListener('change', () => { modo = selModo.value; tela.ridisegna(); });
    inL.addEventListener('input', () => { lam = Number(inL.value); tela.ridisegna(); });
    inM.addEventListener('input', () => { mu = Number(inM.value); tela.ridisegna(); });
    tela.ridisegna();
  }

  /* ---------- 3. matrice 2×2 come trasformazione del piano ---------- */
  function matrice(fig) {
    const d = fig.dataset;
    const R = Number(d.raggio) || 4;
    let A;
    try { A = leggiMatrice(d.a || '1 1; 0 1').map(r => r.map(x => x.val)); } catch (e) { A = [[1, 1], [0, 1]]; }
    if (A.length !== 2 || A[0].length !== 2) A = [[1, 1], [0, 1]];
    let tt = 1, x = leggiCoppia(d.x, [1, 1]);
    const PRESET = [
      [t('identità', 'identity'), [[1, 0], [0, 1]]], [t('rotazione di 90°', '90° rotation'), [[0, -1], [1, 0]]],
      [t('riflessione', 'reflection'), [[1, 0], [0, -1]]], [t('dilatazione', 'scaling'), [[2, 0], [0, 0.5]]],
      [t('taglio', 'shear'), [[1, 1], [0, 1]]], [t('proiezione', 'projection'), [[1, 0], [0, 0]]],
      [t('simmetrica', 'symmetric'), [[2, 1], [1, 2]]], [t('rotazione di 45°', '45° rotation'), [[Math.SQRT1_2, -Math.SQRT1_2], [Math.SQRT1_2, Math.SQRT1_2]]],
    ];
    const celle = [0, 1, 2, 3].map(i => el('input', { type: 'number', step: '0.5', value: String(+A[i >> 1][i & 1].toFixed(4)), 'aria-label': `a${pedice((i >> 1) + 1)}${pedice((i & 1) + 1)}` }));
    const griglia2 = el('div', { class: 'w-mat2' }, ...celle);
    const cursore = el('input', { type: 'range', min: '0', max: '1', step: '0.02', value: '1' });
    const campoT = campo(t('da I ad A', 'from I to A'), cursore, 'w-cursore');
    const chips = el('div', { class: 'w-chips' }, ...PRESET.map(([nome, M]) => el('button', { type: 'button', class: 'chip', text: nome, onclick: () => {
      A = M.map(r => r.slice()); celle.forEach((c, i) => { c.value = String(+A[i >> 1][i & 1].toFixed(4)); }); tela.ridisegna();
    } })));
    const out = lettura();
    const tela = new Tela(fig, { x: [-R, R], y: [-R, R], passo: 0.5, disegna });
    fig.append(riga(el('div', { class: 'w-campo' }, el('span', { class: 'w-etichetta', text: 'A =' }), griglia2), campoT), chips, out);
    tela.punti = [{ get: () => x, set: (a, b) => { x = [a, b]; tela.ridisegna(); } }];
    celle.forEach((c, i) => c.addEventListener('input', () => { const v = Number(c.value); if (Number.isFinite(v)) { A[i >> 1][i & 1] = v; tela.ridisegna(); } }));
    cursore.addEventListener('input', () => { tt = Number(cursore.value); tela.ridisegna(); });
    function disegna(T) {
      const k = T.c;
      const M = [[1 + tt * (A[0][0] - 1), tt * A[0][1]], [tt * A[1][0], 1 + tt * (A[1][1] - 1)]];
      const f = ([p, q]) => [M[0][0] * p + M[0][1] * q, M[1][0] * p + M[1][1] * q];
      // griglia trasformata
      const c = T.ctx;
      c.save(); c.globalAlpha = 0.55; c.strokeStyle = k.accento; c.lineWidth = 1;
      c.beginPath();
      for (let j = -8; j <= 8; j++) {
        const a1 = f([j, -8]), b1 = f([j, 8]), a2 = f([-8, j]), b2 = f([8, j]);
        c.moveTo(T.X(a1[0]), T.Y(a1[1])); c.lineTo(T.X(b1[0]), T.Y(b1[1]));
        c.moveTo(T.X(a2[0]), T.Y(a2[1])); c.lineTo(T.X(b2[0]), T.Y(b2[1]));
      }
      c.globalAlpha = 0.25; c.stroke(); c.restore();
      const e1 = f([1, 0]), e2 = f([0, 1]);
      const detM = M[0][0] * M[1][1] - M[0][1] * M[1][0];
      T.poligono([[0, 0], e1, [e1[0] + e2[0], e1[1] + e2[1]], e2], Math.abs(detM) < 1e-9 ? k.ambra : detM > 0 ? k.verde : k.rosa, 0.28);
      const det = A[0][0] * A[1][1] - A[0][1] * A[1][0], tr = A[0][0] + A[1][1];
      const righe = [];
      righe.push(`<b>det A</b> = ${num(A[0][0])}·${num(A[1][1])} ${SEGNO} ${num(A[0][1])}·${num(A[1][0])} = <b>${num(det)}</b> · ${Math.abs(det) < 1e-9 ? t('il quadrato si schiaccia su un segmento (area 0): A non è invertibile', 'the square collapses onto a segment (area 0): A is not invertible') : `${t('area del quadrato trasformato', 'area of the transformed square')} = |det A| = ${num(Math.abs(det))}${det < 0 ? t(' · det < 0: l\'orientazione si inverte (il verde diventa rosa)', ' · det < 0: the orientation flips (green becomes pink)') : ''}`}`);
      righe.push(`${t('le colonne di A sono le immagini dei vettori della base', 'the columns of A are the images of the basis vectors')}: A e₁ = (${num(A[0][0])}, ${num(A[1][0])}), A e₂ = (${num(A[0][1])}, ${num(A[1][1])})`);
      // autovalori
      const disc = tr * tr - 4 * det;
      righe.push(`p<sub>A</sub>(λ) = det(A ${SEGNO} λI) = λ² ${tr < 0 ? '+' : SEGNO} ${num(Math.abs(tr))}λ ${det < 0 ? SEGNO : '+'} ${num(Math.abs(det))} · tr A = ${num(tr)}`);
      const autovettore = l => {
        // (A − λI)v = 0: se la prima riga (a, b) non è nulla, v = (−b, a); altrimenti si usa la seconda (c, d)
        const a = A[0][0] - l, b = A[0][1], cc = A[1][0], dd = A[1][1] - l;
        if (Math.abs(a) > 1e-9 || Math.abs(b) > 1e-9) return [-b, a];
        if (Math.abs(cc) > 1e-9 || Math.abs(dd) > 1e-9) return [-dd, cc];
        return null;                                   // A − λI = 0: ogni vettore è autovettore
      };
      if (tt === 1) {
        if (disc < -1e-9) righe.push(`${t('autovalori complessi (Δ = ', 'complex eigenvalues (Δ = ')}${num(disc)} < 0): ${t('nessuna retta per l\'origine resta ferma, nessun autovettore reale', 'no line through the origin stays put, no real eigenvector')}`);
        else {
          const r = Math.sqrt(Math.max(0, disc));
          const ls = Math.abs(disc) < 1e-9 ? [tr / 2] : [(tr + r) / 2, (tr - r) / 2];
          const pezzi = [];
          ls.forEach((l, i) => {
            const v = autovettore(l);
            if (v && Math.hypot(...v) > 1e-9) {
              T.retta(0, 0, v[0], v[1], i ? k.viola : k.verde, { spessore: 1.6 });
              pezzi.push(`λ${pedice(i + 1)} = ${num(l, 3)}, ${t('autovettore', 'eigenvector')} (${num(v[0], 3)}, ${num(v[1], 3)})`);
            } else pezzi.push(`λ = ${num(l, 3)}: ${t('ogni vettore è autovettore', 'every vector is an eigenvector')}`);
          });
          righe.push(`${t('autovalori', 'eigenvalues')}: ${pezzi.join(' · ')} ${t('(rette tratteggiate: lì A allunga o accorcia senza girare)', '(dashed lines: there A stretches or shrinks without turning)')}`);
          if (Math.abs(A[0][1] - A[1][0]) < 1e-9 && ls.length === 2) righe.push(t('A è simmetrica: le due rette di autovettori sono perpendicolari (teorema spettrale).', 'A is symmetric: the two eigenvector lines are perpendicular (spectral theorem).'));
        }
      }
      T.freccia(0, 0, e1[0], e1[1], k.accento); T.testo('A e₁', e1[0], e1[1], k.accento);
      T.freccia(0, 0, e2[0], e2[1], k.blu); T.testo('A e₂', e2[0], e2[1], k.blu);
      const ax = f(x);
      T.freccia(0, 0, x[0], x[1], k.testo2, { spessore: 1.8 }); T.testo('x', x[0], x[1], k.testo2, { dx: -16 });
      T.freccia(0, 0, ax[0], ax[1], k.ambra); T.testo('A x', ax[0], ax[1], k.ambra);
      T.maniglia(x[0], x[1], k.testo2);
      const par = Math.abs(x[0] * ax[1] - x[1] * ax[0]) < 1e-9 && Math.hypot(...x) > 1e-9;
      righe.push(`x = (${num(x[0])}, ${num(x[1])}) → A x = (${num(ax[0])}, ${num(ax[1])})${par && tt === 1 ? ` · <b>${t('x è un autovettore', 'x is an eigenvector')}: A x = ${num(Math.hypot(...ax) / Math.hypot(...x) * Math.sign(ax[0] * x[0] + ax[1] * x[1]), 3)} x</b>` : ` · ${t('trascina x: quando A x resta sulla stessa retta di x, hai trovato un autovettore', 'drag x: when A x stays on the same line as x, you have found an eigenvector')}`}`);
      out.innerHTML = righe.map(r => `<p>${r}</p>`).join('');
      T.canvas.setAttribute('aria-label', t('Matrice come trasformazione del piano: ', 'Matrix as a transformation of the plane: ') + out.textContent);
    }
    tela.ridisegna();
  }

  /* ---------- 4. calcolatrice di Gauss con i passaggi ---------- */
  const MODI_GAUSS = {
    scala: t('riduci a scalini (Gauss)', 'row echelon form (Gauss)'),
    ridotta: t('forma ridotta (Gauss–Jordan)', 'reduced form (Gauss–Jordan)'),
    rango: t('rango', 'rank'),
    sistema: t('sistema lineare (ultima colonna = termini noti)', 'linear system (last column = constants)'),
    determinante: t('determinante', 'determinant'),
    inversa: t('matrice inversa', 'inverse matrix'),
    prodotto: t('prodotto A · B', 'product A · B'),
    nucleo: t('nucleo e immagine', 'kernel and image'),
    autovalori: t('autovalori e autospazi', 'eigenvalues and eigenspaces'),
    'gram-schmidt': t('Gram–Schmidt (righe = vettori)', 'Gram–Schmidt (rows = vectors)'),
  };
  function gaussWidget(fig) {
    const d = fig.dataset;
    const modi = (d.modi ? d.modi.split(/[\s,]+/) : Object.keys(MODI_GAUSS)).filter(m => m in MODI_GAUSS);
    let modo = modi.includes(d.modo) ? d.modo : modi[0];
    const area = el('textarea', { rows: '4', spellcheck: 'false', autocomplete: 'off', class: 'w-testo' });
    area.value = (d.matrice || '1 2 3; 4 5 6').split(';').map(r => r.trim()).join('\n');
    const areaB = el('textarea', { rows: '3', spellcheck: 'false', autocomplete: 'off', class: 'w-testo' });
    areaB.value = (d.b || '1 0; 0 1').split(';').map(r => r.trim()).join('\n');
    const campoB = campo('B', areaB);
    const sel = scelta(modi.map(m => [m, MODI_GAUSS[m]]), modo);
    const vai = el('button', { type: 'button', class: 'btn primary', text: t('Calcola', 'Compute') });
    const esito = el('div', { class: 'w-esito', 'aria-live': 'polite' });
    const passi = el('ol', { class: 'w-passi' });
    const aiuto = el('p', { class: 'w-aiuto', text: t('Una riga per riga della matrice (oppure righe separate da «;»), numeri separati da spazi. Frazioni come 3/4, decimali come 0,5.', 'One line per matrix row (or rows separated by ";"), numbers separated by spaces. Fractions such as 3/4, decimals such as 0.5.') });
    fig.append(riga(campo(modi.length > 1 ? t('che cosa calcolare', 'what to compute') : MODI_GAUSS[modo], modi.length > 1 ? sel : el('span'), modi.length > 1 ? '' : 'w-solo-etichetta'), vai),
      riga(campo(modo === 'prodotto' ? 'A' : t('matrice', 'matrix'), area), campoB), aiuto, esito, passi);
    const mostraB = () => { campoB.hidden = modo !== 'prodotto'; area.previousSibling.textContent = modo === 'prodotto' ? 'A' : t('matrice', 'matrix'); };
    sel.addEventListener('change', () => { modo = sel.value; mostraB(); calcola(); });
    vai.addEventListener('click', calcola);
    mostraB();
    function scriviPassi(lista, barra = 0) {
      passi.innerHTML = '';
      lista.forEach(p => passi.append(el('li', { html: `<span class="w-mossa">${esc(p.mossa)}</span>${matriceHtml(p.M, { barra, cambiate: p.cambiate || [] })}` })));
    }
    function calcola() {
      passi.innerHTML = '';
      try {
        const M = leggiMatrice(area.value);
        const m = M.length, n = M[0].length;
        const P = s => `<p>${s}</p>`;
        let html = '';
        if (modo === 'scala' || modo === 'rango') {
          const g = gauss(M);
          scriviPassi(g.passi);
          html = P(`${t('Matrice a scalini', 'Row echelon form')}: ${matriceHtml(g.M, { pivot: g.pivot })}`)
            + P(`${t('Pivot (in evidenza)', 'Pivots (highlighted)')}: ${g.pivot.length} → <b>rk = ${g.pivot.length}</b>${modo === 'rango' ? ` · ${t('il rango è il numero di righe non nulle della forma a scalini', 'the rank is the number of non-zero rows of the echelon form')}` : ''}`);
          if (!g.passi.length) html += P(t('La matrice era già a scalini: nessuna mossa.', 'The matrix was already in echelon form: no moves.'));
        } else if (modo === 'ridotta') {
          const g = gauss(M, { jordan: true });
          scriviPassi(g.passi);
          html = P(`${t('Forma ridotta (pivot = 1, zeri sopra e sotto i pivot)', 'Reduced form (pivots = 1, zeros above and below the pivots)')}: ${matriceHtml(g.M, { pivot: g.pivot })}`) + P(`rk = ${g.pivot.length}`);
        } else if (modo === 'sistema') {
          if (n < 2) throw new Error(t('servono almeno una colonna di coefficienti e quella dei termini noti', 'you need at least one column of coefficients and the constants column'));
          const g = gauss(M, { jordan: true });
          scriviPassi(g.passi, 1);
          const nv = n - 1;
          const rkA = g.pivot.filter(([, c]) => c < nv).length, rkC = g.pivot.length;
          html = P(`${t('Matrice completa ridotta', 'Reduced augmented matrix')}: ${matriceHtml(g.M, { barra: 1, pivot: g.pivot })}`);
          html += P(`rk(A) = ${rkA} · rk(A | b) = ${rkC} · ${t('incognite', 'unknowns')}: n = ${nv}`);
          if (rkA !== rkC) html += P(`<b>${t('Nessuna soluzione', 'No solution')}</b> (rk(A) ≠ rk(A | b), Rouché–Capelli): ${t('una riga dice 0 = 1', 'one row says 0 = 1')}.`);
          else {
            const nomi = Array.from({ length: nv }, (_, i) => `x${pedice(i + 1)}`);
            const { libere } = nucleo(g.M.map(r => r.slice(0, nv)), g.pivot, nv);
            const par = new Map(libere.map((c, i) => [c, `t${pedice(i + 1)}`]));
            const colPivot = new Map(g.pivot.map(([r, c]) => [c, r]));
            const eq = nomi.map((x, c) => {
              if (par.has(c)) return `${x} = ${par.get(c)}`;
              const r = colPivot.get(c);
              let s = String(g.M[r][nv]);
              let primo = g.M[r][nv].zero;
              if (primo) s = '';
              for (const f of libere) {
                const coeff = g.M[r][f].neg();
                if (coeff.zero) continue;
                const a = coeff.abs();
                s += `${primo ? (coeff.segno < 0 ? SEGNO : '') : ` ${coeff.segno < 0 ? SEGNO : '+'} `}${a.uno ? '' : a}${par.get(f)}`;
                primo = false;
              }
              return `${x} = ${s || '0'}`;
            });
            html += P(libere.length
              ? `<b>${t('Infinite soluzioni', 'Infinitely many solutions')}</b>: ${t('dimensione', 'dimension')} n ${SEGNO} rk(A) = ${nv} ${SEGNO} ${rkA} = ${libere.length}, ${t('parametri liberi', 'free parameters')} ${[...par.values()].join(', ')} (${t('uno per ogni colonna senza pivot', 'one for each column without a pivot')}).`
              : `<b>${t('Una sola soluzione', 'Exactly one solution')}</b> (rk(A) = rk(A | b) = n = ${nv}).`);
            html += `<div class="w-sistema">${eq.map(e => `<div>${esc(e)}</div>`).join('')}</div>`;
          }
        } else if (modo === 'determinante') {
          if (m !== n) throw new Error(t('il determinante esiste solo per le matrici quadrate', 'the determinant exists only for square matrices'));
          const g = gauss(M);
          scriviPassi(g.passi);
          let prod = Q1;
          for (let i = 0; i < n; i++) prod = prod.mul(g.M[i][i]);
          const det = g.scambi % 2 ? prod.neg() : prod;
          const diag = g.M.map((r, i) => (r[i].segno < 0 ? `(${r[i]})` : String(r[i]))).join(' · ');
          html = P(`${t('Matrice triangolare ottenuta', 'Triangular matrix obtained')}: ${matriceHtml(g.M, { pivot: g.pivot })}`);
          html += P(`${t('Ogni scambio di righe cambia il segno; le mosse Ri → Ri + λRj non cambiano il determinante.', 'Every row swap changes the sign; the moves Ri → Ri + λRj do not change the determinant.')} ${t('Scambi', 'Swaps')}: ${g.scambi}.`);
          html += P(`<b>det = ${g.scambi % 2 ? SEGNO + ' ' : ''}${diag} = ${det}</b>${det.zero ? ` · ${t('la matrice non è invertibile', 'the matrix is not invertible')}` : ''}`);
        } else if (modo === 'inversa') {
          if (m !== n) throw new Error(t('solo le matrici quadrate possono avere un\'inversa', 'only square matrices can have an inverse'));
          const C = M.map((r, i) => [...r, ...Array.from({ length: n }, (_, j) => (i === j ? Q1 : Q0))]);
          const g = gauss(C, { colonne: n, jordan: true });
          scriviPassi(g.passi, n);
          if (g.pivot.length < n) html = P(`<b>${t('Non invertibile', 'Not invertible')}</b>: rk = ${g.pivot.length} < ${n} (det = 0).`);
          else html = P(`${t('Da (A | I) a (I | A⁻¹)', 'From (A | I) to (I | A⁻¹)')}: <b>A⁻¹</b> = ${matriceHtml(g.M.map(r => r.slice(n)))}`) + P(t('Controllo: A · A⁻¹ = I.', 'Check: A · A⁻¹ = I.'));
        } else if (modo === 'prodotto') {
          const B = leggiMatrice(areaB.value);
          if (B.length !== n) throw new Error(t(`A ha ${n} colonne e B ha ${B.length} righe: servono numeri uguali`, `A has ${n} columns and B has ${B.length} rows: they must be equal`));
          const C = M.map(r => B[0].map((_, j) => r.reduce((s, x, k) => s.add(x.mul(B[k][j])), Q0)));
          html = P(`A · B = ${matriceHtml(C)} (${m}×${n} · ${n}×${B[0].length} = ${m}×${B[0].length})`);
          const lista = [];
          C.forEach((r, i) => r.forEach((c, j) => lista.push(`c${pedice(i + 1)}${pedice(j + 1)} = ${M[i].map((x, k) => `${x.segno < 0 ? `(${x})` : x}·${B[k][j].segno < 0 ? `(${B[k][j]})` : B[k][j]}`).join(' + ')} = ${c}`)));
          passi.innerHTML = lista.map(s => `<li><span class="w-mossa">${esc(s)}</span></li>`).join('');
          html += P(t('Ogni elemento è «riga di A per colonna di B»: la riga i di A e la colonna j di B, moltiplicate termine a termine e sommate.', 'Each entry is "row of A times column of B": row i of A and column j of B, multiplied term by term and added up.'));
        } else if (modo === 'nucleo') {
          const g = gauss(M, { jordan: true });
          scriviPassi(g.passi);
          const { base } = nucleo(g.M, g.pivot, n);
          const rk = g.pivot.length;
          html = P(`${t('Forma ridotta', 'Reduced form')}: ${matriceHtml(g.M, { pivot: g.pivot })} · rk = ${rk}`);
          html += P(`<b>Ker</b>: dim = n ${SEGNO} rk = ${n} ${SEGNO} ${rk} = ${n - rk}${base.length ? `, ${t('base', 'basis')}: ${base.map(vettoreHtml).join(' ')}` : ` (${t('solo il vettore nullo', 'only the zero vector')})`}`);
          html += P(`<b>Im</b>: dim = rk = ${rk}${rk ? `, ${t('base: le colonne della matrice di partenza dove ci sono i pivot', 'basis: the columns of the original matrix where the pivots are')} (${g.pivot.map(([, c]) => `${t('colonna', 'column')} ${c + 1}`).join(', ')}): ${g.pivot.map(([, c]) => vettoreHtml(M.map(r => r[c]))).join(' ')}` : ''}`);
          html += P(`${t('Teorema della dimensione', 'Rank–nullity theorem')}: dim Ker + dim Im = ${n - rk} + ${rk} = ${n} = n.`);
        } else if (modo === 'autovalori') {
          if (m !== n || n < 2 || n > 3) throw new Error(t('scrivi una matrice quadrata 2×2 o 3×3', 'write a 2×2 or 3×3 square matrix'));
          // pA(λ) = det(A − λI) con λ simbolico: polinomi nelle celle
          const P0 = x => [x], lam = [Q0, Q.int(-1)];
          const C = M.map((r, i) => r.map((x, j) => (i === j ? polAdd(P0(x), lam) : P0(x))));
          const detPol = X => (X.length === 2 ? polAdd(polMul(X[0][0], X[1][1]), polMul(X[0][1], X[1][0]).map(c => c.neg()))
            : [0, 1, 2].reduce((s, j) => {
              const minore = X.slice(1).map(r => r.filter((_, k) => k !== j));
              const termine = polMul(X[0][j], detPol(minore));
              return polAdd(s, j % 2 ? termine.map(c => c.neg()) : termine);
            }, [Q0]));
          const p = detPol(C);
          html = P(`p<sub>A</sub>(λ) = det(A ${SEGNO} λI) = <b>${esc(polStr(p, 'λ'))}</b>`);
          const { radici, resto } = radiciRazionali(p);
          const conte = new Map();
          radici.forEach(r => conte.set(String(r), { r, ma: (conte.get(String(r))?.ma || 0) + 1 }));
          let altre = [];
          if (resto.length === 3) altre = radiciSecondoGrado(resto);
          else if (resto.length > 3) altre = { tipo: 'numeriche' };
          const righeAut = [];
          let diag = altre.tipo !== 'complesse' && altre.tipo !== 'numeriche';
          for (const { r, ma } of conte.values()) {
            const B = M.map((row, i) => row.map((x, j) => (i === j ? x.sub(r) : x)));
            const g = gauss(B, { jordan: true });
            const { base } = nucleo(g.M, g.pivot, n);
            const mg = base.length;
            if (mg < ma) diag = false;
            righeAut.push(`λ = <b>${r}</b>: ${t('molteplicità algebrica', 'algebraic multiplicity')} ${ma}, ${t('geometrica', 'geometric')} ${mg} = n ${SEGNO} rk(A ${SEGNO} ${r}I) = ${n} ${SEGNO} ${g.pivot.length}; V<sub>${r}</sub> = Span ${base.map(vettoreHtml).join(' ')}`);
          }
          if (altre.tipo === 'doppia' || altre.tipo === 'razionali') {
            // radici razionali del fattore di secondo grado (può succedere con coefficienti frazionari)
            for (const r of altre.razionali) {
              const B = M.map((row, i) => row.map((x, j) => (i === j ? x.sub(r) : x)));
              const g = gauss(B, { jordan: true });
              const { base } = nucleo(g.M, g.pivot, n);
              righeAut.push(`λ = <b>${r}</b>: V<sub>${r}</sub> = Span ${base.map(vettoreHtml).join(' ')}`);
            }
          } else if (altre.tipo === 'irrazionali') righeAut.push(`λ = <b>${esc(altre.testi[0])}</b> ${t('e', 'and')} λ = <b>${esc(altre.testi[1])}</b> (${t('irrazionali, semplici', 'irrational, simple')}: ≈ ${num(altre.valori[0], 4)} ${t('e', 'and')} ≈ ${num(altre.valori[1], 4)})`);
          else if (altre.tipo === 'complesse') righeAut.push(`${t('radici complesse non reali', 'non-real complex roots')}: ${esc(altre.testi.join(', '))} → ${t('su ℝ la matrice non è diagonalizzabile', 'over ℝ the matrix is not diagonalisable')}`);
          else if (altre.tipo === 'numeriche') righeAut.push(t('il polinomio ha radici non razionali di grado 3: servono metodi numerici', 'the polynomial has non-rational roots of degree 3: numerical methods are needed'));
          html += righeAut.map(P).join('');
          html += P(diag ? `<b>${t('Diagonalizzabile su ℝ', 'Diagonalisable over ℝ')}</b>: ${t('tutti gli autovalori sono reali e per ognuno la molteplicità geometrica è uguale a quella algebrica', 'all eigenvalues are real and each geometric multiplicity equals the algebraic one')}.`
            : `<b>${t('Non diagonalizzabile su ℝ', 'Not diagonalisable over ℝ')}</b>: ${altre.tipo === 'complesse' ? t('ci sono autovalori non reali', 'there are non-real eigenvalues') : t('per almeno un autovalore la molteplicità geometrica è minore di quella algebrica', 'for at least one eigenvalue the geometric multiplicity is smaller than the algebraic one')}.`);
        } else if (modo === 'gram-schmidt') {
          const V = M;
          const dot = (a, b) => a.reduce((s, x, i) => s.add(x.mul(b[i])), Q0);
          const U = [], lista = [];
          V.forEach((v, k) => {
            // u_k = v_k − Σ c_j u_j con c_j = (v_k · u_j)/(u_j · u_j)
            let u = v.slice(), testo = `v${pedice(k + 1)}`;
            U.forEach((w, j) => {
              const c = dot(v, w).div(dot(w, w));
              if (c.zero) return;
              u = u.map((x, i) => x.sub(c.mul(w[i])));
              const a = c.abs();
              testo += ` ${c.segno > 0 ? SEGNO : '+'} ${a.uno ? '' : a.d !== 1n ? `(${a})·` : `${a}·`}u${pedice(j + 1)}`;
            });
            if (u.every(x => x.zero)) { lista.push({ mossa: `v${pedice(k + 1)} ${t('dipende dai vettori precedenti: lo scarto', 'depends on the previous vectors: I discard it')}` }); return; }
            U.push(u);
            lista.push({ mossa: `u${pedice(U.length)} = ${testo} = (${u.join(', ')})` });
          });
          passi.innerHTML = lista.map(p => `<li><span class="w-mossa">${esc(p.mossa)}</span></li>`).join('');
          const norme = U.map(u => radiceQuadrata(dot(u, u)));
          html = P(`${t('Base ortogonale', 'Orthogonal basis')}: ${U.map(vettoreHtml).join(' ')}`);
          html += P(`${t('Base ortonormale: ogni u diviso per la sua norma', 'Orthonormal basis: each u divided by its norm')} ‖u‖ = √(u·u): ${U.map((u, i) => {
            const [k2, s] = norme[i];
            return `u${pedice(i + 1)} / (${k2.uno && s !== 1n ? '' : k2}${s === 1n ? '' : '√' + s})`;
          }).join(' · ')}`);
        }
        esito.innerHTML = html;
      } catch (e) {
        esito.innerHTML = `<p class="w-errore">${esc(e.message)}</p>`;
        passi.innerHTML = '';
      }
    }
    calcola();
  }

  /* ---------- 5. Ruffini e radici razionali ---------- */
  function ruffiniWidget(fig) {
    const d = fig.dataset;
    const inP = el('input', { type: 'text', value: d.coefficienti || '1 0 -3 2', spellcheck: 'false', autocomplete: 'off', class: 'w-largo' });
    const inA = el('input', { type: 'text', value: d.a || '1', spellcheck: 'false', autocomplete: 'off' });
    const vai = el('button', { type: 'button', class: 'btn primary', text: t('Dividi per (x − a)', 'Divide by (x − a)') });
    const cerca = el('button', { type: 'button', class: 'btn', text: t('Scomponi con le radici razionali', 'Factor with the rational roots') });
    const esito = el('div', { class: 'w-esito', 'aria-live': 'polite' });
    fig.append(riga(campo(t('coefficienti, dal grado più alto', 'coefficients, from the highest degree'), inP, 'w-largo'), campo('a', inA)), riga(vai, cerca),
      el('p', { class: 'w-aiuto', text: t('Esempio: «1 0 -3 2» è x³ − 3x + 2 (scrivi 0 per i gradi che mancano).', 'Example: "1 0 -3 2" is x³ − 3x + 2 (write 0 for the missing degrees).') }), esito);
    const leggiP = () => { const c = inP.value.trim().split(/\s+/).map(leggiQ); if (!c.length || c[0].zero) throw new Error(t('il primo coefficiente non può essere 0', 'the first coefficient cannot be 0')); return c.reverse(); };
    function dividi() {
      try {
        const p = leggiP(), a = leggiQ(inA.value);
        const r = ruffini(p, a);
        const cella = x => `<td>${x === null ? '' : esc(String(x))}</td>`;
        const tab = `<table class="w-ruffini"><tbody><tr><td class="w-rf-a"></td>${r.alto.map(cella).join('')}</tr>`
          + `<tr><td class="w-rf-a">${esc(String(a))}</td>${r.prodotti.map(cella).join('')}</tr>`
          + `<tr class="w-rf-somma"><td class="w-rf-a"></td>${r.giu.map((x, i) => `<td${i === r.giu.length - 1 ? ' class="w-rf-resto"' : ''}>${esc(String(x))}</td>`).join('')}</tr></tbody></table>`;
        esito.innerHTML = `<p>p(x) = <b>${esc(polStr(polTrim(p)))}</b></p>${tab}`
          + `<p>${t('Si abbassa il primo coefficiente; poi, colonna per colonna: si moltiplica per a il numero appena scritto in basso, si scrive il risultato nella riga di mezzo e si somma.', 'Bring down the first coefficient; then, column by column: multiply the number just written at the bottom by a, write the result in the middle row and add.')}</p>`
          + `<p>${t('Quoziente', 'Quotient')} q(x) = <b>${esc(polStr(polTrim(r.quoziente)))}</b> · ${t('resto', 'remainder')} = <b>${esc(String(r.resto))}</b> = p(${esc(String(a))})</p>`
          + `<p>${r.resto.zero ? t(`Il resto è 0: ${a} è una radice e (x ${a.segno < 0 ? '+' : SEGNO} ${a.abs()}) divide p(x).`, `The remainder is 0: ${a} is a root and (x ${a.segno < 0 ? '+' : SEGNO} ${a.abs()}) divides p(x).`) : t(`Il resto non è 0: ${a} non è una radice.`, `The remainder is not 0: ${a} is not a root.`)}</p>`;
      } catch (e) { esito.innerHTML = `<p class="w-errore">${esc(e.message)}</p>`; }
    }
    function scomponi() {
      try {
        const p = leggiP();
        const { radici, resto } = radiciRazionali(p);
        const conte = new Map();
        radici.forEach(r => conte.set(String(r), { r, k: (conte.get(String(r))?.k || 0) + 1 }));
        const fattori = [...conte.values()].map(({ r, k }) => `(x ${r.segno < 0 ? '+ ' + r.abs() : r.zero ? '' : SEGNO + ' ' + r})${k > 1 ? '⁰¹²³⁴⁵⁶⁷⁸⁹'[k] : ''}`.replace('(x )', 'x'));
        const restoS = polStr(polTrim(resto));
        const scritta = [restoS === '1' ? '' : resto.length > 1 ? `(${restoS})` : restoS, ...fattori].filter(Boolean).join(' · ') || '1';
        esito.innerHTML = `<p>p(x) = <b>${esc(polStr(polTrim(p)))}</b> = <b>${esc(scritta)}</b></p>`
          + `<p>${conte.size ? [...conte.values()].map(({ r, k }) => `${t('radice', 'root')} ${r} ${t('con molteplicità', 'with multiplicity')} ${k}`).join(' · ') : t('nessuna radice razionale', 'no rational roots')}</p>`
          + `<p>${resto.length > 1 ? t(`Resta un fattore di grado ${resto.length - 1} senza radici razionali${resto.length === 3 ? ': usa la formula del secondo grado (le radici possono essere irrazionali o complesse).' : '.'}`, `A factor of degree ${resto.length - 1} without rational roots is left${resto.length === 3 ? ': use the quadratic formula (the roots may be irrational or complex).' : '.'}`) : ''}</p>`
          + (resto.length === 3 ? `<p>${t('Radici del fattore di secondo grado', 'Roots of the quadratic factor')}: ${esc(radiciSecondoGrado(resto).testi.join(t(' e ', ' and ')))}</p>` : '')
          + `<p class="w-nota">${t('Candidati provati: ±(divisori del termine noto)/(divisori del primo coefficiente), dopo aver tolto i denominatori.', 'Candidates tried: ±(divisors of the constant term)/(divisors of the leading coefficient), after clearing denominators.')}</p>`;
      } catch (e) { esito.innerHTML = `<p class="w-errore">${esc(e.message)}</p>`; }
    }
    vai.addEventListener('click', dividi);
    cerca.addEventListener('click', scomponi);
    dividi();
  }

  /* ---------- 6. vettori nello spazio (3D), piani e prodotto vettoriale ---------- */
  function spazio(fig) {
    const d = fig.dataset;
    const leggi3 = (s, def) => { const v = String(s || '').replace(/,/g, '.').trim().split(/[\s;]+/).map(Number); return v.length === 3 && v.every(Number.isFinite) ? v : def; };
    let u = leggi3(d.u, [2, 0, 0]), v = leggi3(d.v, [1, 2, 0]);
    let piano = d.piano ? leggi3(d.piano.split('=')[0], null) : null;
    let dPiano = d.piano && d.piano.includes('=') ? Number(d.piano.split('=')[1].replace(',', '.')) : 0;
    let P = leggi3(d.punto, null);
    let modo = d.modo || 'vettoriale';
    let yaw = -0.7, pitch = 0.45;
    const inU = el('input', { type: 'text', value: u.join(' '), spellcheck: 'false' });
    const inV = el('input', { type: 'text', value: v.join(' '), spellcheck: 'false' });
    const modi = [['vettoriale', t('prodotto vettoriale u × v', 'cross product u × v')], ['piano', t('piano e distanza di un punto', 'plane and distance of a point')]];
    const selModo = scelta(modi, modo);
    const inPiano = el('input', { type: 'text', value: piano ? `${piano.join(' ')} = ${dPiano}` : '1 1 1 = 2', spellcheck: 'false', class: 'w-largo' });
    const inP = el('input', { type: 'text', value: P ? P.join(' ') : '2 2 2', spellcheck: 'false' });
    const cU = campo('u', inU), cV = campo('v', inV), cPiano = campo(t('piano a b c = d', 'plane a b c = d'), inPiano, 'w-largo'), cP = campo('P', inP);
    const out = lettura();
    const canvas = el('canvas', { class: 'w-tela w-3d', role: 'img' });
    fig.append(canvas, riga(campo(t('modo', 'mode'), selModo), cU, cV, cPiano, cP), el('p', { class: 'w-aiuto', text: t('Trascina il disegno per girarlo. Coordinate separate da spazi.', 'Drag the picture to rotate it. Coordinates separated by spaces.') }), out);
    const ctx = canvas.getContext('2d');
    const croce = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
    const scal = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    const norma = a => Math.sqrt(scal(a, a));
    const vs = a => `(${a.map(x => num(x)).join(', ')})`;
    function proietta([x, y, z], W, H, S) {
      // rotazione attorno all'asse z (yaw) poi inclinazione (pitch); asse z in alto
      const cy = Math.cos(yaw), sy = Math.sin(yaw), cp = Math.cos(pitch), sp = Math.sin(pitch);
      const x1 = x * cy - y * sy, y1 = x * sy + y * cy;
      const sx = x1, syy = z * cp - y1 * sp;
      return [W / 2 + sx * S, H / 2 - syy * S];
    }
    function disegna() {
      const k = colori();
      const W = Math.max(220, canvas.clientWidth || 300), H = Math.round(W * 0.8);
      canvas.style.height = H + 'px';
      const dpr = Math.min(3, window.devicePixelRatio || 1);
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = k.fondo; ctx.fillRect(0, 0, W, H);
      const R = Math.max(3, ...u.map(Math.abs), ...v.map(Math.abs), ...(P || []).map(Math.abs)) * 1.15;
      const S = Math.min(W, H) / (2.6 * R);
      const pr = p => proietta(p, W, H, S);
      const linea = (a, b, col, w = 2, tr = false) => { const [x0, y0] = pr(a), [x1, y1] = pr(b); ctx.strokeStyle = col; ctx.lineWidth = w; ctx.setLineDash(tr ? [5, 5] : []); ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke(); ctx.setLineDash([]); };
      const scritta = (s, p, col) => { const [x, y] = pr(p); ctx.font = '600 13.5px "Plex Sans", system-ui, sans-serif'; ctx.lineWidth = 4; ctx.strokeStyle = k.fondo; ctx.strokeText(s, x + 6, y - 6); ctx.fillStyle = col; ctx.fillText(s, x + 6, y - 6); };
      const freccia = (a, b, col, w = 2.6) => {
        linea(a, b, col, w);
        const [x0, y0] = pr(a), [x1, y1] = pr(b), L = Math.hypot(x1 - x0, y1 - y0);
        if (L < 2) return;
        const ux = (x1 - x0) / L, uy = (y1 - y0) / L, s = Math.min(11, L * 0.4);
        ctx.fillStyle = col; ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x1 - ux * s - uy * s * 0.45, y1 - uy * s + ux * s * 0.45); ctx.lineTo(x1 - ux * s + uy * s * 0.45, y1 - uy * s - ux * s * 0.45); ctx.closePath(); ctx.fill();
      };
      const poli = (pts, col, alfa) => { ctx.save(); ctx.globalAlpha = alfa; ctx.fillStyle = col; ctx.beginPath(); pts.map(pr).forEach(([x, y], i) => (i ? ctx.lineTo(x, y) : ctx.moveTo(x, y))); ctx.closePath(); ctx.fill(); ctx.restore(); };
      // assi e griglia sul piano z = 0
      ctx.save(); ctx.globalAlpha = 0.5;
      for (let i = -Math.floor(R); i <= Math.floor(R); i++) { linea([i, -R, 0], [i, R, 0], k.griglia, 1); linea([-R, i, 0], [R, i, 0], k.griglia, 1); }
      ctx.restore();
      [[[R, 0, 0], 'x'], [[0, R, 0], 'y'], [[0, 0, R], 'z']].forEach(([p, s]) => { linea(p.map(c => -c), p, k.testo3, 1.2); scritta(s, p, k.testo3); });
      const righe = [];
      if (modo === 'vettoriale') {
        const w = croce(u, v);
        poli([[0, 0, 0], u, [u[0] + v[0], u[1] + v[1], u[2] + v[2]], v], k.ambra, 0.22);
        freccia([0, 0, 0], u, k.accento); scritta('u', u, k.accento);
        freccia([0, 0, 0], v, k.blu); scritta('v', v, k.blu);
        freccia([0, 0, 0], w, k.ambra, 3); scritta('u × v', w, k.ambra);
        righe.push(`<b>u × v</b> = (${num(u[1])}·${num(v[2])} ${SEGNO} ${num(u[2])}·${num(v[1])}, ${num(u[2])}·${num(v[0])} ${SEGNO} ${num(u[0])}·${num(v[2])}, ${num(u[0])}·${num(v[1])} ${SEGNO} ${num(u[1])}·${num(v[0])}) = <b>${vs(w)}</b>`);
        righe.push(`${t('è perpendicolare a u e a v', 'it is perpendicular to u and v')}: (u × v)·u = ${num(scal(w, u))}, (u × v)·v = ${num(scal(w, v))} · ‖u × v‖ = ${num(norma(w), 3)} = ${t('area del parallelogramma giallo', 'area of the yellow parallelogram')}${norma(w) < 1e-9 ? ` · <b>${t('u e v sono paralleli: il prodotto vettoriale è nullo', 'u and v are parallel: the cross product is zero')}</b>` : ''}`);
      } else {
        const n = piano || [1, 1, 1];
        if (norma(n) < 1e-9) { righe.push(t('Il vettore normale (a, b, c) non può essere nullo.', 'The normal vector (a, b, c) cannot be zero.')); }
        else {
          // due direzioni nel piano e un suo punto
          const q = n.map(c => (c * dPiano) / scal(n, n));
          const a = Math.abs(n[0]) < 0.9 * norma(n) ? croce(n, [1, 0, 0]) : croce(n, [0, 1, 0]);
          const b = croce(n, a);
          const na = norma(a), nb = norma(b), L = R * 0.9;
          const A1 = a.map(c => (c / na) * L), B1 = b.map(c => (c / nb) * L);
          const vert = [[1, 1], [1, -1], [-1, -1], [-1, 1]].map(([s, r]) => q.map((c, i) => c + s * A1[i] + r * B1[i]));
          poli(vert, k.viola, 0.2);
          vert.forEach((p, i) => linea(p, vert[(i + 1) % 4], k.viola, 1.2));
          freccia(q, q.map((c, i) => c + n[i] / norma(n) * 1.5), k.viola, 2.2); scritta('n', q.map((c, i) => c + n[i] / norma(n) * 1.5), k.viola);
          righe.push(`${t('Piano', 'Plane')} ${num(n[0])}x ${n[1] < 0 ? SEGNO : '+'} ${num(Math.abs(n[1]))}y ${n[2] < 0 ? SEGNO : '+'} ${num(Math.abs(n[2]))}z = ${num(dPiano)} · ${t('vettore normale', 'normal vector')} n = ${vs(n)}`);
          if (P) {
            const dist = (scal(n, P) - dPiano) / norma(n);
            const H0 = P.map((c, i) => c - dist * n[i] / norma(n));
            linea(P, H0, k.ambra, 2, true);
            const [px, py] = pr(P); ctx.fillStyle = k.ambra; ctx.beginPath(); ctx.arc(px, py, 5, 0, 2 * Math.PI); ctx.fill(); scritta('P', P, k.ambra);
            const [hx, hy] = pr(H0); ctx.fillStyle = k.testo2; ctx.beginPath(); ctx.arc(hx, hy, 4, 0, 2 * Math.PI); ctx.fill(); scritta('H', H0, k.testo2);
            righe.push(`d(P, ${t('piano', 'plane')}) = |a·x₀ + b·y₀ + c·z₀ ${SEGNO} d| / ‖n‖ = |${num(scal(n, P))} ${SEGNO} ${num(dPiano)}| / ${num(norma(n), 3)} = <b>${num(Math.abs(dist), 3)}</b> · H = ${t('piede della perpendicolare', 'foot of the perpendicular')} ≈ ${vs(H0.map(c => +c.toFixed(3)))}`);
          }
        }
      }
      cU.hidden = cV.hidden = modo !== 'vettoriale';
      cPiano.hidden = cP.hidden = modo === 'vettoriale';
      out.innerHTML = righe.map(r => `<p>${r}</p>`).join('');
      canvas.setAttribute('aria-label', t('Spazio tridimensionale: ', 'Three-dimensional space: ') + out.textContent);
    }
    let presa = null;
    canvas.addEventListener('pointerdown', e => { presa = [e.clientX, e.clientY, yaw, pitch]; canvas.setPointerCapture(e.pointerId); });
    canvas.addEventListener('pointermove', e => { if (!presa) return; yaw = presa[2] + (e.clientX - presa[0]) * 0.01; pitch = Math.max(-1.4, Math.min(1.4, presa[3] + (e.clientY - presa[1]) * 0.01)); disegna(); });
    const lascia = () => { presa = null; };
    canvas.addEventListener('pointerup', lascia); canvas.addEventListener('pointercancel', lascia);
    inU.addEventListener('change', () => { u = leggi3(inU.value, u); inU.value = u.join(' '); disegna(); });
    inV.addEventListener('change', () => { v = leggi3(inV.value, v); inV.value = v.join(' '); disegna(); });
    inPiano.addEventListener('change', () => { const [l, r] = inPiano.value.split('='); const n = leggi3(l, null); if (n) { piano = n; dPiano = Number(String(r || '0').replace(',', '.')) || 0; } disegna(); });
    inP.addEventListener('change', () => { P = leggi3(inP.value, P); disegna(); });
    selModo.addEventListener('change', () => { modo = selModo.value; disegna(); });
    if (!P && modo === 'piano') P = [2, 2, 2];
    if (!piano) { piano = [1, 1, 1]; dPiano = 2; }
    if ('ResizeObserver' in window) new ResizeObserver(disegna).observe(canvas);
    window.addEventListener('appunti:tema', disegna);
    disegna();
  }

  /* ---------- avvio ---------- */
  const TIPI = { complessi, vettori, matrice, gauss: gaussWidget, ruffini: ruffiniWidget, spazio };
  document.querySelectorAll('figure.widget[data-widget]').forEach(fig => {
    const carica = fig.querySelector('.widget-carica');
    try {
      const f = TIPI[fig.dataset.widget];
      if (!f) throw new Error(t('strumento sconosciuto', 'unknown tool'));
      if (carica) carica.remove();
      f(fig);
    } catch (e) {
      if (carica) carica.textContent = t('Strumento non disponibile: ', 'Tool not available: ') + e.message;
    }
  });
})();
