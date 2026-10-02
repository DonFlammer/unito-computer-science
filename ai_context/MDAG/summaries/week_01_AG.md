---
course: MDAG
module: AG
lesson: S1
type: summary
title: "Week 1: the real numbers"
date: 2026-10-01
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Weekly summary · Part 2 (modB) · Linear Algebra and Geometry · Channels A, B and C · 28/09 – 02/10/2026
description: >-
  Summary of week 1 of Linear Algebra and Geometry (MDAG, part 2): the families of numbers, the real numbers and the
  irrational ones, why the square root of 2 is not a fraction, what a field is, order, curly, round and square
  brackets, calculations with roots without a calculator.
lede: >-
  The lesson of the week in a few pages: the four families of numbers, the nine rules of arithmetic, the brackets and
  the rules for roots, with the questions to check yourself.
material: handouts
facts:
  Lessons: "[L01](L01_real_numbers.html), in channel B on Thursday 01/10"
  Handouts: Buzano and Radeschi 2026, pp. 2–5
  Revision time: 20–30 minutes
source: >-
  The notes of lesson L01 of Linear Algebra and Geometry, written on the course's 2026 handouts (R. Buzano,
  M. Radeschi)
italian_file: riassunto_settimana_01_AG.html
html_notes: notes/MDAG/summary_week_01_AG.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/riassunti/settimana_01_AG.md
---

## In brief

- Numbers are four families, one inside the other: $\N \subset \Z \subset \Q \subset \R$.
- Some real numbers are not fractions: they are **irrational**, like $\sqrt 2$. That it is not a fraction is proved **by contradiction**.
- A **field** is a set of numbers in which the nine rules of arithmetic hold: $\Q$, $\R$ and $\C$ yes, $\N$ and $\Z$ no.
- Curly, round and square brackets say different things.
- In the exam there is no calculator: roots are simplified by hand.

## L01 · The real numbers

| Symbol | Name | What it contains | Examples |
|:-:|---|---|---|
| $\N$ | natural | the counting numbers, **zero included** | 0, 1, 2, 3… |
| $\Z$ | integers | the natural numbers and their opposites | −3, 0, 7 |
| $\Q$ | rational | the fractions $\frac ab$ with $b \neq 0$ | $\frac12$, $-\frac34$, 5 |
| $\R$ | real | the numbers with infinitely many digits after the point, also without repetitions | $\sqrt 2$, $\pi$, $e$ |

- Each family is inside the next and has something more: $\N \subsetneq \Z \subsetneq \Q \subsetneq \R$.
- A fraction has many forms: $\frac12 = \frac24 = \frac36$. Fractions are the decimals that **end or repeat**; those that never repeat are **irrational**.
- An oddity: $0.999\ldots = 1$, two ways of writing the same number.
- Precisely, a real number is a list of fractions that get closer and closer to each other: useful for understanding, not for the exam. $\R$ is **complete**, that is it has no gaps; $\Q$ does: $\left(1 + \frac1n\right)^n$ rises towards $e \approx 2.718$, which is not a fraction.

**Why $\sqrt 2$ is not a fraction.** $\sqrt 2$ is the diagonal of a square with side 1, by Pythagoras. You reason **by contradiction**:

1. pretend that $\sqrt 2 = \frac ab$, with the fraction already in lowest terms;
2. then $a^2 = 2b^2$, so $a^2$ is even and $a$ is even too: $a = 2k$;
3. substituting, $4k^2 = 2b^2$, that is $b^2 = 2k^2$: $b$ is even too;
4. but then the fraction could still be simplified by 2. Contradiction: $\sqrt 2$ is not a fraction.

> [!PITFALL] Irrational times irrational
> The product of two irrational numbers is not always irrational: $\sqrt 2 \cdot \sqrt 2 = 2$.

**The nine rules of arithmetic.** For addition: associative, commutative, there is 0, every number has an opposite. For multiplication: associative, commutative, there is 1, every number **different from 0** has an inverse. Plus the distributive law, $a(b + c) = ab + ac$.

> [!DEF] Field
> A set of numbers with addition and multiplication in which all nine rules hold.

**How to read it.** In practice a field is a set in which you can do the four operations without leaving it. $\Q$, $\R$ and $\C$ are fields; $\N$ is not, because $-1$ is missing; $\Z$ is not, because $\frac12$ is missing. Zero has no inverse: you do not divide by zero.

**Order.** $a > b$ means that $a - b$ is positive, that is $a$ lies further right on the number line. $\N$, $\Z$, $\Q$ and $\R$ are ordered; $\C$ is not.

| Notation | Means |
|---|---|
| $\{1, 2\}$ | the set with the two elements 1 and 2 |
| $(1, 2)$ | the reals between 1 and 2, endpoints **excluded**; or the point or vector with coordinates 1 and 2, depending on the context |
| $[1, 2]$ | the reals between 1 and 2, endpoints **included** |
| $\lambda$, $\mu$, $\vartheta$ | Greek letters: usually $\lambda$ and $\mu$ are numbers, $\vartheta$ an angle |
| $\forall$, $\exists$, $\Longrightarrow$ | "for all", "there exists", "if … then" |

> [!PITFALL] "If … then" does not hold backwards
> If $a = 2$ then $a^2 = 4$; but $a^2 = 4$ does not give $a = 2$, because $a = -2$ works too. When a sentence holds both ways one says "if and only if".

> [!METHOD] Calculations with roots without a calculator
> 1. $\sqrt a \cdot \sqrt b = \sqrt{ab}$, and a square comes out of the root: $\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt 3$.
> 2. Only equal roots add up: $2\sqrt 3 + 5\sqrt 3 = 7\sqrt 3$, while $\sqrt 2 + \sqrt 3$ stays as it is.
> 3. To remove the root from the denominator multiply top and bottom by that root: $\frac1{\sqrt 3} = \frac{\sqrt 3}3$.
> 4. $\sqrt{a + b}$ is **not** $\sqrt a + \sqrt b$: $\sqrt{9 + 16} = 5$, while $3 + 4 = 7$.

## Towards the exam

- An exam common to the three channels: **10 quiz questions** with 5 answers; with at least **6** correct ones the **2 problems** worth 11 points each are marked. It lasts 2 hours, **no calculator**, and you may bring only **4 handwritten sides**.
- Exam sessions 2026/27: Friday 22/01/2027 and Friday 05/02/2027, at 14:00. The MDAG grade is the average with Discrete Mathematics.
- From this lesson: recognising a field, using the right brackets, simplifying roots. In the session of 07/09/2026 the answers for a distance were $3$, $\frac{\sqrt 3}3$, $3\sqrt 3$, $\sqrt 3$ and $3 + \sqrt 3$: you must recognise that $\frac1{\sqrt 3}$ and $\frac{\sqrt 3}3$ are the same number.
- On the 4-side sheet: the table of the families, the nine rules, the rules for roots.

## Review questions

::: question Is $-4$ in $\N$? In $\Z$? In $\Q$?
It is not in $\N$; it is in $\Z$ and in $\Q$.
:::

::: question Is $0.333\ldots$ rational?
Yes: it is $\frac13$, the digits repeat.
:::

::: question Is $\Z$ a field? Why?
No: 2 has no inverse in $\Z$, because $\frac12$ is not an integer.
:::

::: question What is the difference between $(2, 5)$ and $[2, 5]$? Is 5 in both?
The first excludes the endpoints, the second includes them: 5 is only in $[2, 5]$.
:::

::: question Simplify $\sqrt{50}$ and $\frac6{\sqrt 2}$.
$\sqrt{50} = \sqrt{25 \cdot 2} = 5\sqrt 2$; $\frac6{\sqrt 2} = \frac{6\sqrt 2}2 = 3\sqrt 2$.
:::

::: question Is $\sqrt 2 \cdot \sqrt 8$ irrational?
No: $\sqrt 2 \cdot \sqrt 8 = \sqrt{16} = 4$.
:::

## Sources

- The full lesson: [L01 · Real numbers](L01_real_numbers.html), with exam quizzes and worked exercises. All 26 lessons of Linear Algebra and Geometry are already on the site.
- R. Buzano, M. Radeschi, the course's 2026 handouts, pp. 2–5.
- Exam rules and sessions: [course sheet](https://github.com/DonFlammer/unito-computer-science/blob/main/ai_context/MDAG/course.md).
