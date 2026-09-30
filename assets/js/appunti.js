// Comportamento comune delle pagine degli appunti: tema, animazioni, menu su telefono, avanzamento della lettura,
// comparsa degli elementi e luce che segue il puntatore sulle schede dei corsi. Le lezioni hanno in più il loro script.
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const root = document.documentElement;
  const en = (root.lang || '').startsWith('en');
  const salva = (k, v) => { try { if (v === null) (window.StudioStorage || localStorage).removeItem(k); else (window.StudioStorage || localStorage).setItem(k, v); } catch (e) { /* memoria del browser non disponibile */ } };

  /* tema: OLED (nero, colore principale bianco) all'avvio; «notte» (blu) col pulsante OLED, «giorno» col pulsante del tema.
     Le scelte valgono per tutte le pagine, anche in inglese; OLED non si salva perché è il predefinito */
  salva('appunti-tema', null);   // chiave del design precedente: non vale più
  const temaBtn = $('#theme-toggle'), oledBtn = $('#oled-toggle'), animBtn = $('#anim-toggle'), moto = $('#interruttore-moto');
  const T = en ? { scuro: 'Theme: dark', chiaro: 'Theme: light', animSi: 'Animations: on', animNo: 'Animations: off (plain background)' }
    : { scuro: 'Tema: scuro', chiaro: 'Tema: chiaro', animSi: 'Animazioni: attive', animNo: 'Animazioni: spente (sfondo semplice)' };
  const etichetta = (b, testo) => { if (!b) return; const s = b.querySelector('.testo-btn'); if (s) s.textContent = testo; else b.textContent = testo; b.setAttribute('aria-label', testo); b.title = testo; };
  const temaAttuale = () => { const t = root.getAttribute('data-theme'); return t === 'light' || t === 'oled' ? t : 'dark'; };
  const aggiornaTema = () => {
    const t = temaAttuale();
    etichetta(temaBtn, t === 'light' ? T.chiaro : T.scuro);
    if (oledBtn) oledBtn.setAttribute('aria-pressed', String(t === 'oled'));
    const colore = $('meta[name="theme-color"]');
    if (colore) colore.content = t === 'light' ? '#f3f6fc' : t === 'oled' ? '#000000' : '#080d19';
  };
  const applicaTema = t => {
    if (t === 'dark') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', t);
    salva('appunti:tema', t === 'oled' ? null : t);
    aggiornaTema();
    window.dispatchEvent(new Event('appunti:tema'));
  };
  aggiornaTema();
  if (temaBtn) temaBtn.addEventListener('click', () => applicaTema(temaAttuale() === 'light' ? 'oled' : 'light'));
  if (oledBtn) oledBtn.addEventListener('click', () => applicaTema(temaAttuale() === 'oled' ? 'dark' : 'oled'));

  /* animazioni: pulsante nella barra e interruttore nel piede (spente = resta solo lo sfondo, senza reticolo né impulsi);
     non seguono l'impostazione del sistema operativo */
  const aggiornaMoto = () => {
    const attive = !root.classList.contains('meno-moto');
    if (moto) moto.setAttribute('aria-pressed', String(attive));
    if (animBtn) { animBtn.setAttribute('aria-pressed', String(attive)); etichetta(animBtn, attive ? T.animSi : T.animNo); }
  };
  const cambiaMoto = () => {
    const ridotto = root.classList.toggle('meno-moto');
    salva('appunti:moto', ridotto ? 'ridotto' : null);
    aggiornaMoto();
    window.dispatchEvent(new Event('appunti:moto'));
    if (ridotto) $$('.rivela').forEach(e => e.classList.add('visto'));
  };
  aggiornaMoto();
  if (moto) moto.addEventListener('click', cambiaMoto);
  if (animBtn) animBtn.addEventListener('click', cambiaMoto);

  /* nelle lezioni lo sfondo sfuma e si spegne, senza cambiare la preferenza salvata per le altre pagine */
  let dissolvenzaMoto = null;
  const annullaDissolvenza = () => {
    if (!dissolvenzaMoto) return;
    dissolvenzaMoto.onfinish = null;
    dissolvenzaMoto.cancel();
    dissolvenzaMoto = null;
  };
  window.addEventListener('appunti:moto', () => { annullaDissolvenza(); aggiornaMoto(); });
  const spegniNellaLezione = () => {
    if (!document.querySelector('meta[name="lezione"], meta[name="lesson"]')) return;
    annullaDissolvenza();
    if (root.classList.contains('meno-moto')) return;
    const spegni = () => {
      root.classList.add('meno-moto');
      window.dispatchEvent(new Event('appunti:moto'));
    };
    const sfondo = $('#rete');
    if (!sfondo?.animate || document.hidden || window.matchMedia('(prefers-reduced-motion: reduce)').matches) { spegni(); return; }
    dissolvenzaMoto = sfondo.animate([{ opacity: getComputedStyle(sfondo).opacity }, { opacity: 0 }], { duration: 600, easing: 'ease-out', fill: 'forwards' });
    dissolvenzaMoto.onfinish = spegni;
  };
  spegniNellaLezione();
  window.addEventListener('pageshow', e => { if (e.persisted) spegniNellaLezione(); });

  /* menu su telefono */
  const menuBtn = $('.menu-btn');
  if (menuBtn) {
    const chiudi = () => { document.body.classList.remove('menu-aperto'); menuBtn.setAttribute('aria-expanded', 'false'); };
    menuBtn.addEventListener('click', () => {
      const aperto = document.body.classList.toggle('menu-aperto');
      menuBtn.setAttribute('aria-expanded', String(aperto));
    });
    $$('.barra nav a').forEach(a => a.addEventListener('click', chiudi));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') chiudi(); });
    window.addEventListener('resize', () => { if (window.innerWidth > 880) chiudi(); });
  }

  /* avanzamento della lettura: barra sotto l'intestazione e, nelle lezioni, riempimento dell'indice */
  const barra = $('.avanzamento'), elencoIndice = $('.toc ol'), foglio = $('.foglio');
  let inCoda = false;
  const scorri = () => {
    inCoda = false;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (barra) barra.style.setProperty('--p', max > 0 ? Math.min(1, window.scrollY / max).toFixed(4) : 0);
    if (elencoIndice && foglio) {
      const r = foglio.getBoundingClientRect();
      const letto = Math.min(1, Math.max(0, (window.innerHeight * 0.35 - r.top) / r.height));
      elencoIndice.style.setProperty('--letto', letto.toFixed(4));
    }
  };
  window.addEventListener('scroll', () => { if (!inCoda) { inCoda = true; requestAnimationFrame(scorri); } }, { passive: true });
  window.addEventListener('resize', scorri);
  scorri();

  /* comparsa degli elementi quando entrano nello schermo; arrivando da un'altra pagina con la dissolvenza
     (view transition), ciò che è già sullo schermo resta visibile da subito, senza entrata */
  const daRivelare = $$('.rivela');
  const giaInVista = () => daRivelare.forEach(e => { const r = e.getBoundingClientRect(); if (r.top < window.innerHeight && r.bottom > 0) e.classList.add('visto'); });
  if (root.classList.contains('meno-moto') || !('IntersectionObserver' in window)) daRivelare.forEach(e => e.classList.add('visto'));
  else {
    try { if (root.classList.contains('arrivo') || root.matches(':active-view-transition')) giaInVista(); } catch (e) { /* selettore non supportato: niente dissolvenza */ }
    window.addEventListener('pagereveal', e => { if (e.viewTransition) giaInVista(); });
    const io = new IntersectionObserver(voci => voci.forEach(v => { if (v.isIntersecting) { v.target.classList.add('visto'); io.unobserve(v.target); } }), { rootMargin: '0px 0px -8% 0px' });
    daRivelare.forEach(e => io.observe(e));
  }
  root.classList.add('pronto');   // da qui la comparsa la gestisce questo script (in CSS: html.arrivo:not(.pronto))

  /* luce che segue il puntatore sulle schede dei corsi */
  $$('.corso').forEach(c => c.addEventListener('pointermove', e => {
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', `${e.clientX - r.left}px`);
    c.style.setProperty('--my', `${e.clientY - r.top}px`);
  }));
})();
