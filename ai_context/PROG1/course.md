# Programming I (Programmazione I) — complete course sheet (channels A, B, C · A.Y. 2026/27)

> Italian original: <https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/corso.md>

Updated as of 28/09/2026. Primary sources: official course page (scheda insegnamento) MFN0582, the 2026/27 Moodle pages (guest access) of the three channels (canali), University Planner timetables, exam listings on Esse3 (bacheca appelli), degree programme regulations (Regolamento L-31) for the 2026 cohort. Secondary sources: material from past years — the student guide (Guida degli studenti) of the Team Studentesco Informatica (TSI, the Computer Science student team), Moodle 2025/26, students' repositories. Whenever a piece of information is not certain for 2026/27, the year/channel it applies to is given. **The programme and the exam are the same for all three channels**; lecturers, timetables, slides and the order of topics differ.

## Key facts

| Item | Value |
|---|---|
| Code | MFN0582 · 9 CFU (ECTS credits: 6 theory + 3 lab) · 1st year, 1st semester · SSD INF/01 |
| Language | C |
| Hours | 48 h theory (24 lectures of 2 h) + 30 h lab (10 exercise classes of 3 h) · total workload ≈ 225 h |
| Period | 28/09/2026 – 15/01/2027 (break 23/12/2026 – 06/01/2027) |
| Attendance | optional but recommended; Webex recordings on Moodle are "not guaranteed" and "do not replace attendance" |
| Prerequisites | none in programming; basic mathematics and good Italian |
| Prerequisite courses (propedeuticità) | none required to take this course; Prog I is expected knowledge for Programming II (Programmazione II), Computer Architecture (Architettura degli Elaboratori), ASD, PPOO, Operating Systems (recommended, not binding) |

## Lecturers, timetables and Moodle

| | Channel A (surnames A–D) | Channel B (surnames E–O) | Channel C (surnames P–Z) |
|---|---|---|---|
| **Theory** | Attilio Fiandrotti · Tue 9:00–11:00, Wed 11:00–13:00 · Room A · from 29/09 | Elvio G. Amparore · Tue 11:00–13:00, Wed 9:00–11:00 · Room B · 1st lecture Mon 28/09 11:00–13:00 | Alessandro Mazzei · Mon 14:00–16:00, Thu 14:00–16:00 · Room A · from 28/09 |
| **Lab group 1 (turno 1)** for odd student ID numbers (matricola) | Iacopo Colonnelli · Thu 14:00–17:00 · Turing · from 08/10 | Valerio Basile · Tue 14:00–17:00 · Turing · from 06/10 | Alessandro Mazzei · Wed 9:00–12:00 · Turing · from 07/10 |
| **Lab group 2 (turno 2)** for even student ID numbers | Alessia Antelmi · Wed 14:00–17:00 · Turing · from 07/10 | Elisa Marengo · Mon 14:00–17:00 · Turing · from 05/10 | Alessandro Mazzei · Tue 9:00–12:00 · Turing · from 06/10 |
| **Moodle 2026/27** (guest access) | [id=3701](https://informatica.i-learn.unito.it/course/view.php?id=3701) | [id=3773](https://informatica.i-learn.unito.it/course/view.php?id=3773) | [id=3767](https://informatica.i-learn.unito.it/course/view.php?id=3767) |
| **Archive 2025/26** (same theory lecturers) | id=3455 | id=3461 (with the exam preparation quizzes, "Preparazione Esame") | id=3507 (with the exam summary, "Riepilogo Esame") |

- To see the materials, "Accedi come ospite" (Access as a guest) is enough; to receive the announcements you have to enrol in your own channel's page.
- Last lectures: channel A until 22/12 and then 12–13/01; channel B until 13/01/2027; channel C until 21/12 and then 7, 11, 14/01/2027. Last labs in mid-January.
- Tutoring (tutorato) with graduate students: in 2025/26 it started at the end of October (in person and on Webex), announced in the forums.
- General communications to the lecturers: programmazione1-docenti@di.unito.it; office hours by appointment via email (addresses on the lecturers' pages of the degree programme website). Write only from your @edu.unito.it address, with your first name, surname, year and channel.
- In 2025/26 there were frequent reschedulings and cancellations (labs cancelled because of graduation sessions, swaps with other courses): follow the Annunci (announcements) forum and University Planner.
- Watch out for the slides: channel C (slide 4) gives the channels as "A-E / F-O" and channel A (slide 2) says "lab from 24/9". The A–D / E–O / P–Z split and the dates on Moodle and University Planner are authoritative.

## Textbook

Deitel, Deitel, Maselli — *Il linguaggio C. Fondamenti e tecniche di programmazione*, 9th ed. (Pearson 2022): reference textbook in all three channels (chapters 1–9 or 1–10, plus dynamic allocation from ch. 12); copies in the library on the 1st floor, also available as an e-book. The Prog I slide says it is the same text as in Prog II, but the 2026/27 official course page of Prog II states that the book is still to be chosen. Alternatives: Prata *C Primer Plus*; Hanly–Koffman *Problem solving e programmazione in C*. Lecturers' warning: **formal correctness** is not in the book; the slides and lectures are authoritative.

## Official programme (2026/27 course page)

Memory model · elementary types · assignment and expressions · state · pointers (increment, decrement, `malloc`, `free`) · selection and checking of properties · iterative programming (numerical problems: addition, multiplication, series; problems on arrays: filters, rearrangements, counts) · functions and the frame stack (signature, actual/formal parameters, local variables, return to the caller, operand stack) · recursion and correctness (numerical, strings, co/contravariant and dichotomic on arrays, linked structures) · advanced patterns: `struct`, alternating quantifiers on pairs of arrays and matrices.

## Expected sequence of lessons

Reconstructed from the 2025/26 Moodle pages of the same lecturers; to be confirmed lesson by lesson.

**Channel A (Fiandrotti)** — decks numbered as in B and with almost identical texts: 00 introduction → 01A first algorithm → 01B architecture → 02A from assembly to C → 02B assignment, memory model, swap → 02C referencing, `scanf`, pointers → float → booleans → if-else → while and for → arrays and strings → algorithms on arrays → matrices → functions and function calls → pass by reference → passing arrays and matrices → dynamic allocation → recursion (introduction, numerical, on arrays) → binary search and dichotomic recursion → pointer arithmetic → correctness → exam preparation exercises. Distinctive features: pointers already from the 2nd week, arrays and matrices before functions.

**Channel C (Mazzei)** — one long deck per lesson: 01 Introduction (algorithm, Von Neumann, assembly, FORTRAN) → 02 The C language (main, printf, gcc, types, variables, assignment, swap) → 03 From numbers to pointers → 04 Booleans → 05 IF → 06 While and For → 07 Functions → 08 Arrays → 09 Matrices → 10 More on arrays and matrices (heap, `malloc`) → 11 Recursion → 12 Recursion on arrays and dichotomic search → Assert and correctness → Exam summary. Distinctive features: functions before arrays and matrices; recursion concentrated in 5 lectures towards the end (lectures 17–21 of 24, from 17/11 to 01/12/2025), followed by "Assert and correctness" (04/12) and the exam summary (11–12/12).

**Channel B (Amparore)**, week by week:

| Week | Theory | Lab (from 5/10) |
|---|---|---|
| 1 | The first algorithm (01A) · computer architecture · structured programming and the C language | — |
| 2 | Memory and variables, assignment · referencing, input and pointers in C | Lab01 command line, compiler |
| 3 | Swapping variables · floating point · boolean expressions and variables · decisions | Lab02 operators and types, casts, limits |
| 4 | Loops and repetition | Lab03 boolean conditions, CodeRunner |
| 5 | Arrays and strings · functions | Lab04 iteration, accumulators, quantifiers |
| 6 | Function calls, assertions | Lab05 arrays and strings |
| 7 | Algorithms on arrays | Lab06 functions |
| 8 | Matrices | Lab07 operations on arrays, dynamic memory, half-open intervals |
| 9 | Dynamic memory · recursion | Lab08 matrices |
| 10 | Recursion on arrays | Lab09 recursion 1: base case, wrapper (involucro), co/contravariant |
| 11 | Binary search · correctness (invariants, sentinels, assertions) | Lab10 recursion 2: intervals, dichotomic, pairs of arrays, matrices |
| 12 | Last lectures (December) | — |

Note: the lab column is indicative and assumes one lab per week. In 2025/26 (Moodle id=3461) weeks 4 and 8 had no lab and the actual sequence was Lab01 week 2, Lab02 week 3, Lab03 week 5, Lab04 week 6, Lab05 week 7, Lab06 week 9, Lab07 week 10, Lab08 week 11, Lab09 week 12, Lab10 week 13. In 2026/27 (University Planner) lab group T2 has 13 dates, every Monday from 05/10 to 21/12 plus 11/01; lab group T1 has 11, every Tuesday from 06/10 to 22/12 except 27/10 and 08/12 (public holiday), plus 12/01. Which lab takes place in each week must be checked on the channel B Moodle.

**Labs:** the same Lab01–Lab10 sequence and the same CodeRunner quizzes in all channels (introduction and compiler → operators and types → boolean conditions → iteration → arrays and strings → functions → operations on arrays with the heap → matrices → recursion 1 → recursion 2).

### Where lesson 01A is in the other channels
- **Channel A**: very similar deck "01A_primo_algoritmo" (40 slides, week 28/09–02/10). Same versions of the algorithm V1–V6, including the bug in the n = 0 case; missing are the slide "In computer science everything is a number", the slide "Designing an algorithm" (input, output, steps, termination), the box on data/procedures and Wirth, V7 without line numbers and the comparison between flowchart and structured representation; and the slide on the initial case does not say "even in the exam". The same week also has "01B_architettura" (history of the computer, bits and bytes, Von Neumann).
- **Channel C**: section "The First Algorithm" (slides 20–42) of lesson 01 on 28/09. It starts from column addition ("the primary-school teacher's instructions") and uses "fingers" (dita) as the name of the counter; it does **not** show the wrong formulations or the n = 0 case, but goes straight to the correct pseudocode (lines 0–6, "If fingers == n jump to line 6") and to the flowchart. The same lesson continues with Von Neumann, machine instructions (LOAD, STORE, ADD, CMP, JMP) and the same multiplication in assembly and in FORTRAN.

## Exam

### Official 2026/27
- Official course page: *"The exam is essentially a written exam taken on a computer or on paper."* It covers the design and coding of iterative and recursive algorithms, questions on correctness and termination, and simulation of the language at runtime. *"The sum of the scores of the exercises set will make it possible to obtain grades up to 30 cum laude."* No oral exam, project or partial exams (esoneri).
- Slide "Typical Programming 1 exam" (channel B 2026/27 introduction, identical in A and C): exercises **in the lab, on Moodle, on a PC**; **iterative and recursive** programming; **theory** (correctness, types); **memory state** (simulated execution). Details and exam-like exercises at the end of the course.
- **A single exam session (appello), common to channels A, B, C**; examining board: Mazzei (chair), Amparore, Antelmi, Basile, Fiandrotti, Marengo.
- 2026/27 exam sessions already published: **Mon 25/01/2027 at 9:00** (registration 05/01–18/01) and **Thu 11/02/2027 at 9:00** (registration 22/01–04/02), Turing + Dijkstra + Von Neumann labs. For reference, 2025/26: 5 exam sessions (22/01, 09/02, 11/06, 09/07, 15/09) with 399, 319, 174, 158, 107 registered students. The degree programme's 2026/27 calendar also includes, on an experimental basis, a 3rd exam session for 1st-semester courses on 31/03 and 1–2/04/2027 (details not yet published).
- Channel B timing: last theory lecture Wed 13/01/2027, last labs 11/01 (T2) and 12/01 (T1). Registration for the 1st exam session (05/01–18/01/2027) opens in the last two days of the Christmas break (which ends on 06/01) and stays open during the last lectures: **by 18/01 you need an APPROVED study plan (piano carriera) and the Prog I Edumeter questionnaire filled in**. Registration for the 2nd exam session opens on 22/01, before the 1st one takes place.

### Logistics and tools at the exam (confirmed facts + deductions from past years)
- **Shifts**: the three labs have 118 workstations (Turing 52, Dijkstra 36, Von Neumann 30) versus about 400 students registered for the 1st exam session → the session is split into shifts over several days (5 shifts in 3 days in 2023/24, 4 shifts in 2 days in 2024/25, "several sessions" in 2025/26). The call to attend arrives by email at your @edu.unito.it address: show up only if you have been called; serious impediments for a shift must be reported to programmazione1-docenti@di.unito.it by the stated deadline.
- **Credentials**: in the Turing Lab you log in with your SCU/MyUniTo credentials (know them well; in 2023/24 students were advised to change the password at least once before the exam). For Dijkstra and Von Neumann, the degree programme's page (updated as of 2023) requires an @educ.di.unito.it account, to be requested from aperturalogin@educ.di.unito.it (Monday and Friday, reply within 2 working days): ask the lecturers whether it is also needed at the exam.
- **Tools**: at the exam you use "a web platform that provides you with a simple text editor", so **no IDE and no autocompletion** (Amparore's Lab01 2025/26). Practise with a simple editor and `gcc -Wall -Werror`, without Copilot.
- **Platform**: it is not documented whether the degree programme's Moodle or the University-wide Moodle "Esami" is used. The paper exam remains formally possible (from 2023/24 to 2025/26 it always took place on the PC).
- **Attempts**: at most 3 per academic year; it is not clear whether a withdrawal counts, and your attendance is recorded anyway → do not register "just to try"; if you are not going to show up, cancel your registration on the Bacheca prenotazioni (bookings board) before registration closes.

### Probable structure (past years, to be confirmed at the end of the course)
- Channel C 2025/26: **5 CodeRunner exercises on Moodle**: 2 theory (correctness of a sequence of assignments; state of the stack memory) + 3 programming (iterative, recursive, with heap/`malloc`). 31–32 points = 30 cum laude. *"Passing all the tests is a necessary but not sufficient condition"*: the code is also read.
- Channel C 2023/24: 4 exercises of 8 points each (2 theory + iterative and recursive; no heap exercise); 31–32 = 30 cum laude.
- Java era 2016–2019: 4 exercises (iterative 7, recursive 7, induction/invariant 10, memory 8).
- In 2025/26 channels A and B shared the Moodle "Preparazione Esame" (exam preparation) quizzes: Iterative, Recursive, Heap and Memory Model exercises.

### Rules for the programming exercises (one exam for all channels)

Sources: the rules on iterative functions and those on recursive functions (no loops, multiple `return`s allowed) come from channel C's 2025/26 exam summary (slides 4–5); `-Wall -Werror` comes from channel B's 2025/26 Lab01 ("at the exam we will use -Wall -Werror"); the required type of recursion, the `printf` format, arrays passed as a pair, prototypes and edge cases are practical advice and course conventions, not written exam rules.

- **Iterative** functions: a single entry point and a single exit point → **only one `return`**; use **sentinel variables** and buffers; `case`, `switch`, `break`, `static` and constructs not seen in class are **forbidden**. (In 2023/24 the rules were the same except for the ban on `static` and on constructs not seen in class.)
- **Recursive** functions: `for` and `while` are **forbidden**; multiple `return`s allowed; respect the required **type of recursion** (covariant, contravariant, dichotomic; Italian: co-variante, contro-variante, dicotomica).
- Compilation with **`-Wall -Werror`** (a warning = an error). CodeRunner compares the output with the expected one: follow the `printf` format exactly.
- Arrays always passed as a pair (length, pointer); declare the prototypes.
- Edge cases carry a lot of weight: rows = 0 (vacuously true), empty arrays, `NULL`.

### To ask / check at the end of the course
Duration of the exam; number of exercises and points for 2026/27; materials allowed; whether the auxiliary functions of recursive functions may be iterative.

## Exam exercise types and pitfalls

| Type | Typical form | Pitfalls |
|---|---|---|
| Iterative (`e1`) | function with a given signature on arrays/matrices (including ragged ones, `rows, cols, mat[rows][cols], rags[rows]`), for-all/exists quantifiers, extra result via a pointer | wrong initial sentinel (`true` for "for all", `false` for "exists"), empty cases, `break`, scanning up to `cols` instead of `rags[i]` |
| Recursive (`e2` wrapper + `e2R`) | imposed type; covariant (base case `n == 0`, works on `a[n-1]`), contravariant (`i == aLen`), dichotomic on `[l, r)` (`l == r` empty, `r - l == 1` single element, `m = (l + r) / 2`) | loops in the recursive function, wrong type, reading `a[l]` on an empty interval, reversed order when writing after the call |
| Heap | function that returns an array allocated with `malloc` and its length in an output parameter | allocated size, `NULL`, length not updated |
| Memory model | quiz: values in the frames, number of calls, maximum stack height (main included), return point (A)/(B) | array aliasing (all frames see main's array), the base case creates a frame, instructions after the call executed on the way back up, uninitialised cells |
| Correctness | backward reasoning: choose the `assert`s and the precondition (weakest precondition, `Q[E/x]`) | substitution in the wrong direction, integer arithmetic (33 ≤ 3r ⇔ 11 ≤ r), `<` vs `<=` |

Worked examples: `exam_exercises.md`.

## Notation conventions of the course

- Pseudocode of the first lessons: `←` assignment, `=` comparison, `▷` comment, Begin/End blocks (on the slides: *Inizio/Fine*; lesson 01A).
- In C: `=` assigns, `==` compares; `bool` from `<stdbool.h>`; `assert()` from `<assert.h>` for pre/postconditions; program points numbered in comments `//(1) //(2)`, `//PRE`, `//POST`, `//(WP)`.
- Names: `aLen`/`lenA` for lengths, `size_t` for indices and lengths, `rags[]` for row lengths, `pA`, `pStr`, `pSrc`/`pDst` for pointers, suffix `R` for recursive functions and "wrapper" for the function that starts them.
- Half-open intervals `[left, right)`: empty if `left == right`, invariant `assert(right >= left)`.
- Stack drawn in rows with frames: parameters, local variables, `retl` (return line), `retv` (returned value).

## Environment and tools

- Compile as at the exam: `gcc -Wall -Werror file.c -o file.exe` (Windows) or `-o file` (Linux/macOS).
- On the student's PC: gcc 16.1 (MinGW-w64) available in Git Bash.
- Turing Lab (Laboratorio Turing): Windows (TDM-GCC) or Linux; files are lost at logout.
- Channel B 2026/27: in the lab you can use your own laptop (the lecturer's indication, reported by a student on 28/09/2026). It is still worth practising with a simple editor and `gcc` from the terminal as well, because at the exam you use the lab PCs without an IDE.
- Editor: VS Code or Notepad++; documentation: cppreference.com.

## Lecturers' advice (2026/27 introductions)

- **Use of LLMs** (channels B and C, with the same slide "Programming and generative AI": no. 11 in B, no. 15 in C): they are for reviewing exercises you have already done or understanding why a program does not compile, **not for delegating the solution**. Channel A ends its introduction with a slide on "Programming and generative AI".
- Method: attend and take notes; review the previous lecture; go deeper with the book; study every day; attend the labs and use the tutors; the "marathon" of recordings before the exam does not work; prepare for the exam situation.

## Material from past years (reliability)

- In 2023/24 and 2024/25 channel B theory was taught by **Luca Roversi**: the "channel B" materials of those years (including those in students' repositories) do not reflect Amparore's style. The closest reference is the **channel B 2025/26 Moodle** (course/view.php?id=3461: slides, labs and recordings visible to guests too).
- Known inconsistencies in the 2026/27 slides, not to be taken at face value: channel C slide 4 ("A-E / F-O", "Amparone": the A–D / E–O split is authoritative); channel A slide 2 (lab "from 24/9": Moodle says 7/10); channel B slide 4 (the link leads to course id=2970, channel A 2024/25).

- TSI student guide (Guida degli studenti), `Materie/PROG1`: 2023/24 labs in C (Amparore's slides), channel C 2023/24 Moodle exercises (memory/correctness quizzes), Java mock exams (fac-simili) 2016–2019 (for the logic only). Students' .c solutions with verified errors (`media_seq.c`, `scambio4.c`, `aritmeticaR.c`).
- https://github.com/MrDionesalvi/PROG1 — 2023/24 practice exam (pre-esame) texts `e1`/`e2`; solutions with bugs (redo them from scratch).
- https://github.com/l0gic5/unito-prog1 — channel B labs 2024.
- Channel A 2025/26 official solutions (7/1/2026) with known errors: in `e2_soluzione.c` the accumulator `s` of `e2R` is not initialised in the recursive branch and the test `a[n]%2==1` does not count negative odd numbers in odd positions (with {0, -3} it returns 1 instead of 2 even after initialising `s`); `e3_4_soluzione.c` does not multiply by 2, also uses `a[i] % 2 == 1`, which excludes negative odd numbers, and does not reset `*bLen` to zero at the start (it works only if the caller initialises it to 0). Always check with tests and `-Wall -Werror`.
