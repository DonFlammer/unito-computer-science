---
course: PROG1
lesson: 02A
title: From machine language to C
date: 2026-09-30
lecturers: Elvio Amparore
eyebrow: Programming I (Programmazione I) · Theory · Channel B · Lesson 02A
description: >-
  Notes on lesson 02A of Programming I (channel B): machine language and assembly, addition and multiplication in
  assembly with a simulator of the Von Neumann machine, FORTRAN and high-level languages, history and features of C,
  the first program, printf and escape sequences, syntax, identifiers, compiling with gcc, compile-time, runtime and
  logic errors.
lede: >-
  From the bits in the registers to the first C program. First you program the Von Neumann machine in assembly,
  instruction by instruction, and you see why it is tiring; then you move to high-level languages, from FORTRAN to C.
  Finally the "X-ray" of the first C program, the syntax rules and the path from the source file to the executable
  with gcc, with the compiler's real error messages.
material: slides
facts:
  Slides: 02A_da_assembly_a_c · 50 pages
  Course: Prof. Elvio Amparore · A.Y. 2026/27
  Study time: 90–120 minutes
source: >-
  Slides "Dal linguaggio macchina al C" (02A_da_assembly_a_c), Programming I – Theory, channel B, A.Y. 2026/27
italian_file: 02A_da_assembly_a_c.html
html_notes: notes/PROG1/02A_from_assembly_to_c.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/lezioni/02A_da_assembly_a_c.md
---

## In brief

- **Machine language** is made of numbers (sequences of bits) that the processor executes directly; each architecture has its own *instruction set*, so it is **not portable**.
- **Assembly** writes the same instructions with readable names (`LOAD`, `ADD`, `STORE`…); a program called the **assembler** translates it into machine language.
- In the slides' example an addition takes **4 instructions** and the multiplication of lesson 01A takes **10**, with `CMP` and the jumps `JMPEQ` and `JMP`.
- Programming in assembly is long, error-prone and tied to the CPU: from the 1950s **high-level languages** appear, starting with **FORTRAN**, which a **compiler** translates for the machine.
- **C** was born in 1972 (Dennis Ritchie, Bell Labs) to rewrite Unix: efficient and **portable**. It is **compiled**, **imperative**, **structured** and **typed**.
- The first program: `//` comments, the directive `#include <stdio.h>`, the `main` function, a block in braces, `printf` with **escape sequences** (`\n`, `\t`, `\\`, `\"`, `\0`); every statement ends with `;`.
- You compile with `gcc -Wall -Werror source.c -o executable`: **preprocessor**, **compiler**, **assembler**, **linker**.
- Three kinds of error: **compile-time** (syntax), **runtime** (for example division by zero) and **logic** errors (the program runs but does the wrong thing).

> [!CHANNELS] Are you in channel A or C?
> **Channel A (Fiandrotti):** the deck "Dal linguaggio assembly al C" (52 slides) has the same content. It adds an example that loads a single value from memory (slide 5) and the same multiplication in **BASIC**, written with line numbers and `GOTO`s, as an example of an **unstructured** language (slide 23).
>
> **Channel C (Mazzei):** assembly, multiplication in assembly and FORTRAN are at the end of lesson 01 "Introduzione" (slides 67–83), with slightly different instructions (for example `JEQ` instead of `JMPEQ`). The part on C (`main`, `printf`, gcc) is in lesson 02 "Il C", not yet published on 30/09/2026.
>
> The exam is the same for the three channels.

## Machine language and assembly (slides 2–4)

The first computers were programmed directly in **machine language**, changing the bits of the registers with **switches** or **punched cards**. It is a bit like the step-by-step execution still used today to check hardware while it is being designed.

> [!DEF] Machine language · slide 3
> It is the language **directly executable by the processor**:
> - it is made of **numeric codes** (sequences of bits) that identify instructions and operands;
> - each architecture defines its own set of machine instructions (*instruction set*);
> - so it **depends on the processor** and is **not portable** across different architectures.

> [!DEF] Assembly language · slide 3
> It is a **textual and symbolic representation** of machine language:
> - it uses **mnemonics** such as `mov`, `add`, `ldr` instead of numeric codes;
> - it is translated into machine language by a program called the **assembler**;
> - it is more readable for programmers, but stays **closely tied to the hardware architecture**.

In practice each line of assembly corresponds to **one** machine instruction: the assembler replaces each name with its numeric code (slide 4).

| Assembly (for people) | Machine language (for the CPU) |
|---|---|
| `LOAD, R0, @A` | `0010000110010000` |
| `LOAD, R1, @B` | `0010010110010010` |
| `ADD, R0, R1` | `0100000100000000` |
| `STORE, R0, @A` | `0011000100000000` |

> [!PITFALL] Portable does not mean "runs everywhere as it is"
> A machine-language program written for one CPU does not run on a CPU with a different *instruction set*: it has to be **rewritten**. It is the problem that high-level languages solve (later in this lesson).

## Addition in assembly, step by step (slides 5–14)

**The problem**: add two integers stored in memory at addresses $A = 400$ and $B = 404$, and put the result in the cell at address $A$. The language is a RISC-type assembly, like that of the MIPS32 processor. The program does four things:

1. it defines the addresses `A` and `B`;
2. it loads the two numbers into the CPU registers `R0` and `R1`, with two `LOAD` instructions;
3. it adds them with an `ADD` instruction between registers `R0` and `R1`;
4. it copies the result from register `R0` to address `A` in memory, with a `STORE` instruction.

```text
ADDR  A = 400        ; defines address A
ADDR  B = 404        ; defines address B
LOAD,  R0, @A        ; load into R0 the number at address A
LOAD,  R1, @B        ; load into R1 the number at address B
ADD,   R0, R1        ; R0 ← R0 + R1
STORE, R0, @A        ; copy R0 to address A
```

The symbol `@A` means "**the content of memory at address A**", not the number 400. The `ADDR` lines do not become instructions: they only give a name to the addresses.

### What happens in the machine (slides 7–14)

In memory the program occupies bytes 0–15 (4 instructions of 4 bytes), the data are at 400 (the number 12) and at 404 (the number $-8$). The slides follow the execution with two steps per instruction: first the **fetch** ("load the next instruction by reading the program counter into the instruction register"), then the **execution** ("decode the IR and execute the elementary instruction").

| Instruction | PC | IR | R0 | R1 | memory[400] |
|---|--:|---|--:|--:|--:|
| (start) | 0 | — | — | — | 12 |
| `LOAD, R0, @A` | 0 | LOAD | **12** | — | 12 |
| `LOAD, R1, @B` | 4 | LOAD | 12 | **−8** | 12 |
| `ADD, R0, R1` | 8 | ADD | **4** | −8 | 12 |
| `STORE, R0, @A` | 12 | STORE | 4 | −8 | **4** |

The PC moves on 4 by 4 (0, 4, 8, 12), because each instruction occupies one 32-bit word. At the end address 400 no longer holds 12 but $4 = 12 + (-8)$: the result is in the **final state of memory**, as lesson 01B said.

```widget macchina
program: addition
title: Simulator of the Von Neumann machine: press "Step" and watch the PC, IR, registers and memory
```

> [!IDEA] · why go through the registers
> The ALU works only on **registers** (lesson 01B): it cannot add two memory cells directly. This is why you need `LOAD` (memory → register), `ADD` (register + register) and `STORE` (register → memory).

## Multiplication in assembly (slides 15–16)

Now the same **multiplication by repeated addition** as in lesson 01A. The numbers are at the symbolic addresses `m` and `n`; the result goes to address `m`. The accumulator $s$ (in register `R0`) and the counter $i$ (in `R1`) are used.

```text
 1.  LOAD,  R0, 0         // initialise R0 as the accumulator s
 2.  LOAD,  R1, 0         // initialise R1 as the counter i
 3.  LOAD,  R2, @m        // load the value at address m into R2
 4.  LOAD,  R3, @n        // load the value at address n into R3
 5.  CMP    R1, R3        // compare R1 and R3, that is i and n
 6.  JMPEQ  <line 10>     // if i = n jump to line 10, otherwise go on
 7.  ADD,   R0, R2        // R0 ← R0 + R2, that is s ← s + m
 8.  INC,   R1            // R1 ← R1 + 1, that is i ← i + 1
 9.  JMP    <line 5>      // unconditional jump to line 5
10.  STORE, R0, @m        // store R0, that is the result s, at the address of m
```

(On the slides the jump targets are written `<riga 10>` and `<riga 5>`, "riga" meaning "line".) The new instructions:

| Instruction | What it does |
|---|---|
| `LOAD, R0, 0` | puts the **number** 0 into the register (no `@`: it is a value, not an address) |
| `CMP R1, R3` | **compares** the two registers; the outcome (equal or not) stays in the CPU, in the status register |
| `JMPEQ <line 10>` | **conditional jump**: jumps to line 10 only if the last comparison said "equal" (*jump if equal*) |
| `INC R1` | adds 1 to the register (*increment*) |
| `JMP <line 5>` | **unconditional jump**: always jumps to line 5 |

It is **exactly** version V6 of lesson 01A, line by line:

| Lesson 01A, version V6 | Assembly |
|---|---|
| `s ← 0, i ← 0` | lines 1–2 |
| (the data $m$, $n$ are already known) | lines 3–4: they are loaded into the registers |
| `if i = n then jump to line 7` | lines 5–6: `CMP` + `JMPEQ` (conditional jump) |
| `s ← s + m` | line 7: `ADD` |
| `i ← i + 1` | line 8: `INC` |
| `jump to line 3` | line 9: `JMP` (unconditional jump) |
| `End` | line 10: the result goes to memory |

> [!EXAM] Check first, then execute
> Here too the comparison (line 5) comes **before** the addition (line 7): with $n = 0$ you jump straight to line 10 and the result is 0. It is the principle of lesson 01A, "a typical source of errors, even in the exam".

Try the simulator with $m = 4$, $n = 3$ and then with $n = 0$: count how many times line 5 is executed.

```widget macchina
program: multiplication
m: 4
n: 3
title: Multiplication by repeated addition, executed by the machine
```

> [!NOTE] Two small differences on slide 20
> On slide 20 the same program appears with `ADD, R1, 1` instead of `INC, R1` (it does the same thing: it adds 1) and with `STORE, R0, A` on line 10.

## Towards high-level languages (slides 17–22)

### Why assembly is not enough (slide 17)

- It is **tiring** and **easy to get wrong**: 4 lines for an addition, 10 for a multiplication.
- It requires **knowing the architecture of the CPU** (registers, instructions).
- **You cannot see the structure** of the code or its logic: where does the repetition start and where does it end?
- Code written for CPU X has to be **rewritten from scratch** for CPU Y, if their machine languages differ.

This is why, from the 1950s, **programming languages** were developed whose instructions have a **semantic level** closer to **mathematical and natural language**, and which let you **abstract** the program away from the characteristics of the hardware.

### FORTRAN (slides 18–20)

In the early 1950s IBM designed the **model 704** computer for scientific computing, with two requirements:

- scientists must be able to focus on **programming formulas**, ignoring the details of the CPU;
- programs must be easy to **carry over** to future IBM models **without rewriting them** from scratch.

For the 704 **FORTRAN** (*FORmula TRANslator*) was created:

- a **compiler** translates each FORTRAN statement into **one or more** assembly instructions of the machine in use;
- if the machine changes, **recompiling** the program **is enough**;
- together with LISP, ALGOL and COBOL it is one of the ancestors of the **third-generation languages**, the family of the original C that you will study in this course;
- modern versions (FORTRAN 90) have constructs such as `if` and `while`.

Multiplication in FORTRAN (slide 20; the prompts are in Italian, "Inserisci" means "Enter"):

```text
Program Hello
INTEGER :: m
INTEGER :: n
INTEGER :: s
INTEGER :: i

WRITE(*,*) 'Inserisci m:'
READ(*,*) m
WRITE(*,*) 'Inserisci n:'
READ(*,*) n

s = 0
i = 0
do while (i<n)
    s = s + m
    i = i + 1
end do

WRITE(*,*) "Risultato :",s
End Program Hello
```

The 10 lines of assembly become 6 readable lines (from `s = 0` to `end do`): the repetition is a `do while … end do` block and **the jumps are no longer visible**, the compiler writes them. In addition the program asks the user for $m$ and $n$ (`READ`) and prints the result (`WRITE`; "Risultato" means "Result").

### The family tree of languages (slides 21–22)

Slide 21 shows how languages descend from one another, from 1956 to 2004: from **Fortran I** and **ALGOL 60** comes, among others, **C** (the K&R version, late 1970s), from which **C++** descends, and then **Java**, **C#**, and partly **Python**. Learning C means learning the basis of many languages used today.

Key points of the first part (slide 22):

- we wrote a simple algorithm to multiply integers as **repeated addition**;
- the machine can be programmed at a **low level** (assembly), but writing programs is **long and hard**;
- **high-level** languages such as C **hide** many details of the underlying hardware.

> [!BEYOND] · what the compiler really writes
> Here is the multiplication in C and a piece of the x86-64 assembly that gcc derives from it with `gcc -S` (compiler gcc 16.1, without optimisations):
>
> ```c
> while (i < n) {
>     s = s + m;
>     i = i + 1;
> }
> ```
>
> ```text
>         jmp  .L2                      ; jump straight to the check
> .L3:    mov  eax, DWORD PTR -12[rbp]  ; load m (LOAD)
>         add  DWORD PTR -4[rbp], eax   ; s ← s + m (ADD)
>         add  DWORD PTR -8[rbp], 1     ; i ← i + 1 (INC)
> .L2:    mov  eax, DWORD PTR -8[rbp]   ; load i
>         cmp  eax, DWORD PTR -16[rbp]  ; compare i with n (CMP)
>         jl   .L3                      ; if i < n go back to the body (conditional jump)
> ```
>
> The instructions have different names, but the idea is the one on the slides: load, add, compare, jump. And the compiler respects "check first, then execute": the first instruction jumps to the check.

## The C language: a bit of history (slides 23–26)

- **1969**: Ken Thompson (Bell Labs, AT&T) develops the **Unix** operating system for the PDP-7 minicomputer, initially written in **assembly**.
- Experience shows that assembly makes developing an operating system **burdensome and inflexible**.
- **Dennis Ritchie** then designs the **C language**, meant to combine **efficiency** and **portability**.
- Unix is progressively rewritten in C: it spreads (starting from universities) and decisively shapes the history of computer science.
- **1972**: first version of C, for internal use on the PDP-7 and PDP-11, known today as **K&R C** (from the initials of Kernighan and Ritchie, authors of the book that described it).
- In the **late 1980s** C is **standardised** by ANSI and ISO (**ANSI C**, **C89**), to be used on very different hardware.
- The standard has been updated several times: **C99, C11, C17, C23**. The course textbook refers to **C11**.

Despite its age, C is still central: it is the reference language for **operating systems**, **compilers**, **drivers**, **low-level libraries**, **high-performance** applications and **embedded/IoT systems**. It offers **direct control** over hardware and memory while staying much more abstract than assembly.

## The features of C (slide 27)

| C is… | What it means | Example |
|---|---|---|
| **compiled** | a **compiler** translates C sources into the computer's machine language | `gcc` produces an executable |
| **imperative** | the program is a set of **instructions**, thought of as orders | `s = s + m;` is an order: "update s" |
| **structured** | the code is organised in **blocks** enclosed by delimiters | the braces `{ … }` (lesson 01A, Begin/End blocks) |
| **strongly typed** | the programmer must **specify the type** of every variable | `int s = 0;` says that `s` is an integer |

## The X-ray of the first program (slides 28–36)

```c
// Un primo programma in C
#include <stdio.h>

// La funzione "main" e' il punto di ingresso del programma
int main(void) {
    printf("Buongiorno dal C.\n");
}
// fine della funzione main
```

The comments are in Italian as on the slides: "A first program in C", "The main function is the entry point of the program", "end of the main function"; the program prints "Buongiorno dal C." ("Good morning from C."). Compiled with `gcc -Wall -Werror`, it prints that line and goes to a new line. Let us look at it piece by piece.

### Comments (slide 28)

Lines starting with `//` are **comments**: they are not instructions and the compiler **ignores** them. They are for the reader: a comment before a function or a group of instructions clarifies its **purpose** (slide 32). Code must be understandable for a programmer, not only for the compiler.

> [!BEYOND] · the other kind of comment
> C also has comments spanning several lines, between `/*` and `*/`: `/* this is a comment */`.

### The `#include` directive (slide 29)

- Lines starting with `#` are **directives for the preprocessor** (a topic seen only a little here and more in Programming II).
- `#include <stdio.h>` **includes** the file `stdio.h` (*standard input/output header*) in the program and imports its definitions.
- `.h` files are called **header files**: they contain **declarations** of functions, for example those of the system libraries (`printf()` is in the C library, `libc`).
- `stdio.h` declares functions such as `printf()` and `scanf()`.
- On the slides the `#include` lines are sometimes omitted, only to save space.

> [!PITFALL] Without `#include <stdio.h>`
> If you forget it and use `printf`, gcc 16 stops with an error: `implicit declaration of function 'printf'`, and suggests `include '<stdio.h>'`.

### The `main` function (slides 30–31)

- C programs are organised in modules called **functions**, which contain the instructions to execute. Each function has an **input** and an **output**.
- The **`main`** function is **mandatory**: it is the point where **execution starts**.
- `(void)` means that `main` receives an **empty input**.
- `int` means that `main` returns an **integer**: a success or error code for the operating system (we will not use it in the course). The compiler lets you omit it, but you can write `return 0;` explicitly before the closing brace.
- For now all the code goes **inside `main`**.

### Blocks and structured programming (slides 32–33)

- The **braces** `{ }` delimit the **body** of the function, that is a **block** of instructions. They must **always be balanced**: every `{` has its `}`.
- A block is a **logical unit** and can contain: **declarations** of data (the **variables**), **commands**, **calls** to other functions and **other blocks** (nested, always in braces).
- By convention C code is **indented** with tabs (the Tab key).

They are the Begin/End blocks of version V6 of lesson 01A, written with braces.

### Programming for clarity (slide 34)

> "Code is read much more often than it is written: program for clarity, not for brevity." (quote attributed to Donald Knuth on slide 34)

To keep code clear:

- **correct indentation**, showing the logical structure;
- **meaningful comments**, especially for functions and complex parts;
- **descriptive names** for variables and functions, so that the code explains itself;
- **blocks that are not too long**: better to split them into smaller, reusable functions (you will see how later).

### `printf`, statements and strings (slides 35–36)

- `printf(…)` is a **function call**: you call the function passing it the input **parameters** in brackets.
- Every **statement** ends with a **semicolon** `;`.
- A **string** is a piece of text between **double quotes** `"…"`.
- Inside strings there can be **escape sequences** (special sequences), which start with the backslash `\`.

| Sequence | What it produces |
|---|---|
| `\n` | new line: goes to a new line |
| `\t` | tab |
| `\\` | the backslash character `\` |
| `\"` | the double quote `"` |
| `\0` | the string terminator (you will use it later) |

For now `printf` is used only with text in double quotes. For example:

```c
printf("Ha detto \"ciao\"\n");     // prints: Ha detto "ciao"   (He said "hi")
printf("C:\\corso\\lab1\n");        // prints: C:\corso\lab1
printf("nome\tvoto\n");             // prints nome (name) and voto (grade) separated by a tab
```

> [!PITFALL] A lone backslash
> A single `\` in a string always starts an escape sequence. To print a backslash you need **two**: `\\`. And to print a double quote you need `\"`, otherwise the compiler thinks the string ends there.

## Syntax, identifiers and indentation (slides 37–41)

### Syntax and tokens (slides 37–38)

C has to be **compiled**: the source code, which is text, is translated into machine language. During compilation the **lexical analyser** (*parser*) splits the code into **tokens**, the syntactic units: keywords, identifiers, operators, punctuation, strings, constants. Like a natural language, a programming language has a **syntax**, more formal, with the rules for writing correct programs. If a rule is broken, the compiler reports a **compile-time error** and does **not** produce the program.

Three rules to know right away:

1. **Every statement ends with `;`**. Typical mistake: forgetting it. gcc answers `expected ';' before …`.
2. A statement can span **several lines**: you can go to a new line **wherever a space is allowed**. Two strings next to each other are joined:
   ```c
   printf("Questo è un messaggio "
          "spezzato su più righe\n");
   ```
   (It prints "Questo è un messaggio spezzato su più righe", "This is a message split over several lines".)
3. You **cannot** go to a new line **inside a string** without closing it: error `missing terminating " character`.

### Identifiers (slides 39–40)

**Identifiers** are the **names** you give to the elements of the program (variables, functions, constants, types…), so that you can recognise and use them.

- Uppercase and lowercase **matter** (*case-sensitive*): `Var`, `var` and `VAR` are three different identifiers.
- Choose **clear** names: avoid names too similar to one another or meaningless ones. Examples from the slides: `somma` (sum), `accumulatore` (accumulator).
- You **cannot** use the language's **keywords**:

  `auto break case char const continue default do double else enum extern float for goto if int long register return short signed sizeof static struct switch typedef union unsigned void volatile while`

- **Do not** use the names of the standard library functions, such as `main` and `printf` (even if you do not use them, like `sin` and `cos`), or the names defined in the header files.

> [!BEYOND] · which characters are allowed
> An identifier contains **letters**, **digits** and the underscore `_`, and **does not start with a digit**: `x2` and `conto_totale` are fine, `2x` and `conto-totale` are not (the hyphen is the minus sign). Spaces are not allowed. Also avoid names starting with `_`: they are reserved in many cases.

### Indentation (slide 41)

The instructions of a block (**not** the braces) are written **indented** by a fixed number of spaces (for example 4) or, better, with the Tab character. Indentation helps you understand the flow of the program, and should be done **while you program**, not afterwards.

```c
if (a > 15) {
    x = 5;
    y = 2;
    z = a + b;
}
```

The `if` statement will come in the next weeks: here what matters is the form, with the three instructions indented inside the braces.

## From source to executable (slides 42–45)

The path (slide 42): the **source files** (`.c`, the code in text form; each one is a **compilation unit**) include the **header files** (`.h`). Preprocessor, compiler and assembler turn each source into an **object file** (machine language); the **linker** joins the object files into an **executable program**.

The course's compiler is **gcc** (the slide says GNU C Compiler; today the name is *GNU Compiler Collection*): free, standard-compliant, available for the main operating systems, able to produce code for many architectures. It is a *frontend* for a multi-stage compilation system (slides 43–44):

| Stage | Program | What it does |
|---|---|---|
| 1. preprocessor | `cpp` | processes the directives `#include`, `#define`… and produces an intermediate source |
| 2. compiler | `cc` | translates C into assembly, with options to optimise speed or size, or without optimisation for debugging (option `-g`) |
| 3. assembler | `as` | produces the object file `.o` in machine language |
| 4. linker | `ld` | joins the object files of the C sources, other object files (also from other languages) and the **libraries** (input/output, maths, network…) into an executable |

### Compiling and running (slide 45)

For now you compile like this:

```text
Unix:     gcc -Wall -Werror source.c -o executable
Windows:  gcc -Wall -Werror source.c -o executable.exe
```

- `-Wall` turns on the most useful **warnings**;
- `-Werror` turns every warning into an **error**: with a single warning the program is not produced;
- `-o executable` chooses the **name** of the file produced.

Then you run it: `./buongiorno` in the Unix shell, `buongiorno` in the Windows Command Prompt.

> [!EXAM] The exam options
> `-Wall -Werror` are the options used at the exam in past years: train with them from the start. A program that does not compile passes no test.

## Compile-time, runtime and logic errors (slides 46–48)

A program can **compile** without syntax errors and still contain errors that only show up **during execution** (*runtime*). The causes can be:

- a **wrong design** of the algorithm, for example executing a loop **before** checking its termination condition (it is the bug of version V2 in lesson 01A);
- a **wrong implementation** of the program, for example a division by zero or an invalid memory access.

| Kind | When you see it | Example |
|---|---|---|
| **compile-time** | right away, the compiler reports it | a missing `;`, an unclosed string |
| **runtime** | during execution | division by zero |
| **logic** | never by itself: the program runs but does the wrong thing | adding from 0 to $n - 1$ instead of from 1 to $n$ |

### A compile-time error (slide 47)

```c
#include <stdio.h>

int main(void) {
    printf("Buongiorno dal C.\n")
}
```

The `;` is missing on line 4. gcc 16.1 answers like this (checked):

```text
manca.c:4:34: error: expected ';' before '}' token
```

The numbers `4:34` are the **line** and the **column**: the compiler tells you where it noticed the problem. Sometimes it is the line **after** the real error, because it only notices when it finds the next symbol (here the `}` on line 5): always look at the line before too.

### A runtime error (slide 48)

```c
#include <stdio.h>
int main(void) {
    int x = 5;
    int y = 0;
    printf("5/2 uguale a %d\n", x/y);
}
```

The program **compiles without errors** even with `-Wall -Werror`, but when run it divides by zero. On the slide, on Linux, the program stops with the message `Eccezione in virgola mobile` ("Floating point exception", even though the division is between integers: the name of the signal is historical). On Windows the program ends abnormally without printing the result. The `%d` inside the string is used to print an integer: you will see it soon. ("uguale a" means "equals".)

> [!PITFALL] "It compiles" does not mean "it works"
> The compiler checks the **syntax**, not the **logic**. After compiling it, a program must be **tried out** (tests), also on edge cases such as $n = 0$.

## How to develop a C program (slides 49–50)

1. **Write or edit** the source with a text editor (for example Notepad++).
2. **Save** the file with the `.c` extension in a folder.
3. **Compile** with gcc.
4. **Analyse and fix** the syntax errors: **read carefully what the compiler says**.
5. **Run** the program.
6. **Check** that it behaves correctly (tests).
7. If something is wrong, **fix** it and start again.

Prerequisites: being able to write and manage text files, move between folders, use the **command line** (shell) for the essentials. On your own PC you will have to install an environment with the gcc compiler (the labs take care of this). To start without installing anything there is the online environment [pythontutor.com/c.html](https://pythontutor.com/c.html#mode=edit), which also shows the state of memory step by step.

## Towards the exam

The Programming I exam is at the PC on Moodle, with C exercises also marked by **automatic tests** (CodeRunner), the same for channels A, B and C. This lesson gives you the basic tools:

- **always compile with `-Wall -Werror`**, as at the exam: a single warning blocks compilation;
- **read the compiler's messages**: line, column and description (`expected ';'`, `missing terminating " character`, `implicit declaration of function`);
- at the exam you write in a **plain text editor**, without an IDE or auto-completion: practise that way, for example with Notepad++;
- **try** your programs on several cases, including edge cases: the automatic tests will;
- the "instruction after instruction" model of assembly is the basis of the exercises on the **state of memory**.

> [!EXAM] What to do already this week
> - First lab (Lab01, command line and compiler): lab group 2 (even student ID number) Monday 5/10, lab group 1 (odd student ID number) Tuesday 6/10, 14:00–17:00, Turing Lab.
> - Copy the "Buongiorno dal C." program, compile it with `gcc -Wall -Werror` and then **break it on purpose** (remove a `;`, a brace, a quote) to learn to recognise the error messages.

## Exercises

::: exercise basic Trace of the addition with other data
Run the addition program (slides 5–14) by hand with 7 at address $A = 400$ and 5 at address $B = 404$. After each instruction write the PC, R0, R1 and the content of address 400. Check with the simulator.
::: solution
| Instruction | PC | R0 | R1 | memory[400] |
|---|--:|--:|--:|--:|
| `LOAD, R0, @A` | 0 | 7 | — | 7 |
| `LOAD, R1, @B` | 4 | 7 | 5 | 7 |
| `ADD, R0, R1` | 8 | 12 | 5 | 7 |
| `STORE, R0, @A` | 12 | 12 | 5 | **12** |

After the last instruction the PC is 16 and the program has finished: address 400 holds $7 + 5 = 12$. Note that the value 5 at address 404 does not change.
:::

::: exercise basic How many instructions for a multiplication
How many instructions does the multiplication program (slide 16) execute with $n = 3$? And with $n = 0$? Find a formula for any $n$.
::: solution
Let us count the lines executed:
- lines 1–4 only once: **4**;
- for each round of the loop lines 5, 6, 7, 8, 9: **5 per round**, and there are $n$ rounds;
- at the end lines 5 and 6 one last time (the comparison that exits) and line 10: **3**.

Total: $4 + 5n + 3 = 5n + 7$.
- $n = 3$: $5 \cdot 3 + 7 = 22$ instructions (44 steps in the simulator, which counts fetch and execution separately).
- $n = 0$: $7$ instructions: lines 1–4, 5, 6 (jump) and 10.
:::

::: exercise intermediate Double a number in assembly
With the instructions of the slides (`LOAD`, `STORE`, `ADD`, `INC`, `CMP`, `JMPEQ`, `JMP`) write a program that computes $2m$ and stores it at the address of $m$.
::: solution
```text
1.  LOAD,  R0, @m        // R0 ← m
2.  ADD,   R0, R0        // R0 ← R0 + R0 = 2m
3.  STORE, R0, @m        // store the result at the address of m
```
A register can be added to itself. A longer but correct solution loads $m$ into two registers and then adds them.
:::

::: exercise intermediate Sum of the first n numbers in assembly
Write an assembly program that computes $1 + 2 + \dots + n$ (with $n \ge 0$ at address `n`) and stores the result at the address of `n`. Hint: it is exercise 6 of lesson 01A.
::: solution
```text
1.  LOAD,  R0, 0         // s ← 0
2.  LOAD,  R1, 0         // i ← 0
3.  LOAD,  R3, @n        // R3 ← n
4.  CMP    R1, R3        // i = n ?
5.  JMPEQ  <line 9>      // if so, end of the loop
6.  INC,   R1            // i ← i + 1   (first advance the counter...)
7.  ADD,   R0, R1        // s ← s + i   (...then add it)
8.  JMP    <line 4>      // back to the comparison
9.  STORE, R0, @n        // store s
```
Trace with $n = 3$: $(i, s) = (0, 0) \to (1, 1) \to (2, 3) \to (3, 6)$, then $3 = 3$ and a jump to line 9: the result is 6. With $n = 0$ you jump straight away and the result is 0. If you swap lines 6 and 7 you add $0 + 1 + 2 = 3$: the usual off-by-one error.
:::

::: exercise basic Find the errors
The following program does not compile. Find the two errors and write what gcc says.
```c
#include <stdio.h>

int main(void) {
    printf("Ciao\n")
    printf("Seconda riga\n);
}
```
::: solution
1. Line 4: the `;` is missing. gcc: `4:21: error: expected ';' before 'printf'` (it notices when it finds the `printf` on the next line).
2. Line 5: the string is not closed, the `"` before `)` is missing. gcc: `5:12: error: missing terminating " character`.

Corrected version (it prints "Ciao", "Hi", and "Seconda riga", "Second line"):
```c
#include <stdio.h>

int main(void) {
    printf("Ciao\n");
    printf("Seconda riga\n");
}
```
:::

::: exercise basic Escape sequences
Write the `printf` statements that print exactly these three lines (in the third one there is a tab between `nome` and `voto`):
```text
Il file si trova in C:\corso\lab1
Ha detto "ciao"
nome	voto
```
::: solution
```c
printf("Il file si trova in C:\\corso\\lab1\n");
printf("Ha detto \"ciao\"\n");
printf("nome\tvoto\n");
```
Each `\` to print becomes `\\`, each `"` becomes `\"`, the tab is `\t`, and each line ends with `\n`. Checked with `gcc -Wall -Werror`. (The lines mean "The file is in C:\corso\lab1", "He said "hi"", "name grade".)
:::

::: exercise basic Valid identifiers
Which of these are valid and suitable identifiers? `somma`, `Somma`, `2x`, `x2`, `int`, `conto-totale`, `conto_totale`, `printf`.
::: solution
| Name | Valid? | Why |
|---|---|---|
| `somma` | yes | |
| `Somma` | yes | but it is **different** from `somma` (case matters): better to avoid names this similar |
| `2x` | no | it starts with a digit |
| `x2` | yes | |
| `int` | no | it is a keyword |
| `conto-totale` | no | the `-` is the minus sign: the compiler reads "conto minus totale" |
| `conto_totale` | yes | the underscore is allowed |
| `printf` | do not use | it is the name of a standard library function (slide 40) |
:::

::: exercise intermediate Which stage complains?
For each error say which stage of compilation reports it: (a) `#include <stdoi.h>` (wrong file name); (b) a missing `;`; (c) a function declared and called, but never written:
```c
void saluta(void);
int main(void) { saluta(); return 0; }
```
::: solution
(a) The **preprocessor**, which looks for the file to include: `fatal error: stdoi.h: No such file or directory`.

(b) The **compiler**, which checks the syntax: `expected ';' before …`.

(c) The **linker**: the compiler accepts the call because the function is declared, but when joining the pieces the linker does not find its code: `undefined reference to 'saluta'` and then `ld returned 1 exit status`.

All three messages are those of gcc 16.1.
:::

::: exercise intermediate From FORTRAN to C
Rewrite in C the FORTRAN multiplication of slide 20, with $m = 4$ and $n = 3$ fixed in the code (reading the numbers will come with `scanf`). Print the result with `printf("%d x %d = %d\n", m, n, s);`.
::: solution
```c
#include <stdio.h>

int main(void) {
    int m = 4, n = 3;
    int s = 0;          // accumulator
    int i = 0;          // counter
    while (i < n) {     // do while (i<n)
        s = s + m;
        i = i + 1;
    }                   // end do
    printf("%d x %d = %d\n", m, n, s);
    return 0;
}
```
It prints `4 x 3 = 12` (checked with `gcc -Wall -Werror`). C's `while` corresponds to FORTRAN's `do while … end do` and to lines 5–9 of the assembly.
:::

::: exercise hard A logic error that compiles
This version compiles without warnings and with $m = 4$, $n = 3$ prints 12. What happens with $n = 0$? What kind of error is it?
```c
int s = 0, i = 0;
do {
    s = s + m;
    i = i + 1;
} while (i != n);
```
::: solution
`do … while` executes the body **before** checking the condition, like version V2 of lesson 01A. With $n = 0$: after the first round $i = 1$, and the condition $i \ne 0$ stays true forever: the loop does not terminate (after billions of rounds `i` would exceed the largest value of an `int`, and in C that is undefined behaviour). It is a **logic** (design) error: the compiler cannot notice it, because the syntax is correct. Fix: check first, with `while (i != n) { … }`.
:::

## Review questions

::: question What is the difference between machine language and assembly?
Machine language is made of numeric codes (bits) executed directly by the processor and depends on the architecture. Assembly writes the same instructions with more readable symbolic names (mnemonics); an assembler translates it into machine language. Assembly too stays tied to the architecture.
:::

::: question Which instructions are needed to add two numbers in memory, and why?
Two `LOAD`s to bring the numbers from memory into registers, an `ADD` between registers (the ALU works only on registers) and a `STORE` to bring the result back to memory.
:::

::: question What does `@A` mean, and how is it different from `LOAD, R0, 0`?
`@A` denotes the content of memory at address A. In `LOAD, R0, 0` the 0 is a value: the register is set to zero.
:::

::: question How is a loop built in assembly?
With a comparison (`CMP`) followed by a conditional jump (`JMPEQ`) that leaves the loop when the condition is true, and an unconditional jump (`JMP`) at the end of the body that goes back to the comparison.
:::

::: question Why were high-level languages created?
Because assembly is tiring, error-prone, requires knowing the CPU, does not show the structure of the program and has to be rewritten for each architecture. High-level languages use instructions close to mathematical and natural language, and a compiler translates them for each machine.
:::

::: question What is new about FORTRAN?
It is a language for writing formulas, created for the IBM 704: a compiler translates each statement into one or more assembly instructions; if the machine changes, recompiling is enough. It is one of the ancestors of the third-generation languages.
:::

::: question Why was C created and who designed it?
Dennis Ritchie designed it at Bell Labs to rewrite Unix, which Ken Thompson had written in assembly: an efficient and portable language was needed. The first version dates from 1972 (K&R C); it was standardised in the late 1980s (C89) and then updated (C99, C11, C17, C23).
:::

::: question What are the four features of C according to slide 27?
Compiled (a compiler translates it into machine language), imperative (instructions as orders), structured (blocks in braces), strongly typed (the type of every variable must be declared).
:::

::: question What do `#include <stdio.h>` and the `main` function do?
The directive asks the preprocessor to include the stdio.h header, which declares functions such as printf and scanf. `main` is the mandatory function where execution starts: `int main(void)` receives no input and returns an integer to the operating system.
:::

::: question What are the main escape sequences?
`\n` new line, `\t` tab, `\\` backslash, `\"` double quote, `\0` string terminator.
:::

::: question Which rules apply to identifiers?
They are case-sensitive; they cannot be keywords or names from the standard library; they must be clear and not too similar to one another. In addition: only letters, digits and the underscore, without starting with a digit.
:::

::: question What are the stages of compilation with gcc?
Preprocessor (directives such as #include), compiler (from C to assembly), assembler (from assembly to the object file in machine language), linker (joins object files and libraries into an executable).
:::

::: question What do the options `-Wall` and `-Werror` do?
`-Wall` turns on the compiler's main warnings; `-Werror` turns them into errors, so with a single warning the program is not produced. They are the exam's options.
:::

::: question What is the difference between compile-time, runtime and logic errors?
Compile-time errors break the syntax and the compiler finds them right away; runtime errors emerge during execution (division by zero, invalid memory access); logic errors let the program run, but it does the wrong thing.
:::

## Glossary

```glossary
Machine language | Instructions in numeric form (bits), executed directly by the processor; different for each architecture.
Instruction set | The set of machine instructions of an architecture.
Assembly | Symbolic representation of machine language, with mnemonics such as LOAD, ADD, STORE.
Assembler | Program that translates assembly into machine language.
LOAD / STORE | Copy a value from memory to a register / from a register to memory.
CMP | Compares two registers; the outcome stays in the CPU (status register).
Conditional / unconditional jump | JMPEQ jumps only if the last comparison said "equal"; JMP always jumps.
High-level language | Language with instructions close to mathematical and natural language, independent of the hardware.
Compiler | Program that translates a high-level language into machine language (or into assembly).
Portability | The possibility of using the same program on different machines, by recompiling it.
FORTRAN | FORmula TRANslator, IBM language of the 1950s for scientific computing.
Comment | Text ignored by the compiler: from `//` to the end of the line, or between `/*` and `*/`.
Preprocessor directive | A line starting with #, such as #include.
Header file | A .h file with function declarations, such as stdio.h.
main function | The mandatory function where execution starts.
Block | A group of instructions between braces { }; blocks can be nested.
Statement | A command of the program; in C it ends with ;.
String | Text between double quotes.
Escape sequence | A pair of characters starting with the backslash that represents a special character: `\n`, `\t`, `\\`, `\"`, `\0`.
Token | A syntactic unit into which the parser splits the code: keywords, identifiers, operators, strings, constants.
Identifier | Name of a variable, function, constant or type; case-sensitive.
Keyword | A reserved word of C, such as int, while, return.
Object file | A compilation unit translated into machine language (.o).
Linker | Joins object files and libraries into an executable program.
gcc | The course's compiler (GNU Compiler Collection).
Runtime error | An error that shows up during execution.
Logic error | The program runs but does not do what it should.
```

## Checklist

```checklist
- I can explain the difference between machine language and assembly and why neither is portable.
- I can run the addition program by hand, with PC, registers and memory after each instruction.
- I can read the multiplication program in assembly and link it line by line to version V6 of lesson 01A.
- I can explain CMP, JMPEQ and JMP and how they form a loop.
- I can say why high-level languages were created and what a compiler does.
- I can briefly tell how C was born and its four features.
- I can explain every line of the "Buongiorno dal C." program.
- I can use the escape sequences `\n`, `\t`, `\\`, `\"` in `printf`.
- I can recognise a valid identifier and the keywords.
- I can list the stages of compilation and compile with gcc -Wall -Werror.
- I can tell compile-time, runtime and logic errors apart, and read a gcc message.
```

## Sources

- **Lesson slides**: "Dal linguaggio macchina al C. Dai bit e registri alla programmazione strutturata di alto livello e portabile" (02A_da_assembly_a_c), Programming I – Theory, channel B, A.Y. 2026/27, 50 pages; the slide number is next to each heading.
- **Channels A and C**: the deck "Dal linguaggio assembly al C" of channel A and lesson 01 "Introduzione" of channel C on the 2026/27 Moodle pages ([channel A](https://informatica.i-learn.unito.it/course/view.php?id=3701), [channel C](https://informatica.i-learn.unito.it/course/view.php?id=3767)), checked on 30/09/2026.
- **Compiler messages and assembly**: obtained with gcc 16.1 (MinGW-w64) by compiling the examples with `-Wall -Werror`; the assembly with `gcc -S -O0 -masm=intel`.
- **Exam and labs**: [course sheet](https://github.com/DonFlammer/unito-computer-science/blob/main/ai_context/PROG1/course.md).
- The **"Beyond the slides"** parts (assembly produced by gcc, multi-line comments, characters of identifiers) and the exercises are additions in these notes.
