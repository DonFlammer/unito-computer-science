"""Generates the course pages (notes/<CODE>/index.html) and the course list on the home page.

Each lesson is a file notes/<CODE>/<code>_<title>.html whose <head> contains:
    <title>01A · A first algorithm</title>
    <meta name="lesson" content="01A">
    <meta name="date" content="2026-09-28">
    <meta name="module" content="MD">      (only for courses split into modules, such as MDAG)

Usage, from the repository root, after every new lesson:
    python tools/generate_courses.py
"""

import base64
import hashlib
import html
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
NOTES = ROOT / "notes"
INDEX = ROOT / "index.html"
GH = "https://github.com/DonFlammer/unito-computer-science/blob/main/ai_context/"
IT_SITE = "https://donflammer.github.io/unito-informatica/"
START = "<!-- COURSES:START"
END = "<!-- COURSES:END -->"
FRIENDLY = ("Its official 2026/27 course page labels it \"English-friendly course\": the department defines these as "
            "courses with material in English to prepare the exam, whose lecturer allows students to take the exam "
            "in English. Lectures are in Italian: ask the lecturer at the start of the course.")

COURSES = [
    {
        "code": "PROG1", "it_code": "PROG1", "name": "Programming I", "italian": "Programmazione I",
        "course_code": "MFN0582", "cfu": 9, "semester": 1,
        "extra": "C language",
        "exam": "Computer-based exam on Moodle, common to the three channels: C exercises with automatic tests, and the code is also read.",
        "dates": "25/01 and 11/02/2027",
        "links": [("Course sheet and exam", "PROG1/course.md"),
                  ("Exam-style exercises", "PROG1/exam_exercises.md"),
                  ("Lesson index and links between lessons", "PROG1/lesson_index.md")],
    },
    {
        "code": "FDA", "it_code": "FDA", "name": "Foundations of Computer Science", "italian": "Fondamenti dell'Informatica",
        "course_code": "INF0348", "cfu": 9, "semester": 1, "friendly": True,
        "exam": "Written exam on Moodle Esami, common to the three channels: 9 quizzes (at least 18) and an optional open question, up to 33.",
        "note": ("Warning: in the \"Programma per il 2026\" (2026 programme) on its Moodle page, channel B omits some "
                 "sections of the book that the common map of the three lecturers (\"Argomenti del corso e dove trovarli\") "
                 "includes: §1.8 of Part 1 and §2.3, §3.1, §3.3, §3.4 and part of §12.3 of Part 2. The notes follow the "
                 "channel B lectures and so may not cover them, but the exam is common to the three channels: study them "
                 "on the book (details in the course sheet)."),
        "dates": "29/01 and 18/02/2027",
        "links": [("Course sheet and exam", "FDA/course.md")],
    },
    {
        "code": "MDAG", "it_code": "MDAG", "name": "Discrete Mathematics, Algebra and Geometry",
        "italian": "Matematica Discreta, Algebra e Geometria", "course_code": "INF0328", "cfu": 12, "semester": 1,
        "exam": "Two separate written exams, Discrete Mathematics and Geometry; the grade is the average.",
        "dates": "Discrete Mathematics 19/01 and 03/02, Geometry 22/01 and 05/02/2027",
        "modules": [("MD", "Discrete Mathematics"), ("AG", "Linear Algebra and Geometry")],
        "links": [("Course sheet and exam", "MDAG/course.md")],
    },
    {
        "code": "ANMAT", "it_code": "ANMAT", "name": "Mathematical Analysis", "italian": "Analisi Matematica",
        "course_code": "MFN0570", "cfu": 9, "semester": 2,
        "exam": "Three computer-based tests: quiz, theory, exercises.",
        "links": [("Course sheet and exam", "ANMAT/course.md")],
    },
    {
        "code": "ARCH", "it_code": "ARCH", "name": "Computer Architecture", "italian": "Architettura degli Elaboratori",
        "course_code": "INF0326", "cfu": 6, "semester": 2, "friendly": True,
        "exam": "Computer-based written exam with a RISC-V lab part, then an oral exam.",
        "links": [("Course sheet and exam", "ARCH/course.md")],
    },
    {
        "code": "PROG2", "it_code": "PROG2", "name": "Programming II", "italian": "Programmazione II",
        "course_code": "INF0330", "cfu": 6, "semester": 2,
        "exam": "Mandatory projects, partial exam and written exam.",
        "links": [("Course sheet and exam", "PROG2/course.md")],
    },
    {
        "code": "RO", "it_code": "RO", "name": "Operational Research", "italian": "Ricerca Operativa",
        "course_code": "INF0327", "cfu": 6, "semester": 2,
        "exam": "Computer-based written exam and optional oral exam.",
        "links": [("Course sheet and exam", "RO/course.md")],
    },
    {
        "code": "ENGLISH", "it_code": "INGLESE", "name": "English I", "italian": "Lingua Inglese I",
        "course_code": "MFN0590", "cfu": 3, "semester": 2,
        "exam": "SET test with no grade (pass/fail), or recognition of a certificate of at least B1 level (covering all 4 skills).",
        "lede": ("The course starts in the second semester and is a single course for channels A, B and C (online "
                 "exercise classes, no split by channel): for now there is the course sheet with exam, material and "
                 "recognition of certificates. Notes will come lesson by lesson."),
        "links": [("Course sheet and exam", "ENGLISH/course.md")],
    },
]

# Look: shared stylesheet and scripts in assets/ (see assets/css/appunti.css); only the page structure is here.
ICON = ("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' "
        "rx='8' fill='%23080d19'/%3E%3Crect x='1' y='1' width='30' height='30' rx='7' fill='none' stroke='%233fe0cc' "
        "stroke-opacity='.55'/%3E%3Ctext x='16' y='22.5' font-family='Consolas,monospace' font-size='18' font-weight='700' "
        "text-anchor='middle' fill='%233fe0cc'%3E%C2%A7%3C/text%3E%3C/svg%3E")
REPO = "https://github.com/DonFlammer/unito-computer-science"
OFA = "https://donflammer.github.io/unito-ofa-maths/"
LICENCE = "https://creativecommons.org/licenses/by-nc-sa/4.0/"

e = html.escape


def head_html(root, title, description, it_url):
    """Common <head>: theme and animations chosen before painting, fonts, stylesheet."""
    return f"""<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{e(title)}</title>
<meta name="description" content="{e(description)}">
<meta name="theme-color" content="#000000">
<link rel="alternate" hreflang="it" href="{it_url}">
<link rel="icon" href="{ICON}">
<script>
  var t = null; try {{ t = localStorage.getItem('appunti:tema'); if (localStorage.getItem('appunti:moto') === 'ridotto') document.documentElement.classList.add('meno-moto'); }} catch (e) {{}} if (t !== 'dark') document.documentElement.setAttribute('data-theme', t === 'light' ? 'light' : 'oled');
</script>
<link rel="preload" href="{root}assets/fonts/plex-sans-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="{root}assets/css/appunti.css">"""


def site_bar(root, it_url, current=""):
    """Bar at the top, the same on every page; root = relative path of the home page."""
    courses = ' aria-current="page"' if current == "courses" else ""
    return f"""<a class="salta" href="#contenuto">Skip to content</a>
<canvas id="rete" aria-hidden="true"></canvas>
<script src="{root}assets/js/rete.js"></script>
<header class="barra">
  <div class="barra-in">
    <a class="marchio" href="{root}index.html"><span class="glifo" aria-hidden="true">§</span><span class="nome"><b>Computer Science Notes</b><small>UniTo · 2026/27</small></span></a>
    <button type="button" class="menu-btn" aria-label="Menu" aria-expanded="false"><span></span></button>
    <nav aria-label="Site">
      <a href="{root}index.html#courses"{courses}>Courses</a>
      <a href="{GH}unito_computer_science.md">General info</a>
      <a href="{REPO}/tree/main/ai_context">For AIs</a>
      <a href="{OFA}">OFA</a>
      <a href="{REPO}">GitHub</a>
      <a class="lingua" href="{it_url}" hreflang="it" lang="it">Italiano</a>
      <button type="button" class="theme solo-icona" id="theme-toggle" aria-label="Theme: dark" title="Theme: dark"><span class="testo-btn">Theme: dark</span></button>
      <button type="button" class="theme oled-btn" id="oled-toggle" aria-pressed="true" title="OLED black: black background and white main colour">OLED</button>
      <button type="button" class="theme solo-icona anim-btn" id="anim-toggle" aria-pressed="true" aria-label="Animations: on" title="Animations: on"><span class="testo-btn">Animations: on</span></button>
    </nav>
  </div>
  <div class="avanzamento" aria-hidden="true"></div>
</header>"""


def footer(root):
    return f"""<footer class="piede">
  <div class="piede-in">
    <div>
      <h2>Computer Science Notes</h2>
      <p>First-year Computer Science notes at the University of Turin, A.Y. 2026/27, for channels A, B and C. They may contain errors; I take no responsibility: read the <a href="{REPO}/blob/main/DISCLAIMER.md">disclaimer</a>.</p>
      <p>Quotes from the slides remain the property of their respective authors. For dates, rules and deadlines only Moodle, the degree programme website and Esse3 are authoritative.</p>
    </div>
    <div>
      <h2>The site</h2>
      <ul>
        <li><a href="{root}index.html#courses">First-year courses</a></li>
        <li><a href="{GH}unito_computer_science.md">General info</a></li>
        <li><a href="{REPO}/tree/main/ai_context">Context for AIs</a></li>
        <li><a href="{OFA}">Maths OFA guide</a></li>
      </ul>
    </div>
    <div>
      <h2>Project</h2>
      <ul>
        <li><a href="{REPO}">Source on GitHub</a></li>
        <li><a href="https://t.me/rapsodico">Telegram @rapsodico</a></li>
        <li><a href="{LICENCE}">Licence CC BY-NC-SA 4.0</a></li>
        <li><a href="{IT_SITE}" hreflang="it" lang="it">Versione italiana</a></li>
      </ul>
    </div>
    <div class="piede-fondo"><span>Notes by DonFlammer · CC BY-NC-SA 4.0 · not a University of Turin website</span><button type="button" class="interruttore" id="interruttore-moto" aria-pressed="true"><span class="pista" aria-hidden="true"></span>Animations</button></div>
  </div>
</footer>
<script src="{root}assets/js/appunti.js" defer></script>
<script src="{root}assets/js/studio.js" defer></script>"""


def meta(text, name):
    m = re.search(rf'<meta\s+name="{name}"\s+content="([^"]*)"', text)
    return html.unescape(m.group(1)).strip() if m else ""


def lessons(code):
    """Reads title, code, date and module of every lesson of the course."""
    folder = NOTES / code
    found = []
    for f in sorted(folder.glob("*.html")) if folder.is_dir() else []:
        if f.name == "index.html":
            continue
        text = f.read_text(encoding="utf-8")
        title = re.search(r"<title>(.*?)</title>", text, re.S)
        title = html.unescape(title.group(1)).strip() if title else f.stem
        lesson_code = meta(text, "lesson") or f.stem.split("_")[0]
        title = re.sub(rf"^\s*{re.escape(lesson_code)}\s*·\s*", "", title)
        found.append({"file": f.name, "code": lesson_code, "title": title, "course": code,
                      "date": meta(text, "date"), "module": meta(text, "module")})
    return sorted(found, key=lambda l: (l["module"], l["code"]))


def date_str(iso):
    """Dates are written day/month/year, as in the Italian sources."""
    m = re.fullmatch(r"(\d{4})-(\d{2})-(\d{2})", iso)
    return f"{m.group(3)}/{m.group(2)}/{m.group(1)}" if m else iso


def ordinal(n):
    return {1: "1st", 2: "2nd"}.get(n, f"{n}th")


def lesson_list(les):
    rows = "\n".join(
        f'      <li><span class="nodo" aria-hidden="true">{e(l["code"])}</span><a href="{e(l["file"])}">'
        f'<span class="tit">{e(l["title"])}</span><span class="tenue">{e((l["module"] + " · ") if l["module"] else "")}Lesson {e(l["code"])}</span>'
        f'<time datetime="{e(l["date"])}">{e(date_str(l["date"]))}</time></a></li>'
        for l in les)
    return f'<ol class="lezioni">\n{rows}\n    </ol>'


EMPTY = '<p class="vuoto">No lessons yet: the notes arrive lesson by lesson.</p>'


def course_page(c, les):
    it_url = f"{IT_SITE}appunti/{c['it_code']}/"
    label = " · ".join(x for x in ["First year", f"{ordinal(c['semester'])} semester", c["course_code"], c.get("extra", "")] if x)
    if les:
        lede = ("I follow channel B: the notes for each lesson are based on the channel B slides, with "
                "references to channels A and C. The official programme and the exam are common, so they largely hold "
                "for A and C too, but slides, order, examples and the parts of the programme covered may differ. "
                "Lecturers, timetables, Moodle and exam for all three channels are in the course sheet.")
    elif c["semester"] == 2:
        lede = ("The course starts in the second semester: for now there is the course sheet with lecturers, exam and "
                "material for channels A, B and C. Notes will come lesson by lesson, based on the slides of channel B, "
                "which I follow: they should largely hold for A and C too, but lecturers, slides, order and "
                "examples may differ.")
    else:
        lede = ("Notes arrive lesson by lesson, based on the slides of channel B, which I follow, with "
                "references to channels A and C: the official programme and the exam are common, but slides, examples "
                "and the parts of the programme covered may differ. "
                "Meanwhile the course sheet has lecturers, timetables, Moodle and exam for all three channels.")
    if c.get("lede"):
        lede = c["lede"]
    note = f'\n    <p class="nota">{e(c["note"])}</p>' if c.get("note") else ""
    friendly = f'\n    <p class="nota"><strong>English-friendly.</strong> {e(FRIENDLY)}</p>' if c.get("friendly") else ""

    if not les:
        body = EMPTY
    elif c.get("modules"):
        blocks = []
        for mod_code, mod_name in c["modules"]:
            part = [l for l in les if l["module"] == mod_code]
            blocks.append(f'<h3 class="modulo-titolo">{e(mod_name)}</h3>\n    ' + (lesson_list(part) if part else EMPTY))
        others = [l for l in les if l["module"] not in {s for s, _ in c["modules"]}]
        if others:
            blocks.append('<h3 class="modulo-titolo">Other lessons</h3>\n    ' + lesson_list(others))
        body = "\n    ".join(blocks)
    else:
        body = lesson_list(les)

    data = [("Exam", e(c["exam"]), "")]
    if c.get("dates"):
        data.append(("Exam dates", e(c["dates"]), ""))
    data += [("CFU", str(c["cfu"]), "grande"), ("Lessons", str(len(les)) if les else "—", "grande")]
    sheet = "\n".join(f'      <div class="dato"><dt>{t}</dt><dd class="{k}">{v}</dd></div>' if k else
                      f'      <div class="dato"><dt>{t}</dt><dd>{v}</dd></div>' for t, v, k in data)
    links = "\n".join(f'      <li><a href="{GH}{u}">{e(t)}</a></li>' for t, u in c["links"])
    title = f"{c['name']} · Computer Science Notes UniTo"
    descr = (f"Notes for {c['name']} ({c['italian']}), Computer Science at the University of Turin, A.Y. 2026/27: "
             f"lessons, exam and course sheet for channels A, B and C.")
    return f"""<!doctype html>
<html lang="en">
<head>
{head_html("../../", title, descr, it_url)}
<!-- page generated by tools/generate_courses.py: do not edit by hand -->
</head>
<body class="materia" data-corso="{c['code']}">
{site_bar("../../", it_url, "courses")}
<main class="pagina" id="contenuto">
  <header class="testata rivela">
    <nav class="briciole" aria-label="Breadcrumb"><a href="../../index.html">Notes</a><span class="sep">/</span><span>{e(c['name'])}</span></nav>
    <span class="etichetta">{e(label)}</span>
    <h1>{e(c['name'])}</h1>
    <p class="nome-it">Official Italian name: <span lang="it">{e(c['italian'])}</span></p>
    <p class="intro">{e(lede)}</p>{note}{friendly}
  </header>
  <dl class="scheda n{len(data)} rivela" style="--i:1">
{sheet}
  </dl>

  <section class="sezione" aria-labelledby="h-lessons">
    <div class="sez-testa"><h2 id="h-lessons">Lessons</h2></div>
    {body}
  </section>

  <section class="sezione" aria-labelledby="h-links">
    <div class="sez-testa"><h2 id="h-links">Further reading</h2><p>The Markdown sheets of the AI context: lecturers, timetables and Moodle for the three channels, exam and material.</p></div>
    <ul class="link-lista">
{links}
    </ul>
  </section>
</main>
{footer("../../")}
</body>
</html>
"""


def course_card(c, les, k, compact=False):
    base = f"notes/{c['code']}/"
    dates = f'\n        <p class="date">Exam dates: {e(c["dates"])}</p>' if c.get("dates") and not compact else ""
    n = len(les)
    count = f"{n} {'lesson' if n == 1 else 'lessons'}" if n else "course sheet"
    chips = f'<span class="chip c">{e(c["course_code"])}</span><span class="chip">{c["cfu"]} CFU</span>'
    if c.get("extra"):
        chips += f'<span class="chip">{e(c["extra"])}</span>'
    if c.get("friendly"):
        chips += '<span class="chip">English-friendly</span>'
    return f"""      <a class="corso rivela" style="--i:{k}" data-corso="{c['code']}" href="{base}index.html">
        <span class="riga">{chips}</span>
        <h3>{e(c['name'])}</h3>
        <p class="nome-it" lang="it">{e(c['italian'])}</p>
        <p class="esame">{e(c['exam'])}</p>{dates}
        <span class="piede-card"><span>{count}</span><span class="apri">open →</span></span>
      </a>"""


def first_date(c):
    d = re.search(r"(\d{2})/(\d{2})", c.get("dates", ""))
    return (int(d.group(2)) + (12 if int(d.group(2)) >= 9 else 0), int(d.group(1))) if d else (99, 99)


def dates_block():
    courses = sorted((c for c in COURSES if c["semester"] == 1 and c.get("dates")), key=first_date)
    items = []
    for c in courses:
        day = re.search(r"\d{2}/\d{2}", c["dates"]).group(0)
        items.append(f'        <li><span class="quando">{e(day)}</span>'
                     f'<span class="cosa">{e(c["name"])}</span><span class="dett">{e(c["dates"])}</span></li>')
    items = "\n".join(items)
    return (f"{DATES_START} (generated by tools/generate_courses.py: do not edit by hand) -->\n"
            f'    <aside class="pannello prossimi rivela" style="--i:2" aria-labelledby="h-dates">\n'
            f'      <h2 id="h-dates">First exam dates · winter session</h2>\n      <ol>\n{items}\n      </ol>\n'
            f'      <p class="fonte">Dates from the course sheets; Esse3 and the course Moodle are authoritative.</p>\n'
            f"    </aside>\n    {DATES_END}")


def index_block(all_lessons):
    """Course sections of the home page, with the latest lessons."""
    names = {c["code"]: c["name"] for c in COURSES}
    latest = sorted((l for les in all_lessons.values() for l in les),
                    key=lambda l: (l["date"], l["course"], l["module"], l["code"]), reverse=True)[:5]
    if latest:
        rows = "\n".join(
            f'        <li style="--c:var(--c-{l["course"].lower().replace("english", "inglese")})"><time datetime="{e(l["date"])}">{e(date_str(l["date"]))}</time>'
            f'<a href="notes/{l["course"]}/{e(l["file"])}">{e((l["module"] + " ") if l["module"] else "")}{e(l["code"])} · {e(l["title"])}</a>'
            f'<span class="di">{e(names[l["course"]])}</span></li>'
            for l in latest)
        recent = f'<ol class="flusso">\n{rows}\n      </ol>'
    else:
        recent = '<p class="vuoto">No lessons yet.</p>'
    sem1 = [c for c in COURSES if c["semester"] == 1]
    sem2 = [c for c in COURSES if c["semester"] == 2]
    cards1 = "\n".join(course_card(c, all_lessons[c["code"]], k) for k, c in enumerate(sem1))
    cards2 = "\n".join(course_card(c, all_lessons[c["code"]], k, True) for k, c in enumerate(sem2))
    return (f"{START} (generated by tools/generate_courses.py: do not edit by hand) -->\n"
            f'  <section class="sezione" id="courses" aria-labelledby="h-sem1">\n'
            f'    <div class="sez-testa rivela"><div><span class="etichetta">First semester · from September</span><h2 id="h-sem1">Current courses</h2></div>'
            f'<p>Lesson-by-lesson notes and sheets with exam, exam dates, lecturers and timetables for the three channels.</p></div>\n'
            f'    <div class="griglia-corsi">\n{cards1}\n    </div>\n'
            f'    <div class="ultime rivela"><h3>Latest lessons</h3>\n      {recent}\n    </div>\n  </section>\n\n'
            f'  <section class="sezione" id="second-semester" aria-labelledby="h-sem2">\n'
            f'    <div class="sez-testa rivela"><div><span class="etichetta">Second semester · from February 2027</span><h2 id="h-sem2">Coming next</h2></div>'
            f'<p>For now there are the course sheets with lecturers, exam and material; the notes will come with the lessons.</p></div>\n'
            f'    <div class="griglia-corsi compatta">\n{cards2}\n    </div>\n  </section>\n  {END}')


DATES_START = "<!-- DATES:START"
DATES_END = "<!-- DATES:END -->"


def replace(text, start, end, new):
    i, j = text.find(start), text.find(end)
    if i < 0 or j < 0:
        raise SystemExit(f"index.html: the {start} / {end} markers are missing")
    return text[:i] + new + text[j + len(end):]


def main():
    all_lessons = {}
    for c in COURSES:
        les = lessons(c["code"])
        all_lessons[c["code"]] = les
        folder = NOTES / c["code"]
        folder.mkdir(parents=True, exist_ok=True)
        (folder / "index.html").write_text(course_page(c, les), encoding="utf-8", newline="\n")
        print(f"notes/{c['code']}/index.html - {len(les)} lessons")

    text = INDEX.read_text(encoding="utf-8")
    text = replace(text, START, END, index_block(all_lessons))
    text = replace(text, DATES_START, DATES_END, dates_block())
    # top bar and footer of the home page: the same as on the other pages
    text = replace(text, "<!-- BAR:START", "<!-- BAR:END -->",
                   f"<!-- BAR:START (generated by tools/generate_courses.py) -->\n{site_bar('', IT_SITE)}\n<!-- BAR:END -->")
    text = replace(text, "<!-- FOOTER:START", "<!-- FOOTER:END -->",
                   f"<!-- FOOTER:START (generated by tools/generate_courses.py) -->\n{footer('')}\n<!-- FOOTER:END -->")
    INDEX.write_text(text, encoding="utf-8", newline="\n")
    print("index.html updated")
    update_csp()


# ---------- content security policy (CSP) ----------
# GitHub Pages cannot send HTTP headers: the policy goes in a <meta> right after the charset, on every page.
# Only the site's own scripts plus each page's inline scripts (by their SHA-256 hash), no inline handlers
# (onclick, onerror…), no external resources. Recomputed at every run: after writing or changing a lesson,
# run this script again, otherwise the lesson's inline script would be blocked.
CSP = ("default-src 'none'; script-src 'self'{hashes}; style-src 'self' 'unsafe-inline'; img-src 'self' data:; "
       "font-src 'self'; connect-src 'self'; base-uri 'none'; form-action 'none'")
EXCLUDED = {".git", "slide", "slides", "moodle", "node_modules", "__pycache__"}


def update_csp(root=ROOT):
    for page in sorted(root.rglob("*.html")):
        if EXCLUDED.intersection(page.relative_to(root).parts):
            continue
        text = page.read_text(encoding="utf-8")
        hashes = []
        for m in re.finditer(r"<script(\s[^>]*)?>(.*?)</script>", text, re.S | re.I):
            attributes, code = m.group(1) or "", m.group(2)
            if re.search(r"\bsrc\s*=", attributes, re.I):
                continue
            kind = re.search(r"\btype\s*=\s*[\"']?([^\"'\s>]+)", attributes, re.I)
            if kind and kind.group(1).lower() not in ("text/javascript", "application/javascript", "module"):
                continue                                   # data blocks (application/json) never run
            h = base64.b64encode(hashlib.sha256(code.replace("\r\n", "\n").encode("utf-8")).digest()).decode()
            if h not in hashes:
                hashes.append(h)
        meta = ('<meta http-equiv="Content-Security-Policy" content="'
                + CSP.format(hashes="".join(f" 'sha256-{h}'" for h in hashes)) + '">\n'
                + '<meta name="referrer" content="strict-origin-when-cross-origin">\n')
        memory = '../' * (len(page.relative_to(root).parts) - 1) + 'assets/js/memoria.js'
        meta += f'<script src="{memory}"></script>\n'
        clean = re.sub(r'<script src="[^"]*assets/js/memoria\.js"></script>\n', '', text)
        new = re.sub(r'<meta http-equiv="Content-Security-Policy"[^>]*>\n|<meta name="referrer"[^>]*>\n', "", clean)
        new, n = re.subn(r'<meta charset="utf-8">\n', lambda m: m.group(0) + meta, new, count=1, flags=re.I)
        if not n:
            raise SystemExit(f'{page}: missing <meta charset="utf-8"> in the head')
        if new != text:
            page.write_text(new, encoding="utf-8", newline="\n")
            print(f"CSP updated: {page.relative_to(root).as_posix()} ({len(hashes)} inline scripts)")


if __name__ == "__main__":
    main()
