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
  Where the numbers we will use throughout the course come from: the sets $\N \subsetneq \Z \subsetneq \Q \subsetneq \R$,
  how the real numbers are built, why $\sqrt 2$ is not a fraction, the nine rules that make $\R$ a field, order and
  the brackets not to confuse. Plus: the symbols of mathematical language and calculations with roots without a
  calculator, which you need in every exam.
material: handouts
facts:
  Handouts: lesson 1 · pp. 2–5
  Book: Martelli, §1.1 and complement 1.II
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 90–120 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 1 "Numeri reali"; B. Martelli, Geometria e algebra lineare, §1.1, §1.5 and complement 1.II
italian_file: L01_numeri_reali.html
html_notes: notes/MDAG/L01_real_numbers.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L01_numeri_reali.md
---

## In brief

- The numbers of the course live in sets nested one inside the other: $\N = \{0, 1, 2, \dots\}$ (zero is included!), then $\Z$ with the negatives, $\Q$ with the fractions, $\R$ with all the real numbers; from the next lesson also $\C$. We write $\N \subsetneq \Z \subsetneq \Q \subsetneq \R$.
- Each new set is needed to solve equations that had no solution before: $x + 5 = 3$ cannot be solved in $\N$, $2x = 1$ cannot be solved in $\Z$, $x^2 = 2$ cannot be solved in $\Q$.
- A real number is a number with infinitely many digits after the decimal point. To define it precisely we use **Cauchy sequences**: infinite lists of fractions that, as you go on, get as close to one another as you like.
- $\R$ is **complete**: it has no "holes". $\Q$ instead has lots of them, for example where $\sqrt 2$, $\pi$ and $e$ are.
- $\sqrt 2$ is not a fraction: it is the first **proof by contradiction** of the course, one you should be able to redo.
- Sum and product in $\R$ obey nine rules (identity elements, opposites, inverses, commutative, associative and distributive properties). A set with these rules is called a **field**: $\Q$, $\R$ and $\C$ are fields, $\N$ and $\Z$ are not.
- $\R$ is **ordered**: $a > b$ means that $a - b$ is positive.
- Different brackets, different objects: $\{1, 2\}$ is a set of two numbers, $(1, 2)$ is an open interval (or a point of the plane), $[1, 2]$ is a closed interval.

> [!CHANNELS]
> Linear Algebra and Geometry uses the **same handouts** in the three channels: Buzano teaches in channels A and B, Radeschi in channels B and C. These notes follow the 2026 handouts, so they hold in the same way for A, B and C. Only the days of the lessons change: the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)) warns that timetable changes are announced there and in class. Exam and quiz are the same for the three channels.

## Sets: the starting language (p. 2)

Before numbers we need a word: **set**. A set is a collection of objects, called its **elements**. For example the students in a classroom form a set, and each student is an element of that set.

In mathematics a set is written with **curly brackets** $\{\ \}$ (braces), putting the elements inside, separated by commas:

$$A = \{1, 3, 5\}$$

This $A$ contains exactly three numbers: 1, 3 and 5. When the elements are infinitely many, you write a few of them and then the **dots** $\dots$, which mean "and so on, with the same rule".

> [!BEYOND] · two rules about braces
> In a set **order does not matter** and **repetitions do not matter**: $\{1, 2\}$, $\{2, 1\}$ and $\{1, 1, 2\}$ are the same set, with two elements. Only *what is inside* counts. This is why braces must never be used for points or vectors, where order matters a lot (see the section on notation).

### The symbols you will use right away

| Symbol | Read as | Example | True or false? |
|---|---|---|---|
| $x \in A$ | "$x$ belongs to $A$" | $3 \in \{1, 3, 5\}$ | true |
| $x \notin A$ | "$x$ does not belong to $A$" | $2 \notin \{1, 3, 5\}$ | true |
| $B \subset A$ | "$B$ is contained in $A$" (every element of $B$ is also in $A$) | $\{1, 5\} \subset \{1, 3, 5\}$ | true |
| $B \subsetneq A$ | "$B$ is **strictly** contained in $A$" ($B \subset A$ and $A$ has at least one element more) | $\{1, 5\} \subsetneq \{1, 3, 5\}$ | true: 3 is the extra one |
| $\emptyset$ | "empty set" (no elements) | $\emptyset \subset A$ for every set $A$ | true |

A set can also be described by a **property**, instead of listing its elements:

$$\{x \in \R \mid 1 < x < 2\}$$

reads: "the set of the $x$ in $\R$ **such that** $1 < x < 2$". The bar $\mid$ means precisely "such that" (some people use a colon $:$ instead). To the left of the bar is *where* the elements are looked for, to the right the *condition* they must satisfy.

> [!NOTE] Where to go deeper
> The handouts point out that set theory is covered in detail in the **Discrete Mathematics** part of the course (MDAG part 1). Here only sets of numbers are needed.

## Natural numbers, integers and rational numbers (p. 2)

> [!DEF] 1.1 · Natural numbers, integers and rational numbers
> The set of **natural numbers** is $\N = \{0, 1, 2, 3, \dots\}$.
>
> If we add the negative numbers we obtain the set of **integers** $\Z = \{\dots, -2, -1, 0, 1, 2, \dots\}$.
>
> If besides the integers we consider all numbers that can be written as fractions $\frac ab$, we obtain the set of **rational numbers**
> $$\Q = \left\{ \frac ab \ ;\ a, b \in \Z,\ b \neq 0 \right\}.$$

Let us look at the definition one piece at a time.

- $\N$ are the numbers **for counting**: 0, 1, 2, 3 and so on, without end.
- $\Z$ adds the **negatives**: $-1, -2, -3, \dots$ The symbol comes from the German *Zahlen*, "numbers".
- $\Q$ contains **all fractions** $\frac ab$ with $a$ and $b$ integers. The condition $b \neq 0$ is there because **you cannot divide by zero**. The Q stands for *quotient*.
- In $\Q$ the semicolon inside the braces does the same job as the bar: "where $a$ and $b$ are integers and $b$ is not zero".

> [!PITFALL] Zero is a natural number
> In this course (and in Martelli's book) $\N$ **starts from 0**. In some school books $\N$ starts from 1: at the exam the course's convention applies.

### Why we need ever larger sets

One thread links all these sets: each time we find a simple equation that **has no solution** in the set we have, and so we enlarge it.

| Equation | Solution | In the old set? | New set |
|---|---|---|---|
| $x + 5 = 3$ | $x = -2$ | $-2 \notin \N$ | $\Z$ |
| $2x = 1$ | $x = \frac 12$ | $\frac 12 \notin \Z$ | $\Q$ |
| $x^2 = 2$ | $x = \pm\sqrt 2$ | $\sqrt 2 \notin \Q$ (we prove it later) | $\R$ |
| $x^2 = -1$ | no real number | no real square is negative | $\C$, from lesson L02 |

### One fraction, many ways to write it

The same rational number can be written in infinitely many ways:

$$\frac 17 = \frac 3{21} = \frac{-8}{-56}$$

All three are worth "one seventh". To build $\Q$ precisely we have to declare that these fractions represent **the same number**: this is done with an *equivalence relation*, a concept you will study properly in Discrete Mathematics. In practice the rule is:

$$\frac ab = \frac cd \quad\Longleftrightarrow\quad ad = bc.$$

Let us check with $\frac 17$ and $\frac 3{21}$: $1 \cdot 21 = 21$ and $7 \cdot 3 = 21$. Equal, so they are the same fraction.

> [!NOTE] What comes first
> The handouts specify that $\N$ is a **primitive concept**: it is not defined from anything else, you start from it. Then $\Z$ is built from $\N$, and $\Q$ from $\Z$.

> [!BEYOND] · fractions in decimal form
> If you do the division, every fraction becomes a decimal number that is either **terminating** or **repeating**, that is with a group of digits that repeats forever:
> $$\frac 14 = 0.25 \qquad \frac 13 = 0.333\ldots = 0.\overline{3} \qquad \frac 17 = 0.\overline{142857}$$
> The converse holds too: every repeating decimal is a fraction (exercise 2). So a number with infinitely many digits **that never repeat** cannot be rational: those are exactly the irrational numbers.

## From school to a precise definition of the real numbers (pp. 2–3)

### The school idea: infinitely many digits after the point

At school you learn that a **real number** is a number that can have infinitely many digits after the decimal point, like $\pi = 3.14159\ldots$ The handouts say that this definition is **correct**, with just one ambiguity to remember: two different writings can denote the same number. For example

$$5.973\overline{9} = 5.9739999\ldots = 5.974.$$

The same happens with $0.\overline 9 = 0.999\ldots$, which is **exactly** $1$. A simple way to convince yourself:

1. we know that $\frac 13 = 0.333\ldots$;
2. multiply both sides by 3: on the left $3 \cdot \frac 13 = 1$, on the right every digit 3 becomes 9;
3. so $1 = 0.999\ldots$

It is not "a number just below 1": it is exactly 1, written in another way.

### The problem: how do you add infinitely many digits?

The school definition, however, does not say **how to do the operations**. To add two numbers you start from the rightmost digits, with carries. But with infinitely many digits there *is no* rightmost digit to start from. A different way of defining the reals is needed, which the handouts take from analysis and which has an extra merit: it does not depend on base 10 (which we use, the lecturers write, only because we have ten fingers).

### Sequences

A **sequence** is an infinite list of numbers, one for each position $1, 2, 3, \dots$:

$$a_1,\ a_2,\ a_3,\ a_4,\ \dots$$

It is denoted by $(a_n)$. The number $a_n$ is called the **term** in position $n$: $a_1$ is the first, $a_2$ the second, and so on.

### Cauchy sequences

The idea is simple. Take a sequence of fractions that, as it goes on, **tightens up**: after a while the terms are all very close to one another, *as close as you like*. The precise definition says this, with symbols.

> [!DEF] Cauchy sequence (p. 2)
> A sequence $(a_n)$ of rational numbers $a_n \in \Q$ is a **Cauchy sequence** if for every rational number $\varepsilon > 0$ there is an $N > 0$ such that
> $$|a_m - a_n| < \varepsilon \quad \text{for all } m, n > N.$$

Piece by piece:

- $\varepsilon$ (the Greek letter *epsilon*) is a **tolerance**: a positive number as small as you like, for example $0.01$ or $0.000001$.
- $|a_m - a_n|$ is the **distance** between two terms: the absolute value $|\cdot|$ removes the sign.
- "there is an $N$ such that … for all $m, n > N$" means: **from some point on** (after position $N$), *any* pair of terms is less than $\varepsilon$ apart.
- **You** choose the tolerance, and the definition must work for every choice: the smaller $\varepsilon$ is, the further on you will have to go (the larger $N$ will be).

> [!EXAMPLE] 1.2 · The number $\pi$
> The number $\pi = 3.1415926\ldots$ corresponds to the sequence of rational numbers
> $$a_1 = 3.1 \quad a_2 = 3.14 \quad a_3 = 3.141 \quad a_4 = 3.1415 \quad \dots$$
> Each $a_n$ is rational: for example $a_2 = 3.14 = \frac{314}{100}$. And it is a Cauchy sequence: after position $n$ all the terms have the **same first $n + 1$ digits**, so they are less than $10^{-n}$ apart. For example from $a_3$ on the terms all start with $3.141$, and are less than $0.001$ apart.
>
> The sequence that defines a real number is **not unique**: $3.2;\ 3.15;\ 3.142;\ 3.1416;\ \dots$ (the approximations from above) also works, because its difference from the previous sequence tends to zero.

### The real numbers, at last

> [!DEF] Real numbers (p. 3)
> The **real numbers** are defined as *equivalence classes* of Cauchy sequences of rational numbers. Two Cauchy sequences are **equivalent** if their difference is a sequence that tends to zero.

Less abstractly, the procedure works like this. Take a Cauchy sequence of rational numbers:

- if it **converges** to a rational number $a_\infty$ (that is, it gets closer and closer to that number), it simply represents that number $a_\infty$;
- if it **does not converge to any rational number**, it "would like" to tend to something that does not exist in $\Q$: then it *defines a new number*, which is not in $\Q$. It is an **irrational number**.

As a picture: $\Q$ is like a ruler with infinitely many marks, but full of microscopic holes. A Cauchy sequence that "points" to a hole serves to **fill it**.

> [!EXAMPLE] 1.3 · The number $e$
> The sequence of rational numbers
> $$a_n = \left(1 + \frac 1n\right)^n$$
> is a Cauchy sequence but does not converge to a rational number. So it defines a new real number: **Euler's number** $e = 2.71828\ldots$
>
> Let us compute the first terms, to see that they really are fractions:
> $$a_1 = (1 + 1)^1 = 2, \qquad a_2 = \left(\frac 32\right)^2 = \frac 94 = 2.25, \qquad a_3 = \left(\frac 43\right)^3 = \frac{64}{27} \approx 2.370.$$

```graph
title: The terms $a_n = \left(1 + \frac 1n\right)^n$ climb towards $e \approx 2.718$ but none of them reaches it
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

### Completeness: R has no holes (p. 3)

Intuitively you can work with two ideas:

1. every real number can be **approximated** by rational numbers, with any precision you want (as $3.14159$ approximates $\pi$);
2. with this construction we have **plugged all the holes** between the rational numbers.

The second idea has a precise name.

> [!PROP] · $\R$ is complete
> Unlike $\Q$, the set $\R$ of real numbers is **complete**: every Cauchy sequence in $\R$ converges.

It means that, if we redid the whole construction starting from sequences of **real** numbers instead of rational ones, **we would not add any new number**: all the holes have already been filled.

> [!BEYOND] · where to find it in the book
> Martelli's book presents this construction in complement **1.II "Costruzione dei numeri reali"** (pp. 40–42 of the book). In the two 2026 exam sessions (15/01 and 07/09) there are no questions on the construction of $\R$: at the exam you mostly need the sets, the notation and the field properties.

## Irrational numbers: why $\sqrt 2$ is not a fraction (p. 4)

Let us sum up the sets seen so far:

$$\N \subsetneq \Z \subsetneq \Q \subsetneq \R$$

Each inclusion is **strict** ($\subsetneq$): each set has at least one element that the previous one lacks. To prove it one example per step is enough: $-1 \in \Z$ but $-1 \notin \N$; $\frac 12 \in \Q$ but $\frac 12 \notin \Z$; $\sqrt 2 \in \R$ but $\sqrt 2 \notin \Q$. The last example is the trickiest, and it has to be proved.

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

Where does $\sqrt 2$ come from? From a square with side 1: by Pythagoras' theorem its diagonal measures $\sqrt{1^2 + 1^2} = \sqrt 2$. It is a length you can draw perfectly well, and yet it is not a fraction.

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

### Proof by contradiction

To prove that something is true **by contradiction** you proceed like this:

1. you assume that **the opposite** is true;
2. you reason correctly, step by step;
3. you reach a **contradiction**, that is something impossible;
4. so the assumption of step 1 was wrong, and the claim is true.

Martelli sums it up like this: you negate the claim and show that this leads to an absurdity; then the claim cannot be false, and so it is true by exclusion.

> [!PROP] 1.4
> The number $\sqrt 2$ is not rational.

Here is the proof from the handouts, with every step explained.

1. **Suppose, for a contradiction,** that $\sqrt 2$ is rational. Then $\sqrt 2 = \frac ab$ with $a, b$ integers and $b \neq 0$.
2. We can assume that the fraction is **reduced to lowest terms**, that is that $a$ and $b$ have no common factors: if they had any, we would just simplify it. This point is important: we are about to contradict it.
3. **Square**: $2 = \frac{a^2}{b^2}$. Multiply both sides by $b^2$:
   $$a^2 = 2b^2.$$
4. Then $a^2$ is **even**, because it is twice an integer ($b^2$).
5. Then $a$ is **even** too. Why? If $a$ were odd, that is $a = 2k + 1$, we would have $a^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, which is odd. So $a$ cannot be odd.
6. Being even, $a = 2k$ for some integer $k$, and so $a^2 = 4k^2$. Substituting in step 3: $4k^2 = 2b^2$, that is, dividing by 2,
   $$b^2 = 2k^2.$$
7. With the same reasoning as steps 4 and 5, $b^2$ is even too and so **$b$ is even**.
8. But then $a$ and $b$ are **both even**: they have the factor 2 in common, and the fraction $\frac ab$ was **not** reduced to lowest terms. This contradicts step 2.
9. The assumption "$\sqrt 2$ is rational" leads to a contradiction, so it is false: **$\sqrt 2$ is not rational**. $\square$

> [!PROOF] · another route, from Martelli's book
> Martelli too reaches $a^2 = 2b^2$ and then uses the **prime factorisation**. In a square every prime factor appears an **even** number of times (for example $36 = 2^2 \cdot 3^2$). So in $a^2$ the factor 2 appears an even number of times, while in $2b^2$ it appears an **odd** number of times (those of $b^2$, which are even, plus one). Two equal numbers have the same factorisation, so $a^2 = 2b^2$ is impossible: twice a square is never a square.

> [!IDEA] · the method, to remember
> Three ingredients: (1) write the number as a **reduced** fraction; (2) square and clear the denominators; (3) show that $a$ and $b$ have a common factor. With the same recipe you prove that $\sqrt 3$, $\sqrt 5$, $\sqrt 6$ are not rational (exercises 4 and 9).

> [!BEYOND] · other irrational numbers
> $\pi$ and $e$ are irrational too, but the proofs are much harder and are not needed in the course. In general $\sqrt n$ is irrational whenever $n$ is **not** a perfect square: $\sqrt 4 = 2$ and $\sqrt 9 = 3$ are integers, while $\sqrt 2$, $\sqrt 3$, $\sqrt 5$, $\sqrt 8$ are irrational.

> [!PITFALL] Irrational times irrational is not always irrational
> $\sqrt 2 \cdot \sqrt 2 = 2$ and $\sqrt 2 + (-\sqrt 2) = 0$ are rational. On the other hand a rational plus an irrational is **always** irrational (exercise 5): for example $1 + \sqrt 2 \notin \Q$.

## The properties of R: what a field is (p. 4)

On $\R$ there are two **binary operations**: the sum $+$ and the product $\cdot$. "Binary" means that it takes **two** numbers and returns **one**: from $3$ and $4$ the sum gives $7$, the product gives $12$.

> [!PROP] 1.5 · The nine properties of $\R$
> On $\R$ the operations $+$ and $\cdot$ have these properties (the symbol $\forall$ reads "for all"):
> 1. there is an **identity element** $0$ for addition: $0 + a = a + 0 = a$, $\forall a \in \R$;
> 2. the **commutative** property holds: $a + b = b + a$, $\forall a, b \in \R$;
> 3. the **associative** property holds: $a + (b + c) = (a + b) + c$, $\forall a, b, c \in \R$;
> 4. every element $a \in \R$ has an **inverse** (or **opposite**) $-a$, such that $a + (-a) = (-a) + a = 0$;
> 5. there is an **identity element** $1$ for multiplication: $1 \cdot a = a \cdot 1 = a$, $\forall a \in \R$;
> 6. the **commutative** property holds: $a \cdot b = b \cdot a$, $\forall a, b \in \R$;
> 7. the **associative** property holds: $a \cdot (b \cdot c) = (a \cdot b) \cdot c$, $\forall a, b, c \in \R$;
> 8. every element $a \in \R$ with $a \neq 0$ has an **inverse** $a^{-1}$, such that $a \cdot a^{-1} = a^{-1} \cdot a = 1$;
> 9. the **distributive** property holds: $a \cdot (b + c) = a \cdot b + a \cdot c$, $\forall a, b, c \in \R$.

The first four are about the sum, 5 to 8 about the product, 9 links them. Here is what they say, with numbers:

| # | In words | With numbers |
|---|---|---|
| 1 | adding 0 changes nothing | $0 + 7 = 7$ |
| 2 | the order of the addends does not matter | $2 + 5 = 5 + 2 = 7$ |
| 3 | how you group the addends does not matter | $1 + (2 + 3) = (1 + 2) + 3 = 6$ |
| 4 | every number has an opposite, which added gives 0 | $7 + (-7) = 0$ |
| 5 | multiplying by 1 changes nothing | $1 \cdot 7 = 7$ |
| 6 | the order of the factors does not matter | $2 \cdot 5 = 5 \cdot 2 = 10$ |
| 7 | how you group the factors does not matter | $2 \cdot (3 \cdot 4) = (2 \cdot 3) \cdot 4 = 24$ |
| 8 | every number **other than 0** has an inverse, which multiplied gives 1 | $4 \cdot \frac 14 = 1$ |
| 9 | "multiplying a sum" = adding up the products | $3 \cdot (2 + 5) = 3 \cdot 2 + 3 \cdot 5 = 21$ |

Note property 8 carefully: **zero has no inverse**. There is no number that multiplied by 0 gives 1, because $0 \cdot x = 0$ for every $x$. It is again the ban on dividing by zero.

> [!DEF] Field
> A set with two operations $+$ and $\cdot$ that have these nine properties is called a **field**.

The handouts announce that the concept will come back "in more detail in the future": in lesson L05 the definition of a field is given in general, and from then on **the whole course** works with vectors "over a field $\K$" (usually $\K = \R$ or $\K = \C$). Instead of $a \cdot b$ one often writes just $ab$.

### Which sets are fields?

| Set | opposite of every number (4)? | inverse of every number $\neq 0$ (8)? | Is it a field? |
|---|---|---|---|
| $\N$ | no: $-3 \notin \N$ | no: $\frac 13 \notin \N$ | **no** |
| $\Z$ | yes | no: $\frac 12 \notin \Z$ | **no** |
| $\Q$ | yes | yes: the inverse of $\frac ab$ is $\frac ba$ | **yes** |
| $\R$ | yes | yes | **yes** |
| $\C$ | yes | yes (lesson L02) | **yes** |

To say that a set is **not** a field **one** failing property is enough, with **one** concrete example: "$\Z$ is not a field because $2$ has no inverse in $\Z$" is a complete answer.

> [!BEYOND] · a small consequence of the nine rules
> From the rules you can also prove what looks obvious, for example that $a \cdot 0 = 0$ for every $a$:
> $$a \cdot 0 = a \cdot (0 + 0) = a \cdot 0 + a \cdot 0.$$
> The first step uses rule 1 ($0 + 0 = 0$), the second rule 9. Now add the opposite of $a \cdot 0$ to both sides: on the left $0$ remains, on the right $a \cdot 0$ remains. So $a \cdot 0 = 0$. In lesson L05 the same idea proves that $0v = 0$ for a vector $v$ (Proposition 5.5).

## Order: greater than and less than (p. 5)

$\R$, like $\N$, $\Z$ and $\Q$, is an **ordered** set: there is a notion of greater and smaller, and if $a$ and $b$ are **distinct** one of the two always holds, $a > b$ or $b > a$.

The definition uses a trick: instead of comparing any two numbers, it is enough to know which numbers are **positive**.

> [!DEF] Order (p. 5)
> We say that $a > b$ if $a - b > 0$.

So to define the order it is enough to make clear which numbers are positive (greater than zero) and which are negative (less than zero).

- In $\Z$ the positive numbers are $1, 2, 3, \dots$ For example $7 > 4$ because $7 - 4 = 3$ is positive.
- In $\Q$ the positive numbers are the fractions $\frac ab$ in which $a$ and $b$ have **the same sign**: $\frac 34$ and $\frac{-3}{-4}$ are positive, $\frac{-3}{4}$ is not.
- In $\R$ a number is positive if it is represented by a Cauchy sequence $(a_n)$ of rationals for which there is a rational $\varepsilon > 0$ with $a_n > \varepsilon$ **eventually**, that is from some position on. In words: the terms, from some point on, all stay above a fixed positive threshold.

> [!EXAMPLE] · why "above a threshold" is needed
> The sequence $a_n = \frac 1n$ has all its terms positive ($1,\ \frac 12,\ \frac 13,\ \dots$), but it **tends to zero**: it represents the number $0$, which is not positive. There is no threshold $\varepsilon > 0$ that the terms exceed forever. On the other hand $3.1;\ 3.14;\ 3.141;\ \dots$ always stays above the threshold $\varepsilon = 3$, and indeed $\pi > 0$.

> [!NOTE] Preview of lesson L02
> The complex numbers $\C$ form a field, but they are **not ordered**: between two complex numbers it makes no sense to say which one is greater.

## Notation not to confuse (p. 5)

Three writings that look similar mean very different things.

| Writing | What it is | How many elements | For example it contains |
|---|---|---|---|
| $\{1, 2\}$ | the **set** with exactly the two elements 1 and 2 | 2 | only 1 and 2 |
| $(1, 2)$ | the **open interval**: all the numbers strictly between 1 and 2, endpoints **excluded** | infinitely many | $1.5$ and $1.001$, but neither 1 nor 2 |
| $[1, 2]$ | the **closed interval**: all the numbers between 1 and 2, endpoints **included** | infinitely many | $1$, $1.5$ and $2$ |

With the notation of the first section:

$$(1, 2) = \{x \in \R \mid 1 < x < 2\}, \qquad [1, 2] = \{x \in \R \mid 1 \le x \le 2\}.$$

$(1, 2)$ and $[1, 2]$ are sets too, but they contain **infinitely many** elements.

> [!BEYOND] · the other intervals
> Brackets can be mixed: $[1, 2) = \{x \in \R \mid 1 \le x < 2\}$ includes 1 and excludes 2. For half-lines you use $\infty$, always with a round bracket because $\infty$ is not a number: $[0, +\infty) = \{x \in \R \mid x \ge 0\}$.

There is one last complication: in the course $(1, 2)$ also denotes a **point of the plane** $\R^2$, or a **vector**. The same writing can have very different meanings, and the right one is clear from the **context**:

- "$x \in (1, 2)$" with $x$ a real number: it is the interval;
- "the point $P = (1, 2)$" or "the vector $v = (1, 2)$": it is the ordered pair, with first coordinate 1 and second coordinate 2, and here $(1, 2) \neq (2, 1)$.

> [!EXAM] The right notation
> The handouts insist: it is **essential always to use the right notation**. In particular braces are **never** used for points or vectors: writing $\{1, 2\}$ for the vector $(1, 2)$ is a mistake, because in a set order does not matter. In the exam papers column vectors also appear as $t(1, 2)$ or ${}^t(1, 2)$, that is "the transpose" of the row $(1, 2)$: you will see it in lesson L08.

## The course's Greek alphabet (p. 5)

The course regularly uses Greek letters. The handouts ask you to learn these nine:

| Letter | Name | Where you will meet it |
|---|---|---|
| $\alpha$ | alpha | angles, coefficients |
| $\varepsilon$ | epsilon | an arbitrarily small quantity (Cauchy sequences) |
| $\sigma$ | sigma | coefficients, permutations in Discrete Mathematics |
| $\vartheta$ | theta | angles, for example the argument of a complex number |
| $\phi$ | phi | angles, maps |
| $\pi$ | pi | the number $3.14159\ldots$ |
| $\lambda$ | lambda | scalars, and later the eigenvalues |
| $\mu$ | mu | scalars |
| $\varrho$ | rho | radii and distances |

Some letters have two forms: $\vartheta$ and $\theta$ are both theta, $\phi$ and $\varphi$ both phi, $\varrho$ and $\rho$ both rho, $\varepsilon$ and $\epsilon$ both epsilon.

## The language of symbols (beyond the handouts)

> [!BEYOND] · why this section
> The handouts already use symbols such as $\forall$ and $\Longleftrightarrow$ in this lesson. Martelli's book explains them in §1.1 (pp. 4–7). Here is a small dictionary to read formulas out loud.

| Symbol | Read as | Example |
|---|---|---|
| $\forall$ | "for all" | $\forall a \in \R:\ a + 0 = a$ |
| $\exists$ | "there exists" | $\exists x \in \Z:\ x + 5 = 3$ (true: $x = -2$) |
| $\exists!$ | "there exists a unique" | $\forall x \in \R\ \exists!\, y \in \R:\ 2y = x$ |
| $:$ or $\mid$ | "such that" | $\{x \in \R \mid x > 0\}$ |
| $\Longrightarrow$ | "implies", "if … then …" | $a = 2 \Longrightarrow a^2 = 4$ |
| $\Longleftrightarrow$ | "if and only if" (holds both ways) | $a - b > 0 \Longleftrightarrow a > b$ |
| $\cup$, $\cap$ | union ("or"), intersection ("and") | $\{1, 2\} \cup \{2, 3\} = \{1, 2, 3\}$, $\{1, 2\} \cap \{2, 3\} = \{2\}$ |
| $A \setminus B$ | "$A$ minus $B$" | $\Z \setminus \N = \{-1, -2, -3, \dots\}$ |

The **quantifiers** $\forall$ and $\exists$ change the whole meaning of a sentence, and **order matters**. Two examples from the book:

- $\forall x \in \R\ \exists y \in \R:\ 2y = x$ is **true**: every real number can be divided by 2 (just take $y = \frac x2$);
- the same sentence with $\Z$ instead of $\R$, that is $\forall x \in \Z\ \exists y \in \Z:\ 2y = x$, is **false**: for $x = 1$ there is no integer $y$ with $2y = 1$.

> [!PITFALL] "Implies" does not mean "if and only if"
> $a = 2 \Longrightarrow a^2 = 4$ is true, but the other way round it is not: $a^2 = 4$ does not imply $a = 2$, because $a = -2$ works too. When a property holds both ways you write $\Longleftrightarrow$.

## Calculations with roots without a calculator (beyond the handouts)

> [!EXAM] Why now
> At the Linear Algebra exam **calculators are forbidden**, and the quiz answers are often written with roots. In the 07/09/2026 exam the five possible answers for a distance were $3$, $\frac{\sqrt 3}3$, $3\sqrt 3$, $\sqrt 3$ and $3 + \sqrt 3$; for an angle there were $\arccos\frac 3{\sqrt{43}}$, $\arccos\frac 6{\sqrt{42}}$ and similar. You need to recognise at a glance that, for example, $\frac 1{\sqrt 3} = \frac{\sqrt 3}3$.

The rules you need (for $a, b \ge 0$):

| Rule | Example |
|---|---|
| $\sqrt{a}\,\sqrt{b} = \sqrt{ab}$ | $\sqrt 2\,\sqrt 8 = \sqrt{16} = 4$ |
| $\sqrt{a^2 b} = a\sqrt b$: you **take out** a square | $\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt 3$ |
| $(\sqrt a)^2 = a$ | $(\sqrt 5)^2 = 5$ |
| $\sqrt{x^2} = \lvert x \rvert$ (also for $x < 0$) | $\sqrt{(-3)^2} = \sqrt 9 = 3$ |
| you add only the **same** root | $2\sqrt 3 + 5\sqrt 3 = 7\sqrt 3$, but $\sqrt 2 + \sqrt 3 \neq \sqrt 5$ |
| to remove a root from the denominator you multiply top and bottom by that root | $\frac 6{\sqrt 3} = \frac{6\sqrt 3}{3} = 2\sqrt 3$ |
| with a sum in the denominator you use $(x - y)(x + y) = x^2 - y^2$ | $\frac 1{\sqrt 2 - 1} = \frac{\sqrt 2 + 1}{(\sqrt 2)^2 - 1^2} = \sqrt 2 + 1$ |

> [!PITFALL] The root of a sum
> $\sqrt{a + b}$ is **not** $\sqrt a + \sqrt b$. Check with numbers: $\sqrt{9 + 16} = \sqrt{25} = 5$, while $\sqrt 9 + \sqrt{16} = 3 + 4 = 7$.

## Towards the exam

The **Linear Algebra and Geometry** exam (part 2 of MDAG) is written and is the same for channels A, B and C. As of 30/09/2026 the 2026/27 rules have not been published yet (on Moodle: "informazioni seguono", "information to follow"), so the reference is the 2025/26 rules, confirmed by the exam papers:

- **10 multiple-choice questions**, each with 5 answers (a)–(e) and **only one correct**, 1 point each;
- **2 open problems** with sub-questions, 11 points each: to get partial credit you must show your work;
- **cut-off (sbarramento)**: the problems are marked only for those who score **at least 6 out of 10** in the quiz;
- **2 hours**, maximum 32 points, pass mark 18;
- materials allowed: **only one folded sheet or two A4 sheets (4 sides) handwritten**, with formulas, notes and exercises; **no calculator** and no books;
- in the quiz the answers are marked with an **X**, not with a circle.

| 2026/27 exam session | Registration on MyUniTo | Time and rooms |
|---|---|---|
| Fri 22/01/2027 | 02/01 – 15/01/2027 | 14:00, rooms A, B, C, D, F |
| Fri 05/02/2027 | 16/01 – 29/01/2027 | 14:00, rooms A, B, C, D, F |

The final MDAG grade is the average of the two tests (Discrete Mathematics and Linear Algebra), which can also be taken in different exam sessions. Careful: sitting again a test you have already passed **cancels** the previous grade, even if it goes worse. Details and sources in the [course sheet](https://github.com/DonFlammer/unito-computer-science/blob/main/ai_context/MDAG/course.md).

**What of this lesson you need at the exam**

1. **Fields.** The scalars of vector spaces (lessons L05–L07) live in a field. Being able to say why $\Z$ is not a field is a typical theory quiz question.
2. **Notation.** Sets, intervals, points and vectors with the right brackets: in the problems the answers are written with this notation.
3. **Calculations by hand.** Fractions and roots appear in almost every question (norms, angles, distances). Practise now with exercises 2 and 8.
4. **Proofs by contradiction.** The quiz does not ask for proofs, but reasoning by contradiction comes back often in the course.

> [!EXAM] The 4-page sheet
> It is the only material allowed: it is worth building it lesson by lesson. From this lesson two lines are enough: the rules for roots from the previous section and "field = 9 properties; $\N$ and $\Z$ are not fields".

## Quiz

```quiz
Q: Which of these sets, with the usual sum and product, is **not** a field?
- $\Q$
- $\R$
+ $\Z$
- $\C$
- They are all fields.
= In $\Z$ the number $2$ has no multiplicative inverse: $\frac 12 \notin \Z$. Property 8 fails, so $\Z$ is not a field. $\Q$, $\R$ and $\C$ are.

Q: Which of these numbers is irrational?
- $0.125$
- $\frac{22}{7}$
- $\sqrt 9$
+ $\sqrt{12}$
- $0.\overline{3}$
= $\sqrt{12} = 2\sqrt 3$ and $\sqrt 3$ is irrational. The others are rational: $0.125 = \frac 18$, $\sqrt 9 = 3$ and $0.\overline 3 = \frac 13$; $\frac{22}7$ is a fraction (only an approximation of $\pi$).

Q: Which statement is true?
+ $\N \subsetneq \Z \subsetneq \Q \subsetneq \R$
- $\Q \subsetneq \Z$
- $\R \subsetneq \Q$
- $\sqrt 2 \in \Q$
- $\Z = \N$
= Each set is strictly contained in the next: $-1 \in \Z \setminus \N$, $\frac 12 \in \Q \setminus \Z$, $\sqrt 2 \in \R \setminus \Q$.

Q: The set $\{x \in \R \mid 1 \le x < 2\}$ is:
- $(1, 2)$
- $[1, 2]$
+ $[1, 2)$
- $\{1, 2\}$
- $(1, 2]$
= The $\le$ includes 1 (square bracket), the $<$ excludes 2 (round bracket). $\{1, 2\}$ instead is the set with only the two numbers 1 and 2.

Q: The number $0.999\ldots$ (with infinitely many 9s) equals:
+ $1$
- a number just below $1$
- $0.9$
- $\frac 9{10}$
- it is not a real number
= $\frac 13 = 0.333\ldots$; multiplying by 3 gives $1 = 0.999\ldots$. As with $5.973\overline 9 = 5.974$ in the handouts: they are two writings of the same number.

Q: In the proof that $\sqrt 2 \notin \Q$, which contradiction is reached?
+ $a$ and $b$ are both even, while the fraction $\frac ab$ was reduced to lowest terms.
- $\sqrt 2 = 2$.
- $b = 0$.
- $a^2$ is odd.
- $2$ is not a prime number.
= From $a^2 = 2b^2$ it follows that $a$ is even, and then that $b$ is even too: so $a$ and $b$ have the factor 2 in common, against the assumption that the fraction was reduced.

Q: Which property does $\Z$ lack to be a field?
+ The existence of the multiplicative inverse of every non-zero element.
- The existence of the opposite.
- The commutative property of the product.
- The distributive property.
- The existence of the identity element of the sum.
= In $\Z$ every number has an opposite, and sum and product are commutative, associative and distributive. But only $1$ and $-1$ have an integer inverse: for example $3$ has none.

Q: What is $\sqrt 8 + \sqrt{18}$?
+ $5\sqrt 2$
- $\sqrt{26}$
- $2\sqrt 2$
- $13$
- $6\sqrt 3$
= $\sqrt 8 = \sqrt{4 \cdot 2} = 2\sqrt 2$ and $\sqrt{18} = \sqrt{9 \cdot 2} = 3\sqrt 2$, so the sum is $5\sqrt 2$. Careful: $\sqrt 8 + \sqrt{18} \neq \sqrt{26}$, the root of a sum is not the sum of the roots.

Q: What is $a_2$ in the sequence $a_n = \left(1 + \frac 1n\right)^n$? Write a fraction or a decimal.
N: 9/4
= $a_2 = \left(1 + \frac 12\right)^2 = \left(\frac 32\right)^2 = \frac 94 = 2.25$.
```

## Exercises

::: exercise basic Where each number lives
For each number find the **smallest** set among $\N$, $\Z$, $\Q$, $\R$ that contains it:
$$-4, \qquad 0, \qquad \frac 72, \qquad \sqrt{16}, \qquad \sqrt 7, \qquad 0.\overline{12}, \qquad \pi, \qquad -\frac{\sqrt{25}}{5}.$$
::: solution
| Number | Simplified | Smallest set | Why |
|---|---|---|---|
| $-4$ | $-4$ | $\Z$ | negative, so not in $\N$ |
| $0$ | $0$ | $\N$ | in the course zero is a natural number |
| $\frac 72$ | $3.5$ | $\Q$ | a fraction that is not an integer |
| $\sqrt{16}$ | $4$ | $\N$ | $4 \cdot 4 = 16$ |
| $\sqrt 7$ | — | $\R$ | 7 is not a perfect square: irrational |
| $0.\overline{12}$ | $\frac 4{33}$ | $\Q$ | repeating decimal (see exercise 2) |
| $\pi$ | — | $\R$ | irrational |
| $-\frac{\sqrt{25}}5$ | $-\frac 55 = -1$ | $\Z$ | first simplify, then decide |

Moral: before deciding, always **simplify**. $\sqrt{16}$ looks irrational but it is 4.
:::

::: exercise basic From repeating decimal to fraction
Write as a fraction: (a) $0.\overline 7$; (b) $2.\overline 3$; (c) $0.\overline{12}$.
::: solution
The trick: I call the number $x$, multiply it by $10$ (or by $100$ if the repeating block has two digits) and subtract. The identical infinite tails cancel out.

(a) $x = 0.777\ldots$
- $10x = 7.777\ldots$
- $10x - x = 7.777\ldots - 0.777\ldots = 7$, that is $9x = 7$
- $x = \frac 79$.

(b) $x = 2.333\ldots$
- $10x = 23.333\ldots$
- $9x = 23.333\ldots - 2.333\ldots = 21$
- $x = \frac{21}9 = \frac 73$. Check: $7 : 3 = 2.333\ldots$ ✓

(c) $x = 0.1212\ldots$ has a repeating block of **two** digits, so I multiply by $100$:
- $100x = 12.1212\ldots$
- $99x = 12$
- $x = \frac{12}{99} = \frac 4{33}$.
:::

::: exercise basic $0.\overline 9 = 1$ with the method of exercise 2
Use the same method to show that $0.999\ldots = 1$, and then that $5.973\overline 9 = 5.974$.
::: solution
$x = 0.999\ldots$, so $10x = 9.999\ldots$ and $9x = 9$: $x = 1$.

For the second: $5.973\overline 9 = 5.973 + 0.000\overline 9$, and $0.000\overline 9 = \frac{0.\overline 9}{1000} = \frac 1{1000} = 0.001$. So $5.973\overline 9 = 5.973 + 0.001 = 5.974$.
:::

::: exercise intermediate $\sqrt 3$ is not rational
Prove by contradiction that $\sqrt 3 \notin \Q$. Hint: you need the fact "if $a^2$ is divisible by 3, so is $a$". Prove this too.
::: solution
**The fact about multiples of 3.** Every integer $a$ can be written in one of three ways: $a = 3k$, $a = 3k + 1$ or $a = 3k + 2$. In the last two cases:
- $(3k + 1)^2 = 9k^2 + 6k + 1 = 3(3k^2 + 2k) + 1$: remainder 1 when divided by 3;
- $(3k + 2)^2 = 9k^2 + 12k + 4 = 3(3k^2 + 4k + 1) + 1$: remainder 1.

So if $a$ is not a multiple of 3, neither is $a^2$. Put the other way round: if $a^2$ is a multiple of 3, so is $a$.

**The proof**, as for $\sqrt 2$:
1. For a contradiction, $\sqrt 3 = \frac ab$, a fraction reduced to lowest terms.
2. Squaring: $a^2 = 3b^2$. So $a^2$ is a multiple of 3, and by the fact just seen so is $a$: $a = 3k$.
3. Substituting: $9k^2 = 3b^2$, that is $b^2 = 3k^2$. So $b$ is a multiple of 3 too.
4. $a$ and $b$ have the factor 3 in common: the fraction was not reduced. Contradiction, so $\sqrt 3 \notin \Q$.
:::

::: exercise intermediate Rational plus irrational
(a) Prove that if $q \in \Q$ and $x \notin \Q$, then $q + x \notin \Q$. (b) Find two irrational numbers whose sum is rational, and two whose product is rational.
::: solution
(a) For a contradiction, suppose $q + x = r$ with $r \in \Q$. Then $x = r - q$. But the difference of two rationals is rational: $\frac ab - \frac cd = \frac{ad - bc}{bd}$. So $x \in \Q$, against the assumption. Contradiction: $q + x \notin \Q$.

(b) Sum: $\sqrt 2 + (-\sqrt 2) = 0$. Product: $\sqrt 2 \cdot \sqrt 2 = 2$, or $\sqrt 2 \cdot \sqrt 8 = \sqrt{16} = 4$. So "irrational + irrational" and "irrational · irrational" can be rational: there is no general rule.
:::

::: exercise intermediate Field or not?
For each set, with the usual sum and product, say whether it is a field; if it is not, point out **one** failing property, with an example: (a) $\N$; (b) $\Z$; (c) the positive real numbers $\{x \in \R \mid x > 0\}$; (d) $\Q$.
::: solution
(a) $\N$: no. Property 4: $3$ has no opposite in $\N$, because $-3 \notin \N$.

(b) $\Z$: no. Property 8: $2$ has no inverse in $\Z$, because $\frac 12 \notin \Z$.

(c) Positive reals: no. Property 1: $0$ is not there, so the identity element of the sum is missing (and as a consequence the opposites too).

(d) $\Q$: yes. All nine properties hold; in particular the opposite of $\frac ab$ is $\frac{-a}b$ and, if $a \neq 0$, the inverse is $\frac ba$, which is again a fraction.
:::

::: exercise basic Intervals
(a) Write with brackets the set $\{x \in \R \mid -1 < x \le 3\}$. (b) Write the interval $[0, 5)$ with set notation. (c) Which interval is $\{x \in \R \mid x^2 < 4\}$? (d) How many elements do $\{0, 5\}$ and $(0, 5)$ have?
::: solution
(a) $(-1, 3]$: round on the left because $-1$ is excluded ($<$), square on the right because $3$ is included ($\le$).

(b) $\{x \in \R \mid 0 \le x < 5\}$.

(c) $x^2 < 4$ means that $x$ lies strictly between $-2$ and $2$: try $x = 1.9$ ($3.61 < 4$, yes) and $x = -2$ ($4 < 4$, no). So it is $(-2, 2)$.

(d) $\{0, 5\}$ has **2** elements; $(0, 5)$ has **infinitely many**.
:::

::: exercise intermediate Calculations without a calculator
Simplify: (a) $\sqrt{50}$; (b) $\sqrt{12} \cdot \sqrt 3$; (c) $\frac 6{\sqrt 3}$; (d) $(1 + \sqrt 2)^2$; (e) $\frac 1{\sqrt 2 - 1}$; (f) $\frac{\sqrt 3}3$ and $\frac 1{\sqrt 3}$: are they equal?
::: solution
(a) $\sqrt{50} = \sqrt{25 \cdot 2} = 5\sqrt 2$.

(b) $\sqrt{12} \cdot \sqrt 3 = \sqrt{36} = 6$.

(c) $\frac 6{\sqrt 3} = \frac{6\sqrt 3}{\sqrt 3 \cdot \sqrt 3} = \frac{6\sqrt 3}3 = 2\sqrt 3$.

(d) $(1 + \sqrt 2)^2 = 1^2 + 2 \cdot 1 \cdot \sqrt 2 + (\sqrt 2)^2 = 1 + 2\sqrt 2 + 2 = 3 + 2\sqrt 2$.

(e) I multiply top and bottom by $\sqrt 2 + 1$:
$$\frac 1{\sqrt 2 - 1} \cdot \frac{\sqrt 2 + 1}{\sqrt 2 + 1} = \frac{\sqrt 2 + 1}{(\sqrt 2)^2 - 1^2} = \frac{\sqrt 2 + 1}{2 - 1} = \sqrt 2 + 1.$$

(f) Yes: $\frac 1{\sqrt 3} = \frac{\sqrt 3}{\sqrt 3 \cdot \sqrt 3} = \frac{\sqrt 3}3$. In the exam quiz the same number can appear in either form.
:::

::: exercise hard $\sqrt 2 + \sqrt 3$ is irrational
(a) Prove that $\sqrt 6 \notin \Q$. (b) Use it to prove that $\sqrt 2 + \sqrt 3 \notin \Q$.
::: solution
(a) For a contradiction, $\sqrt 6 = \frac ab$ reduced. Then $a^2 = 6b^2 = 2 \cdot 3b^2$ is even, so $a$ is even: $a = 2k$. Substituting: $4k^2 = 6b^2$, that is $2k^2 = 3b^2$. Then $3b^2$ is even; since 3 is odd, $b^2$ must be even (odd times odd is odd), so $b$ is even. $a$ and $b$ are both even: contradiction.

(b) For a contradiction, $\sqrt 2 + \sqrt 3 = q$ with $q \in \Q$. I square:
$$q^2 = (\sqrt 2)^2 + 2\sqrt 2\sqrt 3 + (\sqrt 3)^2 = 5 + 2\sqrt 6.$$
So $\sqrt 6 = \frac{q^2 - 5}2$, which is rational because $q$ is. But by part (a) $\sqrt 6$ is not rational: contradiction. So $\sqrt 2 + \sqrt 3 \notin \Q$.
:::

::: exercise basic The first terms of the sequence for $e$
Compute as fractions $a_1$, $a_2$, $a_3$, $a_4$ of $a_n = \left(1 + \frac 1n\right)^n$ and check that they increase.
::: solution
- $a_1 = 2^1 = 2$
- $a_2 = \left(\frac 32\right)^2 = \frac 94 = 2.25$
- $a_3 = \left(\frac 43\right)^3 = \frac{64}{27} \approx 2.370$
- $a_4 = \left(\frac 54\right)^4 = \frac{625}{256} \approx 2.441$

They increase: $2 < 2.25 < 2.370 < 2.441$, and stay below $e \approx 2.718$ (see the graph in the section on the reals). Each term is rational, but the number they approach is not.
:::

## Review questions

::: question What do $\N$, $\Z$ and $\Q$ contain? Is zero in $\N$?
$\N = \{0, 1, 2, \dots\}$ are the natural numbers, **zero included** in the course's convention. $\Z$ adds the negatives. $\Q = \{\frac ab \mid a, b \in \Z,\ b \neq 0\}$ contains all fractions.
:::

::: question Why do we go from $\Q$ to $\R$?
Because in $\Q$ there are simple equations without solutions, such as $x^2 = 2$, and Cauchy sequences that do not converge (for example the one defining $e$). The reals fill these "holes".
:::

::: question What is a Cauchy sequence, in words?
An infinite list of numbers in which, from some point on, all the terms are as close to one another as you like: for every tolerance $\varepsilon > 0$ there is a position $N$ after which $|a_m - a_n| < \varepsilon$.
:::

::: question How are the real numbers defined with Cauchy sequences?
As equivalence classes of Cauchy sequences of rationals; two sequences are equivalent if their difference tends to zero. If a sequence converges to a rational it represents that rational; otherwise it defines a new, irrational number.
:::

::: question What does it mean that $\R$ is complete?
That every Cauchy sequence of real numbers converges to a real number: redoing the construction starting from $\R$ adds nothing new.
:::

::: question Repeat the proof that $\sqrt 2$ is not rational.
For a contradiction, $\sqrt 2 = \frac ab$ reduced. Then $a^2 = 2b^2$, so $a^2$ is even and $a$ is even too: $a = 2k$. From $4k^2 = 2b^2$ we get $b^2 = 2k^2$, so $b$ is even too. $a$ and $b$ are both even: the fraction was not reduced, contradiction.
:::

::: question What is a field? Give an example and a counterexample.
A set with two operations $+$ and $\cdot$ that have the nine properties: identities 0 and 1, opposites, inverses of the non-zero elements, commutative, associative, distributive. Examples: $\Q$, $\R$, $\C$. Counterexample: $\Z$, because 2 has no inverse.
:::

::: question Why does zero have no inverse?
Because $0 \cdot x = 0$ for every $x$: there is no $x$ with $0 \cdot x = 1$. This is why property 8 asks for the inverse only when $a \neq 0$.
:::

::: question How is $a > b$ defined?
$a > b$ if $a - b > 0$. So it is enough to know which numbers are positive: in $\Z$ they are $1, 2, 3, \dots$; in $\Q$ the fractions with numerator and denominator of the same sign.
:::

::: question What is the difference between $\{1, 2\}$, $(1, 2)$ and $[1, 2]$?
$\{1, 2\}$ is the set with the two elements 1 and 2. $(1, 2)$ is the open interval, endpoints excluded, or the point or vector with coordinates 1 and 2, depending on the context. $[1, 2]$ is the closed interval, endpoints included.
:::

::: question Which are the nine Greek letters to know?
$\alpha$ (alpha), $\varepsilon$ (epsilon), $\sigma$ (sigma), $\vartheta$ (theta), $\phi$ (phi), $\pi$ (pi), $\lambda$ (lambda), $\mu$ (mu), $\varrho$ (rho).
:::

::: question How do you remove a root from a denominator?
Multiply numerator and denominator by the same root: $\frac 6{\sqrt 3} = \frac{6\sqrt 3}3 = 2\sqrt 3$. If the denominator is a sum such as $\sqrt 2 - 1$, multiply by $\sqrt 2 + 1$ and use $(x - y)(x + y) = x^2 - y^2$.
:::

## Glossary

```glossary
Set | A collection of objects, called elements; written with braces. Order and repetitions do not matter.
Membership ($\in$) | $x \in A$: $x$ is an element of $A$. The opposite is written $x \notin A$.
Subset ($\subset$, $\subsetneq$) | $B \subset A$: every element of $B$ is in $A$. $B \subsetneq A$: in addition $A$ has at least one element that $B$ lacks.
Natural numbers $\N$ | $\{0, 1, 2, \dots\}$, zero included.
Integers $\Z$ | $\{\dots, -2, -1, 0, 1, 2, \dots\}$.
Rational numbers $\Q$ | The fractions $\frac ab$ with $a, b \in \Z$ and $b \neq 0$; in decimal form they are terminating or repeating.
Real numbers $\R$ | Equivalence classes of Cauchy sequences of rationals; intuitively, numbers with infinitely many digits after the decimal point.
Irrational number | A real number that is not rational, such as $\sqrt 2$, $\pi$, $e$.
Sequence | An infinite list $a_1, a_2, a_3, \dots$; denoted by $(a_n)$.
Cauchy sequence | A sequence whose terms, from some position on, are less than any fixed tolerance $\varepsilon > 0$ apart.
Completeness | Property of $\R$: every Cauchy sequence converges. $\Q$ is not complete.
Proof by contradiction | You assume the negation of the claim is true and reach a contradiction.
Binary operation | A rule that assigns a third element to two elements, such as $+$ and $\cdot$.
Identity element | $0$ for the sum ($a + 0 = a$), $1$ for the product ($a \cdot 1 = a$).
Opposite and inverse | The opposite of $a$ is $-a$ ($a + (-a) = 0$); the inverse of $a \neq 0$ is $a^{-1}$ ($a \cdot a^{-1} = 1$).
Field | A set with $+$ and $\cdot$ having the nine properties of Proposition 1.5: $\Q$, $\R$, $\C$ yes; $\N$, $\Z$ no.
Order | $a > b$ if $a - b > 0$; $\R$ is ordered, $\C$ is not.
Open / closed interval | $(a, b)$ excludes the endpoints, $[a, b]$ includes them.
Quantifiers | $\forall$ "for all", $\exists$ "there exists", $\exists!$ "there exists a unique".
```

## Checklist

```checklist
- I can write $\N$, $\Z$, $\Q$ with the right brackets and I know that in this course $0 \in \N$.
- I can explain with an equation why each new set is needed ($x + 5 = 3$, $2x = 1$, $x^2 = 2$).
- I can turn a repeating decimal into a fraction and explain why $0.\overline 9 = 1$.
- I can explain in words what a Cauchy sequence is and how it defines a real number.
- I can say what it means that $\R$ is complete and $\Q$ is not.
- I can redo on my own the proof that $\sqrt 2$ is not rational, justifying every step.
- I can list the nine field properties and explain why $\N$ and $\Z$ are not fields.
- I know the definition of $a > b$ and which numbers are positive in $\Z$ and in $\Q$.
- I do not confuse $\{1, 2\}$, $(1, 2)$ and $[1, 2]$, and I can read $\forall$, $\exists$, $\Longrightarrow$, $\Longleftrightarrow$.
- I can simplify roots and remove them from a denominator without a calculator.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 1 "Numeri reali", pp. 2–5: sections 1.A–1.E are followed in order, with the page next to each heading; definitions, propositions and examples keep their numbering (Definition 1.1, Examples 1.2 and 1.3, Propositions 1.4 and 1.5).
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §1.1 (number sets, proof by contradiction, subsets, set notation, quantifiers), §1.5 (algebraic structures) and complement 1.II (construction of the real numbers).
- **MDAG2 2026/27 Moodle page** ([id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)): calendar, complete handouts L01–L26, chapters of the book covered (1–5, 7–9, 11).
- **Exam**: 2025/26 rules and the papers of the 15/01/2026 and 07/09/2026 exam sessions (2025/26 Moodle, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); dates of the 2026/27 exam sessions from the Esse3 listings.
- The **"Beyond the handouts"** parts (review of sets, repeating decimals, symbols, calculations with roots, exercises) are additions in these notes to connect the lesson to the rest of the course and to the exam.
