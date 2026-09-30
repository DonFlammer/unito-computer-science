# Computer Science at UniTo — how it works (A.Y. 2026/27)

> Italian original: <https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/unito_informatica.md>

Updated as of 28/09/2026. Primary sources: the degree programme website (laurea.informatica.unito.it: Guide and Manifesto of Studies 2026/27, degree programme regulations (Regolamento L-31) for the 2026 cohort, academic calendar, exam sessions), exam listings on Esse3 (bacheca appelli), University pages on grade recording (verbalizzazione). Secondary sources: the student guide (Guida degli studenti, github.com/tsi-unito/guida_degli_studenti_di) of the Team Studentesco Informatica (TSI, the Computer Science student team), written by students.

## The degree programme

- **Bachelor's degree in Computer Science (Laurea triennale in Informatica)**, degree class **L-31**, degree programme code (codice CdS) 0801L31. Department of Computer Science, via Pessinetto 12 / corso Svizzera 185, Turin.
- 3 years, **180 CFU (ECTS credits)**: 156 from courses, 9 from the internship (stage), 3 from the final examination (prova finale), 12 free-choice. 1 CFU = 25 hours of work (normally 8 h of lectures + 17 of study, or 10 h of lab + 15 of study).
- Open admission with the **TOLC-S** test (CISIA): passed with at least 5/20 in Basic Mathematics; below the threshold you get an **OFA in mathematics** (an additional learning requirement), to be cleared within the 1st year (course on www.ofa.unito.it + in-person exam). Dedicated guide, with rules, dates, module notes and mock tests: https://donflammer.github.io/unito-ofa-maths/ (repository DonFlammer/unito-ofa-maths, context for AIs in the `ai/` folder).
- In-person teaching; attendance **not compulsory** but strongly recommended.
- Full-time students can record at most 80 CFU per year (part-time: 36).

## Channels and lab groups (1st year)

- Lectures are split by the initial of the surname into channels (canali): **Channel A = A–D, Channel B = E–O, Channel C = P–Z**.
- Labs are held in groups (turni): **group 1 = odd student ID number (matricola), group 2 = even student ID number** (A1/A2, B1/B2, C1/C2). Assignment is automatic. The groups apply only to the courses with a lab: Programming I and II (Programmazione I e II) and Computer Architecture (Architettura degli Elaboratori).
- There is no procedure for changing channel. The degree programme's FAQ says that, as long as there are seats in the room, you can attend the lectures of another channel; for exams, the rules of your own channel apply (and almost all 1st-year courses have a single common exam).
- From the 2nd year there are two channels: A (A–K) and B (L–Z).
- **Timetables** (University Planner, one calendar per channel with all the courses): [Channel A](https://unito.prod.up.cineca.it/calendarioPubblico/linkCalendarioId=613b9237d969e100173d4110) · [Channel B](https://unito.prod.up.cineca.it/calendarioPubblico/linkCalendarioId=613b92a1d969e100173d4111) · [Channel C](https://unito.prod.up.cineca.it/calendarioPubblico/linkCalendarioId=613b9315da7aec0018faeed7). Also in the MyUniTO+ app, but only for the courses already in your study plan (piano carriera). The 2nd semester has not been published yet.

## First year 2026/27 (60 CFU)

Full course sheets for each course (lecturers, timetables, exam, programme, materials, tips): folders `PROG1/`, `FDA/`, `MDAG/`, `ANMAT/`, `ARCH/`, `PROG2/`, `RO/`, `ENGLISH/`.

| Course | CFU | Sem. | Exam (the same for the three channels) |
|---|---|---|---|
| **Programming I** (Programmazione I; MFN0582, in C) | 9 | 1st | computer-based written exam on Moodle (programming, correctness, memory) |
| **Foundations of Computer Science** (Fondamenti dell'Informatica; INF0348) | 9 | 1st | written exam on Moodle: 9 quiz questions + optional open question |
| **Discrete Mathematics, Algebra and Geometry** (Matematica Discreta, Algebra e Geometria, MDAG; INF0328) | 12 | 1st | two separate written exams (MD and AG), grade = average |
| Mathematical Analysis (Analisi Matematica; MFN0570) | 9 | 2nd | three computer-based tests (quiz, theory, exercises) |
| Computer Architecture (Architettura degli Elaboratori; INF0326) | 6 | 2nd | computer-based written exam (admission test + RISC-V lab) + compulsory oral exam; on Esse3 one exam session (appello) per channel ("ARCHIT. ELAB. CORSO A/B/C", same date and same labs): register for your own channel's session |
| Programming II (Programmazione II; INF0330, in C) | 6 | 2nd | compulsory lab projects + partial exam (esonero) + written exam |
| Operational Research (Ricerca Operativa; INF0327) | 6 | 2nd | computer-based written exam + optional oral exam (from −16 to +6) |
| English I (Lingua Inglese I; MFN0590) | 3 | 2nd | computer-based SET test, no grade; can be recognised with a certificate |

### Lecturers by channel

| Course | Channel A (A–D) | Channel B (E–O) | Channel C (P–Z) |
|---|---|---|---|
| Programming I | Fiandrotti · lab A1 Colonnelli, A2 Antelmi | Amparore · lab B1 Basile, B2 Marengo | Mazzei (theory and lab C1, C2) |
| Foundations of Computer Science | Cardone | Berardi | Paolini |
| MDAG – Discrete Mathematics | Longhi and Terracini | Mori | Longhi and Terracini |
| MDAG – Linear Algebra and Geometry | Buzano | Buzano and Radeschi | Radeschi |
| Mathematical Analysis | Soave and Colasuonno | Boscaggin and Tione | Seiler and Tione |
| Computer Architecture | Gaeta (theory and lab A1, A2) | Drago (theory and lab B1) · lab B2 Lucenteforte | Schifanella (theory and lab C1) · lab C2 Torta |
| Programming II | Damiani (theory and lab A1, A2) | Birke · lab B1 and B2 Torta | Garetto (theory and lab C1) · lab C2 Audrito |
| Operational Research | Grosso | Aringhieri | Hosteins |
| English I | the same for everyone: English Language Committee (Commissione Lingua Inglese), exercise-class instructor Ieluzzi | | |

### 1st-semester timetable 2026/27

| Channel | Programming I | Foundations | MDAG – MD | MDAG – AG |
|---|---|---|---|---|
| **A** · Room A | Tue 9:00–11:00, Wed 11:00–13:00 · lab A1 Thu 14:00–17:00, A2 Wed 14:00–17:00 | Mon 11:00–13:00, Thu 9:00–11:00, Fri 9:00–11:00 | Tue 11:00–13:00, Thu 11:00–13:00, some Wed 9:00–11:00 | Mon 9:00–11:00, Fri 11:00–13:00, some Wed 9:00–11:00 |
| **B** · Room B | Tue 11:00–13:00, Wed 9:00–11:00 · lab B1 Tue 14:00–17:00, B2 Mon 14:00–17:00 | Mon 9:00–11:00, Thu 9:00–11:00, Fri 11:00–13:00 | Mon 11:00–13:00, Fri 9:00–11:00, some Wed 11:00–13:00 | Tue 9:00–11:00, Thu 11:00–13:00, some Wed 11:00–13:00 |
| **C** · Room A (afternoon) | Mon 14:00–16:00, Thu 14:00–16:00 · lab C1 Wed 9:00–12:00, C2 Tue 9:00–12:00 | Tue 14:00–16:00, Wed 16:00–18:00, Fri 13:00–15:00 | Tue 16:00–18:00, Fri 15:00–17:00, some Wed 14:00–16:00 | Mon 16:00–18:00, Thu 16:00–18:00, some Wed 14:00–16:00 |

The Programming I labs are in the Turing Lab (Laboratorio Turing) and start in the 2nd week (5–8 October).

### Exam sessions already published for 1st-semester courses

| Date | Exam | Registration |
|---|---|---|
| Tue 19/01/2027 14:00 | MDAG – Discrete Mathematics | 30/12 – 12/01 |
| Fri 22/01/2027 14:00 | MDAG – Geometry | 02/01 – 15/01 |
| Mon 25/01/2027 9:00 | Programming I | 05/01 – 18/01 |
| Fri 29/01/2027 9:00 | Foundations of Computer Science | 09/01 – 22/01 |
| Wed 03/02/2027 14:00 | MDAG – Discrete Mathematics | 14/01 – 27/01 |
| Fri 05/02/2027 14:00 | MDAG – Geometry | 16/01 – 29/01 |
| Thu 11/02/2027 9:00 | Programming I | 22/01 – 04/02 |
| Thu 18/02/2027 9:00 | Foundations of Computer Science | 29/01 – 11/02 |

The exam sessions already listed for 2nd-semester courses (Analysis 18/01, Architecture 01/02, English 02/02, Programming II 08–09/02, Operational Research 19/02) are sessions meant for students who attended those courses in previous years (the L-31 regulations, art. 6 para. 4, make exam sessions start at the end of the teaching period; for English it is not clear whether first-year students can already use the 02/02/2027 session: see ENGLISH/course.md).

### Moodle pages 2026/27

| Course | Moodle (informatica.i-learn.unito.it/course/view.php?id=…) |
|---|---|
| Programming I | A 3701 · B 3773 · C 3767 (guest access) |
| Foundations of Computer Science | A 3851 (guest) · B 3747 (login, self-enrolment) · C 3635 (guest) · exam page on Moodle Esami: esami.i-learn.unito.it id=2673 (login; exercises from the lectures and past exams) |
| MDAG | Part 1 (MD) 3829 · Part 2 (AG) 3831 (login, common to the channels) |
| Mathematical Analysis | 3703 (login, common) |
| Computer Architecture | 3833 (login, common) |
| Programming II | A theory 3651, lab A1 3653, lab A2 3655; lab C2 3757 (login); the others not yet created |
| Operational Research | 3719 "Ricerca Operativa (A,B,C)" (login, common to the three channels; 2025/26: 3555) |
| English I | 3805 (login, common) |

All the pages are in the category "Anno Accademico 26/27 > Primo anno Laurea" (Academic Year 26/27 > First year, Bachelor's). Enrol right away on the pages of the 1st-semester courses.

Second year: ASD, Databases, Probability and Statistics, PPOO, Operating Systems (9 CFU each) + one of Economics/Law and one of Physics/Logic (6). Third year: Software Application Development, Networks and Security + elective courses, internship, final examination.

## Calendar 2026/27

| Period | Dates |
|---|---|
| 1st semester (lectures) | 28/09/2026 – 15/01/2027 · Christmas break 23/12/2026 – 06/01/2027 |
| Winter exam period (+ extraordinary period) | 18/01/2027 – 19/02/2027 |
| 2nd semester (lectures) | 22/02/2027 – 04/06/2027 · Easter break 25–30/03/2027 |
| Experimental 3rd exam session for 1st-semester courses | 31/03 and 1–2/04/2027 (details not yet published) |
| Summer exam period | 07/06/2027 – 30/07/2027 |
| Autumn exam period | from 01/09/2027 to the start of the 2027/28 lectures |

Other dates:
- **"1st year survival kit"** (meeting for first-year students, common to the three channels): 13 and 14/10/2026, 13:00–14:00, Room A.
- **Study plan 2026/27**: dates not yet published (in 2025/26 it could be filled in from 10/10). It is essential for registering for exams, 1st-year ones included: fill it in as soon as the window opens.
- **Edumeter**: the course evaluation must be filled in before registering for the exam session; from 2026/27 a negative rating requires a comment. If you do not want to rate an aspect, you must choose "non applicabile" (not applicable).

## Exam rules (2026 cohort and University rules)

- **Exam sessions**: at least 5 per year per course; 2 in the break weeks after the semester in which you attended the course; at least 10 days between two sessions of the same exam.
- **Attempts**: you can sit the same exam **at most 3 times per academic year** (L-31 regulations, art. 6 para. 13) → it is not worth "having a go" at every session. Sessions you withdraw from do not count towards the 3 attempts (University teaching regulations, Regolamento didattico di Ateneo, art. 24 para. 7), provided you withdraw before the grade is communicated: after that you can only reject it, and that attempt counts (Foundations exam page 2026/27). Your attendance at the session is recorded anyway (Esse3 also tracks failed tests and absences). If you are not going to show up, cancel your registration on the Bacheca prenotazioni (bookings board) before registration closes.
- **Registration** via MyUniTo (Esami → Appelli disponibili, i.e. Exams → Available exam sessions), by 23:59 on the closing day. You need: **fees paid up**, **study plan filled in and approved** (compulsory for the 1st year too), **Edumeter evaluation** of the course (without it, Esse3 blocks the registration). If you stay registered and do not show up, you are recorded as absent.
- **Grade** out of 30, pass mark 18; cum laude only by unanimous decision and only with 30. You can withdraw until the result is announced (your attendance is recorded anyway).
- **Rejecting the grade** (written exams with online grade recording): the result arrives in the "Bacheca esiti" (results board) and by email; you have **at least 5 days** to reject it, otherwise silent acceptance applies (the grade is accepted if not rejected within the deadline). Fail results do not go on your transcript (libretto). In oral exams you accept or reject on the spot.
- **Exam format**: set by the lecturer before the academic year in the official course page (scheda insegnamento), the same for all exam sessions of the year.
- **Progression requirement (sbarramento)**: to take 2nd/3rd-year exams you need at least **21 CFU from the 1st year** and, for the 2026 cohort, the OFA cleared (or the TOLC-S threshold). The OFA does **not** block 1st-year exams. No other compulsory prerequisites (only recommended ones).
- You can take the exam on your own cohort's programme for another 3 years, letting the lecturer know.
- Specific learning disorders (DSA) and disabilities: request support in good time from the University offices (degree programme contacts: Prof. Damiano for DSA, Prof. Baroglio for disabilities).

## Platforms and contacts

- **Moodle I-Learn**: https://informatica.i-learn.unito.it — enrol on the page of each course: one per channel for Programming I (labs included) and Foundations; for Programming II one theory page per channel plus one for each lab group; one page common to the three channels for MDAG (part 1 and part 2), Analysis, Architecture, Operational Research and English. As of 28/09/2026 guest access works only on Programming I A/B/C and Foundations A and C.
- **MyUniTo / Esse3**: registration for exam sessions, results, study plan. Public exam listings: https://esse3.unito.it/ListaAppelliOfferta.do
- **Timetables**: University Planner or the MyUniTO+ app.
- **Edumeter**: https://www.edumeter.unito.it (course evaluations).
- Institutional email **nome.cognome@edu.unito.it** (firstname.surname): always use it to write to lecturers; exam notices also arrive there.
- **Lab PCs**: in the Turing Lab you log in with your SCU/MyUniTo credentials; for the Dijkstra and Von Neumann labs you may need an @educ.di.unito.it account (request it from aperturalogin@educ.di.unito.it). The Prog I computer-based exams take place in these three labs.
- **Tutoring (tutorato) for first-year students**: help desk in the study room of the Pier della Francesca complex (from late September, Mon–Fri) and online by appointment, tutorato.informatica@unito.it. Individual tutoring: a Moodle page on which first-year students are enrolled automatically (commtutor@educ.di.unito.it). University services: SUPERA (study method), SAMBA (well-being).
- **Rooms and labs**: via Pessinetto 12, raised ground floor; rooms A and B with 218 seats each; Turing and Von Neumann labs (Windows), Dijkstra and Babbage labs (Unix). When needed, the room at the Hotel Royal, corso Regina Margherita 249, is also used.

## Telegram groups

- **Official 1st-year group** (from the degree programme's Tutoring page): https://t.me/+0sR7CugDQlllNzU0 — as of 28/09/2026 the link does not open any group (invitation expired or revoked): ask tutorato.informatica@unito.it for the updated one. The active 1st-year group is the student-run "Informatica anno 1 @ Unito" (General 1st year, below).
- **Student-run groups** (Team Studentesco Informatica, index at https://tsi-unito.eu/links.html; the 1st-year channels A, B, C are merged):

| Group | Link |
|---|---|
| General 1st year | https://t.me/+Ox2fUmU2Un4xYTM0 |
| Programming I | https://t.me/+pgWXz9_rIdU2ZGU0 |
| Foundations of Computer Science | https://t.me/+i98q9jlppjZhYzI0 |
| MDAG | https://t.me/+doM_i3uFgYg1MjVk |
| Analysis | https://t.me/+bIy-EgjtRrhhNmE8 |
| Architecture | https://t.me/+REfz_GZ2fytlOWE0 |
| Programming II | https://t.me/+xJOmjJInA4VjMDBk |
| Operational Research | https://t.me/+lRZmXg1uiA4yOTQ0 |
| Off Topic | https://t.me/+Ye04aIAdXfI4Yzlk |

There is no dedicated group for English: use the general one. Invitation links may change: if you have problems, start from the TSI page.

## Practical life (from the TSI guide)

- **Fees**: calculated on the university ISEE (the Italian indicator of a family's income and assets), 4 instalments; first instalment €156, the same for everyone; without an ISEE you pay the maximum.
- **EDISU**: scholarships (what counts is CFU, not grades), subsidised canteen, study rooms (corso Svizzera 185). Department library at via Pessinetto 12 (seats can be booked with Affluences).
- **Transport**: free Piemove pass for under-26s with an ISEE up to €85,000 (since 2025/26).
- Part-time student jobs (collaborazioni part-time): not available in the 1st year.

## Recommended study method

- From the TSI guide: **active recall** (flashcards, summaries from memory, explaining out loud) + **spaced repetition** (review after 1 day, 1 week, 1 month); Pomodoro technique; study a little every day; do exercises.
- From the Prog I lecturers (2026/27 introduction): attend and take notes, review the previous lecture, go deeper with the textbook, attend the labs and the tutors' sessions; the "marathon" of recordings before the exam does not work.
