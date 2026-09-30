---
course: MDAG
module: AG
lesson: L05
title: Vector spaces I
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Linear Algebra and Geometry · Channels A, B and C · Lesson L05
description: >-
  Notes on lesson L05 of Linear Algebra and Geometry (MDAG, part 2): Euclidean space, sum of vectors and product by
  a scalar, groups, fields, definition of vector space and examples (polynomials, functions, sequences), with
  exam-style quizzes and worked exercises.
lede: >-
  From the arrows of the plane to a much more general idea: the Euclidean space $\R^n$ with the sum and the product by
  a scalar, groups and fields, and finally vector spaces, that is all the sets in which you calculate with the same
  rules as in $\R^n$. You will find out that polynomials, functions and sequences are vectors too, and you will learn
  to recognise when a set is not a vector space.
material: handouts
facts:
  Handouts: lesson 5 · pp. 20–25
  Book: Martelli, §1.5, §2.1 and §2.2
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 90–120 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 5 "Spazi vettoriali I"; B. Martelli, Geometria e algebra lineare, §1.5, §2.1 and §2.2.1–2.2.4
italian_file: L05_spazi_vettoriali_1.html
html_notes: notes/MDAG/L05_vector_spaces_1.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L05_spazi_vettoriali_1.md
---

## In brief

- The **Euclidean space** $\R^n$ is the set of ordered lists $(x_1, \dots, x_n)$ of $n$ real numbers. Each element can be seen as a **point** or as a **vector**, an arrow that starts at the origin.
- In $\R^n$ there are two operations, always done **component by component**: the **sum** $x + y$ (in $\R^2$ it is the parallelogram rule) and the **product by a scalar** $\lambda x$ (it stretches, shrinks or flips the vector).
- A **group** is a set with an operation that has an identity element, is associative and in which every element has an inverse. $(\Z, +)$ is a group, $(\N, +)$ is not.
- A **field** is a set with sum and product in which you can do the four operations, dividing only by elements other than $0$. $\Q$, $\R$ and $\C$ are fields, $\Z$ is not; $\{0, 1\}$ with $1 + 1 = 0$ is a field too.
- A **vector space** over a field $\K$ is a set $V$ with a sum and a product by a scalar that respect **five axioms**: the same calculation rules as $\R^n$.
- There are **two zeros** not to be confused: the $0$ of the field and the origin $0_V$ of the space. Proposition 5.5 links them: $0v = 0_V$.
- $\K^n$ (also $\C^n$), sequences, functions $[0, 1] \to \K$ and polynomials $\K[x]$ are vector spaces: in all of them you add and multiply "one piece at a time".
- To prove that a set is **not** a vector space one counterexample is enough: the zero is missing, or a sum or a multiple leaves the set. Polynomials of degree exactly $2$, for example, are not one.
- At the exam you need them in the multiple-choice questions: "does $\C$ admit a structure of vector space over $\R$?" (exam of 07/02/2025) and, from lesson L06, "which of these sets is a subspace?".

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## Why vector spaces (p. 20)

The course studies geometric objects (points, lines, planes) that live in $\R^n$. The handouts, though, immediately take one more step: instead of working only with $\R^n$, they consider **all the sets that have the same algebraic properties as $\R^n$**. These sets are called **vector spaces**.

To see why this pays off, look at three objects that are very different from each other.

| | arrows of the plane | polynomials | functions on $[0, 1]$ |
|---|---|---|---|
| two elements | $(1, 2)$ and $(3, 1)$ | $x^2 + 1$ and $2x - 3$ | $f(x) = x^2$ and $g(x) = 1 - x$ |
| their sum | $(4, 3)$ | $x^2 + 2x - 2$ | $x^2 - x + 1$ |
| twice the first | $(2, 4)$ | $2x^2 + 2$ | $2x^2$ |
| the "zero" element | $(0, 0)$ | the zero polynomial | the function that is always $0$ |

In all three cases:

- adding two elements you get an element **of the same kind**;
- multiplying by a number you stay **in the same kind**;
- the **same calculation rules** hold, for example $2(a + b) = 2a + 2b$.

If you prove a theorem using **only** those rules, the theorem holds in one go for arrows, for polynomials, for functions and for everything that respects the same rules. That is the advantage of abstraction. The handouts mention three examples you will use often: the **sets of solutions of linear systems** (lessons L11–L13), **spaces of functions** (in this lesson) and **spaces of matrices** (lesson L06).

## The Euclidean space $\R^n$ (pp. 20–21)

In the Cartesian plane a point is determined by two numbers, for example $(2, 3)$: 2 steps to the right and 3 up. In space you need three, $(x, y, z)$. Euclidean space generalises this idea to any number of coordinates.

> [!DEF] 5.1 · Euclidean space
> Let $n \ge 1$ be a natural number. The **$n$-dimensional Euclidean space** is the set
> $$\R^n = \underbrace{\R \times \cdots \times \R}_{n \text{ times}}.$$
> Its elements are sequences $(x_1, \dots, x_n)$ of $n$ real numbers.

Piece by piece:

- $\R \times \R$ is the **Cartesian product**: the set of all **ordered pairs** $(a, b)$ with $a, b \in \R$. With $n$ factors you get the ordered lists of $n$ numbers, also called **$n$-tuples**.
- Here "sequence" means a **finite and ordered** list of $n$ numbers (in lesson L01 sequences were infinite). The order matters: $(1, 2) \neq (2, 1)$.
- $\R^2$ is the **Cartesian plane**, $\R^3$ the **Cartesian space**. For $n \ge 4$ you can no longer draw, but you calculate in the same way: $(1, 0, -2, 5)$ is an element of $\R^4$.
- The element $(0, \dots, 0)$ is called the **origin** and is written $0$ or $O$.

### Point or vector?

An element $x \in \R^n$ can be read in two ways: as a **point**, or as a **vector**, that is an arrow that starts at the origin and ends at $x$. They are two ways of drawing the same list of numbers. Usually the letters $P, Q$ are used for points and $v, w$ for vectors.

```graph
title: Two elements of $\R^2$: $(2, 3)$ drawn as a point and $(-3, 1)$ drawn as a vector
x: -4 4
y: -1 4
point: 2 3 | amber | $P = (2, 3)$ | e
vector: -3 1 | accent | thick | $v = (-3, 1)$ | n
```

The handouts often write vectors **vertically**:

$$x = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}.$$

This way of writing is called a **column vector**, and the numbers $x_1, \dots, x_n$ are the **coordinates** of $x$. The reason for writing it vertically will become clear with the product of matrices (lesson L08). To save space, in these notes vectors often appear as rows too, like $(1, 2, 3)$: it is the same vector.

> [!NOTE] How the exam papers write it
> In the exam papers a column vector written as a row often appears as ${}^t(1, 2, 3)$ or $t(1, 2, 3)$: the $t$ stands for "transpose" and means "this row, put vertically". The transpose is covered in lesson L08.

### The sum of vectors (pp. 20–21)

> [!DEF] Sum of vectors (p. 20)
> The space $\R^n$ has a sum defined **component by component**: if
> $$x = \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix}, \qquad y = \begin{pmatrix} y_1 \\ \vdots \\ y_n \end{pmatrix}, \qquad \text{then} \qquad x + y = \begin{pmatrix} x_1 + y_1 \\ \vdots \\ x_n + y_n \end{pmatrix}.$$

In words: you add the first coordinates together, the second ones together, and so on.

> [!EXAMPLE] · sums in $\R^2$ and in $\R^4$
> $$\begin{pmatrix} 1 \\ 2 \end{pmatrix} + \begin{pmatrix} 3 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 + 3 \\ 2 + 1 \end{pmatrix} = \begin{pmatrix} 4 \\ 3 \end{pmatrix}, \qquad \begin{pmatrix} 1 \\ 0 \\ -2 \\ 5 \end{pmatrix} + \begin{pmatrix} 3 \\ 1 \\ 2 \\ -5 \end{pmatrix} = \begin{pmatrix} 4 \\ 1 \\ 0 \\ 0 \end{pmatrix}.$$

In $\R^2$ this sum coincides with the **parallelogram rule**, the one used in physics to add forces. Draw $v$ and $w$ starting from the origin and complete the parallelogram that has them as sides: the diagonal that starts from the origin is $v + w$. Or, which is the same: move $w$ so that it starts from the tip of $v$, and its tip lands exactly on $v + w$.

```graph
title: The sum $v + w$ is the diagonal of the parallelogram built on $v = (1, 2)$ and $w = (3, 1)$
x: -1 5
y: -1 4
polygon: 0 0 1 2 4 3 3 1 | amber | faint
segment: 1 2 4 3 | blue | dashed
segment: 3 1 4 3 | accent | dashed
vector: 4 3 | amber | thick | $v + w = (4, 3)$ | n
vector: 1 2 | accent | thick | $v$ | nw
vector: 3 1 | blue | thick | $w$ | se
```

> [!PITFALL] Only vectors with the same number of coordinates
> You can only add vectors of the **same** $\R^n$: $(1, 2) + (1, 2, 3)$ makes no sense, because the third coordinate has no partner.

### The product by a scalar (p. 21)

> [!DEF] Product by a scalar (p. 21)
> Given $x \in \R^n$ and a scalar $\lambda \in \R$, we define
> $$\lambda x = \begin{pmatrix} \lambda x_1 \\ \vdots \\ \lambda x_n \end{pmatrix}.$$
> The real number $\lambda$ is called a **scalar**; the operation $x \mapsto \lambda x$ is called **product by a scalar**.

Piece by piece:

- $\lambda$ is the Greek letter *lambda*: it denotes a **number**, not a vector. To tell them apart, the numbers that multiply vectors are called **scalars**.
- Every coordinate is multiplied by the **same** number $\lambda$.
- $x \mapsto \lambda x$ is read "$x$ goes to $\lambda x$": to every vector the operation associates its multiple.

Geometrically, $\lambda x$ is obtained by **stretching or shrinking** $x$ by a factor $|\lambda|$ and, if $\lambda < 0$, **reversing its direction**. Try with $v = (1, 2)$:

| $\lambda$ | $\lambda v$ | what happens |
|---:|---|---|
| $2$ | $(2, 4)$ | same direction, twice as long |
| $\frac 12$ | $(\frac 12, 1)$ | same direction, half as long |
| $1$ | $(1, 2)$ | stays the same |
| $0$ | $(0, 0)$ | becomes the zero vector |
| $-1$ | $(-1, -2)$ | opposite direction, same length: it is the **opposite** $-v$ |
| $-2$ | $(-2, -4)$ | opposite direction, twice as long |

All the multiples of $v$ lie on the **line** through the origin and $v$, here the line $y = 2x$. This remark comes back in lesson L06, where the set of the multiples of $v$ will be called $\Span(v)$.

```graph
title: The multiples of $v = (1, 2)$ all lie on the line $y = 2x$
x: -4 4
y: -5 5
line: 0 0 2.3 4.6 | grey | dashed | $y = 2x$ | e
vector: 2 4 | blue | $2v$ | e
vector: 1 2 | accent | thick | $v$ | w
vector: -2 -4 | pink | $-2v$ | e
```

Try it yourself. In the tool below you can drag the tips of $u$ and $v$. In the "u + v" mode you see the parallelogram; in the "multiple" mode move the slider $\lambda$: with $\lambda = -2$ you find Figure 6 of the handouts again, with $\lambda$ between $0$ and $1$ the vector gets shorter, with negative $\lambda$ it flips, with $\lambda = 0$ it shrinks to the origin.

```widget vettori
title: Sum and product by a scalar in the plane
u: 1 2
v: 3 1
modo: somma
modi: somma multiplo
lambda: -2
```

### The calculation rules of $\R^n$

The two operations of $\R^n$ respect eight rules. The handouts recall them in Definition 5.4 ("the same properties as the corresponding operations of Euclidean space"); Martelli's book lists them in §2.1.5. Here they are, checked with $v = (1, 2)$, $w = (3, -1)$, $u = (0, 5)$, $\lambda = 2$ and $\mu = 3$:

| Rule | Check with numbers |
|---|---|
| $v + w = w + v$ | $(1, 2) + (3, -1) = (4, 1) = (3, -1) + (1, 2)$ |
| $(v + w) + u = v + (w + u)$ | $(4, 1) + (0, 5) = (4, 6)$ and $(1, 2) + (3, 4) = (4, 6)$ |
| $v + 0 = v$ | $(1, 2) + (0, 0) = (1, 2)$ |
| $v + (-v) = 0$ | $(1, 2) + (-1, -2) = (0, 0)$ |
| $\lambda(v + w) = \lambda v + \lambda w$ | $2 \cdot (4, 1) = (8, 2)$ and $(2, 4) + (6, -2) = (8, 2)$ |
| $(\lambda + \mu) v = \lambda v + \mu v$ | $5 \cdot (1, 2) = (5, 10)$ and $(2, 4) + (3, 6) = (5, 10)$ |
| $(\lambda\mu) v = \lambda(\mu v)$ | $6 \cdot (1, 2) = (6, 12)$ and $2 \cdot (3, 6) = (6, 12)$ |
| $1v = v$ | $1 \cdot (1, 2) = (1, 2)$ |

Each rule holds because it holds for real numbers, one coordinate at a time. They are exactly the rules that the definition of vector space will require of every set that wants to "behave like $\R^n$".

## Groups (pp. 21–22)

To say what a vector space is you need two algebraic structures: the **group**, for vectors with the sum, and the **field**, for scalars. We start with the group.

Think of the integers with the sum. Adding two integers you get an integer. The $0$ changes nothing: $0 + 7 = 7$. Every integer has an opposite that "cancels" the sum: $7 + (-7) = 0$. And you can move the brackets: $(2 + 3) + 4 = 2 + (3 + 4) = 9$. With the natural numbers instead something breaks: the equation $3 + x = 0$ has no solution in $\N$, because the opposite of $3$ is missing. The definition of group puts exactly these properties down in black and white.

> [!DEF] 5.2 · Group
> A **group** is a set $G$ equipped with a binary operation, that is a function that associates with every pair $a, b$ of elements in $G$ a new element of $G$ that we denote by $a * b$. The symbol $*$ denotes the binary operation. The operation must satisfy the following three axioms:
> 1. $\exists\, e \in G : e * a = a * e = a,\ \forall a \in G$ (existence of the identity element $e$);
> 2. $a * (b * c) = (a * b) * c,\ \forall a, b, c \in G$ (associative property);
> 3. $\forall a \in G,\ \exists\, a' \in G : a * a' = a' * a = e$ (existence of the inverse).
>
> The group $G$ is **commutative** if the commutative property $a * b = b * a,\ \forall a, b \in G$ also holds.

Piece by piece:

- **Binary operation**: it takes two elements of $G$ and returns one **still in $G$**. If the result can leave $G$, it is not an operation on $G$: subtraction is not an operation on $\N$, because $2 - 5 = -3 \notin \N$.
- The symbol $*$ is a placeholder: in concrete cases it is the sum $+$, the product $\cdot$ or the composition of functions $\circ$.
- **Axiom 1**: there is an element $e$ that changes nothing, the **same** one for all $a$. For the sum it is $0$, for the product it is $1$.
- **Axiom 2**: the brackets can be moved, and so also dropped: $a * b * c$ has only one meaning.
- **Axiom 3**: every $a$ has a "canceller" $a'$, which depends on $a$: combined with $a$ it gives back $e$. For the sum $a'$ is the opposite $-a$, for the product it is the inverse $\frac 1a$.
- **Commutative**: the order does not matter. Not all groups are commutative (box further down), but the groups of this course with the sum all are.

Here are the examples and counterexamples of the handouts, with the reason.

| Set and operation | identity $e$ | inverse of $a$ | commutative group? |
|---|---|---|---|
| $(\Z, +)$ | $0$ | $-a$ | yes |
| $(\Q, +)$, $(\R, +)$, $(\C, +)$ | $0$ | $-a$ | yes |
| $(\Q \setminus \{0\}, \cdot)$, $(\R \setminus \{0\}, \cdot)$, $(\C \setminus \{0\}, \cdot)$ | $1$ | $a^{-1} = \frac 1a$ | yes |
| $(\N, +)$ | $0$ | missing: for $a = 1$ you would need $-1 \notin \N$ | **no**, axiom 3 fails |
| $(\Z, \cdot)$ and $(\Z \setminus \{0\}, \cdot)$ | $1$ | missing: for $a = 2$ you would need $\frac 12 \notin \Z$ | **no**, axiom 3 fails |

> [!EXAMPLE] · the calculations in $(\Q \setminus \{0\}, \cdot)$
> - The operation stays in the set: the product of two fractions different from $0$ is a fraction different from $0$, for example $\frac 23 \cdot \left(-\frac 94\right) = -\frac{18}{12} = -\frac 32$.
> - The identity is $e = 1$: $1 \cdot \frac 23 = \frac 23$.
> - The inverse of $-\frac 34$ is $-\frac 43$, because $\left(-\frac 34\right)\left(-\frac 43\right) = \frac{12}{12} = 1$.
> - The $0$ has to be removed because it **has no inverse**: $0 \cdot x = 0 \neq 1$ for every $x$.

> [!PITFALL] Removing zero is needed for the product, not for the sum
> $\Q \setminus \{0\}$ is a group with the product, but **not** with the sum: $1 + (-1) = 0$ leaves the set, and the identity element $0$ is missing.

> [!BEYOND] · uniqueness, cancellation and a non-commutative group
> From Martelli's book (§1.5.1), three useful facts.
> - **The inverse is unique.** If $a'$ and $a''$ are both inverses of $a$, then $a' = a' * e = a' * (a * a'') = (a' * a) * a'' = e * a'' = a''$.
> - **You can cancel.** From $a * b = a * c$ follows $b = c$: just combine both sides on the left with the inverse of $a$ and use associativity. With the sum: from $v + x = v + y$ follows $x = y$. It will be needed shortly, in Proposition 5.5.
> - **A non-commutative group.** The permutations of $\{1, 2, 3\}$ with composition form a group (the symmetric group $S_3$, studied in Discrete Mathematics) in which the order matters: in general $\sigma \circ \tau \neq \tau \circ \sigma$.

## Fields (p. 22)

In the number sets $\Z$, $\Q$, $\R$ and $\C$ there are **two** operations, $+$ and $\cdot$. The structure that puts them together is the **field**. The idea: a field is a set in which you can do **the four operations** with the usual rules, dividing only by elements other than $0$. In $\Q$ the equation $2x = 1$ has the solution $x = \frac 12$; in $\Z$ it does not.

> [!DEF] 5.3 · Field
> A **field** is a set $A$ equipped with two binary operations $+$ and $\cdot$ that satisfy these axioms:
> 1. $A$ is a commutative group with the operation $+$, with identity element $0_A$;
> 2. $A \setminus \{0_A\}$ is a commutative group with the operation $\cdot$, with identity element $1_A$;
> 3. the distributive property $a \cdot (b + c) = (a \cdot b) + (a \cdot c),\ \forall a, b, c \in A$ holds.

Piece by piece:

- **Axiom 1**: it contains four rules of the sum. There is the zero $0_A$, every element has an opposite, the sum is associative and commutative.
- **Axiom 2**: it contains four rules of the product, but **only for the non-zero elements**. The product of two non-zero elements is non-zero, there is the one $1_A$ (which is therefore different from $0_A$), every **non-zero** element has an inverse, the product is associative and commutative.
- **Axiom 3**: it links the two operations.
- They are the same rules as the nine properties of $\R$ from lesson L01 (Proposition 1.5), grouped differently: properties 1–4 are in axiom 1, 5–8 in axiom 2, 9 is axiom 3.

| Set, with $+$ and $\cdot$ | is it a field? | why |
|---|---|---|
| $\Q$, $\R$, $\C$ | yes | all the rules hold; for example the inverse of $\frac ab \neq 0$ is $\frac ba$ |
| $\Z$ | no | $2$ has no inverse for the product: $\frac 12 \notin \Z$ |
| $\N$ | no | already the sum does not form a group: $-1$ is missing |
| $\R \setminus \{0\}$ | no | the sum leaves the set: $1 + (-1) = 0$ |
| $\{0, 1\}$ with $1 + 1 = 0$ | yes | it is Exercise 5.9, below |

### A field with only two elements

In Exercise 5.9 the handouts define on $\K = \{0, 1\}$ these two operations:

| $+$ | $0$ | $1$ |
|---|---|---|
| $0$ | $0$ | $1$ |
| $1$ | $1$ | $0$ |

| $\cdot$ | $0$ | $1$ |
|---|---|---|
| $0$ | $0$ | $0$ |
| $1$ | $0$ | $1$ |

The only unusual rule is $1 + 1 = 0$. Read $0$ as "even" and $1$ as "odd": odd plus odd is even, odd times odd is odd. The tables are the rules of parity, and that is why all the field properties hold (the check is in exercise 4). In computer science it is the field of bits: the sum is XOR, the product is AND.

> [!NOTE] The field of the course
> In the course the field is almost always $\K = \R$ or $\K = \C$. The letter $\K$ means "any field": what is proved for $\K$ holds for both.

## Vector spaces (pp. 22–23)

Now all the ingredients are there. In $\R^n$ there are two operations, sum and product by a scalar, with the eight rules of the table seen above. The definition of vector space says: **any** set with two operations of this kind, which respect the same rules, is a vector space.

> [!DEF] 5.4 · Vector space
> We fix a field $\K$. For us this is generally either the field $\K = \R$ of real numbers or the field $\K = \C$ of complex numbers (but for the definition it can be any field). The elements of $\K$ are called **scalars**. A **vector space** over $\K$ is a set $V$ of elements, called **vectors**, equipped with two operations:
> - an operation called **sum** that associates with two vectors $v, w \in V$ a third vector $v + w \in V$;
> - an operation called **product by a scalar** that associates with a vector $v \in V$ and a scalar $\lambda \in \K$ a vector $\lambda v \in V$.
>
> These two operations must satisfy the same properties as the corresponding operations of Euclidean space, that is:
> 1. the set $V$ is a commutative group with the sum $+$;
> 2. $\lambda(v + w) = \lambda v + \lambda w$;
> 3. $(\lambda + \mu)v = \lambda v + \mu v$;
> 4. $(\lambda\mu)v = \lambda(\mu v)$;
> 5. $1v = v$.
>
> The properties must hold for all $v, w \in V$ and all $\lambda, \mu \in \K$.

Piece by piece:

- **The field $\K$** supplies the numbers you multiply by: the scalars. If you change the field the vector space changes, even with the same set $V$ (you will see it with $\C$, which is a vector space both over $\C$ and over $\R$).
- **The vectors** can be objects of any kind: arrows, polynomials, functions, matrices. Only how the operations behave matters.
- **The two operations** must give results **inside $V$**: $v + w \in V$ and $\lambda v \in V$. It is the first thing to check, and it is where most of the sets that are *not* vector spaces fall.
- **Axiom 1**, "commutative group with the sum", contains four rules: the sum is associative, $(u + v) + w = u + (v + w)$; there is a zero vector $0_V$ with $v + 0_V = v$; every $v$ has an opposite $-v$ with $v + (-v) = 0_V$; the sum is commutative, $v + w = w + v$.
- **Axiom 2**: a scalar distributes over a sum of **vectors**.
- **Axiom 3**: a vector distributes over a sum of **scalars**. Careful: on the left the $+$ is the sum in $\K$, on the right it is the sum in $V$. Same symbol, two different operations.
- **Axiom 4**: on the left $\lambda\mu$ is a product of numbers, done in $\K$; on the right you first multiply $v$ by $\mu$ and then the result by $\lambda$.
- **Axiom 5**: the scalar $1$ of the field leaves vectors as they are. It looks obvious, but it does not follow from the others (box below).
- In all there are **eight rules**, plus the requirement that the operations do not leave $V$: the same as in the table of $\R^n$.

> [!PITFALL] There is no product between two vectors
> In a vector space you add two vectors and multiply a vector by a **scalar**. A "vector times vector" product is not part of the definition. The scalar product between vectors will arrive in lesson L19, and it is something else.

> [!BEYOND] · why axiom 5 is needed
> Take $V = \R^2$ with the usual sum, but with a "lazy" product by a scalar that always gives the zero vector: $\lambda \star v = 0$ for every $\lambda$ and every $v$. Axioms 1–4 hold: for example $\lambda \star (v + w) = 0 = 0 + 0 = \lambda \star v + \lambda \star w$. Axiom 5 instead fails: $1 \star (1, 2) = (0, 0) \neq (1, 2)$. So axiom 5 is not a consequence of the others: without it the "product by a scalar" could wipe out all the information. Another example, in which only axiom 5 fails, is exercise 9.

### The origin and the two zeros (p. 23)

The identity element of the group $(V, +)$ is written $0$ (or $0_V$) and is called the **origin** of the vector space $V$. It must not be confused with the zero $0$ of the field $\K$: the handouts warn that in the course the symbol $0$ denotes different things, and the meaning is clear from the context.

| Space | the zero of the field | the origin $0_V$ |
|---|---|---|
| $\R^3$ | the number $0$ | the vector $(0, 0, 0)$ |
| $\C^2$ | the complex number $0$ | the vector $(0, 0)$ |
| $\K[x]$ (polynomials) | the number $0$ | the zero polynomial, with all coefficients equal to $0$ |
| functions $[0, 1] \to \R$ | the number $0$ | the function that is $0$ at every point |

From the axioms a first result follows straight away.

> [!PROP] 5.5
> The relation $0v = 0$ holds.

The first $0$ is the identity element of $\K$ (a number), the second is the origin of $V$ (a vector). In words: **multiplying any vector by the scalar zero you get the zero vector**. For example $0 \cdot (3, -1) = (0, 0)$ in $\R^2$.

In $\R^n$ you check it coordinate by coordinate. The point of the proposition is that it holds in **every** vector space, and it is proved using only the axioms. The handouts' proof is one line long; here it is with all the steps.

1. In the field $0 + 0 = 0$ holds. So $0v = (0 + 0)v$.
2. By axiom 3, $(0 + 0)v = 0v + 0v$. Putting them together: $0v = 0v + 0v$.
3. Call $w = 0v$: you have $w = w + w$. Add to both sides the opposite $-w$, which exists by axiom 1:
   $$w + (-w) = (w + w) + (-w).$$
4. On the left there is $0_V$. On the right, by the associative property, $(w + w) + (-w) = w + (w + (-w)) = w + 0_V = w$.
5. So $0_V = w$, that is $0v = 0_V$. $\square$

It is the handouts' "cancelling": in a group you cancel by adding the opposite to both sides.

> [!BEYOND] · three more consequences of the axioms
> With the same technique you prove (exercise 8) that in every vector space:
> - $\lambda 0_V = 0_V$ for every scalar $\lambda$;
> - $(-1)v = -v$: multiplying by $-1$ gives the opposite;
> - if $\lambda v = 0_V$, then $\lambda = 0$ or $v = 0_V$.
>
> The last one uses the fact that in a field every $\lambda \neq 0$ has an inverse: it is one of the reasons why scalars must live in a field.

## Examples of vector spaces (pp. 23–25)

The handouts present five examples. For each one you have to say who the vectors are, how they are added and how they are multiplied by a scalar; then you check the axioms (it is Exercise 5.6).

### The field $\K$ over itself (p. 23)

If $(\K, +, \cdot)$ is a field, then it is also a vector space over itself. The vectors are the elements of $\K$, and so are the scalars; the sum of vectors is the sum of $\K$ and the product by a scalar is the product of $\K$. For $\K = \R$ the vectors are real numbers: it is $\R = \R^1$, the line.

The handouts explain why the five axioms hold. In the third column there is a check with $\lambda = 2$, $\mu = 3$, $v = 4$ and $w = 5$.

| Axiom | why it holds | with numbers |
|---|---|---|
| 1. $(\K, +)$ commutative group | it is axiom 1 of the field | $4 + 5 = 5 + 4 = 9$ |
| 2. $\lambda(v + w) = \lambda v + \lambda w$ | distributive property of the field | $2 \cdot 9 = 18 = 8 + 10$ |
| 3. $(\lambda + \mu)v = \lambda v + \mu v$ | commutativity and distributivity | $5 \cdot 4 = 20 = 8 + 12$ |
| 4. $(\lambda\mu)v = \lambda(\mu v)$ | associativity of the product | $6 \cdot 4 = 24 = 2 \cdot 12$ |
| 5. $1v = v$ | $1$ is the identity element of the product | $1 \cdot 4 = 4$ |

### The space $\K^n$ (pp. 23–24)

The main example of a vector space over $\R$ is the Euclidean space $\R^n$. For any field $\K^n$ is defined in the same way.

> [!DEF] The space $\K^n$ (pp. 23–24)
> Let $n \ge 1$ be a natural number. The space $\K^n$ is the set of sequences $(x_1, \dots, x_n)$ of numbers in $\K$, generally described as column vectors. The sum and the multiplication by a scalar are defined term by term:
> $$\begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} + \begin{pmatrix} y_1 \\ \vdots \\ y_n \end{pmatrix} = \begin{pmatrix} x_1 + y_1 \\ \vdots \\ x_n + y_n \end{pmatrix}, \qquad \lambda \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} = \begin{pmatrix} \lambda x_1 \\ \vdots \\ \lambda x_n \end{pmatrix}.$$

With $\K = \C$ you get $\C^n$: both the coordinates and the scalars are complex. The calculations are done with the rules of lesson L02, remembering that $i^2 = -1$.

> [!EXAMPLE] · the two calculations of the handouts in $\C^2$
> **Sum.** Row by row, you add the real parts together and the imaginary parts together:
> $$\begin{pmatrix} 1 + i \\ -2 \end{pmatrix} + \begin{pmatrix} 3i \\ 1 - i \end{pmatrix} = \begin{pmatrix} 1 + (1 + 3)i \\ (-2 + 1) - i \end{pmatrix} = \begin{pmatrix} 1 + 4i \\ -1 - i \end{pmatrix}.$$
> **Product by a scalar.** The scalar $2 + i$ multiplies both coordinates:
> $$(2 + i)\begin{pmatrix} 3 \\ 1 - i \end{pmatrix} = \begin{pmatrix} (2 + i) \cdot 3 \\ (2 + i)(1 - i) \end{pmatrix} = \begin{pmatrix} 6 + 3i \\ 3 - i \end{pmatrix}.$$
> The second calculation in full: $(2 + i)(1 - i) = 2 - 2i + i - i^2 = 2 - i - (-1) = 3 - i$.

It remains to check that $\K^n$ really is a vector space. The handouts check axiom 2, and their method is the one to imitate for all the others:

$$\begin{aligned} \lambda(x + y) &= \lambda \begin{pmatrix} x_1 + y_1 \\ \vdots \\ x_n + y_n \end{pmatrix} = \begin{pmatrix} \lambda(x_1 + y_1) \\ \vdots \\ \lambda(x_n + y_n) \end{pmatrix} \\ &= \begin{pmatrix} \lambda x_1 + \lambda y_1 \\ \vdots \\ \lambda x_n + \lambda y_n \end{pmatrix} = \begin{pmatrix} \lambda x_1 \\ \vdots \\ \lambda x_n \end{pmatrix} + \begin{pmatrix} \lambda y_1 \\ \vdots \\ \lambda y_n \end{pmatrix} = \lambda x + \lambda y. \end{aligned}$$

Each equality has its reason:

1. the definition of the sum: $x + y$ has coordinates $x_k + y_k$;
2. the definition of the product by a scalar: every coordinate is multiplied by $\lambda$;
3. the distributive property **in the field**, in each of the $n$ coordinates: $\lambda(x_k + y_k) = \lambda x_k + \lambda y_k$;
4. the definition of the sum, read backwards;
5. the definition of the product by a scalar, read backwards.

The general idea to take away: **every axiom of $\K^n$ boils down to the same property in $\K$, one coordinate at a time.**

> [!PITFALL] In $\C^n$ the scalars are complex
> In $\C^2$ you can multiply by $i$: $i \cdot (1, 0) = (i, 0)$. In $\R^2$ you cannot: the scalars are only real, and $(i, 0) \notin \R^2$. That is why $\R^2$, with the usual operations, is **not** a vector space over $\C$.

### The space of sequences (p. 24)

Instead of vectors with $n$ components you can take **infinite sequences** $(x_n)_{n \in \N} = (x_0, x_1, x_2, \dots)$, with each $x_k \in \K$: vectors with infinitely many coordinates. Sum and product by a scalar are again done component by component:

$$(x_n)_{n \in \N} + (y_n)_{n \in \N} = (x_n + y_n)_{n \in \N}, \qquad \lambda (x_n)_{n \in \N} = (\lambda x_n)_{n \in \N}.$$

With these operations you get a vector space.

> [!EXAMPLE] · two real sequences
> Let $x = (1, 2, 3, 4, \dots)$, that is $x_n = n + 1$, and $y = (1, 1, 1, 1, \dots)$, the constant sequence. Then
> $$x + y = (2, 3, 4, 5, \dots), \qquad 3x = (3, 6, 9, 12, \dots), \qquad x + (-1)y = (0, 1, 2, 3, \dots).$$
> The zero vector is the sequence $(0, 0, 0, \dots)$ and the opposite of $x$ is $(-1, -2, -3, \dots)$.

### The functions $[0, 1] \to \K$ (p. 24)

In sequences every $n \in \N$ corresponds to a number $x_n$. You can do the same with **every** real number $x \in [0, 1]$: with each one you associate an element $f(x) \in \K$, and you get a function $f : [0, 1] \to \K$. Sum and product by a scalar are defined **point by point**:

$$(f + g)(x) = f(x) + g(x), \qquad (\lambda f)(x) = \lambda f(x), \qquad \forall x \in [0, 1].$$

Piece by piece:

- $f + g$ is a **new function**: to know its value at a point $x$ you compute $f(x)$ and $g(x)$ and add them. The brackets in $(f + g)(x)$ say exactly this: first you form the function $f + g$, then you evaluate it at $x$.
- $\lambda f$ is the function that at every point is $\lambda$ times $f$.
- The zero vector is the **zero function**, which is $0$ at every point; the opposite of $f$ is the function $x \mapsto -f(x)$.
- A function is like a vector with one coordinate for each point of $[0, 1]$: its values.

> [!EXAMPLE] · sum of two functions, point by point
> Let $f(x) = x^2$ and $g(x) = 1 - x$. Then $(f + g)(x) = x^2 - x + 1$ and $(3f)(x) = 3x^2$. At some points:
>
> | $x$ | $0$ | $\frac 14$ | $\frac 12$ | $1$ |
> |---|---|---|---|---|
> | $f(x)$ | $0$ | $\frac 1{16}$ | $\frac 14$ | $1$ |
> | $g(x)$ | $1$ | $\frac 34$ | $\frac 12$ | $0$ |
> | $(f + g)(x)$ | $1$ | $\frac{13}{16}$ | $\frac 34$ | $1$ |
> | $(3f)(x)$ | $0$ | $\frac 3{16}$ | $\frac 34$ | $3$ |
>
> Each column is added like a coordinate of $\K^n$.

> [!BEYOND] · they are all functions
> Martelli's book (§2.2.4) brings the last examples together into one: for any set $X$, the functions $X \to \K$ form a vector space $F(X, \K)$. With $X = \{1, \dots, n\}$ you find $\K^n$ again (a function on $n$ points is a list of $n$ numbers), with $X = \N$ the sequences, with $X = [0, 1]$ the functions of the handouts.

### The space $\K[x]$ of polynomials (p. 25)

Given a field $\K$, $\K[x]$ is the set of all polynomials with coefficients in $\K$ (lesson L04). Two polynomials can be added, and multiplying a polynomial by a scalar you still get a polynomial.

> [!EXAMPLE] · the calculations of the handouts
> To add, you collect the terms of the same degree:
> $$(x^3 - 2x + 1) + (4x^4 + x - 3) = 4x^4 + x^3 + (-2 + 1)x + (1 - 3) = 4x^4 + x^3 - x - 2.$$
> To multiply by a scalar you multiply every coefficient:
> $$3(x^3 - 2x) = 3x^3 - 6x.$$

If you write the coefficients in a table, degree by degree, the sum becomes exactly a **component by component** sum, as in $\K^n$:

| | $x^4$ | $x^3$ | $x^2$ | $x$ | $1$ |
|---|---:|---:|---:|---:|---:|
| $x^3 - 2x + 1$ | $0$ | $1$ | $0$ | $-2$ | $1$ |
| $4x^4 + x - 3$ | $4$ | $0$ | $0$ | $1$ | $-3$ |
| sum | $4$ | $1$ | $0$ | $-1$ | $-2$ |

The zero vector is the **zero polynomial**, with all coefficients equal to $0$, and the opposite of $p(x)$ is $-p(x)$, with all the coefficients' signs changed. Axioms 1–5 are checked coefficient by coefficient (Exercise 5.6).

> [!PITFALL] The product of polynomials has nothing to do with it
> Two polynomials can also be multiplied together, but this operation is **not** part of the vector space structure: in $\K[x]$ only the sum and the product by a scalar count.

> [!PITFALL] Degree at most $k$ yes, degree exactly $k$ no
> The polynomials of degree **at most** $k$ form a vector space, written $\K_k[x]$ (Exercise 5.7): for example $\R_2[x] = \{ax^2 + bx + c \mid a, b, c \in \R\}$. The polynomials of degree **exactly** $2$ instead do not: $x^2$ and $-x^2 + x$ have degree $2$, but their sum $x$ has degree $1$. And the zero polynomial does not have degree $2$.

### All the examples at a glance

| Space | a vector is | the sum is done | $\lambda v$ is done | zero vector |
|---|---|---|---|---|
| $\K$ | a number | as in $\K$ | as in $\K$ | $0$ |
| $\K^n$ | a column of $n$ numbers | coordinate by coordinate | coordinate by coordinate | $(0, \dots, 0)$ |
| sequences | an infinite list $(x_n)$ | term by term | term by term | $(0, 0, 0, \dots)$ |
| functions $[0, 1] \to \K$ | a function $f$ | point by point | point by point | the zero function |
| $\K[x]$ | a polynomial | degree by degree | coefficient by coefficient | the zero polynomial |

> [!BEYOND] · where to find it in the book
> In Martelli's book: groups, rings and fields in **§1.5 "Strutture algebriche"** (pp. 34–36); Euclidean space, the sum and the product by a scalar in **§2.1** (pp. 43–46); the definition of vector space, Proposition 2.2.1 ($0v = 0$) and the examples $\K^n$, $\K[x]$ and $F(X, \K)$ in **§2.2.1–2.2.4** (pp. 46–49). Matrices (§2.2.5) are in lesson L06.

## Towards the exam

The Linear Algebra and Geometry written test has 10 multiple-choice questions with 5 answers each (you need at least 6 points to have the 2 problems worth 11 points marked), it lasts 2 hours, with no calculator and only 4 handwritten pages; the 2026/27 exam sessions are on 22/01 and 05/02/2027 at 14:00. All the details are in lesson L01.

**What you need from this lesson for the exam**

1. **Recognising a vector space.** In the quizzes there are theory questions with five reasoned answers, like this one.

> [!EXAM] Exam of 07/02/2025, question 2
> "Identify the correct answer to the question 'does $\C$ admit a structure of vector space over $\R$?'": (a) No, since $\C$ is already a vector space over $\C$ itself. (b) Yes, because every field is a vector space over $\R$. (c) No, but since $\C$ contains $\R$, $\R$ is a vector space over $\C$. (d) No, because $\C$ and $\R$ are different fields. (e) Yes, $\R$ is a subset of $\C$ and the operations $+$, $\cdot$ on $\R$ are the same as in $\C$.
>
> **Solution.** It is (e). The vectors are the complex numbers and the scalars the real ones; the sum is that of $\C$ and the product by a scalar $\lambda z$ is the product in $\C$ of a real by a complex number, which is still complex: $\lambda(a + bi) = \lambda a + (\lambda b)i$. Axioms 1–5 hold because they are special cases of the properties of the field $\C$, as for "$\K$ over itself" (Exercise 5.8). The others: (a) and (d) say true things, but they do not rule out the structure over $\R$; (b) is false, for example $\Q$ is not a vector space over $\R$ because $\sqrt 2 \cdot 1 \notin \Q$; (c) is false, because $i \cdot 1 = i \notin \R$.

2. **Ruling out the option "it is not a vector space".** In the questions on dimension a trap answer of this kind often appears: "$T^s(3)$ has no dimension because it is not a vector space" (24/01/2024, question 5), "$S(3)$ has no dimension because it is not a vector space" and "$X$ is not necessarily a vector space", with $X = \Span(v_1, v_2, v_3)$ (15/01/2026, questions 4 and 3). To rule them out you need to know which sets are vector spaces: triangular or symmetric matrices and Spans always are (lesson L06).
3. **Subspaces.** The most frequent question of this part is "which of these sets is (or is not) a subspace?": exams of 08/02/2024 (question 2), 03/06/2025 (question 2), 05/02/2026 (question 2) and 07/09/2026 (question 3). You solve it with the checks of this lesson (is the zero there? do the sum and the multiples stay inside?) and with the definition of subspace of lesson L06.
4. **Calculations component by component** in $\K^n$, including those with complex numbers in $\C^n$, and with polynomials: you need them in almost all the exercises of the course.

> [!METHOD] · "Is it a vector space?" in four checks
> 1. **Who is who.** Write down the field of scalars $\K$, the set $V$ and the two operations.
> 2. **Do the operations stay in $V$?** Try with concrete elements: do the sum of two elements and a multiple (also with $\lambda = -1$ and $\lambda = 0$) still lie in $V$?
> 3. **Is the zero there?** The zero vector must be in $V$. If the operations are the usual ones, remember that $0v = 0_V$: if $V$ is not empty and is closed under multiples, the zero is necessarily there.
> 4. **The axioms.** If $V$ lies inside a known space ($\K^n$, $\K[x]$, the functions) with the same operations, axioms 1–5 already hold there and stay true. If the operations are "strange", try each axiom with small numbers: a single case that does not work is enough to say no.
>
> To answer **no**, **one** counterexample with numbers is enough; to answer **yes** you need an argument that works for all vectors and all scalars.

> [!PITFALL] The most common mistakes
> - Confusing the $0$ of the field with the origin $0_V$.
> - Forgetting to check that sums and multiples stay in the set.
> - Believing that "degree exactly $k$" works like "degree at most $k$".
> - In $\C^n$, forgetting that $i^2 = -1$.
> - Saying "it is a vector space" without saying **over which field**: $\C$ is one over $\R$ and over $\C$, while $\R^2$ is one over $\R$ but not over $\C$.

> [!EXAM] The 4-page sheet
> From this lesson: the five axioms, with the four rules hidden in the first; $0v = 0_V$ and $(-1)v = -v$; the table of the five examples with their zero vector; the three typical counterexamples: the zero is missing, the sum leaves the set, a multiple leaves the set.

## Quiz

```quiz
Q: With the usual sum and product by a scalar (coordinate by coordinate), is $\R^2$ a vector space over the field $\C$?
- Yes, because $\R \subset \C$.
+ No: for example $i \cdot (1, 0) = (i, 0)$ is not in $\R^2$.
- Yes, because every vector space over $\R$ is also one over $\C$.
- No, because $\R^2$ with the sum is not a commutative group.
- No, because $\C$ is not a field.
= The product by a scalar must give a vector of $V$: with the complex scalar $i$ you leave $\R^2$. The other reasons are false: $(\R^2, +)$ is a commutative group and $\C$ is a field. On the contrary, $\C$ is a vector space over $\R$ (Exercise 5.8). Similar to the exam of 07/02/2025, question 2.

Q: Is $\R$, with the usual sum and the product by rational numbers, a vector space over $\Q$?
+ Yes: a rational times a real is a real, and the axioms follow from the properties of the field $\R$.
- No, because $\sqrt 2 \notin \Q$.
- No: if anything it is $\Q$ that is a vector space over $\R$.
- Yes, but only if you restrict to rational numbers.
- No, because $\R$ and $\Q$ are different fields.
= It is the same reasoning as "$\C$ over $\R$": the scalars ($\Q$) lie inside the set of vectors ($\R$), so $\lambda v$ stays in $\R$ and the axioms are special cases of distributivity, associativity and identity element in $\R$. Instead $\Q$ is not a vector space over $\R$: $\sqrt 2 \cdot 1 \notin \Q$. Similar to the exam of 07/02/2025, question 2.

Q: Which of these, with the operation shown, is a commutative group?
- $(\N, +)$
- $(\Z, \cdot)$
+ $(\Q \setminus \{0\}, \cdot)$
- $(\R, \cdot)$
- $(\Z \setminus \{0\}, \cdot)$
= In $\Q \setminus \{0\}$ the product of two non-zero fractions is non-zero, the identity is $1$ and the inverse of $\frac ab$ is $\frac ba$. In $\N$ the opposite of $1$ is missing; in $\Z$ and in $\Z \setminus \{0\}$ the inverse of $2$ is missing; in $(\R, \cdot)$ the $0$ has no inverse.

Q: Which of these sets, with the operations shown, is a field?
- $\Z$, with the usual sum and product.
- $\N$, with the usual sum and product.
+ $\{0, 1\}$, with $1 + 1 = 0$ and the other sums and the products as in the integers.
- $\R \setminus \{0\}$, with the usual sum and product.
- $\{0, 1, 2, 3\}$, with sum and product of the remainders in the division by $4$.
= $\{0, 1\}$ with those rules is the field of Exercise 5.9 (the rules of parity). $\Z$: $2$ has no inverse. $\N$: the opposite of $1$ is missing. $\R \setminus \{0\}$: the sum leaves the set, $1 + (-1) = 0$. With the remainders modulo $4$: $2 \cdot 2 = 4$ has remainder $0$, and $2$ has no inverse.

Q: In $\C^2$, what is $(1 + i)\begin{pmatrix} 2 \\ i \end{pmatrix}$?
+ $\begin{pmatrix} 2 + 2i \\ -1 + i \end{pmatrix}$
- $\begin{pmatrix} 2 + 2i \\ 1 + i \end{pmatrix}$
- $\begin{pmatrix} 2 + 2i \\ i \end{pmatrix}$
- $\begin{pmatrix} 3 + i \\ 1 + 2i \end{pmatrix}$
- $\begin{pmatrix} 2 \\ -1 \end{pmatrix}$
= The scalar multiplies both coordinates: $(1 + i) \cdot 2 = 2 + 2i$ and $(1 + i) \cdot i = i + i^2 = -1 + i$. The second answer forgets that $i^2 = -1$, the third does not multiply the second coordinate, the fourth adds instead of multiplying.

Q: In $\R^3$, what is $2\begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix} - 3\begin{pmatrix} 0 \\ 1 \\ 2 \end{pmatrix}$?
+ $(2, -3, -8)$
- $(2, -3, 4)$
- $(2, 3, -8)$
- $(2, -1, -4)$
- $(2, -3, -7)$
= $2(1, 0, -1) = (2, 0, -2)$ and $3(0, 1, 2) = (0, 3, 6)$; then you subtract coordinate by coordinate: $(2 - 0,\ 0 - 3,\ -2 - 6) = (2, -3, -8)$.

Q: With the usual sum and product by a scalar, which of these sets of polynomials with real coefficients is a vector space over $\R$?
- The polynomials of degree exactly $2$.
- The polynomials $p(x)$ with $p(0) = 1$.
+ The polynomials of degree less than or equal to $2$, that is $\R_2[x]$.
- The polynomials with all coefficients greater than or equal to $0$.
- The polynomials of the form $x^2 + bx + c$, with $b, c \in \R$.
= $\R_2[x]$ is the space of Exercise 5.7. The others fail: $x^2 + (-x^2 + x) = x$ does not have degree $2$; the zero polynomial has $p(0) = 0 \neq 1$; $(-1) \cdot x = -x$ has a negative coefficient; $(x^2 + 1) + (x^2 + 1) = 2x^2 + 2$ does not have the form $x^2 + bx + c$. Similar to the exams of 08/02/2024 (question 2) and 07/09/2026 (question 3), which ask which set of polynomials is (or is not) a subspace.

Q: With the operations of $\R^2$, which of these subsets is a vector space over $\R$?
+ $\{(x, y) \in \R^2 \mid x + y = 0\}$
- $\{(x, y) \in \R^2 \mid x + y = 1\}$
- $\{(x, y) \in \R^2 \mid x \ge 0\}$
- $\{(x, y) \in \R^2 \mid xy = 0\}$
- $\{(x, y) \in \R^2 \mid y = x^2\}$
= If $x + y = 0$ and $x' + y' = 0$, then also $(x + x') + (y + y') = 0$ and $\lambda x + \lambda y = 0$: the operations stay in the set, which contains $(0, 0)$. Counterexamples for the others: $(0, 0)$ does not satisfy $x + y = 1$; $(-1) \cdot (1, 0) = (-1, 0)$ has $x < 0$; $(1, 0) + (0, 1) = (1, 1)$ has $xy = 1$; $(1, 1) + (1, 1) = (2, 2)$, but $2 \neq 2^2$. Similar to the exam of 03/06/2025, question 2.

Q: Do the functions $f : [0, 1] \to \R$ with $f(0) = 1$, with the operations point by point, form a vector space over $\R$?
- Yes, like all functions from $[0, 1]$ to $\R$.
+ No: for example the zero function is not in it, and if $f(0) = g(0) = 1$ then $(f + g)(0) = 2$.
- Yes, because $1$ is the identity element of the product.
- No, because functions are not vectors.
- Yes, but only if you restrict to polynomials.
= The zero vector would be the zero function, which at $0$ is $0$: it is not in the set. The sum leaves it too. It is the same reason as in the exam of 10/07/2024, question 2: the set $O(2)$ of orthogonal matrices is not a subspace because it does not contain the zero matrix.

Q: In the field $\{0, 1, 2\}$ with sum and product of the remainders in the division by $3$ (Exercise 5.10), what is the inverse of $2$ with respect to the product?
N: 2
= $2 \cdot 2 = 4$, which divided by $3$ gives remainder $1$: so $2 \cdot 2 = 1$, and the inverse of $2$ is $2$ itself.
```

## Exercises

::: exercise intermediate Exercise 5.6 of the handouts: the five axioms for all the examples
For all the examples of vector spaces seen above ($\K$ over itself, $\K^n$, sequences, functions $[0, 1] \to \K$, polynomials $\K[x]$) check the 5 axioms, as the handouts checked axiom 2 for $\K^n$.
::: solution
The idea: in all the examples the operations are done "one piece at a time" (coordinate, term, point or coefficient), and each piece is an element of $\K$. So every axiom boils down to a property of the field $\K$. We write it out in full for $\K^n$, then we see what changes in the other cases.

**$\K^n$.** Let $x = (x_1, \dots, x_n)$, $y$, $z$ be in $\K^n$ and $\lambda, \mu \in \K$. The operations stay in $\K^n$, because sums and products of elements of $\K$ lie in $\K$.
- Axiom 1, commutative group:
  - associative: coordinate $k$ of $(x + y) + z$ is $(x_k + y_k) + z_k$, that of $x + (y + z)$ is $x_k + (y_k + z_k)$, and they are equal by the associativity of the sum in $\K$;
  - identity: $0 = (0, \dots, 0)$, because $x_k + 0 = x_k$;
  - opposite: $-x = (-x_1, \dots, -x_n)$, because $x_k + (-x_k) = 0$;
  - commutative: $x_k + y_k = y_k + x_k$ in $\K$.
- Axiom 2: done in the handouts, with distributivity in $\K$.
- Axiom 3: coordinate $k$ of $(\lambda + \mu)x$ is $(\lambda + \mu)x_k = \lambda x_k + \mu x_k$, which is coordinate $k$ of $\lambda x + \mu x$ (distributivity and commutativity in $\K$).
- Axiom 4: $(\lambda\mu)x_k = \lambda(\mu x_k)$ by the associativity of the product in $\K$.
- Axiom 5: $1 \cdot x_k = x_k$, because $1$ is the identity of the product in $\K$.

**$\K$ over itself.** It is the case $n = 1$ of $\K^n$; the reason for each axiom is in the table of the section on the examples.

**Sequences.** Same check, with "term $k$" in place of "coordinate $k$". Now $k$ runs from $0$ to infinity, but each check concerns one term at a time. Identity: $(0, 0, 0, \dots)$; opposite of $(x_n)$: $(-x_n)$.

**Functions $[0, 1] \to \K$.** Same check "point by point": two functions are equal if they have the same value at every $x \in [0, 1]$. For example axiom 2: for every $x$,
$$\big(\lambda(f + g)\big)(x) = \lambda\big(f(x) + g(x)\big) = \lambda f(x) + \lambda g(x) = (\lambda f + \lambda g)(x).$$
Identity: the zero function; opposite of $f$: the function $x \mapsto -f(x)$.

**Polynomials $\K[x]$.** A polynomial is determined by its coefficients, and sum and product by a scalar act coefficient by coefficient: you repeat the check of $\K^n$ with "coefficient of $x^k$" in place of "coordinate $k$". The sum $p + q$ has degree at most equal to the larger of the two degrees, so it is still a polynomial. Identity: the zero polynomial; opposite: $-p(x)$.
:::

::: exercise intermediate Exercise 5.7 of the handouts: degree at most $k$
Check that the set $\K_k[x]$ of polynomials with coefficients in $\K$ of degree $\le k$ is a vector space. Why is the set of polynomials of degree **exactly** $k$ not a vector space if $k \ge 1$?
::: solution
**$\K_k[x]$ is a vector space.** Every element is written $p(x) = a_k x^k + \dots + a_1 x + a_0$ with $a_0, \dots, a_k \in \K$ (some coefficient, even the first, can be $0$).
1. The operations stay in $\K_k[x]$. If $p(x) = a_k x^k + \dots + a_0$ and $q(x) = b_k x^k + \dots + b_0$, then
   $$p(x) + q(x) = (a_k + b_k)x^k + \dots + (a_0 + b_0), \qquad \lambda p(x) = \lambda a_k x^k + \dots + \lambda a_0,$$
   and no powers higher than $x^k$ appear: the degree stays $\le k$.
2. The zero polynomial is in $\K_k[x]$ (all coefficients zero), and the opposite $-p(x)$ has the same degree as $p$.
3. Axioms 1–5 hold in all of $\K[x]$ (exercise 1), so in particular they hold for the polynomials of degree $\le k$.

In short: $\K_k[x]$ behaves like $\K^{k+1}$, because a polynomial of degree $\le k$ is given by the list of its $k + 1$ coefficients $(a_0, a_1, \dots, a_k)$.

**Degree exactly $k$, with $k \ge 1$: it is not a vector space.** One counterexample is enough.
- The sum can lower the degree: $x^k + 1$ and $-x^k$ have degree $k$, but $(x^k + 1) + (-x^k) = 1$ has degree $0 \neq k$.
- The zero vector is not there: the zero polynomial does not have degree $k$ (and indeed $0 \cdot x^k = 0$ leaves the set).

With $k = 2$: $x^2 + 1$ and $-x^2$ have degree $2$, their sum $1$ does not.

**Why $k \ge 1$?** For $k = 0$ the polynomials of degree $0$ are the constants. If you decide that the zero polynomial also has degree $0$, they are all the constants, that is $\K$ itself, which is a vector space; if the zero polynomial has no degree, what remains are the non-zero constants, which are not one (the zero is missing). The answer depends on a convention, and the exercise avoids the case.
:::

::: exercise basic Exercise 5.8 of the handouts: $\C$ is a vector space over $\R$
In the first example $\C$ is a vector space over the field $\C$. Prove that it is also a vector space over $\R$.
::: solution
Vectors: the complex numbers $z = a + bi$. Scalars: the real numbers $\lambda$. Sum: that of $\C$. Product by a scalar: the product in $\C$ between the real $\lambda$ and the complex $z$,
$$\lambda(a + bi) = \lambda a + (\lambda b)i,$$
which is still a complex number. The operations stay in $\C$.

The axioms:
1. $(\C, +)$ is a commutative group, because $\C$ is a field (axiom 1 of the field).
2. $\lambda(z + w) = \lambda z + \lambda w$: it is the distributive property of $\C$, applied with $\lambda \in \R \subset \C$.
3. $(\lambda + \mu)z = \lambda z + \mu z$: distributivity and commutativity of $\C$.
4. $(\lambda\mu)z = \lambda(\mu z)$: associativity of the product in $\C$.
5. $1z = z$: $1$ is the identity of the product in $\C$.

Each axiom is a special case of a property of $\C$ in which one of the numbers is real.

**With coordinates.** The correspondence $a + bi \leftrightarrow (a, b)$ turns the operations into those of $\R^2$: $(a + bi) + (c + di) = (a + c) + (b + d)i$ corresponds to $(a, b) + (c, d)$, and $\lambda(a + bi)$ corresponds to $\lambda(a, b)$. As a vector space over $\R$, $\C$ behaves like the plane $\R^2$: it is the Gauss plane of lesson L02.

**Careful with the reverse.** $\R$ is **not** a vector space over $\C$ with the usual product, because $i \cdot 1 = i \notin \R$.
:::

::: exercise intermediate Exercise 5.9 of the handouts: the field with two elements
Let $\K = \{0, 1\}$ with the operations
$$0 + 0 = 0, \quad 0 + 1 = 1, \quad 1 + 0 = 1, \quad 1 + 1 = 0, \qquad 0 \cdot 0 = 0, \quad 0 \cdot 1 = 0, \quad 1 \cdot 0 = 0, \quad 1 \cdot 1 = 1.$$
Prove that $(\K, +, \cdot)$ is a field.
::: solution
You check the three axioms of Definition 5.3.

**Axiom 1: $(\K, +)$ is a commutative group with identity $0$.**
- The sums stay in $\{0, 1\}$ (the table says so).
- Identity: $0 + 0 = 0$ and $0 + 1 = 1 + 0 = 1$, so $0$ leaves everything as it is.
- Opposites: $0 + 0 = 0$, so $-0 = 0$; $1 + 1 = 0$, so $-1 = 1$.
- Commutative: $0 + 1 = 1 + 0$, and the other cases have two equal terms.
- Associative: the triples $(a, b, c)$ are $2^3 = 8$. Instead of trying them one by one, notice that $a + b + c$ is $0$ if among $a$, $b$, $c$ there is an even number of $1$s, and it is $1$ if there is an odd number, however you place the brackets. For example $(1 + 1) + 1 = 0 + 1 = 1$ and $1 + (1 + 1) = 1 + 0 = 1$.

**Axiom 2: $\K \setminus \{0\} = \{1\}$ is a commutative group with the product.** There is only one element: $1 \cdot 1 = 1$ stays in the set, $1$ is the identity and is its own inverse; associativity and commutativity hold because there is only one possible product, $1 \cdot 1$.

**Axiom 3: the distributive law $a(b + c) = ab + ac$.** If $a = 0$ both sides are $0$. If $a = 1$ both sides are $b + c$. So it holds in all $8$ cases.

**The reason.** Read $0$ as "even" and $1$ as "odd": the tables are the rules of parity (odd plus odd is even, and so on). The properties of the sum and the product of the integers carry over to the remainders of the division by $2$. This field is often written $\mathbb{F}_2$ or $\Z_2$.
:::

::: exercise hard Exercise 5.10 of the handouts: a field with three elements
Let $\K = \{0, 1, 2\}$. Find, in a similar way to the previous exercise, two operations $+$ and $\cdot$ that make $(\K, +, \cdot)$ a field. For the very brave: try to generalise to $\K = \{0, 1, 2, \dots, p - 1\}$ with $p$ a prime number.
::: solution
**The idea.** In the previous exercise the operations were those of the remainders of the division by $2$. Here you use the **remainders of the division by $3$**: you calculate as with the integers and then keep the remainder. For example $2 + 2 = 4$, which divided by $3$ gives remainder $1$: so $2 + 2 = 1$. And $2 \cdot 2 = 4$, remainder $1$: so $2 \cdot 2 = 1$.

| $+$ | $0$ | $1$ | $2$ |
|---|---|---|---|
| $0$ | $0$ | $1$ | $2$ |
| $1$ | $1$ | $2$ | $0$ |
| $2$ | $2$ | $0$ | $1$ |

| $\cdot$ | $0$ | $1$ | $2$ |
|---|---|---|---|
| $0$ | $0$ | $0$ | $0$ |
| $1$ | $0$ | $1$ | $2$ |
| $2$ | $0$ | $2$ | $1$ |

The check:
1. $(\K, +)$ is a commutative group: identity $0$; opposites $-0 = 0$, $-1 = 2$ (because $1 + 2 = 0$) and $-2 = 1$; the table is symmetric, so the sum is commutative. Associativity carries over from the integers: $(a + b) + c$ and $a + (b + c)$ are the same integer, so they have the same remainder.
2. $\{1, 2\}$ with the product: $1 \cdot 1 = 1$, $1 \cdot 2 = 2$, $2 \cdot 2 = 1$, so the product of two non-zero elements is non-zero. Identity $1$; inverses $1^{-1} = 1$ and $2^{-1} = 2$; commutativity and associativity as with the integers.
3. Distributive law: it holds for the integers, and taking the remainder respects sums and products, so it also holds for the remainders.

**The general case, with $p$ prime.** On $\{0, 1, \dots, p - 1\}$ you use sum and product "modulo $p$", that is you keep the remainder of the division by $p$. All the properties carry over from the integers as above, except one that has to be proved: **every $a \neq 0$ has an inverse**.
- Multiply $a$ by all the non-zero elements: $a \cdot 1, a \cdot 2, \dots, a \cdot (p - 1)$.
- Their remainders are all different. If $ab$ and $ac$ had the same remainder, $p$ would divide $a(b - c)$; since $p$ is prime, it would divide $a$ or $b - c$. It does not divide $a$, because $1 \le a \le p - 1$; and $b - c$ lies between $-(p - 2)$ and $p - 2$, so it is divisible by $p$ only if $b = c$.
- None has remainder $0$: $p$ would have to divide $a$ or $b$, both between $1$ and $p - 1$.
- So they are $p - 1$ different non-zero remainders: they are **all** the remainders $1, \dots, p - 1$, in another order. One of them is $1$, and that one gives the inverse of $a$.

**Why $p$ must be prime.** With $\{0, 1, 2, 3\}$ and the remainders modulo $4$ you do not get a field: $2 \cdot 2 = 4$ has remainder $0$, and $2$ has no inverse ($2 \cdot 1 = 2$, $2 \cdot 2 = 0$, $2 \cdot 3 = 2$). These sets of remainders are studied in Discrete Mathematics (modular arithmetic).
:::

::: exercise basic Calculations in $\R^3$, in $\C^2$ and with polynomials
Compute:
(a) $2u - 3v$ with $u = (1, 0, -1)$ and $v = (2, -1, 1)$ in $\R^3$;
(b) $iz + w$ with $z = (1 + i, 2)$ and $w = (3, -i)$ in $\C^2$;
(c) $2p - q$ with $p(x) = x^3 - x + 2$ and $q(x) = 2x^3 + x^2 - 4$;
(d) the vector $x \in \R^3$ such that $x + (1, 2, 3) = (4, 0, 3)$.
::: solution
(a) $2u = (2, 0, -2)$ and $3v = (6, -3, 3)$. So
$$2u - 3v = (2 - 6,\ 0 - (-3),\ -2 - 3) = (-4, 3, -5).$$

(b) First the product by the scalar $i$, coordinate by coordinate: $iz = (i(1 + i),\ 2i) = (i + i^2,\ 2i) = (-1 + i,\ 2i)$. Then the sum:
$$iz + w = (-1 + i + 3,\ 2i - i) = (2 + i,\ i).$$

(c) $2p(x) = 2x^3 - 2x + 4$. Subtracting $q$ degree by degree:
$$2p(x) - q(x) = (2 - 2)x^3 + (0 - 1)x^2 + (-2 - 0)x + (4 - (-4)) = -x^2 - 2x + 8.$$

(d) You add the opposite of $(1, 2, 3)$ to both sides:
$$x = (4, 0, 3) + (-1, -2, -3) = (3, -2, 0).$$
Check: $(3, -2, 0) + (1, 2, 3) = (4, 0, 3)$.
:::

::: exercise basic Group or not?
For each case say whether it is a group. If it is, give the identity element and the inverse of one element; if it is not, say what fails, with an example.
(a) The even numbers $\{\dots, -2, 0, 2, 4, \dots\}$ with the sum.
(b) The odd numbers with the sum.
(c) $\Z$ with subtraction, $a * b = a - b$.
(d) $\{1, -1\}$ with the product.
(e) The positive real numbers with the product.
::: solution
(a) **Yes**, and it is commutative. The sum of two even numbers is even; the identity $0$ is even; the inverse of $4$ is $-4$, which is even too.

(b) **No**. The operation leaves the set: $1 + 3 = 4$ is not odd. And the identity is missing too, because $0$ is even.

(c) **No**. Subtraction is not associative: $(5 - 3) - 1 = 1$, while $5 - (3 - 1) = 3$. An identity element is missing too: $a - 0 = a$, but $0 - a = -a \neq a$ for $a \neq 0$.

(d) **Yes**, commutative. $1 \cdot 1 = 1$, $1 \cdot (-1) = -1$, $(-1)(-1) = 1$: the products stay in the set. The identity is $1$ and the inverse of $-1$ is $-1$ itself.

(e) **Yes**, commutative. The product of two positive numbers is positive; the identity is $1$; the inverse of $5$ is $\frac 15$, still positive.
:::

::: exercise intermediate Three consequences of the axioms
Using only the axioms of Definition 5.4 and Proposition 5.5, prove that in every vector space $V$ over $\K$:
(a) $\lambda 0_V = 0_V$ for every $\lambda \in \K$;
(b) $(-1)v = -v$ for every $v \in V$;
(c) if $\lambda v = 0_V$, then $\lambda = 0$ or $v = 0_V$.
::: solution
(a) Since $0_V + 0_V = 0_V$ (identity element), by axiom 2
$$\lambda 0_V = \lambda(0_V + 0_V) = \lambda 0_V + \lambda 0_V.$$
Adding the opposite of $\lambda 0_V$ to both sides and cancelling as in Proposition 5.5, what remains is $0_V = \lambda 0_V$.

(b) You show that $(-1)v$ added to $v$ gives $0_V$:
$$v + (-1)v = 1v + (-1)v = (1 + (-1))v = 0v = 0_V.$$
The steps use, in order, axiom 5, axiom 3, the fact that $1 + (-1) = 0$ in the field and Proposition 5.5. So $(-1)v$ is an opposite of $v$; since the opposite is unique (box on groups), $(-1)v = -v$.

(c) Suppose $\lambda v = 0_V$ with $\lambda \neq 0$: you must show that $v = 0_V$. Since $\K$ is a field, $\lambda$ has an inverse $\lambda^{-1}$. Then
$$v = 1v = (\lambda^{-1}\lambda)v = \lambda^{-1}(\lambda v) = \lambda^{-1} 0_V = 0_V,$$
using axiom 5, the fact that $\lambda^{-1}\lambda = 1$, axiom 4 and point (a). If instead $\lambda = 0$ there is nothing to prove.
:::

::: exercise exam A strange product by a scalar
On $V = \R^2$ consider the usual sum and the product by a scalar
$$\lambda \star (x, y) = (\lambda x, 0).$$
(1) Compute $3 \star (2, 5)$ and $1 \star (2, 5)$.
(2) Check axioms 2, 3 and 4 of Definition 5.4.
(3) Is $V$, with these operations, a vector space over $\R$?
(4) Does $0 \star v = 0_V$ still hold for every $v$?
::: solution
(1) $3 \star (2, 5) = (3 \cdot 2, 0) = (6, 0)$ and $1 \star (2, 5) = (2, 0)$.

(2) Let $v = (x, y)$, $w = (x', y')$ and $\lambda, \mu \in \R$.
- Axiom 2: $\lambda \star (v + w) = \lambda \star (x + x', y + y') = (\lambda x + \lambda x', 0) = (\lambda x, 0) + (\lambda x', 0) = \lambda \star v + \lambda \star w$. It holds.
- Axiom 3: $(\lambda + \mu) \star v = ((\lambda + \mu)x, 0) = (\lambda x, 0) + (\mu x, 0) = \lambda \star v + \mu \star v$. It holds.
- Axiom 4: $(\lambda\mu) \star v = (\lambda\mu x, 0)$ and $\lambda \star (\mu \star v) = \lambda \star (\mu x, 0) = (\lambda\mu x, 0)$. It holds.

(3) **No.** Axiom 1 holds (the sum is the usual one of $\R^2$), but axiom 5 fails: $1 \star (2, 5) = (2, 0) \neq (2, 5)$. A single false axiom is enough.

(4) **Yes**: $0 \star (x, y) = (0, 0)$. It is no coincidence: the proof of Proposition 5.5 uses only axioms 1 and 3, which hold here.

At the exam a question like this appears as multiple choice ("is it a vector space?"): the right reason is the counterexample to axiom 5.
:::

::: exercise exam As at the exam: is it a vector space over $\R$?
For each of the following sets, with the operations shown, decide whether it is a vector space over $\R$, giving reasons for your answer.
(a) $\C$, with the usual sum and the product by real numbers.
(b) $\R^2$, with the usual sum and $\lambda \cdot (x, y) = (\lambda x, y)$.
(c) The real polynomials of degree exactly $3$, with the usual operations.
(d) The functions $f : [0, 1] \to \R$ with $f(1) = 0$, with the operations point by point.
(e) The positive real numbers, with the "sum" $x \oplus y = xy$ and the "product by a scalar" $\lambda \odot x = x^\lambda$.
::: solution
(a) **Yes**: it is Exercise 5.8, and the question of the exam of 07/02/2025.

(b) **No**: axiom 3 fails. With $\lambda = \mu = 1$ and $v = (0, 1)$:
$$(1 + 1) \cdot (0, 1) = (0, 1), \qquad 1 \cdot (0, 1) + 1 \cdot (0, 1) = (0, 1) + (0, 1) = (0, 2).$$
The two results are different. You can also see it from Proposition 5.5: $0 \cdot (0, 1) = (0, 1)$ is not the zero vector.

(c) **No**: $(x^3 + x) + (-x^3) = x$ has degree $1$, so the sum leaves the set; moreover the zero polynomial does not have degree $3$.

(d) **Yes**. The zero function is $0$ at $1$, so it is in the set. If $f(1) = g(1) = 0$, then $(f + g)(1) = 0 + 0 = 0$ and $(\lambda f)(1) = \lambda \cdot 0 = 0$: sums and multiples stay in the set. The axioms hold because they hold for all functions $[0, 1] \to \R$ with the same operations. In lesson L06 a set like this will be called a **subspace**.

(e) **Yes**, even if it looks strange. The operations stay among the positive numbers: $xy > 0$ and $x^\lambda > 0$.
- Axiom 1: $\oplus$ is the product of positive numbers, which is a commutative group (exercise 7 (e)). The "zero vector" is the number $1$, because $x \oplus 1 = x$, and the "opposite" of $x$ is $\frac 1x$.
- Axiom 2: $\lambda \odot (x \oplus y) = (xy)^\lambda = x^\lambda y^\lambda = (\lambda \odot x) \oplus (\lambda \odot y)$.
- Axiom 3: $(\lambda + \mu) \odot x = x^{\lambda + \mu} = x^\lambda x^\mu = (\lambda \odot x) \oplus (\mu \odot x)$.
- Axiom 4: $(\lambda\mu) \odot x = x^{\lambda\mu} = (x^\mu)^\lambda = \lambda \odot (\mu \odot x)$.
- Axiom 5: $1 \odot x = x^1 = x$.

Check with Proposition 5.5: $0 \odot x = x^0 = 1$, which is exactly the zero vector of this space. Moral: vectors can be anything and the operations can look unusual; all that matters is that they respect the axioms.
:::

## Review questions

::: question What is $\R^n$, and in which two ways can you read one of its elements?
It is the set of ordered lists $(x_1, \dots, x_n)$ of $n$ real numbers, the Cartesian product of $n$ copies of $\R$. An element can be read as a point or as a vector, that is an arrow from the origin to that point.
:::

::: question How do you add two vectors of $\R^n$, and what does the sum mean in $\R^2$?
Component by component: $(x_1, \dots, x_n) + (y_1, \dots, y_n) = (x_1 + y_1, \dots, x_n + y_n)$. In $\R^2$ it is the parallelogram rule: $v + w$ is the diagonal of the parallelogram that has $v$ and $w$ as sides.
:::

::: question What effect does the product by a scalar $\lambda v$ have as $\lambda$ varies?
It multiplies every coordinate by $\lambda$. It stretches $v$ if $|\lambda| > 1$, shrinks it if $|\lambda| < 1$, reverses its direction if $\lambda < 0$; with $\lambda = 0$ it gives the zero vector, with $\lambda = -1$ the opposite. All the multiples of $v \neq 0$ lie on the line through the origin and $v$.
:::

::: question What are the group axioms? Give an example and a counterexample.
Identity element, associative property, existence of the inverse of every element (plus the commutative property, for commutative groups). Example: $(\Z, +)$, with identity $0$ and inverse $-a$. Counterexample: $(\N, +)$, because $1$ has no opposite in $\N$.
:::

::: question Why is $\Q \setminus \{0\}$ a group with the product and $\Z \setminus \{0\}$ is not?
In $\Q \setminus \{0\}$ every element $\frac ab$ has the inverse $\frac ba$, which is still a non-zero fraction. In $\Z \setminus \{0\}$ the number $2$ has no inverse, because $\frac 12$ is not an integer.
:::

::: question What is a field? Why is $\Z$ not one?
A set with two operations $+$ and $\cdot$ such that $(A, +)$ is a commutative group with identity $0_A$, $(A \setminus \{0_A\}, \cdot)$ is a commutative group with identity $1_A$, and the distributive law holds. $\Z$ is not one because $2$ has no inverse for the product.
:::

::: question What are the five vector space axioms? What does the first contain?
(1) $(V, +)$ is a commutative group; (2) $\lambda(v + w) = \lambda v + \lambda w$; (3) $(\lambda + \mu)v = \lambda v + \mu v$; (4) $(\lambda\mu)v = \lambda(\mu v)$; (5) $1v = v$. The first contains four rules: associative, zero vector, opposite, commutative. Moreover sum and product by a scalar must give results in $V$.
:::

::: question What is the difference between the $0$ of the field and the origin $0_V$?
The $0$ of the field is a scalar, a number. The origin $0_V$ is a vector, the identity element of the sum of $V$: in $\R^3$ it is $(0, 0, 0)$, among polynomials it is the zero polynomial, among functions it is the zero function.
:::

::: question State and prove Proposition 5.5.
$0v = 0_V$ for every $v$. Indeed $0v = (0 + 0)v = 0v + 0v$ by axiom 3; adding the opposite of $0v$ to both sides you get $0_V = 0v$.
:::

::: question Why is $\C$ a vector space over $\R$, while $\R$ is not one over $\C$?
A real times a complex number is a complex number, and the axioms are special cases of the field properties of $\C$. On the contrary, a complex scalar times a real number may not be real: $i \cdot 1 = i \notin \R$.
:::

::: question How do you add two functions $[0, 1] \to \R$? What is the zero vector?
Point by point: $(f + g)(x) = f(x) + g(x)$ and $(\lambda f)(x) = \lambda f(x)$ for every $x \in [0, 1]$. The zero vector is the function that is $0$ at every point.
:::

::: question Why do the polynomials of degree exactly $2$ not form a vector space, while $\R_2[x]$ does?
The sum can lower the degree ($x^2 + (-x^2 + x) = x$) and the zero polynomial does not have degree $2$. In $\R_2[x]$ instead sums and multiples still have degree $\le 2$, and the zero polynomial is there.
:::

::: question How do you prove that a set, with certain operations, is not a vector space?
With a single concrete counterexample: the zero is not in the set, or the sum of two elements or a multiple leave the set, or an axiom fails for certain numbers.
:::

## Glossary

```glossary
Euclidean space $\R^n$ | The set of ordered lists $(x_1, \dots, x_n)$ of $n$ real numbers, with sum and product by a scalar component by component.
Cartesian product | $A \times B$ is the set of ordered pairs $(a, b)$ with $a \in A$ and $b \in B$.
Column vector | A vector written vertically; in the exam papers, written as a row, it appears as ${}^t(x_1, \dots, x_n)$.
Coordinates | The numbers $x_1, \dots, x_n$ that make up the vector $x$.
Origin | The vector $(0, \dots, 0)$ of $\R^n$; in any vector space, the identity element $0_V$ of the sum.
Scalar | An element of the field $\K$, that is a number that multiplies vectors.
Product by a scalar | The operation that associates with $\lambda \in \K$ and $v \in V$ the vector $\lambda v$; in $\R^n$ it multiplies every coordinate by $\lambda$.
Parallelogram rule | In $\R^2$, $v + w$ is the diagonal of the parallelogram with sides $v$ and $w$.
Binary operation | Rule that associates with two elements of a set an element of the same set.
Group | Set with a binary operation that has an identity element, is associative and in which every element has an inverse.
Commutative group | Group in which $a * b = b * a$ also holds for all $a, b$.
Field | Set with $+$ and $\cdot$: commutative group with the sum, commutative group with the product once $0$ is removed, distributive law. Examples: $\Q$, $\R$, $\C$.
Vector space | Set $V$ with a sum and a product by scalars of a field $\K$ that respect the five axioms of Definition 5.4.
Zero vector $0_V$ | The identity element of the sum of $V$: $v + 0_V = v$ for every $v$.
Opposite $-v$ | The vector such that $v + (-v) = 0_V$; $-v = (-1)v$ holds.
The space $\K^n$ | The columns of $n$ elements of $\K$, with term-by-term operations; for example $\C^2$.
Polynomials $\K[x]$ and $\K_k[x]$ | $\K[x]$: all the polynomials with coefficients in $\K$; $\K_k[x]$: those of degree at most $k$. Both are vector spaces.
Operations point by point | For functions: $(f + g)(x) = f(x) + g(x)$ and $(\lambda f)(x) = \lambda f(x)$ at every point $x$.
```

## Checklist

```checklist
- I can write an element of $\R^n$ as a point, as a vector and as a column vector.
- I can add vectors and multiply them by a scalar, also in $\C^n$, and I can draw the sum in $\R^2$ with the parallelogram.
- I can list the group axioms and explain why $(\N, +)$ and $(\Z, \cdot)$ are not groups.
- I can say what a field is and why $\Z$ is not one, while $\{0, 1\}$ with $1 + 1 = 0$ is.
- I can write the five vector space axioms and the four rules contained in the first.
- I can tell the zero of the field from the origin $0_V$ and I can prove that $0v = 0_V$.
- I can explain why $\K^n$, sequences, functions $[0, 1] \to \K$ and $\K[x]$ are vector spaces, and what the zero vector is in each.
- I can prove that $\C$ is a vector space over $\R$ and explain why $\R^2$ is not one over $\C$.
- I can find a counterexample when a set is not a vector space: the zero is missing, or a sum or a multiple leaves the set.
- I can check an axiom with unusual operations, as in exercises 9 and 10.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 5 "Spazi vettoriali I", pp. 20–25: sections 5.A–5.D are followed in order, with the page next to each heading; definitions, propositions and exercises keep their numbering (Definitions 5.1–5.4, Proposition 5.5, Exercises 5.6–5.10).
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §1.5 (groups, uniqueness of the inverse, cancellation, rings and fields), §2.1 (Euclidean space, sum, product by a scalar and their properties), §2.2.1–2.2.4 (definition of vector space, Proposition 2.2.1, the spaces $\K^n$, $\K[x]$ and $F(X, \K)$).
- **Exam sessions cited** (papers and solutions on the 2025/26 Moodle, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): 24/01/2024 (question 5), 08/02/2024 (question 2), 10/07/2024 (question 2), 07/02/2025 (question 2, reported with a solution written for these notes), 03/06/2025 (question 2), 15/01/2026 (questions 3 and 4), 05/02/2026 (question 2), 07/09/2026 (question 3).
- The **"Beyond the handouts"** parts (uniqueness of the inverse and cancellation, why axiom 5 is needed, more consequences of the axioms, the space $F(X, \K)$, the method for the exam and exercises 6–10) are additions in these notes to connect the lesson to the rest of the course and to the exam.
