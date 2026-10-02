---
course: MDAG
module: MD
lesson: S1
type: summary
title: "Week 1: sets, De Morgan, induction and partitions"
date: 2026-10-02
lecturers: Andrea Mori, Ignazio Longhi and Lea Terracini
eyebrow: Weekly summary · Part 1 (modA) · Discrete Mathematics · Channels A, B and C · 28/09 – 02/10/2026
description: >-
  Summary of week 1 of Discrete Mathematics (MDAG, part 1): sets, elements and subsets, for all and there exists, the
  empty set and cardinality, the power set, union, intersection, difference and complement, De Morgan's laws, Peano's
  axioms and induction, coverings, partitions and the quotient set.
lede: >-
  The two lessons of the week in a few pages: the definitions to know, the methods needed for quiz questions 1 and 2,
  the pitfalls and the questions to check yourself.
material: book
facts:
  Lessons: "[D01](D01_sets_induction.html) Wed 30/09 · [D02](D02_complements_induction_partitions.html) Fri 02/10"
  Book: A. Mori, Lezioni di Matematica Discreta, ch. 1, pp. 1–13
  Revision time: 40 minutes
source: >-
  The notes of lessons D01 and D02 of Discrete Mathematics, written on A. Mori's book, ch. 1
italian_file: riassunto_settimana_01_MD.html
html_notes: notes/MDAG/summary_week_01_MD.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/riassunti/settimana_01_MD.md
---

## In brief

- A **set** is a bag of objects, its **elements**: only what is inside counts, not the order nor repetitions.
- **Element** ($\in$) and **subset** ($\subset$) are two different things: it is the trick of almost every quiz question 1.
- With sets you take **union**, **intersection**, **difference** and **complement**. **De Morgan's laws** say how "outside" behaves.
- The natural numbers are described by **Peano's axioms**, and **induction** comes from there. A set with $n$ elements has $2^n$ subsets.
- A **partition** splits a set into non-empty parts that do not touch: it is recognised with three checks.

## D01 · Sets and induction (Wed 30/09)

**Sets.**

- Written with curly brackets: with the **list**, $\{1, 3, 5\}$, or with a **rule**, $\{n \in \N \mid n < 5\} = \{0, 1, 2, 3, 4\}$. The bar is read "such that".
- $\{1, 2\} = \{2, 1\} = \{1, 1, 2\}$: order and repetitions do not matter.
- A set can be inside another: $\{0, \{1, -1\}\}$ has **two** elements, zero and the bag $\{1, -1\}$. The inner brackets matter.
- The **empty set** $\emptyset$ has no elements; $\{\emptyset\}$ instead has one, the empty set.
- The **cardinality** $\lvert A \rvert$ is the number of elements: $\lvert \{a, b, a\} \rvert = 2$.

**For all and there exists.** $\forall$ is read "for all", $\exists$ "there exists". To say the opposite, "for all" becomes "there exists" and the property is negated: the opposite of "everyone passed the exam" is "**at least one** did not pass it", not "nobody". To refute a sentence with "for all" a single **counterexample** is enough.

**Subsets.** $B \subset A$ if **every** element of $B$ is in $A$. The empty set and $A$ itself are always subsets of $A$. Mori writes $\subset$ also when the two sets may be equal. Two sets are equal when each one is contained in the other: it is the **double inclusion**. The **power set** $P(A)$ has as elements all the subsets of $A$: $P(\{a, b\}) = \{\emptyset, \{a\}, \{b\}, \{a, b\}\}$.

> [!METHOD] Element or subset?
> 1. List the elements of $A$ looking only at the commas at the first level of brackets.
> 2. "$x \in A$" is true if $x$ appears **identical** in that list.
> 3. "$X \subset A$" is true if $X$ is a set and **each** of its elements appears in the list.
>
> With $A = \{1, 2, 3\}$: $\emptyset \subset A$ yes, $\emptyset \in A$ no; $\{1\} \subset A$ yes, $\{1\} \in A$ no; $1 \subset A$ no, because 1 is not a set.

**Natural numbers and induction.**

- $\N = \{0, 1, 2, \dots\}$: for Mori **zero is a natural number**.
- **Induction**, like dominoes: **base case** (the property holds for the first number) and **inductive step** (if it holds for $n$, it holds for $n + 1$). Then it holds for all. The base case cannot be skipped.
- Examples: $1 + 2 + \dots + n = \frac{n(n + 1)}2$; the book's one, $1^2 + 2^2 + \dots + n^2 = \frac{n(n + 1)(2n + 1)}6$.
- A set with $n$ elements has $2^n$ subsets: for each element the choice is "in" or "out". Those of $\{1, \dots, 6\}$ containing 1 are $2^5 = 32$: you fix the 1 and choose the rest.
- The families of numbers: $\N \subset \Z \subset \Q \subset \R$. Intervals: $(a, b)$ with the endpoints excluded, $[a, b]$ included.

## D02 · Complement, De Morgan, induction and partitions (Fri 02/10)

The example used throughout the lesson: $X$ = the tiles from 1 to 10, $A$ = the even ones $= \{2, 4, 6, 8, 10\}$, $B$ = the multiples of 3 $= \{3, 6, 9\}$.

| Operation | Read as | Contains | With the tiles |
|---|---|---|---|
| $A \cap B$ | "$A$ intersect $B$" | the elements in $A$ **and** in $B$ | $\{6\}$ |
| $A \cup B$ | "$A$ union $B$" | the elements in $A$ **or** in $B$, also in both | $\{2, 3, 4, 6, 8, 9, 10\}$ |
| $A \setminus B$ | "$A$ minus $B$" | the elements of $A$ that are not in $B$ | $\{2, 4, 8, 10\}$ |
| $B \setminus A$ | "$B$ minus $A$" | the order matters | $\{3, 9\}$ |
| $C_X(A)$ | "complement of $A$ in $X$" | the elements of $X$ outside $A$ | $\{1, 3, 5, 7, 9\}$ |

- Two sets are **disjoint** if the intersection is empty.
- The intersection is a set: if $A \cap B = \{6\}$ then $6 \in A \cap B$ and $\{6\} \subset A \cap B$; $6 \subset A \cap B$ and $\{6\} \in A \cap B$ are wrong.
- $\lvert A \cup B \rvert = \lvert A \rvert + \lvert B \rvert - \lvert A \cap B \rvert$: $5 + 3 - 1 = 7$, because common elements are counted once.
- Distributive properties: $(A \cup B) \cap C = (A \cap C) \cup (B \cap C)$, and the same with $\cap$ and $\cup$ swapped.
- The complement **depends on $X$**: $\{2, 4\}$ in $\{1, \dots, 5\}$ has complement $\{1, 3, 5\}$, in the ten tiles $\{1, 3, 5, 6, 7, 8, 9, 10\}$. The complement of the complement is the starting set.

> [!THEOREM] De Morgan's laws (theorem 1.18)
> $$C_X(A \cup B) = C_X(A) \cap C_X(B) \qquad C_X(A \cap B) = C_X(A) \cup C_X(B)$$

**How to read it.** Outside the union means outside **both**: with the tiles $\{1, 5, 7\}$. Outside the intersection means outside **at least one**: all except the 6. The complement enters the brackets and **swaps** $\cap$ and $\cup$, as in logic: the opposite of "it is raining and it is cold" is "it is not raining or it is not cold". The same laws hold with the difference: $X \setminus (A \cap B) = (X \setminus A) \cup (X \setminus B)$.

**Peano's axioms**, explained by what goes wrong when one is missing:

| Rule | Without this rule |
|---|---|
| 1. zero is a natural number | — |
| 2. every natural number has a successor $s(n)$ | — |
| 3. different numbers have different successors | the **loop**: from 0 to 5, with the successor of 5 equal to 3, you re-enter halfway |
| 4. zero is not the successor of anything | the **clock**: after 11 comes 0 |
| 5. a set that contains 0 and always passes to the successor contains all the natural numbers | the **ghost numbers**: a second row never reached from 0 |

Rule 5 is the **principle of induction**.

> [!METHOD] Proving by induction
> 1. **Base case**: check the first number, 0 or 1.
> 2. **Inductive hypothesis**: assume the property true for $n$.
> 3. **Inductive step**: write the property for $n + 1$, start from the left-hand side, use the hypothesis and reach the right-hand side.
> 4. **Conclusion**: it holds for all numbers from the first one on.
>
> Examples from the lesson: $1 + 3 + 5 + \dots + (2n - 1) = n^2$, the square that grows by an "L"; $2^n \ge n + 1$. The paradox of the horses all of the same colour breaks in the step from 1 to 2.

**Power set, coverings, partitions.**

- The subsets of $\{1, 2, 3\}$ by size are $1 + 3 + 3 + 1 = 8 = 2^3$. Adding an element doubles the count: those without plus those with.
- The elements of $P(A)$ are sets: $\{1\} \in P(A)$ but $1 \notin P(A)$. $P(\emptyset) = \{\emptyset\}$. It holds that $P(A) \cap P(B) = P(A \cap B)$, but $P(A \cup B)$ is in general larger than $P(A) \cup P(B)$.
- A **covering** of $X$ is a group of subsets of $X$ whose union is the whole of $X$; the parts may overlap.
- $n\Z$ are the multiples of $n$: $2\Z$ the even numbers, $2\Z + 1$ the odd ones, and $\Z = 2\Z \cup (2\Z + 1)$.
- The **quotient set** has as elements the parts of a partition; $[x]$ is the part containing $x$. For even and odd numbers: $[0]$ and $[1]$.
- $\{1, 2, 3\}$ has **5** partitions; $\{a, b, c, d\}$ has 15.

> [!METHOD] Is it a partition? Three checks
> 1. The union of the parts is the **whole** set, and no part contains foreign elements.
> 2. **No part is empty.**
> 3. **No overlap**, checked on **every pair** of parts: each element is in one part only.

## Towards the exam

- An exam common to the three channels: **10 quiz questions** with 5 answers and **2 problems**, in 2 hours. With fewer than 6 in the quiz the problems are not marked; the pass mark is 18. You may bring the book, notes and a non-programmable calculator.
- Exam sessions 2026/27: Tuesday 19/01/2027 and Wednesday 03/02/2027, at 14:00 (on MyUniTo the session is called "M.D.A.G.1").
- **Question 1** is almost always about sets: $\in$ versus $\subset$, union and intersection (sessions of 2025 and 2026). **Question 2** sometimes asks for a partition (04/02/2025) or "a covering but not a partition" (07/07/2025).
- In the problems, counts with $2^n$ come back and, later on, "at least one" counted as "all minus none", that is with the complement.
- In the Discrete Mathematics exams you do not have to write an induction proof; in Foundations of Computer Science the principle of induction is among the quiz topics.

## Review questions

::: question How many elements does $\{\emptyset, \{\emptyset\}, \{1, 2\}\}$ have?
Three: the empty set, the set containing the empty set and the set $\{1, 2\}$.
:::

::: question With $A = \{a, \{b\}\}$: $b \in A$? $\{b\} \in A$? $\{b\} \subset A$?
$b \in A$ no: in $A$ there is $\{b\}$, not $b$. $\{b\} \in A$ yes. $\{b\} \subset A$ no: $b$ would have to be among the elements of $A$.
:::

::: question What is the opposite of "there exists an even number greater than 10"?
"Every even number is less than or equal to 10". It is false, so the starting sentence is true.
:::

::: question How many subsets of $\{1, 2, 3, 4, 5\}$ contain 1 and 2?
$2^3 = 8$: with 1 and 2 fixed, the other three elements are chosen freely.
:::

::: question With $X = \{1, \dots, 8\}$, $A = \{1, 2, 3\}$ and $B = \{3, 4, 5\}$, what is $C_X(A \cap B)$?
$A \cap B = \{3\}$, so $C_X(A \cap B) = \{1, 2, 4, 5, 6, 7, 8\}$.
:::

::: question Are the parts $\{1, 2\}$, $\{2, 3\}$, $\{4\}$ a partition of $\{1, 2, 3, 4\}$?
No: they cover everything and none is empty, but the 2 is in two parts.
:::

::: question Which of Peano's axioms fails for a clock with the hours from 0 to 11?
The fourth: zero is the successor of 11.
:::

::: question In the inductive step of $1 + 3 + \dots + (2n - 1) = n^2$, where must you arrive?
At $1 + 3 + \dots + (2n + 1) = (n + 1)^2$.
:::

## Sources

- The full lessons: [D01 · Sets and induction](D01_sets_induction.html) and [D02 · Complement, De Morgan, induction and partitions](D02_complements_induction_partitions.html), with exam quizzes and worked exercises.
- A. Mori, *Lezioni di Matematica Discreta*, ch. 1 "Insiemi", pp. 1–13.
- Exam rules and sessions: [course sheet](https://github.com/DonFlammer/unito-computer-science/blob/main/ai_context/MDAG/course.md).
