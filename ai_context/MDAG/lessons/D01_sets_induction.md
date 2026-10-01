---
course: MDAG
module: MD
lesson: D01
title: Sets and induction
date: 2026-09-30
lecturers: Andrea Mori, Ignazio Longhi and Lea Terracini
eyebrow: Part 1 (modA) · Discrete Mathematics · Channels A, B and C · Lesson D01
description: >-
  Notes on lesson D01 of Discrete Mathematics (MDAG, part 1, channels A, B and C): sets and elements, "for all" and
  "there exists", the empty set, cardinality, subsets and the power set, equality of sets, natural numbers, the
  principle of induction and counting subsets, with real exam questions and worked exercises.
lede: >-
  The language the whole course rests on: sets, that is collections of objects, and how to talk about them
  precisely. Then the counting numbers and a new way of proving things, induction. At the end you find out how many
  subsets a set has, a count that comes back often in the exam.
material: book
facts:
  Book: A. Mori, Lezioni di Matematica Discreta, ch. 1, pp. 1–8
  Lecturers: Andrea Mori (channel B), Ignazio Longhi and Lea Terracini (channels A and C) · A.Y. 2026/27
  Study time: 2–3 hours, also in several sittings
source: >-
  A. Mori, Lezioni di Matematica Discreta (the channel B textbook), ch. 1 "Insiemi", pp. 1–8 and exercises pp. 14–16;
  channel B lesson diary 2025/26 (Moodle MDAG1 2025/26); quizzes and problems from the Discrete Mathematics exam
  sessions 2023–2026
italian_file: D01_insiemi_induzione.html
html_notes: notes/MDAG/D01_sets_induction.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/D01_insiemi_induzione.md
---

## In brief

- A **set** is a collection of objects, which are called its **elements**. Only what is inside counts: the order does not matter and each element is counted once.
- A set can be described in two ways: with the **list** of its elements between curly brackets, or with a **rule** that says what gets in and what does not.
- "For all" and "there exists" are used to talk about all the elements or about at least one. To show that a sentence with "for all" is false, a single contrary case is enough: the **counterexample**.
- The **empty set** contains nothing. The **cardinality** of a set is the number of its elements.
- A **subset** is a part of a set: all its elements are also in the starting set. All the subsets, put together, form the **power set**.
- The **natural numbers** are 0, 1, 2, 3 and so on. The **principle of induction** proves a property for all natural numbers in two moves, like a row of domino tiles falling one after the other.
- A set with $n$ elements has $2^n$ subsets: each extra element doubles the count.
- In the exam, the first quiz question is almost always about sets. The tricky point is telling "is an element of" from "is a subset of".

> [!CHANNELS]
> Discrete Mathematics (Matematica Discreta), part 1 of MDAG, has **the same programme and the same exam** in channels A, B and C, so these notes hold for all three. What changes is the lecturers and the order of the topics. In channel B the lecturer is Andrea Mori, who follows his own book *Lezioni di Matematica Discreta*: these notes follow chapter 1 of the book (pp. 1–8) and the 2025/26 channel B diary, where the first lesson covered sets, the empty set, natural numbers and induction, subsets and counting subsets. In channels A and C the lecturers are Ignazio Longhi and Lea Terracini: in 2025/26 they also started from sets, then came functions and combinatorics, in an order a little different from the book's. On the 2025/26 Moodle page (MDAG1, [id 3501](https://informatica.i-learn.unito.it/course/view.php?id=3501), open to guests) there are handwritten notes and videos of the channel A and C lessons. The first channel A lesson covered the same basic ideas (sets, cardinality, subsets, the empty set, equality) and wrote $\subseteq$ where Mori writes $\subset$.

## A set is a bag of objects (pp. 1–3)

Think of a shopping bag with an apple, a pear and a banana inside. The bag, with what it contains, is an example of a **set**. The things inside are called the **elements** of the set.

To write a set, its elements go between **curly brackets**, separated by commas:

$$\{\text{apple},\ \text{pear},\ \text{banana}\}$$

It is read "the set containing apple, pear and banana".

A set is usually named with a capital letter, like $A$ or $B$. Its elements are named with small letters, like $a$ or $x$. For example the line

$$A = \{1, 2, 3\}$$

means: I call $A$ the set that contains the numbers 1, 2 and 3.

### Inside or outside

To say that an object is in a set there is a dedicated symbol. It looks like an "e", the initial of "element".

- $x \in A$ is read "$x$ belongs to $A$", or "$x$ is an element of $A$".
- $x \notin A$ is read "$x$ does not belong to $A$". The slash through the symbol means "not".

Take the set $A = \{1, 2, 3\}$ again.

- The number 2 is in the list, so $2 \in A$.
- The number 5 is not in the list, so $5 \notin A$.

Mori's book gives the definition like this.

> [!DEF] 1.1 · Set
> A **set** is a well-defined collection of distinct objects, called the **elements** of the set.

**How to read it.** "Collection" means a gathering: the bag. "Well-defined" means that for every object one can decide, without any doubt, whether it is inside or not. "Distinct" means different from one another: the same object is not counted twice.

### What can be in a set (p. 2)

The book adds three remarks.

1. **Anything can be inside.** Numbers, but also cities, people, words. The elements do not even have to be of the same kind: there is a set containing the number 4, the Mole Antonelliana and your backpack.
2. **It must be clear what is inside.** "The good actors" is not a set, because everyone has their own opinion on being good. "The actors who have won an Oscar" is a set: you just check the list of awards.
3. **A set can be an element of another set.** A closed bag can sit inside a bigger bag.

### A bag inside a bag

The third remark is the one that causes the most confusion, so let us look at it calmly.

Put the numbers 1 and $-1$ in a small bag: that is the set $B = \{1, -1\}$. Then put the number 0 and the small bag, closed, into a big bag. The big bag is

$$A = \{0, B\} = \{0, \{1, -1\}\}$$

```graph
title: The set $A = \{0, \{1, -1\}\}$ has two elements: zero and the small bag $B$
x: -3 3
y: -2.1 2.1
axes: no
grid: no
circle: 0 0 1.9 | blue
circle: 0.75 0 0.85 | accent
point: -0.95 0 | blue | $0$ | n
point: 0.45 0.15 | accent | $1$ | n
point: 1.05 -0.2 | accent | $-1$ | s
text: -1.25 1.6 | blue | $A$
text: 1.35 0.95 | accent | $B$
```

Look at the figure: inside the big circle there are **two** objects, the point for zero and the small circle. The numbers 1 and $-1$ are in the small circle, not directly in the big one. So:

- $1 \in B$: the 1 is in the small bag;
- $B \in A$: the small bag is in the big bag;
- $1 \notin A$: the 1 is not one of the two objects in the big bag.

This is Note 1.2 of the book. If a set is an element of another set, its elements do **not** become elements of the bigger one because of that.

> [!PITFALL] Inner brackets count
> In $\{0, \{1, -1\}\}$ there are two elements, not three. A pair of brackets inside the list encloses **a single** element, which is itself a set. In the exam this trap often appears in the first quiz question (see "Towards the exam").

### Two ways to write a set (pp. 2–3)

The first way is **the list**: all the elements are written out, one by one. It works well when there are few elements.

The second way is **the rule**: you explain what an object must have to get in. For example "the even numbers between 1 and 10". A rule can also describe huge or infinite sets, which could never be listed in full.

Here are a few sets written in both ways.

| With a rule, in words | With the list |
|---|---|
| the even numbers between 1 and 10 | $\{2, 4, 6, 8, 10\}$ |
| the vowels | $\{a, e, i, o, u\}$ |
| the natural numbers smaller than 4 | $\{0, 1, 2, 3\}$ |
| the even numbers greater than zero | it never ends: $\{2, 4, 6, 8, \dots\}$ |

The dots in the last row are read "and so on": the elements go on with the same rule.

To write a rule with symbols the book uses this form (Note 1.3):

$$X = \{x \in U \mid \mathcal P(x)\}$$

It is read "$X$ is the set of the $x$ in $U$ such that $x$ has the property $\mathcal P$". Let us look at it one piece at a time.

- $U$ is the set the objects are taken from, for example all the natural numbers. The book calls it the **universal set**: it is the scope of the discussion.
- The vertical bar $\mid$ is read "such that".
- $\mathcal P(x)$ is the **property** to check: a sentence about $x$ that can be true or false, such as "$x$ is even". The $\mathcal P$ is a P in a fancy italic.

> [!EXAMPLE] A rule written with symbols
> $$\{n \in \N \mid n \text{ is even}\} = \{0, 2, 4, 6, \dots\}$$
> It is read "the natural numbers $n$ such that $n$ is even". Here the universal set is $\N$, the set of the natural numbers $0, 1, 2, 3, \dots$ (more on it later). Zero is even, so it is inside.

### Order and repetitions do not count (p. 3)

A set depends only on what is inside. So:

- the order does not count: $\{1, 3, 5\}$ and $\{5, 1, 3\}$ are the same set;
- repetitions do not count: writing the same element twice adds nothing. For example $\{0, 0, 1, 2\}$ and $\{0, 1, 2\}$ are the same set.

::: try True or false? (a) $3 \in \{1, 3, 5\}$; (b) $4 \in \{1, 3, 5\}$; (c) $\{1, 2\}$ and $\{2, 1, 1\}$ are the same set.
(a) True: the 3 is in the list.

(b) False: the 4 is not in the list.

(c) True: order and repetitions do not count, and both sets contain only 1 and 2.
:::

::: try How many elements does the set $\{1, \{2, 3\}, 4\}$ have? Is the number 2 one of its elements?
There are three elements: the number 1, the set $\{2, 3\}$ and the number 4.

The 2 is not an element: it is inside the small bag $\{2, 3\}$, not directly in the big one.
:::

> [!REMEMBER]
> - A set is a collection of objects, its elements. It is written with curly brackets: $\{1, 2, 3\}$.
> - $x \in A$ means "$x$ is an element of $A$".
> - Order and repetitions do not count.
> - A set can be an element of another set, but its elements do not become elements of the big one.

## All or at least one: for all and there exists (pp. 3–4)

In everyday sentences we often use two words: "all" and "some". "All the students passed the exam." "There is a student who solved all the exercises." In mathematics these two ideas have a name and a symbol, because they are needed all the time.

- $\forall$ is read "for all". It is an upside-down A, from *all*. A sentence with "for all" says that a property holds for all the elements of a set, none excluded.
- $\exists$ is read "there exists". It is a reversed E, from *exists*. A sentence with "there exists" says that there is at least one element with that property: there may be just one, or many.

The book calls these two symbols **quantifiers**. Here is how they are used.

| Notation | Read as | A true example |
|---|---|---|
| $\forall x \in A,\ \mathcal P(x)$ | "for all $x$ in $A$, $x$ has the property $\mathcal P$" | $\forall n \in \{2, 4, 6\}$, $n$ is even |
| $\exists x \in A$ such that $\mathcal P(x)$ | "there exists an $x$ in $A$ that has the property $\mathcal P$" | $\exists n \in \{1, 2, 3\}$ such that $n > 2$: it is 3 |

### How to say the opposite

Take the sentence "all of today's trains arrived on time". When is it false? It is not necessary for all the trains to be late: **one** late train is enough. So the opposite of the sentence is "at least one train arrived late".

Now take the sentence "there is an open shop". When is it false? When there is not even one, that is when **all** the shops are closed.

> [!IDEA]
> When you state the opposite of a sentence, "for all" becomes "there exists" and "there exists" becomes "for all". The property, instead, becomes its opposite.

This is Note 1.4 of the book. The book writes "not" with the symbol $\sim$, which is read "not"; many other texts use $\neg$. With symbols:

| Sentence | Its opposite |
|---|---|
| $\forall x \in A,\ \mathcal P(x)$ | $\exists x \in A$ such that $\mathcal P(x)$ does not hold |
| $\exists x \in A$ such that $\mathcal P(x)$ | $\forall x \in A$, $\mathcal P(x)$ does not hold |

An example with numbers. Take a set of numbers and the sentence "every number of the set is greater than or equal to zero". The opposite is "at least one number of the set is negative".

- With the set $\{3, 0, 7\}$ the sentence is true: no number is negative.
- With the set $\{3, -2, 7\}$ the sentence is false, because the number $-2$ is there.

### The counterexample

To prove that a sentence with "for all" is **true** you have to check all the elements. Often there are infinitely many, and you need reasoning such as induction, which you see later. To prove that it is **false**, instead, a single element for which the property fails is enough. That element is called a **counterexample**. In the example above the counterexample is the number $-2$.

> [!EXAMPLE] A question from the 06/06/2025 exam session (question 2)
> The text (exam papers are in Italian): "The statement "$\forall x \in \N, \forall y \in \N, x^2 + x \ge y$" is contradicted by: (1) $(x, y) = (2, 5)$; (2) $(x, y) = (-4, 10)$; (3) $(x, y) = (1, 3)$; (4) $(x, y) = (0, -1)$; (5) $(x, y) = (3, 12)$." The beginning is read "for every natural $x$ and for every natural $y$".
>
> In practice it asks: for which pair of **natural** numbers is the inequality false? That pair is a counterexample. Let us check the five pairs one by one.
>
> | Pair | Two naturals? | What $x^2 + x$ gives | Is it at least $y$? |
> |---|---|---|---|
> | $(2, 5)$ | yes | $4 + 2 = 6$ | $6 \ge 5$: yes |
> | $(-4, 10)$ | no: $-4$ is not natural | | does not count |
> | $(1, 3)$ | yes | $1 + 1 = 2$ | $2 \ge 3$: **no** |
> | $(0, -1)$ | no: $-1$ is not natural | | does not count |
> | $(3, 12)$ | yes | $9 + 3 = 12$ | $12 \ge 12$: yes |
>
> The answer is (3). Pairs (2) and (4) contain a negative number: they are not pairs of naturals, so they cannot contradict a sentence about the naturals.

::: try Write the opposite of these sentences: (a) "every number of the list 2, 4, 6 is even"; (b) "there exists a natural number smaller than zero". Which of the two starting sentences is true?
(a) The opposite is "at least one number of the list 2, 4, 6 is odd".

(b) The opposite is "every natural number is greater than or equal to zero".

Starting sentence (a) is true: 2, 4 and 6 are all even. Starting sentence (b) is false, so its opposite is true.
:::

> [!PITFALL] The opposite of "all" is not "none"
> The opposite of "all the students passed the exam" is **not** "no student passed the exam". It is "at least one student did not pass it". Many may have passed: it is enough that one failed.

> [!REMEMBER]
> - $\forall$ is read "for all" and talks about all the elements; $\exists$ is read "there exists" and talks about at least one.
> - To state the opposite: "for all" becomes "there exists", "there exists" becomes "for all", and the property becomes its opposite.
> - To prove that a sentence with "for all" is false, one counterexample is enough.

## The empty bag and how many elements there are (p. 4)

An empty bag is still a bag. In the same way there is a set that contains nothing: it is called the **empty set** and is written $\emptyset$, a zero crossed by a slash.

The empty set can be described by many different rules. For example:

- the natural numbers smaller than zero;
- the whole numbers that are even and odd at the same time.

No object satisfies these rules. So both describe the same set, the one without elements: there is only one empty set.

The book says it like this.

> [!DEF] 1.5 · Empty set
> The set with no elements is called the **empty set** and is denoted $\emptyset$, $\emptyset = \{\ \}$. It is characterised by the property $\forall x,\ x \notin \emptyset$.

**How to read it.** $\{\ \}$ is two curly brackets with nothing in between: an empty bag. The last formula is read "for all $x$, $x$ does not belong to the empty set": whatever object you take, it is not in the empty set.

### The empty set inside a bag

Do not confuse $\emptyset$ with $\{\emptyset\}$.

- $\emptyset$ is the empty bag: it contains nothing.
- $\{\emptyset\}$ is a bag that contains an empty bag. It contains **one** thing, so it is not empty.

It is the same idea as the bag inside the bag: the outer brackets enclose one element, which here is the empty set.

### How many elements: cardinality

The number of elements of a set is called its **cardinality**. It is written by putting the set between two vertical bars: $\lvert A \rvert$ is read "cardinality of $A$".

> [!DEF] 1.6 · Cardinality
> The **cardinality** of a set $A$, denoted $\lvert A \rvert$, is the number of elements of $A$.

**How to read it.** If the set has a finite number of elements, for example 5, one writes $\lvert A \rvert = 5$. If there are infinitely many elements one writes $\lvert A \rvert = \infty$, and the symbol $\infty$ is read "infinity". The book warns that this definition will be made precise in chapter 3, with functions.

A few examples. The last column has the cardinality.

| Set | Its elements | How many |
|---|---|--:|
| $\{a, b, c\}$ | $a$, $b$, $c$ | $3$ |
| $\{0, 0, 1\}$ | $0$ and $1$: the repeated zero counts once | $2$ |
| $\emptyset$ | none | $0$ |
| $\{\emptyset\}$ | the empty bag | $1$ |
| $\{1, \{2, 3\}\}$ | the number $1$ and the set $\{2, 3\}$ | $2$ |
| $\N$ | $0, 1, 2, 3, \dots$ | $\infty$ |

::: try Find the cardinality of (a) $\{0, 1, \{0, 1\}\}$; (b) $\{\emptyset, \{\emptyset\}\}$; (c) the set of the letters of the word "mamma".
(a) There are three elements: 0, 1 and the set $\{0, 1\}$. The cardinality is 3.

(b) There are two elements: the empty bag and the bag that contains the empty bag. The cardinality is 2.

(c) The letters are m and a, because repetitions do not count. The cardinality is 2.
:::

> [!REMEMBER]
> - The empty set $\emptyset$ has no elements. The set $\{\emptyset\}$, instead, has one element.
> - The cardinality $\lvert A \rvert$ is the number of elements of $A$, each counted once.

## One set inside another: subsets (pp. 4–5)

Go back to the bag with the apple, the pear and the banana. Take out the pear: you are left with a bag with the apple and the banana. Every fruit in the new bag comes from the starting bag. The new bag is a **subset** of the starting one.

> [!IDEA]
> A set is a subset of another when **every** one of its elements is also in the other. No element is left outside.

```graph
title: The subset $B$ lies entirely inside the set $A$: every point of $B$ is also a point of $A$
x: -3 3
y: -2.2 2.2
axes: no
grid: no
circle: 0 0 2 | blue
circle: 0.6 -0.2 1 | accent | thick
text: -1.5 1.65 | blue | $A$
text: 0.6 1.05 | accent | $B$
point: 0.3 -0.5 | accent
point: 1 0.15 | accent
point: -1.15 0.6 | blue
point: -0.85 -1.15 | blue
```

The symbol is $\subset$. The notation $B \subset A$ is read "$B$ is contained in $A$", or "$B$ is a subset of $A$". If instead at least one element of $B$ is outside $A$, one writes $B \not\subset A$, which is read "$B$ is not contained in $A$".

> [!DEF] 1.7 · Subset
> A set $B$ is a **subset** of $A$, and we write $B \subset A$, if every element of $B$ is also an element of $A$: $\forall b \in B,\ b \in A$.

**How to read it.** The formula at the end is read "for all $b$ in $B$, $b$ belongs to $A$". It is the same sentence as the definition, written with symbols.

Let us try with the set $A = \{1, 2, 3\}$.

| Question | Answer | Why |
|---|---|---|
| $\{1, 3\} \subset A$? | yes | 1 and 3 are both in $A$ |
| $\{2\} \subset A$? | yes | the 2 is in $A$ |
| $\{1, 4\} \subset A$? | no | the 4 is not in $A$ |
| $A \subset A$? | yes | every element of $A$ is in $A$ |
| $\emptyset \subset A$? | yes | the empty set has no elements that could be outside |

### The empty set and the whole set

The last two cases of the table hold for any set.

- **Every set is a subset of itself**, because all its elements are in it.
- **The empty set is a subset of every set.** To say that the empty set is **not** contained in a set you would need a counterexample: an element of the empty set that lies outside. But the empty set has no elements, so there is no counterexample.

The book calls the empty set and the whole set the "trivial subsets" (sottoinsiemi banali). The subsets different from the whole set are called **proper subsets**. For example $\{1, 3\}$ is a proper subset of $\{1, 2, 3\}$.

> [!NOTE] Two ways of writing "contained"
> In Mori's book, and in the exam papers, $B \subset A$ means "$B$ is contained in $A$, and may also be equal". Other books, and the channel A and C notes, write $\subseteq$ for this, and use $\subsetneq$ for "contained but not equal". When you open a new text, check which convention it uses.

### Element or subset?

This is the most important distinction of the lesson. Take $A = \{1, 2, 3\}$ again.

| Notation | True? | Why |
|---|---|---|
| $2 \in A$ | yes | the number 2 is one of the elements |
| $\{2\} \subset A$ | yes | the set that contains only 2 is a part of $A$ |
| $\{2\} \in A$ | no | among the elements of $A$ there is the number 2, not the set $\{2\}$ |
| $2 \subset A$ | no | 2 is a number, not a set: it cannot be a part of $A$ |

In words: the symbol $\in$ links an **object** to a set, the symbol $\subset$ links **two sets**. Notice also that the first two rows say the same thing: an object is in a set exactly when the set containing only that object is a subset.

> [!METHOD] Element or subset?
> 1. Look at the object on the left of the symbol: is it a set, that is, does it have curly brackets or is it the name of a set?
> 2. If the symbol is $\in$, look for the object, exactly as it is and with its brackets, in the list of elements on the right.
> 3. If the symbol is $\subset$, the object on the left must be a set. Check its elements one by one: they must all be in the list on the right.
> 4. If among the elements on the right there are other sets, count the brackets calmly: each pair of inner brackets is **one** element.

> [!EXAMPLE] The method on a set with a set inside
> Take $X = \{a, \{b, c\}\}$. It has two elements: the letter $a$ and the set $\{b, c\}$.
>
> - $\{b, c\} \in X$: true, it is the second element.
> - $\{b, c\} \subset X$: false. It would need $b \in X$, but $b$ is inside the inner bag.
> - $\{a\} \subset X$: true, because $a \in X$.
> - $\{\{b, c\}\} \subset X$: true. It is the set containing a single element, $\{b, c\}$, and that element is in $X$.

### All the parts of a set

Now take all the subsets of a set and put them in a new bag. That bag is called the **power set** (insieme delle parti, "set of the parts").

For example the subsets of $\{a, b\}$ are four: the empty set, $\{a\}$, $\{b\}$ and $\{a, b\}$. So the power set of $\{a, b\}$ is

$$\{\emptyset, \{a\}, \{b\}, \{a, b\}\}$$

It has four elements, and each of its elements is itself a set.

> [!DEF] 1.8 · Power set
> If $A$ is a set, the **power set** of $A$, denoted $P(A)$, is the set whose elements are the subsets of $A$,
> $$P(A) = \{B \mid B \subset A\}.$$

**How to read it.** $P(A)$ is read "parts of $A$", or "power set of $A$". The formula is read "the set of the $B$ such that $B$ is contained in $A$": inside $P(A)$ there are all the subsets of $A$, and nothing else. Watch out: this $P$ is an ordinary letter and denotes a set; the fancy $\mathcal P$ from before denotes a property.

The book gives three examples (p. 5).

| Set | Its subsets | How many |
|---|---|--:|
| $\emptyset$ | only $\emptyset$ | $1$ |
| $\{\ast\}$, with a single element | $\emptyset$ and $\{\ast\}$ | $2$ |
| $\{a, b, c\}$ | $\emptyset$, $\{a\}$, $\{b\}$, $\{c\}$, $\{a, b\}$, $\{a, c\}$, $\{b, c\}$, $\{a, b, c\}$ | $8$ |

The first row deserves a word. The empty set has one subset, itself. So $P(\emptyset) = \{\emptyset\}$: the power set of the empty set has one element, and it is not empty.

> [!IDEA]
> Being a subset of $A$ and being an element of $P(A)$ are the same thing.

::: try Take $A = \{1, 2\}$. (a) Write $P(A)$. (b) Is it true that $1 \in P(A)$? (c) Is it true that $\{1\} \in P(A)$?
(a) $P(A) = \{\emptyset, \{1\}, \{2\}, \{1, 2\}\}$.

(b) No. The elements of $P(A)$ are sets, and the number 1 on its own is not among them.

(c) Yes. $\{1\}$ is a subset of $A$, so it is an element of $P(A)$.
:::

::: try With $X = \{a, \{b, c\}\}$: is it true that $b \in X$? And that $\{b, c\} \in X$?
$b \in X$ is false: $b$ is inside the inner bag $\{b, c\}$, not directly in $X$.

$\{b, c\} \in X$ is true: it is the second element of $X$.
:::

> [!REMEMBER]
> - $B \subset A$ means that every element of $B$ is also in $A$. The empty set and the set itself are always subsets.
> - $\in$ links an object to a set, $\subset$ links two sets.
> - The power set $P(A)$ has all the subsets of $A$ as its elements.

## When two sets are equal (p. 5)

Two bags are equal when they contain exactly the same things. To check it, two checks are made: everything in the first is also in the second, and everything in the second is also in the first.

> [!EXAMPLE] Two checks
> Take $A$ = the natural numbers whose square is less than 10, and $B = \{0, 1, 2, 3\}$.
>
> 1. **From $A$ to $B$.** The squares of the naturals are $0, 1, 4, 9, 16, 25, \dots$ and they keep growing. Only those of 0, 1, 2 and 3 are less than 10. So every element of $A$ is in $B$: $A \subset B$.
> 2. **From $B$ to $A$.** The squares of 0, 1, 2 and 3 are 0, 1, 4 and 9, all less than 10. So every element of $B$ is in $A$: $B \subset A$.
>
> Both checks succeed, so $A = B$.

The book states it as a proposition.

> [!PROP] 1.9 · Equality of sets
> Let $A$ and $B$ be two sets. Then
> $$A = B \iff A \subset B \text{ and } B \subset A.$$

**How to read it.** The symbol $\iff$ is read "if and only if", that is "exactly when". In words: two sets are equal exactly when each of the two is contained in the other. This way of proving that two sets are equal is called **double inclusion**, and it will be used a lot in the next lesson.

> [!PROOF] why proposition 1.9 holds
> 1. If $A = B$, the two sets have the same elements. So every element of $A$ is in $B$, that is $A \subset B$. And every element of $B$ is in $A$, that is $B \subset A$.
> 2. Conversely, suppose that $A \subset B$ and $B \subset A$ hold. If there were an element of $A$ outside $B$, $A \subset B$ would not hold. If there were an element of $B$ outside $A$, $B \subset A$ would not hold. So no element is in only one of the two sets: they have the same elements, that is $A = B$.

::: try (a) Are $\{1, 2, 3\}$ and $\{3, 1, 2, 2\}$ equal? (b) Is the set of the whole numbers whose square is 4 equal to $\{2\}$?
(a) Yes. Every element of the first (1, 2 and 3) is in the second, and every element of the second is in the first.

(b) No. $-2$ also has square 4, because $(-2) \cdot (-2) = 4$. So $-2$ is in the first set but not in $\{2\}$: the first set is not contained in the second.
:::

> [!REMEMBER]
> - Two sets are equal when they have the same elements.
> - To prove it, check two inclusions, the first in the second and the second in the first: that is double inclusion.

## Counting numbers and induction (pp. 5–6)

The numbers used for counting are 0, 1, 2, 3, 4 and so on, without end. They are called **natural numbers**, and their set is written $\N$, an N with a double bar:

$$\N = \{0, 1, 2, 3, \dots\}$$

In Mori's book zero is a natural number. Some books leave it out, but in this course it is in.

Every natural number has a **successor**: the successor of 0 is 1, that of 1 is 2, that of a number $n$ is $n + 1$. The book writes the successor of $n$ as $s(n)$, which is read "s of $n$".

The idea that matters is this: starting from 0 and moving on one at a time you reach **every** natural number. You reach 5 in five steps: 0, 1, 2, 3, 4, 5. You reach a million in a million steps. No natural number is left out.

> [!NOTE] Useful for understanding, not for the exam
> The book describes the natural numbers with five rules, the **Peano axioms**. They are in the box below, which you can skip: they are not asked in the exam.

> [!DEEPER] the Peano axioms (p. 5)
> The book says that the set $\N$ of natural numbers is characterised by these five axioms (Peano, 1889):
>
> 1. $0 \in \N$;
> 2. every $n \in \N$ has a successor $s(n) \in \N$;
> 3. if $m, n \in \N$ and $m \neq n$ then $s(m) \neq s(n)$;
> 4. $\forall n \in \N,\ 0 \neq s(n)$;
> 5. if $U \subset \N$ is such that $0 \in U$ and $s(n) \in U$, $\forall n \in U$, then $U = \N$.
>
> **How to read it.** (1) Zero is a natural number. (2) Every natural number has a successor, which is again a natural number. (3) Different numbers have different successors. (4) Zero is nobody's successor: it is the first. (5) If a set of natural numbers contains zero and, whenever it contains a number, also contains its successor, then it contains all the natural numbers. Rule 5 is called the **principle of induction**. Rules 2, 3 and 4 together say that the natural numbers are infinitely many: $0$, $s(0)$, $s(s(0))$ and so on are all different from one another.

### The dominoes

Imagine an endless row of domino tiles, standing one behind the other and numbered 0, 1, 2, 3 and so on. You want to be sure they all fall. Two things are enough:

1. **the first tile falls**: someone pushes tile 0;
2. **every tile that falls knocks over the next one**: the tiles are close enough.

Then 0 falls, which knocks over 1, which knocks over 2, and so on. None is left standing.

> [!IDEA]
> To prove that a property holds for **all** the natural numbers, two checks are enough: that it holds for 0, and that whenever it holds for a number it also holds for the next one.

A **property** of the natural numbers is a sentence that talks about a number $n$ and that, for each $n$, is true or false. The book writes it $\mathcal P(n)$. Two examples:

- "$n + n$ is even". For $n = 3$ it says "$3 + 3 = 6$ is even": it is true.
- "$n$ is less than 10". For $n = 3$ it is true, for $n = 12$ it is false.

The book states the principle as a theorem, which says when one can conclude that a property holds for all.

> [!THEOREM] 1.10 · Proof by induction
> Suppose that for every $n \in \N$ a certain property $\mathcal P(n)$ is given, and suppose that
>
> - the property $\mathcal P(0)$ is true;
> - $\forall n \in \N$ the truth of $\mathcal P(n)$ implies the truth of $\mathcal P(n + 1)$.
>
> Then the property $\mathcal P(n)$ is true for every $n$.

**How to read it.** The two points are the two domino checks.

- The first, "$\mathcal P(0)$ is true", is called the **base case**: the first tile falls.
- The second is read "for every natural $n$, if $\mathcal P(n)$ is true then $\mathcal P(n + 1)$ is true too". It is called the **inductive step**: every tile knocks over the next one. While you prove it, the sentence "$\mathcal P(n)$ is true" is called the **inductive hypothesis**: you assume it is true and you use it.

> [!PROOF] why theorem 1.10 follows from the principle of induction
> Take the set $U$ of the natural numbers for which the property is true. Zero is in $U$, because $\mathcal P(0)$ is true. If a number $n$ is in $U$, then $n + 1$ is in $U$ too, by the inductive step. By rule 5 of the Peano axioms, $U$ contains all the natural numbers: the property is true for every $n$.

### Starting from 1, or from another number

Often a formula only makes sense from 1 onwards, like "the sum of the numbers from 1 to $n$". Then the base case is done with $n = 1$ instead of $n = 0$, and the conclusion holds for every $n$ greater than or equal to 1. This is Note 1.11 of the book.

You can also start from 3 or from 5: the property then holds from that number onwards. You see it in exercises 7 and 8.

> [!PITFALL] The base case cannot be skipped
> Take the property "$n = n + 1$". It is false for every number, and yet the inductive step works: if $n = n + 1$ held, adding 1 to both sides would give $n + 1 = n + 2$. What is missing is the base case: $0 = 1$ is false. Without the first tile nothing falls.

::: try You know that $\mathcal P(0)$ is true and that the inductive step works. Why is $\mathcal P(3)$ true?
By the base case $\mathcal P(0)$ is true.

The inductive step with $n = 0$ gives $\mathcal P(1)$. With $n = 1$ it gives $\mathcal P(2)$. With $n = 2$ it gives $\mathcal P(3)$.

Those are three tiles falling one after the other.
:::

> [!REMEMBER]
> - The natural numbers are $0, 1, 2, 3, \dots$ and their set is written $\N$.
> - Induction: base case (the property holds for the first number) and inductive step (if it holds for $n$, it holds for $n + 1$). Then it holds for all.
> - The base case cannot be skipped.

## Proving by induction, step by step (pp. 6–7)

Let us see induction at work on a famous formula: the sum of the numbers from 1 up to a number $n$.

First we try small numbers. The second column has the sum, the third a calculation that seems to always give the same result.

| $n$ | Sum from 1 to $n$ | $\frac{n(n + 1)}2$ |
|--:|---|---|
| 1 | $1$ | $\frac{1 \cdot 2}2 = 1$ |
| 2 | $1 + 2 = 3$ | $\frac{2 \cdot 3}2 = 3$ |
| 3 | $1 + 2 + 3 = 6$ | $\frac{3 \cdot 4}2 = 6$ |
| 4 | $1 + 2 + 3 + 4 = 10$ | $\frac{4 \cdot 5}2 = 10$ |
| 10 | $1 + 2 + \dots + 10 = 55$ | $\frac{10 \cdot 11}2 = 55$ |

In every row the last two columns agree. This formula seems to always hold:

$$1 + 2 + 3 + \dots + n = \frac{n(n + 1)}2$$

It is read "the sum of the numbers from 1 to $n$ equals $n$ times $n$ plus one, divided by two".

But five rows of a table are not enough: the numbers are infinitely many, and nobody can check them all. Induction proves it for all of them in one go.

> [!EXAMPLE] The sum of the numbers from 1 to $n$
> The property is the formula above, and it starts from $n = 1$.
>
> **Base case.** For $n = 1$ on the left there is only the number 1. On the right there is $\frac{1 \cdot 2}2 = 1$. The two sides are equal.
>
> **Inductive hypothesis.** Suppose the formula is true for some number $n$:
> $$1 + 2 + \dots + n = \frac{n(n + 1)}2$$
>
> **Goal.** Reach the same formula with $n + 1$ in place of $n$, that is
> $$1 + 2 + \dots + n + (n + 1) = \frac{(n + 1)(n + 2)}2$$
>
> **Inductive step.** We start from the left side of the goal, one step per line.
>
> 1. The first terms, from 1 to $n$, add up to $\frac{n(n + 1)}2$ by the inductive hypothesis. So the left side is $\frac{n(n + 1)}2 + (n + 1)$.
> 2. The first piece is $(n + 1)$ times $\frac n2$, the second is $(n + 1)$ times 1. We factor out the common factor $n + 1$: we get $(n + 1)\left(\frac n2 + 1\right)$.
> 3. Inside the brackets, $\frac n2 + 1 = \frac n2 + \frac 22 = \frac{n + 2}2$.
> 4. So the left side is $\frac{(n + 1)(n + 2)}2$: exactly the right side of the goal.
>
> **Conclusion.** The base case and the inductive step work. By the principle of induction the formula holds for every $n \ge 1$.

> [!REFRESHER] factoring out a common factor
> If two terms have the same factor, it can be "pulled out": $a \cdot b + a \cdot c = a \cdot (b + c)$. With numbers: $3 \cdot 4 + 3 \cdot 5 = 12 + 15 = 27$, and also $3 \cdot (4 + 5) = 3 \cdot 9 = 27$. In step 2 above the common factor is $n + 1$.

### The book's example: the sum of the squares

The book does the same with squares. First a notation it uses for long sums.

> [!REFRESHER] the summation symbol
> A long sum is written with the Greek letter $\Sigma$, capital "sigma". The notation $\sum_{k=1}^{n} F(k)$ is read "sum for $k$ from 1 to $n$ of $F(k)$". It means $F(1) + F(2) + \dots + F(n)$: in place of $k$ you put 1, then 2, and so on up to $n$, and you add everything. For example $\sum_{k=1}^{3} k^2 = 1^2 + 2^2 + 3^2 = 1 + 4 + 9 = 14$.

The book's formula is

$$\sum_{k=1}^{n} k^2 = 1^2 + 2^2 + \dots + n^2 = \frac{n(n + 1)(2n + 1)}6$$

First we check it with small numbers.

| $n$ | Sum of the squares | $\frac{n(n + 1)(2n + 1)}6$ |
|--:|---|---|
| 1 | $1$ | $\frac{1 \cdot 2 \cdot 3}6 = 1$ |
| 2 | $1 + 4 = 5$ | $\frac{2 \cdot 3 \cdot 5}6 = 5$ |
| 3 | $1 + 4 + 9 = 14$ | $\frac{3 \cdot 4 \cdot 7}6 = 14$ |

> [!EXAMPLE] The sum of the squares by induction (pp. 6–7)
> **Base case.** For $n = 1$: on the left $1^2 = 1$, on the right $\frac{1 \cdot 2 \cdot 3}6 = 1$.
>
> **Inductive hypothesis.** The formula holds for $n$: $1^2 + \dots + n^2 = \frac{n(n + 1)(2n + 1)}6$.
>
> **Goal.** With $n + 1$ in place of $n$ the formula becomes
> $$1^2 + \dots + (n + 1)^2 = \frac{(n + 1)(n + 2)(2n + 3)}6$$
> because $(n + 1) + 1 = n + 2$ and $2(n + 1) + 1 = 2n + 3$.
>
> **Inductive step.**
>
> 1. By the inductive hypothesis the left side is $\frac{n(n + 1)(2n + 1)}6 + (n + 1)^2$.
> 2. We factor out $n + 1$, which is in both terms: $(n + 1)\left(\frac{n(2n + 1)}6 + (n + 1)\right)$.
> 3. Inside the brackets we put everything over 6: $\frac{2n^2 + n}6 + \frac{6n + 6}6 = \frac{2n^2 + 7n + 6}6$.
> 4. We check that $(n + 2)(2n + 3) = 2n^2 + 3n + 4n + 6 = 2n^2 + 7n + 6$.
> 5. So the left side is $\frac{(n + 1)(n + 2)(2n + 3)}6$, which is the goal.
>
> **Conclusion.** By the principle of induction the formula holds for every $n \ge 1$.

> [!METHOD] Proving a formula by induction
> 1. Write the formula and the number it starts from: 0, 1 or another.
> 2. **Base case.** Put the first number into both sides and check that they come out equal.
> 3. **Inductive hypothesis.** Write "suppose the formula holds for $n$", with the formula.
> 4. **Goal.** Rewrite the formula with $n + 1$ in place of $n$, and simplify calculations such as $(n + 1) + 1 = n + 2$.
> 5. **Inductive step.** Start from the left side of the goal. Find the piece that appears in the hypothesis and replace it. Then calculate until you reach the right side.
> 6. **Conclusion.** Write "by the principle of induction the formula holds for every $n$", from the starting number onwards.

::: try Check the formula $1 + 3 + 5 + \dots + (2n - 1) = n^2$ for $n = 1, 2, 3, 4$. The full proof is exercise 6.
The last number of the sum is $2n - 1$: for $n = 4$ it is 7.

For $n = 1$ there is only 1 on the left, and $1^2 = 1$.

For $n = 2$: $1 + 3 = 4 = 2^2$.

For $n = 3$: $1 + 3 + 5 = 9 = 3^2$.

For $n = 4$: $1 + 3 + 5 + 7 = 16 = 4^2$.
:::

> [!REMEMBER]
> - First check the formula with small numbers, then prove it by induction.
> - In the inductive step you start from the left side with $n + 1$, use the inductive hypothesis and reach the right side.

## How many subsets a set has (p. 7)

At the pizzeria you can add three toppings to a margherita: olives, mushrooms, basil. You can take as many as you like, also none or all three. How many different pizzas can you order?

For each topping the choice is double: you put it on or you do not. Three choices with two options each give $2 \cdot 2 \cdot 2 = 8$ pizzas. Each pizza is a subset of the set of toppings: the plain margherita is the empty set, the pizza with everything is the whole set.

Let us count the subsets of bigger and bigger sets.

| Set | Its subsets | How many |
|---|---|--:|
| $\emptyset$ | $\emptyset$ | $1$ |
| $\{a\}$ | $\emptyset$, $\{a\}$ | $2$ |
| $\{a, b\}$ | $\emptyset$, $\{a\}$, $\{b\}$, $\{a, b\}$ | $4$ |
| $\{a, b, c\}$ | the four above, plus the same ones with $c$ inside too | $8$ |

Every time an element is added, the number of subsets doubles: 1, 2, 4, 8, 16 and so on. These are the **powers of 2**.

> [!REFRESHER] the powers of 2
> $2^n$ is read "two to the $n$" and means 2 multiplied by itself $n$ times. By convention $2^0 = 1$.
>
> | $n$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 10 |
> |---|--:|--:|--:|--:|--:|--:|--:|--:|
> | $2^n$ | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 1024 |
>
> Going from $n$ to $n + 1$ multiplies by 2: $2^{n + 1} = 2 \cdot 2^n$.

### Why it doubles

Take the subsets of $\{a, b, c\}$ and split them into two rows. In the top row put those **without** $c$. In the bottom row, under each one, the same set **with** $c$ added.

| Without $c$ | $\emptyset$ | $\{a\}$ | $\{b\}$ | $\{a, b\}$ |
|---|---|---|---|---|
| **With $c$** | $\{c\}$ | $\{a, c\}$ | $\{b, c\}$ | $\{a, b, c\}$ |

The top row contains exactly the subsets of $\{a, b\}$, which are 4. The bottom row has just as many, because each one comes from the one above by adding $c$. In total $4 + 4 = 8$.

> [!IDEA]
> A set with $n$ elements has $2^n$ subsets. With symbols: if $\lvert A \rvert = n$, then $\lvert P(A) \rvert = 2^n$.

> [!EXAMPLE] The book's proof by induction (p. 7)
> The property is "every set with $n$ elements has $2^n$ subsets". It starts from $n = 0$.
>
> **Base case.** The only set with 0 elements is the empty set. Its only subset is the empty set itself: $P(\emptyset) = \{\emptyset\}$ has 1 element, and $2^0 = 1$.
>
> **Inductive hypothesis.** Every set with $n$ elements has $2^n$ subsets.
>
> **Inductive step.** Take a set with $n + 1$ elements and call them $a_1, a_2, \dots, a_{n+1}$. The small number at the bottom, the **index**, only says the position in the list: $a_1$ is the first element, $a_{n+1}$ the last.
>
> 1. Split the subsets into two rows: at the top those that do not contain the last element, at the bottom those that contain it.
> 2. The top row contains the subsets of $B = \{a_1, \dots, a_n\}$, which has $n$ elements. By the inductive hypothesis there are $2^n$ of them.
> 3. Under each set of the top row there is the same set with $a_{n+1}$ added. So the bottom row has as many sets as the top row: another $2^n$.
> 4. In total there are $2^n + 2^n = 2 \cdot 2^n = 2^{n + 1}$.
>
> This is the formula with $n + 1$ in place of $n$. By the principle of induction it holds for every $n$.

> [!BEYOND] · another way of counting: bits
> Put the elements in a row, for example $a$, $b$, $c$. To each subset associate a word of three digits, each 0 or 1. The first digit says whether $a$ is in (1) or not (0), the second does the same for $b$, the third for $c$. For example $101$ is $\{a, c\}$ and $000$ is the empty set. Different subsets give different words, and each word gives a subset. The words of $n$ digits made of 0 and 1 are $2^n$: it is the same count done with **bits** in lesson 01 of Foundations of Computer Science.

### Counting with a condition: an exam problem

In exam problems, counting subsets often comes with a condition.

> [!EXAMPLE] A problem from the 09/06/2023 exam session (problem 1, first point)
> The text: "Let $S = \{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\}$, $T = \{0, 1, 3, 4\}$. How many subsets of $S$ do not contain the subset $T$?" (3 points).
>
> In practice it asks: how many subsets of $S$ do **not** have all four numbers 0, 1, 3 and 4 inside?
>
> 1. **All the subsets.** $S$ has 10 elements, so it has $2^{10} = 1024$ subsets.
> 2. **Those that contain $T$.** They must have 0, 1, 3 and 4 inside. The other six elements, that is 2, 5, 6, 7, 8 and 9, can be put in or not as you like. These are 6 free choices, so these subsets are $2^6 = 64$.
> 3. **Those that do not contain $T$** are all the others: $1024 - 64 = 960$.
>
> The official solution writes the result as $2^{10} - 2^6$: in some exam sessions the text actually asks to leave the powers unevaluated.

::: try (a) How many subsets does $\{1, 2, 3, 4, 5\}$ have? (b) How many of them contain the number 1?
(a) There are 5 elements, so the subsets are $2^5 = 32$.

(b) The 1 must be there. For the other four elements the choice is free: $2^4 = 16$. It is exactly half: it is the "with" row of the table split into two rows.
:::

> [!REMEMBER]
> - A set with $n$ elements has $2^n$ subsets: for each element the choice is "in" or "out".
> - To count the subsets that contain certain elements, fix those and choose the rest freely.

## The other sets of numbers (p. 8)

From the natural numbers, with the rules of sets, the other families of numbers you know are built. The book lists them in Note 1.12 and takes them as known: their construction is not part of the course.

| Symbol | Read as | What it contains | Examples |
|---|---|---|---|
| $\Z$ | "zed" | the integers: the natural numbers and their opposites | $-5$, $0$, $7$ |
| $\Q$ | "cue" | the rationals: the fractions $\frac ab$ with $a$ and $b$ integers, and $b \neq 0$ | $\frac 12$, $-\frac 34$ |
| $\R$ | "ar" | the reals: also the numbers with infinitely many digits after the decimal point | $\sqrt 2$, $\pi$ |

Each family contains the previous one: every natural number is an integer, every integer is a fraction, every fraction is a real number. With symbols: $\N \subset \Z \subset \Q \subset \R$. [Lesson L01 of part 2](L01_real_numbers.html), Linear Algebra and Geometry, covers them in depth.

The book also recalls two notations for the real numbers between two numbers $a$ and $b$, with $a$ less than or equal to $b$.

- $(a, b)$ is the **open interval**: the numbers between $a$ and $b$, endpoints excluded.
- $[a, b]$ is the **closed interval**: the numbers between $a$ and $b$, endpoints included.

::: try (a) Is $-3$ in $\N$? And in $\Z$? (b) Is the number 2 in $(1, 2)$? And in $[1, 2]$?
(a) $-3$ is not a natural number, because natural numbers are never negative. It is an integer, so $-3 \in \Z$.

(b) $2 \notin (1, 2)$, because in the open interval the endpoints are excluded. $2 \in [1, 2]$, because in the closed interval the endpoints are included.
:::

> [!REMEMBER]
> - $\N$ naturals, $\Z$ integers, $\Q$ fractions, $\R$ reals: each family contains the previous one.
> - Round brackets: endpoints excluded. Square brackets: endpoints included.

## The symbols of this lesson

| Symbol | Read as | It means | Example |
|---|---|---|---|
| $\{\ \}$ | "the set containing…" | the curly brackets enclose the elements | $\{1, 2, 3\}$ |
| $\in$ | "belongs to" | is an element of | $2 \in \{1, 2, 3\}$ |
| $\notin$ | "does not belong to" | is not an element of | $5 \notin \{1, 2, 3\}$ |
| $\dots$ | "and so on" | the elements go on with the same rule | $\{0, 2, 4, \dots\}$ |
| $\mid$ | "such that" | introduces the rule for getting into the set | $\{n \in \N \mid n < 3\}$ |
| $\mathcal P(x)$ | "P of $x$" | a property of $x$, true or false | "$x$ is even" |
| $\forall$ | "for all" | for all the elements, none excluded | $\forall n \in \N,\ n \ge 0$ |
| $\exists$ | "there exists" | there is at least one | $\exists n \in \N$ with $n > 5$ |
| $\sim$, $\neg$ | "not" | the opposite of a sentence | $\sim(x \ge 0)$ means $x < 0$ |
| $\emptyset$ | "empty set" | the set with no elements | $\lvert \emptyset \rvert = 0$ |
| $\lvert A \rvert$ | "cardinality of $A$" | the number of elements of $A$ | $\lvert \{a, b\} \rvert = 2$ |
| $\infty$ | "infinity" | the cardinality of an infinite set | $\lvert \N \rvert = \infty$ |
| $\subset$ | "is contained in" | is a subset (may also be equal) | $\{1\} \subset \{1, 2\}$ |
| $\not\subset$ | "is not contained in" | at least one element is outside | $\{1, 4\} \not\subset \{1, 2\}$ |
| $\subseteq$, $\subsetneq$ | "contained or equal", "strictly contained" | the notations of other texts and of channels A and C | $\{1\} \subsetneq \{1, 2\}$ |
| $P(A)$ | "parts of $A$", "power set of $A$" | the set of all the subsets of $A$ | $P(\{a\}) = \{\emptyset, \{a\}\}$ |
| $\iff$ | "if and only if" | exactly when | $A = B \iff A \subset B$ and $B \subset A$ |
| $\N$ | "N" | the natural numbers, zero included | $0, 1, 2, \dots$ |
| $s(n)$ | "s of $n$" | the successor of $n$ | $s(4) = 5$ |
| $\mathcal P(n)$ | "P of $n$" | a property that depends on the number $n$ | "$n + n$ is even" |
| $\sum_{k=1}^{n}$ | "sum for $k$ from 1 to $n$" | sum of the terms with $k = 1, 2, \dots, n$ | $\sum_{k=1}^{3} k = 6$ |
| $a_1, \dots, a_n$ | "a one, …, a n" | a list of $n$ numbered objects | $a_1$ is the first |
| $2^n$ | "two to the $n$" | 2 multiplied by itself $n$ times | $2^3 = 8$ |
| $\Z$, $\Q$, $\R$ | "zed", "cue", "ar" | integers, rationals, reals | $-3 \in \Z$ |
| $(a, b)$, $[a, b]$ | "open interval", "closed interval" | the reals between $a$ and $b$, endpoints excluded or included | $2 \in [1, 2]$ |

## Towards the exam

The **Discrete Mathematics** exam, part 1 of MDAG, is written and is the same for channels A, B and C: the lecturers of the three channels prepare and mark it together. As of 01/10/2026 the 2026/27 rules have not been published yet. The 2025/26 rules say the following.

**How the exam works**

- **10 multiple-choice questions**, each with 5 answers and only one right. A right answer is worth 1 point; a wrong or blank one is worth 0.
- **2 open problems**, split into several questions with the points written next to them.
- **Cut-off (sbarramento).** With fewer than 6 points in the quiz the exam is not passed, and the problems are not even marked.
- **Pass mark:** at least 18 points in total. **Duration:** 2 hours.
- **Allowed material:** the textbook and the course notes, and a non-programmable calculator. This differs from the Linear Algebra exam, where only 4 handwritten sides are allowed and no calculator.

| Exam session 2026/27 | Registration on MyUniTo (exam "M.D.A.G.1") | Time |
|---|---|---|
| Tue 19/01/2027 | 30/12/2026 – 12/01/2027 | 14:00 |
| Wed 03/02/2027 | 14/01 – 27/01/2027 | 14:00 |

Registration closes about a week before and does not reopen. The MDAG grade is the average of the two exams, Discrete Mathematics and Linear Algebra. Details and sources in the [course sheet](https://github.com/DonFlammer/unito-computer-science/blob/main/ai_context/MDAG/course.md).

**What you need from this lesson**

1. **Question 1 of the quiz.** In all nine 2025 and 2026 exam sessions whose quiz I found, the first question is about sets. Sometimes this lesson is enough: elements and subsets, as on 13/01/2026 and 10/09/2026. Sometimes you also need union, intersection and the Cartesian product, which come in the next lesson. Almost always the wrong answers play on the difference between element and subset.
2. **"For all" and "there exists".** In the 06/06/2025 exam session question 2 asked for a counterexample. It is the example worked out in the section on quantifiers.
3. **Counting subsets.** In the problems the count with powers of 2 comes back, often with a condition: exam sessions of 09/06/2023 (problem 1, first point) and 06/06/2025 (problem 1, point b).
4. **Induction.** In the Discrete Mathematics exam sessions from 2021 to 2026 I found no question asking to write a proof by induction: it is needed to understand the proofs in the book. In Foundations of Computer Science, instead, the principle of induction is among the quiz topics.

**A real question, read together**

> [!EXAMPLE] Exam session of 13/01/2026, question 1 (one of the versions)
> The text: "Let $A = \{b, e, h, k, m, p, q, s, u, x\}$. Then: 1. $t \in A$; 2. $h \notin A$; 3. $\{h, s\} \in A$; 4. $\{k, q, u\} \subset A$; 5. $\{e, s, y\} \subset A$."
>
> In practice it asks: which of the five sentences is true? $A$ has ten elements, and they are all **letters**, none of them is a set. Let us go through the answers one by one.
>
> 1. $t \in A$: the letter $t$ is not in the list. False.
> 2. $h \notin A$: the letter $h$ is in the list, so it belongs to $A$. False.
> 3. $\{h, s\} \in A$: the elements of $A$ are letters, and the set $\{h, s\}$ is not among them. False. The sentence $\{h, s\} \subset A$ would be true.
> 4. $\{k, q, u\} \subset A$: the letters $k$, $q$ and $u$ are all in the list. **True.**
> 5. $\{e, s, y\} \subset A$: the letter $y$ is not in the list. False.
>
> The answer is 4. The trap is 3: the letters $h$ and $s$ are there, but the brackets and the membership symbol ask something else.

**Mistakes to avoid**

- Confusing "is an element of" with "is a subset of". Use the method in the section on subsets.
- Counting a repeated element twice, or counting one by one the elements closed inside inner brackets.
- Forgetting the empty set and the whole set when you list the subsets.
- Stating the opposite of "all" with "none".
- In the inductive step, using the formula for $n + 1$ instead of reaching it.

> [!EXAM] Book and notes are allowed, but time is short
> In the Discrete Mathematics exam you can bring the book and notes. But there are only 2 hours, for 10 questions and 2 problems: there is no time to look things up. It pays to prepare a summary sheet. From this lesson: the "element or subset?" method and counting subsets with a condition. A ready-made summary, written by a student following Mori's book, is [Rigurgiti di Unicorno](https://github.com/bocchinovalentino/rigurgiti_di_unicorno): theory and worked exercises, in Italian, licensed CC BY-NC-SA. It is not official material.

## Quiz

```quiz
Q: (Exam session of 10/09/2026, question 1) Let $X = \{c, \{f, m\}, p, q, \{x\}\}$. Then:
- $q \subset X$
- $\{c, p\} \in X$
+ $\{f, m\} \in X$
- $\{x\} \subset X$
- $\emptyset \in X$
= The elements of $X$ are five: the letters $c$, $p$, $q$ and the two sets $\{f, m\}$ and $\{x\}$. The right sentence is $\{f, m\} \in X$, because the set $\{f, m\}$ is exactly one of the five elements. $q \subset X$ is wrong because $q$ is a letter, not a set. $\{c, p\} \in X$ is wrong because the set $\{c, p\}$ is not among the elements: $\{c, p\} \subset X$ would be right. The most tempting answer is $\{x\} \subset X$: to be true it would need the letter $x$ to be an element of $X$, but in $X$ there is only the set $\{x\}$. Finally the empty set is a subset of every set, but it is not an element of $X$.

Q: (Exam session of 10/09/2026, question 1, another version) Let $X = \{a, \{d, p\}, m, y, \{z\}\}$. Then:
- $p \in X$
+ $z \notin X$
- $\{y, z\} \subset X$
- $\{d, p\} \subset X$
- $\emptyset \in X$
= The elements of $X$ are five: $a$, $m$, $y$ and the sets $\{d, p\}$ and $\{z\}$. The letter $z$ on its own is not among them: it is inside the set $\{z\}$. So $z \notin X$ is true. $p \in X$ is false for the same reason: $p$ is inside $\{d, p\}$. $\{y, z\} \subset X$ is false because $z$ is not an element of $X$. $\{d, p\} \subset X$ is the most tempting: it is false because it would require $d$ and $p$ among the elements; $\{d, p\} \in X$ is true instead. The empty set is not an element of $X$.

Q: (Exam session of 18/01/2023, question 1) Let $A = \{a, b, c, d, e, f\}$. Then:
- $a \in P(A)$
- $b \subset A$
- $(c, f) \subset A$
+ $\{a, b, c\} \in P(A)$
- $\{c, d, e\} \subset P(A)$
= The elements of $P(A)$ are the subsets of $A$. $\{a, b, c\}$ is a subset of $A$, so it is an element of $P(A)$: it is the right answer. $a \in P(A)$ is wrong, because $a$ is an element of $A$ and not one of its subsets. $b \subset A$ is wrong because $b$ is not a set. $(c, f)$, with round brackets, is an ordered pair (next lesson) and not a set of elements of $A$. The most tempting one is $\{c, d, e\} \subset P(A)$: it would mean that $c$, $d$ and $e$ are elements of $P(A)$, that is subsets of $A$, and they are not. $\{c, d, e\} \in P(A)$ would be right.

Q: (Exam session of 06/06/2025, question 2, another version) The statement "$\forall x \in \N, \forall y \in \N, x^2 - x \ge y$" is contradicted by:
- $(x, y) = (5, 10)$
- $(x, y) = (-4, 10)$
- $(x, y) = (2, 2)$
+ $(x, y) = (3, 7)$
- $(x, y) = (4, -2)$
= You need a pair of natural numbers for which the inequality is false. For $(3, 7)$: $9 - 3 = 6$, and $6 \ge 7$ is false, so it is a counterexample. For $(5, 10)$: $25 - 5 = 20 \ge 10$, true. For $(2, 2)$: $4 - 2 = 2 \ge 2$, true, because equality is allowed too: it is the most tempting answer. The pairs with $-4$ and $-2$ do not count, because those numbers are not natural.

Q: How many elements does the power set of $\{1, 2, 3, 4\}$ have?
- $4$
- $8$
+ $16$
- $24$
- $32$
= The power set has all the subsets as its elements. A set with 4 elements has $2^4 = 16$ subsets: for each of the 4 elements the choice is "in" or "out", and $2 \cdot 2 \cdot 2 \cdot 2 = 16$. The answer $4$ counts only the elements. The answer $8$ is the count for a set with 3 elements. The 16 include the empty set and the whole set.

Q: What is the opposite of the sentence "every student of the course passed the exam"?
- "No student of the course passed the exam."
+ "At least one student of the course did not pass the exam."
- "At least one student of the course passed the exam."
- "Every student of the course failed."
- "Exactly one student of the course did not pass the exam."
= To state the opposite, "for all" becomes "there exists", and the property becomes its opposite: "there exists a student who did not pass the exam". The most tempting answer is "no student passed the exam", but it is too strong: one failed student is enough to deny "all". "Exactly one" is also wrong, because more than one student may have failed.

Q: How many elements does the set $\{\emptyset, \{\emptyset\}, \{1, 2\}\}$ have?
- $0$
- $2$
+ $3$
- $4$
- $5$
= The elements are counted by looking at the commas at the first level of brackets. There are three: the empty set, the set containing the empty set and the set $\{1, 2\}$. The empty set is an element like the others, even if it contains nothing. The answer $4$ comes from counting 1 and 2 separately, but they are inside an inner bag and count as one element.

Q: Let $A = \{1, 2, 3\}$. Which of these sentences is true?
- $\emptyset \in A$
+ $\emptyset \subset A$
- $\{1\} \in A$
- $1 \subset A$
- $\{1, 4\} \subset A$
= The empty set is a subset of every set, so $\emptyset \subset A$ is true. It is not, however, an element of $A$: the elements are 1, 2 and 3. $\{1\} \in A$ is wrong, because among the elements there is the number 1, not the set $\{1\}$. $1 \subset A$ is wrong because 1 is not a set. $\{1, 4\} \subset A$ is wrong because 4 is not in $A$.

Q: You want to prove by induction that a formula holds for every $n \ge 1$. What do you have to do?
- Check the formula for $n = 1, 2, 3$ and $4$.
- Assume the formula true for $n + 1$ and derive it for $n$.
+ Check it for $n = 1$ and prove that, if it holds for $n$, it also holds for $n + 1$.
- Prove that, if it holds for $n$, it also holds for $n + 1$: the base case is not needed.
- Check it for $n = 0$ and for $n = 1$.
= You need the base case, that is the check for the first number, here 1, and the inductive step, that is from $n$ to $n + 1$. Checking a few numbers is not enough, because the numbers are infinitely many. Without the base case nothing follows: the property "$n = n + 1$" passes the inductive step but is always false. Going from $n + 1$ to $n$ is the wrong direction.

Q: How many subsets of $\{1, 2, 3, 4, 5, 6\}$ contain the number 1?
- $6$
- $16$
+ $32$
- $63$
- $64$
= The number 1 must be there. For the other five elements the choice is free, so the subsets are $2^5 = 32$. The answer $64 = 2^6$ counts all the subsets, including those without 1. The subsets with 1 are exactly half of all of them.
```

## Exercises

::: exercise basic From the list to the rule and back
Write with the list: (a) $\{n \in \N \mid n < 5\}$; (b) $\{n \in \N \mid n \text{ is odd and } n < 10\}$. Write with a rule: (c) $\{0, 3, 6, 9, 12\}$.
::: solution
1. (a) The natural numbers less than 5 are 0, 1, 2, 3 and 4. The set is $\{0, 1, 2, 3, 4\}$. Zero is there, because in the book it is a natural number.
2. (b) The odd numbers less than 10 are 1, 3, 5, 7 and 9. The set is $\{1, 3, 5, 7, 9\}$.
3. (c) They are the multiples of 3 from 0 to 12. A possible rule: $\{n \in \N \mid n \text{ is a multiple of } 3 \text{ and } n \le 12\}$.

Check of (c): the multiples of 3 up to 12 are $3 \cdot 0$, $3 \cdot 1$, $3 \cdot 2$, $3 \cdot 3$ and $3 \cdot 4$, that is exactly 0, 3, 6, 9 and 12.
:::

::: exercise basic Counting the elements
Find the cardinality: (a) $\{x, y, x, z\}$; (b) $\{\{x, y\}, z\}$; (c) $\{\emptyset, 0\}$; (d) $P(\{1, 2, 3\})$.
::: solution
1. (a) The elements are $x$, $y$ and $z$: the repeated $x$ counts once. The cardinality is 3.
2. (b) There are two elements: the set $\{x, y\}$ and the letter $z$. The cardinality is 2.
3. (c) There are two elements: the empty set and the number zero, which are different objects. The cardinality is 2.
4. (d) The set has 3 elements, so its subsets are $2^3 = 8$. The cardinality is 8.
:::

::: exercise basic Exercise 1.1 of the book: true or false
Take $A = \{a, b, c\}$. Say which of these statements are true and which are false: $b \in A$, $\emptyset \subset A$, $\{\emptyset\} \subset A$, $\{c, d\} \not\subset A$, $\{a, \{c\}\} \subset A$.
::: solution
| Statement | True or false | Why |
|---|---|---|
| $b \in A$ | true | the letter $b$ is in the list |
| $\emptyset \subset A$ | true | the empty set is a subset of every set |
| $\{\emptyset\} \subset A$ | false | it would need the empty set to be an element of $A$, but the elements are the letters $a$, $b$, $c$ |
| $\{c, d\} \not\subset A$ | true | the letter $d$ is not in $A$, so $\{c, d\}$ is not contained in $A$ |
| $\{a, \{c\}\} \subset A$ | false | $a$ is in $A$, but the set $\{c\}$ is not: in $A$ there is the letter $c$, not the set $\{c\}$ |

The third and the fifth rows are the same trap: a set inside the brackets is an element different from its own elements.
:::

::: exercise basic Exercise 1.3 of the book: the power set
Take $A = \{a, e, i, o, u\}$. Say which of these statements are true and which are false: $\emptyset \in P(A)$, $a \in P(A)$, $\{i, u\} \subset P(A)$, $\{e, o\} \in P(A)$, $\{\{e\}, \{o\}\} \subset P(A)$.
::: solution
Remember: the elements of $P(A)$ are the subsets of $A$.

| Statement | True or false | Why |
|---|---|---|
| $\emptyset \in P(A)$ | true | the empty set is a subset of $A$, so an element of $P(A)$ |
| $a \in P(A)$ | false | $a$ is a letter, not a subset of $A$ |
| $\{i, u\} \subset P(A)$ | false | it would need $i$ and $u$ to be elements of $P(A)$, but they are letters |
| $\{e, o\} \in P(A)$ | true | $\{e, o\}$ is a subset of $A$ |
| $\{\{e\}, \{o\}\} \subset P(A)$ | true | its two elements, $\{e\}$ and $\{o\}$, are subsets of $A$, so elements of $P(A)$ |

In the third row the sentence $\{i, u\} \in P(A)$ would be true.
:::

::: exercise basic Stating the opposite
Write the opposite of these sentences, and say whether the sentence or its opposite is true: (a) "every natural number is even"; (b) "there exists a natural number greater than 100"; (c) "for every natural number $n$ there exists a natural number greater than $n$".
::: solution
1. (a) The opposite is "there exists an odd natural number". The opposite is true: 3 is odd, and it is the counterexample to the starting sentence.
2. (b) The opposite is "every natural number is less than or equal to 100". The starting sentence is true: for example 101 is greater than 100.
3. (c) There are two quantifiers, and both change: "for every" becomes "there exists" and "there exists" becomes "for every". The opposite is "there exists a natural number $n$ for which every natural number is less than or equal to $n$". The starting sentence is true: whatever $n$ you take, the number $n + 1$ is greater.
:::

::: exercise intermediate Exercise 1.19 (b) of the book: the sum of the odd numbers
Prove by induction that $1 + 3 + 5 + \dots + (2n - 1) = n^2$ for every $n \ge 1$.
::: solution
1. **Base case**, $n = 1$. On the left there is only 1. On the right $1^2 = 1$. The two sides are equal.
2. **Inductive hypothesis.** Suppose $1 + 3 + \dots + (2n - 1) = n^2$.
3. **Goal.** With $n + 1$ in place of $n$, the last number of the sum is $2(n + 1) - 1 = 2n + 1$. We want to reach $1 + 3 + \dots + (2n - 1) + (2n + 1) = (n + 1)^2$.
4. **Inductive step.** By the hypothesis, the sum up to $2n - 1$ is $n^2$. So the left side is $n^2 + 2n + 1$.
5. The square of $n + 1$ is $(n + 1)(n + 1) = n^2 + n + n + 1 = n^2 + 2n + 1$. It is the same number as in step 4, so the left side is $(n + 1)^2$.
6. **Conclusion.** By the principle of induction the formula holds for every $n \ge 1$.

Check with $n = 5$: $1 + 3 + 5 + 7 + 9 = 25 = 5^2$.
:::

::: exercise intermediate Exercise 1.19 (d) of the book: an inequality
Prove by induction that $n^2 > 2n + 1$ for every $n \ge 3$.
::: solution
1. **Base case**, $n = 3$. On the left $3^2 = 9$, on the right $2 \cdot 3 + 1 = 7$. And it is true that $9 > 7$. With $n = 2$ instead it does not work: $4 > 5$ is false. That is why we start from 3.
2. **Inductive hypothesis.** Suppose $n^2 > 2n + 1$, for some $n \ge 3$.
3. **Goal.** $(n + 1)^2 > 2(n + 1) + 1$, that is $(n + 1)^2 > 2n + 3$.
4. The square is $(n + 1)^2 = n^2 + 2n + 1$.
5. By the hypothesis $n^2$ is greater than $2n + 1$. So $n^2 + 2n + 1$ is greater than $(2n + 1) + 2n + 1 = 4n + 2$.
6. Now compare $4n + 2$ with the goal $2n + 3$. The difference is $(4n + 2) - (2n + 3) = 2n - 1$, which is positive for every $n \ge 1$. So $4n + 2 > 2n + 3$.
7. Putting steps 5 and 6 together: $(n + 1)^2 > 4n + 2 > 2n + 3$.
8. **Conclusion.** By the principle of induction the inequality holds for every $n \ge 3$.

Check: with $n = 4$, $16 > 9$; with $n = 5$, $25 > 11$.
:::

::: exercise hard Exercise 1.19 (e) of the book: powers of 2 beat squares
Prove by induction that $2^n > n^2$ for every $n \ge 5$.
::: solution
1. **Base case**, $n = 5$. On the left $2^5 = 32$, on the right $5^2 = 25$. And it is true that $32 > 25$. With $n = 4$ it does not work: $2^4 = 16$ and $4^2 = 16$ are equal.
2. **Inductive hypothesis.** Suppose $2^n > n^2$, for some $n \ge 5$.
3. **Goal.** $2^{n + 1} > (n + 1)^2$.
4. Doubling a power of 2 means adding 1 to the exponent: $2^{n + 1} = 2 \cdot 2^n$. By the hypothesis $2^n$ is greater than $n^2$, so $2 \cdot 2^n$ is greater than $2n^2$.
5. We write $2n^2 = n^2 + n^2$. By the previous exercise, since $n \ge 3$, $n^2 > 2n + 1$ holds. So $n^2 + n^2 > n^2 + 2n + 1$.
6. And $n^2 + 2n + 1 = (n + 1)^2$, as in exercise 6.
7. Putting it together: $2^{n + 1} > 2n^2 > (n + 1)^2$.
8. **Conclusion.** By the principle of induction the inequality holds for every $n \ge 5$.

Check: with $n = 6$, $2^6 = 64 > 36$; with $n = 10$, $2^{10} = 1024 > 100$.
:::

::: exercise hard Exercise 1.19 (c) of the book: the sum of the cubes
Prove by induction that $1^3 + 2^3 + \dots + n^3 = \frac{n^2(n + 1)^2}4$ for every $n \ge 1$.
::: solution
1. **Base case**, $n = 1$. On the left $1^3 = 1$. On the right $\frac{1 \cdot 4}4 = 1$.
2. **Inductive hypothesis.** Suppose $1^3 + \dots + n^3 = \frac{n^2(n + 1)^2}4$.
3. **Goal.** $1^3 + \dots + (n + 1)^3 = \frac{(n + 1)^2(n + 2)^2}4$.
4. By the hypothesis the left side is $\frac{n^2(n + 1)^2}4 + (n + 1)^3$.
5. Both terms contain $(n + 1)^2$, because $(n + 1)^3 = (n + 1)^2 \cdot (n + 1)$. Factoring it out: $(n + 1)^2\left(\frac{n^2}4 + n + 1\right)$.
6. Inside the brackets we put everything over 4: $\frac{n^2}4 + \frac{4n}4 + \frac 44 = \frac{n^2 + 4n + 4}4$.
7. And $n^2 + 4n + 4 = (n + 2)^2$, because $(n + 2)(n + 2) = n^2 + 2n + 2n + 4$.
8. So the left side is $\frac{(n + 1)^2(n + 2)^2}4$, the goal.
9. **Conclusion.** By the principle of induction the formula holds for every $n \ge 1$.

Check with $n = 3$: $1 + 8 + 27 = 36$, and $\frac{9 \cdot 16}4 = 36$.
:::

::: exercise exam Subsets with a condition
Take $S = \{1, 2, 3, 4, 5, 6, 7, 8\}$. (a) How many subsets does $S$ have? (b) How many contain both 1 and 2? (c) How many do not contain the subset $\{1, 2\}$? (d) How many contain neither 1 nor 2?
::: solution
1. (a) $S$ has 8 elements, so the subsets are $2^8 = 256$.
2. (b) 1 and 2 must be there. The other six elements, from 3 to 8, are chosen freely: $2^6 = 64$.
3. (c) They are all the subsets except those of point (b): $256 - 64 = 192$.
4. (d) Neither 1 nor 2: you choose freely only among the six elements from 3 to 8. There are $2^6 = 64$.

Check: let us split the subsets according to what happens to 1 and 2. There are four cases: both in, only 1, only 2, neither. In each case the other six elements are free, so each case has 64 subsets. In total $4 \cdot 64 = 256$, as in point (a). The subsets of point (c) are the last three cases: $3 \cdot 64 = 192$.
:::

## Review questions

::: question What is a set? What does it mean that it must be "well-defined"?
A set is a collection of objects different from one another, its elements. "Well-defined" means that for every object one can decide without any doubt whether it is inside or not: "the good actors" is not a set, "the actors who have won an Oscar" is.
:::

::: question Why do $x \in A$ and $\{x\} \subset A$ say the same thing? And why does $\{x\} \in A$ say something else?
$\{x\} \subset A$ means that the only element of $\{x\}$, that is $x$, is in $A$: that is exactly $x \in A$. Instead $\{x\} \in A$ means that the set $\{x\}$, as a whole, is one of the elements of $A$. With $A = \{1, 2\}$ the first sentence is true for $x = 1$, the second is false.
:::

::: question What is the opposite of a sentence with "for all"? And of a sentence with "there exists"?
"For all" becomes "there exists" and "there exists" becomes "for all"; the property becomes its opposite. The opposite of "all the numbers in the list are positive" is "at least one number in the list is not positive".
:::

::: question What is the difference between $\emptyset$ and $\{\emptyset\}$?
$\emptyset$ is the empty set and has 0 elements. $\{\emptyset\}$ is a set with one element, which is the empty set: a bag that contains an empty bag.
:::

::: question Why is the empty set a subset of every set?
To say that it is not, you would need an element of the empty set lying outside the other set. The empty set has no elements, so such a counterexample does not exist.
:::

::: question How do you prove that two sets are equal?
With double inclusion: you show that every element of the first is in the second and that every element of the second is in the first (proposition 1.9).
:::

::: question What does the principle of induction say? What are the base case and the inductive step?
Two checks are needed. The base case: the property holds for the first number. The inductive step: whenever it holds for a number $n$, it also holds for $n + 1$. Then the property holds for all the numbers from there on. It is like a row of domino tiles.
:::

::: question Why does a set with $n$ elements have $2^n$ subsets?
For each element the choice is double: in or out. There are $n$ choices, and each one doubles the count. The book proves it by induction: when you add an element, the subsets split into those without and those with the new element, and the latter are as many as the former.
:::

## Glossary

```glossary
Set | A well-defined collection of objects different from one another, its elements. Example: $\{1, 2, 3\}$.
Element | An object that is in a set. It is written $x \in A$, "$x$ belongs to $A$".
Universal set | The set the objects are taken from when a set is described with a rule, for example $\N$.
Property | A sentence about an object that can be true or false, such as "$n$ is even".
Quantifiers | The words "for all" and "there exists". Their symbols, $\forall$ and $\exists$, are read exactly like that.
Counterexample | An element for which a sentence with "for all" is false. One is enough to refute it.
Empty set | The set with no elements, $\emptyset$. It is a subset of every set.
Cardinality | The number of elements of a set, $\lvert A \rvert$. Example: $\lvert \{a, b\} \rvert = 2$.
Subset | A set whose elements are all in another one: $B \subset A$. Example: $\{1, 3\} \subset \{1, 2, 3\}$.
Proper subset | A subset different from the whole set.
Power set | The set $P(A)$ that has all the subsets of $A$ as its elements. If $A$ has $n$ elements, $P(A)$ has $2^n$.
Double inclusion | The way to prove that two sets are equal: each one is contained in the other.
Natural numbers | The counting numbers, $0, 1, 2, 3, \dots$; their set is $\N$.
Successor | The number that comes right after: the successor of $n$ is $n + 1$, which the book writes $s(n)$.
Principle of induction | If a property holds for 0 and passes from every number to the next, it holds for all the natural numbers.
Base case | The check of the property on the first number.
Inductive step | The proof that, if the property holds for $n$, it also holds for $n + 1$.
Inductive hypothesis | The sentence "the property holds for $n$", which in the inductive step is assumed true and used.
```

## Checklist

```checklist
- I can write a set with the list and with a rule.
- I can tell apart $x \in A$, $\{x\} \subset A$ and $\{x\} \in A$.
- I can count the elements of a set that contains other sets.
- I can state the opposite of a sentence with "for all" or "there exists", and find a counterexample.
- I can write down all the subsets of a set with 3 elements.
- I can prove that two sets are equal by double inclusion.
- I can do a proof by induction: base case, hypothesis, inductive step, conclusion.
- I can count the subsets of a set, also with a condition such as "contains these elements".
```

## Sources

- A. Mori, *Lezioni di Matematica Discreta*, 2nd edition, the channel B textbook: chapter 1 "Insiemi", pp. 1–8 (definitions 1.1 and 1.5–1.8, notes 1.2–1.4, 1.11 and 1.12, proposition 1.9, theorem 1.10 and the two examples after it) and exercises 1.1, 1.3 and 1.19 (pp. 14–16). The definitions and statements in the boxes are translated from the book.
- Channel B lesson diary 2025/26, on the MDAG1 2025/26 Moodle page ([id 3501](https://informatica.i-learn.unito.it/course/view.php?id=3501), open to guests): topics of lesson 1. On the same page, the handwritten notes of the first channel A lesson and the 2025/26 exam rules.
- Quizzes and problems of the Discrete Mathematics exam sessions, with the official solutions, on the same page: 18/01/2023 (question 1), 09/06/2023 (problem 1), 05/02/2024, 14/01/2025, 04/02/2025, 06/06/2025 (question 2 and problem 1), 07/07/2025, 13/01/2026 (question 1), 03/02/2026, 06/06/2026, 01/07/2026 and 10/09/2026 (question 1).
- 2026/27 exam calendar and exam rules: [course sheet](https://github.com/DonFlammer/unito-computer-science/blob/main/ai_context/MDAG/course.md).
- V. Bocchino, *Rigurgiti di Unicorno*, Discrete Mathematics notes written by a student following Mori's book (February 2026, licence CC BY-NC-SA 4.0, [GitHub](https://github.com/bocchinovalentino/rigurgiti_di_unicorno)): used as a check. Its solutions to exercises 1.1 and 1.3 agree with those of these notes.
- The explanations in words, the examples with numbers, the "Refresher" and "Try it" boxes, the undated quizzes and the exercises without a book number are original to these notes.
