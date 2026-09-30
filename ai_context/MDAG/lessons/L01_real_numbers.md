---
course: MDAG
module: AG
lesson: L01
title: Real numbers
date: 2026-09-30
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Linear Algebra and Geometry · Channels A, B and C · Lesson L01
description: >-
  Notes on lesson L01 of Linear Algebra and Geometry (MDAG, part 2): number sets, construction of the real numbers,
  irrationality of √2, fields, order, notation and calculations with roots, with exam-style quizzes and worked
  exercises.
lede: >-
  The numbers you will use throughout the course: which ones there are, what they are called and which rules they
  follow. We start from the counting numbers and get to those with infinitely many digits after the decimal point.
  Plus: how to read the symbols of mathematics and how to calculate with roots without a calculator.
material: handouts
facts:
  Handouts: lesson 1 · pp. 2–5
  Book: Martelli, §1.1 and complement 1.II
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 2–3 hours, also in several sittings
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 1 "Numeri reali"; B. Martelli, Geometria e algebra lineare, §1.1, §1.5 and complement 1.II
italian_file: L01_numeri_reali.html
html_notes: notes/MDAG/L01_real_numbers.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L01_numeri_reali.md
---

## In brief

- This lesson is about **numbers**: which ones exist, what they are called and which letter stands for each kind.
- Numbers are divided into four families, one inside the other: the counting numbers, the integers (with the minus sign), the fractions and the real numbers (those that may have infinitely many digits after the decimal point).
- Some numbers, such as the square root of 2, cannot be written as a fraction. They are called **irrational**.
- Calculations follow nine rules you have always used, such as "2 + 5 gives the same as 5 + 2". A set of numbers in which all nine hold is called a **field**.
- Brackets change the meaning: with curly, round or square brackets the same pair of numbers stands for three different things.
- For the exam you need three things: recognising a field, using the right brackets and calculating with roots without a calculator.

> [!CHANNELS]
> Linear Algebra and Geometry uses the **same handouts** in the three channels: Buzano teaches in channels A and B, Radeschi in channels B and C. These notes follow the 2026 handouts, so they hold in the same way for A, B and C. Only the days of the lessons change: the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)) warns that timetable changes are announced there and in class. Exam and quiz are the same for the three channels.

## Before you start

### What this lesson is about

The whole Linear Algebra course calculates with numbers. That is why the first lesson is not about vectors or matrices yet: it is about the numbers themselves.

When we are little we learn to count: one, two, three. Then we discover the numbers below zero, like the degrees of temperature in winter. Then fractions, like half a pizza. Finally the decimal numbers that never end, like pi. Each time the family of numbers gets bigger.

In this lesson you give a name to each of these families and learn the letter that stands for it. These letters appear on every page of the handouts, so it pays to know them well from the start.

Then you see which rules sums and products follow. They are rules you already use without thinking. Here they get a name, because in the next lessons the same rules will also hold for objects that are not numbers.

At the end there are two practical things: how to read the symbols you find in formulas and how to calculate with roots by hand.

One part of the lesson is more abstract than the rest: it explains how the numbers with infinitely many digits are "built". It helps you understand, but it is not asked in the exam. Where it begins, you will find a notice.

### What you need to know already

Almost nothing. These three things are enough, and we review the last two together when they are needed.

- **The four operations** with whole numbers: plus, minus, times, divided by.
- **Fractions**: what "one half" or "three quarters" means. The refresher is in the section on the families of numbers.
- **Squares and roots**: what "3 squared" and "the root of 9" mean. The refresher is in the section on the root of 2.

### What you will be able to do at the end

- Say which family a number belongs to: for example that $-4$ is an integer and that $\frac 72$ is a fraction.
- Read aloud a piece of notation such as $3 \in \N$.
- Explain why $\sqrt 2$ is not a fraction.
- Say why the integers do not form a field and the fractions do.
- Not confuse $\{1, 2\}$, $(1, 2)$ and $[1, 2]$.
- Simplify by hand expressions such as $\sqrt{12}$ and $\frac 6{\sqrt 3}$.

## Sets: bags with things inside (p. 2)

Before talking about numbers we need just one word: **set**.

Picture a bag. You put things in it: for example an apple, a pear and a banana. The bag together with what it contains is a set. The things inside are called the **elements** of the set.

In mathematics the bag usually contains numbers. Instead of the bag we draw two **curly brackets**, one that opens and one that closes. The elements are written in between, separated by commas:

$$\{1, 3, 5\}$$

This is the set that contains three numbers: 1, 3 and 5. Nothing else.

So as not to rewrite it every time, a set is given a **name**: a capital letter. For example we call it $A$:

$$A = \{1, 3, 5\}$$

It reads: "$A$ is the set that contains 1, 3 and 5".

### Two rules about bags

In a set the only thing that matters is **what is inside**. Two rules follow from this.

- **Order does not matter.** $\{1, 3, 5\}$ and $\{5, 1, 3\}$ are the same set. A bag stays the same even if you shake it.
- **Repetitions do not matter.** $\{1, 1, 3\}$ is equal to $\{1, 3\}$. A number is either there or not: writing it twice adds nothing.

### "Is inside" and "is not inside"

To say that a number is inside a set there is a symbol made for the purpose: $\in$. It looks like a small E.

$$3 \in A$$

It reads "3 belongs to $A$". It means: 3 is one of the elements of $A$. And it is true, because $A = \{1, 3, 5\}$ and 3 is there.

The same symbol with a bar across it, $\notin$, means the opposite.

$$2 \notin A$$

It reads "2 does not belong to $A$". This is true too: among 1, 3 and 5 there is no 2.

### A bag inside another

Take two sets:

$$A = \{1, 3, 5\} \qquad B = \{1, 5\}$$

The elements of $B$ are 1 and 5. Both are also in $A$. Then $B$ is **contained** in $A$. A set contained in another is called a **subset**. The symbol is $\subset$:

$$B \subset A$$

It reads "$B$ is contained in $A$".

$A$ also has 3, which is missing in $B$. So $A$ has something **more** than $B$. To say so we use a slightly different symbol, $\subsetneq$, with a small crossed-out line underneath:

$$B \subsetneq A$$

It reads "$B$ is **strictly** contained in $A$". It says two things at once: $B$ is inside $A$, and $A$ has at least one more element.

### The dots and the empty set

When the elements are many, or infinitely many, they cannot all be written. So we write the first ones and then three **dots**. The dots mean "and so on, with the same rule".

$$\{2, 4, 6, 8, \dots\}$$

This is the set of the even numbers from 2 upwards. After 8 comes 10, then 12, and they never end.

There is also the empty bag: the set with no elements at all. It is called the **empty set** and is written $\emptyset$.

::: try True or false? (a) $5 \in \{1, 3, 5\}$; (b) $4 \in \{1, 3, 5\}$; (c) $\{3\} \subset \{1, 3, 5\}$; (d) $\{1, 2\} \subset \{1, 3, 5\}$.
(a) True: 5 is one of the three elements.

(b) False: 4 is not there. We write $4 \notin \{1, 3, 5\}$.

(c) True. The only element of $\{3\}$ is 3, and 3 is also in $\{1, 3, 5\}$.

(d) False. 1 is there, but 2 is not. A single element out of place is enough for a set not to be contained in the other.
:::

::: try Are $\{1, 2, 3\}$ and $\{3, 2, 1\}$ the same set?
Yes. The same things are inside (1, 2 and 3), and order does not matter.
:::

> [!NOTE] Where sets are studied properly
> The handouts recall that set theory is covered in detail in the other half of the course, **Discrete Mathematics**. Here we only need sets of numbers.

> [!REMEMBER]
> - A **set** is a bag of elements. It is written with curly brackets: $\{1, 3, 5\}$.
> - $\in$ means "is inside", $\notin$ means "is not inside".
> - $\subset$ means "is contained in": all the elements of the first set are also in the second.
> - Order and repetitions do not matter.

## The families of numbers: naturals, integers, rationals (p. 2)

Now let us fill the bags with numbers. There are three families to know right away, and each has its own letter.

### The counting numbers: the naturals

They are the numbers you use to count things: zero apples, one apple, two apples, three apples. They are called **natural numbers**.

All together they form a set. It is written with a double-stroke N: $\N$.

$$\N = \{0, 1, 2, 3, \dots\}$$

The dots say that they never end: after each number there is always a bigger one.

> [!PITFALL] Zero is a natural number
> In this course, and in Martelli's book, $\N$ **starts from 0**. In some school books it starts from 1. In the exam the course's rule holds: $0 \in \N$.

### The numbers with the minus sign: the integers

With the natural numbers some subtractions cannot be done. You have 3 euros and must pay 5: how much is left? Less than nothing, because you are 2 short. To write this we need **negative numbers**: $3 - 5 = -2$.

The naturals together with the negatives are called **integers**. The set of the integers is written $\Z$:

$$\Z = \{\dots, -2, -1, 0, 1, 2, \dots\}$$

Here the dots are on both sides, because the integers go on without end both to the right and to the left. The letter Z comes from the German *Zahlen*, which means "numbers".

Every natural number is also an integer. So the bag $\N$ is inside the bag $\Z$. And $\Z$ has something more, for example $-1$. With the symbol from before: $\N \subsetneq \Z$.

### Fractions: the rationals

With the integers some divisions cannot be done. Share 1 pizza between 2 people: each gets half. "Half" is not a whole number. To write it we need a **fraction**: $\frac 12$.

> [!REFRESHER] what a fraction is
> A fraction is written with two whole numbers, one above and one below a short line: $\frac 34$.
>
> - The number **below** (the *denominator*) says how many equal parts the cake is cut into: here 4.
> - The number **above** (the *numerator*) says how many parts you take: here 3.
>
> So $\frac 34$ means "three slices of a cake cut into four". It is also the result of the division 3 divided by 4, that is $0.75$.
>
> The number below **cannot be 0**: it makes no sense to cut a cake into zero parts. That is why we never divide by zero.
>
> An integer is a fraction too: just put 1 below. For example $5 = \frac 51$.

The numbers that can be written as a fraction are called **rational numbers**. The set of the rationals is written $\Q$. The Q comes from *quotient*, which is the result of a division.

Every integer is also a rational, because $5 = \frac 51$. So $\Z$ is inside $\Q$. And $\Q$ has something more, for example $\frac 12$. So $\Z \subsetneq \Q$.

### How the handouts write it

Now that the three families are clear, here is the definition in the handouts' words.

> [!DEF] 1.1 · Natural numbers, integers and rational numbers
> The set of the **natural numbers** is $\N = \{0, 1, 2, 3, \dots\}$.
>
> If we add the negative numbers we get the set of the **integers** $\Z = \{\dots, -2, -1, 0, 1, 2, \dots\}$.
>
> If besides the integers we consider all the numbers that can be expressed as fractions $\frac ab$, we get the set of the **rational numbers**
> $$\Q = \left\{ \frac ab \ ;\ a, b \in \Z,\ b \neq 0 \right\}.$$

**How to read it.** The last line, the one for $\Q$, is the hardest. One piece at a time:

- the curly brackets say that it is a set;
- $\frac ab$ says what is inside: fractions. The letters $a$ and $b$ stand for any two numbers;
- the semicolon reads "where". After it come the conditions on the two letters;
- $a, b \in \Z$ means "$a$ and $b$ are integers";
- $b \neq 0$ means "$b$ is different from zero". The symbol $\neq$ is a crossed-out equals sign.

All together: "$\Q$ is the set of the fractions $\frac ab$, where $a$ and $b$ are integers and $b$ is not zero".

### Why we need bigger and bigger families

One idea ties everything together. Each new family is born because in the old one **the answer is missing** to a simple question.

| Question | Answer | Is it in the old family? | New family |
|---|---|---|---|
| Which number, added to 5, gives 3? | $-2$ | no: $-2$ is not a natural | the integers $\Z$ |
| Which number, multiplied by 2, gives 1? | $\frac 12$ | no: $\frac 12$ is not an integer | the rationals $\Q$ |
| Which number, multiplied by itself, gives 2? | $\sqrt 2$ | no: it is not a fraction (we see it further on) | the reals $\R$ |
| Which number, multiplied by itself, gives $-1$? | no real number | no | the complex numbers $\C$, from lesson L02 |

### One fraction, many ways to write it

Half a pizza is half a pizza even if you cut it into 4 slices and take 2. So $\frac 12$ and $\frac 24$ are the same number, written in two ways.

The handouts give this example:

$$\frac 17 = \frac 3{21} = \frac{-8}{-56}$$

They are three ways of writing "one seventh". From the first to the second you multiply above and below by 3. From the first to the third you multiply above and below by $-8$.

How do you check whether two fractions are the same number? With **cross products**:

1. multiply the top of the first by the bottom of the second;
2. multiply the bottom of the first by the top of the second;
3. if the two results are equal, the two fractions are the same number.

Let us try with $\frac 17$ and $\frac 3{21}$. In calculations the dot $\cdot$ is the "times" sign.

1. Top of the first times bottom of the second: $1 \cdot 21 = 21$.
2. Bottom of the first times top of the second: $7 \cdot 3 = 21$.
3. We get 21 both times. So $\frac 17 = \frac 3{21}$.

> [!NOTE] Which comes first
> The handouts point out that $\N$ is a **primitive concept**: it is not built from anything else, it is where we start. Then $\Z$ is built from $\N$, and $\Q$ from $\Z$. The tool that lets us say "these two fractions are the same number" is called an *equivalence relation*, and it is studied in Discrete Mathematics.

::: try For each number say the smallest family that contains it, among $\N$, $\Z$ and $\Q$: (a) $7$; (b) $-7$; (c) $\frac 73$; (d) $\frac 62$.
(a) $\N$: it is a counting number.

(b) $\Z$: it has the minus sign, so it is not a natural.

(c) $\Q$: 7 divided by 3 does not give a whole number.

(d) $\N$: simplify first. 6 divided by 2 is 3, which is a counting number.
:::

::: try Are $\frac 23$ and $\frac{10}{15}$ the same number? Use cross products.
$2 \cdot 15 = 30$ and $3 \cdot 10 = 30$. The two results are equal, so yes: they are the same number.
:::

> [!REMEMBER]
> - $\N$: the counting numbers, **zero included**.
> - $\Z$: the naturals plus the negative numbers.
> - $\Q$: all the fractions, with the number below different from zero.
> - Each family is inside the next: $\N \subsetneq \Z \subsetneq \Q$.

## The real numbers: infinitely many decimal digits (pp. 2–3)

Fractions are still not enough. To see what is missing it helps to look at them written as decimals.

### From a fraction to a decimal number

A fraction is a division. If you do the division you get a decimal number:

$$\frac 14 = 0.25 \qquad\qquad \frac 13 = 0.333\ldots$$

Only two things can happen.

- The digits **end**, as in $0.25$.
- The digits do not end, but they **repeat** always the same, as in $0.333\ldots$ The group of digits that repeats is called the **period**. To write it briefly we put a bar over it: $0.\overline{3}$.

A period can be longer than one digit. For example $\frac 17 = 0.142857142857\ldots$, which is written $0.\overline{142857}$.

The converse also holds: every decimal number that ends, or that repeats, is a fraction. Exercise 5 shows how to find it.

### The numbers that fractions do not reach

There are also numbers with infinitely many digits after the point **that never repeat**. The most famous is pi:

$$\pi = 3.14159265\ldots$$

Its digits go on for ever, and no group repeats. So $\pi$ is not a fraction.

A number that **may** have infinitely many digits after the point is called a **real number**. The set of the real numbers is written $\R$.

The reals contain everything we have seen so far: the naturals, the integers, the fractions. And on top of that the numbers like $\pi$.

### An oddity: two ways of writing the same number

The handouts warn about a small ambiguity. A number that ends with infinitely many 9s is equal to the "rounded" number:

$$5.973999\ldots = 5.974$$

The simplest case is $0.999\ldots = 1$. It is not "almost 1": it really is 1, written in another way. Here is why, in three steps.

1. We know that $\frac 13 = 0.333\ldots$
2. We multiply both sides by 3. On the left we get $3 \cdot \frac 13 = 1$. On the right each digit 3 becomes 9, so we get $0.999\ldots$
3. The two sides were equal before, so they are equal afterwards too: $1 = 0.999\ldots$

### How the real numbers are built: the idea

> [!NOTE] This part is for understanding, not for the exam
> From here to the end of the section you see how the real numbers are defined precisely. In the two exam sessions of 2026 (15/01 and 07/09) there is no question on this topic. If you are short of time, read only the "To remember" box at the end of the section.

Saying "a number with infinitely many digits" is fine for getting the idea. But a problem remains: **how do you add two such numbers?** To add in columns you start from the rightmost digit. With infinitely many digits, there is no rightmost digit.

The handouts solve the problem with a different idea. Try to "reach" $\pi$ using only numbers that end:

- with one digit after the point: $3.1$
- with two digits: $3.14$
- with three digits: $3.141$
- with four digits: $3.1415$
- and so on, without ever stopping.

Each of these numbers ends, so it is a fraction. For example $3.14 = \frac{314}{100}$. None of them is $\pi$. But the further you go in the list, the closer you get to $\pi$.

The idea is this: **a real number is an infinite list of fractions that get closer and closer to something.** Even if that "something" is not a fraction, the list pins it down all the same.

We need two new words.

- An infinite list of numbers, one after the other, is called a **sequence**. The numbers of the list are called **terms**. They are written with a small number at the bottom that tells the position: $a_1$ is the first, $a_2$ the second, $a_3$ the third. In the list of $\pi$: $a_1 = 3.1$, then $a_2 = 3.14$, then $a_3 = 3.141$.
- A sequence in which the terms, from a certain point on, are **very close to one another** is called a **Cauchy sequence**. It is pronounced "koh-SHEE": it is the name of a French mathematician.

The list of $\pi$ is a Cauchy sequence. From the third term on they all start with $3.141$, so between one and another there is less than a thousandth. From the sixth on there is less than a millionth. And so on, closer and closer.

> [!EXAMPLE] 1.2 · The number $\pi$
> The real number $\pi$ has infinitely many digits after the point: $3.1415926\ldots$ It corresponds to the Cauchy sequence of rational numbers
> $$a_1 = 3.1 \qquad a_2 = 3.14 \qquad a_3 = 3.141 \qquad a_4 = 3.1415 \qquad \dots$$
> The handouts add that the sequence that defines a real number **is not unique**. For example the list $3.2;\ 3.15;\ 3.142;\ 3.1416;\ \dots$ (rounding up each time) also gets closer and closer to $\pi$. Two different lists can stand for the same number.

> [!DEEPER] the precise definition of a Cauchy sequence (p. 2)
> The handouts write "very close to one another" in a precise way.
>
> A sequence $(a_n)$ of rational numbers $a_n \in \Q$ is a **Cauchy sequence** if for every rational number $\varepsilon > 0$ there exists an $N > 0$ for which
> $$|a_m - a_n| < \varepsilon \quad \text{for every } m, n > N.$$
>
> **How to read it.**
>
> - $(a_n)$ is the sequence, that is the whole list $a_1, a_2, a_3, \dots$
> - $\varepsilon$ is the Greek letter *epsilon*. Here it stands for a **tolerance**: a small positive number that you choose, for example a thousandth.
> - $|a_m - a_n|$ is the **distance** between two terms of the list. The two vertical bars are the *absolute value*: they remove the minus sign, because a distance is never negative. For example $|3 - 5| = |-2| = 2$.
> - "There exists an $N$ … for every $m, n > N$" means: **from a certain position on**, that is after position number $N$, any two terms are closer than the tolerance.
>
> All together: however small you choose the tolerance, from a certain point on the terms are closer to one another than that tolerance. The smaller the tolerance, the further along the list you have to go.

### The lists that point at a hole

A Cauchy sequence made of fractions can behave in two ways.

- It gets closer and closer to a **fraction**. For example the list $0.3;\ 0.33;\ 0.333;\ \dots$ gets closer and closer to $\frac 13$. Then it represents that fraction, and there is nothing new.
- It gets closer and closer to something that **is not a fraction**, like the list of $\pi$. Then it represents a new number, which was not there among the fractions: an **irrational number**.

A useful picture. Put all the fractions on a ruler. They are packed very densely, but between one and the next there remain tiny holes: for example at the spot where $\pi$ should be. A Cauchy sequence that points at a hole serves to **fill it**.

> [!DEF] Real numbers (p. 3)
> The **real numbers** are defined as *equivalence classes* of Cauchy sequences of rational numbers. Two Cauchy sequences are **equivalent** if their difference is a sequence that tends to zero.

**How to read it.** Two lists are "equivalent" when they get closer and closer to the same thing, like the two lists of $\pi$ in Example 1.2. "Equivalence class" means that all the lists equivalent to one another count as **one single** number. It is the same trick as with fractions: $\frac 12$ and $\frac 24$ are different ways of writing the same number.

> [!EXAMPLE] 1.3 · The number $e$
> The handouts give a second example of a list that points at a hole. The term in position $n$ is computed with this formula:
> $$a_n = \left(1 + \frac 1n\right)^n$$
> In place of $n$ put 1 to get the first term, 2 for the second, 3 for the third. The small $n$ at the top is a power: the number in brackets is to be multiplied by itself $n$ times.
>
> - With $n = 1$: inside the brackets $1 + \frac 11 = 2$. Then $2^1 = 2$. So $a_1 = 2$.
> - With $n = 2$: inside the brackets $1 + \frac 12 = \frac 32$. Then $\frac 32 \cdot \frac 32 = \frac 94$. So $a_2 = \frac 94 = 2.25$.
> - With $n = 3$: inside the brackets $1 + \frac 13 = \frac 43$. Then $\frac 43 \cdot \frac 43 \cdot \frac 43 = \frac{64}{27}$. So $a_3 = \frac{64}{27}$, which is about $2.370$.
>
> Each term is a fraction. The sequence is a Cauchy sequence, but it does not get closer and closer to any fraction. So it defines a new real number: **Euler's number** $e = 2.71828\ldots$

```graph
title: The terms $a_n = \left(1 + \frac 1n\right)^n$ rise towards $e \approx 2.718$ but none reaches it
proportions: free
x: 0 13
y: 1.8 2.9
names: $n$ $a_n$
line: 0 2.71828 13 2.71828 | amber | dashed | $e$ | nw
point: 1 2 | accent
point: 2 2.25 | accent
point: 3 2.37037 | accent
point: 4 2.44141 | accent
point: 5 2.48832 | accent
point: 6 2.52163 | accent
point: 7 2.5465 | accent
point: 8 2.56578 | accent
point: 9 2.58117 | accent
point: 10 2.59374 | accent
point: 11 2.6042 | accent
point: 12 2.61304 | accent
```

### In the real numbers there are no holes left (p. 3)

With this construction all the holes of the ruler have been filled. The handouts sum it up in two ideas to keep in mind.

1. Every real number can be **approximated** by fractions, as precisely as you like. For example $3.14159$ is a fraction very close to $\pi$.
2. If you redid all the work starting from lists of **real** numbers, instead of fractions, you would not find any new number.

The second idea has a precise name: $\R$ is **complete**.

> [!PROP] · $\R$ is complete
> Unlike $\Q$, the set $\R$ of the real numbers is **complete**: every Cauchy sequence in $\R$ converges.

**How to read it.** "Converges" means "gets closer and closer to one precise number". So: every list of real numbers that tightens gets closer and closer to a real number. It never points at a hole, because there are no holes left. In $\Q$ instead there are holes: the list of $\pi$ is made of fractions but does not get closer and closer to any fraction.

> [!BEYOND] · where to find it in the book
> Martelli's book presents this construction in complement **1.II "Costruzione dei numeri reali"** (pp. 40–42 of the book).

::: try $0.25$, $0.\overline{6}$ and $\pi$: which ones are fractions?
$0.25$ ends: it is the fraction $\frac 14$.

$0.\overline 6 = 0.666\ldots$ repeats: it is the fraction $\frac 23$.

$\pi$ has infinitely many digits that never repeat: it is not a fraction.
:::

::: try Write the first four terms of a list of numbers that end and that gets closer and closer to $\frac 23 = 0.666\ldots$
$0.6;\ 0.66;\ 0.666;\ 0.6666$. Each term has one more digit than the one before, as in the list of $\pi$.
:::

> [!REMEMBER]
> - A **real number** is a number that may have infinitely many digits after the point. The set of the reals is $\R$.
> - The fractions are the decimal numbers that end or that repeat. Those that never repeat, like $\pi$, are **irrational**.
> - Precisely, a real number is a list of fractions that get closer and closer to one another: a Cauchy sequence.
> - $\R$ is **complete**: it has no holes. $\Q$ instead has some.

## Why the root of 2 is not a fraction (p. 4)

So far we have only said that there are numbers that are not fractions. In this section we look at one of them closely and prove that it really is not.

> [!REFRESHER] square and square root
> The **square** of a number is the number multiplied by itself. It is written with a small 2 at the top: $3^2 = 3 \cdot 3 = 9$.
>
> The **square root** goes the other way. $\sqrt 9$ is the positive number that, multiplied by itself, gives 9. So $\sqrt 9 = 3$.
>
> Two more examples: $\sqrt{16} = 4$ because $4 \cdot 4 = 16$, and $\sqrt{25} = 5$ because $5 \cdot 5 = 25$.
>
> Numbers like 9, 16 and 25, which are the square of an integer, are called **perfect squares**.

### Where the root of 2 comes from

$\sqrt 2$ is the positive number that, multiplied by itself, gives 2. No integer works: $1 \cdot 1 = 1$ is too little, $2 \cdot 2 = 4$ is too much. So $\sqrt 2$ lies between 1 and 2. Its first digits are $1.41421\ldots$

It is not a made-up number: it is a length you can draw. Take a square with side 1. Its diagonal is exactly $\sqrt 2$ long.

```graph
title: The diagonal of a square with side 1 is $\sqrt 2$ long
axes: no
grid: no
x: -0.4 1.6
y: -0.4 1.4
polygon: 0 0 1 0 1 1 0 1 | blue
segment: 0 0 1 1 | amber | thick | $\sqrt 2$ | nw
text: 0.5 -0.12 | $1$
text: 1.12 0.5 | $1$
```

> [!REFRESHER] Pythagoras' theorem
> In a triangle with a right angle, the two short sides are called the *legs* and the long side is called the *hypotenuse*. The theorem says: the square of one leg, plus the square of the other leg, equals the square of the hypotenuse.
>
> The diagonal cuts the square into two triangles with a right angle. The legs are the sides of the square, of length 1. The hypotenuse is the diagonal. So the square of the diagonal is $1^2 + 1^2 = 2$, and the diagonal is $\sqrt 2$.

### All the families, one inside the other

The handouts sum up the four families in a single line:

$$\N \subsetneq \Z \subsetneq \Q \subsetneq \R$$

It reads from left to right: the naturals are inside the integers, the integers inside the rationals, the rationals inside the reals. Each time there is the symbol "strictly", because each family has something more than the one before:

- $-1$ is an integer but not a natural;
- $\frac 12$ is a rational but not an integer;
- $\sqrt 2$ is a real but not a rational.

```graph
title: Each set contains the previous one and has something more
axes: no
grid: no
x: -1.8 5.4
y: -3.6 3.6
circle: 0 0 1 | accent
circle: 0.6 0 1.8 | blue
circle: 1.2 0 2.6 | violet
circle: 1.8 0 3.4 | amber
text: 0 0.4 | accent | $\N$
text: 0 -0.3 | $0,\ 1,\ 2,\ \dots$
text: 1.75 0.4 | blue | $\Z$
text: 1.75 -0.3 | $-3$
text: 3.1 0.4 | violet | $\Q$
text: 3.1 -0.3 | $\frac 12$
text: 4.5 0.4 | amber | $\R$
text: 4.5 -0.3 | $\sqrt 2,\ \pi$
```

The first two items of the list can be seen at a glance. The third cannot. How can we be sure that **no** fraction, among the infinitely many that exist, is equal to $\sqrt 2$? We cannot try them all. We need an argument.

### Reasoning by contradiction

The argument we need is called a **proof by contradiction**. It works like a detective's reasoning.

A detective wants to prove that Mario was **not** at home at eight. He reasons like this: "Let us pretend that Mario was at home. Then the camera over the front door would have filmed him going in. But Mario is not in the footage. That is impossible. So Mario was not at home."

The steps are always these four.

1. Pretend that **the opposite** of what you want to prove is true.
2. Reason correctly, one step at a time.
3. You reach something **impossible**. In mathematics it is called an *absurdity*, or a *contradiction*.
4. You conclude that step 1 was wrong. So what you wanted to prove is true.

The proof needs two tools, which you find in the box below.

> [!REFRESHER] even, odd and reduced fractions
> An integer is **even** if it is twice another integer: $6 = 2 \cdot 3$. It is **odd** if it is an even number plus 1: $7 = 6 + 1$.
>
> **First tool: if the square of a number is even, the number is even too.** The reason is that an odd number always has an odd square: $3^2 = 9$, $5^2 = 25$, $7^2 = 49$. It holds for all odd numbers. An odd number is written $2k + 1$, where $k$ is an integer. Its square is $(2k + 1) \cdot (2k + 1) = 4k^2 + 4k + 1$. The first two pieces are even, and an even number plus 1 is odd.
>
> **Second tool: reduced fractions.** A fraction is *in lowest terms* when top and bottom can no longer be divided by the same number. $\frac 68$ is not reduced: top and bottom can be divided by 2, and it becomes $\frac 34$. $\frac 34$, on the other hand, is reduced. Every fraction can be reduced.

> [!PROP] 1.4
> The number $\sqrt 2$ is not rational.

**How to read it.** "Is not rational" means "cannot be written as a fraction". A real number that is not rational is called **irrational**.

Here is the handouts' proof, one step at a time.

1. **Let us pretend the opposite.** Suppose that $\sqrt 2$ is a fraction: $\sqrt 2 = \frac ab$, with $a$ and $b$ integers.
2. **We choose the reduced fraction.** If $a$ and $b$ could be divided by the same number, we divide them straight away. So we may suppose that $\frac ab$ is in lowest terms. Keep this point in mind: we are about to contradict it.
3. **We square** both sides. On the left $(\sqrt 2)^2 = 2$. On the right $\left(\frac ab\right)^2 = \frac{a^2}{b^2}$. So
   $$2 = \frac{a^2}{b^2}.$$
4. **We get rid of the fraction.** We multiply both sides by $b^2$:
   $$2b^2 = a^2.$$
5. **$a$ is even.** The number $a^2$ is twice $b^2$, so it is even. By the first tool, $a$ is even too. Then $a$ is twice an integer, which we call $k$: $a = 2k$.
6. **We substitute.** In place of $a$ we write $2k$. Its square is $2k \cdot 2k = 4k^2$. The line of step 4 becomes $2b^2 = 4k^2$. We divide both sides by 2:
   $$b^2 = 2k^2.$$
7. **$b$ is even too.** The number $b^2$ is twice $k^2$, so it is even. Again by the first tool, $b$ is even too.
8. **The contradiction.** $a$ and $b$ are both even, so both can be divided by 2. But in step 2 we had chosen a reduced fraction, which cannot be simplified any further. The two things cannot both be true.
9. **Conclusion.** The assumption of step 1 leads to something impossible, so it is wrong. $\sqrt 2$ is **not** a fraction.

> [!IDEA] · the recipe, in three moves
> 1. Write the number as a **reduced** fraction.
> 2. Square and get rid of the fraction.
> 3. Show that top and bottom have a common divisor: that is the contradiction.
>
> With the same recipe one proves that $\sqrt 3$ and $\sqrt 6$ are not fractions (exercises 11 and 13).

> [!PROOF] · another route, from Martelli's book
> Martelli too reaches the line $a^2 = 2b^2$. Then he uses the **prime factorisation**, that is the writing of a number as a product of prime numbers: for example $36 = 2 \cdot 2 \cdot 3 \cdot 3$.
>
> In a square every prime factor appears an **even** number of times. In $36 = 6^2$ the 2 appears twice and the 3 twice.
>
> Now look at how many times 2 appears on the two sides of $a^2 = 2b^2$. On the left there is a square, so 2 appears an even number of times. On the right there is a square multiplied by 2, so 2 appears an even number of times plus one: an **odd** number. But a number has only one prime factorisation. The two sides cannot be equal: contradiction.

> [!BEYOND] · other irrational numbers
> The root of a natural number is either an integer or irrational. It is an integer when the number is a perfect square: $\sqrt 4 = 2$, $\sqrt 9 = 3$. Otherwise it is irrational: $\sqrt 2$, $\sqrt 3$, $\sqrt 5$, $\sqrt 8$. $\pi$ and $e$ are irrational too, but the proofs are much harder and are not needed in the course.

> [!PITFALL] Irrational times irrational is not always irrational
> $\sqrt 2 \cdot \sqrt 2 = 2$, which is rational. $\sqrt 2 + (-\sqrt 2) = 0$ is rational too. A rational plus an irrational, on the other hand, is **always** irrational (exercise 12): for example $1 + \sqrt 2$ is not a fraction.

::: try Which of these numbers are irrational? $\sqrt 4$, $\sqrt 5$, $\sqrt{49}$, $\sqrt 8$.
$\sqrt 5$ and $\sqrt 8$. Indeed 5 and 8 are not perfect squares. $\sqrt 4 = 2$ and $\sqrt{49} = 7$, on the other hand, are integers.
:::

::: try In the proof, what is the impossible thing we reach?
$a$ and $b$ both turn out to be even, so the fraction $\frac ab$ can still be simplified by 2. But we had chosen it in lowest terms.
:::

> [!REMEMBER]
> - $\sqrt 2$ is the length of the diagonal of a square with side 1. It is not a fraction: it is **irrational**.
> - It is proved **by contradiction**: we pretend it is a reduced fraction and discover that it can still be simplified.
> - The four families are one inside the other: $\N \subsetneq \Z \subsetneq \Q \subsetneq \R$.

## The nine rules of calculation: what a field is (p. 4)

When you do a calculation you use rules without noticing. For example you know that $2 + 5$ and $5 + 2$ give the same result.

In this section we line these rules up and give them a name. It may look like pointless work, but it is not. From lesson L05 the same rules will also hold for vectors, which are not numbers. Knowing them by name will be useful there.

On the real numbers there are two **operations**: the sum, with the sign $+$, and the product, with the dot $\cdot$. The handouts call them **binary** operations. "Binary" means that the operation takes **two** numbers and gives back **one**. From 3 and 4 the sum gives back 7, the product gives back 12.

### The nine rules, with numbers

| No. | The rule in words | An example |
|---|---|---|
| 1 | adding 0 changes nothing | $0 + 7 = 7$ |
| 2 | in a sum the order does not matter | $2 + 5 = 5 + 2$ |
| 3 | in a sum of three numbers you can start wherever you like | $1 + (2 + 3) = (1 + 2) + 3$ |
| 4 | every number has an **opposite**: added together they give 0 | $7 + (-7) = 0$ |
| 5 | multiplying by 1 changes nothing | $1 \cdot 7 = 7$ |
| 6 | in a product the order does not matter | $2 \cdot 5 = 5 \cdot 2$ |
| 7 | in a product of three numbers you can start wherever you like | $2 \cdot (3 \cdot 4) = (2 \cdot 3) \cdot 4$ |
| 8 | every number **different from 0** has an **inverse**: multiplied together they give 1 | $4 \cdot \frac 14 = 1$ |
| 9 | multiplying a sum is like multiplying the two pieces and then adding | $3 \cdot (2 + 5) = 3 \cdot 2 + 3 \cdot 5$ |

Let us check rule 3 and rule 9 in full. The brackets say which calculation is done first.

- **Rule 3.** On the left: first $2 + 3 = 5$, then $1 + 5 = 6$. On the right: first $1 + 2 = 3$, then $3 + 3 = 6$. Same result.
- **Rule 9.** On the left: first $2 + 5 = 7$, then $3 \cdot 7 = 21$. On the right: $3 \cdot 2 = 6$ and $3 \cdot 5 = 15$, then $6 + 15 = 21$. Same result.

Each rule has a name, which you will meet throughout the course.

- The number that "changes nothing" is called the **identity element**. It is 0 for the sum (rule 1) and 1 for the product (rule 5).
- "The order does not matter" is the **commutative** property (rules 2 and 6).
- "You can start wherever you like" is the **associative** property (rules 3 and 7).
- Rule 9 is the **distributive** property.

### Zero has no inverse

Look closely at rule 8: it holds for every number **except zero**.

The inverse of a number is the one that, multiplied by it, gives 1. The inverse of 4 is $\frac 14$. The inverse of $\frac 23$ is $\frac 32$: just swap top and bottom.

And the inverse of 0? It should be a number that, multiplied by 0, gives 1. But any number multiplied by 0 gives 0, never 1. So that number does not exist. It is the same ban as before: we do not divide by zero.

### How the handouts write it

Here are the same nine rules in the handouts' words and symbols.

> [!PROP] 1.5 · The nine properties of $\R$
> On $\R$ there are two binary operations $+$ and $\cdot$ with the following properties:
> 1. there exists the **identity element** $0$ for addition $+$, for which $0 + a = a + 0 = a$, $\forall a \in \R$;
> 2. the **commutative** property $a + b = b + a$ holds, $\forall a, b \in \R$;
> 3. the **associative** property $a + (b + c) = (a + b) + c$ holds, $\forall a, b, c \in \R$;
> 4. every element $a \in \R$ has an **inverse** (or **opposite**) $-a$, for which $a + (-a) = (-a) + a = 0$;
> 5. there exists the **identity element** $1$ for multiplication $\cdot$, for which $1 \cdot a = a \cdot 1 = a$, $\forall a \in \R$;
> 6. the **commutative** property $a \cdot b = b \cdot a$ holds, $\forall a, b \in \R$;
> 7. the **associative** property $a \cdot (b \cdot c) = (a \cdot b) \cdot c$ holds, $\forall a, b, c \in \R$;
> 8. every element $a \in \R$ with $a \neq 0$ has an **inverse** $a^{-1}$, for which $a \cdot a^{-1} = a^{-1} \cdot a = 1$;
> 9. the **distributive** property $a \cdot (b + c) = a \cdot b + a \cdot c$ holds, $\forall a, b, c \in \R$.

**How to read it.** There is only one new symbol: $\forall$, an upside-down A. It reads "for every".

- "$\forall a \in \R$" reads "for every $a$ that belongs to $\R$". It means: whatever real number you put in place of the letter $a$.
- Line 1 says that $0 + a$ and $a + 0$ give $a$, for every real number $a$. If you put 7 in place of $a$ it becomes $0 + 7 = 7 + 0 = 7$: it is rule 1 of the table.
- Lines 4 and 8 speak of an "inverse". For the sum the inverse is usually called the **opposite** and is written $-a$. For the product it is written $a^{-1}$, with a small $-1$ at the top, and it is the same as $\frac 1a$. For example $4^{-1} = \frac 14$.
- Each line is one of the rules of the table, written with letters in place of numbers. The letters serve to say that the rule holds **for all** numbers, not only for those of the example.

### What a field is

The nine rules do not hold only for the real numbers. Every set in which you can add and multiply, and in which all nine hold, gets the same name.

> [!DEF] Field
> A set with two operations $+$ and $\cdot$ that have these nine properties is called a **field**.

**How to read it.** "Field" is just a name. It says: in here you can do the four operations with the usual rules, without ever leaving the set. Addition and subtraction work thanks to the opposites. Multiplication and division work thanks to the inverses.

The handouts add two notices. The concept of field comes back in more detail in lesson L05. And instead of $a \cdot b$ we often write just $ab$, without the dot.

### Which sets are fields?

To decide whether a family of numbers is a field two questions are almost always enough. Does every number have its opposite **inside the family**? Does every number different from zero have its inverse **inside the family**?

| Family | Is the opposite always there? | Is the inverse always there? | Is it a field? |
|---|---|---|---|
| $\N$ | no: the opposite of 3 is $-3$, which is not a natural | no: the inverse of 3 is $\frac 13$, which is not a natural | **no** |
| $\Z$ | yes | no: the inverse of 2 is $\frac 12$, which is not an integer | **no** |
| $\Q$ | yes | yes: the inverse of $\frac ab$ is $\frac ba$ | **yes** |
| $\R$ | yes | yes | **yes** |
| $\C$ | yes | yes (lesson L02) | **yes** |

To say that a set is **not** a field, **one** rule that fails is enough, with **one** example. "$\Z$ is not a field because 2 has no inverse in $\Z$" is a complete answer.

> [!DEEPER] why a number times zero is always zero
> From the nine rules one can also derive what seems to go without saying. For example that $a \cdot 0 = 0$ for every number $a$.
>
> 1. By rule 1, $0 + 0 = 0$. So $a \cdot 0$ is equal to $a \cdot (0 + 0)$.
> 2. By rule 9, $a \cdot (0 + 0) = a \cdot 0 + a \cdot 0$.
> 3. Putting the two steps together: $a \cdot 0 = a \cdot 0 + a \cdot 0$.
> 4. Now we take $a \cdot 0$ away from both sides, that is we add its opposite (rule 4). On the left $0$ remains. On the right $a \cdot 0$ remains.
>
> So $0 = a \cdot 0$. In lesson L05 the same idea will be used for vectors (Proposition 5.5).

::: try (a) What is the opposite of $-5$? (b) What is the inverse of $\frac 25$? (c) What is the inverse of $1$?
(a) $5$, because $-5 + 5 = 0$.

(b) $\frac 52$, because $\frac 25 \cdot \frac 52 = \frac{10}{10} = 1$.

(c) $1$, because $1 \cdot 1 = 1$.
:::

::: try Do the even numbers, that is $\{\dots, -4, -2, 0, 2, 4, \dots\}$, form a field?
No. 1 is missing, and it is needed for rule 5: 1 is odd. The inverse of 2 is missing too: it would be $\frac 12$.
:::

> [!REMEMBER]
> - A **field** is a set of numbers in which the nine rules hold. In practice: you can do the four operations without leaving the set.
> - $\Q$, $\R$ and $\C$ are fields. $\N$ and $\Z$ are not.
> - Zero has no inverse: we do not divide by zero.

## Greater and smaller: the order (p. 5)

Of two different numbers one is always the bigger.

Draw a line and put the numbers on it: zero in the middle, the positives on the right, the negatives on the left. It is the **number line**. A number is **greater** than another if it lies further to the right.

```graph
title: The number line: the further right a number lies, the bigger it is
axes: no
grid: no
x: -4.6 4.6
y: -1.5 1.5
arrow: -4.4 0 4.4 0 | grey
point: -3 0 | $-3$ | s
point: -2 0 | $-2$ | s
point: -1 0 | $-1$ | s
point: 0 0 | accent | $0$ | s
point: 1 0 | $1$ | s
point: 2 0 | $2$ | s
point: 3 0 | $3$ | s
point: 0.5 0 | amber | $\frac 12$ | n
point: 1.41421 0 | amber | $\sqrt 2$ | n
point: 3.14159 0 | amber | $\pi$ | n
```

There are two symbols.

- $a > b$ reads "$a$ is greater than $b$". The open side of the symbol faces the bigger number: $7 > 4$.
- $a < b$ reads "$a$ is less than $b$": $4 < 7$.

Negative numbers need care: $-2 > -5$, because $-2$ lies further to the right than $-5$. A debt of 2 euros is better than a debt of 5.

A set of numbers in which two different numbers can always be compared like this is called **ordered**. $\N$, $\Z$, $\Q$ and $\R$ are all ordered.

### The precise rule

The handouts give a rule that does not need the drawing.

> [!DEF] Order (p. 5)
> We say that $a > b$ if $a - b > 0$.

**How to read it.** To find out whether $a$ is greater than $b$ do the subtraction $a - b$. If the result is positive, that is greater than zero, then $a > b$.

Two examples.

- With 7 and 4: $7 - 4 = 3$, which is positive. So $7 > 4$.
- With $-2$ and $-5$: $-2 - (-5) = -2 + 5 = 3$, which is positive. So $-2 > -5$.

With this rule it is enough to know **which numbers are positive**. The handouts say it family by family.

- In $\Z$ the positives are $1, 2, 3, \dots$
- In $\Q$ a fraction is positive when top and bottom have **the same sign**. $\frac 34$ is positive. $\frac{-3}{-4}$ is positive too, because minus divided by minus gives plus. $\frac{-3}4$, on the other hand, is negative.
- In $\R$ the rule uses Cauchy sequences: it is in the box below.

> [!DEEPER] when a real number is positive (p. 5)
> The handouts write: a real number is positive if it can be represented by a Cauchy sequence $(a_n)$ of rational numbers for which there exists a rational number $\varepsilon > 0$ such that $a_n > \varepsilon$ *eventually*.
>
> **How to read it.** "Eventually" means "from a certain position on, for ever". So: from a certain point on, the terms of the list all stay above a fixed positive threshold, which here is called $\varepsilon$.
>
> Why is the threshold needed? Look at the list $1;\ \frac 12;\ \frac 13;\ \frac 14;\ \dots$ Its terms are all positive, but they get closer and closer to 0, and zero is not positive. No threshold works: sooner or later the terms drop below it. The list of $\pi$ instead, that is $3.1;\ 3.14;\ 3.141;\ \dots$, always stays above the threshold 3. Indeed $\pi$ is positive.

> [!NOTE] A preview of lesson L02
> The complex numbers $\C$ are a field, but they are **not ordered**: between two complex numbers it makes no sense to ask which is the greater.

::: try Put the right sign, $>$ or $<$: (a) between $3$ and $-8$; (b) between $-7$ and $-1$; (c) between $\frac 12$ and $\frac 13$.
(a) $3 > -8$. Check: $3 - (-8) = 3 + 8 = 11$, positive.

(b) $-7 < -1$. Check: $-1 - (-7) = -1 + 7 = 6$, positive. So the greater is $-1$.

(c) $\frac 12 > \frac 13$: half a pizza is more than a third of a pizza. Check: $\frac 12 - \frac 13 = \frac 36 - \frac 26 = \frac 16$, positive.
:::

> [!REMEMBER]
> - $a > b$ means that $a$ lies further to the right than $b$ on the number line. The precise rule: $a - b$ is positive.
> - $\N$, $\Z$, $\Q$ and $\R$ are ordered. $\C$ is not.

## Brackets not to confuse (p. 5)

Three pieces of notation look very much alike and mean very different things.

| Notation | Brackets | What it is | What it contains |
|---|---|---|---|
| $\{1, 2\}$ | curly | a set with just two elements | only 1 and 2 |
| $(1, 2)$ | round | an **open interval** | all the real numbers between 1 and 2, **without** 1 and 2 |
| $[1, 2]$ | square | a **closed interval** | all the real numbers between 1 and 2, **including** 1 and 2 |

An **interval** is a piece of the number line: all the real numbers between a starting point and an end point. Between 1 and 2 there are $1.5$, $1.01$, $1.999$ and infinitely many others.

The two numbers written between the brackets are called the **endpoints**. The difference between round and square brackets is all there:

- **round** bracket: the endpoint is **excluded**;
- **square** bracket: the endpoint is **included**.

```graph
title: Round, endpoint excluded (hollow dot). Square, endpoint included (filled dot)
axes: no
grid: no
x: 0.4 2.6
y: 0 1.1
segment: 1 0.8 2 0.8 | accent | thick
point: 1 0.8 | accent | hollow | $1$ | s
point: 2 0.8 | accent | hollow | $2$ | s
text: 1.5 0.95 | $(1, 2)$
segment: 1 0.3 2 0.3 | blue | thick
point: 1 0.3 | blue | $1$ | s
point: 2 0.3 | blue | $2$ | s
text: 1.5 0.45 | $[1, 2]$
```

$(1, 2)$ and $[1, 2]$ are sets too. But they have **infinitely many** elements, while $\{1, 2\}$ has two.

### Writing a set with a condition

There is a much-used way of describing a set without listing its elements. You write **which condition** they must satisfy.

$$\{x \in \R \mid 1 < x < 2\}$$

It reads: "the set of the $x$ that belong to $\R$ **such that** $x$ is greater than 1 and less than 2".

One piece at a time:

- the letter $x$ stands for any number;
- $x \in \R$ says where the elements are looked for: among the real numbers;
- the vertical bar reads "such that". In the handouts you sometimes find a colon or a semicolon in its place;
- $1 < x < 2$ is the condition. It is a short way of writing two things together: $1 < x$ and $x < 2$.

This set is exactly the open interval. The handouts write:

$$(1, 2) = \{x \in \R \mid 1 < x < 2\}, \qquad [1, 2] = \{x \in \R \mid 1 \le x \le 2\}.$$

The symbol $\le$ reads "less than or equal to". Unlike $<$, it also allows equality. That is why in the closed interval 1 and 2 are included.

> [!BEYOND] · the other intervals
> The two brackets can be mixed. $[1, 2)$ includes 1 and excludes 2. $(1, 2]$ excludes 1 and includes 2.
>
> For a half-line, that is a piece of line that does not end on one side, we use the symbol $\infty$ ("infinity"). For example $[0, +\infty)$ contains all the real numbers from 0 upwards. Next to $\infty$ the bracket is always round, because infinity is not a number and cannot be "included".

### The same notation for a point

There is one last complication. In this course $(1, 2)$ is also used for something completely different: a **point of the plane**, or a **vector** (lesson L05). In that case the two numbers are the coordinates: 1 step to the right and 2 steps up.

How do you tell which of the two meanings applies? From the **context**, that is from the sentence around it.

- "The number $x$ is in $(1, 2)$": it is the interval.
- "The point $P = (1, 2)$" or "the vector $v = (1, 2)$": it is the pair of coordinates. Here order matters: $(1, 2)$ and $(2, 1)$ are two different points.

> [!EXAM] The right notation
> The handouts insist: it is **essential always to use the right notation**. Curly brackets are **never used** for points or vectors. Writing $\{1, 2\}$ in place of the vector $(1, 2)$ is a mistake: in a set order does not matter, in a vector it does. In the exam papers vectors are also written as ${}^t(1, 2)$, with a small $t$ at the top left. It means "put vertically", and you see it in lesson L08.

::: try Is the number 2 in $(1, 2)$? And in $[1, 2]$? And in $\{1, 2\}$?
In $(1, 2)$ no: the round bracket excludes the endpoint.

In $[1, 2]$ yes: the square bracket includes it.

In $\{1, 2\}$ yes: it is one of its two elements.
:::

::: try How many elements do $\{0, 5\}$ and $[0, 5]$ have?
$\{0, 5\}$ has 2: 0 and 5. $[0, 5]$ has infinitely many: all the real numbers from 0 to 5.
:::

::: try Write with brackets the set $\{x \in \R \mid 3 \le x < 7\}$.
$[3, 7)$. Square on the left, because 3 is included ($\le$). Round on the right, because 7 is excluded ($<$).
:::

> [!REMEMBER]
> - Curly brackets: a set with its elements listed. $\{1, 2\}$ has two elements.
> - Round brackets: interval with the endpoints **excluded**. Square brackets: interval with the endpoints **included**.
> - $(1, 2)$ can also be a point or a vector: the context tells you.
> - Never curly brackets for a vector.

## The Greek letters of the course (p. 5)

Letters of the Greek alphabet often appear in the formulas of the course. There is nothing special about them: they are other names for numbers, like $x$ and $y$. The handouts ask you to learn these nine.

| Letter | Name | Where you will meet it |
|---|---|---|
| $\alpha$ | alpha | angles, coefficients |
| $\varepsilon$ | epsilon | a number as small as you like (Cauchy sequences) |
| $\sigma$ | sigma | coefficients, permutations in Discrete Mathematics |
| $\vartheta$ | theta | angles, for example in the complex numbers |
| $\phi$ | phi | angles, maps |
| $\pi$ | pi | the number $3.14159\ldots$ |
| $\lambda$ | lambda | the numbers that multiply vectors, and later the eigenvalues |
| $\mu$ | mu | like lambda, when a second letter is needed |
| $\varrho$ | rho | radii and distances |

Some letters are written in two ways: $\vartheta$ and $\theta$ are both theta, $\phi$ and $\varphi$ both phi, $\varrho$ and $\rho$ both rho, $\varepsilon$ and $\epsilon$ both epsilon.

::: try What are $\lambda$, $\vartheta$ and $\varepsilon$ called?
Lambda, theta and epsilon.
:::

> [!REMEMBER]
> Greek letters are just names. The most used in the course are $\lambda$ (lambda) and $\mu$ (mu), which usually stand for numbers, and $\vartheta$ (theta), which stands for an angle.

## Reading the symbols of mathematics (beyond the handouts)

The formulas of the course are sentences written in short.

Each symbol stands for a few words. If you put the words back in place of the symbols, a formula reads like an ordinary sentence. The handouts use these symbols from the very first lesson; Martelli's book explains them in §1.1 (pp. 4–7).

| Symbol | Read as | An example, read in words |
|---|---|---|
| $\forall$ | "for every" | $\forall a \in \R:\ a + 0 = a$ reads "for every real number $a$, $a$ plus zero gives $a$" |
| $\exists$ | "there exists" | $\exists x \in \Z:\ x + 5 = 3$ reads "there exists an integer $x$ for which $x$ plus 5 gives 3". It is true: $x = -2$ |
| $:$ or $\mid$ | "such that", "for which" | $\{x \in \R \mid x > 0\}$ reads "the real numbers $x$ such that $x$ is greater than zero" |
| $\Longrightarrow$ | "if … then …" | $a = 2 \Longrightarrow a^2 = 4$ reads "if $a$ is 2, then $a$ squared is 4" |
| $\Longleftrightarrow$ | "if and only if" | $a - b > 0 \Longleftrightarrow a > b$ reads "$a$ minus $b$ is positive if and only if $a$ is greater than $b$" |
| $\cup$ | "union" | $\{1, 2\} \cup \{2, 3\} = \{1, 2, 3\}$: the elements that are in one **or** the other |
| $\cap$ | "intersection" | $\{1, 2\} \cap \{2, 3\} = \{2\}$: the elements that are in one **and** the other |
| $\setminus$ | "minus" | $\{1, 2, 3\} \setminus \{3\} = \{1, 2\}$: the first set without the elements of the second |

"If and only if" means that the two sentences are true together or false together: from the first you get the second, and from the second the first.

### One word changes everything

The words "for every" and "there exists" are called **quantifiers**. They must be read carefully, because changing one piece of the sentence is enough to go from true to false.

- "For every **real** number $x$ there exists a **real** number $y$ for which $2y = x$." It is **true**: just take half of $x$ as $y$.
- "For every **integer** $x$ there exists an **integer** $y$ for which $2y = x$." It is **false**: with $x = 1$ we would need $y = \frac 12$, which is not an integer.

> [!PITFALL] "If … then" does not work backwards
> The sentence "if $a$ is 2, then $a^2$ is 4" is true. The reverse sentence, "if $a^2$ is 4, then $a$ is 2", is false: $a = -2$ also gives $a^2 = 4$. When a sentence holds in both directions we use "if and only if".

::: try Read in words: $\forall x \in \N:\ x + 1 \in \N$. Is it true?
"For every natural number $x$, $x + 1$ is a natural number too." It is true: the number that comes after a natural is still a natural.
:::

::: try What are $\{1, 2, 3\} \cap \{2, 3, 4\}$ and $\{1, 2, 3\} \cup \{2, 3, 4\}$?
Intersection: the elements that are in both sets, that is $\{2, 3\}$.

Union: the elements that are in at least one of the two, that is $\{1, 2, 3, 4\}$.
:::

> [!REMEMBER]
> A formula reads like a sentence. The symbol $\forall$ reads "for every", $\exists$ reads "there exists", the double arrow $\Longrightarrow$ reads "if … then".

## Calculating with roots without a calculator (beyond the handouts)

In the exam the calculator is forbidden, and roots often appear in the answers of the quiz.

> [!EXAM] Why learn it now
> In the exam of 07/09/2026 the five possible answers for a distance were $3$, $\frac{\sqrt 3}3$, $3\sqrt 3$, $\sqrt 3$ and $3 + \sqrt 3$. For an angle there were $\arccos\frac 3{\sqrt{43}}$, $\arccos\frac 6{\sqrt{42}}$ and the like. You need to be able to recognise that, for example, $\frac 1{\sqrt 3}$ and $\frac{\sqrt 3}3$ are the same number.

There are six rules. They hold for numbers under the root that are positive or zero.

### Rule 1: root times root

The product of two roots is the root of the product.

$$\sqrt 2 \cdot \sqrt 8 = \sqrt{2 \cdot 8} = \sqrt{16} = 4$$

### Rule 2: taking a square out

If the number under the root is a perfect square multiplied by something else, the perfect square "comes out" of the root.

Example with $\sqrt{12}$.

1. Look for a perfect square that divides 12. 4 will do: $12 = 4 \cdot 3$.
2. Split the root with rule 1 read backwards: $\sqrt{4 \cdot 3} = \sqrt 4 \cdot \sqrt 3$.
3. Work out the root of the perfect square: $\sqrt 4 = 2$.

Result: $\sqrt{12} = 2\sqrt 3$. The notation $2\sqrt 3$ means "2 times the root of 3": between a number and a root the dot is not written.

### Rule 3: root and square cancel out

The square of a root gives back the starting number: $(\sqrt 5)^2 = 5$. It comes from the definition: $\sqrt 5$ is the number that, multiplied by itself, gives 5.

The other way round needs care. The root of a square is always positive: $\sqrt{(-3)^2} = \sqrt 9 = 3$, not $-3$.

### Rule 4: only equal roots can be added

Two equal roots add up like apples: 2 apples plus 5 apples make 7 apples.

$$2\sqrt 3 + 5\sqrt 3 = 7\sqrt 3$$

Two different roots cannot be merged: $\sqrt 2 + \sqrt 3$ stays written like that.

### Rule 5: removing the root from the number below

A fraction with a root below is rewritten by multiplying top and bottom by that root. The value does not change, because multiplying top and bottom by the same number is like multiplying by 1.

Example with $\frac 6{\sqrt 3}$.

1. Multiply top and bottom by $\sqrt 3$. On top you get $6\sqrt 3$. Below you get $\sqrt 3 \cdot \sqrt 3 = 3$.
2. The fraction has become $\frac{6\sqrt 3}3$.
3. Simplify: 6 divided by 3 is 2. Result: $2\sqrt 3$.

### Rule 6: when there is a sum or a difference below

If there is a difference such as $\sqrt 2 - 1$ below, multiply top and bottom by the same expression with the sign changed, that is $\sqrt 2 + 1$.

> [!REFRESHER] sum times difference
> Multiplying a sum by the difference of the same two numbers gives the difference of the squares: $(x - y) \cdot (x + y) = x^2 - y^2$.
>
> Check with $x = 5$ and $y = 2$. On the left: $3 \cdot 7 = 21$. On the right: $25 - 4 = 21$.

Example with $\frac 1{\sqrt 2 - 1}$.

1. Multiply top and bottom by $\sqrt 2 + 1$. On top you get $\sqrt 2 + 1$.
2. Below you get $(\sqrt 2 - 1) \cdot (\sqrt 2 + 1)$. By the refresher it gives $(\sqrt 2)^2 - 1^2 = 2 - 1 = 1$.
3. Result: $\frac{\sqrt 2 + 1}1 = \sqrt 2 + 1$. The root below has gone.

> [!PITFALL] The root of a sum
> The root of a sum is **not** the sum of the roots. Check with numbers: $\sqrt{9 + 16} = \sqrt{25} = 5$, while $\sqrt 9 + \sqrt{16} = 3 + 4 = 7$.

All the rules in one table, to copy onto the exam sheet.

| Rule | Example |
|---|---|
| $\sqrt a \cdot \sqrt b = \sqrt{ab}$ | $\sqrt 2 \cdot \sqrt 8 = \sqrt{16} = 4$ |
| $\sqrt{a^2 b} = a\sqrt b$ | $\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt 3$ |
| $(\sqrt a)^2 = a$ | $(\sqrt 5)^2 = 5$ |
| $\sqrt{x^2}$ is $x$ without the minus sign | $\sqrt{(-3)^2} = 3$ |
| only the same root can be added | $2\sqrt 3 + 5\sqrt 3 = 7\sqrt 3$ |
| root below: multiply top and bottom by the root | $\frac 6{\sqrt 3} = \frac{6\sqrt 3}3 = 2\sqrt 3$ |
| difference below: multiply top and bottom by the sum | $\frac 1{\sqrt 2 - 1} = \sqrt 2 + 1$ |

::: try Simplify $\sqrt{18}$.
A perfect square that divides 18 is 9: $18 = 9 \cdot 2$. So $\sqrt{18} = \sqrt 9 \cdot \sqrt 2 = 3\sqrt 2$.
:::

::: try Remove the root from the number below: $\frac 4{\sqrt 2}$.
Multiply top and bottom by $\sqrt 2$. On top you get $4\sqrt 2$, below you get $\sqrt 2 \cdot \sqrt 2 = 2$. So $\frac{4\sqrt 2}2 = 2\sqrt 2$.
:::

> [!REMEMBER]
> - A perfect square comes out of the root: $\sqrt{12} = 2\sqrt 3$.
> - Only equal roots can be added.
> - To remove a root from the number below, multiply top and bottom by that root.
> - The root of a sum is **not** the sum of the roots.

## The symbols of this lesson

| Symbol | Read as | It means | Example |
|---|---|---|---|
| $\{\ \}$ | "the set of…" | the curly brackets enclose the elements of a set | $\{1, 3, 5\}$ |
| $\in$ | "belongs to" | is inside the set | $3 \in \{1, 3, 5\}$ |
| $\notin$ | "does not belong to" | is not inside the set | $2 \notin \{1, 3, 5\}$ |
| $\subset$ | "is contained in" | all the elements of the first are in the second | $\{1, 5\} \subset \{1, 3, 5\}$ |
| $\subsetneq$ | "is strictly contained in" | it is contained, and the second has something more | $\N \subsetneq \Z$ |
| $\emptyset$ | "empty set" | the set with no elements | |
| $\dots$ | "and so on" | the elements continue with the same rule | $\{0, 1, 2, \dots\}$ |
| $\N$ | "N" | the natural numbers | $0, 1, 2$ |
| $\Z$ | "Z" | the integers | $-2, 0, 7$ |
| $\Q$ | "Q" | the rational numbers, that is the fractions | $\frac 12, -\frac 34$ |
| $\R$ | "R" | the real numbers | $\sqrt 2, \pi$ |
| $\C$ | "C" | the complex numbers (lesson L02) | |
| $\cdot$ | "times" | the multiplication sign | $3 \cdot 4 = 12$ |
| $\neq$ | "different from" | not equal | $b \neq 0$ |
| $<$, $>$ | "less than", "greater than" | further left, further right on the number line | $-5 < -2$ |
| $\le$, $\ge$ | "less than or equal to", "greater than or equal to" | as above, but equality is allowed too | $2 \le 2$ |
| $\mid$ | "such that" | introduces the condition to be satisfied | $\{x \in \R \mid x > 0\}$ |
| $(a, b)$ | "open interval from $a$ to $b$" | the real numbers between $a$ and $b$, endpoints excluded | $(1, 2)$ |
| $[a, b]$ | "closed interval from $a$ to $b$" | the real numbers between $a$ and $b$, endpoints included | $[1, 2]$ |
| $a_n$ | "a sub n" | the term in position $n$ of a sequence | $a_2 = 3.14$ |
| $\lvert x \rvert$ | "absolute value of $x$" | the number without the minus sign | $\lvert -2 \rvert = 2$ |
| $a^2$ | "$a$ squared" | $a$ times $a$ | $3^2 = 9$ |
| $\sqrt a$ | "root of $a$" | the positive number whose square is $a$ | $\sqrt 9 = 3$ |
| $-a$ | "minus $a$", "the opposite of $a$" | the number that added to $a$ gives 0 | $-7$ |
| $a^{-1}$ | "$a$ to the minus one", "the inverse of $a$" | the number that multiplied by $a$ gives 1 | $4^{-1} = \frac 14$ |
| $\forall$ | "for every" | it holds whichever element you choose | $\forall a \in \R$ |
| $\exists$ | "there exists" | there is at least one | $\exists x \in \Z$ |

## Towards the exam

The **Linear Algebra and Geometry** exam (part 2 of MDAG) is written and is the same for channels A, B and C. As of 30/09/2026 the 2026/27 rules have not been published yet: on Moodle it says "informazioni seguono" ("information to follow"). So the reference is the 2025/26 rules, confirmed by the exam papers.

**What the exam looks like**

- **10 multiple-choice questions.** Each has 5 answers, from (a) to (e), and **only one is correct**. Each question is worth 1 point.
- **2 open problems**, split into several questions. Each is worth 11 points. To get partial credit you must write down the steps.
- **Cut-off (sbarramento).** The problems are marked only for those who score **at least 6 points out of 10** in the quiz.
- **Duration:** 2 hours. The maximum is 32 points, the pass mark is 18.
- **Materials allowed:** only one folded sheet, or two A4 sheets (4 sides), **handwritten**, with formulas, notes and exercises. **No calculator** and no books.
- In the quiz the answers are marked with an **X**, not with a circle.

| 2026/27 exam session | Registration on MyUniTo | Time and rooms |
|---|---|---|
| Fri 22/01/2027 | 02/01 – 15/01/2027 | 14:00, rooms A, B, C, D, F |
| Fri 05/02/2027 | 16/01 – 29/01/2027 | 14:00, rooms A, B, C, D, F |

The final MDAG grade is the average of the two tests, Discrete Mathematics and Linear Algebra. They can also be taken in different exam sessions. Careful: sitting again a test you have already passed **cancels** the previous grade, even if it goes worse. Details and sources in the [course sheet](https://github.com/DonFlammer/unito-computer-science/blob/main/ai_context/MDAG/course.md).

**What you need from this lesson**

1. **Fields.** From lesson L05 every vector space is built "over a field". Being able to say why $\Z$ is not a field is a typical theory question of the quiz.
2. **Notation.** Sets, intervals, points and vectors with the right brackets. In the problems the answers are written with this notation.
3. **Calculations by hand.** Fractions and roots appear in almost every question on lengths, angles and distances. Practise now with exercises 5 and 10.
4. **Reasoning by contradiction.** The quiz does not ask for proofs, but this way of reasoning comes back often in the handouts.

> [!EXAM] The 4-page sheet
> It is the only material allowed, so it is worth building it lesson by lesson. From this lesson two things are enough: the table of the rules for roots and the line "field = 9 rules; $\N$ and $\Z$ are not fields".

## Quiz

```quiz
Q: Which of these sets, with the usual sum and product, is **not** a field?
- $\Q$
- $\R$
+ $\Z$
- $\C$
- They are all fields.
= In a field every number different from zero must have its inverse inside the set (rule 8). In $\Z$ the inverse of $2$ would be $\frac 12$, which is not an integer. So $\Z$ is not a field. $\Q$, $\R$ and $\C$ are.

Q: Which of these numbers is irrational?
- $0.125$
- $\frac{22}{7}$
- $\sqrt 9$
+ $\sqrt{12}$
- $0.\overline{3}$
= $\sqrt{12} = 2\sqrt 3$, and $\sqrt 3$ is irrational because 3 is not a perfect square. The others are all fractions: $0.125 = \frac 18$, $\sqrt 9 = 3$, $0.\overline 3 = \frac 13$. $\frac{22}7$ is a fraction too: it is only a number close to $\pi$, it is not $\pi$.

Q: Which statement is true?
+ $\N \subsetneq \Z \subsetneq \Q \subsetneq \R$
- $\Q \subsetneq \Z$
- $\R \subsetneq \Q$
- $\sqrt 2 \in \Q$
- $\Z = \N$
= Each family is inside the next and the next has something more: $-1$ is an integer but not a natural, $\frac 12$ is a rational but not an integer, $\sqrt 2$ is a real but not a rational.

Q: The set $\{x \in \R \mid 1 \le x < 2\}$ is:
- $(1, 2)$
- $[1, 2]$
+ $[1, 2)$
- $\{1, 2\}$
- $(1, 2]$
= The symbol $\le$ includes 1: square bracket on the left. The symbol $<$ excludes 2: round bracket on the right. $\{1, 2\}$, on the other hand, is the set with just the two numbers 1 and 2.

Q: The number $0.999\ldots$ (with infinitely many digits 9) is equal to:
+ $1$
- a number just smaller than $1$
- $0.9$
- $\frac 9{10}$
- it is not a real number
= Start from $\frac 13 = 0.333\ldots$ and multiply both sides by 3: on the left you get $1$, on the right $0.999\ldots$ They are two ways of writing the same number, like $5.973\overline 9$ and $5.974$ in the handouts.

Q: In the proof that $\sqrt 2 \notin \Q$, which contradiction is reached?
+ $a$ and $b$ are both even, while the fraction $\frac ab$ was in lowest terms.
- $\sqrt 2 = 2$.
- $b = 0$.
- $a^2$ is odd.
- $2$ is not a prime number.
= From $a^2 = 2b^2$ we get that $a$ is even. Substituting $a = 2k$ we get that $b$ is even too. Then top and bottom can be divided by 2, but the fraction had been chosen reduced: the two things cannot both be true.

Q: Which property does $\Z$ lack to be a field?
+ The existence of the multiplicative inverse of every non-zero element.
- The existence of the opposite.
- The commutative property of the product.
- The distributive property.
- The existence of the identity element of the sum.
= The "multiplicative inverse" is the inverse for the product, the one of rule 8. In $\Z$ every number has its opposite, and all the other rules hold. But only $1$ and $-1$ have an integer inverse: for example the inverse of $3$ would be $\frac 13$.

Q: What is the value of $\sqrt 8 + \sqrt{18}$?
+ $5\sqrt 2$
- $\sqrt{26}$
- $2\sqrt 2$
- $13$
- $6\sqrt 3$
= Take a square out of each root: $\sqrt 8 = \sqrt{4 \cdot 2} = 2\sqrt 2$ and $\sqrt{18} = \sqrt{9 \cdot 2} = 3\sqrt 2$. Now the roots are equal and can be added: $2\sqrt 2 + 3\sqrt 2 = 5\sqrt 2$. The answer $\sqrt{26}$ is the trap: the root of a sum is not the sum of the roots.

Q: What is the value of $a_2$ in the sequence $a_n = \left(1 + \frac 1n\right)^n$? Write a fraction or a decimal.
N: 9/4
= Put 2 in place of $n$. Inside the brackets: $1 + \frac 12 = \frac 32$. Then the square: $\frac 32 \cdot \frac 32 = \frac 94 = 2.25$.
```

## Exercises

::: exercise basic True or false with the symbols
Say whether each statement is true or false: (a) $-3 \in \N$; (b) $\frac 12 \in \Q$; (c) $\N \subset \Z$; (d) $\sqrt 9 \in \N$; (e) $\{2, 4\} \subset \{1, 2, 3\}$.
::: solution
(a) **False.** $-3$ has the minus sign, and the naturals are $0, 1, 2, \dots$ So $-3 \notin \N$.

(b) **True.** $\frac 12$ is a fraction with the number below different from zero.

(c) **True.** Every natural number is also an integer.

(d) **True.** Work it out first: $\sqrt 9 = 3$. And 3 is a natural number.

(e) **False.** 2 is in $\{1, 2, 3\}$, but 4 is not. One element outside is enough.
:::

::: exercise basic Opposites and inverses
For each number write the opposite and the inverse: (a) $3$; (b) $-\frac 12$; (c) $\frac 54$.
::: solution
The **opposite** is the number that added gives 0: you change the sign. The **inverse** is the number that multiplied gives 1: in a fraction you swap top and bottom.

(a) Opposite of $3$: $-3$, because $3 + (-3) = 0$. Inverse: $\frac 13$, because $3 \cdot \frac 13 = 1$.

(b) Opposite of $-\frac 12$: $\frac 12$, because $-\frac 12 + \frac 12 = 0$. Inverse: $-2$, because $-\frac 12 \cdot (-2) = \frac 22 = 1$.

(c) Opposite of $\frac 54$: $-\frac 54$. Inverse: $\frac 45$, because $\frac 54 \cdot \frac 45 = \frac{20}{20} = 1$.
:::

::: exercise basic From the smallest to the biggest
Put in order from the smallest to the biggest: $2$, $-3$, $\frac 12$, $0$, $-\frac 13$.
::: solution
Think of the number line: further left means smaller.

1. The negatives are to the left of zero. They are $-3$ and $-\frac 13$. Of the two, $-3$ is further left: $-3 < -\frac 13$.
2. Then comes $0$.
3. The positives are to the right of zero. They are $\frac 12$ and $2$, and $\frac 12 < 2$.

Result: $-3 < -\frac 13 < 0 < \frac 12 < 2$.

Check of one step with the precise rule: $-\frac 13 - (-3) = -\frac 13 + 3 = \frac 83$, which is positive. So $-\frac 13 > -3$.
:::

::: exercise basic Where each number lives
For each number find the **smallest** set among $\N$, $\Z$, $\Q$, $\R$ that contains it:
$$-4, \qquad 0, \qquad \frac 72, \qquad \sqrt{16}, \qquad \sqrt 7, \qquad 0.\overline{12}, \qquad \pi, \qquad -\frac{\sqrt{25}}{5}.$$
::: solution
The golden rule: **simplify first, then decide**.

| Number | Simplified | Smallest set | Why |
|---|---|---|---|
| $-4$ | $-4$ | $\Z$ | it is negative, so it is not in $\N$ |
| $0$ | $0$ | $\N$ | in the course zero is a natural |
| $\frac 72$ | $3.5$ | $\Q$ | it is a fraction that is not an integer |
| $\sqrt{16}$ | $4$ | $\N$ | $4 \cdot 4 = 16$ |
| $\sqrt 7$ | cannot be simplified | $\R$ | 7 is not a perfect square: irrational |
| $0.\overline{12}$ | $\frac 4{33}$ | $\Q$ | the digits repeat, so it is a fraction (exercise 5) |
| $\pi$ | cannot be simplified | $\R$ | irrational |
| $-\frac{\sqrt{25}}5$ | $-\frac 55 = -1$ | $\Z$ | $\sqrt{25} = 5$, then 5 divided by 5 is 1 |

$\sqrt{16}$ looks like a "difficult" number, but it is 4.
:::

::: exercise basic From a repeating decimal to a fraction
Write as a fraction: (a) $0.\overline 7$; (b) $2.\overline 3$; (c) $0.\overline{12}$.
::: solution
The trick is always the same. Call the number $x$. Multiply it by 10, so that the point moves one place. Then subtract $x$: the digits after the point are identical and cancel out.

(a) $x = 0.777\ldots$

1. I multiply by 10: $10x = 7.777\ldots$
2. I subtract: $10x - x = 7.777\ldots - 0.777\ldots = 7$.
3. On the left $10x - x$ is $9x$. So $9x = 7$.
4. I divide by 9: $x = \frac 79$.

(b) $x = 2.333\ldots$

1. I multiply by 10: $10x = 23.333\ldots$
2. I subtract: $9x = 23.333\ldots - 2.333\ldots = 21$.
3. I divide by 9: $x = \frac{21}9$. I simplify by 3: $x = \frac 73$.
4. Check: 7 divided by 3 is $2.333\ldots$ ✓

(c) $x = 0.1212\ldots$ Here the period has **two** digits, so I multiply by 100: the point moves two places.

1. $100x = 12.1212\ldots$
2. I subtract: $100x - x = 99x = 12$.
3. I divide by 99: $x = \frac{12}{99}$. I simplify by 3: $x = \frac 4{33}$.
:::

::: exercise basic $0.\overline 9 = 1$ with the method of exercise 5
Use the same method to show that $0.999\ldots = 1$. Then show that $5.973\overline 9 = 5.974$.
::: solution
**First part.** I call $x = 0.999\ldots$

1. I multiply by 10: $10x = 9.999\ldots$
2. I subtract: $10x - x = 9.999\ldots - 0.999\ldots = 9$. So $9x = 9$.
3. I divide by 9: $x = 1$.

**Second part.** I split the number into two pieces: $5.973\overline 9 = 5.973 + 0.000\overline 9$.

The second piece is $0.\overline 9$ with the point moved three places, that is $0.\overline 9$ divided by 1000. Since $0.\overline 9 = 1$, the second piece is worth $\frac 1{1000} = 0.001$.

So $5.973\overline 9 = 5.973 + 0.001 = 5.974$.
:::

::: exercise basic Intervals
(a) Write with brackets the set $\{x \in \R \mid -1 < x \le 3\}$. (b) Write with a condition the interval $[0, 5)$. (c) Which interval is $\{x \in \R \mid x^2 < 4\}$? (d) How many elements do $\{0, 5\}$ and $(0, 5)$ have?
::: solution
(a) $(-1, 3]$. Round on the left because $-1$ is excluded ($<$). Square on the right because $3$ is included ($\le$).

(b) $\{x \in \R \mid 0 \le x < 5\}$. The square bracket becomes $\le$, the round one becomes $<$.

(c) I look for the numbers whose square is less than 4. I try a few numbers.

- $x = 1$: $1^2 = 1$, less than 4. It works.
- $x = 1.9$: $1.9^2 = 3.61$, less than 4. It works.
- $x = 2$: $2^2 = 4$, which is not less than 4. It does not work.
- $x = -1.9$: $(-1.9)^2 = 3.61$. It works: the square of a negative is positive.
- $x = -2$: $(-2)^2 = 4$. It does not work.

The numbers between $-2$ and $2$ work, without the endpoints: the interval is $(-2, 2)$.

(d) $\{0, 5\}$ has **2** elements. $(0, 5)$ has **infinitely many**.
:::

::: exercise basic The first terms of the sequence of $e$
Compute as fractions $a_1$, $a_2$, $a_3$, $a_4$ of $a_n = \left(1 + \frac 1n\right)^n$ and check that they increase.
::: solution
Each time I put a number in place of $n$: first I work out the brackets, then the power.

- $n = 1$: the brackets give $1 + 1 = 2$. Then $2^1 = 2$. So $a_1 = 2$.
- $n = 2$: the brackets give $1 + \frac 12 = \frac 32$. Then $\left(\frac 32\right)^2 = \frac 94$. So $a_2 = 2.25$.
- $n = 3$: the brackets give $1 + \frac 13 = \frac 43$. Then $\left(\frac 43\right)^3 = \frac{64}{27}$. So $a_3$ is about $2.370$.
- $n = 4$: the brackets give $1 + \frac 14 = \frac 54$. Then $\left(\frac 54\right)^4 = \frac{625}{256}$. So $a_4$ is about $2.441$.

They increase: $2 < 2.25 < 2.370 < 2.441$. And they stay below $e$, which is about $2.718$ (look at the graph in the section on the real numbers). Each term is a fraction, but the number they get closer and closer to is not.
:::

::: exercise intermediate Field or not?
For each set, with the usual sum and product, say whether it is a field. If it is not, give **one** property that fails, with an example: (a) $\N$; (b) $\Z$; (c) the positive real numbers $\{x \in \R \mid x > 0\}$; (d) $\Q$.
::: solution
(a) $\N$: **no**. Rule 4 fails: the number $3$ has no opposite in $\N$, because $-3 \notin \N$.

(b) $\Z$: **no**. Rule 8 fails: the number $2$ has no inverse in $\Z$, because $\frac 12 \notin \Z$.

(c) Positive reals: **no**. Rule 1 fails: $0$ is not positive, so the identity element of the sum is missing from the set.

(d) $\Q$: **yes**. All nine rules hold. The opposite of $\frac ab$ is $\frac{-a}b$. If $a \neq 0$, the inverse of $\frac ab$ is $\frac ba$, which is still a fraction.
:::

::: exercise intermediate Calculations without a calculator
Simplify: (a) $\sqrt{50}$; (b) $\sqrt{12} \cdot \sqrt 3$; (c) $\frac 6{\sqrt 3}$; (d) $(1 + \sqrt 2)^2$; (e) $\frac 1{\sqrt 2 - 1}$; (f) $\frac{\sqrt 3}3$ and $\frac 1{\sqrt 3}$: are they equal?
::: solution
(a) I look for a perfect square that divides 50: $50 = 25 \cdot 2$. So $\sqrt{50} = \sqrt{25} \cdot \sqrt 2 = 5\sqrt 2$.

(b) Root times root: $\sqrt{12} \cdot \sqrt 3 = \sqrt{12 \cdot 3} = \sqrt{36} = 6$.

(c) I multiply top and bottom by $\sqrt 3$. Top: $6\sqrt 3$. Bottom: $\sqrt 3 \cdot \sqrt 3 = 3$. So $\frac{6\sqrt 3}3 = 2\sqrt 3$.

(d) The square is the number times itself: $(1 + \sqrt 2) \cdot (1 + \sqrt 2)$. I multiply each piece of the first by each piece of the second.

- $1 \cdot 1 = 1$
- $1 \cdot \sqrt 2 = \sqrt 2$
- $\sqrt 2 \cdot 1 = \sqrt 2$
- $\sqrt 2 \cdot \sqrt 2 = 2$

I add the four pieces: $1 + \sqrt 2 + \sqrt 2 + 2 = 3 + 2\sqrt 2$.

(e) I multiply top and bottom by $\sqrt 2 + 1$:
$$\frac 1{\sqrt 2 - 1} \cdot \frac{\sqrt 2 + 1}{\sqrt 2 + 1} = \frac{\sqrt 2 + 1}{(\sqrt 2)^2 - 1^2} = \frac{\sqrt 2 + 1}{2 - 1} = \sqrt 2 + 1.$$

(f) Yes. I start from $\frac 1{\sqrt 3}$ and multiply top and bottom by $\sqrt 3$: on top I get $\sqrt 3$, below I get $3$. So $\frac 1{\sqrt 3} = \frac{\sqrt 3}3$. In the exam quiz the same number may appear in either form.
:::

::: exercise intermediate $\sqrt 3$ is not rational
Prove by contradiction that $\sqrt 3 \notin \Q$. Hint: you need the fact "if $a^2$ is a multiple of 3, so is $a$". Prove this too.
::: solution
**The fact about multiples of 3.** Dividing an integer by 3 the remainder can be 0, 1 or 2. So every integer $a$ can be written in one of these three ways, where $k$ is an integer: $a = 3k$, or $a = 3k + 1$, or $a = 3k + 2$.

I look at the square in the last two cases, those in which $a$ is not a multiple of 3.

- $(3k + 1)^2 = 9k^2 + 6k + 1 = 3 \cdot (3k^2 + 2k) + 1$. It is a multiple of 3, plus 1.
- $(3k + 2)^2 = 9k^2 + 12k + 4 = 3 \cdot (3k^2 + 4k + 1) + 1$. This too is a multiple of 3, plus 1.

In both cases $a^2$ is not a multiple of 3. So, if $a^2$ is a multiple of 3, only the first case remains: $a$ is a multiple of 3.

**The proof**, with the same recipe used for $\sqrt 2$.

1. I pretend that $\sqrt 3 = \frac ab$, with the fraction in lowest terms.
2. I square and get rid of the fraction: $a^2 = 3b^2$. So $a^2$ is a multiple of 3.
3. By the fact above, $a$ is a multiple of 3 too: $a = 3k$.
4. I substitute: $(3k)^2 = 9k^2$, so $9k^2 = 3b^2$. I divide by 3: $b^2 = 3k^2$.
5. Then $b^2$ is a multiple of 3, and by the fact above so is $b$.
6. $a$ and $b$ can both be divided by 3. But the fraction was reduced: contradiction. So $\sqrt 3 \notin \Q$.
:::

::: exercise intermediate Rational plus irrational
(a) Prove that if $q \in \Q$ and $x \notin \Q$, then $q + x \notin \Q$. (b) Find two irrational numbers whose sum is rational, and two whose product is rational.
::: solution
(a) In words: a fraction plus a number that is not a fraction never gives a fraction. It is proved by contradiction.

1. I pretend that $q + x$ is a fraction, and I call it $r$: $q + x = r$.
2. I take $q$ away from both sides: $x = r - q$.
3. The difference of two fractions is a fraction. Indeed $\frac ab - \frac cd = \frac{ad - bc}{bd}$: top and bottom are integers.
4. So $x$ is a fraction. But we had said that $x$ is not one: contradiction.

So $q + x$ is not a fraction.

(b) Sum: $\sqrt 2 + (-\sqrt 2) = 0$. Product: $\sqrt 2 \cdot \sqrt 2 = 2$, or $\sqrt 2 \cdot \sqrt 8 = \sqrt{16} = 4$.

So irrational plus irrational, and irrational times irrational, **can** give a rational. There is no fixed rule.
:::

::: exercise hard $\sqrt 2 + \sqrt 3$ is irrational
(a) Prove that $\sqrt 6 \notin \Q$. (b) Use it to prove that $\sqrt 2 + \sqrt 3 \notin \Q$.
::: solution
(a) Same recipe.

1. I pretend that $\sqrt 6 = \frac ab$, a reduced fraction.
2. I square and get rid of the fraction: $a^2 = 6b^2$. Since $6b^2 = 2 \cdot 3b^2$, the number $a^2$ is even. So $a$ is even: $a = 2k$.
3. I substitute: $4k^2 = 6b^2$. I divide by 2: $2k^2 = 3b^2$.
4. On the left there is an even number, so $3b^2$ is even too. 3 is odd, and odd times odd is odd: then $b^2$ must be even. So $b$ is even.
5. $a$ and $b$ are both even, but the fraction was reduced: contradiction.

(b) By contradiction again.

1. I pretend that $\sqrt 2 + \sqrt 3$ is a fraction, and I call it $q$.
2. I square. As in exercise 10 (d), I multiply each piece by each piece:
   $$q^2 = (\sqrt 2)^2 + 2 \cdot \sqrt 2 \cdot \sqrt 3 + (\sqrt 3)^2 = 2 + 2\sqrt 6 + 3 = 5 + 2\sqrt 6.$$
3. I isolate $\sqrt 6$. I take away 5: $q^2 - 5 = 2\sqrt 6$. I divide by 2: $\sqrt 6 = \frac{q^2 - 5}2$.
4. If $q$ is a fraction, so is $\frac{q^2 - 5}2$. So $\sqrt 6$ would be a fraction.
5. But by part (a) it is not: contradiction. So $\sqrt 2 + \sqrt 3 \notin \Q$.
:::

## Review questions

::: question What do $\N$, $\Z$ and $\Q$ contain? Is zero in $\N$?
$\N$ contains the counting numbers: $0, 1, 2, \dots$ **Zero is there**, in the course's convention. $\Z$ adds the negative numbers. $\Q$ contains all the fractions $\frac ab$ with $a$ and $b$ integers and $b$ different from zero.
:::

::: question Why do we go from $\Q$ to $\R$?
Because some numbers are missing among the fractions. For example no fraction squared gives 2. And there are lists of fractions that get closer and closer to something that is not a fraction, like the list of $\pi$. The real numbers fill these "holes".
:::

::: question What is a Cauchy sequence, in words?
An infinite list of numbers in which, from a certain point on, the terms are as close to one another as you like. Choose a tolerance, even a tiny one: there is always a position in the list from which on any two terms are closer than that tolerance.
:::

::: question How are the real numbers defined with Cauchy sequences?
A real number is a list of fractions that tightens (a Cauchy sequence). Two lists that get closer and closer to the same thing count as the same number. If the list gets closer and closer to a fraction, it represents that fraction. Otherwise it defines a new number, an irrational one.
:::

::: question What does it mean that $\R$ is complete?
That it has no holes. Every list of real numbers that tightens gets closer and closer to a real number. Redoing the construction starting from $\R$ you find no new number.
:::

::: question Repeat the proof that $\sqrt 2$ is not rational.
By contradiction $\sqrt 2 = \frac ab$, a reduced fraction. Squaring: $a^2 = 2b^2$. So $a^2$ is even and $a$ is even too: $a = 2k$. Substituting, $4k^2 = 2b^2$, that is $b^2 = 2k^2$. So $b$ is even too. Then $a$ and $b$ can both be divided by 2, but the fraction was reduced: contradiction.
:::

::: question What is a field? Give an example and a counterexample.
A set with a sum and a product that obey the nine rules: the identity elements 0 and 1, the opposites, the inverses of the numbers different from zero, the commutative, associative and distributive properties. Examples: $\Q$, $\R$, $\C$. Counterexample: $\Z$, because 2 has no inverse among the integers.
:::

::: question Why does zero have no inverse?
The inverse of 0 should be a number that, multiplied by 0, gives 1. But every number multiplied by 0 gives 0. That is why rule 8 asks for the inverse only for the numbers different from zero.
:::

::: question How is $a > b$ defined?
$a > b$ when $a - b$ is positive. So it is enough to know which numbers are positive. In $\Z$ they are $1, 2, 3, \dots$ In $\Q$ they are the fractions in which top and bottom have the same sign.
:::

::: question What is the difference between $\{1, 2\}$, $(1, 2)$ and $[1, 2]$?
$\{1, 2\}$ is the set with the two elements 1 and 2. $(1, 2)$ is the open interval: all the real numbers between 1 and 2, endpoints excluded. It can also be a point or a vector, depending on the context. $[1, 2]$ is the closed interval: endpoints included.
:::

::: question Which are the nine Greek letters to know?
$\alpha$ (alpha), $\varepsilon$ (epsilon), $\sigma$ (sigma), $\vartheta$ (theta), $\phi$ (phi), $\pi$ (pi), $\lambda$ (lambda), $\mu$ (mu), $\varrho$ (rho).
:::

::: question How do you remove a root from the number below in a fraction?
Multiply top and bottom by the same root: $\frac 6{\sqrt 3} = \frac{6\sqrt 3}3 = 2\sqrt 3$. If there is a difference such as $\sqrt 2 - 1$ below, multiply top and bottom by $\sqrt 2 + 1$: below you get $(\sqrt 2)^2 - 1^2 = 1$.
:::

## Glossary

```glossary
Set | A bag of objects, which are called elements. It is written with curly brackets: $\{1, 3, 5\}$. Order and repetitions do not matter.
Membership ($\in$) | $3 \in A$ means that 3 is an element of $A$. The opposite is written $\notin$.
Subset ($\subset$) | $B \subset A$ means that every element of $B$ is also in $A$. With $\subsetneq$ we add that $A$ has something more.
Natural numbers $\N$ | The counting numbers: $0, 1, 2, 3, \dots$ Zero is included.
Integers $\Z$ | The naturals plus the negative numbers: $\dots, -2, -1, 0, 1, 2, \dots$
Rational numbers $\Q$ | The numbers that can be written as a fraction of two integers, with the number below different from zero. As decimals they end or repeat.
Real numbers $\R$ | The numbers that may have infinitely many digits after the point. Precisely: lists of fractions that get closer and closer to one another.
Irrational number | A real number that is not a fraction, such as $\sqrt 2$, $\pi$, $e$.
Sequence | An infinite list of numbers, one after the other: $a_1, a_2, a_3, \dots$
Cauchy sequence | A sequence in which, from a certain position on, the terms are closer to one another than any chosen tolerance.
Completeness | The property of $\R$ of having no holes: every Cauchy sequence gets closer and closer to a real number. $\Q$ is not complete.
Proof by contradiction | You pretend that the opposite of what you want to prove is true and you reach something impossible.
Binary operation | A rule that takes two numbers and gives back one, like the sum and the product.
Identity element | The number that changes nothing: 0 for the sum, 1 for the product.
Opposite | The opposite of $a$ is $-a$: added together they give 0. For example the opposite of 7 is $-7$.
Inverse | The inverse of $a$ is $a^{-1}$, that is $\frac 1a$: multiplied together they give 1. Zero has no inverse.
Field | A set with a sum and a product that obey the nine rules of Proposition 1.5. $\Q$, $\R$ and $\C$ are; $\N$ and $\Z$ are not.
Order | $a > b$ when $a - b$ is positive. $\R$ is ordered, $\C$ is not.
Interval | A piece of the number line. $(a, b)$ excludes the endpoints, $[a, b]$ includes them.
Quantifiers | The symbols $\forall$ and $\exists$: they read "for every" and "there exists".
```

## Checklist

```checklist
- I can write $\N$, $\Z$, $\Q$ with the right brackets and I know that in this course $0 \in \N$.
- I can explain with a question why each new family of numbers is needed.
- I can turn a repeating decimal into a fraction and explain why $0.\overline 9 = 1$.
- I can explain in words what a Cauchy sequence is and how it defines a real number.
- I can say what it means that $\R$ is complete and $\Q$ is not.
- I can redo on my own the proof that $\sqrt 2$ is not rational, explaining each step.
- I can list the nine rules of a field and explain why $\N$ and $\Z$ are not fields.
- I know when $a > b$ and which numbers are positive in $\Z$ and in $\Q$.
- I do not confuse $\{1, 2\}$, $(1, 2)$ and $[1, 2]$, and I can read $\forall$, $\exists$, $\Longrightarrow$, $\Longleftrightarrow$.
- I can simplify roots and remove them from the number below in a fraction, without a calculator.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 1 "Numeri reali", pp. 2–5: sections 1.A–1.E are followed in order, with the page next to each heading; definitions, propositions and examples keep their numbering (Definition 1.1, Examples 1.2 and 1.3, Propositions 1.4 and 1.5).
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §1.1 (number sets, proof by contradiction, subsets, set notation, quantifiers), §1.5 (algebraic structures) and complement 1.II (construction of the real numbers).
- **MDAG2 2026/27 Moodle page** ([id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)): calendar, complete handouts L01–L26, chapters of the book covered (1–5, 7–9, 11).
- **Exam**: 2025/26 rules and the papers of the 15/01/2026 and 07/09/2026 exam sessions (2025/26 Moodle, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); dates of the 2026/27 exam sessions from the Esse3 listings.
- The explanations in words, the examples with numbers, the "Refresher" and "Your turn" boxes and the exercises belong to these notes. The **"Beyond the handouts"** parts (repeating decimals, reading the symbols, calculating with roots) connect the lesson to the rest of the course and to the exam.
