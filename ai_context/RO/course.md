# Operational Research (Ricerca Operativa) — course sheet (channels A, B, C · A.Y. 2026/27)

> Italian original: <https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/RO/corso.md>

Updated as of 28/09/2026. Sources: official course page (scheda insegnamento) INF0327 (https://laurea.informatica.unito.it/do/corsi.pl/Show?_id=nw57, updated 09/07/2026) and past course pages, exam listings on Esse3 (bacheca appelli), University Planner calendars 2025/26, the student guide (Guida degli studenti) of the Team Studentesco Informatica (TSI, the Computer Science student team). 2nd-semester course: 2026/27 timetables not yet published (University Planner has no events after 15/01/2027); the 2026/27 Moodle page already exists (id=3719, login required).

## Key facts

| Item | Value |
|---|---|
| Code | INF0327 · 6 CFU (ECTS credits) · related/supplementary activity (affine/integrativo), MAT/09 · 1st year, **2nd semester** |
| Hours | 32 h of lectures + 20 h of exercise classes in the classroom; tutoring (tutorato; in 2025/26, 6 sessions per channel from mid-April). **No lab** |
| Period | 22/02/2027 – 04/06/2027 |
| Exam | computer-based written exam (at least 1.5 hours) + **optional oral exam**, the same for the three channels (canali) |
| Prerequisites | vectors, matrices, linear systems, linear independence, bases (from Discrete Mathematics, Algebra and Geometry — Matematica Discreta, Algebra e Geometria, MDAG — 1st semester) |
| Texts | compulsory: the lecturers' notes (appunti) and lecture notes on Moodle; optional: R. J. Vanderbei, *Linear Programming: Foundations and Extensions*, Springer |

## Lecturers

| Channel | Lecturer (lectures and exercise classes) | Reference timetable 2025/26 |
|---|---|---|
| **A** (surnames A–D) | Andrea Grosso | Tue 9:00–11:00, Fri 11:00–13:00 · Room A |
| **B** (surnames E–O) | Roberto Aringhieri | Mon 11:00–13:00, Wed 11:00–13:00 · Room B |
| **C** (surnames P–Z) | Pierre Hosteins | Tue 16:00–18:00, Thu 14:00–16:00 · Room B |

- **Single Moodle page** "Ricerca Operativa (A,B,C)" 2026/27 (short name RO-26-27): [id=3719](https://informatica.i-learn.unito.it/course/view.php?id=3719), UniTo login required (self-enrolment). 2025/26 page: id=3555 (also with login).
- The exams take place on Moodle Esami (esami.i-learn.unito.it): the lecturers enrol students on the page, starting from those registered for the exam session on Esse3.

## Exam (the same for A, B, C)

- **Written exam** from 0 to 33 points, on the computer in the lab (Turing, Von Neumann, Dijkstra). The precise format of the computer-based questions is not public.
- **Optional oral exam from −16 to +6 points**, added to the written exam: after the oral exam the grade can even become a fail.
- The grade of a test is valid for the academic year in which it was taken. **Showing up at a new exam session cancels the previous grade, even if you withdraw.**
- **Exam sessions (appelli):** for 2026/27 first-year students the first ones will be in the 2027 summer exam period (not yet published). Typical pattern: 2 sessions in June–July, 1–2 in September–October, an extraordinary one in winter. June and July are the most crowded (250–280 registered).

Typical structure of the written exams of the old CMRO course (official collection 2012–2019, out of 33 points), useful as a reference: LP/ILP modelling (in Italian PL/PLI; 10–12 points), linear program with the graphical method, simplex, dual and complementary slackness (11–13 points), plus linear algebra exercises that today are **no** longer part of Operational Research.

## Official programme (common to all channels)

1. Introduction to Operational Research and basics of complexity.
2. Linear Programming models with continuous and integer variables, starting from real problems.
3. The simplex algorithm.
4. Linear duality and the dual simplex.
5. Integer programming: Branch and Bound.
6. Network flows and shortest path.

## Materials

- **TSI guide** (`Materie/CMRO`): the **official collection by Aringhieri and Grosso with exam texts and solution outlines 2012–2019** (the most useful resource for modelling, simplex and duality; skip Gauss-Jordan and the linear algebra proofs, which belong to the old course); notes, exercise classes and tutoring sessions of Operational Research 2023/24 from channel A (Branch and Bound, graphs, flows).
- The folder is called CMRO because until 2021/22 the course was "Calcolo Matriciale e Ricerca Operativa" (Matrix Calculus and Operational Research): ignore the matrix calculus part.

## Tips and pitfalls

- Go to the oral exam only if you have prepared the theory: it can take away up to 16 points.
- Do not show up "just to try" if you already have a grade you are happy with: you lose it even if you withdraw.
- Practise running the simplex precisely and writing the results neatly: the written exam is on the computer.
- For modelling (binary variables, big-M, logical constraints, min-max objectives) use the 2012–2019 collection; for Branch and Bound, flows and shortest path use the course material.
- Arrive at the 2nd semester with a solid grasp of matrices, systems and bases from MDAG.
- Attend the April–May tutoring sessions: they are the most direct way to practise.
