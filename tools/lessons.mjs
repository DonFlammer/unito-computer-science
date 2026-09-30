// Lezioni scritte in Markdown → pagine HTML del sito degli appunti.
// Italiano: contesto_ai/<CORSO>/lezioni/*.md → appunti/<CORSO>/*.html; inglese: ai_context/<CODE>/lessons/*.md → notes/<CODE>/*.html.
// Compila solo i file che nell'intestazione YAML hanno «genera_html: true» (in inglese «generate_html: true»): il Markdown
// resta il file per le AI, la pagina è generata. Barra in alto e piede li inserisce poi il generatore delle pagine dei corsi
// (strumenti/genera_materie.py o tools/generate_courses.py), che lancia questo script da solo.
// Sintassi delle lezioni: contesto_ai/formato_lezioni.md (in inglese ai_context/lesson_format.md).
// Uso, dalla radice del repository:  node strumenti/lezioni.mjs [--controlla] [file.md …]
import { Marked } from 'marked';
import katex from 'katex';
import yaml from 'js-yaml';
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const RADICE = dirname(dirname(fileURLToPath(import.meta.url)));
const LINGUA = existsSync(join(RADICE, 'contesto_ai')) ? 'it' : 'en';
// espressioni regolari (una per riga) da rifiutare nelle lezioni: file facoltativo, fuori dal repository
const VIETATE = (() => {
  try {
    return readFileSync(process.env.PAROLE_VIETATE || join(RADICE, '..', 'Strumenti', 'parole_vietate.txt'), 'utf8')
      .split(/\r?\n/).map(r => r.trim()).filter(r => r && !r.startsWith('#')).map(r => new RegExp(r, 'i'));
  } catch { return []; }
})();

/* ---------- testi e percorsi delle due lingue ---------- */

const RIQUADRI = {
  it: { DEF: 'Definizione', PROP: 'Proposizione', TEOREMA: 'Teorema', LEMMA: 'Lemma', COROLLARIO: 'Corollario', OSSERVAZIONE: 'Osservazione',
    ESEMPIO: 'Esempio', IDEA: "L'idea", METODO: 'Metodo', TRAPPOLA: 'Trappola', ESAME: "Conta all'esame", OLTRE: 'Oltre', NOTA: 'Nota',
    CANALI: 'Canali A, B e C', DIM: 'Dimostrazione' },
  en: { DEF: 'Definition', PROP: 'Proposition', TEOREMA: 'Theorem', LEMMA: 'Lemma', COROLLARIO: 'Corollary', OSSERVAZIONE: 'Remark',
    ESEMPIO: 'Example', IDEA: 'The idea', METODO: 'Method', TRAPPOLA: 'Pitfall', ESAME: 'Matters in the exam', OLTRE: 'Beyond', NOTA: 'Note',
    CANALI: 'Channels A, B and C', DIM: 'Proof' },
};
// nomi inglesi dei riquadri accettati anche nei file inglesi
const SINONIMI = { DEFINITION: 'DEF', PROPOSITION: 'PROP', THEOREM: 'TEOREMA', COROLLARY: 'COROLLARIO', REMARK: 'OSSERVAZIONE', EXAMPLE: 'ESEMPIO',
  METHOD: 'METODO', PITFALL: 'TRAPPOLA', EXAM: 'ESAME', BEYOND: 'OLTRE', NOTE: 'NOTA', CHANNELS: 'CANALI', PROOF: 'DIM' };
const CLASSE = { DEF: 'def', PROP: 'def', TEOREMA: 'def', LEMMA: 'def', COROLLARIO: 'def', OSSERVAZIONE: 'neutro', ESEMPIO: 'esempio', IDEA: 'idea',
  METODO: 'idea metodo', TRAPPOLA: 'trap', ESAME: 'exam', OLTRE: 'extra', NOTA: 'neutro', CANALI: 'extra' };

const L = {
  it: {
    contesto: 'contesto_ai', lezioni: 'lezioni', appunti: 'appunti', lang: 'it', altraLang: 'en',
    altroSito: 'https://donflammer.github.io/unito-computer-science/notes/', genera: 'strumenti/genera_materie.py',
    marcatori: ['TESTATA:INIZIO', 'TESTATA:FINE', 'PIEDE:INIZIO', 'PIEDE:FINE'],
    corsi: { PROG1: 'Programmazione I', FDA: "Fondamenti dell'Informatica", MDAG: 'Matematica Discreta, Algebra e Geometria',
      ANMAT: 'Analisi Matematica', ARCH: 'Architettura degli Elaboratori', PROG2: 'Programmazione II', RO: 'Ricerca Operativa', INGLESE: 'Lingua Inglese I' },
    moduli: { MD: 'Matematica Discreta', AG: 'Algebra lineare e Geometria' },
    materiale: { dispense: 'le dispense', slide: 'le slide', libro: 'il libro' },
    rielaborati: { dispense: 'rielaborati dalle dispense del corso', slide: 'rielaborati dalle slide della lezione', libro: 'rielaborati dal libro di testo' },
    livelli: { base: 'base', medio: 'medio', difficile: 'difficile', esame: 'tipo esame' },
    speciali: { 'in breve': 'in-breve', "verso l'esame": 'esame', esercizi: 'esercizi', 'domande di ripasso': 'domande', glossario: 'glossario',
      checklist: 'checklist', 'quiz': 'quiz', fonti: 'fonti' },
    distintivi: { esame: 'esame', esercizi: 'con soluzioni', domande: 'autoverifica', glossario: 'termini', quiz: "come all'esame" },
    T: {
      indice: 'Indice', indiceLezione: 'Indice della lezione', percorso: 'Percorso', appunti: 'Appunti', lezione: 'Lezione',
      inBreve: 'In breve', inPunti: n => `La lezione in ${n} punti`, legenda: 'Legenda dei riquadri',
      lDef: 'Definizione o risultato da sapere', lTrap: 'Trappola / errore tipico', lExam: "Conta all'esame", lExtra: m => `Oltre ${m}`,
      lEsempio: 'Esempio svolto', lIdea: "L'idea e il metodo, passo per passo",
      soluzione: 'Soluzione', verifica: 'Verifica', mostraTutte: 'Mostra tutte le risposte',
      rispondi: 'Rispondi a voce alta o per iscritto, poi apri la risposta.',
      spunta: 'Spunta quando sai fare la cosa senza guardare gli appunti. Le spunte restano salvate in questo browser.',
      suN: n => `0 su ${n}`, fonti: 'Fonti e note', quizNota: 'Una sola risposta giusta, come nel quiz della prova scritta.',
      multipla: 'Una o più risposte giuste', risposta: 'La tua risposta', numerica: 'Risposta numerica', carica: 'Caricamento dello strumento interattivo…',
      avvertenze: (rielab, url) => `<strong>Avvertenze.</strong> Appunti non ufficiali, ${rielab}; le informazioni su corso ed esami vengono da ricerche su fonti pubbliche. Possono contenere errori. <strong>Non mi assumo alcuna responsabilità, per niente.</strong> Chiunque può leggerli e usarli, a proprio rischio. Vengono aggiornati lezione per lezione, niente di più. Non è materiale ufficiale: fanno fede solo il materiale dei docenti, Moodle e il sito del corso di laurea. <a href="${url}" target="_blank" rel="noopener">Testo completo delle avvertenze</a>.`,
      licenza: (m, repo) => `Appunti di DonFlammer (Telegram <a href="https://t.me/rapsodico" target="_blank" rel="noopener">@rapsodico</a>), licenza <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.it" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a> · sorgente su <a href="${repo}" target="_blank" rel="noopener">GitHub</a>. Le citazioni ${m === 'slide' ? 'dalle slide' : m === 'libro' ? 'dal libro' : 'dalle dispense e dal libro'} restano dei rispettivi autori.`,
    },
    repo: 'https://github.com/DonFlammer/unito-informatica', avvertenzeUrl: 'https://github.com/DonFlammer/unito-informatica/blob/main/AVVERTENZE.md',
    chiavi: {},
  },
  en: {
    contesto: 'ai_context', lezioni: 'lessons', appunti: 'notes', lang: 'en', altraLang: 'it',
    altroSito: 'https://donflammer.github.io/unito-informatica/appunti/', genera: 'tools/generate_courses.py',
    marcatori: ['BAR:START', 'BAR:END', 'FOOTER:START', 'FOOTER:END'],
    corsi: { PROG1: 'Programming I', FDA: 'Foundations of Computer Science', MDAG: 'Discrete Mathematics, Algebra and Geometry',
      ANMAT: 'Mathematical Analysis', ARCH: 'Computer Architecture', PROG2: 'Programming II', RO: 'Operational Research', ENGLISH: 'English I' },
    moduli: { MD: 'Discrete Mathematics', AG: 'Linear Algebra and Geometry' },
    materiale: { dispense: 'the handouts', slide: 'the slides', libro: 'the book' },
    rielaborati: { dispense: 'reworked from the course handouts', slide: 'reworked from the lesson slides', libro: 'reworked from the textbook' },
    livelli: { base: 'basic', medio: 'intermediate', difficile: 'hard', esame: 'exam style' },
    speciali: { 'in brief': 'in-brief', 'towards the exam': 'exam', exercises: 'exercises', 'review questions': 'questions', glossary: 'glossary',
      checklist: 'checklist', quiz: 'quiz', sources: 'sources' },
    distintivi: { exam: 'exam', exercises: 'with solutions', questions: 'self-check', glossary: 'terms', quiz: 'like the exam' },
    T: {
      indice: 'Contents', indiceLezione: 'Lesson contents', percorso: 'Breadcrumb', appunti: 'Notes', lezione: 'Lesson',
      inBreve: 'In brief', inPunti: n => `The lesson in ${n} points`, legenda: 'Box legend',
      lDef: 'Definition or result to know', lTrap: 'Pitfall / typical mistake', lExam: 'Matters in the exam', lExtra: m => `Beyond ${m}`,
      lEsempio: 'Worked example', lIdea: 'The idea and the method, step by step',
      soluzione: 'Solution', verifica: 'Check', mostraTutte: 'Show all answers',
      rispondi: 'Answer out loud or in writing, then open the answer.',
      spunta: 'Tick an item when you can do it without looking at the notes. Your ticks are saved in this browser.',
      suN: n => `0 of ${n}`, fonti: 'Sources and notes', quizNota: 'Only one correct answer, as in the quiz of the written exam.',
      multipla: 'One or more correct answers', risposta: 'Your answer', numerica: 'Numeric answer', carica: 'Loading the interactive tool…',
      avvertenze: (rielab, url) => `<strong>Disclaimer.</strong> Unofficial notes, ${rielab}; the information on the course and the exams comes from research on public sources. They may contain errors. <strong>I take no responsibility whatsoever.</strong> Anyone may read and use them, at their own risk. They are updated lesson by lesson, nothing more. This is not official material: only the lecturers' material, Moodle and the degree programme website are authoritative. <a href="${url}" target="_blank" rel="noopener">Full text of the disclaimer</a>.`,
      licenza: (m, repo) => `Notes by DonFlammer (Telegram <a href="https://t.me/rapsodico" target="_blank" rel="noopener">@rapsodico</a>), licensed <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener">CC BY-NC-SA 4.0</a> · source on <a href="${repo}" target="_blank" rel="noopener">GitHub</a>. Quotes from ${m === 'slide' ? 'the slides' : m === 'libro' ? 'the book' : 'the handouts and the book'} remain the property of their respective authors.`,
    },
    repo: 'https://github.com/DonFlammer/unito-computer-science', avvertenzeUrl: 'https://github.com/DonFlammer/unito-computer-science/blob/main/DISCLAIMER.md',
    // chiavi inglesi dell'intestazione → nomi interni
    chiavi: { course: 'corso', module: 'modulo', lesson: 'lezione', title: 'titolo', date: 'data', eyebrow: 'sopratitolo', description: 'descrizione',
      facts: 'scheda', material: 'materiale', italian_file: 'file_altro', html_notes: 'appunti_html', generate_html: 'genera_html', lecturers: 'docenti',
      source: 'fonte', italian_original: 'originale' },
  },
}[LINGUA];
if (LINGUA === 'it') L.chiavi = { file_en: 'file_altro' };
const T = L.T;

const MACRO = { '\\R': '\\mathbb{R}', '\\N': '\\mathbb{N}', '\\Z': '\\mathbb{Z}', '\\Q': '\\mathbb{Q}', '\\C': '\\mathbb{C}', '\\K': '\\mathbb{K}',
  '\\rk': '\\operatorname{rk}', '\\Span': '\\operatorname{Span}', '\\Ker': '\\operatorname{Ker}', '\\Imm': '\\operatorname{Im}',
  '\\tr': '\\operatorname{tr}', '\\Mat': '\\operatorname{M}', '\\sgn': '\\operatorname{sgn}', '\\id': '\\operatorname{id}' };

/* ---------- utilità ---------- */

export const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
function slug(s) {
  return String(s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\uE000[A-Z]\d+\uE001/g, '')
    .replace(/<[^>]+>/g, '').replace(/\$[^$]*\$/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48) || 'sezione';
}
function hash(s) {
  let h = 2166136261;
  for (const c of s) { h ^= c.codePointAt(0); h = Math.imul(h, 16777619); }
  return h >>> 0;
}
function mescola(arr, seme) {
  let x = seme || 1;
  const casuale = () => { x ^= x << 13; x ^= x >>> 17; x ^= x << 5; return (x >>> 0) / 4294967296; };
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(casuale() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
const A = '\uE000', Z = '\uE001';            // segnaposto nel testo durante la conversione (caratteri ad uso privato)
const segnaposto = (lettera, i) => `${A}${lettera}${i}${Z}`;

/* ---------- contesto di una pagina ---------- */

function nuovoContesto(file, sorgente) {
  return {
    file, errori: [], avvisi: [], formule: [], blocchi: [], codici: [], ids: new Set(), usati: new Set(), widget: false, script: new Set(),
    n: { esercizio: 0, quiz: 0, domanda: 0, grafico: 0, widget: 0 }, profondita: 0, righe: sorgente.split(/\r?\n/),
    errore(riga, msg) { this.errori.push(`${this.file}:${riga ?? '?'}: ${msg}`); },
    avviso(riga, msg) { this.avvisi.push(`${this.file}:${riga ?? '?'}: ${msg}`); },
  };
}
function rigaDi(ctx, pezzo) {
  const p = String(pezzo).trim().slice(0, 40);
  if (!p) return '?';
  const i = ctx.righe.findIndex(r => r.includes(p));
  return i < 0 ? '?' : i + 1;
}
function idUnico(ctx, base) {
  let id = base, k = 2;
  while (ctx.ids.has(id)) id = `${base}-${k++}`;
  ctx.ids.add(id);
  return id;
}

/* ---------- formule e codice in linea ---------- */

function proteggi(testo, ctx) {
  let s = testo.replace(/\\\$/g, segnaposto('S', 0));
  // codice in linea: resta com'è, anche se contiene $
  s = s.replace(/(`+)([^`\n]+?)\1(?!`)/g, (_, _b, codice) => {
    ctx.codici.push(`<code>${esc(codice.trim())}</code>`);
    return segnaposto('K', ctx.codici.length - 1);
  });
  s = s.replace(/\$\$([\s\S]+?)\$\$/g, (_, tex) => {
    ctx.formule.push({ tex: tex.trim(), display: true });
    return segnaposto('D', ctx.formule.length - 1);   // sulla stessa riga: così funziona anche dentro un elenco
  });
  s = s.replace(/(?<![\\$])\$(?![\s$])((?:[^$\n\\]|\\.)+?)(?<![\s\\])\$(?!\$)/g, (_, tex) => {
    ctx.formule.push({ tex, display: false });
    return segnaposto('M', ctx.formule.length - 1);
  });
  const resto = s.split('\n').find(r => r.includes('$'));
  if (resto !== undefined) {
    ctx.errore(rigaDi(ctx, resto.replace(/\uE000[A-Z]\d+\uE001/g, ' ').split('$')[0].trim().slice(-30) || resto.slice(0, 30)),
      `simbolo $ spaiato (o formula con uno spazio subito dopo il $ iniziale o prima di quello finale): «${resto.replace(/\uE000[A-Z]\d+\uE001/g, '…').trim().slice(0, 100)}»`);
  }
  return s;
}
function formula(ctx, i) {
  const f = ctx.formule[i];
  if (f.html) return f.html;
  try {
    f.html = katex.renderToString(f.tex, { displayMode: f.display, throwOnError: true, strict: 'ignore', output: 'htmlAndMathml', macros: { ...MACRO } });
  } catch (e) {
    ctx.errore(rigaDi(ctx, f.tex.slice(0, 30)), `formula non valida «${f.tex}»: ${e.message.replace(/^KaTeX parse error: /, '')}`);
    f.html = `<code class="formula-errata">${esc(f.tex)}</code>`;
  }
  return f.html;
}
function ripristina(html, ctx) {
  // un paragrafo con una formula in display si spezza in testo, formula, testo: un <div> non pu\u00F2 stare dentro un <p>
  html = html.replace(/<p>((?:(?!<\/p>)[\s\S])*?\uE000D\d+\uE001(?:(?!<\/p>)[\s\S])*)<\/p>/g, (_, dentro) => dentro.split(/(\uE000D\d+\uE001)/)
    .map(x => (/^\uE000D\d+\uE001$/.test(x) ? x : x.trim() ? `<p>${x.trim()}</p>` : '')).join(''));
  for (let giro = 0; giro < 4 && html.includes(A); giro++) {
    html = html.replace(/\uE000D(\d+)\uE001/g, (_, i) => `<div class="formula">${formula(ctx, +i)}</div>`)
      .replace(/\uE000M(\d+)\uE001/g, (_, i) => formula(ctx, +i))
      .replace(/\uE000K(\d+)\uE001/g, (_, i) => ctx.codici[+i])
      .replace(/<p>\s*\uE000B(\d+)\uE001\s*<\/p>/g, (_, i) => ctx.blocchi[+i])
      .replace(/\uE000B(\d+)\uE001/g, (_, i) => ctx.blocchi[+i])
      .replace(/\uE000S0\uE001/g, '$');
  }
  return html;
}

/* ---------- Markdown ---------- */

function creaMarked(ctx) {
  const m = new Marked({ gfm: true, breaks: false });
  m.use({
    renderer: {
      heading({ tokens, depth, text }) {
        let inner = this.parser.parseInline(tokens);
        let id = null;
        inner = inner.replace(/\s*\{#([a-z0-9-]+)\}\s*$/, (_, x) => { id = x; return ''; });
        if (depth <= 2) ctx.errore(rigaDi(ctx, text), `titolo di livello ${depth} fuori posto: le sezioni iniziano con «## » a inizio riga`);
        if (ctx.profondita > 0) ctx.avviso(rigaDi(ctx, text), `titolo «${text}» dentro un riquadro o un esercizio: meglio il grassetto`);
        id = idUnico(ctx, id || slug(text));
        return `<h${depth} id="${id}">${inner}</h${depth}>\n`;
      },
      table(token) {
        const cella = (c, tag) => `<${tag}${c.align === 'right' ? ' class="num"' : c.align === 'center' ? ' class="centro"' : ''}>${this.parser.parseInline(c.tokens)}</${tag}>`;
        const testa = `<tr>${token.header.map(c => cella(c, 'th')).join('')}</tr>`;
        const corpo = token.rows.map(r => `<tr>${r.map(c => cella(c, 'td')).join('')}</tr>`).join('\n');
        return `<div class="table-wrap"><table><thead>${testa}</thead><tbody>${corpo}</tbody></table></div>\n`;
      },
      link({ href, title, tokens }) {
        const inner = this.parser.parseInline(tokens);
        const url = href.replace(/^http:\/\//i, 'https://');
        if (/^[a-z][a-z0-9+.-]*:/i.test(url) && !/^(https|mailto):/i.test(url)) {
          ctx.errore(rigaDi(ctx, href), `link non permesso «${href}» (solo https, mailto o percorsi relativi)`);
          return inner;
        }
        const esterno = /^https:/i.test(url);
        return `<a href="${esc(url)}"${title ? ` title="${esc(title)}"` : ''}${esterno ? ' target="_blank" rel="noopener"' : ''}>${inner}</a>`;
      },
      code({ text, lang }) {
        return `<pre class="code"${lang ? ` data-lingua="${esc(lang)}"` : ''}><code>${evidenzia(text, lang)}</code></pre>\n`;
      },
    },
  });
  return m;
}

// colori minimi per il codice C: commenti e parole chiave
const PAROLE_C = new Set('auto break case char const continue default do double else enum extern float for goto if inline int long register restrict return short signed sizeof static struct switch typedef union unsigned void volatile while bool true false NULL size_t'.split(' '));
function evidenzia(testo, lang) {
  if (!/^(c|h)$/i.test(lang || '')) return esc(testo);
  let out = '';
  const re = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*')|(#\s*\w+)|([A-Za-z_]\w*)|([\s\S])/g;
  let m;
  while ((m = re.exec(testo))) {
    if (m[1]) out += `<span class="cm">${esc(m[1])}</span>`;
    else if (m[2]) out += `<span class="str">${esc(m[2])}</span>`;
    else if (m[3]) out += `<span class="kw">${esc(m[3])}</span>`;
    else if (m[4]) out += PAROLE_C.has(m[4]) ? `<span class="kw">${m[4]}</span>` : m[4];
    else out += esc(m[5]);
  }
  return out;
}

function inLinea(testo, ctx) {
  const m = creaMarked(ctx);
  return ripristina(m.parseInline(proteggi(String(testo), ctx)), ctx);
}
function blocco(ctx, html) {
  ctx.blocchi.push(html);
  return `\n\n${segnaposto('B', ctx.blocchi.length - 1)}\n\n`;
}
function dentro(ctx, testo) {
  ctx.profondita++;
  try { return markdown(testo, ctx); } finally { ctx.profondita--; }
}

const BLOCCHI = ['quiz', 'glossario', 'glossary', 'checklist', 'widget', 'grafico', 'graph'];

function markdown(testo, ctx) {
  const righe = testo.split(/\r?\n/);
  const out = [];
  for (let i = 0; i < righe.length; i++) {
    const r = righe[i];
    let m;
    if ((m = r.match(/^```\s*([a-zà-ù]+)\b\s*(.*)$/i)) && BLOCCHI.includes(m[1].toLowerCase())) {
      const riga = rigaDi(ctx, r);
      const corpo = [];
      for (i++; i < righe.length && !/^```\s*$/.test(righe[i]); i++) corpo.push(righe[i]);
      if (i >= righe.length) ctx.errore(riga, `blocco \`\`\`${m[1]} non chiuso`);
      const tipo = { glossary: 'glossario', graph: 'grafico' }[m[1].toLowerCase()] || m[1].toLowerCase();
      try {
        out.push(blocco(ctx, { quiz: bloccoQuiz, glossario: bloccoGlossario, checklist: bloccoChecklist, widget: bloccoWidget, grafico: bloccoGrafico }[tipo](corpo, ctx, m[2].trim())));
      } catch (e) { ctx.errore(riga, `${m[1]}: ${e.message}`); }
      continue;
    }
    if (/^```/.test(r)) {                      // blocco di codice: lo converto qui, così $ e _ restano com'erano
      const lingua = r.replace(/^```\s*/, '').trim();
      const corpo = [];
      const riga = rigaDi(ctx, r);
      for (i++; i < righe.length && !/^```\s*$/.test(righe[i]); i++) corpo.push(righe[i]);
      if (i >= righe.length) ctx.errore(riga, 'blocco di codice non chiuso');
      out.push(blocco(ctx, `<pre class="code"${lingua ? ` data-lingua="${esc(lingua)}"` : ''}><code>${evidenzia(corpo.join('\n'), lingua)}</code></pre>`));
      continue;
    }
    if ((m = r.match(/^:::\s*(esercizio|exercise)\b\s*(\S*)\s*(.*)$/i))) {
      const riga = rigaDi(ctx, r);
      const testoEs = [], sol = [];
      let dove = testoEs;
      for (i++; i < righe.length && !/^:::\s*$/.test(righe[i]); i++) {
        if (/^:::\s*(soluzione|solution)\s*$/i.test(righe[i])) { dove = sol; continue; }
        if (/^:::/.test(righe[i])) ctx.errore(rigaDi(ctx, righe[i]), `dentro un esercizio c'è «${righe[i].trim()}»: chiudi prima l'esercizio con «:::»`);
        dove.push(righe[i]);
      }
      if (i >= righe.length) ctx.errore(riga, 'esercizio non chiuso con «:::»');
      const livelli = { basic: 'base', intermediate: 'medio', hard: 'difficile', exam: 'esame' };
      let livello = m[2].toLowerCase(), titolo = m[3];
      livello = livelli[livello] || livello;
      if (!(livello in L.livelli)) { ctx.errore(riga, `livello «${m[2]}» sconosciuto (base, medio, difficile, esame)`); livello = 'base'; }
      if (!sol.join('').trim()) ctx.errore(riga, 'esercizio senza «::: soluzione»');
      out.push(blocco(ctx, esercizio(ctx, livello, titolo, testoEs.join('\n'), sol.join('\n'))));
      continue;
    }
    if ((m = r.match(/^:::\s*(domanda|question)\b\s*(.*)$/i))) {
      // domande consecutive (anche separate da righe vuote) formano un solo elenco
      const domande = [];
      for (;;) {
        const riga = rigaDi(ctx, righe[i]);
        const risposta = [];
        for (i++; i < righe.length && !/^:::\s*$/.test(righe[i]); i++) {
          if (/^:::/.test(righe[i])) ctx.errore(rigaDi(ctx, righe[i]), `dentro una domanda c'è «${righe[i].trim()}»: chiudi prima la domanda con «:::»`);
          risposta.push(righe[i]);
        }
        if (i >= righe.length) ctx.errore(riga, 'domanda non chiusa con «:::»');
        if (!m[2].trim()) ctx.errore(riga, 'domanda senza testo: scrivilo dopo «::: domanda»');
        if (!risposta.join('').trim()) ctx.errore(riga, 'domanda senza risposta');
        domande.push({ testo: m[2], risposta: risposta.join('\n') });
        let j = i + 1;
        while (j < righe.length && !righe[j].trim()) j++;
        if (j < righe.length && (m = righe[j].match(/^:::\s*(domanda|question)\b\s*(.*)$/i))) { i = j; continue; }
        break;
      }
      out.push(blocco(ctx, `<div class="qa-list">${domande.map(d => `<details class="qa"><summary>${inLinea(d.testo, ctx)}</summary><div class="ans">${dentro(ctx, d.risposta)}</div></details>`).join('\n')}</div>`));
      ctx.usati.add('domande');
      continue;
    }
    if ((m = r.match(/^>\s*\[!([A-Za-zÀ-ú]+)\]\s*(.*)$/))) {
      const riga = rigaDi(ctx, r);
      let tipo = m[1].toUpperCase();
      tipo = SINONIMI[tipo] || tipo;
      const corpo = [];
      for (i++; i < righe.length && /^>/.test(righe[i]); i++) corpo.push(righe[i].replace(/^>\s?/, ''));
      i--;
      if (!(tipo in RIQUADRI.it)) { ctx.errore(riga, `riquadro [!${m[1]}] sconosciuto: usa ${Object.keys(RIQUADRI.it).join(', ')}`); tipo = 'NOTA'; }
      out.push(blocco(ctx, riquadro(ctx, tipo, m[2].trim(), corpo.join('\n'))));
      continue;
    }
    if (/^:::/.test(r)) ctx.errore(rigaDi(ctx, r), `«${r.trim()}» fuori posto (blocchi: «::: esercizio livello titolo», «::: domanda testo»)`);
    if (/^#\s/.test(r)) ctx.errore(rigaDi(ctx, r), 'niente titoli con un solo #: il titolo della pagina viene dall\'intestazione YAML');
    out.push(r);
  }
  const m = creaMarked(ctx);
  return ripristina(m.parse(proteggi(out.join('\n'), ctx)), ctx);
}

function riquadro(ctx, tipo, titolo, corpo) {
  ctx.usati.add(tipo);
  titolo = titolo.replace(/^·\s*/, '');                 // «> [!IDEA] · titolo»: il puntino lo aggiunge già l'etichetta
  let etichetta = RIQUADRI[LINGUA][tipo];
  if (tipo === 'OLTRE') etichetta = T.lExtra(L.materiale[ctx.materiale] || L.materiale.slide);
  if (tipo === 'CANALI' && titolo) etichetta = inLinea(titolo, ctx);   // per esempio «Sei del canale A o C?»
  else if (titolo) etichetta += (/^\d/.test(titolo) ? ' ' : ' · ') + inLinea(titolo, ctx);
  if (tipo === 'DIM') return `<details class="dim"><summary>${etichetta}</summary><div class="dim-corpo">${dentro(ctx, corpo)}</div></details>`;
  const id = tipo === 'CANALI' ? ` id="${idUnico(ctx, LINGUA === 'it' ? 'altri-canali' : 'other-channels')}"` : '';
  return `<div class="box ${CLASSE[tipo]}"${id}><p class="box-label">${etichetta}</p>${dentro(ctx, corpo)}</div>`;
}

function esercizio(ctx, livello, titolo, testo, sol) {
  const n = ++ctx.n.esercizio;
  ctx.usati.add('esercizi');
  return `<article class="ex" id="${LINGUA === 'it' ? 'esercizio' : 'exercise'}-${n}"><h3>${n}${titolo ? ` · ${inLinea(titolo, ctx)}` : ''} <span class="lvl">${L.livelli[livello]}</span></h3>`
    + `${dentro(ctx, testo)}<details class="sol"><summary>${T.soluzione}</summary>${dentro(ctx, sol)}</details></article>`;
}

/* ---------- quiz come quelli della prova scritta ---------- */

function leggiNumero(s) {
  const m = s.match(/^(.+?)(?:\s*(?:±|\+-|\+\/-)\s*(.+))?$/);
  const valore = t => {
    t = t.trim().replace(/−/g, '-').replace(',', '.');
    if (/^-?\d+(\.\d+)?\s*\/\s*-?\d+(\.\d+)?$/.test(t)) { const [a, b] = t.split('/').map(Number); return a / b; }
    if (/^-?(\d+(\.\d+)?|\.\d+)$/.test(t)) return Number(t);
    return NaN;
  };
  const v = valore(m[1]), tol = m[2] ? valore(m[2]) : 1e-9;
  if (!Number.isFinite(v) || !Number.isFinite(tol)) throw new Error(`risposta numerica «${s}» non valida (un intero, un decimale o una frazione, es. «N: -3/4»)`);
  return { v, tol };
}

function leggiDomande(corpo) {
  const domande = [];
  let d = null, ultimo = null;
  for (const grezza of corpo) {
    const r = grezza.replace(/\s+$/, '');
    let m;
    if (!r.trim()) { ultimo = null; continue; }
    if ((m = r.match(/^[DQ]:\s*(.*)$/))) { d = { testo: m[1], opzioni: [], numero: null, spiega: '' }; domande.push(d); ultimo = t => { d.testo += ' ' + t; }; continue; }
    if (!d) throw new Error(`«${r.trim().slice(0, 50)}»: ogni domanda inizia con «D: »`);
    if ((m = r.match(/^([+-])\s+(.*)$/))) { const o = { testo: m[2], giusta: m[1] === '+' }; d.opzioni.push(o); ultimo = t => { o.testo += ' ' + t; }; continue; }
    if ((m = r.match(/^N:\s*(.+)$/))) { d.numero = { ...leggiNumero(m[1]), testo: m[1].trim() }; ultimo = null; continue; }
    if ((m = r.match(/^=\s*(.*)$/))) { d.spiega = m[1]; ultimo = t => { d.spiega += ' ' + t; }; continue; }
    if (ultimo) { ultimo(r.trim()); continue; }
    throw new Error(`non capisco «${r.trim().slice(0, 60)}» (le righe iniziano con D:, +, -, N:, =)`);
  }
  for (const q of domande) {
    const giuste = q.opzioni.filter(o => o.giusta).length;
    if (q.numero && q.opzioni.length) throw new Error(`«${q.testo.slice(0, 50)}»: o opzioni o risposta numerica, non entrambe`);
    if (!q.numero && q.opzioni.length < 2) throw new Error(`«${q.testo.slice(0, 50)}»: servono almeno 2 opzioni (o una riga N:)`);
    if (!q.numero && !giuste) throw new Error(`«${q.testo.slice(0, 50)}»: nessuna opzione giusta (segnala con «+»)`);
    if (!q.spiega.trim()) throw new Error(`«${q.testo.slice(0, 50)}»: manca la spiegazione «= …»`);
    q.tipo = q.numero ? 'numerica' : giuste > 1 ? 'multipla' : 'singola';
  }
  if (!domande.length) throw new Error('quiz vuoto');
  return domande;
}

function bloccoQuiz(corpo, ctx) {
  const q = ++ctx.n.quiz;
  ctx.usati.add('quiz');
  const voci = leggiDomande(corpo).map((d, k) => {
    const nome = `q${q}-${k}`;
    let h = `<li class="q" data-tipo="${d.tipo}"><div class="q-testo">${inLinea(d.testo, ctx)}</div>`;
    if (d.tipo === 'numerica') {
      h += `<div class="q-numero"><input type="text" inputmode="decimal" autocomplete="off" spellcheck="false" placeholder="${T.risposta}" aria-label="${T.numerica}" data-valore="${d.numero.v}" data-toll="${d.numero.tol}"><span class="q-giusto" hidden>${esc(d.numero.testo.replace(/\s*(±|\+-).*/, ''))}</span></div>`;
    } else {
      if (d.tipo === 'multipla') h += `<p class="q-nota">${T.multipla}</p>`;
      h += '<div class="q-opzioni">' + mescola(d.opzioni, hash(d.testo + k)).map(o =>
        `<label class="opz"><input type="${d.tipo === 'multipla' ? 'checkbox' : 'radio'}" name="${nome}" data-ok="${o.giusta ? 1 : 0}"><span class="opz-segno" aria-hidden="true"></span><span class="opz-testo">${inLinea(o.testo, ctx)}</span></label>`).join('') + '</div>';
    }
    h += `<div class="q-azioni"><button type="button" class="btn q-verifica">${T.verifica}</button><span class="q-esito" aria-live="polite"></span></div>`;
    return h + `<div class="q-spiega" hidden>${inLinea(d.spiega, ctx)}</div></li>`;
  });
  return `<div class="quiz" id="quiz-${q}"><ol class="q-lista">${voci.join('\n')}</ol></div>`;
}

/* ---------- glossario e checklist ---------- */

function bloccoGlossario(corpo, ctx) {
  const voci = corpo.filter(r => r.trim()).map(r => {
    const k = r.indexOf(' | ');
    if (k < 0) throw new Error(`riga «${r.trim().slice(0, 50)}»: scrivi «Termine | definizione»`);
    return `<div><dt>${inLinea(r.slice(0, k).replace(/^\s*[-*]\s*/, '').trim(), ctx)}</dt><dd>${inLinea(r.slice(k + 3).trim(), ctx)}</dd></div>`;
  });
  if (!voci.length) throw new Error('glossario vuoto');
  return `<dl class="gloss">\n${voci.join('\n')}\n</dl>`;
}

function bloccoChecklist(corpo, ctx) {
  const voci = corpo.map(r => r.replace(/^\s*[-*]\s*/, '').trim()).filter(Boolean);
  if (!voci.length) throw new Error('checklist vuota');
  if (ctx.checklist) throw new Error('una sola checklist per lezione');
  ctx.checklist = voci.length;
  return `<p>${T.spunta}</p>\n<ul class="checklist" data-chiave="${ctx.chiave}">\n${voci.map((v, k) => `<li><label><input type="checkbox" id="chk-${k + 1}"><span>${inLinea(v, ctx)}</span></label></li>`).join('\n')}\n</ul>`;
}

/* ---------- strumenti interattivi (assets/js/geometria.js) ---------- */

// ogni strumento e lo script che lo disegna (in assets/js/)
const WIDGET = { complessi: 'geometria.js', vettori: 'geometria.js', matrice: 'geometria.js', gauss: 'geometria.js', ruffini: 'geometria.js',
  spazio: 'geometria.js', macchina: 'macchina.js' };
function bloccoWidget(corpo, ctx, info) {
  const tipo = info.split(/\s+/)[0];
  if (!(tipo in WIDGET)) throw new Error(`strumento «${tipo}» sconosciuto (${Object.keys(WIDGET).join(', ')})`);
  ctx.script.add(WIDGET[tipo]);
  const attr = [];
  let titolo = '';
  for (const r of corpo) {
    if (!r.trim()) continue;
    const m = r.match(/^\s*([a-z][a-z0-9-]*)\s*:\s*(.*)$/);
    if (!m) throw new Error(`riga «${r.trim()}» non valida (formato «chiave: valore»)`);
    if (m[1] === 'titolo' || m[1] === 'title') { titolo = m[2].trim(); continue; }
    if (/\son[a-z]+\s*=/i.test(' ' + m[2])) throw new Error(`valore non permesso: «${m[2]}»`);
    attr.push(` data-${m[1]}="${esc(m[2].trim())}"`);
  }
  ctx.widget = true;
  const n = ++ctx.n.widget;
  return `<figure class="widget" id="strumento-${n}" data-widget="${tipo}"${attr.join('')}>${titolo ? `<figcaption class="widget-titolo">${inLinea(titolo, ctx)}</figcaption>` : ''}<p class="widget-carica">${T.carica}</p></figure>`;
}

/* ---------- grafici statici (SVG) ---------- */

function numero(s) {
  const t = String(s).trim().replace(/−/g, '-');
  const m = t.match(/^(-?\d+(?:\.\d+)?)(?:\/(\d+(?:\.\d+)?))?$/);
  if (m) return m[2] ? Number(m[1]) / Number(m[2]) : Number(m[1]);
  const p = t.match(/^(-?\d*(?:\.\d+)?)\*?pi(?:\/(\d+))?$/);
  if (p) return (p[1] === '' ? 1 : p[1] === '-' ? -1 : Number(p[1])) * Math.PI / (p[2] ? Number(p[2]) : 1);
  const r = t.match(/^(-?\d*(?:\.\d+)?)\*?sqrt\((\d+(?:\.\d+)?)\)(?:\/(\d+))?$/);
  if (r) return (r[1] === '' ? 1 : r[1] === '-' ? -1 : Number(r[1])) * Math.sqrt(Number(r[2])) / (r[3] ? Number(r[3]) : 1);
  throw new Error(`numero «${s}» non valido (interi, decimali col punto, frazioni a/b, pi, 2pi/3, sqrt(2))`);
}
const fmt = v => {
  const s = Math.abs(v - Math.round(v)) < 1e-9 ? String(Math.round(v)) : String(+v.toFixed(3)).replace('.', LINGUA === 'it' ? ',' : '.');
  return s.replace('-', '−');
};
// nomi inglesi delle opzioni dei grafici, per i file della versione inglese
const OPZIONI_EN = { accent: 'accento', blue: 'blu', amber: 'ambra', pink: 'rosa', rose: 'rosa', violet: 'viola', green: 'verde', grey: 'grigio',
  gray: 'grigio', dashed: 'tratteggio', thin: 'sottile', thick: 'spesso', hollow: 'vuoto', faint: 'tenue', filled: 'pieno', w: 'o', nw: 'no', sw: 'so' };
function opzioniGrafico(parti) {
  const o = { classi: [], etichetta: '', pos: '' };
  for (const p of parti) {
    const t = OPZIONI_EN[p.trim()] || p.trim();
    if (!t) continue;
    if (/^\$.*\$$/.test(t) || /^".*"$/.test(t)) o.etichetta = t.replace(/^"|"$/g, '');
    else if (/^(accento|blu|ambra|rosa|viola|verde|grigio|tratteggio|sottile|spesso|vuoto|tenue|pieno)$/.test(t)) o.classi.push(t);
    else if (/^(n|s|e|o|ne|no|se|so|c)$/.test(t)) o.pos = t;
    else throw new Error(`opzione «${t}» sconosciuta (colori: accento, blu, ambra, rosa, viola, verde, grigio; tratteggio, sottile, spesso, vuoto, tenue, pieno; posizione n/s/e/o/ne/no/se/so/c; $etichetta$)`);
  }
  return o;
}
function bloccoGrafico(corpo, ctx) {
  const g = { x: [-5, 5], y: [-5, 5], assi: true, griglia: true, titolo: '', nomi: ['x', 'y'], voci: [] };
  for (const grezza of corpo) {
    const r = grezza.trim();
    if (!r || r.startsWith('//')) continue;
    const m = r.match(/^([a-zà-ù-]+)\s*:\s*(.*)$/i);
    if (!m) throw new Error(`riga «${r}» non valida (formato «chiave: valori | opzioni»)`);
    const [, chiave, resto] = m;
    if (/^(titolo|title)$/.test(chiave)) { g.titolo = resto.trim(); continue; }
    const [primo, ...altre] = resto.split('|');
    const valori = primo.trim().split(/\s+/).filter(Boolean);
    const nums = () => valori.map(numero);
    const voce = (tipo, quanti) => {
      if (quanti && valori.length !== quanti) throw new Error(`${chiave}: servono ${quanti} numeri («${r}»)`);
      g.voci.push({ tipo, p: nums(), ...opzioniGrafico(altre) });
    };
    switch (chiave.toLowerCase()) {
      case 'x': g.x = nums(); break;
      case 'y': g.y = nums(); break;
      case 'assi': case 'axes': g.assi = !/^no/i.test(resto.trim()); break;
      case 'griglia': case 'grid': g.griglia = !/^no/i.test(resto.trim()); break;
      case 'nomi': case 'names': g.nomi = resto.trim().split(/\s+/); break;
      case 'proporzioni': case 'proportions': g.libere = /^(libere|free)/i.test(resto.trim()); break;
      case 'punto': case 'point': voce('punto', 2); break;
      case 'vettore': case 'vector': if (valori.length === 2) valori.unshift('0', '0'); voce('freccia', 4); break;
      case 'freccia': case 'arrow': voce('freccia', 4); break;
      case 'segmento': case 'segment': voce('segmento', 4); break;
      case 'retta': case 'line': voce('retta', 4); break;   // due punti per cui passa
      case 'poligono': case 'polygon': if (valori.length < 6 || valori.length % 2) throw new Error(`poligono: servono almeno 3 coppie di coordinate («${r}»)`); voce('poligono'); break;
      case 'cerchio': case 'circle': voce('cerchio', 3); break;
      case 'arco': case 'arc': voce('arco', 5); break;       // centro x, y, raggio, angolo iniziale, finale (radianti)
      case 'testo': case 'text': voce('testo', 2); break;
      default: throw new Error(`chiave «${chiave}» sconosciuta (x, y, assi, griglia, nomi, punto, vettore, freccia, segmento, retta, poligono, cerchio, arco, testo, titolo)`);
    }
  }
  const [x0, x1] = g.x, [y0, y1] = g.y;
  if (!(x1 > x0) || !(y1 > y0)) throw new Error('intervalli x/y non validi: «x: min max» con min < max');
  const W = 560, H = g.libere ? 340 : Math.round(W * (y1 - y0) / (x1 - x0));
  if (H > W * 1.3 || H < W * 0.3) throw new Error(`proporzioni strane (${W}×${H}): con unità uguali su x e y scegli intervalli più simili, oppure scrivi «proporzioni: libere»`);
  const X = x => +((x - x0) / (x1 - x0) * W).toFixed(2), Y = y => +(H - (y - y0) / (y1 - y0) * H).toFixed(2);
  const svg = [], et = [];
  const etichetta = (x, y, testo, pos, classe = '') => {
    et.push(`<span class="g-et g-${pos || 'ne'}${classe}" style="left:${(X(x) / W * 100).toFixed(2)}%;top:${(Y(y) / H * 100).toFixed(2)}%">${/\$/.test(testo) ? inLinea(testo, ctx) : esc(testo)}</span>`);
  };
  const cl = o => o.classi.map(c => ` g-${c}`).join('');
  const passo = a => (a < 3 ? [0.25, 0.5, 1] : [1, 2, 5, 10, 20, 50, 100]).find(p => a / p <= 10) || 200;
  // numeri sugli assi; se un asse è fuori dalla finestra, i numeri vanno sul bordo (in basso o a sinistra)
  const yAsse = y0 < 0 && y1 > 0 ? 0 : y0, xAsse = x0 < 0 && x1 > 0 ? 0 : x0;
  if (g.griglia || g.assi) {
    const sx = passo(x1 - x0), sy = passo(y1 - y0), righe = [];
    for (let v = Math.ceil(x0 / sx - 1e-9) * sx; v <= x1 + 1e-9; v += sx) {
      if (g.griglia) righe.push(`M${X(v)} 0V${H}`);
      if (g.assi && (Math.abs(v) > 1e-9 || xAsse !== 0) && v > x0 + sx / 2 && v < x1 - sx / 2) etichetta(v, yAsse, fmt(v), yAsse === 0 ? 's' : 'n', ' g-tacca');
    }
    for (let v = Math.ceil(y0 / sy - 1e-9) * sy; v <= y1 + 1e-9; v += sy) {
      if (g.griglia) righe.push(`M0 ${Y(v)}H${W}`);
      if (g.assi && (Math.abs(v) > 1e-9 || yAsse !== 0) && v > y0 + sy / 2 && v < y1 - sy / 2) etichetta(xAsse, v, fmt(v), xAsse === 0 ? 'o' : 'e', ' g-tacca');
    }
    if (g.griglia) svg.push(`<path class="g-griglia" d="${righe.join('')}"/>`);
  }
  if (g.assi) {
    if (y0 <= 0 && y1 >= 0) { svg.push(`<path class="g-asse" d="M0 ${Y(0)}H${W}" marker-end="url(#g-punta)"/>`); etichetta(x1, 0, g.nomi[0], 'no', ' g-nome-asse'); }
    if (x0 <= 0 && x1 >= 0) { svg.push(`<path class="g-asse" d="M${X(0)} ${H}V0" marker-end="url(#g-punta)"/>`); etichetta(0, y1, g.nomi[1] || 'y', 'se', ' g-nome-asse'); }
  }
  const n = ++ctx.n.grafico;
  for (const v of g.voci) {
    const p = v.p;
    if (v.tipo === 'punto') {
      svg.push(`<circle class="g-punto${cl(v)}" cx="${X(p[0])}" cy="${Y(p[1])}" r="4.5"/>`);
      if (v.etichetta) etichetta(p[0], p[1], v.etichetta, v.pos || 'ne');
    } else if (v.tipo === 'freccia' || v.tipo === 'segmento') {
      svg.push(`<path class="g-linea${cl(v)}" d="M${X(p[0])} ${Y(p[1])}L${X(p[2])} ${Y(p[3])}"${v.tipo === 'freccia' ? ` marker-end="url(#g-freccia-${n}-${v.classi.find(c => /^(accento|blu|ambra|rosa|viola|verde|grigio)$/.test(c)) || 'base'})"` : ''}/>`);
      if (v.etichetta) etichetta(v.tipo === 'freccia' ? p[2] : (p[0] + p[2]) / 2, v.tipo === 'freccia' ? p[3] : (p[1] + p[3]) / 2, v.etichetta, v.pos || 'ne');
    } else if (v.tipo === 'retta') {
      const [a, b, c, d] = p, dx = c - a, dy = d - b, t = 1e3;
      if (!dx && !dy) throw new Error('retta: i due punti coincidono');
      svg.push(`<path class="g-linea${cl(v)}" d="M${X(a - t * dx)} ${Y(b - t * dy)}L${X(a + t * dx)} ${Y(b + t * dy)}"/>`);
      if (v.etichetta) etichetta(c, d, v.etichetta, v.pos || 'ne');
    } else if (v.tipo === 'poligono') {
      const pt = [];
      for (let k = 0; k < p.length; k += 2) pt.push(`${X(p[k])} ${Y(p[k + 1])}`);
      svg.push(`<path class="g-poligono${cl(v)}" d="M${pt.join('L')}Z"/>`);
      if (v.etichetta) { let sx = 0, sy = 0; for (let k = 0; k < p.length; k += 2) { sx += p[k]; sy += p[k + 1]; } etichetta(sx / (p.length / 2), sy / (p.length / 2), v.etichetta, v.pos || 'c'); }
    } else if (v.tipo === 'cerchio') {
      svg.push(`<ellipse class="g-linea${cl(v)}" cx="${X(p[0])}" cy="${Y(p[1])}" rx="${+(p[2] / (x1 - x0) * W).toFixed(2)}" ry="${+(p[2] / (y1 - y0) * H).toFixed(2)}"/>`);
      if (v.etichetta) etichetta(p[0] + p[2] * 0.72, p[1] + p[2] * 0.72, v.etichetta, v.pos || 'ne');
    } else if (v.tipo === 'arco') {
      const [cx, cy, r, t0, t1] = p, d = [];
      for (let k = 0; k <= 60; k++) { const t = t0 + (t1 - t0) * k / 60; d.push(`${k ? 'L' : 'M'}${X(cx + r * Math.cos(t))} ${Y(cy + r * Math.sin(t))}`); }
      svg.push(`<path class="g-linea${cl(v)}" d="${d.join('')}"/>`);
      if (v.etichetta) { const t = (t0 + t1) / 2; etichetta(cx + r * 1.3 * Math.cos(t), cy + r * 1.3 * Math.sin(t), v.etichetta, v.pos || 'c'); }
    } else if (v.tipo === 'testo') {
      etichetta(p[0], p[1], v.etichetta || '', v.pos || 'c', ' g-testo' + cl(v));
    }
  }
  const colori = ['base', 'accento', 'blu', 'ambra', 'rosa', 'viola', 'verde', 'grigio'];
  const defs = `<defs><marker id="g-punta" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 1L10 5L0 9z" class="g-punta"/></marker>`
    + colori.map(c => `<marker id="g-freccia-${n}-${c}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="8" markerHeight="8" orient="auto-start-reverse"><path d="M0 1L10 5L0 9z" class="g-punta-freccia g-${c}"/></marker>`).join('') + '</defs>';
  const aria = esc((g.titolo || 'grafico').replace(/\$/g, ''));
  return `<figure class="grafico" id="grafico-${n}"><div class="g-quadro" style="aspect-ratio:${W}/${H}"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${aria}" preserveAspectRatio="none">${defs}${svg.join('')}</svg>${et.join('')}</div>${g.titolo ? `<figcaption>${inLinea(g.titolo, ctx)}</figcaption>` : ''}</figure>`;
}

/* ---------- pagina ---------- */

function leggiIntestazione(sorgente, ctx) {
  const fm = sorgente.replace(/^\uFEFF/, '').match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!fm) { ctx.errore(1, 'manca l\'intestazione YAML (--- … ---)'); return { meta: {}, corpo: sorgente }; }
  let grezza = {};
  try { grezza = yaml.load(fm[1]) || {}; } catch (e) { ctx.errore(1, `intestazione YAML non valida: ${e.message}`); }
  const meta = {};
  for (const [k, v] of Object.entries(grezza)) meta[L.chiavi[k] || k] = v;
  return { meta, corpo: sorgente.replace(/^\uFEFF/, '').slice(fm[0].length) };
}

// divide il corpo in sezioni «## Titolo (p. 4)»: il testo tra parentesi finali diventa l'etichetta a destra del titolo
function sezioni(corpo) {
  const out = [];
  let cur = { titolo: null, righe: [] }, codice = false;
  for (const r of corpo.split(/\r?\n/)) {
    if (/^```/.test(r)) codice = !codice;
    if (!codice && /^##\s/.test(r)) { out.push(cur); cur = { titolo: r.replace(/^##\s+/, '').trim(), righe: [] }; continue; }
    cur.righe.push(r);
  }
  out.push(cur);
  return out;
}
const RIF = /\s*\(((?:pp?\.|slide|dispense|libro|oltre|Martelli|handouts?|book|beyond)[^()]*)\)\s*$/i;

function compila(file) {
  const sorgente = readFileSync(file, 'utf8');
  const ctx = nuovoContesto(relative(RADICE, file).replace(/\\/g, '/'), sorgente);
  const { meta, corpo } = leggiIntestazione(sorgente, ctx);
  for (const k of ['corso', 'lezione', 'titolo', 'descrizione', 'appunti_html', 'file_altro'])
    if (!meta[k]) ctx.errore(1, `nell'intestazione manca «${Object.entries(L.chiavi).find(([, v]) => v === k)?.[0] || k}»`);
  const corso = String(meta.corso || ''), lezione = String(meta.lezione || '');
  ctx.materiale = { handouts: 'dispense', slides: 'slide', book: 'libro' }[meta.materiale] || meta.materiale || 'slide';
  ctx.chiave = `${corso.toLowerCase()}-${lezione}-checklist`;
  if (!/^[A-Za-z0-9-]{1,60}-checklist$/.test(ctx.chiave)) ctx.errore(1, `chiave della checklist non valida «${ctx.chiave}»`);
  if (meta.data && !/^\d{4}-\d{2}-\d{2}$/.test(meta.data instanceof Date ? meta.data.toISOString().slice(0, 10) : String(meta.data))) ctx.errore(1, 'data nel formato AAAA-MM-GG');
  const data = meta.data ? (meta.data instanceof Date ? meta.data.toISOString().slice(0, 10) : String(meta.data)) : '';

  const parti = sezioni(corpo);
  const toc = [], html = [];
  let fonti = '', num = 0;
  if (parti[0].righe.join('').trim()) html.push(markdown(parti[0].righe.join('\n'), ctx));
  for (const s of parti.slice(1)) {
    let titolo = s.titolo, badge = '', idEsplicito = null;
    titolo = titolo.replace(/\s*\{#([a-z0-9-]+)\}\s*$/, (_, x) => { idEsplicito = x; return ''; });
    titolo = titolo.replace(RIF, (_, x) => { badge = x.trim(); return ''; });
    const tl = titolo.toLowerCase().replace(/’/g, "'");
    const speciale = Object.entries(L.speciali).find(([k]) => tl === k || tl.startsWith(k + ' '))?.[1];
    const testo = s.righe.join('\n');
    if (speciale === 'fonti' || speciale === 'sources') { fonti = markdown(testo, ctx); continue; }
    if (speciale === 'in-breve' || speciale === 'in-brief') {
      // l'elenco iniziale va nel riquadro «In breve»; eventuali riquadri dopo l'elenco (per esempio i canali) restano fuori
      const righe = s.righe;
      let k = righe.findIndex(r => /^(>\s*\[!|:::|```)/.test(r));
      if (k < 0) k = righe.length;
      const elenco = righe.slice(0, k).join('\n'), dopo = righe.slice(k).join('\n');
      const punti = righe.slice(0, k).filter(r => /^[-*]\s/.test(r)).length;
      toc.push({ id: speciale, n: '→', titolo: inLinea(titolo, ctx) });
      html.push(`<section class="tldr" id="${idUnico(ctx, speciale)}" aria-labelledby="tldr-title">\n<h2 id="tldr-title">${T.inPunti(punti)}</h2>\n${markdown(elenco, ctx)}</section>`);
      if (dopo.trim()) html.push(markdown(dopo, ctx));
      continue;
    }
    num++;
    const id = idUnico(ctx, idEsplicito || speciale || slug(titolo));
    const titoloHtml = inLinea(titolo, ctx);
    const contenuto = markdown(testo, ctx);
    let destra = badge ? `<span class="slides">${inLinea(badge, ctx)}</span>` : '';
    if (!badge && speciale && L.distintivi[speciale]) destra = `<span class="slides">${L.distintivi[speciale]}</span>`;
    if (speciale === 'checklist' && ctx.checklist) destra = `<span class="pill" id="check-progress">${T.suN(ctx.checklist)}</span>`;
    const barra = /class="qa-list"/.test(contenuto) ? `<div class="toolbar"><p>${T.rispondi}</p><button type="button" class="btn qa-toggle">${T.mostraTutte}</button></div>\n` : '';
    toc.push({ id, n: `§${num}`, titolo: titoloHtml });
    html.push(`<section id="${id}" aria-labelledby="h-${id}">\n<div class="sec-head"><span class="sec-num">§${num}</span><h2 id="h-${id}">${titoloHtml}</h2>${destra}</div>\n${barra}${contenuto}</section>`);
  }

  // controllo facoltativo: espressioni da non usare, elencate in un file locale fuori dal repository
  for (const re of VIETATE) {
    const trovata = sorgente.match(re);
    if (trovata) ctx.errore(rigaDi(ctx, trovata[0]), `espressione da non usare negli appunti: «${trovata[0]}»`);
  }
  if (!ctx.checklist) ctx.avviso(null, 'la lezione non ha una checklist (```checklist)');

  const nomeCorso = L.corsi[corso] || corso;
  const modulo = meta.modulo ? String(meta.modulo) : '';
  const sopratitolo = meta.sopratitolo || [modulo ? L.moduli[modulo] : nomeCorso, `${T.lezione} ${lezione}`].join(' · ');
  const scheda = meta.scheda && typeof meta.scheda === 'object'
    ? Object.entries(meta.scheda).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${inLinea(String(v), ctx)}</dd></div>`).join('') : '';
  const u = ctx.usati;
  const legenda = [`<li class="l-def"><i></i>${T.lDef}</li>`, `<li class="l-trap"><i></i>${T.lTrap}</li>`, `<li class="l-exam"><i></i>${T.lExam}</li>`,
    `<li class="l-extra"><i></i>${T.lExtra(L.materiale[ctx.materiale] || L.materiale.slide)}</li>`];
  if (u.has('ESEMPIO')) legenda.push(`<li class="l-esempio"><i></i>${T.lEsempio}</li>`);
  if (u.has('IDEA') || u.has('METODO')) legenda.push(`<li class="l-idea"><i></i>${T.lIdea}</li>`);
  // pagina nell'altra lingua: se nella cartella accanto (UniTo-en o UniTo) non c'è ancora, il link porta alla pagina del corso
  const corsoAltro = LINGUA === 'it' ? (corso === 'INGLESE' ? 'ENGLISH' : corso) : (corso === 'ENGLISH' ? 'INGLESE' : corso);
  // la cartella dell'altra lingua si può indicare con ALTRA_LINGUA (per esempio quando si compila da una copia della repo)
  const radiceAltra = process.env.ALTRA_LINGUA || join(RADICE, '..', LINGUA === 'it' ? 'UniTo-en' : 'UniTo');
  const localeAltro = join(radiceAltra, LINGUA === 'it' ? 'notes' : 'appunti', corsoAltro, String(meta.file_altro || ''));
  const altro = `${L.altroSito}${corsoAltro}/${existsSync(localeAltro) ? meta.file_altro : ''}`;
  if (!existsSync(localeAltro)) ctx.avviso(null, `${relative(join(RADICE, '..'), localeAltro).replace(/\\/g, '/')} non c'è ancora: il link all'altra lingua porta alla pagina del corso`);
  const [m1, m2, m3, m4] = L.marcatori;
  const indice = toc.map(t => `<li><a href="#${t.id}"><span class="n">${t.n}</span>${t.titolo}</a></li>`).join('\n');
  const rielab = L.rielaborati[ctx.materiale] || L.rielaborati.slide;
  const titoloPagina = `${lezione} · ${String(meta.titolo || '').replace(/\$/g, '')}`;

  const pagina = `<!doctype html>
<html lang="${L.lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titoloPagina)}</title>
<meta name="${LINGUA === 'it' ? 'lezione' : 'lesson'}" content="${esc(lezione)}">
${data ? `<meta name="${LINGUA === 'it' ? 'data' : 'date'}" content="${data}">\n` : ''}${modulo ? `<meta name="${LINGUA === 'it' ? 'modulo' : 'module'}" content="${esc(modulo)}">\n` : ''}<meta name="description" content="${esc(meta.descrizione || '')}">
<link rel="alternate" hreflang="${L.altraLang}" href="${esc(altro)}">
<meta name="theme-color" content="#000000">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23080d19'/%3E%3Crect x='1' y='1' width='30' height='30' rx='7' fill='none' stroke='%233fe0cc' stroke-opacity='.55'/%3E%3Ctext x='16' y='22.5' font-family='Consolas,monospace' font-size='18' font-weight='700' text-anchor='middle' fill='%233fe0cc'%3E%C2%A7%3C/text%3E%3C/svg%3E">
<script>
  var t = null; try { t = localStorage.getItem('appunti:tema'); if (localStorage.getItem('appunti:moto') === 'ridotto') document.documentElement.classList.add('meno-moto'); } catch (e) {} if (t !== 'dark') document.documentElement.setAttribute('data-theme', t === 'light' ? 'light' : 'oled');
</script>
<link rel="preload" href="../../assets/fonts/plex-sans-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="../../assets/css/appunti.css">
${ctx.formule.length ? '<link rel="stylesheet" href="../../assets/katex/katex.min.css">\n' : ''}<!-- pagina generata da ${LINGUA === 'it' ? 'strumenti/lezioni.mjs' : 'tools/lessons.mjs'} a partire da ${ctx.file}: modifica il Markdown, non questa pagina -->
</head>
<body>
<!-- ${m1} -->
<!-- ${m2} -->

<div class="shell">
  <nav class="toc" aria-label="${T.indiceLezione}">
    <details id="toc-details" open>
      <summary>${T.indice}</summary>
      <ol>
${indice}
      </ol>
    </details>
  </nav>

  <main id="contenuto" class="foglio">
    <header>
      <nav class="crumbs" aria-label="${T.percorso}"><a href="../../index.html">${T.appunti}</a> › <a href="index.html">${esc(nomeCorso)}</a> › ${T.lezione} ${esc(lezione)}</nav>
      <p class="eyebrow">${inLinea(sopratitolo, ctx)}</p>
      <h1>${inLinea(String(meta.titolo || ''), ctx)}</h1>
${meta.lede ? `      <p class="lede">${inLinea(String(meta.lede), ctx)}</p>\n` : ''}${scheda ? `      <dl class="meta">${scheda}</dl>\n` : ''}      <ul class="legend" aria-label="${T.legenda}">
        ${legenda.join('\n        ')}
      </ul>
    </header>

${html.join('\n\n')}

    <footer class="sources">
      <h2>${T.fonti}</h2>
${fonti}
      <p class="box trap avvertenza">${T.avvertenze(rielab, L.avvertenzeUrl)}</p>
      <p>${T.licenza(ctx.materiale, L.repo)}</p>
    </footer>
  </main>
</div>
<!-- ${m3} -->
<!-- ${m4} -->
<script src="../../assets/js/lezione.js" defer></script>
${[...ctx.script].sort().map(s => `<script src="../../assets/js/${s}" defer></script>\n`).join('')}</body>
</html>
`;
  return { ctx, meta, pagina, uscita: meta.appunti_html ? join(RADICE, String(meta.appunti_html)) : null };
}

/* ---------- avvio ---------- */

function sorgenti() {
  const base = join(RADICE, L.contesto);
  const out = [];
  for (const corso of readdirSync(base, { withFileTypes: true })) {
    if (!corso.isDirectory()) continue;
    const cartella = join(base, corso.name, L.lezioni);
    if (!existsSync(cartella)) continue;
    for (const f of readdirSync(cartella)) if (f.endsWith('.md')) out.push(join(cartella, f));
  }
  return out.sort();
}

const argomenti = process.argv.slice(2);
const soloControllo = argomenti.includes('--controlla') || argomenti.includes('--check');
const scelti = argomenti.filter(a => !a.startsWith('--')).map(a => join(process.cwd(), a));
let errori = 0, scritte = 0;
for (const file of scelti.length ? scelti : sorgenti()) {
  const testa = readFileSync(file, 'utf8').slice(0, 4000);
  if (!/^(genera_html|generate_html):\s*(true|sì|si|yes)\s*$/m.test(testa)) continue;
  const { ctx, pagina, uscita } = compila(file);
  for (const a of ctx.avvisi) console.warn(`avviso: ${a}`);
  for (const e of ctx.errori) console.error(`ERRORE: ${e}`);
  errori += ctx.errori.length;
  if (ctx.errori.length || soloControllo || !uscita) continue;
  if (!existsSync(dirname(uscita))) { console.error(`ERRORE: ${ctx.file}: la cartella di ${relative(RADICE, uscita)} non esiste`); errori++; continue; }
  // la barra in alto e il piede li inserisce il generatore delle pagine dei corsi: se la pagina li ha già, li conservo
  let finale = pagina;
  if (existsSync(uscita)) {
    const vecchia = readFileSync(uscita, 'utf8');
    for (const [a, b] of [[L.marcatori[0], L.marcatori[1]], [L.marcatori[2], L.marcatori[3]]]) {
      const i = vecchia.indexOf(`<!-- ${a}`), j = vecchia.indexOf(`<!-- ${b} -->`);
      const x = finale.indexOf(`<!-- ${a} -->`), y = finale.indexOf(`<!-- ${b} -->`);
      if (i >= 0 && j > i && x >= 0 && y > x) finale = finale.slice(0, x) + vecchia.slice(i, j) + finale.slice(y);
    }
    const csp = vecchia.match(/<meta http-equiv="Content-Security-Policy"[^>]*>\n<meta name="referrer"[^>]*>\n<script src="[^"]*memoria\.js"><\/script>\n/);
    if (csp) finale = finale.replace('<meta charset="utf-8">\n', `<meta charset="utf-8">\n${csp[0]}`);
    if (vecchia === finale) continue;
  }
  writeFileSync(uscita, finale, { encoding: 'utf8' });
  scritte++;
  console.log(`${relative(RADICE, uscita).replace(/\\/g, '/')} ← ${ctx.file} (${ctx.formule.length} formule, ${ctx.n.esercizio} esercizi, ${ctx.n.quiz} quiz)`);
}
if (errori) { console.error(`${errori} errori: nessuna pagina scritta per i file con errori.`); process.exit(1); }
if (!soloControllo) console.log(`lezioni in Markdown: ${scritte} pagine aggiornate`);
