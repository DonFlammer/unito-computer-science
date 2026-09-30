---
course: MDAG
module: AG
lesson: L10
title: Matrices III
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Linear Algebra and Geometry · Channels A, B and C · Lesson L10
description: >-
  Notes on lesson L10 of Linear Algebra and Geometry (MDAG, part 2): how the determinant changes with the Gauss
  moves, zero determinant and dependent rows, Binet's theorem, cofactors, the inverse matrix and the invertibility
  criterion, with exam-style quizzes and worked exercises.
lede: >-
  How to compute a large determinant quickly (with the Gauss moves), when it is zero, why
  $\det(AB) = \det A \cdot \det B$, and how to find the inverse of a matrix with cofactors. At the end you can
  answer the question that opens many exam problems: for which values of the parameter is the matrix invertible?
material: handouts
facts:
  Handouts: lesson 10 · pp. 46–49
  Book: Martelli, §3.3.5, §3.3.7, §3.4.5–3.4.7
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 100–130 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 10 "Matrici III"; B. Martelli, Geometria e algebra lineare, §3.3.5, §3.3.7, §3.3.9 and §3.4.5–3.4.8
italian_file: L10_matrici_3.html
html_notes: notes/MDAG/L10_matrices_3.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L10_matrici_3.md
---

## In brief

- Three **Gauss moves** on the rows and their effect on the determinant: swapping two rows **changes the sign**; multiplying a row by $\lambda$ **multiplies** the determinant by $\lambda$; adding to a row a multiple of another **does not change it**. The same holds for columns.
- The practical method for large determinants: with the moves you make the matrix triangular, then you multiply the diagonal, taking the swaps into account.
- $\det A = 0$ **if and only if** a row (or a column) is a linear combination of the others. Two equal or proportional rows give $\det A = 0$ straight away.
- **Binet's theorem**: $\det(AB) = \det A \cdot \det B$ for square matrices of the same order. So $\det(A^k) = (\det A)^k$ and $\det(AB) = \det(BA)$.
- $A$ is **invertible** if there exists $A^{-1}$ with $AA^{-1} = A^{-1}A = I_n$. Then $\det(A^{-1}) = \frac 1{\det A}$.
- The **cofactors** are $\mathrm{cof}_{ij} = (-1)^{i+j} \det C_{ij}$, and $A \cdot {}^t(\mathrm{cof}(A)) = \det(A) \cdot I_n$ holds.
- A square matrix is invertible **if and only if** $\det A \neq 0$, and then $A^{-1} = \frac 1{\det A}\, {}^t(\mathrm{cof}(A))$. For $2 \times 2$ matrices: swap the diagonal, change the sign of the other two, divide by $ad - bc$.
- At the exam: "for which $k$ is the matrix invertible?" in the problems, $\det(A^3)$ with Binet and the traps about Gauss moves in the quizzes.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## The Gauss moves and the determinant (p. 46)

Take $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, which has $\det A = 4 - 6 = -2$, and change its rows in three different ways:

| Move | New matrix | Determinant | Compared with $-2$ |
|---|---|---|---|
| I swap the two rows | $\begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}$ | $6 - 4 = 2$ | changes sign |
| I multiply the first row by 5 | $\begin{pmatrix} 5 & 10 \\ 3 & 4 \end{pmatrix}$ | $20 - 30 = -10$ | multiplied by 5 |
| I subtract 3 times the first row from the second | $\begin{pmatrix} 1 & 2 \\ 0 & -2 \end{pmatrix}$ | $-2 - 0 = -2$ | the same |

The third move is the most precious: it has created a zero **without changing** the determinant, and the matrix has become triangular. This is the content of the first proposition of the lesson.

> [!PROP] 10.1 · The determinant and the row moves
> Let $A$ be an $n \times n$ matrix.
> 1. If $A'$ is obtained from $A$ by swapping two rows, then $\det(A') = -\det(A)$.
> 2. If $A'$ is obtained from $A$ by multiplying a row of $A$ by a scalar $\lambda$, then $\det(A') = \lambda \det(A)$.
> 3. If $A'$ is obtained from $A$ by adding to a row a multiple of another row, then $\det(A') = \det A$.
>
> The very same rules also hold for columns (instead of rows).

The process of obtaining $A'$ from $A$ in one of the three ways above is called a **Gauss move**. In lesson L11 the moves will become the tool for solving linear systems, with this notation (where $R_i$ is the $i$-th row):

| Type | Move | Written | Effect on the determinant |
|---|---|---|---|
| (I) | swap two rows | $R_i \leftrightarrow R_j$ | changes sign |
| (II) | multiply a row by $\lambda \neq 0$ | $R_i \to \lambda R_i$ | multiplied by $\lambda$ |
| (III) | add to a row a multiple of another | $R_i \to R_i + \lambda R_j$ ($j \neq i$) | unchanged |

Piece by piece:

- Point (2) is Proposition 9.11 of the previous lesson, and it holds for every $\lambda$. As a **Gauss move**, though, it is used only with $\lambda \neq 0$ (lesson L11): multiplying a row by $0$ would wipe out information.
- In point (3) the row that **changes** is $R_i$, and it is changed by adding a multiple of **another** row $R_j$, which stays as it is.
- "The very same rules also hold for columns": swapping two columns changes the sign, and so on. The reason is $\det({}^tA) = \det A$ (Proposition 9.5): the columns of $A$ are the rows of ${}^tA$.

> [!PROOF] of Proposition 10.1
> The handouts give a three-line explanation; here it is with all the steps.
>
> **(1) Swap.** For $n = 2$: $\det \begin{pmatrix} c & d \\ a & b \end{pmatrix} = cb - da = -(ad - bc)$. For $n \ge 3$ we use induction on the order: there is at least one row $i$ **not touched** by the swap. Expanding $\det A'$ along that row, each submatrix $C'_{ij}$ is the $C_{ij}$ of $A$ with two rows swapped, and it has order $n - 1$: by the induction hypothesis $\det C'_{ij} = -\det C_{ij}$. So every term changes sign, and so does the sum.
>
> **A consequence:** if $A$ has **two equal rows**, then $\det A = 0$. Indeed, swapping the two equal rows you get the same matrix, but by (1) the determinant changes sign: $\det A = -\det A$, that is $\det A = 0$.
>
> **(2)** It is Proposition 9.11.
>
> **(3) Adding a multiple.** Let $A'$ be obtained with $R_i \to R_i + \lambda R_k$. I expand $\det A'$ along row $i$; the submatrices $C_{ij}$ do not contain row $i$, so they are those of $A$:
> $$\det A' = \sum_j (-1)^{i+j}(a_{ij} + \lambda a_{kj}) \det C_{ij} = \det A + \lambda \sum_j (-1)^{i+j} a_{kj} \det C_{ij}.$$
> The last sum is the expansion along row $i$ of the matrix that has row $k$ **in place of** row $i$: a matrix with two equal rows, whose determinant is $0$. What remains is $\det A' = \det A$.
>
> **Columns:** just apply everything to ${}^tA$, because $\det({}^tA) = \det A$.

> [!EXAMPLE] 10.2 · A zero determinant with two moves
> Let
> $$A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}.$$
> If we subtract the first row of $A$ from the second and from the third row ($R_2 \to R_2 - R_1$, $R_3 \to R_3 - R_1$), we get a new matrix
> $$A' = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 3 & 3 \\ 6 & 6 & 6 \end{pmatrix}.$$
> Since these are Gauss moves of the third type, $\det(A') = \det(A)$. Now we can subtract 2 times the second row from the third ($R_3 \to R_3 - 2R_2$: $(6, 6, 6) - 2 \cdot (3, 3, 3) = (0, 0, 0)$). We get
> $$A'' = \begin{pmatrix} 1 & 2 & 3 \\ 3 & 3 & 3 \\ 0 & 0 & 0 \end{pmatrix},$$
> with $\det(A'') = \det(A') = \det(A)$. Since $A''$ has a row with only $0$ entries, $\det(A'') = 0$ (Proposition 9.10), and so the matrix $A$ also has determinant $0$.

### Gauss's method for determinants

> [!METHOD] Make it triangular and multiply the diagonal
> 1. With moves of type (III), $R_i \to R_i + \lambda R_j$, create zeros **below** the diagonal, one column at a time: in the first column use the first row, in the second the second, and so on. The determinant does not change.
> 2. If on the diagonal, where you need a non-zero number, there is a $0$, **swap** that row with one further down (type (I)) and **change the sign**. If below that $0$ there are only zeros, you can stop: the final triangular matrix will have a $0$ on the diagonal, so the determinant is $0$.
> 3. If you use a move (II) for convenience (for example to divide a row by 2), **remember the factor**: $\det A' = \lambda \det A$, so $\det A = \frac 1\lambda \det A'$.
> 4. When the matrix is triangular, the determinant is the product of the diagonal (Proposition 9.3), with the sign $(-1)^{\text{number of swaps}}$.
> 5. If a zero row appears halfway, the determinant is $0$ and you can stop.
>
> You can also mix it with Laplace: after creating zeros in a column, expand along that column.

> [!EXAMPLE] · A $3 \times 3$ that needs a swap
> $$B = \begin{pmatrix} 0 & 2 & 1 \\ 1 & 1 & 1 \\ 2 & 4 & 5 \end{pmatrix}$$
> In place $(1, 1)$ there is a $0$: I swap the first two rows (the determinant changes sign), then I create the zeros.
> $$B \xrightarrow{R_1 \leftrightarrow R_2} \begin{pmatrix} 1 & 1 & 1 \\ 0 & 2 & 1 \\ 2 & 4 & 5 \end{pmatrix} \xrightarrow{R_3 \to R_3 - 2R_1} \begin{pmatrix} 1 & 1 & 1 \\ 0 & 2 & 1 \\ 0 & 2 & 3 \end{pmatrix} \xrightarrow{R_3 \to R_3 - R_2} \begin{pmatrix} 1 & 1 & 1 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}$$
> The final matrix is triangular with diagonal $1, 2, 2$: determinant $4$. There was **one** swap, so $\det B = -4$. Check with Sarrus: $(0 + 4 + 4) - (2 + 0 + 10) = 8 - 12 = -4$ ✓.

> [!EXAMPLE] · A $4 \times 4$ with moves of the third type only
> $$C = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 2 & 2 \\ 1 & 2 & 3 & 3 \\ 1 & 2 & 3 & 4 \end{pmatrix} \xrightarrow{\substack{R_2 \to R_2 - R_1 \\ R_3 \to R_3 - R_1 \\ R_4 \to R_4 - R_1}} \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 1 & 1 \\ 0 & 1 & 2 & 2 \\ 0 & 1 & 2 & 3 \end{pmatrix}$$
> $$\xrightarrow{\substack{R_3 \to R_3 - R_2 \\ R_4 \to R_4 - R_2}} \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 1 & 2 \end{pmatrix} \xrightarrow{R_4 \to R_4 - R_3} \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 \end{pmatrix}$$
> No swaps, diagonal of 1s: $\det C = 1$. With the definition it would have been 24 terms.

In the tool below there is the matrix of Example 10.2. Press "Compute": the tool uses moves different from those of the handouts ($R_2 \to R_2 - 4R_1$ and $R_3 \to R_3 - 7R_1$, then $R_3 \to R_3 - 2R_2$), but the determinant is the same, $0$. Then try the matrices $B$ and $C$ of this section (`0 2 1; 1 1 1; 2 4 5` and `1 1 1 1; 1 2 2 2; 1 2 3 3; 1 2 3 4`): in the case of $B$ the tool points out the row swap and the change of sign.

```widget gauss
title: The determinant with the Gauss moves
matrice: 1 2 3; 4 5 6; 7 8 9
modo: determinante
modi: determinante
```

> [!PITFALL] The move "$R_2 \to 2R_2 - R_1$" is not harmless
> This move contains two: first $R_2 \to 2R_2$ (type (II), determinant times 2), then $R_2 \to R_2 - R_1$ (type (III), no effect). The determinant ends up **multiplied by 2**. If you use it to avoid fractions you must remember it and divide at the end. In the same way, a matrix "reduced to row echelon form" with arbitrary moves does **not** have the same determinant as the starting matrix: it is a classic quiz trap ("Towards the exam").

## Zero determinant and dependent rows (p. 47)

In Example 10.2 the determinant came out $0$ because the third row "depended" on the other two: $(7, 8, 9) = 2 \cdot (4, 5, 6) - (1, 2, 3)$. It is not a coincidence.

> [!PROP] 10.3 · Zero determinant
> $\det(A) = 0$ if and only if a row (or a column) of $A$ is a linear combination of the others.

The handouts prove one of the two directions: if a row is a combination of the others, the determinant is zero. Suppose for example that the first row is a linear combination of the others, that is, that there are numbers $c_2, \dots, c_n$ with

$$A_1 = c_2A_2 + \dots + c_nA_n.$$

1. Let $A'$ be the matrix obtained from $A$ by replacing the first row with the **zero row**. By Proposition 9.10, $\det(A') = 0$.
2. Now we apply to $A'$, one after the other, moves of the third type: we add to the first row first $c_2A_2$, then $c_3A_3$, and so on up to $c_nA_n$. The determinant never changes.
3. At the end the first row is $0 + c_2A_2 + \dots + c_nA_n = A_1$: the final matrix is exactly $A$.
4. So $\det(A) = \det(A') = 0$.

The proposition states that the other direction holds too: if $\det A = 0$, then some row is a linear combination of the others. The handouts do not prove it.

> [!NOTE] Which "Property 1"?
> In the handouts, on p. 47, step 1 is justified with "by Property 1": it is the first property of section 9.C, that is Proposition 9.10 (a zero row gives a zero determinant), not point (1) of Proposition 10.1 (swapping two rows).

> [!BEYOND] · the other direction, and the link with the rank
> Martelli (Proposition 3.3.12) proves that for $A \in M(n, \K)$
> $$\det A \neq 0 \iff \rk A = n,$$
> with the Gauss moves: the moves do not change the rank and change the determinant only by non-zero factors, and for an $n \times n$ row echelon matrix both conditions say "all the numbers on the diagonal are non-zero". From this follows the other direction of Proposition 10.3: if $\det A = 0$, then $\rk A < n$; the row rank is the same (Proposition 8.6), so the $n$ rows are linearly dependent, and one of them is a linear combination of the others (Proposition 7.2). Another consequence (Martelli, Proposition 3.3.15): **$n$ vectors of $\K^n$ form a basis if and only if the matrix that has them as columns has non-zero determinant.**

> [!EXAMPLE] · Zero determinants at a glance
> $$\det \begin{pmatrix} 1 & 5 & 1 \\ 2 & 7 & 2 \\ 3 & 0 & 3 \end{pmatrix} = 0, \qquad \det \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 5 & 1 & 9 \end{pmatrix} = 0, \qquad \det \begin{pmatrix} 1 & 2 & 3 & 4 \\ 5 & 6 & 7 & 8 \\ 9 & 10 & 11 & 12 \\ 13 & 14 & 15 & 16 \end{pmatrix} = 0.$$
> In the first one the first and third **columns** are equal; in the second the second row is twice the first; in the third each row exceeds the previous one by $(4, 4, 4, 4)$, so $R_2 - R_1 = R_3 - R_2$, that is $R_3 = 2R_2 - R_1$: one row is a combination of the others.

## Binet's theorem (p. 47)

With $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ ($\det A = -2$) and $B = \begin{pmatrix} 2 & 0 \\ 1 & 3 \end{pmatrix}$ ($\det B = 6$):

$$AB = \begin{pmatrix} 1 \cdot 2 + 2 \cdot 1 & 0 + 2 \cdot 3 \\ 3 \cdot 2 + 4 \cdot 1 & 0 + 4 \cdot 3 \end{pmatrix} = \begin{pmatrix} 4 & 6 \\ 10 & 12 \end{pmatrix}, \qquad \det(AB) = 48 - 60 = -12 = (-2) \cdot 6.$$

The determinant of the product is the product of the determinants. The handouts include it without proof.

> [!THEOREM] 10.4 · Binet's theorem
> If $A$ and $B$ are square matrices of the same order, then
> $$\det(A \cdot B) = \det(A) \cdot \det(B).$$

Piece by piece, with three consequences you need to know:

- You need **square matrices of the same order**, so that $AB$ exists and is square.
- **$\det(AB) = \det(BA)$**, even though in general $AB \neq BA$: both are equal to $\det A \cdot \det B$, and between numbers the product is commutative.
- **Powers:** $\det(A^2) = \det(A \cdot A) = (\det A)^2$ and in general $\det(A^k) = (\det A)^k$. To compute $\det(A^3)$ you do **not** compute $A^3$.
- Careful with sums: the theorem talks only about products, and in general $\det(A + B) \neq \det A + \det B$ (lesson L09).

> [!PROOF] · Binet's theorem for $2 \times 2$ matrices
> Let $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ and $B = \begin{pmatrix} e & f \\ g & h \end{pmatrix}$. Then $AB = \begin{pmatrix} ae + bg & af + bh \\ ce + dg & cf + dh \end{pmatrix}$ and
> $$\det(AB) = (ae + bg)(cf + dh) - (af + bh)(ce + dg).$$
> Expanding, the terms $aecf$ and $afce$ cancel out, and so do $bgdh$ and $bhdg$. What remains is
> $$aedh + bgcf - afdg - bhce = ad(eh - fg) - bc(eh - fg)$$
> $$= (ad - bc)(eh - fg) = \det A \cdot \det B.$$
> The general proof (Martelli, Theorem 3.4.7) uses the definition with permutations and the fact that a matrix with two equal rows has zero determinant.

### Invertible matrices

The number $\frac 12$ is the inverse of $2$ because $2 \cdot \frac 12 = 1$. For matrices the role of $1$ is played by $I_n$.

> [!BEYOND] · what "invertible" means
> The handouts use the word from here on; the definition is Martelli's (§3.4.5). A square matrix $A \in M(n)$ is **invertible** if there exists a matrix $B \in M(n)$ such that
> $$AB = BA = I_n.$$
> Such a $B$ is **unique** and is called the **inverse** of $A$, $A^{-1}$. Unique because, if $B$ and $B'$ both work, $B = BI_n = B(AB') = (BA)B' = I_nB' = B'$.

> [!EXAMPLE] · An inverse and a matrix with no inverse
> $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ has inverse $A^{-1} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$ (Martelli, §3.4.7). Check:
> $$\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 2 - 1 & -2 + 2 \\ 1 - 1 & -1 + 2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix},$$
> and in the same way $A^{-1}A = I_2$.
>
> $N = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ instead is **not** invertible, even though it is not zero: for every $B$, the product $NB$ has a zero second row (it is $0$ times the first row of $B$ plus $0$ times the second), so it cannot be $I_2$.

> [!COROLLARY] 10.5 · Determinant of the inverse
> Let $A$ be an invertible square matrix. Then
> $$\det(A^{-1}) = \frac 1{\det(A)}.$$

The handouts' explanation: from Binet's theorem and $AA^{-1} = I_n$,

$$1 = \det(I_n) = \det(AA^{-1}) = \det(A) \det(A^{-1}),$$

from which the formula follows. In particular an invertible matrix has $\det A \neq 0$: if $\det A = 0$, the product $\det(A)\det(A^{-1})$ would be $0$ and not $1$.

> [!PITFALL] Binet holds only for square matrices
> If $A$ is $3 \times 2$, writing $\det(A\,{}^tA) = \det A \cdot \det({}^tA)$ makes no sense: $\det A$ does not exist. The product $A\,{}^tA$ instead is $3 \times 3$ and has a determinant. For example with $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}$ you find $\det(A\,{}^tA) = 0$ (its columns are combinations of the two columns of $A$, so the rank is at most 2), while ${}^tA\,A = \begin{pmatrix} 2 & 2 \\ 2 & 5 \end{pmatrix}$ has determinant $6$.

## The cofactors of a matrix (pp. 47–48)

In the Laplace expansion every number $a_{ij}$ is multiplied by $(-1)^{i+j} \det C_{ij}$: chessboard sign and determinant of the submatrix. This number has a name.

> [!DEF] 10.6 · Cofactors
> Consider a square matrix $A$. Its **cofactors** $\mathrm{cof}_{ij} := (-1)^{i+j} \det(C_{ij})$ form a square matrix of order $n$
> $$\mathrm{cof}(A) = (\mathrm{cof}_{ij})$$
> called the **cofactor matrix** of $A$.

Piece by piece:

- $C_{ij}$ is the submatrix obtained by deleting row $i$ and column $j$ (lesson L09).
- The cofactor $\mathrm{cof}_{ij}$ is a **number**: the determinant of $C_{ij}$ with the chessboard sign.
- The cofactor matrix has the same size as $A$: in place $(i, j)$ there is $\mathrm{cof}_{ij}$.

> [!EXAMPLE] · The cofactors of a $2 \times 2$
> With $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ the submatrices are numbers: deleting row 1 and column 1 leaves $4$, and so on.
> $$\mathrm{cof}_{11} = +4, \quad \mathrm{cof}_{12} = -3, \quad \mathrm{cof}_{21} = -2, \quad \mathrm{cof}_{22} = +1, \qquad \mathrm{cof}(A) = \begin{pmatrix} 4 & -3 \\ -2 & 1 \end{pmatrix}.$$

With cofactors the Laplace expansion along row $i$ can be rewritten compactly:

$$\det A = \sum_{j=1}^n a_{ij}\, \mathrm{cof}_{ij} \qquad \forall i \in \{1, \dots, n\}.$$

Numbers of row $i$ times cofactors **of the same row**. And what if you use the cofactors of **another** row instead? From the proof of point (3) of Proposition 10.1 we know that the sum of the products of the entries of any row (or column) with the cofactors of another row (or of another column) is $0$:

$$0 = \sum_{j=1}^n a_{ij}\, \mathrm{cof}_{kj} \qquad \forall i, k \in \{1, \dots, n\},\ i \neq k.$$

The reason: this sum is the expansion along row $k$ of the matrix that has row $i$ in place of row $k$. That matrix has two equal rows, so zero determinant.

> [!EXAMPLE] · Right cofactors and "wrong" cofactors
> $$A = \begin{pmatrix} 2 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 3 & 1 \end{pmatrix}, \qquad \mathrm{cof}(A) = \begin{pmatrix} 1 & -1 & 3 \\ 3 & 2 & -6 \\ -1 & 1 & 2 \end{pmatrix}.$$
> For example $\mathrm{cof}_{12} = -\det \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = -1$ and $\mathrm{cof}_{23} = -\det \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix} = -6$.
> - Row 1 times the cofactors of row 1: $2 \cdot 1 + 0 \cdot (-1) + 1 \cdot 3 = 5 = \det A$.
> - Row 1 times the cofactors of row 2: $2 \cdot 3 + 0 \cdot 2 + 1 \cdot (-6) = 0$.
> - Row 3 times the cofactors of row 3: $0 \cdot (-1) + 3 \cdot 1 + 1 \cdot 2 = 5$ again.

Putting the two formulas together you get an identity between matrices.

> [!PROP] 10.7
> $$A \cdot {}^t(\mathrm{cof}(A)) = \det(A) \cdot I_n = {}^t(\mathrm{cof}(A)) \cdot A.$$

Proof (from the handouts), step by step.

1. Let $K = A \cdot {}^t(\mathrm{cof}(A))$. Its entry $(i, j)$ is row $i$ of $A$ times column $j$ of ${}^t(\mathrm{cof}(A))$, which is **row** $j$ of $\mathrm{cof}(A)$:
   $$k_{ij} = \sum_\ell a_{i\ell}\, \mathrm{cof}_{j\ell}.$$
2. If $i = j$, this is the Laplace expansion of $\det(A)$ along row $i$: $k_{ii} = \det A$.
3. If $i \neq j$, it is the determinant of the matrix obtained by replacing row $j$ with row $i$: it is zero, because that matrix has two equal rows.
4. So $K$ has $\det A$ on the diagonal and $0$ elsewhere: $K = \det(A) I_n$. In the same way, with columns, one proves ${}^t(\mathrm{cof}(A))A = \det(A) I_n$. $\square$

With the matrix of the example: $A \cdot {}^t(\mathrm{cof}(A)) = \begin{pmatrix} 5 & 0 & 0 \\ 0 & 5 & 0 \\ 0 & 0 & 5 \end{pmatrix} = 5I_3$.

## The inverse of a matrix (p. 48)

If $\det A \neq 0$, just divide Proposition 10.7 by $\det A$ and you get a matrix that multiplied by $A$ gives $I_n$: the inverse.

> [!PROP] 10.8 · Invertibility and formula of the inverse
> Let $A$ be a square matrix of order $n \ge 2$. The matrix $A$ is invertible if and only if $\det(A) \neq 0$. If $A$ is invertible, then
> $$A^{-1} = \frac 1{\det(A)} \cdot {}^t(\mathrm{cof}(A)).$$

Proof (from the handouts), in both directions.

- **If $A$ is invertible, then $\det A \neq 0$.** There is a matrix $B$ such that $A \cdot B = I_n$. By Binet's theorem $\det(A \cdot B) = \det(A) \cdot \det(B)$; on the other hand $\det(I_n) = 1$. We deduce $\det(A) \cdot \det(B) = 1$, so $\det(A) \neq 0$.
- **If $\det A \neq 0$, then $A$ is invertible.** We define $B := \frac 1{\det(A)} \cdot {}^t(\mathrm{cof}(A))$. By Proposition 10.7, $A \cdot {}^t(\mathrm{cof}(A)) = \det(A) \cdot I_n = {}^t(\mathrm{cof}(A)) \cdot A$. Since $\det(A) \neq 0$ we can multiply by $\frac 1{\det(A)}$, getting $A \cdot B = I_n = B \cdot A$. So $A$ is invertible and its inverse is $B$. $\square$

The hypothesis $n \ge 2$ is needed only because cofactors require deleting a row and a column. For $n = 1$ everything is simpler: $(a)$ is invertible if and only if $a \neq 0$, and $(a)^{-1} = \left(\frac 1a\right)$.

> [!EXAMPLE] · The formula for $2 \times 2$ matrices
> For $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ the cofactors are $\mathrm{cof}_{11} = d$, $\mathrm{cof}_{12} = -c$, $\mathrm{cof}_{21} = -b$, $\mathrm{cof}_{22} = a$. Transposing and dividing by the determinant:
> $$A^{-1} = \frac 1{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} \qquad (ad - bc \neq 0).$$
> In words: **swap the two numbers on the diagonal, change the sign of the other two, divide by the determinant**. For example
> $$\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}^{-1} = \frac 1{6 - 5} \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix} = \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}.$$
> Check: $\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix} \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix} = \begin{pmatrix} 6 - 5 & -3 + 3 \\ 10 - 10 & -5 + 6 \end{pmatrix} = I_2$ ✓.

> [!METHOD] The inverse of a $3 \times 3$ with cofactors
> 1. Compute $\det A$. If it is $0$, the matrix is **not invertible**: stop.
> 2. Compute the nine $2 \times 2$ determinants $\det C_{ij}$ (delete row $i$ and column $j$).
> 3. Put in the chessboard signs: you get $\mathrm{cof}(A)$.
> 4. **Transpose**: ${}^t(\mathrm{cof}(A))$.
> 5. Divide everything by $\det A$.
> 6. Check at least one row of $A \cdot A^{-1}$: it must give the corresponding row of $I_3$.

> [!EXAMPLE] · A $3 \times 3$ inverse step by step
> $$A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}$$
> **1.** Along the first row: $\det A = 1 \cdot (1 - 0) - 2 \cdot (0 - 1) + 0 = 1 + 2 = 3 \neq 0$: $A$ is invertible.
>
> **2–3.** The nine cofactors (determinant of the submatrix, then sign):
>
> | | column 1 | column 2 | column 3 |
> |---|---|---|---|
> | row 1 | $+\det \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = 1$ | $-\det \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} = 1$ | $+\det \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = -1$ |
> | row 2 | $-\det \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix} = -2$ | $+\det \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} = 1$ | $-\det \begin{pmatrix} 1 & 2 \\ 1 & 0 \end{pmatrix} = 2$ |
> | row 3 | $+\det \begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix} = 2$ | $-\det \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = -1$ | $+\det \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} = 1$ |
>
> **4–5.** $\mathrm{cof}(A) = \begin{pmatrix} 1 & 1 & -1 \\ -2 & 1 & 2 \\ 2 & -1 & 1 \end{pmatrix}$, so
> $$A^{-1} = \frac 13 \begin{pmatrix} 1 & -2 & 2 \\ 1 & 1 & -1 \\ -1 & 2 & 1 \end{pmatrix}.$$
> **6.** Row 1 of $A$, $(1, 2, 0)$, times the columns of ${}^t(\mathrm{cof}(A))$: $1 + 2 = 3$, $\ -2 + 2 = 0$, $\ 2 - 2 = 0$; divided by 3 it gives $(1, 0, 0)$ ✓.

In the tool below there is the matrix of Exercise 10.10. The tool computes the inverse with another method, the Gauss moves on the side-by-side matrix $(A \mid I_3)$ (Martelli, §3.4.7; you will fully understand it with linear systems, lessons L11–L13). The result is the same one you find with cofactors, because the inverse is unique: compare it with the solution of the exercise. Also try a matrix with zero determinant, such as `1 2 3; 4 5 6; 7 8 9`.

```widget gauss
title: The inverse matrix, with the steps
matrice: 2 -1 0; -2 1 1; 1 -1 3
modo: inversa
modi: inversa
```

> [!PITFALL] Four mistakes about the inverse
> - **Forgetting to transpose** the cofactor matrix: for non-symmetric matrices the result is wrong (in this lesson's quiz the non-transposed cofactor matrix is one of the wrong answers).
> - Forgetting the chessboard signs, or dividing only some entries by $\det A$.
> - Inverting entry by entry: the inverse of $\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$ is **not** $\begin{pmatrix} 1/3 & 1 \\ 1/5 & 1/2 \end{pmatrix}$.
> - Thinking that $(A + B)^{-1} = A^{-1} + B^{-1}$, or that $(AB)^{-1} = A^{-1}B^{-1}$: the right order is $(AB)^{-1} = B^{-1}A^{-1}$ (exercise 8).

> [!BEYOND] · many faces of the same property
> For a square matrix $A \in M(n, \K)$ the following are equivalent:
> - $A$ is invertible;
> - $\det A \neq 0$ (Proposition 10.8);
> - no row (or column) is a linear combination of the others (Proposition 10.3);
> - $\rk A = n$ (Martelli, Proposition 3.3.12);
> - the columns of $A$ form a basis of $\K^n$ (Martelli, Proposition 3.3.15);
> - for every $b \in \K^n$ the system $Ax = b$ has one and only one solution, $x = A^{-1}b$ (Martelli, §3.4.8; lessons L11–L13).
>
> In exam questions you keep moving from one to another.

> [!BEYOND] · where to find it in the book
> In Martelli's book: the determinant and the Gauss moves in §3.3.5 (pp. 97–98, Proposition 3.3.7); determinant and maximum rank in §3.3.7 (pp. 99–100, Proposition 3.3.12); bases and determinant in §3.3.9 (p. 101, Proposition 3.3.15); invertible matrices in §3.4.5 (pp. 106–107, Proposition 3.4.5); Binet's theorem and the determinant of the inverse in §3.4.6 (pp. 107–108, Theorem 3.4.7 and Corollary 3.4.8); the inverse with the Gauss moves and with cofactors in §3.4.7 (pp. 108–110, Propositions 3.4.10–3.4.12, Example 3.4.13); systems with an invertible matrix and Cramer's rule in §3.4.8 (p. 110).

## Towards the exam

The Linear Algebra and Geometry written test has 10 quiz questions with 5 answers each (you need at least 6 correct answers for the 2 problems worth 11 points to be marked), it lasts 2 hours, with no calculator and only 4 handwritten pages of notes; the 2026/27 exam sessions are on 22/01 and 05/02/2027 at 14:00. The details are in lesson L01.

This lesson is among the best "paid" at the exam:

| Type of question | Exam sessions (number) | What you need |
|---|---|---|
| "The determinant of $A^3$ (or $A^4$) is…" | 06/09/2024 (4), 07/02/2025 (5), 05/02/2026 (5), 03/07/2026 (6) | Binet: $(\det A)^3$ |
| determinant and trace of a product | 16/01/2025 (3) | Binet, triangular matrices |
| determinant of $A\,{}^tA$ with $A$ not square | 03/06/2025 (9) | Binet does not apply; rank |
| matrix "reduced to row echelon form", what you can deduce | 06/09/2024 (7) | Proposition 10.1 |
| problem: "for which $k$ is the matrix invertible?" or "compute the determinant" | 24/01/2024, 06/09/2024, 07/02/2025, 15/01/2026, 05/02/2026, 03/07/2026 (problem 11, point 1) | $\det A \neq 0$ with a parameter |
| problem: the matrix of the inverse map | 10/07/2024 (problem 11, point 2) | inverse with cofactors |

Three real questions, with the worked solution.

> [!EXAM] Exam of 06/09/2024, question 7
> Let $A$ be a square matrix that, reduced to row echelon form with Gauss's algorithm, becomes $\begin{pmatrix} 1 & 1 & 1 \\ 0 & 2 & 3 \\ 0 & 0 & 1 \end{pmatrix}$. Which of the following is **not** necessarily true? (a) $\det A = 2$; (b) $\dim \Ker A = 0$; (c) $A$ is invertible; (d) for every $b \in \R^3$ the system $Ax = b$ has a unique solution; (e) $\mathrm{rank}(A) = 3$.
>
> **Solution.** The row echelon matrix has determinant $1 \cdot 2 \cdot 1 = 2$. But Gauss's algorithm can use swaps (which change the sign) and multiplications of rows by $\lambda \neq 0$ (which multiply the determinant by $\lambda$): if $s$ swaps and multiplications by $\lambda_1, \dots, \lambda_t$ were used, then $2 = (-1)^s \lambda_1 \cdots \lambda_t \det A$, that is $\det A = \frac{\pm 2}{\lambda_1 \cdots \lambda_t}$. It is not necessarily $2$: answer **(a)**. What remains true is that $\det A \neq 0$, because every move multiplies the determinant by a non-zero number. So $A$ is invertible (c), has rank 3 (e), and statements (b) and (d), which you will see in lessons L11–L16, are consequences of invertibility.

> [!EXAM] Exam of 03/07/2026, question 6
> Let $A \in M(3, \R)$ be the matrix $A = \begin{pmatrix} 1 & 0 & 2 \\ 3 & -1 & 1 \\ 2 & 0 & 5 \end{pmatrix}$. The determinant of $A^3$ is: (a) $-8$; (b) $-1$; (c) $0$; (d) $1$; (e) $8$.
>
> **Solution.** You do not compute $A^3$. By Binet $\det(A^3) = (\det A)^3$. The second column has a single non-zero number, $-1$ in position $(2, 2)$, with sign $+$: expanding along the second column,
> $$\det A = -1 \cdot \det \begin{pmatrix} 1 & 2 \\ 2 & 5 \end{pmatrix} = -(5 - 4) = -1.$$
> So $\det(A^3) = (-1)^3 = -1$: answer **(b)**. The answers $\pm 8$ are for those who mix it up with $\det(2A)$ or get the sign wrong.

> [!EXAM] Exam of 15/01/2026, problem 11, point (1)
> Consider the matrix $A = \begin{pmatrix} 1 & k^2 & 0 \\ k & k + 1 & k \\ 0 & k & 1 \end{pmatrix}$ in $M(3, \R)$, where $k$ is a real parameter. Determine for which values of $k$ the matrix $A$ is invertible.
>
> **Solution.** $A$ is invertible if and only if $\det A \neq 0$ (Proposition 10.8). I expand along the first row, where $a_{13} = 0$:
> $$\det A = 1 \cdot \det \begin{pmatrix} k + 1 & k \\ k & 1 \end{pmatrix} - k^2 \det \begin{pmatrix} k & k \\ 0 & 1 \end{pmatrix}$$
> $$= (k + 1 - k^2) - k^2 \cdot k = -k^3 - k^2 + k + 1.$$
> I group terms to factor: $-k^3 - k^2 + k + 1 = -k^2(k + 1) + (k + 1) = (k + 1)(1 - k^2) = (k + 1)(1 - k)(1 + k)$, that is
> $$\det A = -(k - 1)(k + 1)^2.$$
> It vanishes only for $k = 1$ and $k = -1$. **$A$ is invertible if and only if $k \neq 1$ and $k \neq -1$.** Check with $k = 1$: $A = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 1 \end{pmatrix}$ and the second row is the sum of the other two, so the determinant is $0$ ✓.

**The method for "for which $k$ is it invertible".**

1. Write $\det A$ as a function of $k$: Laplace along the row or column with the most zeros, or first a few moves of the third type to create zeros (it does not change the determinant).
2. **Factor** the polynomial in $k$: take out common factors, look for simple roots ($k = 0, \pm 1, \pm 2$) and divide with Ruffini (lesson L04).
3. Write the answer in the form "$A$ is invertible if and only if $k \neq \dots$". The excluded values are the ones that, in the rest of the problem, have to be studied separately (rank, solutions, eigenvalues).

**The method for $\det(A^n)$, $\det(2A^{-1})$ and the like.** Compute only $\det A$ and then combine: $\det(A^n) = (\det A)^n$, $\det(A^{-1}) = \frac 1{\det A}$, $\det(cA) = c^n \det A$ (lesson L09), $\det({}^tA) = \det A$. For example, if $A$ is $3 \times 3$ with $\det A = 4$: $\det(2A^{-1}) = 2^3 \cdot \frac 14 = 2$.

Mistakes to avoid:

- writing $\det(A^3) = 3\det A$;
- believing that the row echelon matrix has the same determinant as the starting matrix;
- applying Binet to non-square matrices;
- forgetting the transposition in the formula of the inverse, or the signs of the cofactors;
- stating "invertible for every $k$" without having factored the determinant.

> [!EXAM] The 4-page sheet
> From this lesson: the table of the three moves and their effect on the determinant; two proportional rows $\Rightarrow \det = 0$; Binet $\det(AB) = \det A \det B$, $\det(A^n) = (\det A)^n$, $\det(A^{-1}) = 1/\det A$; $\mathrm{cof}_{ij} = (-1)^{i+j}\det C_{ij}$; $A^{-1} = \frac 1{\det A}\,{}^t(\mathrm{cof}(A))$; the formula of the $2 \times 2$ inverse; "invertible $\iff \det \neq 0 \iff \rk = n$".

## Quiz

```quiz
Q: Let $A$ be a square matrix that, reduced to row echelon form with Gauss's algorithm, becomes $\begin{pmatrix} 2 & 1 & 3 \\ 0 & 1 & 4 \\ 0 & 0 & 3 \end{pmatrix}$. Which of the following statements is **not** necessarily true?
+ $\det A = 6$.
- $\det A \neq 0$.
- $A$ is invertible.
- $\rk A = 3$.
- The rows of $A$ are linearly independent.
= Moves of type (I) and (II) change the determinant (sign, factor $\lambda \neq 0$), so $\det A$ can be different from $2 \cdot 1 \cdot 3 = 6$. But every move multiplies the determinant by a non-zero number: $\det A \neq 0$, so $A$ is invertible, has rank 3 and independent rows. Similar to the exam of 06/09/2024, question 7.

Q: Let $A = \begin{pmatrix} 1 & 0 & 2 \\ 2 & -2 & 1 \\ 1 & 0 & 3 \end{pmatrix}$. The determinant of $A^3$ is:
+ $-8$
- $8$
- $-6$
- $-2$
- $64$
= Along the second column: $\det A = (-2) \cdot (+1) \cdot \det \begin{pmatrix} 1 & 2 \\ 1 & 3 \end{pmatrix} = -2 \cdot 1 = -2$. By Binet $\det(A^3) = (-2)^3 = -8$. $-6 = 3\det A$ is the classic mistake. Similar to the exams of 03/07/2026 (question 6), 05/02/2026 (question 5) and 07/02/2025 (question 5).

Q: Let $A = \begin{pmatrix} 2 & 5 & -1 \\ 0 & 1 & 3 \\ 0 & 0 & 1 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 0 & 0 \\ 4 & 3 & 0 \\ 7 & -2 & 1 \end{pmatrix}$. What is $\det(AB)$?
+ $6$
- $5$
- $1$
- $36$
- $0$
= $A$ is upper triangular with diagonal $2, 1, 1$: $\det A = 2$. $B$ is lower triangular with diagonal $1, 3, 1$: $\det B = 3$. By Binet $\det(AB) = 2 \cdot 3 = 6$, without computing the product. $5$ is the sum of the determinants. Similar to the exam of 16/01/2025, question 3.

Q: Let $A$ be a $3 \times 3$ matrix with $\det A = 4$. What is $\det(2A^{-1})$?
+ $2$
- $\frac 12$
- $8$
- $\frac 18$
- $32$
= $\det(2A^{-1}) = 2^3 \det(A^{-1}) = 8 \cdot \frac 14 = 2$ (Corollary 9.12 and Corollary 10.5). $\frac 12 = 2 \cdot \frac 14$ forgets that the factor 2 multiplies all three rows.

Q: The inverse of $\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$ is:
+ $\begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}$
- $\begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix}$
- $\begin{pmatrix} -2 & 1 \\ 5 & -3 \end{pmatrix}$
- $\begin{pmatrix} 1/3 & 1 \\ 1/5 & 1/2 \end{pmatrix}$
- $\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$
= The determinant is $6 - 5 = 1$. You swap the numbers on the diagonal, change the sign of the other two and divide by 1. Among the wrong answers: $\begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix}$ is the non-transposed cofactor matrix, the one with $\frac 13$ and $\frac 15$ inverts entry by entry, $\begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}$ does not swap the diagonal. Check: $\begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}\begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix} = I_2$.

Q: For which $k \in \R$ is the matrix $A = \begin{pmatrix} 1 & 0 & k \\ 0 & k & 1 \\ k & 1 & 0 \end{pmatrix}$ invertible?
+ For every $k \neq -1$.
- For every $k \neq 1$.
- For every $k \neq 0$ and $k \neq \pm 1$.
- For no $k$.
- For every $k \in \R$.
= Along the first row: $\det A = 1 \cdot (0 - 1) - 0 + k \cdot (0 - k^2) = -1 - k^3 = -(k + 1)(k^2 - k + 1)$. The factor $k^2 - k + 1$ has no real roots (discriminant $1 - 4 < 0$), so $\det A = 0$ only for $k = -1$. Similar to problems 11 of the exams of 07/02/2025 and 03/07/2026.

Q: Let $A$ be a $3 \times 3$ matrix with $\det A = 5$. You swap the first and third rows, then you do $R_2 \to R_2 - 4R_1$, then $R_3 \to 2R_3$. What is the determinant of the matrix obtained?
+ $-10$
- $10$
- $-5$
- $5$
- $-40$
= Swap: $-5$. Move of the third type: it stays $-5$. Third row times 2: $-10$ (Proposition 10.1).

Q: Which of these statements holds for all matrices $A, B \in M(n)$?
+ $\det(AB) = \det(BA)$.
- $AB = BA$.
- $\det(A + B) = \det A + \det B$.
- $\det(2A) = 2\det A$.
- If $A$ and $B$ are invertible, $(AB)^{-1} = A^{-1}B^{-1}$.
= By Binet $\det(AB) = \det A \det B = \det B \det A = \det(BA)$, even though $AB \neq BA$. The determinant is not additive, $\det(2A) = 2^n\det A$, and the inverse of a product is $B^{-1}A^{-1}$.

Q: Given $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}$, the determinant of $A \cdot {}^tA$ is:
+ $0$
- $6$
- It cannot be computed, since $A$ is not square.
- $36$
- $1$
= $A\,{}^tA$ is $3 \times 3$, so the determinant exists. Its columns are linear combinations of the two columns of $A$ (every column of $A\,{}^tA$ is $A$ times a vector), so its rank is at most 2 and the columns are dependent: $\det = 0$ (Proposition 10.3). $6$ is $\det({}^tA\,A)$, the product in the other order. Similar to the exam of 03/06/2025, question 9.

Q: Let $A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}$. What is the entry in position $(1, 3)$ of $A^{-1}$? Write a fraction.
N: 1/3
= $\det A = 2 \cdot 1 - 1 \cdot (0 - 1) + 0 = 3$. By Proposition 10.8, $(A^{-1})_{13} = \frac{\mathrm{cof}_{31}}{\det A}$: watch out for the indices swapped by the transposition. $\mathrm{cof}_{31} = +\det \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} = 1$, so $(A^{-1})_{13} = \frac 13$. If you use $\mathrm{cof}_{13} = -1$ you find $-\frac 13$, which is instead entry $(3, 1)$.
```

## Exercises

::: exercise intermediate Exercise 10.9 of the handouts: an inverse with a parameter
Determine for which values of the parameter $k \in \R$ the matrix $A = \begin{pmatrix} k - 5 & 3 \\ -2 & k \end{pmatrix}$ is invertible. For each $k$ for which the matrix is invertible, find the inverse matrix.
::: solution
**Determinant.** $\det A = (k - 5) \cdot k - 3 \cdot (-2) = k^2 - 5k + 6$. It is a second-degree polynomial with roots $k = \frac{5 \pm \sqrt{25 - 24}}2 = \frac{5 \pm 1}2$, that is $k = 3$ and $k = 2$:
$$\det A = (k - 2)(k - 3).$$
**Invertibility.** By Proposition 10.8, $A$ is invertible if and only if $\det A \neq 0$, that is **for $k \neq 2$ and $k \neq 3$**.

**Inverse.** With the formula for $2 \times 2$ matrices (I swap the diagonal, change the sign of the other two, divide by the determinant):
$$A^{-1} = \frac 1{(k - 2)(k - 3)} \begin{pmatrix} k & -3 \\ 2 & k - 5 \end{pmatrix}.$$
**Check:**
$$\begin{pmatrix} k - 5 & 3 \\ -2 & k \end{pmatrix} \begin{pmatrix} k & -3 \\ 2 & k - 5 \end{pmatrix} = \begin{pmatrix} k^2 - 5k + 6 & -3(k - 5) + 3(k - 5) \\ -2k + 2k & 6 + k^2 - 5k \end{pmatrix}$$

$$= (k^2 - 5k + 6)\, I_2,$$
and dividing by $(k - 2)(k - 3) = k^2 - 5k + 6$ you get $I_2$ ✓. For example with $k = 0$: $A = \begin{pmatrix} -5 & 3 \\ -2 & 0 \end{pmatrix}$ and $A^{-1} = \frac 16 \begin{pmatrix} 0 & -3 \\ 2 & -5 \end{pmatrix}$.
:::

::: exercise intermediate Exercise 10.10 of the handouts: an integer $3 \times 3$
Prove that the matrix $B = \begin{pmatrix} 2 & -1 & 0 \\ -2 & 1 & 1 \\ 1 & -1 & 3 \end{pmatrix}$ is invertible and compute its inverse.
::: solution
**Invertibility.** Along the first row (signs $+, -, +$, and $b_{13} = 0$):
$$\det B = 2 \det \begin{pmatrix} 1 & 1 \\ -1 & 3 \end{pmatrix} - (-1) \det \begin{pmatrix} -2 & 1 \\ 1 & 3 \end{pmatrix} + 0$$

$$= 2 \cdot (3 + 1) + (-6 - 1) = 8 - 7 = 1.$$
$\det B = 1 \neq 0$: $B$ is invertible, and $B^{-1} = {}^t(\mathrm{cof}(B))$ (you divide by 1).

**The nine cofactors.**

| | column 1 | column 2 | column 3 |
|---|---|---|---|
| row 1 | $+\det \begin{pmatrix} 1 & 1 \\ -1 & 3 \end{pmatrix} = 4$ | $-\det \begin{pmatrix} -2 & 1 \\ 1 & 3 \end{pmatrix} = 7$ | $+\det \begin{pmatrix} -2 & 1 \\ 1 & -1 \end{pmatrix} = 1$ |
| row 2 | $-\det \begin{pmatrix} -1 & 0 \\ -1 & 3 \end{pmatrix} = 3$ | $+\det \begin{pmatrix} 2 & 0 \\ 1 & 3 \end{pmatrix} = 6$ | $-\det \begin{pmatrix} 2 & -1 \\ 1 & -1 \end{pmatrix} = 1$ |
| row 3 | $+\det \begin{pmatrix} -1 & 0 \\ 1 & 1 \end{pmatrix} = -1$ | $-\det \begin{pmatrix} 2 & 0 \\ -2 & 1 \end{pmatrix} = -2$ | $+\det \begin{pmatrix} 2 & -1 \\ -2 & 1 \end{pmatrix} = 0$ |

For example $\mathrm{cof}_{12}$: I delete row 1 and column 2, what remains is $\begin{pmatrix} -2 & 1 \\ 1 & 3 \end{pmatrix}$ with determinant $-6 - 1 = -7$; the sign in position $(1, 2)$ is $-$, so $\mathrm{cof}_{12} = 7$.

**Transpose.**
$$\mathrm{cof}(B) = \begin{pmatrix} 4 & 7 & 1 \\ 3 & 6 & 1 \\ -1 & -2 & 0 \end{pmatrix} \quad\Longrightarrow\quad B^{-1} = {}^t(\mathrm{cof}(B)) = \begin{pmatrix} 4 & 3 & -1 \\ 7 & 6 & -2 \\ 1 & 1 & 0 \end{pmatrix}.$$

**Check** of $BB^{-1}$ row by row:
- row $(2, -1, 0)$: $8 - 7 = 1$, $\ 6 - 6 = 0$, $\ -2 + 2 = 0$;
- row $(-2, 1, 1)$: $-8 + 7 + 1 = 0$, $\ -6 + 6 + 1 = 1$, $\ 2 - 2 + 0 = 0$;
- row $(1, -1, 3)$: $4 - 7 + 3 = 0$, $\ 3 - 6 + 3 = 0$, $\ -1 + 2 + 0 = 1$.

You get $I_3$ ✓. Since $\det B = 1$, the inverse has only integer numbers.
:::

::: exercise intermediate Exercise 10.11 of the handouts: a complex inverse
Compute the inverse of the matrix $C = \begin{pmatrix} 2 - i & 0 \\ 3 & 2 + i \end{pmatrix}$.
::: solution
**Determinant.** $C$ is lower triangular: $\det C = (2 - i)(2 + i) = 4 - i^2 = 4 + 1 = 5 \neq 0$. So $C$ is invertible (Proposition 10.8 holds over any field, $\C$ included).

**Inverse** with the formula for $2 \times 2$ matrices ($a = 2 - i$, $b = 0$, $c = 3$, $d = 2 + i$):
$$C^{-1} = \frac 15 \begin{pmatrix} 2 + i & 0 \\ -3 & 2 - i \end{pmatrix} = \begin{pmatrix} \frac 25 + \frac 15 i & 0 \\ -\frac 35 & \frac 25 - \frac 15 i \end{pmatrix}.$$

**Check:**
$$\begin{pmatrix} 2 - i & 0 \\ 3 & 2 + i \end{pmatrix} \begin{pmatrix} 2 + i & 0 \\ -3 & 2 - i \end{pmatrix} = \begin{pmatrix} (2 - i)(2 + i) & 0 \\ 3(2 + i) - 3(2 + i) & (2 + i)(2 - i) \end{pmatrix} = \begin{pmatrix} 5 & 0 \\ 0 & 5 \end{pmatrix},$$
and divided by 5 it gives $I_2$ ✓. Notice that the inverse of a lower triangular matrix is again lower triangular, with the inverses on the diagonal: $\frac 1{2 - i} = \frac{2 + i}5$.
:::

::: exercise basic Determinants with the Gauss moves
Compute with the Gauss moves: (a) $\det \begin{pmatrix} 0 & 2 & 1 \\ 1 & 1 & 1 \\ 2 & 4 & 5 \end{pmatrix}$; (b) $\det \begin{pmatrix} 1 & 2 & 1 & 0 \\ 2 & 5 & 3 & 1 \\ 1 & 2 & 2 & 1 \\ 0 & 1 & 1 & 3 \end{pmatrix}$.
::: solution
(a) It is the matrix $B$ of the section on the method: a swap $R_1 \leftrightarrow R_2$, then $R_3 \to R_3 - 2R_1$ and $R_3 \to R_3 - R_2$ lead to a triangular matrix with diagonal $1, 2, 2$. Determinant $-(1 \cdot 2 \cdot 2) = -4$.

(b) Only moves of the third type, which do not change the determinant:
$$\xrightarrow{\substack{R_2 \to R_2 - 2R_1 \\ R_3 \to R_3 - R_1}} \begin{pmatrix} 1 & 2 & 1 & 0 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 1 & 1 & 3 \end{pmatrix} \xrightarrow{R_4 \to R_4 - R_2} \begin{pmatrix} 1 & 2 & 1 & 0 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 2 \end{pmatrix}.$$
Triangular with diagonal $1, 1, 1, 2$: the determinant is $2$.
:::

::: exercise basic Zero determinants without calculations
Explain why these matrices have zero determinant, without computing it:
$$A = \begin{pmatrix} 3 & 1 & 4 \\ 1 & 5 & 9 \\ 3 & 1 & 4 \end{pmatrix}, \quad B = \begin{pmatrix} 2 & -6 & 1 \\ 1 & -3 & 7 \\ 0 & 0 & 2 \end{pmatrix}, \quad C = \begin{pmatrix} 1 & 0 & 1 \\ 2 & 1 & 3 \\ 3 & 1 & 4 \end{pmatrix}.$$
::: solution
- $A$: the first and third rows are equal. The first is a combination of the others ($A_1 = 0 \cdot A_2 + 1 \cdot A_3$), so $\det A = 0$ (Proposition 10.3). Or: $R_3 \to R_3 - R_1$ creates a zero row without changing the determinant.
- $B$: the second column is $-3$ times the first, ${}^t(-6, -3, 0) = -3 \cdot {}^t(2, 1, 0)$. A column that is a combination of the others: $\det B = 0$.
- $C$: the third row is the sum of the first two, $(1 + 2, 0 + 1, 1 + 3) = (3, 1, 4)$. So $\det C = 0$. Here the third column is also the sum of the first two. In general, if the rows of a square matrix are dependent so are the columns, because row rank and column rank are equal (Proposition 8.6), even though the relation between the columns can have different coefficients.
:::

::: exercise intermediate Binet and its consequences
Let $A, B \in M(3, \R)$ with $\det A = 2$ and $\det B = -3$. Compute: (a) $\det(AB)$; (b) $\det(A^2B)$; (c) $\det(A^{-1})$; (d) $\det({}^tA\,B^{-1})$; (e) $\det(3AB)$; (f) $\det(B^4)$.
::: solution
(a) Binet: $2 \cdot (-3) = -6$.

(b) $\det(A^2B) = (\det A)^2 \det B = 4 \cdot (-3) = -12$.

(c) $\det(A^{-1}) = \frac 12$ (Corollary 10.5).

(d) $\det({}^tA) = 2$ and $\det(B^{-1}) = -\frac 13$, so $\det({}^tA\,B^{-1}) = 2 \cdot \left(-\frac 13\right) = -\frac 23$.

(e) $3AB$ is $3 \times 3$: $\det(3AB) = 3^3 \det(AB) = 27 \cdot (-6) = -162$.

(f) $\det(B^4) = (-3)^4 = 81$.
:::

::: exercise hard Matrices with $A^2 = A$ and with $A^2 = 0$
(a) Prove that if $A^2 = 0$ then $A$ is not invertible, and find a $2 \times 2$ example with $A \neq 0$. (b) Prove that if $A^2 = A$ then $\det A$ is $0$ or $1$. (c) Prove that if $A^2 = A$ and $A$ is invertible, then $A = I_n$.
::: solution
(a) By Binet $(\det A)^2 = \det(A^2) = \det(0) = 0$, so $\det A = 0$ and $A$ is not invertible (Proposition 10.8). Example: $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$, with $A^2 = \begin{pmatrix} 0 \cdot 0 + 1 \cdot 0 & 0 \cdot 1 + 1 \cdot 0 \\ 0 & 0 \end{pmatrix} = 0$.

(b) $(\det A)^2 = \det(A^2) = \det A$, that is $\det A(\det A - 1) = 0$: $\det A = 0$ or $\det A = 1$.

(c) I multiply $A^2 = A$ on the left by $A^{-1}$: $A^{-1}(AA) = A^{-1}A$. On the left, by associativity, $(A^{-1}A)A = I_nA = A$; on the right $I_n$. So $A = I_n$. Example of $A^2 = A$ that is not invertible: $\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$, which has determinant $0$.
:::

::: exercise hard The inverse of a product and of the transpose
Let $A, B \in M(n)$ be invertible. Prove that (a) $AB$ is invertible and $(AB)^{-1} = B^{-1}A^{-1}$; (b) ${}^tA$ is invertible and $({}^tA)^{-1} = {}^t(A^{-1})$ (Martelli, Exercise 3.9).
::: solution
(a) It is enough to check that $B^{-1}A^{-1}$ works as an inverse, on both sides (Martelli, Proposition 3.4.5):
$$(AB)(B^{-1}A^{-1}) = A(BB^{-1})A^{-1} = AI_nA^{-1} = AA^{-1} = I_n,$$
$$(B^{-1}A^{-1})(AB) = B^{-1}(A^{-1}A)B = B^{-1}B = I_n.$$
Only associativity is used. With determinants you also see that $\det(AB) = \det A \det B \neq 0$.

(b) I use ${}^t(XY) = {}^tY\,{}^tX$ (Exercise 8.14):
$${}^tA\ {}^t(A^{-1}) = {}^t(A^{-1}A) = {}^tI_n = I_n, \qquad {}^t(A^{-1})\ {}^tA = {}^t(AA^{-1}) = {}^tI_n = I_n.$$
So ${}^t(A^{-1})$ is the inverse of ${}^tA$.
:::

::: exercise intermediate Proposition 10.7 on an example
Let $A = \begin{pmatrix} 2 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 3 & 1 \end{pmatrix}$. (a) Compute $\mathrm{cof}(A)$. (b) Check that $A \cdot {}^t(\mathrm{cof}(A)) = \det(A) I_3$. (c) Write $A^{-1}$.
::: solution
(a) Cofactor by cofactor (I delete row $i$ and column $j$, then chessboard sign):
- row 1: $+\det \begin{pmatrix} 1 & 0 \\ 3 & 1 \end{pmatrix} = 1$, $\ -\det \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = -1$, $\ +\det \begin{pmatrix} 1 & 1 \\ 0 & 3 \end{pmatrix} = 3$;
- row 2: $-\det \begin{pmatrix} 0 & 1 \\ 3 & 1 \end{pmatrix} = -(0 - 3) = 3$, $\ +\det \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix} = 2$, $\ -\det \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix} = -6$;
- row 3: $+\det \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = -1$, $\ -\det \begin{pmatrix} 2 & 1 \\ 1 & 0 \end{pmatrix} = -(0 - 1) = 1$, $\ +\det \begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix} = 2$.

$$\mathrm{cof}(A) = \begin{pmatrix} 1 & -1 & 3 \\ 3 & 2 & -6 \\ -1 & 1 & 2 \end{pmatrix}, \qquad {}^t(\mathrm{cof}(A)) = \begin{pmatrix} 1 & 3 & -1 \\ -1 & 2 & 1 \\ 3 & -6 & 2 \end{pmatrix}.$$

(b) $\det A = 2 \cdot 1 - 0 + 1 \cdot 3 = 5$ (first row times its cofactors). The product, row by column:
- row $(2, 0, 1)$: $2 + 3 = 5$, $\ 6 - 6 = 0$, $\ -2 + 2 = 0$;
- row $(1, 1, 0)$: $1 - 1 = 0$, $\ 3 + 2 = 5$, $\ -1 + 1 = 0$;
- row $(0, 3, 1)$: $-3 + 3 = 0$, $\ 6 - 6 = 0$, $\ 3 + 2 = 5$.

$A \cdot {}^t(\mathrm{cof}(A)) = 5I_3$ ✓: on the diagonal the Laplace expansions, off the diagonal the sums with the cofactors "of another row", which give $0$.

(c) $A^{-1} = \frac 15 \begin{pmatrix} 1 & 3 & -1 \\ -1 & 2 & 1 \\ 3 & -6 & 2 \end{pmatrix}$.
:::

::: exercise exam Invertibility with a parameter and inverse
Consider the matrix $A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & 2 \\ k & 0 & 3 \end{pmatrix}$, with $k \in \R$ (tutoring exercise sheet 1, 2025, exercise 9). (1) Determine for which $k$ the matrix is invertible. (2) For those values compute $A^{-1}$. (3) Check $AA^{-1} = I_3$ for $k = 0$.
::: solution
(1) Along the first column (signs $+, -, +$, and $a_{21} = 0$):
$$\det A = 1 \cdot \det \begin{pmatrix} 2 & 2 \\ 0 & 3 \end{pmatrix} - 0 + k \det \begin{pmatrix} 1 & 0 \\ 2 & 2 \end{pmatrix} = 6 + 2k = 2(k + 3).$$
$A$ is invertible if and only if $k \neq -3$.

(2) The cofactors:
- row 1: $+\det \begin{pmatrix} 2 & 2 \\ 0 & 3 \end{pmatrix} = 6$, $\ -\det \begin{pmatrix} 0 & 2 \\ k & 3 \end{pmatrix} = -(0 - 2k) = 2k$, $\ +\det \begin{pmatrix} 0 & 2 \\ k & 0 \end{pmatrix} = -2k$;
- row 2: $-\det \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix} = -3$, $\ +\det \begin{pmatrix} 1 & 0 \\ k & 3 \end{pmatrix} = 3$, $\ -\det \begin{pmatrix} 1 & 1 \\ k & 0 \end{pmatrix} = -(0 - k) = k$;
- row 3: $+\det \begin{pmatrix} 1 & 0 \\ 2 & 2 \end{pmatrix} = 2$, $\ -\det \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix} = -2$, $\ +\det \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix} = 2$.

Transposing and dividing by $2(k + 3)$:
$$A^{-1} = \frac 1{2(k + 3)} \begin{pmatrix} 6 & -3 & 2 \\ 2k & 3 & -2 \\ -2k & k & 2 \end{pmatrix}, \qquad k \neq -3.$$

(3) With $k = 0$: $A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & 2 \\ 0 & 0 & 3 \end{pmatrix}$ and $A^{-1} = \frac 16 \begin{pmatrix} 6 & -3 & 2 \\ 0 & 3 & -2 \\ 0 & 0 & 2 \end{pmatrix}$. Product $A \cdot \begin{pmatrix} 6 & -3 & 2 \\ 0 & 3 & -2 \\ 0 & 0 & 2 \end{pmatrix}$:
- row $(1, 1, 0)$: $6$, $\ -3 + 3 = 0$, $\ 2 - 2 = 0$;
- row $(0, 2, 2)$: $0$, $\ 6$, $\ -4 + 4 = 0$;
- row $(0, 0, 3)$: $0$, $0$, $6$.

It is $6I_3$, and divided by 6 it gives $I_3$ ✓.
:::

::: exercise exam For which $k$ is it invertible? And the inverse for $k = 1$
Let $A = \begin{pmatrix} 1 & k & 0 \\ k & 1 & k \\ 0 & k & 1 \end{pmatrix}$ with $k \in \R$. (1) Determine for which $k$ the matrix $A$ is invertible. (2) Setting $k = 1$, compute $A^{-1}$.
::: solution
(1) Along the first row:
$$\det A = 1 \cdot \det \begin{pmatrix} 1 & k \\ k & 1 \end{pmatrix} - k \det \begin{pmatrix} k & k \\ 0 & 1 \end{pmatrix} + 0 = (1 - k^2) - k \cdot k = 1 - 2k^2.$$
It vanishes for $k^2 = \frac 12$, that is $k = \pm \frac 1{\sqrt 2} = \pm \frac{\sqrt 2}2$. **$A$ is invertible if and only if $k \neq \frac{\sqrt 2}2$ and $k \neq -\frac{\sqrt 2}2$.**

(2) With $k = 1$: $A = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 1 & 1 \\ 0 & 1 & 1 \end{pmatrix}$ and $\det A = 1 - 2 = -1$. The cofactors:
- row 1: $+(1 - 1) = 0$, $\ -(1 - 0) = -1$, $\ +(1 - 0) = 1$;
- row 2: $-(1 - 0) = -1$, $\ +(1 - 0) = 1$, $\ -(1 - 0) = -1$;
- row 3: $+(1 - 0) = 1$, $\ -(1 - 0) = -1$, $\ +(1 - 1) = 0$.

$\mathrm{cof}(A) = \begin{pmatrix} 0 & -1 & 1 \\ -1 & 1 & -1 \\ 1 & -1 & 0 \end{pmatrix}$ is symmetric (like $A$), so transposing changes nothing. Dividing by $-1$:
$$A^{-1} = \begin{pmatrix} 0 & 1 & -1 \\ 1 & -1 & 1 \\ -1 & 1 & 0 \end{pmatrix}.$$
Check of the first row of $AA^{-1}$: $(1, 1, 0)$ times the columns gives $0 + 1 = 1$, $\ 1 - 1 = 0$, $\ -1 + 1 = 0$ ✓.
:::

::: exercise exam The matrix of a transformation and its inverse
Let $A = \begin{pmatrix} 1 & 0 & 1 \\ 2 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$, the matrix that sends the vector ${}^t(x, y, z)$ to ${}^t(x + z,\ 2x + y,\ y + z)$. (1) Determine whether $A$ is invertible. (2) Compute $A^{-1}$. (3) Find the vector ${}^t(x, y, z)$ that is sent to ${}^t(1, 1, 1)$.
::: solution
(1) Along the first row: $\det A = 1 \cdot (1 - 0) - 0 + 1 \cdot (2 - 0) = 3 \neq 0$: invertible.

(2) The cofactors:
- row 1: $+\det \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix} = 1$, $\ -\det \begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix} = -2$, $\ +\det \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix} = 2$;
- row 2: $-\det \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} = 1$, $\ +\det \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = 1$, $\ -\det \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = -1$;
- row 3: $+\det \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = -1$, $\ -\det \begin{pmatrix} 1 & 1 \\ 2 & 0 \end{pmatrix} = 2$, $\ +\det \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix} = 1$.

$$\mathrm{cof}(A) = \begin{pmatrix} 1 & -2 & 2 \\ 1 & 1 & -1 \\ -1 & 2 & 1 \end{pmatrix}, \qquad A^{-1} = \frac 13 \begin{pmatrix} 1 & 1 & -1 \\ -2 & 1 & 2 \\ 2 & -1 & 1 \end{pmatrix}.$$
Check of the first row of $AA^{-1}$ (without the factor $\frac 13$): $(1, 0, 1)$ times the columns gives $1 + 2 = 3$, $\ 1 - 1 = 0$, $\ -1 + 1 = 0$ ✓.

(3) I look for $v$ with $Av = {}^t(1, 1, 1)$: multiplying on the left by $A^{-1}$, $v = A^{-1}\,{}^t(1, 1, 1) = \frac 13\,{}^t(1 + 1 - 1,\ -2 + 1 + 2,\ 2 - 1 + 1) = {}^t\left(\frac 13, \frac 13, \frac 23\right)$. Check: $x + z = \frac 13 + \frac 23 = 1$, $2x + y = \frac 23 + \frac 13 = 1$, $y + z = \frac 13 + \frac 23 = 1$ ✓. In lessons L14–L16 this matrix will be the matrix associated with a linear map, and $A^{-1}$ that of the inverse map, as in problem 11 of the exam of 10/07/2024.
:::

## Review questions

::: question How does the determinant change with the three Gauss moves?
Swapping two rows changes its sign; multiplying a row by $\lambda$ multiplies it by $\lambda$; adding to a row a multiple of another does not change it. The same rules hold for columns.
:::

::: question Why does a matrix with two equal rows have zero determinant?
Swapping the two equal rows the matrix does not change, but the determinant changes sign: $\det A = -\det A$, so $\det A = 0$.
:::

::: question How do you compute a determinant with Gauss's method?
You make the matrix triangular with moves of the third type (and swaps if needed), you multiply the diagonal and change the sign for every swap; if you used moves of the second type you divide by their factors.
:::

::: question What does Proposition 10.3 say?
$\det A = 0$ if and only if a row (or a column) of $A$ is a linear combination of the others.
:::

::: question State Binet's theorem and two of its consequences.
If $A$ and $B$ are square of the same order, $\det(AB) = \det A \cdot \det B$. Consequences: $\det(A^k) = (\det A)^k$ and $\det(AB) = \det(BA)$; moreover $\det(A^{-1}) = \frac 1{\det A}$.
:::

::: question What does it mean that a matrix is invertible?
That it is square and there exists $B$ with $AB = BA = I_n$; this $B$ is unique and is written $A^{-1}$.
:::

::: question Why does an invertible matrix have non-zero determinant?
From $AA^{-1} = I_n$ and Binet: $\det A \cdot \det(A^{-1}) = \det I_n = 1$, and a product equal to 1 cannot have a zero factor.
:::

::: question What is the cofactor $\mathrm{cof}_{ij}$?
The number $(-1)^{i+j}\det C_{ij}$, where $C_{ij}$ is the submatrix obtained by deleting row $i$ and column $j$. With cofactors the Laplace expansion becomes $\det A = \sum_j a_{ij}\,\mathrm{cof}_{ij}$.
:::

::: question What is $\sum_j a_{ij}\,\mathrm{cof}_{kj}$ with $i \neq k$, and why?
It is $0$: it is the expansion along row $k$ of the matrix with row $i$ in place of row $k$, which has two equal rows.
:::

::: question What does Proposition 10.7 say?
$A \cdot {}^t(\mathrm{cof}(A)) = \det(A) I_n = {}^t(\mathrm{cof}(A)) \cdot A$.
:::

::: question When is a square matrix invertible, and what is the formula of the inverse?
If and only if $\det A \neq 0$; then $A^{-1} = \frac 1{\det A}\,{}^t(\mathrm{cof}(A))$ (Proposition 10.8, for $n \ge 2$).
:::

::: question What is the inverse of a $2 \times 2$ matrix?
$\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac 1{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$, if $ad - bc \neq 0$.
:::

::: question How do you answer "for which $k$ is the matrix invertible"?
You compute $\det A$ as a function of $k$, factor it, find the $k$ that make it zero and answer "invertible if and only if $k$ is different from those values".
:::

## Glossary

```glossary
Gauss move | One of the three row operations: swap ($R_i \leftrightarrow R_j$), multiplication by $\lambda$ ($R_i \to \lambda R_i$), adding a multiple of another row ($R_i \to R_i + \lambda R_j$).
Effect on the determinant | Swap: changes sign; row times $\lambda$: determinant times $\lambda$; adding a multiple: unchanged.
Gauss's method for the determinant | Making the matrix triangular with the moves and multiplying the diagonal, taking swaps and factors into account.
Dependent rows | Rows one of which is a linear combination of the others; it happens if and only if $\det A = 0$.
Binet's theorem | $\det(AB) = \det A \cdot \det B$ for square matrices of the same order.
Invertible matrix | Square matrix $A$ for which there exists $B$ with $AB = BA = I_n$.
Inverse matrix $A^{-1}$ | The only $B$ with $AB = BA = I_n$; $\det(A^{-1}) = 1/\det A$.
Cofactor $\mathrm{cof}_{ij}$ | $(-1)^{i+j}\det C_{ij}$: the coefficient of $a_{ij}$ in the Laplace expansion.
Cofactor matrix $\mathrm{cof}(A)$ | The matrix that has $\mathrm{cof}_{ij}$ in place $(i, j)$.
Proposition 10.7 | $A\,{}^t(\mathrm{cof}(A)) = \det(A)I_n = {}^t(\mathrm{cof}(A))\,A$.
Invertibility criterion | A square $A$ is invertible if and only if $\det A \neq 0$.
Formula of the inverse | $A^{-1} = \frac 1{\det A}\,{}^t(\mathrm{cof}(A))$; for $2 \times 2$ matrices, $\frac 1{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$.
Inverse of a product | $(AB)^{-1} = B^{-1}A^{-1}$, with the order reversed.
Maximum rank | For $A \in M(n)$: $\rk A = n$ if and only if $\det A \neq 0$.
```

## Checklist

```checklist
- I know how the determinant changes with each of the three Gauss moves, for rows and for columns.
- I can compute a $3 \times 3$ or $4 \times 4$ determinant by making the matrix triangular, counting the swaps.
- I recognise at a glance rows or columns that are equal, proportional or sums of others, and I know that then $\det A = 0$.
- I can state Binet's theorem and use it for $\det(A^k)$, $\det(AB)$, $\det(BA)$.
- I know what invertible means and that $\det(A^{-1}) = 1/\det A$.
- I can compute the cofactor matrix and check $A\,{}^t(\mathrm{cof}(A)) = \det(A)I_n$.
- I can invert a $2 \times 2$ from memory and a $3 \times 3$ with cofactors, with the final check.
- I can say for which values of a parameter a matrix is invertible, by factoring the determinant.
- I can avoid the traps: row echelon matrix, Binet with non-square matrices, forgotten transposition.
- I can combine $\det(cA) = c^n \det A$, Binet and the inverse in a single formula, such as $\det(2A^{-1})$.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 10 "Matrici III", pp. 46–49: sections 10.A (more properties of the determinant), 10.B (cofactors), 10.C (the inverse of a matrix) and 10.D (exercises) are followed in order, with the page next to each heading; propositions, theorems, examples and exercises keep their numbering (Propositions 10.1, 10.3, 10.7, 10.8, Theorem 10.4, Corollary 10.5, Definition 10.6, Example 10.2, Exercises 10.9, 10.10, 10.11). For the recaps: lesson 9 (Propositions 9.3, 9.5, 9.10, 9.11, Corollary 9.12) and lesson 11 (notation of the Gauss moves, Definition 11.2).
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §3.3.5 (Proposition 3.3.7), §3.3.7 (Proposition 3.3.12), §3.3.9 (Proposition 3.3.15), §3.4.5 (invertible matrices, Proposition 3.4.5), §3.4.6 (Theorem 3.4.7, Corollary 3.4.8), §3.4.7 (Propositions 3.4.10–3.4.12, Example 3.4.13), §3.4.8, Exercise 3.9.
- **Exam**: papers of the Linear Algebra exams from 24/01/2024 to 07/09/2026 (2025/26 Moodle, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); reported with my own solution: question 7 of 06/09/2024, question 6 of 03/07/2026 and problem 11 (point 1) of 15/01/2026; the others are cited by number. Tutoring exercise sheet 1 (27/10/2025), exercise 9.
- The **"Beyond the handouts"** parts (definition of invertible matrix and uniqueness of the inverse, link with the rank, check of Binet for $2 \times 2$ matrices, methods for the exam, unnumbered exercises) are additions in these notes to connect the lesson to the rest of the course and to the exam.
