---
course: PROG1
lesson: 01B
title: Computer architecture
date: 2026-09-29
lecturers: Elvio Amparore
eyebrow: Programming I (Programmazione I) · Theory · Channel B · Lesson 01B
description: >-
  Notes on lesson 01B of Programming I (channel B): history of automatic computation, hardwired and programmable
  computers, Babbage, Turing, ENIAC and EDVAC, bits and bytes, the Von Neumann architecture, the memory model and how
  the CPU works, with exercises and review questions.
lede: >-
  From the abacus to the Von Neumann machine: why a computer becomes "programmable", what changes with the EDVAC's
  stored program, how information is represented with bits, what memory looks like to the CPU, and how the CPU
  executes one instruction after another with the program counter. It is the model of the machine that the whole
  course relies on.
material: slides
facts:
  Slides: 01B_architettura · 19 pages
  Course: Prof. Elvio Amparore · A.Y. 2026/27
  Study time: 45–60 minutes
source: >-
  Slides "Storia e principi del calcolo automatico" (01B_architettura), Programming I – Theory, channel B, A.Y. 2026/27
italian_file: 01B_architettura.html
html_notes: notes/PROG1/01B_computer_architecture.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/lezioni/01B_architettura.md
---

## In brief

- The first tools (abacus, Pascaline) **help** you compute, but the logic comes from whoever uses them. **Hardwired computers** can only do the operations built into their hardware.
- The decisive idea is to separate **what** the machine can do (a few elementary operations) from the **order** in which to do it, and to write that order down with **numbers**: this is how the **programmable computer** is born.
- Babbage (Analytical Engine, around 1840) and Turing (universal machine, 1936) are the theoretical milestones; ENIAC (1943–46) is the first *general purpose* computer, but it is programmed by moving cables.
- The **EDVAC** brings three ideas we still use: the **stored program** in memory, the **same memory** for instructions and data, numbers in **binary**.
- A **bit** is worth 0 or 1; $N$ bits distinguish $2^N$ pieces of information; 8 bits make a **byte** (256 values).
- **Von Neumann architecture**: CPU (control unit, ALU, registers), main memory (RAM) holding program and data, secondary memory, all connected by the **system bus**.
- Memory is a row of bytes, each with its own **address**; numbers are stored in **words** (for example 32 bits, that is 4 bytes).
- The CPU **fetches** an instruction, **decodes** it and **executes** it; the **program counter** (PC) says where the next one is, the **instruction register** (IR) holds the current one. The same program and the same initial state always give the same result.

> [!CHANNELS] Are you in channel A or C?
> **Channel A (Fiandrotti):** the deck "Architettura del computer" (18 slides) is practically identical to this one: same titles and same content, from the abacus to how the CPU works.
>
> **Channel C (Mazzei):** the same topics are in lesson 01 "Introduzione" (slides 43–66). It adds two slides on the **Turing machine** (universal because it computes all computable functions; there are problems that no algorithm solves), a table of the multiples of the byte and the list of CPU instructions (LOAD, STORE, ADD, CMP, JMP, JEQ…), which in channel B come in lesson 02A.
>
> The exam is the same for the three channels.

## From computing by hand to the first machines (slides 2–5)

Slide 2 lines up the main milestones on a timeline. Here they are in a table:

| When | What |
|---|---|
| 30000–20000 BC | notched bones for counting |
| 3500 BC | clay tokens for bookkeeping (Mesopotamia) |
| 595 AD | positional numeral system (the digits we use today) |
| 780–840 AD | al-Khwārizmī, from whose name the word "algorithm" comes (lesson 01A) |
| 1652 | Pascal: the Pascaline |
| 1673 | Leibniz: a machine that can also multiply |
| 1822 and 1837 | Babbage: *Difference Engine* and *Analytical Engine* |
| 1936 | Turing: the universal machine |
| 1945 | the Von Neumann architecture |
| 1946 | ENIAC |
| 1975 | the personal computer |
| 1984 | Apple Macintosh |
| 1990 | info.cern.ch, the first website |

### The abacus (slide 3)

It is the first known computing "machine", from antiquity. But look at what it really does: it **keeps track of what has already been done** (the beads you move remember the partial numbers). The **logic** of the operation and its **correctness** depend entirely on the person using it: if you move the wrong bead, the abacus does not notice.

### The Pascaline (slide 4)

Invented by the French mathematician Blaise Pascal in 1642 (the timeline shows 1652, the year of one of the later specimens). It is made of gears, each marked with the digits 0 to 9. It works like an abacus, with one important difference: the **carry** of the addition is done by **the machine**, with a lever between one gear and the next. When the units go from 9 to 0, the lever moves the tens gear forward by one step. For the first time a piece of logic (the carry) is inside the machine.

### Hardwired computers (slide 5)

The first machines were **hardwired**:

- they could do a **limited** set of specific operations, usually addition and subtraction;
- the **operating logic was built into the hardware**: the physical connections decided what the machine did;
- to add a new function, such as a **comparison** or a **conditional jump**, the **hardware had to be modified or redesigned**;
- more complex operations such as multiplication and division were hard to build with the technology of the time.

> [!IDEA] · a picture
> A hardwired machine is like a blender: it does one thing well, the thing it was built for. If you want it to do something else, you have to take it apart and rebuild it.

## The decisive idea: the programmable computer (slides 6–8)

Slide 6 contains the most important idea of the lesson. Instead of building a different machine for every task:

1. you choose a **basic set of elementary operations**, for example addition and comparison, that the hardware can do directly;
2. you **combine** these operations, also **repeating** them, to obtain more complex operations, such as multiplication;
3. the **order** of the operations, the **number of repetitions** and their **arguments** can be **encoded with integers**;
4. so the behaviour of the machine is described by **numeric data** that say which operations to execute.

> [!DEF] Programmable computer · slide 6
> The **same machine** can carry out **different tasks** by changing the **sequence of instructions**, without modifying its hardware.

It is exactly what you did in lesson 01A: the machine could only add, assign and compare, and you obtained multiplication by **combining and repeating** additions. The program (lines [1]–[8] of version V6) tells the machine in which order to do the operations.

### Babbage's Analytical Engine (slide 7)

Described by **Charles Babbage** around 1840, it is the **first example of a programmable computing machine**:

- data and instructions were stored on **punched cards** (cards with holes, like those of textile looms);
- its language was similar to **assembly** (you will see it in lesson 02A), **conditional jumps included**;
- in hindsight we know it was **Turing-complete**: in principle it could compute everything that is computable.

It was never fully built: the mechanics of the time were not good enough.

> [!BEYOND] · the first program
> For the Analytical Engine, **Ada Lovelace** wrote in 1843 a procedure to compute the Bernoulli numbers: it is considered the first program in history, written for a machine that did not exist yet.

### Alan Turing (slide 8)

**Alan Turing**, an English mathematician, is considered the inventor of the **theory of computability** (and, according to some, of computer science).

- In **1936** he introduces the **universal machine**: an **abstract model** of a computer, that is an imaginary machine described with mathematical precision.
- Turing uses it to study **which functions can be computed automatically**, that is with an algorithm.
- Several attempts to actually build a **Turing-complete** computer run into the technological limits of the time.

> [!BEYOND] · Turing-complete, in words
> A system is **Turing-complete** if it can compute everything that a universal Turing machine computes. C, like almost every programming language, is: in theory anything computable can be written in C (with enough memory).

## ENIAC and EDVAC (slides 9–10)

### ENIAC (slide 9)

The **Electronic Numerical Integrator and Computer** was designed in 1943 by John Mauchly and J. Presper Eckert (the slide says "John Adam Presper": his full name is John Adam Presper Eckert Jr.) and presented in 1946.

- It is the **first *general purpose* computer**: not built for a single task, but adaptable to different problems.
- It represented numbers in **decimal**.
- Operations were carried out by several **functional blocks**.
- To **program** it you had to **set switches and connect the blocks with cables**.
- So **changing the program** required a **complex manual reconfiguration**, which could take days.

The photo on slide 2 shows four programmers holding boards from ENIAC, EDVAC, ORDVAC and BRLESC.

### EDVAC (slide 10)

The **Electronic Discrete Variable Automatic Calculator** was designed in 1944 by the same authors as ENIAC. It introduces three fundamental ideas:

1. the **stored program** in the central memory;
2. a **unified memory** for instructions and data;
3. the **binary representation** of numbers.

The consequence is huge: the program is **no longer built by physically rewiring the machine**, but **is stored and modified like data**. Changing the program becomes like changing a number in memory.

| | ENIAC | EDVAC |
|---|---|---|
| Numbers | decimal | binary |
| Program | cables and switches | in memory, like data |
| Instructions and data | separate | in the same memory |
| Changing the program | manual reconfiguration | you load another program |

> [!EXAM] Why it matters to you
> "Program and data in the same memory" is the basis of the whole course: a C variable is stored in memory at some **address**, and the exam questions on the **state of memory** ask you precisely to follow how those values change, instruction after instruction.

## Bits and bytes (slides 11–12)

### Why binary (slide 11)

The basic element of information is the **bit**; the slide explains it as *Binary Information Token*. A bit can be in **only two states**: on/off, true/false, yes/no, 1/0.

Two states are easy to build with different physical devices: **relays**, **valves** (vacuum tubes), **transistors**. You only need to tell "current flows" from "no current flows". This is why modern computers use binary, instead of the decimal representation of the first computers up to ENIAC (telling ten different levels apart is much more fragile than telling two apart).

> [!BEYOND] · the name
> The most common explanation of the name "bit" is *binary digit*.

### How much information with N bits (slide 12)

Combining more bits represents more information. Each extra bit **doubles** the possibilities, because each old combination can be continued with a 0 or with a 1.

| Bits | Possible combinations | How many |
|---|---|---|
| 1 | 0, 1 | $2^1 = 2$ |
| 2 | 00, 01, 10, 11 | $2^2 = 4$ |
| 3 | 000, 001, 010, 011, 100, 101, 110, 111 | $2^3 = 8$ |
| 4 | from 0000 to 1111 | $2^4 = 16$ |
| 8 | from 00000000 to 11111111 | $2^8 = 256$ |
| $N$ | | $2^N$ |

> [!DEF] Bit and byte · slide 12
> $N$ bits represent $2^N$ pieces of information. A group of **8 bits** is called a **byte** and represents $2^8 = 256$ pieces of information. Symbols: **b** for the bit, **B** for the byte.

For example, with one byte you can count from 0 to 255: that is 256 numbers, because 0 counts.

> [!BEYOND] · from binary to decimal
> In binary each position is worth twice the one on its right: from right to left 1, 2, 4, 8, 16, 32, 64, 128. To read a byte you add up the values of the positions holding a 1:
> $$00001100_2 = 8 + 4 = 12, \qquad 11111111_2 = 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255.$$
> You will see this again when you study C types and the limits of numbers (lab 02).

> [!PITFALL] Bits and bytes, b and B
> 1 B = 8 b. A "100 Mb/s" connection transfers 100 million **bits** per second, that is 12.5 million **bytes** per second.

## The Von Neumann architecture (slides 13–15)

### How the EDVAC was built (slide 13)

- A **primary memory** of 1024 **words** of 44 bits: $1024 \cdot 44 = 45\,056$ bits, that is $5632$ bytes, about **5.5 KB**.
- A **secondary storage** on magnetic tape, for reading and writing.
- A **CPU** (*Central Processing Unit*), made up in turn of:
  - a **control unit**, which drives the components of the CPU and the system bus;
  - an **ALU**, which performs arithmetic and logical operations on the registers (the slide calls it *Algebraic Logic Unit*; it is usually called *Arithmetic Logic Unit*);
  - the **registers**, small memory cells inside the CPU, holding user data or information on the state and control of the machine.
- Everything is connected by the **system bus**, the "channel" on which data and addresses travel.

```graph
title: The diagram of slides 13–15: the CPU, main memory and secondary memory, connected by the system bus
axes: no
grid: no
x: 0 12
y: 0 8
polygon: 0.3 0.4 6 0.4 6 7.6 0.3 7.6 | blue
text: 3.15 7.2 | blue | "CPU"
polygon: 0.7 5.3 5.6 5.3 5.6 6.7 0.7 6.7 | accent
text: 3.15 6 | "Control unit"
polygon: 0.7 3.4 5.6 3.4 5.6 4.8 0.7 4.8 | amber
text: 3.15 4.1 | "ALU"
polygon: 0.7 0.8 5.6 0.8 5.6 2.9 0.7 2.9 | violet
text: 3.15 2.45 | "Registers"
text: 3.15 1.45 | "R0 R1 IR PC SP SR"
segment: 7.1 0.8 7.1 7.2 | grey | thick
text: 7.1 7.55 | grey | "bus"
segment: 6 4 7.1 4 | grey | thick
polygon: 7.9 4.5 11.7 4.5 11.7 7 7.9 7 | green
text: 9.8 6.1 | "RAM"
text: 9.8 5.3 | "program and data"
segment: 7.1 5.75 7.9 5.75 | grey | thick
polygon: 7.9 1 11.7 1 11.7 3.5 7.9 3.5 | grey
text: 9.8 2.6 | "Disk"
text: 9.8 1.8 | "secondary memory"
segment: 7.1 2.25 7.9 2.25 | grey | thick
```

### Why it is called "Von Neumann" (slide 14)

**John von Neumann**, a mathematician and consultant on the EDVAC project, was the **first to describe and publish** this architecture, in 1945. Hence the name still used today, "Von Neumann architecture"; the slide notes that it would be more correct to say "**EDVAC architecture**", because the idea was born within the EDVAC team.

### The principles (slide 15)

> [!DEF] Von Neumann architecture · slide 15
> - **Data and instructions** are stored in the **same main memory** (RAM).
> - A **CPU** performs operations on the data in memory and **saves the result in memory**.
> - CPU, primary memory and secondary storage are **connected through a system bus**.
> - The machine **modifies the data area** of memory following the program's instructions and according to the input data.

Almost every computer today, from phones to laptops, still follows this scheme.

> [!BEYOND] · RAM and disk
> **RAM** (main memory) is fast but is wiped when you switch the computer off; the **disk** (secondary memory) is slower but keeps the data. This is why a program stays on disk until you launch it, and is copied into RAM to be executed (slide 18).

## A first model of memory (slides 16–17)

### A row of bytes with an address (slide 16)

The CPU sees memory as a **long row of bytes**:

- each byte can hold a **small numeric value** (from 0 to 255);
- to reach a single byte, each one has a number that identifies it: its **address**, like the street number of a house;
- the **byte is the basic unit of addressing**: each address refers to one byte.

In the slide's example memory has 1024 bytes, with addresses from **0 to 1023**: the first 256 for the **program**, the other 768 for the **data**.

> [!PITFALL] Counting starts at zero
> With 1024 bytes the addresses go from 0 to **1023**, not up to 1024. It is the same scheme as arrays in C, where the first element has index 0.

### Words (slide 17)

A single byte (at most 255) is usually **not enough** for the numbers of everyday calculations. This is why memory is organised in **words** of 16, 32 or 64 bits, depending on the architecture. It is a matter of **efficiency**: for the processor it is faster and more natural to work on a whole word than on one byte at a time.

In the slide's example words are **32 bits = 4 bytes**:

| Area | Addresses | Bytes | 32-bit words |
|---|---|---|---|
| Program | 0–255 | 256 | $256 : 4 = 64$ |
| Data | 256–1023 | 768 | $768 : 4 = 192$ |
| Whole memory | 0–1023 | 1024 | 256 |

A 4-byte word occupies four consecutive addresses and is referred to by the address of its **first** byte: the first data word is at addresses 256, 257, 258, 259 and is called "the word at address 256"; the next one is at address 260, then 264, and so on, 4 by 4.

> [!EXAM] From here to pointers
> In week 2 (lesson "referencing, input and pointers in C") you will find out that in C you can ask for the **address** of a variable. It is exactly this number: the "street number" of the first byte in which the variable is stored.

## How the machine works (slides 18–19)

### From the disk to execution (slide 18)

1. A **control program** (once called the *monitor*, today the **operating system**) **loads** program and data from secondary memory into main memory, at precise positions identified by **addresses**.
2. The CPU executes, **one after the other**, the program's **machine instructions**. Each instruction can read or modify data, and so **progressively transforms the state of the machine** (the values in memory and in the registers).
3. At the end the program's **result** is in the **final state of memory**, for example at a known memory location.
4. Given the program and the initial state, execution **always produces the same final state**: the behaviour of the machine is **deterministic**.

> [!IDEA] · the state
> The **state** is the "snapshot" of all the values in memory and in the registers at a given instant. Executing a program means going from one snapshot to the next, one instruction at a time: it is the same **trace** you did by hand in lesson 01A, with the columns $s$ and $i$.

### Inside the CPU (slide 19)

- The **control unit** **fetches** from memory and **decodes** one instruction at a time.
- Depending on the instruction, it **activates** the right parts of the **ALU** to carry out the elementary operations.
- The **ALU** performs simple operations between the CPU's **registers**: additions, comparisons.
- Among the registers there is the **program counter** (**PC**), which holds the **address of the next instruction**. Usually the PC is **incremented**, to move to the next instruction; or it is **modified** to perform a **jump**, conditional or not.
- Another important register is the **instruction register** (**IR**): it holds the **instruction being executed**, just loaded from memory.

> [!METHOD] · the CPU cycle, to remember
> 1. **Fetch**: the control unit reads the instruction at the address stored in the PC and copies it into the IR.
> 2. **Decode**: it works out what the instruction asks for.
> 3. **Execute**: the ALU performs the operation on the registers, or data are read from or written to memory.
> 4. The PC moves on to the next instruction, or jumps where the instruction says. Back to step 1.

The "**jump to line 3**" of version V6 in lesson 01A, for the machine, means precisely: **write the address of line 3 into the PC**. In lesson 02A you will see this cycle at work, instruction by instruction, with a simulator.

> [!BEYOND] · SP and SR
> The diagram also shows two registers that the slides do not explain yet. **SP** (*stack pointer*) points to the top of the **stack**: it will be needed for function calls and the "stack of frames" memory model. **SR** (*status register*) keeps information on the last operation, for example the outcome of a **comparison**: a conditional jump reads right there whether the condition is true.

## Towards the exam

This lesson is about general culture and vocabulary: at the Programming I exam (at the PC, on Moodle with CodeRunner, the same for channels A, B and C) nobody will ask you in which year the EDVAC was born. But the ideas of the lesson come back in many places:

| Idea of the lesson | Where it comes back |
|---|---|
| memory as a row of bytes with addresses | variables, addresses and pointers (week 2), arrays (index starting from 0) |
| state of the machine changing instruction after instruction | exam exercises on the **state of memory** (execution simulated by hand) |
| stored program, instructions in sequence, PC and jumps | `while` and `for` loops, and why the exam rules forbid `break` (lesson 01A) |
| $N$ bits → $2^N$ values | C types and their limits (lab 02 "operators and types, casts, limits") |
| determinism | same input, same output: the exam's automatic tests rely on this |

> [!EXAM] What to do already this week
> - The lab starts on 5/10 (lab group 2, even student ID number, Monday 14:00–17:00) and on 6/10 (lab group 1, odd student ID number, Tuesday 14:00–17:00), in the Turing Lab: the first lab is on the command line and the compiler (see lesson 02A).
> - Go over the hand trace of lesson 01A again: it is the same skill you will need for the state of memory.

## Exercises

::: exercise basic How much information with N bits
How many different pieces of information can be represented with 1, 4, 10, 16 and 32 bits?
::: solution
$N$ bits give $2^N$ combinations:

| Bits | Pieces of information |
|---|---|
| 1 | $2^1 = 2$ |
| 4 | $2^4 = 16$ |
| 10 | $2^{10} = 1024$ |
| 16 | $2^{16} = 65\,536$ |
| 32 | $2^{32} = 4\,294\,967\,296$ (about 4.3 billion) |

The 1024 of 10 bits explains why "1 KB" sometimes means 1024 bytes instead of 1000.
:::

::: exercise basic How many bits are needed
What is the minimum number of bits needed to give a different code to: (a) the 26 lowercase letters; (b) 100 colours; (c) 1000 students?
::: solution
I look for the **smallest** power of 2 that is at least as large as the number of objects.

(a) $2^4 = 16 < 26 \le 32 = 2^5$: **5 bits** are needed.

(b) $2^6 = 64 < 100 \le 128 = 2^7$: **7 bits** are needed.

(c) $2^9 = 512 < 1000 \le 1024 = 2^{10}$: **10 bits** are needed.

With one bit fewer the combinations are not enough; with one more some are left over, but that is a waste.
:::

::: exercise basic The EDVAC's memory
The EDVAC had 1024 words of 44 bits. How many bits is that in total? How many bytes? How many KB, with 1 KB = 1024 bytes?
::: solution
- Bits: $1024 \cdot 44 = 45\,056$.
- Bytes: $45\,056 : 8 = 5632$.
- KB: $5632 : 1024 = 5.5$.

These are the "about 5.5 KB" of slide 13. A phone today has a few billion bytes of RAM.
:::

::: exercise intermediate Addresses and words
In the model of slide 17 (program at addresses 0–255, data at addresses 256–1023, 32-bit words):
(a) at which address does word number $k$ of the data area start, counting from $k = 0$?
(b) And the tenth data word?
(c) In which word of the data area is byte 1000?
::: solution
(a) Each word occupies 4 bytes and the data start at 256, so word $k$ starts at $256 + 4k$.

(b) The tenth word has $k = 9$ (counting starts at 0): $256 + 4 \cdot 9 = 256 + 36 = 292$. It occupies bytes 292, 293, 294, 295.

(c) I solve $256 + 4k \le 1000 < 256 + 4(k + 1)$: $1000 - 256 = 744$ and $744 : 4 = 186$ exactly. So byte 1000 is the **first** byte of word $k = 186$ (bytes 1000–1003).
:::

::: exercise intermediate Hardwired or programmable?
For each one, say whether it is a tool in which the user supplies the logic, a hardwired machine or a programmable machine, and why: abacus; Pascaline; ENIAC; EDVAC; your computer.
::: solution
- **Abacus**: the logic and correctness depend entirely on the user; the abacus only keeps track of the numbers.
- **Pascaline**: a **hardwired** machine: it does additions (with the automatic carry) and that is all.
- **ENIAC**: **programmable**, but the program is built by rewiring cables and switches.
- **EDVAC**: programmable with a **stored program**: the program sits in memory like data.
- **Your computer**: Von Neumann architecture, like the EDVAC: it executes any program you load into its memory.
:::

::: exercise intermediate The PC during version V6
Take version V6 of the multiplication (lesson 01A, lines [1]–[8]) and imagine that each line is a 4-byte instruction, with line 1 at address 0. Write the sequence of values of the PC while running the algorithm with $n = 1$.
::: solution
Line $r$ is at address $4(r - 1)$: line 1 → 0, line 2 → 4, line 3 → 8, line 4 → 12, line 5 → 16, line 6 → 20, line 7 → 24, line 8 → 28.

With $n = 1$ the lines executed are: 1, 2, 3 (check: $0 = 1$? no), 4, 5, 6 (jump to 3), 3 (check: $1 = 1$? yes, jump to 7), 7, 8.

Values of the PC: **0, 4, 8, 12, 16, 20, 8, 24, 28**. The PC does not always grow by 4: after line 6 it **goes back** to 8 (unconditional jump), after the second check it **jumps** to 24 (conditional jump).
:::

::: exercise basic From binary to decimal
Convert the bytes $00000101$, $00001100$, $10000000$ and $11111111$ to decimal.
::: solution
Values of the positions from right to left: 1, 2, 4, 8, 16, 32, 64, 128.

- $00000101 = 4 + 1 = 5$
- $00001100 = 8 + 4 = 12$
- $10000000 = 128$
- $11111111 = 255$, the largest value of a byte (256 values, from 0 to 255).
:::

::: exercise hard The program is data
Explain in your own words why the EDVAC's idea of storing the program "like data" makes it possible to have a program that **writes other programs**, like the compiler you will use from the next lesson.
::: solution
If the program is a set of numbers in memory, then another program can **produce those numbers** as its result, exactly as it produces any other data. A compiler does precisely this: it reads a text (the C program, which for the compiler is input data) and writes the corresponding machine instructions to a file (its output). Then the operating system loads those instructions into memory and the CPU executes them. With ENIAC it would have been impossible: the program was cables and switches, not numbers that another program could write.
:::

## Review questions

::: question What does an abacus really do? What does the Pascaline add?
The abacus keeps track of the calculations already done, but the logic and correctness of the operation depend on the person using it. The Pascaline does the carry of the addition by itself, with a lever between one gear and the next.
:::

::: question What is a hardwired computer and what is its limit?
A machine whose operating logic is built into the hardware: it can do a limited set of operations (typically addition and subtraction), and to add new functions, such as comparisons or conditional jumps, the hardware has to be modified or redesigned.
:::

::: question What is the idea that leads to the programmable computer?
Separating the elementary operations the hardware can do from the order in which to execute them, combining and repeating them to obtain complex operations, and encoding order, repetitions and arguments with numbers. This way the same machine carries out different tasks by changing the sequence of instructions, without touching the hardware.
:::

::: question What did Babbage and Turing do?
Around 1840 Babbage described the Analytical Engine, the first example of a programmable machine, with data and instructions on punched cards and conditional jumps. In 1936 Turing introduced the universal machine, an abstract model of a computer used to study which functions can be computed automatically.
:::

::: question How was the ENIAC programmed and what changes with the EDVAC?
The ENIAC was programmed by setting switches and connecting blocks with cables: changing the program was a manual reconfiguration. The EDVAC introduces the stored program in central memory, the unified memory for instructions and data, and the binary representation: the program is stored and modified like data.
:::

::: question Why do computers use binary?
Because a bit has only two states (on/off, 1/0), easy to build with relays, valves or transistors; telling two levels apart is much simpler and more reliable than telling ten apart.
:::

::: question How much information do N bits represent? What is a byte?
$2^N$ pieces of information. A byte is a group of 8 bits and represents $2^8 = 256$ pieces of information, for example the numbers from 0 to 255.
:::

::: question What are the components of the Von Neumann architecture?
The CPU (control unit, ALU and registers), the main memory (RAM) that holds both data and instructions, and the secondary memory (storage), all connected by the system bus.
:::

::: question Why is it called "Von Neumann" and which name would be more correct?
Because John von Neumann, a consultant on the project, was the first to describe and publish it, in 1945. It would be more correct to say "EDVAC architecture".
:::

::: question How does the CPU see memory? What is a word?
As a sequence of bytes, each with an address; the byte is the basic unit of addressing. A word is a group of bytes (16, 32 or 64 bits) that the processor handles in one go, because a single byte is not enough for the numbers used in calculations.
:::

::: question What do the program counter and the instruction register do?
The PC holds the address of the next instruction: usually it is incremented, or modified to perform a jump. The IR holds the instruction being executed, just loaded from memory.
:::

::: question What does it mean that the machine is deterministic?
That, given the program and the initial state, execution always produces the same final state.
:::

## Glossary

```glossary
Hardwired computer | A machine whose operating logic is built into the hardware: it does only the operations it was designed for.
Programmable computer | The same machine carries out different tasks by changing the sequence of instructions, without modifying the hardware.
Analytical Engine | Programmable machine described by Babbage around 1840: punched cards, conditional jumps.
Universal machine | Abstract model of a computer introduced by Turing in 1936 to study what is computable.
Turing-complete | Able to compute everything a universal Turing machine computes.
ENIAC | First general-purpose computer (1943–1946): decimal numbers, programmed with cables and switches.
EDVAC | Designed in 1944: stored program, unified memory for instructions and data, binary numbers.
Bit | The smallest unit of information: two states, 0 or 1. Symbol b.
Byte | 8 bits, 256 possible values. Symbol B. It is the basic unit of memory addressing.
Word | A group of 16, 32 or 64 bits that the processor handles in one go.
Address | A number that identifies one byte of memory.
CPU | Central Processing Unit: control unit, ALU and registers.
Control unit | The part of the CPU that fetches and decodes instructions and drives the other components.
ALU | Arithmetic Logic Unit: performs additions, comparisons and other elementary operations on the registers.
Register | A small memory cell inside the CPU (R0, R1, PC, IR, SP, SR…).
Program counter (PC) | Register holding the address of the next instruction.
Instruction register (IR) | Register holding the instruction being executed.
System bus | Connection between the CPU, main memory and secondary memory.
RAM | Main memory: fast, holds program and data during execution.
Operating system | The control program (once called "monitor") that loads programs and data into memory.
State of the machine | The set of values in memory and in the registers at a given instant.
Deterministic | The same program and the same initial state always give the same final state.
```

## Checklist

```checklist
- I can explain the difference between the abacus, the Pascaline and a hardwired computer.
- I can explain in my own words what a programmable computer is and why the multiplication of lesson 01A is an example of it.
- I can say what Babbage and Turing did.
- I can list the three ideas of the EDVAC and why "the program is data" is so important.
- I know how much information N bits represent and what a byte is.
- I can draw the Von Neumann diagram with the CPU (control, ALU, registers), RAM, secondary memory and bus.
- I know what an address is, why counting starts at 0 and what a 32-bit word is.
- I can describe the fetch, decode, execute cycle and the role of the PC and the IR.
- I know what it means that the machine is deterministic.
```

## Sources

- **Lesson slides**: "Storia e principi del calcolo automatico. Storia e architettura dei calcolatori dalle macchine cablate alla macchina di Von Neumann" (01B_architettura), Programming I – Theory, channel B, A.Y. 2026/27, 19 pages; the slide number is next to each heading.
- **Channels A and C**: the deck "Architettura del computer" of channel A and lesson 01 "Introduzione" of channel C on the 2026/27 Moodle pages ([channel A](https://informatica.i-learn.unito.it/course/view.php?id=3701), [channel C](https://informatica.i-learn.unito.it/course/view.php?id=3767)), checked on 30/09/2026.
- **Labs and timetables**: [course sheet](https://github.com/DonFlammer/unito-computer-science/blob/main/ai_context/PROG1/course.md).
- The **"Beyond the slides"** parts (Ada Lovelace, Turing completeness, binary, RAM and disk, SP and SR, the CPU cycle) and the exercises are additions in these notes.
