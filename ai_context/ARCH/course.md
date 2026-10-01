# Computer Architecture (Architettura degli Elaboratori) — course sheet (channels A, B, C · A.Y. 2026/27)

> Italian original: <https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/ARCH/corso.md>

Updated as of 28/09/2026. Sources: official course page (scheda insegnamento) INF0326 (https://laurea.informatica.unito.it/do/corsi.pl/Show?_id=7x2d, updated 21/08/2026) and past course pages, exam listings on Esse3 (bacheca appelli), University Planner calendars 2025/26, the student guide (Guida degli studenti) of the Team Studentesco Informatica (TSI, the Computer Science student team). 2nd-semester course: the 2026/27 timetables and Moodle page cannot be consulted yet (the Moodle page requires a login).

## Key facts

| Item | Value |
|---|---|
| Code | INF0326 · 6 CFU (ECTS credits; 4 theory + 2 lab) · core activity (caratterizzante), INF/01 · 1st year, **2nd semester** |
| Hours | 32 h of theory + 20 h of **RISC-V assembly** programming lab; lab in groups (turni): 1 = odd student ID number (matricola), 2 = even |
| Period | 22/02/2027 – 04/06/2027 |
| Exam | **computer-based written exam + compulsory oral exam**, the same for the three channels (canali) |
| Language | Italian; the course is labelled "English-friendly" (according to the degree programme: material in English to prepare the exam, and the exam can be taken in English; https://laurea.informatica.unito.it/do/home.pl/View?doc=International_students.html) |
| Expected skills | Programming I (Programmazione I) and Foundations of Computer Science (Fondamenti dell'Informatica), from the 1st semester |
| Textbook | D. A. Patterson, J. L. Hennessy, *Struttura e progetto dei calcolatori – Progettare con RISC-V*, 2nd ed., Zanichelli 2023, ISBN 978-88-08-19966-9 (the Italian edition of *Computer Organization and Design RISC-V Edition*). Six chapters (1 computer abstractions and technology; 2 instructions, the language of the computer; 3 arithmetic for computers; 4 the processor; 5 large and fast: exploiting the memory hierarchy; 6 parallel processors) plus the RISC-V reference card. Four appendices are online, on the publisher's website: A "The Basics of Logic Design", B "Mapping Control to Hardware" and D "Survey of Instruction Set Architectures" in English, C "La grafica e il calcolo con la GPU" (graphics and computing GPUs) in Italian |
| Simulator | **ARES** (https://ares-sim.github.io), in the browser, 32-bit RISC-V, since 2025/26; up to 2024/25 RARS (64-bit) was used |

## Lecturers and Moodle

| Channel | Theory | Lab group 1 (odd) | Lab group 2 (even) |
|---|---|---|---|
| **A** (surnames A–D) | Rossano Gaeta | Rossano Gaeta | Rossano Gaeta |
| **B** (surnames E–O) | Idilio Drago | Idilio Drago | Maurizio Lucenteforte |
| **C** (surnames P–Z) | Claudio Schifanella | Claudio Schifanella | Gianluca Torta |

- **Single Moodle page** "Architettura degli Elaboratori (A, B, C)": [id=3833](https://informatica.i-learn.unito.it/course/view.php?id=3833), UniTo login required. Exam rules, thresholds and materials are there.
- **2026/27 timetables not yet published.** For reference, 2025/26: 2 theory blocks of 2 h a week per channel and 1 lab block of 2 h per group in the Turing Lab (Laboratorio Turing); labs from the 3rd week (first labs between 02/03 and 05/03/2026, with the semester having started on 16/02/2026).

## Exam (the same for A, B, C)

**Official course page 2026/27:** written exams and an oral exam, grade out of 30 with cum laude. **All parts must be passed.**

| Part | Content | Points |
|---|---|---|
| Admission | basic skills, automatically marked questions | 10 |
| Theory | stating and describing properties and techniques, applying them to examples (written and/or oral) | 14 |
| Lab | RISC-V assembly program, correct in both syntax and algorithm, checked with the simulators | 8 |

- Total 32. The thresholds for each part are not on the official course page: they are published on Moodle.
- In 2023/24 (scores 8/10/14) the flow was: Moodle quiz (threshold 4/8) and lab on Moodle (threshold 5/10, at least 1 point per exercise) on the same day, then an **oral exam on the whole programme**; passed with a total ≥ 18. It is likely to be similar today with the new scores: check on Moodle.
- At the exam session (appello) each channel has its **own Esse3 slot** ("ARCHIT. ELAB. CORSO A/B/C"), with the same date, time and labs (session of 01/10/2026: all three at 9:00 in the Turing, Dijkstra and Von Neumann labs, checked on Esse3 on 28/09/2026): register for the one of your channel. Registration opens about 20 days before and closes 7 days before.

**Exam sessions:** for 2026/27 first-year students the first ones will be in the 2027 summer exam period (not yet published). For reference, 2025/26: 08/06, 03/07, 14/09, 01/10/2026 (about 250–290 registered for the first two).

## Official programme (common to all channels)

**Theory:** computers, abstractions and technology · RISC-V ISA (bits, bytes, words, operands, addresses, instruction representation, assembler, linker, loader, floating point) · RISC-V processor (ALU, registers, timing, datapath, simple implementation) · buses and I/O (arbitration, polling, interrupts, DMA, RISC-V exceptions) · memory hierarchy (locality, technologies, caches).

**Lab:** RISC-V assembly language; memory operands, addresses, registers; logical operations; if-then-else and loops; procedures (registers, stack, heap); compilation and translation; simulation of an ALU.

## Materials

- **TSI guide** (`Materie/ARCH`, 2023/24): typed notes by Davide Trapani from Schifanella's lectures (84 pages, the whole programme: the most useful file); worked cheat sheets for the admission test (performance, CPI, direct-mapped cache, ALU) and for the lab (instruction formats); solutions to labs L01–L09 in assembly. **Warning:** that material uses 64-bit RARS (`ld`/`sd`, 8-byte offsets); with 32-bit ARES you use `lw`/`sw` and 4-byte offsets.
- Student Telegram group for the course: see `../unito_computer_science.md`.

## Tips and pitfalls

- Enrol on the common Moodle page as soon as the semester starts: rules and thresholds are only there.
- All parts must be passed: a failed lab part makes you fail the exam even with good theory.
- Use ARES right from the start, including the calling-convention check: typical mistakes are not saving `ra` and the `s*` registers on the stack, misaligning `sp`, confusing caller-saved and callee-saved registers.
- Admission test: practise on performance (CPI, frequency, time), instruction encoding, step-by-step execution, caches, ALU outputs.
- For the oral exam, prepare precise definitions of all the topics (synchronous/asynchronous bus, arbitration, locality, cache types, interrupts and DMA, exceptions, two-pass assembler, linker and loader).
- Consolidate loops, arrays and recursion in C (Programming I) and binary, hexadecimal and two's complement (Foundations) right now.
