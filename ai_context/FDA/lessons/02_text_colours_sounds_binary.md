---
course: FDA
lesson: "02"
title: Text, colours and sounds in bits; numbers in base 2
date: 2026-10-02
lecturers: Stefano Berardi
eyebrow: Channel B · Lesson 02 · Book, part 1, §1.4–1.5
description: >-
  Notes on lesson 02 of Foundations of Computer Science (channel B): how text (ASCII, Unicode, UTF-8), numbers,
  images (pixels and RGB colours) and sounds (samples) are written in bits; the binary system, conversions between
  base 2 and base 10, fractions in binary and the addition of unsigned integers, with interactive tools, quizzes and
  worked exercises.
lede: >-
  A computer stores only zeros and ones: letters, colours and sounds become numbers, and the numbers are written in
  base 2. How to count with only two digits, how a text, a photo and a song become numbers, and how sums and numbers
  with a point work in binary.
material: book
facts:
  Book: Johnsonbaugh, Brookshear, Brylow, Fondamenti dell'Informatica, part 1 (Brookshear, ch. 1), §1.4–1.5
  Lecturer: Stefano Berardi · channel B · A.Y. 2026/27
  Study time: 3 hours, also in several sittings
source: >-
  Course textbook, part 1 (J. G. Brookshear, D. Brylow, Computer Science: an overview, ch. 1), §1.4 "Representing
  Information as Bit Patterns" and §1.5 "The Binary System", with the answers to their questions; summary of the
  lesson of 02/10/2026 on the channel B Moodle page; channel A 2026/27 slides on data encoding; the Unicode and UTF-8
  standards
italian_file: 02_testo_colori_suoni_binario.html
html_notes: notes/FDA/02_text_colours_sounds_binary.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/FDA/lezioni/02_testo_colori_suoni_binario.md
---

## In brief

- A computer stores only bits. To store a letter, a colour or a sound you use a rule that turns it into numbers, and the numbers are written in bits.
- In **base 2** each bit is a coin: the coins are worth 1, 2, 4, 8, 16 and so on, each twice the previous one. 1 means "the coin is there", 0 "it is not". So 1101 is worth 8 + 4 + 1 = 13.
- For the letters of English there is the **ASCII** code: A is 65, B is 66. For all the languages of the world there is **Unicode**, and **UTF-8** writes each of its symbols with 1, 2, 3 or 4 bytes.
- A photo is a grid of little coloured squares, the **pixels**. In **RGB** each pixel is made of three numbers from 0 to 255: how much red, how much green, how much blue.
- A sound is recorded by measuring the wave many times a second. Each measurement is a **sample**.
- In base 2 you add in columns as at school, but 1 + 1 makes 10: you write 0 and carry 1. If the result does not fit in the bits you have, there is **overflow**.
- After the point the positions are worth a half, a quarter, an eighth and so on.
- For the exam you mostly need the conversions and the sums in base 2: they come back in all the lessons that follow.

> [!CHANNELS]
> In channel B this is the lesson of Friday 02/10. For the lecturer it is lesson 3, because the first one was an introduction: here it is lesson 02. Stefano Berardi covered sections 1.4 and 1.5 of the book. Here you find them in a different order: first base 2 (§1.5), which you need to read everything else, then text, images and sounds (§1.4), and at the end sums and the point (§1.5). In channel A the same topics are in the slides "Cenni sulla codifica dei dati" (notes on data encoding) by Felice Cardone, in channel C in the slides "Rappresentazione" (representation) by Luca Paolini.

## A rule turns everything into numbers

In [lesson 01](01_bits_gates_hexadecimal.html) you saw that a computer stores only bits: rows of 0s and 1s, grouped in bytes of 8. It has no place for letters, one for colours and one for music. It has only bits.

So how does it store a message, a photo or a song? With an agreement, like two friends who write to each other in code. Their rule is: A is 1, B is 2, C is 3, and so on. To write CIAO they send the numbers 3, 9, 1 and 15. The one who receives them knows the rule and puts the word back together.

The computer does the same thing, in two steps.

1. A rule turns the thing into numbers: each letter has its number, each colour its three numbers, each instant of a sound its number.
2. Each number is written with 0 and 1, that is in **base 2**.

A byte, on its own, does not say what it contains. The same eight bits can be a number, a letter or a colour: the rule you read them with decides. At the end of the lesson there is an exercise about exactly this.

In this lesson you first see the second step, because it is needed everywhere: how to write a number with 0 and 1. Then the rules for text, images and sounds. At the end, calculations in base 2: sums and numbers with a point.

::: try With the two friends' rule, which word is 3, 1, 19, 1?
C is the third letter, A the first, S the nineteenth: the word is CASA (house).
:::

> [!REMEMBER]
> - A computer stores only bits.
> - A rule turns letters, colours and sounds into numbers; then the numbers are written in base 2.
> - The same bits can be a number, a letter or a colour: it depends on the rule you read them with.

## Counting with two digits: base 2 (book, §1.5)

Start from something you already know how to do. In the number 375 the 3 is worth three hundred, the 7 is worth seventy and the 5 is worth five. The same digit is worth more the further left it is: each position is worth ten times the one on its right. Units, tens, hundreds. There are ten digits, from 0 to 9, and that is why it is called **base 10**.

Base 2 works the same way, with two differences: the digits are only 0 and 1, and each position is worth **twice** the one on its right.

### The coins of base 2

Imagine you have eight coins, one of each kind: worth 1, 2, 4, 8, 16, 32, 64 and 128 euros. Each coin is worth twice the previous one. Put them in a row, with the biggest on the left, like the digits of a number.

| Position, from the right | 8th | 7th | 6th | 5th | 4th | 3rd | 2nd | 1st |
|---|--:|--:|--:|--:|--:|--:|--:|--:|
| Coin worth | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

To pay an amount you choose which coins to give. A number in base 2 says exactly this: under each coin there is 1 if you give it, 0 if you keep it.

Take the number 1101. Read it from the right, one coin at a time:

1. the last digit is 1: the 1 coin is there;
2. the one before is 0: the 2 coin is not there;
3. then 1: the 4 coin is there;
4. then 1: the 8 coin is there.

The total is 8 + 4 + 1 = 13. So 1101 in base 2 is worth 13.

Another example, the one in figure 1.16 of the book: 100101.

| Bit | 1 | 0 | 0 | 1 | 0 | 1 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|
| Coin | 32 | 16 | 8 | 4 | 2 | 1 |
| Do you give it? | yes | no | no | yes | no | yes |

The total is 32 + 4 + 1 = 37.

To avoid mixing up the two ways of writing numbers, the base goes at the bottom: $100101_2 = 37_{10}$. It reads "100101 in base two equals 37 in base ten". Without the little number, 100101 could be one hundred thousand one hundred and one.

> [!IDEA]
> A number in base 2 is a row of coins: each position is worth twice the one on its right, and the number is worth the sum of the positions holding a 1. Base 2 is also called the **binary system**, and its digits are the bits.

Now two things from [lesson 01](01_bits_gates_hexadecimal.html) make sense. The leftmost bit of a byte is called the "most significant" because it is the coin worth the most, 128. And a hexadecimal digit is the value of four bits, with the coins 8, 4, 2 and 1: for example 1101 is D, that is 13.

Click on the bits in the tool below: each bit switched on adds its coin.

```widget codifica
title: From bits to the number: click on the bits
mode: binary
bits: 00100101
```

::: try What are the binary numbers (a) 1010 and (b) 11111 worth in base 10?
(a) The coins are 8 and 2: 1010 is worth 10.

(b) All the coins from 16 down are there: $16 + 8 + 4 + 2 + 1 = 31$.
:::

### Counting in base 2

In base 10, after 9 the digits have run out: you write 0 and put a 1 on the left, and you get 10. In base 2 the digits run out straight away, after 1. Here are the first numbers.

| Base 10 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Base 2 | 0 | 1 | 10 | 11 | 100 | 101 | 110 | 111 | 1000 |

Check with the coins: 110 means 4 + 2, that is 6.

### How far 8 bits go

With only the coins 1, 2 and 4 the most you can pay is 7, giving all of them: 111. Counting 0 as well, there are 8 possible amounts, from 0 to 7.

With all eight coins, from 1 to 128, the maximum is 11111111. It is worth 1 + 2 + 4 + 8 + 16 + 32 + 64 + 128 = 255. There are 256 possible amounts, from 0 to 255.

There is a shortcut. A row of 1s is always worth the next coin minus 1: 111 is worth 8 − 1 = 7, and 11111111 is worth 256 − 1 = 255.

> [!REFRESHER] Powers of 2
> $2^3$ reads "two to the third" and means 2 multiplied by itself 3 times: $2 \cdot 2 \cdot 2 = 8$. The coins of base 2 are exactly the powers of 2. It pays to know them by heart up to $2^{10}$.
>
> | Power | $2^0$ | $2^1$ | $2^2$ | $2^3$ | $2^4$ | $2^5$ | $2^6$ | $2^7$ | $2^8$ | $2^9$ | $2^{10}$ |
> |---|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|--:|
> | Value | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 1024 |

So with $n$ bits you write the numbers from 0 to $2^n - 1$, which reads "two to the n minus one". With 8 bits $2^8 - 1 = 255$; with 16 bits $2^{16} - 1 = 65535$. These numbers, from 0 up, without a minus sign and without a point, are called **unsigned integers**. For negative numbers and for numbers with a point the book uses other systems, in sections 1.6 and 1.7.

### From decimal to binary: paying with the coins

Now the trip the other way: from 45 to base 2. Pay 45 euros with the coins, always starting from the biggest one that fits.

1. The 64 coin is too big. The 32 one fits: you give it, and 45 − 32 = 13 is left.
2. The 16 one is too much for 13: you keep it.
3. The 8 one fits: you give it, and 13 − 8 = 5 is left.
4. The 4 one fits: you give it, and 5 − 4 = 1 is left.
5. The 2 one is too much for 1: you keep it.
6. The 1 one fits: you give it, and 0 is left.

| Coin | 32 | 16 | 8 | 4 | 2 | 1 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|
| Do you give it? | yes | no | yes | yes | no | yes |
| Bit | 1 | 0 | 1 | 1 | 0 | 1 |

So 45 is written 101101. Check: 32 + 8 + 4 + 1 = 45.

### The book's method: dividing by 2

With the coins it is quick when the number is small. The book gives another method, in figure 1.17, which always works the same way, even with big numbers.

> [!METHOD] The divisions by 2
> 1. Divide the number by 2 and write down the remainder, which is 0 or 1.
> 2. Divide the result by 2, and write down the remainder again.
> 3. Go on until the result is 0.
> 4. Read the remainders **from the last to the first**: that is the number in base 2.

> [!EXAMPLE] 13 in base 2 (figure 1.18 of the book)
> | Division | Result | Remainder |
> |---|--:|--:|
> | 13 : 2 | 6 | 1 |
> | 6 : 2 | 3 | 0 |
> | 3 : 2 | 1 | 1 |
> | 1 : 2 | 0 | 1 |
>
> The remainders, from the last to the first: 1101. Check with the coins: 8 + 4 + 1 = 13.

Why are they read backwards? The first remainder says whether the number is odd: 13 divided by 2 leaves 1, so the 1 coin is needed. Dividing by 2 is like swapping every coin for the one worth half: the 2 coin becomes the 1 coin, and the next remainder says whether the 2 coin is needed. So the bits come out from right to left, and to write them in the right order you read them from the last one.

In the tool, choose a number and watch the divisions step by step.

```widget codifica
title: The divisions by 2, step by step: choose a number
mode: divisions
number: 13
```

Three things to know about zeros.

- Zero needs no divisions: in base 2 it is 0, and in a byte 00000000.
- Zeros on the left do not change the value, just as in base 10 007 is 7: 1101 and 00001101 are both worth 13.
- A zero added on the right, instead, doubles the number: each bit moves to the next coin. 11010 is worth 26, twice 13.

> [!PITFALL] "How many bits are needed" and "write it with 8 bits" are different questions
> 13 needs at least 4 bits: 1101. To write it with 8 bits add four zeros on the left: 00001101. 256, instead, needs 9 bits, 100000000, and does not fit in a byte: with 8 bits you get up to 255.

::: try (a) Write 27 in base 2, once with the coins and once with the divisions. (b) What is 101010 worth?
(a) With the coins: 16 fits, 11 is left; 8 fits, 3 is left; 4 does not; 2 fits, 1 is left; 1 fits. You gave 16, 8, 2 and 1: 11011.

With the divisions: 27 : 2 = 13 remainder 1; 13 : 2 = 6 remainder 1; 6 : 2 = 3 remainder 0; 3 : 2 = 1 remainder 1; 1 : 2 = 0 remainder 1. From the last to the first: 11011. The two methods give the same number.

(b) The coins are 32, 8 and 2: $32 + 8 + 2 = 42$.
:::

> [!REMEMBER]
> - In base 2 the positions are worth 1, 2, 4, 8, 16…, from the right: each twice the previous one. The number is worth the sum of the positions holding a 1.
> - From base 10 to base 2: pay with the coins starting from the biggest, or divide by 2 until the result is 0 and read the remainders from the last to the first.
> - With $n$ bits you get up to $2^n - 1$: with 8 bits up to 255.
> - Always check backwards: convert again and see if it matches.

## Letters: the ASCII code (book, §1.4)

Now that you can write a number in bits, go back to the first step: the rule that turns letters into numbers. A table that gives each symbol its number is called a **code**. The symbols are letters, digits, punctuation, the space and also some commands, like "new line".

The most famous code is **ASCII** (*American Standard Code for Information Interchange*). Its numbers go from 0 to 127, so 7 bits are enough: $2^7 = 128$ symbols. It has the letters of the English alphabet, uppercase and lowercase, the digits, punctuation and the space. Today each symbol takes a whole byte, with an extra 0 on the left.

Here is the word "Hello." in ASCII, as in figure 1.11 of the book.

| Symbol | Number | Byte |
|:-:|--:|:-:|
| H | 72 | 01001000 |
| e | 101 | 01100101 |
| l | 108 | 01101100 |
| l | 108 | 01101100 |
| o | 111 | 01101111 |
| . | 46 | 00101110 |

Check the H with the coins: 01001000 has the 64 and 8 coins, and 64 + 8 = 72.

The complete table is in the appendices of the book, but there is no need to learn it. It is enough to know where the groups start.

| Symbols | Numbers |
|---|---|
| space | 32 |
| digits from "0" to "9" | from 48 to 57 |
| uppercase from A to Z | from 65 to 90 |
| lowercase from a to z | from 97 to 122 |

> [!METHOD] Finding the number of a letter
> - Uppercase: 64 plus the place of the letter in the English alphabet. A is the first, so 64 + 1 = 65; C is the third, so 67.
> - Lowercase: 96 plus the place. a is 97, c is 99.
> - Digit: 48 plus the digit. The symbol "7" is 55.

Two things to notice.

- **Uppercase and lowercase** differ by 32: A is 65, a is 97. In the bits only one coin changes, exactly the 32 one: A is 01000001, a is 01100001. It is question 2 of §1.4 in the book.
- **Digits are symbols like the others.** The symbol "7" is the number 55, that is 00110111. For the computer it is not the number 7, which in base 2 is 00000111: it is a drawing to show on the screen.

### Numbers are not written in ASCII

To write the number 25 in ASCII you need two symbols, "2" and "5", that is two bytes. In base 2, instead, 25 is 11001 and fits in a single byte.

The difference grows with the bytes. With two bytes in ASCII you write two digits, so you get up to 99. With the same 16 bits in base 2 you get up to 65535. That is why the book concludes that numbers are stored in base 2, and calculations are done directly on the bits.

::: try (a) The number of B is 66. What is the number of b? (b) Which symbol is the byte 00110011?
(a) The lowercase letter is 32 more: $66 + 32 = 98$.

(b) The coins are 32, 16, 2 and 1: the number is 51. Digits start at 48, and 51 = 48 + 3: it is the symbol "3".
:::

> [!REMEMBER]
> - A code gives each symbol a number. ASCII goes from 0 to 127, that is 7 bits, and today uses one byte per symbol.
> - Uppercase from 65, lowercase from 97, digits from 48, space 32. Uppercase and lowercase differ by 32.
> - The symbol "7" is not the number 7. Numbers are written in base 2, not in ASCII.

## All languages: Unicode and UTF-8 (book, §1.4)

Try writing the Italian word "perché" (why) in ASCII: you cannot. The é is not there, and neither is the euro sign. ASCII was born for English.

First people tried 8-bit codes, that is 256 symbols: the first 128 as in ASCII, the others different for each group of languages. The Latin-1 code, for example, has the accented letters of Western Europe. The book explains why that is not enough: 256 symbols are too few for languages like Chinese, and a text written in several languages does not know which table to use.

### Unicode: a number for every symbol in the world

Today's solution is called **Unicode**: a single, huge table with the symbols of all languages, plus mathematical symbols, emoji and much more. It has room for more than a million symbols, and the first 128 are those of ASCII.

The number of a symbol is called its **code point**. It is written "U+" followed by the number in hexadecimal, the short way of writing bits from [lesson 01](01_bits_gates_hexadecimal.html).

| Symbol | Code point | In base 10 |
|:-:|:-:|--:|
| A | U+0041 | 65 |
| è | U+00E8 | 232 |
| € | U+20AC | 8364 |
| 😀 | U+1F600 | 128512 |

### UTF-8: how many bytes per symbol

Unicode only says which number each symbol has. It remains to decide how to write it in bytes. The simplest road would be to give every symbol the same space, for example 4 bytes; but then a text in Italian would take four times as much as in ASCII.

**UTF-8** does something smarter: it gives few bytes to small numbers and more to big ones. It is the most used way, and almost all web pages are written like this.

| Symbols | Bytes in UTF-8 |
|---|:-:|
| those of ASCII: letters without accents, digits, punctuation, space | 1 |
| accented letters like è and à, the Greek, Russian, Arabic and Hebrew alphabets | 2 |
| almost all the others, including € and Chinese and Japanese characters | 3 |
| emoji and rare symbols | 4 |

To know how much a text takes, count the symbols of each row. "perché" has 6 symbols: p, e, r, c, h have one byte each, the é has 2. In total 5 + 2 = 7 bytes.

When reading a file, how does the computer know where one symbol ends and the next begins? The first byte of each symbol says it, with its first bits:

- it starts with 0 if the symbol has a single byte;
- it starts with 110 if it has two, with 1110 if it has three, with 11110 if it has four;
- the bytes that follow all start with 10.

The ASCII symbols have a single byte, which starts with 0, and it is exactly the ASCII byte. So a text written in ASCII is already a UTF-8 text, with the same bytes.

> [!PITFALL] UTF-8 does not mean "8 bits per symbol"
> The 8 says that UTF-8 works in bytes, but a symbol can take from 1 to 4 bytes. Counting the symbols is not enough to know the bytes: "perché" has 6 symbols and takes 7 bytes.

> [!DEEPER] How the bytes are built, bit by bit
> This part does not appear in the quizzes of the mock exams: it helps to understand the tool below and the last exercise.
>
> | Code points | Bits of the number | Bytes | Byte pattern |
> |---|:-:|:-:|---|
> | from U+0000 to U+007F | up to 7 | 1 | 0xxxxxxx |
> | from U+0080 to U+07FF | up to 11 | 2 | 110xxxxx 10xxxxxx |
> | from U+0800 to U+FFFF | up to 16 | 3 | 1110xxxx 10xxxxxx 10xxxxxx |
> | from U+10000 to U+10FFFF | up to 21 | 4 | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx |
>
> In place of the x go the bits of the code point, from left to right.
>
> 1. Write the code point in base 2.
> 2. Count the bits and choose the row: up to 7 bits one byte, up to 11 two, up to 16 three, up to 21 four.
> 3. Add zeros on the left until there are as many bits as x's in the row.
> 4. Put the bits in place of the x's.
>
> **The è.** The code point is U+00E8, that is 232, in base 2 11101000: 8 bits, so two bytes, which have room for 11 bits. With three zeros in front: 00011101000. The first 5 bits go in the first byte, the other 6 in the second: 110 00011 and 10 101000, that is 11000011 10101000, in hexadecimal C3 A8.
>
> **The euro.** The code point is U+20AC, in base 2 0010000010101100: 16 bits, so three bytes. The bits split into 4, 6 and 6: 0010, 000010 and 101100. The bytes are 1110 0010, 10 000010 and 10 101100: in hexadecimal E2 82 AC.

Write a word in the tool: for each symbol you see the code point and the UTF-8 bytes.

```widget codifica
title: A text in Unicode and UTF-8: write whatever you like
mode: text
text: Ciao, è 5€!
```

A file made only of symbol numbers, one after the other, is called a **text file**. .txt files are text files, but so are C programs and web pages. Word, instead, also saves bold, fonts and margins with codes of its own: a .docx file is not a text file.

> [!NOTE] Not only UTF-8
> Unicode can be written in bytes in other ways too. UTF-16, for example, uses 2 or 4 bytes per symbol, and Windows and Java use it internally.

::: try (a) How many bytes does the Italian word "caffè" (coffee) take in UTF-8? (b) Can it be written in ASCII?
(a) c, a, f and f have one byte each; the è has 2. In total $4 + 2 = 6$ bytes.

(b) No: the è is not among the 128 ASCII symbols.
:::

> [!REMEMBER]
> - Unicode gives a number, the code point U+…, to every symbol of every language.
> - UTF-8 writes that number with 1, 2, 3 or 4 bytes: 1 for the ASCII symbols, 2 for accented letters, 3 for €, 4 for emoji.
> - The first byte of each symbol says how many bytes it has.

## Images: pixels and colours (book, §1.4)

Zoom far into a photo on your phone: at some point you see lots of little squares, each of a single colour. They are the **pixels**, from *picture elements*.

A photo, for the computer, is a grid of pixels, and each pixel is written with bits. An image made like this is called a **bit map**.

In black and white one bit per pixel is enough: 1 for black, 0 for white. Here is an F made of five rows of five pixels.

| Row | Bits | Drawing |
|:-:|:-:|:-:|
| 1 | 11111 | ■■■■■ |
| 2 | 10000 | ■□□□□ |
| 3 | 11110 | ■■■■□ |
| 4 | 10000 | ■□□□□ |
| 5 | 10000 | ■□□□□ |

### Colours in RGB

For colours, imagine three lamps pointed at the same spot: a red one, a green one and a blue one. Each has a knob that goes from off, 0, to full on, 255. Each knob is a number from 0 to 255, and 255 is exactly the biggest number that fits in a byte. So a pixel takes 3 bytes, one per lamp.

This way of writing colours is called **RGB**, from the initials of the three colours: *red*, *green*, *blue*.

The lights mix like this:

- all off give black;
- all at full give white;
- red and green together give yellow;
- three equal values give a grey.

| Colour | Red | Green | Blue | In hexadecimal |
|---|--:|--:|--:|:-:|
| black | 0 | 0 | 0 | #000000 |
| white | 255 | 255 | 255 | #FFFFFF |
| red | 255 | 0 | 0 | #FF0000 |
| green | 0 | 255 | 0 | #00FF00 |
| blue | 0 | 0 | 255 | #0000FF |
| yellow | 255 | 255 | 0 | #FFFF00 |
| grey | 128 | 128 | 128 | #808080 |
| orange | 255 | 128 | 0 | #FF8000 |

The last column is the way colours are written in web pages: each byte becomes two hexadecimal digits, as in [lesson 01](01_bits_gates_hexadecimal.html). FF is 255, 80 is 128, 00 is 0.

How many colours are there in all? 256 values for red, for each of them 256 for green, for each of those 256 for blue: $256 \cdot 256 \cdot 256 = 16777216$, more than sixteen million. It is the same number as $2^{24}$, because 3 bytes are 24 bits.

Turn the three knobs in the tool.

```widget codifica
title: Red, green and blue: three bytes for a pixel
mode: colours
r: 255
g: 128
b: 0
```

> [!NOTE] Brightness and colour
> The book also describes another road: for each pixel you write the brightness (*luminance*) and two numbers for the colour (*chrominance*). Television and the JPEG format use a similar idea, because the eye notices differences in brightness more than differences in colour.

### How much an image weighs

The screen of a Full HD laptop has 1920 columns and 1080 rows of pixels. There are 1920 × 1080 = 2073600 pixels. Each takes 3 bytes, so an image as big as the screen takes 6220800 bytes, about 6 MB. That is why images are compressed, for example in JPEG: section 1.9 of the book tells the story.

> [!METHOD] How many bytes an uncompressed image takes
> 1. Multiply the width by the height, in pixels: that is the number of pixels.
> 2. Multiply by the bytes of each pixel: 3 in RGB.
> 3. If the question asks for bits, multiply again by 8.

### Vector images

A bit map has a limit: if you enlarge it, you also enlarge the pixels, and the image becomes blocky. There is another way: instead of the pixels you write how to draw the image, that is which lines, curves and shapes to trace and where. It is called a **vector image**.

To enlarge a vector image you redraw the shapes bigger: no blocks. Fonts that can be enlarged at will are made like this, such as TrueType and PostScript, and so are technical drawings and .svg files. For photographs, instead, the bit map remains more faithful: it is question 9 of §1.4.

::: try (a) What colour is (255, 255, 0)? And (0, 255, 255)? (b) How many bytes does an image of 100 × 100 pixels in RGB take, without compression?
(a) The first is yellow: red plus green. The second is cyan, a light blue: green plus blue.

(b) There are $100 \cdot 100 = 10000$ pixels, each of 3 bytes: $30000$ bytes.
:::

> [!REMEMBER]
> - A photo is a grid of pixels. In RGB each pixel has three numbers from 0 to 255, red, green and blue: 3 bytes.
> - Bytes of an uncompressed image: width × height × 3.
> - Vector images say how to draw the shapes: they enlarge without blocks, but they are not good for photos.

## Sounds: measuring the wave (book, §1.4)

A sound is air vibrating, back and forth, like a wave. How high the wave is gives the volume; how dense it is gives the note, lower or higher.

Think of a swing. If you photograph it once a second, from the photos you understand little of how it moves. If you photograph it a hundred times a second, from the photos you can rebuild the whole movement. With a sound you do the same: you measure the height of the wave many times a second, always at the same pace, and you keep the numbers.

Each measurement is called a **sample**, and taking the measurements is called **sampling**. The book gives the example of a wave recorded with the samples 0, 1.5, 2.0, 1.5, 2.0, 3.0, 4.0, 3.0, 0.

To record a sound you make two choices.

- **How many measurements per second.** For a phone call 8000 samples per second are enough. A music CD takes 44,100 per second.
- **How many bits each measurement is written with.** The CD uses 16 bits, that is $2^{16} = 65536$ possible values. Each measurement is rounded to the nearest value, as when you measure with a ruler that only has millimetre marks. This rounding is called **quantisation**.

More measurements per second and more bits per measurement give a more faithful sound, but take more space. Stereo music, then, has two recordings, one per ear: they are called **channels**.

In the tool you see a wave, the samples taken at regular intervals and the sound rebuilt from the samples.

```widget codifica
title: Sampling a sound: fewer samples, less fidelity
mode: sound
```

> [!METHOD] How many bytes a sound takes
> Multiply together four numbers: the samples per second, the bytes of each sample, the channels (1 if mono, 2 if stereo) and the seconds.

> [!EXAMPLE] An hour of music on CD (question 10 of §1.4)
> 1. Each sample has 16 bits, that is 2 bytes.
> 2. In one second of stereo: $44100 \cdot 2 \cdot 2 = 176400$ bytes.
> 3. An hour has 3600 seconds: $176400 \cdot 3600 = 635040000$ bytes, about 635 MB.
>
> A CD holds from 600 to 700 MB: an hour of music fills almost all of it.

There is also a completely different way. A recording stores the sound; a score stores the instructions to play it. The **MIDI** format (*Musical Instrument Digital Interface*) is a score: it says which instrument, which note and for how long. It takes very little: according to the book, a clarinet playing a D for two seconds takes 3 bytes in MIDI, against more than two million bits with 44,100 samples per second. The flaw is the same as a score's: the real sound depends on who plays it, that is on the electronic instrument that carries out the instructions.

::: try How many bytes does one minute of a phone call take, recorded with 8000 samples per second, 8 bits per sample and a single channel?
Each sample takes 8 bits, that is one byte. In one second there are 8000 bytes, in one minute $8000 \cdot 60 = 480000$ bytes.
:::

> [!REMEMBER]
> - A sound is recorded with samples: measurements of the wave taken many times a second.
> - CD: 44,100 samples per second, 16 bits each, two channels.
> - Bytes of a sound: samples per second × bytes per sample × channels × seconds.

## Adding in base 2 (book, §1.5)

Remember how you add in columns in base 10, for example 58 + 27. In the right column 8 + 7 makes 15: you write 5 and carry 1. In the next column 5 + 2 + 1 makes 8. The result is 85.

In base 2 you do it the same way. Only one thing changes: as soon as a column reaches 2, you have already run out of digits. There are only four possible sums in a column.

| In the column | Makes | Write | Carry |
|---|---|:-:|:-:|
| 0 + 0 | zero | 0 | 0 |
| 0 + 1 or 1 + 0 | one | 1 | 0 |
| 1 + 1 | two, which in base 2 is 10 | 0 | 1 |
| 1 + 1 + 1 carried | three, which in base 2 is 11 | 1 | 1 |

Here is the book's example: 00111010 + 00011011, that is exactly 58 + 27. You start from the right column. In the first row are the carries, which come from the column on the right.

| | 8th | 7th | 6th | 5th | 4th | 3rd | 2nd | 1st |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| carries | 0 | 1 | 1 | 1 | 0 | 1 | 0 | |
| 58 | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 0 |
| 27 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 1 |
| sum, 85 | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 1 |

The first columns, from the right:

1. 0 + 1 makes 1: write 1, no carry.
2. 1 + 1 makes two, that is 10: write 0 and carry 1.
3. 0 + 0 plus the carry makes 1: write 1, no carry.
4. 1 + 1 makes 10: write 0 and carry 1.
5. 1 + 1 plus the carry makes three, that is 11: write 1 and carry 1.

And so on up to the left. Check with the coins: 01010101 is worth 64 + 16 + 4 + 1 = 85.

### When the result does not fit: overflow

Think of the odometer of a scooter with three digits. After 999 there is no room for 1000: it goes back to 000. The same happens with bits.

With 8 bits the unsigned integers go from 0 to 255. Try 200 + 100, that is 11001000 + 01100100. The true result is 300, which in base 2 is 100101100: it has 9 bits. In the 8 bits there is room only for the last 8. The leftmost 1 is lost and 00101100 is left, that is 44.

This is called **overflow**: the result does not fit in the bits you have. Programmers really meet it: an 8-bit counter, after 255, starts again from 0.

> [!PITFALL] Only the carry going out on the left counts
> With $n$ bits there is overflow when the last column on the left gives a carry: it has nowhere left to go. The carries in the middle do not count. With 4 bits, $0111 + 0001 = 1000$: the carries cross three columns, but $7 + 1 = 8$ fits, because with 4 bits you get up to 15. Instead $1111 + 0001$ gives a carry from the last column too: $15 + 1 = 16$ does not fit, and it is overflow.

This rule holds for unsigned integers. For numbers with a sign, in the next lesson, there is another one.

Click on the bits of the two numbers in the tool and watch the carries.

```widget codifica
title: Column addition with 8 bits: click on the bits of the two numbers
mode: addition
a: 00111010
b: 00011011
```

::: try (a) Calculate 1011 + 0110. (b) With 4 bits, does the result fit?
(a) From the right: 1 + 0 makes 1; 1 + 1 makes 10, write 0 and carry 1; 0 + 1 plus the carry makes 10, write 0 and carry 1; 1 + 0 plus the carry makes 10, write 0 and carry 1. The final carry goes into a new column: 10001, that is 17. Indeed $11 + 6 = 17$.

(b) No. With 4 bits you get up to 15. The final carry is lost and 0001 is left, that is 1: overflow.
:::

> [!REMEMBER]
> - 0 + 0 = 0; 0 + 1 = 1; 1 + 1 = 10, write 0 and carry 1; 1 + 1 + 1 = 11, write 1 and carry 1.
> - With $n$ bits the unsigned integers go from 0 to $2^n - 1$.
> - If the last column on the left gives a carry, the result does not fit: it is overflow.

## Numbers with a point in base 2 (book, §1.5)

In base 10, 3.75 means 3 units, 7 tenths and 5 hundredths: after the point each position is worth a tenth of the one on its left. In base 2 the same idea holds with halves.

Go back to the coins. To the right of the point add ever smaller coins, each half the previous one: half a euro, a quarter of a euro, an eighth of a euro.

| Coin | 4 | 2 | 1 | . | 1/2 | 1/4 | 1/8 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Bits of 101.101 | 1 | 0 | 1 | . | 1 | 0 | 1 |

So 101.101 is worth 4 + 1 before the point, and 1/2 + 1/8 after it. It is figure 1.19 of the book.

> [!REFRESHER] Adding halves, quarters and eighths
> To add fractions with different numbers at the bottom, turn them all into eighths: a half is 4/8, a quarter is 2/8. So 1/2 + 1/8 = 4/8 + 1/8 = 5/8.

The number 101.101 is worth 5 and 5/8. With the point in base 10 it is 5.625, because 5/8 = 0.625.

> [!NOTE] Comma or point
> The book, in English, writes 101.101 with the point, and calls it the *radix point*. Italian writes a comma, as in the Italian version of these notes: 101,101. It is the same number.

### From a fraction to base 2

With small fractions you still use the coins: write the fraction as a sum of halves, quarters, eighths.

- 2 and 3/4: three quarters are a half plus a quarter. So $2 + 1/2 + 1/4$, that is 10.11.
- 5/16: it is 4/16 plus 1/16, that is a quarter plus a sixteenth. The positions after the point are 1/2, 1/4, 1/8, 1/16: the bit is 1 in the second and in the fourth, so 0.0101.

When the number is written with a point in base 10, like 0.625, there is a method that always works.

> [!METHOD] Doubling the part after the point
> 1. Double: $0.625 \cdot 2 = 1.25$. The digit before the point, here 1, is the first bit after the point.
> 2. Keep only the part after the point, 0.25, and double again: 0.5. Before the point there is 0: the second bit is 0.
> 3. Double again: $0.5 \cdot 2 = 1$. The third bit is 1, and nothing is left: you are done.
> 4. The bits, in the order they come out: 0.625 is written 0.101.

Why does it work? Doubling moves all the coins up one place: the half becomes 1 and ends up before the point. So, at each doubling, the digit before the point says whether the next coin was there.

> [!BEYOND] · numbers that never end in base 2
> In base 10, 1/3 is 0.333… and never ends. In base 2 it also happens to numbers that in base 10 have a single digit after the point: one tenth becomes 0.000110011001100…, with 0011 repeating forever. The computer has to cut it somewhere, and a small error appears. That is why in many programming languages 0.1 + 0.2 gives 0.30000000000000004. It comes back with floating point, in section 1.7 of the book.

### Adding with the point

You put the points one under the other and add as always, from the right. The book's example: 10.011 + 100.110, that is 2 and 3/8 plus 4 and 3/4.

| Coin | 4 | 2 | 1 | . | 1/2 | 1/4 | 1/8 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| carries | 0 | 0 | 1 | . | 1 | 0 | |
| 2 and 3/8 | 0 | 1 | 0 | . | 0 | 1 | 1 |
| 4 and 3/4 | 1 | 0 | 0 | . | 1 | 1 | 0 |
| sum | 1 | 1 | 1 | . | 0 | 0 | 1 |

The result is 111.001, that is 7 and 1/8. Check: 2 and 3/8 plus 4 and 3/4, that is 2 and 3/8 plus 4 and 6/8, makes 6 and 9/8, that is 7 and 1/8.

In the tool there are also three bits after the point.

```widget codifica
title: Bits with a point: click on the bits
mode: binary
bits: 101101
fractions: 3
```

::: try (a) What is 11.01 worth? (b) Write 4 and 1/2 in base 2.
(a) Before the point 2 + 1; after it, only the 1/4 coin. In total 3 and 1/4.

(b) 4 is 100 and a half is 0.1: in total 100.1.
:::

> [!REMEMBER]
> - After the point the positions are worth 1/2, 1/4, 1/8, 1/16…
> - From a fraction to base 2: write the fraction as a sum of halves, quarters, eighths; or double the part after the point and take the digits before the point.
> - To add, put the points in a column and add as always.

## The symbols of this lesson

| Symbol | Read | Means | Example |
|---|---|---|---|
| $1101_2$ | "1101 in base two" | the little number at the bottom gives the base | $1101_2 = 13_{10}$ |
| $2^n$ | "two to the n" | 2 multiplied by itself $n$ times | $2^3 = 8$ |
| $2^n - 1$ | "two to the n minus one" | the largest unsigned integer with $n$ bits | with 8 bits, 255 |
| ASCII | "ask-ee" | the code of the English symbols, numbers from 0 to 127 | A = 65 = 01000001 |
| U+00E8 | "U plus zero zero E eight" | the code point of a symbol in Unicode, in hexadecimal | U+00E8 is è |
| UTF-8 | "U-T-F eight" | the way of writing code points with 1, 2, 3 or 4 bytes | è becomes C3 A8 |
| (R, G, B) | "R, G, B" | red, green and blue of a pixel, from 0 to 255 | (255, 255, 0) is yellow |
| #FF8000 | "hash F F eight zero zero zero" | an RGB colour in hexadecimal, two digits per colour | orange |
| 101.101 | "one zero one point one zero one" | a number in base 2 with a point: after the point 1/2, 1/4, 1/8 | 5 and 5/8 |

## Towards the exam

The exam rules, the same for the three channels, are in [lesson 01](01_bits_gates_hexadecimal.html) and in the [course sheet](https://github.com/DonFlammer/unito-computer-science/blob/main/ai_context/FDA/course.md).

**What you need from this lesson**

1. **Conversions between base 2 and base 10, also with the point.** In the quiz questions of the 2023/24 simulations two's complement, floating point and excess notation come back. They are sections 1.6 and 1.7 of the book, and they are all done with the conversions of this lesson.
2. **Column addition and overflow.** It comes back unchanged with two's complement.
3. **Text, images and sounds.** They do not appear in the quiz questions of the 2023/24 simulations, but section 1.4 is in the common map of the book. You need the ideas and the calculations: the bytes of a text in UTF-8, of an image, of a sound.

> [!EXAM] Conversions without thinking
> In 45 minutes there are 9 quiz questions: 5 minutes per question. Learn the powers of 2 up to $2^{10} = 1024$ by heart and practise conversions until they come by themselves. In the quiz the numbers are small: with the powers of 2 it is often faster than with divisions.

**Mistakes to avoid**

- Reading the remainders of the divisions from the first to the last: they are read from the last to the first.
- Forgetting a carry, especially when there are three 1s in a column.
- Confusing the symbol "5", that is 00110101, with the number 5, that is 00000101.
- Counting one byte per symbol in UTF-8: è, € and emoji use more.
- In calculations on images and sounds, confusing bits and bytes, or forgetting that stereo has two channels.
- Giving the positions after the point the values 1/10 and 1/100: in base 2 they are worth 1/2, 1/4, 1/8.

## Quiz

```quiz
Q: The ASCII code of the letter M is 77. What is the code of the letter m?
- $45$
- $78$
- $108$
+ $109$
- $77$
= In ASCII the lowercase letter is worth 32 more than the uppercase one: $77 + 32 = 109$. In the bits only the sixth bit from the right changes, the one worth 32. The answer $45$ subtracts 32 instead of adding it. The answer $78$ is the code of N, the next letter. The answer $77$ forgets that uppercase and lowercase have different codes.

Q: How many bytes does the text "Perché 5€?" take in UTF-8, space included?
- $10$
- $11$
- $12$
+ $13$
- $20$
= There are 10 symbols. Eight are ASCII symbols and take one byte each: P, e, r, c, h, the space, 5 and the question mark. The é takes 2 bytes and the euro 3. In all $8 + 2 + 3 = 13$. The answer $10$ counts one byte per symbol, the most common mistake. The answer $20$ counts two bytes per symbol.

Q: Which of these statements about Unicode and UTF-8 is true?
- UTF-8 always uses 8 bits for each symbol.
- Unicode and UTF-8 are two names for the same code.
+ A text written only with ASCII symbols is also a valid UTF-8 text, with the same bytes.
- In UTF-8 the è takes one byte, as in the Latin-1 code.
- Unicode contains 256 symbols.
= In UTF-8 the code points from U+0000 to U+007F, that is the ASCII symbols, take one byte that starts with 0: it is exactly the ASCII byte. UTF-8 uses from 1 to 4 bytes per symbol. Unicode is the table of the numbers, UTF-8 a way of writing them in bytes. The è in UTF-8 takes 2 bytes, C3 A8. Unicode has room for more than a million symbols.

Q: How many different colours can be written with 3 bytes per pixel, in RGB?
- $256$
- $768$
- $65536$
+ $16777216$
- $16000000$
= Three bytes are 24 bits, so the colours are $2^{24} = 16777216$. In another way: 256 values for red, 256 for green and 256 for blue, and $256 \cdot 256 \cdot 256 = 16777216$. The answer $768$ does $256 + 256 + 256$: the values must be multiplied, because each red can be combined with each green and each blue. The answer $16000000$ is only an approximation.

Q: An image of 640 × 480 pixels in RGB, without compression: how many bytes does it take?
- $1120$
- $3360$
- $307200$
+ $921600$
- $7372800$
= The pixels are $640 \cdot 480 = 307200$, each of 3 bytes: $307200 \cdot 3 = 921600$ bytes. The answer $307200$ forgets the 3 bytes per pixel. The answer $7372800$ counts bits, not bytes. The first two add width and height instead of multiplying them.

Q: Ten seconds of mono audio with 44,100 samples per second and 16 bits per sample: how many bytes?
- $44100$
- $441000$
+ $882000$
- $1764000$
- $7056000$
= Each sample has 16 bits, that is 2 bytes. In one second there are $44100 \cdot 2 = 88200$ bytes, in ten seconds $882000$. The answer $441000$ counts one byte per sample. The answer $1764000$ holds for stereo, with two channels. The answer $7056000$ counts bits.

Q: How much is the binary number 110101 in base 10?
- $43$
- $52$
+ $53$
- $106$
- $110101$
= The 1s are in the positions worth 32, 16, 4 and 1: $32 + 16 + 4 + 1 = 53$. The answer $43$ reads the bits backwards: 101011 is worth 43. The answer $106$ is 1101010, with an extra 0 on the right, which doubles the value. The answer $52$ forgets the last 1, the one worth 1.

Q: How is 44 written in binary?
- $1101$
+ $101100$
- $100100$
- $101010$
- $110100$
= With the divisions: 44 : 2 = 22 remainder 0, 22 : 2 = 11 remainder 0, 11 : 2 = 5 remainder 1, 5 : 2 = 2 remainder 1, 2 : 2 = 1 remainder 0, 1 : 2 = 0 remainder 1. From the last to the first: 101100. Check: $32 + 8 + 4 = 44$. The answer $1101$ reads the remainders from the first to the last, 001101, and loses the zeros in front: it is worth 13. The others are worth 36, 42 and 52.

Q: With 8 bits, unsigned integers, you compute 11110000 + 00100000. What do you get?
+ 00010000, with overflow: the sum is 272 and does not fit in 8 bits.
- 00010000, without overflow.
- 100010000, without overflow: 8 bits are enough.
- 11010000, with overflow.
- 11111111, because with 8 bits you cannot go beyond 255.
= 11110000 is worth 240 and 00100000 is worth 32: the sum is 272, that is 100010000, which has 9 bits. With 8 bits the final carry on the left is lost and 00010000 remains, that is 16: it is overflow, because with 8 bits you only reach 255. The third answer writes the number correctly, but with 9 bits. A computer does not stop at 255: it keeps the 8 bits on the right.

Q: How much is the binary number 10.011 worth?
- 2 and 11/100
- 2.11
+ 2 and 3/8
- 2 and 3/4
- 3 and 3/8
= Before the point 10 is worth 2. After the point the positions are worth 1/2, 1/4 and 1/8: there are 1/4 and 1/8, that is $2/8 + 1/8 = 3/8$. In all 2 and 3/8. The first two answers read the digits after the point as in base ten. The answer 2 and 3/4 gets the values of the positions wrong, as if they were 1/2 and 1/4.

Q: Which of these numbers, written in base 2, has infinitely many digits after the point?
- $0.5$
- $0.25$
- $0.75$
- $0.125$
+ $0.1$
= 0.5 is 1/2, that is 0.1 in binary; 0.25 is 1/4, that is 0.01; 0.75 is $1/2 + 1/4$, that is 0.11; 0.125 is 1/8, that is 0.001. One tenth, instead, is not a finite sum of halves, quarters, eighths: in binary it is 0.000110011… with 0011 repeating forever.
```

## Exercises

::: exercise basic Question 1 of §1.4: a message in ASCII
What does this message in ASCII say, one byte per symbol? 01000011 01101111 01101101 01110000 01110101 01110100 01100101 01110010 00100000 01010011 01100011 01101001 01100101 01101110 01100011 01100101
::: solution
A trick for letters: uppercase letters start with 010 and are worth 64 plus the position of the letter in the alphabet; lowercase letters start with 011 and are worth 96 plus the position.

1. 01000011 is worth 67, that is $64 + 3$: the third uppercase letter, C.
2. 01101111 is worth 111, that is $96 + 15$: the fifteenth lowercase letter, o. In the same way 01101101 is m, 01110000 is p, 01110101 is u, 01110100 is t, 01100101 is e, 01110010 is r.
3. 00100000 is worth 32: the space.
4. 01010011 is worth 83, that is $64 + 19$: S. Then c, i, e, n, c, e.

The message is "Computer Science", as in the book's answers.
:::

::: exercise basic Questions 5 and 6 of §1.4: conversions
(a) Write in base 10: 0101, 1001, 1011, 0110, 10000, 10010. (b) Write in binary: 6, 13, 11, 18, 27, 4.
::: solution
(a) Add up the positions with a 1.

| Binary | Sum | Decimal |
|---|---|--:|
| 0101 | 4 + 1 | 5 |
| 1001 | 8 + 1 | 9 |
| 1011 | 8 + 2 + 1 | 11 |
| 0110 | 4 + 2 | 6 |
| 10000 | 16 | 16 |
| 10010 | 16 + 2 | 18 |

(b) With the powers of 2, or with the divisions.

| Decimal | Sum of powers of 2 | Binary |
|--:|---|---|
| 6 | 4 + 2 | 110 |
| 13 | 8 + 4 + 1 | 1101 |
| 11 | 8 + 2 + 1 | 1011 |
| 18 | 16 + 2 | 10010 |
| 27 | 16 + 8 + 2 + 1 | 11011 |
| 4 | 4 | 100 |

These are the answers the book gives.
:::

::: exercise basic Questions 1 and 2 of §1.5: more conversions
(a) Write in base 10: 101010, 100001, 10111, 0110, 11111. (b) Write in binary: 32, 64, 96, 15, 27.
::: solution
1. (a) 101010 is $32 + 8 + 2 = 42$; 100001 is $32 + 1 = 33$; 10111 is $16 + 4 + 2 + 1 = 23$; 0110 is $4 + 2 = 6$; 11111 is $16 + 8 + 4 + 2 + 1 = 31$.
2. (b) 32 is a power of 2: 100000. So is 64: 1000000. Then $96 = 64 + 32$: 1100000. $15 = 8 + 4 + 2 + 1$: 1111. $27 = 16 + 8 + 2 + 1$: 11011.

Quick check: 11111 is worth $32 - 1$, because it is all 1s up to the position of 16. In general $n$ bits all at 1 are worth $2^n - 1$.
:::

::: exercise intermediate Question 2 of §1.4: uppercase and lowercase
In ASCII, what is the link between the code of an uppercase letter and that of the same letter in lowercase?
::: solution
1. A is 01000001, that is 65; a is 01100001, that is 97.
2. The two bytes are equal except for one bit, the sixth from the right, the one of the 32 coin: 0 in the uppercase letter, 1 in the lowercase one.
3. That bit is worth 32: the lowercase letter has a code 32 higher than the uppercase one. The same holds for all the 26 letters.

It is the book's answer. The channel A slides say the same thing the other way round: to go from lowercase to uppercase you subtract 32.
:::

::: exercise intermediate Question 3 of §1.4: writing in ASCII
Write in ASCII, one byte per symbol, the sentence "Does 2 + 3 = 5?".
::: solution
There are 15 symbols, spaces included.

| Symbol | Code | Byte |
|:-:|--:|:-:|
| D | 68 | 01000100 |
| o | 111 | 01101111 |
| e | 101 | 01100101 |
| s | 115 | 01110011 |
| space | 32 | 00100000 |
| 2 | 50 | 00110010 |
| space | 32 | 00100000 |
| + | 43 | 00101011 |
| space | 32 | 00100000 |
| 3 | 51 | 00110011 |
| space | 32 | 00100000 |
| = | 61 | 00111101 |
| space | 32 | 00100000 |
| 5 | 53 | 00110101 |
| ? | 63 | 00111111 |

The digits are symbols: "2" is 00110010, not the number 2. The book's question also has a first sentence, "Stop!" Cheryl shouted. In the answer in the appendix, published on the channel A Moodle page, the second-to-last byte is printed 01110100, which is the t: the d of "shouted" is 01100100.
:::

::: exercise intermediate Questions 7 and 8 of §1.4: three bytes and numbers with dots
(a) What is the largest number that can be written with three bytes, one ASCII digit per byte? And in binary? (b) In dotted decimal notation each byte is written as a number in base 10, and the numbers are separated by a dot: 00001100 00000101 becomes 12.5. Write in this way 0000111100001111, 001100110000000010000000 and 0000101010100000.
::: solution
1. (a) In ASCII three bytes are three digits: the maximum is 999. In binary 24 bits reach $2^{24} - 1 = 16777215$.
2. (b) Split each row into bytes and convert each byte.
3. 00001111 00001111: 15 and 15, that is 15.15.
4. 00110011 00000000 10000000: 51, 0 and 128, that is 51.0.128.
5. 00001010 10100000: 10 and 160, that is 10.160.

It is the notation of network addresses, like 192.168.1.1: four bytes, written one by one in base 10.
:::

::: exercise intermediate Question 10 of §1.4: an hour of music
An hour of stereo music is recorded with 44,100 samples per second, as on CDs. How much space does it take, compared with a CD?
::: solution
1. Each sample has 16 bits, that is 2 bytes, and there are 2 channels.
2. In one second: $44100 \cdot 2 \cdot 2 = 176400$ bytes.
3. In one hour, that is 3600 seconds: $176400 \cdot 3600 = 635040000$ bytes.
4. That is about 635 MB, and a CD holds from 600 to 700 MB: it almost fills it.

It is the book's answer.
:::

::: exercise intermediate Questions 3 and 4 of §1.5: fractions
(a) Write in base 10: 11.01; 101.111; 10.1; 110.011; 0.101. (b) Write in binary: 4 and 1/2; 2 and 3/4; 1 and 1/8; 5/16; 5 and 5/8.
::: solution
(a) After the point the positions are worth 1/2, 1/4, 1/8.

| Binary | Calculation | Value |
|---|---|---|
| 11.01 | 3 + 1/4 | 3 and 1/4 |
| 101.111 | 5 + 1/2 + 1/4 + 1/8 | 5 and 7/8 |
| 10.1 | 2 + 1/2 | 2 and 1/2 |
| 110.011 | 6 + 1/4 + 1/8 | 6 and 3/8 |
| 0.101 | 1/2 + 1/8 | 5/8 |

(b) Write the fraction as a sum of halves, quarters, eighths, sixteenths.

| Number | Sum | Binary |
|---|---|---|
| 4 and 1/2 | 4 + 1/2 | 100.1 |
| 2 and 3/4 | 2 + 1/2 + 1/4 | 10.11 |
| 1 and 1/8 | 1 + 1/8 | 1.001 |
| 5/16 | 1/4 + 1/16 | 0.0101 |
| 5 and 5/8 | 5 + 1/2 + 1/8 | 101.101 |

These are the book's answers, which also write the numbers with the point.
:::

::: exercise hard Question 5 of §1.5: additions
Compute in binary: (a) 11011 + 1100; (b) 1010.001 + 1.101; (c) 11111 + 0001; (d) 111.11 + 00.01.
::: solution
1. (a) In columns, from the right: 1 + 0 = 1; 1 + 0 = 1; 0 + 1 = 1; 1 + 1 = 10, I write 0 and carry 1; 1 + 1 carried = 10, I write 0 and carry 1, which goes into a new column. Result 100111. Check: $27 + 12 = 39$, and 100111 is worth $32 + 4 + 2 + 1 = 39$.
2. (b) With the points in a column: 1010.001 + 0001.101. After the point, from the right: 1 + 1 = 10, I write 0 and carry 1; 0 + 0 + 1 = 1; 0 + 1 = 1. Before the point: 0 + 1 = 1; 1 + 0 = 1; 0 + 0 = 0; 1 + 0 = 1. Result 1011.110. Check: $10.125 + 1.625 = 11.75$.
3. (c) 11111 + 00001: each column gives 10 with the carry, up to a new column. Result 100000. Check: $31 + 1 = 32$.
4. (d) 111.11 + 000.01: after the point 1 + 1 = 10, then 1 + 0 + 1 = 10; before the point three more times 10. Result 1000.00. Check: $7.75 + 0.25 = 8$.

These are the book's answers. In (c), with 5 unsigned bits, it would be overflow: the result has 6 bits.
:::

::: exercise hard UTF-8 backwards
A file contains these bytes, written in hexadecimal: 43 69 74 74 C3 A0. Which word is written there?
::: solution
1. The first four bytes start with 0 in binary, because they are less than 80 in hexadecimal: they are ASCII symbols. 43 is worth 67, the C; 69 is worth 105, the i; 74 is worth 116, the t. So "Citt".
2. C3 in binary is 11000011: it starts with 110, so the symbol takes two bytes. The next byte, A0, is 10100000: it starts with 10, as it must.
3. Remove the fixed parts 110 and 10: 00011 and 100000 remain. Together: 00011100000, which is worth $128 + 64 + 32 = 224$, that is E0 in hexadecimal.
4. U+00E0 is à. The word is "Città", Italian for city.
:::

::: exercise exam A photo and a sound
A photo of 800 × 600 pixels in RGB, without compression. (a) How many bytes does it take? (b) How many KB, with 1 KB = 1024 bytes? (c) How many seconds of CD-quality stereo audio take the same space?
::: solution
1. (a) The pixels are $800 \cdot 600 = 480000$, each of 3 bytes: $1440000$ bytes.
2. (b) $1440000 : 1024 = 1406.25$ KB, that is about 1.4 MB.
3. (c) One second of CD stereo audio takes $44100 \cdot 2 \cdot 2 = 176400$ bytes.
4. $1440000 : 176400$ is about 8.2: a single photo takes as much as a little more than 8 seconds of music.
:::

::: exercise intermediate The same bits, three meanings
The byte 00110101 is read as an unsigned integer, as an ASCII character and as the amount of red of an RGB pixel with green and blue at zero. What does it mean in the three cases?
::: solution
1. As an integer: the coins are 32, 16, 4 and 1, so it is $32 + 16 + 4 + 1 = 53$.
2. As an ASCII character: code 53 is the digit "5". The number 5, written in binary, would instead be 00000101.
3. As red: the pixel is (53, 0, 0), a dark red, because 53 is little compared with the maximum 255.

The bits are the same: the rule you read them with decides whether they are a number, a letter or a colour.
:::

::: exercise intermediate Carry in the middle or overflow?
With 8 unsigned bits compute (a) 01111111 + 00000001 and (b) 11111111 + 00000001. Say what is left in the 8 bits and whether there is overflow.
::: solution
1. (a) 01111111 is 127. Adding 1, the seven 1s on the right become 0 and the carry reaches the eighth column: 10000000, that is 128. It fits, because the maximum is 255: no overflow.
2. (b) 11111111 is 255. Adding 1, a carry comes out of the eighth column too: the true result is 100000000, that is 256, which has 9 bits. In the 8 bits 00000000 is left, that is 0: there is overflow.

It does not matter how many carries there are in the middle; what matters is whether a carry comes out of the last column.
:::

## Review questions

::: question What is a code? Why is ASCII not enough for Italian?
A code is a table that gives each symbol a row of bits. ASCII has only 128 symbols, designed for English: the accented letters like è and à are missing, and so are symbols like the euro sign.
:::

::: question What is the difference between Unicode and UTF-8?
Unicode is the table: it gives a number, the code point, to every symbol of every language. UTF-8 is a way of writing those numbers in bytes, from 1 to 4 per symbol, with a single byte for the ASCII symbols.
:::

::: question Why are numbers written in binary and not in ASCII?
In ASCII each digit takes a byte: with 2 bytes you reach 99. In binary the same 16 bits reach 65535. Moreover calculations are done directly on the bits.
:::

::: question How is a bit-map image made? And a vector one?
A bit map is a grid of pixels, each written with some bits: in RGB three bytes, for red, green and blue. A vector image is a description of shapes, like lines and curves with their coordinates: it can be enlarged without blocks.
:::

::: question How is a sound written in bits? What does the space it takes depend on?
The wave is measured at regular intervals and the measurements, the samples, are kept. The space depends on how many samples per second, how many bits each sample has, the number of channels and the duration.
:::

::: question How do you go from base 2 to base 10, and from base 10 to base 2?
From base 2 to base 10 you add up the values of the positions with a 1: 1, 2, 4, 8… from the right. From base 10 to base 2 you divide by 2 until the quotient is 0 and read the remainders from the last to the first.
:::

::: question What is overflow for unsigned integers?
With $n$ bits you can write the integers from 0 to $2^n - 1$. If a sum is larger, the last column on the left gives a carry that has no room: the result does not fit, and it is overflow.
:::

## Glossary

```glossary
Code | A table that gives each symbol a row of bits (Italian *codice*).
ASCII | The 7-bit code of the symbols of English (*American Standard Code for Information Interchange*): 128 symbols, one byte each today.
Unicode | The table that gives a number to every symbol of every language, including mathematical symbols and emoji.
Code point | The number of a symbol in Unicode (Italian *punto di codice*), written U+ and then in hexadecimal: U+00E8 is è.
UTF-8 | The most used way of writing code points in bytes: from 1 to 4 bytes per symbol, 1 for the ASCII symbols.
Text file | A file made only of codes of symbols, one after the other (Italian *file di testo*).
Pixel | One of the small squares an image is made of (*picture element*).
Bit map | An image written as a grid of pixels (Italian *mappa di bit*).
RGB | The way of writing a colour with three numbers from 0 to 255: red, green and blue.
Vector image | An image described as a set of shapes with their coordinates: it can be enlarged without losing quality (Italian *immagine vettoriale*).
Sample | A measurement of the wave of a sound (Italian *campione*). Sampling is the procedure that takes the samples at regular intervals.
MIDI | A format that stores the instructions to play the music, not the wave (*Musical Instrument Digital Interface*).
Binary system | The way of writing numbers in base 2: each position is worth twice the one on its right (Italian *sistema binario*).
Radix point | The point of numbers in base 2: after it the positions are worth 1/2, 1/4, 1/8 (Italian *virgola binaria*; Italian writes a comma).
Carry | The 1 that moves to the column on the left when a column makes 2 or 3 (Italian *riporto*).
Unsigned integer | An integer from 0 upwards, written in binary with a fixed number of bits (Italian *intero senza segno*).
Overflow | When the result of a calculation does not fit in the available bits.
```

## Checklist

```checklist
- I can write and read a text in ASCII, and I know that uppercase and lowercase differ by 32.
- I know the difference between Unicode and UTF-8 and I can count the bytes of a text in UTF-8.
- I can write a colour in RGB, also in hexadecimal, and compute the bytes of an image.
- I know how a sound is recorded and I can compute the bytes it takes.
- I can go from base 2 to base 10 and from base 10 to base 2, also with the point.
- I can add in binary and recognise overflow with $n$ bits.
```

## Sources

- R. Johnsonbaugh, J. G. Brookshear, D. Brylow, *Fondamenti dell'Informatica*, Pearson 2026 (ISBN 9788891939456), the course textbook: part 1, which is chapter 1 of J. G. Brookshear, D. Brylow, *Computer Science: an overview*. Section 1.4 "Representing Information as Bit Patterns": text, ASCII and Unicode (figure 1.11), numbers, images, RGB, luminance and chrominance, vector images, sounds, sampling and MIDI. Section 1.5 "The Binary System": binary notation (figures 1.15 and 1.16), the algorithm of the divisions (figures 1.17 and 1.18), addition, fractions (figure 1.19). Answers to the questions of the two sections in the book's appendix, published on the channel A Moodle page.
- Summary of the lesson of 02/10/2026 on the channel B Moodle page: "Alfabeti ASCII e UTF-8, colori e suoni, conversioni tra binario e decimale, frazioni binarie, addizione di interi senza segno" (the ASCII and UTF-8 alphabets, colours and sounds, conversions between binary and decimal, binary fractions, addition of unsigned integers).
- Channel A slides 2026/27, "Cenni sulla codifica dei dati" (notes on data encoding) (F. Cardone, channel A Moodle page, open to guests): the ASCII code and the passage between uppercase and lowercase, base 2 with the divisions, addition in base 2.
- The Unicode standard (unicode.org) for the code points, and [RFC 3629](https://www.rfc-editor.org/rfc/rfc3629.html#section-3) for the byte pattern of UTF-8.
- The explanations in words, the examples, the "Try it" boxes, the interactive tools, the quizzes and the exercises without a book number are original to these notes.
