---
course: MDAG
module: AG
lesson: L07
title: Vector spaces III
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Part 2 (modB) · Linear Algebra and Geometry · Channels A, B and C · Lesson L07
description: >-
  Notes on lesson L07 of Linear Algebra and Geometry (MDAG, part 2): linear dependence and independence, bases,
  standard basis of K^n and of polynomials, dimension of a vector space and the theorem on bases, with exam-style
  quizzes and worked exercises.
lede: >-
  When are some vectors "too many"? Linear independence tells you with a single equation. From there come bases,
  which span the whole space with no waste, and dimension: the number of vectors in a basis, the same for all
  bases. At the end you know why $\dim \K^n = n$, $\dim \K_n[x] = n + 1$ and $\dim M(m, n, \K) = mn$, and how to
  answer the exam questions on bases and dimensions.
material: handouts
facts:
  Handouts: lesson 7 · pp. 31–35
  Book: Martelli, §2.3.1–2.3.7
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 120–150 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 7 "Spazi vettoriali III"; B. Martelli, Geometria e algebra lineare, §2.3.1–2.3.7
italian_file: L07_spazi_vettoriali_3.html
html_notes: notes/MDAG/L07_vector_spaces_3.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L07_spazi_vettoriali_3.md
---

## In brief

- Some vectors $v_1, \dots, v_k$ are **linearly dependent** if a combination of them with coefficients **not all zero** gives the zero vector. They are **linearly independent** if the only combination that gives $0$ is the one with all coefficients equal to zero.
- Dependent means that **one of them is a linear combination of the others** (Proposition 7.2): there is a vector "too many".
- A vector on its own is dependent only if it is the zero vector; two vectors are dependent only if they are **multiples**. With three or more vectors looking at them in pairs is not enough (Example 7.4).
- A subset of independent vectors is still made of independent vectors (Proposition 7.6).
- A **basis** of $V$ is a sequence of **independent** vectors that **span** $V$. Examples: the **standard basis** $e_1, \dots, e_n$ of $\K^n$ and the basis $1, x, \dots, x^n$ of $\K_n[x]$.
- All the bases of a space have the **same number** of vectors (Theorem 7.10): this number is the **dimension** $\dim V$.
- $\dim \K^n = n$, $\dim \K_n[x] = n + 1$, $\dim M(m, n, \K) = mn$; the space $\K[x]$ of all polynomials has infinite dimension.
- If $\dim V = n$, to decide whether $n$ vectors are a basis it is enough to check **one** of the two conditions: independence **or** spanning (Theorem 7.12).
- At the exam there are questions on dimensions (triangular or symmetric matrices, subspaces of polynomials), on "generators and/or independent", on which set is a basis: for example the exams of 24/01/2024, 16/01/2025, 15/01/2026 and 07/09/2026.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## Dimension: where we start (p. 31)

From school you know that a point has dimension $0$, a line dimension $1$, a plane dimension $2$. In this lesson the word "dimension" becomes a precise definition, which holds for every vector space and for every subspace of it: even for $M(2, 3, \R)$ or for $\R_3[x]$, which cannot be drawn.

The idea is to count **how many vectors are needed** to span the space, with no waste. Look at these two cases in $\R^2$ (lesson L06):

- $\Span\big((1, 2), (2, 4)\big)$ is a **line**: the second vector is twice the first and adds nothing. One of the two is "too many".
- $\Span\big((1, 2), (2, 1)\big)$ is **the whole plane**: both are needed, neither is too many.

To count properly you must first recognise the vectors that are too many. That is the job of linear dependence.

```graph
title: $(1, 2)$ and $(2, 4)$ lie on the same line through the origin (dependent); $(1, 2)$ and $(2, 1)$ do not (independent)
x: -1 5
y: -1 5
line: 0 0 2.4 4.8 | grey | dashed | $y = 2x$ | e
vector: 2 4 | blue | thick | $(2, 4)$ | e
vector: 1 2 | accent | thick | $(1, 2)$ | w
vector: 2 1 | amber | thick | $(2, 1)$ | se
```

## Linear dependence and independence (pp. 31–33)

If $(2, 4) = 2 \cdot (1, 2)$, then $2 \cdot (1, 2) - (2, 4) = (0, 0)$: a combination of the two vectors, with coefficients $2$ and $-1$, gives the zero vector. Every time a vector is "too many" this happens, and the definition starts exactly from here.

> [!DEF] 7.1 · Linearly dependent and independent vectors
> Let $V$ be a vector space over $\K$ and let $v_1, \dots, v_k \in V$ be some vectors. We say that these vectors are **linearly dependent** if there exist coefficients $\lambda_1, \dots, \lambda_k \in \K$, **not all zero**, such that
> $$\lambda_1 v_1 + \dots + \lambda_k v_k = 0.$$
> The vectors $v_1, \dots, v_k$ are **linearly independent** if they are not linearly dependent. This important condition can be expressed as follows: the vectors $v_1, \dots, v_k$ are linearly independent if and only if
> $$\lambda_1 v_1 + \dots + \lambda_k v_k = 0 \implies \lambda_1 = \dots = \lambda_k = 0.$$
> In other words, the only linear combination of the $v_1, \dots, v_k$ that can give the zero vector is the trivial one, in which all the coefficients $\lambda_1, \dots, \lambda_k$ are zero.

Piece by piece:

- The combination with **all** coefficients equal to $0$ always gives the zero vector, whatever the vectors: $0v_1 + \dots + 0v_k = 0$. The handouts call it the **trivial** combination. The interesting question is whether there are **others**.
- **Not all zero** means: at least one coefficient different from $0$. The others can also be $0$.
- **Dependent**: there is a **non-trivial** combination that gives $0$. To prove it you just have to **show it**: $2 \cdot (1, 2) - (2, 4) = 0$.
- **Independent**: the implication $\lambda_1 v_1 + \dots + \lambda_k v_k = 0 \Rightarrow$ all the $\lambda_i = 0$. To prove it you start from a zero combination with unknown coefficients and **deduce** that they are all zero: usually you solve a linear system.
- Dependence and independence are properties **of the whole list** of vectors, not of the single vectors.

> [!EXAMPLE] · the check with unknowns, in $\R^2$
> **$(1, 2)$ and $(2, 1)$ are independent.** Suppose $a(1, 2) + b(2, 1) = (0, 0)$, that is $(a + 2b,\ 2a + b) = (0, 0)$:
> $$\begin{cases} a + 2b = 0 \\ 2a + b = 0 \end{cases}$$
> From the first $a = -2b$; substituting into the second, $-4b + b = -3b = 0$, so $b = 0$ and then $a = 0$. The only zero combination is the trivial one: independent.
>
> **$(1, 2)$ and $(2, 4)$ are dependent.** The same system becomes $a + 2b = 0$ and $2a + 4b = 0$: the second equation is twice the first, and every pair with $a = -2b$ works. For example $b = -1$, $a = 2$: $2(1, 2) - (2, 4) = (0, 0)$, with non-zero coefficients.

### One vector too many (p. 31)

If $v_1, \dots, v_k$ are dependent, one of them can be expressed in terms of the others. By hypothesis there is at least one coefficient $\lambda_i \neq 0$. I isolate the term $\lambda_i v_i$, divide everything by $\lambda_i$ (you can, because $\lambda_i \neq 0$ and we are in a field) and move the other terms:

$$v_i = -\frac{\lambda_1}{\lambda_i} v_1 - \dots - \frac{\lambda_k}{\lambda_i} v_k,$$

where $v_i$ does **not** appear on the right. So $v_i$ is a linear combination of the others.

> [!PROP] 7.2
> The vectors $v_1, \dots, v_k$ are dependent $\iff$ one of them can be expressed as a linear combination of the others.

The direction $\Rightarrow$ is the calculation above. The direction $\Leftarrow$, which the handouts leave implicit: if $v_i = \mu_1 v_1 + \dots + \mu_k v_k$ (without the term with $v_i$), bringing everything to the left you get

$$\mu_1 v_1 + \dots + (-1) v_i + \dots + \mu_k v_k = 0,$$

a zero combination in which the coefficient of $v_i$ is $-1 \neq 0$: the vectors are dependent.

> [!IDEA] · what "dependent" means
> Some vectors are dependent when **one is too many**: it can be rebuilt from the others, and removing it does not change the Span. They are independent when **each brings a new direction**, which the others cannot produce.

### One and two vectors (pp. 31–32)

The cases $k = 1$ and $k = 2$ are clear straight away from Proposition 7.2.

- **A vector $v_1$ is dependent $\iff v_1 = 0$.** If $v_1 = 0$, then $1 \cdot v_1 = 0$ with coefficient $1 \neq 0$. If $v_1 \neq 0$ and $\lambda v_1 = 0$, then $\lambda = 0$ (lesson L05, exercise 8).
- **Two vectors $v_1, v_2$ are dependent $\iff$ they are multiples**, that is there is $k \in \K$ with $v_1 = kv_2$ or $v_2 = kv_1$. It is Proposition 7.2 with two vectors: "one is a combination of the other" means "one is a multiple of the other".

> [!EXAMPLE] 7.3 · Two vectors of $\R^2$
> The vectors $v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ and $v_2 = \begin{pmatrix} -2 \\ -2 \end{pmatrix}$ of $\R^2$ are dependent; $w_1 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ and $w_2 = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ are independent because they are not multiples.

The reason, with numbers: $v_2 = -2v_1$, so $2v_1 + v_2 = 0$. Instead $w_2 = kw_1$ would require $2 = k$ (first coordinate) and $1 = 2k$ (second), that is $k = 2$ and $k = \frac 12$ at the same time: impossible. And for the same reason $w_1$ is not a multiple of $w_2$ either.

> [!PITFALL] The zero vector makes everything dependent
> If the zero vector is in the list, the vectors are **always** dependent: $1 \cdot 0 + 0 \cdot v_2 + \dots + 0 \cdot v_k = 0$ is a zero combination with one coefficient equal to $1$.

In the tool below $u = (1, 2)$ and $v = (2, 1)$ are independent: with the combinations $\lambda u + \mu v$ you reach every point of the plane. Drag $v$ to $(2, 4)$ or to $(-1, -2)$: it becomes a multiple of $u$, the tool points it out and the combinations stay on the red line.

```widget vettori
title: Two vectors of the plane: independent or multiples?
u: 1 2
v: 2 1
modo: combinazione
modi: combinazione
lambda: 1
mu: 1
```

### Three or more vectors (p. 32)

With three or more vectors things get more complicated: looking at them two at a time is not enough.

> [!EXAMPLE] 7.4 · Three vectors dependent, but independent in pairs
> The vectors
> $$v_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \qquad v_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}, \qquad v_3 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$$
> of $\R^3$ are dependent, because $v_1 - v_2 - v_3 = 0$. In pairs the three vectors are always independent (they are never multiples), but all three together are not, and unlike the case $k = 2$ you cannot see it at a glance. Indeed each of the three can be written as a combination of the other two: $v_1 = v_2 + v_3$, or $v_2 = v_1 - v_3$, or $v_3 = v_1 - v_2$.

The calculation, coordinate by coordinate:

$$v_1 - v_2 - v_3 = \begin{pmatrix} 1 - 0 - 1 \\ 1 - 1 - 0 \\ 0 - 1 - (-1) \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}.$$

How do you **find** a relation like this, instead of guessing it? You look for $a v_1 + b v_2 + c v_3 = 0$ with $a, b, c$ unknown:

$$\begin{cases} a + c = 0 \\ a + b = 0 \\ b - c = 0 \end{cases}$$

From the first $c = -a$, from the second $b = -a$; the third becomes $-a - (-a) = 0$, always true. So $a$ is free: with $a = 1$ you get $b = -1$, $c = -1$, that is exactly $v_1 - v_2 - v_3 = 0$. A free unknown means infinitely many solutions, and so also non-zero solutions: the vectors are dependent. Geometrically the three vectors lie in the **same plane through the origin**, the plane $x - y + z = 0$ (check: $1 - 1 + 0 = 0$, $0 - 1 + 1 = 0$, $1 - 0 - 1 = 0$).

> [!EXAMPLE] 7.5 · The standard basis of $\R^3$ is independent
> The vectors
> $$e_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \qquad e_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}, \qquad e_3 = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$$
> are independent. If a linear combination produces the zero vector, $\lambda_1 e_1 + \lambda_2 e_2 + \lambda_3 e_3 = 0$, rewriting both sides as vectors you find
> $$\lambda_1 \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + \lambda_2 \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} + \lambda_3 \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} \lambda_1 \\ \lambda_2 \\ \lambda_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}.$$
> From this you deduce $\lambda_1 = \lambda_2 = \lambda_3 = 0$: the only linear combination of $e_1, e_2, e_3$ that gives the zero vector is the trivial one, so the three vectors are independent.

### Subsets of independent vectors (pp. 32–33)

> [!PROP] 7.6
> If $v_1, \dots, v_k$ are independent, then any subset of $\{v_1, \dots, v_k\}$ is also made of independent vectors.

The handouts' explanation, with the steps. Suppose by contradiction that some of them, for convenience the first $h$, are dependent: there is a non-trivial zero combination $\lambda_1 v_1 + \dots + \lambda_h v_h = 0$. Adding the other vectors with coefficient zero,

$$\lambda_1 v_1 + \dots + \lambda_h v_h + 0 v_{h+1} + \dots + 0 v_k = 0,$$

you get a zero combination of **all** the vectors, still non-trivial (the $\lambda_1, \dots, \lambda_h$ were not all zero). This contradicts the independence of $v_1, \dots, v_k$.

In particular, if $v_1, \dots, v_k$ are independent, then:

- the vectors $v_i$ are **all non-zero** (subsets of a single vector);
- the vectors $v_i$ are **pairwise not multiples** (subsets of two vectors).

> [!PITFALL] Necessary conditions, not sufficient ones
> Example 7.4 shows that for $k \ge 3$ these two conditions are **not enough**: $v_1, v_2, v_3$ are non-zero and pairwise not multiples, and yet they are dependent. With three or more vectors you have to set up the zero combination and solve the system.

> [!BEYOND] · how many independent vectors there are in a list: Gauss's method
> For long lists the system becomes heavy. In lesson L13 the handouts use **Gauss's method** (lesson L11) and the **rank** (lesson L08): you write the vectors as rows of a matrix and do moves of the type $R_2 \to R_2 - R_1$. Each move replaces a vector with its difference with a multiple of another, and the Span does not change. At the end the non-zero rows are independent, and their number, the rank, tells you how many independent vectors there were. In the tool the matrix has as rows the three vectors of Example 7.4: a row of zeros comes out and $\rk = 2$. Then try the rows `1 1 2`, `-1 1 -1`, `0 1 1` (the vectors $v_1, v_2, v_4$ of Exercise 7.15): $\rk = 3$, independent.

```widget gauss
title: How many independent vectors? One vector per row
matrice: 1 1 0; 0 1 1; 1 0 -1
modo: rango
modi: rango
```

## Bases (pp. 33–34)

In the plane every vector is written with two numbers, for example $(5, 3) = 5(1, 0) + 3(0, 1)$. The two vectors $(1, 0)$ and $(0, 1)$ are enough to build the whole plane, and neither of the two is too many. A list like this is called a basis. The handouts present it as one of the most important definitions of the course.

> [!DEF] 7.7 · Basis
> Let $V$ be a vector space. A sequence $v_1, \dots, v_n \in V$ of vectors is a **basis** if both these conditions are satisfied:
> 1. the vectors $v_1, \dots, v_n$ are independent;
> 2. the vectors $v_1, \dots, v_n$ span $V$.

Piece by piece:

- **They span $V$** means $V = \Span(v_1, \dots, v_n)$: any vector of $V$ can be expressed as a linear combination of the $v_1, \dots, v_n$. No vector is left out.
- **Independent**: none of the $v_i$ is too many.
- **Both** conditions are needed. Few vectors can be independent without spanning; many vectors can span without being independent.
- It is a **sequence**: the order matters too, and it will become important with coordinates (lesson L13).

| Vectors of $\R^2$ | independent? | do they span $\R^2$? | basis? |
|---|---|---|---|
| $(1, 0)$ | yes | no: only the $x$-axis | no |
| $(1, 0),\ (0, 1),\ (1, 1)$ | no: $(1, 1) = (1, 0) + (0, 1)$ | yes | no |
| $(1, 0),\ (0, 1)$ | yes | yes | **yes** |
| $(1, 2),\ (2, 1)$ | yes | yes: $(a, b) = \frac{2b - a}3 (1, 2) + \frac{2a - b}3 (2, 1)$ | **yes** |
| $(1, 2),\ (2, 4)$ | no: multiples | no: only the line $y = 2x$ | no |

In the second-to-last row there is another basis of $\R^2$: a space has infinitely many bases.

> [!EXAMPLE] 7.8 · The standard basis of $\K^n$
> The elements
> $$e_1 = \begin{pmatrix} 1 \\ 0 \\ \vdots \\ 0 \end{pmatrix}, \quad e_2 = \begin{pmatrix} 0 \\ 1 \\ \vdots \\ 0 \end{pmatrix}, \quad \dots, \quad e_n = \begin{pmatrix} 0 \\ 0 \\ \vdots \\ 1 \end{pmatrix}$$
> form a basis of $\K^n$, called the **standard basis**.
>
> **They are independent.** If $\lambda_1 e_1 + \dots + \lambda_n e_n = 0$, translated into vectors it becomes
> $$\begin{pmatrix} \lambda_1 \\ \lambda_2 \\ \vdots \\ \lambda_n \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ \vdots \\ 0 \end{pmatrix},$$
> so $\lambda_1 = \dots = \lambda_n = 0$.
>
> **They span $\K^n$.** A generic vector $x \in \K^n$ can be written as a linear combination of $e_1, \dots, e_n$:
> $$x = \begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix} = x_1 \begin{pmatrix} 1 \\ 0 \\ \vdots \\ 0 \end{pmatrix} + x_2 \begin{pmatrix} 0 \\ 1 \\ \vdots \\ 0 \end{pmatrix} + \dots + x_n \begin{pmatrix} 0 \\ 0 \\ \vdots \\ 1 \end{pmatrix} = x_1 e_1 + x_2 e_2 + \dots + x_n e_n.$$

The vector $e_i$ has a $1$ in place $i$ and zeros elsewhere. For example in $\R^3$:

$$\begin{pmatrix} 5 \\ -2 \\ 7 \end{pmatrix} = 5e_1 - 2e_2 + 7e_3:$$

the coefficients with respect to the standard basis are exactly the coordinates of the vector.

> [!EXAMPLE] 7.9 · The standard basis of polynomials
> In the space $\K_n[x]$ of polynomials of degree less than or equal to $n$, the elements $1, x, x^2, \dots, x^n$ form a basis, called the **standard basis**.
>
> **They are independent**: if $\lambda_0 \cdot 1 + \lambda_1 x + \dots + \lambda_n x^n = 0$, then $\lambda_0 = \dots = \lambda_n = 0$.
>
> **They span $\K_n[x]$**: each polynomial of degree less than or equal to $n$ is written as $p(x) = a_n x^n + \dots + a_1 x + a_0$, and this expression is already a linear combination of the vectors $1, x, \dots, x^n$, with coefficients $a_0, a_1, \dots, a_n$.

Why does independence hold? On the right of the equals sign there is the **zero polynomial**, the one with all coefficients equal to $0$. Two polynomials are equal when they have the same coefficients, so $\lambda_0 + \lambda_1 x + \dots + \lambda_n x^n$ is the zero polynomial only if every $\lambda_i$ is $0$. (Seen as a function, a non-zero polynomial of degree $\le n$ has at most $n$ roots, lesson L04: it cannot be $0$ at every point.)

> [!PITFALL] $\K_n[x]$ has $n + 1$ basis vectors, not $n$
> The standard basis of $\K_2[x]$ is $1, x, x^2$: **three** polynomials, because there is also the constant $1$. For $\K_n[x]$ the vectors are $1, x, \dots, x^n$: $n + 1$ in all.

> [!BEYOND] · what a basis is for: coordinates
> Martelli's book (Proposition 2.3.11) shows that, once a basis $v_1, \dots, v_n$ is fixed, **every vector can be written in only one way** as $\lambda_1 v_1 + \dots + \lambda_n v_n$. If there were two expressions, $\sum \lambda_i v_i = \sum \mu_i v_i$, subtracting you would get $\sum (\lambda_i - \mu_i) v_i = 0$, and by independence $\lambda_i = \mu_i$ for every $i$. The numbers $\lambda_1, \dots, \lambda_n$ are called the **coordinates** of the vector with respect to the basis. For example, with respect to the basis $(1, 1), (-1, 1)$ of $\R^2$, the vector $(2, 0) = 1 \cdot (1, 1) - 1 \cdot (-1, 1)$ has coordinates $1, -1$. Coordinates are studied in lesson L13.

## Dimension (pp. 34–35)

A line through the origin in $\R^2$ has bases with one vector: $(1, 2)$, or $(2, 4)$, or $(-1, -2)$. The plane $\R^2$ has bases with two vectors: $(1, 0), (0, 1)$, or $(1, 2), (2, 1)$. Every space has infinitely many bases, but it seems that the **number** of vectors is always the same. It is so, and it is the fundamental theorem of the lesson.

> [!THEOREM] 7.10
> If a vector space $V$ has a basis made of $n$ vectors, then every basis of $V$ contains $n$ vectors.

This theorem makes it possible to define an intuitive concept rigorously.

> [!DEF] 7.11 · Dimension
> If a vector space $V$ has a basis $v_1, \dots, v_n$, we say that $V$ has **dimension** $n$. If $V$ has no finite basis, we say that it has dimension $\infty$.

Piece by piece:

- The dimension is written $\dim V$.
- The definition is **well posed** thanks to Theorem 7.10: $V$ has many bases, but they all have the same number $n$ of elements, so the number $n$ does not depend on the basis chosen. Without the theorem, two people could find two different "dimensions" for the same space.
- To compute a dimension it is enough to find **one** basis and count its vectors.
- The space $\{0\}$ contains only the zero vector, which on its own is dependent: it has no bases with at least one vector. By convention its basis is the empty list and $\dim\{0\} = 0$ (Martelli's book: $V$ has dimension $0$ if and only if $V = \{0\}$). So a point has dimension $0$, as at school.

With the bases already found:

| Space | a basis | dimension |
|---|---|---:|
| $\K^n$ | $e_1, \dots, e_n$ (Example 7.8) | $n$ |
| $\K_n[x]$, polynomials of degree $\le n$ | $1, x, \dots, x^n$ (Example 7.9) | $n + 1$ |
| $M(m, n, \K)$ | the matrices $e_{ij}$ (Exercise 7.13) | $mn$ |
| $\K[x]$, all polynomials | no finite basis | $\infty$ |
| $\{0\}$ | the empty list | $0$ |

**Why $\K[x]$ has infinite dimension.** The handouts mention it as a consequence of the definition; the reason is this. Take any finite list of polynomials $p_1, \dots, p_k$ and call $N$ the largest of their degrees. Every linear combination of the $p_i$ has degree at most $N$, so $x^{N+1}$ is not a combination of them. No finite list spans $\K[x]$: there is no finite basis.

> [!EXAMPLE] · the dimension of some subspaces
> - The line $y = 2x$ of $\R^2$ is $\Span((1, 2))$, and $(1, 2) \neq 0$ is independent: a basis with one vector, **dimension 1**.
> - The plane $z = x + y$ of $\R^3$ is $\Span((1, 0, 1), (0, 1, 1))$ (Exercise 6.10); the two vectors are not multiples, so they are independent: **dimension 2**.
> - The matrices $\begin{pmatrix} a & b \\ b & a \end{pmatrix}$ of Exercise 6.9 are $\Span(I, J)$ with $I$ and $J$ not multiples: **dimension 2**.
> - The diagonal matrices $D(3)$: every diagonal matrix is $a e_{11} + b e_{22} + c e_{33}$, and the three matrices are independent (each has a $1$ where the others have $0$): **dimension 3**.

> [!BEYOND] · why all bases have the same number of vectors
> The handouts state Theorem 7.10 without proof. Martelli's book (§2.3.4) deduces it from an **exchange lemma**: if $v_1, \dots, v_n$ span $V$ and $w_1, \dots, w_n$ are independent, then $w_1, \dots, w_n$ also span $V$. The idea is to replace the $v$ with the $w$ one at a time, without ever losing the spanning property. The full proof is in the box below.

> [!PROOF] of Theorem 7.10, from Martelli's book
> **Lemma.** If $v_1, \dots, v_n$ span $V$ and $w_1, \dots, w_n \in V$ are independent, then $w_1, \dots, w_n$ also span $V$.
>
> *Proof of the lemma.* You exchange one vector at a time. Suppose you have already shown that $V = \Span(w_1, \dots, w_{s-1}, v_s, \dots, v_n)$ (at the start, with $s = 1$, it is the hypothesis). Then $w_s$ is a combination of these vectors:
> $$w_s = \lambda_1 w_1 + \dots + \lambda_{s-1} w_{s-1} + \lambda_s v_s + \dots + \lambda_n v_n.$$
> At least one coefficient $\lambda_i$ with $i \ge s$ is non-zero: otherwise this would be a dependence relation among $w_1, \dots, w_s$, which instead are independent (Proposition 7.6). Reordering the $v$, suppose $\lambda_s \neq 0$. Dividing by $\lambda_s$ you get $v_s$ as a combination of $w_1, \dots, w_s, v_{s+1}, \dots, v_n$; so these vectors still span the whole of $V$. After $n$ steps, $V = \Span(w_1, \dots, w_n)$.
>
> *Proof of the theorem.* By contradiction, let $v_1, \dots, v_n$ and $w_1, \dots, w_m$ be two bases of $V$ with $n < m$. The $v_i$ span $V$ and $w_1, \dots, w_n$ are independent (a subset of independent vectors). By the lemma, $w_1, \dots, w_n$ span $V$, so $w_{n+1}$ is a linear combination of them: then $w_1, \dots, w_m$ are dependent (Proposition 7.2). Contradiction.

### One condition out of two is enough (p. 35)

To prove that some vectors are a basis you would have to check two things: that they are independent and that they span. The next theorem says that, if the **number** of vectors is the right one, one is enough.

> [!THEOREM] 7.12
> If $\dim V = n$ and $\{v_1, \dots, v_n\}$ is a set of $n$ vectors, then $v_1, \dots, v_n$ form a basis of $V$ if and only if **one** of the two conditions of the definition of basis holds (while the other condition then holds automatically).

Piece by piece:

- The key hypothesis is that the vectors are **exactly $n = \dim V$**.
- In practice you almost always check **independence**, which is a system with zero constant term.
- Example: in $\R^3$ three independent vectors are always a basis; three vectors that span $\R^3$ are always independent.

> [!EXAMPLE] · a basis of $\R^2$ in one line
> $(1, 2)$ and $(2, 1)$ are not multiples, so they are independent (Example 7.3). They are $2 = \dim \R^2$ vectors: by Theorem 7.12 they are a basis of $\R^2$, with no need to check that they span.

> [!PITFALL] The theorem holds only with the right number of vectors
> Two independent vectors of $\R^3$ are **not** a basis: they are $2 \neq 3$ vectors. Four vectors of $\R^3$ that span are **not** a basis: they are too many, and they are necessarily dependent (box below).

> [!BEYOND] · the consequences to use in the quizzes
> From Martelli's book (Propositions 2.3.23 and 2.3.25 and the algorithms of §2.3.5–2.3.6), in a space $V$ with $\dim V = n$:
> - **more than $n$ vectors are always dependent**: if they were independent, the first $n$ would be a basis (Theorem 7.12) and the others would be combinations of them;
> - **fewer than $n$ vectors never span $V$**: from a list of generators you can remove one at a time the vectors that are too many (Proposition 7.2) until you are left with independent vectors, that is with a basis, which would have fewer than $n$ vectors;
> - **$\dim \Span(v_1, \dots, v_k) \le k$**, and it is equal to the maximum number of independent vectors among $v_1, \dots, v_k$ (it is the remark that lesson L08 uses for the rank);
> - **every subspace $U \subset V$ has $\dim U \le \dim V$**, and $\dim U = \dim V$ only if $U = V$;
> - **independent vectors can be completed to a basis**: as long as they do not span, you add a vector outside their Span, and the list stays independent (exercise 11).

> [!PROOF] of Theorem 7.12, from Martelli's book
> Let $v_1, \dots, v_n$ be vectors of $V$ with $\dim V = n$.
> - **If they are independent, they span.** Any basis of $V$ has $n$ vectors that span; by the exchange lemma (previous box), the $v_i$ too, independent and $n$ in number, span $V$.
> - **If they span, they are independent.** If they were dependent, one of them would be a combination of the others (Proposition 7.2) and could be removed without changing the Span. Repeating, you would reach a basis of $V$ with fewer than $n$ vectors, against Theorem 7.10.

> [!BEYOND] · where to find it in the book
> In Martelli's book: dependence and independence in **§2.3.1** (pp. 60–62, with Proposition 2.3.4 = Proposition 7.6); bases and standard bases of $\K^n$, $\K_n[x]$ and $M(m, n, \K)$ in **§2.3.2** (pp. 62–64); coordinates in **§2.3.3** (pp. 64–65); dimension, exchange lemma and infinite dimension of $\K[x]$ in **§2.3.4** (pp. 65–67); completion and extraction algorithms and Proposition 2.3.23 (= Theorem 7.12) in **§2.3.5–2.3.6** (pp. 67–69); dimension of subspaces in **§2.3.7** (pp. 69–70).

## Towards the exam

The Linear Algebra and Geometry written test has 10 multiple-choice questions with 5 answers each (you need at least 6 points to have the 2 problems worth 11 points marked), it lasts 2 hours, with no calculator and only 4 handwritten pages; the 2026/27 exam sessions are on 22/01 and 05/02/2027 at 14:00. All the details are in lesson L01.

**What you need from this lesson for the exam**

This lesson is among the most present in the quizzes. The typical questions, with the exam sessions in which they came up:

| Type of question | Exam sessions |
|---|---|
| dimension of a space of matrices | $T^s(3)$: 24/01/2024, question 5; $S(3)$: 15/01/2026, question 4 |
| dimension of a Span or of a subspace | 02/09/2025, question 10; 15/01/2026, question 3; 10/07/2025, question 2; 03/07/2026, question 1 |
| "are they generators and/or linearly independent?" | 06/09/2024, question 2; 16/01/2025, question 2 |
| which set is a basis, or completes a basis | 10/06/2024, question 3; 07/09/2026, question 2 |

In the problems worth 11 points bases are always needed: "find a basis of $\Ker$ and its dimension" (02/09/2025, problem 11), bases of eigenvectors, orthonormal bases. You will see them from lesson L14 on.

> [!EXAM] Exam of 16/01/2025, question 2
> **Text.** Are the polynomials $1$, $x$, $x^2$ and $1 + 2x + x^2$ of $\R_2[x]$ generators and/or linearly independent? (a) They are linearly independent, but not generators. (b) They are neither linearly independent nor generators. (c) The question is ill-posed: polynomials are not vectors. (d) They are generators, but not linearly independent. (e) They are both generators and linearly independent.
>
> **Solution.** (d). The first three are the standard basis of $\R_2[x]$ (Example 7.9), so they already span: adding a vector they still span. But they are $4$ vectors in a space of dimension $3$, so they are dependent; explicitly $1 + 2x + x^2 = 1 \cdot 1 + 2 \cdot x + 1 \cdot x^2$. Option (c) is false: polynomials are vectors of the vector space $\R_2[x]$ (lesson L05).

> [!EXAM] Exam of 07/09/2026, question 2
> **Text.** Let $A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$, $C = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, $D = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$, $E = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$, $F = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$. Which set forms a basis of $M(2, \R)$? (a) $\{A, B, F\}$; (b) $\{A, C, D, E\}$; (c) $\{A, B, E, F\}$; (d) $\{B, C, D, E, F\}$; (e) $\{B, C, F\}$.
>
> **Solution.** (c). Since $\dim M(2, \R) = 4$, a basis has exactly $4$ elements: only (b) and (c) remain, and by Theorem 7.12 it is enough to check independence. In (b) $C + D = A$: dependent. In (c) I impose $x_1 A + x_2 B + x_3 E + x_4 F = 0$:
> $$\begin{pmatrix} x_2 + x_3 + x_4 & x_1 + x_3 + x_4 \\ x_1 + x_3 & x_3 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}.$$
> From the bottom-right entry $x_3 = 0$; then $x_1 = 0$ (bottom left), $x_4 = 0$ (top right), $x_2 = 0$ (top left). Only the trivial combination: it is a basis.

> [!EXAM] Exam of 15/01/2026, question 4
> **Text.** The dimension of the space $S(3)$ of symmetric $3 \times 3$ matrices is: (a) nine; (b) zero; (c) three; (d) six; (e) $S(3)$ has no dimension because it is not a vector space.
>
> **Solution.** (d). A symmetric $3 \times 3$ matrix is determined by the $6$ coefficients on the diagonal and above it:
> $$\begin{pmatrix} a & b & c \\ b & d & e \\ c & e & f \end{pmatrix} = a e_{11} + d e_{22} + f e_{33} + b(e_{12} + e_{21}) + c(e_{13} + e_{31}) + e(e_{23} + e_{32}).$$
> The six matrices on the right span $S(3)$ and are independent: if the combination is the zero matrix, each coefficient appears on its own in some entry, so it is zero. Option (e) is false by Proposition 6.5. With the same reasoning $\dim T^s(3) = 6$ (exam of 24/01/2024, question 5) and $\dim A(3) = 3$.

> [!METHOD] · "Are they generators and/or independent?"
> They are $k$ vectors in a space $V$ of dimension $n$.
> 1. **Count.** If $k > n$ they are certainly dependent; if $k < n$ they certainly do not span $V$.
> 2. **Find the vectors that are too many.** Set up $\lambda_1 v_1 + \dots + \lambda_k v_k = 0$ and solve, or look for a vector that is a combination of the others. Removing the vectors that are too many you get $r$ independent vectors, and $r = \dim \Span(v_1, \dots, v_k)$.
> 3. **Conclude.** They are independent if and only if $r = k$; they span $V$ if and only if $r = n$; they are a basis if and only if $r = k = n$.
>
> The answers of the type "the question is ill-posed" (there are too many vectors, polynomials are not vectors) are traps: the question always makes sense.

> [!METHOD] · the dimension of a subspace
> 1. Write the generic element of the subspace using the conditions to eliminate the dependent variables: some **free parameters** remain.
> 2. Collect the parameters: the generic element becomes a linear combination, with one vector for each parameter. The subspace is the Span of those vectors.
> 3. Check that they are independent (usually they are: each parameter appears on its own in some coordinate).
> 4. The dimension is the number of vectors, that is the number of free parameters.
>
> Example: $W = \{p \in \R_3[x] \mid p(2) = 0\}$. By lesson L04, $p(2) = 0$ means $p(x) = (x - 2)(a + bx + cx^2)$, so $W = \Span\big(x - 2,\ x(x - 2),\ x^2(x - 2)\big)$. The three polynomials have different degrees, $1$, $2$ and $3$, so they are independent (exercise 5): $\dim W = 3$. It is the type of question of the exams of 10/07/2025 (question 2, with $p(6) = 0$) and 03/07/2026 (question 1, with $p(2) = p(-2) = 0$, where the dimension is $2$).

> [!PITFALL] The most common mistakes
> - Saying that $\dim \K_n[x] = n$: it is $n + 1$, because of the constant.
> - Saying that vectors that are pairwise not multiples are independent: it holds only for two vectors (Example 7.4).
> - Using Theorem 7.12 with the wrong number of vectors.
> - Confusing "they span" with "they are a basis": a basis must also be independent.
> - Choosing "it is not a vector space" for $S(3)$, $T^s(3)$ or a Span: they are always subspaces. That answer is right only for sets that do not contain zero, like $O(2)$ in the exam of 10/07/2024 (question 2).

> [!EXAM] The 4-page sheet
> From this lesson: the definition of independence as an implication; Proposition 7.2; the cases with one and two vectors; the definition of basis; the table of dimensions ($\K^n$, $\K_n[x]$, $M(m, n)$, and then $D(n) = n$, $T^s(n) = S(n) = \frac{n(n+1)}2$, $A(n) = \frac{n(n-1)}2$); Theorem 7.12; the counting rule (more than $n$ vectors are dependent, fewer than $n$ do not span).

## Quiz

```quiz
Q: Are the vectors $(1, 0, 1)$, $(0, 1, 1)$, $(1, 1, 2)$, $(0, 0, 1)$ of $\R^3$ generators and/or linearly independent?
- They are linearly independent, but not generators.
- They are neither linearly independent nor generators.
- The question is ill-posed: the vectors are 4 and not 3.
+ They are generators, but not linearly independent.
- They are both generators and linearly independent.
= Four vectors in $\R^3$ are always dependent; indeed $(1, 1, 2) = (1, 0, 1) + (0, 1, 1)$. They span: $(1, 0, 1)$, $(0, 1, 1)$ and $(0, 0, 1)$ are independent (from $a(1, 0, 1) + b(0, 1, 1) + c(0, 0, 1) = 0$ you get $a = 0$, $b = 0$ and then $c = 0$), so by Theorem 7.12 they are already a basis of $\R^3$. Similar to the exam of 06/09/2024, question 2.

Q: Are the polynomials $1 + x$, $1 - x$ and $2$ of $\R_2[x]$ generators and/or linearly independent?
- They are linearly independent, but not generators.
+ They are neither linearly independent nor generators.
- They are generators, but not linearly independent.
- They are both generators and linearly independent, that is a basis.
- The question is ill-posed: $2$ is a number, not a polynomial.
= $(1 + x) + (1 - x) = 2$, so they are dependent. All their combinations have degree $\le 1$, so you cannot get $x^2$: they do not span $\R_2[x]$. The Span is $\R_1[x]$, of dimension $2$. And $2$ is a polynomial of degree $0$. Similar to the exam of 16/01/2025, question 2.

Q: What is the dimension of $\Span\big((1, 1, 0),\ (0, 1, 1),\ (1, 2, 1)\big)$?
- $0$
- $1$
+ $2$
- $3$
- $4$
= $(1, 2, 1) = (1, 1, 0) + (0, 1, 1)$, so the third vector is too many. The first two are not multiples, so they are independent: they are a basis of the Span, which has dimension $2$ (a plane). Similar to the exam of 02/09/2025, question 10.

Q: What is the dimension of the space $A(3)$ of skew-symmetric $3 \times 3$ matrices?
- Nine.
- Six.
+ Three.
- Zero.
- $A(3)$ has no dimension because it is not a vector space.
= A skew-symmetric $3 \times 3$ matrix has a zero diagonal and is determined by $a_{12}$, $a_{13}$, $a_{23}$: it is $a F_1 + b F_2 + c F_3$ with three independent matrices (lesson L06, exercise 9). $A(3)$ is a subspace by Proposition 6.5. Similar to the exams of 24/01/2024 (question 5) and 15/01/2026 (question 4), on $T^s(3)$ and $S(3)$, both of dimension $6$.

Q: Let $v_1, \dots, v_5$ be five vectors of $\R^3$ and let $X = \Span(v_1, \dots, v_5)$. Which statement is always true?
- $\dim X = 5$
+ $\dim X \le 3$
- $X = \R^3$
- $v_1, \dots, v_5$ are linearly independent.
- $\dim X$ is not well defined, because $X$ is not necessarily a subspace.
= $X$ is a subspace of $\R^3$ (Proposition 6.7), and a subspace of $\R^3$ has dimension at most $3$: a basis of it is made of independent vectors of $\R^3$, which are at most $3$. Five vectors in $\R^3$ are always dependent, so $\dim X = 5$ is impossible; and $X = \R^3$ is not guaranteed (for example if they are all multiples of the same vector). Similar to the exam of 15/01/2026, question 3, where with three vectors the right answer was $\dim X \le 3$.

Q: Let $A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$, $C = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, $D = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$, $E = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$. Which set is a basis of $M(2, \R)$?
+ $\{A, B, C, D\}$
- $\{A, B, C\}$
- $\{A, C, D, E\}$
- $\{A, B, C, D, E\}$
- $\{B, D, E\}$
= A basis of $M(2, \R)$ has $4$ elements: three or five will not do. $aA + bB + cC + dD = \begin{pmatrix} a + b & c + d \\ c - d & a - b \end{pmatrix} = 0$ gives $a + b = a - b = 0$ and $c + d = c - d = 0$, so all zero: $\{A, B, C, D\}$ is a basis (Theorem 7.12). In $\{A, C, D, E\}$ instead $E = A + C$. Similar to the exam of 07/09/2026, question 2.

Q: Which polynomial $s(x)$ can be added to $1 + x$ and $x + x^2$ to get a basis of $\R_2[x]$?
+ $s(x) = 1$
- $s(x) = 1 + 2x + x^2$
- $s(x) = 1 - x^2$
- $s(x) = x^3$
- $s(x) = 0$
= With $s = 1$: from $a(1 + x) + b(x + x^2) + c = (a + c) + (a + b)x + bx^2 = 0$ you get $b = 0$, then $a = 0$, then $c = 0$; three independent vectors in a space of dimension $3$ are a basis. The others: $1 + 2x + x^2 = (1 + x) + (x + x^2)$ and $1 - x^2 = (1 + x) - (x + x^2)$ depend on the first two; $x^3 \notin \R_2[x]$; the zero polynomial makes the list dependent. Similar to the exam of 10/06/2024, question 3.

Q: In $\R^3$, three linearly independent vectors:
+ are always a basis of $\R^3$.
- may not span $\R^3$.
- are a basis only if they are $e_1, e_2, e_3$.
- always span a plane.
- are a basis only if none has zero coordinates.
= It is Theorem 7.12: they are $3 = \dim \R^3$ independent vectors, so they span and are a basis. The bases of $\R^3$ are infinitely many, and the vectors can have zero coordinates (like $e_1, e_2, e_3$ themselves).

Q: What is the dimension of the subspace $W = \{p(x) \in \R_3[x] \mid p(2) = 0\}$?
N: 3
= $p(2) = 0$ means $p(x) = (x - 2)(a + bx + cx^2)$, so $W = \Span\big(x - 2,\ x(x - 2),\ x^2(x - 2)\big)$, three polynomials of different degrees and hence independent: $\dim W = 3$. Similar to the exam of 10/07/2025, question 2 (with $p(6) = 0$).

Q: For which values of $k \in \R$ are the vectors $(1, k)$ and $(k, 4)$ of $\R^2$ linearly dependent?
- Only for $k = 2$.
+ For $k = 2$ and for $k = -2$.
- Only for $k = 4$.
- For no value of $k$.
- For every value of $k$.
= Two vectors are dependent if and only if they are multiples. $(k, 4) = t(1, k)$ requires $t = k$ and $4 = tk = k^2$, that is $k = \pm 2$ (and $(1, k)$ is never zero, so this case is enough). With $k = 2$: $(2, 4) = 2(1, 2)$; with $k = -2$: $(-2, 4) = -2(1, -2)$.
```

## Exercises

::: exercise intermediate Exercise 7.13 of the handouts: the standard basis of matrices
For each $1 \le i \le m$ and $1 \le j \le n$ we denote by $e_{ij}$ the $m \times n$ matrix that has all zeros, except a $1$ in the entry in row $i$ and column $j$. For example, for $2 \times 2$ matrices:
$$e_{11} = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \quad e_{12} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \quad e_{21} = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}, \quad e_{22} = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}.$$
Prove that the matrices $e_{ij}$, with $1 \le i \le m$ and $1 \le j \le n$, form a basis of $M(m, n, \K)$. In particular $\dim M(m, n, \K) = mn$.
::: solution
It is the same proof as for the standard basis of $\K^n$ (Example 7.8), with two indices instead of one.

**They span.** Every matrix is written as a combination of the $e_{ij}$, with its coefficients:
$$A = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & & \vdots \\ a_{m1} & \cdots & a_{mn} \end{pmatrix} = \sum_{i, j} a_{ij} e_{ij},$$
because $a_{ij} e_{ij}$ is the matrix with $a_{ij}$ in entry $(i, j)$ and zeros elsewhere, and adding all these matrices you fill all the entries. For example
$$\begin{pmatrix} 3 & -1 \\ 0 & 5 \end{pmatrix} = 3e_{11} - e_{12} + 0e_{21} + 5e_{22}.$$

**They are independent.** If $\sum_{i, j} \lambda_{ij} e_{ij} = 0$, writing out the matrices
$$\begin{pmatrix} \lambda_{11} & \cdots & \lambda_{1n} \\ \vdots & & \vdots \\ \lambda_{m1} & \cdots & \lambda_{mn} \end{pmatrix} = \begin{pmatrix} 0 & \cdots & 0 \\ \vdots & & \vdots \\ 0 & \cdots & 0 \end{pmatrix},$$
so $\lambda_{ij} = 0$ for all $i, j$.

**Dimension.** There is one matrix $e_{ij}$ for each entry: $m$ rows times $n$ columns, that is $mn$ matrices. So $\dim M(m, n, \K) = mn$; for example $\dim M(2, 3) = 6$ and $\dim M(3) = 9$.
:::

::: exercise basic Exercise 7.14 of the handouts: a basis of $\R^2$
Prove that the vectors $\begin{pmatrix} -1 \\ 1 \end{pmatrix}$ and $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$ form a basis of $\R^2$.
::: solution
**With Theorem 7.12.** They are two vectors and $\dim \R^2 = 2$, so independence is enough. Two vectors are dependent only if they are multiples: $(2, 1) = k(-1, 1)$ would require $k = -2$ (first coordinate) and $k = 1$ (second), impossible. So they are independent, and they are a basis.

**Directly, also checking that they span.** I look for $t, u$ with $t(-1, 1) + u(2, 1) = (x, y)$ for any vector $(x, y)$:
$$\begin{cases} -t + 2u = x \\ t + u = y \end{cases}$$
Adding the two equations: $3u = x + y$, so $u = \frac{x + y}3$. From the second: $t = y - u = \frac{-x + 2y}3$. The solution always exists, so the vectors span $\R^2$; and it is unique (for $(x, y) = (0, 0)$ it gives $t = u = 0$), so they are independent.

Check with $(x, y) = (1, 2)$: $u = 1$, $t = 1$, and indeed $(-1, 1) + (2, 1) = (1, 2)$.
:::

::: exercise intermediate Exercise 7.15 of the handouts: dependent and independent in $\R^3$
Consider the vectors of $\R^3$
$$v_1 = \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix}, \quad v_2 = \begin{pmatrix} -1 \\ 1 \\ -1 \end{pmatrix}, \quad v_3 = \begin{pmatrix} 1 \\ 5 \\ 4 \end{pmatrix}, \quad v_4 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}.$$
Show that $v_1, v_2, v_3$ are dependent and $v_1, v_2, v_4$ independent.
::: solution
**$v_1, v_2, v_3$ are dependent.** I try to write $v_3$ as a combination of $v_1$ and $v_2$ (Proposition 7.2): I look for $a, b$ with $a v_1 + b v_2 = v_3$, that is
$$\begin{cases} a - b = 1 \\ a + b = 5 \\ 2a - b = 4 \end{cases}$$
Adding the first two: $2a = 6$, so $a = 3$ and $b = 2$. The third: $2 \cdot 3 - 2 = 4$. True. So $v_3 = 3v_1 + 2v_2$, that is $3v_1 + 2v_2 - v_3 = 0$: a zero combination with non-zero coefficients.

Check: $3(1, 1, 2) + 2(-1, 1, -1) = (3 - 2,\ 3 + 2,\ 6 - 2) = (1, 5, 4) = v_3$.

**$v_1, v_2, v_4$ are independent.** Suppose $a v_1 + b v_2 + c v_4 = 0$:
$$\begin{cases} a - b = 0 \\ a + b + c = 0 \\ 2a - b + c = 0 \end{cases}$$
From the first $b = a$. Substituting: the second gives $2a + c = 0$, the third $a + c = 0$. Subtracting these two: $a = 0$; so $c = 0$ and $b = 0$. Only the trivial combination: independent. Being three independent vectors in $\R^3$, they are also a basis of $\R^3$ (Theorem 7.12).
:::

::: exercise basic Dependent or independent?
For each list say whether the vectors are dependent or independent. If they are dependent, write a non-trivial combination equal to zero.
(a) $(3, -6)$ and $(-1, 2)$ in $\R^2$.
(b) $(1, 0, 2)$ and $(2, 0, 1)$ in $\R^3$.
(c) $(1, 2)$, $(1, 1)$ and $(2, 0)$ in $\R^2$.
(d) $(1, 2, 3)$, $(0, 0, 0)$ and $(4, 5, 6)$ in $\R^3$.
(e) $(1, 2, 3)$, $(0, 1, 5)$ and $(0, 0, 2)$ in $\R^3$.
::: solution
(a) **Dependent**: $(3, -6) = -3 \cdot (-1, 2)$, so $(3, -6) + 3(-1, 2) = (0, 0)$.

(b) **Independent**: they are two vectors that are not multiples. From $(2, 0, 1) = k(1, 0, 2)$ you would need $k = 2$ and $1 = 2k$, that is $k = \frac 12$: impossible.

(c) **Dependent**: they are three vectors in $\R^2$, which has dimension $2$. A relation (from Martelli's book, Example 2.3.2): $-2(1, 2) + 4(1, 1) - (2, 0) = (-2 + 4 - 2,\ -4 + 4 - 0) = (0, 0)$.

(d) **Dependent**: the zero vector is there, and $0 \cdot (1, 2, 3) + 1 \cdot (0, 0, 0) + 0 \cdot (4, 5, 6) = 0$.

(e) **Independent.** From $a(1, 2, 3) + b(0, 1, 5) + c(0, 0, 2) = 0$: the first coordinate gives $a = 0$; the second $2a + b = 0$, so $b = 0$; the third $3a + 5b + 2c = 0$, so $c = 0$. The "echelon" form (each vector has zeros where the previous one starts) makes the equations solvable one at a time.
:::

::: exercise intermediate Independent polynomials and bases of $\R_3[x]$
(a) Prove that non-zero polynomials with all different degrees are linearly independent.
(b) Are the polynomials $f = x^3 + x$, $g = x^2 - 1$, $h = x^3 + x^2 + x - 1$ independent?
(c) Are the polynomials $f = x^3 + x$, $g = x^2 - 1$, $k = x^3 - x$ independent? Are they a basis of $\R_3[x]$? If not, complete them to a basis.
::: solution
(a) Let $p_1, \dots, p_k$ be non-zero with degrees $d_1 < d_2 < \dots < d_k$, and let $\lambda_1 p_1 + \dots + \lambda_k p_k = 0$. The term $x^{d_k}$ appears only in $p_k$, with a coefficient $c \neq 0$: in the combination the coefficient of $x^{d_k}$ is $\lambda_k c$, which must be $0$, so $\lambda_k = 0$. Now what remains is a zero combination of $p_1, \dots, p_{k-1}$, and you repeat: $\lambda_{k-1} = 0$, and so on down to $\lambda_1 = 0$.

(b) **No**: $h = f + g$, because $(x^3 + x) + (x^2 - 1) = x^3 + x^2 + x - 1$. So $f + g - h = 0$.

(c) From $a f + b g + c k = 0$:
$$a(x^3 + x) + b(x^2 - 1) + c(x^3 - x) = (a + c)x^3 + bx^2 + (a - c)x - b = 0.$$
All the coefficients must be zero: $b = 0$, $a + c = 0$, $a - c = 0$, so $a = c = 0$. They are **independent**. They are not a basis of $\R_3[x]$: they are $3$ vectors and $\dim \R_3[x] = 4$, so they do not span (for example, every combination of them has constant term equal to $-b$ and coefficient of $x^2$ equal to $b$: you cannot get the polynomial $1$).

Completion: I add the polynomial $1$. From $af + bg + ck + d \cdot 1 = 0$:
$$(a + c)x^3 + bx^2 + (a - c)x + (d - b) = 0,$$
so $b = 0$, $a = c = 0$ and $d = b = 0$. Four independent vectors in a space of dimension $4$: by Theorem 7.12, $f, g, k, 1$ are a basis of $\R_3[x]$.
:::

::: exercise exam As at the exam: bases and dimensions of spaces of matrices
Find a basis and the dimension of each of the subspaces $D(3)$, $T^s(3)$, $S(3)$ and $A(3)$ of $M(3)$. Then say what $\dim D(n)$, $\dim T^s(n)$, $\dim S(n)$ and $\dim A(n)$ are in general.
::: solution
I use the matrices $e_{ij}$ of Exercise 7.13. In each case I write the generic matrix, rewrite it as a combination and check independence: each free coefficient appears on its own in an entry where the other matrices have $0$, so a zero combination has all coefficients zero.

- **$D(3)$**: $\begin{pmatrix} a & 0 & 0 \\ 0 & b & 0 \\ 0 & 0 & c \end{pmatrix} = a e_{11} + b e_{22} + c e_{33}$. Basis $e_{11}, e_{22}, e_{33}$: **dimension 3**.
- **$T^s(3)$**: $\begin{pmatrix} a & b & c \\ 0 & d & e \\ 0 & 0 & f \end{pmatrix} = a e_{11} + b e_{12} + c e_{13} + d e_{22} + e\, e_{23} + f e_{33}$. Basis $e_{11}, e_{12}, e_{13}, e_{22}, e_{23}, e_{33}$: **dimension 6**. It is the answer of the exam of 24/01/2024, question 5.
- **$S(3)$**: basis $e_{11}, e_{22}, e_{33}, e_{12} + e_{21}, e_{13} + e_{31}, e_{23} + e_{32}$ (box on the exam of 15/01/2026): **dimension 6**.
- **$A(3)$**: $\begin{pmatrix} 0 & a & b \\ -a & 0 & c \\ -b & -c & 0 \end{pmatrix} = a(e_{12} - e_{21}) + b(e_{13} - e_{31}) + c(e_{23} - e_{32})$. Basis of three matrices: **dimension 3**.

Check: $\dim S(3) + \dim A(3) = 6 + 3 = 9 = \dim M(3)$.

**In general**, for $n \times n$ matrices:
- $\dim D(n) = n$: the free coefficients are those of the diagonal;
- $\dim T^s(n) = \dim T^i(n) = \dim S(n) = \frac{n(n + 1)}2$: diagonal ($n$ entries) plus the triangle above it ($\frac{n(n - 1)}2$ entries), that is $n + \frac{n(n - 1)}2 = \frac{n(n + 1)}2$;
- $\dim A(n) = \frac{n(n - 1)}2$: only the triangle above the diagonal, because the diagonal is zero.

With $n = 3$: $3$, $6$, $6$, $3$, as above.
:::

::: exercise exam As at the exam: the dimension of subspaces of polynomials
Find a basis and the dimension of:
(a) $W_1 = \{p(x) \in \R_3[x] \mid p(1) = 0\}$;
(b) $W_2 = \{p(x) \in \R_3[x] \mid p(2) = 0 \text{ and } p(-2) = 0\}$;
(c) $W_3 = \{p(x) \in \R_2[x] \mid p(0) = p(1)\}$.
::: solution
(a) By lesson L04, $p(1) = 0$ means that $x - 1$ divides $p$: $p(x) = (x - 1)(a + bx + cx^2)$ with any $a, b, c$. So
$$W_1 = \Span\big(x - 1,\ x(x - 1),\ x^2(x - 1)\big) = \Span\big(x - 1,\ x^2 - x,\ x^3 - x^2\big).$$
The three polynomials have degrees $1$, $2$, $3$, so they are independent (exercise 5 (a)): **$\dim W_1 = 3$**. (It is the subspace of the exam of 24/01/2024, question 1, in lesson L06.)

(b) $p(2) = 0$ and $p(-2) = 0$ mean that $x - 2$ and $x + 2$ divide $p$, so $p(x) = (x^2 - 4)(a + bx)$ with any $a, b$:
$$W_2 = \Span\big(x^2 - 4,\ x^3 - 4x\big),$$
two polynomials of different degrees, independent: **$\dim W_2 = 2$**. It is the answer of the exam of 03/07/2026, question 1.

(c) I write $p(x) = ax^2 + bx + c$: $p(0) = c$ and $p(1) = a + b + c$. The condition $p(0) = p(1)$ becomes $a + b = 0$, that is $b = -a$. So
$$p(x) = ax^2 - ax + c = a(x^2 - x) + c \cdot 1, \qquad W_3 = \Span(x^2 - x,\ 1).$$
Two polynomials of different degrees, independent: **$\dim W_3 = 2$**.

In all three cases the dimension is $\dim V$ minus the number of independent conditions: $4 - 1 = 3$, $4 - 2 = 2$, $3 - 1 = 2$. It is a preview of the rank–nullity theorem (lesson L14).
:::

::: exercise intermediate A basis with a parameter
For which $k \in \R$ are the vectors $u_1 = (1, 1, 0)$, $u_2 = (0, 1, 1)$, $u_3 = (1, 0, k)$ a basis of $\R^3$?
::: solution
They are three vectors in $\R^3$: by Theorem 7.12 it is enough to understand when they are independent. From $a u_1 + b u_2 + c u_3 = 0$:
$$\begin{cases} a + c = 0 \\ a + b = 0 \\ b + kc = 0 \end{cases}$$
From the first $a = -c$, from the second $b = -a = c$. The third becomes $c + kc = (1 + k)c = 0$.
- If $k \neq -1$, then $c = 0$, and so $a = b = 0$: independent, **basis**.
- If $k = -1$, any $c$ works: for example $c = 1$, $a = -1$, $b = 1$ gives $-u_1 + u_2 + u_3 = 0$. Dependent, **not** a basis.

With $k = -1$ you find again the vectors of Example 7.4 (with $u_3 = v_3$). In lesson L13 the same result is obtained with the determinant: the matrix of the three vectors has determinant $1 + k$.
:::

::: exercise intermediate Completing a basis and extracting one
(a) Complete $w_1 = (1, 1, 0)$, $w_2 = (-1, 0, 1)$ to a basis of $\R^3$.
(b) Let $v_1 = (1, 0, 1)$, $v_2 = (0, 1, 1)$, $v_3 = (1, 1, 2)$, $v_4 = (1, -1, 0)$. Extract from $v_1, v_2, v_3, v_4$ a basis of $U = \Span(v_1, v_2, v_3, v_4)$ and find $\dim U$.
::: solution
(a) It is enough to add a vector that is not in the plane $\Span(w_1, w_2)$ (exercise 11). I try $e_1 = (1, 0, 0)$ (it is the choice of Martelli's book, Example 2.3.21). From $a w_1 + b w_2 + c e_1 = 0$:
$$\begin{cases} a - b + c = 0 \\ a = 0 \\ b = 0 \end{cases}$$
so $a = b = 0$ and then $c = 0$. Three independent vectors in $\R^3$: $w_1, w_2, e_1$ is a basis.

(b) I look for the vectors that are too many. $v_3 = v_1 + v_2$, because $(1, 0, 1) + (0, 1, 1) = (1, 1, 2)$; $v_4 = v_1 - v_2$, because $(1, 0, 1) - (0, 1, 1) = (1, -1, 0)$. I remove $v_3$ and $v_4$: the Span does not change (Proposition 7.2), and $v_1, v_2$ remain, not multiples, so independent. A basis of $U$ is $v_1, v_2$ and **$\dim U = 2$**: $U$ is the plane $z = x + y$ of Exercise 6.10.
:::

::: exercise exam As at the exam: generators, independent, basis?
For each list decide whether the vectors are linearly independent, whether they span the space shown and whether they form a basis of it.
(a) $(1, -1)$, $(2, 1)$, $(0, 3)$ in $\R^2$.
(b) $(1, 0, 2)$, $(0, 1, -1)$, $(2, 1, 3)$ in $\R^3$.
(c) $(1, 1, 0, 0)$, $(0, 1, 1, 0)$, $(0, 0, 1, 1)$ in $\R^4$.
::: solution
(a) Three vectors in $\R^2$: **dependent**. They span: $(1, -1)$ and $(2, 1)$ are not multiples, so they are already a basis of $\R^2$, and adding $(0, 3)$ they still span. **Generators, not a basis.** A relation: $(0, 3) = a(1, -1) + b(2, 1)$ gives $a + 2b = 0$ and $-a + b = 3$; adding, $3b = 3$, so $b = 1$, $a = -2$: $(0, 3) = -2(1, -1) + (2, 1)$.

(b) $2(1, 0, 2) + (0, 1, -1) = (2, 1, 3)$: the third is a combination of the first two, **dependent**. The first two are not multiples, so the Span has dimension $2$: it is a plane, they **do not span** $\R^3$. **It is not a basis.**

(c) From $a(1, 1, 0, 0) + b(0, 1, 1, 0) + c(0, 0, 1, 1) = 0$: the first coordinate gives $a = 0$, the second $a + b = 0$, so $b = 0$; the fourth gives $c = 0$. **Independent.** But they are $3$ vectors and $\dim \R^4 = 4$: they **do not span**, and they **are not a basis**. For example $e_4 = (0, 0, 0, 1)$ is not a combination of them: you would need $a = 0$ (first coordinate), then $b = 0$ (second), then $c = 0$ (third), but the fourth coordinate would be $c = 0 \neq 1$.
:::

::: exercise hard Adding a vector outside the Span
Let $v_1, \dots, v_k$ be independent vectors of $V$ and let $v_{k+1} \in V$. Prove that
$$v_1, \dots, v_{k+1} \text{ are independent} \iff v_{k+1} \notin \Span(v_1, \dots, v_k).$$
Deduce that, in a space of dimension $n$, every list of independent vectors can be completed to a basis.
::: solution
($\Rightarrow$) If $v_{k+1} \in \Span(v_1, \dots, v_k)$, that is $v_{k+1} = \lambda_1 v_1 + \dots + \lambda_k v_k$, then $\lambda_1 v_1 + \dots + \lambda_k v_k - v_{k+1} = 0$ would be a zero combination with the coefficient $-1$: the vectors would be dependent.

($\Leftarrow$) Suppose $\lambda_1 v_1 + \dots + \lambda_k v_k + \lambda_{k+1} v_{k+1} = 0$.
- If $\lambda_{k+1} \neq 0$, I divide by $\lambda_{k+1}$ and get $v_{k+1}$ as a combination of $v_1, \dots, v_k$: against the hypothesis $v_{k+1} \notin \Span$.
- So $\lambda_{k+1} = 0$, and what remains is $\lambda_1 v_1 + \dots + \lambda_k v_k = 0$: by the independence of the first $k$ vectors, also $\lambda_1 = \dots = \lambda_k = 0$.

**Completion.** Let $\dim V = n$ and let $v_1, \dots, v_k$ be independent with $k < n$. They do not span $V$ (fewer than $n$ vectors do not span), so there exists $v_{k+1} \notin \Span(v_1, \dots, v_k)$; by what we have just proved, $v_1, \dots, v_{k+1}$ are still independent. You repeat until the vectors are $n$: at that point they are $n$ independent vectors, that is a basis by Theorem 7.12. It is the completion algorithm of Martelli's book (§2.3.5).
:::

## Review questions

::: question When are some vectors linearly dependent? And independent?
Dependent: there is a combination $\lambda_1 v_1 + \dots + \lambda_k v_k = 0$ with coefficients not all zero. Independent: $\lambda_1 v_1 + \dots + \lambda_k v_k = 0$ implies $\lambda_1 = \dots = \lambda_k = 0$, that is the only zero combination is the one with all coefficients zero.
:::

::: question What does Proposition 7.2 say, and how is it proved?
Some vectors are dependent if and only if one of them is a linear combination of the others. If $\lambda_i \neq 0$ in a zero combination, you divide by $\lambda_i$ and isolate $v_i$; conversely, if $v_i$ is a combination of the others, bringing everything to the left you get a zero combination with coefficient $-1$ in front of $v_i$.
:::

::: question When is a single vector dependent? And two vectors?
A vector is dependent if and only if it is the zero vector. Two vectors are dependent if and only if they are multiples of each other.
:::

::: question Are three non-zero vectors that are pairwise not multiples necessarily independent?
No. Example 7.4: $(1, 1, 0)$, $(0, 1, 1)$, $(1, 0, -1)$ are non-zero and pairwise not multiples, but $v_1 - v_2 - v_3 = 0$. The two conditions are necessary but not sufficient for $k \ge 3$.
:::

::: question Why is a list that contains the zero vector always dependent?
Because $1 \cdot 0$ plus all the other vectors multiplied by $0$ gives the zero vector, and it is a combination with a non-zero coefficient.
:::

::: question What is a basis? Give an example in $\R^2$ other than the standard basis.
A sequence of independent vectors that span the space. In $\R^2$ $(1, 2), (2, 1)$ is also a basis: they are two vectors that are not multiples, so independent, and by Theorem 7.12 they span.
:::

::: question What is the standard basis of $\K^n$? And of $\K_n[x]$?
In $\K^n$: $e_1, \dots, e_n$, where $e_i$ has $1$ in place $i$ and $0$ elsewhere. In $\K_n[x]$: $1, x, x^2, \dots, x^n$, which are $n + 1$ polynomials.
:::

::: question What does Theorem 7.10 say, and why is it needed?
If $V$ has a basis of $n$ vectors, every basis of $V$ has $n$ vectors. It is needed so that the dimension, defined as the number of vectors in a basis, does not depend on the basis chosen.
:::

::: question What are the dimensions of $\K^n$, $\K_n[x]$, $M(m, n, \K)$ and $\K[x]$?
$n$, $n + 1$, $mn$ and infinite. $\K[x]$ has no finite bases, because every finite list of polynomials spans only polynomials up to a certain degree.
:::

::: question What does Theorem 7.12 say? Give an example.
If $\dim V = n$ and you have exactly $n$ vectors, they are a basis as soon as they are independent or as soon as they span: the other condition follows. Example: $(-1, 1)$ and $(2, 1)$ are not multiples, so they are independent, and they are a basis of $\R^2$.
:::

::: question Can four vectors of $\R^3$ be independent? Can two vectors of $\R^3$ span $\R^3$?
No in both cases. In a space of dimension $n$ more than $n$ vectors are always dependent and fewer than $n$ vectors never span.
:::

::: question How do you compute the dimension of a subspace defined by conditions?
You write the generic element with the free parameters, rewrite it as a linear combination with one vector per parameter, check that those vectors are independent and count them. For example $\{p \in \R_3[x] \mid p(2) = 0\}$ has dimension $3$.
:::

::: question What are $\dim S(3)$, $\dim T^s(3)$ and $\dim A(3)$?
$6$, $6$ and $3$. In general $\dim S(n) = \dim T^s(n) = \frac{n(n + 1)}2$ and $\dim A(n) = \frac{n(n - 1)}2$.
:::

## Glossary

```glossary
Trivial combination | The linear combination with all coefficients equal to $0$; it always gives the zero vector.
Linearly dependent | Vectors for which there is a combination with coefficients not all zero equal to $0$; it is the same as saying that one is a combination of the others.
Linearly independent | Vectors for which the only combination equal to $0$ is the trivial one.
Multiple vectors | $v_1 = kv_2$ or $v_2 = kv_1$ for some scalar $k$: for two vectors it is the same as being dependent.
Generators | Vectors $v_1, \dots, v_n$ such that $V = \Span(v_1, \dots, v_n)$: every vector of $V$ is a combination of them.
Basis | Sequence of independent vectors that span $V$.
Standard basis of $\K^n$ | $e_1, \dots, e_n$, where $e_i$ has $1$ in place $i$ and $0$ elsewhere.
Standard basis of $\K_n[x]$ | The polynomials $1, x, x^2, \dots, x^n$.
Matrices $e_{ij}$ | The matrix with $1$ in entry $(i, j)$ and $0$ elsewhere; they form the standard basis of $M(m, n, \K)$.
Dimension | The number of vectors in a basis of $V$, written $\dim V$; it is $\infty$ if there are no finite bases.
Well-posed definition | A definition that does not depend on the choices made: for the dimension Theorem 7.10 guarantees it.
Infinite dimension | Property of a space with no finite bases, like $\K[x]$.
Coordinates with respect to a basis | The unique coefficients $\lambda_1, \dots, \lambda_n$ with $v = \lambda_1 v_1 + \dots + \lambda_n v_n$ (lesson L13).
Exchange lemma | If $n$ vectors span $V$, then $n$ independent vectors of $V$ also span $V$: the key to Theorem 7.10.
Completion to a basis | Adding to independent vectors vectors outside their Span until you have $\dim V$ vectors.
Extraction of a basis | Removing from a list of generators the vectors that are combinations of the others, until independent vectors remain.
Rank (preview) | The maximum number of independent vectors among the rows, or the columns, of a matrix (lesson L08).
```

## Checklist

```checklist
- I can write the definition of linearly independent vectors as an implication and explain it in words.
- I can prove that some vectors are independent by setting up and solving the system of the coefficients.
- I can prove that some vectors are dependent by showing a non-trivial combination equal to zero.
- I can state and prove Proposition 7.2 and I can recognise the cases with one and two vectors.
- I can explain with Example 7.4 why with three vectors looking at them in pairs is not enough.
- I can define a basis and check that $e_1, \dots, e_n$ and $1, x, \dots, x^n$ are bases.
- I know the dimensions of $\K^n$, $\K_n[x]$, $M(m, n, \K)$ and $\K[x]$, without getting the $+1$ of polynomials wrong.
- I can use Theorem 7.12 to prove that $n$ vectors are a basis by checking only independence.
- I can answer "generators and/or independent?" by counting the vectors and looking for the ones that are too many.
- I can compute basis and dimension of subspaces of matrices ($D(n)$, $T^s(n)$, $S(n)$, $A(n)$) and of polynomials defined by conditions.
- I can complete independent vectors to a basis and extract a basis from a list of generators.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 7 "Spazi vettoriali III", pp. 31–35: sections 7.A–7.D are followed in order, with the page next to each heading; definitions, propositions, theorems, examples and exercises keep their numbering (Definitions 7.1, 7.7 and 7.11, Propositions 7.2 and 7.6, Examples 7.3–7.5, 7.8 and 7.9, Theorems 7.10 and 7.12, Exercises 7.13–7.15).
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §2.3.1–2.3.7 (linear independence and Example 2.3.2, standard bases, coordinates and Proposition 2.3.11, exchange lemma and proof of Theorem 2.3.16, infinite dimension of $\K[x]$, completion and extraction algorithms and Example 2.3.21, Propositions 2.3.20, 2.3.23 and 2.3.25).
- **Exam sessions cited** (papers and solutions on the 2025/26 Moodle, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): 24/01/2024 (questions 1 and 5), 10/06/2024 (question 3), 10/07/2024 (question 2), 06/09/2024 (question 2), 16/01/2025 (question 2), 10/07/2025 (question 2), 02/09/2025 (question 10 and problem 11), 15/01/2026 (questions 3 and 4), 03/07/2026 (question 1), 07/09/2026 (question 2). The questions of 16/01/2025 (2), 15/01/2026 (4) and 07/09/2026 (2) are reported with solutions written for these notes. Tutoring exercise sheet 2, 2025 (Buzano, Radeschi), exercises 1, 3 and 4, as a model for some exercises.
- The **"Beyond the handouts"** parts (Gauss's method to count independent vectors, coordinates, the proofs of Theorems 7.10 and 7.12, the consequences for the quizzes, the methods for the exam and exercises 4–11) are additions in these notes to connect the lesson to the rest of the course and to the exam.
