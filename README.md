# UniTo · Computer Science — notes and context for AIs (English)

**Notes website: https://donflammer.github.io/unito-computer-science/**

> **Italian original: [DonFlammer/unito-informatica](https://github.com/DonFlammer/unito-informatica)**, where the notes website opens in Italian. This repository is its **English mirror**, for students who don't speak Italian: a translation made from the Italian original version. New lessons appear in Italian first and are then translated here; if the two versions differ, **the Italian one prevails**.

> **⚠️ Read the [DISCLAIMER](DISCLAIMER.md).** The **research** (course sheets, exams, rules, lecturers, timetables) comes from public sources and from some Moodle pages reserved to enrolled students, accessed by the author. The **lesson notes** rework the lecturers' slides, lesson by lesson. Everything is made with care and with the sources cited, but it **may contain errors**. **The author takes no responsibility whatsoever.** Anyone may read and use this repository **at their own risk**. The author updates it **lesson by lesson, nothing more**: no support and no guarantees. For dates, rules and deadlines only the official sources (Moodle, the degree programme website, Esse3) are authoritative.

Study notes for the first year of the Bachelor's degree in Computer Science (Laurea triennale in Informatica) at the University of Turin (UniTo), A.Y. 2026/27.

**The author follows channel B** (surnames E–O): the lesson notes are based on the channel B slides, with references to the corresponding lessons of A and C. The official programme and the exam are common to the three channels, so the notes should largely hold for channel A (surnames A–D) and C (P–Z) too. Lecturers, slides, topic order, examples and the parts of the programme actually covered may differ, though (for example, in Foundations of Computer Science channel B omits some sections of the book): for your own channel, only your lecturer's slides and Moodle page are authoritative. The course and exam sheets cover **all three channels**.

The repository is public and read-only: anyone can browse it or **fork** it (*Fork* button at the top right) to get their own copy. Only the owner makes changes to this repository.

## International students

- The first-year courses are taught **in Italian**: the official 2026/27 course pages list Italian as the language of seven of the eight courses (the eighth is English I). Lectures, slides and Moodle pages are in Italian, and so are the exams unless the lecturer allows English.
- Two first-year courses are labelled **English-friendly** on their official 2026/27 pages: **Foundations of Computer Science** and **Computer Architecture**. The department defines English-friendly courses as *"courses with available material in English to prepare the exam, and teacher allowing students to give the exam in English"* ([International students page](https://laurea.informatica.unito.it/do/home.pl/View?doc=International_students.html) of the degree programme). Ask the lecturer at the start of the course.
- Official Italian names and terms are given in parentheses, so you can match them with Moodle, Esse3 and the degree programme website. Dates are written **day/month/year**, as in the Italian sources.

## First-year courses

The notes are organised **by course**: each course has its own page on the site, with the list of lessons, the exam in short and the links to the course sheet.

| Course | Italian name | Sem. | Course page (lessons) | Course sheet (lecturers per channel, timetables, exam, material) |
|---|---|---|---|---|
| Programming I (in C) | Programmazione I | 1st | [notes/PROG1](https://donflammer.github.io/unito-computer-science/notes/PROG1/) | [PROG1/course.md](ai_context/PROG1/course.md) · [exam-style exercises](ai_context/PROG1/exam_exercises.md) · [lesson index](ai_context/PROG1/lesson_index.md) |
| Foundations of Computer Science (English-friendly) | Fondamenti dell'Informatica | 1st | [notes/FDA](https://donflammer.github.io/unito-computer-science/notes/FDA/) | [FDA/course.md](ai_context/FDA/course.md) |
| Discrete Mathematics, Algebra and Geometry | Matematica Discreta, Algebra e Geometria | 1st | [notes/MDAG](https://donflammer.github.io/unito-computer-science/notes/MDAG/) | [MDAG/course.md](ai_context/MDAG/course.md) |
| Mathematical Analysis | Analisi Matematica | 2nd | [notes/ANMAT](https://donflammer.github.io/unito-computer-science/notes/ANMAT/) | [ANMAT/course.md](ai_context/ANMAT/course.md) |
| Computer Architecture (English-friendly) | Architettura degli Elaboratori | 2nd | [notes/ARCH](https://donflammer.github.io/unito-computer-science/notes/ARCH/) | [ARCH/course.md](ai_context/ARCH/course.md) |
| Programming II (in C) | Programmazione II | 2nd | [notes/PROG2](https://donflammer.github.io/unito-computer-science/notes/PROG2/) | [PROG2/course.md](ai_context/PROG2/course.md) |
| Operational Research | Ricerca Operativa | 2nd | [notes/RO](https://donflammer.github.io/unito-computer-science/notes/RO/) | [RO/course.md](ai_context/RO/course.md) |
| English I | Lingua Inglese I | 2nd | [notes/ENGLISH](https://donflammer.github.io/unito-computer-science/notes/ENGLISH/) | [ENGLISH/course.md](ai_context/ENGLISH/course.md) |

General information (channels and lab groups, lecturers per channel, timetables, 2026/27 calendar, exam dates, exam rules, Moodle, Telegram groups): [ai_context/unito_computer_science.md](ai_context/unito_computer_science.md).

## Structure

| Folder | Contents |
|---|---|
| `notes/<COURSE>/` | one folder per course. `index.html` is the course page (lessons, exam, links); the other files are the notes of each lesson as interactive HTML (simulators, exercises with hidden solutions, checklists), which open with a double click in the browser, even offline |
| `ai_context/` | the same content in Markdown, again one folder per course, plus the degree programme, the course sheets and exam-style exercises: **to attach to any AI** so that it doesn't redo the research. Instructions in [ai_context/README.md](ai_context/README.md) |
| `tools/` | `generate_courses.py` regenerates the course pages and the list on the home page; `merge_context.py` regenerates `ai_context/_ALL_IN_ONE.md` |
| `index.html` | home page of the GitHub Pages site |

The lecturers' slide PDFs and the pages saved from Moodle are not published, neither here nor in the Italian repository.

## Contact

Error reports: Telegram **[@rapsodico](https://t.me/rapsodico)** or a GitHub *issue*, with no commitment to answer or fix (see the [DISCLAIMER](DISCLAIMER.md)).

## Licence

Content released under the [Creative Commons Attribution–NonCommercial–ShareAlike 4.0 licence (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/), full text in [LICENSE](LICENSE): you can copy, modify and redistribute it **crediting the source** (DonFlammer, github.com/DonFlammer/unito-computer-science), **not for commercial purposes** and **under the same licence**. Quotes from the slides and from the lecturers' material remain the property of their respective authors and are reported for study purposes.

## Getting the student guide on another PC

The author also keeps a partial local copy of the student guide (Guida degli studenti) of the Team Studentesco Informatica (TSI, the Computer Science student team, in Italian). The full repository weighs about 3.4 GB, so only part of it is downloaded:

```bash
git clone --filter=blob:none --no-checkout --depth 1 https://github.com/tsi-unito/guida_degli_studenti_di
cd guida_degli_studenti_di
MSYS_NO_PATHCONV=1 git sparse-checkout set --no-cone '/README.md' '/esami.md' '/Guide di Sopravvivenza/' '/Guide Tecniche/' '/Materie/*/README.md' '/Materie/PROG1/' '!/Materie/PROG1/**/*.o'
git checkout master
```

To add the material of another course: `MSYS_NO_PATHCONV=1 git sparse-checkout add '/Materie/<CODE>/'` (in Git Bash `MSYS_NO_PATHCONV=1` is needed).

## Do you have the maths OFA?

If you scored less than 5/20 in Basic Mathematics on the TOLC-S, you have the **maths OFA** (additional learning requirement) to clear within the first year: until you pass it you cannot record second-year exams. There is a separate guide for it: verified rules and dates, notes for the eight modules of the official course, an entry test, timed mock tests and a study plan built around the date of your sitting.

- Website: https://donflammer.github.io/unito-ofa-maths/
- Repository, with the context for AIs: [DonFlammer/unito-ofa-maths](https://github.com/DonFlammer/unito-ofa-maths)
