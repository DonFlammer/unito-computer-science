// Comportamento delle lezioni generate dal Markdown: indice, tabelle su telefono, quiz come alla prova scritta,
// domande di ripasso, checklist salvata nel browser. Le pagine non hanno script in linea: tutto sta qui.
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const en = (document.documentElement.lang || '').startsWith('en');
  const T = en
    ? { mostra: 'Show all answers', nascondi: 'Hide all answers', scegli: 'Choose an answer first.', scrivi: 'Write an answer first.',
      giusta: 'Correct!', sbagliata: 'Not quite: the correct answer is marked.', numeroNo: 'Not quite: the correct value is shown.',
      numeroMale: 'Write a number, a decimal or a fraction such as -3/4.', riprova: 'Try again', di: ' of ' }
    : { mostra: 'Mostra tutte le risposte', nascondi: 'Nascondi tutte le risposte', scegli: 'Prima scegli una risposta.', scrivi: 'Prima scrivi una risposta.',
      giusta: 'Giusta!', sbagliata: 'Non proprio: la risposta giusta è segnata.', numeroNo: 'Non proprio: sotto trovi il valore giusto.',
      numeroMale: 'Scrivi un numero, un decimale o una frazione come -3/4.', riprova: 'Riprova', di: ' su ' };

  /* indice: chiuso sugli schermi stretti, sezione corrente evidenziata */
  const tocDetails = $('#toc-details');
  if (tocDetails && window.matchMedia('(max-width: 1079px)').matches) tocDetails.open = false;
  const tocLinks = $$('.toc a[href^="#"]');
  if ('IntersectionObserver' in window && tocLinks.length) {
    const byId = new Map(tocLinks.map(a => [a.getAttribute('href').slice(1), a]));
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        tocLinks.forEach(a => a.classList.remove('is-active'));
        const a = byId.get(e.target.id);
        if (a) a.classList.add('is-active');
      });
    }, { rootMargin: '-15% 0px -75% 0px' });
    byId.forEach((a, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
  }
  if (tocDetails && window.matchMedia('(max-width: 1079px)').matches) tocLinks.forEach(a => a.addEventListener('click', () => { tocDetails.open = false; }));

  /* àncore nella pagina (indice, rimandi tra sezioni): le sezioni lontane hanno ancora un'altezza stimata (content-visibility)
     e prendono quella vera mentre lo scorrimento morbido le attraversa, quindi l'arrivo può cadere più su o più giù del
     titolo. A scorrimento finito, se il titolo non è al suo posto, un secondo scorrimento breve ce lo porta (al massimo tre
     volte); si smette appena chi legge usa la rotella, lo schermo, il mouse o la tastiera */
  const allineaAncora = bersaglio => {
    let attesa = 0, giri = 0;
    const scadenza = performance.now() + 8000, interventi = ['wheel', 'touchstart', 'keydown', 'pointerdown'];
    const smetti = () => {
      clearTimeout(attesa);
      window.removeEventListener('scroll', suScroll);
      interventi.forEach(t => window.removeEventListener(t, smetti, true));
    };
    const controlla = () => {
      const posto = (parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0) + (parseFloat(getComputedStyle(bersaglio).scrollMarginTop) || 0);
      const scarto = bersaglio.getBoundingClientRect().top - posto;
      const inFondo = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1;
      if (Math.abs(scarto) <= 2 || (scarto > 0 && inFondo) || ++giri > 3 || performance.now() > scadenza) { smetti(); return; }
      bersaglio.scrollIntoView({ block: 'start' });   // morbido o istantaneo come dice il CSS (animazioni ridotte: istantaneo)
      attesa = setTimeout(controlla, 400);            // se non c'è più niente da scorrere non arriva nessun evento
    };
    const suScroll = () => { clearTimeout(attesa); attesa = setTimeout(controlla, 150); };
    window.addEventListener('scroll', suScroll, { passive: true });
    interventi.forEach(t => window.addEventListener(t, smetti, { capture: true, passive: true }));
    attesa = setTimeout(controlla, 400);
  };
  document.addEventListener('click', e => {
    const a = e.target instanceof Element ? e.target.closest('a[href^="#"]') : null;
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    let id = '';
    try { id = decodeURIComponent(a.getAttribute('href').slice(1)); } catch (x) { return; }
    const bersaglio = id && document.getElementById(id);
    if (bersaglio) allineaAncora(bersaglio);
  });

  /* tabelle: se su uno schermo stretto non entrano, ogni riga diventa una scheda con le etichette delle colonne */
  const tableWraps = $$('.table-wrap').filter(w => { const t = w.querySelector('table'); return t && t.tHead; });
  tableWraps.forEach(w => {
    const t = w.querySelector('table');
    const heads = $$('th', t.tHead).map(th => th.textContent.trim());
    $$('tbody tr', t).forEach(tr => Array.from(tr.children).forEach((c, i) => { if (heads[i]) c.dataset.label = heads[i]; }));
  });
  const fitTable = w => {
    const t = w.querySelector('table');
    t.classList.remove('stacked');
    if (w.scrollWidth > w.clientWidth + 1) t.classList.add('stacked');
  };
  // ogni tabella si controlla quando si avvicina allo schermo: le sezioni lontane non sono ancora impaginate
  // (content-visibility) e misurarle tutte all'apertura costerebbe come impaginare la pagina intera
  const tableIo = 'IntersectionObserver' in window
    ? new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { tableIo.unobserve(e.target); fitTable(e.target); } }), { rootMargin: '50% 0px' })
    : null;
  const fitTables = () => tableWraps.forEach(w => { if (tableIo) { tableIo.unobserve(w); tableIo.observe(w); } else fitTable(w); });
  fitTables();
  let fitTimer = null;
  window.addEventListener('resize', () => { clearTimeout(fitTimer); fitTimer = setTimeout(fitTables, 150); });

  /* quiz: si sceglie, si verifica, si vede la spiegazione; «Riprova» ricomincia la domanda */
  const leggiNumero = s => {
    const t = String(s).trim().replace(/−/g, '-').replace(/\s+/g, '').replace(',', '.');
    let m = t.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
    if (m) return Number(m[2]) === 0 ? NaN : Number(m[1]) / Number(m[2]);
    m = t.match(/^-?(?:\d+(?:\.\d+)?|\.\d+)$/);
    return m ? Number(t) : NaN;
  };
  $$('.quiz li.q').forEach(q => {
    const btn = $('.q-verifica', q), esito = $('.q-esito', q), spiega = $('.q-spiega', q);
    const pulisci = () => {
      q.classList.remove('fatta');
      $$('.opz', q).forEach(o => o.classList.remove('giusta', 'errata', 'mancata'));
      $$('input', q).forEach(i => { i.disabled = false; });
      const num = $('.q-numero', q);
      if (num) { num.classList.remove('giusta', 'errata'); const g = $('.q-giusto', num); if (g) g.hidden = true; }
      if (spiega) spiega.hidden = true;
      esito.textContent = '';
      esito.className = 'q-esito';
      btn.textContent = btn.dataset.testo;
    };
    btn.dataset.testo = btn.textContent;
    btn.addEventListener('click', () => {
      if (q.classList.contains('fatta')) { pulisci(); return; }
      esito.className = 'q-esito';
      const num = $('.q-numero input', q);
      let ok;
      if (num) {
        if (!num.value.trim()) { esito.textContent = T.scrivi; return; }
        const v = leggiNumero(num.value);
        if (!Number.isFinite(v)) { esito.textContent = T.numeroMale; return; }
        ok = Math.abs(v - Number(num.dataset.valore)) <= Number(num.dataset.toll) + 1e-12;
        const box = num.closest('.q-numero');
        box.classList.add(ok ? 'giusta' : 'errata');
        if (!ok) { const g = $('.q-giusto', box); if (g) g.hidden = false; }
        num.disabled = true;
      } else {
        const scelte = $$('input', q);
        if (!scelte.some(i => i.checked)) { esito.textContent = T.scegli; return; }
        ok = scelte.every(i => i.checked === (i.dataset.ok === '1'));
        scelte.forEach(i => {
          const o = i.closest('.opz');
          if (i.dataset.ok === '1') o.classList.add(i.checked ? 'giusta' : 'mancata');
          else if (i.checked) o.classList.add('errata');
          i.disabled = true;
        });
      }
      q.classList.add('fatta');
      esito.textContent = ok ? T.giusta : num ? T.numeroNo : T.sbagliata;
      esito.className = 'q-esito ' + (ok ? 'ok' : 'no');
      if (spiega) spiega.hidden = false;
      btn.textContent = T.riprova;
    });
  });

  /* domande di ripasso: apri o chiudi tutte */
  $$('.qa-toggle').forEach(b => b.addEventListener('click', () => {
    const sezione = b.closest('section') || document;
    const tutte = $$('details.qa', sezione);
    const apri = !tutte.every(d => d.open);
    tutte.forEach(d => { d.open = apri; });
    b.textContent = apri ? T.nascondi : T.mostra;
  }));

  /* checklist salvata nel browser (con il profilo di studio.js, se aperto) */
  const lista = $('.checklist[data-chiave]');
  if (lista) {
    const KEY = lista.dataset.chiave;
    const memoria = () => window.StudioStorage || localStorage;
    let saved = {};
    try { saved = JSON.parse(memoria().getItem(KEY) || '{}') || {}; } catch (e) { saved = {}; }
    if (typeof saved !== 'object' || Array.isArray(saved)) saved = {};
    const boxes = $$('input[type="checkbox"]', lista);
    const progress = $('#check-progress');
    const updateProgress = () => { if (progress) progress.textContent = boxes.filter(b => b.checked).length + T.di + boxes.length; };
    boxes.forEach(b => {
      if (saved[b.id] === true) b.checked = true;
      b.addEventListener('change', () => {
        saved[b.id] = b.checked;
        try { memoria().setItem(KEY, JSON.stringify(saved)); } catch (e) { /* memoria del browser non disponibile */ }
        updateProgress();
      });
    });
    updateProgress();
  }
})();
