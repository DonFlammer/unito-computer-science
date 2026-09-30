// Sfondo animato degli appunti: una rete a quadretti percorsa da impulsi di luce, come segnali su un circuito.
// Gli impulsi corrono lungo le linee e agli incroci possono girare; vicino al puntatore gli incroci si accendono e gli impulsi
// tendono ad andargli incontro; un clic fa partire un'onda (un rombo: la «circonferenza» nella distanza di Manhattan) e quattro impulsi.
// Si spegne col pulsante «Animazioni» (html.meno-moto: resta lo sfondo semplice) e si ferma quando la scheda non è visibile.
(() => {
  const canvas = document.getElementById('rete');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  const root = document.documentElement;
  const G = 44;                                   // passo della griglia, in pixel
  let W = 0, H = 0, dpr = 1, oy = 0, fermo = false, ultimo = 0, raf = 0;
  let impulsi = [], onde = [], colori = null;
  const mouse = { x: -9999, y: -9999, t: 0 };
  const caso = (a, b) => a + Math.random() * (b - a);
  const DIR = [[1, 0], [0, 1], [-1, 0], [0, -1]];

  function leggiColori() {
    const cs = getComputedStyle(root);
    const v = n => cs.getPropertyValue(n).trim() || '127, 168, 255';
    colori = { linea: v('--rete-linea'), impulso: v('--rete-impulso'), caldo: v('--rete-caldo'), forza: parseFloat(cs.getPropertyValue('--rete-forza')) || 1 };
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

  function misura() {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.max(10, Math.min(38, Math.round(W * H / 42000)));
    while (impulsi.length < n) { const p = nuovoImpulso(); p.x = Math.round(caso(0, W) / G) * G; p.scia = [{ x: p.x, y: p.y }]; impulsi.push(p); }
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
        ctx.fillStyle = rgba(colori.impulso, 0.75 * k * f);
        ctx.fillRect(x - 1.5, y - 1.5, 3, 3);
      }
      const alone = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 240);
      alone.addColorStop(0, rgba(colori.impulso, 0.07 * f));
      alone.addColorStop(1, rgba(colori.impulso, 0));
      ctx.fillStyle = alone;
      ctx.fillRect(mouse.x - 240, mouse.y - 240, 480, 480);
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
    const dt = Math.min(0.05, (t - (ultimo || t)) / 1000); ultimo = t;
    ctx.clearRect(0, 0, W, H);
    oy = -window.scrollY * 0.12;
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
    if (fermo) statico(); else if (!raf) { ultimo = 0; raf = requestAnimationFrame(fotogramma); }
  }

  window.addEventListener('pointermove', e => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.t = performance.now(); }, { passive: true });
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

  leggiColori(); misura(); aggiorna();
})();
