---
course: MDAG
module: AG
lesson: L13
title: Linear systems III
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Linear Algebra and Geometry · Channels A, B and C · Lesson L13
description: >-
  Notes on lesson L13 of Linear Algebra and Geometry (MDAG, part 2): linear independence, generators, bases and
  coordinates with respect to a basis studied with linear systems, the rank and the determinant, plus a code that
  corrects transmission errors, with exam-style quizzes and worked exercises.
lede: >-
  The questions of lesson L07 (are these vectors independent? do they span the whole space? are they a basis?) become
  linear systems, and the answers are read off the rank or the determinant of the matrix that has the vectors as
  columns. Then the coordinates of a vector with respect to a basis, which you find by solving a system, and an
  application: how two extra numbers make it possible to find and correct an error in a message.
material: handouts
facts:
  Handouts: lesson 13 · pp. 62–67
  Book: Martelli, §2.3 and §3.2
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 100–130 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 13 "Sistemi lineari III"; B. Martelli, Geometria e algebra lineare, §2.3 and §3.2
italian_file: L13_sistemi_lineari_3.html
html_notes: notes/MDAG/L13_linear_systems_3.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L13_sistemi_lineari_3.md
---

## In brief

- You put the vectors $v_1, \dots, v_k \in \K^m$ as **columns** of a matrix $A = (v_1 \mid \cdots \mid v_k)$: independence, generators and coordinates become questions about a linear system with matrix $A$.
- $v_1, \dots, v_k$ are **independent** if and only if the homogeneous system $\lambda_1v_1 + \cdots + \lambda_kv_k = 0$ has only the zero solution, that is if and only if $\rk(A) = k$.
- $v_1, \dots, v_k$ **span** $\K^m$ if and only if the system $\lambda_1v_1 + \cdots + \lambda_kv_k = v$ has a solution for every $v$, that is if and only if $\rk(A) = m$.
- With $n$ vectors in $\K^n$ the matrix is square: they are a **basis** if and only if $\det A \neq 0$. If $\dim V = n$, for $n$ vectors it is enough to check only one of the two conditions.
- With respect to a basis every vector is written **in only one way** as a combination of the basis vectors (Proposition 13.4): the coefficients are its **coordinates**.
- Coordinates are found by solving a system: $\lambda = A^{-1}v$, or Gauss–Jordan on the matrix $(A \mid v)$.
- Link with computer science: by adding to a message two numbers chosen with a linear system you can detect and correct a transmission error.
- At the exam: quizzes "generators and/or linearly independent?", "coordinate vector", "rank of the matrix".

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## From linear independence to a homogeneous system (pp. 62–63)

In lesson L07 you saw that two vectors of the plane are dependent when one is a multiple of the other: $v_1 = (1, 2)$ and $v_2 = (2, 4)$ are, because $2v_1 - v_2 = 0$. With three vectors in $\R^3$, though, the eye is no longer enough: it may be that none is a multiple of another and that they are dependent all the same. This lesson turns the question into a **linear system**, which we can always solve (lessons L11 and L12).

The handouts recall the definition of lesson L07.

> [!DEF] Linear dependence and independence (p. 62)
> Let $V$ be a vector space over $\K$ and let $v_1, \dots, v_k \in V$. These vectors are **linearly dependent** if there exist coefficients $\lambda_1, \dots, \lambda_k \in \K$, not all zero, such that
> $$\lambda_1v_1 + \cdots + \lambda_kv_k = 0. \qquad (13.1)$$
> Instead $v_1, \dots, v_k$ are **linearly independent** if the only solution of (13.1) is $\lambda_1 = \cdots = \lambda_k = 0$.

### The idea: equation (13.1) is a system

Look at (13.1) with new eyes: the **unknowns** are the coefficients $\lambda_1, \dots, \lambda_k$, the vectors $v_j$ are given. If the vectors lie in $\K^m$, equality (13.1) holds component by component: there are $m$ equations. The $i$-th says

$$\lambda_1 (v_1)_i + \lambda_2 (v_2)_i + \cdots + \lambda_k (v_k)_i = 0,$$

where $(v_j)_i$ is the $i$-th component of $v_j$. It is a **homogeneous linear system** in $\lambda_1, \dots, \lambda_k$, and its coefficient matrix has the vectors **as columns**:

$$A = (v_1 \mid v_2 \mid \cdots \mid v_k).$$

- The solution $\lambda = 0$ always exists (lesson L12: a homogeneous system is never impossible).
- The vectors are **independent** if and only if this is the **only** solution.
- By Rouché–Capelli the solutions form a subspace of dimension $k - \rk(A)$: there is only zero if and only if $k - \rk(A) = 0$.

> [!METHOD] Independent or not?
> 1. Write the matrix $A = (v_1 \mid \cdots \mid v_k)$ with the vectors as columns.
> 2. Compute $\rk(A)$ with Gauss (lesson L12): the vectors are independent if and only if $\rk(A) = k$, that is if there is a pivot in **every** column.
> 3. If $k = m$ (as many vectors as components) $A$ is square, and the determinant is enough: independent if and only if $\det A \neq 0$ (Corollary 12.8: exactly one solution, the zero one).
> 4. If they are dependent, solve the homogeneous system: every non-zero solution is a **relation** between the vectors.

> [!EXAMPLE] 13.1 · Three dependent vectors of $\R^3$
> Consider
> $$v_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \qquad v_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}, \qquad v_3 = \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}.$$
> We must study the solutions of $\lambda_1v_1 + \lambda_2v_2 + \lambda_3v_3 = 0$, that is of the homogeneous linear system
> $$\begin{cases} \lambda_1 + \lambda_3 = 0 \\ \lambda_1 + \lambda_2 = 0 \\ \lambda_2 - \lambda_3 = 0 \end{cases} \qquad A = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & -1 \end{pmatrix} = (v_1 \mid v_2 \mid v_3).$$
> **With the determinant.** The system has a unique solution if $\det A \neq 0$. Expanding along the first row (the middle term has coefficient $0$):
> $$\det A = 1 \cdot \det \begin{pmatrix} 1 & 0 \\ 1 & -1 \end{pmatrix} + 1 \cdot \det \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = -1 + 1 = 0.$$
> So there are infinitely many solutions and the vectors are **linearly dependent**.
>
> **With the Gauss moves.**
> $$A \xrightarrow{A_2 \to A_2 - A_1} \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & -1 \\ 0 & 1 & -1 \end{pmatrix} \xrightarrow{A_3 \to A_3 - A_2} \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & -1 \\ 0 & 0 & 0 \end{pmatrix}$$
> $A$ has rank $2 < 3$: again infinitely many solutions $(\lambda_1, \lambda_2, \lambda_3)$, and the vectors are dependent.
>
> **With the Span.** If $A$ has rank 2, $\Span(v_1, v_2, v_3)$ has dimension 2; three independent vectors would span a space of dimension 3. So they are dependent.

Here the handouts call the rows of the matrix $A_1, A_2, A_3$ (with the index at the bottom, as in lesson L08) instead of $R_1, R_2, R_3$: $A_2 \to A_2 - A_1$ is the usual move of type (III).

The handouts stop at "they are dependent". It is worth finding **the relation**: from the row echelon form, $\lambda_3 = t$ is free, the second row gives $\lambda_2 = t$ and the first $\lambda_1 = -t$. With $t = 1$:

$$-v_1 + v_2 + v_3 = 0, \qquad \text{that is} \qquad v_3 = v_1 - v_2.$$

Check: $-(1, 1, 0) + (0, 1, 1) + (1, 0, -1) = (0, 0, 0)$. None of the three vectors is a multiple of another, and yet the third is obtained from the first two: it is the case that lesson L07 pointed out (not being pairwise multiples is necessary but not enough).

```widget gauss
title: Put the vectors in columns and count the pivots (here $v_1, v_2, v_3$ of Example 13.1)
matrice: 1 0 1; 1 1 0; 0 1 -1
modo: rango
modi: rango nucleo
```

Press "Compute": two pivots, rank 2, so the three vectors are dependent. Then choose "kernel and image": the kernel is spanned by $(-1, 1, 1)$, exactly the coefficients of the relation $-v_1 + v_2 + v_3 = 0$. Try changing the last number from $-1$ to $1$: the rank becomes 3 and the vectors become independent.

> [!PITFALL] Too many vectors are always dependent
> In $\K^m$ the rank of a matrix with $m$ rows is at most $m$. So **more than $m$ vectors of $\K^m$ are always dependent**: 4 vectors of $\R^3$ cannot be independent, whatever they are. In the quiz you need no calculation to rule out independence; what remains is to find out whether they span.

> [!PITFALL] Columns, not rows (for systems)
> For **independence** you could also put the vectors in rows, because $\rk(A) = \rk({}^tA)$ (Proposition 8.6). But for **generators** and for **coordinates**, where you solve a system with a constant term, the vectors go in **columns**: the unknowns $\lambda_j$ multiply the columns. Get used to always putting them in columns.

## Span: when the vectors span everything (pp. 63–64)

Now the other question: do the vectors $v_1, \dots, v_k$ **span** $V$? The handouts recall that it means $\Span(v_1, \dots, v_k) = V$: every vector $v \in V$ is a linear combination of $v_1, \dots, v_k$, that is for every $v$ there are $\lambda_1, \dots, \lambda_k \in \K$ with

$$\lambda_1v_1 + \cdots + \lambda_kv_k = v. \qquad (13.2)$$

In $\K^m$ (13.2) is also a linear system in the unknowns $\lambda_j$, with the same matrix $A = (v_1 \mid \cdots \mid v_k)$ and with **constant term** $v$. So:

- $v \in \Span(v_1, \dots, v_k)$ if and only if the system $(A \mid v)$ has a solution, that is (Rouché–Capelli) if and only if $\rk(A \mid v) = \rk(A)$;
- the vectors **span** $\K^m$ if and only if the system has a solution **for every** $v$, and this happens exactly when $\rk(A) = m$.

Why the last sentence: if $\rk(A) = m$, the matrix $(A \mid v)$ has only $m$ rows and so rank at most $m$; but it has at least the rank of $A$, that is $m$: the two ranks coincide for every $v$. If instead $\rk(A) < m$, the Span has dimension $\rk(A) < m$ and cannot be the whole of $\K^m$.

> [!EXAMPLE] 13.2 · Three vectors that span $\R^3$
> Consider
> $$w_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \qquad w_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}, \qquad w_3 = \begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix}.$$
> Given any vector $v = (a, b, c)$, we must study the solutions of $\lambda_1w_1 + \lambda_2w_2 + \lambda_3w_3 = v$, that is of the system
> $$\begin{cases} \lambda_1 + \lambda_3 = a \\ \lambda_1 + \lambda_2 + \lambda_3 = b \\ \lambda_2 - \lambda_3 = c \end{cases} \qquad A = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 1 \\ 0 & 1 & -1 \end{pmatrix} = (w_1 \mid w_2 \mid w_3).$$
> **With the determinant**, along the first row:
> $$\det A = 1 \cdot \det \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} + 1 \cdot \det \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = -2 + 1 = -1 \neq 0.$$
> $A$ is invertible (so it has rank 3) and the system always has a solution, for any $v$. Then $\Span(w_1, w_2, w_3) = \R^3$.
>
> **With the Gauss moves.**
> $$A \xrightarrow{A_2 \to A_2 - A_1} \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 0 & 1 & -1 \end{pmatrix} \xrightarrow{A_3 \to A_3 - A_2} \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{pmatrix}$$
> $A$ has rank 3, so $\Span(w_1, w_2, w_3)$ has dimension 3 and is the whole of $\R^3$: every other subspace of $\R^3$ has dimension strictly less than 3.

You can also write the combination **explicitly**. Solving the system with a generic $v = (a, b, c)$ (or with the inverse, which you find in Example 13.6):

$$\lambda_1 = 2a - b + c, \qquad \lambda_2 = -a + b, \qquad \lambda_3 = -a + b - c.$$

For example $(1, 0, 0) = 2w_1 - w_2 - w_3$. Check: $2(1, 1, 0) - (0, 1, 1) - (1, 1, -1) = (2 - 0 - 1,\ 2 - 1 - 1,\ 0 - 1 + 1) = (1, 0, 0)$.

### When the vectors do not span: the equation of the Span

The vectors $v_1, v_2, v_3$ of Example 13.1 have rank 2: they do **not** span $\R^3$. But what do they span? You find out by doing Gauss with the generic constant term $v = (a, b, c)$:

$$\left(\begin{array}{ccc|c} 1 & 0 & 1 & a \\ 1 & 1 & 0 & b \\ 0 & 1 & -1 & c \end{array}\right) \xrightarrow{R_2 \to R_2 - R_1} \left(\begin{array}{ccc|c} 1 & 0 & 1 & a \\ 0 & 1 & -1 & b - a \\ 0 & 1 & -1 & c \end{array}\right)$$
$$\xrightarrow{R_3 \to R_3 - R_2} \left(\begin{array}{ccc|c} 1 & 0 & 1 & a \\ 0 & 1 & -1 & b - a \\ 0 & 0 & 0 & a - b + c \end{array}\right)$$

The last row says $0 = a - b + c$. The system has a solution, that is $v \in \Span(v_1, v_2, v_3)$, **if and only if** $a - b + c = 0$. So

$$\Span(v_1, v_2, v_3) = \{(x, y, z) \in \R^3 \mid x - y + z = 0\},$$

a plane through the origin. Check: $v_1$ gives $1 - 1 + 0 = 0$, $v_2$ gives $0 - 1 + 1 = 0$, $v_3$ gives $1 - 0 - 1 = 0$. Instead $(1, 0, 0)$ gives $1 \neq 0$: it is not a combination of $v_1, v_2, v_3$.

> [!METHOD] Does a vector lie in the Span? And what equations does the Span have?
> 1. Write $(v_1 \mid \cdots \mid v_k \mid v)$ with a **generic** $v = (a, b, c, \dots)$.
> 2. Reduce to row echelon form: the letters $a, b, c$ travel in the last column.
> 3. Every row that becomes zero on the left gives a condition "expression in $a, b, c = 0$": they are the **equations** of the Span.
> 4. A numerical vector lies in the Span if and only if it satisfies all the equations.

> [!BEYOND] a basis of the Span with no extra calculations
> The Gauss moves on the rows do not change the relations between the columns: a relation $\lambda_1A^1 + \cdots + \lambda_kA^k = 0$ is a solution of the homogeneous system, and the moves do not change the solutions (Proposition 11.4). So the vectors $v_j$ whose columns have a pivot in the row echelon form are **a basis** of $\Span(v_1, \dots, v_k)$. In Example 13.1 the pivots are in columns 1 and 2: $v_1, v_2$ are a basis of the plane $x - y + z = 0$. Careful: you take the **starting** vectors, not the columns of the reduced matrix. It is Martelli's "extraction algorithm" (§2.3.6), done with Gauss.

> [!PITFALL] Too few vectors never span
> The Span of $k$ vectors has dimension at most $k$. So **fewer than $m$ vectors cannot span $\K^m$**: two vectors of $\R^3$ span at most a plane.

## Bases (p. 64)

The handouts recall the definition of lesson L07.

> [!DEF] Basis (p. 64)
> A sequence $v_1, \dots, v_n \in V$ of vectors is a **basis** if both these conditions are satisfied:
> 1. the vectors $v_1, \dots, v_n$ are independent;
> 2. the vectors $v_1, \dots, v_n$ span $V$.
>
> If we already know that $V$ has dimension $n$, it is enough to check **one** of the two properties: the other follows automatically (Theorem 7.12).

> [!EXAMPLE] 13.3 · A basis yes, a basis no
> $v_1, v_2, v_3$ of Example 13.1 do **not** form a basis of $\R^3$, because they are not linearly independent. Instead $w_1, w_2, w_3$ of Example 13.2 form a basis of $\R^3$: they are generators and they are three vectors, and $\R^3$ has dimension 3. They must then necessarily be linearly independent (Theorem 7.12), a fact that can also be checked directly: the homogeneous system with $\det A = -1 \neq 0$ has only the zero solution.

With the rank, all three questions have a single answer. If $A = (v_1 \mid \cdots \mid v_k)$ has $m$ rows and $r = \rk(A)$:

| Question | Answer | It requires |
|---|---|---|
| independent? | yes if and only if $r = k$ | $k \le m$ |
| do they span $\K^m$? | yes if and only if $r = m$ | $k \ge m$ |
| basis of $\K^m$? | yes if and only if $r = k = m$ | $k = m$, that is $\det A \neq 0$ |

| How many vectors in $\K^m$ | Independent? | Generators? |
|---|---|---|
| $k < m$ | possible | **never** |
| $k = m$ | if and only if $\det A \neq 0$ | if and only if $\det A \neq 0$ |
| $k > m$ | **never** | possible |

> [!EXAMPLE] Four polynomials of $\R_2[x]$
> Are the polynomials $1 + x$, $x + x^2$, $1 + x^2$, $1$ of $\R_2[x]$ (the space of polynomials of degree at most 2, of dimension 3) generators and/or independent? A polynomial $a_0 + a_1x + a_2x^2$ is written with its three coefficients $(a_0, a_1, a_2)$ (they are its coordinates with respect to the basis $1, x, x^2$: see the next section). The matrix with the polynomials in columns is
> $$A = \begin{pmatrix} 1 & 0 & 1 & 1 \\ 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 \end{pmatrix}.$$
> The first three columns have determinant $1 \cdot (1 - 0) - 0 + 1 \cdot (1 - 0) = 2 \neq 0$: they are already a basis, so $\rk(A) = 3$ and the four polynomials **span** $\R_2[x]$. But they are 4 in a space of dimension 3: they are **not** independent. Indeed $1 = \frac 12\big((1 + x) - (x + x^2) + (1 + x^2)\big)$.

## Coordinates (pp. 64–65)

A basis is used to **give a name** to every vector. In the plane take the basis $v_1 = (1, 1)$, $v_2 = (-1, 1)$ and the vector $w = (2, 0)$. We have

$$w = 1 \cdot v_1 + (-1) \cdot v_2, \qquad \text{indeed } (1, 1) - (-1, 1) = (2, 0).$$

To reach $w$ you take one step along $v_1$ and one step backwards along $v_2$: in the basis $v_1, v_2$ the vector $w$ has "address" $(1, -1)$. They are its **coordinates** (example from Martelli's book, Example 2.3.12).

```graph
title: $w = (2, 0)$ is reached with one step along $v_1$ and one step backwards along $v_2$: coordinates $(1, -1)$
x: -2 3
y: -1.5 2
vector: 1 1 | accent | $v_1$ | n
vector: -1 1 | blue | $v_2$ | n
vector: 2 0 | amber | thick | $w$ | s
vector: 1 1 2 0 | blue | dashed | $-v_2$ | ne
```

For the address to be well defined it must be **unique**. And this is where independence is needed.

> [!PROP] 13.4
> Let $V$ be a vector space and let $v_1, \dots, v_n$ be a basis of $V$. Every vector $v \in V$ can be written in a unique way as
> $$v = \lambda_1v_1 + \cdots + \lambda_nv_n.$$

**Proof**, in three steps.

1. **An expression exists.** The vectors $v_1, \dots, v_n$ span $V$, so $v$ can be written as a linear combination of them.
2. **Suppose there are two**: $v = \lambda_1v_1 + \cdots + \lambda_nv_n = \mu_1v_1 + \cdots + \mu_nv_n$. Moving everything to the left:
   $$(\lambda_1 - \mu_1)v_1 + \cdots + (\lambda_n - \mu_n)v_n = 0.$$
3. **The vectors are independent**, so all the coefficients of this combination are zero: $\lambda_i - \mu_i = 0$, that is $\mu_i = \lambda_i$ for every $i$. The two expressions are the same. $\square$

> [!DEF] 13.5 · Coordinates
> The coefficients $\lambda_1, \dots, \lambda_n$ are the **coordinates** of $v$ with respect to the basis $v_1, \dots, v_n$. The **column vector of coordinates** is the vector
> $$\begin{pmatrix} \lambda_1 \\ \vdots \\ \lambda_n \end{pmatrix}.$$

Piece by piece:

- The coordinates depend on the **basis**: the same vector has different coordinates in different bases.
- They also depend on the **order** of the basis vectors: $\lambda_1$ is the coefficient of the first vector, $\lambda_2$ of the second, and so on. Swapping $v_1$ and $v_2$ swaps the first two coordinates.
- Coordinates are **numbers** (in $\K$): the coordinate vector lies in $\K^n$ even when $V$ is made of polynomials or matrices.
- For the standard basis of $\K^n$ the coordinates are the components of the vector; for the basis $1, x, \dots, x^n$ of $\K_n[x]$ they are the coefficients of the polynomial, from the constant term upwards.

> [!EXAMPLE] 13.6 · The same vector in two bases
> Let $e_1, e_2, e_3$ be the standard basis of $\R^3$ and let $v = (3, 4, 5)$. The coordinates with respect to the standard basis are exactly the components of $v$, since
> $$3e_1 + 4e_2 + 5e_3 = 3\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + 4\begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} + 5\begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 3 \\ 4 \\ 5 \end{pmatrix}.$$
> So the coordinate vector of $v$ is exactly $v$. This is no longer true with another basis. Let for example $w_1, w_2, w_3$ be the basis of Example 13.2. To find the coordinates of $v$ in this basis we must solve the system
> $$\lambda_1 \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} + \lambda_2 \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix} + \lambda_3 \begin{pmatrix} 1 \\ 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 3 \\ 4 \\ 5 \end{pmatrix}.$$
> In Example 13.2 we saw that the solution is always unique, because $\det A = -1$. The coordinate vector of $v$ in this basis is
> $$A^{-1}\begin{pmatrix} 3 \\ 4 \\ 5 \end{pmatrix} = \begin{pmatrix} 2 & -1 & 1 \\ -1 & 1 & 0 \\ -1 & 1 & -1 \end{pmatrix}\begin{pmatrix} 3 \\ 4 \\ 5 \end{pmatrix} = \begin{pmatrix} 7 \\ 1 \\ -4 \end{pmatrix}.$$
> Alternatively you can solve the system with the Gauss–Jordan algorithm.

The calculations the handouts leave to you.

- **The product:** first row $2 \cdot 3 - 1 \cdot 4 + 1 \cdot 5 = 7$; second $-3 + 4 + 0 = 1$; third $-3 + 4 - 5 = -4$.
- **Is the inverse right?** $A \cdot A^{-1}$ must give the identity. First row of $A$, $(1, 0, 1)$, times the columns of $A^{-1}$: $2 - 1 = 1$, $-1 + 1 = 0$, $1 - 1 = 0$. The other rows are checked in the same way.
- **Check of the result:** $7w_1 + w_2 - 4w_3 = (7, 7, 0) + (0, 1, 1) - (4, 4, -4) = (3, 4, 5)$.
- **With Gauss–Jordan**, without the inverse:
  $$\left(\begin{array}{ccc|c} 1 & 0 & 1 & 3 \\ 1 & 1 & 1 & 4 \\ 0 & 1 & -1 & 5 \end{array}\right) \xrightarrow{R_2 \to R_2 - R_1} \left(\begin{array}{ccc|c} 1 & 0 & 1 & 3 \\ 0 & 1 & 0 & 1 \\ 0 & 1 & -1 & 5 \end{array}\right)$$
  $$\xrightarrow{R_3 \to R_3 - R_2} \left(\begin{array}{ccc|c} 1 & 0 & 1 & 3 \\ 0 & 1 & 0 & 1 \\ 0 & 0 & -1 & 4 \end{array}\right)$$
  Then $R_3 \to -R_3$ gives $(0, 0, 1 \mid -4)$ and $R_1 \to R_1 - R_3$ gives $(1, 0, 0 \mid 7)$: the last column of the reduced form is $(7, 1, -4)$.

```widget gauss
title: Coordinates of $v = (3, 4, 5)$ in the basis $w_1, w_2, w_3$: the first three columns are the basis, the last is $v$
matrice: 1 0 1 3; 1 1 1 4; 0 1 -1 5
modo: sistema
```

The tool solves the system $(w_1 \mid w_2 \mid w_3 \mid v)$ and finds $x_1 = 7$, $x_2 = 1$, $x_3 = -4$: they are the coordinates. Change the last column to another vector, for example `1 0 0` instead of `3 4 5`: you find $(2, -1, -1)$, the first column of $A^{-1}$.

> [!METHOD] The coordinates of $v$ with respect to a basis
> 1. **In $\K^n$:** write $(v_1 \mid \cdots \mid v_n \mid v)$ and do Gauss–Jordan; the last column of the reduced form is the coordinate vector. With $n = 2$ or if you already have the inverse, use $A^{-1}v$.
> 2. **With polynomials:** write $\lambda_1p_1 + \cdots + \lambda_np_n = p$, collect the powers of $x$ and set equal the coefficients of $1, x, x^2, \dots$ on the left and on the right: you get a linear system in the $\lambda_i$.
> 3. **Always check**: rebuild $\lambda_1v_1 + \cdots + \lambda_nv_n$ and check that it gives $v$.

> [!EXAMPLE] Coordinates of a polynomial
> The coordinates of $p = 2 + 3x + 4x^2$ with respect to the basis $1,\ 1 + x,\ 1 + x + x^2$ of $\R_2[x]$. I write
> $$\lambda_1 \cdot 1 + \lambda_2(1 + x) + \lambda_3(1 + x + x^2) = (\lambda_1 + \lambda_2 + \lambda_3) + (\lambda_2 + \lambda_3)x + \lambda_3x^2$$
> and set the coefficients equal to those of $p$: $\lambda_3 = 4$ (from $x^2$), $\lambda_2 + \lambda_3 = 3$ so $\lambda_2 = -1$ (from $x$), $\lambda_1 + \lambda_2 + \lambda_3 = 2$ so $\lambda_1 = -1$ (constant term). The coordinates are $(-1, -1, 4)$. Check: $-1 - (1 + x) + 4(1 + x + x^2) = 2 + 3x + 4x^2$.

> [!PITFALL] Coordinates are numbers, in order
> In the quiz of the exam of 08/02/2024 (question 3), among the answers there were expressions like $(2p_1, -p_2, p_3)$ and $(x^2, 2x, 1)$: they are wrong by construction, because the coordinates are the **numbers** $\lambda_i$, not the vectors $\lambda_iv_i$ nor the monomials. And the order matters: with respect to the ordered basis $x^2, x, 1$ the polynomial $2 + 3x - x^2$ has coordinates $(-1, 3, 2)$, not $(2, 3, -1)$.

> [!BEYOND] the coordinate map
> Once a basis $B$ of $V$ is fixed, the function that sends $v$ to its coordinate vector, often written $[v]_B$, respects sums and multiples: the coordinates of $v + w$ are the sum of the coordinates, those of $\lambda v$ are $\lambda$ times those of $v$ (exercise 11). It is the first example of a **linear map** between different spaces (lesson L14): thanks to it every space of dimension $n$ can be studied like $\K^n$ (Martelli, Example 4.1.17).

## Link with computer science: codes that correct errors (pp. 66–67)

When a message travels (on a cable, by radio, on a disk that deteriorates) some number can arrive wrong. Linear algebra makes it possible to add **redundant information**, that is extra numbers computed from the message, so as to **detect** and in some cases **correct** the errors. The handouts show a model reduced to the bone, which you follow here step by step.

### Encoding: two check numbers

We want to transmit the four numbers $2, -7, 8, -2$. We add two numbers $a$, $b$ and read the six numbers as the coefficients of a polynomial of degree 5:

$$s(x) = 2x^5 - 7x^4 + 8x^3 - 2x^2 + ax + b.$$

We choose $a$ and $b$ by imposing two **check conditions**: $s(1) = 0$ and $s(2) = 0$.

- $s(1) = 2 - 7 + 8 - 2 + a + b = 1 + a + b$;
- $s(2) = 2 \cdot 32 - 7 \cdot 16 + 8 \cdot 8 - 2 \cdot 4 + 2a + b = 64 - 112 + 64 - 8 + 2a + b = 8 + 2a + b$.

The conditions give a **linear system** in the unknowns $a, b$:

$$\begin{cases} a + b = -1 \\ 2a + b = -8 \end{cases}$$

Taking the first equation away from the second: $a = -7$; then $b = -1 - a = 6$. So we transmit the six numbers

$$(2, -7, 8, -2, -7, 6).$$

Check: $s(1) = 2 - 7 + 8 - 2 - 7 + 6 = 0$ and $s(2) = 64 - 112 + 64 - 8 - 14 + 6 = 0$.

> [!NOTE] Curly brackets and order
> The handouts write the messages in curly brackets, $\{2, -7, 8, -2\}$. Here, though, **the order matters** (the first number is the coefficient of $x^5$, the second of $x^4$, …) and the numbers can repeat, like the two $-7$: as lesson L01 reminded you, in a set order and repetitions do not matter. That is why in these notes the messages are written in round brackets, as sequences.

### Detecting an error

The receiver rebuilds the polynomial and checks that $s(1) = s(2) = 0$. If one of the two equalities does not hold, they know there has been an error. Suppose we receive

$$(2, -7, 8, 4, -7, 6),$$

with the fourth number altered ($4$ instead of $-2$). The received polynomial $r(x) = 2x^5 - 7x^4 + 8x^3 + 4x^2 - 7x + 6$ gives $r(1) = 6 \neq 0$: error detected.

### Correcting it

If we know that **only one** number is wrong but we do not know which, we replace each position in turn with an unknown $k$ and impose $s(1) = s(2) = 0$ again. Each time we get a system of **two equations in one unknown**. Putting $k$ in the fourth place:

$$s(x) = 2x^5 - 7x^4 + 8x^3 + kx^2 - 7x + 6, \qquad \begin{cases} s(1) = k + 2 = 0 \\ s(2) = 4k + 8 = 0 \end{cases}$$

which has the unique solution $k = -2$. For the other positions the system is **inconsistent**:

| Position of $k$ | $s(1) = 0$ | $s(2) = 0$ | Outcome |
|---|---|---|---|
| 1st (coefficient of $x^5$) | $k + 4 = 0$ | $32k - 40 = 0$ | $k = -4$ and $k = \frac 54$: inconsistent |
| 2nd ($x^4$) | $k + 13 = 0$ | $16k + 136 = 0$ | $k = -13$ and $k = -\frac{17}2$: inconsistent |
| 3rd ($x^3$) | $k - 2 = 0$ | $8k - 40 = 0$ | $k = 2$ and $k = 5$: inconsistent |
| 4th ($x^2$) | $k + 2 = 0$ | $4k + 8 = 0$ | $k = -2$: **consistent** |
| 5th ($x$) | $k + 13 = 0$ | $2k + 38 = 0$ | $k = -13$ and $k = -19$: inconsistent |
| 6th (constant term) | $k = 0$ | $k + 18 = 0$ | $k = 0$ and $k = -18$: inconsistent |

So we locate the position of the error and rebuild the correct datum: the fourth number was $-2$.

> [!IDEA] why it works, in one line
> If the wrong number is the coefficient of $x^j$ and it is off by $d$, the received polynomial is $r(x) = s(x) + d\,x^j$, so $r(1) = d$ and $r(2) = d \cdot 2^j$. Here $r(1) = 6$ and $r(2) = 24$: then $d = 6$ and $2^j = \frac{24}6 = 4$, that is $j = 2$. The ratio $\frac{r(2)}{r(1)}$ tells you **where** the error is, $r(1)$ tells you **by how much**: the received coefficient of $x^2$, $4$, must be corrected to $4 - 6 = -2$.

Adding more redundant information you correct more errors. For example, adding **four** coefficients and imposing $s(1) = s(2) = s(3) = s(4) = 0$ you get a linear system of four equations in the four added coefficients; the four conditions then provide enough checks to find and correct, in this model, up to two wrong coefficients.

**Reed–Solomon codes**, used among other things in QR codes and in many digital storage and transmission systems, exploit closely related ideas: the data become polynomials, redundancy is added and algebraic equations are used to locate and correct the errors. Real Reed–Solomon codes work over finite fields, but this example already shows the concrete role of polynomials and linear systems.

> [!BEYOND] where to find it in the book
> In Martelli's book: linear independence, bases and coordinates are in **§2.3 "Dimensione"** (pp. 60–75): linear (in)dependence §2.3.1 (p. 60), bases §2.3.2 (p. 62), coordinates §2.3.3 with Proposition 2.3.11 and Examples 2.3.12–2.3.15 (pp. 64–65), extraction algorithm §2.3.6 (p. 68). The use of the rank and of Rouché–Capelli to answer these questions is in **§3.2** (pp. 85–93). The correcting code is an addition of the 2026 handouts.

## Towards the exam

The AG written test has 10 quiz questions with 5 answers each (you need at least 6 points for the 2 problems worth 11 points to be marked), it lasts 2 hours, with no calculator and only 4 handwritten pages of notes; the 2026/27 exam sessions are on 22/01 and 05/02/2027 at 14:00. All the details are in lesson L01.

**What you need from this lesson for the exam**

1. **"Are they generators and/or linearly independent?"** Quiz question with five fixed answers (independent but not generators; neither; ill-posed question; generators but not independent; both): exams of 06/09/2024 (question 2, four vectors of $\R^3$) and 16/01/2025 (question 2, four polynomials of $\R_2[x]$). In the exam of 07/09/2026 (question 2) you were asked which set of matrices was a basis of $M(2, \R)$.
2. **"The coordinate vector of … in the basis … is"**: exams of 08/02/2024 (question 3, polynomials), 16/01/2025 (question 8, in $\R^2$), 05/02/2026 (question 6, the coordinates of $T(v_1)$: lesson L14 is needed too).
3. **"Find the rank of the matrix"**: exams of 16/01/2025 (question 6), 07/02/2025 (question 4), 05/02/2026 (question 4). You answer by counting the pivots (lesson L12).
4. **In the open problems** coordinates come back in changes of basis and in associated matrices (for example exam of 07/09/2026, problem 11): lessons L15 and L16.

> [!METHOD] The quiz "generators and/or independent?" in three steps
> 1. Count the vectors, $k$, and the dimension of the space, $m$ (for $\R_n[x]$ it is $n + 1$, for $M(p, q, \R)$ it is $pq$). If $k > m$ they are not independent; if $k < m$ they are not generators: half of the answers fall straight away.
> 2. Write the vectors (or the coefficients of the polynomials, or the four entries of the $2 \times 2$ matrices) **in columns** and compute the rank $r$.
> 3. Independent $\Leftrightarrow r = k$; generators $\Leftrightarrow r = m$. The answer "the question is ill-posed" is never the right one: the question makes sense with any number of vectors.

> [!PITFALL] The mistakes to avoid
> - Swapping rows and columns when setting up the coordinates: the unknowns $\lambda_i$ multiply the **basis vectors**, which go in columns.
> - Answering with the vectors $\lambda_iv_i$ instead of the numbers $\lambda_i$.
> - Forgetting the order of the basis, above all with polynomials (a basis written $x^2, x, 1$ is not $1, x, x^2$).
> - In the quiz on coordinates, not checking: rebuilding $\lambda_1v_1 + \lambda_2v_2$ takes ten seconds and removes every doubt.

> [!EXAM] The 4-page sheet
> From this lesson: "vectors in columns $\to$ rank $r$: independent $\Leftrightarrow r = k$, generators of $\K^m \Leftrightarrow r = m$, basis $\Leftrightarrow \det \neq 0$"; the two tables of the section on bases; the method for coordinates with polynomials; the $2 \times 2$ inverse for coordinates in $\R^2$.

## Quiz

```quiz
Q: Are the vectors $(1, 1, 1)$, $(0, 1, 2)$, $(1, 2, 3)$, $(0, 0, 1)$ of $\R^3$ generators and/or linearly independent?
- They are linearly independent, but not generators.
- They are neither linearly independent nor generators.
- The question is ill-posed: the vectors are 4 and not 3.
+ They are generators, but not linearly independent.
- They are both generators and linearly independent.
= Exam of 06/09/2024, question 2. Four vectors of $\R^3$ cannot be independent; indeed $(1, 2, 3) = (1, 1, 1) + (0, 1, 2)$. They span: $(1, 1, 1)$, $(0, 1, 2)$, $(0, 0, 1)$ in columns give a triangular matrix with determinant $1 \cdot 1 \cdot 1 = 1 \neq 0$, so the rank is 3.

Q: The vectors $v_1 = (2, 3)$ and $v_2 = (3, 2)$ form a basis of $\R^2$. The coordinate vector of $w = (7, 3)$ in this basis is:
- $(2, 3)$
- $(17, 23)$
- $(-17, 23)$
+ $(-1, 3)$
- $(7, 3)$
= Exam of 16/01/2025, question 8. You solve $2\lambda_1 + 3\lambda_2 = 7$, $3\lambda_1 + 2\lambda_2 = 3$: taking the first multiplied by 3 away from the second multiplied by 2 you get $-5\lambda_2 = -15$, so $\lambda_2 = 3$ and $\lambda_1 = -1$. Check: $-(2, 3) + 3(3, 2) = (7, 3)$. $(7, 3)$ would be the coordinates in the standard basis.

Q: The polynomials $p_1(x) = x^2 + x + 1$, $p_2(x) = x^2 + x - 1$, $p_3(x) = x - 2$ form a basis of $\R_2[x]$. The coordinate vector of $q(x) = (x + 1)^2$ in this basis is:
- $(1, 2, 1)$
- $(2p_1, -p_2, p_3)$
- $(3, -2, -1)$
+ $(2, -1, 1)$
- $(x^2, 2x, 1)$
= Exam of 08/02/2024, question 3. $ap_1 + bp_2 + cp_3 = (a + b)x^2 + (a + b + c)x + (a - b - 2c)$ and $q = x^2 + 2x + 1$: so $a + b = 1$, $c = 1$, $a - b = 3$, from which $a = 2$, $b = -1$. $(1, 2, 1)$ are the coordinates in the standard basis; the answers with $p_i$ or with $x$ are not vectors of numbers.

Q: The rank of the matrix $\begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 7 \\ 3 & 6 & 10 \end{pmatrix}$ is:
- $0$
- $1$
+ $2$
- $3$
- $4$
= Similar to the exam of 16/01/2025, question 6. $R_2 - 2R_1 = (0, 0, 1)$ and $R_3 - 3R_1 = (0, 0, 1)$; then $R_3 - R_2$ is zero. Two pivots remain, in columns 1 and 3: rank 2. A rank of 4 is impossible for a matrix with 3 rows.

Q: For which $k \in \R$ are the vectors $(1, 0, k)$, $(0, 1, 1)$, $(k, 1, 2)$ linearly dependent?
+ $k = 1$ or $k = -1$
- only $k = 0$
- only $k = 1$
- only $k = -1$
- for no value of $k$
= Three vectors of $\R^3$: you use the determinant of the matrix that has them in columns. Expanding along the first row, $\det\begin{pmatrix} 1 & 0 & k \\ 0 & 1 & 1 \\ k & 1 & 2 \end{pmatrix} = 1 \cdot (2 - 1) + k \cdot (0 - k) = 1 - k^2$, which vanishes for $k = \pm 1$.

Q: Let $W = \Span(v_1, v_2, v_3)$ with $v_1 = (1, 1, 0)$, $v_2 = (0, 1, 1)$, $v_3 = (1, 0, -1)$ (Example 13.1). Which of these vectors lies in $W$?
+ $(1, 2, 1)$
- $(1, 0, 0)$
- $(1, 1, 1)$
- $(0, 0, 1)$
- $(2, 1, 0)$
= With Gauss on $(v_1 \mid v_2 \mid v_3 \mid v)$ you find that $W$ is the plane $x - y + z = 0$. Only $(1, 2, 1)$ satisfies it: $1 - 2 + 1 = 0$; indeed $(1, 2, 1) = v_1 + v_2$. The others give $1$, $1$, $1$ and $1$.

Q: Three linearly independent vectors of $\R^3$:
+ always form a basis of $\R^3$.
- may not span $\R^3$.
- span at most a plane.
- always have zero determinant, put in columns.
- are always pairwise perpendicular.
= $\dim \R^3 = 3$: by Theorem 7.12 three independent vectors are automatically also generators, so a basis. Put in columns they have non-zero determinant. Independence requires no perpendicularity.

Q: With respect to the ordered basis $x^2, x, 1$ of $\R_2[x]$, the polynomial $p(x) = 2 + 3x - x^2$ has coordinates:
- $(2, 3, -1)$
+ $(-1, 3, 2)$
- $(1, 3, -2)$
- $(-x^2, 3x, 2)$
- $(3, 2, -1)$
= Similar to the exam of 08/02/2024, question 3. $p = (-1) \cdot x^2 + 3 \cdot x + 2 \cdot 1$: the coordinates follow the order of the basis, so $(-1, 3, 2)$. $(2, 3, -1)$ would be the coordinates in the basis $1, x, x^2$.

Q: With the handouts' code, to transmit the message $(0, 0, 1, -1)$ you add $a$ and $b$ so that $s(x) = x^3 - x^2 + ax + b$ satisfies $s(1) = s(2) = 0$. What are $a$ and $b$?
+ $a = -4$, $b = 4$
- $a = 4$, $b = -4$
- $a = -4$, $b = -4$
- $a = 0$, $b = 0$
- $a = 4$, $b = 4$
= $s(1) = 1 - 1 + a + b = a + b$ and $s(2) = 8 - 4 + 2a + b = 4 + 2a + b$. The system $a + b = 0$, $2a + b = -4$ gives $a = -4$ and $b = 4$. Check: $s(x) = x^3 - x^2 - 4x + 4 = (x - 1)(x - 2)(x + 2)$.

Q: In the basis $w_1 = (1, 1, 0)$, $w_2 = (0, 1, 1)$, $w_3 = (1, 1, -1)$ of Example 13.2, what is the first coordinate of the vector $(1, 0, 0)$?
N: 2
= With $v = (a, b, c) = (1, 0, 0)$ the formula $\lambda_1 = 2a - b + c$ gives $2$ (it is the first column of $A^{-1}$). Indeed $(1, 0, 0) = 2w_1 - w_2 - w_3$.
```

## Exercises

::: exercise intermediate Exercise 13.7 of the handouts: finding and correcting the error
We receive the sequence of six numbers $(1, -2, 3, 0, -1, 2)$. The first four contain the information, the last two are the check numbers of the code seen above. The six numbers are the coefficients of $s(x) = a_5x^5 + a_4x^4 + a_3x^3 + a_2x^2 + a_1x + a_0$ and, if the transmission is correct, $s(1) = s(2) = 0$. We know that **exactly one** of the six numbers has been changed. Which one? What is its correct value?
::: solution
**Check.** The received polynomial is $r(x) = x^5 - 2x^4 + 3x^3 - x + 2$ (the coefficient of $x^2$ is $0$). Then
$$r(1) = 1 - 2 + 3 + 0 - 1 + 2 = 3, \qquad r(2) = 32 - 32 + 24 + 0 - 2 + 2 = 24.$$
$r(1) \neq 0$: there is an error.

**Position by position.** I put an unknown $k$ in place of each number, in turn, and impose $s(1) = s(2) = 0$:

| Position of $k$ | $s(1) = 0$ | $s(2) = 0$ | Outcome |
|---|---|---|---|
| 1st ($x^5$) | $k + 2 = 0$ | $32k - 8 = 0$ | $k = -2$ and $k = \frac 14$: inconsistent |
| 2nd ($x^4$) | $k + 5 = 0$ | $16k + 56 = 0$ | $k = -5$ and $k = -\frac 72$: inconsistent |
| 3rd ($x^3$) | $k = 0$ | $8k = 0$ | $k = 0$: **consistent** |
| 4th ($x^2$) | $k + 3 = 0$ | $4k + 24 = 0$ | $k = -3$ and $k = -6$: inconsistent |
| 5th ($x$) | $k + 4 = 0$ | $2k + 26 = 0$ | $k = -4$ and $k = -13$: inconsistent |
| 6th (constant term) | $k + 1 = 0$ | $k + 22 = 0$ | $k = -1$ and $k = -22$: inconsistent |

For example, in the third row: with $k$ in place of the $3$, $s(1) = 1 - 2 + k + 0 - 1 + 2 = k$ and $s(2) = 32 - 32 + 8k + 0 - 2 + 2 = 8k$.

**Conclusion.** The wrong number is the **third** (the coefficient of $x^3$): the correct value is $0$ instead of $3$. The transmitted sequence was $(1, -2, 0, 0, -1, 2)$. Check: $s(x) = x^5 - 2x^4 - x + 2$ gives $s(1) = 1 - 2 - 1 + 2 = 0$ and $s(2) = 32 - 32 - 2 + 2 = 0$.

**With the idea of the box.** $\frac{r(2)}{r(1)} = \frac{24}3 = 8 = 2^3$: the error is in the coefficient of $x^3$, and it is off by $r(1) = 3$: $3 - 3 = 0$.
:::

::: exercise basic Independent or not? And with which relation?
Decide whether $v_1 = (1, 2, 1)$, $v_2 = (2, 1, 0)$, $v_3 = (-1, 4, 3)$ are linearly independent. If they are not, write a dependence relation.
::: solution
I put the vectors in columns and reduce:
$$\begin{pmatrix} 1 & 2 & -1 \\ 2 & 1 & 4 \\ 1 & 0 & 3 \end{pmatrix} \xrightarrow[R_3 \to R_3 - R_1]{R_2 \to R_2 - 2R_1} \begin{pmatrix} 1 & 2 & -1 \\ 0 & -3 & 6 \\ 0 & -2 & 4 \end{pmatrix}$$
$$\xrightarrow{R_3 \to R_3 - \frac 23 R_2} \begin{pmatrix} 1 & 2 & -1 \\ 0 & -3 & 6 \\ 0 & 0 & 0 \end{pmatrix}$$
The calculations: $(2, 1, 4) - 2(1, 2, -1) = (0, -3, 6)$; $(1, 0, 3) - (1, 2, -1) = (0, -2, 4)$; $(0, -2, 4) - \frac 23(0, -3, 6) = (0, 0, 0)$.

Rank 2 < 3: **dependent**. The relation: $\lambda_3 = t$; from the second row $-3\lambda_2 + 6t = 0$, so $\lambda_2 = 2t$; from the first $\lambda_1 + 4t - t = 0$, so $\lambda_1 = -3t$. With $t = 1$:
$$-3v_1 + 2v_2 + v_3 = 0, \qquad \text{that is} \qquad v_3 = 3v_1 - 2v_2.$$
Check: $3(1, 2, 1) - 2(2, 1, 0) = (3 - 4, 6 - 2, 3 - 0) = (-1, 4, 3)$.
:::

::: exercise intermediate The equation of a Span
Let $W = \Span\big((1, 0, 2), (0, 1, -1)\big) \subset \R^3$. (a) Find an equation of $W$. (b) Does the vector $(1, 1, 1)$ lie in $W$? And $(1, 1, 2)$?
::: solution
(a) I reduce $(v_1 \mid v_2 \mid v)$ with a generic $v = (a, b, c)$:
$$\left(\begin{array}{cc|c} 1 & 0 & a \\ 0 & 1 & b \\ 2 & -1 & c \end{array}\right) \xrightarrow{R_3 \to R_3 - 2R_1} \left(\begin{array}{cc|c} 1 & 0 & a \\ 0 & 1 & b \\ 0 & -1 & c - 2a \end{array}\right)$$
$$\xrightarrow{R_3 \to R_3 + R_2} \left(\begin{array}{cc|c} 1 & 0 & a \\ 0 & 1 & b \\ 0 & 0 & c - 2a + b \end{array}\right)$$
The system has a solution if and only if $c - 2a + b = 0$. So $W = \{(x, y, z) \mid 2x - y - z = 0\}$. Check on the generators: $2 - 0 - 2 = 0$ and $0 - 1 + 1 = 0$.

(b) $(1, 1, 1)$: $2 - 1 - 1 = 0$, it lies in $W$; indeed $(1, 1, 1) = (1, 0, 2) + (0, 1, -1)$. $(1, 1, 2)$: $2 - 1 - 2 = -1 \neq 0$, it does not lie in $W$.
:::

::: exercise intermediate Basis and coordinates in $\R^3$ (tutoring Sheet 2, exercise 6)
Check that $v_1 = (1, 0, 1)$, $v_2 = (0, 1, 2)$, $v_3 = (2, 1, 0)$ are a basis of $\R^3$ and compute the coordinate vector of $v = (0, 9, -2)$ with respect to this basis.
::: solution
**Basis.** Three vectors in $\R^3$: the determinant of the matrix with the vectors in columns is enough. Expanding along the first row:
$$\det\begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 1 \\ 1 & 2 & 0 \end{pmatrix} = 1 \cdot (0 - 2) - 0 + 2 \cdot (0 - 1) = -2 - 2 = -4 \neq 0.$$
They are a basis.

**Coordinates.** Gauss–Jordan on $(v_1 \mid v_2 \mid v_3 \mid v)$:
$$\left(\begin{array}{ccc|c} 1 & 0 & 2 & 0 \\ 0 & 1 & 1 & 9 \\ 1 & 2 & 0 & -2 \end{array}\right) \xrightarrow{R_3 \to R_3 - R_1} \left(\begin{array}{ccc|c} 1 & 0 & 2 & 0 \\ 0 & 1 & 1 & 9 \\ 0 & 2 & -2 & -2 \end{array}\right)$$
$$\xrightarrow{R_3 \to R_3 - 2R_2} \left(\begin{array}{ccc|c} 1 & 0 & 2 & 0 \\ 0 & 1 & 1 & 9 \\ 0 & 0 & -4 & -20 \end{array}\right)$$
From the bottom: $\lambda_3 = 5$; $\lambda_2 = 9 - 5 = 4$; $\lambda_1 = 0 - 2 \cdot 5 = -10$. Coordinates $(-10, 4, 5)$.

**Check:** $-10(1, 0, 1) + 4(0, 1, 2) + 5(2, 1, 0) = (-10 + 10,\ 4 + 5,\ -10 + 8) = (0, 9, -2)$.
:::

::: exercise intermediate Coordinates of a polynomial (tutoring Sheet 2, exercise 7)
Given the basis $p_1 = x - 1$, $p_2 = x + 1$, $p_3 = x^2 + x$ of $\R_2[x]$, compute the coordinate vector of $p = 3x^2 + 5x - 1$.
::: solution
$$ap_1 + bp_2 + cp_3 = a(x - 1) + b(x + 1) + c(x^2 + x) = cx^2 + (a + b + c)x + (-a + b).$$
I set the coefficients equal to those of $3x^2 + 5x - 1$:
1. $x^2$: $c = 3$;
2. $x$: $a + b + c = 5$, so $a + b = 2$;
3. constant term: $-a + b = -1$.

Adding the last two: $2b = 1$, that is $b = \frac 12$, and $a = \frac 32$. Coordinates $\left(\frac 32, \frac 12, 3\right)$.

**Check:** $\frac 32(x - 1) + \frac 12(x + 1) + 3(x^2 + x) = 3x^2 + \left(\frac 32 + \frac 12 + 3\right)x + \left(-\frac 32 + \frac 12\right) = 3x^2 + 5x - 1$. The coordinates can be fractions even when all the data are integers.
:::

::: exercise hard A basis that depends on $k$
For which $k \in \R$ do the vectors $u_1 = (1, k, 0)$, $u_2 = (0, 1, k)$, $u_3 = (k, 0, 1)$ form a basis of $\R^3$? For the excluded values, write a dependence relation.
::: solution
Matrix with the vectors in columns and expansion along the first row:
$$\det\begin{pmatrix} 1 & 0 & k \\ k & 1 & 0 \\ 0 & k & 1 \end{pmatrix} = 1 \cdot (1 - 0) - 0 + k \cdot (k^2 - 0) = 1 + k^3.$$
$1 + k^3 = (k + 1)(k^2 - k + 1)$, and $k^2 - k + 1$ never vanishes in $\R$ (the discriminant is $1 - 4 = -3 < 0$). So $\det = 0$ only for $k = -1$: the vectors are a basis **for every $k \neq -1$**.

For $k = -1$: $u_1 = (1, -1, 0)$, $u_2 = (0, 1, -1)$, $u_3 = (-1, 0, 1)$, and $u_1 + u_2 + u_3 = (0, 0, 0)$. A relation is $u_1 + u_2 + u_3 = 0$.
:::

::: exercise basic Encoding a message
With the handouts' code, which two check numbers are added to the message $(0, 1, 0, -4)$? Check the result.
::: solution
$s(x) = 0 \cdot x^5 + x^4 + 0 \cdot x^3 - 4x^2 + ax + b = x^4 - 4x^2 + ax + b$.
- $s(1) = 1 - 4 + a + b = -3 + a + b$;
- $s(2) = 16 - 16 + 2a + b = 2a + b$.

System: $a + b = 3$ and $2a + b = 0$. Taking the first away from the second: $a = -3$; then $b = 6$. You transmit $(0, 1, 0, -4, -3, 6)$.

**Check:** $s(x) = x^4 - 4x^2 - 3x + 6$; $s(1) = 1 - 4 - 3 + 6 = 0$; $s(2) = 16 - 16 - 6 + 6 = 0$.
:::

::: exercise exam As at the exam: generators and/or independent?
The polynomials $1 + x$, $x + x^2$, $1 + x^2$ and $1$ of $\R_2[x]$ are: (a) linearly independent, but not generators; (b) neither linearly independent nor generators; (c) the question is ill-posed: the polynomials are 4 and the space has dimension 3; (d) generators, but not linearly independent; (e) both generators and linearly independent.
::: solution
**Step 1.** Four polynomials in $\R_2[x]$, which has dimension 3: they cannot be independent. (b) and (d) remain; (c) is wrong because the question makes sense with any number of vectors.

**Step 2.** In columns the coefficients with respect to $1, x, x^2$:
$$\begin{pmatrix} 1 & 0 & 1 & 1 \\ 1 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 \end{pmatrix}.$$
The first three columns have determinant $1 \cdot (1 \cdot 1 - 0 \cdot 1) - 0 + 1 \cdot (1 \cdot 1 - 1 \cdot 0) = 2 \neq 0$: rank 3, so the polynomials **span** $\R_2[x]$. Answer **(d)**.

The dependence relation: $(1 + x) - (x + x^2) + (1 + x^2) = 2$, so $2 \cdot 1 = (1 + x) - (x + x^2) + (1 + x^2)$. It is the scheme of questions 2 of the exams of 06/09/2024 and 16/01/2025.
:::

::: exercise exam As at the exam: the coordinate vector
The polynomials $q_1 = 1 + x$, $q_2 = x + x^2$, $q_3 = 1 + x^2$ form a basis of $\R_2[x]$. The coordinate vector of $p = 2 + 4x + 6x^2$ in this basis is: (a) $(2, 4, 6)$; (b) $(0, 4, 2)$; (c) $(4, 2, 0)$; (d) $(0, 4q_2, 2q_3)$; (e) $(1, 2, 3)$.
::: solution
$$aq_1 + bq_2 + cq_3 = (a + c) + (a + b)x + (b + c)x^2.$$
I set the coefficients equal: $a + c = 2$, $a + b = 4$, $b + c = 6$. Adding the three equations, $2(a + b + c) = 12$, so $a + b + c = 6$; subtracting each equation in turn: $b = 6 - 2 = 4$, $c = 6 - 4 = 2$, $a = 6 - 6 = 0$. Answer **(b)**, $(0, 4, 2)$.

**Check:** $0 \cdot (1 + x) + 4(x + x^2) + 2(1 + x^2) = 2 + 4x + 6x^2$. (a) are the coordinates in the standard basis, (d) is not a vector of numbers, (c) has the wrong order. Scheme of the questions of the exams of 08/02/2024 (question 3) and 16/01/2025 (question 8).
:::

::: exercise intermediate Three vectors of $\R^4$
Decide whether $u_1 = (1, 1, 2, 3)$, $u_2 = (0, 1, -1, 0)$, $u_3 = (3, 1, 8, 9)$ are linearly independent in $\R^4$ and whether they span $\R^4$ (tutoring Sheet 2, exercise 3.3).
::: solution
**Do they span?** No, without calculations: they are 3 vectors and $\dim \R^4 = 4$.

**Independent?** In columns and Gauss:
$$\begin{pmatrix} 1 & 0 & 3 \\ 1 & 1 & 1 \\ 2 & -1 & 8 \\ 3 & 0 & 9 \end{pmatrix} \longrightarrow \begin{pmatrix} 1 & 0 & 3 \\ 0 & 1 & -2 \\ 0 & -1 & 2 \\ 0 & 0 & 0 \end{pmatrix}$$
$$\xrightarrow{R_3 \to R_3 + R_2} \begin{pmatrix} 1 & 0 & 3 \\ 0 & 1 & -2 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$$
(first move: $R_2 - R_1$, $R_3 - 2R_1$, $R_4 - 3R_1$). Rank 2 < 3: **dependent**. From the reduced form: $\lambda_3 = t$, $\lambda_2 = 2t$, $\lambda_1 = -3t$, that is $-3u_1 + 2u_2 + u_3 = 0$, or $u_3 = 3u_1 - 2u_2$. Check: $3(1, 1, 2, 3) - 2(0, 1, -1, 0) = (3, 1, 8, 9)$.
:::

::: exercise hard Coordinates respect sums and multiples
Let $v_1, \dots, v_n$ be a basis of $V$ and denote by $[v]$ the coordinate vector of $v$. Prove that $[v + w] = [v] + [w]$ and $[\lambda v] = \lambda[v]$ for all $v, w \in V$ and $\lambda \in \K$.
::: solution
Let $[v] = (\lambda_1, \dots, \lambda_n)$ and $[w] = (\mu_1, \dots, \mu_n)$, that is $v = \sum_i \lambda_iv_i$ and $w = \sum_i \mu_iv_i$.

1. Adding and collecting: $v + w = (\lambda_1 + \mu_1)v_1 + \cdots + (\lambda_n + \mu_n)v_n$. This is **one** expression of $v + w$ as a combination of the basis; by Proposition 13.4 it is **the only one**, so the coordinates of $v + w$ are $(\lambda_1 + \mu_1, \dots, \lambda_n + \mu_n) = [v] + [w]$.
2. In the same way $\lambda v = (\lambda\lambda_1)v_1 + \cdots + (\lambda\lambda_n)v_n$, and by uniqueness $[\lambda v] = \lambda[v]$.

Uniqueness is the key point: without Proposition 13.4 you would only know that *one* expression of $v + w$ has those coefficients. In the language of lesson L14, the function $v \mapsto [v]$ is a linear map $V \to \K^n$.
:::

## Review questions

::: question How do you turn the question "are $v_1, \dots, v_k$ independent?" into a linear system?
The equation $\lambda_1v_1 + \cdots + \lambda_kv_k = 0$ is a homogeneous system in the unknowns $\lambda_j$, with coefficient matrix $A = (v_1 \mid \cdots \mid v_k)$ (the vectors in columns). The vectors are independent if and only if the only solution is the zero one.
:::

::: question What is the rank criterion for independence? And when can you use the determinant?
Independent if and only if $\rk(A) = k$, the number of vectors. If there are $n$ vectors in $\K^n$, $A$ is square and they are independent if and only if $\det A \neq 0$.
:::

::: question How do you find a dependence relation between dependent vectors?
You solve the homogeneous system with Gauss–Jordan: every non-zero solution $(\lambda_1, \dots, \lambda_k)$ gives the relation $\lambda_1v_1 + \cdots + \lambda_kv_k = 0$. In Example 13.1: $-v_1 + v_2 + v_3 = 0$.
:::

::: question When do $v_1, \dots, v_k$ span $\K^m$?
When the system $\lambda_1v_1 + \cdots + \lambda_kv_k = v$ has a solution for every $v \in \K^m$, that is when $\rk(v_1 \mid \cdots \mid v_k) = m$.
:::

::: question How do you find an equation of $\Span(v_1, \dots, v_k)$?
You reduce $(v_1 \mid \cdots \mid v_k \mid v)$ to row echelon form with a generic $v = (a, b, c, \dots)$. Every row that vanishes on the left gives a linear condition on $a, b, c, \dots$: they are the equations of the Span.
:::

::: question Why are more than $m$ vectors of $\K^m$ always dependent, and fewer than $m$ never span?
Because the rank of a matrix with $m$ rows is at most $m$: with $k > m$ vectors you have $\rk \le m < k$. And the Span of $k$ vectors has dimension at most $k$: with $k < m$ it cannot be the whole of $\K^m$.
:::

::: question What does Theorem 7.12 say and why is it handy?
If $\dim V = n$, $n$ vectors of $V$ are a basis as soon as they are independent or as soon as they span: the other condition follows on its own. So a single check is enough, for example $\det \neq 0$.
:::

::: question State and prove Proposition 13.4.
With respect to a basis $v_1, \dots, v_n$ every vector can be written in a unique way as a combination. An expression exists because the $v_i$ span; if there were two, subtracting them you would have $\sum (\lambda_i - \mu_i)v_i = 0$ and by independence $\lambda_i = \mu_i$ for every $i$.
:::

::: question What are the coordinates of a vector with respect to a basis?
They are the coefficients $\lambda_1, \dots, \lambda_n$ of the unique expression $v = \lambda_1v_1 + \cdots + \lambda_nv_n$, collected in the column vector $(\lambda_1, \dots, \lambda_n)$. They depend on the basis and on the order of its vectors.
:::

::: question How do you compute coordinates in practice?
In $\K^n$: you solve $(v_1 \mid \cdots \mid v_n \mid v)$ with Gauss–Jordan, or you compute $A^{-1}v$. With polynomials: you set equal the coefficients of the powers of $x$ in $\lambda_1p_1 + \cdots + \lambda_np_n = p$. At the end you rebuild the vector to check.
:::

::: question How does the handouts' code detect an error, and how does it correct it?
The message is completed with two numbers chosen (by solving a 2 × 2 system) so that the polynomial of the six coefficients vanishes at $1$ and at $2$. If on arrival $s(1)$ or $s(2)$ is not zero there is an error. To correct one you put an unknown in turn in each position and impose $s(1) = s(2) = 0$ again: only the wrong position gives a consistent system, and its solution is the right value.
:::

## Glossary

```glossary
Vectors in columns | The matrix $A = (v_1 \mid \cdots \mid v_k)$ that has the given vectors as columns: the basis of all the calculations of the lesson.
Linearly dependent | There is a combination $\lambda_1v_1 + \cdots + \lambda_kv_k = 0$ with coefficients not all zero.
Linearly independent | The only zero combination is the one with all coefficients zero; for vectors of $\K^m$: $\rk(A) = k$.
Dependence relation | A non-zero solution of the homogeneous system $\lambda_1v_1 + \cdots + \lambda_kv_k = 0$.
Generators | Vectors whose Span is the whole space; in $\K^m$: $\rk(A) = m$.
Equations of the Span | The conditions on the generic vector $(a, b, c, \dots)$ that come out of Gauss on $(A \mid v)$; they describe the Span.
Basis | Sequence of independent vectors that span; with $n$ vectors in $\K^n$: $\det A \neq 0$.
Theorem 7.12 | If $\dim V = n$, $n$ independent vectors (or generators) are already a basis.
Coordinates | The coefficients of the unique expression of a vector as a combination of the vectors of a basis.
Column vector of coordinates | The column $(\lambda_1, \dots, \lambda_n)$ of the coordinates; it lies in $\K^n$.
Ordered basis | Basis with a fixed order of the vectors; the order decides the order of the coordinates.
Redundant information | Numbers added to a message, computed from the message itself, to detect or correct errors.
Check conditions | In the handouts' code: $s(1) = 0$ and $s(2) = 0$ for the polynomial of the transmitted coefficients.
Reed–Solomon codes | Correcting codes used in QR codes and in digital memories: polynomials over finite fields.
```

## Checklist

```checklist
- I can turn "independent?" into a homogeneous system with the vectors in columns.
- I can decide independence with the rank ($\rk = k$) and, for $n$ vectors in $\K^n$, with the determinant.
- I can find a dependence relation by solving the homogeneous system.
- I can decide whether some vectors span $\K^m$ ($\rk = m$) and find the equations of a Span.
- I can say without calculations that more than $m$ vectors of $\K^m$ are dependent and fewer than $m$ do not span.
- I can use Theorem 7.12 to check a basis with a single criterion.
- I can prove that the coordinates with respect to a basis are unique (Proposition 13.4).
- I can compute coordinates in $\K^n$ (with Gauss–Jordan or with the inverse) and with polynomials (by setting the coefficients equal).
- I can encode a message with the handouts' code and correct an error.
- I can answer the quizzes "generators and/or independent?" and "coordinate vector" without getting format and order wrong.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 13 "Sistemi Lineari III", pp. 62–67: sections 13.A–13.E are followed in order, with the page next to each heading; proposition, definition and examples keep their numbering (Examples 13.1, 13.2, 13.3 and 13.6, Proposition 13.4, Definition 13.5, Exercise 13.7), including the box "Link with computer science" on error-correcting codes. The recaps of linear dependence and of basis take up Definitions 7.1 and 7.7 and Theorem 7.12 of lesson 7.
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §2.3 "Dimensione" (pp. 60–75: independence, bases, coordinates with Example 2.3.12, extraction algorithm) and §3.2 (rank and Rouché–Capelli), plus Example 4.1.17 on the coordinate map.
- **Exam papers** of Linear Algebra 2023/24–2025/26 with official solutions (2025/26 Moodle, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): reported: question 3 of 08/02/2024, question 2 of 06/09/2024 and question 8 of 16/01/2025; cited: the questions on the rank (16/01/2025, 07/02/2025, 05/02/2026), question 2 of 16/01/2025 and of 07/09/2026, question 6 of 05/02/2026 and problem 11 of 07/09/2026. The solutions here are written from scratch. Exercises 3.3, 6 and 7 of tutoring Sheet 2 (MDAG2 Moodle) are worked out in the exercises.
- The **"Beyond the handouts"** parts (the explicit dependence relation, the equations of the Span, the extraction of a basis with the pivots, the tables on the number of vectors, the coordinate map, the unnumbered exercises) are additions in these notes to connect the lesson to the rest of the course and to the exam.
