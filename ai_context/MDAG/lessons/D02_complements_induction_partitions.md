---
course: MDAG
module: MD
lesson: D02
title: Complement, De Morgan, induction and partitions
date: 2026-10-02
lecturers: Andrea Mori, Ignazio Longhi and Lea Terracini
eyebrow: Part 1 (modA) · Discrete Mathematics · Channels A, B and C · Lesson D02
description: >-
  Notes on lesson D02 of Discrete Mathematics (MDAG, part 1, channels A, B and C): intersection and union, difference
  and complement, De Morgan's laws, natural numbers and Peano's axioms, induction as a proof method, the power set and
  its cardinality, coverings, partitions and the quotient set, with real exam questions and worked exercises.
lede: >-
  How two sets combine: what they have in common, everything they contain, what is left out. How to split a set into
  groups without losing anything. Then the natural numbers, induction and how many subsets a set has.
material: book
facts:
  Book: A. Mori, Lezioni di Matematica Discreta, ch. 1, pp. 5–13
  Lecturers: Andrea Mori (channel B), Ignazio Longhi and Lea Terracini (channels A and C) · A.Y. 2026/27
  Study time: 2–3 hours, also in several sittings
source: >-
  A. Mori, Lezioni di Matematica Discreta (the channel B textbook), ch. 1 "Insiemi", pp. 5–13 and exercises pp. 14–15;
  topics of the lesson of 02/10/2026 on the channel B Moodle; quizzes and problems from the Discrete Mathematics exam
  sessions 2023–2026
italian_file: D02_complementare_induzione_partizioni.html
html_notes: notes/MDAG/D02_complements_induction_partitions.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/D02_complementare_induzione_partizioni.md
---

## In brief

- The **intersection** of two sets contains what they have in common. The **union** puts together everything they contain.
- The **difference** removes from a set the elements of another one. What is left outside a part, inside a fixed set, is called the **complement**.
- **De Morgan's laws** say how "outside" behaves: being outside the union means being outside both sets; being outside the intersection means being outside at least one.
- A **partition** splits a set into non-empty groups, without overlaps: each element is in one group and one only. If the groups overlap but cover everything, it is only a **covering**.
- The **natural numbers** 0, 1, 2, 3… are described by five rules, **Peano's axioms**. The last one is the **principle of induction**: starting from 0 and going forward by one you reach all of them.
- A **proof by induction** has two steps: you check the first case, then you show that each case leads to the next one.
- A set with 3 elements has 8 subsets, one with 4 has 16: each extra element doubles the count.
- In the exam, quiz question 1 almost always asks about union and intersection, and question 2 sometimes asks you to recognise a partition.

> [!CHANNELS]
> Discrete Mathematics (Matematica Discreta) has **the same programme and the same exam** in channels A, B and C: these notes hold for all three. In channel B it is the lesson of Friday 02/10/2026 with Andrea Mori, on pages 5–13 of the book. Here the topics come in a different order from the book: first everything about sets, up to partitions, then the natural numbers and induction, and last the count of the subsets, which is proved by induction.

## What two sets have in common (p. 8)

In [lesson D01](D01_sets_induction.html) a set was a bag of objects. Here the objects are ten tiles numbered from 1 to 10. The bag with all the tiles is called $X$:

$$X = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$$

Now fill two smaller bags. In the first put the tiles with an even number, in the second those with a multiple of 3:

$$A = \{2, 4, 6, 8, 10\} \qquad B = \{3, 6, 9\}$$

Which tile should be in both bags? Only the 6: it is even and it is a multiple of 3. The tiles that are in both sets form a new set, the **intersection** of $A$ and $B$.

> [!IDEA]
> The intersection of two sets contains the elements **in common**: those that are in the first **and** in the second.

The intersection is written $A \cap B$ and read "$A$ intersect $B$". The symbol $\cap$ looks like an upside-down U. In our example:

$$A \cap B = \{6\}$$

The result is a set, with braces, even if there is only one number inside: it is a bag with one tile.

```graph
title: The tiles from 1 to 10: on the left the even ones ($A$), on the right the multiples of 3 ($B$); the 6 is in both
x: -4 4
y: -2.6 2.6
axes: no
grid: no
polygon: -3.8 -2.4 3.8 -2.4 3.8 2.4 -3.8 2.4 | grey
circle: -0.9 0 1.7 | blue
circle: 0.9 0 1.7 | amber
text: -3.45 2.05 | grey | $X$
text: -1.9 1.95 | blue | $A$
text: 1.9 1.95 | amber | $B$
text: -1.9 0.7 | blue | $2$
text: -1.3 0.2 | blue | $4$
text: -1.9 -0.5 | blue | $8$
text: -1.2 -1 | blue | $10$
text: 0 0 | accent | $6$
text: 1.5 0.6 | amber | $3$
text: 1.5 -0.6 | amber | $9$
text: -3.2 -1.8 | grey | $1$
text: 3.2 -1.8 | grey | $5$
text: 3.2 1.6 | grey | $7$
```

Look at the figure: the intersection is the area where the two circles overlap. The tiles 1, 5 and 7 are outside both circles: they are not even and not multiples of 3.

Another example, with letters. Take $A = \{a, b, f, h, m\}$ and $C = \{c, p, q, s, z\}$. No letter appears in both, so the intersection is the empty bag:

$$A \cap C = \emptyset$$

The symbol $\emptyset$ is read "empty set". Two sets with no elements in common are called **disjoint**.

The book writes the definition like this.

> [!DEF] 1.13 · Intersection
> Let $A$ and $B$ be sets. The **intersection** of $A$ and $B$ is the set
> $$A \cap B = \{x \text{ such that } x \in A \text{ and } x \in B\}.$$
> We say that $A$ and $B$ are **disjoint** if $A \cap B = \emptyset$.

**How to read it.** The line with the braces says: "the intersection is made of the objects $x$ that are in $A$ and are also in $B$". The symbol $\in$ is read "belongs to", that is "is in the bag". The second sentence says: two sets are disjoint when they have nothing in common.

> [!EXAMPLE] The book's first example (p. 8)
> $A = \{a, b, f, h, m\}$, $B = \{b, f, i, m, p, t\}$, $C = \{c, p, q, s, z\}$.
> 1. The letters common to $A$ and $B$ are $b$, $f$ and $m$: $A \cap B = \{b, f, m\}$.
> 2. Between $B$ and $C$ there is only $p$: $B \cap C = \{p\}$.
> 3. Between $A$ and $C$ nothing: $A \cap C = \emptyset$, they are disjoint.

### A tile or a bag?

The quiz questions almost always play on a difference from lesson D01: an **element** is a tile, a **subset** is a bag of tiles.

- $6 \in A \cap B$ means "the tile 6 is in the intersection". True.
- $\{6\} \subset A \cap B$ means "the bag with the tile 6 is contained in the intersection". True as well. The symbol $\subset$ is read "is contained in".

> [!PITFALL] Do not mix tiles and bags
> $6 \subset A \cap B$ is wrong: 6 is a tile, not a bag, and cannot "be contained". $\{6\} \in A \cap B$ is wrong too: the intersection holds tiles, not bags. The wrong answers of quiz question 1 are almost always of these two kinds.

::: try With $A = \{1, 2, 3, 4\}$ and $B = \{3, 4, 5\}$, what is $A \cap B$? Is it true that $\{3\} \in A \cap B$?
The numbers in both are 3 and 4: $A \cap B = \{3, 4\}$. The sentence is false: 3 is an element, so you write $3 \in A \cap B$, or $\{3\} \subset A \cap B$.
:::

::: try Are the sets $\{a, e, i\}$ and $\{b, c, d\}$ disjoint?
Yes: no letter appears in both, so the intersection is empty.
:::

> [!DEEPER] The book's other two examples (p. 8)
> 1. $A$ is the set of even natural numbers, $B$ that of the natural numbers whose square is between 10 and 200. The squares between 10 and 200 are those of 4, 5, …, 14, because $3^2 = 9$ is too small and $15^2 = 225$ is too big. Of these, the even ones are 4, 6, 8, 10, 12 and 14: $A \cap B = \{4, 6, 8, 10, 12, 14\}$.
> 2. With $X = \{a, b, c, d\}$, $A$ is the set of the subsets of $X$ with 2 elements and $B$ that of the subsets containing $c$. Here the elements are bags. In common there are the 2-letter bags with $c$ inside: $A \cap B = \{\{a, c\}, \{b, c\}, \{c, d\}\}$. The inner braces are not removed.

> [!REMEMBER]
> - The intersection $A \cap B$ contains the elements that are in $A$ **and** in $B$.
> - Two sets with no elements in common are called disjoint: their intersection is empty.
> - Tile or bag: $6 \in A \cap B$, but $\{6\} \subset A \cap B$.

## Putting everything together: the union (p. 9)

Go back to the tiles. Now pour into a new bag all the even tiles and all those that are multiples of 3. What is inside? The tiles 2, 4, 6, 8, 10 and then 3 and 9. The 6 was already there: it is a single tile, you do not put it in twice.

This set is called the **union** of $A$ and $B$.

> [!IDEA]
> The union of two sets contains everything that is in the first **or** in the second, or in both.

The union is written $A \cup B$ and read "$A$ union $B$". The symbol $\cup$ is a U, as in "union". In our example:

$$A \cup B = \{2, 3, 4, 6, 8, 9, 10\}$$

Count the elements. $A$ has 5 and $B$ has 3, but the union has 7, not 8: the 6 is in both and in the union it is counted only once.

> [!DEF] 1.14 · Union
> Let $A$ and $B$ be sets. The **union** of $A$ and $B$ is the set
> $$A \cup B = \{x \text{ such that } x \in A \text{ or } x \in B\}.$$

**How to read it.** "The union is made of the objects $x$ that are in $A$ or in $B$." In mathematics "or" does not exclude the case "both". It is the "or" of "do you want sugar or milk?", to which you can answer "both".

> [!EXAMPLE] The book's examples (p. 9)
> 1. $A = \{a, f, g, k, p\}$ and $B = \{b, f, m, p, t\}$. Put the letters together, without repeating $f$ and $p$: $A \cup B = \{a, b, f, g, k, m, p, t\}$.
> 2. The even natural numbers put together with the odd natural numbers give all the natural numbers, because every natural number is even or odd: the union is $\N$, the set of natural numbers.

> [!BEYOND] · counting the elements of the union
> When you add the elements of $A$ and those of $B$, you count the common elements twice. To correct, you remove them once. With the tiles: $5 + 3 - 1 = 7$. In symbols:
> $$\lvert A \cup B \rvert = \lvert A \rvert + \lvert B \rvert - \lvert A \cap B \rvert$$
> The bars $\lvert \cdot \rvert$ mean "how many elements it has" (lesson D01). This rule comes back with combinatorics.

::: try With $A = \{1, 2, 3, 4\}$ and $B = \{3, 4, 5\}$, what is $A \cup B$? How many elements does it have?
Put together the numbers of the two sets, without repeating 3 and 4: $A \cup B = \{1, 2, 3, 4, 5\}$. It has 5 elements: $4 + 3 - 2 = 5$, because there are two common ones.
:::

### Three sets or more (p. 9)

Union and intersection also work with three sets or more. Take $A = \{1, 2, 3\}$, $B = \{2, 3, 4\}$ and $C = \{3, 4, 5\}$.

- The intersection $A \cap B \cap C$ contains what is in all three: only the 3. So $A \cap B \cap C = \{3\}$.
- The union $A \cup B \cup C$ contains what is in at least one: $\{1, 2, 3, 4, 5\}$.

With three sets it pays to do one piece at a time: first $A \cap B = \{2, 3\}$, then of these keep those that are in $C$.

> [!DEEPER] Unions and intersections of infinitely many sets (p. 9)
> They do not appear in the 2023–2026 exam sessions; they are needed later in the book.
>
> To join or intersect many sets the book gives each one a label, called an **index**: $A_1$, $A_2$, $A_3$ and so on. $A_i$ is read "$A$ sub $i$" and means "the set with label $i$"; $I$ is the set of labels. The book writes
> $$\bigcap_{i \in I} A_i = \{x \text{ such that } x \in A_i,\ \forall i \in I\} \qquad \bigcup_{i \in I} A_i = \{x \text{ such that } x \in A_i,\ \exists i \in I\}.$$
> **How to read it.** The first: the objects that are in all the sets. The second: the objects that are in at least one. The symbol $\forall$ is read "for every", $\exists$ is read "there exists".
>
> The book's example uses intervals: $(a, b)$ are the real numbers between $a$ and $b$, endpoints excluded. For every natural number $n$ from 1 on take $A_n = \left(-\frac1n, \frac1n\right)$. The intersection of all the $A_n$ is $\{0\}$: zero is in each of them, while a number other than zero, however small, sooner or later is left out, because $\frac1n$ becomes smaller than it. With $B_n = (-n, n)$, instead, the union is the whole real line.

### The distributive properties (pp. 9–10)

Union and intersection mix with a rule that recalls multiplication. At school $2 \cdot (3 + 4) = 2 \cdot 3 + 2 \cdot 4$: the 2 is "distributed" over the two numbers in the brackets. With sets something similar happens.

Try with the tiles. Take again $A$ (the even ones) and $B$ (the multiples of 3), and in addition $D = \{1, 2, 3, 4\}$, the small tiles. Do the calculation in two ways.

1. First put together the even ones and the multiples of 3: $A \cup B = \{2, 3, 4, 6, 8, 9, 10\}$. Then keep those that are in $D$: 2, 3 and 4.
2. First take the small even ones, $A \cap D = \{2, 4\}$, and the small multiples of 3, $B \cap D = \{3\}$. Then put them together: 2, 3 and 4.

You get the same set, $\{2, 3, 4\}$. It is not a coincidence: it always holds.

> [!PROP] 1.15 · Distributive properties
> Let $A$, $B$ and $C$ be three sets. Then the following equalities hold
> $$(A \cup B) \cap C = (A \cap C) \cup (B \cap C) \qquad (A \cap B) \cup C = (A \cup C) \cap (B \cup C).$$

**How to read it.** The first is the tiles calculation: "put together and then keep those in $C$" gives the same as "keep those in $C$ from each one and then put together". The second swaps the roles of union and intersection, and it holds too.

> [!PROOF] why the first equality holds (pp. 9–10)
> The book uses the **double inclusion** of lesson D01: two sets are equal when each is contained in the other.
>
> 1. Take an element $x$ of $(A \cup B) \cap C$. Then $x$ is in $C$, and it is in $A$ or in $B$. If it is in $A$, it is in $A \cap C$; if it is in $B$, it is in $B \cap C$. In both cases it is in the union $(A \cap C) \cup (B \cap C)$.
> 2. Take an element $x$ of $(A \cap C) \cup (B \cap C)$. Then it is in $A \cap C$ or in $B \cap C$. In the first case it is in $A$ and in $C$, in the second in $B$ and in $C$. In both cases it is in $C$ and in $A \cup B$, so in $(A \cup B) \cap C$.
>
> The second equality is exercise 1.7 of the book: it is proved with the same two steps.

::: try With $A = \{1, 2\}$, $B = \{2, 3\}$ and $C = \{2, 3, 4\}$, check the first distributive property.
On the left: $A \cup B = \{1, 2, 3\}$, and of these 2 and 3 are in $C$. Result $\{2, 3\}$.

On the right: $A \cap C = \{2\}$ and $B \cap C = \{2, 3\}$. Put together they give $\{2, 3\}$.

The two sides are equal.
:::

> [!REMEMBER]
> - The union $A \cup B$ contains the elements that are in $A$ **or** in $B$, also in both. Common elements are counted only once.
> - With three sets you do one piece at a time.
> - Distributive properties: $(A \cup B) \cap C = (A \cap C) \cup (B \cap C)$, and the same with the symbols swapped.

## What is left outside: difference and complement (p. 10)

Go back to the tiles: from the bag of even ones remove those that are also multiples of 3, that is the 6. What is left is $\{2, 4, 8, 10\}$: it is the **difference** between $A$ and $B$.

The difference is written $A \setminus B$ and read "$A$ minus $B$". It contains the elements of $A$ that are not in $B$:

$$A \setminus B = \{2, 4, 8, 10\} \qquad B \setminus A = \{3, 9\}$$

Order matters: $A \setminus B$ removes from $A$, $B \setminus A$ removes from $B$, and the results are different.

> [!DEF] 1.16 · Difference
> Let $A$ and $X$ be two sets. The **difference** of $X$ and $A$, denoted $X \setminus A$, is the subset of the elements of $X$ not in $A$, precisely
> $$X \setminus A = \{x \in X \text{ such that } x \notin A\}.$$

**How to read it.** "$X$ minus $A$ is made of the elements of $X$ that are not in $A$." The symbol $\notin$ is read "does not belong to". $A$ does not need to be inside $X$: the elements of $A$ that are not in $X$ simply do not count.

### The complement: everything else

The most common case is when you remove a part from the big bag. From the bag $X$ of all the tiles remove the even ones: the odd ones are left, $\{1, 3, 5, 7, 9\}$. What is left is called the **complement** of the even ones in $X$.

The book writes the complement $C_X(A)$, read "complement of $A$ in $X$". Other texts write $A^c$ or $\overline A$, but that way you do not see the most important piece of information: from which bag $X$ you removed $A$.

> [!DEF] 1.17 · Complement
> Let $A$ be a subset of the set $X$. The **complement** of $A$ in $X$, denoted $C_X(A)$, is the subset of the elements of $X$ not in $A$, precisely
> $$C_X(A) = \{x \in X \text{ such that } x \notin A\}.$$

**How to read it.** It is the same rule as the difference, with one more condition: $A$ must be a part of $X$. The complement is "what $A$ is missing to become $X$".

> [!PITFALL] The complement depends on $X$
> Take $A = \{2, 4\}$. Inside $X = \{1, 2, 3, 4, 5\}$ the complement is $\{1, 3, 5\}$. Inside the ten tiles it is $\{1, 3, 5, 6, 7, 8, 9, 10\}$. The same set $A$ has different complements: that is why $X$ must always be written.

Two things the book points out (p. 10):

- the complement of the complement is the starting set: the complement of the even ones is the odd ones, and the complement of the odd ones is the even ones again;
- the irrational numbers, like $\sqrt 2$ and $\pi$, are the real numbers that are not fractions: they are the complement of the fractions inside the real numbers.

::: try With $X = \{1, 2, 3, 4, 5, 6\}$ and $A = \{1, 2\}$, what is $C_X(A)$?
They are the elements of $X$ that are not in $A$: $C_X(A) = \{3, 4, 5, 6\}$.
:::

::: try With $A = \{1, 2, 3\}$ and $B = \{3, 4\}$, what are $A \setminus B$ and $B \setminus A$?
From $A$ remove 3, the only common element: $A \setminus B = \{1, 2\}$. From $B$ remove 3: $B \setminus A = \{4\}$.
:::

> [!DEEPER] The book's last example (p. 10)
> With $A = \{a, b, c\}$ and $B = \{a, b, d\}$, the power sets are $P(A)$ and $P(B)$: the bags of all their subsets (lesson D01). The difference $P(B) \setminus P(A)$ contains the subsets of $B$ that are not subsets of $A$, that is those with $d$: $\{a, b, d\}$, $\{a, d\}$, $\{b, d\}$ and $\{d\}$. Here you cannot speak of a complement, because $P(A)$ is not contained in $P(B)$: $\{c\}$ is in the first and not in the second.

> [!REMEMBER]
> - $A \setminus B$ contains the elements of $A$ that are not in $B$. Order matters.
> - If $A$ is a part of $X$, the difference $X \setminus A$ is called the complement of $A$ in $X$ and is written $C_X(A)$.
> - The complement depends on $X$; the complement of the complement is the starting set.

## Outside union and intersection: De Morgan (p. 11)

Start from everyday sentences. The opposite of "I take the train or the bus" is "I take neither the train nor the bus": I must give up both. The opposite of "today it rains and it is cold" is "today it does not rain or it is not cold": it is enough that one of the two is missing. With sets the same happens.

Go back to the tiles and to the figure of the intersection. Which tiles are **outside the union**, that is outside both circles? Those that are not even and not multiples of 3: 1, 5 and 7.

Now do the calculation another way. The tiles that are not even are $\{1, 3, 5, 7, 9\}$. The tiles that are not multiples of 3 are $\{1, 2, 4, 5, 7, 8, 10\}$. Those that are in both lists are 1, 5 and 7. The same result.

> [!IDEA]
> Being outside the union means being outside the first set **and** outside the second. The complement of the union is the intersection of the complements.

There is also the twin rule. Which tiles are **outside the intersection**? The intersection is $\{6\}$, so all except the 6. And which tiles are not even **or** not multiples of 3? They are those missing at least one of the two things: again all except the 6, the only one that has both.

> [!IDEA]
> Being outside the intersection means being outside at least one of the two sets. The complement of the intersection is the union of the complements.

The book states them like this.

> [!THEOREM] 1.18 · De Morgan's laws
> Let $X$ be a set and let $A$ and $B$ be subsets of $X$. Then
> $$C_X(A \cap B) = C_X(A) \cup C_X(B), \qquad C_X(A \cup B) = C_X(A) \cap C_X(B).$$

**How to read it.**

- First equality: the complement of the intersection is the union of the complements. The things that are not in both are those missing from at least one.
- Second equality: the complement of the union is the intersection of the complements. The things that are in neither are those missing from both.
- A way to remember them: the complement "goes into" the brackets and, going in, swaps $\cap$ with $\cup$.

Here are the calculations with the tiles, in a row.

| | Calculation | Result |
|---|---|---|
| $C_X(A \cup B)$ | everything except $\{2, 3, 4, 6, 8, 9, 10\}$ | $\{1, 5, 7\}$ |
| $C_X(A) \cap C_X(B)$ | $\{1, 3, 5, 7, 9\}$ and $\{1, 2, 4, 5, 7, 8, 10\}$ in common | $\{1, 5, 7\}$ |
| $C_X(A \cap B)$ | everything except $\{6\}$ | $\{1, 2, 3, 4, 5, 7, 8, 9, 10\}$ |
| $C_X(A) \cup C_X(B)$ | $\{1, 3, 5, 7, 9\}$ together with $\{1, 2, 4, 5, 7, 8, 10\}$ | $\{1, 2, 3, 4, 5, 7, 8, 9, 10\}$ |

> [!PROOF] why the first law holds (p. 11)
> Double inclusion again.
>
> 1. Take $x$ in the complement of $A \cap B$: it is in $X$ but it is not common to $A$ and $B$. So it is missing from at least one of the two: if it is not in $A$, it is in $C_X(A)$; if it is not in $B$, it is in $C_X(B)$. In any case it is in the union $C_X(A) \cup C_X(B)$.
> 2. Take $x$ in $C_X(A) \cup C_X(B)$. If it is in $C_X(A)$, it is not in $A$, so it cannot be in $A \cap B$. If it is in $C_X(B)$, it is not in $B$, and again it is not in $A \cap B$. In any case it is in the complement of $A \cap B$.
>
> The second law is proved the same way: it is exercise 1.9 of the book, worked out in exercise 6 of this lesson.

> [!PITFALL] The complement does not just "distribute"
> Writing $C_X(A \cup B) = C_X(A) \cup C_X(B)$, without swapping the symbol, is wrong. With the tiles the left side is $\{1, 5, 7\}$, while the right side also contains 2, 3, 4, 8, 9 and 10.

The laws also hold with three or more sets (exercise 1.10 of the book). There is also a version with the difference instead of the complement, which does not require $A$ and $B$ to be inside $X$: it is exercise 1.11, worked out in exercise 7.

::: try With $X = \{1, 2, 3, 4, 5, 6, 7, 8\}$, $A = \{1, 2, 3\}$ and $B = \{3, 4, 5\}$, calculate $C_X(A \cup B)$ in two ways.
First way: $A \cup B = \{1, 2, 3, 4, 5\}$, and the rest of $X$ is $\{6, 7, 8\}$.

Second way: $C_X(A) = \{4, 5, 6, 7, 8\}$ and $C_X(B) = \{1, 2, 6, 7, 8\}$. In common they have $\{6, 7, 8\}$.

The same result, as the second De Morgan law says.
:::

> [!REMEMBER]
> - Outside the union = outside both: $C_X(A \cup B) = C_X(A) \cap C_X(B)$.
> - Outside the intersection = outside at least one: $C_X(A \cap B) = C_X(A) \cup C_X(B)$.
> - The complement goes into the brackets and swaps union and intersection.

## Covering everything: coverings (pp. 11–12)

In a class of twenty students, study groups are formed. Two conditions are reasonable: each group is made of students of the class, and no student is left without a group. If someone is in two groups, that is fine.

When the parts, put together, give the whole set, they form a **covering**.

> [!IDEA]
> A covering of a set is a group of subsets that, put together, give the whole set: no element is left out. The parts may overlap.

Take $X = \{1, 2, 3, 4, 5\}$ and the parts $\{1, 2, 3\}$ and $\{3, 4, 5\}$. Their union is $\{1, 2, 3, 4, 5\}$, that is the whole of $X$: it is a covering. The 3 is in both parts, and that is fine.

The parts $\{1, 2\}$ and $\{4, 5\}$, instead, leave out the 3: they are not a covering.

The book calls a group of subsets a **family** and writes it $\mathcal A = \{A_i\}_{i \in I}$. It reads "the family of the $A_i$" and means: the parts are called $A_1$, $A_2$ and so on, each with a number. In the example above, $A_1 = \{1, 2, 3\}$ and $A_2 = \{3, 4, 5\}$.

> [!DEF] 1.19 · Covering
> Let $X$ be a set and let $\mathcal A = \{A_i\}_{i \in I}$ be a family of subsets of $X$. The family $\mathcal A$ is called a **covering** of $X$ if
> $$\bigcup_{i \in I} A_i = X.$$

**How to read it.** "The parts $A_i$ are subsets of $X$. Their union is the whole of $X$." The big symbol $\bigcup$ means "the union of all the parts".

The book's examples are these.

- The integers, split into even and odd: every integer is even or odd, so it is a covering.
- The real numbers, split into three parts: the negative ones, the positive ones and the numbers between $-1$ and $1$. Every real number is negative, positive or zero, and zero is in the third part.
- The real numbers, split into pieces of line of length 1: from 0 to 1, from 1 to 2, from 2 to 3, and so on, also towards the negatives. Every number is in at least one piece.

> [!NOTE] Two misprints in the book
> In the example with the real numbers, the second part is printed $\{x \in \R \mid x < 0\}$, the same as the first: it must be $\{x \in \R \mid x > 0\}$, the positive ones. In the example with even and odd numbers, the two parts are written as subsets of $\N$, the natural numbers, but they must be subsets of $\Z$, the integers: otherwise the negative ones would be left uncovered.

### A handy notation: 2Z and 2Z + 1 (p. 12)

The book uses two notations for sets of numbers (Note 1.20). Take a set of numbers $S$ and a number $a$:

- $aS$ is the set you get by **multiplying** every element of $S$ by $a$;
- $S + a$ is the set you get by **adding** $a$ to every element of $S$.

For example $2\Z$ are the integers multiplied by 2, that is the even numbers: $\dots, -4, -2, 0, 2, 4, \dots$ And $2\Z + 1$ are the even numbers plus 1, that is the odd numbers. The covering with even and odd numbers is then written

$$\Z = (2\Z) \cup (2\Z + 1).$$

In general $n\Z$ are the multiples of $n$: $3\Z$ are the multiples of 3. This notation appears in question 1 of the exam session of 06/06/2026.

::: try Are the parts $\{a, b\}$, $\{b, c\}$ and $\{d\}$ a covering of $\{a, b, c, d\}$?
Yes: put together they give $\{a, b, c, d\}$. That $b$ is in two parts does not matter.
:::

::: try Is the number 15 in $3\Z \cap 5\Z$?
Yes: 15 is a multiple of 3 and a multiple of 5, so it is in both.
:::

> [!REMEMBER]
> - A covering of $X$ is a group of subsets of $X$ that, put together, give the whole of $X$.
> - The parts may overlap; no element may be left out, and no part may have elements that are not in $X$.
> - $n\Z$ are the multiples of $n$: $2\Z$ the even numbers, $2\Z + 1$ the odd ones.

## Splitting without overlapping: partitions (pp. 12–13)

You have a pile of socks to put in three drawers: white, black and coloured. Each sock ends up in a drawer, and in one only. And you do not keep an empty drawer. This split is a **partition**.

> [!IDEA]
> A partition splits a set into non-empty groups that do not touch: each element is in one group and one only.

A partition is a covering with two more conditions. To recognise it you check three things, one at a time.

1. **Nobody is left out**: put together, the parts give the whole set.
2. **No part is empty.**
3. **No overlap**: two different parts have no elements in common, that is they are disjoint.

Take $X = \{1, 2, 3, 4, 5\}$.

| Parts | Covers everything? | None empty? | No overlap? | Partition? |
|---|---|---|---|---|
| $\{1, 2\}$, $\{3\}$, $\{4, 5\}$ | yes | yes | yes | **yes** |
| $\{1, 2, 3\}$, $\{3, 4, 5\}$ | yes | yes | no, 3 is in two | no |
| $\{1, 2\}$, $\{4, 5\}$ | no, 3 is missing | yes | yes | no |
| $\{1, 2, 3, 4, 5\}$, $\emptyset$ | yes | no | yes | no |

```graph
title: A partition of $X = \{1, 2, 3, 4, 5\}$: three parts that do not touch
x: -3 3
y: -2 2
axes: no
grid: no
polygon: -2.8 -1.8 2.8 -1.8 2.8 1.8 -2.8 1.8 | grey
circle: -1.7 0 0.8 | blue
circle: 0 0 0.6 | amber
circle: 1.7 0 0.8 | green
text: -2.5 1.45 | grey | $X$
text: -2 0 | blue | $1$
text: -1.4 0 | blue | $2$
text: 0 0 | amber | $3$
text: 1.4 0 | green | $4$
text: 2 0 | green | $5$
```

> [!DEF] 1.21 · Partition
> The family $\mathcal A = \{A_i\}_{i \in I}$ is called a **partition** of $X$ if:
>
> 1. it is a covering of $X$;
> 2. $\forall i \in I,\ A_i \neq \emptyset$;
> 3. $\forall i, j \in I$ such that $i \neq j$ the subsets $A_i$ and $A_j$ are disjoint, $A_i \cap A_j = \emptyset$.

**How to read it.** They are the three checks. The first: the parts cover $X$. The second: every part $A_i$ is not empty ($\forall$ is read "for every", $\neq$ is read "different from"). The third: two parts with different numbers have nothing in common.

> [!PITFALL] "Pairwise disjoint"
> The third check must be done on **every pair** of parts. With the parts $\{1, 2\}$, $\{2, 3\}$ and $\{4\}$ no number is common to all three, and yet it is not a partition: the first two have the 2 in common.

> [!METHOD] Is it a partition?
> 1. Put the parts together and compare them with the set: if an element is missing, or an element appears that is not in the set, it is not a partition.
> 2. Look for an empty part. If there is one, it is not a partition.
> 3. Go through the elements one by one and count in how many parts they appear: each must appear in one part only.

The book's examples (p. 12), with the coverings from before:

- even and odd numbers are a partition of the integers: no integer is even and odd at the same time;
- negative, positive and the numbers between $-1$ and $1$ are not: $-\frac12$, for example, is negative and is also between $-1$ and $1$;
- the pieces of line of length 1 are not: the number 1 is both in the piece from 0 to 1 and in the one from 1 to 2;
- a part $A$ of $X$ and its complement are a partition of $X$, as long as $A$ is not empty and is not the whole of $X$: otherwise one of the two parts would be empty.

> [!DEEPER] A partition of the fractions (p. 12)
> Fractions can be split according to the denominator they have when reduced to lowest terms, with a positive denominator: in the first part the integers, in the second the fractions like $\frac12$ and $-\frac32$, in the third those like $\frac13$ and $\frac23$, and so on. Every fraction has only one reduced form, so it is in one part only: it is a partition of $\Q$, the set of fractions.

### The quotient set (p. 13)

When you sort socks into drawers, sometimes you care about the drawers and not the single socks: "how many kinds of socks do I have?". The book calls **quotient set** the set whose elements are the parts of a partition: the set of the drawers.

For the partition of the integers into even and odd numbers the quotient set has two elements: the drawer of the even numbers and the drawer of the odd ones. Every element of a drawer is called a **representative** of that drawer, and the drawer is indicated by one of its representatives in square brackets: $[0]$ is the drawer of the even numbers, $[7]$ that of the odd ones. Also $[2]$ and $[-4]$ indicate the even numbers: the same drawer, named with different representatives.

> [!DEF] 1.22 · Quotient set
> Given a set $X$ with a partition $\mathcal A = \{A_i\}_{i \in I}$, the set $Q = \{A_i\}$ whose elements are the subsets forming the partition $\mathcal A$ is called the **quotient set** of $X$ (with respect to the partition $\mathcal A$). Given an element $A \in Q$, every element $x \in X$ such that $x \in A$ is called a **representative** of $A$, and sometimes we will write $A = [x]$ or $A = \overline x$.

**How to read it.** The quotient set is "the set of the drawers". A representative of a drawer is any one of its elements. The notations $[x]$ and $\overline x$ (read "x bar") mean "the drawer $x$ is in".

The quotient will come back with equivalence relations and with clock arithmetic, where $[3]$ will indicate all the numbers that leave the same remainder as 3 in a division.

::: try Are the parts $\{a, c\}$, $\{b\}$, $\{c, d\}$ a partition of $\{a, b, c, d\}$?
No: they cover everything and none is empty, but $c$ is in two parts.
:::

::: try How many partitions does $\{1, 2, 3\}$ have?
Five. Everything in one part: $\{1, 2, 3\}$. A pair and one element on its own, in three ways: $\{1, 2\}$ and $\{3\}$; $\{1, 3\}$ and $\{2\}$; $\{2, 3\}$ and $\{1\}$. Three parts with one element each: $\{1\}$, $\{2\}$, $\{3\}$.
:::

> [!REMEMBER]
> - Partition = covering + no empty part + pairwise disjoint parts. Each element is in one part only.
> - To check: do the parts cover everything? is there an empty part? is some element in two parts?
> - The quotient set is the set of the parts of the partition, the "drawers"; $[x]$ is the drawer that contains $x$.

## The natural numbers and Peano's rules (pp. 5–6)

Now a different topic. In lesson D01 you saw the numbers for counting, 0, 1, 2, 3 and so on, which form the set $\N$ of natural numbers. You also saw the idea that starting from 0 and going forward one at a time you reach all of them. The book describes the natural numbers with five rules, **Peano's axioms**. An **axiom** is a rule that is not proved: it is accepted as a starting point.

The book calls $s(n)$ the **successor** of $n$, that is the number that comes right after: $s(n)$ is read "s of $n$", and $s(4) = 5$.

The five rules, in words:

1. zero is a natural number;
2. every natural number has a successor, which is again a natural number;
3. two different natural numbers have different successors;
4. zero is not the successor of any natural number;
5. if a set of natural numbers contains zero and, whenever it contains a number, it also contains its successor, then it contains all the natural numbers.

### What goes wrong without a rule

The best way to understand what each rule is for is to look at what happens when it is missing.

**Without rule 4: the clock.** Take the hours of a clock, from 0 to 11, and as successor the next hour. The successor of 11 is 0: after 11 comes 0 again. Rules 1, 2 and 3 hold, but rule 4 does not, because zero is the successor of 11. With these "numbers" you cannot count beyond 11: you go round in circles. Rule 4 prevents going back to the start.

**Without rule 3: the loop.** Take the numbers from 0 to 5 and give each the usual successor, except 5, whose successor is 3. You go 0, 1, 2, 3, 4, 5 and then again 3, 4, 5, 3… Zero is the successor of nobody, so rule 4 holds. But 2 and 5 have the same successor, 3: rule 3 does not. Rule 3 prevents coming back in halfway.

**Without rule 5: the ghost numbers.** Take the real natural numbers and add a second row of "ghost" numbers $0'$, $1'$, $2'$ and so on, each with its successor in its own row: after $0'$ comes $1'$. Rules 1 to 4 all hold. But the ghost row is never reached starting from 0. Rule 5 says exactly that there are no other numbers besides those reached from 0 by going forward.

> [!IDEA]
> Rules 2, 3 and 4 say that when counting you never go back and never stop: the natural numbers are infinitely many and all different. Rule 5 says there is nothing else: all the natural numbers are reached starting from 0.

> [!DEEPER] Peano's axioms as the book writes them (p. 5)
> They are not asked in the Discrete Mathematics exam sessions; they help to understand where induction comes from.
>
> The set $\N$ of natural numbers is characterised by these five axioms (Peano, 1889):
>
> 1. $0 \in \N$;
> 2. every $n \in \N$ has a successor $s(n) \in \N$;
> 3. if $m, n \in \N$ and $m \neq n$ then $s(m) \neq s(n)$;
> 4. $\forall n \in \N,\ 0 \neq s(n)$;
> 5. if $U \subset \N$ is such that $0 \in U$ and $s(n) \in U$, $\forall n \in U$, then $U = \N$.
>
> **How to read it.** They are the five rules above. In rule 5, $U$ is a set of natural numbers; "$s(n) \in U$ for every $n \in U$" means "whenever $n$ is in $U$, its successor is in it too". The conclusion $U = \N$ says that then $U$ contains all the natural numbers.

::: try Take the set $\{0, 1, 2\}$ with $s(0) = 1$, $s(1) = 2$ and $s(2) = 2$. Which rule does not hold?
Rule 3: the numbers 1 and 2 are different but have the same successor, 2.
:::

::: try And with $\{0, 1, 2\}$, $s(0) = 1$, $s(1) = 2$ and $s(2) = 0$?
Rule 4: zero is the successor of 2. It is a clock with three hours.
:::

> [!REMEMBER]
> - Peano's axioms are five rules that describe the natural numbers: zero, the successor, no going back to zero, no loops, no numbers outside the row.
> - Rule 5 is the principle of induction: a set that contains 0 and always passes to the successor contains all the natural numbers.

## Induction as a proof method (pp. 6–7)

Set up many dominoes in a row, standing. If you knock over the first one, and each domino, falling, knocks over the next one, then they all fall. There is no need to look at them one by one.

Induction uses the same idea to prove that a sentence about numbers holds for all natural numbers. It is Peano's rule 5. Take the set of the numbers for which the sentence is true. If it contains zero, the first domino falls. If it always passes to the successor, each domino knocks over the next. Then it contains all the natural numbers.

> [!METHOD] Proving a property by induction
> 1. **Base case.** Check the property for the first number: usually 0, or 1 if the property only makes sense from 1 on.
> 2. **Inductive hypothesis.** Write the property for any number $n$ and assume it is true.
> 3. **Inductive step.** Write the property for $n + 1$, that is where you want to get. Then start from the left side, use the inductive hypothesis and reach the right side.
> 4. **Conclusion.** By the principle of induction the property holds for all numbers from the first one on.

The book states the principle as theorem 1.10, already seen in lesson D01. Here we use it on two new examples.

### First example: the sum of the odd numbers

Add up the first odd numbers and see what comes out.

| How many odd numbers | Sum | Result |
|--:|---|--:|
| 1 | $1$ | 1 |
| 2 | $1 + 3$ | 4 |
| 3 | $1 + 3 + 5$ | 9 |
| 4 | $1 + 3 + 5 + 7$ | 16 |
| 5 | $1 + 3 + 5 + 7 + 9$ | 25 |

The results are 1, 4, 9, 16, 25: the squares. It looks like the sum of the first $n$ odd numbers is $n^2$, that is $n$ times $n$.

There is a picture that explains why. A square of 3 by 3 dots has 9. To turn it into a square of 4 by 4 you add a row at the bottom and a column on the right, in the shape of an L: that is $3 + 3 + 1 = 7$ dots, the next odd number. Every time the square grows by one, you add an odd number.

To write the sentence with letters you need the odd number in position $n$. The first is 1, the second 3, the third 5: it is always twice the position minus 1, that is $2n - 1$. For example the fifth is $2 \cdot 5 - 1 = 9$. The sentence to prove, for every $n$ from 1 on, is:

$$1 + 3 + 5 + \dots + (2n - 1) = n^2$$

> [!EXAMPLE] The proof by induction
> **Base case**, with $n = 1$. On the left there is only the first odd number, 1. On the right $1^2 = 1$. They are equal.
>
> **Inductive hypothesis.** Assume that for some $n$ we have $1 + 3 + \dots + (2n - 1) = n^2$.
>
> **Inductive step.** You must reach the same sentence with $n + 1$ in place of $n$. The odd number in position $n + 1$ is $2(n + 1) - 1 = 2n + 1$, so the sentence to reach is
> $$1 + 3 + \dots + (2n - 1) + (2n + 1) = (n + 1)^2.$$
> Start from the left side. The first $n$ terms, by the inductive hypothesis, make $n^2$:
> $$1 + 3 + \dots + (2n - 1) + (2n + 1) = n^2 + (2n + 1)$$
> Now look at the right side: $(n + 1)^2 = n^2 + 2n + 1$. It is exactly what you obtained.
>
> **Conclusion.** The formula holds for $n = 1$ and passes from each $n$ to the next: by the principle of induction it holds for every $n$ from 1 on.

> [!REFRESHER] the square of a sum
> $(n + 1)^2$ means $(n + 1) \cdot (n + 1)$. Multiply each piece of the first bracket by each piece of the second: $n \cdot n + n \cdot 1 + 1 \cdot n + 1 \cdot 1 = n^2 + 2n + 1$. With a number: $(3 + 1)^2 = 16$, and $9 + 6 + 1 = 16$.

### Second example: powers of 2 grow fast

The sentence is: for every natural number $n$, $2^n$ is at least $n + 1$. It is written $2^n \ge n + 1$, and the symbol $\ge$ is read "greater than or equal to".

First the numbers: for $n = 0$ you get $1 \ge 1$; for $n = 1$, $2 \ge 2$; for $n = 2$, $4 \ge 3$; for $n = 3$, $8 \ge 4$. The power of 2 runs further and further ahead.

> [!EXAMPLE] The proof by induction
> **Base case**, with $n = 0$: $2^0 = 1$ and $0 + 1 = 1$. $1 \ge 1$ holds.
>
> **Inductive hypothesis.** Assume $2^n \ge n + 1$ for some $n$.
>
> **Inductive step.** You must reach $2^{n+1} \ge n + 2$. Take one step at a time:
> 1. $2^{n+1} = 2 \cdot 2^n$, because one more power of 2 is one more 2 in the multiplication;
> 2. by the inductive hypothesis $2^n$ is at least $n + 1$, so $2 \cdot 2^n$ is at least $2(n + 1) = 2n + 2$;
> 3. $2n + 2$ is at least $n + 2$, because the difference is $n$, which is never negative.
>
> Putting it in a row: $2^{n+1} \ge 2n + 2 \ge n + 2$.
>
> **Conclusion.** By the principle of induction the sentence holds for every natural number $n$.

> [!PITFALL] Each domino must knock over the next one
> The inductive step must work for **every** $n$, including the first one. In the box below there is a famous wrong "proof", in which the step breaks at a single point.

> [!DEEPER] are all horses the same colour?
> The sentence: "in every group of $n$ horses, all have the same colour". Base case, $n = 1$: a single horse has its own colour. "Inductive" step: take $n + 1$ horses. Remove the first: $n$ horses are left, all of the same colour by the hypothesis. Remove the last instead: another $n$ horses are left, all of the same colour. The two groups have horses in common, so the colour is the same for all.
>
> The error: with $n = 1$, that is going from 1 to 2 horses, the two groups are "the second horse" and "the first horse", and they have no horse in common. The step from 1 to 2 does not work: the first domino falls, but it does not knock over the second.

::: try In the first example, what does the inductive hypothesis say with $n = 3$, and what is it for?
It says $1 + 3 + 5 = 9$, that is $3^2$. It is used for the step to $n = 4$: $1 + 3 + 5 + 7 = 9 + 7 = 16 = 4^2$.
:::

> [!REMEMBER]
> - Induction in four moves: base case, inductive hypothesis, inductive step, conclusion.
> - In the inductive step you start from the case $n + 1$ and use the hypothesis on the case $n$ to reach the result.
> - The inductive step must work for every $n$, starting from the first.

## How many subsets: the power set (pp. 4–7)

In lesson D01 you saw the **power set**: the bag that contains all the subsets of a set. The power set of $A$ is written $P(A)$ and read "power set of $A$". Here you count how many elements it has.

For $A = \{1, 2, 3\}$ it pays to list the subsets in order of size.

| How many elements | Subsets | How many |
|--:|---|--:|
| 0 | $\emptyset$ | 1 |
| 1 | $\{1\}$, $\{2\}$, $\{3\}$ | 3 |
| 2 | $\{1, 2\}$, $\{1, 3\}$, $\{2, 3\}$ | 3 |
| 3 | $\{1, 2, 3\}$ | 1 |

In total $1 + 3 + 3 + 1 = 8$. The empty set and the whole set are always there.

### Why there are 2 to the n

To build a subset of $\{1, 2, 3\}$ you decide, element by element, "in" or "out". 1 in or out, 2 in or out, 3 in or out: three choices with two options each, $2 \cdot 2 \cdot 2 = 8$. With $n$ elements there are $n$ choices, and $2^n$ subsets, that is 2 multiplied by itself $n$ times.

The book proves it by induction (p. 7), with an idea worth remembering. Add a new element, for example 4, to the set $\{1, 2, 3\}$. The subsets of the new set are of two kinds:

- those **without** the 4: they are the 8 subsets from before;
- those **with** the 4: to each of the 8 from before you add the 4.

They are two groups with the same number of subsets, so the total doubles: $2 \cdot 8 = 16$. One more element, twice the subsets. It is the inductive step: each domino knocks over the next one.

> [!THEOREM] · Cardinality of the power set (p. 7)
> Let $A$ be a finite set with $\lvert A \rvert = n$. Then $\lvert P(A) \rvert = 2^n$.

**How to read it.** "If $A$ has $n$ elements, the power set of $A$ has $2^n$." The bars mean "how many elements it has". The base case is the empty set: its only subset is the empty set itself, so $P(\emptyset) = \{\emptyset\}$ has one element, and $2^0 = 1$. The inductive step is the doubling with the two groups.

### Elements of elements

The elements of $P(A)$ are bags. This creates two levels, and the quiz questions play exactly on the levels. With $A = \{1, 2, 3\}$:

- $\{1, 2\} \in P(A)$ is true: the bag $\{1, 2\}$ is a subset of $A$, so it is in the bag of the subsets;
- $1 \in P(A)$ is false: 1 is a tile of $A$, not a subset;
- $\{\{1\}, \{2\}\} \subset P(A)$ is true: its two elements, $\{1\}$ and $\{2\}$, are subsets of $A$.

> [!BEYOND] · the subsets of the intersection
> The subsets common to $A$ and $B$ are exactly the subsets of $A \cap B$: in symbols $P(A) \cap P(B) = P(A \cap B)$. With the union it does not work like that: it is exercise 4.

::: try How many elements does $P(\{a, b, c, d, e\})$ have?
The set has 5 elements, so $P$ has $2^5 = 32$.
:::

::: try With $A = \{a, b\}$, which sentences are true: $\emptyset \in P(A)$, $a \in P(A)$, $\{a\} \in P(A)$?
$\emptyset \in P(A)$ is true, because the empty set is a subset of every set. $a \in P(A)$ is false: $a$ is a letter, not a subset. $\{a\} \in P(A)$ is true.
:::

> [!REMEMBER]
> - $P(A)$ has as elements all the subsets of $A$, including the empty set and $A$.
> - If $A$ has $n$ elements, $P(A)$ has $2^n$: each extra element doubles the count.
> - The elements of $P(A)$ are bags: $\{1\} \in P(A)$, but $1 \notin P(A)$.

## The symbols of this lesson

| Symbol | Read | Means | Example |
|---|---|---|---|
| $\in$, $\notin$ | "belongs to", "does not belong to" | is, or is not, an element of | $6 \in \{6\}$ |
| $\subset$ | "is contained in" | is a subset (it may also be equal) | $\{2\} \subset \{2, 4\}$ |
| $\emptyset$ | "empty set" | the set with no elements | $\{1\} \cap \{2\} = \emptyset$ |
| $A \cap B$ | "$A$ intersect $B$" | the elements that are in $A$ and in $B$ | $\{1, 2\} \cap \{2, 3\} = \{2\}$ |
| $A \cup B$ | "$A$ union $B$" | the elements that are in $A$ or in $B$ | $\{1, 2\} \cup \{2, 3\} = \{1, 2, 3\}$ |
| $A \setminus B$ | "$A$ minus $B$" | the elements of $A$ that are not in $B$ | $\{1, 2\} \setminus \{2, 3\} = \{1\}$ |
| $C_X(A)$ | "complement of $A$ in $X$" | the elements of $X$ outside $A$ | $C_{\{1, 2, 3\}}(\{1\}) = \{2, 3\}$ |
| $\lvert A \rvert$ | "cardinality of $A$" | the number of elements of $A$ | $\lvert \{a, b\} \rvert = 2$ |
| $\{A_i\}_{i \in I}$ | "the family of the $A_i$" | a group of subsets, each with a number | $A_1 = \{1\}$, $A_2 = \{2, 3\}$ |
| $\bigcup_{i \in I} A_i$, $\bigcap_{i \in I} A_i$ | "union", "intersection of the $A_i$" | union and intersection of all the parts | $A_1 \cup A_2 \cup A_3$ |
| $\N$, $\Z$, $\Q$, $\R$ | "N", "Z", "Q", "R" | natural numbers, integers, fractions, real numbers | $-3 \in \Z$ |
| $n\Z$ | "n Z" | the integer multiples of $n$ | $6 \in 3\Z$ |
| $S + a$ | "$S$ plus $a$" | every element of $S$ increased by $a$ | $2\Z + 1$ are the odd numbers |
| $[x]$, $\overline x$ | "class of $x$", "$x$ bar" | the part of the partition that contains $x$ | $[0]$ are the even numbers |
| $s(n)$ | "s of $n$" | the successor of $n$ | $s(4) = 5$ |
| $\ge$ | "greater than or equal to" | bigger or equal | $2^3 \ge 4$ |
| $2^n$ | "two to the $n$" | 2 multiplied by itself $n$ times | $2^4 = 16$ |
| $P(A)$ | "power set of $A$" | the set of all the subsets of $A$ | $P(\{a\}) = \{\emptyset, \{a\}\}$ |
| $(a, b)$, $[a, b]$ | "open interval", "closed interval" | the real numbers between $a$ and $b$, endpoints excluded or included | $1 \in [0, 1]$ |
| $\forall$, $\exists$ | "for every", "there exists" | for all, for at least one (in the book's boxes) | $\forall n \in \N,\ 2^n \ge n + 1$ |
| $\neq$ | "different from" | not equal | $0 \neq s(n)$ |

## Towards the exam

The **Discrete Mathematics** exam, part 1 of MDAG, is written and is the same for channels A, B and C. As of 02/10/2026 the 2026/27 rules have not come out yet; the 2025/26 ones say this.

**What the exam looks like**

- **10 multiple-choice questions**, each with 5 answers and only one correct. A correct answer is worth 1 point; a wrong or blank one is worth 0.
- **2 problems** with open answers, divided into several questions with the score written next to them.
- **Threshold.** With fewer than 6 points in the quiz the exam is failed, and the problems are not marked.
- **Pass mark:** at least 18 points in total. **Duration:** 2 hours.
- **Allowed material:** textbook and course notes, and a non-programmable calculator.

| Exam session 2026/27 | Registration on MyUniTo (session "M.D.A.G.1") | Time |
|---|---|---|
| Tue 19/01/2027 | 30/12/2026 – 12/01/2027 | 14:00 |
| Wed 03/02/2027 | 14/01 – 27/01/2027 | 14:00 |

Details and sources in the [course sheet](https://github.com/DonFlammer/unito-computer-science/blob/main/ai_context/MDAG/course.md).

**What you need from this lesson**

1. **Quiz question 1: union and intersection.** It is the question on sets that opens almost every exam session. With two sets: 14/01/2025, 04/02/2025 and 03/02/2026. With three sets: 06/06/2025. With one more set to intersect, "which is a subset of $(A \cup B) \cap X$?": 01/07/2026. With multiples, $n\Z$: 06/06/2026. The wrong answers almost always confuse $\in$ and $\subset$.
2. **Quiz question 2: partitions and coverings.** "Which of these is a partition?" in the test of 10/07/2023 and in the session of 04/02/2025. "Which is a covering but not a partition?" in the session of 07/07/2025. They are solved with the three-check method.
3. **The complement for counting.** In combinatorics problems, "at least one" is often counted as "all minus none": it is the complement. The official solution of the session of 08/09/2025, problem 2, part (b), uses it. Combinatorics comes later in the course.
4. **Induction and Peano's axioms.** In the Discrete Mathematics exam sessions from 2021 to 2026 I found no questions asking for a proof by induction. The principle of induction is instead among the quiz topics of Foundations of Computer Science.

**A real question, read together**

> [!EXAMPLE] Exam session of 07/07/2025, question 2
> The text: "Let $X = \{b, c, f, h, k, m, r, u, v, z\}$. Which of the following is a covering of $X$ but not a partition?
> 1. $\{f, h, k, u, v\} \cup \{b, c, k, r, z\}$;
> 2. $\{b, c, k, r, s, z\} \cup \{f, h, m, u, v\}$;
> 3. $\{b, f, k, m, r\} \cup \{c, h, r, u, v, z\}$;
> 4. $\{b, c, m, v, z\} \cup \{f, h, k, u\}$;
> 5. $\{b, f, k, r, u, z\} \cup \{c, m, t, v\}$."
>
> In practice it asks: which pair of parts covers all ten letters, but with at least one letter in both parts? The symbol $\cup$ between the parts only says that the parts are to be put together.
>
> 1. The letters of the two parts are b, c, f, h, k, r, u, v, z: the $m$ is missing. It is not a covering.
> 2. In the first part there is the $s$, which is not in $X$: the part is not a subset of $X$. Discarded.
> 3. The letters are b, f, k, m, r and c, h, u, v, z, with the $r$ in both: all ten are there. It is a covering, and the repeated $r$ makes it not a partition. **It is the answer.**
> 4. The $r$ is missing: it is not a covering.
> 5. In the second part there is the $t$, which is not in $X$. Discarded.
>
> The method is always the same: first check that every letter of $X$ appears, then that there are no foreign letters, finally look for repeated letters.

**Mistakes to avoid**

- Counting twice in the union an element that is common.
- Writing the complement without saying in which set $X$.
- In De Morgan's laws, bringing the complement inside the brackets without swapping $\cap$ and $\cup$.
- Accepting as a partition a family with an empty part, or checking overlaps only on all the parts together instead of pairwise.
- Accepting a part that contains an element foreign to the set.

> [!EXAM] What to write on the summary sheet
> In the exam you may bring the book and notes, but time is short. From this lesson it is worth having ready: the two De Morgan laws, the three-check method for partitions and the "element or subset" table of lesson D01.

## Quiz

```quiz
Q: (Exam session of 04/02/2025, question 1) Let $A = \{2, 3, 5, 7, 9\}$ and $B = \{1, 4, 5, 8, 9\}$. Then:
- $6 \in A \cup B$
- $\{3, 4\} \in A \cup B$
- $\{2, 8\} \subset A \cap B$
+ $\{5, 9\} = A \cap B$
- $9 \subset A \cap B$
= The numbers that are in both sets are 5 and 9, so $A \cap B = \{5, 9\}$: the correct answer says exactly this. The 6 is in neither set, so it is not in the union. $\{3, 4\} \in A \cup B$ is wrong because the elements of the union are numbers, not sets: $\{3, 4\} \subset A \cup B$ would be true. $\{2, 8\} \subset A \cap B$ is wrong because 2 and 8 are not common. The most tempting is $9 \subset A \cap B$: the 9 is in the intersection, but it is a number, so one writes $9 \in A \cap B$ or $\{9\} \subset A \cap B$.

Q: (Exam session of 03/02/2026, question 1) Let $X = \{a, b, f, h, r, s, t, v, z\}$ and $Y = \{d, g, h, m, p, s, t, x, y\}$. Then:
- $\{b, s, t\} \subset X \cap Y$
+ $f \notin X \cap Y$
- $\{h, t\} = X \cap Y$
- $\{h, s\} \in X \cap Y$
- $s \subset X \cap Y$
= The common letters are $h$, $s$ and $t$, so $X \cap Y = \{h, s, t\}$. The $f$ is in $X$ but not in $Y$, so it is not in the intersection: $f \notin X \cap Y$ is true. $\{b, s, t\} \subset X \cap Y$ is false because the $b$ is not common. $\{h, t\} = X \cap Y$ is the most tempting: $h$ and $t$ are common, but the $s$ is missing, so the equality is false. $\{h, s\} \in X \cap Y$ and $s \subset X \cap Y$ confuse elements and subsets.

Q: (Exam session of 01/07/2026, question 1) Let $A = \{b, f, h, m, n\}$, $B = \{d, g, h, p, q\}$ and $X = \{a, f, g, h, s, x, y\}$. Which of the following is a subset of $(A \cup B) \cap X$?
- $\{\emptyset\}$
+ $\{f, h\}$
- $\{n\}$
- $\{a, g\}$
- $\{b, q\}$
= First the brackets: $A \cup B = \{b, d, f, g, h, m, n, p, q\}$. Then the letters of this union that are also in $X$: $f$, $g$ and $h$. So $(A \cup B) \cap X = \{f, g, h\}$, and $\{f, h\}$ is a subset of it. $\{n\}$ and $\{b, q\}$ are in the union but not in $X$. $\{a, g\}$ is the most tempting: the $g$ is fine, but the $a$ is in $X$ and not in the union. $\{\emptyset\}$ is not a subset, because its only element, the empty set, is not a letter of the set; $\emptyset \subset (A \cup B) \cap X$ would be true.

Q: (Exam session of 06/06/2025, question 1) Let $A = \{3, 4, 7, 9\}$, $B = \{1, 3, 5, 6, 8, 9\}$ and $C = \{2, 4, 5, 8, 9\}$. Then:
- $4 \in A \cap B \cap C$
- $A \subset B \cup C$
- $B \cap C \subset A$
- $A \cap B \subset C$
+ $A \cap B \cap C \neq \emptyset$
= Compute one piece at a time. $A \cap B = \{3, 9\}$, and of these only the 9 is in $C$, so $A \cap B \cap C = \{9\}$, which is not empty: the correct answer is the last one. The 4 is not in $B$, so it is not in the intersection of the three. $A \subset B \cup C$ is false because of the 7, which is neither in $B$ nor in $C$. $B \cap C = \{5, 8, 9\}$ is not contained in $A$, because 5 and 8 are not in $A$. The most tempting is $A \cap B \subset C$: the 9 is in $C$, but the 3 is not.

Q: (Exam session of 06/06/2026, question 1) Recalling that $n\Z = \{nk \mid k \in \Z\}$, say which of the following statements is true.
- $7 \in 3\Z \cup 5\Z$
- $\{12, 20\} \subset 3\Z \cap 4\Z$
- $4\Z \cap 5\Z = \emptyset$
- $8 \in 2\Z \cap 5\Z$
+ $\{10, 21\} \subset 2\Z \cup 7\Z$
= $n\Z$ are the multiples of $n$. 10 is a multiple of 2 and 21 is a multiple of 7, so both are in the union $2\Z \cup 7\Z$: it is the correct answer. 7 is a multiple of neither 3 nor 5. 20 is not a multiple of 3, so $\{12, 20\}$ is not in $3\Z \cap 4\Z$. $4\Z \cap 5\Z$ is not empty: it contains 20, 40 and all the multiples of 20. 8 is even but it is not a multiple of 5. The trap is reading $\cup$ as "both": for the union it is enough to be a multiple of just one.

Q: (Exam session of 04/02/2025, question 2) Let $S = \{a, c, f, h, m, t, v\}$. Which of the following is a partition of $S$?
+ $\{m\} \cup \{a, c, t\} \cup \{f, h, v\}$
- $\{f, m\} \cup \{a, t\} \cup \{c, v\}$
- $\emptyset \cup \{a, f, h, m\} \cup \{c, t, v\}$
- $\{a, c\} \cup \{c, f, h, m\} \cup \{t, v\}$
- $\{a, h, m\} \cup \{h, t\} \cup \{c, f\}$
= Do the three checks. The first family covers all seven letters, has no empty parts and no letter is repeated: it is a partition. The second does not cover the $h$. The third is the most tempting: it covers everything and has no repetitions, but it has an empty part, which a partition cannot have. The fourth repeats the $c$. The fifth repeats the $h$ and does not cover the $v$.

Q: (Written test of 10/07/2023, question 2) Let $S = \{0, 1, 2, 3, 4, 5, 6\}$. Which of the following choices defines a partition of $S$?
- $A = \{4, 6\}$, $B = \{0, 1, 2\}$, $C = \{3\}$
- $A = \{0, 6\}$, $B = \{1, 3, 4, 6\}$, $C = \{2\}$
+ $A = \{1, 3, 5\}$, $B = \{0, 2, 4\}$, $C = \{6\}$
- $A = \{0, 2\}$, $B = \{1, 3, 4, 5\}$, $C = \{4, 6\}$
- $A = \{2, 4, 6\}$, $B = \emptyset$, $C = \{0, 1, 3, 5\}$
= The correct choice splits the seven numbers into odd numbers, even numbers up to 4, and the 6 on its own: each is in one part and no part is empty. In the first the 5 is missing. In the second the 6 is in two parts and the 5 is missing. In the fourth the 4 is in two parts. The last is the most tempting: it covers everything without repetitions, but $B$ is empty.

Q: Let $X = \{1, 2, 3, 4, 5, 6, 7, 8\}$, $A = \{1, 2, 3\}$ and $B = \{3, 4, 5\}$. What is $C_X(A \cup B)$?
- $\{3\}$
+ $\{6, 7, 8\}$
- $\{1, 2, 4, 5, 6, 7, 8\}$
- $\{1, 2, 3, 4, 5\}$
- $\emptyset$
= The complement of the union contains the elements of $X$ that are neither in $A$ nor in $B$. The union is $\{1, 2, 3, 4, 5\}$, so $\{6, 7, 8\}$ is left. By De Morgan it is also $C_X(A) \cap C_X(B)$: $\{4, 5, 6, 7, 8\}$ and $\{1, 2, 6, 7, 8\}$ have exactly $\{6, 7, 8\}$ in common. The answer $\{1, 2, 4, 5, 6, 7, 8\}$ is the complement of the intersection, that is the other law: it is the most tempting. $\{1, 2, 3, 4, 5\}$ is the union itself, and $\{3\}$ the intersection.

Q: The hours of a clock, from 0 to 11, with "successor" equal to "the next hour" (after 11 comes 0). Which of Peano's axioms fails?
- Zero is a number.
- Every number has a successor.
- Two different numbers have different successors.
+ Zero is not the successor of any number.
- None: the clock satisfies all the axioms.
= After 11 comes 0, so zero is the successor of 11: it is exactly what the fourth rule forbids. The others hold: there is zero, every hour has a next hour, and different hours have different next hours. The answer "none" is wrong: if the clock satisfied all the axioms it would be like the natural numbers, while it has only 12 elements and counts in a circle.

Q: You want to prove by induction that $1 + 3 + \dots + (2n - 1) = n^2$. In the inductive step, which equality must you obtain?
- $1 + 3 + \dots + (2n - 1) = n^2$
+ $1 + 3 + \dots + (2n + 1) = (n + 1)^2$
- $1 + 3 + \dots + (2n + 1) = n^2 + 1$
- $1 = 1^2$
- $(2n - 1) + (2n + 1) = 4n$
= In the inductive step you write the formula with $n + 1$ in place of $n$. The last odd number becomes $2(n + 1) - 1 = 2n + 1$ and the right-hand side becomes $(n + 1)^2$. The first answer is the inductive hypothesis: it is used, but it is not the destination, and it is the most tempting. $1 = 1^2$ is the base case.

Q: How many partitions does the set $\{1, 2, 3\}$ have?
- $3$
- $4$
+ $5$
- $6$
- $8$
= They are counted by the number of parts. One part: $\{1, 2, 3\}$. Two parts: a pair and a single element, and the single element can be 1, 2 or 3, so three ways. Three parts: $\{1\}$, $\{2\}$, $\{3\}$. In total $1 + 3 + 1 = 5$. The answer 8 is the number of subsets, which is another thing: partitions are not subsets but ways of splitting the set.
```

## Exercises

::: exercise basic Union, intersection, difference, complement
Take $X = \{1, 2, \dots, 12\}$, $A$ the multiples of 2 in $X$ and $B$ the multiples of 3 in $X$. Compute $A \cap B$, $A \cup B$, $A \setminus B$, $B \setminus A$ and $C_X(A)$.
::: solution
1. Write the sets: $A = \{2, 4, 6, 8, 10, 12\}$ and $B = \{3, 6, 9, 12\}$.
2. In common there are 6 and 12: $A \cap B = \{6, 12\}$. They are the multiples of 6.
3. All together, without repeating 6 and 12: $A \cup B = \{2, 3, 4, 6, 8, 9, 10, 12\}$. They are $6 + 4 - 2 = 8$ elements.
4. From $A$ remove 6 and 12: $A \setminus B = \{2, 4, 8, 10\}$.
5. From $B$ remove 6 and 12: $B \setminus A = \{3, 9\}$.
6. The elements of $X$ outside $A$ are the odd numbers: $C_X(A) = \{1, 3, 5, 7, 9, 11\}$.

Check with De Morgan: $C_X(A \cup B) = \{1, 5, 7, 11\}$. The numbers that are both in $C_X(A)$ and in $C_X(B) = \{1, 2, 4, 5, 7, 8, 10, 11\}$ are exactly 1, 5, 7 and 11.
:::

::: exercise basic The same set, two complements
Compute the complement of $A = \{2, 4\}$ in $X = \{1, 2, 3, 4, 5\}$ and in $Y = \{1, 2, \dots, 10\}$.
::: solution
1. In $X$ the elements different from 2 and 4 are left: $C_X(A) = \{1, 3, 5\}$.
2. In $Y$ what is left is $C_Y(A) = \{1, 3, 5, 6, 7, 8, 9, 10\}$.

The two complements are different: they depend on the set you look in.
:::

::: exercise basic The book's exercise 1.4: equations and sets
$A$ is the set of the solutions of an equation $P(x) = 0$ and $B$ that of the solutions of $Q(x) = 0$. (a) Does the equation $P(x) \cdot Q(x) = 0$ have $A \cap B$ or $A \cup B$ as its solutions? (b) And the system formed by the two equations?
::: solution
1. (a) A product is zero when at least one of the two factors is zero. So $x$ is a solution when $P(x) = 0$ **or** $Q(x) = 0$: the solutions are $A \cup B$.
2. (b) A system asks that the two equations hold **together**. The solutions are the common ones: $A \cap B$.

Check with an example: $P(x) = x - 1$ and $Q(x) = x - 2$, so $A = \{1\}$ and $B = \{2\}$. The equation $(x - 1)(x - 2) = 0$ has solutions 1 and 2, that is $A \cup B$. The system asks $x = 1$ and $x = 2$ together: no solution, and indeed $A \cap B = \emptyset$.
:::

::: exercise intermediate The book's exercise 1.6: the parts of intersection and union
Say whether they are true or false: $P(A \cap B) = P(A) \cap P(B)$ and $P(A \cup B) = P(A) \cup P(B)$.
::: solution
1. **The first is true.** A set $S$ is in $P(A \cap B)$ when it is contained in $A \cap B$, that is when all its elements are in $A$ and in $B$. It is the same as saying: $S$ is contained in $A$ and $S$ is contained in $B$, that is $S$ is in $P(A)$ and in $P(B)$.
2. **The second is false.** A counterexample is enough. Take $A = \{1\}$ and $B = \{2\}$. Then $A \cup B = \{1, 2\}$ and $\{1, 2\}$ is in $P(A \cup B)$.
3. But $\{1, 2\}$ is contained neither in $A$ nor in $B$, so it is not in $P(A) \cup P(B)$. Indeed $P(A) \cup P(B) = \{\emptyset, \{1\}, \{2\}\}$ has 3 elements, while $P(A \cup B)$ has 4.

Only the inclusion $P(A) \cup P(B) \subset P(A \cup B)$ always holds.
:::

::: exercise intermediate The book's exercise 1.7: the second distributive property
Prove that $(A \cap B) \cup C = (A \cup C) \cap (B \cup C)$, and check it with $A = \{1, 2\}$, $B = \{2, 3\}$, $C = \{4\}$.
::: solution
1. Check with numbers. On the left: $A \cap B = \{2\}$, and with $C$ you get $\{2, 4\}$. On the right: $A \cup C = \{1, 2, 4\}$ and $B \cup C = \{2, 3, 4\}$, in common $\{2, 4\}$. Equal.
2. First inclusion. Take $x$ on the left: it is in $A \cap B$ or in $C$. If it is in $A \cap B$, it is in $A$ and in $B$, so in $A \cup C$ and in $B \cup C$. If it is in $C$, it is in both sets with $C$. In any case it is on the right.
3. Second inclusion. Take $x$ on the right: it is in $A \cup C$ and in $B \cup C$. If it is in $C$, it is on the left. If it is not in $C$, then to be in $A \cup C$ it must be in $A$, and to be in $B \cup C$ it must be in $B$: so it is in $A \cap B$, and again on the left.
4. With the two inclusions the two sets are equal.
:::

::: exercise intermediate The book's exercise 1.9: the second De Morgan law
Prove that $C_X(A \cup B) = C_X(A) \cap C_X(B)$.
::: solution
1. Take $x$ in $C_X(A \cup B)$. Then $x$ is in $X$ and it is not in $A \cup B$, that is it is neither in $A$ nor in $B$.
2. Since it is not in $A$, it is in $C_X(A)$. Since it is not in $B$, it is in $C_X(B)$. So it is in the intersection $C_X(A) \cap C_X(B)$.
3. Conversely, take $x$ in $C_X(A) \cap C_X(B)$. It is in $X$, it is not in $A$ and it is not in $B$.
4. Then it is in neither of the two sets, so it is not in their union: it is in $C_X(A \cup B)$.
5. With the two inclusions, the two sets are equal.
:::

::: exercise intermediate The book's exercise 1.11: De Morgan with the difference
Prove that $X \setminus (A \cap B) = (X \setminus A) \cup (X \setminus B)$, also when $A$ and $B$ are not inside $X$. Check with $X = \{1, \dots, 10\}$, $A = \{1, 2, 3, 4\}$, $B = \{3, 4, 5, 6\}$.
::: solution
1. Check with numbers. $A \cap B = \{3, 4\}$, so on the left $\{1, 2, 5, 6, 7, 8, 9, 10\}$ is left. On the right: $X \setminus A = \{5, 6, 7, 8, 9, 10\}$ and $X \setminus B = \{1, 2, 7, 8, 9, 10\}$, and together they give $\{1, 2, 5, 6, 7, 8, 9, 10\}$. Equal.
2. Take $x$ on the left: it is in $X$ and it is not common to $A$ and $B$. So it is not in $A$ or it is not in $B$: in the first case it is in $X \setminus A$, in the second in $X \setminus B$.
3. Take $x$ on the right: it is in $X$, and it is not in $A$ or it is not in $B$. In both cases it cannot be in $A \cap B$, so it is on the left.
4. The proof never used that $A$ and $B$ are inside $X$: the law holds for the difference in general. In the same way $X \setminus (A \cup B) = (X \setminus A) \cap (X \setminus B)$.
:::

::: exercise intermediate The book's exercise 1.12
Prove that $(A \cup B) \setminus A = C_B(A \cap B)$. The book writes the left-hand side as $A \cup B \setminus A$.
::: solution
1. On the left there are the elements that are in $A$ or in $B$, but not in $A$. Not being in $A$, they must be in $B$: they are the elements of $B$ that are not in $A$.
2. On the right, $A \cap B$ is contained in $B$, so the complement in $B$ makes sense. It contains the elements of $B$ that are not in $A \cap B$. An element of $B$ is in $A \cap B$ exactly when it is in $A$: so they are the elements of $B$ that are not in $A$.
3. The two sides describe the same set, $B \setminus A$.

Check: with $A = \{1, 2, 3, 4\}$ and $B = \{3, 4, 5, 6\}$, on the left $\{1, 2, 3, 4, 5, 6\} \setminus A = \{5, 6\}$, on the right $B \setminus \{3, 4\} = \{5, 6\}$.
:::

::: exercise intermediate A sum of powers of 2, by induction
Prove that for every natural number $n$ it holds that $1 + 2 + 4 + \dots + 2^n = 2^{n+1} - 1$.
::: solution
1. First the numbers: $1 = 2 - 1$; $1 + 2 = 3 = 4 - 1$; $1 + 2 + 4 = 7 = 8 - 1$. It works.
2. **Base case**, $n = 0$: on the left there is only $2^0 = 1$, on the right $2^1 - 1 = 1$. Equal.
3. **Inductive hypothesis:** for some $n$ it holds that $1 + 2 + \dots + 2^n = 2^{n+1} - 1$.
4. **Inductive step.** You must arrive at $1 + 2 + \dots + 2^n + 2^{n+1} = 2^{n+2} - 1$. By the hypothesis, the first terms add up to $2^{n+1} - 1$, so the left-hand side is $2^{n+1} - 1 + 2^{n+1}$.
5. Twice $2^{n+1}$ is $2 \cdot 2^{n+1} = 2^{n+2}$. So the left-hand side is $2^{n+2} - 1$, as you wanted.
6. **Conclusion:** by induction the formula holds for every natural number $n$.

In Foundations of Computer Science the same formula says that the binary number 11111, five 1s, is worth $2^5 - 1 = 31$.
:::

::: exercise intermediate The book's exercise 1.14: all the partitions of four letters
Find all the partitions of the set $A = \{a, b, c, d\}$.
::: solution
I count them by the number of parts.

1. **One part:** $\{a, b, c, d\}$. One partition.
2. **Two parts, one letter alone and three together:** the single letter can be $a$, $b$, $c$ or $d$. Four partitions, for example $\{a\}$ and $\{b, c, d\}$.
3. **Two parts of two letters:** the partner of $a$ can be $b$, $c$ or $d$, and the other two letters form the other part. Three partitions: $\{a, b\}$ and $\{c, d\}$; $\{a, c\}$ and $\{b, d\}$; $\{a, d\}$ and $\{b, c\}$.
4. **Three parts, a pair and two letters alone:** it is enough to choose the pair, and the pairs of four letters are six ($ab$, $ac$, $ad$, $bc$, $bd$, $cd$). Six partitions, for example $\{a, b\}$, $\{c\}$, $\{d\}$.
5. **Four parts:** $\{a\}$, $\{b\}$, $\{c\}$, $\{d\}$. One partition.

In total $1 + 4 + 3 + 6 + 1 = 15$ partitions.
:::

::: exercise intermediate The book's exercise 1.15: the lines through the origin
Are the lines of the plane through the origin $O$ a covering of the plane? A partition?
::: solution
1. **Covering: yes.** Take a point $P$ of the plane. If it is different from $O$, the line through $O$ and $P$ is one of the lines of the family, and it contains $P$. If $P$ is exactly $O$, it is on all of them. So the union of the lines is the whole plane.
2. **Partition: no.** Two different lines through the origin have the point $O$ in common: they are not disjoint. The third check fails.

If you remove the origin from every line and from the plane, the lines without $O$ become a partition of the plane without $O$.
:::

::: exercise hard The book's exercise 1.16: splitting the subsets by size
Let $X$ be a set with $n$ elements and, for every $k$ from 0 to $n$, let $P_k$ be the set of the subsets of $X$ with $k$ elements. Prove that the $P_k$ are a partition of $P(X)$. How many elements does the quotient set have?
::: solution
1. First an example, with $X = \{1, 2, 3\}$: $P_0 = \{\emptyset\}$, $P_1$ has the three subsets with one element, $P_2$ the three with two, $P_3 = \{X\}$. It is the table of the section on the power set.
2. **They cover everything.** Every subset of $X$ has a certain number $k$ of elements, between 0 and $n$, and so it is in $P_k$.
3. **No empty part.** For every $k$ from 0 to $n$ there is a subset with $k$ elements: take any $k$ elements of $X$. So $P_k$ is not empty.
4. **No overlap.** A subset has a single number of elements, so it cannot be in two parts $P_j$ and $P_k$ with $j$ different from $k$.
5. **The quotient** has as elements the parts $P_0, P_1, \dots, P_n$: they are $n + 1$.

With $X = \{1, 2, 3\}$ the quotient has 4 elements, and the sizes of the parts are 1, 3, 3, 1: 8 subsets in total, as it must be.
:::

::: exercise hard The book's exercise 1.5
Prove that $A \cap B = \emptyset$ exactly when $P(A) \cap P(B) = \{\emptyset\}$.
::: solution
1. From exercise 4 you know that $P(A) \cap P(B) = P(A \cap B)$. So you must prove: $A \cap B$ is empty exactly when $P(A \cap B) = \{\emptyset\}$.
2. If $A \cap B$ is empty, its only subset is the empty set: $P(\emptyset) = \{\emptyset\}$.
3. If instead $A \cap B$ contains an element $x$, then $\{x\}$ is one of its subsets, and $P(A \cap B)$ contains at least $\emptyset$ and $\{x\}$: it is not $\{\emptyset\}$.
4. The two sentences are true in exactly the same cases.

Careful: $\{\emptyset\}$ is not the empty set. It has one element, the empty set, and indeed the empty set is a subset common to any pair of sets.
:::

## Review questions

::: question What is the difference between intersection and union? Give an example.
The intersection contains the elements that are in both sets, the union those that are in at least one. With $\{1, 2\}$ and $\{2, 3\}$: intersection $\{2\}$, union $\{1, 2, 3\}$.
:::

::: question What does it mean that two sets are disjoint?
That they have no elements in common: their intersection is empty. For example the even and the odd numbers.
:::

::: question What is the difference between $A \setminus B$ and $C_X(A)$?
$A \setminus B$ removes from $A$ the elements of $B$, and it can be done with any two sets. $C_X(A)$ is the difference $X \setminus A$ when $A$ is contained in $X$: it is everything of $X$ that is outside $A$. It depends on $X$.
:::

::: question How do you remember De Morgan's laws?
The complement enters the brackets and swaps union and intersection. Outside the union means outside both; outside the intersection means outside at least one.
:::

::: question What does Peano's fifth axiom say, and what does it have to do with induction?
It says that a set of natural numbers that contains zero and, with every number, also its successor, contains all the natural numbers. The base case puts zero in the set of the numbers for which the property is true, and the inductive step says that this set passes to the successor: so it contains all the natural numbers.
:::

::: question Why does a set with $n$ elements have $2^n$ subsets?
Because for each element you choose "in" or "out", and the choices multiply: $2 \cdot 2 \cdots 2$, $n$ times. Said with induction: adding an element, the subsets split into those without and those with the new element, and the count doubles.
:::

::: question What is the difference between a covering and a partition?
In a covering the parts cover the whole set, but they may overlap. In a partition, in addition, no part is empty and two different parts have no elements in common: each element is in one part only.
:::

::: question What is the quotient set of a partition?
It is the set whose elements are the parts of the partition. For the partition of the integers into even and odd numbers it has two elements: the even numbers, which can be written $[0]$, and the odd numbers, $[1]$.
:::

## Glossary

```glossary
Intersection | The set of the elements that are in both sets: $A \cap B$. Example: $\{1, 2\} \cap \{2, 3\} = \{2\}$.
Union | The set of the elements that are in at least one of the two sets: $A \cup B$. Common elements are counted once.
Disjoint | Two sets with no elements in common: their intersection is empty.
Difference | $A \setminus B$: the elements of $A$ that are not in $B$. The order matters.
Complement | If $A$ is contained in $X$, the complement $C_X(A)$ is the elements of $X$ outside $A$. It depends on $X$.
De Morgan's laws | The complement of the union is the intersection of the complements, and the complement of the intersection is the union of the complements.
Distributive properties | $(A \cup B) \cap C = (A \cap C) \cup (B \cap C)$, and the same rule with union and intersection swapped.
Axiom | A rule that is not proved and is accepted as a starting point.
Peano's axioms | The five rules that describe the natural numbers: zero, the successor, no return to zero, no loops, and the principle of induction.
Successor | The number that comes right after: $s(n) = n + 1$.
Principle of induction | If a set of natural numbers contains zero and always passes to the successor, it contains all the natural numbers.
Inductive hypothesis | In the inductive step, the property for $n$, which is assumed true and used to reach $n + 1$.
Power set | $P(A)$, the set of all the subsets of $A$. If $A$ has $n$ elements, $P(A)$ has $2^n$.
Family of sets | A group of sets with a label each, written $\{A_i\}_{i \in I}$.
Covering | A family of subsets of $X$ whose union is the whole of $X$. The parts may overlap.
Partition | A covering with non-empty, pairwise disjoint parts: each element is in one part only.
Quotient set | The set whose elements are the parts of a partition.
Representative | Any element of a part; the part is written $[x]$, "the part containing $x$".
```

## Checklist

```checklist
- I can compute intersection, union and difference of two or three sets written as lists.
- I can tell $x \in A \cap B$ from $\{x\} \subset A \cap B$.
- I can compute the complement of a subset and I know that it depends on the starting set.
- I can state the two De Morgan laws and check them on an example.
- I can prove an equality between sets with the double inclusion.
- I can explain Peano's five axioms in words and find the one that fails in an example.
- I can do a proof by induction: base case, hypothesis, inductive step, conclusion.
- I can count the subsets of a set and tell the elements of $P(A)$ from its subsets.
- I can recognise a covering and a partition with the three checks.
- I can say what the quotient set of a partition is.
```

## Sources

- A. Mori, *Lezioni di Matematica Discreta*, 2nd edition, the channel B textbook: chapter 1 "Insiemi", pp. 5–13 (Peano's axioms, theorem 1.10 and the examples on p. 7, definitions 1.13, 1.14, 1.16, 1.17, 1.19, 1.21 and 1.22, proposition 1.15, theorem 1.18, note 1.20) and exercises 1.4–1.7, 1.9, 1.11, 1.12, 1.14–1.16 (pp. 14–15). The definitions and statements in the boxes are quoted from the book, translated. The two misprints in the covering examples (p. 11 and p. 12) are pointed out in the box on coverings.
- Topics of the lesson of 02/10/2026 on the channel B Moodle: the complement of a subset, De Morgan's laws, the natural numbers and Peano's axioms, the principle of induction as a proof method, the power set and its cardinality, coverings and partitions.
- Quizzes and problems of the Discrete Mathematics exam sessions, with the official solutions, on the Moodle page MDAG1 2025/26 ([id 3501](https://informatica.i-learn.unito.it/course/view.php?id=3501), open to guests) and in the collection of quizzes 2021–2025: test of 10/07/2023 (question 2); sessions of 14/01/2025, 04/02/2025 (questions 1 and 2), 06/06/2025 (question 1), 07/07/2025 (question 2), 08/09/2025 (problem 2), 03/02/2026, 06/06/2026 and 01/07/2026 (question 1).
- 2026/27 exam calendar and exam rules: [course sheet](https://github.com/DonFlammer/unito-computer-science/blob/main/ai_context/MDAG/course.md).
- V. Bocchino, *Rigurgiti di Unicorno*, Discrete Mathematics notes written by a student on Mori's book (licence CC BY-NC-SA 4.0, [GitHub](https://github.com/bocchinovalentino/rigurgiti_di_unicorno)): a ready-made summary, not official.
- The explanations in words, the examples with the tiles, the "Refresher" and "Try it" boxes, the undated quiz questions and the exercises without the book's number belong to these notes.
