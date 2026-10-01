// Sfondo animato degli appunti: una rete a quadretti percorsa da impulsi di luce, come segnali su un circuito.
// Gli impulsi corrono lungo le linee e agli incroci possono girare; vicino al puntatore gli incroci si accendono e gli impulsi
// tendono ad andargli incontro; un clic fa partire un'onda (un rombo: la «circonferenza» nella distanza di Manhattan) e quattro impulsi.
// Cambiando pagina lo stato (impulsi, onde, puntatore) passa alla pagina nuova attraverso la sessionStorage della scheda:
// lo sfondo continua da dove era invece di ripartire da capo.
// Si spegne col pulsante «Animazioni» (html.meno-moto: resta lo sfondo semplice); si ferma quando la scheda non è visibile
// o la finestra non è in primo piano, e riparte da dove era.
// Lo script sta subito dopo lo sfondo, non in fondo: lo sfondo c'è già nel primo fotogramma anche nelle pagine lunghe.
//
// Per consumare poco lo sfondo è fatto di tre strati (dentro .sfondo) e a ogni fotogramma cambia solo una parte piccola:
// - canvas.griglia: il reticolo, disegnato una volta sola (di nuovo solo se cambiano la misura della finestra o il tema),
//   già più tenue dietro la colonna del testo; lo scorrimento lo sposta con una trasformazione, senza ridisegnarlo;
// - canvas.incroci: un quadrato attorno al puntatore con gli incroci accesi, ridisegnato solo quando il puntatore si muove
//   (o quando lo scorrimento sposta il reticolo sotto il puntatore);
// - canvas#rete: impulsi e onde; a ogni fotogramma si cancellano e si ridisegnano solo i rettangoli attorno agli impulsi,
//   copiando pezzi già pronti da un'immagine preparata una volta (l'«atlante»: scie e teste in tutti i colori, versi e
//   posizioni sotto il pixel), così il browser li disegna tutti insieme.
// Circa 30 fotogrammi al secondo (60 finché ci sono l'onda e gli impulsi veloci di un clic), qualunque sia lo schermo;
// reticolo e incroci a un pixel del canvas per pixel CSS (ingranditi a pixel netti), impulsi alla risoluzione dello schermo
// (al massimo 2 pixel per pixel CSS). Niente maschere o filtri sopra gli strati che si muovono: la sfumatura ai lati è già
// nei disegni.
(() => {
  const root = document.documentElement;
  // arrivo da un'altra pagina con la dissolvenza (view transition): html.arrivo dice a CSS e appunti.js di saltare le entrate
  window.addEventListener('pagereveal', e => { if (e.viewTransition) root.classList.add('arrivo'); });
  const canvas = document.getElementById('rete');
  const sfondo = canvas && canvas.closest('.sfondo');
  const tela = sfondo && sfondo.querySelector('canvas.griglia'), telaInc = sfondo && sfondo.querySelector('canvas.incroci');
  if (!canvas || !canvas.getContext || !tela || !telaInc) return;
  const ctx = canvas.getContext('2d'), gctx = tela.getContext('2d'), ictx = telaInc.getContext('2d');
  const atlante = document.createElement('canvas'), actx = atlante.getContext('2d');
  if (!ctx || !gctx || !ictx || !actx) return;
  const G = 44;                                   // passo della griglia, in pixel
  const R = 210;                                  // raggio degli incroci accesi attorno al puntatore
  const LATO = 2 * R + 12;                        // lato del canvas degli incroci
  const STATO = 'sfondo:rete';                    // chiave dello stato passato da una pagina all'altra
  const PASSO = 1000 / 30, PASSO_VELOCE = 1000 / 60;   // tempo tra due fotogrammi: di solito e durante l'onda di un clic
  const RISOLUZIONE_IMPULSI = 0;                  // pixel del canvas #rete per pixel CSS (0: come lo schermo, al massimo 2)
  const stretto = window.matchMedia('(max-width: 900px)');   // schermi stretti: niente sfumatura ai lati, tutto a metà
  let W = 0, H = 0, Wv = 0, dpr = 1, rg = 1, ri = 1, sy = 0, oy = 0, base = 0, ty = NaN, ridotto = false;
  let spento = true, fermo = true, primoPiano = true, ultimo = 0, raf = 0, timer = 0, subito = false;
  let yRipresa = null, salvatoAlle = 0, tornata = false, vuoto = true, incrociDaFare = true, incrociAccesi = false, veloci = 0;
  let impulsi = [], onde = [], colori = null, stili = null;
  const mouse = { x: -9999, y: -9999, t: 0, tipo: '' };
  const caso = (a, b) => a + Math.random() * (b - a);
  const DIR = [[1, 0], [0, 1], [-1, 0], [0, -1]];
  // rettangoli disegnati nel fotogramma (pixel del canvas #rete): si cancellano al fotogramma dopo
  const MAX_RETT = 512, sporchi = new Float64Array(MAX_RETT * 4), uniti = new Float64Array(MAX_RETT * 4);
  let nSporchi = 0, rx0 = 0, ry0 = 0, rx1 = 0, ry1 = 0;

  function leggiColori() {
    const cs = getComputedStyle(root);
    const v = n => cs.getPropertyValue(n).trim() || '127, 168, 255';
    colori = { linea: v('--rete-linea'), impulso: v('--rete-impulso'), caldo: v('--rete-caldo'), forza: parseFloat(cs.getPropertyValue('--rete-forza')) || 1 };
    colori.picco = Math.max(...colori.impulso.split(',').map(Number)) || 224;
  }
  // Niente alone luminoso attorno al puntatore (tolto il 01/10/2026): vicino al puntatore si accendono solo gli incroci.
  const rgba = (c, a) => `rgba(${c}, ${Math.max(0, Math.min(1, a)).toFixed(3)})`;

  // sfumatura orizzontale come quella che prima stava nel CSS: piena ai lati, al 34% dietro la colonna del testo
  // (dal 20% all'80% della larghezza); sugli schermi stretti niente sfumatura ma tutto a metà.
  // inversa: l'opacità che si toglie (per «destination-out»); scala: pixel del canvas per pixel CSS
  function sfumatura(c2d, colore, a, inversa = false, scala = 1) {
    const k = v => (inversa ? 1 - v : v) * a;
    if (ridotto) return rgba(colore, k(0.5));
    const g = c2d.createLinearGradient(0, 0, Wv * scala, 0);
    g.addColorStop(0, rgba(colore, k(1))); g.addColorStop(0.2, rgba(colore, k(0.34)));
    g.addColorStop(0.8, rgba(colore, k(0.34))); g.addColorStop(1, rgba(colore, k(1)));
    return g;
  }

  /* ---------- atlante: scie e teste già disegnate ---------- */
  // Strisce di scia lunghe N e spesse T, con l'opacità che sale linearmente da un capo all'altro: una copia di un tratto
  // della striscia, allungata sul tratto di scia, dà proprio la sfumatura giusta. Per ogni colore: orizzontali e verticali,
  // chiare in fondo (verso 0) o all'inizio (verso 1), con la riga spostata di 0, 1/4, 2/4, 3/4 di pixel (fase).
  // Teste (alone e punto) con il centro spostato di quarti di pixel in x e in y. Tutto in pixel del canvas #rete.
  const N = 256, FASI = 4, PAD = 2;
  let T = 0, HS = 0, Y_TESTE = 0;
  const riga = (c, verso, fase) => ((c * 2 + verso) * FASI + fase) * (T + PAD);                      // y delle strisce orizzontali
  const colonna = (c, verso, fase) => N + PAD * 2 + ((c * 2 + verso) * FASI + fase) * (T + PAD);    // x di quelle verticali
  const cella = (c, fx, fy) => [((c * 16 + fy * 4 + fx) % 8) * (HS + PAD), Y_TESTE + Math.floor((c * 16 + fy * 4 + fx) / 8) * (HS + PAD)];
  const celle = [];
  let atlanteFatto = '';                          // colori e risoluzione con cui è stato disegnato l'atlante
  function preparaAtlante() {
    const chiave = [colori.impulso, colori.caldo, colori.forza, ri].join('|');
    if (chiave === atlanteFatto) return;
    atlanteFatto = chiave;
    T = Math.ceil(1.6 * ri) + 4; HS = 2 * Math.ceil(9 * ri + 1); Y_TESTE = Math.max(16 * (T + PAD), N) + PAD * 2;   // teste sotto le strisce
    atlante.width = Math.max(N + PAD * 2 + 16 * (T + PAD), 8 * (HS + PAD));
    atlante.height = Y_TESTE + 4 * (HS + PAD);
    const f = colori.forza, w = 1.6 * ri;
    [colori.impulso, colori.caldo].forEach((col, c) => {
      for (let verso = 0; verso < 2; verso++) {
        // opacità al centro del pixel i: (i + 0.5) / N salendo (verso 0) o scendendo (verso 1)
        const gh = actx.createLinearGradient(0, 0, N, 0), gv = actx.createLinearGradient(0, 0, 0, N);
        for (const g of [gh, gv]) { g.addColorStop(0, rgba(col, verso ? 1 - 0.5 / N : 0.5 / N)); g.addColorStop(1, rgba(col, verso ? 0.5 / N : 1 - 0.5 / N)); }
        for (let fase = 0; fase < FASI; fase++) {
          const centro = T / 2 + fase / FASI;
          actx.setTransform(1, 0, 0, 1, 0, riga(c, verso, fase)); actx.fillStyle = gh; actx.fillRect(0, centro - w / 2, N, w);
          actx.setTransform(1, 0, 0, 1, colonna(c, verso, fase), 0); actx.fillStyle = gv; actx.fillRect(centro - w / 2, 0, w, N);
        }
      }
      // testa: alone (0.55) e sopra il punto (0.95), come prima
      const alone = actx.createRadialGradient(0, 0, 0, 0, 0, 9);
      alone.addColorStop(0, rgba(col, 0.55 * f)); alone.addColorStop(1, rgba(col, 0));
      for (let fy = 0; fy < FASI; fy++) for (let fx = 0; fx < FASI; fx++) {
        const [x, y] = cella(c, fx, fy);
        celle[(c * FASI + fy) * FASI + fx] = [x, y];
        actx.setTransform(ri, 0, 0, ri, x + HS / 2 + fx / FASI, y + HS / 2 + fy / FASI);
        actx.fillStyle = alone; actx.fillRect(-9, -9, 18, 18);
        actx.fillStyle = rgba(col, 0.95 * f); actx.beginPath(); actx.arc(0, 0, 1.7, 0, 2 * Math.PI); actx.fill();
      }
    });
    actx.setTransform(1, 0, 0, 1, 0, 0);
  }

  // colori e sfumature preparati una volta (dopo ogni cambio di tema o di misura): a ogni fotogramma si riusano; l'atlante
  // si ridisegna solo se cambiano i colori o la risoluzione
  function preparaStili() {
    ridotto = stretto.matches;
    stili = {
      togli: sfumatura(ctx, '0, 0, 0', 1, true, ri),            // per «destination-out»: conta solo l'opacità
      onda: sfumatura(ctx, colori.impulso, 1),
      linea: sfumatura(gctx, colori.linea, 0.055 * colori.forza),
      incroci: sfumatura(ictx, colori.impulso, 1),
      scia: 0.85 * colori.forza,
    };
    preparaAtlante();
  }

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
    dpr = window.devicePixelRatio || 1;
    // reticolo e incroci a un pixel del canvas per pixel CSS, ingranditi senza sfocare (pixel netti), se lo schermo ha un
    // numero intero di pixel per pixel CSS: viene identico a disegnarli a piena risoluzione; altrimenti a piena risoluzione
    const intero = Math.abs(dpr - Math.round(dpr)) < 0.01;
    rg = intero ? 1 : Math.min(2, dpr);
    const netto = intero && dpr > 1 ? 'pixelated' : 'auto';
    W = window.innerWidth; H = window.innerHeight;
    Wv = sfondo.clientWidth || W;
    const hg = H + G + 2;
    tela.width = Math.ceil(W * rg); tela.height = Math.ceil(hg * rg);
    tela.style.width = W + 'px'; tela.style.height = hg + 'px'; tela.style.imageRendering = netto;
    telaInc.width = telaInc.height = Math.ceil(LATO * rg);
    telaInc.style.width = telaInc.style.height = LATO + 'px'; telaInc.style.imageRendering = netto;
    ri = RISOLUZIONE_IMPULSI || Math.min(2, dpr);
    canvas.width = Math.round(W * ri); canvas.height = Math.round(H * ri);
    canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
    nSporchi = 0; ty = NaN; incrociAccesi = false; incrociDaFare = true;
    const n = quanti();
    while (impulsi.length < n) impulsi.push(inCampo());
    impulsi.length = n;
  }

  function scegliDirezione(p) {
    const opzioni = [p.d, (p.d + 1) % 4, (p.d + 3) % 4];         // dritto, destra, sinistra (mai indietro)
    const sy0 = p.y + oy, dist = Math.hypot(p.x - mouse.x, sy0 - mouse.y);
    if (dist < 280 && performance.now() - mouse.t < 4000 && Math.random() < 0.62) {
      // verso il puntatore: la direzione che riduce di più la distanza di Manhattan
      let meglio = p.d, dm = Infinity;
      for (const d of opzioni) { const nx = p.x + DIR[d][0] * G, ny = sy0 + DIR[d][1] * G; const m = Math.abs(nx - mouse.x) + Math.abs(ny - mouse.y); if (m < dm) { dm = m; meglio = d; } }
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

  function fuori(p) { const s = p.y + oy; return p.x < -G * 3 || p.x > W + G * 3 || s < -G * 3 || s > H + G * 3; }

  // posizione del reticolo: scorre di 0.12 pixel per ogni pixel di pagina, a passi di un pixel dello schermo
  function posizioneReticolo() {
    oy = base - sy * 0.12;
    const inizio = ((oy % G) + G) % G;
    const t = Math.round((inizio - G) * dpr) / dpr;
    if (t !== ty) { ty = t; tela.style.transform = `translate3d(0, ${ty}px, 0)`; incrociDaFare = true; }
  }

  // reticolo: righe a x = 0.5 + kG e y = 0.5 + kG nel canvas, che sta più in alto di una maglia e scende con lo scorrimento
  function disegnaGriglia() {
    gctx.setTransform(1, 0, 0, 1, 0, 0);
    gctx.clearRect(0, 0, tela.width, tela.height);
    gctx.setTransform(rg, 0, 0, rg, 0, 0);
    gctx.lineWidth = 1; gctx.strokeStyle = stili.linea;      // un solo tratto per tutte le righe: gli incroci non si sommano
    gctx.beginPath();
    const hg = H + G + 2;
    for (let x = 0.5; x <= W; x += G) { gctx.moveTo(x, 0); gctx.lineTo(x, hg); }
    for (let y = 0.5; y <= hg; y += G) { gctx.moveTo(0, y); gctx.lineTo(W, y); }
    gctx.stroke();
  }

  // incroci accesi vicino al puntatore: quadratini di 3 pixel centrati sugli incroci delle righe, più accesi più sono vicini
  function disegnaIncroci() {
    incrociDaFare = false;
    if (incrociAccesi) { ictx.setTransform(1, 0, 0, 1, 0, 0); ictx.clearRect(0, 0, telaInc.width, telaInc.height); incrociAccesi = false; }
    if (mouse.x <= -999 || spento) return;
    const mx = mouse.x, my = mouse.y - ty;                   // puntatore nelle coordinate del reticolo
    const x0 = Math.floor(mx) - R - 6, y0 = Math.floor(my) - R - 6;
    telaInc.style.transform = `translate3d(${x0}px, ${y0 + ty}px, 0)`;
    ictx.setTransform(rg, 0, 0, rg, -x0 * rg, -y0 * rg);
    ictx.fillStyle = stili.incroci;
    const f = colori.forza;
    for (let x = Math.ceil((mx - R - 0.5) / G) * G; x <= mx + R; x += G) {
      for (let y = Math.ceil((my - R - 0.5) / G) * G; y <= my + R; y += G) {
        const d = Math.hypot(x + 0.5 - mx, y + 0.5 - my);
        if (d > R) continue;
        const k = (1 - d / R) ** 2;
        if (0.75 * k * f * colori.picco < 3) continue;   // sotto 3/255: su un OLED non si vede, sugli altri schermi allargherebbe la zona
        ictx.globalAlpha = 0.75 * k * f;
        ictx.fillRect(x - 1, y - 1, 3, 3);
      }
    }
    ictx.globalAlpha = 1;
    incrociAccesi = true;
  }

  // un tratto di striscia da a a b (a < b, lungo x o lungo y), con la riga centrata su «centro» e opacità aa in a e ab in b
  function striscia(c, verticale, a, b, centro, aa, ab) {
    if (b - a < 0.05 || (aa <= 0.002 && ab <= 0.002)) return;
    let verso, g, u0, u1;
    if (ab >= aa) { verso = 0; g = ab; u0 = N * aa / ab; u1 = N; }          // più chiara in fondo
    else { verso = 1; g = aa; u0 = 0; u1 = N * (1 - ab / aa); }             // più chiara all'inizio
    if (u1 - u0 < 1) { if (verso) u1 = u0 + 1; else u0 = u1 - 1; }          // opacità quasi costante: un pixel della striscia
    const alto = centro - T / 2;
    let p = Math.floor(alto), fase = Math.round((alto - p) * FASI);
    if (fase === FASI) { p++; fase = 0; }
    ctx.globalAlpha = Math.min(1, g);
    if (verticale) {
      ctx.drawImage(atlante, colonna(c, verso, fase), u0, T, u1 - u0, p, a, T, b - a);
      if (p < rx0) rx0 = p; if (p + T > rx1) rx1 = p + T; if (a < ry0) ry0 = a; if (b > ry1) ry1 = b;
    } else {
      ctx.drawImage(atlante, u0, riga(c, verso, fase), u1 - u0, T, a, p, b - a, T);
      if (a < rx0) rx0 = a; if (b > rx1) rx1 = b; if (p < ry0) ry0 = p; if (p + T > ry1) ry1 = p + T;
    }
  }
  // opacità della scia a distanza s dalla testa (lunghezza L)
  const opacita = (s, L) => stili.scia * Math.max(0, 1 - s / L);

  // impulso: scia dalla testa all'indietro, fino a p.lungo pixel, sempre più tenue (opacità 0.85 → 0), poi la testa.
  // Tutto a piena opacità: la sfumatura dei lati si applica dopo, sul disegno finito (vedi sfuma), come faceva la maschera
  // CSS; applicarla a ogni pezzo farebbe sommare scia e testa dove si sovrappongono (teste più accese al centro)
  function disegnaImpulso(p) {
    const c = p.caldo ? 1 : 0, L = p.lungo, k = ri;
    const hx = p.x, hy = p.y + oy;                           // in pixel CSS; i disegni in pixel del canvas (× k)
    rx0 = (hx - 10) * k; ry0 = (hy - 10) * k; rx1 = (hx + 10) * k; ry1 = (hy + 10) * k;
    let ax = hx, ay = hy, fatto = 0;
    for (let i = p.scia.length - 1; i >= 0 && fatto < L; i--) {
      const bx = p.scia[i].x, by = p.scia[i].y + oy;
      const len = Math.hypot(bx - ax, by - ay);
      if (!len) continue;
      const usa = Math.min(len, L - fatto);
      const ux = (bx - ax) / len, uy = (by - ay) / len;
      // 0.8 pixel in più ai due capi (come le punte arrotondate di prima): le giunture restano piene
      const s0 = fatto - 0.8, s1 = fatto + usa + 0.8;
      const oa = opacita(s0, L), ob = opacita(s1, L);         // capo verso la testa e capo verso la coda
      if (Math.abs(uy) < 1e-6) {                             // orizzontale
        const xa = (ax + ux * (s0 - fatto)) * k, xb = (ax + ux * (s1 - fatto)) * k;
        if (xa < xb) striscia(c, false, xa, xb, hy * k, oa, ob); else striscia(c, false, xb, xa, hy * k, ob, oa);
      } else if (Math.abs(ux) < 1e-6) {                      // verticale
        const ya = (ay + uy * (s0 - fatto)) * k, yb = (ay + uy * (s1 - fatto)) * k;
        if (ya < yb) striscia(c, true, ya, yb, ax * k, oa, ob); else striscia(c, true, yb, ya, ax * k, ob, oa);
      }
      fatto += usa; ax = bx; ay = by;
    }
    // testa: la cella con il centro più vicino al punto vero (quarti di pixel)
    const sx0 = hx * k - HS / 2, sy0 = hy * k - HS / 2;
    let dx = Math.floor(sx0), dy = Math.floor(sy0), fx = Math.round((sx0 - dx) * FASI), fy = Math.round((sy0 - dy) * FASI);
    if (fx === FASI) { dx++; fx = 0; } if (fy === FASI) { dy++; fy = 0; }
    const cl = celle[(c * FASI + fy) * FASI + fx];
    ctx.globalAlpha = 1;
    ctx.drawImage(atlante, cl[0], cl[1], HS, HS, dx, dy, HS, HS);
    segna(rx0 - 1, ry0 - 1, rx1 + 1, ry1 + 1);
  }

  function segna(x0, y0, x1, y1) {   // rettangolo da cancellare al prossimo fotogramma, in pixel del canvas (interi, dentro il canvas)
    if (nSporchi >= MAX_RETT) return;
    x0 = Math.max(0, Math.floor(x0)); y0 = Math.max(0, Math.floor(y0)); x1 = Math.min(canvas.width, Math.ceil(x1)); y1 = Math.min(canvas.height, Math.ceil(y1));
    if (x1 <= x0 || y1 <= y0) return;
    const i = nSporchi++ * 4;
    sporchi[i] = x0; sporchi[i + 1] = y0; sporchi[i + 2] = x1; sporchi[i + 3] = y1;
  }

  // la sfumatura dei lati sugli impulsi appena disegnati: una passata «destination-out» (toglie l'opacità del colore
  // passato: niente ai lati, il 66% al centro) sui loro rettangoli, uniti finché non se ne sovrappone più nessuno, così
  // nessun punto viene attenuato due volte
  function sfuma() {
    let n = nSporchi;
    for (let i = 0; i < n * 4; i++) uniti[i] = sporchi[i];
    for (let cambiato = true; cambiato;) {
      cambiato = false;
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          const a = i * 4, b = j * 4;
          if (uniti[a] < uniti[b + 2] && uniti[b] < uniti[a + 2] && uniti[a + 1] < uniti[b + 3] && uniti[b + 1] < uniti[a + 3]) {
            uniti[a] = Math.min(uniti[a], uniti[b]); uniti[a + 1] = Math.min(uniti[a + 1], uniti[b + 1]);
            uniti[a + 2] = Math.max(uniti[a + 2], uniti[b + 2]); uniti[a + 3] = Math.max(uniti[a + 3], uniti[b + 3]);
            n--; const c = n * 4;
            uniti[b] = uniti[c]; uniti[b + 1] = uniti[c + 1]; uniti[b + 2] = uniti[c + 2]; uniti[b + 3] = uniti[c + 3];
            j--; cambiato = true;
          }
        }
      }
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = stili.togli;
    for (let i = 0; i < n * 4; i += 4) ctx.fillRect(uniti[i], uniti[i + 1], uniti[i + 2] - uniti[i], uniti[i + 3] - uniti[i + 1]);
    ctx.globalCompositeOperation = 'source-over';
  }

  function disegnaOnde(dt) {
    let k = 0;
    for (let i = 0; i < onde.length; i++) if ((onde[i].t += dt) < onde[i].durata) onde[k++] = onde[i];
    onde.length = k;
    if (!k) return;
    ctx.setTransform(ri, 0, 0, ri, 0, 0);                   // in pixel CSS
    ctx.strokeStyle = stili.onda; ctx.lineWidth = 1.4;      // colore con la sfumatura dei lati già dentro
    for (let i = 0; i < k; i++) {
      const o = onde[i], q = o.t / o.durata, r = 18 + q * o.raggio, cy = o.y + oy;
      ctx.globalAlpha = Math.max(0, Math.min(1, (1 - q) ** 1.6 * 0.5 * colori.forza));
      ctx.beginPath(); ctx.moveTo(o.x, cy - r); ctx.lineTo(o.x + r, cy); ctx.lineTo(o.x, cy + r); ctx.lineTo(o.x - r, cy); ctx.closePath(); ctx.stroke();
      segna((o.x - r - 2) * ri, (cy - r - 2) * ri, (o.x + r + 2) * ri, (cy + r + 2) * ri);
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  // un fotogramma: avanti di dt secondi (0 a finestra ferma: si ridisegna soltanto, per esempio dopo uno scorrimento)
  function disegna(dt) {
    posizioneReticolo();
    for (let i = 0; i < nSporchi * 4; i += 4) ctx.clearRect(sporchi[i], sporchi[i + 1], sporchi[i + 2] - sporchi[i], sporchi[i + 3] - sporchi[i + 1]);
    nSporchi = 0; veloci = 0;
    for (let i = 0; i < impulsi.length; i++) {
      const p = impulsi[i];
      if (dt) avanza(p, dt);
      if (fuori(p)) { impulsi[i] = nuovoImpulso(); if (p.extra) { impulsi.splice(i, 1); i--; } continue; }
      if (p.extra) veloci++;
      disegnaImpulso(p);
    }
    if (nSporchi) sfuma();
    disegnaOnde(dt);
    ctx.globalAlpha = 1;
    if (incrociDaFare) disegnaIncroci();
  }

  const passo = () => (onde.length || veloci ? PASSO_VELOCE : PASSO);
  function fotogramma(t) {
    raf = 0;
    if (spento) return;
    if (!fermo && !subito && ultimo && t - ultimo < passo() - 6) { raf = requestAnimationFrame(fotogramma); return; }   // troppo presto
    subito = false;
    let dt = 0;
    if (!fermo) { dt = Math.max(0, Math.min(0.1, (t - (ultimo || t)) / 1000)); ultimo = t; }
    disegna(dt);
    pianifica();
  }
  // il prossimo fotogramma: un timer fino a poco prima, poi la richiesta allo schermo (requestAnimationFrame), così la
  // pagina non si sveglia a ogni aggiornamento dello schermo (60, 120 o 144 volte al secondo) ma solo quando serve
  function pianifica() {
    if (fermo || spento || raf || timer) return;
    const manca = ultimo + passo() - performance.now() - 10;
    if (manca <= 1) raf = requestAnimationFrame(fotogramma);
    else timer = setTimeout(sveglia, manca);
  }
  function sveglia() { timer = 0; if (!fermo && !spento && !raf) raf = requestAnimationFrame(fotogramma); }
  // un fotogramma fuori dal ritmo, al prossimo aggiornamento dello schermo (scorrimento, tema, puntatore a finestra ferma)
  function ridisegna() {
    if (spento) return;
    subito = true;
    if (timer) { clearTimeout(timer); timer = 0; }
    if (!raf) raf = requestAnimationFrame(fotogramma);
  }

  function ferma() { cancelAnimationFrame(raf); raf = 0; clearTimeout(timer); timer = 0; }
  function statico() {
    // animazioni spente: resta solo lo sfondo della pagina, senza reticolo, impulsi né onde
    ferma();
    for (const [c, x] of [[ctx, canvas], [gctx, tela], [ictx, telaInc]]) { c.setTransform(1, 0, 0, 1, 0, 0); c.clearRect(0, 0, x.width, x.height); }
    nSporchi = 0; incrociAccesi = false; vuoto = true; oy = 0;
  }
  function aggiorna() {
    spento = root.classList.contains('meno-moto');
    const eraFermo = fermo;
    fermo = spento || document.hidden || !primoPiano;
    if (spento) { if (!vuoto) statico(); return; }
    if (vuoto) { vuoto = false; disegnaGriglia(); incrociDaFare = true; disegna(0); ultimo = performance.now(); }   // il primo fotogramma subito
    if (fermo) { ferma(); return; }
    if (eraFermo) { ferma(); ultimo = performance.now(); pianifica(); }   // riparte da dove era, senza salti
  }
  function cambioTema() { leggiColori(); preparaStili(); if (spento) return; disegnaGriglia(); incrociDaFare = true; ridisegna(); }
  function cambioMisura() {
    const w = window.innerWidth, h = window.innerHeight, wv = sfondo.clientWidth || w, d = window.devicePixelRatio || 1;
    if (w === W && h === H && wv === Wv && d === dpr && stretto.matches === ridotto) return;
    if (w === W && h === H && d === dpr) Wv = wv;            // solo la barra di scorrimento: stessi canvas
    else misura();
    preparaStili();
    if (spento) { statico(); return; }
    disegnaGriglia(); incrociDaFare = true; ridisegna();
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
    oy = s.oy; base = s.oy + sy * 0.12; yRipresa = sy;
    const m = s.m;
    if (Array.isArray(m) && m.length === 3 && num(m[0], -50, W + 50) && num(m[1], -50, H + 50) && num(m[2], 0, 6e4)) {
      mouse.x = m[0]; mouse.y = m[1]; mouse.t = performance.now() - m[2]; mouse.tipo = 'mouse';
    }
    incrociDaFare = true;
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

  window.addEventListener('pointermove', e => {
    mouse.x = e.clientX; mouse.y = e.clientY; mouse.t = performance.now(); mouse.tipo = e.pointerType; incrociDaFare = true;
    if (fermo && !spento && !document.hidden) ridisegna();   // finestra non in primo piano: solo gli incroci seguono il puntatore
  }, { passive: true });
  const via = () => { mouse.x = mouse.y = -9999; incrociDaFare = true; };
  document.addEventListener('pointerleave', () => { via(); if (fermo) ridisegna(); });
  window.addEventListener('blur', () => { via(); primoPiano = false; aggiorna(); ridisegna(); });
  window.addEventListener('focus', () => { primoPiano = true; aggiorna(); });
  window.addEventListener('pointerdown', e => {
    if (spento || e.target.closest('a, button, input, label, summary, select, textarea, .sim, .foglio')) return;
    const x = Math.round(e.clientX / G) * G, y = Math.round((e.clientY - oy) / G) * G;
    onde.push({ x, y, t: 0, durata: 1.3, raggio: 300 });
    for (let d = 0; d < 4; d++) { const p = nuovoImpulso({ x, y, d, v: 230, caldo: d % 2 === 1 }); p.extra = true; p.lungo = 120; impulsi.push(p); }
    veloci += 4;
    if (!primoPiano) { primoPiano = true; aggiorna(); }
    if (fermo) ridisegna(); else if (!raf) { clearTimeout(timer); timer = 0; raf = requestAnimationFrame(fotogramma); }
  }, { passive: true });
  window.addEventListener('resize', cambioMisura);
  if (window.ResizeObserver) new ResizeObserver(cambioMisura).observe(sfondo);   // per esempio la barra di scorrimento che compare
  window.addEventListener('scroll', () => {
    sy = window.scrollY;
    if (yRipresa !== null) { base += (sy - yRipresa) * 0.12; yRipresa = sy; }   // vedi pagereveal
    ridisegna();
  }, { passive: true });
  document.addEventListener('visibilitychange', aggiorna);
  window.addEventListener('appunti:moto', aggiorna);
  window.addEventListener('appunti:tema', cambioTema);
  window.addEventListener('pagehide', salvaStato);
  // con Indietro/Avanti la pagina torna dalla cache del browser: lo stato della pagina appena lasciata diventa leggibile
  // solo al primo fotogramma, quindi si riprende a «pagereveal» (se il browser non lo conosce, subito)
  const ricomincia = () => { if (!riprendi(salvatoAlle) || spento) return; ferma(); disegna(0); ultimo = performance.now(); pianifica(); };
  window.addEventListener('pageshow', e => { if (!e.persisted) return; if ('onpagereveal' in window) tornata = true; else ricomincia(); });
  // un link con àncora (#corsi) fa scorrere la pagina nuova mentre si apre: quello scorrimento non deve spostare la rete ripresa.
  // Gli eventi di scorrimento arrivano nello stesso aggiornamento dello schermo, dopo «pagereveal»: si compensano fino al
  // primo fotogramma
  window.addEventListener('pagereveal', () => {
    if (!primoPiano && document.hasFocus()) { primoPiano = true; aggiorna(); }
    if (tornata) { tornata = false; ricomincia(); }
    if (yRipresa !== null) requestAnimationFrame(() => { yRipresa = null; });
  });
  if (!('onpagereveal' in window)) window.addEventListener('load', () => { yRipresa = null; });

  sy = window.scrollY;   // l'unica lettura fuori dagli eventi di scorrimento: qui la pagina è ancora quasi vuota e non costa
  primoPiano = document.hasFocus();
  leggiColori(); misura(); preparaStili(); riprendi(); aggiorna();
})();
