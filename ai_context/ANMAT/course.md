# Mathematical Analysis (Analisi Matematica) — course sheet (channels A, B, C · A.Y. 2026/27)

> Italian original: <https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/ANMAT/corso.md>

Updated as of 28/09/2026. Sources: official course page (scheda insegnamento) MFN0570 (https://laurea.informatica.unito.it/do/corsi.pl/Show?_id=orob, updated 29/08/2026), exam listings on Esse3 (bacheca appelli), University Planner calendars 2025/26, Moodle 2024/25 (guest access), the student guide (Guida degli studenti) of the Team Studentesco Informatica (TSI, the Computer Science student team). The course is in the 2nd semester: the 2026/27 timetables and Moodle page cannot be consulted yet.

## Key facts

| Item | Value |
|---|---|
| Code | MFN0570 · 9 CFU (ECTS credits) · basic activity (attività di base), MAT/05 · 1st year, **2nd semester** |
| Hours | 48 h of lectures + 30 h of exercise classes; weekly tutoring (tutorato) common to the three channels (canali), in 2025/26 on Friday 14:00–17:00, Centro Congressi Informatica. **No lab** |
| Period | 22/02/2027 – 04/06/2027 (break 25–30/03) |
| Attendance | optional but "strongly recommended" |
| Exam | three computer-based tests in the labs, **the same for the three channels**; no oral exam |
| Textbook | W. Dambrosio, *Analisi Matematica – Fare e comprendere*, Zanichelli (reference); excerpts from Bramanti, Pagani, Salsa, *Analisi Matematica 1*, for recursively defined sequences |

## Lecturers and Moodle

| Channel | Lecturers 2026/27 (official course page) | Note |
|---|---|---|
| **A** (surnames A–D) | Nicola Soave and Francesca Colasuonno | in past years Soave lectures, Colasuonno exercise classes |
| **B** (surnames E–O) | Alberto Boscaggin and Riccardo Tione | probably Boscaggin lectures, Tione exercise classes (inference) |
| **C** (surnames P–Z) | Joerg Seiler and Riccardo Tione | in past years Seiler lectures, Tione exercise classes |

- **Single Moodle page** for the three channels: AnMat2627, [id=3703](https://informatica.i-learn.unito.it/course/view.php?id=3703) (UniTo login required). 2024/25 archive with guest access: [id=2972](https://informatica.i-learn.unito.it/course/view.php?id=2972).
- **2026/27 timetables not yet published.** For reference, 2025/26: A Tue 11:00–13:00, Thu 9:00–11:00, Fri 9:00–11:00 (Room A); B Tue 11:00–13:00, Wed 9:00–11:00, Thu 11:00–13:00 (Room B); C Mon 14:00–16:00, Wed 16:00–18:00, Thu 16:00–18:00 (Room B).
- If your prerequisites are weak: "Prerequisiti" (prerequisites) quiz on Moodle and online catch-up course on Orient@mente / ofa.unito.it (the same one required for the OFA, the additional learning requirement in mathematics). An in-person preparatory course at the start of the semester is mentioned in the slides for first-year students, but it does not appear in the 2025/26 calendar: to be checked.

## Exam (the same for A, B, C)

**Official course page 2026/27:** three computer-based tests, all compulsory; no electronic devices, no books or notes; **scientific calculator (not graphing, not programmable) only in the third test**; no oral exam. In 2026 the tests took place at 8:30 in the Turing, Dijkstra and Von Neumann labs, split into shifts.

| Test | Content | Duration (Moodle 2024/25) | Threshold 2026/27 |
|---|---|---|---|
| 1 · Preliminary quiz | 5 multiple-choice questions on the basics | 15 min | **at least 4/5**, otherwise you stop there |
| 2 · Theory | definitions, statements, proofs | 45 min | **at least 14/30** |
| 3 · Exercises | structured problems | 60 min | **at least 14/30** |

- **Final grade** = average of tests 2 and 3 rounded to the nearest integer, **+1 if the quiz is 4/5, +2 if it is 5/5**. Passed with at least 18.
- The thresholds change often (2024/25–2025/26: 16 and 16 with no bonus; before that 15 and 18): do not rely on old simulations.
- Registration on Esse3 is compulsory and closes 7 days before; shifts are announced a few days before; anyone retaking the exam follows the rules of the current year.

**Exam sessions (appelli):** for 2026/27 first-year students the first ones will be in the 2027 summer exam period (not yet published). In 2026 they were 18/06 (268 registered), 16/07 (272), 04/09 (130), 23/09 (211), plus one in January for those who had already attended the course.

## Official programme (common to all channels)

1. Functions, graphs and models; geometric transformations of graphs; composite functions.
2. Limits of functions and sequences; theorems on limits; recursively defined sequences; growth comparisons and Landau symbols (also for complexity, e.g. Merge Sort).
3. Differential calculus: derivative, antiderivatives, monotonicity and convexity, Taylor/Mac-Laurin.
4. Approximate solution of equations: existence of zeros and bisection, Newton's method.
5. Integral calculus: definite integral, fundamental theorem, Torricelli-Barrow, improper integrals, midpoint rule with error estimate.
6. Numerical series: geometric, generalised harmonic, convergence tests, comparison with improper integrals.

A very graphical and applied approach (slope, velocity, population models): the course starts from the derivative and the integral in an intuitive way and only afterwards introduces limits.

**Required proofs** (2024/25 exam programme): permanence of sign and comparison; continuity of differentiable functions; functions with zero derivative or zero second derivative, characterisation of antiderivatives; monotonicity and convexity tests; limit of a convergent recurrence = fixed point; existence of zeros; convergence of Newton's method; necessary condition for the convergence of a series; integral mean value; Torricelli-Barrow (the proof seen in class, different from the book's); fundamental theorem; integral comparison test for series.

## Materials

- **Moodle 2024/25** (guest): calendar per channel, exam programme, lecture notes, 11 theory questionnaires, **simulations of the three tests** with worked-solution videos, GeoGebra applets, 2020/21 video lectures.
- **TSI guide** (`Materie/ANMAT`): handwritten notes by Boscaggin (first 3 lectures, 2022/23) and unofficial notes by Alessandro Salerno from channel C 2024/25 (lectures 1–18; careful, the file names do not match the content).
- Useful software: GeoGebra (free) to check graphs, derivatives and integrals.

## Tips and pitfalls

- The initial quiz is a cut-off but it is also worth up to +2: prepare well for it on elementary graphs, transformations and reading graphs.
- Theory is worth half the grade: study all the proofs in the list, some of them from the lecture notes.
- Bring the scientific calculator for the third test.
- Practise with the timed Moodle simulations (15' / 45' / 60').
- The 2nd semester is packed, with Computer Architecture (Architettura degli Elaboratori), Programming II (Programmazione II), Operational Research (Ricerca Operativa) and English I (Lingua Inglese I): it is worth aiming for the first exam session in June.
