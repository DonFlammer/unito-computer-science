---
course: MDAG
module: AG
lesson: L09
title: Matrices II
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Part 2 · Linear Algebra and Geometry · Channels A, B and C · Lesson L09
description: >-
  Notes on lesson L09 of Linear Algebra and Geometry (MDAG, part 2): the determinant of a square matrix defined with
  permutations, the formulas for 2×2 and 3×3 matrices, triangular matrices and the identity matrix, the Laplace
  expansion and the first properties of the determinant, with exam-style quizzes and worked exercises.
lede: >-
  The determinant is a number computed from a square matrix that tells you a great deal about it. Here you learn to
  compute it in all the ways you need: the definition with permutations, the formulas for $2 \times 2$ and
  $3 \times 3$, the easy case of triangular matrices, the Laplace expansion along the handiest row or column, and
  what happens when you multiply a row by a number.
material: handouts
facts:
  Handouts: lesson 9 · pp. 41–45
  Book: Martelli, §3.3.1–3.3.4 and §3.3.10
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 100–130 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 9 "Matrici II"; B. Martelli, Geometria e algebra lineare, §3.3.1–3.3.4, §3.3.10 and §3.4.6
italian_file: L09_matrici_2.html
html_notes: notes/MDAG/L09_matrices_2.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L09_matrici_2.md
---

## In brief

- The **determinant** $\det A$ is a number associated with every **square** matrix. For non-square matrices it does not exist.
- For $2 \times 2$ matrices: $\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$. In absolute value it is the area of the parallelogram whose sides are the columns.
- The general definition is a sum over all the $n!$ **permutations** $\sigma$ of $\{1, \dots, n\}$: each term is a product $a_{1\sigma(1)} \cdots a_{n\sigma(n)}$ that takes one number from each row and from each column, with the sign $\sgn(\sigma) = \pm 1$.
- For $3 \times 3$ matrices there are six terms, three with plus and three with minus (you remember them with Sarrus' rule).
- For a **triangular** matrix the determinant is the product of the numbers on the diagonal; in particular $\det I_n = 1$. Moreover $\det({}^tA) = \det A$.
- **Laplace expansion**: $\det A = \sum_j (-1)^{i+j} a_{ij} \det C_{ij}$ along any row $i$, and the same along a column. The signs $(-1)^{i+j}$ go **like a chessboard**; the row or column with the most zeros is the handiest.
- A row (or column) of zeros gives $\det A = 0$; multiplying a row by $c$ multiplies the determinant by $c$; so $\det(cA) = c^n \det A$.
- At the exam: "the determinant of $A$ is…" with $4 \times 4$ or $5 \times 5$ matrices full of zeros, with $\pi$ and $e$ to factor out, or the trap of the non-square matrix.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## The determinant of a square matrix (pp. 41–42)

### The $2 \times 2$ case: a number that measures an area

Take the matrix $A = \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix}$ and draw its columns $A^1 = {}^t(3, 1)$ and $A^2 = {}^t(1, 2)$ as arrows in the plane. Together they form a parallelogram. How big is it?

```graph
title: The parallelogram with sides ${}^t(3, 1)$ and ${}^t(1, 2)$ has area $3 \cdot 2 - 1 \cdot 1 = 5$
x: -0.5 4.5
y: -0.5 3.5
polygon: 0 0 3 1 4 3 1 2 | green
vector: 3 1 | accent | thick | $A^1$ | se
vector: 1 2 | blue | thick | $A^2$ | nw
```

The parallelogram lies inside the rectangle $[0, 4] \times [0, 3]$, of area $12$. Removing the leftover pieces (two triangles of area $\frac{3 \cdot 1}2$, two of area $\frac{1 \cdot 2}2$ and two small $1 \times 1$ squares) what remains is $12 - 3 - 2 - 2 = 5$. You get the same number in one go with the formula

$$\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc, \qquad \det \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix} = 3 \cdot 2 - 1 \cdot 1 = 5.$$

This number is the **determinant**. For larger matrices the formula gets more complicated, and to write it you need permutations.

> [!BEYOND] · the determinant measures areas and volumes
> Martelli (§3.3.10) shows that for a real $2 \times 2$ matrix $|\det A|$ is the area of the parallelogram whose sides are the two columns, and for a $3 \times 3$ one it is the volume of the parallelepiped whose edges are the three columns. The **sign** tells how the columns are oriented: if you swap the two columns you get $\det \begin{pmatrix} 1 & 3 \\ 2 & 1 \end{pmatrix} = 1 - 6 = -5$, same area but opposite sign. If the columns are parallel, the parallelogram gets squashed onto a segment and the determinant is $0$. We come back to this at the end of the lesson, with an interactive tool.

### Permutations and sign

A **permutation** of $\{1, \dots, n\}$ is a way of lining up the numbers from 1 to $n$ again, each one once and only once. The handouts write a permutation $\sigma$ by listing its values in square brackets:

$$\sigma = [\sigma(1)\ \sigma(2)\ \cdots\ \sigma(n)].$$

For example $\sigma = [2\ 3\ 1]$ is the permutation with $\sigma(1) = 2$, $\sigma(2) = 3$, $\sigma(3) = 1$. The set of all permutations of $\{1, \dots, n\}$ is called $S_n$ and has $n! = 1 \cdot 2 \cdots n$ elements (you will see them in detail in the Discrete Mathematics part of the course): $S_2$ has $2! = 2$ of them, $S_3$ has $3! = 6$, $S_4$ has $4! = 24$.

- A **transposition** is a permutation that swaps two elements and leaves all the others where they are, like $[2\ 1\ 3]$ (swaps 1 and 2) or $[3\ 2\ 1]$ (swaps 1 and 3).
- Every permutation is obtained from $[1\ 2\ \cdots\ n]$ with a sequence of swaps. If $k$ are needed, the **sign** is $\sgn(\sigma) = (-1)^k$: $+1$ if the number of swaps is even, $-1$ if it is odd. You can reach the same permutation with different sequences, but the number of swaps always has the same parity (Discrete Mathematics proves it), so the sign is well defined.
- $\sgn(\mathrm{id}) = +1$ (zero swaps) and every transposition has sign $-1$.

The six permutations of $S_3$, with the number of swaps (of two places in the list) that produce them from $[1\ 2\ 3]$:

| $\sigma$ | How you get it from $[1\ 2\ 3]$ | Swaps | $\sgn(\sigma)$ |
|---|---|--:|--:|
| $[1\ 2\ 3] = \mathrm{id}$ | no swap | 0 | $+1$ |
| $[1\ 3\ 2]$ | I swap the second and third place | 1 | $-1$ |
| $[3\ 2\ 1]$ | I swap the first and third place | 1 | $-1$ |
| $[2\ 1\ 3]$ | I swap the first and second place | 1 | $-1$ |
| $[2\ 3\ 1]$ | $[1\ 2\ 3] \to [2\ 1\ 3] \to [2\ 3\ 1]$ | 2 | $+1$ |
| $[3\ 1\ 2]$ | $[1\ 2\ 3] \to [1\ 3\ 2] \to [3\ 1\ 2]$ | 2 | $+1$ |

> [!BEYOND] · the sign by counting inversions
> A quick way to find the sign: count the **inversions**, that is the pairs of numbers in which a larger number comes before a smaller one. If their number is even the sign is $+1$, if odd it is $-1$. In $[3\ 1\ 2]$ the inversions are $(3, 1)$ and $(3, 2)$: two, sign $+1$. In $[2\ 1\ 4\ 3]$ they are $(2, 1)$ and $(4, 3)$: sign $+1$. In $[3\ 2\ 1]$ they are $(3, 2)$, $(3, 1)$, $(2, 1)$: three, sign $-1$.

### The definition

> [!DEF] 9.1 · Determinant
> Let $A$ be a square $n \times n$ matrix. The **determinant** of $A$ is the number
> $$\det A = \sum_{\sigma \in S_n} \sgn(\sigma)\, a_{1\sigma(1)} \cdots a_{n\sigma(n)}.$$
> Here $S_n$ denotes the set of the $n!$ permutations of $\{1, \dots, n\}$: this is a sum over $n!$ elements. The term $\sgn(\sigma) = \pm 1$ denotes the sign of the permutation $\sigma$ and it is $1$ or $-1$ depending on $\sigma$. If $\sigma$ is a product of $k$ transpositions (permutations that swap two elements and leave all the other elements fixed), then $\sgn(\sigma) = (-1)^k$. The permutation $\sigma$ is denoted by the symbol $[\sigma(1) \cdots \sigma(n)]$.

Piece by piece:

- **Only square matrices.** The definition uses the same $n$ for the rows and for the columns: a $2 \times 3$ matrix has no determinant.
- **One term for each permutation.** For each $\sigma \in S_n$ you multiply $n$ numbers: $a_{1\sigma(1)}$ from row 1, $a_{2\sigma(2)}$ from row 2, and so on. The columns $\sigma(1), \dots, \sigma(n)$ are all different, because $\sigma$ is a permutation. So **each term takes exactly one number from each row and one from each column**, like $n$ rooks on a chessboard that cannot capture each other (the picture is Martelli's).
- **The sign.** Each product must be added with the sign of $\sigma$: plus if $\sigma$ is obtained with an even number of swaps, minus if odd.
- **How many terms.** $n!$: 2 for $n = 2$, 6 for $n = 3$, 24 for $n = 4$, 120 for $n = 5$. That is why for $n \ge 4$ the definition is never used directly: you need better methods, such as the Laplace expansion.

### The cases $n = 1$, $2$, $3$

The handouts examine the first three cases.

**$n = 1$.** The matrix is a number, $A = (a_{11})$. $S_1$ contains only $\mathrm{id} = [1]$, with positive sign:

$$\det A = a_{11}.$$

**$n = 2$.** $S_2$ contains $\mathrm{id} = [1\ 2]$ (sign $+1$) and the transposition $[2\ 1]$ (sign $-1$). The two terms are $a_{11}a_{22}$ and $a_{12}a_{21}$:

$$\det \begin{pmatrix} a_{11} & a_{12} \\ a_{21} & a_{22} \end{pmatrix} = a_{11}a_{22} - a_{12}a_{21}.$$

In words: main diagonal minus the other diagonal.

**$n = 3$.** The six permutations of the table give six terms. The three transpositions have sign $-1$, the other three $+1$:

$$\det A = a_{11}a_{22}a_{33} - a_{11}a_{23}a_{32} - a_{13}a_{22}a_{31} - a_{12}a_{21}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32}.$$

Check one term against the table: $[2\ 3\ 1]$ has $\sigma(1) = 2$, $\sigma(2) = 3$, $\sigma(3) = 1$, so it gives $+a_{12}a_{23}a_{31}$.

> [!BEYOND] · Sarrus' rule, only for $3 \times 3$ matrices
> To remember the formula: copy the first two columns again to the right of the matrix. The three diagonals that go **down** to the right give the terms with plus, the three that go **up** those with minus:
> $$\begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}\!\begin{matrix} a_{11} & a_{12} \\ a_{21} & a_{22} \\ a_{31} & a_{32} \end{matrix} \qquad \begin{aligned} &+\ a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} \\ &-\ a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33} \end{aligned}$$
> Careful: **it works only for $n = 3$**. For a $4 \times 4$ matrix the "diagonals" would be 8, while the real terms are $4! = 24$.

> [!EXAMPLE] 9.2 · Three determinants
> The determinants of the matrices
> $$(3), \qquad \begin{pmatrix} 1 & 2 \\ -1 & 4 \end{pmatrix}, \qquad \begin{pmatrix} 1 & 2 & 1 \\ 2 & 1 & 2 \\ -1 & 0 & 1 \end{pmatrix}$$
> are $3$, $\ 4 - (-2) = 6$, $\ -6$ respectively. Let us look at the calculations.
> - $1 \times 1$: $\det(3) = 3$.
> - $2 \times 2$: $1 \cdot 4 - 2 \cdot (-1) = 4 - (-2) = 6$.
> - $3 \times 3$, with the formula (term by term, in the order of the formula):
>   $$\underbrace{1 \cdot 1 \cdot 1}_{a_{11}a_{22}a_{33}} - \underbrace{1 \cdot 2 \cdot 0}_{a_{11}a_{23}a_{32}} - \underbrace{1 \cdot 1 \cdot (-1)}_{a_{13}a_{22}a_{31}} - \underbrace{2 \cdot 2 \cdot 1}_{a_{12}a_{21}a_{33}} + \underbrace{2 \cdot 2 \cdot (-1)}_{a_{12}a_{23}a_{31}} + \underbrace{1 \cdot 2 \cdot 0}_{a_{13}a_{21}a_{32}}$$
>   $$= 1 - 0 + 1 - 4 - 4 + 0 = -6.$$
>
> With Sarrus: the diagonals going down give $1 \cdot 1 \cdot 1 + 2 \cdot 2 \cdot (-1) + 1 \cdot 2 \cdot 0 = -3$, those going up $1 \cdot 1 \cdot (-1) + 1 \cdot 2 \cdot 0 + 2 \cdot 2 \cdot 1 = 3$, and $-3 - 3 = -6$. The handouts add the same six terms in another order: $1 - 0 - 4 + (-4) + 0 - (-1) = -6$.

> [!PITFALL] The sign of $ad - bc$
> In the $2 \times 2$ case you subtract the product of the **other** diagonal, with its signs: $\det \begin{pmatrix} 1 & 2 \\ -1 & 4 \end{pmatrix} = 4 - (2)(-1) = 4 + 2 = 6$, not $4 - 2 = 2$. Always put brackets around negative numbers.

## Triangular matrices, identity and transpose (pp. 42–43)

For triangular matrices you read the determinant on the diagonal.

> [!PROP] 9.3 · Determinant of a triangular matrix
> Let $A \in M(n)$ be an **upper triangular** matrix
> $$A = \begin{pmatrix} a_{11} & a_{12} & \dots & a_{1n} \\ 0 & a_{22} & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & a_{nn} \end{pmatrix}.$$
> Then
> $$\det A = a_{11}a_{22} \cdots a_{nn}.$$

The handouts' explanation: in the formula of the determinant, for an upper triangular matrix all the products are zero except the one of the identity permutation. Here is why, step by step.

1. Below the diagonal there are only zeros: $a_{ij} = 0$ when $i > j$.
2. A term $a_{1\sigma(1)} \cdots a_{n\sigma(n)}$ can be non-zero only if no factor lies below the diagonal, that is if $\sigma(i) \ge i$ for every row $i$.
3. In the last row: $\sigma(n) \ge n$, so $\sigma(n) = n$. In the second-to-last: $\sigma(n - 1) \ge n - 1$ and $\sigma(n - 1) \neq n$ (column $n$ is already used), so $\sigma(n - 1) = n - 1$. Going up like this, $\sigma(i) = i$ for every $i$: $\sigma = \mathrm{id}$.
4. Only the term of the identity remains, which has sign $+1$: $\det A = a_{11}a_{22} \cdots a_{nn}$.

The same result holds for **lower triangular** matrices (zeros above the diagonal), with the same reasoning starting from the first row. And it holds for **diagonal** matrices, which are triangular in both senses.

> [!EXAMPLE] · Three determinants with no effort
> $$\det \begin{pmatrix} 2 & 5 & -1 \\ 0 & 3 & 4 \\ 0 & 0 & -1 \end{pmatrix} = 2 \cdot 3 \cdot (-1) = -6, \qquad \det \begin{pmatrix} 1 & 0 & 0 \\ 7 & 2 & 0 \\ -3 & 5 & 4 \end{pmatrix} = 1 \cdot 2 \cdot 4 = 8,$$
> $$\det \begin{pmatrix} 5 & 9 & \pi \\ 0 & 0 & \sqrt 2 \\ 0 & 0 & 7 \end{pmatrix} = 5 \cdot 0 \cdot 7 = 0.$$
> The numbers above the diagonal do not matter at all, and a single zero on the diagonal is enough to give a zero determinant.

Here the handouts introduce a matrix that will play a fundamental role throughout the course.

> [!DEF] 9.4 · Identity matrix
> The **identity matrix** of size $n \times n$ is the matrix
> $$I_n = \begin{pmatrix} 1 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 1 \end{pmatrix}$$
> whose coefficients are 1 on the main diagonal and 0 elsewhere.

$I_n$ is diagonal, so by Proposition 9.3

$$\det(I_n) = 1 \cdot 1 \cdots 1 = 1.$$

In the product of matrices it plays the part of the number 1: $I_nA = AI_n = A$ (we anticipated it in lesson L08), and it is the starting point for the inverse matrices of lesson L10.

Another property that, the handouts say, follows directly from the definition:

> [!PROP] 9.5
> $\det({}^tA) = \det A$ holds.

For a $2 \times 2$ matrix one computation is enough: ${}^tA = \begin{pmatrix} a_{11} & a_{21} \\ a_{12} & a_{22} \end{pmatrix}$ has determinant $a_{11}a_{22} - a_{21}a_{12}$, the same as $A$. For the $3 \times 3$ matrix of Example 9.2, the transpose $\begin{pmatrix} 1 & 2 & -1 \\ 2 & 1 & 0 \\ 1 & 2 & 1 \end{pmatrix}$ again has determinant $-6$ (try it with Sarrus).

> [!PROOF] of Proposition 9.5
> When you transpose, entry $(i, j)$ goes to $(j, i)$. A term of $\det({}^tA)$ is $({}^tA)_{1\sigma(1)} \cdots ({}^tA)_{n\sigma(n)} = a_{\sigma(1)1} \cdots a_{\sigma(n)n}$: it still takes one number from each row and from each column of $A$. Reordering the factors by row, it is the term of $\det A$ of the inverse permutation $\sigma^{-1}$, the one that "undoes" $\sigma$. And $\sigma^{-1}$ has the same sign as $\sigma$: if $\sigma$ is obtained with $k$ swaps, $\sigma^{-1}$ is obtained with the same $k$ swaps done in reverse order. So $\det({}^tA)$ and $\det A$ are sums of the same terms with the same signs (Martelli, Proposition 3.3.2).

The practical consequence: **everything that holds for rows also holds for columns**, because the rows of $A$ are the columns of ${}^tA$ and the determinant is the same.

## The Laplace expansion (pp. 43–44)

The definition with permutations is awkward already for $n = 4$ (24 terms). The **Laplace expansion** reduces an $n \times n$ determinant to $(n - 1) \times (n - 1)$ determinants, and so on down to $2 \times 2$ ones.

Let $A$ be an $n \times n$ matrix with $n \ge 2$. We denote by $C_{ij}$ the $(n - 1) \times (n - 1)$ submatrix obtained from $A$ by **removing row $i$ and column $j$**. For example, with

$$A = \begin{pmatrix} 1 & -1 & 0 \\ 2 & -1 & 5 \\ 1 & 1 & -1 \end{pmatrix}: \quad C_{11} = \begin{pmatrix} -1 & 5 \\ 1 & -1 \end{pmatrix}, \quad C_{12} = \begin{pmatrix} 2 & 5 \\ 1 & -1 \end{pmatrix}, \quad C_{23} = \begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}.$$

For $C_{12}$ you delete row 1 and column 2: what remains is $2, 5$ from the second row and $1, -1$ from the third.

> [!THEOREM] 9.6 · Laplace expansion
> For every fixed $i$ the equality
> $$\det A = \sum_{j=1}^n (-1)^{i+j} a_{ij} \det C_{ij}.$$
> holds.

Piece by piece:

- You choose **one row**, the $i$-th, any row: the result does not depend on the choice.
- For each number $a_{ij}$ of that row you delete its row and its column, compute the determinant $\det C_{ij}$ of what remains and multiply it by $a_{ij}$.
- Each product gets the sign $(-1)^{i+j}$: $+$ if $i + j$ is even, $-$ if it is odd.
- You add everything up. If $a_{ij} = 0$ its term disappears: **you do not need to compute $\det C_{ij}$**.

Thanks to $\det({}^tA) = \det A$ the same holds for columns.

> [!COROLLARY] 9.7 · Expansion along a column
> For every fixed $j$ the equality
> $$\det A = \sum_{i=1}^n (-1)^{i+j} a_{ij} \det C_{ij}.$$
> holds.

The signs $(-1)^{i+j}$ are arranged **like on a chessboard**, with $+$ at the top left:

$$\begin{pmatrix} + & - & + \\ - & + & - \\ + & - & + \end{pmatrix} \qquad \begin{pmatrix} + & - & + & - \\ - & + & - & + \\ + & - & + & - \\ - & + & - & + \end{pmatrix}$$

> [!EXAMPLE] 9.8 · Expansion along the first row
> To compute the following determinant, we expand along the first row (that is, we take $i = 1$):
> $$\det \begin{pmatrix} 1 & -1 & 0 \\ 2 & -1 & 5 \\ 1 & 1 & -1 \end{pmatrix} = 1 \cdot \det \begin{pmatrix} -1 & 5 \\ 1 & -1 \end{pmatrix} - (-1) \cdot \det \begin{pmatrix} 2 & 5 \\ 1 & -1 \end{pmatrix} + 0 \cdot \det \begin{pmatrix} 2 & -1 \\ 1 & 1 \end{pmatrix}.$$
> The signs are $+, -, +$ (first row of the chessboard). The three $2 \times 2$ determinants:
> - $\det C_{11} = (-1)(-1) - 5 \cdot 1 = 1 - 5 = -4$;
> - $\det C_{12} = 2 \cdot (-1) - 5 \cdot 1 = -2 - 5 = -7$;
> - the third is not needed, because it is multiplied by $0$.
>
> Total: $1 \cdot (-4) - (-1) \cdot (-7) + 0 = -4 - 7 + 0 = -11$.

Let us check that the result does not depend on the row or column chosen: we expand the same matrix along the **first column** ($j = 1$), with signs $+, -, +$:

$$1 \cdot \det \begin{pmatrix} -1 & 5 \\ 1 & -1 \end{pmatrix} - 2 \cdot \det \begin{pmatrix} -1 & 0 \\ 1 & -1 \end{pmatrix} + 1 \cdot \det \begin{pmatrix} -1 & 0 \\ -1 & 5 \end{pmatrix}$$

$$= 1 \cdot (-4) - 2 \cdot 1 + 1 \cdot (-5) = -11.$$

Same result, but with three $2 \times 2$ determinants instead of two. That is why the handouts remark that it is better to expand along a row (or column) that contains some zeros.

> [!EXAMPLE] 9.9 · Expansion along an almost empty column
> Expanding the following matrix along the second column we get:
> $$\det \begin{pmatrix} 1 & 0 & 1 \\ 2 & 0 & 1 \\ \pi & 3 & \sqrt 7 \end{pmatrix} = (-1) \cdot 3 \cdot \det \begin{pmatrix} 1 & 1 \\ 2 & 1 \end{pmatrix} = 3.$$
> In the second column the only non-zero number is $a_{32} = 3$, in position $(3, 2)$: sign $(-1)^{3+2} = -1$. Deleting row 3 and column 2 leaves $C_{32} = \begin{pmatrix} 1 & 1 \\ 2 & 1 \end{pmatrix}$, with determinant $1 - 2 = -1$. So $(-1) \cdot 3 \cdot (-1) = 3$. The numbers $\pi$ and $\sqrt 7$, which seemed to complicate everything, do not enter the calculation.
>
> In the expansion you must always pay attention to the sign $(-1)^{i+j}$ associated with entry $ij$, which varies as on a chessboard.

> [!PROOF] · why the Laplace expansion works ($3 \times 3$ case)
> Take the formula for $n = 3$ and group the six terms according to the number of the first row that they contain:
> $$\det A = a_{11}(a_{22}a_{33} - a_{23}a_{32}) - a_{12}(a_{21}a_{33} - a_{23}a_{31}) + a_{13}(a_{21}a_{32} - a_{22}a_{31}).$$
> The three brackets are exactly $\det C_{11}$, $\det C_{12}$ and $\det C_{13}$, and the signs are $+, -, +$. It is the expansion along the first row. In general (Martelli, Theorem 3.3.5) the terms that contain $a_{ij}$ are, apart from the factor $a_{ij}$, exactly the terms of $\det C_{ij}$, with an extra sign $(-1)^{i+j}$.

> [!METHOD] Computing a determinant with Laplace
> 1. Check that the matrix is **square**; if it is not, the determinant does not exist.
> 2. If it is triangular, multiply the diagonal (Proposition 9.3) and you are done.
> 3. Choose the row or column with the **most zeros**.
> 4. For each non-zero number of that row: chessboard sign, number, determinant of the submatrix that remains after deleting its row and its column.
> 5. Repeat on the submatrices until you reach $2 \times 2$ (or triangular matrices).
> 6. Check: expand along another row or column or, for a $3 \times 3$, use Sarrus.

> [!EXAMPLE] · A $4 \times 4$ with an almost empty column
> $$M = \begin{pmatrix} 2 & 0 & 1 & 3 \\ 1 & 0 & 0 & 2 \\ 0 & 1 & 4 & -1 \\ 3 & 0 & 2 & 1 \end{pmatrix}$$
> The second column has a single non-zero number, $m_{32} = 1$, with sign $(-1)^{3+2} = -1$. Deleting row 3 and column 2:
> $$\det M = -1 \cdot \det \begin{pmatrix} 2 & 1 & 3 \\ 1 & 0 & 2 \\ 3 & 2 & 1 \end{pmatrix}.$$
> I expand the $3 \times 3$ along the second row, which has a zero (signs $-, +, -$):
> $$\det \begin{pmatrix} 2 & 1 & 3 \\ 1 & 0 & 2 \\ 3 & 2 & 1 \end{pmatrix} = -1 \cdot \det \begin{pmatrix} 1 & 3 \\ 2 & 1 \end{pmatrix} + 0 - 2 \cdot \det \begin{pmatrix} 2 & 1 \\ 3 & 2 \end{pmatrix}$$
> $$= -1 \cdot (1 - 6) - 2 \cdot (4 - 3) = 5 - 2 = 3.$$
> So $\det M = -3$. Instead of 24 terms, three $2 \times 2$ determinants.

In the tool below you can check your determinants: type the matrix and press "Compute". The tool does not use Laplace but the **Gauss moves**, which turn the matrix into a triangular one while changing the determinant in a controlled way: it is the method of the next lesson, L10. Try the matrix of Example 9.8 (already entered) and then the $M$ above (`2 0 1 3; 1 0 0 2; 0 1 4 -1; 3 0 2 1`).

```widget gauss
title: Check a determinant
matrice: 1 -1 0; 2 -1 5; 1 1 -1
modo: determinante
modi: determinante
```

## Properties of the determinant (p. 44)

Three properties follow straight away from the Laplace expansion.

> [!PROP] 9.10 · Zero row or column
> If the entries of a row (or column) of $A$ are all zero, then $\det(A) = 0$.

It is a direct consequence of the Laplace expansion: just compute the determinant by expanding along the all-zero row (or column). Each term is "$0$ times something". For example $\det \begin{pmatrix} 4 & 7 & 1 \\ 0 & 0 & 0 \\ 2 & 9 & 5 \end{pmatrix} = 0$ without any calculation.

> [!PROP] 9.11 · Multiplying a row by a number
> If the matrix $A'$ is obtained from the matrix $A$ by multiplying all the entries of a row (or column) by the number $c$, then $\det(A') = c \cdot \det(A)$.

The reason: expand $\det A'$ along the multiplied row. The submatrices $C_{ij}$ **do not contain** that row, so they are the same as for $A$; only the numbers $c\,a_{ij}$ in front change. Each term is multiplied by $c$, and so is the sum.

With numbers: $\det \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = 4 - 6 = -2$; multiplying the first row by 5, $\det \begin{pmatrix} 5 & 10 \\ 3 & 4 \end{pmatrix} = 20 - 30 = -10 = 5 \cdot (-2)$.

Read backwards, the proposition lets you **factor out** a factor common to a row or a column:

$$\det \begin{pmatrix} 6 & 9 \\ 2 & 5 \end{pmatrix} = 3 \det \begin{pmatrix} 2 & 3 \\ 2 & 5 \end{pmatrix} = 3 \cdot (10 - 6) = 12.$$

Direct check: $6 \cdot 5 - 9 \cdot 2 = 30 - 18 = 12$ ✓. It is the decisive trick when $\pi$, $e$, $\sqrt 2$ or $i$ appear in the matrix (Exercise 9.14 and "Towards the exam").

> [!COROLLARY] 9.12 · The determinant of $cA$
> From the proposition we immediately get
> $$\det(cA) = c^n \cdot \det(A)$$
> and in particular
> $$\det(-A) = (-1)^n \cdot \det(A).$$

The reason: $cA$ has **all $n$ rows** multiplied by $c$. Applying Proposition 9.11 one row at a time, the factor $c$ comes out $n$ times. With $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$:

$$\det(3A) = \det \begin{pmatrix} 3 & 6 \\ 9 & 12 \end{pmatrix} = 36 - 54 = -18 = 3^2 \cdot (-2).$$

And for even $n$ $\det(-A) = \det A$, for odd $n$ $\det(-A) = -\det A$.

> [!PITFALL] $\det(cA)$ is not $c \det A$, and $\det(A + B)$ is not $\det A + \det B$
> - If $A$ is $3 \times 3$ with $\det A = 5$, then $\det(2A) = 2^3 \cdot 5 = 40$, not $10$.
> - The determinant is **not** additive (Martelli, Remark 3.4.9): with $A = I_2$ and $B = -I_2$ we have $\det(A + B) = \det \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = 0$, while $\det A + \det B = 1 + 1 = 2$.
> - Proposition 9.11 is about **one** row: multiplying two rows by $c$ multiplies the determinant by $c^2$.

## The geometric meaning (beyond the handouts)

> [!BEYOND] · area, orientation and volume
> For a real $2 \times 2$ matrix with columns $v_1 = {}^t(a, c)$ and $v_2 = {}^t(b, d)$ (Martelli, §3.3.10):
> - $|\det A| = |ad - bc|$ is the **area** of the parallelogram with sides $v_1$ and $v_2$;
> - the **sign** tells the orientation: $\det A > 0$ if, turning from $v_1$ towards $v_2$ through the smaller angle, you go anticlockwise (as from $e_1$ to $e_2$), $\det A < 0$ if you go clockwise;
> - $\det A = 0$ exactly when $v_1$ and $v_2$ are parallel: the parallelogram is squashed.
>
> For a $3 \times 3$ matrix, $|\det A|$ is the **volume** of the parallelepiped whose edges are the three columns (you will meet it again with the cross product, lesson L22). For example $\det \begin{pmatrix} 3 & -1 & 0 \\ 1 & 3 & 0 \\ 0 & 0 & 4 \end{pmatrix} = 4 \cdot (9 + 1) = 40$: a parallelepiped whose base is a square of area 10 and whose height is 4.

In the tool below the matrix $A$ transforms the square with sides $e_1$ and $e_2$ into the coloured parallelogram, whose sides are the columns $Ae_1$ and $Ae_2$. Change the four numbers and watch how the area and the colour change: green if $\det A > 0$, pink if $\det A < 0$, yellow if $\det A = 0$. Try the buttons: "shear" ($\det = 1$: the shape changes, the area does not), "reflection" ($\det = -1$: same area, orientation reversed), "projection" ($\det = 0$: the square gets squashed onto a segment). The lines about eigenvalues concern lesson L17: ignore them for now.

```widget matrice
title: The determinant as an area with a sign
a: 3 1; 1 2
x: 1 1
raggio: 5
```

> [!BEYOND] · where to find it in the book
> In Martelli's book the determinant is in §3.3 (pp. 93–103): the definition and the cases $n = 1, 2, 3$ in §3.3.1 (pp. 93–95, with the representation with "colourings" and Proposition 3.3.2 on $\det({}^tA)$), triangular matrices in §3.3.2 (Proposition 3.3.3), the identity matrix in §3.3.3 (Definition 3.3.4), the Laplace expansion in §3.3.4 (pp. 96–97, Theorem 3.3.5), the geometric meaning in §3.3.10 (pp. 101–103). Permutations and their sign are in §1.2.5; the determinant of $\lambda A$ is Exercise 3.10.

## Towards the exam

The Linear Algebra and Geometry written test has 10 quiz questions with 5 answers each (you need at least 6 correct answers for the 2 problems worth 11 points to be marked), it lasts 2 hours, with no calculator and only 4 handwritten pages of notes; the 2026/27 exam sessions are on 22/01 and 05/02/2027 at 14:00. The details are in lesson L01.

The determinant appears in almost every exam session, in three forms (and you need it anyway for eigenvalues, from lesson L17):

| Type of question | Exam sessions (question number) | Lesson |
|---|---|---|
| "The determinant of $A$ is…" with $A$ of size $3 \times 3$, $4 \times 4$ or $5 \times 5$ | 10/06/2024 (2), 10/07/2024 (4), 10/07/2025 (4), 02/09/2025 (3), 03/06/2026 (2) | this one |
| determinant of a product or of a power: $\det(AB)$, $\det(A^3)$, $\det(A\,{}^tA)$ | 06/09/2024 (4), 16/01/2025 (3), 07/02/2025 (5), 03/06/2025 (9), 05/02/2026 (5), 03/07/2026 (6) | L10 (Binet's theorem) |
| problem: "for which $k$ is the matrix invertible?" | 24/01/2024, 06/09/2024, 07/02/2025, 15/01/2026, 05/02/2026, 03/07/2026 (problem 11) | L10 |

Three real questions of the first type, with the worked solution.

> [!EXAM] Exam of 10/07/2025, question 4
> Let $A = \begin{pmatrix} 1 & -1 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 2 & -1 & 0 \end{pmatrix}$. What is the determinant of $A$? (a) $1$; (b) $0$; (c) $\det(A)$ is not defined; (d) $2$; (e) $-1$.
>
> **Solution.** Count rows and columns first of all: 3 rows and 4 columns. The matrix is not square, so the determinant **does not exist**: answer **(c)**. If you expand without looking you find numbers that look plausible (the $3 \times 3$ part on the left, expanded along its third column, has determinant $-1 \cdot (1 \cdot 1 - 0) = -1$, which is among the answers): that is the whole trap.

> [!EXAM] Exam of 02/09/2025, question 3
> Compute the determinant of $A = \begin{pmatrix} 1 & 2 & 0 & 0 & 0 \\ 0 & 1 & 3 & 0 & 0 \\ 0 & 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 1 & 2 \\ 1 & 0 & 0 & 0 & 1 \end{pmatrix}$: (a) $12$; (b) $13$; (c) $0$; (d) $11$; (e) $1$.
>
> **Solution.** The first column has two non-zero numbers: $a_{11} = 1$ (sign $+$) and $a_{51} = 1$ (sign $(-1)^{5+1} = +1$). I expand along the first column:
> - deleting row 1 and column 1 leaves $C_{11} = \begin{pmatrix} 1 & 3 & 0 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 1 \end{pmatrix}$, upper triangular: $\det C_{11} = 1$;
> - deleting row 5 and column 1 leaves $C_{51} = \begin{pmatrix} 2 & 0 & 0 & 0 \\ 1 & 3 & 0 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 2 \end{pmatrix}$, lower triangular: $\det C_{51} = 2 \cdot 3 \cdot 1 \cdot 2 = 12$.
>
> $\det A = 1 \cdot 1 + 1 \cdot 12 = 13$: answer **(b)**. The distractor $12$ is for those who forget the first term.

> [!EXAM] Exam of 03/06/2026, question 2
> The determinant of $\begin{pmatrix} 1 & e & 1 & 1 \\ \pi & 2\pi e & 3\pi & \pi \\ 1 & e & 2 & 0 \\ 0 & e & 0 & 3 \end{pmatrix}$ is equal to: (a) $1$; (b) $0$; (c) $\pi e$; (d) $\pi + e$; (e) $6 + 2\pi e$.
>
> **Solution.** The second row has the common factor $\pi$ and the second column the common factor $e$: I factor them out with Proposition 9.11 (for rows and for columns):
> $$\det = \pi e \cdot \det \begin{pmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 1 \\ 1 & 1 & 2 & 0 \\ 0 & 1 & 0 & 3 \end{pmatrix}.$$
> I expand along the fourth row, $(0, 1, 0, 3)$: what remains is $a_{42} = 1$ (sign $(-1)^{4+2} = +$) and $a_{44} = 3$ (sign $+$).
> - $C_{42} = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 3 & 1 \\ 1 & 2 & 0 \end{pmatrix}$: along the third column, $1 \cdot (2 - 3) - 1 \cdot (2 - 1) + 0 = -1 - 1 = -2$;
> - $C_{44} = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 3 \\ 1 & 1 & 2 \end{pmatrix}$: with Sarrus, $(4 + 3 + 1) - (2 + 3 + 2) = 8 - 7 = 1$.
>
> The determinant in brackets is $1 \cdot (-2) + 3 \cdot 1 = 1$, so the total is $\pi e$: answer **(c)**.

In the other two exam sessions of the first type (10/07/2024 and 10/06/2024) the matrices had dependent rows and the determinant was $0$: with the tools of lesson L10 you see it almost without calculations.

**The method, in order.** (1) Is it square? (2) Is it triangular? (3) Is there a zero row or column? (4) Are there common factors to take out ($\pi$, $e$, roots, large numbers)? (5) Laplace along the row or column with the most zeros. (6) For a final $3 \times 3$, Sarrus. Without a calculator it always pays to reduce the numbers before multiplying.

Mistakes to avoid:

- forgetting the chessboard sign, above all in the "odd" positions such as $(1, 2)$, $(2, 3)$, $(5, 4)$;
- using Sarrus on a $4 \times 4$;
- writing $\det(2A) = 2\det A$: for an $n \times n$ matrix it is $2^n \det A$;
- answering with a number when the matrix is not square.

> [!EXAM] The 4-page sheet
> From this lesson: $\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$; Sarrus' rule for $3 \times 3$ matrices (with the drawing); the Laplace expansion with the chessboard of signs; triangular $\Rightarrow$ product of the diagonal; $\det({}^tA) = \det A$; zero row $\Rightarrow 0$; a row times $c$ $\Rightarrow$ determinant times $c$; $\det(cA) = c^n \det A$.

## Quiz

```quiz
Q: Let $A = \begin{pmatrix} 2 & 0 & 1 \\ -1 & 3 & 0 \end{pmatrix}$. What is the determinant of $A$?
+ $\det(A)$ is not defined.
- $0$
- $6$
- $-6$
- $1$
= $A$ has 2 rows and 3 columns: it is not square, and the determinant exists only for square matrices (Definition 9.1). Similar to the exam of 10/07/2025, question 4.

Q: The determinant of $A = \begin{pmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 2 & 0 \\ 0 & 0 & 1 & 1 \\ 3 & 0 & 0 & 1 \end{pmatrix}$ is:
+ $-5$
- $7$
- $1$
- $0$
- $5$
= Along the first column: $a_{11} = 1$ with sign $+$ and submatrix $C_{11}$ upper triangular with diagonal $1, 1, 1$, so $1$; then $a_{41} = 3$ with sign $(-1)^{4+1} = -1$ and $C_{41} = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 2 & 0 \\ 0 & 1 & 1 \end{pmatrix}$, lower triangular with determinant $2$. Total $1 - 3 \cdot 2 = -5$. If you forget the sign you find $7$. Similar to the exam of 02/09/2025, question 3.

Q: The determinant of $\begin{pmatrix} 1 & \pi & 2 \\ e & 2\pi e & e \\ 0 & \pi & 3 \end{pmatrix}$ is equal to:
+ $4\pi e$
- $0$
- $\pi e$
- $4$
- $\pi + e$
= I factor $e$ out of the second row and $\pi$ out of the second column: $\pi e \det \begin{pmatrix} 1 & 1 & 2 \\ 1 & 2 & 1 \\ 0 & 1 & 3 \end{pmatrix}$. Along the first column: $1 \cdot (6 - 1) - 1 \cdot (3 - 2) + 0 = 5 - 1 = 4$. Total $4\pi e$. Similar to the exam of 03/06/2026, question 2.

Q: Let $A$ be a $3 \times 3$ matrix with $\det A = 5$. What is $\det(2A)$?
+ $40$
- $10$
- $25$
- $8$
- $30$
= $2A$ has all three rows multiplied by 2, so (Corollary 9.12) $\det(2A) = 2^3 \det A = 8 \cdot 5 = 40$. $10 = 2 \cdot 5$ is the mistake of those who multiply only one row.

Q: Let $A$ be a $4 \times 4$ matrix with $\det A = 3$. What is $\det(-A)$?
+ $3$
- $-3$
- $81$
- $-81$
- $-12$
= $\det(-A) = (-1)^4 \det A = \det A = 3$: with even $n$ the sign does not change (Corollary 9.12).

Q: How many terms does the formula of the determinant (Definition 9.1) have for a $5 \times 5$ matrix?
+ $120$
- $25$
- $5$
- $10$
- $60$
= One term for each permutation of $\{1, 2, 3, 4, 5\}$: there are $5! = 1 \cdot 2 \cdot 3 \cdot 4 \cdot 5 = 120$. That is why you use Laplace.

Q: Let $A = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 3 \\ 0 & 0 & 1 \end{pmatrix}$. What are $\det(AB)$ and $\tr(AB)$?
+ $\det(AB) = 1$, $\tr(AB) = 8$.
- $\det(AB) = 1$, $\tr(AB) = 9$.
- $\det(AB) = 2$, $\tr(AB) = 8$.
- $\det(AB) = 0$, $\tr(AB) = 8$.
- $\det(AB) = 3$, $\tr(AB) = 3$.
= Row by column, $AB = \begin{pmatrix} 1 & 1 & 0 \\ 2 & 3 & 3 \\ 0 & 1 & 4 \end{pmatrix}$: trace $1 + 3 + 4 = 8$ (not $\tr A \cdot \tr B = 9$). Along the first row: $\det(AB) = 1 \cdot (12 - 3) - 1 \cdot (8 - 0) = 1$. With lesson L10 it is quicker: $\det(AB) = \det A \det B = 1 \cdot 1$, because they are triangular with a diagonal of 1s. Similar to the exam of 16/01/2025, question 3.

Q: The determinant of $\begin{pmatrix} 2 & 3 & 4 \\ 5 & 6 & 7 \\ 8 & 9 & 10 \end{pmatrix}$ is:
+ $0$
- $\det$ is not defined.
- $1$
- $-3$
- $10!$
= With Sarrus: diagonals going down $2 \cdot 6 \cdot 10 + 3 \cdot 7 \cdot 8 + 4 \cdot 5 \cdot 9 = 120 + 168 + 180 = 468$, diagonals going up $4 \cdot 6 \cdot 8 + 2 \cdot 7 \cdot 9 + 3 \cdot 5 \cdot 10 = 192 + 126 + 150 = 468$; difference $0$. The third row is $2 \cdot (5, 6, 7) - (2, 3, 4)$: in lesson L10 you will see that then the determinant is always $0$. Similar to the exam of 10/07/2024, question 4.

Q: Which of these statements is **false** for real square matrices?
+ $\det(A + B) = \det A + \det B$ for all $A, B \in M(2)$.
- $\det({}^tA) = \det A$.
- $\det(I_n) = 1$.
- If a column of $A$ is zero, then $\det A = 0$.
- $\det(-A) = \det A$ for all $A \in M(2)$.
= With $A = I_2$ and $B = -I_2$: $\det(A + B) = \det(0) = 0$, but $\det A + \det B = 2$. The others are Propositions 9.5, 9.10, Definition 9.4 with Proposition 9.3, and Corollary 9.12 with $n = 2$.

Q: Compute the determinant of $\begin{pmatrix} 3 & 1 & 0 \\ 0 & 2 & 5 \\ 1 & 0 & 4 \end{pmatrix}$.
N: 29
= Along the first row: $3 \cdot (2 \cdot 4 - 5 \cdot 0) - 1 \cdot (0 \cdot 4 - 5 \cdot 1) + 0 = 3 \cdot 8 - 1 \cdot (-5) = 24 + 5 = 29$.
```

## Exercises

::: exercise hard Exercise 9.13 of the handouts: a complex $4 \times 4$
Let us compute the determinant of the matrix
$$A = \begin{pmatrix} 2 + i & 0 & -5 & 0 \\ 3 - i & 1 & 2i & 0 \\ 4 + 4i & -2 & -1 & 0 \\ -\frac 12 & i & 1 - i & i \end{pmatrix}.$$
::: solution
The rules are the same with complex numbers: only the calculations change (lessons L02 and L03).

**Step 1: the best column.** The fourth column has a single non-zero number, $a_{44} = i$, with sign $(-1)^{4+4} = +1$. I expand along the fourth column (Corollary 9.7):
$$\det A = i \cdot \det C_{44}, \qquad C_{44} = \begin{pmatrix} 2 + i & 0 & -5 \\ 3 - i & 1 & 2i \\ 4 + 4i & -2 & -1 \end{pmatrix}.$$
The numbers $-\frac 12$, $i$, $1 - i$ of the last row are no longer needed.

**Step 2: the $3 \times 3$ along the first row**, which has a zero (signs $+, -, +$):
$$\det C_{44} = (2 + i) \det \begin{pmatrix} 1 & 2i \\ -2 & -1 \end{pmatrix} - 0 + (-5) \det \begin{pmatrix} 3 - i & 1 \\ 4 + 4i & -2 \end{pmatrix}.$$

**Step 3: the two $2 \times 2$ determinants.**
- $\det \begin{pmatrix} 1 & 2i \\ -2 & -1 \end{pmatrix} = 1 \cdot (-1) - 2i \cdot (-2) = -1 + 4i$;
- $\det \begin{pmatrix} 3 - i & 1 \\ 4 + 4i & -2 \end{pmatrix} = (3 - i)(-2) - 1 \cdot (4 + 4i) = -6 + 2i - 4 - 4i = -10 - 2i$.

**Step 4: the products.**
- $(2 + i)(-1 + 4i) = -2 + 8i - i + 4i^2 = -2 + 7i - 4 = -6 + 7i$ (remember $i^2 = -1$);
- $(-5)(-10 - 2i) = 50 + 10i$.

So $\det C_{44} = (-6 + 7i) + (50 + 10i) = 44 + 17i$.

**Step 5.** $\det A = i(44 + 17i) = 44i + 17i^2 = -17 + 44i$.
:::

::: exercise hard Exercise 9.14 of the handouts: roots and the imaginary unit
Let us compute the determinant of the matrix
$$B = \begin{pmatrix} 5i & 4\sqrt 2 & 0 & \sqrt 2 \\ 5i & 8\sqrt 2 & 0 & -\sqrt 2 \\ -5i & -4\sqrt 2 & -1 & 2\sqrt 2 \\ -10i & 4\sqrt 2 & 1 & \sqrt 2 \end{pmatrix}.$$
::: solution
**Step 1: take out the common factors** (Proposition 9.11, by columns). The first column is $5i \cdot {}^t(1, 1, -1, -2)$, the second is $4\sqrt 2 \cdot {}^t(1, 2, -1, 1)$, the fourth is $\sqrt 2 \cdot {}^t(1, -1, 2, 1)$. So
$$\det B = 5i \cdot 4\sqrt 2 \cdot \sqrt 2 \cdot \det M = 40i \det M, \qquad M = \begin{pmatrix} 1 & 1 & 0 & 1 \\ 1 & 2 & 0 & -1 \\ -1 & -1 & -1 & 2 \\ -2 & 1 & 1 & 1 \end{pmatrix}$$
(because $\sqrt 2 \cdot \sqrt 2 = 2$ and $5 \cdot 4 \cdot 2 = 40$).

**Step 2: Laplace along the third column** of $M$, which has two zeros. What remains is $m_{33} = -1$ (sign $(-1)^{3+3} = +$) and $m_{43} = 1$ (sign $(-1)^{4+3} = -$):
$$\det M = +(-1) \det C_{33} - 1 \cdot \det C_{43}.$$

**Step 3: the two $3 \times 3$ determinants.**
- $C_{33}$ (without row 3 and column 3) $= \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & -1 \\ -2 & 1 & 1 \end{pmatrix}$. Along the first row: $1 \cdot (2 + 1) - 1 \cdot (1 - 2) + 1 \cdot (1 + 4) = 3 + 1 + 5 = 9$.
- $C_{43}$ (without row 4 and column 3) $= \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & -1 \\ -1 & -1 & 2 \end{pmatrix}$. Along the first row: $1 \cdot (4 - 1) - 1 \cdot (2 - 1) + 1 \cdot (-1 + 2) = 3 - 1 + 1 = 3$.

So $\det M = -9 - 3 = -12$.

**Step 4.** $\det B = 40i \cdot (-12) = -480i$.

Without step 1 you can still do the calculations, but with products like $5i \cdot 8\sqrt 2 \cdot \sqrt 2$ in every row: taking out the common factors is the way not to make mistakes.
:::

::: exercise basic Four $2 \times 2$ determinants
Compute: (a) $\det \begin{pmatrix} 3 & 1 \\ 4 & 2 \end{pmatrix}$; (b) $\det \begin{pmatrix} 2 & -3 \\ 4 & -6 \end{pmatrix}$; (c) $\det \begin{pmatrix} \cos t & -\sin t \\ \sin t & \cos t \end{pmatrix}$; (d) $\det \begin{pmatrix} 1 + i & 2 \\ 1 & 1 - i \end{pmatrix}$.
::: solution
(a) $3 \cdot 2 - 1 \cdot 4 = 6 - 4 = 2$.

(b) $2 \cdot (-6) - (-3) \cdot 4 = -12 + 12 = 0$. The columns ${}^t(2, 4)$ and ${}^t(-3, -6)$ are multiples ($-\frac 32$ times the first): the parallelogram is squashed.

(c) $\cos t \cdot \cos t - (-\sin t) \cdot \sin t = \cos^2 t + \sin^2 t = 1$ for every $t$: this matrix rotates the plane by the angle $t$, and rotations do not change areas (lesson L22).

(d) $(1 + i)(1 - i) - 2 \cdot 1 = (1 - i^2) - 2 = (1 + 1) - 2 = 0$.
:::

::: exercise basic A $3 \times 3$ in two ways
Compute $\det A$ for $A = \begin{pmatrix} 2 & 0 & 1 \\ 1 & 3 & -1 \\ 0 & 1 & 4 \end{pmatrix}$ (a) with the formula of the six terms and (b) with Laplace along the first row.
::: solution
(a) Term by term, in the order of the formula:
- $a_{11}a_{22}a_{33} = 2 \cdot 3 \cdot 4 = 24$;
- $-a_{11}a_{23}a_{32} = -2 \cdot (-1) \cdot 1 = 2$;
- $-a_{13}a_{22}a_{31} = -1 \cdot 3 \cdot 0 = 0$;
- $-a_{12}a_{21}a_{33} = -0 \cdot 1 \cdot 4 = 0$;
- $+a_{12}a_{23}a_{31} = 0 \cdot (-1) \cdot 0 = 0$;
- $+a_{13}a_{21}a_{32} = 1 \cdot 1 \cdot 1 = 1$.

Total $24 + 2 + 1 = 27$.

(b) Along the first row, signs $+, -, +$, and $a_{12} = 0$:
$$\det A = 2 \det \begin{pmatrix} 3 & -1 \\ 1 & 4 \end{pmatrix} - 0 + 1 \cdot \det \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}$$

$$= 2 \cdot (12 + 1) + 1 \cdot (1 - 0) = 26 + 1 = 27.$$
Same result: Laplace is just a tidy way of grouping the same six terms.
:::

::: exercise intermediate Permutations and terms
(a) Find the sign of the permutations $[2\ 1\ 4\ 3]$, $[4\ 3\ 2\ 1]$ and $[2\ 3\ 4\ 1]$ of $S_4$. (b) Write, with its sign, the term of the formula of the $4 \times 4$ determinant that corresponds to $[2\ 3\ 4\ 1]$. (c) Can the product $a_{11}a_{21}a_{33}a_{44}$ appear in the formula of the $4 \times 4$ determinant?
::: solution
(a) With swaps of places:
- $[2\ 1\ 4\ 3]$: from $[1\ 2\ 3\ 4]$ I swap the first two places and the last two: 2 swaps, sign $+1$.
- $[4\ 3\ 2\ 1]$: I swap the first with the fourth place ($[4\ 2\ 3\ 1]$) and the second with the third ($[4\ 3\ 2\ 1]$): 2 swaps, sign $+1$.
- $[2\ 3\ 4\ 1]$: $[1\ 2\ 3\ 4] \to [2\ 1\ 3\ 4] \to [2\ 3\ 1\ 4] \to [2\ 3\ 4\ 1]$: 3 swaps, sign $-1$. With inversions: $(2, 1)$, $(3, 1)$, $(4, 1)$, three, sign $-1$ ✓.

(b) $\sigma(1) = 2$, $\sigma(2) = 3$, $\sigma(3) = 4$, $\sigma(4) = 1$: the term is $-a_{12}a_{23}a_{34}a_{41}$.

(c) No: $a_{11}$ and $a_{21}$ are both in **column 1**. Each term takes only one number from each column.
:::

::: exercise intermediate A $4 \times 4$ with Laplace
Compute $\det \begin{pmatrix} 1 & 2 & 0 & 3 \\ 0 & 1 & 0 & 0 \\ 4 & 1 & 2 & 1 \\ 1 & 0 & 0 & 2 \end{pmatrix}$.
::: solution
The second row has a single non-zero number, $a_{22} = 1$, with sign $(-1)^{2+2} = +$. Deleting row 2 and column 2:
$$\det = 1 \cdot \det \begin{pmatrix} 1 & 0 & 3 \\ 4 & 2 & 1 \\ 1 & 0 & 2 \end{pmatrix}.$$
In the new matrix the second column has a single non-zero number, $2$ in position $(2, 2)$, sign $+$:
$$\det \begin{pmatrix} 1 & 0 & 3 \\ 4 & 2 & 1 \\ 1 & 0 & 2 \end{pmatrix} = 2 \det \begin{pmatrix} 1 & 3 \\ 1 & 2 \end{pmatrix} = 2 \cdot (2 - 3) = -2.$$
The determinant we want is $-2$. Two clever expansions and a single $2 \times 2$ determinant.
:::

::: exercise intermediate Properties without calculations
Let $A$ be a $3 \times 3$ matrix with $\det A = 5$. Compute: (a) $\det({}^tA)$; (b) $\det(2A)$; (c) $\det(-A)$; (d) the determinant of the matrix obtained from $A$ by multiplying the second row by 3; (e) the determinant of the matrix obtained from $A$ by replacing the first column with a column of zeros.
::: solution
(a) $\det({}^tA) = \det A = 5$ (Proposition 9.5).

(b) $\det(2A) = 2^3 \cdot 5 = 40$ (Corollary 9.12, $n = 3$).

(c) $\det(-A) = (-1)^3 \cdot 5 = -5$.

(d) A single row multiplied by 3: $3 \cdot 5 = 15$ (Proposition 9.11).

(e) $0$, because a column is zero (Proposition 9.10), whatever $A$ was.
:::

::: exercise hard Skew-symmetric matrices of odd order
(a) Prove that every real skew-symmetric matrix $A$ of size $n \times n$ with $n$ odd has $\det A = 0$ (Martelli, Exercise 3.11). (b) Check with $N = \begin{pmatrix} 0 & 2 & -1 \\ -2 & 0 & 3 \\ 1 & -3 & 0 \end{pmatrix}$. (c) Show that for $n = 2$ it is not true.
::: solution
(a) Three equalities:
1. $\det({}^tA) = \det A$ (Proposition 9.5);
2. $A$ is skew-symmetric, that is ${}^tA = -A$, so $\det({}^tA) = \det(-A)$;
3. $\det(-A) = (-1)^n \det A = -\det A$, because $n$ is odd (Corollary 9.12).

Putting them together: $\det A = -\det A$, that is $2\det A = 0$, so $\det A = 0$.

(b) With Sarrus: the diagonals going down give $0 \cdot 0 \cdot 0 + 2 \cdot 3 \cdot 1 + (-1) \cdot (-2) \cdot (-3) = 0 + 6 - 6 = 0$; those going up $(-1) \cdot 0 \cdot 1 + 0 \cdot 3 \cdot (-3) + 2 \cdot (-2) \cdot 0 = 0$. Difference $0$ ✓.

(c) $\det \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} = 0 - (1)(-1) = 1 \neq 0$: with even $n$ $(-1)^n = 1$ and the argument says nothing.
:::

::: exercise exam The determinant of a $5 \times 5$
Compute the determinant of $A = \begin{pmatrix} 2 & 1 & 0 & 0 & 0 \\ 0 & 1 & 1 & 0 & 0 \\ 0 & 0 & 1 & 2 & 0 \\ 0 & 0 & 0 & 1 & 1 \\ 1 & 0 & 0 & 0 & 3 \end{pmatrix}$. Possible answers: (a) $6$; (b) $8$; (c) $0$; (d) $4$; (e) $12$.
::: solution
In the first column the non-zero numbers are $a_{11} = 2$ (sign $+$) and $a_{51} = 1$ (sign $(-1)^{5+1} = +$).

- Deleting row 1 and column 1: $C_{11} = \begin{pmatrix} 1 & 1 & 0 & 0 \\ 0 & 1 & 2 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 3 \end{pmatrix}$, upper triangular, $\det C_{11} = 1 \cdot 1 \cdot 1 \cdot 3 = 3$.
- Deleting row 5 and column 1: $C_{51} = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 1 & 1 & 0 & 0 \\ 0 & 1 & 2 & 0 \\ 0 & 0 & 1 & 1 \end{pmatrix}$, lower triangular, $\det C_{51} = 1 \cdot 1 \cdot 2 \cdot 1 = 2$.

$\det A = 2 \cdot 3 + 1 \cdot 2 = 6 + 2 = 8$: answer **(b)**. The distractor $6$ is for those who forget the second term, $4$ for those who subtract it.
:::

::: exercise exam For which $k$ is the determinant zero?
Let $A = \begin{pmatrix} k & 1 & 0 \\ 1 & k & 1 \\ 0 & 1 & k \end{pmatrix}$ with $k \in \R$. Compute $\det A$ as a function of $k$ and find the values of $k$ for which $\det A = 0$.
::: solution
Along the first row (signs $+, -, +$, and $a_{13} = 0$):
$$\det A = k \det \begin{pmatrix} k & 1 \\ 1 & k \end{pmatrix} - 1 \cdot \det \begin{pmatrix} 1 & 1 \\ 0 & k \end{pmatrix} + 0$$

$$= k(k^2 - 1) - (k - 0) = k^3 - k - k = k^3 - 2k.$$
Factoring: $\det A = k(k^2 - 2)$, which vanishes for $k = 0$ or $k^2 = 2$, that is $k = \sqrt 2$ or $k = -\sqrt 2$.

Check with $k = 0$: $A = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}$ has equal first and third rows, and with Sarrus the determinant is $0 + 0 + 0 - (0 + 0 + 0) = 0$ ✓. In lesson L10 you will discover that these are exactly the $k$ for which $A$ is **not invertible**: it is the first question of many exam problems.
:::

::: exercise exam Factoring out $\pi$ and $e$
Compute the determinant of $\begin{pmatrix} 2 & \pi & 1 \\ 4 & 3\pi & 0 \\ e & 2\pi e & e \end{pmatrix}$. Possible answers: (a) $7\pi e$; (b) $0$; (c) $\pi e$; (d) $7$; (e) $6\pi + e$.
::: solution
The third row has the common factor $e$: $(e, 2\pi e, e) = e \cdot (1, 2\pi, 1)$. Then the second column becomes $(\pi, 3\pi, 2\pi) = \pi \cdot (1, 3, 2)$. Taking out the two factors (Proposition 9.11):
$$\det = \pi e \det \begin{pmatrix} 2 & 1 & 1 \\ 4 & 3 & 0 \\ 1 & 2 & 1 \end{pmatrix}.$$
Along the third column (signs $+, -, +$, and $0$ in the middle):
$$\det \begin{pmatrix} 2 & 1 & 1 \\ 4 & 3 & 0 \\ 1 & 2 & 1 \end{pmatrix} = 1 \cdot \det \begin{pmatrix} 4 & 3 \\ 1 & 2 \end{pmatrix} - 0 + 1 \cdot \det \begin{pmatrix} 2 & 1 \\ 4 & 3 \end{pmatrix}$$

$$= (8 - 3) + (6 - 4) = 5 + 2 = 7.$$
The determinant is $7\pi e$: answer **(a)**.
:::

::: exercise intermediate The area of a triangle (beyond the handouts)
Use the determinant to compute the area of the triangle with vertices $P = (1, 1)$, $Q = (4, 2)$, $R = (2, 5)$.
::: solution
The triangle is half of the parallelogram built on the sides $Q - P = (3, 1)$ and $R - P = (1, 4)$. The area of the parallelogram is the absolute value of the determinant of the matrix that has these vectors as columns:
$$\det \begin{pmatrix} 3 & 1 \\ 1 & 4 \end{pmatrix} = 12 - 1 = 11.$$
Area of the triangle: $\frac{11}2 = 5.5$. The positive sign also tells you that going along $P \to Q \to R$ you turn anticlockwise.
:::

## Review questions

::: question For which matrices does the determinant exist?
Only for square $n \times n$ matrices. A $3 \times 4$ matrix has no determinant.
:::

::: question What is the formula of the $2 \times 2$ determinant and what does it measure?
$\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$. In absolute value it is the area of the parallelogram whose sides are the columns; the sign tells the orientation.
:::

::: question What is the sign of a permutation?
If the permutation is obtained from $[1\ 2\ \cdots\ n]$ with $k$ swaps, the sign is $(-1)^k$: $+1$ if $k$ is even, $-1$ if it is odd. Every transposition has sign $-1$, the identity $+1$.
:::

::: question How do you read Definition 9.1 of the determinant?
It is the sum, over all the $n!$ permutations $\sigma$, of the product $a_{1\sigma(1)} \cdots a_{n\sigma(n)}$ with the sign of $\sigma$. Each product takes one number from each row and from each column.
:::

::: question How many terms does the formula have for $n = 3$ and what signs do they have?
Six: three with plus ($a_{11}a_{22}a_{33}$, $a_{12}a_{23}a_{31}$, $a_{13}a_{21}a_{32}$) and three with minus ($a_{11}a_{23}a_{32}$, $a_{13}a_{22}a_{31}$, $a_{12}a_{21}a_{33}$), those of the three transpositions.
:::

::: question What is the determinant of a triangular matrix, and why?
The product of the entries of the main diagonal: in the formula every term contains at least one zero, except the one of the identity permutation.
:::

::: question What is $\det I_n$?
$1$: $I_n$ is diagonal with all 1s on the diagonal.
:::

::: question What does Proposition 9.5 say and what is it for?
$\det({}^tA) = \det A$. It is used to carry over to the columns everything that holds for the rows, for example the Laplace expansion along a column.
:::

::: question State the Laplace expansion along row $i$.
$\det A = \sum_{j=1}^n (-1)^{i+j} a_{ij} \det C_{ij}$, where $C_{ij}$ is the submatrix obtained by deleting row $i$ and column $j$.
:::

::: question How do you remember the signs $(-1)^{i+j}$?
Like a chessboard, with $+$ at the top left: $+$ when $i + j$ is even, $-$ when it is odd.
:::

::: question Which row or column should you choose for Laplace?
The one with the most zeros: the terms with $a_{ij} = 0$ disappear and you do not need to compute their $\det C_{ij}$.
:::

::: question What happens to the determinant if you multiply a row by $c$? And if you multiply the whole matrix?
A row times $c$: the determinant is multiplied by $c$ (Proposition 9.11). The whole $n \times n$ matrix: by $c^n$, because $n$ rows are multiplied (Corollary 9.12).
:::

::: question Why does a matrix with a zero row have zero determinant?
Expanding along that row, every term contains a factor $0$ (Proposition 9.10).
:::

## Glossary

```glossary
Determinant $\det A$ | Number associated with a square matrix: $\sum_{\sigma \in S_n} \sgn(\sigma) a_{1\sigma(1)} \cdots a_{n\sigma(n)}$.
Permutation | Reordering of $\{1, \dots, n\}$; it is written $[\sigma(1) \cdots \sigma(n)]$.
$S_n$ | The set of the $n!$ permutations of $\{1, \dots, n\}$.
Transposition | Permutation that swaps two elements and leaves the others fixed; it has sign $-1$.
Sign $\sgn(\sigma)$ | $(-1)^k$, where $k$ is the number of swaps with which $\sigma$ is obtained.
Inversion | Pair of numbers in which the larger comes before the smaller; the parity of the inversions gives the sign.
Sarrus' rule | Scheme for $3 \times 3$ matrices only: diagonals going down with plus, diagonals going up with minus.
Triangular matrix | Square matrix with zeros below (upper) or above (lower) the diagonal; the determinant is the product of the diagonal.
Identity matrix $I_n$ | 1 on the diagonal and 0 elsewhere; $\det I_n = 1$.
Submatrix $C_{ij}$ | The $(n - 1) \times (n - 1)$ matrix obtained by deleting row $i$ and column $j$.
Laplace expansion | $\det A = \sum_j (-1)^{i+j} a_{ij} \det C_{ij}$ along a row, or the analogous formula along a column.
Chessboard of signs | The arrangement of the signs $(-1)^{i+j}$, with $+$ at the top left and alternating signs.
Zero row | If a row or column is all zeros, the determinant is $0$.
Row multiplied by $c$ | Multiplying a row (or column) by $c$ multiplies the determinant by $c$; so $\det(cA) = c^n \det A$.
Signed area | For real $2 \times 2$ matrices, $\det A$ is the area of the parallelogram of the columns, with the sign of the orientation.
```

## Checklist

```checklist
- I can say for which matrices the determinant exists and I recognise the trap of the non-square matrix.
- I can compute a $2 \times 2$ determinant and explain what it measures.
- I can find the sign of a permutation and read Definition 9.1.
- I can write the six terms of the $3 \times 3$ determinant and use Sarrus' rule.
- I can compute the determinant of a triangular matrix and I know that $\det I_n = 1$.
- I know that $\det({}^tA) = \det A$ and why it lets me work on the columns too.
- I can expand a determinant with Laplace along any row or column, with the chessboard signs.
- I can choose the handiest row or column and reduce a $4 \times 4$ or $5 \times 5$ to a few calculations.
- I can factor out a common factor from a row or a column.
- I can use $\det(cA) = c^n \det A$ and avoid $\det(A + B) = \det A + \det B$.
- I can compute determinants with complex numbers, roots, $\pi$ and $e$ without a calculator.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 9 "Matrici II", pp. 41–45: sections 9.A (determinant, triangular matrices, identity), 9.B (Laplace expansion), 9.C (properties) and 9.D (exercises) are followed in order, with the page next to each heading; definitions, propositions and examples keep their numbering (Definitions 9.1 and 9.4, Propositions 9.3, 9.5, 9.10, 9.11, Theorem 9.6, Corollaries 9.7 and 9.12, Examples 9.2, 9.8, 9.9, Exercises 9.13 and 9.14).
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §3.3.1–3.3.4 (definition, colourings, Proposition 3.3.2, triangular matrices, identity, Theorem 3.3.5), §3.3.10 (positive and negative bases, area and volume), §3.4.6 (Remark 3.4.9 on the determinant of a sum), Exercises 3.10 and 3.11.
- **Exam**: papers of the Linear Algebra exams from 24/01/2024 to 07/09/2026 (2025/26 Moodle, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); reported with my own solution: question 4 of 10/07/2025, question 3 of 02/09/2025 and question 2 of 03/06/2026; the others are cited by number.
- The **"Beyond the handouts"** parts (geometric meaning, Sarrus' rule, sign with inversions, proofs of 9.5 and of the idea behind Laplace, unnumbered exercises) are additions in these notes to connect the lesson to the rest of the course and to the exam.
