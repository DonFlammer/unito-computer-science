---
course: FDA
lesson: S1
type: summary
title: "Week 1: bits, logic gates, memories; text, colours and sounds; base 2"
date: 2026-10-02
lecturers: Stefano Berardi
eyebrow: Weekly summary · Foundations of Computer Science · Channel B · 28/09 – 02/10/2026
description: >-
  Summary of week 1 of Foundations of Computer Science (Fondamenti dell'Informatica, channel B, book part 1,
  §1.1–1.5): bits and powers of 2, AND, OR, XOR, NOT, logic gates and flip-flops, hexadecimal, main memory and mass
  storage, ASCII, Unicode and UTF-8, pixels and RGB, audio samples, conversions between base 2 and base 10, binary
  addition and overflow, binary fractions.
lede: >-
  The lessons of the week in a few pages: the tables to know by heart, the conversion methods, the quiz pitfalls and
  the questions to check yourself. For details and the interactive tools there is the full lesson.
material: book
facts:
  Lessons: "Mon 28/09 introduction · [01](01_bits_gates_hexadecimal.html) Thu 01/10, §1.1–1.3 · [02](02_text_colours_sounds_binary.html) Fri 02/10, §1.4–1.5"
  Revision time: 40 minutes
source: >-
  The notes of lessons 01 and 02 of Foundations of Computer Science (channel B), written on the textbook, part 1,
  §1.1–1.5
italian_file: riassunto_settimana_01.html
html_notes: notes/FDA/summary_week_01.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/riassunti/settimana_01.md
---

## In brief

- Inside the computer everything is made of **bits**, 0 and 1. With $n$ bits you can write $2^n$ sequences: each extra bit doubles.
- The **logic gates** AND, OR, XOR and NOT combine bits; the **flip-flop** remembers a bit.
- **Hexadecimal** writes four bits with one digit. **Main memory** is a row of one-byte cells, each with an address.
- Text, colours and sounds become numbers: **ASCII** and **UTF-8**, **RGB**, **samples**.
- In **base 2** the positions are worth 1, 2, 4, 8…; you convert with divisions by 2 and add in columns, watching out for **overflow**.

On Monday 28/09 there was the introductory lesson, with the presentation of the textbook: it has no number in the notes.

## Lesson 01 · Bits, gates, hexadecimal and memories (Thu 01/10)

**Bits and powers of 2.** 1 bit gives 2 sequences, 2 bits give 4, 3 bits 8, 8 bits (a **byte**) 256.

| $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|
| $2^n$ | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 |

> [!METHOD] How many bits are needed for a number of objects
> Look for the first power of 2 that reaches at least that number: its exponent is the number of bits. For 26 letters: $2^5 = 32$ reaches 26, $2^4 = 16$ does not, so 5 bits.

**The four operations**, to know by heart:

| A | B | A AND B | A OR B | A XOR B | NOT A |
|:-:|:-:|:-:|:-:|:-:|:-:|
| 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 1 | 1 | 0 |
| 1 | 1 | 1 | 1 | 0 | 0 |

AND gives 1 only if **both** are 1; OR if **at least one** is 1; XOR if they are **different**; NOT gives the opposite.

> [!PITFALL] The "or" of everyday language
> "Discount for students or pensioners" is an OR: if you are both, you still get the discount. "Coffee or tea?" is usually an XOR. In computer science OR always means "at least one, possibly both".

- A **logic gate** is the circuit that performs one of these operations. To read a circuit: write all the $2^n$ input combinations, add a column for each gate, fill one column at a time; the last one is the output.
- The **flip-flop**: a pulse on the upper input sets the output to 1, one on the lower input sets it to 0; between pulses the output stays as it is. The trick is the wire that feeds the output back into the OR gate. It is the first building block of memory.

**Hexadecimal.** One digit is worth four bits.

| bits | hex | bits | hex | bits | hex | bits | hex |
|---|:-:|---|:-:|---|:-:|---|:-:|
| 0000 | 0 | 0100 | 4 | 1000 | 8 | 1100 | C |
| 0001 | 1 | 0101 | 5 | 1001 | 9 | 1101 | D |
| 0010 | 2 | 0110 | 6 | 1010 | A | 1110 | E |
| 0011 | 3 | 0111 | 7 | 1011 | B | 1111 | F |

> [!METHOD] From bits to hexadecimal, and back
> Make groups of four bits **starting from the right**, with 0s in front if the first group is short, and write one digit per group: 1011 0101 = B5. To go back, write each digit with four bits, **zeros included**: the hexadecimal string 0100 means 0000 0001 0000 0000.

**Memories.**

- **Main memory** is a row of one-byte cells, each with an **address** from 0. Reading does not change the cell; writing erases the previous value. In **RAM** every cell is reached in the same time; when the computer is off it is emptied.
- For memory 1 KB = 1024 bytes ($2^{10}$), 1 MB = 1024 KB, 1 GB = 1024 MB. To remove the doubt with 1000 there are KiB, MiB, GiB.
- In a cell the leftmost bit is the **most significant**, the rightmost the **least significant**.
- **Mass storage** keeps data with the computer off: large and cheap, but slow. Magnetic disk: concentric tracks divided into sectors, the stacked tracks form a cylinder; access time = seek time + rotation delay. CD, DVD and Blu-ray: one spiral track read by a laser. Flash and SSD: no moving parts, fast, but they wear out by rewriting.

## Lesson 02 · Text, colours, sounds and base 2 (Fri 02/10)

**Text.**

- **ASCII** uses 7 bits, 128 symbols, and today one byte per symbol. A = 65 = 01000001, a = 97, the digit "0" = 48. Upper and lower case differ by **32**: a single bit changes. The symbol "7" is not the number 7.
- **Unicode** gives every symbol of every language a number, the **code point**, written U+… in hexadecimal, up to 21 bits. **UTF-8** writes it with 1, 2, 3 or 4 bytes; the ASCII symbols stay one identical byte.

| Code point | Bits | Bytes | UTF-8 pattern |
|---|---|:-:|---|
| U+0000 – U+007F | up to 7 | 1 | 0xxxxxxx |
| U+0080 – U+07FF | up to 11 | 2 | 110xxxxx 10xxxxxx |
| U+0800 – U+FFFF | up to 16 | 3 | 1110xxxx 10xxxxxx 10xxxxxx |
| U+10000 – U+10FFFF | up to 21 | 4 | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx |

> [!PITFALL] UTF-8 does not mean "8 bits per symbol"
> The Italian word "perché" has 6 symbols and takes 7 bytes: the é takes two. To count the bytes, look at every symbol.

**Images and sounds.**

- A **bitmap** image is a grid of **pixels**. In **RGB** each pixel has three numbers from 0 to 255, red, green and blue: 3 bytes, $2^{24}$ colours. (0, 0, 0) is black, (255, 255, 255) white, three equal values a grey, red plus green yellow.
- Bytes of an uncompressed image = width × height × 3. Full HD, 1920 × 1080: 6,220,800 bytes, about 6 MB.
- **Vector** images describe shapes: they scale up without squares, but are not suitable for photos.
- A sound is recorded by measuring the wave at regular intervals: each measurement is a **sample**. Two choices: **how many measurements per second** and **with how many bits** each one (with 16 bits there are 65,536 levels; rounding to the nearest level is called **quantisation**).
- CD: 44,100 samples per second, 16 bits, stereo. Bytes = samples per second × bytes per sample × channels × seconds: one second takes 176,400 bytes, one hour about 635 MB.
- **MIDI** does not store the wave but the instructions to play it: very compact, but the sound depends on who plays it.

**Base 2.**

- The positions are worth, from the right, 1, 2, 4, 8, 16, 32…: the value is the sum of the positions holding a 1. $1101_2 = 8 + 4 + 1 = 13$.
- With $n$ bits the **unsigned** integers go from 0 to $2^n - 1$: with 8 bits from 0 to 255. Zeros on the left do not change the value; a zero on the right doubles it.

> [!METHOD] From base 10 to base 2
> Divide by 2 and write the remainder; go on with the quotient until it reaches 0; read the remainders **from the last to the first**. With small numbers it is faster to take away the largest power of 2 that fits: $45 = 32 + 8 + 4 + 1$, so 101101. Always check by converting back.

> [!PITFALL] "How many bits are needed" and "write it with 8 bits"
> 13 needs 4 bits, 1101; on 8 bits it is written 00001101. 256 needs 9 bits, 100000000: it does not fit in a byte.

- **Column addition**: $0 + 0 = 0$, $0 + 1 = 1$, $1 + 1 = 10$ (write 0, carry 1), $1 + 1 + 1 = 11$ (write 1, carry 1).
- **Overflow**: if a carry comes out of the **last column**, the result does not fit. On 8 bits 200 + 100 gives 44 instead of 300. Carries in the middle do not count: on 4 bits $0111 + 0001 = 1000$ is fine.
- **Fractions**: after the point the positions are worth 1/2, 1/4, 1/8…: $101.101_2 = 5 + \frac12 + \frac18 = 5.625$. From base 10: double the part after the point and take the integer part, until 0 is left. $0.625 \to 1.25$ (1) $\to 0.5$ (0) $\to 1$ (1): 0.101.

## Towards the exam

- A single exam for the three channels on Moodle Esami: **9 quizzes in 45 minutes**, 3 points each, at least 18 to pass; then an optional open question, from −1 to 6 points, if you have at least 24 in the quizzes.
- That is 5 minutes per question: the tables of AND, OR, XOR and NOT, the hexadecimal table and the powers of 2 up to $2^{10} = 1024$ must be known **by heart**.
- In the 2023/24 mock exams the Boolean formula of a truth table and the function computed by a circuit come back. In the next lessons two's complement and floating point arrive, and they use these conversions.

## Review questions

::: question How many bits are needed to tell 100 objects apart?
7 bits: $2^7 = 128$ reaches 100, while $2^6 = 64$ does not.
:::

::: question What are 1 XOR 1 and 1 OR 1?
1 XOR 1 = 0, because the two bits are equal; 1 OR 1 = 1.
:::

::: question Write 1110 0011 in hexadecimal, and 3F in bits.
1110 0011 = E3; 3F = 0011 1111.
:::

::: question How many bytes does the Italian word "città" take in UTF-8?
6: c, i, t, t take one byte each, the à takes 2.
:::

::: question How many bytes does an 800 × 600 RGB photo take without compression?
$800 \cdot 600 \cdot 3 = 1{,}440{,}000$ bytes.
:::

::: question How is 37 written in base 2?
$37 = 32 + 4 + 1$, so 100101.
:::

::: question On 8 unsigned bits, what is 11111111 + 00000001?
00000000, with overflow: the true result, 256, has 9 bits.
:::

::: question What is $10.11_2$ worth?
$2 + \frac12 + \frac14 = 2.75$.
:::

## Sources

- The full lessons: [01 · Bits, logic gates, hexadecimal and memories](01_bits_gates_hexadecimal.html) and [02 · Text, colours and sounds in bits; numbers in base 2](02_text_colours_sounds_binary.html), with interactive tools, quizzes and exercises.
- Exam rules and the programme of the three channels: [course sheet](https://github.com/DonFlammer/unito-computer-science/blob/main/ai_context/FDA/course.md).
