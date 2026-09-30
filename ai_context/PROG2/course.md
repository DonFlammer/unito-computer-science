# Programming II (Programmazione II) — course sheet (channels A, B, C · A.Y. 2026/27)

> Italian original: <https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG2/corso.md>

Updated as of 28/09/2026. Sources: official course page (scheda insegnamento) INF0330 (https://laurea.informatica.unito.it/do/corsi.pl/Show?_id=dm23, updated 18/04/2026) and past course pages, exam listings on Esse3 (bacheca appelli), University Planner calendars 2025/26, list of Moodle pages, the student guide (Guida degli studenti) of the Team Studentesco Informatica (TSI, the Computer Science student team). 2nd-semester course: timetables not yet published, Moodle pages closed to guests.

## Key facts

| Item | Value |
|---|---|
| Code | INF0330 · 6 CFU (ECTS credits) · core activity (caratterizzante), INF/01 · 1st year, **2nd semester** |
| Language | **C** (continuing from Programming I, i.e. Programmazione I) |
| Hours | 32 h of theory in the classroom (no computers) + 20 h of lab in groups (turni): 1 = odd student ID number (matricola), 2 = even; optional tutoring (tutorato) |
| Period | 22/02/2027 – 04/06/2027 |
| Exam | **compulsory lab projects + partial exam (esonero) + written exam**, the same for the three channels (canali) |
| Prerequisites | all of Programming I: assignments, conditionals, loops, arrays, structs, strings, **pointers**, functions, recursion, I/O |
| Textbook | the official course page says that the choice of the book "is in progress": no official textbook for now (the Prog I slide gives the Deitel as the common textbook, but this is not confirmed) |

## Lecturers and Moodle

| Channel | Theory | Lab group 1 (odd) | Lab group 2 (even) |
|---|---|---|---|
| **A** (surnames A–D) | Ferruccio Damiani | Ferruccio Damiani | Ferruccio Damiani |
| **B** (surnames E–O) | Robert Birke | Gianluca Torta | Gianluca Torta |
| **C** (surnames P–Z) | Michele Garetto | Michele Garetto | Giorgio Audrito |

- 2026/27 Moodle pages already created (login required): channel A theory [id=3651](https://informatica.i-learn.unito.it/course/view.php?id=3651), lab A1 id=3653, lab A2 id=3655; lab C2 id=3757. The pages for B and for C theory/lab C1 are not out yet.
- **2026/27 timetables not yet published.** For reference, 2025/26: theory twice a week in Room A/B, labs in the Turing Lab (Laboratorio Turing).

## Exam (the same for A, B, C)

Three phases, the same for all channels: the students of the three channels sit the same partial exam together and then, on another day, the same written exam (two separate tests, with two Esse3 registrations):

1. **Lab projects** (compulsory, no grade): submitted on Moodle with automated tests. **All** the projects must be submitted with **all tests passed** to be admitted to the partial exam and the exam. They can be done alone or in pairs (in pairs, both submit). Only submissions made by the close of registration for the partial exam count; submissions are closed during the exam periods. Green tests are necessary but not sufficient: the lecturers may point out other problems.
2. **Partial exam**: a programming exercise on the Piattaforma Esami (exam platform) in the lab (and/or on paper). Outcome: fail (insufficiente, to be repeated) or **sufficient (sufficiente) = 1, good (buono) = 2, excellent (ottimo) = 3 points**. Valid for **one calendar year**.
3. **Written exam** ("TEORIA", theory): closed-answer and open-answer questions, 0–30, passed with **at least 17** (in 2025/26 you needed 18).

- **Final grade = partial exam (1–3) + written exam (17–30)**; 31 or more becomes **30 cum laude**.
- On Esse3 there are **two separate exam sessions (appelli)**, "PROGRAMMAZIONE II- ESONERO" and "PROGRAMMAZIONE II-TEORIA", and you must register for both (they close one week before). In 2025/26 the partial exam was the day before the theory exam, at 9:00 in the Turing, Dijkstra and Von Neumann labs, with shifts if there are many registered students.
- **Exam sessions:** for 2026/27 first-year students the first ones will be in the 2027 summer exam period (not yet published). For reference, 2025/26: four partial exam + theory pairs (partial exam the day before theory): 15–16/06, 20–21/07, 09–10/09 and 28–29/09/2026.

## Official programme (common to all channels)

1. Review of imperative programming and of C.
2. Reading and understanding an assignment.
3. Explicit memory management: `malloc`/`free`.
4. Linear dynamic structures (linked lists, sorted ones too), with an iterative and a recursive approach.
5. Abstract data types stack and queue, with arrays and with lists.
6. Multi-file programs, headers and compilation.
7. Binary trees.
8. `union` types.
9. Formatted file I/O (`fopen`, `fscanf`, `fprintf`, `fclose`).

## Materials

- **TSI guide** (`Materie/PROG2`): the "Bibbia-PROG2" (PROG2 Bible) with 9 C exercises that came up in exams (`IntList` lists and `IntTree` trees, iterative and recursive, often "without allocating new memory"), each with automated tests and a Makefile: excellent practice for the partial exam. Plus a file of theory questions with answers written by students (not all reliable). The Notion notes and the Java exercises in the folder are about the **old** Programming II in Java: do not use them.

## Tips and pitfalls

- **The projects are the real cut-off**: submit them during the semester, before the summer exam period.
- You need **two separate registrations** (partial exam and theory): if you forget one, you cannot sit it.
- An "excellent" partial exam (3) + written exam 28 = 30 cum laude: the partial exam carries weight.
- For the theory exam, practise on types and pointers (`typedef struct`, pointers to pointers, `.` and `->`), `union` and `enum`, tracing code with out-of-bounds accesses and loops that do not terminate.
- Get to February with a solid grasp of the pointers from Programming I: they are the stated prerequisite.
- Also test your code with `-Wall -Wextra` and with tools such as valgrind or the sanitizers to find memory errors (a tip, not an official requirement).
