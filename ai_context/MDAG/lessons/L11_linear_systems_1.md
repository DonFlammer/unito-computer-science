---
course: MDAG
module: AG
lesson: L11
title: Linear systems I
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Linear Algebra and Geometry · Channels A, B and C · Lesson L11
description: >-
  Notes on lesson L11 of Linear Algebra and Geometry (MDAG, part 2): linear systems and augmented matrix, Gauss
  moves, pivots and row echelon matrices, the Gauss and Gauss–Jordan algorithms, how to write all the solutions of
  a system, with exam-style quizzes and worked exercises.
lede: >-
  How to solve any linear system, with any number of equations and unknowns: you write the augmented matrix
  $(A \mid b)$, bring it to row echelon form with three moves that do not change the solutions, and then you read
  off the solutions: exactly one, none, or infinitely many with their free parameters. It is the calculation that
  comes back in almost every exam paper.
material: handouts
facts:
  Handouts: lesson 11 · pp. 50–55
  Book: Martelli, §3.1
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 120–150 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 11 "Sistemi lineari I"; B. Martelli, Geometria e algebra lineare, §3.1
italian_file: L11_sistemi_lineari_1.html
html_notes: notes/MDAG/L11_linear_systems_1.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L11_sistemi_lineari_1.md
---

## In brief

- A **linear system** is a list of first-degree equations in the same unknowns $x_1, \dots, x_n$. It is written compactly with the **augmented matrix** $C = (A \mid b)$: the coefficients to the left of the bar, the constant terms to the right.
- Solving the system means finding the set $S \subset \K^n$ of **all** the vectors that satisfy **all** the equations together.
- Three **Gauss moves** on the rows do not change $S$: swapping two rows, multiplying a row by a number $\lambda \neq 0$, adding to a row a multiple of another row.
- The **pivot** of a row is its first non-zero entry. A matrix is in **row echelon form** if the zero rows are at the bottom and each pivot is strictly to the right of the pivot of the row above.
- **Gauss's algorithm** brings any matrix to row echelon form, column after column. The **Gauss–Jordan algorithm** goes on until the pivots are 1 and above the pivots there are only zeros.
- From the reduced form you read off the solutions straight away. A pivot in the column of the constant terms is the equation $0 = 1$: **no solution**.
- Otherwise each unknown whose column has no pivot becomes a **free parameter** $t_1, t_2, \dots$ and the others are obtained from those: there are as many parameters as unknowns minus pivots.
- At the exam the quiz "the linear system with augmented matrix … has a number of solutions equal to" came up in 9 exam sessions out of 15, and almost every open problem ends with a Gauss reduction.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## What a linear system is (p. 50)

Start from a school riddle: *two numbers have sum 5 and difference 1; what are they?* You call the two numbers $x$ and $y$ and translate the two sentences into two equations:

$$\begin{cases} x + y = 5 \\ x - y = 1 \end{cases}$$

Adding the two equations side by side you get $2x = 6$, so $x = 3$; from the first, $y = 5 - 3 = 2$. Check: $3 + 2 = 5$ and $3 - 2 = 1$. The pair $(3, 2)$ solves **both** equations at the same time: it is a **solution of the system**.

This is a **linear** system because the unknowns appear only **to the first power**, multiplied by numbers and added together. No squares, no products of unknowns, no roots or sines.

| Equation | Linear? | Why |
|---|---|---|
| $2x - 3y + z = 7$ | yes | each unknown to the first power, times a number |
| $x_1 + x_4 = 0$ | yes | the missing unknowns have coefficient $0$ |
| $\sqrt 2\, x - \pi y = \frac 13$ | yes | the coefficients can be any numbers |
| $x^2 + y = 1$ | no | $x$ appears squared |
| $xy = 4$ | no | there is a product of two unknowns |
| $x + \sin y = 0$ | no | the unknown $y$ is inside a function |

### The definition

> [!DEF] 11.1 · Linear system
> A **linear system** is a set of $k$ linear equations in $n$ variables
> $$\begin{cases} a_{11}x_1 + \cdots + a_{1n}x_n = b_1, \\ \qquad \vdots \\ a_{k1}x_1 + \cdots + a_{kn}x_n = b_k. \end{cases}$$
> The numbers $a_{ij}$ are the **coefficients** and the $b_i$ are the **constant terms** of the system. The coefficients, the constant terms and the variables all lie in some fixed field $\K$. We can group the coefficients and the constant terms into a $k \times n$ matrix and a column vector:
> $$A = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & \ddots & \vdots \\ a_{k1} & \cdots & a_{kn} \end{pmatrix}, \qquad b = \begin{pmatrix} b_1 \\ \vdots \\ b_k \end{pmatrix}.$$
> We speak of the **coefficient matrix** and of the **vector of constant terms**. We can then put everything together into a single matrix $k \times (n + 1)$
> $$C = (A \mid b),$$
> called the **augmented matrix**.

Piece by piece:

- $k$ is the number of **equations** (the rows), $n$ the number of **unknowns** (the variables $x_1, \dots, x_n$). They can be different: 2 equations in 4 unknowns, 3 equations in 2 unknowns, and so on.
- $a_{ij}$ has two indices: the first, $i$, says **which equation** you are in (the row); the second, $j$, says **which unknown** it multiplies (the column). For example $a_{23}$ is the coefficient of $x_3$ in the second equation.
- $b_i$ is the number to the right of the equals sign in the $i$-th equation.
- $\K$ is the field you are working in (lessons L01 and L05): almost always $\K = \R$, sometimes $\K = \C$.
- The **augmented matrix** $C = (A \mid b)$ is the matrix $A$ with, in addition, the column $b$ on the right. The vertical bar is only there to remind you where the coefficients end: for the calculations $C$ is a $k \times (n + 1)$ matrix like any other.

> [!EXAMPLE] From the system to the augmented matrix
> The system of the riddle has $k = 2$ equations and $n = 2$ unknowns:
> $$\begin{cases} x + y = 5 \\ x - y = 1 \end{cases} \qquad A = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}, \quad b = \begin{pmatrix} 5 \\ 1 \end{pmatrix}, \quad C = \left(\begin{array}{cc|c} 1 & 1 & 5 \\ 1 & -1 & 1 \end{array}\right).$$
> A system with 3 equations and 3 unknowns:
> $$\begin{cases} x + y + 2z = 9 \\ 2x + 4y - 3z = 1 \\ 3x + 6y - 5z = 0 \end{cases} \qquad C = \left(\begin{array}{ccc|c} 1 & 1 & 2 & 9 \\ 2 & 4 & -3 & 1 \\ 3 & 6 & -5 & 0 \end{array}\right).$$
> Each row of $C$ is an equation; each column before the bar is an unknown ($x$, $y$, $z$ in this order); the last column contains the constant terms.

> [!PITFALL] Before writing the matrix, put the system in order
> Three frequent mistakes when going from the system to the matrix:
> 1. the unknowns must be written **in the same order** in every row;
> 2. an unknown that is **missing** from an equation has coefficient $0$, and that $0$ must be written in the matrix;
> 3. the numbers without an unknown must be moved **to the right** of the equals sign, changing their sign.
>
> For example $\begin{cases} 2x - y = 3 - z \\ x = 4y \\ 5 + z = 2 \end{cases}$ first becomes $\begin{cases} 2x - y + z = 3 \\ x - 4y = 0 \\ z = -3 \end{cases}$ and then $\left(\begin{array}{ccc|c} 2 & -1 & 1 & 3 \\ 1 & -4 & 0 & 0 \\ 0 & 0 & 1 & -3 \end{array}\right)$.

### The set of solutions

A **solution** of the system is a vector $x = (x_1, \dots, x_n) \in \K^n$ that makes **all** the $k$ equations true. The handouts call $S \subset \K^n$ the set of **all** the solutions: the aim of the lesson is to describe $S$ exactly.

For the system of the riddle $S = \{(3, 2)\}$. The vector $(4, 1)$ instead is **not** a solution: it satisfies the first equation ($4 + 1 = 5$) but not the second ($4 - 1 = 3 \neq 1$). A single false equation is enough to rule a vector out.

> [!BEYOND] three possible situations, seen in the plane
> With two unknowns each linear equation is a **line** of the plane, and the solutions of the system are the points common to all the lines. With two equations one of these three things always happens: the lines meet at **one point** (one solution), they are **parallel** and distinct (no solution), or they are **the same line** (infinitely many solutions). In lesson L12 the Rouché–Capelli theorem will say that even with more unknowns the possibilities are always and only these three: none, one, infinitely many.

```graph
title: $x + y = 5$ and $x - y = 1$ meet at one point: exactly one solution, $(3, 2)$
x: -1 6
y: -2 5
line: 0 5 4.5 0.5 | accent | $x + y = 5$ | ne
line: 1 0 4 3 | blue | $x - y = 1$ | se
point: 3 2 | amber | $(3, 2)$ | e
```

```graph
title: $x + y = 2$ and $x + y = 4$ are parallel: no common point, no solution
x: -1 5
y: -1 5
line: 2 0 0 2 | accent | $x + y = 2$ | ne
line: 4 0 0.5 3.5 | blue | $x + y = 4$ | ne
```

```graph
title: $x + y = 2$ and $2x + 2y = 4$ are the same line: infinitely many solutions
x: -1 5
y: -1 5
line: 2 0 0 2 | accent | thick | $x + y = 2$ | ne
line: 0 2 1.5 0.5 | blue | dashed | $2x + 2y = 4$ | ne
```

## The Gauss moves (pp. 50–51)

To solve the riddle you added the two equations. It is a legitimate move: it neither adds nor removes solutions. The handouts list exactly **three** moves of this kind, and with these three you solve **every** linear system.

> [!DEF] 11.2 · Gauss moves
> The moves that do not change the set of solutions are the following and are known as **Gauss moves**:
> - (I) swapping two rows;
> - (II) multiplying a row by a number $\lambda \neq 0$;
> - (III) adding to a row another row multiplied by any $\lambda$.
>
> Denoting by $R_i$ the $i$-th row of $C$, we can write the moves like this:
> $$\text{(I)}\ R_i \longleftrightarrow R_j, \qquad \text{(II)}\ R_i \longrightarrow \lambda R_i,\ \lambda \neq 0, \qquad \text{(III)}\ R_i \longrightarrow R_i + \lambda R_j.$$

Piece by piece:

- The moves act on the **whole rows** of $C$, **including the last column** of constant terms: each row is an equation and is transformed as a whole.
- (I) **swap**: $R_1 \leftrightarrow R_3$ means that the first and the third equations swap places.
- (II) **rescaling**: $R_2 \to 3R_2$ multiplies every number of the second row by 3. The number must be **non-zero**: multiplying by $0$ would turn the equation into $0 = 0$, and the information it contained would be lost.
- (III) **replacement**: $R_2 \to R_2 - 4R_1$ means "take 4 times the first row away from the second row". Here $\lambda$ can be any number (with $\lambda = 0$ the move does nothing), but the two rows must be **different**: $j \neq i$.

> [!EXAMPLE] 11.3 · Three moves in a row
> One move of type (I), one of type (II) and one of type (III):
> $$\begin{pmatrix} 1 & 2 \\ 3 & 0 \\ 4 & -2 \end{pmatrix} \xrightarrow{R_1 \leftrightarrow R_3} \begin{pmatrix} 4 & -2 \\ 3 & 0 \\ 1 & 2 \end{pmatrix}$$
> $$\xrightarrow{R_1 \to \frac 12 R_1} \begin{pmatrix} 2 & -1 \\ 3 & 0 \\ 1 & 2 \end{pmatrix} \xrightarrow{R_2 \to R_2 + 2R_3} \begin{pmatrix} 2 & -1 \\ 5 & 4 \\ 1 & 2 \end{pmatrix}.$$
> The calculations, one per move:
> 1. $R_1 \leftrightarrow R_3$: the first row $(1, 2)$ and the third $(4, -2)$ swap places.
> 2. $R_1 \to \frac 12 R_1$: the new first row is $\frac 12 (4, -2) = (2, -1)$.
> 3. $R_2 \to R_2 + 2R_3$: the new second row is $(3, 0) + 2 \cdot (1, 2) = (3 + 2,\ 0 + 4) = (5, 4)$. The third row, used for the calculation, stays as it was.

### Why the moves do not change the solutions

> [!PROP] 11.4
> The Gauss moves on $C = (A \mid b)$ do not change the set $S \subset \K^n$ of solutions of the linear system.

The proof checks the three moves one at a time. In each case two things must be shown: whoever solved the old system solves the new one, and vice versa.

1. **Move (I).** Swapping two rows means writing the same equations in another order. A vector makes all the equations true before the swap if and only if it makes them true after: $S$ does not change.
2. **Move (II).** Row $i$, that is the equation $a_{i1}x_1 + \cdots + a_{in}x_n = b_i$, becomes
   $$\lambda a_{i1}x_1 + \cdots + \lambda a_{in}x_n = \lambda b_i.$$
   If $x$ solves the old equation, multiplying both sides by $\lambda$ it solves the new one. Conversely, if $x$ solves the new one, multiplying by $\frac 1\lambda$ you get back the old one: here you need $\lambda \neq 0$, because $\frac 1\lambda$ must exist. The other equations do not change.
3. **Move (III).** Only row $i$ changes. The two equations $i$ and $j$
   $$a_{i1}x_1 + \cdots + a_{in}x_n = b_i, \qquad a_{j1}x_1 + \cdots + a_{jn}x_n = b_j$$
   become
   $$(a_{i1} + \lambda a_{j1})x_1 + \cdots + (a_{in} + \lambda a_{jn})x_n = b_i + \lambda b_j,$$
   $$a_{j1}x_1 + \cdots + a_{jn}x_n = b_j.$$
   - If $x$ solves the two old ones, adding to equation $i$ equation $j$ multiplied by $\lambda$ you get exactly the new row $i$.
   - Conversely, if $x$ solves the two new ones, taking away from the new row $i$ row $j$ multiplied by $\lambda$ you find the old row $i$ again. This works because row $j$ has stayed **untouched**: that is why you need $j \neq i$.
4. In all three cases the vectors that solve the system are the same: $S$ does not change. $\square$

> [!IDEA] every move can be undone
> The heart of the proof is that every move has an **inverse move** of the same type, which puts everything back as it was: (I) is undone by repeating the same swap; (II) with $\lambda$ is undone by (II) with $\frac 1\lambda$; (III) $R_i \to R_i + \lambda R_j$ is undone by $R_i \to R_i - \lambda R_j$. A transformation that can always be undone can neither lose nor create solutions.

> [!EXAMPLE] The riddle solved with the moves
> $$\left(\begin{array}{cc|c} 1 & 1 & 5 \\ 1 & -1 & 1 \end{array}\right) \xrightarrow{R_2 \to R_2 - R_1} \left(\begin{array}{cc|c} 1 & 1 & 5 \\ 0 & -2 & -4 \end{array}\right)$$
> $$\xrightarrow{R_2 \to -\frac 12 R_2} \left(\begin{array}{cc|c} 1 & 1 & 5 \\ 0 & 1 & 2 \end{array}\right) \xrightarrow{R_1 \to R_1 - R_2} \left(\begin{array}{cc|c} 1 & 0 & 3 \\ 0 & 1 & 2 \end{array}\right)$$
> The calculations: $(1, -1, 1) - (1, 1, 5) = (0, -2, -4)$; then $-\frac 12 (0, -2, -4) = (0, 1, 2)$; then $(1, 1, 5) - (0, 1, 2) = (1, 0, 3)$. The last matrix says $x = 3$ and $y = 2$: it is the same calculation as before, written with the moves.

> [!PITFALL] One move at a time
> Do not make two moves **at the same time** using the old rows. Start from $\left(\begin{array}{cc|c} 1 & 1 & 5 \\ 1 & -1 & 1 \end{array}\right)$ and do $R_1 \to R_1 - R_2$ and $R_2 \to R_2 - R_1$ together, both computed with the starting rows:
> $$\left(\begin{array}{cc|c} 0 & 2 & 4 \\ 0 & -2 & -4 \end{array}\right).$$
> Now the system only says $2y = 4$: $y = 2$ and any $x$, that is infinitely many solutions. But the starting system had **only one**, $(3, 2)$. What happened? The new second row is $-1$ times the first: an equation has been lost. The rule: after each move, the next move uses the **new** rows. You can make several moves in the same step only if the row used to change the others stays fixed, as in step (2) of Gauss's algorithm.

> [!PITFALL] Only rows, never columns
> To solve a system the moves are made on the **rows**. A move on the columns mixes the unknowns with each other (column 1 is $x$, column 2 is $y$) or mixes an unknown with the constant terms, and it changes the solutions. For example, adding the first column to the column of the constant terms turns $x + y = 5$, $x - y = 1$ into $x + y = 6$, $x - y = 2$, which has the solution $(4, 2)$ instead of $(3, 2)$.

## Row echelon matrices (pp. 51–52)

Why transform the matrix? Because some systems almost solve themselves. Look at this one:

$$\begin{cases} x + 2y - z = 2 \\ \phantom{x + {}} y + 3z = 5 \\ \phantom{x + y + {}} 2z = 4 \end{cases}$$

You start **from the bottom**: the last equation gives $z = 2$. The second becomes $y + 6 = 5$, so $y = -1$. The first becomes $x + 2 \cdot (-1) - 2 = 2$, so $x = 6$. Check: $6 - 2 - 2 = 2$, $-1 + 6 = 5$, $2 \cdot 2 = 4$. This way of solving is called **back substitution**. It works because each equation has **one unknown fewer** than the one above: the augmented matrix has the shape of a **staircase**.

$$\left(\begin{array}{ccc|c} \boxed{1} & 2 & -1 & 2 \\ 0 & \boxed{1} & 3 & 5 \\ 0 & 0 & \boxed{2} & 4 \end{array}\right)$$

> [!DEF] 11.5 · Pivot and row echelon matrix
> Let $C$ be any matrix. For each row $R_i$ of $C$ we call **pivot** the first non-zero entry of the row. A **row echelon matrix** is a matrix in which all the zero rows are at the bottom and the pivot of each non-zero row is strictly to the right of the pivot of the previous non-zero row.

Piece by piece:

- The **pivot** is found by reading the row from the left: it is the first number other than $0$. In the row $(0, 0, 3, 5)$ the pivot is the $3$, in the third column. A row made **only of zeros** has no pivot.
- "The zero rows are at the bottom": a row of zeros cannot be above a row that has a pivot.
- "**Strictly** to the right": going down one row, the pivot moves **at least** one column to the right. It can also skip several columns: the steps can be wide.
- As a consequence, below each pivot there are only zeros.

> [!EXAMPLE] 11.6 · Echelon yes, echelon no
> These are row echelon matrices:
> $$\begin{pmatrix} 1 & 0 & 5 \\ 0 & -1 & -1 \end{pmatrix}, \qquad \begin{pmatrix} 7 & -2 & 9 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}.$$
> In the first the pivots are $1$ (column 1) and $-1$ (column 2). In the second the pivots are $7$ (column 1) and $1$ (column 3): the step skips column 2, and that is allowed; the zero row is at the bottom.
>
> These are not row echelon matrices:
> $$\begin{pmatrix} 1 & 2 & -1 \\ 4 & 0 & 6 \\ 0 & 7 & 0 \end{pmatrix}, \qquad \begin{pmatrix} 0 & 8 \\ 0 & 1 \\ 0 & 0 \\ 0 & 0 \end{pmatrix}.$$
> In the first the pivot of the second row is the $4$, in column 1: it is not to the right of the pivot $1$ of the first row, which is also in column 1. In the second the pivots of the first two rows, $8$ and $1$, are both in column 2: the second is not **strictly** to the right.

| Matrix | Row echelon? | Reason |
|---|---|---|
| $\begin{pmatrix} 2 & 1 & 0 & 3 \\ 0 & 0 & 5 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}$ | yes | pivots in columns 1 and 3, zero row at the bottom |
| $\begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & 4 & 5 \end{pmatrix}$ | no | the zero row is not at the bottom |
| $\begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}$ | no | the pivot of row 3 (column 2) is to the left of that of row 2 (column 3) |
| $\begin{pmatrix} 0 & 3 & 1 \\ 0 & 0 & 2 \end{pmatrix}$ | yes | the first column can be all zero: the pivots are in columns 2 and 3 |

> [!PITFALL] The steps do not have to lie on the diagonal
> In a row echelon matrix the pivots do **not** have to be in positions $(1,1), (2,2), (3,3), \dots$ All that matters is that going down they move to the right. Conversely, a matrix with the right numbers on the diagonal may not be in row echelon form, if something below is wrong (third row of the table).

## Gauss's algorithm (pp. 52–53)

Gauss's algorithm turns **any** matrix into a row echelon matrix using only the three moves. The idea: you fix the first column (a pivot at the top and zeros below), then you ignore the first row and the first column and repeat on the rest.

> [!METHOD] Gauss's algorithm (p. 52)
> 1. If $C_{11} = 0$ and $C_{i1} \neq 0$ for some $i$, we swap the first row with a row so as to get $C_{11} \neq 0$. If instead $C_{i1} = 0$ for all $i$, we continue from point (1) working on the submatrix obtained by removing only the first column.
> 2. For each row $R_i$ with $i \ge 2$ and with $C_{i1} \neq 0$ we replace $R_i$ with the row
>    $$R_i - \frac{C_{i1}}{C_{11}} R_1.$$
>    In this way the new row $R_i$ will have $C_{i1} = 0$.
> 3. We have obtained $C_{i1} = 0$ for all $i \ge 2$. We continue from point (1) working on the submatrix obtained by removing the first row and the first column.

What each step does:

- $C_{ij}$ denotes the number in row $i$ and column $j$ of the matrix (the current one: after each move the matrix is still called $C$).
- **Step (1)** looks for a pivot for the first column. If there is a zero at the top it is swapped with a row below that has a non-zero number (move I). If the column is **all zero** there is nothing to do: you move on to the next column, still starting from the same row.
- **Step (2)** puts zeros below the pivot with moves of type (III). The number to take away is chosen on purpose: the new entry in column 1 is
  $$C_{i1} - \frac{C_{i1}}{C_{11}} \cdot C_{11} = C_{i1} - C_{i1} = 0.$$
  Here row $R_1$ stays fixed and is used to change all the others: that is why they can all be done together.
- **Step (3)** "forgets" the first row and the first column, now in place, and starts again on the piece that remains. When nothing remains the matrix is in row echelon form.

> [!EXAMPLE] 11.7 · Gauss step by step
> We start from the matrix
> $$C = \begin{pmatrix} 0 & 1 & 1 & 0 \\ 1 & 1 & 2 & -3 \\ -1 & 2 & 1 & 1 \end{pmatrix}.$$
> 1. $C_{11} = 0$, but $C_{21} = 1 \neq 0$: we swap $R_1$ and $R_2$ (step 1).
>    $$C = \begin{pmatrix} 1 & 1 & 2 & -3 \\ 0 & 1 & 1 & 0 \\ -1 & 2 & 1 & 1 \end{pmatrix}.$$
> 2. Below the pivot $C_{11} = 1$: row 2 already has $0$; row 3 has $C_{31} = -1 \neq 0$. Step 2 says $R_3 \to R_3 - \frac{-1}{1} R_1 = R_3 + R_1$:
>    $$(-1, 2, 1, 1) + (1, 1, 2, -3) = (0, 3, 3, -2), \qquad C = \begin{pmatrix} 1 & 1 & 2 & -3 \\ 0 & 1 & 1 & 0 \\ 0 & 3 & 3 & -2 \end{pmatrix}.$$
> 3. The first row and the first column are in place: we work on the rest. The new "corner" is $C_{22} = 1 \neq 0$; below it there is $C_{32} = 3$. Move $R_3 \to R_3 - 3R_2$:
>    $$(0, 3, 3, -2) - 3 \cdot (0, 1, 1, 0) = (0, 0, 0, -2), \qquad C = \begin{pmatrix} 1 & 1 & 2 & -3 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & -2 \end{pmatrix}.$$
> 4. What remains is the submatrix made of row 3 without the first two columns, that is $(0, -2)$: column 3 is zero, you move on to column 4, where there is the pivot $-2$. There are no rows below: the matrix is in row echelon form and the algorithm ends. The pivots are $1$, $1$, $-2$, in columns 1, 2 and 4.

```widget gauss
title: Try the algorithm on the matrix of Example 11.7, then change the numbers
matrice: 0 1 1 0; 1 1 2 -3; -1 2 1 1
modo: scala
modi: scala ridotta
```

In the tool above press "Compute": you will see the same moves as in the handouts, one per line, with the changed rows highlighted. Then try putting a zero somewhere else, for example `1 1 2; 2 2 5; 3 3 1`: the second column, below the first row, becomes all zero and the algorithm jumps to the third column, as step (1) says.

> [!BEYOND] how to do fewer calculations by hand
> Martelli (§3.1.3) remarks that you do not need to follow the algorithm to the letter: **any** sequence of Gauss moves is fine, as long as you reach a row echelon matrix. Three useful tricks without a calculator:
> 1. if there is a $1$ (or a $-1$) in the first column, bring that row to the top with a swap: the multipliers $\frac{C_{i1}}{C_{11}}$ become integers;
> 2. to avoid fractions you can combine moves (II) and (III) into one, $R_i \to a R_i - c R_1$ with $a \neq 0$: for example with pivot $2$ and a $3$ below it, the move $R_2 \to 2R_2 - 3R_1$ puts the zero in without fractions;
> 3. if a row has all its numbers divisible by the same integer, divide it straight away (move II): the calculations afterwards are smaller.

## The Gauss–Jordan algorithm (pp. 53–54)

A row echelon matrix can already be solved with back substitution. But you can go further and reach a form in which the solutions are **read off** without any more calculations: above each pivot only zeros, and each pivot equal to 1. You get it with more Gauss moves:

- the zeros **above** the pivots are obtained with moves (III), taking away from the rows above a suitable multiple of the pivot's row;
- the pivots become $1$ with moves (II), dividing each row by its pivot.

> [!EXAMPLE] 11.8 · Zeros above the pivots
> In the matrix obtained in Example 11.7 the second pivot is $C_{22} = 1$ and above it there is $C_{12} = 1 \neq 0$. With $R_1 \to R_1 - R_2$:
> $$(1, 1, 2, -3) - (0, 1, 1, 0) = (1, 0, 1, -3), \qquad C = \begin{pmatrix} 1 & 0 & 1 & -3 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & -2 \end{pmatrix}.$$
> The third pivot is $C_{34} = -2$ and above it there is $C_{14} = -3 \neq 0$ (while $C_{24}$ is already $0$). With $R_1 \to R_1 - \frac 32 R_3$:
> $$(1, 0, 1, -3) - \frac 32 \cdot (0, 0, 0, -2) = (1, 0, 1, -3 + 3) = (1, 0, 1, 0), \qquad C = \begin{pmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & -2 \end{pmatrix}.$$

> [!EXAMPLE] 11.9 · Pivots equal to 1
> In the previous matrix the pivots $C_{11}$ and $C_{22}$ are already $1$, while $C_{34} = -2$. We divide the third row by $-2$, that is $R_3 \to -\frac 12 R_3$ (move II):
> $$C = \begin{pmatrix} 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$

> [!METHOD] The Gauss–Jordan algorithm (p. 54)
> The algorithm just described is called the **Gauss–Jordan algorithm** and it consists of two phases:
> 1. transform the matrix into row echelon form with Gauss's algorithm;
> 2. get only zeros above the pivots with moves (III) and all pivots equal to $1$ with moves (II).

The matrix you get at the end (row echelon, pivots equal to 1, zeros above and below each pivot) is often called the **reduced row echelon form**. In the pivot columns there is a single $1$ and then all zeros.

> [!EXAMPLE] 11.10 · Gauss–Jordan with the moves above the arrows
> $$\begin{pmatrix} 1 & -1 & 3 \\ 0 & 2 & 2 \\ 1 & 0 & 4 \end{pmatrix} \xrightarrow{R_3 \to R_3 - R_1} \begin{pmatrix} 1 & -1 & 3 \\ 0 & 2 & 2 \\ 0 & 1 & 1 \end{pmatrix} \xrightarrow{R_3 \to R_3 - \frac 12 R_2} \begin{pmatrix} 1 & -1 & 3 \\ 0 & 2 & 2 \\ 0 & 0 & 0 \end{pmatrix}$$
> $$\xrightarrow{R_1 \to R_1 + \frac 12 R_2} \begin{pmatrix} 1 & 0 & 4 \\ 0 & 2 & 2 \\ 0 & 0 & 0 \end{pmatrix} \xrightarrow{R_2 \to \frac 12 R_2} \begin{pmatrix} 1 & 0 & 4 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}$$
> The calculations row by row:
> 1. $R_3 - R_1 = (1, 0, 4) - (1, -1, 3) = (0, 1, 1)$;
> 2. $R_3 - \frac 12 R_2 = (0, 1, 1) - (0, 1, 1) = (0, 0, 0)$: the matrix is in row echelon form, with pivots $1$ and $2$ in columns 1 and 2 (end of phase 1);
> 3. $R_1 + \frac 12 R_2 = (1, -1, 3) + (0, 1, 1) = (1, 0, 4)$: zero above the second pivot;
> 4. $\frac 12 R_2 = (0, 1, 1)$: the second pivot becomes $1$ (end of phase 2).

> [!BEYOND] the row echelon form is not unique, the reduced one is
> With different moves you reach different row echelon matrices: in Example 11.7, multiplying the second row by 5 at the end you get another row echelon matrix, just as valid. The reduced Gauss–Jordan form instead is **always the same**, whatever route you take (it is a theorem that the course does not prove). One thing, though, never changes, not even between different row echelon forms: the **number** of pivots and the **columns** they are in. In lesson L12 that number will become the rank.

## Reading the solutions (pp. 54–55)

Now you have everything to solve a system. With Gauss–Jordan you bring $C = (A \mid b)$ to reduced form; then you look at **where** the pivots are. The handouts show a "typical" matrix, in which the question marks are any numbers:

$$\left(\begin{array}{cccccc|c} 0 & 1 & ? & 0 & 0 & ? & ? \\ 0 & 0 & 0 & 1 & 0 & ? & ? \\ 0 & 0 & 0 & 0 & 1 & ? & ? \end{array}\right)$$

Here the pivots are in columns 2, 4 and 5. Every column with a pivot contains a $1$ in place of the pivot and $0$ in all the other entries. There are two cases.

### First case: a pivot in the column of the constant terms

If the column $b$ contains a pivot, the matrix is of this kind:

$$\left(\begin{array}{cccccc|c} 0 & 1 & ? & 0 & 0 & ? & ? \\ 0 & 0 & 0 & 1 & 0 & ? & ? \\ 0 & 0 & 0 & 0 & 0 & 0 & 1 \end{array}\right)$$

The last row represents the equation $0x_1 + 0x_2 + \cdots + 0x_6 = 1$, that is $0 = 1$, which has no solution at all. So the system has no solutions: $S = \emptyset$ (the empty set).

> [!EXAMPLE] The matrix of Example 11.7 as a system
> Think of the matrix $C$ of Example 11.7 as the augmented matrix of a system in three unknowns:
> $$\begin{cases} y + z = 0 \\ x + y + 2z = -3 \\ -x + 2y + z = 1 \end{cases}$$
> Gauss–Jordan (Examples 11.7–11.9) brought it to $\left(\begin{array}{ccc|c} 1 & 0 & 1 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{array}\right)$. The last row says $0 = 1$: the system **has no solutions**. The row echelon form of Example 11.7 already said so, with the row $(0, 0, 0 \mid -2)$, that is $0 = -2$: when a pivot appears in the last column you can stop.

### Second case: no pivot in the last column

If the last column contains no pivot, the matrix is of this kind:

$$\left(\begin{array}{cccccc|c} 0 & 1 & a_{13} & 0 & 0 & a_{16} & b_1 \\ 0 & 0 & 0 & 1 & 0 & a_{26} & b_2 \\ 0 & 0 & 0 & 0 & 1 & a_{36} & b_3 \end{array}\right)$$

Each column corresponds to an unknown $x_1, \dots, x_6$, except the last, which contains the constant terms. The handouts' recipe:

1. assign a **parameter** $t_1, t_2, \dots$ to each unknown whose column does **not** contain a pivot. Here the columns without a pivot are 1, 3 and 6: $x_1 = t_1$, $x_3 = t_2$, $x_6 = t_3$;
2. rewrite the system with the parameters:
   $$\begin{cases} x_2 + a_{13}t_2 + a_{16}t_3 = b_1 \\ x_4 + a_{26}t_3 = b_2 \\ x_5 + a_{36}t_3 = b_3 \end{cases}$$
3. move the parameters to the right of the equals sign:
   $$\begin{cases} x_2 = b_1 - a_{13}t_2 - a_{16}t_3 \\ x_4 = b_2 - a_{26}t_3 \\ x_5 = b_3 - a_{36}t_3 \end{cases}$$
4. add the equations of the parameters and write all the unknowns in order:
   $$\begin{cases} x_1 = t_1 \\ x_2 = b_1 - a_{13}t_2 - a_{16}t_3 \\ x_3 = t_2 \\ x_4 = b_2 - a_{26}t_3 \\ x_5 = b_3 - a_{36}t_3 \\ x_6 = t_3 \end{cases}$$

The system is solved. The parameters $t_1, t_2, \dots$ are **free**: they can take any value in $\K$, and each choice of the parameters gives a different solution. The other unknowns depend on the parameters as shown.

Piece by piece:

- The unknowns with a pivot (here $x_2, x_4, x_5$) are often called **dependent variables**; those without a pivot (here $x_1, x_3, x_6$) **free variables**.
- The number of parameters is
  $$\text{number of unknowns} - \text{number of pivots} = 6 - 3 = 3.$$
- If **every** column of $A$ has a pivot there are no parameters: there is **only one** solution, and you read it in the last column.
- The rows made only of zeros, $(0, \dots, 0 \mid 0)$, say $0 = 0$: they are always true and can be ignored.

> [!EXAMPLE] Exactly one solution: the matrix of Example 11.10
> Think of the matrix of Example 11.10 as the augmented matrix of a system of 3 equations in 2 unknowns:
> $$\begin{cases} x - y = 3 \\ 2y = 2 \\ x = 4 \end{cases} \qquad \longrightarrow \qquad \left(\begin{array}{cc|c} 1 & 0 & 4 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{array}\right).$$
> No pivot in the last column, and both columns of $A$ have a pivot: no parameters. There is only one solution, $x = 4$, $y = 1$. Check: $4 - 1 = 3$, $2 \cdot 1 = 2$, $x = 4$. Three equations in two unknowns can perfectly well have one solution: here the third says nothing new.

> [!EXAMPLE] Infinitely many solutions with one parameter
> Let us solve
> $$\begin{cases} x + 2y + z = 1 \\ 2x + 4y + 3z = 3 \\ 3x + 6y + 5z = 5 \end{cases}$$
> Gauss: $R_2 \to R_2 - 2R_1$ and $R_3 \to R_3 - 3R_1$ (row 1 stays fixed):
> $$\left(\begin{array}{ccc|c} 1 & 2 & 1 & 1 \\ 2 & 4 & 3 & 3 \\ 3 & 6 & 5 & 5 \end{array}\right) \longrightarrow \left(\begin{array}{ccc|c} 1 & 2 & 1 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 2 & 2 \end{array}\right)$$
> $$\xrightarrow{R_3 \to R_3 - 2R_2} \left(\begin{array}{ccc|c} 1 & 2 & 1 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{array}\right)$$
> The calculations: $(2, 4, 3, 3) - 2(1, 2, 1, 1) = (0, 0, 1, 1)$; $(3, 6, 5, 5) - 3(1, 2, 1, 1) = (0, 0, 2, 2)$; $(0, 0, 2, 2) - 2(0, 0, 1, 1) = 0$. In the second column, below the first row, there are only zeros: the step jumps to the third column. Gauss–Jordan: $R_1 \to R_1 - R_2$ gives $(1, 2, 0, 0)$:
> $$\left(\begin{array}{ccc|c} 1 & 2 & 0 & 0 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{array}\right).$$
> Pivots in columns 1 and 3, none in the last. Column 2 ($y$) has no pivot: $y = t$. Then $z = 1$ and $x + 2t = 0$, that is
> $$x = -2t, \qquad y = t, \qquad z = 1, \qquad t \in \R.$$
> Check in the second equation: $2(-2t) + 4t + 3 \cdot 1 = 3$. For $t = 0$ the solution $(0, 0, 1)$, for $t = 1$ the solution $(-2, 1, 1)$, and so on: infinitely many solutions, which depend on **one** parameter ($3$ unknowns $- 2$ pivots).

> [!EXAMPLE] Two parameters (from Martelli's book, Example 3.1.2)
> The system $\begin{cases} x_1 + 3x_2 + 4x_5 = 1 \\ x_3 - 2x_4 = 3 \end{cases}$ is already in reduced form: the augmented matrix is
> $$\left(\begin{array}{ccccc|c} 1 & 3 & 0 & 0 & 4 & 1 \\ 0 & 0 & 1 & -2 & 0 & 3 \end{array}\right).$$
> Pivots in columns 1 and 3; the free unknowns are $x_2$, $x_4$, $x_5$: three parameters ($5 - 2 = 3$). With $x_2 = t_1$, $x_4 = t_2$, $x_5 = t_3$:
> $$\begin{cases} x_1 = 1 - 3t_1 - 4t_3 \\ x_2 = t_1 \\ x_3 = 3 + 2t_2 \\ x_4 = t_2 \\ x_5 = t_3 \end{cases}$$
> Notice the signs: $3x_2$ and $4x_5$, moved to the right, become $-3t_1$ and $-4t_3$; $-2x_4$ becomes $+2t_2$.

```widget gauss
title: Solve a system: the last column is the one of the constant terms
matrice: 1 2 1 1; 2 4 3 3; 3 6 5 5
modo: sistema
```

The tool runs Gauss–Jordan on the augmented matrix, says whether there are solutions and writes them with the parameters $t_1, t_2, \dots$ Here you find the system of the example with one parameter. Try changing the last number from $5$ to $6$: the third equation is no longer compatible with the others and the row $0 = 1$ appears.

> [!PITFALL] The parameters: how many and to whom
> Two classic mistakes. (1) **Forgetting a free unknown.** If an unknown appears in no equation, its column in $A$ is all zeros, has no pivot and gets a parameter too. In $\R^3$ the system made of the single equation $x + z = 1$ has matrix $\left(\begin{array}{ccc|c} 1 & 0 & 1 & 1 \end{array}\right)$: columns 2 and 3 have no pivot, so $y = t_1$, $z = t_2$, $x = 1 - t_2$, with **two** parameters. (2) **Counting the unknowns from the columns of $C$** instead of those of $A$: the column of the constant terms is **not** an unknown. A $3 \times 5$ augmented matrix has **4** unknowns.

> [!BEYOND] the solutions written as vectors
> Martelli (p. 84) also writes the solutions in **vector form**, collecting the parameters. In the example with one parameter:
> $$\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} -2t \\ t \\ 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix} + t \begin{pmatrix} -2 \\ 1 \\ 0 \end{pmatrix}.$$
> It is a **line** of $\R^3$: the point $(0, 0, 1)$ plus all the multiples of the vector $(-2, 1, 0)$. In general the solutions have the form $x_0 + t_1 v_1 + \cdots + t_h v_h$, with one vector $v_i$ for each parameter. In lesson L12 you will see what $x_0$ (a "particular solution") and the $v_i$ (the solutions of the system with all the constant terms equal to zero) are.

> [!BEYOND] where to find it in the book
> The whole lesson follows Martelli's book, **§3.1 "Algoritmi di risoluzione"** (pp. 79–85 of the book): Gauss moves and Proposition 3.1.1 (pp. 79–80), Gauss's algorithm (pp. 80–82), Gauss–Jordan algorithm (pp. 82–83), solving a system and vector form of the solutions (pp. 83–85, with Example 3.1.2). In the book the rows are called $C_i$ instead of $R_i$.

## Towards the exam

The AG written test has 10 quiz questions with 5 answers each (you need at least 6 points for the 2 problems worth 11 points to be marked), it lasts 2 hours, with no calculator and only 4 handwritten pages of notes; the 2026/27 exam sessions are on 22/01 and 05/02/2027 at 14:00. All the details are in lesson L01.

**What you need from this lesson for the exam**

1. **The quiz on the number of solutions.** In the 15 exam sessions from 2023/24 to 2025/26 the question "The linear system with augmented matrix … has a number of solutions equal to" came up 9 times: exams of 24/01/2024 (question 10), 10/06/2024 (question 7), 10/07/2024 (question 5), 16/01/2025 (question 10), 03/06/2025 (question 4), 10/07/2025 (question 5), 02/09/2025 (question 1), 15/01/2026 (question 6) and 03/06/2026 (question 7). The five answers are always the same: one, zero, infinitely many with 1 parameter, infinitely many with 2 parameters, a finite number greater than 1. In the exam of 07/09/2026 (question 3) the same idea comes back with a parameter: "for which $k$ does the system have no solutions?" (lesson L12).
2. **Finding all the solutions.** In the exam of 10/07/2024 (question 6) you had to choose, among five, the right description of all the solutions of a $3 \times 3$ system (it is the same system as Exercise 12.11 of the handouts, in lesson L12).
3. **The open problems.** Systems with a parameter (lesson L12) are one of the two problems worth 11 points in many exam sessions (07/02/2025, 05/02/2026, 03/07/2026), and almost all the other problems (eigenspaces, kernels, intersections of planes) end with a Gauss reduction. Doing Gauss without calculation mistakes is worth half the test.

> [!METHOD] The quiz "how many solutions?"
> 1. Reduce the augmented matrix **to row echelon form** with Gauss: to count the solutions you do not need Gauss–Jordan.
> 2. If a row becomes $(0, \dots, 0 \mid c)$ with $c \neq 0$, there is a pivot in the last column: **zero** solutions.
> 3. Otherwise count the pivots, $r$, and the unknowns, $n$ (the columns **before** the bar). If $r = n$: **one** solution. If $r < n$: **infinitely many**, depending on $n - r$ parameters.
> 4. The answer "a finite number, greater than 1" with real coefficients is always wrong: the reason is Corollary 12.7 (lesson L12).
> 5. Before starting, look for **proportional rows**: in the exam of 02/09/2025 (question 1) the three rows were multiples of $(1, 4, 2 \mid 7)$, so a single pivot and $3 - 1 = 2$ parameters, without any calculation.

> [!PITFALL] The mistakes that cost points
> - Making a move and **forgetting the last column**: the move must be applied to the whole row.
> - Making two moves **together** with the old rows (see the pitfall in the section on the moves).
> - Counting the unknowns from the columns of $C$: in the exam of 16/01/2025 (question 10) the augmented matrix was $3 \times 5$, so the unknowns were **4**, and the right answer was "infinitely many, depending on 2 parameters".
> - Sign mistakes when moving the parameters to the right of the equals sign. Remedy: at the end **substitute** a solution (for example with all the parameters equal to zero) into the starting equations.

> [!EXAM] The 4-page sheet
> From this lesson: the three Gauss moves (with $\lambda \neq 0$ in II and $j \neq i$ in III); the definition of pivot and of row echelon matrix; the reading rule "pivot in the last column $\Rightarrow$ no solution; otherwise $n - r$ parameters, one for each column of $A$ without a pivot".

## Quiz

```quiz
Q: Which of these is a Gauss move on the augmented matrix of a linear system?
+ The move $R_2 \to R_2 - 3R_1$.
- The move $R_2 \to 0 \cdot R_2$.
- Adding $1$ to all the numbers of the first row.
- Swapping the first and the last column.
- Squaring all the numbers of the second row.
= $R_2 \to R_2 - 3R_1$ is a move of type (III). Multiplying by $0$ is not allowed (move II needs $\lambda \neq 0$), adding a number or squaring are not moves, and the moves are made on the rows, not on the columns.

Q: Which of these five matrices is in row echelon form? $M_1 = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 0 & 0 \\ 0 & 4 & 5 \end{pmatrix}$, $M_2 = \begin{pmatrix} 2 & 1 & 0 & 3 \\ 0 & 0 & 5 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}$, $M_3 = \begin{pmatrix} 1 & 2 \\ 3 & 0 \end{pmatrix}$, $M_4 = \begin{pmatrix} 0 & 1 & 2 \\ 0 & 3 & 4 \\ 0 & 0 & 5 \end{pmatrix}$, $M_5 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}$.
- The first.
+ The second.
- The third.
- The fourth.
- The fifth.
= $M_2$ has the pivots $2$ (column 1) and $5$ (column 3) and the zero row at the bottom. In $M_1$ the zero row is not at the bottom; in $M_3$ and in $M_4$ the pivot of the second row is in the same column as that of the first; in $M_5$ the pivot of the third row (column 2) is to the left of that of the second (column 3).

Q: The linear system with augmented matrix $\left(\begin{array}{ccc|c} 1 & 2 & 3 & 10 \\ 4 & 5 & 6 & 11 \\ 7 & 8 & 9 & 12 \end{array}\right)$ has a number of solutions equal to:
- One.
+ Infinitely many, depending on 1 parameter.
- Zero.
- Infinitely many, depending on 2 parameters.
- A finite number, greater than 1.
= Exam of 24/01/2024, question 10. $R_2 \to R_2 - 4R_1$ gives $(0, -3, -6 \mid -29)$, $R_3 \to R_3 - 7R_1$ gives $(0, -6, -12 \mid -58)$, then $R_3 \to R_3 - 2R_2$ gives the zero row. Two pivots, in columns 1 and 2, none in the last: infinitely many solutions with $3 - 2 = 1$ parameter.

Q: The linear system with augmented matrix $\left(\begin{array}{ccc|c} 3 & 12 & 6 & 21 \\ 5 & 20 & 10 & 35 \\ 4 & 16 & 8 & 28 \end{array}\right)$ has a number of solutions equal to:
- Zero.
+ Infinitely many, depending on 2 parameters.
- A finite number, greater than 1.
- One.
- Infinitely many, depending on 1 parameter.
= Exam of 02/09/2025, question 1. The rows are $3$, $5$ and $4$ times the row $(1, 4, 2 \mid 7)$: after Gauss a single non-zero row remains, with a single pivot and no pivot in the last column. There are 3 unknowns, so $3 - 1 = 2$ parameters.

Q: The linear system with augmented matrix $\left(\begin{array}{ccc|c} 1 & 2 & 3 & 4 \\ 2 & 3 & 4 & 5 \\ 3 & 4 & 5 & 7 \end{array}\right)$ has a number of solutions equal to:
+ Zero.
- One.
- Infinitely many, depending on 1 parameter.
- Infinitely many, depending on 2 parameters.
- A finite number, greater than 1.
= Similar to the exam of 10/07/2024, question 5. $R_2 - 2R_1 = (0, -1, -2 \mid -3)$, $R_3 - 3R_1 = (0, -2, -4 \mid -5)$, then $R_3 - 2R_2 = (0, 0, 0 \mid 1)$: the row says $0 = 1$, there is a pivot in the last column and the system has no solutions.

Q: The reduced form of the augmented matrix of a system in the unknowns $x, y, z$ is $\left(\begin{array}{ccc|c} 1 & 0 & 2 & 3 \\ 0 & 1 & -1 & 1 \end{array}\right)$. What is the set of all the solutions ($t \in \R$)?
+ $x = 3 - 2t,\ y = 1 + t,\ z = t$
- $x = 3 + 2t,\ y = 1 - t,\ z = t$
- Only $x = 3,\ y = 1,\ z = 0$
- $x = -2t,\ y = t,\ z = t$
- The system has no solutions.
= Similar to the exam of 10/07/2024, question 6. The column of $z$ has no pivot: $z = t$. The rows say $x + 2z = 3$ and $y - z = 1$, so $x = 3 - 2t$ and $y = 1 + t$. The third answer gives a single solution (the one with $t = 0$), not all of them; the second gets the signs wrong when moving $t$ to the right.

Q: Reducing to row echelon form the augmented matrix of a system in 3 unknowns, the row $(0, 0, 0 \mid 5)$ appears. What can you conclude?
+ The system has no solutions.
- $z = 5$.
- The system has infinitely many solutions.
- The row can be deleted and you carry on.
- The only solution is $x = y = z = 0$.
= The row represents the equation $0x + 0y + 0z = 5$, that is $0 = 5$, false for every choice of the unknowns. There is a pivot in the last column, so $S = \emptyset$. What you delete instead is a row $(0, 0, 0 \mid 0)$, which says $0 = 0$.

Q: In the matrix $\left(\begin{array}{cc|c} 1 & 2 & 4 \\ 3 & 1 & 7 \end{array}\right)$ you make the move $R_2 \to R_2 - 3R_1$. What does the second row become?
+ $(0, -5 \mid -5)$
- $(0, -5 \mid 5)$
- $(0, 5 \mid 5)$
- $(0, -5 \mid 19)$
- $(2, -1 \mid 3)$
= $(3, 1, 7) - 3 \cdot (1, 2, 4) = (3 - 3,\ 1 - 6,\ 7 - 12) = (0, -5, -5)$. The move is applied to the last column too; $(2, -1 \mid 3)$ is $R_2 - R_1$, not $R_2 - 3R_1$.

Q: A system of 3 equations in 5 unknowns, reduced to row echelon form, has 3 pivots and none of them is in the last column. How many solutions are there?
+ Infinitely many, depending on 2 parameters.
- Infinitely many, depending on 3 parameters.
- One.
- Zero.
- Infinitely many, depending on 5 parameters.
= Similar to the exam of 16/01/2025, question 10 (where there were 4 unknowns). No pivot in the last column, so there are solutions; there are as many parameters as unknowns without a pivot: $5 - 3 = 2$.

Q: Solve the row echelon system $x - y + 2z = 5$, $3y - z = 1$, $2z = 4$. What is $x$?
N: 2
= From the bottom: $z = 2$; then $3y - 2 = 1$, so $y = 1$; finally $x - 1 + 4 = 5$, so $x = 2$.
```

## Exercises

::: exercise intermediate Exercise 11.11 of the handouts: a 3 × 3 system
Solve the linear system
$$\begin{cases} x + y + 2z = 9 \\ 2x + 4y - 3z = 1 \\ 3x + 6y - 5z = 0 \end{cases}$$
::: solution
**Augmented matrix and phase 1 (Gauss).** The pivot of the first column is already $1$. I take $2R_1$ away from the second row and $3R_1$ away from the third:
$$\left(\begin{array}{ccc|c} 1 & 1 & 2 & 9 \\ 2 & 4 & -3 & 1 \\ 3 & 6 & -5 & 0 \end{array}\right) \longrightarrow \left(\begin{array}{ccc|c} 1 & 1 & 2 & 9 \\ 0 & 2 & -7 & -17 \\ 0 & 3 & -11 & -27 \end{array}\right)$$
The calculations: $(2, 4, -3, 1) - 2(1, 1, 2, 9) = (0, 2, -7, -17)$ and $(3, 6, -5, 0) - 3(1, 1, 2, 9) = (0, 3, -11, -27)$.

Now the pivot of the second column is $2$ and below it there is $3$. To avoid fractions I use $R_3 \to 2R_3 - 3R_2$ (a move II followed by a move III):
$$2 \cdot (0, 3, -11, -27) - 3 \cdot (0, 2, -7, -17) = (0,\ 6 - 6,\ -22 + 21,\ -54 + 51) = (0, 0, -1, -3).$$
$$\left(\begin{array}{ccc|c} 1 & 1 & 2 & 9 \\ 0 & 2 & -7 & -17 \\ 0 & 0 & -1 & -3 \end{array}\right)$$
(Following the algorithm to the letter, $R_3 \to R_3 - \frac 32 R_2$, the third row comes out $(0, 0, -\frac 12, -\frac 32)$: it is the same equation divided by 2.)

**Reading.** Three pivots in three columns of $A$, none in the last column: exactly one solution. Back substitution:
1. $-z = -3$, so $z = 3$;
2. $2y - 7 \cdot 3 = -17$, that is $2y = 4$, so $y = 2$;
3. $x + 2 + 2 \cdot 3 = 9$, so $x = 1$.

**Check** in the starting equations: $1 + 2 + 6 = 9$; $2 + 8 - 9 = 1$; $3 + 12 - 15 = 0$. The solution is $(x, y, z) = (1, 2, 3)$, as the handouts say.
:::

::: exercise basic From the system to the augmented matrix
Write the coefficient matrix, the vector of constant terms and the augmented matrix of the systems
$$\text{(a)} \begin{cases} 3x - z = 2 \\ y + 4z = -1 \end{cases} \qquad \text{(b)} \begin{cases} x_1 + x_2 = x_3 \\ 2x_3 - 7 = x_1 \\ x_2 = 5 \end{cases}$$
How many equations and how many unknowns are there?
::: solution
(a) Two equations ($k = 2$) in three unknowns ($n = 3$, in the order $x, y, z$). In the first $y$ is missing, in the second $x$ is missing: coefficients $0$.
$$A = \begin{pmatrix} 3 & 0 & -1 \\ 0 & 1 & 4 \end{pmatrix}, \quad b = \begin{pmatrix} 2 \\ -1 \end{pmatrix}, \quad C = \left(\begin{array}{ccc|c} 3 & 0 & -1 & 2 \\ 0 & 1 & 4 & -1 \end{array}\right).$$

(b) First you put it in order: the unknowns on the left, in the order $x_1, x_2, x_3$, the numbers on the right.
$$\begin{cases} x_1 + x_2 - x_3 = 0 \\ -x_1 + 2x_3 = 7 \\ x_2 = 5 \end{cases} \qquad C = \left(\begin{array}{ccc|c} 1 & 1 & -1 & 0 \\ -1 & 0 & 2 & 7 \\ 0 & 1 & 0 & 5 \end{array}\right).$$
Three equations in three unknowns. Notice the $-7$ moved to the right, which becomes $+7$, and the two zeros for the missing unknowns.
:::

::: exercise basic Pivots and echelons
For each matrix say whether it is in row echelon form and, if it is, give the pivots and the columns they are in.
$$M_1 = \begin{pmatrix} 0 & 2 & 1 & 4 \\ 0 & 0 & 0 & 3 \\ 0 & 0 & 0 & 0 \end{pmatrix}, \quad M_2 = \begin{pmatrix} 1 & 5 \\ 0 & 0 \\ 0 & 2 \end{pmatrix}, \quad M_3 = \begin{pmatrix} 3 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}, \quad M_4 = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 6 & 7 \end{pmatrix}.$$
::: solution
- $M_1$: yes. Pivot $2$ in column 2 and $3$ in column 4; the zero row is at the bottom. The all-zero first column does no harm.
- $M_2$: no. The zero row $(0, 0)$ is above the row $(0, 2)$, which has a pivot. Swapping the last two rows it becomes row echelon.
- $M_3$: yes. A single pivot, $3$, in column 1, and the zero row at the bottom.
- $M_4$: no. The pivot of the third row, $6$, is in column 2 like that of the second. With $R_3 \to R_3 - \frac 32 R_2$ the third row becomes $(0, 0, 7 - \frac{15}2) = (0, 0, -\frac 12)$ and the matrix is in row echelon form.
:::

::: exercise intermediate Full Gauss–Jordan, with a column without a pivot
Solve with the Gauss–Jordan algorithm the system with augmented matrix
$$\left(\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\ 2 & 4 & 1 & 0 \\ 1 & 2 & 2 & -3 \end{array}\right).$$
::: solution
**Phase 1.** $R_2 \to R_2 - 2R_1$ and $R_3 \to R_3 - R_1$:
$$(2, 4, 1, 0) - 2(1, 2, -1, 3) = (0, 0, 3, -6), \qquad (1, 2, 2, -3) - (1, 2, -1, 3) = (0, 0, 3, -6).$$
The second column below the first row is all zero: you move on to the third, where the pivot is $3$. $R_3 \to R_3 - R_2$ gives the zero row:
$$\left(\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\ 0 & 0 & 3 & -6 \\ 0 & 0 & 0 & 0 \end{array}\right).$$
**Phase 2.** $R_2 \to \frac 13 R_2$ gives $(0, 0, 1, -2)$; then $R_1 \to R_1 + R_2$ gives $(1, 2, 0, 1)$:
$$\left(\begin{array}{ccc|c} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & -2 \\ 0 & 0 & 0 & 0 \end{array}\right).$$
**Reading.** Pivots in columns 1 and 3, none in the last. Column 2 has no pivot: $y = t$. Then $z = -2$ and $x = 1 - 2t$:
$$(x, y, z) = (1 - 2t,\ t,\ -2), \qquad t \in \R.$$
**Check** with $t = 0$, that is $(1, 0, -2)$: $1 + 0 + 2 = 3$; $2 + 0 - 2 = 0$; $1 + 0 - 4 = -3$.
:::

::: exercise intermediate Two equations, four unknowns
Find all the solutions of
$$\begin{cases} x_1 + x_2 - x_3 + 2x_4 = 1 \\ 2x_1 + 2x_2 + x_3 + x_4 = 5 \end{cases}$$
::: solution
$R_2 \to R_2 - 2R_1$: $(2, 2, 1, 1, 5) - 2(1, 1, -1, 2, 1) = (0, 0, 3, -3, 3)$. Then $R_2 \to \frac 13 R_2$ gives $(0, 0, 1, -1, 1)$ and $R_1 \to R_1 + R_2$ gives $(1, 1, 0, 1, 2)$:
$$\left(\begin{array}{cccc|c} 1 & 1 & 0 & 1 & 2 \\ 0 & 0 & 1 & -1 & 1 \end{array}\right).$$
Pivots in columns 1 and 3. Columns 2 and 4 have no pivot: $x_2 = s$, $x_4 = t$. The rows say $x_1 + s + t = 2$ and $x_3 - t = 1$:
$$x_1 = 2 - s - t, \qquad x_2 = s, \qquad x_3 = 1 + t, \qquad x_4 = t, \qquad s, t \in \R.$$
Infinitely many solutions, with $4 - 2 = 2$ parameters. **Check** in the second equation: $2(2 - s - t) + 2s + (1 + t) + t = 4 - 2s - 2t + 2s + 1 + 2t = 5$.
:::

::: exercise intermediate An impossible system
Show that the system $\begin{cases} x + y + z = 1 \\ x - y + 2z = 0 \\ 2x + 3z = 2 \end{cases}$ has no solutions.
::: solution
$$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 1 & -1 & 2 & 0 \\ 2 & 0 & 3 & 2 \end{array}\right) \xrightarrow[R_3 \to R_3 - 2R_1]{R_2 \to R_2 - R_1} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & -2 & 1 & -1 \\ 0 & -2 & 1 & 0 \end{array}\right)$$
$$\xrightarrow{R_3 \to R_3 - R_2} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & -2 & 1 & -1 \\ 0 & 0 & 0 & 1 \end{array}\right)$$
The calculations: $(1, -1, 2, 0) - (1, 1, 1, 1) = (0, -2, 1, -1)$; $(2, 0, 3, 2) - 2(1, 1, 1, 1) = (0, -2, 1, 0)$; $(0, -2, 1, 0) - (0, -2, 1, -1) = (0, 0, 0, 1)$.

The last row says $0 = 1$: pivot in the last column, $S = \emptyset$. You can also see it at a glance: the third equation minus the sum of the first two gives $0 = 1$, because $(2x + 3z) - (x + y + z) - (x - y + 2z) = 0$ while $2 - 1 - 0 = 1$.
:::

::: exercise intermediate Where is the mistake?
A student solves $\begin{cases} 2x + y = 4 \\ x + 3y = 7 \end{cases}$ by doing in the same step $R_1 \to R_1 - 2R_2$ and $R_2 \to R_2 - \frac 12 R_1$, both with the starting rows. What do they get? Why is it wrong? Solve it correctly.
::: solution
**The student's calculation**, with the starting rows $R_1 = (2, 1 \mid 4)$ and $R_2 = (1, 3 \mid 7)$:
$$R_1 - 2R_2 = (0, -5 \mid -10), \qquad R_2 - \tfrac 12 R_1 = (0, \tfrac 52 \mid 5).$$
The two new rows are multiples of each other (the second is $-\frac 12$ times the first): what remains is the single equation $y = 2$ and $x$ looks free, that is "infinitely many solutions".

**Why it is wrong.** Each of the two moves, on its own, is legitimate; done together they are not, because the second uses the row $R_1$ which in the meantime has been changed by the first. The result can no longer be brought back: an equation has been lost.

**Correctly**, one move at a time: $R_1 \leftrightarrow R_2$, then $R_2 \to R_2 - 2R_1$:
$$\left(\begin{array}{cc|c} 1 & 3 & 7 \\ 2 & 1 & 4 \end{array}\right) \longrightarrow \left(\begin{array}{cc|c} 1 & 3 & 7 \\ 0 & -5 & -10 \end{array}\right)$$
So $y = 2$ and $x = 7 - 6 = 1$. Check: $2 + 2 = 4$, $1 + 6 = 7$. There is only one solution, $(1, 2)$.
:::

::: exercise intermediate The homogeneous system of Example 11.10
Use the matrix of Example 11.10 as the coefficient matrix of the system in three unknowns with all constant terms equal to zero:
$$\begin{cases} x_1 - x_2 + 3x_3 = 0 \\ 2x_2 + 2x_3 = 0 \\ x_1 + 4x_3 = 0 \end{cases}$$
Find all the solutions.
::: solution
The column of the constant terms is all zeros and no Gauss move changes it (combinations of zeros give zero): it is enough to reduce the coefficient matrix. Example 11.10 has already done it:
$$\begin{pmatrix} 1 & -1 & 3 \\ 0 & 2 & 2 \\ 1 & 0 & 4 \end{pmatrix} \longrightarrow \begin{pmatrix} 1 & 0 & 4 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}.$$
Pivots in columns 1 and 2: column 3 is free, $x_3 = t$. The rows say $x_1 + 4t = 0$ and $x_2 + t = 0$:
$$(x_1, x_2, x_3) = (-4t, -t, t) = t\,(-4, -1, 1), \qquad t \in \R.$$
**Check** with $t = 1$: $-4 + 1 + 3 = 0$; $-2 + 2 = 0$; $-4 + 4 = 0$. The solutions are the multiples of one vector: a line through the origin. In lesson L12 this will be called the **homogeneous system**, and you will see that its solutions always form a subspace.
:::

::: exercise hard When the system depends on a number
For which values of $a \in \R$ does the system $\begin{cases} x + y = 1 \\ x + ay = 2 \end{cases}$ have solutions? When there are some, find them.
::: solution
$R_2 \to R_2 - R_1$: $(1, a, 2) - (1, 1, 1) = (0, a - 1, 1)$.
$$\left(\begin{array}{cc|c} 1 & 1 & 1 \\ 0 & a - 1 & 1 \end{array}\right)$$
Now you have to distinguish cases, because the second pivot is $a - 1$ and **it can be zero**.

- **If $a = 1$** the second row is $(0, 0 \mid 1)$: $0 = 1$, no solution. Indeed the system becomes $x + y = 1$ and $x + y = 2$: two parallel lines.
- **If $a \neq 1$** the pivot $a - 1$ is non-zero and I can divide: $y = \frac 1{a - 1}$, then $x = 1 - y = \frac{a - 2}{a - 1}$. Exactly one solution.

**Check** in the second equation: $x + ay = \frac{a - 2}{a - 1} + \frac a{a - 1} = \frac{2a - 2}{a - 1} = 2$. For example with $a = 3$: $y = \frac 12$, $x = \frac 12$, and indeed $\frac 12 + \frac 32 = 2$.

The trap: dividing by $a - 1$ without asking yourself whether it can be zero. With parameters, every time a pivot contains the parameter you study separately the case in which it vanishes (lesson L12).
:::

::: exercise exam As at the exam: how many solutions? (exam of 15/01/2026, question 6)
The linear system with augmented matrix
$$\left(\begin{array}{ccc|c} 0 & 1 & 2 & 3 \\ 4 & 5 & 6 & 7 \\ 8 & 9 & 10 & 11 \end{array}\right)$$
has a number of solutions equal to: (a) a finite number, greater than 1; (b) zero; (c) infinitely many, depending on 2 parameters; (d) infinitely many, depending on 1 parameter; (e) one. Then find all the solutions.
::: solution
**Step (1) of the algorithm.** $C_{11} = 0$: I swap $R_1 \leftrightarrow R_2$.
$$\left(\begin{array}{ccc|c} 4 & 5 & 6 & 7 \\ 0 & 1 & 2 & 3 \\ 8 & 9 & 10 & 11 \end{array}\right) \xrightarrow{R_3 \to R_3 - 2R_1} \left(\begin{array}{ccc|c} 4 & 5 & 6 & 7 \\ 0 & 1 & 2 & 3 \\ 0 & -1 & -2 & -3 \end{array}\right)$$
$$\xrightarrow{R_3 \to R_3 + R_2} \left(\begin{array}{ccc|c} 4 & 5 & 6 & 7 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 0 & 0 \end{array}\right)$$
The calculations: $(8, 9, 10, 11) - 2(4, 5, 6, 7) = (0, -1, -2, -3)$; then adding $R_2$ you get the zero row.

**Answer to the quiz.** Two pivots (columns 1 and 2), none in the last column, three unknowns: infinitely many solutions with $3 - 2 = 1$ parameter, answer **(d)**.

**All the solutions.** $z = t$. From the second row $y = 3 - 2t$. From the first $4x = 7 - 5(3 - 2t) - 6t = 7 - 15 + 10t - 6t = -8 + 4t$, so $x = -2 + t$:
$$(x, y, z) = (-2 + t,\ 3 - 2t,\ t), \qquad t \in \R.$$
**Check** with $t = 0$, that is $(-2, 3, 0)$: $0 + 3 + 0 = 3$; $-8 + 15 + 0 = 7$; $-16 + 27 + 0 = 11$.
:::

::: exercise exam As at the exam: finding all the solutions
Find all the solutions of the system
$$\begin{cases} x + 2y + 3z = 1 \\ 2x + 5y + 7z = 3 \\ x + 3y + 4z = 2 \end{cases}$$
and choose the right answer among: (a) no solution; (b) $x = -1 - t,\ y = 1 - t,\ z = t$; (c) $x = 1,\ y = 0,\ z = 0$; (d) $x = -1 + t,\ y = 1 + t,\ z = t$; (e) $x = 1 - 2s,\ y = s,\ z = 0$.
::: solution
**Gauss.** $R_2 \to R_2 - 2R_1$ and $R_3 \to R_3 - R_1$:
$$(2, 5, 7, 3) - 2(1, 2, 3, 1) = (0, 1, 1, 1), \qquad (1, 3, 4, 2) - (1, 2, 3, 1) = (0, 1, 1, 1).$$
The two rows are equal: $R_3 \to R_3 - R_2$ gives the zero row. Gauss–Jordan: $R_1 \to R_1 - 2R_2$ gives $(1, 0, 1, -1)$.
$$\left(\begin{array}{ccc|c} 1 & 0 & 1 & -1 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{array}\right)$$
**Reading.** $z = t$ (column without a pivot), $x = -1 - t$, $y = 1 - t$: answer **(b)**.

**How to rule out the others without redoing the calculations** (useful in the quiz): is (c) a solution? In the first equation $1 + 0 + 0 = 1$ yes, in the second $2 \neq 3$: no. (d) with $t = 1$ gives $(0, 2, 1)$: in the first $0 + 4 + 3 = 7 \neq 1$, no. (e) with $s = 0$ gives $(1, 0, 0)$, already ruled out. (a) is false because (b) works: with $t = 0$, $(-1, 1, 0)$ gives $-1 + 2 = 1$, $-2 + 5 = 3$, $-1 + 3 = 2$.
:::

## Review questions

::: question What is a linear system and what is its augmented matrix?
A set of $k$ first-degree equations in the same $n$ unknowns, with coefficients and constant terms in a field $\K$. The augmented matrix $C = (A \mid b)$ is the $k \times (n + 1)$ matrix that has the coefficients $a_{ij}$ on the left (row = equation, column = unknown) and the constant terms $b_i$ in the last column.
:::

::: question What is the set $S$ of solutions?
The set of all the vectors $x \in \K^n$ that make all the equations of the system true together. It can be empty, have a single element or have infinitely many.
:::

::: question What are the three Gauss moves?
(I) swapping two rows, $R_i \leftrightarrow R_j$; (II) multiplying a row by $\lambda \neq 0$, $R_i \to \lambda R_i$; (III) adding to a row a multiple of another row, $R_i \to R_i + \lambda R_j$ with $j \neq i$ and any $\lambda$.
:::

::: question Why does move (II) need $\lambda \neq 0$?
Because multiplying by $0$ the equation becomes $0 = 0$ and the information it contained is lost: the solutions can increase. With $\lambda \neq 0$ instead the move is undone by multiplying by $\frac 1\lambda$.
:::

::: question Why do the Gauss moves not change the solutions (Proposition 11.4)?
Because each move turns true equations into true equations, and each move can be undone by another move of the same type (the same swap, multiplication by $\frac 1\lambda$, the move $R_i \to R_i - \lambda R_j$). So a vector solves the system before the move if and only if it solves it after.
:::

::: question What is a pivot? When is a matrix in row echelon form?
The pivot of a row is its first non-zero entry, reading from the left. A matrix is in row echelon form if the zero rows are at the bottom and each pivot is strictly to the right of the pivot of the non-zero row above.
:::

::: question How does Gauss's algorithm work?
(1) You look for a non-zero entry in the first column and bring it to the top with a swap; if the column is all zero you move on to the next one. (2) You put zeros below the pivot with the moves $R_i \to R_i - \frac{C_{i1}}{C_{11}} R_1$. (3) You repeat on the submatrix without the first row and the first column.
:::

::: question What does the Gauss–Jordan algorithm add?
After the row echelon form, it also puts zeros above the pivots (moves III) and makes all the pivots equal to $1$ (moves II). From the reduced form you read off the solutions without any more calculations.
:::

::: question How do you recognise from the row echelon form that a system has no solutions?
There is a pivot in the column of the constant terms, that is a row $(0, \dots, 0 \mid c)$ with $c \neq 0$: it represents the equation $0 = c$, impossible. Then $S = \emptyset$.
:::

::: question If there is no pivot in the last column, how do you write the solutions?
You give a parameter $t_1, t_2, \dots$ to each unknown whose column has no pivot; from the rows you get the unknowns with a pivot, moving the parameters to the right of the equals sign. The parameters are $n - r$, where $n$ is the number of unknowns and $r$ the number of pivots; if $r = n$ there is only one solution.
:::

::: question What is the difference between a row $(0, 0, 0 \mid 0)$ and a row $(0, 0, 0 \mid 3)$?
The first says $0 = 0$, always true: it removes no solutions and can be ignored. The second says $0 = 3$, always false: the system has no solutions.
:::

::: question Why can you not do $R_1 \to R_1 - R_2$ and $R_2 \to R_2 - R_1$ together?
Because the second move would use the old row $R_1$, which in the meantime has changed: the result does not correspond to a sequence of Gauss moves and equations can be lost (the two new rows are opposite to each other). After each move you work with the new rows.
:::

## Glossary

```glossary
Linear system | Set of $k$ first-degree equations in the same $n$ unknowns, with coefficients and constant terms in a field $\K$.
Coefficient $a_{ij}$ | The number that multiplies the unknown $x_j$ in equation $i$.
Constant term $b_i$ | The number to the right of the equals sign in equation $i$.
Coefficient matrix $A$ | The $k \times n$ matrix of the coefficients $a_{ij}$.
Vector of constant terms $b$ | The column vector $(b_1, \dots, b_k)$.
Augmented matrix $C = (A \mid b)$ | The $k \times (n + 1)$ matrix made of $A$ with the column $b$ added on the right.
Solution | A vector of $\K^n$ that makes all the equations of the system true.
Set of solutions $S$ | The subset of $\K^n$ of all the solutions; it can be empty.
Gauss moves | Swapping two rows; multiplying a row by $\lambda \neq 0$; adding to a row a multiple of another row.
Pivot | The first non-zero entry of a row.
Row echelon matrix | Matrix with the zero rows at the bottom and each pivot strictly to the right of the pivot of the row above.
Back substitution | Solving a row echelon system starting from the last equation and going up.
Gauss's algorithm | Procedure that brings any matrix to row echelon form, fixing one column at a time.
Gauss–Jordan algorithm | Gauss, plus zeros above the pivots and pivots equal to 1.
Reduced row echelon form | The result of Gauss–Jordan: pivots equal to 1, the only non-zero entries of their column.
Free variable (parameter) | Unknown whose column contains no pivot: it can take any value.
Impossible system | System with no solutions ($S = \emptyset$); in row echelon form it has a pivot in the last column.
```

## Checklist

```checklist
- I can write the augmented matrix of a system, putting in order the unknowns, the zeros and the constant terms.
- I can list the three Gauss moves with their conditions ($\lambda \neq 0$ in II, $j \neq i$ in III).
- I can explain why the Gauss moves do not change the set of solutions.
- I can find the pivots and say whether a matrix is in row echelon form.
- I can apply Gauss's algorithm, also when $C_{11} = 0$ or a column is all zero.
- I can complete with Gauss–Jordan: zeros above the pivots and pivots equal to 1.
- I can recognise an impossible system from the row $(0, \dots, 0 \mid c)$ with $c \neq 0$.
- I can write all the solutions with the free parameters, one for each column of $A$ without a pivot.
- I can answer the quiz "how many solutions?" in a few minutes by counting pivots and unknowns.
- I can check a solution by substituting it into the starting equations.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 11 "Sistemi Lineari I", pp. 50–55: sections 11.A–11.E are followed in order, with the page next to each heading; definitions, proposition and examples keep their numbering (Definitions 11.1, 11.2 and 11.5, Proposition 11.4, Examples 11.3 and 11.6–11.10, Exercise 11.11).
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §3.1 "Algoritmi di risoluzione" (pp. 79–85), which is also the source of Example 3.1.2, the vector form of the solutions and the remark on the freedom in the choice of moves.
- **Exam papers** of Linear Algebra 2023/24–2025/26 with official solutions (2025/26 Moodle, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): reported: question 10 of 24/01/2024, question 1 of 02/09/2025 and question 6 of 15/01/2026; cited: the questions on the number of solutions of the other exam sessions and question 6 of 10/07/2024. The solutions here are written from scratch.
- The **"Beyond the handouts"** parts (the three situations in the plane, the tricks for calculations by hand, the uniqueness of the reduced form, the vector form of the solutions, the unnumbered exercises) are additions in these notes to connect the lesson to the rest of the course and to the exam.
