---
course: MDAG
module: AG
lesson: L08
title: Matrices I
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Part 2 (modB) · Linear Algebra and Geometry · Channels A, B and C · Lesson L08
description: >-
  Notes on lesson L08 of Linear Algebra and Geometry (MDAG, part 2): transpose of a matrix, symmetric matrices,
  row rank and column rank, the row-by-column product and its properties, trace, with exam-style quizzes and
  worked exercises.
lede: >-
  Matrices stop being simple tables and become tools for calculating: the transpose ${}^tA$, the rank
  $\rk(A)$ (how many really independent columns there are), the row-by-column product, which is not commutative, and
  the trace $\tr A$. These are the operations that appear in almost every exam quiz, often with a trap.
material: handouts
facts:
  Handouts: lesson 8 · pp. 36–40
  Book: Martelli, §2.3.10, §3.2.3, §3.2.6, §3.4.1–3.4.5 and §4.4.5
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 100–130 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 8 "Matrici I"; B. Martelli, Geometria e algebra lineare, §2.3.10, §3.2.3, §3.2.6, §3.4.1–3.4.5 and §4.4.5
italian_file: L08_matrici_1.html
html_notes: notes/MDAG/L08_matrices_1.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L08_matrici_1.md
---

## In brief

- An $m \times n$ matrix has $m$ rows and $n$ columns. The $m \times n$ matrices with coefficients in $\K$ form the vector space $M(m, n, \K)$, of dimension $mn$. Rows are written $A_1, \dots, A_m$ (index at the bottom), columns $A^1, \dots, A^n$ (index at the top).
- The **transpose** ${}^tA$ swaps rows and columns: $({}^tA)_{ij} = A_{ji}$, and an $m \times n$ matrix becomes $n \times m$. A square matrix is **symmetric** if ${}^tA = A$, **skew-symmetric** if ${}^tA = -A$.
- The **rank** $\rk(A)$ is the dimension of the space spanned by the columns, that is, the **maximum number of linearly independent columns**.
- Row rank and column rank are equal: $\rk({}^tA) = \rk(A)$. As a consequence $\rk(A) \le \min(m, n)$.
- The **row-by-column product** $AB$ exists only if $A$ has as many columns as $B$ has rows: $(m \times n) \cdot (n \times p)$ gives an $m \times p$ matrix, with $(AB)_{ij} = A_{i1}B_{1j} + \dots + A_{in}B_{nj}$.
- The product is **not commutative**: usually $AB \neq BA$, and it can happen that $AB = 0$ with $A \neq 0$ and $B \neq 0$. Associativity and distributivity still hold, though.
- The **trace** of a square matrix is the sum of the numbers on the main diagonal, and $\tr(AB) = \tr(BA)$ even when $AB \neq BA$.
- At the exam there is almost always a question "which identity holds among $AB$, $BA$, $A$ and $B$?", a trace of a product and a rank to calculate.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## Where we start again: matrices (p. 36)

A **matrix** is a rectangular table of numbers. In lesson L06 we defined it like this: a matrix with $m$ rows and $n$ columns with coefficients in a field $\K$ (for us almost always $\K = \R$ or $\K = \C$) is

$$A = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & \ddots & \vdots \\ a_{m1} & \cdots & a_{mn} \end{pmatrix}.$$

In short we say that $A$ is an $m \times n$ matrix (read "$m$ by $n$"): **first the rows, then the columns**.

- The number $a_{ij}$ is in row $i$ and column $j$: **the first index is the row, the second the column**. The handouts also write it $A_{ij}$: it is the same thing.
- The $i$-th row is written $A_i$ (index at the bottom), the $j$-th column $A^j$ (index at the top). Careful: here $A^2$ means "second column", not "$A$ squared"; usually the context makes it clear.
- $M(m, n, \K)$ is the set of all $m \times n$ matrices with coefficients in $\K$; the square $n \times n$ matrices form $M(n, \K)$, or more briefly $M(n)$.
- An $m \times 1$ matrix is a **column vector**: $M(m, 1, \K) = \K^m$.

> [!EXAMPLE] · Reading a matrix
> $$A = \begin{pmatrix} 3 & 0 & -1 \\ 2 & 5 & 4 \end{pmatrix}$$
> is a $2 \times 3$ matrix: two rows and three columns. The number in row 2 and column 3 is $a_{23} = 4$; the one in row 1 and column 2 is $a_{12} = 0$. The second row is $A_2 = (2, 5, 4)$, the third column is
> $$A^3 = \begin{pmatrix} -1 \\ 4 \end{pmatrix} \in \R^2.$$
> Each column has as many numbers as there are rows (here 2), so the columns are vectors of $\R^2$; each row has as many numbers as there are columns (here 3), so the rows are vectors of $\R^3$.

The handouts recall the two operations already seen in lesson L06, both **entry by entry**: the sum of two matrices of the same size and the product by a scalar $\lambda \in \K$,

$$(A + B)_{ij} = a_{ij} + b_{ij}, \qquad (\lambda A)_{ij} = \lambda a_{ij}.$$

For example:

$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} + \begin{pmatrix} 0 & -2 \\ 5 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 8 & 5 \end{pmatrix}, \qquad 3 \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} = \begin{pmatrix} 3 & 6 \\ 9 & 12 \end{pmatrix}.$$

With these two operations $M(m, n, \K)$ is a **vector space of dimension $mn$** (Exercise 7.13 of the handouts): a basis is made of the $mn$ matrices $e_{ij}$ that have a 1 in entry $(i, j)$ and 0 elsewhere. In this lesson four new operations arrive.

| Operation | It can be done if | Starts from | Gives |
|---|---|---|---|
| transpose ${}^tA$ | always | $A$ of size $m \times n$ | an $n \times m$ matrix |
| rank $\rk(A)$ | always | $A$ of size $m \times n$ | an integer between $0$ and $\min(m, n)$ |
| product $AB$ | columns of $A$ = rows of $B$ | $A$ of size $m \times n$, $B$ of size $n \times p$ | an $m \times p$ matrix |
| trace $\tr A$ | $A$ square | $A$ of size $n \times n$ | a number |

## The transpose of a matrix (p. 36)

Take a matrix and **flip it over the diagonal** that goes down from the top-left corner: the first column becomes the first row, the second column becomes the second row, and so on. The result is the transpose.

> [!DEF] 8.1 · Transpose
> The **transpose** of a matrix $A \in M(m, n, \K)$ is the matrix
> $${}^tA \in M(n, m, \K)$$
> defined by swapping rows and columns, that is:
> $$({}^tA)_{ij} = A_{ji}.$$

Piece by piece:

- ${}^tA$ is read "$A$ transpose". The small $t$ **at the top left** is the course's notation; in other books you find $A^T$ or $A^t$.
- $A \in M(m, n, \K)$ and ${}^tA \in M(n, m, \K)$: the dimensions **swap**. From $3 \times 2$ you go to $2 \times 3$.
- $({}^tA)_{ij} = A_{ji}$: the number that the transpose has in row $i$ and column $j$ is the one that $A$ has in row $j$ and column $i$. The indices swap, exactly like rows and columns.
- As a consequence row $i$ of ${}^tA$ contains the same numbers as column $i$ of $A$, and column $j$ of ${}^tA$ the same numbers as row $j$ of $A$.

> [!EXAMPLE] 8.2 · A $3 \times 2$ matrix and its transpose
> $$A = \begin{pmatrix} 2 & 1 \\ -1 & 0 \\ 5 & 7 \end{pmatrix} \quad\Longrightarrow\quad {}^tA = \begin{pmatrix} 2 & -1 & 5 \\ 1 & 0 & 7 \end{pmatrix}$$
> The first column of $A$, that is $2, -1, 5$ read from top to bottom, has become the first row of ${}^tA$; the second column $1, 0, 7$ has become the second row. Check of two entries with the definition:
> - $({}^tA)_{13} = A_{31} = 5$ (row 3 and column 1 of $A$);
> - $({}^tA)_{21} = A_{12} = 1$ (row 1 and column 2 of $A$).
>
> $A$ is $3 \times 2$, ${}^tA$ is $2 \times 3$.

The handouts list some properties straight away.

> [!PROP] · Properties of the transpose (p. 36)
> - ${}^t(A + B) = {}^tA + {}^tB$, $\quad {}^t(\lambda A) = \lambda({}^tA)$.
> - If $A \in M(n)$, then also ${}^tA \in M(n)$.
> - $A \in M(n)$ is symmetric $\iff {}^tA = A$; $A \in M(n)$ is skew-symmetric $\iff {}^tA = -A$.

Let us look at them one at a time.

1. **Sums and multiples.** Adding and then transposing gives the same result as transposing and then adding: in both cases entry $(i, j)$ contains $a_{ji} + b_{ji}$. With numbers:
   $${}^t\left(\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} + \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\right) = {}^t\begin{pmatrix} 1 & 3 \\ 4 & 4 \end{pmatrix} = \begin{pmatrix} 1 & 4 \\ 3 & 4 \end{pmatrix} = \begin{pmatrix} 1 & 3 \\ 2 & 4 \end{pmatrix} + \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}.$$
   The same holds for multiples: multiplying every number by $\lambda$ and then flipping, or the other way round, leads to the same matrix. In other words transposition **respects sums and multiples**: from lesson L14 a function with this property will be called *linear*.
2. **Square matrices stay square.** From $n \times n$ you go to $n \times n$. The main diagonal (the entries $a_{11}, a_{22}, \dots, a_{nn}$) **does not move**: $({}^tA)_{ii} = A_{ii}$.
3. **Symmetric and skew-symmetric.** In lesson L06 (Definition 6.3) a square matrix is symmetric if $a_{ij} = a_{ji}$ for all $i, j$, skew-symmetric if $a_{ij} = -a_{ji}$ for all $i, j$. With the transpose you say it in one formula: ${}^tA = A$ means exactly $A_{ji} = A_{ij}$ in every entry.

> [!EXAMPLE] · A symmetric one and a skew-symmetric one
> $$S = \begin{pmatrix} 1 & 4 & 5 \\ 4 & 2 & 6 \\ 5 & 6 & 3 \end{pmatrix}, \qquad N = \begin{pmatrix} 0 & 2 & -1 \\ -2 & 0 & 3 \\ 1 & -3 & 0 \end{pmatrix}.$$
> In $S$ the diagonal acts as a **mirror**: the 4 in position $(1, 2)$ comes back in position $(2, 1)$, the 5 in $(1, 3)$ and $(3, 1)$, the 6 in $(2, 3)$ and $(3, 2)$. So ${}^tS = S$.
>
> In $N$ every number comes back on the other side **with the opposite sign**: $2$ and $-2$, $-1$ and $1$, $3$ and $-3$. So ${}^tN = -N$. The diagonal of a skew-symmetric matrix is all zero: from $a_{ii} = -a_{ii}$ follows $2a_{ii} = 0$, that is $a_{ii} = 0$.

> [!BEYOND] · two more useful properties
> - Transposing twice brings you back to the starting matrix: ${}^t({}^tA) = A$.
> - Every square matrix is the sum of a symmetric one and a skew-symmetric one (Martelli, Example 2.3.33):
>   $$A = \underbrace{\frac{A + {}^tA}2}_{\text{symmetric}} + \underbrace{\frac{A - {}^tA}2}_{\text{skew-symmetric}}.$$
>   For example with $A = \begin{pmatrix} 1 & 2 \\ 4 & 3 \end{pmatrix}$ you find $\frac{A + {}^tA}2 = \begin{pmatrix} 1 & 3 \\ 3 & 3 \end{pmatrix}$ and $\frac{A - {}^tA}2 = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$, which added together give $A$ back.
> - The matrix ${}^tA - A$ is always skew-symmetric, and it is zero **exactly** when $A$ is symmetric. That is why some exam problems ask you to calculate it (see "Towards the exam").

### Vectors written as rows: the notation ${}^t(x, y, z)$

A column vector takes up three lines of text. To save space it is written as the **transpose of a row**:

$${}^t(1, 2, 3) = {}^t\begin{pmatrix} 1 & 2 & 3 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}.$$

In the exam papers it is everywhere: "$v_1 = {}^t(1, 0, -1)$", "$T({}^t(x, y, z)) = {}^t(x + 2y, \dots)$", always with the small $t$ at the top left. It always means: the **column** vector with those coordinates.

## The rank of a matrix (p. 37)

Look at this matrix:

$$A = \begin{pmatrix} 2 & 4 & -2 \\ 1 & 2 & -1 \end{pmatrix}.$$

It has three columns, $A^1 = {}^t(2, 1)$, $A^2 = {}^t(4, 2)$ and $A^3 = {}^t(-2, -1)$, but they are all **multiples of the first one**: $A^2 = 2A^1$ and $A^3 = -A^1$. They all lie on the same line. Three columns, but only one "piece of information": the rank measures exactly this.

```graph
title: The three columns of $A$ lie on the line $y = \frac x2$: the space they span has dimension 1
x: -3 5
y: -2 3
line: 0 0 2 1 | grey | dashed
vector: 4 2 | blue | $A^2$ | ne
vector: 2 1 | accent | thick | $A^1$ | nw
vector: -2 -1 | violet | $A^3$ | sw
```

> [!DEF] 8.3 · Rank
> Let $A$ be an $m \times n$ matrix with coefficients in $\K$, with columns $A^1, \dots, A^n$; each $A^i$ is a vector in $\K^m$. The **rank** of $A$ (or **column rank** of $A$) is the dimension of the space
> $$\Span(A^1, \dots, A^n) \subset \K^m.$$
> It is commonly written $\rk(A)$.

Piece by piece:

- $A^1, \dots, A^n$ are the columns: each one has $m$ numbers, so it is a vector of $\K^m$.
- $\Span(A^1, \dots, A^n)$ is the set of **all** linear combinations $\lambda_1 A^1 + \dots + \lambda_n A^n$ (lesson L06, Definition 6.6): it is a subspace of $\K^m$.
- The **dimension** is the number of vectors in a basis of it (lesson L07, Definition 7.11).
- $\rk$ comes from the English *rank*.

In the example above $\Span(A^1, A^2, A^3) = \Span(A^1)$ is a line, which has dimension 1: $\rk(A) = 1$.

> [!PROP] 8.4
> The rank of $A$ is the maximum number of linearly independent columns of $A$.

The handouts derive it "with a remark from lesson 7". Here is the reasoning, step by step.

1. The columns $A^1, \dots, A^n$ **span** $W = \Span(A^1, \dots, A^n)$, by definition.
2. If they are linearly dependent, one of them is a linear combination of the others (Proposition 7.2). Removing it, the Span **does not change**: every combination that used it can be rewritten with the others.
3. You repeat until the remaining columns are independent. At that point they are independent and span $W$: they are a **basis** of $W$, so their number is $\dim W = \rk(A)$.
4. No group of independent columns can be larger: in a space of dimension $d$, more than $d$ vectors are always dependent (Martelli, §2.3).

So the maximum number of independent columns is exactly $\dim W$. Martelli calls this procedure the **extraction algorithm** of a basis from a set of generators.

You can make the same argument with the rows.

> [!DEF] 8.5 · Row rank
> We define the **row rank** of $A$ as the dimension of the space spanned by the rows
> $$\Span(A_1, \dots, A_m) \subset \K^n.$$
> In other words, the row rank of $A$ is the rank of the transpose ${}^tA$.

The rows have $n$ numbers, so they lie in $\K^n$. "In other words": the columns of ${}^tA$ are exactly the rows of $A$, so the Span of the rows of $A$ is the Span of the columns of ${}^tA$.

At first sight row rank and column rank have nothing in common: in a $2 \times 5$ matrix the columns are five vectors of $\K^2$, the rows two vectors of $\K^5$. Instead:

> [!PROP] 8.6
> For every matrix $A$ the row rank is equal to the column rank. So $\rk({}^tA) = \rk(A)$ holds.

> [!EXAMPLE] · Rows and columns of a $2 \times 5$ matrix
> $$C = \begin{pmatrix} 1 & 2 & 0 & 1 & 3 \\ 2 & 4 & 1 & 0 & 5 \end{pmatrix}$$
> **Rows.** $C_1 = (1, 2, 0, 1, 3)$ and $C_2 = (2, 4, 1, 0, 5)$ are not multiples of each other (in the third position $C_1$ has $0$ and $C_2$ has $1$), so they are independent: the row rank is 2.
>
> **Columns.** Five vectors of $\R^2$: they cannot all five be independent, because $\dim \R^2 = 2$. But $C^1 = {}^t(1, 2)$ and $C^3 = {}^t(0, 1)$ are not multiples, so they are independent: the column rank is 2.
>
> The two ranks are equal, as Proposition 8.6 says.

A consequence to remember, which needs no calculations:

$$\rk(A) \le \min(m, n).$$

Indeed $\Span(A^1, \dots, A^n)$ is a subspace of $\K^m$, so it has dimension at most $m$; and it is spanned by $n$ vectors, so it has dimension at most $n$. A $3 \times 5$ matrix has rank at most 3, a $4 \times 2$ one at most 2.

> [!BEYOND] · why rows and columns give the same rank
> The handouts do not prove it here. Martelli (Proposition 3.2.20) uses the **Gauss moves** on the rows, which you will see in lessons L11 and L12: they change neither the row rank nor the column rank, and they turn the matrix into a "row echelon" matrix, in which both ranks are equal to the number of **pivots** (the first non-zero numbers of the rows). From there also follows the practical method: **the rank is the number of non-zero rows of a reduction to row echelon form**.

### Calculating the rank by hand

> [!METHOD] The rank without Gauss moves
> 1. If $A$ is the zero matrix, $\rk(A) = 0$; if it has at least one non-zero number, $\rk(A) \ge 1$.
> 2. Write down the bound $\rk(A) \le \min(m, n)$ straight away.
> 3. Look for columns **or rows** (the rank is the same, choose the handier ones) that are zero, equal, multiples of others or sums of others: removing them does not change the Span.
> 4. Check that the remaining ones are independent: two vectors are if they are not multiples; with three or more solve $\lambda_1 v_1 + \lambda_2 v_2 + \dots = 0$.
> 5. As many as remain, that is the rank.

> [!EXAMPLE] · Four ranks
> 1. $I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$: the columns are $e_1, e_2, e_3$, independent (lesson L07, Example 7.5). $\rk = 3$.
> 2. $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$: the columns ${}^t(1, 3)$ and ${}^t(2, 4)$ are not multiples (you would need $2 = 1 \cdot c$ and $4 = 3 \cdot c$, that is $c = 2$ and $c = \frac 43$ at the same time). $\rk = 2$.
> 3. $\begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 2 \end{pmatrix}$: the third column is the sum of the first two, ${}^t(1, 1, 2) = {}^t(1, 0, 1) + {}^t(0, 1, 1)$, and the first two are not multiples. $\rk = 2$.
> 4. $\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}$: here it is better to look at the rows. The third is $2 \cdot (4, 5, 6) - (1, 2, 3) = (8 - 1, 10 - 2, 12 - 3) = (7, 8, 9)$, and the first two are not multiples. $\rk = 2$.

In the tool below you find the last matrix. Press "Compute": the tool transforms it with the Gauss moves (you will see them in lessons L10 and L11) and counts the non-zero rows that remain. Then try $I_3$ (type `1 0 0; 0 1 0; 0 0 1`), which has rank 3, and `1 2; 2 4`, which has rank 1.

```widget gauss
title: The rank of a matrix, with the steps
matrice: 1 2 3; 4 5 6; 7 8 9
modo: rango
modi: rango
```

> [!PITFALL] Three typical mistakes about the rank
> - The rank is **not** the number of rows, nor the number of rows with some non-zero number: matrix $4$ of the example has three non-zero rows but rank 2.
> - The rank never exceeds $\min(m, n)$: a $2 \times 5$ matrix cannot have rank 5.
> - Two vectors are dependent only if they are **multiples**; three vectors can be dependent even if no two of them are (lesson L07, Example 7.4). Do not stop at the checks in pairs.

## The product of matrices (pp. 37–38)

### The idea with an everyday example

Anna buys 2 notebooks and 3 pens; Bruno buys 1 notebook and 5 pens. In shop X a notebook costs €4 and a pen €1; in shop Y a notebook costs €3 and a pen €2. How much does each of them spend in each shop?

For Anna in shop X: $2 \cdot 4 + 3 \cdot 1 = 11$ €. It is a "row" (what Anna buys) times a "column" (the prices of X): first times first, second times second, and you add. Putting everything in two tables:

$$\underbrace{\begin{pmatrix} 2 & 3 \\ 1 & 5 \end{pmatrix}}_{\text{purchases: people} \times \text{items}} \underbrace{\begin{pmatrix} 4 & 3 \\ 1 & 2 \end{pmatrix}}_{\text{prices: items} \times \text{shops}} = \begin{pmatrix} 2 \cdot 4 + 3 \cdot 1 & 2 \cdot 3 + 3 \cdot 2 \\ 1 \cdot 4 + 5 \cdot 1 & 1 \cdot 3 + 5 \cdot 2 \end{pmatrix} = \underbrace{\begin{pmatrix} 11 & 12 \\ 9 & 13 \end{pmatrix}}_{\text{spending: people} \times \text{shops}}.$$

The 12 in row 1 and column 2 is how much Anna (row 1) spends in shop Y (column 2). Notice two things that always hold: the product can be done because the **columns** of the first table and the **rows** of the second talk about the same things (the items); the result has the **rows** of the first (the people) and the **columns** of the second (the shops).

> [!DEF] 8.7 · Row-by-column product
> If $A$ is an $m \times n$ matrix and $B$ is an $n \times p$ matrix, the product $AB$ is a new $m \times p$ matrix defined as follows: the entry $(AB)_{ij}$ of the new matrix $AB$ is
> $$(AB)_{ij} = \sum_{k=1}^n A_{ik}B_{kj} = A_{i1}B_{1j} + \dots + A_{in}B_{nj}.$$
> This kind of product of matrices is called the **row-by-column product** because the entry $(AB)_{ij}$ is obtained by taking a suitable product of the $i$-th row $A_i$ of $A$ and the $j$-th column $B^j$ of $B$.

Piece by piece:

- **The sizes.** $(m \times \mathbf{n}) \cdot (\mathbf{n} \times p) = m \times p$: the two "inner" numbers must be **equal**, the "outer" ones give the size of the result. If the inner numbers are different, the product **does not exist**.
- **The symbol $\sum$** (capital sigma) is a sum: $\sum_{k=1}^n x_k$ means $x_1 + x_2 + \dots + x_n$. The index $k$ runs from 1 to $n$.
- **Row by column.** The row $A_i = (A_{i1}, \dots, A_{in})$ and the column $B^j = {}^t(B_{1j}, \dots, B_{nj})$ both have $n$ numbers: you multiply **the first with the first, the second with the second**, and so on, and you add the results. That is why the row needs as many numbers as the column.
- The result goes in the entry that is **in the same row as the row used and in the same column as the column used**. Schematically, row 2 times column 2:
  $$\begin{pmatrix} \cdot & \cdot \\ a & b \\ \cdot & \cdot \end{pmatrix} \begin{pmatrix} \cdot & x & \cdot \\ \cdot & y & \cdot \end{pmatrix} = \begin{pmatrix} \cdot & \cdot & \cdot \\ \cdot & ax + by & \cdot \\ \cdot & \cdot & \cdot \end{pmatrix}$$

> [!EXAMPLE] 8.8 · A $3 \times 2$ times a $2 \times 4$
> $$A = \begin{pmatrix} 1 & 2 \\ -1 & 1 \\ 0 & 3 \end{pmatrix}, \qquad B = \begin{pmatrix} -1 & 2 & 0 & 1 \\ 3 & 0 & 3 & 0 \end{pmatrix}$$
> $A$ is $3 \times 2$ and $B$ is $2 \times 4$: the inner numbers are $2$ and $2$, so $AB$ exists and is $3 \times 4$. The rows of $A$ are $(1, 2)$, $(-1, 1)$, $(0, 3)$; the columns of $B$ are ${}^t(-1, 3)$, ${}^t(2, 0)$, ${}^t(0, 3)$, ${}^t(1, 0)$. The twelve calculations:
>
> | | column 1 | column 2 | column 3 | column 4 |
> |---|---|---|---|---|
> | row 1 | $1 \cdot (-1) + 2 \cdot 3 = 5$ | $1 \cdot 2 + 2 \cdot 0 = 2$ | $1 \cdot 0 + 2 \cdot 3 = 6$ | $1 \cdot 1 + 2 \cdot 0 = 1$ |
> | row 2 | $(-1)(-1) + 1 \cdot 3 = 4$ | $(-1) \cdot 2 + 1 \cdot 0 = -2$ | $(-1) \cdot 0 + 1 \cdot 3 = 3$ | $(-1) \cdot 1 + 1 \cdot 0 = -1$ |
> | row 3 | $0 \cdot (-1) + 3 \cdot 3 = 9$ | $0 \cdot 2 + 3 \cdot 0 = 0$ | $0 \cdot 0 + 3 \cdot 3 = 9$ | $0 \cdot 1 + 3 \cdot 0 = 0$ |
>
> $$AB = \begin{pmatrix} 1 & 2 \\ -1 & 1 \\ 0 & 3 \end{pmatrix} \cdot \begin{pmatrix} -1 & 2 & 0 & 1 \\ 3 & 0 & 3 & 0 \end{pmatrix} = \begin{pmatrix} 5 & 2 & 6 & 1 \\ 4 & -2 & 3 & -1 \\ 9 & 0 & 9 & 0 \end{pmatrix}.$$
> We can compute the product $AB$ because the number of columns of $A$ equals the number of rows of $B$. Conversely, we **cannot** compute the product $BA$: the number of columns of $B$ is 4, while the number of rows of $A$ is 3.

In the tool below you find the matrices of Example 8.8: press "Compute" and compare the twelve calculations with the table. Then swap the two matrices (type $B$ in the first box and $A$ in the second): the tool warns you that the product cannot be done.

```widget gauss
title: The row-by-column product, one entry at a time
matrice: 1 2; -1 1; 0 3
b: -1 2 0 1; 3 0 3 0
modo: prodotto
modi: prodotto
```

A very important special case: the second factor is a column vector.

> [!EXAMPLE] 8.9 · Matrix times vector
> If $A$ is an $m \times n$ matrix and $x$ is an $n \times 1$ matrix, that is a column vector $x \in \K^n$, then the product $Ax$ is an $m \times 1$ matrix, that is a column vector in $\K^m$. For example:
> $$\begin{pmatrix} 1 & 2 \\ -1 & 1 \\ 0 & 3 \end{pmatrix} \cdot \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 1 \cdot 1 + 2 \cdot (-1) \\ (-1) \cdot 1 + 1 \cdot (-1) \\ 0 \cdot 1 + 3 \cdot (-1) \end{pmatrix} = \begin{pmatrix} -1 \\ -2 \\ -3 \end{pmatrix}.$$

> [!BEYOND] · $Ax$ is a combination of the columns of $A$
> Look at Example 8.9 again, this time **by columns**:
> $$1 \cdot \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix} + (-1) \cdot \begin{pmatrix} 2 \\ 1 \\ 3 \end{pmatrix} = \begin{pmatrix} -1 \\ -2 \\ -3 \end{pmatrix}.$$
> In general $Ax = x_1 A^1 + x_2 A^2 + \dots + x_n A^n$: the matrix-times-vector product is the **linear combination of the columns** with the coordinates of $x$ as coefficients. So the set of all vectors $Ax$ is $\Span(A^1, \dots, A^n)$, and the rank is its dimension.
>
> It is also the reason why this product, strange at first sight, is the right one: the system $\begin{cases} 2x + 3y = 5 \\ x - y = 1 \end{cases}$ is written in one line as
> $$\begin{pmatrix} 2 & 3 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \end{pmatrix},$$
> that is $Ax = b$ (Martelli, §3.4.2). From lesson L11 you work with linear systems written like this.

### The product is not commutative

If $A$ and $B$ are two $n \times n$ matrices, you can compute both $AB$ and $BA$, and the result is $n \times n$ in both cases. But **in general these two products are not equal**: the product of matrices is **not commutative**.

> [!EXAMPLE] 8.10 · $AB \neq BA$
> Let $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ and $B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$.
>
> $AB$, entry by entry: $(1, 1)$: $1 \cdot 0 + 0 \cdot 0 = 0$; $(1, 2)$: $1 \cdot 1 + 0 \cdot 0 = 1$; $(2, 1)$: $0 \cdot 0 + 0 \cdot 0 = 0$; $(2, 2)$: $0 \cdot 1 + 0 \cdot 0 = 0$.
>
> $BA$: $(1, 1)$: $0 \cdot 1 + 1 \cdot 0 = 0$; $(1, 2)$: $0 \cdot 0 + 1 \cdot 0 = 0$; $(2, 1)$: $0 \cdot 1 + 0 \cdot 0 = 0$; $(2, 2)$: $0 \cdot 0 + 0 \cdot 0 = 0$.
> $$AB = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} = B, \qquad BA = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} = 0,$$
> so $AB \neq BA$.

The example also shows that some rules of numbers no longer hold for matrices.

> [!PITFALL] With matrices you cannot "cancel"
> - $BA = 0$ even though $A \neq 0$ and $B \neq 0$: a zero product does **not** imply that a factor is zero.
> - $AB = B$, but $A$ is not the matrix that "changes nothing" (the identity matrix $I_2$, lesson L09): from $AB = B$ you **cannot** "divide by $B$" and conclude $A = I_2$.
> - The order of the factors must always be respected: $(A + B)^2 = (A + B)(A + B) = A^2 + AB + BA + B^2$, which in general is **not** $A^2 + 2AB + B^2$ (exercise 6).

Even when $AB$ and $BA$ both exist, they can have **different sizes**: if $A$ is $3 \times 2$ and $B$ is $2 \times 3$, then $AB$ is $3 \times 3$ and $BA$ is $2 \times 2$ (Exercise 8.15). The rules that do work as with numbers are these.

> [!PROP] 8.11
> For all matrices $A, B, C$ for which the products and sums make sense and for every $\lambda \in \K$, we have
> 1. $A(BC) = (AB)C$ (associativity),
> 2. $A(B + C) = AB + AC$ and $(A + B)C = AC + BC$ (distributivity),
> 3. $\lambda(AB) = (\lambda A)B = A(\lambda B)$.

Piece by piece:

- "For which the products and sums make sense": the sizes must be compatible. For example in (1) $A$ is $m \times n$, $B$ is $n \times p$, $C$ is $p \times q$.
- **Associativity**: you can write $ABC$ without brackets and compute it as you prefer, $(AB)C$ or $A(BC)$. But **the order of the letters stays the same**: $ABC$ is not $ACB$.
- **Distributivity** in two versions, because the product is not commutative: in the first $A$ multiplies **on the left** and stays on the left, in the second $C$ multiplies **on the right** and stays on the right.
- **Scalars** instead move freely: $\lambda(AB) = (\lambda A)B = A(\lambda B)$.

> [!PROOF] of Proposition 8.11, points (1) and (2)
> We follow Martelli (Proposition 3.4.2). For distributivity, with the definition of product and of sum:
> $$(A(B + C))_{ij} = \sum_k A_{ik}(B + C)_{kj} = \sum_k A_{ik}B_{kj} + \sum_k A_{ik}C_{kj} = (AB)_{ij} + (AC)_{ij}.$$
> For associativity you write both sides as double sums:
> $$(A(BC))_{ij} = \sum_k A_{ik}(BC)_{kj} = \sum_k \sum_h A_{ik}B_{kh}C_{hj},$$
> $$((AB)C)_{ij} = \sum_h (AB)_{ih}C_{hj} = \sum_h \sum_k A_{ik}B_{kh}C_{hj}.$$
> They are the same sums of products $A_{ik}B_{kh}C_{hj}$, over all pairs $(k, h)$, only in a different order: so they are equal. Point (3) is checked in the same way.

> [!BEYOND] · the identity matrix and powers
> The **identity matrix** $I_n$ has 1 on the diagonal and 0 elsewhere; the handouts introduce it in lesson L09 (Definition 9.4). In the product it plays the part of the number 1: $I_n A = A I_n = A$ for every $A \in M(n)$ (Martelli, Proposition 3.4.4). With square matrices you can take **powers**: $A^2 = AA$, $A^3 = AAA$, and so on. For example
> $$A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}, \quad A^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}, \quad A^3 = A^2 A = \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}.$$
> In Discrete Mathematics you will say that $M(n)$, with sum and product, is a **non-commutative ring** (for $n \ge 2$).

> [!METHOD] "Which identity holds?"
> It is a very frequent exam question: given square $3 \times 3$ matrices $A$ and $B$, which of $AB = BA$, $AB = A$, $AB = B$, $BA = A$, $BA = B$ is true?
> 1. Compute $AB$ row by row (nine calculations). Often the matrices have many zeros and many 1s: take advantage of them.
> 2. Compare $AB$ with $A$ and with $B$.
> 3. If neither works, compute $BA$ and compare it with $A$, with $B$ and with $AB$.
> 4. To **rule out** an equality **one** different entry is enough: you do not need to finish the whole product.

## The trace of a square matrix (p. 39)

In the matrix $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ the main diagonal contains 1 and 4: their sum, 5, is the trace.

> [!DEF] 8.12 · Trace
> The **trace** of a square matrix $A \in M(n)$ is the number
> $$\tr A = A_{11} + \dots + A_{nn}.$$
> That is, the trace of $A$ is the sum of the numbers on the main diagonal of $A$.

- It is computed only for **square** matrices: in a $2 \times 3$ one the main diagonal does not go "from corner to corner".
- $\tr$ comes from the English *trace*.
- For example $\tr \begin{pmatrix} 2 & 7 & -1 \\ 0 & -3 & 5 \\ 4 & 1 & 6 \end{pmatrix} = 2 + (-3) + 6 = 5$, and $\tr I_n = 1 + \dots + 1 = n$.

The product is not commutative, but the trace "does not notice".

> [!PROP] 8.13
> If $A, B \in M(n)$, the relation $\tr(AB) = \tr(BA)$ holds.

The handouts' explanation is one line:

$$\tr(AB) = \sum_{i, j = 1}^n A_{ij}B_{ji} = \sum_{j, i = 1}^n B_{ji}A_{ij} = \tr(BA).$$

Here it is step by step.

1. The diagonal entry $(AB)_{ii}$ is row $i$ of $A$ times column $i$ of $B$: $(AB)_{ii} = \sum_{j} A_{ij}B_{ji}$ (here the summation index is called $j$).
2. Adding over $i$: $\tr(AB) = \sum_i \sum_j A_{ij}B_{ji}$, a sum with one term for **each pair** $(i, j)$.
3. In the same way $(BA)_{jj} = \sum_i B_{ji}A_{ij}$, so $\tr(BA) = \sum_j \sum_i B_{ji}A_{ij}$.
4. The two totals contain the same terms ($A_{ij}B_{ji} = B_{ji}A_{ij}$, because between **numbers** the product is commutative), for the same pairs $(i, j)$: they are equal.

In the $2 \times 2$ case you can see it at a glance: with $A = (a_{ij})$ and $B = (b_{ij})$,

$$\tr(AB) = a_{11}b_{11} + a_{12}b_{21} + a_{21}b_{12} + a_{22}b_{22},$$

$$\tr(BA) = b_{11}a_{11} + b_{12}a_{21} + b_{21}a_{12} + b_{22}a_{22}:$$

are the same four products.

> [!EXAMPLE] · Different products, same trace
> $$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}, \quad B = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}: \qquad AB = \begin{pmatrix} 1 \cdot 0 + 2 \cdot 1 & 1 \cdot 1 + 2 \cdot 1 \\ 3 \cdot 0 + 4 \cdot 1 & 3 \cdot 1 + 4 \cdot 1 \end{pmatrix} = \begin{pmatrix} 2 & 3 \\ 4 & 7 \end{pmatrix},$$
> $$BA = \begin{pmatrix} 0 \cdot 1 + 1 \cdot 3 & 0 \cdot 2 + 1 \cdot 4 \\ 1 \cdot 1 + 1 \cdot 3 & 1 \cdot 2 + 1 \cdot 4 \end{pmatrix} = \begin{pmatrix} 3 & 4 \\ 4 & 6 \end{pmatrix}.$$
> $AB \neq BA$, but $\tr(AB) = 2 + 7 = 9$ and $\tr(BA) = 3 + 6 = 9$.

> [!BEYOND] · other properties of the trace, useful in the quizzes
> - It is linear: $\tr(A + B) = \tr A + \tr B$ and $\tr(\lambda A) = \lambda \tr A$. Moreover $\tr({}^tA) = \tr A$, because the diagonal does not move.
> - It is **not** multiplicative: $\tr(AB) \neq \tr A \cdot \tr B$ in general. With $A = B = I_2$: $\tr(I_2 I_2) = 2$, while $\tr I_2 \cdot \tr I_2 = 4$.
> - The same proof works if $A$ is $m \times n$ and $B$ is $n \times m$: $AB$ and $BA$ have different sizes but the same trace (you check it in Exercise 8.15).
> - With three factors you can "rotate": $\tr(ABC) = \tr(BCA) = \tr(CAB)$ (just apply Proposition 8.13 to $A$ and $BC$), but you **cannot** swap two factors: $\tr(ACB)$ can be different (exercise 11).
> - For $\tr(AB)$ the diagonal entries are enough: $\tr(AB) = \sum_i (\text{row } i \text{ of } A) \cdot (\text{column } i \text{ of } B)$. And for a real matrix $\tr(A\,{}^tA)$ is the **sum of the squares of all its numbers**, because $(A\,{}^tA)_{ii}$ is row $i$ of $A$ times itself.

> [!BEYOND] · where to find it in the book
> In Martelli's book: the transpose in §2.3.10 (p. 73) and symmetric and skew-symmetric matrices in §2.3.11 (pp. 73–74); the rank in §3.2.3 (pp. 88–89: Definition 3.2.7, Proposition 3.2.8, Corollary 3.2.11) and row and column rank in §3.2.6 (p. 92, Proposition 3.2.20 and Corollary 3.2.21); the product of matrices and its properties in §3.4.1–3.4.5 (pp. 104–107), with Exercise 3.4.3 on the transpose of the product; the trace in §4.4.5 (p. 141, Proposition 4.4.11).

## Towards the exam

The Linear Algebra and Geometry written test has 10 quiz questions with 5 answers each (you need at least 6 correct answers for the 2 problems worth 11 points to be marked), it lasts 2 hours, with no calculator and only 4 handwritten pages of notes; the 2026/27 exam sessions are on 22/01 and 05/02/2027 at 14:00. The details are in lesson L01.

The operations of this lesson appear in **almost every exam session** from 2023 to 2026:

| Type of question | Exam sessions (question number) | What you need |
|---|---|---|
| "Which identity holds?" among $AB$, $BA$, $A$, $B$ | 24/01/2024 (6), 10/06/2024 (5), 10/07/2024 (3), 15/01/2026 (1), 03/06/2026 (5) | row-by-column product, $AB \neq BA$ |
| trace of a product | 08/02/2024 (4), 06/09/2024 (8), 16/01/2025 (3), 10/07/2025 (9), 05/02/2026 (3), 03/07/2026 (9), 07/09/2026 (8) | only the diagonal of the product |
| product of three $2 \times 2$ matrices | 07/02/2025 (3) | associativity, order of the factors |
| rank of a $3 \times 3$, $4 \times 4$ or $5 \times 5$ matrix | 10/06/2024 (10), 16/01/2025 (6), 07/02/2025 (4), 05/02/2026 (4), 07/09/2026 (9) | relations between rows or columns, then Gauss (L11–L12) |
| computing ${}^tA - A$ in a problem | 24/01/2024 (11), 15/01/2026 (11) | transpose, symmetric matrices |

Three real questions, with the worked solution.

> [!EXAM] Exam of 15/01/2026, question 1
> Let $A = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & -1 & 0 \\ 0 & 1 & -1 \\ 0 & 0 & 1 \end{pmatrix}$. Which identity holds? (a) $AB = BA$; (b) $BA = B$; (c) $AB = B$; (d) $AB = A$; (e) $BA = A$.
>
> **Solution.** I compute $AB$ row by row. Row 1 of $A$ is $(1, 1, 1)$: with the three columns of $B$ it gives $1 + 0 + 0 = 1$, then $-1 + 1 + 0 = 0$, then $0 - 1 + 1 = 0$. Row 2, $(0, 1, 1)$, gives $0$, $1$, $-1 + 1 = 0$. Row 3, $(0, 0, 1)$, gives $0, 0, 1$. So $AB = I_3$, which is neither $A$ nor $B$: (c) and (d) are false. Redoing the calculation in the other order you also find $BA = I_3$ (row 2 of $B$ times the columns of $A$: $0$, $1$, $1 - 1 = 0$, and so on). So $AB = BA$: answer **(a)**. The two matrices are each the inverse of the other, a concept of lesson L10.

> [!EXAM] Exam of 10/07/2025, question 9
> Given the matrix $A = \begin{pmatrix} 2 & 1 \\ 0 & 1 \\ 0 & 1 \end{pmatrix}$, the trace of $A \cdot {}^tA$ is: (a) 7; (b) 9; (c) it cannot be computed, since $A$ is not a square matrix; (d) 6; (e) 0.
>
> **Solution.** $A$ is $3 \times 2$ and ${}^tA$ is $2 \times 3$, so $A \cdot {}^tA$ is $3 \times 3$: it is **square**, and the trace exists. Answer (c) is the trap. Only the diagonal entries are needed: $(A\,{}^tA)_{ii}$ is row $i$ of $A$ times itself, that is $2^2 + 1^2 = 5$, then $0^2 + 1^2 = 1$, then $0^2 + 1^2 = 1$. Trace: $5 + 1 + 1 = 7$, answer **(a)**. Check with Proposition 8.13: ${}^tA\,A = \begin{pmatrix} 4 & 2 \\ 2 & 3 \end{pmatrix}$ has trace $4 + 3 = 7$.

> [!EXAM] Exam of 15/01/2026, problem 11, point (2), first part
> Given $A = \begin{pmatrix} 1 & k^2 & 0 \\ k & k + 1 & k \\ 0 & k & 1 \end{pmatrix}$ in $M(3, \R)$, with $k$ a real parameter, compute ${}^tA - A$.
>
> **Solution.** ${}^tA = \begin{pmatrix} 1 & k & 0 \\ k^2 & k + 1 & k \\ 0 & k & 1 \end{pmatrix}$ (the first row of $A$ becomes the first column, and so on). Subtracting entry by entry:
> $${}^tA - A = \begin{pmatrix} 0 & k - k^2 & 0 \\ k^2 - k & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}.$$
> It is zero if and only if $k - k^2 = k(1 - k) = 0$, that is for $k = 0$ or $k = 1$: **only for these values is $A$ symmetric**. The rest of the problem needed exactly this, because real symmetric matrices have real eigenvalues and an orthonormal basis of eigenvectors (spectral theorem, lessons L25–L26). Notice that the result is skew-symmetric, as it must be.

**The method for the questions on the rank.** First look for obvious relations between rows or columns: equal columns, multiple rows, a row that is the sum of two others. In the quizzes of recent years there almost always were some: in the $3 \times 3$ matrices a column twice another, or a row equal to the sum of the other two, or a combination with small coefficients (such as $-2$ and $3$); in the $4 \times 4$ one of 05/02/2026 two rows were combinations of the first two. Then check that the remaining rows are independent. If you see nothing, reduce to row echelon form with Gauss (lessons L11–L12) or, for a square matrix, compute the determinant (lessons L09–L10: $\det A \neq 0$ means maximum rank).

**The method for traces.** Do not compute the whole product: you only need the diagonal entries, that is $n$ products "row $i$ times column $i$". With three factors, $\tr(ABC)$, first compute $AB$ (you need all of it) and then only the diagonal of $(AB)C$; or use $\tr(ABC) = \tr(CAB)$ if it is handier. In the questions with roots and $\pi$ (08/02/2024, 07/09/2026) the "ugly" numbers almost always cancel out: trust the calculation.

Mistakes to avoid:

- multiplying **column by row** instead of row by column, or swapping the order of the factors;
- taking for granted that $AB = BA$, or that $AB = 0$ implies $A = 0$ or $B = 0$;
- writing $\tr(AB) = \tr A \cdot \tr B$;
- forgetting that ${}^t(AB) = {}^tB\,{}^tA$ (with the order **reversed**);
- answering "it cannot be computed" when the final product is square even though the factors are not;
- stating a rank greater than $\min(m, n)$.

> [!EXAM] The 4-page sheet
> From this lesson: $(m \times n)(n \times p) = m \times p$ and $(AB)_{ij} = \sum_k A_{ik}B_{kj}$; $AB \neq BA$ in general; ${}^t(AB) = {}^tB\,{}^tA$; $\tr(AB) = \tr(BA)$, $\tr(ABC) = \tr(CAB)$, $\tr(A\,{}^tA)$ equal to the sum of the squares of the numbers of $A$; $\rk(A) = \rk({}^tA) \le \min(m, n)$; symmetric $\iff {}^tA = A$.

## Quiz

```quiz
Q: Let $A = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 1 & 1 & 1 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 0 & 0 \\ -1 & 1 & 0 \\ 0 & -1 & 1 \end{pmatrix}$. Which identity holds?
+ $AB = BA$
- $AB = A$
- $AB = B$
- $BA = A$
- $BA = B$
= Row by column: row 2 of $A$, $(1, 1, 0)$, times the columns of $B$ gives $1 - 1 = 0$, $1$, $0$; row 3, $(1, 1, 1)$, gives $1 - 1 + 0 = 0$, $1 - 1 = 0$, $1$. So $AB = I_3$, and in the same way $BA = I_3$: $AB = BA$ holds. The others are false because $I_3$ is neither $A$ nor $B$. Similar to the exam of 15/01/2026, question 1.

Q: Let $A = \begin{pmatrix} 0 & 1 & 2 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}$ and $B = \begin{pmatrix} 3 & 1 & -1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$. Which identity holds?
+ $AB = A$
- $AB = B$
- $BA = A$
- $BA = B$
- $AB = BA$
= Every row of $A$ has 0 in the first place, so the first row of $B$ gets multiplied by 0; the other rows of $B$ are $(0, 1, 0)$ and $(0, 0, 1)$ and copy the rest. For example row 1 of $AB$ is $0 \cdot (3, 1, -1) + 1 \cdot (0, 1, 0) + 2 \cdot (0, 0, 1) = (0, 1, 2)$. So $AB = A$. Instead the first row of $BA$ is $3(0, 1, 2) + (0, 1, 1) - (0, 0, 0) = (0, 4, 7)$, different from those of $A$, of $B$ and of $AB$. Similar to the exams of 03/06/2026 (question 5) and 24/01/2024 (question 6).

Q: Let $A = \begin{pmatrix} \sqrt 5 & 0 & -\pi \\ 0 & \sqrt 2 & \sqrt 2 \\ \pi & \sqrt 5 & 0 \end{pmatrix}$ and $B = \begin{pmatrix} \sqrt 5 & \pi & \sqrt 5 \\ \pi & 0 & -\pi \\ 0 & \sqrt 2 & \sqrt 2 \end{pmatrix}$. What is $\tr(AB)$?
+ $7$
- $(\sqrt 5 + \sqrt 2)^2$
- $5 + 2\pi^2$
- $\sqrt 7$
- $2\pi\sqrt 5$
= Only the diagonal entries are needed. $(AB)_{11} = \sqrt 5 \cdot \sqrt 5 + 0 \cdot \pi + (-\pi) \cdot 0 = 5$; $(AB)_{22} = 0 \cdot \pi + \sqrt 2 \cdot 0 + \sqrt 2 \cdot \sqrt 2 = 2$; $(AB)_{33} = \pi\sqrt 5 + \sqrt 5 \cdot (-\pi) + 0 \cdot \sqrt 2 = 0$. Total $7$. Similar to the exams of 07/09/2026 (question 8) and 08/02/2024 (question 4).

Q: Given $A = \begin{pmatrix} 1 & 0 & 2 \\ 3 & 1 & 0 \end{pmatrix}$, what is $\tr(A \cdot {}^tA)$?
+ $15$
- It cannot be computed, since $A$ is not square.
- $2$
- $7$
- $49$
= $A$ is $2 \times 3$, so $A \cdot {}^tA$ is $2 \times 2$: square, the trace exists. The diagonal entries are the rows of $A$ times themselves: $1 + 0 + 4 = 5$ and $9 + 1 + 0 = 10$, total $15$, that is the sum of the squares of all the numbers of $A$. The $2$ is the sum $a_{11} + a_{22}$ of $A$, the $7$ the sum of its numbers. Similar to the exam of 10/07/2025, question 9.

Q: What is the rank of the matrix $\begin{pmatrix} 2 & 1 & 3 \\ 1 & 1 & 2 \\ 3 & 2 & 5 \end{pmatrix}$?
+ $2$
- $3$
- $1$
- $0$
- $5$
= The third row is the sum of the first two: $(2 + 1, 1 + 1, 3 + 2) = (3, 2, 5)$. The first two are not multiples (you would need $2 = c \cdot 1$ and $1 = c \cdot 1$ at the same time). So there are at most 2 independent rows, and there are 2: rank 2. Similar to the exams of 07/09/2026 (question 9) and 16/01/2025 (question 6).

Q: $A$ is a $2 \times 3$ matrix and $B$ is a $3 \times 4$ matrix. Which statement is true?
+ $AB$ is a $2 \times 4$ matrix and $BA$ is not defined.
- $AB$ and $BA$ are both defined.
- $AB$ is a $3 \times 3$ matrix.
- $AB$ is not defined, $BA$ is a $4 \times 3$ matrix.
- $AB$ is $2 \times 4$ and $BA$ is $4 \times 2$.
= $(2 \times 3)(3 \times 4)$: the inner numbers are equal, the result is $2 \times 4$. For $BA$ the 4 columns of $B$ would have to be as many as the 2 rows of $A$: they are not, so $BA$ does not exist.

Q: For matrices $A$ and $B$ for which the product $AB$ is defined, ${}^t(AB)$ is equal to:
+ ${}^tB\,{}^tA$
- ${}^tA\,{}^tB$
- $AB$
- $BA$
- ${}^tA\,B$
= It is Exercise 8.14 of the handouts: the transpose of a product is the product of the transposes in reverse order. ${}^tA\,{}^tB$ in general is not even defined: with $A$ $3 \times 2$ and $B$ $2 \times 4$ it would be $(2 \times 3)(4 \times 2)$.

Q: For which $k \in \R$ is the matrix $A = \begin{pmatrix} 1 & k^2 & 2 \\ k & 0 & 1 \\ 2 & 1 & 3 \end{pmatrix}$ symmetric?
+ For $k = 0$ or $k = 1$.
- Only for $k = 1$.
- Only for $k = 0$.
- For $k = \pm 1$.
- For no value of $k$.
= ${}^tA = A$ means $a_{ij} = a_{ji}$: $a_{13} = a_{31} = 2$ and $a_{23} = a_{32} = 1$ are already fine, what is left is $a_{12} = a_{21}$, that is $k^2 = k$, which gives $k(k - 1) = 0$. With $k = -1$ you would have $a_{12} = 1 \neq -1 = a_{21}$. Similar to the exam of 15/01/2026, problem 11.

Q: Let $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$ and $B = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$. What is $\tr(ABA)$?
N: 4
= $AB = \begin{pmatrix} 1 \cdot 0 + 2 \cdot 1 & 1 \cdot 1 + 2 \cdot 0 \\ 0 + 1 & 0 \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 0 \end{pmatrix}$, then $(ABA)_{11} = 2 \cdot 1 + 1 \cdot 0 = 2$ and $(ABA)_{22} = 1 \cdot 2 + 0 \cdot 1 = 2$: trace $4$. Careful: $\tr A \cdot \tr B \cdot \tr A = 2 \cdot 0 \cdot 2 = 0$ is wrong. Similar to the exam of 05/02/2026, question 3.

Q: Let $A$ be a $3 \times 5$ matrix with real coefficients. Which statement is always true?
+ $\rk(A) \le 3$.
- $\rk(A)$ can be equal to $5$.
- $\rk({}^tA)$ can be different from $\rk(A)$.
- $\rk(A) = 3$.
- The 5 columns of $A$ are linearly independent.
= The columns lie in $\R^3$, so the space they span has dimension at most 3: $\rk(A) \le \min(3, 5) = 3$. Five vectors of $\R^3$ are always dependent. The rank can be less than 3 (for example the zero matrix has rank 0), and $\rk({}^tA) = \rk(A)$ always (Proposition 8.6).
```

## Exercises

::: exercise basic Exercise 8.15 of the handouts: $AB$, $BA$ and their traces
Let $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{pmatrix}$. Compute $AB$ and $BA$. Compute the trace of $AB$ and of $BA$.
::: solution
**Sizes.** $A$ is $3 \times 2$, $B$ is $2 \times 3$: $AB$ is $(3 \times 2)(2 \times 3) = 3 \times 3$, $BA$ is $(2 \times 3)(3 \times 2) = 2 \times 2$. Both exist, but they have different sizes.

**$AB$.** The rows of $A$ are $(1, 2)$, $(3, 4)$, $(5, 6)$; the columns of $B$ are ${}^t(1, 4)$, ${}^t(2, 5)$, ${}^t(3, 6)$.
- row 1: $1 + 8 = 9$, $\ 2 + 10 = 12$, $\ 3 + 12 = 15$;
- row 2: $3 + 16 = 19$, $\ 6 + 20 = 26$, $\ 9 + 24 = 33$;
- row 3: $5 + 24 = 29$, $\ 10 + 30 = 40$, $\ 15 + 36 = 51$.

$$AB = \begin{pmatrix} 9 & 12 & 15 \\ 19 & 26 & 33 \\ 29 & 40 & 51 \end{pmatrix}, \qquad \tr(AB) = 9 + 26 + 51 = 86.$$

**$BA$.** The rows of $B$ are $(1, 2, 3)$ and $(4, 5, 6)$; the columns of $A$ are ${}^t(1, 3, 5)$ and ${}^t(2, 4, 6)$.
- row 1: $1 + 6 + 15 = 22$, $\ 2 + 8 + 18 = 28$;
- row 2: $4 + 15 + 30 = 49$, $\ 8 + 20 + 36 = 64$.

$$BA = \begin{pmatrix} 22 & 28 \\ 49 & 64 \end{pmatrix}, \qquad \tr(BA) = 22 + 64 = 86.$$

The two traces are equal even though the matrices have different sizes: the proof of Proposition 8.13 also works for $A$ of size $m \times n$ and $B$ of size $n \times m$.
:::

::: exercise intermediate Exercise 8.16 of the handouts: associativity yes, commutativity no
Let $A = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}$, $B = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}$, $C = \begin{pmatrix} -1 & 0 & 0 \\ 0 & 0 & -1 \\ 0 & -1 & 0 \end{pmatrix}$. Compute $(AB)C$, $A(BC)$, $(BA)C$ and $C(BA)$.
::: solution
It is worth first understanding what $B$ and $C$ do, using the remark "$Ax$ is a combination of the columns of $A$" (and the analogous one for rows).

**$AB$.** The columns of $B$ are ${}^t(1, 0, 1)$, ${}^t(0, 1, 0)$, ${}^t(1, 0, 1)$, so the columns of $AB$ are $A^1 + A^3$, $A^2$, $A^1 + A^3$. With $A^1 = {}^t(1, 4, 7)$, $A^2 = {}^t(2, 5, 8)$, $A^3 = {}^t(3, 6, 9)$:
$$AB = \begin{pmatrix} 4 & 2 & 4 \\ 10 & 5 & 10 \\ 16 & 8 & 16 \end{pmatrix}.$$
Check of one entry with the definition: $(AB)_{21} = 4 \cdot 1 + 5 \cdot 0 + 6 \cdot 1 = 10$ ✓.

**Multiplying on the right by $C$.** The columns of $C$ are $-e_1$, $-e_3$, $-e_2$: the columns of $XC$ are $-X^1$, $-X^3$, $-X^2$ (change of sign and swap of the second with the third). So
$$(AB)C = \begin{pmatrix} -4 & -4 & -2 \\ -10 & -10 & -5 \\ -16 & -16 & -8 \end{pmatrix}.$$

**$A(BC)$.** $BC$ has columns $-B^1$, $-B^3$, $-B^2$: $BC = \begin{pmatrix} -1 & -1 & 0 \\ 0 & 0 & -1 \\ -1 & -1 & 0 \end{pmatrix}$. Row by column, for example $(A(BC))_{11} = 1 \cdot (-1) + 2 \cdot 0 + 3 \cdot (-1) = -4$ and $(A(BC))_{23} = 4 \cdot 0 + 5 \cdot (-1) + 6 \cdot 0 = -5$. Completing:
$$A(BC) = \begin{pmatrix} -4 & -4 & -2 \\ -10 & -10 & -5 \\ -16 & -16 & -8 \end{pmatrix} = (AB)C,$$
as associativity guarantees (Proposition 8.11).

**$BA$.** Multiplying **on the left** by $B$ acts on the rows: the rows of $BA$ are $A_1 + A_3$, $A_2$, $A_1 + A_3$:
$$BA = \begin{pmatrix} 8 & 10 & 12 \\ 4 & 5 & 6 \\ 8 & 10 & 12 \end{pmatrix}.$$

**$(BA)C$**: columns $-X^1, -X^3, -X^2$ with $X = BA$:
$$(BA)C = \begin{pmatrix} -8 & -12 & -10 \\ -4 & -6 & -5 \\ -8 & -12 & -10 \end{pmatrix}.$$

**$C(BA)$**: on the left $C$ acts on the rows, which become $-X_1$, $-X_3$, $-X_2$:
$$C(BA) = \begin{pmatrix} -8 & -10 & -12 \\ -8 & -10 & -12 \\ -4 & -5 & -6 \end{pmatrix}.$$

Moral: $(AB)C = A(BC)$, but $(BA)C \neq C(BA)$, because $C$ and $BA$ do not commute.
:::

::: exercise intermediate Exercise 8.14 of the handouts: the transpose of a product
Prove that the relation ${}^t(AB) = {}^tB\,{}^tA$ holds.
::: solution
Let $A$ be of size $m \times n$ and $B$ of size $n \times p$, so that $AB$ exists and is $m \times p$.

1. **The sizes match.** ${}^t(AB)$ is $p \times m$. ${}^tB$ is $p \times n$ and ${}^tA$ is $n \times m$, so ${}^tB\,{}^tA$ exists and is $p \times m$. (Instead ${}^tA\,{}^tB$ would be $(n \times m)(p \times n)$, which in general does not exist.)
2. **Entry $(i, j)$ of the left-hand side.** By the definition of transpose and then of product:
   $$({}^t(AB))_{ij} = (AB)_{ji} = \sum_{k=1}^n A_{jk}B_{ki}.$$
3. **Entry $(i, j)$ of the right-hand side.** By the definition of product and then of transpose:
   $$({}^tB\,{}^tA)_{ij} = \sum_{k=1}^n ({}^tB)_{ik}({}^tA)_{kj} = \sum_{k=1}^n B_{ki}A_{jk}.$$
4. The two sums have the same terms, because $A_{jk}B_{ki} = B_{ki}A_{jk}$ (they are numbers). The matrices have the same size and the same entries: they are equal. $\square$

**Check with numbers** (Example 8.8): ${}^t(AB) = {}^t\begin{pmatrix} 5 & 2 & 6 & 1 \\ 4 & -2 & 3 & -1 \\ 9 & 0 & 9 & 0 \end{pmatrix}$ has first row $(5, 4, 9)$. And the first row of ${}^tB\,{}^tA$ is the row $(-1, 3)$ of ${}^tB$ times the columns ${}^t(1, 2)$, ${}^t(-1, 1)$, ${}^t(0, 3)$ of ${}^tA$: $-1 + 6 = 5$, $1 + 3 = 4$, $0 + 9 = 9$ ✓.
:::

::: exercise basic Transpose, symmetric part and skew-symmetric part
Let $A = \begin{pmatrix} 1 & 4 & 2 \\ 0 & 3 & 5 \\ -2 & 1 & 6 \end{pmatrix}$. (a) Compute ${}^tA$. (b) Compute $S = \frac{A + {}^tA}2$ and $N = \frac{A - {}^tA}2$ and check that $S$ is symmetric, $N$ is skew-symmetric and $S + N = A$. (c) Compute $\tr A$ and $\tr({}^tA)$.
::: solution
(a) The rows of ${}^tA$ are the columns of $A$:
$${}^tA = \begin{pmatrix} 1 & 0 & -2 \\ 4 & 3 & 1 \\ 2 & 5 & 6 \end{pmatrix}.$$

(b) Sum and difference entry by entry:
$$A + {}^tA = \begin{pmatrix} 2 & 4 & 0 \\ 4 & 6 & 6 \\ 0 & 6 & 12 \end{pmatrix}, \qquad A - {}^tA = \begin{pmatrix} 0 & 4 & 4 \\ -4 & 0 & 4 \\ -4 & -4 & 0 \end{pmatrix},$$
so
$$S = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 3 & 3 \\ 0 & 3 & 6 \end{pmatrix}, \qquad N = \begin{pmatrix} 0 & 2 & 2 \\ -2 & 0 & 2 \\ -2 & -2 & 0 \end{pmatrix}.$$
$S$ is symmetric: the numbers off the diagonal mirror each other ($2$ and $2$, $0$ and $0$, $3$ and $3$). $N$ is skew-symmetric: zero diagonal and mirrored numbers with the opposite sign. Finally $S + N = \begin{pmatrix} 1 & 4 & 2 \\ 0 & 3 & 5 \\ -2 & 1 & 6 \end{pmatrix} = A$ ✓.

(c) $\tr A = 1 + 3 + 6 = 10$ and $\tr({}^tA) = 1 + 3 + 6 = 10$: the diagonal does not change when you transpose.
:::

::: exercise intermediate Four ranks
Find the rank of the matrices
$$A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 1 & 0 \\ 0 & 3 & 6 \end{pmatrix}, \quad B = \begin{pmatrix} 1 & -1 & 2 \\ -2 & 2 & -4 \end{pmatrix}, \quad C = \begin{pmatrix} 1 & 0 & 2 & 1 \\ 0 & 1 & 1 & 1 \\ 1 & 1 & 3 & 2 \end{pmatrix}, \quad D = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix}.$$
::: solution
**$A$** (from tutoring exercise sheet 2, 2025). I look for a relation between the rows: $2A_1 - A_2 = (2 - 2, 4 - 1, 6 - 0) = (0, 3, 6) = A_3$. So the third row is a combination of the first two, which are not multiples ($(1, 2, 3)$ and $(2, 1, 0)$: the third coordinate would give $3c = 0$, that is $c = 0$, impossible). $\rk(A) = 2$.

**$B$.** The second row is $-2$ times the first: $(-2, 2, -4) = -2(1, -1, 2)$. The matrix is not zero, so $\rk(B) = 1$.

**$C$.** $C_3 = C_1 + C_2 = (1, 1, 3, 2)$ ✓, and $C_1$, $C_2$ are not multiples (in the first position $1$ and $0$, in the second $0$ and $1$). $\rk(C) = 2$, even though $C$ has four columns.

**$D$.** $\rk(D) \le \min(3, 2) = 2$. The two columns ${}^t(1, 3, 5)$ and ${}^t(2, 4, 6)$ are not multiples ($2 = c \cdot 1$ gives $c = 2$, but $4 \neq 2 \cdot 3$). $\rk(D) = 2$: maximum rank.
:::

::: exercise intermediate Powers and the square of a sum
Let $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ and $B = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$. (a) Compute $A^2$ and $A^3$ and guess $A^n$. (b) Compute $(A + B)^2$ and $A^2 + 2AB + B^2$: are they equal?
::: solution
(a) $A^2 = AA = \begin{pmatrix} 1 \cdot 1 + 1 \cdot 0 & 1 \cdot 1 + 1 \cdot 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$, and $A^3 = A^2 A = \begin{pmatrix} 1 & 1 + 2 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 3 \\ 0 & 1 \end{pmatrix}$. Each time the number at the top right grows by 1: $A^n = \begin{pmatrix} 1 & n \\ 0 & 1 \end{pmatrix}$ (it is proved by induction: $A^{n+1} = A^n A = \begin{pmatrix} 1 & n + 1 \\ 0 & 1 \end{pmatrix}$).

(b) $A + B = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$, so $(A + B)^2 = \begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix}$ (every entry is $1 \cdot 1 + 1 \cdot 1$).

Then $AB = \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix}$, $BA = \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix}$ and $B^2 = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$ (here too a zero product with $B \neq 0$). So
$$A^2 + 2AB + B^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} + \begin{pmatrix} 2 & 0 \\ 2 & 0 \end{pmatrix} = \begin{pmatrix} 3 & 2 \\ 2 & 1 \end{pmatrix} \neq (A + B)^2.$$
The right formula is $(A + B)^2 = A^2 + AB + BA + B^2 = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix} + \begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix} + \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 2 \\ 2 & 2 \end{pmatrix}$ ✓. The school "$2AB$" works only if $AB = BA$.
:::

::: exercise hard The matrices that commute with a given matrix
Find all the matrices $X = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \in M(2, \R)$ such that $AX = XA$, where $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$.
::: solution
I compute the two products:
$$AX = \begin{pmatrix} a + c & b + d \\ c & d \end{pmatrix}, \qquad XA = \begin{pmatrix} a & a + b \\ c & c + d \end{pmatrix}.$$
I set them equal entry by entry:
- $(1, 1)$: $a + c = a$, so $c = 0$;
- $(1, 2)$: $b + d = a + b$, so $d = a$;
- $(2, 1)$: $c = c$, always true;
- $(2, 2)$: $d = c + d$, so again $c = 0$.

The matrices we are looking for are
$$X = \begin{pmatrix} a & b \\ 0 & a \end{pmatrix} = a \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} + b \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \qquad a, b \in \R.$$
They form a subspace of $M(2, \R)$ of dimension 2. For example $X = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$ ($c = 1$) does **not** commute with $A$: commuting is an exception, not the rule.
:::

::: exercise intermediate A zero product with non-zero factors
Let $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ and $B = \begin{pmatrix} 2 & -4 \\ -1 & 2 \end{pmatrix}$. Compute $AB$ and $BA$. What do you learn?
::: solution
$$AB = \begin{pmatrix} 1 \cdot 2 + 2 \cdot (-1) & 1 \cdot (-4) + 2 \cdot 2 \\ 2 \cdot 2 + 4 \cdot (-1) & 2 \cdot (-4) + 4 \cdot 2 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix},$$
$$BA = \begin{pmatrix} 2 \cdot 1 + (-4) \cdot 2 & 2 \cdot 2 + (-4) \cdot 4 \\ (-1) \cdot 1 + 2 \cdot 2 & (-1) \cdot 2 + 2 \cdot 4 \end{pmatrix} = \begin{pmatrix} -6 & -12 \\ 3 & 6 \end{pmatrix}.$$
Three lessons in one exercise: (1) $AB = 0$ even though $A \neq 0$ and $B \neq 0$; (2) $AB = 0$ but $BA \neq 0$, so $AB \neq BA$; (3) you cannot "cancel": for example $AB = A \cdot 0$ but $B \neq 0$. The reason: the columns of $B$, ${}^t(2, -1)$ and ${}^t(-4, 2)$, are combinations of the columns of $A$ that give zero ($2A^1 - A^2 = 0$), and $A$ has rank 1.
:::

::: exercise hard The trace of $A\,{}^tA$
(a) Prove that for every real matrix $A$ of size $m \times n$ we have $\tr(A\,{}^tA) = \sum_{i, j} a_{ij}^2$. (b) Deduce that if $\tr(A\,{}^tA) = 0$ then $A = 0$. (c) Show with $A = \begin{pmatrix} 1 & i \\ 0 & 0 \end{pmatrix} \in M(2, \C)$ that (b) is false over the complex numbers.
::: solution
(a) $A\,{}^tA$ is $m \times m$. Its diagonal entry $(i, i)$ is row $i$ of $A$ times column $i$ of ${}^tA$, which is again row $i$ of $A$:
$$(A\,{}^tA)_{ii} = \sum_{j=1}^n A_{ij}({}^tA)_{ji} = \sum_{j=1}^n A_{ij}A_{ij} = \sum_{j=1}^n a_{ij}^2.$$
Adding over $i$ you get the sum of the squares of all the numbers of $A$.

(b) A sum of squares of **real** numbers is zero only if every square is zero, because no term is negative. So every $a_{ij} = 0$ and $A = 0$.

(c) $A\,{}^tA = \begin{pmatrix} 1 & i \\ 0 & 0 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ i & 0 \end{pmatrix} = \begin{pmatrix} 1 + i^2 & 0 \\ 0 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$, so the trace is $0$ but $A \neq 0$. With complex numbers $1^2 + i^2 = 0$: the squares can cancel out. It is one of the reasons why, for complex vectors, the Hermitian product will arrive in lesson L25.
:::

::: exercise exam Which identity holds?
Let $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 2 & -1 & 3 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 0 \\ 3 & -1 & 0 \end{pmatrix}$. Which identity holds? (a) $AB = BA$; (b) $AB = A$; (c) $AB = B$; (d) $BA = A$; (e) $BA = B$.
::: solution
**$AB$.** Multiplying on the left by $A$ acts on the rows of $B$: the rows of $AB$ are $1 \cdot B_1$, $1 \cdot B_2$ and $2B_1 - B_2 + 3B_3$.
- row 1: $(1, 2, 0)$; row 2: $(0, 1, 0)$;
- row 3: $2(1, 2, 0) - (0, 1, 0) + 3(3, -1, 0) = (2 + 9, 4 - 1 - 3, 0) = (11, 0, 0)$.

$AB = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 0 \\ 11 & 0 & 0 \end{pmatrix}$: entry $(3, 1)$ alone (11 against 2 in $A$ and 3 in $B$) is enough to rule out (b) and (c).

**$BA$.** The rows of $BA$ are combinations of the rows of $A$ with the coefficients of the rows of $B$. The third column of $B$ is zero, so the third row of $A$ never comes in; the first two rows of $A$ are $(1, 0, 0)$ and $(0, 1, 0)$ and copy the coefficients:
- row 1: $1 \cdot (1, 0, 0) + 2 \cdot (0, 1, 0) = (1, 2, 0)$;
- row 2: $(0, 1, 0)$;
- row 3: $3 \cdot (1, 0, 0) - 1 \cdot (0, 1, 0) = (3, -1, 0)$.

So $BA = B$: answer **(e)**. The others are false: $BA = B \neq A$ rules out (d), and $AB \neq BA$ (entry $(3, 1)$: 11 against 3) rules out (a).
:::

::: exercise exam A trace of three factors and a $4 \times 4$ rank
(a) Let $A = \begin{pmatrix} 1 & -1 \\ 0 & 2 \end{pmatrix}$, $B = \begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix}$, $C = \begin{pmatrix} 0 & 1 \\ 1 & -1 \end{pmatrix}$. Compute $\tr(ABC)$ and compare it with $\tr(ACB)$. (b) Find the rank of $M = \begin{pmatrix} 1 & 0 & 1 & 2 \\ 0 & 3 & 0 & 1 \\ 1 & 6 & 1 & 4 \\ 2 & 3 & 2 & 5 \end{pmatrix}$.
::: solution
(a) First $AB = \begin{pmatrix} 1 \cdot 2 + (-1) \cdot 1 & 1 \cdot 0 + (-1) \cdot 1 \\ 0 \cdot 2 + 2 \cdot 1 & 0 \cdot 0 + 2 \cdot 1 \end{pmatrix} = \begin{pmatrix} 1 & -1 \\ 2 & 2 \end{pmatrix}$. Of $(AB)C$ only the diagonal entries are needed:
- $((AB)C)_{11} = 1 \cdot 0 + (-1) \cdot 1 = -1$;
- $((AB)C)_{22} = 2 \cdot 1 + 2 \cdot (-1) = 0$.

$\tr(ABC) = -1$. For comparison, $AC = \begin{pmatrix} -1 & 2 \\ 2 & -2 \end{pmatrix}$ and $(ACB)_{11} = -2 + 2 = 0$, $(ACB)_{22} = 0 - 2 = -2$: $\tr(ACB) = -2 \neq \tr(ABC)$. Rotations ($BCA$, $CAB$) preserve the trace, swaps do not.

(b) I look for relations between the rows. $M_1 + 2M_2 = (1, 6, 1, 2 + 2) = (1, 6, 1, 4) = M_3$ and $2M_1 + M_2 = (2, 3, 2, 4 + 1) = (2, 3, 2, 5) = M_4$. Rows 3 and 4 are combinations of the first two, which are not multiples ($M_1$ has $0$ in the second place, $M_2$ has $0$ in the first). So $\rk(M) = 2$. You could also notice that the third column is equal to the first: the rank is at most 3, but you still need to find the relations between the rows.
:::

::: exercise exam When is $A$ symmetric?
Let $A = \begin{pmatrix} 2 & k & 1 \\ k^2 & 1 & k \\ 1 & 1 & 0 \end{pmatrix}$, with $k \in \R$. (a) Compute ${}^tA - A$. (b) For which $k$ is the matrix $A$ symmetric? (c) Check that ${}^tA - A$ is skew-symmetric for every $k$.
::: solution
(a) ${}^tA = \begin{pmatrix} 2 & k^2 & 1 \\ k & 1 & 1 \\ 1 & k & 0 \end{pmatrix}$, so
$${}^tA - A = \begin{pmatrix} 0 & k^2 - k & 0 \\ k - k^2 & 0 & 1 - k \\ 0 & k - 1 & 0 \end{pmatrix}.$$

(b) $A$ is symmetric if and only if ${}^tA - A = 0$, that is if both $k^2 - k = 0$ (so $k = 0$ or $k = 1$) and $1 - k = 0$ (so $k = 1$) hold. Both: **only $k = 1$**. Check: with $k = 1$, $A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 0 \end{pmatrix}$ is symmetric. With $k = 0$ instead $a_{23} = 0 \neq 1 = a_{32}$.

(c) The diagonal is zero, and the mirrored entries have opposite signs: $k^2 - k$ and $k - k^2$, $1 - k$ and $k - 1$. In general ${}^t({}^tA - A) = A - {}^tA = -({}^tA - A)$.
:::

## Review questions

::: question What is the transpose of a matrix and what size does it have?
It is the matrix ${}^tA$ obtained by swapping rows and columns: $({}^tA)_{ij} = A_{ji}$. If $A$ is $m \times n$, ${}^tA$ is $n \times m$: row $i$ of ${}^tA$ is column $i$ of $A$.
:::

::: question How do you recognise symmetric and skew-symmetric matrices with the transpose? Why does a skew-symmetric matrix have a zero diagonal?
A square $A$ is symmetric if ${}^tA = A$ and skew-symmetric if ${}^tA = -A$. On the diagonal the transpose changes nothing, so in a skew-symmetric matrix $a_{ii} = -a_{ii}$, that is $a_{ii} = 0$.
:::

::: question What does the notation ${}^t(1, 0, -1)$ mean?
It is the column vector with coordinates $1, 0, -1$, written as the transpose of a row to save space.
:::

::: question How is the rank of a matrix defined?
$\rk(A)$ is the dimension of the subspace of $\K^m$ spanned by the columns: $\rk(A) = \dim \Span(A^1, \dots, A^n)$. It is the same as the maximum number of linearly independent columns (Proposition 8.4).
:::

::: question Why is the rank the maximum number of independent columns?
Because from the columns, which span the Span, you can remove one at a time those that are combinations of the others without changing the Span, until independent columns remain: they are a basis, and their number is the dimension. More columns than that would be dependent.
:::

::: question What is the relation between row rank and column rank?
They are equal for every matrix (Proposition 8.6): $\rk({}^tA) = \rk(A)$. So to compute the rank you can look at the rows or at the columns, as you like.
:::

::: question Why $\rk(A) \le \min(m, n)$?
The Span of the columns is a subspace of $\K^m$, so it has dimension at most $m$, and it is spanned by $n$ vectors, so it has dimension at most $n$.
:::

::: question When can you compute the product $AB$, and what size does it have?
When the number of columns of $A$ is equal to the number of rows of $B$: $(m \times n)(n \times p)$ gives an $m \times p$ matrix.
:::

::: question How do you compute the entry $(AB)_{ij}$?
Row $i$ of $A$ times column $j$ of $B$: you multiply the corresponding numbers and add them up, $(AB)_{ij} = A_{i1}B_{1j} + \dots + A_{in}B_{nj}$.
:::

::: question Is the product of matrices commutative? Give an example.
No. With $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ and $B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ you find $AB = B$ and $BA = 0$ (Example 8.10).
:::

::: question Which properties hold for the product of matrices?
Associativity $A(BC) = (AB)C$, the two distributive laws $A(B + C) = AB + AC$ and $(A + B)C = AC + BC$, and $\lambda(AB) = (\lambda A)B = A(\lambda B)$ (Proposition 8.11). Commutativity does not hold, and a product can be zero with both factors non-zero.
:::

::: question What is the trace and what does Proposition 8.13 say?
The trace of a square matrix is the sum of the numbers on the main diagonal. Proposition 8.13 says that $\tr(AB) = \tr(BA)$ for $A, B \in M(n)$, even when $AB \neq BA$.
:::

::: question What is the transpose of a product?
${}^t(AB) = {}^tB\,{}^tA$: the product of the transposes in reverse order (Exercise 8.14).
:::

::: question How do you quickly compute $\tr(AB)$ in a quiz?
You compute only the diagonal entries of $AB$, that is for each $i$ row $i$ of $A$ times column $i$ of $B$, and add them up. For $\tr(A\,{}^tA)$ it is enough to add the squares of all the numbers of $A$.
:::

## Glossary

```glossary
$m \times n$ matrix | Table of numbers with $m$ rows and $n$ columns; $a_{ij}$ (or $A_{ij}$) is the number in row $i$ and column $j$.
$M(m, n, \K)$, $M(n)$ | The set of $m \times n$ matrices with coefficients in $\K$, a vector space of dimension $mn$; $M(n)$ are the square $n \times n$ ones.
Row $A_i$ and column $A^j$ | The $i$-th row (index at the bottom, a vector of $\K^n$) and the $j$-th column (index at the top, a vector of $\K^m$).
Main diagonal | The entries $a_{11}, a_{22}, \dots, a_{nn}$ of a square matrix.
Transpose ${}^tA$ | The matrix with rows and columns swapped: $({}^tA)_{ij} = A_{ji}$; from $m \times n$ it becomes $n \times m$.
${}^t(x, y, z)$ | The column vector with coordinates $x, y, z$, written as the transpose of a row.
Symmetric matrix | Square matrix with ${}^tA = A$, that is $a_{ij} = a_{ji}$.
Skew-symmetric matrix | Square matrix with ${}^tA = -A$; it has a zero diagonal.
Rank $\rk(A)$ | Dimension of the space spanned by the columns; maximum number of linearly independent columns.
Row rank | Dimension of the space spanned by the rows, that is $\rk({}^tA)$; it is always equal to the rank.
Row-by-column product | $(AB)_{ij} = \sum_k A_{ik}B_{kj}$; it can be done if $A$ has as many columns as $B$ has rows, and $(m \times n)(n \times p) = m \times p$.
Matrix-times-vector product | $Ax$, with $x \in \K^n$: a vector of $\K^m$, equal to $x_1A^1 + \dots + x_nA^n$.
Non-commutativity | In general $AB \neq BA$, even for square matrices.
Associativity and distributivity | $A(BC) = (AB)C$; $A(B + C) = AB + AC$ and $(A + B)C = AC + BC$.
Power of a matrix | For square $A$, $A^2 = AA$, $A^3 = AAA$, and so on.
Trace $\tr A$ | Sum of the entries on the main diagonal of a square matrix; $\tr(AB) = \tr(BA)$.
Identity matrix $I_n$ | The square matrix with 1 on the diagonal and 0 elsewhere; $I_nA = AI_n = A$ (lesson L09).
```

## Checklist

```checklist
- I can read a matrix: size $m \times n$, entry $a_{ij}$, row $A_i$, column $A^j$.
- I can compute the transpose and use it to recognise a symmetric or skew-symmetric matrix.
- I can read the notation ${}^t(x, y, z)$ for column vectors.
- I know the definition of rank and why it is the maximum number of independent columns.
- I know that row rank and column rank are equal and that $\rk(A) \le \min(m, n)$.
- I can find the rank of a small matrix by looking for relations between rows or columns.
- I can tell whether a product $AB$ exists, what size it has, and compute it row by column without mistakes.
- I can explain with an example that $AB \neq BA$ and that $AB = 0$ does not imply $A = 0$ or $B = 0$.
- I can state associativity and distributivity and use ${}^t(AB) = {}^tB\,{}^tA$.
- I can compute a trace and use $\tr(AB) = \tr(BA)$ to save calculations in the quizzes.
- I can answer the exam question "which identity holds among $AB$, $BA$, $A$ and $B$?".
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 8 "Matrici I", pp. 36–40: the opening recap and sections 8.A (transpose), 8.B (rank), 8.C (product of matrices), 8.D (trace) and 8.E (exercises) are followed in order, with the page next to each heading; definitions, propositions, examples and exercises keep their numbering (Definitions 8.1, 8.3, 8.5, 8.7, 8.12; Propositions 8.4, 8.6, 8.11, 8.13; Examples 8.2, 8.8, 8.9, 8.10; Exercises 8.14, 8.15, 8.16). For the recaps: lessons 6 and 7 (Definitions 6.1, 6.3, 6.6, 7.11, Proposition 7.2, Exercise 7.13).
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §2.3.10–2.3.11 (transpose, symmetric and skew-symmetric matrices, Example 2.3.33), §3.2.3 and §3.2.6 (rank, Propositions 3.2.8 and 3.2.20, Corollary 3.2.11), §3.4.1–3.4.5 (product, Propositions 3.4.2 and 3.4.4, systems written as $Ax = b$), §4.4.5 (trace).
- **Exam**: papers of the Linear Algebra exams from 24/01/2024 to 07/09/2026 (2025/26 Moodle, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); reported with my own solution: question 1 of 15/01/2026, question 9 of 10/07/2025 and problem 11 (point 2) of 15/01/2026; the others are cited by number. Tutoring exercise sheet 2 (11/11/2025), exercise 8.
- The **"Beyond the handouts"** parts (extra properties of the transpose and of the trace, the product as a combination of columns, identity and powers, methods for the quiz, unnumbered exercises) are additions in these notes to connect the lesson to the rest of the course and to the exam.
