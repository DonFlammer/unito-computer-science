---
course: PROG1
lesson: S1
type: summary
title: "Week 1: the algorithm, the Von Neumann machine, the first C program"
date: 2026-10-02
lecturers: Elvio Amparore
eyebrow: Weekly summary · Programming I · Channel B · 28/09 – 02/10/2026
description: >-
  Summary of week 1 of Programming I (Programmazione I, channel B): what an algorithm is, the seven versions of
  multiplication by repeated addition and the n = 0 bug, the Von Neumann machine and the CPU cycle, from machine
  language to assembly and C, the first program, gcc and the three kinds of error.
lede: >-
  The three lessons of the week in a few pages: the ideas to know, the methods, the pitfalls and the questions to
  check yourself. For details and exercises there is the full lesson, linked in each section.
material: slides
facts:
  Lessons: "[01A](01A_first_algorithm.html) Mon 28/09 · [01B](01B_computer_architecture.html) Tue 29/09 · [02A](02A_from_assembly_to_c.html) Wed 30/09"
  Revision time: 30–40 minutes
source: >-
  The notes of lessons 01A, 01B and 02A of Programming I (channel B), written on E. Amparore's slides
italian_file: riassunto_settimana_01.html
html_notes: notes/PROG1/summary_week_01.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/riassunti/settimana_01.md
---

## In brief

- An **algorithm** is a precise recipe: ordered, unambiguous and executable operations that give a result and always stop.
- The golden rule of the course: **first check the conditions, then execute**. The initial case ($n = 0$) is "a typical source of errors, also in the exam".
- The computer is a **Von Neumann machine**: CPU, memory holding program **and** data, secondary storage, bus. The CPU repeats fetch, decode, execute.
- The CPU only understands **machine language**; **assembly** writes it with readable names; **C** is written like a real language and a **compiler** translates it.
- You compile with `gcc -Wall -Werror`. A program that compiles is not necessarily right: it must be tested, also on the edge cases.

## 01A · A first algorithm (Mon 28/09)

Computer science studies **algorithms**, not computers: the computer is to computer science what the telescope is to astronomy (a saying attributed to Dijkstra).

> [!DEF] Algorithm
> An **ordered** set of **unambiguous** and **effectively executable** operations that, when executed, **produces a result** and **stops in a finite time**.

In computer science **everything is a number**: text, images, instructions. **Imperative** programming tells the machine, step by step, what to do.

**The guiding problem.** Compute $m \times n$ (integers, $n \ge 0$) with a machine that can only add, assign and compare. The idea: add $m$ to itself $n$ times, starting from 0, the neutral element of addition. Two variables are needed:

- the **accumulator** `s`, the sum so far;
- the **counter** `i`, how many additions I have done.

Wirth: "Programs = Algorithms + Data Structures". In the slides' notation `←` means "assign" (`s ← s + m`), `=` means "compare" (`i = n?`).

| Version | What changes |
|---|---|
| V1 | the idea in words: "add m to s exactly n times", too vague |
| V2 | elementary steps, but the check "i = n?" is **at the end**: with n = 0 it never stops |
| V3 | **first the check**, then the addition: correct also with n = 0 |
| V4 | formal notation: `←`, `=`, `▷` for comments, indentation for what depends on the condition |
| V5 | explicit jumps ("jump to line 6") and an End instruction |
| V6 | Begin/End blocks; **conditional** jump (only if i = n) and **unconditional** jump (always) |
| V7 | nested blocks, no line numbers: it is the shape of C's `while` |

```text
Inizio Algoritmo
    s ← 0,  i ← 0
    Inizio Ripetizione Condizionata
    se i = n salta alla Fine Ripetizione Condizionata, altrimenti
        s ← s + m
        i ← i + 1
        salta all'Inizio Ripetizione Condizionata
    Fine Ripetizione Condizionata
Fine Algoritmo
```

(The slides write it in Italian: *Inizio/Fine* = Begin/End, *Ripetizione Condizionata* = conditional repetition, *se … salta … altrimenti* = if … jump … otherwise.)

> [!PITFALL] The n = 0 bug
> V2 first adds and brings `i` to 1, then checks "1 = 0?": no, it repeats. Then "2 = 0?", and so on: `i` never goes back to 0 and the algorithm **never stops**. With V3 the first check is "0 = 0?": yes, end, and `s = 0` is the right result.

> [!REMEMBER]
> - Always try the **edge cases**: $n = 0$, $n = 1$, $m = 0$, negative values.
> - The hand **trace**, one row per step and one column per variable, is the skill needed in the exercises on the state of memory.
> - You leave the loop only through the condition: hence the exam rules (a single `return` in iterative functions, no `break`, `continue`, `switch`).

## 01B · Computer architecture (Tue 29/09)

| Milestone | What it brings |
|---|---|
| Abacus, Pascaline | they help to compute (the Pascaline carries by itself), but the logic comes from the user |
| Hard-wired calculators | they only do the operations built into the hardware, like a blender |
| Babbage, around 1840 | the analytical engine: punched cards, conditional jumps, the idea of a program |
| Turing, 1936 | the universal machine: a single machine can run any algorithm |
| ENIAC, 1943–46 | first general-purpose electronic computer, decimal, programmed by moving cables |
| EDVAC | **stored program**, **same memory** for instructions and data, numbers in **binary** |

- **Programmable computer**: the same machine does different tasks by changing the sequence of instructions, without touching the hardware.
- A **bit** is 0 or 1; with $N$ bits you can tell $2^N$ pieces of information apart. A **byte** is 8 bits, that is 256 values. b is written for bit, B for byte: 100 Mb/s is 12.5 MB/s.
- **Von Neumann architecture**: CPU (control unit, ALU, registers), main memory (RAM) with program and data, secondary storage, all connected by the **system bus**.
- Memory is a row of bytes, each with an **address** starting from 0: with 1024 bytes the addresses go from 0 to **1023**. Numbers are stored in **words**, for example of 32 bits, that is 4 bytes.
- The **state** is the snapshot of memory and registers at an instant. Running a program means going from one state to the next.

> [!METHOD] The CPU cycle
> 1. **Fetch**: read the instruction at the address written in the **PC** (program counter) and copy it into the **IR** (instruction register).
> 2. **Decode**: work out what the instruction asks.
> 3. **Execute**: the ALU works on the registers, or memory is read or written.
> 4. The PC moves to the next instruction, or jumps where the instruction says. Start again.
>
> The same program and the same initial state always give the same result.

## 02A · From machine language to C (Wed 30/09)

- **Machine language**: numbers executed directly by the CPU. Each architecture has its own instruction set, so it is not portable.
- **Assembly**: the same instructions with readable names, translated by an **assembler**. It stays tied to the CPU.
- The ALU only works on **registers**: to add two memory cells you need `LOAD` (memory → register), `ADD` (register + register) and `STORE` (register → memory). An addition costs 4 instructions.
- The multiplication of 01A in assembly costs 10 instructions, with `CMP` (compare), `JMPEQ` (jump if equal), `INC` (add 1) and `JMP` (always jump). It is V6, and the comparison comes **before** the addition.
- From the 1950s, **high-level languages**, starting with FORTRAN: a **compiler** translates them, and for another CPU you just recompile.
- **C** was born in 1972 (Dennis Ritchie, Bell Labs) to rewrite Unix. It is **compiled**, **imperative**, **structured** and **typed**.

```c
// Un primo programma in C
#include <stdio.h>

// La funzione "main" e' il punto di ingresso del programma
int main(void) {
    printf("Buongiorno dal C.\n");
}
```

(The comments say "A first program in C" and "The main function is the program's entry point"; the program prints "Good morning from C.".)

| Piece | What it does |
|---|---|
| `// …` | comment, ignored by the compiler |
| `#include <stdio.h>` | preprocessor directive: brings in the declaration of `printf`. Without it gcc stops with "implicit declaration of function 'printf'" |
| `int main(void) { … }` | where the program starts; the braces enclose a block |
| `printf("…");` | prints a string; every statement ends with `;` |
| `\n`, `\t`, `\\`, `\"`, `\0` | escape sequences: newline, tab, backslash, double quote, null character |

- **Identifiers**: letters, digits and `_`, never a digit first. Upper and lower case matter (`var` and `Var` are different). No keywords (`int`, `while`, `return`…) and no library names (`printf`, `main`).
- **gcc** takes four steps: preprocessor, compiler, assembler (object file `.o`) and **linker**, which joins the object files and the libraries into the executable.
- The exam command: `gcc -Wall -Werror source.c -o executable`, then `./executable`. With `-Werror` every warning stops the compilation.

> [!PITFALL] "It compiles" does not mean "it works"
> Three kinds of error: **compile-time** (syntax: the program is not produced), **runtime** (for example a division by zero) and **logic** errors (the program runs but does the wrong thing). The compiler only checks the syntax: a program must always be tested.

## Towards the exam

- **Lab** of channel B, Turing lab, 14:00–17:00: group 2 (even student ID number) on Mondays from 05/10 with Elisa Marengo; group 1 (odd student ID number) on Tuesdays from 06/10 with Valerio Basile. Lab01 is about the command line and the compiler.
- The exam is taken on the lab computers, with a simple editor, no IDE and no autocompletion: practise from now on with a text editor and `gcc -Wall -Werror`.
- Exam sessions 2026/27: Monday 25/01/2027 and Thursday 11/02/2027, at 9:00.
- To do now: copy "Buongiorno dal C.", compile it, then **break it on purpose** (remove a `;`, a brace, a quote) and read gcc's messages.

## Review questions

::: question What are the properties of an algorithm?
Ordered, unambiguous and executable operations; it produces a result; it stops in a finite time.
:::

::: question Why is V2 of the multiplication wrong? With which value do you find out?
It checks "i = n" after adding. With $n = 0$, `i` is already 1 at the first check and never goes back to 0, so the loop never ends.
:::

::: question What is the difference between `s ← s + m` and `i = n`?
The first assigns to `s` the value `s + m`. The second asks whether `i` and `n` are equal: the answer is true or false.
:::

::: question With 1024 bytes of memory, what is the last address?
1023, because addresses start from 0.
:::

::: question What do the PC and the IR contain?
The PC contains the address of the next instruction, the IR the instruction being executed.
:::

::: question Why do you need LOAD and STORE to add two memory cells?
Because the ALU only works on registers: you load from memory into a register (`LOAD`), add (`ADD`), and write back to memory (`STORE`).
:::

::: question What are the four steps of gcc?
Preprocessor, compiler, assembler, linker.
:::

::: question A program compiles without errors but prints a wrong result: what kind of error is it?
A logic error.
:::

## Sources

- The full lessons: [01A · A first algorithm](01A_first_algorithm.html), [01B · Computer architecture](01B_computer_architecture.html), [02A · From machine language to C](02A_from_assembly_to_c.html), with exercises, quizzes and the slide references.
- Labs and exam sessions: [course sheet](https://github.com/DonFlammer/unito-computer-science/blob/main/ai_context/PROG1/course.md).
