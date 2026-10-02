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
  Letters, colours and sounds become numbers, and numbers become rows of zeros and ones. Here you see how a text in
  any language, a photo and a song are written in bits, and how to work with numbers in base 2: conversions, sums and
  numbers with a point.
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

- Each symbol of a text becomes a number, written in bits. The **ASCII** code uses 7 bits, usually placed in a byte: A is 65, that is 01000001.
- **Unicode** gives a number to every symbol of every language, including è, € and emoji. **UTF-8** writes those numbers with 1, 2, 3 or 4 bytes; for the ASCII symbols it uses the same byte as ASCII.
- An image is a grid of **pixels**. With the **RGB** system each pixel has three numbers from 0 to 255, for red, green and blue: 3 bytes per pixel.
- A sound is recorded by measuring the wave many times a second: each measurement is a **sample**. A CD takes 44,100 per second, of 16 bits each.
- In the **binary system** each position is worth twice the one on its right: 1, 2, 4, 8, 16… So 1101 is worth 8 + 4 + 1 = 13.
- To go from base 10 to base 2 you divide by 2 several times and read the remainders from the last to the first.
- In binary you add in columns as in base 10, but 1 + 1 makes 10: I write 0 and carry 1. With $n$ bits the unsigned integers go from 0 to $2^n - 1$; if the sum does not fit there is **overflow**.
- After the point the positions are worth 1/2, 1/4, 1/8…: 101.101 is worth 5 and 5/8.

> [!CHANNELS]
> In channel B this is the lesson of Friday 02/10, from 11:00 to 13:00. For the lecturer it is lesson 3, because the first one was an introduction: here it is lesson 02. Stefano Berardi covered sections 1.4 and 1.5 of the book: the ASCII and UTF-8 alphabets, colours and sounds, conversions between binary and decimal, binary fractions, addition of unsigned integers. Sections 1.2 and 1.3 are in [lesson 01](01_bits_gates_hexadecimal.html). In channel A the slides "Cenni sulla codifica dei dati" (notes on data encoding) by Felice Cardone do the same conversions with divisions by 2, and recall that in ASCII the lowercase letter is obtained from the uppercase one by adding 32. In channel C the same sections are in the slides "Rappresentazione" (representation) by Luca Paolini.

## Text: the ASCII code (book, §1.4)

Two friends write secret messages to each other with a rule: A is 1, B is 2, C is 3, and so on. To write CIAO (Italian for hello) they send the numbers 3, 9, 1 and 15. A computer does the same thing with texts: each symbol has its number, and the number is written in bits.

A table that gives each symbol its own row of bits is called a **code**. The symbols are letters, digits and punctuation marks, but also commands like "go to a new line".

The most famous code is **ASCII** (*American Standard Code for Information Interchange*, pronounced "ask-ee"). It uses 7 bits per symbol, so it has $2^7 = 128$ symbols: the uppercase and lowercase letters of the English alphabet, the digits, punctuation, the space and some commands. Today each symbol takes a whole byte, with an extra 0 on the left.

Here is the word "Hello." in ASCII, as in figure 1.11 of the book.

| Symbol | Code | Byte |
|:-:|--:|:-:|
| H | 72 | 01001000 |
| e | 101 | 01100101 |
| l | 108 | 01101100 |
| l | 108 | 01101100 |
| o | 111 | 01101111 |
| . | 46 | 00101110 |

The complete table is in the appendices of the book. It is enough to remember where the most used groups start.

| Symbols | Codes | In hexadecimal | First and last byte |
|---|:-:|:-:|---|
| space | 32 | 20 | 00100000 |
| digits from 0 to 9 | from 48 to 57 | from 30 to 39 | from 00110000 to 00111001 |
| uppercase from A to Z | from 65 to 90 | from 41 to 5A | from 01000001 to 01011010 |
| lowercase from a to z | from 97 to 122 | from 61 to 7A | from 01100001 to 01111010 |

Two things to notice.

- **Uppercase and lowercase** differ by 32: A is 65, a is 97. In the bits only one bit changes, the sixth from the right, which is worth exactly 32: A is 01000001, a is 01100001. It is question 2 of §1.4.
- **Digits** are symbols like the others. The symbol "7" has code 55, that is 00110111. The last four bits, 0111, are 7 in binary, but for the computer the symbol "7" is not the number 7: it is a drawing to print.

::: try (a) The ASCII code of B is 66. What is the code of b? (b) Which symbol has the byte 00110011?
(a) The lowercase letter is worth 32 more: $66 + 32 = 98$.

(b) 00110011 is worth $32 + 16 + 2 + 1 = 51$, that is $48 + 3$: it is the symbol "3". How to compute the value of a byte you see further on, in the section on the binary system.
:::

> [!REMEMBER]
> - A code gives each symbol a row of bits. ASCII uses 7 bits, that is 128 symbols, and today one byte per symbol.
> - Uppercase and lowercase differ by 32: only one bit changes, the sixth from the right.
> - The symbol "7" is not the number 7.

## All languages: Unicode and UTF-8 (book, §1.4)

Try writing the Italian word "perché" (why) in ASCII: you cannot. The é is not there, and neither is the euro sign.

For the other languages 8-bit codes were created, with 256 symbols: the first 128 are those of ASCII, the others change from language to language. The code ISO 8859-1, called Latin-1, for example, has the accented letters of Western Europe. The book explains the two limits of this idea: 256 symbols are not enough for languages like Chinese, and a text in several languages does not know which table to use.

Today's solution is **Unicode**: a single table with the symbols of all languages, plus mathematical symbols, emoji and much more. Each symbol has a number, called **code point**, which is written with "U+" followed by the number in hexadecimal. The numbers reach 21 bits: there is room for more than a million symbols. The first 128 are those of ASCII.

| Symbol | Code point | In decimal |
|:-:|:-:|--:|
| A | U+0041 | 65 |
| è | U+00E8 | 232 |
| € | U+20AC | 8364 |
| 😀 | U+1F600 | 128512 |

Unicode only says which number each symbol has. To store it in memory it must be written in bytes, and the most used way is **UTF-8**: from 1 to 4 bytes per symbol, depending on how large the number is.

| Code points | Bits of the number | Bytes | Pattern of the bytes |
|---|:-:|:-:|---|
| from U+0000 to U+007F | up to 7 | 1 | 0xxxxxxx |
| from U+0080 to U+07FF | up to 11 | 2 | 110xxxxx 10xxxxxx |
| from U+0800 to U+FFFF | up to 16 | 3 | 1110xxxx 10xxxxxx 10xxxxxx |
| from U+10000 to U+10FFFF | up to 21 | 4 | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx |

In place of the x go the bits of the code point, in order. The first byte says how many bytes the symbol has: as many 1s as there are bytes, then a 0. The bytes that follow all start with 10. So, reading a file, you always know where each symbol starts.

The ASCII symbols take a single byte that starts with 0: it is exactly the ASCII byte. So a text in ASCII is already a text in UTF-8.

> [!METHOD] From a symbol to the UTF-8 bytes
> 1. Find the code point of the symbol and write it in binary.
> 2. Count the bits and choose the row of the table: up to 7 bits one byte, up to 11 two, up to 16 three, up to 21 four.
> 3. Add 0s on the left until there are as many bits as the x of the row.
> 4. Put the bits in place of the x, from left to right.

> [!EXAMPLE] The è and the euro
> **The è.** The code point is U+00E8, that is 232, in binary 11101000: 8 bits, so two bytes are needed, which have room for 11 bits. With three 0s in front: 00011101000. The first 5 bits go into the first byte, the other 6 into the second. The first byte is 110 followed by 00011, the second is 10 followed by 101000: 11000011 10101000, that is C3 A8 in hexadecimal.
>
> **The euro.** The code point is U+20AC, in binary 0010000010101100: 16 bits, so three bytes. The bits are split into 4, 6 and 6: 0010, 000010 and 101100. The bytes are 1110 followed by 0010, 10 followed by 000010, 10 followed by 101100: E2 82 AC.

> [!PITFALL] UTF-8 does not mean "8 bits per symbol"
> The 8 says that UTF-8 works in bytes, but a symbol can take from 1 to 4 bytes. Counting the symbols is not enough to know how many bytes a text takes: "perché" has 6 symbols and takes 7 bytes.

A file made only of codes of symbols, one after the other, is called a **text file**: .txt files are text files, but so are programs in C and web pages. Word processors, like Word, also save bold, fonts and margins with codes of their own: a .docx file is not a text file.

> [!NOTE] Not only UTF-8
> Unicode can also be written in other ways. UTF-16, for example, uses 2 or 4 bytes per symbol, and Windows and Java use it internally. On the web, instead, almost all pages are in UTF-8.

Type a word in the tool below: for each symbol you see the code point and the UTF-8 bytes, with the fixed parts of the pattern separated from the bits of the number.

```widget codifica
title: A text in Unicode and UTF-8: type whatever you like
mode: text
text: Ciao, è 5€!
```

::: try (a) How many bytes does the Italian word "caffè" (coffee) take in UTF-8? (b) Can it be written in ASCII?
(a) c, a, f and f are ASCII symbols: one byte each. The è takes 2 bytes. In all $4 + 2 = 6$ bytes.

(b) No: the è is not among the 128 ASCII symbols.
:::

> [!REMEMBER]
> - Unicode gives a number, the code point U+…, to every symbol of every language. UTF-8 writes that number with 1, 2, 3 or 4 bytes.
> - In UTF-8 the ASCII symbols take one byte, equal to the ASCII one.
> - The first byte of a symbol says how many bytes it has: 0…, 110…, 1110… or 11110…; the bytes that follow start with 10.

## Numbers: better in binary (book, §1.4)

To write the number 25 in ASCII you need two symbols, "2" and "5": two bytes, that is 16 bits. With the same 16 bits used as digits in base 2 you can write any number from 0 to 65535. That is why the book concludes that numbers are stored in the **binary system**, which you see in the next sections.

Why exactly 65535? With 16 bits you can write $2^{16} = 65536$ sequences, as in [lesson 01](01_bits_gates_hexadecimal.html). The first is worth 0, so the last is worth 65535.

> [!IDEA]
> With $n$ bits you can write the integers from 0 to $2^n - 1$. They are called **unsigned integers**: no negative numbers and no point. Those need other systems, in sections 1.6 and 1.7 of the book.

Question 7 of §1.4 makes the same comparison with three bytes: in ASCII you write three digits, so you reach 999; in binary you reach $2^{24} - 1 = 16777215$.

::: try With one byte, what is the largest number that can be written in binary? And with one ASCII digit?
In binary $2^8 - 1 = 255$, that is 11111111. In ASCII a byte holds a single digit: you reach 9.
:::

> [!REMEMBER]
> - With $n$ bits, in binary, you write the unsigned integers from 0 to $2^n - 1$.
> - In ASCII each digit takes a whole byte: for numbers it is a waste.

## Images: pixels and colours (book, §1.4)

Zoom in a lot on a photo on your phone: at some point you see many small squares, each of a single colour. They are the **pixels**, from *picture elements*.

An image made like this is called a **bit map**: a grid of pixels, each written with some bits. In a black and white image one bit per pixel is enough, for example 1 for black and 0 for white. Here is an F of five rows of five pixels.

| Row | Bits | Drawing |
|:-:|:-:|:-:|
| 1 | 11111 | ■■■■■ |
| 2 | 10000 | ■□□□□ |
| 3 | 11110 | ■■■■□ |
| 4 | 10000 | ■□□□□ |
| 5 | 10000 | ■□□□□ |

### Colours in RGB

For colours the most common way is **RGB**: each pixel has three numbers, how much red, how much green and how much blue. Each one goes from 0 to 255, so it takes a byte: 3 bytes per pixel in all.

The three colours mix like three lights pointed at the same spot. Red and green together give yellow; all three at maximum give white; all at zero, that is light off, give black. Three equal values give a grey.

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

The last column is the way colours are written in web pages: one byte per colour, so two hexadecimal digits each, as in [lesson 01](01_bits_gates_hexadecimal.html). With 3 bytes the possible colours are $2^{24} = 16777216$, more than sixteen million.

Try mixing the colours in the tool.

```widget codifica
title: Red, green and blue: three bytes for one pixel
mode: colours
r: 255
g: 128
b: 0
```

> [!NOTE] Brightness and colour
> The book also describes another way: for each pixel you write the brightness (*luminance*) and two numbers for the colour (*chrominance*). Television and the JPEG format use a similar idea, because the eye notices differences in brightness more than differences in colour.

### How much an image weighs

The screen of a Full HD laptop has 1920 × 1080 = 2073600 pixels. At 3 bytes per pixel, an image as large as the screen takes 6220800 bytes, about 6 MB. That is why images are compressed, for example in JPEG: section 1.9 of the book tells the story.

> [!METHOD] How many bytes an image takes without compression
> Multiply the width by the height, in pixels, and the result by the bytes of each pixel: 3 in RGB. To get the bits multiply again by 8.

### Vector images

A bit map has a limit: if you enlarge it, you also enlarge the pixels, and the image becomes blocky. There is another way: describing the image as a set of shapes, that is lines, curves and polygons with their coordinates. It is a bit like a list of instructions to draw it. It is called a **vector image**.

To enlarge a vector image the shapes are redrawn larger: no blocks. This is how fonts that can be enlarged at will are made, like Microsoft and Apple's TrueType and Adobe's PostScript, as well as technical drawings and .svg files. For photographs, instead, the bit map stays more faithful: it is question 9 of §1.4.

::: try (a) What colour is (255, 255, 0)? And (0, 255, 255)? (b) How many bytes does an image of 100 × 100 pixels take in RGB, without compression?
(a) The first is yellow: red plus green. The second is cyan, a light blue: green plus blue.

(b) The pixels are $100 \cdot 100 = 10000$, each of 3 bytes: $30000$ bytes.
:::

> [!REMEMBER]
> - A bit-map image is a grid of pixels. In RGB each pixel has 3 bytes, red, green and blue, from 0 to 255: $2^{24}$ colours in all.
> - Bytes of an image without compression: width × height × bytes per pixel.
> - Vector images describe shapes: they can be enlarged without blocks, but they are not good for photos.

## Sounds: samples (book, §1.4)

A sound is a vibration of the air, a wave. How high the wave is gives the volume; how dense it is gives the note, lower or higher.

To record a sound you measure the height of the wave at regular intervals, many times a second, and keep the numbers. Each measurement is a **sample**, and the procedure is called **sampling**. The book gives the example of a wave recorded with the samples 0, 1.5, 2.0, 1.5, 2.0, 3.0, 4.0, 3.0, 0.

How many samples are needed?

- For a phone call 8000 samples per second are enough.
- A music CD uses **44,100 per second**, each of **16 bits**, and two channels for music in stereo, one per ear.

More samples per second and more bits per sample give a more faithful sound, but they take more space. In the tool below you see a wave, the samples taken at regular intervals and the sound that is rebuilt from the samples.

```widget codifica
title: Sampling a sound: fewer samples, less fidelity
mode: sound
```

> [!METHOD] How many bytes a sound takes
> Multiply the samples per second by the bytes of each sample, by the number of channels (1 if mono, 2 if stereo) and by the seconds.

> [!EXAMPLE] An hour of music on CD (question 10 of §1.4)
> Each sample has 16 bits, that is 2 bytes. In one second of stereo there are $44100 \cdot 2 \cdot 2 = 176400$ bytes. An hour has 3600 seconds: $176400 \cdot 3600 = 635040000$ bytes, about 635 MB. A CD holds from 600 to 700 MB: an hour of music almost fills it.

The **MIDI** format (*Musical Instrument Digital Interface*) does something else: it does not store the wave, but the instructions to play it, that is which instrument, which note and for how long. It is much more compact. According to the book, a clarinet playing a D for two seconds takes 3 bytes in MIDI, against more than two million bits with 44,100 samples per second. The drawback: the real sound depends on the electronic instrument that carries out the instructions.

::: try How many bytes does one minute of a phone call take, recorded with 8000 samples per second, 8 bits per sample and a single channel?
Each sample takes 8 bits, that is one byte. In one second there are 8000 bytes, in one minute $8000 \cdot 60 = 480000$ bytes.
:::

> [!REMEMBER]
> - A sound is recorded with samples, that is measurements of the wave taken at regular intervals.
> - CD: 44,100 samples per second, 16 bits each, two channels.
> - Bytes of a sound: samples per second × bytes per sample × channels × seconds.

## The binary system (book, §1.5)

In the number 375 the 3 is worth three hundred, the 7 seventy and the 5 five: the same digit is worth more the further left it is. In base ten each position is worth ten times the one on its right: units, tens, hundreds.

In the **binary system**, or **base 2**, the digits are only 0 and 1, and each position is worth **twice** the one on its right, as in figure 1.15 of the book.

| Position, from the right | 8th | 7th | 6th | 5th | 4th | 3rd | 2nd | 1st |
|---|--:|--:|--:|--:|--:|--:|--:|--:|
| Value | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

### From binary to decimal

To know how much a binary number is worth you add up the values of the positions where there is a 1. For example 100101, as in figure 1.16 of the book:

| Bit | 1 | 0 | 0 | 1 | 0 | 1 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|
| Value of the position | 32 | 16 | 8 | 4 | 2 | 1 |
| Does it count? | yes | no | no | yes | no | yes |

The total is $32 + 4 + 1 = 37$. You also write $100101_2 = 37_{10}$: the small number at the bottom says the base, so 100101 is not confused with one hundred thousand one hundred and one.

Now two things of [lesson 01](01_bits_gates_hexadecimal.html) make sense. The leftmost bit of a cell is called "most significant" because it is the one worth the most. And the hexadecimal digits are the values of the groups of four bits, which are worth 8, 4, 2 and 1.

Click the bits in the tool and watch how the value changes.

```widget codifica
title: From bits to a number: click the bits
mode: binary
bit: 00100101
```

### From decimal to binary

For the opposite journey the book gives an algorithm, in figure 1.17.

> [!METHOD] Divisions by 2
> 1. Divide the number by 2 and write down the remainder, which is 0 or 1.
> 2. As long as the quotient is not 0, divide the quotient by 2 and write down the remainder.
> 3. When the quotient is 0, read the remainders from the last to the first: it is the number in binary.

> [!EXAMPLE] 13 in binary (figure 1.18 of the book)
> | Division | Quotient | Remainder |
> |---|--:|--:|
> | 13 : 2 | 6 | 1 |
> | 6 : 2 | 3 | 0 |
> | 3 : 2 | 1 | 1 |
> | 1 : 2 | 0 | 1 |
>
> The remainders, from the last to the first: 1101. Check: $8 + 4 + 1 = 13$.

> [!IDEA]
> The remainder of the division by 2 says whether the number is even, remainder 0, or odd, remainder 1: it is exactly the last bit. Dividing by 2 removes the last bit. So the bits come out from right to left, and that is why the remainders are read backwards.

With small numbers there is also another way: take away the largest power of 2 that fits, then repeat with what is left. For example $45 = 32 + 8 + 4 + 1$: there are 32, 8, 4 and 1, while 16 and 2 are missing, so 45 is written 101101.

```widget codifica
title: Divisions by 2, step by step: choose a number
mode: divisions
number: 13
```

::: try (a) How much is 101010 in decimal? (b) Write 27 in binary.
(a) The 1s are in the positions worth 32, 8 and 2: $32 + 8 + 2 = 42$.

(b) 27 : 2 = 13 remainder 1; 13 : 2 = 6 remainder 1; 6 : 2 = 3 remainder 0; 3 : 2 = 1 remainder 1; 1 : 2 = 0 remainder 1. From the last to the first: 11011. Check: $16 + 8 + 2 + 1 = 27$.
:::

> [!REMEMBER]
> - In base 2 the positions are worth 1, 2, 4, 8, 16…, from the right. The value is the sum of the positions with a 1.
> - From base 10 to base 2: divide by 2 until the quotient is 0 and read the remainders from the last to the first.
> - Always check the other way round: convert back and see if it matches.

## Addition in binary (book, §1.5)

In base ten, to do 58 + 27 in columns: 8 + 7 makes 15, I write 5 and carry 1; then 5 + 2 + 1 makes 8. The result is 85. In base 2 you do it the same way, but the possible sums in a column are few.

| In the column | It makes | I write | I carry |
|---|---|:-:|:-:|
| 0 + 0 | zero | 0 | 0 |
| 0 + 1 or 1 + 0 | one | 1 | 0 |
| 1 + 1 | two, that is 10 | 0 | 1 |
| 1 + 1 + 1 carried | three, that is 11 | 1 | 1 |

Here is the book's example, 00111010 + 00011011, that is 58 + 27. You start from the right-hand column; the first row holds the carries that come from the right.

| | 8th | 7th | 6th | 5th | 4th | 3rd | 2nd | 1st |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| carries | 0 | 1 | 1 | 1 | 0 | 1 | 0 | |
| 58 | 0 | 0 | 1 | 1 | 1 | 0 | 1 | 0 |
| 27 | 0 | 0 | 0 | 1 | 1 | 0 | 1 | 1 |
| sum, 85 | 0 | 1 | 0 | 1 | 0 | 1 | 0 | 1 |

Check: 01010101 is worth $64 + 16 + 4 + 1 = 85$, and $58 + 27 = 85$.

### Unsigned integers and overflow

With 8 bits the unsigned integers go from 0 to 255. What happens if the sum is larger? Try 200 + 100, that is 11001000 + 01100100: you get 100101100, that is 300, which has 9 bits. With 8 bits the final carry on the left is lost and what remains is 00101100, that is 44.

This is called **overflow** (in Italian also *trabocco*): the result does not fit in the available bits. People who write programs really meet it: an 8-bit counter, after 255, starts again from 0.

> [!PITFALL] The carry beyond the last column
> With $n$ bits, if the last column on the left gives a carry, the sum is at least $2^n$ and does not fit: there is overflow. The result written with $n$ bits is wrong by $2^n$, like 44 instead of 300.

```widget codifica
title: Column addition with 8 bits: click the bits of the two numbers
mode: addition
a: 00111010
b: 00011011
```

::: try (a) Compute 1011 + 0110. (b) With 4 bits, does the result fit?
(a) From the right: 1 + 0 makes 1; 1 + 1 makes 10, I write 0 and carry 1; 0 + 1 + 1 makes 10, I write 0 and carry 1; 1 + 0 + 1 makes 10, I write 0 and carry 1. The result is 10001, that is 17: indeed $11 + 6 = 17$.

(b) No. With 4 bits you reach $2^4 - 1 = 15$. The final carry is lost and 0001 remains, that is 1: overflow.
:::

> [!REMEMBER]
> - 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 10 (I write 0, carry 1), 1 + 1 + 1 = 11 (I write 1, carry 1).
> - With $n$ bits the unsigned integers go from 0 to $2^n - 1$: a carry beyond the last column means overflow.

## Fractions in binary (book, §1.5)

In base ten 3.75 means 3 units, 7 tenths and 5 hundredths: after the point the positions are worth 1/10, 1/100, 1/1000. In base 2, after the point, each position is worth **half** of the one on its left: 1/2, 1/4, 1/8, 1/16.

| Bit | 1 | 0 | 1 | . | 1 | 0 | 1 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Value of the position | 4 | 2 | 1 | | 1/2 | 1/4 | 1/8 |

So 101.101 is worth $4 + 1 + 1/2 + 1/8$, that is 5 and 5/8, or 5.625: it is figure 1.19 of the book.

> [!NOTE] Comma or point
> The book, in English, writes 101.101 with the point, and calls it the *radix point*. Italian writes a comma, as in the Italian version of these notes: 101,101. It is the same number.

### From a fraction to binary

Write the fraction as a sum of halves, quarters, eighths and so on. For example 2 and 3/4 is $2 + 1/2 + 1/4$, so 10.11. And 5/16 is $4/16 + 1/16$, that is $1/4 + 1/16$: it is written 0.0101.

> [!METHOD] Doubling the part after the point
> When the number is written with a point, like 0.625:
> 1. Double the part after the point: $0.625 \cdot 2 = 1.25$. The integer part, here 1, is the first bit after the point.
> 2. Keep only the part after the point, 0.25, and double again: 0.5, so the bit is 0.
> 3. Go on until nothing is left: $0.5 \cdot 2 = 1$, bit 1, and nothing is left.
> 4. The bits, in the order they come out: 0.625 is written 0.101.

> [!BEYOND] · numbers that never end in binary
> In base 2 some fractions never end, like 1/3 in base ten. One tenth becomes 0.000110011001100…, with 0011 repeating forever. The computer has to cut it somewhere, and a small error appears. That is why in many programming languages 0.1 + 0.2 gives 0.30000000000000004. It comes back with floating point, in section 1.7 of the book.

### Adding with the point

You put the points one under the other and add as usual. The book's example: 10.011 + 100.110, that is 2 and 3/8 plus 4 and 3/4.

| Value of the position | 4 | 2 | 1 | . | 1/2 | 1/4 | 1/8 |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| carries | 0 | 0 | 1 | . | 1 | 0 | |
| 2 and 3/8 | 0 | 1 | 0 | . | 0 | 1 | 1 |
| 4 and 3/4 | 1 | 0 | 0 | . | 1 | 1 | 0 |
| sum | 1 | 1 | 1 | . | 0 | 0 | 1 |

The result is 111.001, that is $7 + 1/8$: indeed 2 and 3/8 plus 4 and 3/4 makes 7 and 1/8.

In the tool below there are also three bits after the point.

```widget codifica
title: Bits with a point: click the bits
mode: binary
bit: 101101
fractions: 3
```

::: try (a) How much is 11.01 worth? (b) Write 4 and 1/2 in binary.
(a) $2 + 1 + 1/4$, that is 3 and 1/4.

(b) 4 is 100 and 1/2 is 0.1: in all 100.1.
:::

> [!REMEMBER]
> - After the point the positions are worth 1/2, 1/4, 1/8, 1/16…
> - From a fraction to binary: write the fraction as a sum of halves, quarters, eighths; or double the part after the point and take the integer parts.
> - To add, put the points in a column and add as usual.

## The symbols of this lesson

| Symbol | Read as | It means | Example |
|---|---|---|---|
| ASCII | "ask-ee" | the 7-bit code of the symbols of English | A = 65 = 01000001 |
| U+00E8 | "U plus zero zero E eight" | the code point of a symbol in Unicode, in hexadecimal | U+00E8 is è |
| UTF-8 | "U-T-F eight" | the way of writing code points with 1, 2, 3 or 4 bytes | è becomes C3 A8 |
| (R, G, B) | "R, G, B" | red, green and blue of a pixel, from 0 to 255 | (255, 255, 0) is yellow |
| #FF8000 | "hash F F eight zero zero zero" | an RGB colour in hexadecimal, two digits per colour | orange |
| $1101_2$ | "1101 in base two" | the small number at the bottom says the base | $1101_2 = 13_{10}$ |
| $2^n - 1$ | "two to the n minus one" | the largest unsigned integer with $n$ bits | with 8 bits, 255 |
| 101.101 | "one zero one point one zero one" | a binary number with a point: after the point 1/2, 1/4, 1/8 | 5 and 5/8 |

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
2. The two bytes are equal except for the sixth bit from the right, that is from the low-order end: 0 in the uppercase letter, 1 in the lowercase one.
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
- The Unicode standard (unicode.org) for the code points, and RFC 3629 for the byte pattern of UTF-8.
- The explanations in words, the examples, the "Try it" boxes, the interactive tools, the quizzes and the exercises without a book number are original to these notes.
