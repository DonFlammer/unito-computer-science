# Programming I (Programmazione I), channel (canale) B, 2026/27 — lessons studied

> Italian original: <https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/indice_lezioni.md>

Full course sheet: `course.md`. Exam-style exercises: `exam_exercises.md`. Expected sequence of the next lessons: `course.md` → "Expected sequence of lessons".

| # | Date | Title | File | Key concepts |
|---|---|---|---|---|
| 01A | 28/09/2026 | A first algorithm | `lessons/01A_first_algorithm.md` · HTML: `notes/PROG1/01A_first_algorithm.html` | computer science = the study of algorithms (Dijkstra); definition of algorithm (ordered, unambiguous, effectively computable, produces a result, terminates); everything is a number; imperative programming; m × n by repeated addition from 0; accumulator `s` and counter `i`; Wirth "Program = Algorithms + Data Structures"; 7 versions of the algorithm; bug in the n = 0 case → **check first, then execute**; `←` vs `=`; conditional/unconditional jumps; Begin/End blocks and indentation; flowchart; low/high level; implementing vs translating; next: Von Neumann |

## Common threads (to link back to in the next lessons)

- **Initial case / edge cases** (n = 0, empty arrays, initial value of the sentinels) — slide 01A-20: "typical source of errors, even in the exam".
- **Structured programming → exam rules**: in iterative functions a single `return`, sentinel variables, no `break`, `switch`, `case` (in 2025/26 also no `static`); in recursive ones no `for`/`while` loops, whereas multiple `return`s are allowed. You leave the loop only through its condition (V7 of 01A).
- **Accumulator and counter** → `for`/`while` loops, quantifiers with a sentinel (`true` for "for all", `false` for "there exists").
- **Invariant `s = m × i`, pre/postconditions** → correctness with `assert` and backward reasoning.
- **Execution trace** → memory model (stack of frames) in exam exercises.
- `while (i != n)` ↔ V7; `do-while` ↔ V2 (body executed at least once).
