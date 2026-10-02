---
course: FDA
lesson: "01"
title: Bits, logic gates, hexadecimal and memory
date: 2026-10-01
lecturers: Stefano Berardi
eyebrow: Channel B · Lesson 01 · Book, part 1, §1.1–1.3
description: >-
  Notes on lesson 01 of Foundations of Computer Science (channel B): bits and how much can be written with n bits,
  the Boolean operations AND, OR, XOR and NOT, logic gates, the flip-flop that remembers a bit, hexadecimal notation,
  main memory (cells, addresses, RAM, kilobytes) and mass storage (magnetic and optical disks, flash memory), with
  interactive tools, quizzes and worked exercises.
lede: >-
  Inside a computer every piece of information is made of just two symbols, zero and one. Here you see how they are
  combined with four operations, how circuits carry them out, how a circuit manages to remember, how long rows of
  zeros and ones are written in short and where the computer keeps them: in main memory and in mass storage.
material: book
facts:
  Book: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, part 1 (Brookshear, ch. 1), §1.1–1.3
  Lecturer: Stefano Berardi · channel B · A.Y. 2026/27
  Study time: 3 hours, also in several sittings
source: >-
  Course textbook, part 1 (J. G. Brookshear, D. Brylow, Computer Science: an overview, ch. 1), §1.1 "Bits and Their
  Storage", §1.2 "Main Memory" and §1.3 "Mass Storage", with the answers to their questions; summary of the lesson of
  01/10/2026 on the channel B Moodle page; channel A 2026/27 slides on data encoding; exam rules common to the three
  channels
italian_file: 01_bit_porte_esadecimale.html
html_notes: notes/FDA/01_bits_gates_hexadecimal.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/lezioni/01_bit_porte_esadecimale.md
---

## In brief

- Inside a computer every piece of information, numbers, text, images and sounds, is written with just two symbols, 0 and 1. Each of these symbols is called a **bit**.
- Each extra bit doubles the possibilities: with $n$ bits you can write $2^n$ different sequences. With 8 bits, that is a **byte**, there are 256.
- **Boolean operations** combine bits: **AND** gives 1 only if both inputs are 1, **OR** if at least one is 1, **XOR** if they are different, **NOT** swaps 0 and 1. A **logic gate** is the circuit that carries out one of these operations.
- The **flip-flop** is a circuit that remembers a bit: its output stays the same until a pulse changes it. It is a first building block of memory.
- **Hexadecimal notation** writes four bits with a single symbol, from 0 to 9 and from A to F. For example 1011 0101 becomes B5.
- **Main memory** is a long row of one-byte **cells**, each with its own number, the **address**. Any cell can be reached in the same time (RAM). A **kilobyte** is 1024 bytes.
- **Mass storage**, that is magnetic disks, optical disks and flash memory, keeps data even when the computer is off. It is larger and cheaper than main memory, but slower.
- In the exam, common to the three channels, the tables of the operations and reading circuits come back: they must be known by heart.

> [!CHANNELS]
> The textbook and the exam are the same in channels A, B and C; the lecturers and the order of the lessons change. In channel B Stefano Berardi follows the book, in English, without slides of his own. His first lesson, on Monday 28/09, was an introduction to the course: these notes start from the second one, on Thursday 01/10, which covered section 1.1 of the book (bits, gates, flip-flops, hexadecimal), main memory and mass storage. That is why here it is lesson 01. The lesson summaries are on the channel B Moodle page, which requires a login. In channel A (Felice Cardone) the slides "Cenni sulla codifica dei dati" (notes on data encoding) start precisely from bits and from how many things can be labelled with $n$ bits, and other slides describe the structure of memory. Channel C (Luca Paolini) started with the slides "Azzeramento" (reset) and "Rappresentazione" (representation). Watch out: the channel B programme skips some sections of the book that the common exam may ask about (details in the [course sheet](https://github.com/DonFlammer/unito-computer-science/blob/main/ai_context/FDA/course.md)).

## Two symbols to say everything: bits (book, §1.1)

A light switch has two positions, on and off, and no third one. Inside a computer the same thing happens, billions of times: every little piece of information is in one of two states. The two states are written with two symbols, 0 and 1.

Each of these symbols is called a **bit**, short for *binary digit* (in Italian *cifra binaria*). "Binary" means "made of two".

A single bit says little: yes or no, on or off. The book insists on one point: a bit is only a **symbol**, and what it means depends on its use. The same row of bits can represent a number, a letter, a small piece of an image or of a sound. The next sections of the book explain how.

### How much a few bits can say

A bit has 2 values. With two bits there are four combinations: 00, 01, 10 and 11.

With three bits there are eight. Take the four combinations above and put a 0, or a 1, in front of them: 000, 001, 010, 011 and then 100, 101, 110, 111.

| Bits | The sequences | How many |
|--:|---|--:|
| 1 | 0, 1 | 2 |
| 2 | 00, 01, 10, 11 | 4 |
| 3 | 000, 001, 010, 011, 100, 101, 110, 111 | 8 |
| 4 | from 0000 to 1111 | 16 |
| 8 | from 00000000 to 11111111 | 256 |

Each extra bit doubles the number of sequences. For every old sequence there are two new ones: one with a 0 in front and one with a 1 in front.

> [!IDEA]
> With $n$ bits you can write $2^n$ different sequences.

> [!REFRESHER] powers of 2
> $2^n$ is read "two to the $n$" and means 2 multiplied by itself $n$ times. By convention $2^0 = 1$.
>
> | $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 |
> |---|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|
> | $2^n$ | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 1024 |

A row of 8 bits is called a **byte**: you will meet it again later, in the section on main memory. A byte can have $2^8 = 256$ different values.

### How many bits are needed

Now the opposite question, which the channel A slides ask right away: I have to give a different label to a certain number of objects. How many bits are needed, at least?

Take 5 objects. With 2 bits there are 4 labels: not enough, one object would be left without. With 3 bits there are 8 labels: enough, with 3 to spare.

> [!METHOD] How many bits are needed for a given number of objects
> 1. Write the powers of 2: 1, 2, 4, 8, 16, 32, 64, 128, 256, …
> 2. Find the first power that is greater than or equal to the number of objects.
> 3. Its exponent is the number of bits needed.

> [!EXAMPLE] Two calculations with the method
> - **The 26 letters of the English alphabet.** With 4 bits there are 16 labels: too few. With 5 bits there are 32, and $32 \ge 26$. 5 bits are needed.
> - **The 100 students in a lecture room.** With 6 bits there are 64 labels: too few. With 7 bits there are 128, and $128 \ge 100$. 7 bits are needed.

> [!NOTE] The same count as in Discrete Mathematics
> Counting sequences of bits is the same count as counting subsets in [lesson D01 of Discrete Mathematics](../MDAG/D01_sets_induction.html). Put the elements of a set in a row: each bit says whether the corresponding element is in (1) or not (0).

::: try (a) How many different sequences can be written with 5 bits? (b) How many bits are needed to give a different code to 40 people?
(a) With 5 bits the sequences are $2^5 = 32$.

(b) With 5 bits there are 32 labels, which are not enough for 40 people. With 6 bits there are 64, which are enough. 6 bits are needed.
:::

> [!REMEMBER]
> - A bit is a symbol, 0 or 1. What it means depends on its use.
> - With $n$ bits you can write $2^n$ sequences: each extra bit doubles.
> - To tell apart a given number of objects you need as many bits as the exponent of the first power of 2 that reaches at least that number.

## Four operations on bits (book, §1.1)

Four everyday situations.

- The front door has two locks: it opens only if you turn **both** keys.
- The alarm goes off if the door **or** the window is opened, and of course also if both are opened.
- The lunch menu offers dessert or fruit: you can take one **or** the other, but **not both**.
- The garden light turns on when it is **not** day.

Each of these sentences takes one or two facts, true or false, and gets another fact, true or false, from them. The book suggests reading bits exactly like this: **1 means true, 0 means false**. Operations on true and false values are called **Boolean operations** (in Italian *operazioni booleane*), after the mathematician George Boole (1815–1864).

### AND: both

The **AND** operation (Italian *e*) takes two bits and gives 1 only when **both** are 1. It is the door with two locks.

| A | B | A AND B |
|:-:|:-:|:-:|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | **1** |

The table contains all the possible combinations of the two inputs, that is $2^2 = 4$ rows. A table like this is called a **truth table** (Italian *tabella di verità*).

### OR: at least one

The **OR** operation (Italian *o*) gives 1 when **at least one** of the two bits is 1. It is the alarm: one open door or window is enough.

| A | B | A OR B |
|:-:|:-:|:-:|
| 0 | 0 | **0** |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 1 |

OR gives 0 in one case only: when both inputs are 0.

### XOR: only one

The **XOR** operation (*exclusive or*, Italian *o esclusivo*) gives 1 when **only one** of the two bits is 1. It is the menu: dessert or fruit, not both. Another way of saying it: XOR gives 1 exactly when the two bits are **different**.

| A | B | A XOR B |
|:-:|:-:|:-:|
| 0 | 0 | 0 |
| 0 | 1 | **1** |
| 1 | 0 | **1** |
| 1 | 1 | 0 |

OR and XOR differ only in the last row: with both inputs at 1, OR gives 1 and XOR gives 0.

### NOT: the opposite

The **NOT** operation (Italian *non*) takes **a single** bit and swaps it: 0 becomes 1 and 1 becomes 0. It is the garden light: on when it is not day.

| A | NOT A |
|:-:|:-:|
| 0 | 1 |
| 1 | 0 |

### All together

| A | B | A AND B | A OR B | A XOR B | NOT A |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 |

> [!PITFALL] The everyday "or"
> In everyday language "or" sometimes means OR and sometimes XOR. "Discount for students or pensioners": if you are both, you still get the discount, so it is an OR. "Coffee or tea?": usually you choose only one, so it is an XOR. In computer science OR always means "at least one, possibly both".

> [!BEYOND] · operations on rows of bits
> The same operations are done on two rows of bits of the same length, column by column. With 1100 and 1010:
>
> | | 1st column | 2nd column | 3rd column | 4th column |
> |---|:-:|:-:|:-:|:-:|
> | first row | 1 | 1 | 0 | 0 |
> | second row | 1 | 0 | 1 | 0 |
> | AND | 1 | 0 | 0 | 0 |
> | OR | 1 | 1 | 1 | 0 |
> | XOR | 0 | 1 | 1 | 0 |
>
> So 1100 AND 1010 = 1000, 1100 OR 1010 = 1110 and 1100 XOR 1010 = 0110.

::: try Calculate: (a) 1 AND 0; (b) 1 OR 0; (c) 1 XOR 1; (d) NOT 0. Then: (e) for which inputs does XOR give 1?
(a) 0: AND wants both inputs at 1, and here one is 0.

(b) 1: at least one input is 1.

(c) 0: the two inputs are equal.

(d) 1: NOT swaps 0 and 1.

(e) For 0 and 1, and for 1 and 0: when the two inputs are different.
:::

> [!REMEMBER]
> - AND: 1 only if both inputs are 1.
> - OR: 1 if at least one is 1. XOR: 1 if the two inputs are different.
> - NOT: a single input, and it gives the opposite.

## Logic gates (book, §1.1)

The operations of the previous section are ideas. To actually carry them out you need a physical object: a device with some input wires and one output wire, which produces the result of the operation. It is called a **logic gate**, in Italian *porta logica*.

The book explains that a gate can be built in many ways: with gears, with relays, with optical devices. In today's computers gates are tiny electronic circuits, and 0 and 1 are two voltage levels: low voltage for 0, high voltage for 1.

Each gate has its own drawing.

- **AND** has the shape of a D: straight at the back, round at the front.
- **OR** has the shape of a shield, with a curved back and a point at the front.
- **XOR** is the OR drawing with an extra curve at the back.
- **NOT** is a triangle with a small circle on its tip. The small circle means "invert".

Try the gates in the tool below.

```widget porte
title: The four logic gates: click the inputs A and B
mode: gates
a: 1
b: 0
```

Look at the tool: the wires that carry 1 light up. With A = 1 and B = 0 the outputs of OR and XOR light up, but not the output of AND. Now set B to 1 as well: XOR goes off and AND lights up. Try all four combinations and compare them with the table of the previous section.

### Connecting gates

The output of one gate can become the input of another. This is how circuits that do more complicated calculations are built.

An example with three inputs, which we call A, B and C:

1. A and B go into an XOR gate;
2. the output of the XOR and the input C go into an AND gate;
3. the output of the AND is the output of the circuit.

To find out what the circuit does you try every combination of the inputs. There are 3 inputs, so the combinations are $2^3 = 8$. You add a column for the XOR gate, which works first, and one for the output.

| A | B | C | A XOR B | output: (A XOR B) AND C |
|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 1 | 1 | **1** |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 1 | 1 | **1** |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 |

The output is 1 in two rows only. In words: **only one of the first two inputs is 1, and the third is 1**. It is the answer the book gives to question 1 of §1.1, about a circuit of this kind.

> [!METHOD] Reading a circuit of gates
> 1. Write all the combinations of the inputs: with $n$ inputs there are $2^n$ rows. Put them in order, as in the table above.
> 2. Add a column for each gate, starting from those attached to the inputs.
> 3. Fill in one column at a time, with the gate's table.
> 4. The last column is the output of the circuit. At the end, describe it in words.

A circuit like this has an important property: its output depends **only** on the inputs at that moment. If the inputs change, the output changes straight away. In the next section you see a circuit that behaves differently.

::: try In the circuit above, what comes out with A = 1, B = 1 and C = 1? And with A = 0, B = 1 and C = 1?
With A = 1, B = 1 and C = 1: the XOR receives two equal inputs and gives 0. The AND receives 0 and 1 and gives 0. The output is 0.

With A = 0, B = 1 and C = 1: the XOR receives two different inputs and gives 1. The AND receives 1 and 1 and gives 1. The output is 1.
:::

> [!REMEMBER]
> - A logic gate is a circuit that carries out a Boolean operation: AND, OR, XOR or NOT.
> - Connecting gates builds circuits. To understand what they do, you write the table with all the combinations of the inputs.

## A circuit that remembers: the flip-flop (book, §1.1)

The gates seen so far remember nothing. Their output depends only on the inputs at that moment: when the input changes, the output changes. To build a memory you need a circuit that keeps a bit even when the inputs go back to 0.

The book calls **flip-flop** a circuit with an output that is 0 or 1 and that **stays the same** until a **pulse** makes it change. A pulse is an input that goes to 1 for an instant and then back to 0 (in Italian *impulso*), like when you press and release a button.

### How it is made

The flip-flop of figure 1.3 of the book has two inputs, an upper one and a lower one, and three gates.

1. The upper input goes into an **OR** gate.
2. The output of the OR goes into an **AND** gate.
3. The lower input passes through a **NOT** gate and goes into the AND.
4. The output of the AND is the output of the flip-flop. But it **also goes back**, and enters the OR as its second input.

The wire that goes back is the trick. Try it in the tool.

```widget porte
title: The flip-flop of figure 1.3: try the pulses
mode: flipflop
```

Look at what happens with the pulses.

1. **At the start** the inputs are 0 and the output is 0.
2. **Pulse on the upper input.** The OR receives 1 and gives 1. The NOT receives 0 from the lower input and gives 1. The AND receives 1 and 1: the output becomes 1.
3. **End of the pulse.** The upper input goes back to 0, but the OR still receives the output, which is 1, and keeps giving 1. So the output **stays 1**: the circuit remembers the pulse.
4. **Pulse on the lower input.** The NOT receives 1 and gives 0. The AND receives a 0 and gives 0: the output becomes 0. Now the OR receives 0 from the upper input and 0 from the output, and gives 0.
5. **End of the pulse.** The NOT goes back to giving 1, but the OR gives 0, so the AND keeps giving 0. The output **stays 0**.

The same story in a table. Each row has the values after the circuit has settled.

| Moment | Upper | Lower | OR | NOT | AND, that is the output |
|---|:-:|:-:|:-:|:-:|:-:|
| at the start | 0 | 0 | 0 | 1 | 0 |
| pulse on the upper input | 1 | 0 | 1 | 1 | **1** |
| end of the pulse | 0 | 0 | 1 | 1 | **1** |
| pulse on the lower input | 0 | 1 | 0 | 0 | **0** |
| end of the pulse | 0 | 0 | 0 | 1 | **0** |

Compare the second and the third rows: the inputs go back to what they were at the start, but the output does not. The output and the OR keep each other on, until the pulse on the lower input breaks the loop.

> [!IDEA]
> A pulse on the upper input sets the output to 1, a pulse on the lower input sets it to 0. Between one pulse and the next the output stays as it is: the flip-flop **remembers a bit**.

> [!NOTE] Another way to build it
> The book also shows a second flip-flop (figure 1.5), with two OR gates and two NOT gates. The idea is the same: an output that goes back and holds itself. Question 3 of §1.1 tells the story.

The flip-flop is one of the ways of storing a bit inside a computer. How memory, made of very many bits, is organised you see later, in the section on main memory.

::: try (a) The flip-flop has output 1 and a pulse arrives on the upper input. What happens? (b) It has output 1 and a pulse arrives on the lower input. What happens?
(a) Nothing new. During the pulse the OR receives 1 from the input and 1 from the output, and gives 1; the NOT gives 1; the AND gives 1. After the pulse the output stays 1.

(b) The NOT receives 1 and gives 0, so the AND gives 0: the output becomes 0, and stays 0 after the pulse too.
:::

> [!REMEMBER]
> - The flip-flop has an output that stays the same until a pulse changes it.
> - Pulse on the upper input: output 1. Pulse on the lower input: output 0.
> - The secret is the wire that takes the output back to the input of the OR.

## Writing bits in short: hexadecimal (book, §1.1)

Try reading this row of bits aloud: 0110101011110010. It is easy to get lost: sixteen digits, all 0 or 1. The book calls a row of bits a **string** of bits, and a very long string a **stream**.

The trick is to split the row into groups of four bits, and to write each group with a single symbol:

$$0110\ \ 1010\ \ 1111\ \ 0010 \quad\longrightarrow\quad 6\ \ \text{A}\ \ \text{F}\ \ 2$$

Four bits have $2^4 = 16$ combinations, so 16 symbols are needed. The digits from 0 to 9 and the letters from A to F are used. This way of writing is called **hexadecimal notation** (Italian *notazione esadecimale*), from "sixteen".

| Bits | Digit | | Bits | Digit |
|:-:|:-:|---|:-:|:-:|
| 0000 | 0 | | 1000 | 8 |
| 0001 | 1 | | 1001 | 9 |
| 0010 | 2 | | 1010 | A |
| 0011 | 3 | | 1011 | B |
| 0100 | 4 | | 1100 | C |
| 0101 | 5 | | 1101 | D |
| 0110 | 6 | | 1110 | E |
| 0111 | 7 | | 1111 | F |

There is a help for remembering the table. The four positions of the group are worth, from the left, 8, 4, 2 and 1. Add up the values of the positions where there is a 1. For example 1011 gives $8 + 2 + 1 = 11$. Then the numbers from 10 to 15 are written with letters: A is 10, B is 11, and so on up to F, which is 15. So 1011 is written B. Why it works you see in [lesson 02](02_text_colours_sounds_binary.html), on numbers in base 2 (section 1.5 of the book).

> [!METHOD] From bits to hexadecimal, and back
> **From bits to hexadecimal.**
> 1. Split the row into groups of four bits, starting from the right. If the first group on the left has fewer than four bits, add 0s in front.
> 2. Write the digit of each group with the table.
> 3. Put the digits one after the other, in the same order.
>
> **From hexadecimal to bits.** Write each digit with its four bits, **including the 0s in front**, and put them in a row.

> [!EXAMPLE] Two conversions
> **10110101 in hexadecimal.** The groups are 1011 and 0101. With the table 1011 is B and 0101 is 5. The result is B5.
>
> **5FD97 in bits.** The digits are 5, F, D, 9 and 7. With the table they become 0101, 1111, 1101, 1001 and 0111. In a row: 01011111110110010111, that is 20 bits.

In the tool below you can change the bits with a click and see the digits change.

```widget porte
title: Sixteen bits and their four hexadecimal digits
mode: hexadecimal
bit: 0110101011110010
```

> [!PITFALL] Each digit is worth four bits, 0 included
> The hexadecimal string 0100 means 0000 0001 0000 0000: sixteen bits, not the three bits "100". Each digit, zeros included, becomes a whole group of four bits.

::: try (a) Write the row 11100001 in hexadecimal. (b) Write the hexadecimal string 3C in bits.
(a) The groups are 1110 and 0001. With the table they are E and 1. The result is E1.

(b) 3 is 0011 and C is 1100. The result is 00111100.
:::

> [!REMEMBER]
> - A hexadecimal digit is worth four bits: from 0000, that is 0, to 1111, that is F.
> - To go to hexadecimal, make groups of four bits starting from the right. To go back to bits, write each digit with four bits, zeros included.

## Main memory (book, §1.2)

Imagine a very tall chest of drawers, with identical drawers one above the other. On each drawer there is a number: 0, 1, 2, 3, and so on. In each drawer there is room for a row of 8 bits. The main memory of a computer is made exactly like this.

To store data, a computer has a great many circuits like the flip-flop, each able to hold one bit. All together they form the **main memory** (Italian *memoria centrale*).

### Cells and bytes

The bits of main memory are not scattered: they are grouped into **cells** (Italian *celle*). Usually a cell holds 8 bits, that is a **byte**. A microwave oven may have a few hundred cells; a computer today has billions.

Inside a cell the bits are in a row. The book calls the left end the **high-order end** (Italian *estremo alto*) and the right end the **low-order end** (Italian *estremo basso*). The bit at the high-order end is called the **most significant bit** (Italian *bit più significativo*), the one at the low-order end the **least significant bit** (Italian *bit meno significativo*).

| Position | 1st | 2nd | 3rd | 4th | 5th | 6th | 7th | 8th |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| A cell | **1** | 0 | 0 | 1 | 0 | 1 | 1 | **0** |
| Name | most significant | | | | | | | least significant |

The names come from numbers in base 2, which you see in [lesson 02](02_text_colours_sounds_binary.html): the leftmost bit is the one that weighs the most.

### Addresses

Each cell has a number that identifies it, like the street number of a house: it is its **address** (Italian *indirizzo*). Addresses start from 0 and grow one by one. So the cells have an order, and you can talk about the next cell or the previous one.

The order is also used to store rows of bits longer than a byte: neighbouring cells are used. For example sixteen bits take two consecutive cells.

You can do two things with a cell.

- **Read it**: its content is copied, and the cell stays as it was.
- **Write to it**: a new value is put into the cell. The previous value is lost.

> [!EXAMPLE] Writing or copying (question 1 of §1.2)
> Cell 5 holds the value 8. Writing the value 5 into cell 6 means that cell 6 holds 5. Copying the content of cell 5 into cell 6 means that cell 6 holds 8. In both cases cell 5 stays as it was.

Try the two operations in the tool below. Then try to swap the contents of two cells, as question 2 of §1.2 asks: copying cell 2 into 3 and then 3 into 2 does not work. Why? And how do you do it?

```widget porte
title: A small memory of eight cells: write and copy
mode: memory
```

### Random access: RAM

Main memory is also called **RAM**, for *random access memory* (Italian *memoria ad accesso casuale*). "Random" here means that any cell can be reached, in any order, in the same time. On an old cassette tape, instead, to listen to the fifth song you have to wind the tape up to it.

Many RAMs today hold the bits as tiny electric charges, which fade quickly. A circuit refreshes them many times a second. That is why they are called **dynamic RAM** (DRAM). RAM also has a limit: when the computer is switched off it loses all its content.

### How large a memory is

Cells are counted with powers of 2, because addresses are written with bits: with 10 bits you can number $2^{10} = 1024$ cells. That is why memories often have sizes like 1024 or 4096 cells.

The number 1024 is close to 1000, so 1024 bytes are called a **kilobyte** (KB). Then it goes on in the same way: 1024 KB make a **megabyte** (MB) and 1024 MB make a **gigabyte** (GB).

| Name | Abbreviation | Bytes | As a power of 2 |
|---|---|--:|:-:|
| kilobyte | KB | 1,024 | $2^{10}$ |
| megabyte | MB | 1,048,576 | $2^{20}$ |
| gigabyte | GB | 1,073,741,824 | $2^{30}$ |

> [!PITFALL] Does kilo mean 1000 or 1024?
> Outside computer science "kilo" means exactly 1000, and disk sellers often count that way too: a 1 GB disk may have 1,000,000,000 bytes. To remove the doubt, the names **kibibyte** (KiB), **mebibyte** (MiB) and **gibibyte** (GiB) were introduced in 1998: they always mean 1024 bytes, $2^{20}$ bytes and $2^{30}$ bytes. In these lessons, as in the book, for memory KB means 1024 bytes.

> [!EXAMPLE] How many bits there are in 4 KB (question 3 of §1.2)
> A kilobyte is 1024 bytes, so 4 KB are $4 \cdot 1024 = 4096$ bytes. Each byte has 8 bits: in all $4096 \cdot 8 = 32768$ bits.

::: try (a) How many bytes are there in 2 KB? And how many bits? (b) With 12-bit addresses, how many cells can be numbered?
(a) 2 KB are $2 \cdot 1024 = 2048$ bytes, that is $2048 \cdot 8 = 16384$ bits.

(b) With 12 bits you can write $2^{12} = 4096$ different addresses, from 0 to 4095: 4096 cells can be numbered, that is 4 KB of memory if each cell is a byte.
:::

> [!REMEMBER]
> - Main memory is a row of one-byte cells. Each cell has an address, from 0 upwards.
> - Reading a cell does not change it; writing to it erases the previous value.
> - In RAM any cell can be reached in the same time. When the computer is switched off, RAM loses everything.
> - 1 KB = 1024 bytes, 1 MB = 1024 KB, 1 GB = 1024 MB.

## Mass storage (book, §1.3)

When you switch the computer off and on again, your files are still there. Yet main memory loses everything when it is switched off. The files are somewhere else: in **mass storage** (Italian *memorie di massa*), also called secondary memory.

Compared with main memory, mass storage has three advantages and one drawback.

- It keeps data even without power.
- It is much larger.
- It costs much less per byte, and it can often be removed and carried away.
- But it is slower. Many devices have moving parts, like a spinning disk, and a mechanical movement is very slow compared with electronic circuits.

The book presents three families: magnetic disks, optical disks and flash memory.

### Magnetic disks

A **hard disk** (Italian *disco rigido*) is made of thin disks covered with magnetic material, spinning very fast one above the other. Above each surface there is a **read/write head** (Italian *testina di lettura e scrittura*), which writes bits by magnetising small areas of the surface and reads them by sensing how they are magnetised.

If the head stays still, the spinning disk passes under it along a circle. Moving the head towards the centre or towards the edge, you go to a different circle.

- Each circle is called a **track** (Italian *traccia*): the tracks are circles with the same centre, one inside the other.
- Each track is divided into arcs called **sectors** (Italian *settori*). All sectors hold the same number of bits, for example 512 bytes or a few KB.
- The heads of all the surfaces move together. The tracks that lie one above the other, at the same distance from the centre, form a **cylinder** (Italian *cilindro*).

Marking tracks and sectors on a new disk is called **formatting** it.

To know how fast a disk is, you look at four measures.

- **Seek time** (Italian *tempo di ricerca*): the time needed to move the heads from one track to another.
- **Rotation delay** or **latency time** (Italian *ritardo di rotazione*, *latenza*): the time spent waiting for the right sector to arrive under the head. On average it is half a turn of the disk.
- **Access time** (Italian *tempo di accesso*): the sum of the two previous times.
- **Transfer rate** (Italian *velocità di trasferimento*): how many bits per second can be read or written.

> [!EXAMPLE] The rotation delay of a disk
> A disk makes 7200 turns per minute, that is $7200 : 60 = 120$ turns per second. One turn therefore lasts $1/120$ of a second, about 8.3 thousandths of a second. On average you wait half a turn: about 4.2 thousandths of a second. It seems little, but in that time a processor performs millions of operations.

> [!NOTE] Magnetic tapes
> There are also magnetic tapes, similar to old cassettes. To reach a piece of data you have to wind the tape up to it, so they are very slow. They are still used for backup copies of very large archives.

### Optical disks: CD, DVD and Blu-ray

A **CD** (*compact disk*) is a 12-centimetre disk with a surface that reflects light, protected by a layer of plastic. The bits are tiny irregularities of the surface: a laser lights them up and a sensor detects how the light comes back.

Unlike magnetic disks, the data lie on a single **spiral** track. The spiral starts from the centre and reaches the edge, like the groove of an old vinyl record, and it is divided into sectors.

- A CD holds from 600 to 700 MB.
- A **DVD** (*digital versatile disk*) has the same size, but several semi-transparent layers one above the other: it holds several GB.
- A **Blu-ray** (BD) uses a blue-violet laser instead of a red one. The beam is thinner and the bits are closer together: it holds more than five times as much as a DVD.

The spiral is very good for long data read from beginning to end, like music and films. To jump to any piece of data, instead, it is slow: there are no tracks to reach with a single movement.

### Flash memory

**Flash memory** (Italian *memorie flash*) means USB sticks, the SD cards of cameras and solid-state disks. It has no moving parts. Bits are written with electric signals that trap electrons in tiny cells of silicon dioxide; there the electrons stay for years, even without power.

Without moving parts it is fast, silent and does not fear knocks. It has a limit, though: each time a cell is erased it wears a little, and after many rewrites it stops working. That is why it is not suitable as main memory, which is rewritten all the time.

A **solid-state disk** (SSD, Italian *disco a stato solido*) is a flash memory large enough to take the place of the hard disk. It is faster, silent and sturdy. It costs more per GB, though, and that is why magnetic disks are still used.

| | Magnetic disks | Optical disks | Flash memory |
|---|---|---|---|
| How a bit is written | by magnetising a spot of the surface | by changing how the surface reflects light | by trapping electrons in small cells |
| Moving parts | yes: disks and heads | yes: disk and laser | no |
| How the data lie | concentric tracks, sectors, cylinders | a single spiral track | electronic cells |
| Strong points | lots of space, low cost per byte | cheap and easy to carry | fast, sturdy, silent |
| Weak points | slow compared with RAM | slow at jumping from one piece of data to another | cost more, wear out when rewritten |

::: try (a) A disk makes 6000 turns per minute. What is the average rotation delay? (b) Why does a USB stick have no seek time?
(a) 6000 turns per minute are $6000 : 60 = 100$ turns per second: one turn lasts $1/100$ of a second, that is 10 thousandths. On average you wait half a turn: 5 thousandths of a second.

(b) The seek time is the time to move the heads from one track to another. A USB stick is a flash memory: it has no heads and no moving parts.
:::

> [!REMEMBER]
> - Mass storage keeps data even with the computer off, it is large and cheap, but slower than main memory.
> - Magnetic disk: concentric tracks divided into sectors; the tracks one above the other form a cylinder. Access time = seek time + rotation delay.
> - CD, DVD and Blu-ray: a single spiral track read by a laser. Blu-ray uses a blue-violet laser and holds more.
> - Flash memory and SSDs: no moving parts, fast and sturdy, but they wear out when rewritten.

## The symbols of this lesson

| Symbol | Read as | It means | Example |
|---|---|---|---|
| $0$, $1$ | "zero", "one" | the two values of a bit; as truth values, false and true | 1 AND 1 = 1 |
| bit | "bit" | a binary digit, 0 or 1 | 1 |
| byte | "byte" | a row of 8 bits | 01001000 |
| $2^n$ | "two to the $n$" | how many different sequences can be written with $n$ bits | $2^8 = 256$ |
| AND | "and" | 1 only if both inputs are 1 | 1 AND 0 = 0 |
| OR | "or" | 1 if at least one input is 1 | 1 OR 0 = 1 |
| XOR | "ex-or" | 1 if the two inputs are different | 1 XOR 1 = 0 |
| NOT | "not" | the opposite of the input | NOT 0 = 1 |
| $\land$, $\lor$, $\oplus$, $\lnot$ | "and", "or", "exclusive or", "not" | the same operations written as in logic (part 2 of the book) | $1 \land 0 = 0$ |
| A, B, C, D, E, F | "a", "b", "c", "d", "e", "f" | the hexadecimal digits worth 10 to 15 | B = 1011 |
| $1011_2$, $\text{B}_{16}$ | "1011 in base two", "B in base sixteen" | the small number at the bottom says in which base the number is written ([lesson 02](02_text_colours_sounds_binary.html)) | $1011_2 = \text{B}_{16}$ |
| KB, MB, GB | "kilobyte", "megabyte", "gigabyte" | for memory: $2^{10}$, $2^{20}$ and $2^{30}$ bytes | 4 KB = 4096 bytes |
| KiB, MiB, GiB | "kibibyte", "mebibyte", "gibibyte" | the same values, with names that leave no doubt | 1 KiB = 1024 bytes |
| RAM | "ram" | main memory, with random access (*random access memory*) | 8 GB of RAM |
| SSD | "ess-ess-dee" | solid-state disk, made of flash memory | a 512 GB SSD |

## Towards the exam

The **Foundations of Computer Science** exam is a written test on the Moodle Esami platform, with Safe Exam Browser, and it is **the same for channels A, B and C**. The rules apply to the exam sessions from January to September 2027.

**How the exam works**

- **Part 1: 9 quiz questions** with closed answers in 45 minutes, worth 3 points each, so at most 27. To pass you need **at least 18 points**: 17.5 is rounded up to 18.
- **Part 2, optional: an open question** in 30 minutes, worth **from −1 to 6 points**. You can take it only with **at least 24 points** in the quiz, counted before rounding. A very wrong answer is worth −1: if you do not know what to write, leave it blank.
- Above 30 points the grade is 30 cum laude. During the exam do not change page: Safe Exam Browser locks the exam.

| Exam session 2026/27 | Registration | Time |
|---|---|---|
| Fri 29/01/2027 | 09/01 – 22/01/2027 | 9:00 |
| Thu 18/02/2027 | 29/01 – 11/02/2027 | 9:00 |

All the details are in the [course sheet](https://github.com/DonFlammer/unito-computer-science/blob/main/ai_context/FDA/course.md).

**What you need from this lesson**

1. **The tables of the operations.** In the 2023/24 exam simulations two kinds of quiz question come back. One asks for the Boolean formula of a truth table; the other gives a circuit, combinational or sequential, and asks what function it computes. These are the ideas of this lesson, taken up again later with Boolean algebras and circuits (chapter 11 of part 2 of the book).
2. **Reading a circuit.** The method with the table of all the combinations of the inputs works for any circuit of gates.
3. **Bits and powers of 2.** How many sequences with $n$ bits and how many bits are needed: these are calculations that come back with the representation of numbers.
4. **Hexadecimal.** It comes back with the conversions between bases of [lesson 02](02_text_colours_sounds_binary.html).
5. **Main memory and mass storage.** They do not appear in the quiz questions of the 2023/24 simulations, but sections 1.2 and 1.3 are in the common map of the book. You need the ideas (cells, addresses, RAM, tracks, sectors, flash) and the calculations with powers of 2, like the bits of 4 KB.

The quiz is in Italian and the book is in English: learn the names in both languages. The glossary at the end puts them side by side. On the exam page (Moodle Esami, id 2673) there are also review quizzes split by lesson.

> [!EXAM] Five minutes per question
> In the first part you have 45 minutes for 9 quiz questions: 5 minutes per question. The tables of AND, OR, XOR and NOT and the hexadecimal table must be known by heart, without having to rebuild them during the exam.

**Mistakes to avoid**

- Confusing OR and XOR in the row with both inputs at 1: OR gives 1, XOR gives 0.
- Forgetting a combination of the inputs: with 3 inputs there are 8 rows, not 6.
- Thinking that the flip-flop goes back to 0 by itself when the pulse ends: that is exactly what it does not do.
- In hexadecimal, dropping the 0s in front of a digit: 1 is 0001, not 1.
- Forgetting that a byte has 8 bits, or that for memory a KB has 1024 bytes: 4 KB are $4 \cdot 1024 \cdot 8 = 32768$ bits.
- Believing that the access time of a disk is only the seek time: the rotation delay must be added.

## Quiz

```quiz
Q: How many different sequences can be written with 6 bits?
- $6$
- $12$
- $36$
+ $64$
- $128$
= Each extra bit doubles the sequences: with 6 bits there are $2^6 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 64$. The answer $12$ comes from $6 \cdot 2$ instead of multiplying 2 by itself 6 times. The answer $36$ is $6 \cdot 6$, a calculation that has nothing to do with it. The answer $128$ is the count for 7 bits.

Q: How many bits are needed, at least, to give a different code to each of the 30 students in a lab?
- $4$
+ $5$
- $6$
- $15$
- $30$
= With 4 bits there are $2^4 = 16$ codes, not enough for 30 students. With 5 bits there are $2^5 = 32$, which are enough. So 5 bits are needed. The answer $6$ works, but it is not the minimum. The answers $15$ and $30$ forget that each bit doubles the codes.

Q: For which values of A and B does A XOR B give 1?
- Only for A = 1 and B = 1.
- Only for A = 0 and B = 0.
+ For A = 0 and B = 1, and for A = 1 and B = 0.
- In all cases except A = 0 and B = 0.
- In all cases except A = 1 and B = 1.
= XOR gives 1 exactly when the two inputs are different, that is in the two rows with a 0 and a 1. The answer "in all cases except A = 0 and B = 0" describes OR, and it is the most tempting: OR gives 1 also with both inputs at 1, XOR does not. "Only for A = 1 and B = 1" describes AND.

Q: With A = 1 and B = 0, what is NOT (A AND B)?
- $0$
+ $1$
- It depends on the order of the inputs.
- It cannot be calculated: NOT has only one input.
- $10$
= First you calculate the brackets: 1 AND 0 = 0, because AND wants both inputs at 1. Then NOT 0 = 1. NOT does have a single input, but here its input is the result of the brackets, a single bit. The order of the inputs of AND does not matter: 1 AND 0 and 0 AND 1 both give 0.

Q: In the circuit (A XOR B) AND C, which combination of inputs gives output 1?
- A = 1, B = 1, C = 1
- A = 0, B = 0, C = 1
+ A = 1, B = 0, C = 1
- A = 0, B = 1, C = 0
- A = 1, B = 0, C = 0
= The output is 1 when the XOR gives 1, that is A and B are different, and C is 1 too. Only A = 1, B = 0, C = 1 meets both conditions. With A = 1, B = 1, C = 1, the most tempting answer, the XOR receives two equal inputs and gives 0, so the output is 0. With C = 0 the AND always gives 0.

Q: The flip-flop of figure 1.3 has output 1. A pulse arrives on the upper input, which then goes back to 0. What is the output after the pulse?
- $0$, because the upper input has gone back to 0.
+ $1$, because the output goes back to the OR and keeps it at 1.
- $0$, because every pulse swaps the output.
- It depends on how long the pulse lasted.
- It cannot be known without knowing the lower input.
= The output was already 1. During the pulse the OR receives 1, the NOT gives 1 because the lower input is 0, and the AND gives 1. When the pulse ends, the OR still receives the output, which is 1, and the output stays 1. The first answer is the most tempting: it would hold for an ordinary gate, which does not remember, but not for a flip-flop. The lower input stays at 0, as in all the book's examples.

Q: How is the row of bits 11010011 written in hexadecimal notation?
- $\text{C}3$
+ $\text{D}3$
- $\text{D}6$
- $\text{B}3$
- $211$
= The groups of four bits are 1101 and 0011. With the table, 1101 is D, because $8 + 4 + 1 = 13$, and 0011 is 3, because $2 + 1 = 3$. The result is D3. C is 1100, B is 1011: the answers with C or B get one bit of the first group wrong. The answer $211$ is the value of the number in base ten, which is not asked here.

Q: Which row of bits represents the hexadecimal string 7E?
- $0111\ 1101$
+ $0111\ 1110$
- $111\ 1110$
- $1110\ 0111$
- $0111\ 1111$
= Each digit becomes four bits: 7 is 0111 and E is 1110. In a row it gives 0111 1110. The answer with only 7 bits forgets the 0 in front of the 7: each digit is always worth four bits. The answer 1110 0111 swaps the order of the digits. 1101 is D, not E.

Q: How many hexadecimal digits are needed to write a row of 24 bits?
N: 6
= Each hexadecimal digit is worth four bits, so you need $24 : 4 = 6$ digits. For example the string E85517 of §1.1 is made of 24 bits.

Q: How many bits are there in a 2 KB memory?
- $2000$
- $2048$
- $16000$
+ $16384$
- $16$
= 2 KB are $2 \cdot 1024 = 2048$ bytes, and each byte has 8 bits: $2048 \cdot 8 = 16384$. The answer $2048$ counts the bytes, not the bits. The answer $16000$ uses 1000 instead of 1024: for memory a KB is 1024 bytes.

Q: Cells 2 and 3 hold two different values. Which sequence of steps swaps their contents?
- Copy cell 2 into 3, then copy cell 3 into 2.
- Copy cell 3 into 2, then copy cell 2 into 3.
+ Copy cell 2 into 1, then cell 3 into 2, then cell 1 into 3.
- Copy cell 2 into 1, then cell 1 into 3, then cell 3 into 2.
- It cannot be done: copying a cell always erases the source cell.
= A spare cell is needed, here cell 1. You put aside the value of cell 2, then copy 3 into 2, and finally bring into 3 the value put aside. The first two answers lose a value at the first step: at the end the two cells hold the same value. The fourth copies into 3 the value of 2 before saving the value of 3, which is lost. The last one is false: copying reads the source cell without changing it.

Q: A magnetic disk must read a sector that lies on another track. What do you add up to get the access time?
+ The seek time and the rotation delay.
- The seek time and the transfer rate.
- The rotation delay and the transfer rate.
- Nothing: it is only the seek time, because the disk is always spinning.
- Nothing: it is only the rotation delay, because the heads do not move.
= First the heads move to the right track (seek time), then you wait for the sector to arrive under the head (rotation delay): the access time is the sum of the two. The transfer rate is another measure, in bits per second: it says how fast you read once you have arrived.

Q: Which memory has no moving parts but wears out after many rewrites?
- The magnetic hard disk.
- The CD.
- The Blu-ray.
+ Flash memory, like that of a USB stick or an SSD.
- Magnetic tape.
= Flash memory writes bits by trapping electrons in small cells, without disks or heads. Each erasure damages the cells a little, so after many rewrites they stop working. Hard disks, CDs, Blu-rays and tapes all have moving parts.
```

## Exercises

::: exercise basic Bits and powers of 2
(a) How many different sequences can be written with 3 bits? And with 10 bits? (b) How many bits are needed, at least, to give a different code to 1000 objects? And to 2 objects?
::: solution
1. With 3 bits the sequences are $2^3 = 8$.
2. With 10 bits there are $2^{10} = 1024$.
3. For 1000 objects: with 9 bits there are $2^9 = 512$ labels, too few. With 10 bits there are 1024, which are enough. 10 bits are needed.
4. For 2 objects 1 bit is enough: one gets 0, the other 1.

Check of point 3: $512 < 1000$ and $1000 \le 1024$.
:::

::: exercise basic The tables of the operations
Calculate: (a) 0 AND 1; (b) 0 OR 0; (c) 0 XOR 1; (d) NOT 1; (e) (1 OR 0) AND 1; (f) NOT (0 OR 0).
::: solution
1. (a) 0: AND wants both inputs at 1.
2. (b) 0: no input is 1.
3. (c) 1: the inputs are different.
4. (d) 0: NOT swaps 1 with 0.
5. (e) First the brackets: 1 OR 0 = 1. Then 1 AND 1 = 1.
6. (f) First the brackets: 0 OR 0 = 0. Then NOT 0 = 1.
:::

::: exercise basic Question 5 of §1.1: from bits to hexadecimal
Write these rows of bits in hexadecimal notation: (a) 0110101011110010; (b) 111010000101010100010111; (c) 01001000.
::: solution
1. (a) The groups are 0110, 1010, 1111 and 0010. With the table: 6, A, F and 2. The result is 6AF2.
2. (b) The groups are 1110, 1000, 0101, 0101, 0001 and 0111. With the table: E, 8, 5, 5, 1 and 7. The result is E85517.
3. (c) The groups are 0100 and 1000. With the table: 4 and 8. The result is 48.

These are the answers given by the book. Check of (c) backwards: 4 is 0100 and 8 is 1000, and in a row it gives 01001000 again.
:::

::: exercise basic Question 6 of §1.1: from hexadecimal to bits
Which rows of bits do these hexadecimal strings represent? (a) 5FD97; (b) 610A; (c) ABCD; (d) 0100.
::: solution
Each digit becomes four bits, zeros included.

| String | The digits in bits | Row of bits |
|---|---|---|
| 5FD97 | 0101 · 1111 · 1101 · 1001 · 0111 | 01011111110110010111 |
| 610A | 0110 · 0001 · 0000 · 1010 | 0110000100001010 |
| ABCD | 1010 · 1011 · 1100 · 1101 | 1010101111001101 |
| 0100 | 0000 · 0001 · 0000 · 0000 | 0000000100000000 |

These are the answers given by the book. In the last row the string has four digits, so there are sixteen bits: it is the trap of the section on hexadecimal.
:::

::: exercise intermediate Question 1 of §1.1: when the output is 1
A circuit has three inputs. The first two go into an XOR gate; the output of the XOR and the third input go into an AND gate, which gives the output of the circuit. For which inputs is the output 1?
::: solution
1. There are 3 inputs, so the combinations to try are $2^3 = 8$.
2. The AND gives 1 only if both its inputs are 1: the XOR must give 1 and the third input must be 1.
3. The XOR gives 1 when the first two inputs are different: 0 and 1, or 1 and 0.
4. So the right combinations are two: (0, 1, 1) and (1, 0, 1).

In words, as in the book's answers: one and only one of the first two inputs must be 1, and the third must be 1. The full table is in the section on logic gates.
:::

::: exercise intermediate A circuit that acts like an OR
A circuit passes A and B each through a NOT gate. The two outputs go into an AND gate, and the output of the AND passes through another NOT gate. Write the table of the circuit: which single gate is it equivalent to?
::: solution
The circuit computes NOT ((NOT A) AND (NOT B)). One column for each gate:

| A | B | NOT A | NOT B | (NOT A) AND (NOT B) | output |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 1 | 1 | 1 | 0 |
| 0 | 1 | 1 | 0 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 | 1 |
| 1 | 1 | 0 | 0 | 0 | 1 |

The last column is the same as that of A OR B: the circuit is equivalent to a single OR gate.

The reason in words: the central AND gives 1 only when A and B are both 0. The final NOT flips it: the output is 0 only in that case, that is it is 1 when at least one input is 1. It is one of De Morgan's laws, which come back in part 2 of the book.
:::

::: exercise intermediate A circuit that acts like an XOR
A circuit computes (A OR B) AND (NOT (A AND B)). Write the table: which single gate is it equivalent to?
::: solution
| A | B | A OR B | A AND B | NOT (A AND B) | output |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 1 | 0 |
| 0 | 1 | 1 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 1 | 0 | 0 |

The last column is the same as that of A XOR B: the circuit is equivalent to an XOR gate.

The reason in words: "at least one is 1" and "not both are 1" together mean "exactly one is 1".
:::

::: exercise intermediate A story of pulses
The flip-flop of figure 1.3 starts with output 0. These pulses arrive, one after the other: upper, upper, lower, lower, upper. What is the output after each pulse?
::: solution
1. Pulse on the upper input: the output becomes 1.
2. Pulse on the upper input: the output was already 1 and stays 1.
3. Pulse on the lower input: the output becomes 0.
4. Pulse on the lower input: the output was already 0 and stays 0.
5. Pulse on the upper input: the output becomes 1.

The sequence of outputs is 1, 1, 0, 0, 1. The output after a pulse depends only on which input received it, not on how many times. You can replay the story in the flip-flop tool.
:::

::: exercise hard Question 2 of §1.1: what happens inside
The flip-flop of figure 1.3 has output 1, and the upper input is held at 0. A 1 arrives on the lower input, which then goes back to 0. Tell in order what happens to the gates.
::: solution
1. The NOT receives 1 and gives 0.
2. The AND receives 0 from the NOT, so it gives 0, whatever comes from the OR. The output of the flip-flop becomes 0.
3. The output goes back to the OR, which now receives 0 from the upper input and 0 from the output: the OR gives 0 too.
4. When the lower input goes back to 0, the NOT goes back to giving 1. But the AND receives 0 from the OR, so it keeps giving 0.
5. The output stays 0 even after the pulse.

It is the same account as in the book's answers: the key point is step 3, where the OR switches off and no longer switches the AND back on.
:::

::: exercise exam A circuit for equality
You need a circuit with two inputs that gives 1 exactly when the two inputs are **equal**. Choose among: (a) A AND B; (b) A OR B; (c) NOT (A XOR B); (d) NOT (A OR B); (e) A XOR B. Justify the choice with a table.
::: solution
| A | B | required | A AND B | A OR B | NOT (A XOR B) | NOT (A OR B) | A XOR B |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 1 | 0 | 0 | **1** | 1 | 0 |
| 0 | 1 | 0 | 0 | 1 | **0** | 0 | 1 |
| 1 | 0 | 0 | 0 | 1 | **0** | 0 | 1 |
| 1 | 1 | 1 | 1 | 1 | **1** | 0 | 0 |

1. XOR gives 1 when the inputs are different. Its opposite, NOT (A XOR B), gives 1 when they are equal: it is the required column. The answer is (c).
2. A AND B gets the first row wrong: two 0s are equal, but AND gives 0.
3. NOT (A OR B) gets the last row wrong: two 1s are equal, but it gives 0.
4. A OR B and A XOR B get several rows wrong.
:::

::: exercise basic Questions 1 and 3 of §1.2: writing, copying, counting bits
(a) The cell with address 5 holds the value 8. What is the difference between writing the value 5 into cell 6 and copying the content of cell 5 into cell 6? (b) How many bits are there in a 4 KB memory?
::: solution
1. (a) Writing the value 5, cell 6 holds 5. Copying cell 5, cell 6 holds 8, the value that is in cell 5. In both cases cell 5 does not change, and the previous value of cell 6 is lost.
2. (b) 4 KB are $4 \cdot 1024 = 4096$ bytes.
3. Each byte has 8 bits: $4096 \cdot 8 = 32768$ bits.

These are the answers the book gives. Check of (b) with powers of 2: $4 = 2^2$, $1024 = 2^{10}$ and $8 = 2^3$, so the bits are $2^{2+10+3} = 2^{15} = 32768$.
:::

::: exercise intermediate Question 2 of §1.2: swapping two cells
You want to swap the values of cells 2 and 3. What is wrong with these two steps? Step 1: copy cell 2 into cell 3. Step 2: copy cell 3 into cell 2. Write a correct sequence of steps; you may use other cells.
::: solution
1. Step 1 writes into cell 3 the value of cell 2: the value that was in 3 is lost.
2. Step 2 copies into 2 what is now in 3, that is the value of 2: cell 2 does not change.
3. At the end both cells hold the value that was in 2.

A correct sequence, as in the book's answers, uses cell 1 to put a value aside:

1. Copy cell 2 into cell 1.
2. Copy cell 3 into cell 2.
3. Copy cell 1 into cell 3.

You can try it in the memory tool: with 2 and 3 different, after the three steps they are swapped.
:::

::: exercise intermediate Questions 1 and 2 of §1.3: faster disks and cylinders
(a) What do you gain by making a disk spin faster? (b) A disk has several surfaces. To record a lot of data, is it better to fill a whole surface before moving to the next one, or to fill a whole cylinder before moving to the next one?
::: solution
1. (a) The sector you are looking for arrives under the head sooner, so the rotation delay decreases. Moreover more bits pass under the head every second: the transfer rate increases.
2. (b) Moving the heads is slow, because it is a mechanical movement: it is better to move them as little as possible.
3. Filling one surface at a time, the heads move every time a track is full: as many movements as there are tracks on all the surfaces.
4. Filling one cylinder at a time, when a track is full you go to the track above or below. It is enough to activate another head, with an electronic command, without moving anything. The heads move only when the whole cylinder is full.

So it is better to fill one cylinder at a time, as the book's answers say.
:::

::: exercise intermediate Questions 3–6 of §1.3: which memory for which use
(a) Why are the data of a reservation system, which change all the time, kept on a magnetic disk and not on a CD or a DVD? (b) Why can the same player read CDs, DVDs and Blu-rays? (c) What advantage does flash memory have over the other systems? (d) Why are magnetic disks still used?
::: solution
1. (a) In a reservation system you look up any piece of data, in any order. On the spiral of a CD or a DVD, jumping from one piece of data to another is slow. Moreover on these disks you cannot change a small piece of data here and there.
2. (b) The three disks have the same size and the same spiral track. A player with several lasers, red and blue-violet, reads them all.
3. (c) It has no moving parts: it responds sooner and does not wear out through friction.
4. (d) They are faster and larger than the other magnetic media, like tapes. Compared with optical disks they are faster, larger and can be rewritten without problems. And they cost less per GB than solid-state disks, even if the difference has shrunk in recent years.
:::

## Review questions

::: question What is a bit? Why does the book say it is "only a symbol"?
A bit is a binary digit: 0 or 1. It is only a symbol because its meaning depends on its use: the same row of bits can be a number, a letter, a piece of an image or of a sound.
:::

::: question How many sequences can be written with $n$ bits? How many bits are needed to tell apart 20 objects?
With $n$ bits you can write $2^n$ sequences, because each extra bit doubles. For 20 objects 5 bits are needed: 4 bits give 16 sequences, too few, and 5 bits give 32.
:::

::: question What is the difference between OR and XOR?
Both give 1 when only one input is 1, and 0 when both are 0. With both inputs at 1, OR gives 1 and XOR gives 0: XOR means "only one".
:::

::: question What is a logic gate? How do you find out what a circuit of gates does?
It is a circuit that carries out a Boolean operation: AND, OR, XOR or NOT. To understand a circuit you write a table with all the combinations of the inputs and a column for each gate.
:::

::: question How does a flip-flop remember a bit?
Its output goes back and becomes an input of the OR. After a pulse on the upper input, the output at 1 keeps the OR gate on, and the OR keeps the output on. Only a pulse on the lower input breaks the loop and sets the output to 0.
:::

::: question Why is hexadecimal notation used? How do you go from bits to digits?
Long rows of bits are hard to read. Hexadecimal writes four bits with a single symbol, from 0 to F. You make groups of four bits from the right and write the digit of each group.
:::

::: question How is main memory organised? What is an address?
It is a row of cells, usually of one byte each. Each cell has a number, its address, which starts from 0 and grows one by one: it is used to find the cell and gives an order to all the cells.
:::

::: question Why is main memory called RAM? What drawback does it have?
RAM means random access memory: any cell can be reached, in any order, in the same time. The drawback is that, when the computer is switched off, it loses everything.
:::

::: question What are the tracks, sectors and cylinders of a magnetic disk?
The tracks are the circles, with the same centre, on which the head reads and writes. The sectors are the arcs into which each track is divided. A cylinder is the set of tracks that lie one above the other, on the various surfaces, at the same distance from the centre.
:::

::: question Why is flash memory not suitable as main memory?
Each erasure damages its cells a little, and after many rewrites they stop working. Main memory is rewritten all the time, many times a second.
:::

## Glossary

```glossary
Bit | A binary digit, 0 or 1 (Italian *cifra binaria*). It is the smallest piece of information.
Byte | A row of 8 bits. It can have 256 different values.
Boolean operation | An operation on true and false values, that is on bits (Italian *operazione booleana*). Named after the mathematician George Boole.
AND | Gives 1 only if both inputs are 1.
OR | Gives 1 if at least one of the two inputs is 1.
XOR | "Exclusive or" (Italian *o esclusivo*): gives 1 if the two inputs are different.
NOT | Has a single input and gives the opposite: 0 becomes 1, 1 becomes 0.
Truth table | A table with all the combinations of the inputs and the output for each one (Italian *tabella di verità*).
Logic gate | A circuit that carries out a Boolean operation (Italian *porta logica*).
Combinational circuit | A circuit of gates whose output depends only on the inputs at that moment (Italian *circuito combinatorio*).
Pulse | An input that goes to 1 for an instant and then back to 0 (Italian *impulso*).
Flip-flop | A circuit whose output stays the same until a pulse changes it: it remembers a bit.
Bit string | A row of bits (Italian *stringa di bit*); when it is very long the book calls it a stream.
Hexadecimal notation | The way of writing each group of four bits with a symbol from 0 to 9 or from A to F (Italian *notazione esadecimale*).
Hexadecimal digit | One of the 16 symbols 0–9 and A–F. A is worth 10, F is worth 15.
Main memory | The memory where the computer keeps the data it is working on (Italian *memoria centrale*): a row of cells.
Cell | A piece of memory of fixed size, usually a byte (Italian *cella*).
Address | The number that identifies a cell: it starts from 0 and grows one by one (Italian *indirizzo*).
Most significant bit | The bit at the high-order end of the cell, that is on the left (Italian *bit più significativo*). The one on the right is the least significant.
RAM | Random access memory (Italian *memoria ad accesso casuale*): each cell is reached in the same time. DRAM holds the bits as electric charges that must be refreshed.
Kilobyte (KB) | For memory, 1024 bytes. A megabyte (MB) is 1024 KB, a gigabyte (GB) 1024 MB. To remove any doubt there is also the name kibibyte (KiB).
Mass storage | A memory that keeps data even without power, larger and slower than main memory (Italian *memoria di massa*).
Track | One of the concentric circles on which a magnetic disk records data (Italian *traccia*).
Sector | An arc of a track; all sectors hold the same number of bits (Italian *settore*).
Cylinder | The set of tracks that lie one above the other on the surfaces of a disk (Italian *cilindro*).
Access time | Seek time, to bring the head to the track, plus rotation delay, to wait for the sector (Italian *tempo di accesso*).
Transfer rate | How many bits per second are read or written (Italian *velocità di trasferimento*).
Flash memory | A memory without moving parts that holds bits by trapping electrons; it wears out with rewrites (Italian *memoria flash*).
SSD | Solid-state disk: a large flash memory, in place of the hard disk (Italian *disco a stato solido*).
```

## Checklist

```checklist
- I know how many sequences can be written with $n$ bits and how many bits are needed for a given number of objects.
- I know the tables of AND, OR, XOR and NOT by heart.
- I can explain the difference between OR and XOR.
- I can read a circuit of gates with the table of all the combinations of the inputs.
- I can tell what happens in a flip-flop with a pulse on the upper input and with a pulse on the lower input.
- I can go from bits to hexadecimal and from hexadecimal to bits, without losing the zeros.
- I can explain cells, addresses and RAM, and the difference between writing into a cell and copying it.
- I can do calculations with KB, MB and GB: for example how many bits there are in 4 KB.
- I know what tracks, sectors, cylinders, seek time and rotation delay are.
- I can tell the strengths and weaknesses of magnetic disks, optical disks and flash memory.
```

## Sources

- R. Johnsonbaugh, J. G. Brookshear, D. Brylow, *Fondamenti dell'Informatica*, Pearson 2026 (ISBN 9788891939456), the course textbook: part 1, which is chapter 1 of J. G. Brookshear, D. Brylow, *Computer Science: an overview*. Section 1.1 "Bits and Their Storage": Boolean operations, gates and flip-flops (figures 1.3 and 1.5), hexadecimal notation. Section 1.2 "Main Memory": cells, high-order and low-order ends, addresses, RAM and DRAM, kilobytes. Section 1.3 "Mass Storage": magnetic disks, CDs, DVDs and Blu-rays, flash memory and SSDs. Answers to the questions of the three sections in the book's appendix, published on the channel A Moodle page.
- Channel B lesson summaries (channel B Moodle page): lesson 1 on 28/09/2026, introductory; lesson 2 on 01/10/2026, "Bits and Their Storage", flip-flops, hexadecimal notation, main memory and mass storage. Channel B programme 2026/27 and exam rules common to the three channels (exam page on Moodle Esami): [course sheet](https://github.com/DonFlammer/unito-computer-science/blob/main/ai_context/FDA/course.md).
- Channel A slides 2026/27, "Cenni sulla codifica dei dati" (notes on data encoding) and "Struttura della memoria ed esecuzione dei programmi" (structure of memory and execution of programs) (F. Cardone, channel A Moodle page, open to guests): bits as labels, $2^n$ sequences, minimum number of bits; cells and addresses.
- Binary prefixes kibi, mebi and gibi: standard IEC 60027-2 (December 1998).
- The explanations in words, the examples (like the disk at 7200 turns per minute), the "Refresher" and "Try it" boxes, the interactive tools, the quizzes and the exercises without a book number are original to these notes.
