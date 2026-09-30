# Programming I (Programmazione I), channel (canale) B, 2026/27 — lessons studied

> Italian original: <https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/indice_lezioni.md>

Full course sheet: `course.md`. Exam-style exercises: `exam_exercises.md`. Expected sequence of the next lessons: `course.md` → "Expected sequence of lessons".

| # | Date | Title | File | Key concepts |
|---|---|---|---|---|
| 01A | 28/09/2026 | A first algorithm | `lessons/01A_first_algorithm.md` · HTML: `notes/PROG1/01A_first_algorithm.html` | computer science = the study of algorithms (Dijkstra); definition of algorithm (ordered, unambiguous, effectively computable, produces a result, terminates); everything is a number; imperative programming; m × n by repeated addition from 0; accumulator `s` and counter `i`; Wirth "Program = Algorithms + Data Structures"; 7 versions of the algorithm; bug in the n = 0 case → **check first, then execute**; `←` vs `=`; conditional/unconditional jumps; Begin/End blocks and indentation; flowchart; low/high level; implementing vs translating; next: Von Neumann |
| 01B | 29/09/2026 | Computer architecture | `lessons/01B_computer_architecture.md` · HTML: `notes/PROG1/01B_computer_architecture.html` | abacus and Pascaline (mechanical carry); hardwired vs **programmable** computers (elementary operations + a sequence encoded with numbers); Babbage (Analytical Engine, punched cards, conditional jumps), Turing 1936 (universal machine); ENIAC (decimal, cables) → **EDVAC** (stored program, unified memory, binary); bits, bytes, $2^N$; **Von Neumann architecture** (CPU = control unit + ALU + registers, RAM, secondary memory, bus); memory as a row of bytes with **addresses** from 0, 32-bit **words**; fetch–decode–execute cycle, **PC** and **IR**; determinism |
| 02A | 30/09/2026 | From machine language to C | `lessons/02A_from_assembly_to_c.md` · HTML: `notes/PROG1/02A_from_assembly_to_c.html` | machine language vs **assembly** (mnemonics, assembler, not portable); addition in assembly (`LOAD`, `ADD`, `STORE`, `@A` = content at address A, PC 0-4-8-12); multiplication in assembly (`CMP`, `JMPEQ`, `INC`, `JMP`) = version V6 of 01A; FORTRAN and high-level languages (compiler, recompiling = portability); history of C (Thompson, Ritchie, Unix, K&R 1972, C89…C23); C compiled, imperative, structured, typed; X-ray of `Buongiorno dal C.`: comments, `#include <stdio.h>`, `main`, blocks, `;`, strings, **escape sequences**; identifiers and keywords; stages of gcc (preprocessor, compiler, assembler, linker); `gcc -Wall -Werror`; compile-time, runtime and logic errors |

## Common threads (to link back to in the next lessons)

- **Initial case / edge cases** (n = 0, empty arrays, initial value of the sentinels) — slide 01A-20: "typical source of errors, even in the exam".
- **Structured programming → exam rules**: in iterative functions a single `return`, sentinel variables, no `break`, `switch`, `case` (in 2025/26 also no `static`); in recursive ones no `for`/`while` loops, whereas multiple `return`s are allowed. You leave the loop only through its condition (V7 of 01A).
- **Accumulator and counter** → `for`/`while` loops, quantifiers with a sentinel (`true` for "for all", `false` for "there exists").
- **Invariant `s = m × i`, pre/postconditions** → correctness with `assert` and backward reasoning.
- **Execution trace** → memory model (stack of frames) in exam exercises.
- `while (i != n)` ↔ V7; `do-while` ↔ V2 (body executed at least once).
- **Jumps and program counter** (01B, 02A): the "jump to line" of V6 is a write into the PC; in assembly the loop is `CMP` + `JMPEQ` (exit) + `JMP` (back), and gcc too compiles `while` by jumping to the check first.
- **State of the machine and trace** (01A, 01B, 02A): executing = going from one state of memory to the next, instruction by instruction; it is the basis of the exam exercises on the state of memory.
- **Addresses from 0** (01B): memory as a row of bytes numbered from 0 → addresses of variables and pointers (week 2), array indices.
- **`-Wall -Werror` and compiler messages** (02A): practise reading the line, column and description of the error, as at the exam.
