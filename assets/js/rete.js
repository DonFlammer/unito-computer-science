// Sfondo animato degli appunti: una rete a quadretti percorsa da impulsi di luce, come segnali su un circuito.
// Gli impulsi corrono lungo le linee e agli incroci possono girare; vicino al puntatore gli incroci si accendono e gli impulsi
// tendono ad andargli incontro; un clic fa partire un'onda (un rombo: la «circonferenza» nella distanza di Manhattan) e quattro impulsi.
// Cambiando pagina lo stato (impulsi, onde, puntatore) passa alla pagina nuova attraverso la sessionStorage della scheda:
// lo sfondo continua da dove era invece di ripartire da capo.
// Si spegne col pulsante «Animazioni» (html.meno-moto: resta lo sfondo semplice) e si ferma quando la scheda non è visibile.
// Lo script sta subito dopo il canvas, non in fondo: lo sfondo c'è già nel primo fotogramma anche nelle pagine lunghe.
(() => {
  const root = document.documentElement;
  // arrivo da un'altra pagina con la dissolvenza (view transition): html.arrivo dice a CSS e appunti.js di saltare le entrate
  window.addEventListener('pagereveal', e => { if (e.viewTransition) root.classList.add('arrivo'); });
  const canvas = document.getElementById('rete');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  const G = 44;                                   // passo della griglia, in pixel
  const STATO = 'sfondo:rete';                    // chiave dello stato passato da una pagina all'altra
  let W = 0, H = 0, dpr = 1, oy = 0, base = 0, fermo = false, ultimo = 0, raf = 0, yRipresa = null, salvatoAlle = 0, tornata = false;
  let impulsi = [], onde = [], colori = null;
  const mouse = { x: -9999, y: -9999, t: 0, tipo: '' };
  const caso = (a, b) => a + Math.random() * (b - a);
  const DIR = [[1, 0], [0, 1], [-1, 0], [0, -1]];

  function leggiColori() {
    const cs = getComputedStyle(root);
    const v = n => cs.getPropertyValue(n).trim() || '127, 168, 255';
    colori = { linea: v('--rete-linea'), impulso: v('--rete-impulso'), caldo: v('--rete-caldo'), forza: parseFloat(cs.getPropertyValue('--rete-forza')) || 1 };
    colori.picco = Math.max(...colori.impulso.split(',').map(Number)) || 224;
    aloneImg = null;
  }
  // Alone del puntatore, disegnato una volta sola in un'immagine con un leggero rumore (dithering). Il profilo è quello
  // di sempre (0.07 al centro, in linea retta fino a zero a 240 px) fino a 170 px, poi si spegne del tutto entro 200 px.
  // La coda tagliata sta sotto il 2% di luminosità: su un OLED con le impostazioni normali si confonde col nero, ma sugli
  // schermi che schiariscono i neri (luminosità o gamma alzate nel driver della scheda video, molti LCD) diventava visibile
  // e l'alone sembrava più grande e fatto ad anelli. Così resta dappertutto come su un OLED.
  const ALONE = 200;
  let aloneImg = null;
  function preparaAlone(colore) {
    const lato = ALONE * 2, c = document.createElement('canvas');
    c.width = c.height = lato;
    const g = c.getContext('2d'), img = g.createImageData(lato, lato), d = img.data, [r0, g0, b0] = colore.split(',').map(Number);
    for (let y = 0; y < lato; y++) for (let x = 0; x < lato; x++) {
      const r = Math.hypot(x + 0.5 - ALONE, y + 0.5 - ALONE);
      if (r >= ALONE) continue;
      const t = Math.max(0, (r - 170) / 30), a = 0.07 * (1 - r / 240) * (1 - t * t * (3 - 2 * t));
      const i = (y * lato + x) * 4;
      d[i] = r0; d[i + 1] = g0; d[i + 2] = b0;
      d[i + 3] = Math.max(0, Math.round(a * 255 + (Math.random() - 0.5) * 2));   // ±1 livello a caso: niente anelli
    }
    g.putImageData(img, 0, 0);
    return c;
  }
  const rgba = (c, a) => `rgba(${c}, ${Math.max(0, Math.min(1, a)).toFixed(3)})`;

  function nuovoImpulso(da) {
    // parte da un bordo, su una linea della griglia, verso l'interno; oppure da un punto dato (clic)
    let x, y, d;
    if (da) { x = da.x; y = da.y; d = da.d; }
    else {
      const lato = Math.floor(Math.random() * 4);
      const gx = Math.round(caso(0, W) / G) * G, gy = Math.round(caso(0, H) / G) * G - oy;
      if (lato === 0) { x = -G; y = gy; d = 0; }
      else if (lato === 1) { x = gx; y = -G - oy; d = 1; }
      else if (lato === 2) { x = W + G; y = gy; d = 2; }
      else { x = gx; y = H + G - oy; d = 3; }
      y = Math.round(y / G) * G; x = Math.round(x / G) * G;
    }
    return { x, y, d, v: da?.v || caso(55, 125), caldo: da?.caldo ?? Math.random() < 0.16, scia: [{ x, y }], vita: 0, lungo: caso(70, 150) };
  }
  // impulso che parte già dentro lo schermo (riempimento iniziale)
  function inCampo() { const p = nuovoImpulso(); p.x = Math.round(caso(0, W) / G) * G; p.scia = [{ x: p.x, y: p.y }]; return p; }
  const quanti = () => Math.max(10, Math.min(38, Math.round(W * H / 42000)));

  function misura() {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = quanti();
    while (impulsi.length < n) impulsi.push(inCampo());
    impulsi.length = n;
  }

  function scegliDirezione(p) {
    const opzioni = [p.d, (p.d + 1) % 4, (p.d + 3) % 4];         // dritto, destra, sinistra (mai indietro)
    const sy = p.y + oy, dist = Math.hypot(p.x - mouse.x, sy - mouse.y);
    if (dist < 280 && performance.now() - mouse.t < 4000 && Math.random() < 0.62) {
      // verso il puntatore: la direzione che riduce di più la distanza di Manhattan
      let meglio = p.d, dm = Infinity;
      for (const d of opzioni) { const nx = p.x + DIR[d][0] * G, ny = sy + DIR[d][1] * G; const m = Math.abs(nx - mouse.x) + Math.abs(ny - mouse.y); if (m < dm) { dm = m; meglio = d; } }
      return meglio;
    }
    const r = Math.random();
    return r < 0.72 ? p.d : r < 0.86 ? opzioni[1] : opzioni[2];
  }

  function avanza(p, dt) {
    let resto = p.v * dt;
    while (resto > 0) {
      // distanza dal prossimo incrocio nella direzione di marcia
      const [dx, dy] = DIR[p.d];
      const pos = dx ? p.x : p.y, passo = dx || dy;
      const prossimo = passo > 0 ? Math.floor(pos / G + 1e-6) * G + G : Math.ceil(pos / G - 1e-6) * G - G;
      const manca = Math.abs(prossimo - pos);
      if (manca > resto) { if (dx) p.x += dx * resto; else p.y += dy * resto; resto = 0; }
      else {
        if (dx) p.x = prossimo; else p.y = prossimo;
        resto -= manca;
        const nd = scegliDirezione(p);
        if (nd !== p.d) { p.scia.push({ x: p.x, y: p.y }); if (p.scia.length > 8) p.scia.shift(); p.d = nd; }
      }
    }
    p.vita += dt;
  }

  function fuori(p) { const sy = p.y + oy; return p.x < -G * 3 || p.x > W + G * 3 || sy < -G * 3 || sy > H + G * 3; }

  function disegnaGriglia() {
    const f = colori.forza;
    ctx.lineWidth = 1;
    ctx.strokeStyle = rgba(colori.linea, 0.055 * f);
    ctx.beginPath();
    for (let x = 0.5; x <= W; x += G) { ctx.moveTo(x, 0); ctx.lineTo(x, H); }
    const inizio = ((oy % G) + G) % G;
    for (let y = inizio + 0.5; y <= H; y += G) { ctx.moveTo(0, y); ctx.lineTo(W, y); }
    ctx.stroke();
    // incroci accesi vicino al puntatore
    if (mouse.x > -999) {
      const R = 210, x0 = Math.floor((mouse.x - R) / G) * G, x1 = mouse.x + R, y0 = Math.floor((mouse.y - R - inizio) / G) * G + inizio;
      for (let x = x0; x <= x1; x += G) for (let y = y0; y <= mouse.y + R; y += G) {
        const d = Math.hypot(x - mouse.x, y - mouse.y);
        if (d > R) continue;
        const k = (1 - d / R) ** 2;
        if (0.75 * k * f * colori.picco < 3) continue;   // sotto 3/255: su un OLED non si vede, sugli altri schermi allargherebbe la zona
        ctx.fillStyle = rgba(colori.impulso, 0.75 * k * f);
        ctx.fillRect(x - 1.5, y - 1.5, 3, 3);
      }
      if (!aloneImg) aloneImg = preparaAlone(colori.impulso);
      ctx.globalAlpha = f;
      ctx.drawImage(aloneImg, mouse.x - ALONE, mouse.y - ALONE, ALONE * 2, ALONE * 2);
      ctx.globalAlpha = 1;
    }
  }

  function disegnaImpulso(p) {
    const c = p.caldo ? colori.caldo : colori.impulso, f = colori.forza;
    const punti = [...p.scia, { x: p.x, y: p.y }].map(q => ({ x: q.x, y: q.y + oy }));
    // scia: dalla testa all'indietro, fino a p.lungo pixel, sempre più tenue
    let fatto = 0;
    ctx.lineCap = 'round';
    for (let i = punti.length - 1; i > 0 && fatto < p.lungo; i--) {
      const a = punti[i], b = punti[i - 1];
      let len = Math.hypot(a.x - b.x, a.y - b.y);
      if (!len) continue;
      const usa = Math.min(len, p.lungo - fatto);
      const bx = a.x + (b.x - a.x) * usa / len, by = a.y + (b.y - a.y) * usa / len;
      const g = ctx.createLinearGradient(a.x, a.y, bx, by);
      g.addColorStop(0, rgba(c, 0.85 * (1 - fatto / p.lungo) * f));
      g.addColorStop(1, rgba(c, 0.85 * (1 - (fatto + usa) / p.lungo) * f));
      ctx.strokeStyle = g; ctx.lineWidth = 1.6;
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(bx, by); ctx.stroke();
      fatto += usa;
    }
    const t = punti[punti.length - 1];
    const alone = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, 9);
    alone.addColorStop(0, rgba(c, 0.55 * f)); alone.addColorStop(1, rgba(c, 0));
    ctx.fillStyle = alone; ctx.fillRect(t.x - 9, t.y - 9, 18, 18);
    ctx.fillStyle = rgba(c, 0.95 * f); ctx.beginPath(); ctx.arc(t.x, t.y, 1.7, 0, Math.PI * 2); ctx.fill();
  }

  function disegnaOnde(dt) {
    onde = onde.filter(o => (o.t += dt) < o.durata);
    for (const o of onde) {
      const k = o.t / o.durata, r = 18 + k * o.raggio, a = (1 - k) ** 1.6 * 0.5 * colori.forza;
      ctx.strokeStyle = rgba(colori.impulso, a); ctx.lineWidth = 1.4;
      ctx.beginPath(); ctx.moveTo(o.x, o.y + oy - r); ctx.lineTo(o.x + r, o.y + oy); ctx.lineTo(o.x, o.y + oy + r); ctx.lineTo(o.x - r, o.y + oy); ctx.closePath(); ctx.stroke();
    }
  }

  function fotogramma(t) {
    raf = 0;
    const dt = Math.max(0, Math.min(0.05, (t - (ultimo || t)) / 1000)); ultimo = t;
    ctx.clearRect(0, 0, W, H);
    oy = base - window.scrollY * 0.12;
    disegnaGriglia();
    for (let i = 0; i < impulsi.length; i++) {
      const p = impulsi[i];
      avanza(p, dt);
      if (fuori(p)) { impulsi[i] = nuovoImpulso(); if (p.extra) { impulsi.splice(i, 1); i--; } continue; }
      disegnaImpulso(p);
    }
    disegnaOnde(dt);
    if (!fermo) raf = requestAnimationFrame(fotogramma);
  }

  function statico() {
    // animazioni spente: resta solo lo sfondo della pagina, senza reticolo, impulsi né onde
    cancelAnimationFrame(raf); raf = 0;
    ctx.clearRect(0, 0, W, H); oy = 0;
  }
  function aggiorna() {
    fermo = root.classList.contains('meno-moto') || document.hidden;
    if (fermo) statico(); else if (!raf) { ultimo = 0; fotogramma(performance.now()); }   // il primo fotogramma subito
  }

  /* ---------- passaggio da una pagina all'altra ---------- */
  // Lo stato lo scrive solo questo script, ma la sessionStorage è di tutta l'origine: ogni valore letto è controllato
  // (numeri finiti, dentro limiti ragionevoli) e le liste hanno un tetto; se qualcosa non torna si riparte da capo.
  const num = (v, a, b) => typeof v === 'number' && Number.isFinite(v) && v >= a && v <= b;
  const tondo = v => Math.round(v * 10) / 10;
  function salvaStato() {
    if (root.classList.contains('meno-moto') || !W) return;
    const stato = {
      v: 1, t: Date.now(), W, H, oy: tondo(oy),
      m: mouse.x > -999 && mouse.tipo !== 'touch' ? [tondo(mouse.x), tondo(mouse.y), Math.min(6e4, Math.round(performance.now() - mouse.t))] : null,
      p: impulsi.slice(0, 80).map(p => [tondo(p.x), tondo(p.y), p.d, tondo(p.v), p.caldo ? 1 : 0, tondo(p.vita), tondo(p.lungo), p.extra ? 1 : 0,
        p.scia.slice(-8).flatMap(q => [tondo(q.x), tondo(q.y)])]),
      o: onde.slice(-8).map(o => [tondo(o.x), tondo(o.y), Math.round(o.t * 1000) / 1000, o.durata, o.raggio]),
    };
    salvatoAlle = stato.t;
    try { sessionStorage.setItem(STATO, JSON.stringify(stato)); } catch (e) { /* memoria della scheda non disponibile */ }
  }
  function riprendi(dopo = 0) {   // dopo: si accetta solo uno stato più recente di questo istante
    let s = null;
    try { s = JSON.parse(sessionStorage.getItem(STATO)); } catch (e) { return false; }
    const eta = s ? Date.now() - s.t : NaN;
    if (!s || s.v !== 1 || !num(s.t, dopo + 1, 1e14) || !num(eta, 0, 5000) || !num(s.W, 1, 1e5) || !num(s.H, 1, 1e5) || !num(s.oy, -1e7, 1e7)) return false;
    // la rete resta dov'era anche se la pagina nuova parte da un'altra posizione di scorrimento
    oy = s.oy; base = s.oy + window.scrollY * 0.12; yRipresa = window.scrollY;
    const m = s.m;
    if (Array.isArray(m) && m.length === 3 && num(m[0], -50, W + 50) && num(m[1], -50, H + 50) && num(m[2], 0, 6e4)) {
      mouse.x = m[0]; mouse.y = m[1]; mouse.t = performance.now() - m[2]; mouse.tipo = 'mouse';
    }
    // impulsi e onde solo con la finestra della stessa misura: altrimenti non cadrebbero sulle linee giuste
    if (Math.abs(s.W - W) > 2 || Math.abs(s.H - H) > 2 || !Array.isArray(s.p) || s.p.length > 80 || !Array.isArray(s.o) || s.o.length > 8) return true;
    const lim = 4 * G, inVista = (x, y) => num(x, -lim, W + lim) && num(y + oy, -lim, H + lim);
    const nuovi = [], nuoveOnde = [];
    for (const q of s.p) {
      if (!Array.isArray(q) || q.length !== 9) return true;
      const [x, y, d, v, caldo, vita, lungo, extra, scia] = q;
      if (!inVista(x, y) || ![0, 1, 2, 3].includes(d) || !num(v, 20, 400) || (caldo !== 0 && caldo !== 1) || !num(vita, 0, 1e5)
        || !num(lungo, 10, 400) || (extra !== 0 && extra !== 1) || !Array.isArray(scia) || scia.length % 2 || scia.length > 16) return true;
      const punti = [];
      for (let i = 0; i < scia.length; i += 2) { if (!inVista(scia[i], scia[i + 1])) return true; punti.push({ x: scia[i], y: scia[i + 1] }); }
      nuovi.push({ x, y, d, v, caldo: caldo === 1, scia: punti.length ? punti : [{ x, y }], vita, lungo, extra: extra === 1 });
    }
    for (const o of s.o) {
      if (!Array.isArray(o) || o.length !== 5 || !inVista(o[0], o[1]) || !num(o[3], 0.1, 10) || !num(o[2], 0, o[3]) || !num(o[4], 10, 2000)) return true;
      nuoveOnde.push({ x: o[0], y: o[1], t: o[2], durata: o[3], raggio: o[4] });
    }
    impulsi = nuovi; onde = nuoveOnde;
    for (let k = impulsi.filter(p => !p.extra).length, n = quanti(); k < n; k++) impulsi.push(inCampo());
    // avanti di quanto è durato il cambio di pagina (al massimo un secondo): il movimento continua senza salti
    const dt = Math.min(1, eta / 1000);
    for (const p of impulsi) avanza(p, dt);
    onde = onde.filter(o => (o.t += dt) < o.durata);
    return true;
  }

  window.addEventListener('pointermove', e => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.t = performance.now(); mouse.tipo = e.pointerType; }, { passive: true });
  document.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
  window.addEventListener('blur', () => { mouse.x = mouse.y = -9999; });
  window.addEventListener('pointerdown', e => {
    if (fermo || e.target.closest('a, button, input, label, summary, select, textarea, .sim, .foglio')) return;
    const x = Math.round(e.clientX / G) * G, y = Math.round((e.clientY - oy) / G) * G;
    onde.push({ x, y, t: 0, durata: 1.3, raggio: 300 });
    for (let d = 0; d < 4; d++) { const p = nuovoImpulso({ x, y, d, v: 230, caldo: d % 2 === 1 }); p.extra = true; p.lungo = 120; impulsi.push(p); }
  }, { passive: true });
  window.addEventListener('resize', () => { misura(); if (fermo) statico(); });
  window.addEventListener('scroll', () => { if (fermo) return; if (!raf) raf = requestAnimationFrame(fotogramma); }, { passive: true });
  document.addEventListener('visibilitychange', aggiorna);
  window.addEventListener('appunti:moto', aggiorna);
  window.addEventListener('appunti:tema', () => { leggiColori(); if (fermo) statico(); });
  window.addEventListener('pagehide', salvaStato);
  // con Indietro/Avanti la pagina torna dalla cache del browser: lo stato della pagina appena lasciata diventa leggibile
  // solo al primo fotogramma, quindi si riprende a «pagereveal» (se il browser non lo conosce, subito)
  const ricomincia = () => { if (riprendi(salvatoAlle)) { cancelAnimationFrame(raf); raf = 0; aggiorna(); } };
  window.addEventListener('pageshow', e => { if (!e.persisted) return; if ('onpagereveal' in window) tornata = true; else ricomincia(); });
  // un link con àncora (#corsi) fa scorrere la pagina nuova mentre si apre: quello scorrimento non deve spostare la rete ripresa
  window.addEventListener('pagereveal', () => { if (tornata) { tornata = false; ricomincia(); } if (yRipresa !== null) { base += (window.scrollY - yRipresa) * 0.12; oy = base - window.scrollY * 0.12; yRipresa = null; } });

  leggiColori(); misura(); riprendi(); aggiorna();
})();
