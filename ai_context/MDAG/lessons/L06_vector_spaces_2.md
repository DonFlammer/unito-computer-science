---
course: MDAG
module: AG
lesson: L06
title: Vector spaces II
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Part 2 (modB) · Linear Algebra and Geometry · Channels A, B and C · Lesson L06
description: >-
  Notes on lesson L06 of Linear Algebra and Geometry (MDAG, part 2): the space of matrices, vector subspaces,
  diagonal, triangular, symmetric and skew-symmetric matrices, linear combinations and the subspace spanned (Span),
  with exam-style quizzes and worked exercises.
lede: >-
  Inside a vector space there are other, smaller ones: subspaces. Here you learn to recognise them with three
  checks, you meet the space of matrices $M(m, n, \K)$ and its most important subspaces (diagonal, triangular,
  symmetric, skew-symmetric matrices) and you discover the main way to build subspaces: taking all the linear
  combinations of some vectors, that is their $\Span$.
material: handouts
facts:
  Handouts: lesson 6 · pp. 26–30
  Book: Martelli, §2.2.5–2.2.16
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 90–120 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 6 "Spazi vettoriali II"; B. Martelli, Geometria e algebra lineare, §2.2.5–2.2.16
italian_file: L06_spazi_vettoriali_2.html
html_notes: notes/MDAG/L06_vector_spaces_2.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L06_spazi_vettoriali_2.md
---

## In brief

- An $m \times n$ **matrix** is a table of numbers with $m$ rows and $n$ columns. The $m \times n$ matrices, with sum and product by a scalar done entry by entry, form the vector space $M(m, n, \K)$; in particular $M(m, 1, \K) = \K^m$.
- A **subspace** of $V$ is a subset $W$ that contains $0$ and is **closed** under the sum and the product by a scalar. With the operations of $V$, it is a vector space in its own right.
- Every space $V$ has the trivial subspace $\{0\}$ and the total subspace $V$; every other subspace lies in between: $\{0\} \subset W \subset V$.
- Examples: $\K_k[x] \subset \K[x]$; in the plane, the lines **through the origin**; among square matrices, the diagonal ones $D(n)$, the upper triangular $T^s(n)$ and lower triangular $T^i(n)$ ones, the symmetric $S(n)$ and the skew-symmetric $A(n)$ ones (Proposition 6.5).
- To say that a set is **not** a subspace one counterexample is enough. The quickest: **it does not contain zero**, like a line that does not pass through the origin.
- A **linear combination** of $v_1, \dots, v_k$ is a vector of the form $\lambda_1 v_1 + \dots + \lambda_k v_k$, with $\lambda_1, \dots, \lambda_k$ any scalars.
- The **Span** of $v_1, \dots, v_k$ is the set of all their linear combinations, and it is always a subspace (Proposition 6.7). For example $\Span(v)$, with $v \neq 0$, is the line through the origin with the direction of $v$.
- To find out whether a vector $u$ lies in $\Span(v_1, \dots, v_k)$ you look for coefficients with $\lambda_1 v_1 + \dots + \lambda_k v_k = u$: it is a linear system.
- At the exam "which of these sets is (or is not) a subspace?" comes up almost every session: 08/02/2024, 03/06/2025, 05/02/2026, 07/09/2026.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## The space of matrices (p. 26)

In lesson L05 the vectors of $\K^n$ were columns of numbers. Now you put several columns side by side and you get a **table**: a matrix. For example

$$A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$$

has $2$ rows and $3$ columns. Matrices are the "other fundamental example" of vector space with which the handouts open the lesson, and from here on they will appear everywhere.

> [!DEF] 6.1 · Matrix
> Let $\K$ be, as always, a fixed field. A **matrix** with $m$ **rows** and $n$ **columns** with coefficients in $\K$ is a rectangular table of the form
> $$A = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & \ddots & \vdots \\ a_{m1} & \cdots & a_{mn} \end{pmatrix}$$
> in which all the $mn$ coefficients $a_{ij}$ belong to $\K$. In short we say that $A$ is an **$m \times n$ matrix**. Its rows are denoted by $A_1, \dots, A_m$ and its columns by $A^1, \dots, A^n$.

Piece by piece:

- **$m \times n$** is read "$m$ by $n$": first the number of rows, then that of columns. The matrix $A$ above is $2 \times 3$.
- **$a_{ij}$** is the coefficient in row $i$ and column $j$: **first the row, then the column**. In the matrix $A$ above, $a_{12} = 2$ (row 1, column 2) and $a_{21} = 4$ (row 2, column 1).
- In all there are $m \cdot n$ coefficients: $A$ has $2 \cdot 3 = 6$.
- **$A_i$**, with the index **at the bottom**, is row $i$; **$A^j$**, with the index **at the top**, is column $j$. In the matrix $A$ above: $A_2 = (4, 5, 6)$ and $A^3 = \begin{pmatrix} 3 \\ 6 \end{pmatrix}$.

> [!PITFALL] $A^1$ is not a power
> In the handouts $A^1, \dots, A^n$ are the **columns** of $A$: the index at the top is just a label. $A^2$ is the second column, not $A$ times $A$.

> [!EXAMPLE] · the matrices of the handouts
> Two matrices with coefficients in $\R$:
> $$B = \begin{pmatrix} 1 & \sqrt 2 \\ 0 & -5 \\ 7 & \pi \end{pmatrix}, \qquad C = \begin{pmatrix} 5 & 0 & \sqrt 3 \end{pmatrix}.$$
> $B$ is $3 \times 2$: $b_{12} = \sqrt 2$, $b_{32} = \pi$, the row $B_2 = (0, -5)$, the column $B^1 = {}^t(1, 0, 7)$. $C$ is $1 \times 3$: a single row.

### Sum and product by a scalar

Two matrices $A = (a_{ij})$ and $B = (b_{ij})$ of the **same size** are added component by component; the product by a scalar is also defined component by component:

$$(A + B)_{ij} = a_{ij} + b_{ij}, \qquad (\lambda A)_{ij} = \lambda a_{ij}.$$

In words: entry $(i, j)$ of the sum is the sum of the entries $(i, j)$, and $\lambda A$ multiplies every entry by $\lambda$.

> [!EXAMPLE] · sum and multiple of matrices
> $$\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix} + \begin{pmatrix} 0 & -1 & 2 \\ 1 & 1 & -3 \end{pmatrix} = \begin{pmatrix} 1 + 0 & 2 - 1 & 3 + 2 \\ 4 + 1 & 5 + 1 & 6 - 3 \end{pmatrix} = \begin{pmatrix} 1 & 1 & 5 \\ 5 & 6 & 3 \end{pmatrix},$$
> $$2\begin{pmatrix} 1 & -1 \\ 0 & 3 \end{pmatrix} = \begin{pmatrix} 2 & -2 \\ 0 & 6 \end{pmatrix}.$$

The set of all $m \times n$ matrices with coefficients in $\K$, with these operations, is written $M(m, n, \K)$, or $M(m, n)$ when the field is understood. The handouts remark that $M(m, n, \K)$ is a vector space. The reason is the one of lesson L05: the operations are done entry by entry, so every axiom boils down to a property of the field, one entry at a time. In practice an $m \times n$ matrix behaves like a vector of $\K^{mn}$ written over several rows. The zero vector is the **zero matrix**, with all coefficients $0$; the opposite of $A$ is $-A$, with all the coefficients' signs changed.

Finally, an $m \times 1$ matrix has a single column: it is a column vector. So

$$M(m, 1, \K) = \K^m.$$

> [!PITFALL] Only matrices of the same size
> $\begin{pmatrix} 1 & 2 \end{pmatrix} + \begin{pmatrix} 1 \\ 2 \end{pmatrix}$ makes no sense: the first is $1 \times 2$, the second $2 \times 1$. The product **between** matrices exists, but it is another operation, which is not part of the vector space structure: it arrives in lesson L08.

## Vector subspaces (pp. 26–27)

In the plane $\R^2$ look at the line $r$ with equation $y = 2x$. It contains the origin. If you take two of its points, for example $(1, 2)$ and $(-3, -6)$, their sum $(-2, -4)$ is still on $r$. If you multiply one of its points by a number, for example $5 \cdot (1, 2) = (5, 10)$, you stay on $r$. With the sum and the product by a scalar you **never leave** $r$: $r$ is a small vector space inside $\R^2$.

The line $s$ with equation $y = 2x + 1$, parallel to the first, instead does not work. It does not pass through the origin, because $0 \neq 2 \cdot 0 + 1$. And the sum leaves it: $(0, 1)$ and $(1, 3)$ are on $s$, but $(0, 1) + (1, 3) = (1, 4)$ is not, because $2 \cdot 1 + 1 = 3 \neq 4$.

```graph
title: The line $y = 2x$ passes through the origin and is a subspace; the line $y = 2x + 1$ is not: the sum of two of its points leaves it
x: -4 4
y: -3 5
line: 0 0 1.5 3 | accent | $y = 2x$ | e
line: 0 1 -1.5 -2 | pink | dashed | $y = 2x + 1$ | w
point: 0 0 | accent | $O$ | se
point: 0 1 | pink | $(0, 1)$ | w
point: 1 3 | pink | $(1, 3)$ | w
point: 1 4 | amber | $(1, 4)$ | nw
```

The handouts define precisely when a vector space "contains another one".

> [!DEF] 6.2 · Vector subspace
> Let $V$ be a vector space over a field $\K$. A **vector subspace** of $V$ is a subset $W \subset V$ that satisfies the following three axioms:
> 1. $0 \in W$;
> 2. if $v, v' \in W$, then also $v + v' \in W$;
> 3. if $v \in W$ and $\lambda \in \K$, then $\lambda v \in W$.

Piece by piece:

- $W \subset V$: you start from a vector space $V$ you already know and take some of its vectors.
- **Axiom 1**: the zero vector **of $V$** must be in $W$. It is the first check, and the quickest.
- **Axiom 2**: the sum of two vectors of $W$ does not leave $W$. We say that $W$ is **closed under the sum**.
- **Axiom 3**: every multiple of a vector of $W$, with **any** scalar (even negative or zero), stays in $W$. We say that $W$ is **closed under the product by a scalar**.

With the operations "inherited" from $V$, every subspace $W$ is itself a vector space. The reason, with the details the handouts leave implicit:

1. the operations stay in $W$, by axioms 2 and 3;
2. axioms 2–5 of Definition 5.4, and the associative and commutative properties, hold for all the vectors of $V$, so also for those of $W$;
3. the zero vector is in $W$ by axiom 1;
4. the opposite of $v \in W$ is in $W$: it is $-v = (-1)v$ (lesson L05, exercise 8), which is in $W$ by axiom 3.

### The trivial subspace and the total one (p. 27)

Every vector space $V$ always has two subspaces:

- the **trivial subspace** $\{0\}$, made only of the origin: $0 + 0 = 0$ and $\lambda 0 = 0$, so you do not leave it;
- the **total subspace** $V$, made of all the vectors.

Every other subspace lies in between:

$$\{0\} \subset W \subset V.$$

An example already met is $\K_k[x] \subset \K[x]$, made of the polynomials of degree $\le k$ (Exercise 5.7): it contains the zero polynomial, and sums and multiples of polynomials of degree $\le k$ still have degree $\le k$.

> [!EXAMPLE] · the line $y = 2x$, with letters
> Let $W = \{(x, y) \in \R^2 \mid y = 2x\}$. We check the three axioms with generic vectors.
> 1. $(0, 0) \in W$, because $0 = 2 \cdot 0$.
> 2. If $(x, y)$ and $(x', y')$ are in $W$, that is $y = 2x$ and $y' = 2x'$, the sum $(x + x', y + y')$ satisfies $y + y' = 2x + 2x' = 2(x + x')$: it is in $W$.
> 3. If $(x, y) \in W$ and $\lambda \in \R$, then $\lambda y = \lambda \cdot 2x = 2(\lambda x)$: $(\lambda x, \lambda y)$ is in $W$ too.
>
> So $W$ is a subspace of $\R^2$.

> [!EXAMPLE] · three sets that are not subspaces of $\R^2$
> - **$\{(x, y) \mid y = 2x + 1\}$**: it does not contain $(0, 0)$. Axiom 1 fails.
> - **The first quadrant $\{(x, y) \mid x \ge 0,\ y \ge 0\}$**: it contains the origin and is closed under the sum, but $(-1) \cdot (1, 1) = (-1, -1)$ leaves it. Axiom 3 fails.
> - **The union of the two axes $\{(x, y) \mid xy = 0\}$**: it contains the origin and is closed under multiples, but $(1, 0) + (0, 1) = (1, 1)$ leaves it, because $1 \cdot 1 \neq 0$. Axiom 2 fails.

> [!PITFALL] One axiom alone is not enough
> The first quadrant is closed under the sum but not under multiples; the union of the axes is closed under multiples but not under the sum. You have to check **all three** axioms. To say yes you need all three; to say no one that fails is enough, with a concrete example.

> [!BEYOND] · the most common subspaces, from Martelli's book
> - **Homogeneous linear systems** (Proposition 2.2.2). The solutions of a system of linear equations **with zero constant term**, such as $\{x + 2y - z = 0,\ x - y = 0\}$ in $\R^3$, form a subspace. The reason: if $a_1 x_1 + \dots + a_n x_n = 0$ holds for $x$ and for $y$, it also holds for $x + y$ and for $\lambda x$, because $a_1(x_1 + y_1) + \dots = 0 + 0 = 0$ and $a_1 (\lambda x_1) + \dots = \lambda \cdot 0 = 0$. With a non-zero constant term instead the origin is not a solution (Remark 2.2.3).
> - **Polynomials that vanish at a point** (Proposition 2.2.5). Given $a \in \K$, the polynomials with $p(a) = 0$ form a subspace of $\K[x]$: $(p + q)(a) = 0 + 0 = 0$ and $(\lambda p)(a) = \lambda \cdot 0 = 0$. Those with $p(a) = 1$ do not, because they do not contain the zero polynomial (Remark 2.2.6).
> - **Intersection** (Proposition 2.2.11). If $U$ and $W$ are subspaces, $U \cap W$ is one too. The **union** instead in general is not: the union of the two axes of $\R^2$ seen above is the book's example (Example 2.2.14, and exercise 12).

## Diagonal, triangular, symmetric and skew-symmetric matrices (pp. 27–28)

Inside the space of matrices there are many subspaces: you get them by imposing conditions on the coefficients. The most important ones concern **square** matrices.

> [!DEF] 6.3 · Square, diagonal, triangular, symmetric and skew-symmetric matrices
> An $n \times n$ matrix is called **square**. A square $n \times n$ matrix $A$ is:
> - **diagonal** if $a_{ij} = 0,\ \forall i \neq j$;
> - **upper triangular** if $a_{ij} = 0,\ \forall i > j$;
> - **lower triangular** if $a_{ij} = 0,\ \forall i < j$;
> - **triangular** if it is lower or upper triangular;
> - **symmetric** if $a_{ij} = a_{ji},\ \forall i, j$;
> - **skew-symmetric** if $a_{ij} = -a_{ji},\ \forall i, j$.

Piece by piece:

- The entries $a_{11}, a_{22}, \dots, a_{nn}$, those with the two indices equal, form the **main diagonal**: the line that goes down from the top left to the bottom right.
- **Diagonal**: everything off the main diagonal is zero. On the diagonal there can be any number, even $0$.
- **Upper triangular**: $i > j$ means "row index greater than column index", that is the entries **below** the diagonal. Those must be zero; the numbers are above and on the diagonal.
- **Lower triangular**: the other way round, the entries **above** the diagonal ($i < j$) are zero.
- **Symmetric**: entry $(i, j)$ is equal to entry $(j, i)$. The matrix is a **mirror image** of itself across the main diagonal.
- **Skew-symmetric**: entry $(i, j)$ is the opposite of entry $(j, i)$. With $i = j$ the condition says $a_{ii} = -a_{ii}$, that is $2a_{ii} = 0$, and dividing by $2$ you get $a_{ii} = 0$: on the diagonal of a skew-symmetric matrix there are **only zeros**. The handouts remark it at the end of Example 6.4 (p. 28).

> [!NOTE] A remark about the field
> The step from $2a_{ii} = 0$ to $a_{ii} = 0$ divides by $2$, and it can be done in the fields of the course, $\Q$, $\R$ and $\C$. In the field $\{0, 1\}$ of Exercise 5.9, where $2 = 1 + 1 = 0$, it cannot: there $a = -a$ for every $a$, and a skew-symmetric matrix can have a non-zero diagonal. Martelli's book points this out in a note to §2.2.14; the handouts take for granted that the field is $\Q$, $\R$ or $\C$.

The general form of each class, for $3 \times 3$ matrices (the letters are any numbers):

| diagonal | upper triangular | lower triangular | symmetric | skew-symmetric |
|---|---|---|---|---|
| $\begin{pmatrix} a & 0 & 0 \\ 0 & b & 0 \\ 0 & 0 & c \end{pmatrix}$ | $\begin{pmatrix} a & b & c \\ 0 & d & e \\ 0 & 0 & f \end{pmatrix}$ | $\begin{pmatrix} a & 0 & 0 \\ b & c & 0 \\ d & e & f \end{pmatrix}$ | $\begin{pmatrix} a & b & c \\ b & d & e \\ c & e & f \end{pmatrix}$ | $\begin{pmatrix} 0 & a & b \\ -a & 0 & c \\ -b & -c & 0 \end{pmatrix}$ |

> [!EXAMPLE] 6.4 · One matrix for each class
> The following matrices are, in order, diagonal, upper triangular, lower triangular, symmetric and skew-symmetric:
> $$\begin{pmatrix} 2 & 0 \\ 0 & -1 \end{pmatrix}, \quad \begin{pmatrix} 1 & 9 \\ 0 & \sqrt 2 \end{pmatrix}, \quad \begin{pmatrix} -1 & 0 \\ 7 & 2 \end{pmatrix}, \quad \begin{pmatrix} -1 & 2 \\ 2 & 4 \end{pmatrix}, \quad \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}.$$
> The same matrix can belong to several classes: for example
> $$\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$$
> is diagonal, upper triangular, lower triangular and symmetric. The zero matrix belongs to all five classes.

Let us check the example entry by entry, for the $2 \times 2$ matrices, where the entries off the diagonal are only $a_{12}$ (above) and $a_{21}$ (below):

| Matrix | $a_{12}$ | $a_{21}$ | class |
|---|---:|---:|---|
| $\begin{pmatrix} 2 & 0 \\ 0 & -1 \end{pmatrix}$ | $0$ | $0$ | diagonal (and also triangular and symmetric) |
| $\begin{pmatrix} 1 & 9 \\ 0 & \sqrt 2 \end{pmatrix}$ | $9$ | $0$ | upper triangular: the entry below is zero |
| $\begin{pmatrix} -1 & 0 \\ 7 & 2 \end{pmatrix}$ | $0$ | $7$ | lower triangular: the entry above is zero |
| $\begin{pmatrix} -1 & 2 \\ 2 & 4 \end{pmatrix}$ | $2$ | $2$ | symmetric: $a_{12} = a_{21}$ |
| $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ | $1$ | $-1$ | skew-symmetric: $a_{12} = -a_{21}$ and zero diagonal |

The first matrix is also triangular (upper and lower) and symmetric: the first row of the table reminds you. In the handouts' list each matrix is the example of its class, but that does not mean it belongs only to that one.

### Five subspaces of $M(n)$ (p. 28)

The space of square $n \times n$ matrices is written $M(n, \K)$, or more simply $M(n)$. The handouts denote by

$$D(n), \qquad T^s(n), \qquad T^i(n), \qquad S(n), \qquad A(n)$$

the subsets made, respectively, of the diagonal, upper triangular, lower triangular, symmetric and skew-symmetric matrices.

> [!PROP] 6.5
> The subsets $D(n)$, $T^s(n)$, $T^i(n)$, $S(n)$, $A(n)$ are all vector subspaces of $M(n)$.

The handouts' explanation: for each of the five subsets it is enough to check that the zero matrix belongs to it and that sum and product by a scalar preserve the property that defines it. Here it is in full.

**Symmetric matrices $S(n)$.**
1. The zero matrix is symmetric: $0 = 0$ in every entry.
2. If $A$ and $B$ are symmetric, that is $a_{ij} = a_{ji}$ and $b_{ij} = b_{ji}$, then
   $$(A + B)_{ij} = a_{ij} + b_{ij} = a_{ji} + b_{ji} = (A + B)_{ji}.$$
3. If $A$ is symmetric and $\lambda \in \K$, then $(\lambda A)_{ij} = \lambda a_{ij} = \lambda a_{ji} = (\lambda A)_{ji}$.

**Skew-symmetric matrices $A(n)$.** Same steps with the minus sign: $(A + B)_{ij} = a_{ij} + b_{ij} = -a_{ji} - b_{ji} = -(A + B)_{ji}$ and $(\lambda A)_{ij} = \lambda a_{ij} = -\lambda a_{ji} = -(\lambda A)_{ji}$.

**Upper triangular matrices $T^s(n)$.** If $i > j$, then $a_{ij} = 0$ and $b_{ij} = 0$, so $(A + B)_{ij} = 0 + 0 = 0$ and $(\lambda A)_{ij} = \lambda \cdot 0 = 0$: the zeros below the diagonal stay zeros. The same for $T^i(n)$, with $i < j$, and for $D(n)$, with $i \neq j$.

> [!EXAMPLE] · the sum of two symmetric matrices is symmetric
> $$\begin{pmatrix} 1 & 2 \\ 2 & 3 \end{pmatrix} + \begin{pmatrix} 0 & -1 \\ -1 & 5 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 8 \end{pmatrix}, \qquad -3\begin{pmatrix} 0 & 4 \\ -4 & 0 \end{pmatrix} = \begin{pmatrix} 0 & -12 \\ 12 & 0 \end{pmatrix}.$$
> The first sum is still a mirror image across the diagonal; the multiple of a skew-symmetric matrix is still skew-symmetric.

> [!NOTE] The transpose, in advance
> In the explanation of Proposition 6.5 the handouts write ${}^t(A + B) = A + B$ and ${}^t(\lambda A) = \lambda A$. The symbol ${}^tA$ is the **transpose** of $A$, which you get by swapping rows and columns: $({}^tA)_{ij} = a_{ji}$. Lesson L08 defines it. With this notation, $A$ is symmetric if and only if ${}^tA = A$, and skew-symmetric if and only if ${}^tA = -A$.

> [!PITFALL] "Triangular" is not a subspace
> Proposition 6.5 talks about **upper** triangular and **lower** triangular matrices, separately. The set of all triangular matrices (upper or lower) is not a subspace:
> $$\begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix} + \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix},$$
> the sum of an upper triangular and a lower triangular matrix, is not triangular. It is again the problem of the union of two subspaces.

> [!BEYOND] · relations between the five classes
> Martelli's book (Example 2.2.13) notes that $D(n) = T^s(n) \cap T^i(n)$: a matrix is diagonal exactly when it is both upper and lower triangular. And $S(n) \cap A(n) = \{0\}$: if $a_{ij} = a_{ji}$ and $a_{ij} = -a_{ji}$, then $a_{ij} = -a_{ij}$, so $2a_{ij} = 0$ and $a_{ij} = 0$ (dividing by $2$, as in the note above: in the field $\{0, 1\}$, where $1 + 1 = 0$, symmetric and skew-symmetric are instead the same thing).

## Linear combinations (p. 28)

With the sum and the product by a scalar you can build new vectors starting from some given vectors: you multiply each one by a number and add up the results.

> [!DEF] Linear combination (p. 28)
> Let $V$ be a vector space and let $v_1, \dots, v_k \in V$. A **linear combination** of the vectors $v_1, \dots, v_k$ is a vector of the form
> $$v = \lambda_1 v_1 + \dots + \lambda_k v_k,$$
> where $\lambda_1, \dots, \lambda_k \in \K$.

Piece by piece:

- The numbers $\lambda_1, \dots, \lambda_k$ are called the **coefficients** of the combination. They are any scalars: positive, negative, fractions, even zero.
- "Linear" means that you use **only** the two operations of the vector space: no product between vectors, no squares.
- With all coefficients equal to $0$ you always get the zero vector; with $\lambda_i = 1$ and the others $0$ you get $v_i$ itself.

> [!EXAMPLE] · combinations in three different spaces
> - In $\R^3$: $2\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} - \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 - 0 \\ 0 - 1 \\ 2 - 1 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix}$.
> - Among polynomials: $3(x^2 + 1) - 2(x - 1) = 3x^2 + 3 - 2x + 2 = 3x^2 - 2x + 5$.
> - Among matrices: $a\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + b\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} a & b \\ b & a \end{pmatrix}$, which is the form of the matrices of Exercise 6.9.

The handouts' example is in $\R^3$, with

$$v_1 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}, \qquad v_2 = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}, \qquad \lambda_1 v_1 + \lambda_2 v_2 = \begin{pmatrix} \lambda_1 \\ \lambda_2 \\ 0 \end{pmatrix}.$$

As $\lambda_1$ and $\lambda_2$ vary you get **precisely** the plane $z = 0$. "Precisely" means two things:

1. every combination has third coordinate equal to $0$, so it lies in the plane $z = 0$;
2. conversely, every point $(a, b, 0)$ of the plane is obtained, with $\lambda_1 = a$ and $\lambda_2 = b$.

In the tool below $u$ and $v$ are two vectors of the plane and the yellow point is the combination $\lambda u + \mu v$. Move the sliders $\lambda$ and $\mu$: with $u = (1, 2)$ and $v = (3, 1)$ the point reaches any position of the plane. Then drag $v$ onto the line of $u$, for example to $(2, 4)$: from that moment the combinations stay on the red line, whatever $\lambda$ and $\mu$ are.

```widget vettori
title: The linear combinations $\lambda u + \mu v$
u: 1 2
v: 3 1
modo: combinazione
modi: combinazione
lambda: 2
mu: -1
```

## The subspace spanned: Span (pp. 28–29)

The example of the plane $z = 0$ suggests looking at **all together** the linear combinations of some vectors.

> [!DEF] 6.6 · Subspace spanned
> Let $V$ be a vector space and $v_1, \dots, v_k \in V$ arbitrary vectors. The **subspace spanned** by $v_1, \dots, v_k$ is the subset of $V$ made of all their linear combinations and it is denoted by $\Span(v_1, \dots, v_k)$. In symbols:
> $$\Span(v_1, \dots, v_k) = \{\lambda_1 v_1 + \dots + \lambda_k v_k \mid \lambda_1, \dots, \lambda_k \in \K\}.$$

Piece by piece:

- *Span* is an English word: *to span* means, in this context, "to generate", "to cover".
- It is a **set**, and usually an infinite one: it contains one combination for each choice of the coefficients.
- It contains the starting vectors (for $v_1$: $\lambda_1 = 1$ and the other coefficients $0$) and the zero vector (all coefficients $0$).
- The bar $\mid$ is read "as … vary": $\lambda_1, \dots, \lambda_k$ take all the possible values in $\K$.
- We also say that $v_1, \dots, v_k$ **span** $\Span(v_1, \dots, v_k)$, and that they are **generators** of it.

The name "subspace spanned" anticipates a fact to be proved: the Span really is a subspace.

> [!PROP] 6.7
> The subset $\Span(v_1, \dots, v_k)$ is a vector subspace of $V$.

Proof (from the handouts, with the justifications). We call $W = \Span(v_1, \dots, v_k)$ and check the three axioms of Definition 6.2.

1. **$0 \in W$.** With $\lambda_1 = \dots = \lambda_k = 0$ you get $0v_1 + \dots + 0v_k = 0 + \dots + 0 = 0$, by Proposition 5.5. So $0$ is a linear combination of the $v_i$: it is in $W$.
2. **Closed under the sum.** If $v, w \in W$, by definition they are written as combinations:
   $$v = \lambda_1 v_1 + \dots + \lambda_k v_k, \qquad w = \mu_1 v_1 + \dots + \mu_k v_k.$$
   Adding and collecting each $v_i$ (associative and commutative properties of the sum and axiom 3):
   $$v + w = (\lambda_1 + \mu_1)v_1 + \dots + (\lambda_k + \mu_k)v_k,$$
   which is still a linear combination of the $v_i$, with coefficients $\lambda_i + \mu_i$. So $v + w \in W$.
3. **Closed under the product by a scalar.** If $v \in W$ and $\lambda \in \K$, by axioms 2 and 4:
   $$\lambda v = \lambda(\lambda_1 v_1 + \dots + \lambda_k v_k) = (\lambda\lambda_1)v_1 + \dots + (\lambda\lambda_k)v_k \in W. \qquad \square$$

> [!EXAMPLE] 6.8 · The Span of a single vector
> If $v$ is a single vector, then $\Span(v) = \{\lambda v \mid \lambda \in \K\}$: they are all the multiples of $v$. For example, in $\R^2$,
> $$\Span\begin{pmatrix} 1 \\ 2 \end{pmatrix} = \left\{ \begin{pmatrix} t \\ 2t \end{pmatrix} \;\middle|\; t \in \R \right\},$$
> which is the line $y = 2x$.

Why exactly the line $y = 2x$? A point $(x, y)$ is in the Span if there is $t$ with $x = t$ and $y = 2t$. The first equation says $t = x$; substituting into the second, $y = 2x$. Conversely, if $y = 2x$, just take $t = x$. It is the line of the multiples of $(1, 2)$ drawn in lesson L05.

What shape can a Span have in the plane and in space? A table to find your way (the precise reason arrives with dimension, in lesson L07):

| Generators | Span in $\R^2$ | Span in $\R^3$ |
|---|---|---|
| only the zero vector | $\{0\}$ | $\{0\}$ |
| one vector $v \neq 0$ | the line through the origin with the direction of $v$ | the line through the origin with the direction of $v$ |
| two vectors that are not multiples of each other | all of $\R^2$ | the plane through the origin that contains them |
| two vectors that are multiples of each other (not both zero) | a line | a line |

> [!PITFALL] $\Span(v_1, v_2)$ is not $\{v_1, v_2\}$
> $\{v_1, v_2\}$ is a set with **two** elements; $\Span(v_1, v_2)$ contains **all** the combinations, infinitely many if the vectors are not zero. And different generators can give the same Span: $\Span\big((1, 2)\big) = \Span\big((2, 4)\big) = \Span\big((-1, -2)\big)$, always the line $y = 2x$.

> [!BEYOND] · the Span is the smallest subspace that contains the vectors
> If a subspace $U$ contains $v_1, \dots, v_k$, it also contains all their multiples (axiom 3) and all the sums of multiples (axiom 2): so $\Span(v_1, \dots, v_k) \subset U$. Practical consequence, very useful in the quizzes: **to show that $\Span(v_1, \dots, v_k) \subset U$ it is enough to check that each $v_i$ lies in $U$**. To show equality you also need the converse: every vector of $U$ is a combination of the $v_i$.

### Does a vector lie in the Span? (pp. 29–30)

It is the question of Exercise 6.10, and one of the most frequent of the whole course.

> [!METHOD] · $u \in \Span(v_1, \dots, v_k)$?
> 1. Write down the unknown: you look for coefficients $\lambda_1, \dots, \lambda_k$ with $\lambda_1 v_1 + \dots + \lambda_k v_k = u$.
> 2. Compute the combination and set it equal coordinate by coordinate (or coefficient by coefficient, for polynomials): you get a **linear system** in the unknowns $\lambda_i$.
> 3. Solve the system. For now with substitutions; from lesson L11 with Gauss's method.
> 4. If the system has a solution, $u$ lies in the Span, and the $\lambda_i$ you found prove it: substitute them and check. If the system leads to a contradiction, such as $3 = 4$, $u$ does not lie in the Span.

> [!EXAMPLE] · a polynomial in the Span of two others
> Does the polynomial $x^2 + 2x + 3$ lie in $\Span(x^2 + 1,\ x + 1)$? We look for $a, b$ with
> $$a(x^2 + 1) + b(x + 1) = ax^2 + bx + (a + b) = x^2 + 2x + 3.$$
> Setting the coefficients equal: $a = 1$ (of $x^2$), $b = 2$ (of $x$), $a + b = 3$ (constant term). The first two give $a = 1$ and $b = 2$, and the third is satisfied: $1 + 2 = 3$. So yes: $x^2 + 2x + 3 = (x^2 + 1) + 2(x + 1)$.
>
> With $x^2 + 2x + 4$ instead the third equation would become $1 + 2 = 4$, false: that polynomial does **not** lie in the Span.

For larger systems the tool below does the Gauss steps for you (you learn the method in lesson L11). Write the vectors $v_1, \dots, v_k$ in the columns and, in the last column, the vector $u$ to test. The matrix already entered is the one of Exercise 6.10 with $u = (1, 2, 3)$: the tool finds exactly one solution, $x_1 = 1$ and $x_2 = 2$ (it calls $x_1, x_2$ what here are $\lambda_1, \lambda_2$). Then change the last number from $3$ to $4$, that is try $w = (1, 2, 4)$, and press "Compute": no solution.

```widget gauss
title: Does the vector in the last column lie in the Span of the other columns?
matrice: 1 0 1; 0 1 2; 1 1 3
modo: sistema
modi: sistema
```

> [!BEYOND] · parametric form and Cartesian form
> Martelli's book (§2.2.11) gives a name to the two ways of describing a subspace of $\K^n$. In **parametric form** you describe it as the Span of some vectors: $\Span((1, 0, 1), (0, 1, 1)) = \{(s, t, s + t) \mid s, t \in \R\}$. In **Cartesian form** you describe it with homogeneous linear equations: the same set is the plane $z = x + y$. In Exercise 6.10 you go from the first to the second. The two ways will come back for lines and planes in lessons L22–L24.

> [!BEYOND] · where to find it in the book
> In Martelli's book: matrices and the space $M(m, n, \K)$ in **§2.2.5** (pp. 49–50); subspaces, trivial and total subspace in **§2.2.6–2.2.7** (pp. 50–51); homogeneous systems in **§2.2.8** (pp. 51–52); linear combinations and Span in **§2.2.9–2.2.10** (pp. 52–54, Proposition 2.2.4 = Proposition 6.7); Cartesian and parametric form and polynomials with restrictions in **§2.2.11–2.2.12** (pp. 54–55); diagonal, triangular, symmetric and skew-symmetric matrices in **§2.2.14** (pp. 56–57, Proposition 2.2.10 = Proposition 6.5); intersection and union in **§2.2.15–2.2.16** (pp. 57–58).

## Towards the exam

The Linear Algebra and Geometry written test has 10 multiple-choice questions with 5 answers each (you need at least 6 points to have the 2 problems worth 11 points marked), it lasts 2 hours, with no calculator and only 4 handwritten pages; the 2026/27 exam sessions are on 22/01 and 05/02/2027 at 14:00. All the details are in lesson L01.

**What you need from this lesson for the exam**

1. **"Is it a subspace?"** It is the most frequent question of this part of the course: exams of 08/02/2024 (question 2), 10/07/2024 (question 2, the set $O(2)$ of orthogonal matrices, which does not contain the zero matrix), 03/06/2025 (question 2), 05/02/2026 (question 2) and 07/09/2026 (question 6). Two examples, with the solution.

> [!EXAM] Exam of 08/02/2024, question 2
> **Text.** Which of the following sets is **not** a subspace of $\R_2[x]$? (a) $\{p(x) \in \R_2[x] \mid p(0) = 0\}$; (b) $\{(t + s)x^2 - tx - s \mid s, t \in \R\}$; (c) $\{p(x) = ax^2 + bx + c \mid a = 2c,\ b = 0\}$; (d) $\{(1 + t)x^2 + tx \mid t \in \R\}$; (e) $\{p(x) \in \R_2[x] \mid p(1) = 0 = p(2)\}$.
>
> **Solution.** It is (d). To get the zero polynomial you would need $1 + t = 0$ and $t = 0$ at the same time, that is $t = -1$ and $t = 0$: impossible. So the zero polynomial is not there. The others are subspaces: (a) and (e) are polynomials that vanish at certain points; (b) can be rewritten $t(x^2 - x) + s(x^2 - 1)$, so it is $\Span(x^2 - x,\ x^2 - 1)$; (c) is defined by homogeneous linear equations in the coefficients ($a - 2c = 0$, $b = 0$).

> [!EXAM] Exam of 03/06/2025, question 2
> **Text.** Which of the following sets of points $(x, y, z) \in \R^3$ is a vector subspace of $\R^3$? (a) $x^2 - 2x + 1 = 0$; (b) $x + 2yz + 3z = 7$; (c) $-x + 7y + z = 5$; (d) $x + \frac y2 - 5\pi z = 0$; (e) $x + 3iy + 5z = 0$.
>
> **Solution.** It is (d): a homogeneous linear equation with real coefficients. The others: in (a) the equation is $(x - 1)^2 = 0$, that is $x = 1$, and the origin does not satisfy it; (b) and (c) have a non-zero constant term, so the origin is not there (in (b) there is also the product $yz$). Option (e) has a non-real coefficient and the official solution rules it out because it "is not defined over the real numbers". Strictly speaking, for a real vector the equation requires the real part and the imaginary part to vanish separately, $x + 5z = 0$ and $3y = 0$, and the resulting set is a line through the origin; but the intention of the question is clear, and the expected answer is (d).

2. **"$U = \Span(\dots)$".** Another recurring question asks which Span is equal to a subspace of polynomials (24/01/2024, question 1; 15/01/2026, question 7).

> [!EXAM] Exam of 24/01/2024, question 1
> **Text.** Let $a(x) = x - 1$, $b(x) = x + 2$, $c(x) = 2x^2 - 2$, $d(x) = x^2 - x$, $e(x) = 2x^3 + 1$, $f(x) = x^3 - x^2$ be in $\R_3[x]$, and let $U = \{p(x) \in \R_3[x] \mid p(1) = 0\}$. Then: (a) $U = \Span(a, c)$; (b) $U = \Span(a, c, f)$; (c) $U = \Span(c, d, e, f)$; (d) $U = \Span(b, e, f)$; (e) $U = \Span(a, c, d)$.
>
> **Solution.** It is (b), and you can prove it with the tools of this lesson.
> - Rule out (c) and (d): $e(1) = 3 \neq 0$ and $b(1) = 3 \neq 0$, so $e, b \notin U$ and those Spans leave $U$.
> - Rule out (a) and (e): their generators have degree $\le 2$, so every combination of them has degree $\le 2$; but $U$ contains $x^3 - 1$, of degree $3$.
> - Confirm (b). On the one hand $a(1) = c(1) = f(1) = 0$, so $\Span(a, c, f) \subset U$ (box on the smallest Span). On the other, if $p(1) = 0$ then $p(x) = (x - 1)q(x)$ with $q$ of degree $\le 2$ (lesson L04), so $p$ is a combination of $x - 1$, $x(x - 1) = x^2 - x$ and $x^2(x - 1) = x^3 - x^2$. And these three are combinations of $a$, $c$, $f$: $x - 1 = a$, $x^2 - x = \frac 12 c - a$, $x^3 - x^2 = f$. So $U \subset \Span(a, c, f)$.

3. **The special matrices.** In the questions on dimension $T^s(3)$ (24/01/2024, question 5) and $S(3)$ (15/01/2026, question 4) appear: the dimension is computed in lesson L07, but that they are subspaces is Proposition 6.5. The exam of 08/02/2024 (question 6) asks for which matrices $A + {}^tA = 0$: they are the skew-symmetric ones.
4. **The Span in the problems.** In the problems worth 11 points the Span is used to write lines and planes: "compute the line $r = \pi_1 \cap \pi_2$ in the form $r = P + \Span(v)$" (24/01/2024, problem 12). You will see it in lessons L22–L24.

> [!METHOD] · "Is it a subspace?": the signals to recognise
> | If the set is described by… | then… |
> |---|---|
> | **homogeneous** linear equations in the coordinates or in the coefficients ($x - 2y = 0$, $a = 2c$, $p(1) = 0$, $p(1) = p(2)$) | it is a subspace |
> | an equation with a non-zero constant term ($x + y = 1$, $p(0) = 1$, $a_{11} = 1$) | it does not contain zero: **no** |
> | inequalities ($x \ge 0$, $b > 0$) | almost always no: try multiplying by $-1$ |
> | products or powers of the unknowns ($xy = 0$, $x = y^2$) | almost always no: try a sum or a multiple |
> | a parameter with a fixed piece, such as $\{(1 + t)x^2 + tx\}$ | almost always no: with no $t$ do you get zero |
> | a Span, or "all the combinations of…" | yes, always (Proposition 6.7) |
>
> To answer **no** write a concrete counterexample; to answer **yes**, rewrite the set as a Span or check the three axioms with generic vectors.

> [!PITFALL] The most common mistakes
> - Checking only the zero: the first quadrant contains zero but is not a subspace.
> - Forgetting negative scalars in the check of axiom 3.
> - Thinking that "triangular" (upper or lower) is a subspace: $T^s(n)$ and $T^i(n)$ are, separately.
> - Confusing $\Span(v_1, v_2)$ with the set $\{v_1, v_2\}$.
> - In the check "$u \in \Span$?" stopping at the first equations without checking the last one too.

> [!EXAM] The 4-page sheet
> From this lesson: the three subspace axioms; the table of the "yes / no" signals; the general $3 \times 3$ forms of the five classes of matrices; the definition of $\Span$ and the method "$u \in \Span$?".

## Quiz

```quiz
Q: Which of these sets is **not** a subspace of $\R_2[x]$?
- $\{p(x) \in \R_2[x] \mid p(2) = 0\}$
- $\{p(x) \in \R_2[x] \mid p(0) = p(1)\}$
- $\Span(x,\ x^2 + 1)$
+ $\{x^2 + t \mid t \in \R\}$
- $\{ax^2 + bx + c \mid a = b = c\}$
= No polynomial of the form $x^2 + t$ is zero, because the coefficient of $x^2$ is always $1$: the zero is missing. The others are subspaces: $p(2) = 0$ and $p(0) - p(1) = 0$ are homogeneous linear conditions, a Span always is one, and $\{a = b = c\}$ is $\Span(x^2 + x + 1)$. Similar to the exams of 08/02/2024 and 05/02/2026 (question 2).

Q: Which of these sets is a vector subspace of $\R^3$?
+ $\{(x, y, z) \mid x - 2y + 3z = 0\}$
- $\{(x, y, z) \mid x + y + z = 1\}$
- $\{(x, y, z) \mid xyz = 0\}$
- $\{(x, y, z) \mid x \ge 0\}$
- $\{(x, y, z) \mid x = y^2\}$
= It is a homogeneous linear equation: if two vectors satisfy it, so do their sum and their multiples. Counterexamples for the others: the origin does not satisfy $x + y + z = 1$; $(1, 1, 0) + (0, 0, 1) = (1, 1, 1)$ has $xyz = 1$; $(-1)(1, 0, 0)$ has $x < 0$; $(1, 1, 0)$ satisfies $x = y^2$ but $2 \cdot (1, 1, 0) = (2, 2, 0)$ does not, because $2 \neq 4$. Similar to the exam of 03/06/2025, question 2.

Q: The matrix $\begin{pmatrix} 0 & 2 \\ -2 & 0 \end{pmatrix}$ is:
+ skew-symmetric, and of none of the other four classes
- symmetric
- upper triangular
- diagonal
- both symmetric and skew-symmetric
= $a_{12} = 2 = -a_{21}$ and the diagonal is zero: it is skew-symmetric. It is not symmetric ($2 \neq -2$), nor triangular (both entries off the diagonal are non-zero), nor diagonal. Only the zero matrix is both symmetric and skew-symmetric.

Q: Which of these vectors belongs to $\Span\big((1, 0, 1),\ (0, 1, 1)\big)$?
+ $(1, 1, 2)$
- $(1, 1, 1)$
- $(2, 1, 1)$
- $(0, 0, 1)$
- $(1, -1, 1)$
= The combinations are $a(1, 0, 1) + b(0, 1, 1) = (a, b, a + b)$: the third coordinate is the sum of the first two. Only $(1, 1, 2)$ satisfies this, with $a = b = 1$. In the others the third coordinate should be $2$, $3$, $0$ and $0$.

Q: In $\R^2$, what is $\Span\big((1, 2)\big)$?
+ The line $y = 2x$.
- The line $x = 2y$.
- The line $y = x + 2$.
- The whole plane $\R^2$.
- The set $\{(1, 2)\}$, with a single element.
= $\Span((1, 2)) = \{(t, 2t) \mid t \in \R\}$ (Example 6.8): the points with $y = 2x$. The line $x = 2y$ does not contain $(1, 2)$; $y = x + 2$ does not pass through the origin, so it is not even a subspace; a single non-zero vector spans a line, not the plane.

Q: The set of matrices $A \in M(2, \R)$ with $a_{11} = 1$ is:
- a subspace, because it is defined by a linear equation
- a subspace, because it contains the identity matrix
+ not a subspace: for example it does not contain the zero matrix
- a subspace, because it is closed under the product by a scalar
- equal to the whole of $M(2, \R)$
= The zero matrix has $a_{11} = 0 \neq 1$. The equation $a_{11} = 1$ is linear but not homogeneous; containing the identity is not enough; and it is not even closed under multiples, because $2A$ has $a_{11} = 2$. Similar to the exam of 10/07/2024, question 2 ($O(2)$ is not a subspace because it does not contain the zero matrix).

Q: For which value of $k$ does the vector $(1, k, 3)$ belong to $\Span\big((1, 0, 1),\ (0, 1, 1)\big)$?
N: 2
= You look for $(a, b, a + b) = (1, k, 3)$: so $a = 1$, $b = k$ and $1 + k = 3$, that is $k = 2$. Check: $(1, 0, 1) + 2(0, 1, 1) = (1, 2, 3)$.

Q: Let $U = \{p(x) \in \R_2[x] \mid p(1) = 0\}$. Which equality is true?
+ $U = \Span(x - 1,\ x^2 - 1)$
- $U = \Span(x - 1)$
- $U = \Span(x + 1,\ x^2 - 1)$
- $U = \Span(x^2 - 1,\ x^2 - x,\ x^2 + x)$
- $U = \Span(1,\ x,\ x^2)$
= $x - 1$ and $x^2 - 1$ vanish at $1$, so their Span lies in $U$. Conversely, if $p(1) = 0$ then $p(x) = (x - 1)(ax + b) = a(x^2 - x) + b(x - 1) = a(x^2 - 1) + (b - a)(x - 1)$. The others: $\Span(x - 1)$ does not contain $x^2 - 1$; $x + 1$ and $x^2 + x$ are equal to $2$ at $1$, so they are not in $U$; $\Span(1, x, x^2)$ is the whole of $\R_2[x]$. Similar to the exams of 24/01/2024 (question 1) and 15/01/2026 (question 7).

Q: Which statement is true?
+ Every subspace of $V$ contains the zero vector of $V$.
- The union of two subspaces is always a subspace.
- $\Span(v)$ contains only the vector $v$.
- $\{0\}$ is not a subspace, because it has only one element.
- In $\R^2$ a line that does not pass through the origin can be a subspace.
= It is axiom 1 of Definition 6.2. The union of the two axes of $\R^2$ is not a subspace; $\Span(v)$ contains all the multiples of $v$; $\{0\}$ is the trivial subspace; a line that does not pass through the origin does not contain zero.

Q: The set of matrices $A \in M(2, \R)$ such that $A + {}^tA = 0$ (where ${}^tA$ is the transpose, $({}^tA)_{ij} = a_{ji}$) is:
+ the space $A(2)$ of skew-symmetric matrices
- the space $S(2)$ of symmetric matrices
- the space $D(2)$ of diagonal matrices
- the set that contains only the zero matrix
- the empty set
= $A + {}^tA = 0$ means $a_{ij} + a_{ji} = 0$ for all $i, j$, that is $a_{ij} = -a_{ji}$: it is the definition of skew-symmetric matrix. For example $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ satisfies the condition and is not zero. Similar to the exam of 08/02/2024, question 6.
```

## Exercises

::: exercise intermediate Exercise 6.9 of the handouts: the matrices of the form $\begin{pmatrix} a & b \\ b & a \end{pmatrix}$
Consider the subset $W \subset M(2, \R)$ made of the matrices of the form
$$\begin{pmatrix} a & b \\ b & a \end{pmatrix}, \qquad a, b \in \R.$$
Prove that $W$ is a vector subspace of $M(2, \R)$ and check that
$$W = \Span\left(\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}, \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\right).$$
::: solution
**$W$ is a subspace.** I check the three axioms of Definition 6.2.
1. The zero matrix is in $W$: it is the case $a = b = 0$.
2. Sum: $\begin{pmatrix} a & b \\ b & a \end{pmatrix} + \begin{pmatrix} a' & b' \\ b' & a' \end{pmatrix} = \begin{pmatrix} a + a' & b + b' \\ b + b' & a + a' \end{pmatrix}$, which still has the same form, with $a + a'$ and $b + b'$ in place of $a$ and $b$.
3. Multiples: $\lambda \begin{pmatrix} a & b \\ b & a \end{pmatrix} = \begin{pmatrix} \lambda a & \lambda b \\ \lambda b & \lambda a \end{pmatrix}$, same form with $\lambda a$ and $\lambda b$.

**$W$ is the Span of the two matrices.** I call $I = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ and $J = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$. For all $a, b$:
$$aI + bJ = \begin{pmatrix} a & 0 \\ 0 & a \end{pmatrix} + \begin{pmatrix} 0 & b \\ b & 0 \end{pmatrix} = \begin{pmatrix} a & b \\ b & a \end{pmatrix}.$$
Read from left to right, it says that every combination of $I$ and $J$ is in $W$; read from right to left, that every element of $W$ is a combination of $I$ and $J$. So $W = \Span(I, J)$.

Note: with this second part the first point becomes automatic, because every Span is a subspace (Proposition 6.7). It is the quickest way to prove that a set is a subspace: rewrite it as a Span.
:::

::: exercise intermediate Exercise 6.10 of the handouts: a Span in $\R^3$
In $\R^3$ let
$$v_1 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}, \qquad v_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}.$$
Describe $\Span(v_1, v_2)$ explicitly and determine which of the vectors
$$u = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}, \qquad w = \begin{pmatrix} 1 \\ 2 \\ 4 \end{pmatrix}$$
belong to this subspace.
::: solution
**Explicit description.** A generic combination is
$$a v_1 + b v_2 = \begin{pmatrix} a \\ 0 \\ a \end{pmatrix} + \begin{pmatrix} 0 \\ b \\ b \end{pmatrix} = \begin{pmatrix} a \\ b \\ a + b \end{pmatrix}, \qquad a, b \in \R.$$
So $\Span(v_1, v_2) = \{(a, b, a + b) \mid a, b \in \R\}$: the vectors in which the third coordinate is the sum of the first two. In Cartesian form it is the **plane** $z = x + y$, that is $x + y - z = 0$, which passes through the origin. Indeed a point $(x, y, z)$ is of the form $(a, b, a + b)$ exactly when $z = x + y$: just take $a = x$ and $b = y$.

**The vector $u$.** I look for $a, b$ with $(a, b, a + b) = (1, 2, 3)$: from the first two coordinates $a = 1$ and $b = 2$; the third requires $a + b = 3$, and $1 + 2 = 3$. Yes: $u = v_1 + 2v_2 \in \Span(v_1, v_2)$. Check: $(1, 0, 1) + 2(0, 1, 1) = (1, 2, 3)$.

**The vector $w$.** Again $a = 1$ and $b = 2$, but the third coordinate requires $a + b = 4$, while $1 + 2 = 3$. Contradiction: $w \notin \Span(v_1, v_2)$. With the equation of the plane: $1 + 2 - 4 = -1 \neq 0$.
:::

::: exercise basic Calculations with matrices
Let $A = \begin{pmatrix} 2 & -1 & 0 \\ 1 & 3 & 4 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 1 & -2 \\ 0 & -1 & 5 \end{pmatrix}$.
(a) What size are they? What are $a_{13}$, $a_{21}$, the row $A_2$ and the column $A^2$?
(b) Compute $A + B$ and $3A - 2B$.
(c) Find the matrix $X$ such that $A + X = B$.
::: solution
(a) They are both $2 \times 3$. $a_{13} = 0$ (row 1, column 3), $a_{21} = 1$ (row 2, column 1), $A_2 = (1, 3, 4)$, $A^2 = {}^t(-1, 3)$.

(b) Entry by entry:
$$A + B = \begin{pmatrix} 3 & 0 & -2 \\ 1 & 2 & 9 \end{pmatrix}, \qquad 3A - 2B = \begin{pmatrix} 6 - 2 & -3 - 2 & 0 + 4 \\ 3 - 0 & 9 + 2 & 12 - 10 \end{pmatrix} = \begin{pmatrix} 4 & -5 & 4 \\ 3 & 11 & 2 \end{pmatrix}.$$

(c) Adding $-A$ to both sides, $X = B - A = \begin{pmatrix} -1 & 2 & -2 \\ -1 & -4 & 1 \end{pmatrix}$. Check: $A + X = B$.
:::

::: exercise basic Recognising the classes of matrices
For each matrix say which of the five classes of Definition 6.3 it belongs to:
$$M_1 = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & -1 \end{pmatrix}, \quad M_2 = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 5 & 6 \\ 3 & 6 & 0 \end{pmatrix}, \quad M_3 = \begin{pmatrix} 0 & 1 & -2 \\ -1 & 0 & 3 \\ 2 & -3 & 0 \end{pmatrix}, \quad M_4 = \begin{pmatrix} 1 & 0 & 0 \\ 4 & 2 & 0 \\ 5 & 6 & 3 \end{pmatrix}, \quad M_5 = \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}.$$
::: solution
- $M_1$: off the diagonal only zeros, so it is **diagonal**; as a consequence it is also **upper triangular**, **lower triangular** and **symmetric**. It is not skew-symmetric, because the diagonal is not zero.
- $M_2$: $a_{12} = a_{21} = 2$, $a_{13} = a_{31} = 3$, $a_{23} = a_{32} = 6$: **symmetric**, and nothing else (there are numbers both above and below the diagonal).
- $M_3$: zero diagonal and $a_{12} = 1 = -a_{21}$, $a_{13} = -2 = -a_{31}$, $a_{23} = 3 = -a_{32}$: **skew-symmetric**, and nothing else.
- $M_4$: above the diagonal only zeros: **lower triangular** (so triangular), and nothing else.
- $M_5$: $a_{12} = 1 = -a_{21}$, but the diagonal is not zero, so it is not skew-symmetric; it is not symmetric because $1 \neq -1$; it is not triangular. It belongs to **none** of the five classes.
:::

::: exercise intermediate Subspaces of $\R^3$
Say which of the following subsets of $\R^3$ are subspaces. If yes, prove it; if no, find a counterexample.
(a) $W_1 = \{(x, y, z) \mid x + 2y - z = 0\}$
(b) $W_2 = \{(x, y, z) \mid x = y = z\}$
(c) $W_3 = \{(x, y, z) \mid x + y + z = 1\}$
(d) $W_4 = \{(x, y, z) \mid x^2 = y^2\}$
(e) $W_5 = \{(t, t^2, 0) \mid t \in \R\}$
::: solution
(a) **Yes.** $(0, 0, 0)$ satisfies the equation. If $x + 2y - z = 0$ and $x' + 2y' - z' = 0$, adding you get $(x + x') + 2(y + y') - (z + z') = 0$; multiplying by $\lambda$, $\lambda x + 2\lambda y - \lambda z = 0$. It is a plane through the origin.

(b) **Yes.** It can be rewritten $W_2 = \{(t, t, t) \mid t \in \R\} = \Span((1, 1, 1))$, which is a subspace by Proposition 6.7: the line through the origin with the direction of $(1, 1, 1)$.

(c) **No.** The origin is not there: $0 + 0 + 0 = 0 \neq 1$.

(d) **No.** It contains the origin and is closed under multiples, but not under the sum: $(1, 1, 0)$ and $(1, -1, 0)$ are in $W_4$ (in both $x^2 = y^2 = 1$), their sum $(2, 0, 0)$ is not, because $4 \neq 0$. $W_4$ is the union of the two planes $x = y$ and $x = -y$.

(e) **No.** $(1, 1, 0) \in W_5$ (with $t = 1$), but $2 \cdot (1, 1, 0) = (2, 2, 0)$ is not: to have first coordinate $2$ you need $t = 2$, and then the second would be $4$.
:::

::: exercise exam As at the exam: subspaces of $\R_2[x]$
For each subset of $\R_2[x]$ decide whether it is a subspace. For those that are, write them as the Span of a few polynomials.
(a) $\{p(x) \in \R_2[x] \mid p(1) = 0\}$
(b) $\{p(x) \in \R_2[x] \mid p(0) = 1\}$
(c) $\{ax^2 + bx + c \mid a = c,\ b = 0\}$
(d) $\{ax^2 + bx + c \mid b > 0\}$
(e) $\{(1 + t)x^2 + tx \mid t \in \R\}$
(f) $\{(t + s)x^2 - tx - s \mid s, t \in \R\}$
::: solution
(a) **Yes.** The zero polynomial vanishes at $1$; if $p(1) = q(1) = 0$ then $(p + q)(1) = 0$ and $(\lambda p)(1) = 0$. To write it as a Span: $p(x) = ax^2 + bx + c$ has $p(1) = a + b + c = 0$, that is $c = -a - b$, so
$$p(x) = ax^2 + bx - a - b = a(x^2 - 1) + b(x - 1).$$
The set is $\Span(x^2 - 1,\ x - 1)$.

(b) **No**: the zero polynomial has $p(0) = 0 \neq 1$.

(c) **Yes**: the polynomials are $ax^2 + a = a(x^2 + 1)$, so the set is $\Span(x^2 + 1)$.

(d) **No**: $x$ has $b = 1 > 0$, but $(-1) \cdot x = -x$ has $b = -1$. (And the zero polynomial, which has $b = 0$, is missing too.)

(e) **No**: for the zero polynomial you would need $1 + t = 0$ and $t = 0$ at the same time, impossible.

(f) **Yes**: collecting $t$ and $s$,
$$(t + s)x^2 - tx - s = t(x^2 - x) + s(x^2 - 1),$$
so the set is $\Span(x^2 - x,\ x^2 - 1)$.

In lesson L07 you will compute the dimension of each: $2$, $1$ and $2$.
:::

::: exercise basic Spans in the plane
(a) Describe $\Span((2, -1))$ with an equation.
(b) Describe $\Span((1, 2), (2, 4))$.
(c) Prove that $\Span((1, 0), (1, 1)) = \R^2$, finding the coefficients explicitly for any vector $(a, b)$.
::: solution
(a) $\Span((2, -1)) = \{(2t, -t) \mid t \in \R\}$. From $x = 2t$ and $y = -t$ you get $t = -y$ and $x = -2y$: it is the line $x + 2y = 0$.

(b) $(2, 4) = 2 \cdot (1, 2)$, so every combination $\lambda(1, 2) + \mu(2, 4) = (\lambda + 2\mu)(1, 2)$ is a multiple of $(1, 2)$. The Span is the line $y = 2x$, like $\Span((1, 2))$: the second vector adds nothing.

(c) I look for $\lambda, \mu$ with $\lambda(1, 0) + \mu(1, 1) = (\lambda + \mu, \mu) = (a, b)$. From the second coordinate $\mu = b$; from the first $\lambda = a - b$. So
$$(a, b) = (a - b)(1, 0) + b(1, 1)$$
for all $a, b$: every vector of the plane is a combination, and the Span is the whole of $\R^2$. Check with $(3, 5)$: $-2 \cdot (1, 0) + 5 \cdot (1, 1) = (3, 5)$.
:::

::: exercise intermediate A Span with a parameter
For which values of $k \in \R$ does the vector $u_k = (1, 2, k)$ belong to $\Span\big((1, 1, 0),\ (0, 1, 1)\big)$? For those values write $u_k$ as a linear combination.
::: solution
I look for $a, b$ with $a(1, 1, 0) + b(0, 1, 1) = (a,\ a + b,\ b) = (1, 2, k)$. Coordinate by coordinate:
$$a = 1, \qquad a + b = 2, \qquad b = k.$$
From the first two, $a = 1$ and $b = 1$. The third then requires $k = 1$. So $u_k$ lies in the Span **only for $k = 1$**, and in that case
$$(1, 2, 1) = (1, 1, 0) + (0, 1, 1).$$
For $k \neq 1$ the third equation contradicts the first two. In Cartesian form the Span is $\{(a, a + b, b)\}$, that is the plane $y = x + z$: $u_k$ lies in it when $2 = 1 + k$.
:::

::: exercise intermediate Skew-symmetric $3 \times 3$ matrices as a Span
Prove that $A(3)$, the skew-symmetric $3 \times 3$ matrices, is the Span of three matrices, and find them. Check with your description that the sum of two skew-symmetric matrices is skew-symmetric.
::: solution
A skew-symmetric $3 \times 3$ matrix has a zero diagonal, and the entries below the diagonal are the opposites of those above. So it is determined by $a = a_{12}$, $b = a_{13}$, $c = a_{23}$:
$$\begin{pmatrix} 0 & a & b \\ -a & 0 & c \\ -b & -c & 0 \end{pmatrix} = a\begin{pmatrix} 0 & 1 & 0 \\ -1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix} + b\begin{pmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ -1 & 0 & 0 \end{pmatrix} + c\begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & -1 & 0 \end{pmatrix}.$$
Calling $F_1, F_2, F_3$ the three matrices on the right, every skew-symmetric matrix is a combination of them and every combination of them is skew-symmetric: $A(3) = \Span(F_1, F_2, F_3)$. By Proposition 6.7 it is a subspace.

Sum: with $a, b, c$ and $a', b', c'$ you get the matrix with $a + a'$, $b + b'$, $c + c'$ in the same positions and their opposites below the diagonal, which still has the skew-symmetric form. In lesson L07 you will see that $F_1, F_2, F_3$ are a basis, so $\dim A(3) = 3$ (it is Exercise 1 of tutoring Sheet 2, 2025).
:::

::: exercise exam As at the exam: a subspace of $\R_3[x]$
Let $U = \{p(x) \in \R_3[x] \mid p(1) = p(-1)\}$.
(1) Prove that $U$ is a subspace of $\R_3[x]$.
(2) Prove that $U = \Span(1,\ x^2,\ x^3 - x)$.
(3) Which of $x^2 - 1$, $x^3 + x$, $x^3 - x + 5$ and $x$ lie in $U$?
::: solution
(1) The zero polynomial is $0$ at $1$ and at $-1$, so it lies in $U$. If $p(1) = p(-1)$ and $q(1) = q(-1)$, then $(p + q)(1) = p(1) + q(1) = p(-1) + q(-1) = (p + q)(-1)$ and $(\lambda p)(1) = \lambda p(1) = \lambda p(-1) = (\lambda p)(-1)$. The three axioms hold.

(2) I write $p(x) = ax^3 + bx^2 + cx + d$. Then
$$p(1) = a + b + c + d, \qquad p(-1) = -a + b - c + d.$$
The condition $p(1) = p(-1)$ becomes $a + c = -a - c$, that is $2a + 2c = 0$, that is $c = -a$. So the polynomials of $U$ are
$$ax^3 + bx^2 - ax + d = a(x^3 - x) + b\,x^2 + d \cdot 1,$$
with any $a, b, d$: exactly the combinations of $x^3 - x$, $x^2$ and $1$. So $U = \Span(1, x^2, x^3 - x)$.

(3) It is enough to check the condition $c = -a$ (coefficient of $x$ equal to the opposite of that of $x^3$), or to compute $p(1)$ and $p(-1)$.
- $x^2 - 1$: $a = 0$, $c = 0$. **It lies in $U$** ($p(1) = p(-1) = 0$).
- $x^3 + x$: $a = 1$, $c = 1 \neq -1$. **It does not lie in $U$** ($p(1) = 2$, $p(-1) = -2$).
- $x^3 - x + 5$: $a = 1$, $c = -1$. **It lies in $U$** ($p(1) = p(-1) = 5$).
- $x$: $a = 0$, $c = 1 \neq 0$. **It does not lie in $U$** ($p(1) = 1$, $p(-1) = -1$).

The quiz of the exam of 15/01/2026 (question 7) asks exactly which Span is equal to this $U$: among the answers there is $\Span(x^3 - x,\ x^2 - 1,\ x^2 + 1)$, which coincides with $\Span(1, x^2, x^3 - x)$ because $1 = \frac 12\big((x^2 + 1) - (x^2 - 1)\big)$ and $x^2 = \frac 12\big((x^2 + 1) + (x^2 - 1)\big)$.
:::

::: exercise exam As at the exam: subsets of $M(2, \R)$
For each subset of $M(2, \R)$ decide whether it is a subspace; if it is, write it as a Span.
(a) $W_1 = \{A \mid a_{11} + a_{22} = 0\}$
(b) $W_2 = \{A \mid a_{11} a_{22} = 0\}$
(c) $W_3 = \{A \mid a_{12} = 2a_{21}\}$
(d) $W_4 = \{A \mid A \text{ is symmetric and } a_{11} = 1\}$
::: solution
(a) **Yes.** The condition is linear and homogeneous in the coefficients. From $a_{22} = -a_{11}$:
$$\begin{pmatrix} a & b \\ c & -a \end{pmatrix} = a\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} + b\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} + c\begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix},$$
so $W_1$ is the Span of these three matrices.

(b) **No.** $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ and $\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$ are in $W_2$ (the product $a_{11}a_{22}$ is $0$), but their sum is the identity, with $a_{11}a_{22} = 1$.

(c) **Yes.** Linear homogeneous condition; setting $a_{21} = t$, $a_{12} = 2t$:
$$\begin{pmatrix} a & 2t \\ t & d \end{pmatrix} = a\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + t\begin{pmatrix} 0 & 2 \\ 1 & 0 \end{pmatrix} + d\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}.$$

(d) **No.** The zero matrix has $a_{11} = 0 \neq 1$.
:::

::: exercise hard Intersection and union of subspaces
Let $U$ and $W$ be subspaces of a vector space $V$.
(a) Prove that $U \cap W$ is a subspace.
(b) Show with an example in $\R^2$ that $U \cup W$ may not be a subspace.
(c) Prove that $U \cup W$ is a subspace if and only if $U \subset W$ or $W \subset U$.
::: solution
(a) $0 \in U$ and $0 \in W$, so $0 \in U \cap W$. If $v, v' \in U \cap W$, then $v + v' \in U$ (because $U$ is a subspace) and $v + v' \in W$ (because $W$ is one): so $v + v' \in U \cap W$. The same for $\lambda v$.

(b) $U = \Span((1, 0))$ (the $x$-axis) and $W = \Span((0, 1))$ (the $y$-axis): $(1, 0) + (0, 1) = (1, 1)$ is on neither of the two axes.

(c) If $U \subset W$, then $U \cup W = W$, which is a subspace; the same if $W \subset U$.

Conversely, suppose that $U \cup W$ is a subspace but that neither of the two contains the other: then there exist $u \in U$ with $u \notin W$ and $w \in W$ with $w \notin U$. The sum $u + w$ is in $U \cup W$, so it is in $U$ or in $W$.
- If $u + w \in U$, then $w = (u + w) - u \in U$, because $U$ is closed under sums and multiples: contradiction.
- If $u + w \in W$, then $u = (u + w) - w \in W$: contradiction.

So one of the two contains the other. It is Exercise 2.2.15 of Martelli's book.
:::

## Review questions

::: question What is an $m \times n$ matrix, and what do $a_{ij}$, $A_i$ and $A^j$ denote?
It is a table of $mn$ numbers of $\K$ with $m$ rows and $n$ columns. $a_{ij}$ is the coefficient in row $i$ and column $j$; $A_i$ is row $i$; $A^j$ is column $j$ (the index at the top is not a power).
:::

::: question Why is $M(m, n, \K)$ a vector space, and what is its zero vector?
Because sum and product by a scalar are done entry by entry, and every axiom boils down to the same property in the field, one entry at a time. The zero vector is the zero matrix.
:::

::: question What are the three subspace axioms?
$W \subset V$ is a subspace if (1) $0 \in W$; (2) $v, v' \in W \Rightarrow v + v' \in W$; (3) $v \in W$, $\lambda \in \K \Rightarrow \lambda v \in W$.
:::

::: question Why is a subspace a vector space in its own right?
The operations stay in $W$ (axioms 2 and 3); the calculation properties hold in all of $V$, so also in $W$; the zero is in $W$ (axiom 1); the opposite of $v$ is $(-1)v$, which is in $W$ by axiom 3.
:::

::: question Which subspaces of $V$ are always there?
The trivial subspace $\{0\}$ and the total subspace $V$; every subspace $W$ satisfies $\{0\} \subset W \subset V$.
:::

::: question Why is the line $y = 2x + 1$ not a subspace of $\R^2$, while $y = 2x$ is?
$y = 2x + 1$ does not pass through the origin (and the sum of two of its points leaves the line). $y = 2x$ contains the origin and is closed under sums and multiples: it is $\Span((1, 2))$.
:::

::: question Define diagonal, upper triangular, symmetric and skew-symmetric matrix.
Diagonal: $a_{ij} = 0$ for $i \neq j$. Upper triangular: $a_{ij} = 0$ for $i > j$ (zeros below the diagonal). Symmetric: $a_{ij} = a_{ji}$. Skew-symmetric: $a_{ij} = -a_{ji}$, and so zero diagonal.
:::

::: question Why are there only zeros on the diagonal of a skew-symmetric matrix?
With $i = j$ the condition $a_{ij} = -a_{ji}$ becomes $a_{ii} = -a_{ii}$, that is $2a_{ii} = 0$, and dividing by $2$ (which you can do in $\Q$, $\R$ and $\C$) you get $a_{ii} = 0$.
:::

::: question Do the triangular matrices (upper or lower) form a subspace?
No: the sum of an upper triangular and a lower triangular matrix may not be triangular, for example $\begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix} + \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix}$. $T^s(n)$ and $T^i(n)$ are subspaces separately.
:::

::: question What is a linear combination? What is $\Span(v_1, \dots, v_k)$?
A linear combination is a vector $\lambda_1 v_1 + \dots + \lambda_k v_k$ with any scalars $\lambda_i$. $\Span(v_1, \dots, v_k)$ is the set of **all** these combinations, as the coefficients vary.
:::

::: question Repeat the proof that the Span is a subspace.
With all coefficients zero you get $0$. The sum of two combinations is the combination with coefficients $\lambda_i + \mu_i$. A multiple of a combination is the combination with coefficients $\lambda\lambda_i$.
:::

::: question How do you decide whether a vector $u$ lies in $\Span(v_1, \dots, v_k)$?
You look for $\lambda_1, \dots, \lambda_k$ with $\lambda_1 v_1 + \dots + \lambda_k v_k = u$: setting the coordinates equal you get a linear system. If it has a solution $u$ lies in the Span, otherwise it does not.
:::

::: question How do you quickly prove that a set is a subspace?
By rewriting it as the Span of some vectors: every Span is a subspace by Proposition 6.7. For example $\{(t + s)x^2 - tx - s\} = \Span(x^2 - x, x^2 - 1)$.
:::

## Glossary

```glossary
$m \times n$ matrix | Table of $mn$ elements of $\K$ with $m$ rows and $n$ columns; $a_{ij}$ is the coefficient in row $i$ and column $j$.
Rows and columns $A_i$, $A^j$ | $A_i$ is row $i$ of $A$, $A^j$ column $j$; the index at the top is not a power.
$M(m, n, \K)$ | The vector space of $m \times n$ matrices with coefficients in $\K$; $M(m, 1, \K) = \K^m$.
Square matrix, $M(n)$ | $n \times n$ matrix; $M(n) = M(n, n, \K)$.
Main diagonal | The entries $a_{11}, a_{22}, \dots, a_{nn}$.
Diagonal matrix | Square with $a_{ij} = 0$ for $i \neq j$; space $D(n)$.
Upper / lower triangular | Square with zeros below the diagonal ($a_{ij} = 0$ for $i > j$, space $T^s(n)$) or above it ($i < j$, space $T^i(n)$).
Symmetric matrix | $a_{ij} = a_{ji}$ for all $i, j$; space $S(n)$. Equivalent to ${}^tA = A$.
Skew-symmetric matrix | $a_{ij} = -a_{ji}$ for all $i, j$, hence zero diagonal; space $A(n)$. Equivalent to ${}^tA = -A$.
Vector subspace | Subset $W \subset V$ with $0 \in W$, closed under the sum and the product by a scalar.
Closed under an operation | Applying the operation to elements of the set you stay in the set.
Trivial and total subspace | $\{0\}$ and $V$ itself: every subspace lies between the two.
Linear combination | A vector $\lambda_1 v_1 + \dots + \lambda_k v_k$, with coefficients $\lambda_i \in \K$.
Coefficients | The scalars $\lambda_1, \dots, \lambda_k$ of a linear combination.
Span, subspace spanned | $\Span(v_1, \dots, v_k)$: the set of all the linear combinations of the $v_i$; it is a subspace.
Generators | Vectors $v_1, \dots, v_k$ such that $W = \Span(v_1, \dots, v_k)$.
Transpose ${}^tA$ | The matrix with rows and columns swapped, $({}^tA)_{ij} = a_{ji}$ (lesson L08).
Parametric and Cartesian form | A subspace of $\K^n$ described as a Span or with homogeneous linear equations.
```

## Checklist

```checklist
- I can read a matrix: size, coefficient $a_{ij}$, rows $A_i$ and columns $A^j$.
- I can add matrices of the same size and multiply them by a scalar.
- I can state the three subspace axioms and explain why a subspace is a vector space.
- I can prove that a set is a subspace by checking the three axioms with generic vectors.
- I can find a counterexample when a set is not a subspace (the zero is missing, the sum leaves the set, a multiple leaves the set).
- I can recognise diagonal, triangular, symmetric and skew-symmetric matrices and write their general $3 \times 3$ form.
- I can prove that $S(n)$ and $A(n)$ are subspaces, and why "triangular" is not.
- I can compute a linear combination of vectors, polynomials and matrices.
- I can say what $\Span(v_1, \dots, v_k)$ is and prove that it is a subspace.
- I can decide whether a vector lies in a Span by setting up and solving the system of the coefficients.
- I can rewrite a subspace defined by conditions as the Span of a few vectors.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 6 "Spazi vettoriali II", pp. 26–30: the space of matrices and sections 6.A–6.D followed in order, with the page next to each heading; definitions, propositions, examples and exercises keep their numbering (Definitions 6.1, 6.2, 6.3 and 6.6, Examples 6.4 and 6.8, Propositions 6.5 and 6.7, Exercises 6.9 and 6.10).
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §2.2.5–2.2.16 (matrices, subspaces, homogeneous systems, linear combinations and Span, parametric and Cartesian form, polynomials with restrictions, special matrices, intersection and union of subspaces, Exercise 2.2.15).
- **Exam sessions cited** (papers and solutions on the 2025/26 Moodle, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): 24/01/2024 (questions 1 and 5, problem 12), 08/02/2024 (questions 2 and 6), 10/07/2024 (question 2), 03/06/2025 (question 2), 15/01/2026 (questions 4 and 7), 05/02/2026 (question 2), 07/09/2026 (question 6). The questions of 24/01/2024 (1), 08/02/2024 (2) and 03/06/2025 (2) are reported with solutions written for these notes. Tutoring exercise sheet 2, 2025 (Buzano, Radeschi), exercises 1 and 2, as a model for two exercises.
- The **"Beyond the handouts"** parts (homogeneous systems, polynomials that vanish at a point, intersection and union, relations between the classes of matrices, the Span as the smallest subspace, parametric and Cartesian form, the method for the exam and exercises 3–12) are additions in these notes to connect the lesson to the rest of the course and to the exam.
