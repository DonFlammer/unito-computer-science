# Format of the lesson files

> Italian original: <https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/formato_lezioni.md>

The most recent lesson files (`<COURSE>/lessons/*.md` with `generate_html: true` in the header) are the source from which the lesson's HTML page on the website is generated, with `tools/lessons.mjs`. The content is the same; the Markdown has a few extra conventions, explained here for whoever reads it (people or AIs).

## YAML header

`course`, `module` (for MDAG: `MD` Discrete Mathematics, `AG` Linear Algebra and Geometry), `lesson` (code, for example `01B` or `L05`), `title`, `date` (only for lessons that have already taken place), `lecturers`, `source` (slides or handouts used), `facts` (the data shown at the top of the page), `material` (`slides` or `handouts`), plus the technical fields for the page (`description`, `lede`, `italian_file`, `html_notes`, `generate_html`) and `italian_original`, the link to the Italian file.

## Structure

- `## In brief`: the key points of the lesson.
- Sections `## Title (slides 2–5)` or `## Title (pp. 20–21)`: in brackets the slides or the pages of the handouts the section comes from.
- `## Towards the exam`, `## Quiz`, `## Exercises`, `## Review questions`, `## Glossary`, `## Checklist`, `## Sources`.

The Linear Algebra and Geometry lessons (`MDAG/lessons/L*.md`), as they are rewritten, also have: `## Before you start` (what the lesson is about, what you need to know already, what you will be able to do at the end) right after "In brief", and `## The symbols of this lesson` (a table: symbol, how to read it, what it means, example) before "Towards the exam". In each section the order is: a concrete example, the idea in words, then the statement of the handouts in a box, followed by a paragraph "**How to read it.**" that puts it into words.

## Formulas

LaTeX between `$…$` (in the text) and `$$…$$` (in a block of their own). Shorthands: `\R \N \Z \Q \C \K` for the number sets and the field, `\rk` rank, `\Span`, `\Ker` kernel, `\Imm` image, `\tr` trace, `\Mat`, `\sgn`, `\id`. `{}^tA` is the transpose.

## Boxes

Lines starting with `> [!TYPE] title`:

| Type | Meaning |
|---|---|
| `DEF` | definition to know |
| `PROP`, `THEOREM`, `LEMMA`, `COROLLARY` | statements, with the numbering of the handouts or slides |
| `EXAMPLE` | worked example |
| `IDEA`, `METHOD` | the intuitive idea, the step-by-step procedure |
| `PITFALL` | typical mistake |
| `EXAM` | matters in the exam |
| `BEYOND` | does **not** come from the course material: an addition in the notes (topics, methods, links) |
| `NOTE`, `REMARK` | remarks and notices |
| `PROOF` | proof (on the page it is closed and opens with a click) |
| `DEEPER` | more formal statements or side notes that can be skipped (on the page it is closed) |
| `REMEMBER` | "To remember": the gist of a section in a few lines |
| `REFRESHER` | a reminder of school mathematics needed at that point |
| `CHANNELS` | differences and correspondences between channels A, B and C |

The statements in the `DEF`, `PROP`, `THEOREM` boxes follow the slides or the handouts, with their numbering. Topics that go beyond the course material are in a `BEYOND` box or in a section with "beyond the slides/handouts" in its title. The explanations in words, the examples with numbers, the `REFRESHER` boxes and the "Your turn" questions belong to the notes. Older lessons, such as `PROG1/lessons/01A_first_algorithm.md`, still use the marker **[BEYOND THE SLIDES]**.

## Exercises, questions, quizzes

- `::: exercise level title` … `::: solution` … `:::`, with level `basic`, `intermediate`, `hard` or `exam`.
- `::: question text of the question` … answer … `:::`.
- `::: try text of the question` … answer … `:::`: a "Your turn" in the middle of the explanation, that is a short question with the answer right below it (on the page it is hidden until you open it).
- `quiz` block: `Q:` question; `+` correct answer, `-` wrong answer (on the page the order is shuffled); `N:` numeric answer; `=` explanation.

## Other blocks

- `glossary`: one line per term, `Term | definition`.
- `checklist`: the "I can …" items to tick.
- `graph`: a static figure (points, vectors, lines, polygons, circles), one line per element.
- `widget`: an interactive tool of the HTML page (complex plane, vectors, 2×2 matrices, Gauss calculator, Ruffini, 3D space, simulator of the Von Neumann machine). In the Markdown only the initial parameters remain; their codes are in Italian as in the original (for example `modo: somma`).
