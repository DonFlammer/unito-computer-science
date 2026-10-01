---
course: MDAG
module: AG
lesson: L12
title: Linear systems II
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Part 2 · Linear Algebra and Geometry · Channels A, B and C · Lesson L12
description: >-
  Notes on lesson L12 of Linear Algebra and Geometry (MDAG, part 2): associated homogeneous system, particular
  solution, affine subspaces, rank and pivots, the Rouché–Capelli theorem, square systems and systems with a
  parameter, with exam-style quizzes and worked exercises.
lede: >-
  Why a linear system always has zero, one or infinitely many solutions and never two: the solutions are any one
  solution plus those of the system with zero constant terms, and the Rouché–Capelli theorem tells you, by comparing
  two ranks, whether they exist and how many parameters are needed. At the end, the method for systems with a
  parameter $k$, one of the two problems worth 11 points in many exam sessions.
material: handouts
facts:
  Handouts: lesson 12 · pp. 56–61
  Book: Martelli, §3.2
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 120–150 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 12 "Sistemi lineari II"; B. Martelli, Geometria e algebra lineare, §3.2
italian_file: L12_sistemi_lineari_2.html
html_notes: notes/MDAG/L12_linear_systems_2.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L12_sistemi_lineari_2.md
---

## In brief

- The **associated homogeneous system** is obtained by setting all the constant terms to zero. Its solutions $S_0$ always form a **vector subspace** of $\K^n$: there is always at least the zero solution.
- The solutions $S$ of the starting system, if there are any, are obtained by adding to **one** solution (the **particular solution**) all the solutions of the homogeneous system: $S = x + S_0$.
- A set of the form $x + W$, with $W$ a vector subspace, is an **affine subspace**: a point, a line, a plane that do not necessarily pass through the origin. Its dimension is $\dim W$.
- A system can also be read as $x_1A^1 + \cdots + x_nA^n = b$: it has solutions if and only if $b$ is a linear combination of the columns of $A$.
- The **rank** of a matrix is the number of pivots of any row echelon form of it: the Gauss moves do not change it.
- **Rouché–Capelli theorem**: the system has solutions if and only if $\rk(A \mid b) = \rk(A)$; in this case the solutions form an affine subspace of dimension $n - \rk(A)$.
- Over $\Q$, $\R$, $\C$ the solutions are $0$, $1$ or infinitely many: never two, never "a finite number greater than 1".
- With square $A$: exactly one solution if and only if $\det A \neq 0$, and then $x = A^{-1}b$. If $\det A = 0$ the solutions are zero **or** infinitely many: you check with the ranks.
- In systems with a parameter $k$ you do Gauss keeping $k$ as a letter and you study separately the values of $k$ that make a pivot zero.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## The associated homogeneous system (p. 56)

In lesson L11 you learned to **solve** a system with the Gauss–Jordan algorithm. This lesson looks at the problem from above: what **shape** the set of solutions has, and how you can tell in advance whether there are solutions and how many.

Start from a single equation in two unknowns, $x + y = 2$. The solutions are all the pairs with $x = 2 - t$, $y = t$: a line of the plane. Now set the constant term to zero: $x + y = 0$. The solutions are $x = -t$, $y = t$: another line, **parallel** to the first, which passes through the origin. Look at the drawing: every solution of the first is obtained from a solution of the second by moving it by the vector $(2, 0)$, which is itself a solution of the first ($2 + 0 = 2$). In formulas:

$$(2 - t,\ t) = (2, 0) + (-t,\ t).$$

The whole lesson is in this line.

```graph
title: The solutions of $x + y = 2$ (line $S$) are those of $x + y = 0$ (line $S_0$) moved by the vector $(2, 0)$
x: -3 4
y: -3 4
line: 2 0 0 2 | accent | $S$ | ne
line: 0 0 -2 2 | blue | $S_0$ | ne
vector: 2 0 | amber | $(2, 0)$ | se
vector: 0 0 -1 1 | green | $(-1, 1)$ | sw
vector: 2 0 1 1 | green | dashed
```

We write the general system, as in lesson L11:

$$\begin{cases} a_{11}x_1 + \cdots + a_{1n}x_n = b_1, \\ \qquad \vdots \\ a_{k1}x_1 + \cdots + a_{kn}x_n = b_k. \end{cases} \qquad (12.1)$$

> [!DEF] 12.1 · Associated homogeneous system
> The **associated homogeneous system** is the one obtained simply by setting all the constant terms $b_i$ to zero, that is:
> $$\begin{cases} a_{11}x_1 + \cdots + a_{1n}x_n = 0, \\ \qquad \vdots \\ a_{k1}x_1 + \cdots + a_{kn}x_n = 0. \end{cases} \qquad (12.2)$$

Piece by piece:

- **Homogeneous** means "with all the constant terms equal to zero". The coefficients $a_{ij}$ stay **the same** as in the starting system: only the right-hand column changes.
- If $A = (a_{ij})$ is the coefficient matrix and $b = (b_i)$ the vector of constant terms, system (12.1) has augmented matrix $C = (A \mid b)$; the homogeneous system (12.2) has augmented matrix $(A \mid 0)$, or, more briefly, it is denoted by $A$: the column of zeros does not change with the Gauss moves, so there is no need to write it.
- The handouts call $S \subset \K^n$ the set of solutions of system (12.1) and $S_0 \subset \K^n$ that of the solutions of the homogeneous system (12.2).

> [!EXAMPLE] A system and its homogeneous one
> $$\begin{cases} x + 2y - z = 3 \\ 2x + 4y + z = 3 \end{cases} \quad \longrightarrow \quad \begin{cases} x + 2y - z = 0 \\ 2x + 4y + z = 0 \end{cases}$$
> The matrices are $(A \mid b) = \left(\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\ 2 & 4 & 1 & 3 \end{array}\right)$ and $(A \mid 0) = \left(\begin{array}{ccc|c} 1 & 2 & -1 & 0 \\ 2 & 4 & 1 & 0 \end{array}\right)$: the same $A$, another column on the right.

### The solutions of the homogeneous system form a subspace

> [!PROP] 12.2
> The solutions $S_0 \subset \K^n$ form a vector subspace of $\K^n$.

You have to check the three subspace axioms (Definition 6.2, lesson L06): containing zero, being closed under the sum, being closed under the product by a scalar. We write the $i$-th equation of (12.2) as $a_{i1}x_1 + \cdots + a_{in}x_n = 0$ and check, for every $i$:

1. **Zero is a solution.** With $x = 0$: $a_{i1} \cdot 0 + \cdots + a_{in} \cdot 0 = 0$. So $0 \in S_0$.
2. **Sum.** If $x$ and $y$ are solutions, so is $x + y$: collecting terms,
   $$a_{i1}(x_1 + y_1) + \cdots + a_{in}(x_n + y_n) = (a_{i1}x_1 + \cdots + a_{in}x_n) + (a_{i1}y_1 + \cdots + a_{in}y_n) = 0 + 0 = 0.$$
3. **Multiples.** If $x$ is a solution and $\lambda \in \K$, so is $\lambda x$:
   $$a_{i1}(\lambda x_1) + \cdots + a_{in}(\lambda x_n) = \lambda(a_{i1}x_1 + \cdots + a_{in}x_n) = \lambda \cdot 0 = 0.$$

So $S_0$ is a vector subspace of $\K^n$. $\square$

### The starting system instead is not

The set $S$ of solutions of (12.1) is **not** a subspace, because it does not contain the origin, unless the system is already homogeneous (and then $S = S_0$). The reason: if some $b_i$ is non-zero, substituting $x = 0$ into the $i$-th equation you get $0 = b_i$, false.

Closure under the sum breaks too: if $x$ and $y$ solve $x + 2y - z = 3$, their sum gives $3 + 3 = 6 \neq 3$. For example $(3, 0, 0)$ and $(1, 1, 0)$ solve the first equation of the example above, but their sum $(4, 1, 0)$ gives $4 + 2 - 0 = 6$.

> [!PITFALL] The homogeneous system is never impossible
> A homogeneous system **always** has at least the zero solution $x = 0$: it can never have zero solutions. In the row echelon form of $(A \mid 0)$ the right-hand column stays all zeros, so there cannot be a pivot in the last column. The interesting question, for a homogeneous system, is another one: is there **only** the zero solution, or are there others?

## Particular solution and affine subspaces (pp. 57–58)

The two sets $S$ and $S_0$ are closely linked, as in the opening drawing.

> [!PROP] 12.3
> If $S \neq \emptyset$, then $S$ is obtained by taking any solution $x \in S$ and adding to it all the vectors of $S_0$.

Let us see why it holds, in two steps. Fix a solution $x \in S$ of system (12.1).

1. **A solution plus a solution of the homogeneous system is a solution.** If $x' \in S_0$, then $x + x'$ solves (12.1): for each equation
   $$a_{i1}(x_1 + x'_1) + \cdots + a_{in}(x_n + x'_n) = (a_{i1}x_1 + \cdots + a_{in}x_n) + (a_{i1}x'_1 + \cdots + a_{in}x'_n) = b_i + 0 = b_i.$$
2. **Every solution is obtained like this.** If $x''$ is another solution of (12.1), the difference $x' = x'' - x$ solves the homogeneous system:
   $$a_{i1}(x''_1 - x_1) + \cdots + a_{in}(x''_n - x_n) = b_i - b_i = 0.$$
   So $x'' = x + x'$ with $x' \in S_0$.

Point 1 says that all the vectors $x + x'$ with $x' \in S_0$ lie in $S$; point 2 says that there is nothing else in $S$. So the solutions of (12.1) are **exactly** those you get by adding to a fixed solution $x$ the solutions $x' \in S_0$ of (12.2). $\square$

The fixed solution $x$ is called a **particular solution**. In one sentence:

> [!IDEA] the formula to remember
> **All the solutions = one particular solution + all the solutions of the associated homogeneous system.** In symbols $S = x + S_0$, if $S \neq \emptyset$. The particular solution can be **any** element of $S$: changing it, the set $S$ stays the same.

> [!EXAMPLE] 12.4 · A line of solutions in $\R^3$
> Consider the system in $\R^3$
> $$\begin{cases} x - y + z = 1 \\ y - z = 2 \end{cases}$$
> **The associated homogeneous system** is $x - y + z = 0$, $y - z = 0$. From the second $y = z$; in the first $x - z + z = 0$, that is $x = 0$. With $z = t$ the solutions are precisely the vectors
> $$S_0 = \left\{ \begin{pmatrix} 0 \\ t \\ t \end{pmatrix} \ \middle|\ t \in \R \right\} = \Span\left(\begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}\right).$$
> **A particular solution** is $(3, 0, -2)$: check $3 - 0 + (-2) = 1$ and $0 - (-2) = 2$.
>
> **All the solutions** are obtained by adding:
> $$\begin{pmatrix} 3 \\ 0 \\ -2 \end{pmatrix} + \begin{pmatrix} 0 \\ t \\ t \end{pmatrix} = \begin{pmatrix} 3 \\ t \\ t - 2 \end{pmatrix}, \qquad t \in \R.$$

Where does the particular solution come from? From solving the system with Gauss–Jordan, as in lesson L11:

$$\left(\begin{array}{ccc|c} 1 & -1 & 1 & 1 \\ 0 & 1 & -1 & 2 \end{array}\right) \xrightarrow{R_1 \to R_1 + R_2} \left(\begin{array}{ccc|c} 1 & 0 & 0 & 3 \\ 0 & 1 & -1 & 2 \end{array}\right)$$

The column of $z$ has no pivot: $z = u$, then $x = 3$ and $y = 2 + u$. In vector form

$$\begin{pmatrix} 3 \\ 2 + u \\ u \end{pmatrix} = \begin{pmatrix} 3 \\ 2 \\ 0 \end{pmatrix} + u \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}.$$

With $u = 0$ you find the particular solution $(3, 2, 0)$, different from the handouts' one; the part with $u$ is exactly $S_0$. It is **the same set** as before: the handouts' solution $(3, t, t - 2)$ is the one with $u = t - 2$ (Martelli, p. 87, makes exactly this comparison). The handouts' solution $(3, 0, -2)$ is the one with $u = -2$.

> [!METHOD] Particular solution and $S_0$ in one go
> Solve the system with Gauss–Jordan and write the solutions in vector form, $x = x_0 + t_1 v_1 + \cdots + t_h v_h$. Then:
> 1. $x_0$ (all the parameters equal to zero) is a particular solution;
> 2. $S_0 = \Span(v_1, \dots, v_h)$: the part with the parameters solves the homogeneous system.

### Affine subspaces

> [!DEF] 12.5 · Affine subspace
> Geometrically, $S$ is an affine subspace. Let $V$ be a vector space. An **affine subspace** of $V$ is any subset of the form
> $$S = \{x + v \mid v \in W\} =: x + W$$
> where $x$ is a fixed point of $V$ and $W \subset V$ is a vector subspace. The **dimension of $S$** is the dimension of the subspace $W$.

Piece by piece:

- $x + W$ is the subspace $W$ **translated** by the vector $x$: take every vector $v$ of $W$ and add $x$ to it.
- The symbol $=:$ means "and we call this set": it defines the shorthand $x + W$.
- The dimension is that of $W$, it does not depend on $x$: moving a line does not turn it into a plane.
- Typical cases: $W = \{0\}$ gives a single **point** (dimension 0); $W = \Span(v)$ with $v \neq 0$ gives a **line** through $x$ with direction $v$ (dimension 1); $W = \Span(v, w)$ with $v, w$ independent gives a **plane** (dimension 2).
- Martelli calls $W$ the **direction space** (*giacitura*) of $S$. For the solutions of a system the direction space is $S_0$, and $\dim S = \dim S_0$.

> [!EXAMPLE] The same line written in two ways (from Martelli's book, Example 3.2.5)
> Let $W = \Span\big((1, 1)\big)$ in $\R^2$. The two affine lines
> $$r_1 = (1, 0) + W = \{(1 + t,\ t) \mid t \in \R\},$$
> $$r_2 = (0, -1) + W = \{(u,\ u - 1) \mid u \in \R\}$$
> are **the same line**, with equation $y = x - 1$: in the first $y = t = x - 1$, in the second $y = u - 1 = x - 1$. The starting point changes, the direction space $W$ does not. It works because the difference of the two points, $(1, 0) - (0, -1) = (1, 1)$, lies in $W$.

```graph
title: The line $y = x - 1$ is $(1, 0) + W$ but also $(0, -1) + W$, with $W = \Span((1, 1))$ dashed
x: -3 4
y: -3 4
line: 0 0 1 1 | grey | dashed | $W$ | nw
line: 1 0 3 2 | accent | $y = x - 1$ | se
point: 1 0 | blue | $(1, 0)$ | se
point: 0 -1 | blue | $(0, -1)$ | e
vector: 1 0 2 1 | amber | $(1, 1)$ | n
```

> [!BEYOND] when an affine subspace is a vector subspace
> $x + W$ passes through the origin if and only if $x \in W$, and in that case $x + W = W$: it is a vector subspace. For example $(2, 2) + \Span\big((1, 1)\big)$ is the line $y = x$, which passes through the origin. For systems: $S$ is a vector subspace exactly when $0 \in S$, that is when the system is homogeneous.

## The system read by columns, and the rank (p. 58)

Take again the riddle of lesson L11, $x + y = 5$, $x - y = 1$, and write it highlighting the columns of $A$:

$$x \begin{pmatrix} 1 \\ 1 \end{pmatrix} + y \begin{pmatrix} 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \end{pmatrix}.$$

Solving the system means looking for **the coefficients** with which the columns of $A$ combine to give $b$. With $x = 3$ and $y = 2$: $3(1, 1) + 2(1, -1) = (5, 1)$.

In general, denoting by $A^1, \dots, A^n$ the columns of $A$ (with the index at the top, as in lesson L08), system (12.1) can be rewritten

$$x_1A^1 + \cdots + x_nA^n = b.$$

So there are solutions **if and only if** $b$ is a linear combination of the columns $A^1, \dots, A^n$, with coefficients $x_1, \dots, x_n$. In other words: system (12.1) has solutions if and only if

$$b \in \Span\left(A^1, \dots, A^n\right).$$

> [!EXAMPLE] When $b$ leaves the Span of the columns
> The system $x + 2y = 1$, $2x + 4y = 3$ is written $x(1, 2) + y(2, 4) = (1, 3)$. The two columns are multiples of each other, $(2, 4) = 2 \cdot (1, 2)$, so $\Span(A^1, A^2) = \Span\big((1, 2)\big)$: the line $y = 2x$. The vector $b = (1, 3)$ is not on this line ($3 \neq 2 \cdot 1$): **no** combination of the columns gives $b$, and the system has no solutions. With Gauss: $R_2 \to R_2 - 2R_1$ gives $(0, 0 \mid 1)$, that is $0 = 1$.

```graph
title: The columns $A^1 = (1, 2)$ and $A^2 = (2, 4)$ span only the dashed line; $b = (1, 3)$ is outside it
x: -1 5
y: -1 5
line: 0 0 1 2 | grey | dashed
vector: 2 4 | blue | $A^2$ | e
vector: 1 2 | accent | thick | $A^1$ | e
vector: 1 3 | amber | $b$ | nw
```

### The rank is counted with the pivots

In lesson L08 the **rank** $\rk(A)$ was defined as the dimension of the space spanned by the columns (Definition 8.3), which is the maximum number of linearly independent columns of $A$ (Proposition 8.4). Now a practical way to compute it is needed. The handouts derive it in three steps.

1. **The Gauss moves do not change the space spanned by the rows.** Every new row is a combination of the old rows, so the space of the new rows lies inside that of the old ones. Since every move can be undone (lesson L11), the converse also holds: the two spaces coincide. So the moves do not change the **row rank**, which by Proposition 8.6 is equal to the (column) rank.
2. **In the reduced form you see everything.** With Gauss–Jordan the columns that contain the pivots become the first vectors $e_1, e_2, \dots$ of the standard basis, and all the other columns are linear combinations of these.
3. **So** the space of the columns of the reduced form is spanned by the vectors $e_1, \dots, e_r$, where $r$ is the number of pivots, and it has dimension $r$.

> [!PROP] Rank and pivots (p. 58)
> The rank of $A$ is the number of pivots in any row echelon reduction of it.

> [!EXAMPLE] The rank read off the reduced form
> In the reduced matrix $R = \begin{pmatrix} 1 & 2 & 0 & 3 \\ 0 & 0 & 1 & 4 \\ 0 & 0 & 0 & 0 \end{pmatrix}$ the pivots are in columns 1 and 3, which are $e_1 = (1, 0, 0)$ and $e_2 = (0, 1, 0)$. The other columns are combinations of these: $R^2 = (2, 0, 0) = 2e_1$ and $R^4 = (3, 4, 0) = 3e_1 + 4e_2$. The space of the columns is $\Span(e_1, e_2)$, of dimension $2$: $\rk(R) = 2$, the number of pivots.

> [!NOTE] Watch the letters
> In this passage the handouts write that the columns with the pivots become "the first $k$ vectors $e_1, \dots, e_k$ of the standard basis of $\K^m$": here $k$ is the **number of pivots** and $m$ the **number of rows** of $A$ (the space in which the columns live). In system (12.1), instead, $k$ was the number of equations. It is only a change of letters, but it is worth knowing when you reread page 58.

```widget gauss
title: Compute the rank with the pivots
matrice: 1 2 0 1; 2 4 1 3; 3 6 1 4
modo: rango
modi: rango scala ridotta
```

Press "Compute": the matrix has 3 rows and 4 columns, but after Gauss only 2 non-zero rows remain, so the rank is 2. Then try changing the last number from $4$ to $5$: the third row is no longer the sum of the first two and the rank goes up to 3.

## The Rouché–Capelli theorem (pp. 58–59)

Now the criterion that tells you in advance whether a system has solutions, and how many. It is the most important theorem of the lesson.

> [!THEOREM] 12.6 · Rouché–Capelli
> System (12.1) has solutions if and only if
> $$\rk(A \mid b) = \rk(A).$$
> If so, the space of solutions $S \subset \K^n$ is an affine subspace of dimension $n - \rk(A)$.

Piece by piece:

- $\rk(A)$ is the rank of the coefficient matrix; $\rk(A \mid b)$ is the rank of the augmented matrix, which has one more column.
- Adding a column cannot lower the rank, and it raises it by at most $1$ (the space of the columns gains at most one vector). So there is always $\rk(A) \le \rk(A \mid b) \le \rk(A) + 1$: either the two ranks are **equal**, or the augmented one is larger **by one**.
- $n$ is the number of **unknowns** (the columns of $A$). The dimension $n - \rk(A)$ is the number of **free parameters** of lesson L11.
- In the language of lesson L11: $\rk(A \mid b) = \rk(A) + 1$ means exactly that in the row echelon form there is a **pivot in the last column**.

**Proof**, step by step.

1. The system has solutions if and only if $b \in \Span(A^1, \dots, A^n)$ (previous section).
2. This happens if and only if adding $b$ to the columns does not enlarge the space spanned:
   $$\Span\left(A^1, \dots, A^n, b\right) = \Span\left(A^1, \dots, A^n\right).$$
   If $b$ is a combination of the columns, every combination of $A^1, \dots, A^n, b$ is already a combination of the $A^j$ alone; if instead $b$ is not, the Span with $b$ is strictly larger.
3. Two subspaces one inside the other coincide if and only if they have the same dimension; the dimensions here are the two ranks. So there is a solution if and only if $\rk(A \mid b) = \rk(A)$.
4. If there are solutions, $S = x + S_0$ (Proposition 12.3), so $\dim S = \dim S_0$ (Definition 12.5).
5. It remains to count $\dim S_0$. With Gauss–Jordan (lesson L11) the solutions of the homogeneous system are written $t_1v_1 + \cdots + t_hv_h$, with one vector for each column without a pivot: $h = n - (\text{number of pivots}) = n - \rk(A)$. These vectors **span** $S_0$ and are **independent**: $v_i$ has a $1$ in the place of the $i$-th free unknown and $0$ in the places of the other free unknowns, so if $t_1v_1 + \cdots + t_hv_h = 0$, looking at the place of the $i$-th free unknown you find $t_i = 0$.
6. So $\dim S = \dim S_0 = n - \rk(A)$. $\square$

> [!EXAMPLE] Three systems, three verdicts
> 1. $\left(\begin{array}{cc|c} 1 & 1 & 5 \\ 1 & -1 & 1 \end{array}\right)$: $\rk(A) = \rk(A \mid b) = 2 = n$. Solutions, and $\dim S = 2 - 2 = 0$: a point, $(3, 2)$.
> 2. $\left(\begin{array}{cc|c} 1 & 2 & 1 \\ 2 & 4 & 3 \end{array}\right)$: after $R_2 \to R_2 - 2R_1$ it becomes $\left(\begin{array}{cc|c} 1 & 2 & 1 \\ 0 & 0 & 1 \end{array}\right)$. $\rk(A) = 1$ (one pivot in the first two columns), $\rk(A \mid b) = 2$: no solution.
> 3. Example 12.4: $\left(\begin{array}{ccc|c} 1 & -1 & 1 & 1 \\ 0 & 1 & -1 & 2 \end{array}\right)$ is already in row echelon form, $\rk(A) = \rk(A \mid b) = 2$, $n = 3$: solutions, and $\dim S = 3 - 2 = 1$, a line.

### Zero, one or infinitely many

In the following corollary the field $\K$ is **infinite**, like $\Q$, $\R$ and $\C$.

> [!COROLLARY] 12.7
> System (12.1) has $0$, $1$ or $\infty$ solutions. More precisely, the solutions are
> - $0$ if $\rk(A \mid b) > \rk A$,
> - $1$ if $\rk(A \mid b) = \rk A = n$,
> - $\infty$ if $\rk(A \mid b) = \rk A < n$.

Why: if the ranks are different there are no solutions (Rouché–Capelli). If they are equal, $S$ is an affine subspace of dimension $n - \rk A$. Dimension $0$ means a single point; dimension at least $1$ means at least one free parameter, which can take **infinitely many** values in $\K$, and different values give different solutions.

| $\rk(A)$ | $\rk(A \mid b)$ | Solutions | Parameters |
|---|---|---|---|
| $r$ | $r + 1$ | none | — |
| $n$ | $n$ | exactly one | $0$ |
| $r < n$ | $r$ | infinitely many | $n - r$ |

> [!BEYOND] why an infinite field is needed
> In the Discrete Mathematics part you also work with finite fields, such as $\Z_2 = \{0, 1\}$. There a free parameter can take only 2 values, and a system with $h$ parameters has exactly $2^h$ solutions: for example $x + y = 1$ over $\Z_2$ has the two solutions $(1, 0)$ and $(0, 1)$. Over $\R$ and $\C$, the fields of the exam, this does not happen: the answer "a finite number, greater than 1" in the quizzes is always wrong.

### Square systems

> [!COROLLARY] 12.8
> If $A$ is a square matrix (so the number of equations is equal to the number of variables), the system $Ax = b$ has exactly one solution if $\rk A = n \Leftrightarrow \det A \neq 0$. In this case $A$ is invertible and the solution is $x = A^{-1}b$.

Piece by piece:

- $Ax = b$ is the system written with the row-by-column product (lesson L08): row $i$ of $A$ times the column vector $x$ gives the left-hand side of equation $i$.
- $\rk A = n \Leftrightarrow \det A \neq 0$: the determinant is zero exactly when a column is a combination of the others (Proposition 10.3, lesson L10), that is when the $n$ columns are not independent.
- If $\rk A = n$, also $\rk(A \mid b) = n$: the augmented matrix has only $n$ rows and the rank cannot exceed the number of rows. By Corollary 12.7 there is exactly one solution.
- The formula: $A$ is invertible (Proposition 10.8), and multiplying $Ax = b$ on the left by $A^{-1}$ you get $x = A^{-1}Ax = A^{-1}b$.

> [!EXAMPLE] A 2 × 2 system solved with the inverse
> $\begin{cases} x + 2y = 5 \\ 3x + 4y = 6 \end{cases}$, that is $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$, $b = \begin{pmatrix} 5 \\ 6 \end{pmatrix}$.
> 1. $\det A = 1 \cdot 4 - 2 \cdot 3 = -2 \neq 0$: exactly one solution.
> 2. For $2 \times 2$ matrices: $\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac 1{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$, so $A^{-1} = -\frac 12 \begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix} = \begin{pmatrix} -2 & 1 \\ \frac 32 & -\frac 12 \end{pmatrix}$.
> 3. $x = A^{-1}b = \begin{pmatrix} -2 \cdot 5 + 1 \cdot 6 \\ \frac 32 \cdot 5 - \frac 12 \cdot 6 \end{pmatrix} = \begin{pmatrix} -4 \\ \frac 92 \end{pmatrix}$.
> 4. Check: $-4 + 2 \cdot \frac 92 = -4 + 9 = 5$ and $3 \cdot (-4) + 4 \cdot \frac 92 = -12 + 18 = 6$.

> [!PITFALL] $\det A = 0$ does not mean "no solution"
> Corollary 12.8 talks only about the case $\det A \neq 0$. If $\det A = 0$ the solutions are **zero or infinitely many**, and it depends on $b$: you have to compare $\rk(A)$ and $\rk(A \mid b)$. With $A = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$ ($\det A = 0$): with $b = (1, 1)$ the two equations are equal and there are infinitely many solutions; with $b = (1, 2)$ the equations $x + y = 1$ and $x + y = 2$ contradict each other and there are none.

> [!BEYOND] the homogeneous case, to keep in mind for eigenvectors
> For a homogeneous system $Ax = 0$ the two ranks are always equal (the column of zeros adds nothing): there are always solutions and they form a vector subspace of dimension $n - \rk(A)$ (Martelli, Corollary 3.2.16). If $A$ is square, there are **non-zero** solutions if and only if $\det A = 0$. This sentence will come back in lessons L17–L18: eigenvectors are exactly the non-zero solutions of $(A - \lambda I)x = 0$.

> [!NOTE] Link with computer science: linear programming and the simplex method (p. 59)
> The handouts hint at a problem that is studied in a later optimisation course: finding the maximum of ${}^tc\,x$ among the vectors with $Ax = b$ and $x \ge 0$ (**linear programming**). The **simplex method** uses all the concepts seen so far. If $A$ has $m$ rows and rank $m$, a simplex *basis* is a choice of $m$ linearly independent columns of $A$: they form an invertible square matrix $A_B$. You set to zero the variables of the other columns and get the "basic" variables by solving $A_Bx_B = b$, that is $x_B = A_B^{-1}b$.
>
> A small example: $A = \begin{pmatrix} 1 & 1 & 1 & 0 \\ 1 & -1 & 0 & 1 \end{pmatrix}$, $b = \begin{pmatrix} 4 \\ 2 \end{pmatrix}$. Choosing columns 1 and 2, $A_B = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$ has determinant $-2 \neq 0$ and $x_B = A_B^{-1}b = (3, 1)$: the vector $x = (3, 1, 0, 0)$ solves $Ax = b$. Choosing columns 3 and 4, $A_B$ is the identity and $x = (0, 0, 4, 2)$. Independence, rank, invertible matrices and linear systems all work together in one of the fundamental algorithms of optimisation.

## Systems with a parameter (p. 60)

At the exam the systems often contain a letter, usually $k$, and the question is: **as $k$ varies**, how many solutions are there? You use Rouché–Capelli, with one extra precaution.

> [!EXAMPLE] 12.9 · A system that depends on $k$
> Consider the system, depending on a parameter $k \in \R$,
> $$\begin{cases} x + ky = 4 - k \\ kx + 4y = 4 \end{cases}$$
> (a) We want to know, as $k \in \R$ varies, whether there are solutions and, if so, what dimension they have. (b) We want to solve the system for $k = 1$.
>
> **(a)** We apply Gauss's algorithm to $(A \mid b)$, with the move $R_2 \to R_2 - kR_1$:
> $$\left(\begin{array}{cc|c} 1 & k & 4 - k \\ k & 4 & 4 \end{array}\right) \longrightarrow \left(\begin{array}{cc|c} 1 & k & 4 - k \\ 0 & 4 - k^2 & 4 - 4k + k^2 \end{array}\right)$$
> The calculation of the second row: $(k,\ 4,\ 4) - k\,(1,\ k,\ 4 - k) = (0,\ 4 - k^2,\ 4 - 4k + k^2)$. To compute the ranks you can stop here: Gauss–Jordan is only needed to write the solutions.
>
> Notice that $4 - 4k + k^2 = (k - 2)^2$ and $4 - k^2 = (2 - k)(2 + k)$. The matrix is in row echelon form for every $k \in \R$ and there are always two pivots, except for $k = 2$, where there is only one. So the rank of $(A \mid b)$ is $1$ for $k = 2$ and $2$ for $k \neq 2$. The coefficient matrix has become
> $$\begin{pmatrix} 1 & k \\ 0 & 4 - k^2 \end{pmatrix}$$
> and it has rank $1$ for $k = \pm 2$ and rank $2$ for $k \neq \pm 2$. So:
> - if $k = -2$, then $\rk(A \mid b) \neq \rk(A)$ and there are no solutions;
> - if $k = 2$, then $\rk(A \mid b) = \rk(A) = 1$, so the solutions form an affine subspace of $\R^2$ of dimension $2 - 1 = 1$, that is an affine line: infinitely many solutions;
> - if $k \neq \pm 2$, then $\rk(A \mid b) = \rk(A) = 2$, so the solutions form an affine subspace of $\R^2$ of dimension $2 - 2 = 0$, that is a point: exactly one solution.
>
> **(b)** For $k = 1$ the reduced matrix becomes $\left(\begin{array}{cc|c} 1 & 1 & 3 \\ 0 & 3 & 1 \end{array}\right)$. From the second row $3y = 1$, so $y = \frac 13$; from the first $x = 3 - y = 3 - \frac 13 = \frac 83$.

To complete the picture, the two special cases written out in full:

- $k = -2$: the second row becomes $(0,\ 4 - 4,\ 4 + 8 + 4) = (0, 0 \mid 16)$, that is $0 = 16$. No solution.
- $k = 2$: the second row becomes $(0, 0 \mid 0)$ and only the equation $x + 2y = 2$ remains: with $y = t$, the solutions are $(2 - 2t,\ t)$, that is the line $(2, 0) + \Span\big((-2, 1)\big)$.

Check of (b) in the starting system with $k = 1$: $\frac 83 + \frac 13 = 3 = 4 - 1$ and $\frac 83 + \frac 43 = 4$.

> [!BEYOND] the solution for every $k \neq \pm 2$, and a check with the determinant
> The matrix $A$ is square and $\det A = 1 \cdot 4 - k \cdot k = 4 - k^2$: by Corollary 12.8 there is exactly one solution precisely when $k \neq \pm 2$, as found above. Finishing the calculations, for $k \neq \pm 2$:
> $$y = \frac{(k - 2)^2}{(2 - k)(2 + k)} = \frac{2 - k}{2 + k}, \qquad x = 4 - k - ky = \frac 8{2 + k}.$$
> With $k = 1$ you find again $x = \frac 83$ and $y = \frac 13$.

> [!METHOD] Discussing a system with a parameter $k$
> 1. **If $A$ is square**, start from the determinant: for the $k$ with $\det A \neq 0$ there is exactly one solution (Corollary 12.8). Only the values that make $\det A$ zero remain to be studied.
> 2. **Otherwise** (or as a check) do Gauss on $(A \mid b)$ keeping $k$ as a letter. Choose the pivots among the numbers **without** $k$ when you can: you avoid dangerous divisions.
> 3. Look at the pivots that contain $k$: find the values of $k$ that make them zero. They are the **special cases**.
> 4. For each special case **substitute the number** into the matrix and redo the calculation: compare $\rk(A)$ and $\rk(A \mid b)$.
> 5. Write the conclusion for **all** $k$: no solution for…, infinitely many with … parameters for…, exactly one for all the other values.

> [!PITFALL] Dividing by an expression that can be zero
> Writing $y = \frac{(k - 2)^2}{4 - k^2}$ without comment is the typical mistake: for $k = \pm 2$ that division cannot be done, and those are exactly the interesting cases. Every time you divide by an expression in $k$, first set aside the values that make it zero.

```widget gauss
title: The system of the exam of 05/02/2026 with $k = 1$ (also try $k = -1$ and $k = 2$)
matrice: 1 2 1 1; -1 1 -1 2; 1 1 1 0
modo: sistema
```

In the tool there is the augmented matrix of the system $x + 2y + kz = 1$, $-x + y - kz = 2$, $kx + ky + z = k - 1$ (problem 11 of the exam of 05/02/2026, worked out in the exercises) with $k = 1$: infinitely many solutions. Substitute $k = -1$, that is `1 2 -1 1; -1 1 1 2; -1 -1 1 -2`: the row $0 = 1$ appears. With $k = 2$, that is `1 2 2 1; -1 1 -2 2; 2 2 1 1`, there is exactly one solution.

> [!BEYOND] where to find it in the book
> The whole lesson follows Martelli's book, **§3.2 "Teorema di Rouché–Capelli"** (pp. 85–93 of the book): associated homogeneous system and Proposition 3.2.1 (pp. 85–86), affine subspaces and direction space (pp. 87–88, with Examples 3.2.2 and 3.2.5), rank and pivots (Proposition 3.2.9 and Corollary 3.2.10, p. 89), Rouché–Capelli with Corollary 3.2.14 and the example with the parameter (pp. 90–91), homogeneous systems (Corollary 3.2.16, p. 91).

## Towards the exam

The AG written test has 10 quiz questions with 5 answers each (you need at least 6 points for the 2 problems worth 11 points to be marked), it lasts 2 hours, with no calculator and only 4 handwritten pages of notes; the 2026/27 exam sessions are on 22/01 and 05/02/2027 at 14:00. All the details are in lesson L01.

**What you need from this lesson for the exam**

1. **The 11-point problem on the system with a parameter.** It came up in the exams of 07/02/2025, 05/02/2026 and 03/07/2026 (always problem 11), with almost fixed questions: (1) for which $k$ the coefficient matrix is invertible, or what its determinant is; (2) as $k$ varies, how many solutions the system has; (3) the solutions for one or two given values of $k$. Two of these problems are worked out in full in the exercises.
2. **The same theme in the problems on a linear map.** In the exams of 08/02/2024 and 10/07/2025 (problem 12) you were asked to find **all** the vectors with $T(v) = w$ and the values of $k$ for which a vector $w$ depending on $k$ lies in the image of $T$, or for which $T(v) = w$ has infinitely many solutions: they are systems, and they are solved with Rouché–Capelli (lesson L14).
3. **The quizzes.** Besides the question "how many solutions?" (lesson L11), the exam of 07/09/2026 (question 3) asked for which $k$ a $3 \times 3$ system has no solutions; the exam of 10/07/2024 (question 6) required recognising all the solutions of the system of Exercise 12.11 of the handouts.

> [!METHOD] The problem "discuss as $k$ varies", how to write it on the sheet
> 1. **Determinant** (if $A$ is square): compute it and **factor** it, for example $\det A = -3(k - 1)(k + 1)$. First conclusion: for $k$ different from the roots, $A$ is invertible and there is **exactly one** solution (Corollary 12.8).
> 2. **Special cases**: for each root substitute the value of $k$, write the numerical augmented matrix and reduce it to row echelon form. Write the two ranks explicitly and quote the theorem: "$\rk(A) = 2 < 3 = \rk(A \mid b)$, so by Rouché–Capelli there are no solutions" or "$\rk(A) = \rk(A \mid b) = 2 < 3 = n$: infinitely many solutions, depending on $3 - 2 = 1$ parameter".
> 3. **Required solutions**: Gauss–Jordan on the numerical matrix, parameters for the columns without a pivot, and a **check** by substituting into the starting system.
> 4. **Final summary** in one line for each case: the markers look for the conclusion, make it easy to find.

> [!PITFALL] The most frequent mistakes
> - Concluding "no solution" just because $\det A = 0$: with $\det A = 0$ there can also be infinitely many solutions (in the exam of 05/02/2026: for $k = 1$ infinitely many, for $k = -1$ none, and the determinant is zero in both cases).
> - Forgetting a special case, for example because you divided by $k - 1$ without saying so.
> - Confusing $n$ (the number of unknowns) with the number of equations in computing $n - \rk(A)$.
> - Saying that the solutions of $Ax = b$ with $b \neq 0$ form a vector subspace: they are an **affine** subspace.

> [!EXAM] The 4-page sheet
> From this lesson: $S = x_0 + S_0$; the statement of Rouché–Capelli with the "$0$ / $1$ / $\infty$" table of Corollary 12.7; "square $A$: $\det A \neq 0 \Leftrightarrow$ exactly one solution, $x = A^{-1}b$; $\det A = 0 \Rightarrow$ zero or infinitely many"; the formula of the $2 \times 2$ inverse; the five steps of the method for the parameter.

## Quiz

```quiz
Q: Let $Ax = b$ be any linear system and $Ax = 0$ its associated homogeneous system. Which statement is always true?
+ The homogeneous system has at least the solution $x = 0$.
- The homogeneous system has exactly one solution.
- The homogeneous system has the same solutions as $Ax = b$.
- If $Ax = b$ has no solutions, neither does the homogeneous system.
- The solutions of $Ax = b$ always form a vector subspace.
= $A \cdot 0 = 0$, so zero always solves the homogeneous system (Proposition 12.2). It can also have other solutions (not "exactly one"), it has solutions different from those of $Ax = b$ if $b \neq 0$, and it is never impossible. The solutions of $Ax = b$ with $b \neq 0$ do not contain zero: they are not a vector subspace.

Q: In a system in 3 unknowns we have $\rk(A) = 2$ and $\rk(A \mid b) = 3$. The system has:
+ Zero solutions.
- One solution.
- Infinitely many solutions, depending on 1 parameter.
- Infinitely many solutions, depending on 2 parameters.
- A finite number of solutions, greater than 1.
= Similar to the exam of 10/06/2024, question 7. The two ranks are different: by Rouché–Capelli there are no solutions. In the row echelon form there is a pivot in the last column.

Q: A system of 3 equations in 4 unknowns has $\rk(A) = \rk(A \mid b) = 2$. Its solutions form:
+ An affine subspace of dimension 2.
- An affine subspace of dimension 1.
- An affine subspace of dimension 3.
- A single point.
- The empty set.
= Similar to the exam of 16/01/2025, question 10. The ranks are equal, so there are solutions; the dimension is $n - \rk(A) = 4 - 2 = 2$. The number of equations (3) does not enter the calculation.

Q: For which $k \in \R$ does the linear system with augmented matrix $\left(\begin{array}{ccc|c} 1 & 2 & k & 1 \\ 2 & 3 & -1 & 3 \\ 3 & 2 & 1 & 0 \end{array}\right)$ have no real solutions?
- The system always has real solutions.
- $k = \pm 2$
+ $k = -1$
- $k = 0$
- $k \in \{1, 2, 3\}$
= Exam of 07/09/2026, question 3. $\det A = 1 \cdot (3 + 2) - 2 \cdot (2 + 3) + k \cdot (4 - 9) = -5 - 5k = -5(k + 1)$. For $k \neq -1$ there is exactly one solution. For $k = -1$: $R_2 - 2R_1 = (0, -1, 1 \mid 1)$, $R_3 - 3R_1 = (0, -4, 4 \mid -3)$, $R_3 - 4R_2 = (0, 0, 0 \mid -7)$: $\rk(A) = 2 < 3 = \rk(A \mid b)$, no solution.

Q: The vector $(1, 2, 3)$ is a solution of $Ax = b$ and the solutions of the associated homogeneous system are $S_0 = \Span\big((1, 0, -1)\big)$. Which of these vectors is another solution of $Ax = b$?
+ $(3, 2, 1)$
- $(1, 0, -1)$
- $(2, 4, 6)$
- $(0, 0, 0)$
- $(2, 2, 4)$
= By Proposition 12.3 the solutions are $(1, 2, 3) + t(1, 0, -1) = (1 + t,\ 2,\ 3 - t)$. With $t = 2$ you get $(3, 2, 1)$. The other vectors do not have this form: the second coordinate must be $2$ and the sum of the first and third must be $4$.

Q: Let $A \in M(3, \R)$ with $\det A = 5$. Then the system $Ax = b$:
+ Has exactly one solution for every $b \in \R^3$.
- Has infinitely many solutions for every $b$.
- For some $b$ has no solutions.
- Has solutions only if $b = 0$.
- Has exactly 5 solutions.
= Similar to the exam of 07/02/2025, problem 11 (point 1). With $\det A \neq 0$ the matrix is invertible and, by Corollary 12.8, for every $b$ there is exactly one solution, $x = A^{-1}b$. The value of the determinant does not count the solutions.

Q: Let $A \in M(2, \R)$ with $\det A = 0$. Then the system $Ax = b$:
+ Has zero or infinitely many solutions, depending on $b$.
- Never has solutions.
- Always has infinitely many solutions.
- Always has exactly one solution.
- Has exactly two solutions.
= With $\det A = 0$ we have $\rk(A) < 2$: if $\rk(A \mid b) = \rk(A)$ there are infinitely many solutions, otherwise there are none. Example: with $A = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$, $b = (1, 1)$ gives infinitely many solutions and $b = (1, 2)$ none.

Q: For which value of $k \in \R$ does the system $\begin{cases} x + ky = 1 \\ kx + y = 1 \end{cases}$ have infinitely many solutions?
+ $k = 1$
- $k = -1$
- $k = 0$
- For every $k \neq \pm 1$.
- For no value of $k$.
= Similar to Example 12.9 and to the exam of 07/09/2026, question 3. $\det A = 1 - k^2$: for $k \neq \pm 1$ exactly one solution. With $k = 1$ the two equations are both $x + y = 1$: infinitely many solutions. With $k = -1$ they become $x - y = 1$ and $-x + y = 1$; adding them you get $0 = 2$: no solution.

Q: The solutions of a system $Ax = b$ in 5 unknowns, with $b \neq 0$ and $\rk(A) = \rk(A \mid b) = 3$, form:
+ An affine subspace of dimension 2 that does not pass through the origin.
- A vector subspace of dimension 2.
- An affine subspace of dimension 3.
- A vector subspace of dimension 3.
- A point.
= Rouché–Capelli: $\dim S = 5 - 3 = 2$. Since $b \neq 0$, zero is not a solution ($A \cdot 0 = 0 \neq b$), so $S$ is an affine subspace but not a vector subspace.

Q: What is the dimension of the space of solutions of the system $\begin{cases} x + y + z + w = 1 \\ x - y + z - w = 3 \end{cases}$ in $\R^4$?
N: 2
= The rows $(1, 1, 1, 1)$ and $(1, -1, 1, -1)$ are not proportional: $\rk(A) = 2$, and also $\rk(A \mid b) = 2$ (there are only two rows). So $\dim S = 4 - 2 = 2$.
```

## Exercises

::: exercise basic Exercise 12.10 of the handouts: how many solutions?
How many solutions does the linear system with augmented matrix
$$\left(\begin{array}{ccc|c} 1 & 3 & 5 & 2 \\ 7 & 9 & 11 & 2 \\ 13 & 15 & 17 & 0 \end{array}\right)?$$
have?
::: solution
**Gauss.** $R_2 \to R_2 - 7R_1$ and $R_3 \to R_3 - 13R_1$:
$$(7, 9, 11, 2) - 7(1, 3, 5, 2) = (0, -12, -24, -12), \qquad (13, 15, 17, 0) - 13(1, 3, 5, 2) = (0, -24, -48, -26).$$
Then $R_3 \to R_3 - 2R_2$: $(0, -24, -48, -26) - 2(0, -12, -24, -12) = (0, 0, 0, -2)$.
$$\left(\begin{array}{ccc|c} 1 & 3 & 5 & 2 \\ 0 & -12 & -24 & -12 \\ 0 & 0 & 0 & -2 \end{array}\right)$$
**Ranks.** In the part $A$ there are 2 pivots: $\rk(A) = 2$. The augmented matrix also has a pivot in the last column: $\rk(A \mid b) = 3$. By Rouché–Capelli the system **has no solutions**: the last row says $0 = -2$.

Note: the third row of $A$ is $2 \cdot (7, 9, 11) - (1, 3, 5) = (13, 15, 17)$, but for the constant terms $2 \cdot 2 - 2 = 2 \neq 0$. It is this inconsistency that makes the system impossible.
:::

::: exercise intermediate Exercise 12.11 of the handouts: all the solutions
Find all the solutions of the linear system
$$\begin{cases} 2x - y - z = 3 \\ x - y + z = 2 \\ 3x - y - 3z = 4 \end{cases}$$
::: solution
**Gauss.** I swap $R_1 \leftrightarrow R_2$ to have a pivot equal to $1$, then I take away multiples of the first row:
$$\left(\begin{array}{ccc|c} 1 & -1 & 1 & 2 \\ 2 & -1 & -1 & 3 \\ 3 & -1 & -3 & 4 \end{array}\right) \xrightarrow[R_3 \to R_3 - 3R_1]{R_2 \to R_2 - 2R_1} \left(\begin{array}{ccc|c} 1 & -1 & 1 & 2 \\ 0 & 1 & -3 & -1 \\ 0 & 2 & -6 & -2 \end{array}\right)$$
$$\xrightarrow{R_3 \to R_3 - 2R_2} \left(\begin{array}{ccc|c} 1 & -1 & 1 & 2 \\ 0 & 1 & -3 & -1 \\ 0 & 0 & 0 & 0 \end{array}\right)$$
The calculations: $(2, -1, -1, 3) - 2(1, -1, 1, 2) = (0, 1, -3, -1)$; $(3, -1, -3, 4) - 3(1, -1, 1, 2) = (0, 2, -6, -2)$; the third row is twice the second.

**Rouché–Capelli.** $\rk(A) = \rk(A \mid b) = 2 < 3$: infinitely many solutions, one parameter.

**Solutions.** Gauss–Jordan: $R_1 \to R_1 + R_2$ gives $(1, 0, -2, 1)$. With $z = t$: $y = -1 + 3t$ and $x = 1 + 2t$.
$$(x, y, z) = (1 + 2t,\ -1 + 3t,\ t) = (1, -1, 0) + t\,(2, 3, 1), \qquad t \in \R.$$
**Check** with $t = 1$, that is $(3, 2, 1)$: $6 - 2 - 1 = 3$; $3 - 2 + 1 = 2$; $9 - 2 - 3 = 4$.

The solutions are a line of $\R^3$: the point $(1, -1, 0)$ (particular solution) plus $S_0 = \Span\big((2, 3, 1)\big)$. This same system was question 6 of the exam of 10/07/2024, with the answer $x = 2t + 1$, $y = 3t - 1$, $z = t$.
:::

::: exercise intermediate Particular solution and homogeneous system
For the system $\begin{cases} x + 2y - z = 3 \\ 2x + 4y + z = 3 \end{cases}$ find: (a) all the solutions $S$; (b) the solutions $S_0$ of the associated homogeneous system; (c) a particular solution, and check that $S = x_0 + S_0$.
::: solution
(a) $R_2 \to R_2 - 2R_1$: $(2, 4, 1, 3) - 2(1, 2, -1, 3) = (0, 0, 3, -3)$, so $z = -1$. The column of $y$ has no pivot: $y = t$, and from the first row $x = 3 - 2t + z = 2 - 2t$.
$$S = \{(2 - 2t,\ t,\ -1) \mid t \in \R\} = (2, 0, -1) + \Span\big((-2, 1, 0)\big).$$
(b) The homogeneous system has the same $A$ and zero constant terms: with the same moves, $3z = 0$, so $z = 0$, and $x = -2t$, $y = t$:
$$S_0 = \Span\big((-2, 1, 0)\big).$$
Check: $-2 + 2 - 0 = 0$ and $-4 + 4 + 0 = 0$.

(c) With $t = 0$: $x_0 = (2, 0, -1)$. Check: $2 + 0 + 1 = 3$ and $4 + 0 - 1 = 3$. Then $x_0 + S_0 = \{(2, 0, -1) + t(-2, 1, 0)\} = \{(2 - 2t, t, -1)\} = S$. $(0, 1, -1)$ (with $t = 1$) would also be a valid particular solution.
:::

::: exercise basic Subspace or not?
Decide whether they are vector subspaces of $\R^3$: (a) $U = \{(x, y, z) \mid x + y - z = 0\}$; (b) $V = \{(x, y, z) \mid x + y - z = 1\}$. For the one that is not, say what it is.
::: solution
(a) $U$ is the set of solutions of a **homogeneous** system (a single equation, constant term $0$): by Proposition 12.2 it is a vector subspace. Its dimension is $3 - \rk(1\ 1\ {-1}) = 3 - 1 = 2$: a plane through the origin.

(b) $V$ does not contain zero: $0 + 0 - 0 = 0 \neq 1$. So it is not a vector subspace. It is not closed under the sum either: $(1, 0, 0)$ and $(0, 1, 0)$ lie in $V$, but $(1, 1, 0)$ gives $1 + 1 - 0 = 2 \neq 1$. It is an **affine subspace**: $V = (1, 0, 0) + U$, a plane parallel to $U$ that does not pass through the origin, of dimension 2.
:::

::: exercise basic The rank with the pivots
Compute the rank of $A = \begin{pmatrix} 1 & 2 & 0 & 1 \\ 2 & 4 & 1 & 3 \\ 3 & 6 & 1 & 4 \end{pmatrix}$ and find a maximal set of independent columns.
::: solution
$R_2 \to R_2 - 2R_1$ gives $(0, 0, 1, 1)$; $R_3 \to R_3 - 3R_1$ gives $(0, 0, 1, 1)$; $R_3 \to R_3 - R_2$ gives the zero row:
$$\begin{pmatrix} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}.$$
Two pivots: $\rk(A) = 2$. The pivots are in columns 1 and 3, so columns 1 and 3 **of the starting matrix**, $(1, 2, 3)$ and $(0, 1, 1)$, are independent and span the space of the columns. Indeed $A^2 = 2A^1$ and $A^4 = A^1 + A^3$: $(1, 3, 4) = (1, 2, 3) + (0, 1, 1)$. (The Gauss moves on the rows preserve the relations between the columns, which is why you read them off the row echelon form: you will see it better in lesson L13.)
:::

::: exercise intermediate A square system with the inverse
Solve $\begin{cases} 2x + y = 3 \\ 5x + 3y = 7 \end{cases}$ using Corollary 12.8, then use the same inverse to solve the system with constant terms $(1, 0)$.
::: solution
$A = \begin{pmatrix} 2 & 1 \\ 5 & 3 \end{pmatrix}$, $\det A = 6 - 5 = 1 \neq 0$: exactly one solution for every constant term.
$$A^{-1} = \frac 11 \begin{pmatrix} 3 & -1 \\ -5 & 2 \end{pmatrix}, \qquad A^{-1}\begin{pmatrix} 3 \\ 7 \end{pmatrix} = \begin{pmatrix} 9 - 7 \\ -15 + 14 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \end{pmatrix}.$$
Check: $4 - 1 = 3$ and $10 - 3 = 7$.

With $b = (1, 0)$: $A^{-1}b = (3, -5)$, that is the first column of $A^{-1}$. Check: $6 - 5 = 1$ and $15 - 15 = 0$. The advantage of the inverse: once computed, it solves the system for **any** constant term with a single product.
:::

::: exercise hard A system with a parameter (tutoring Sheet 2, exercise 10)
Solve, as $k \in \R$ varies, the system $\begin{cases} x + 2y + 2z = 1 \\ x + 4y + 3z = k + 1 \\ -x + 2y + kz = 2 \end{cases}$
::: solution
**Gauss with $k$ as a letter.** $R_2 \to R_2 - R_1$ and $R_3 \to R_3 + R_1$ (the pivots chosen do not contain $k$):
$$\left(\begin{array}{ccc|c} 1 & 2 & 2 & 1 \\ 0 & 2 & 1 & k \\ 0 & 4 & k + 2 & 3 \end{array}\right) \xrightarrow{R_3 \to R_3 - 2R_2} \left(\begin{array}{ccc|c} 1 & 2 & 2 & 1 \\ 0 & 2 & 1 & k \\ 0 & 0 & k & 3 - 2k \end{array}\right)$$
The calculations: $(1, 4, 3, k + 1) - (1, 2, 2, 1) = (0, 2, 1, k)$; $(-1, 2, k, 2) + (1, 2, 2, 1) = (0, 4, k + 2, 3)$; $(0, 4, k + 2, 3) - 2(0, 2, 1, k) = (0, 0, k, 3 - 2k)$.

**Special case $k = 0$.** The last row is $(0, 0, 0 \mid 3)$: $\rk(A) = 2 < 3 = \rk(A \mid b)$, **no solution**.

**Case $k \neq 0$.** Three pivots: exactly one solution. From the bottom:
$$z = \frac{3 - 2k}k, \qquad y = \frac{k - z}2 = \frac{k^2 + 2k - 3}{2k} = \frac{(k + 3)(k - 1)}{2k}, \qquad x = 1 - 2y - 2z = \frac{-k^2 + 3k - 3}k.$$
For the calculation of $x$: $1 - \frac{k^2 + 2k - 3}k - \frac{6 - 4k}k = \frac{k - k^2 - 2k + 3 - 6 + 4k}k = \frac{-k^2 + 3k - 3}k$.

**Check** with $k = 1$: $x = -1$, $y = 0$, $z = 1$. In the system: $-1 + 0 + 2 = 1$; $-1 + 0 + 3 = 2 = k + 1$; $1 + 0 + 1 = 2$. Consistent with the determinant too: $\det A = 2k$ (product of the pivots $1 \cdot 2 \cdot k$, since I used only moves of type III), zero only for $k = 0$.
:::

::: exercise exam As at the exam: exam of 05/02/2026, problem 11
Consider the linear system in the unknowns $x, y, z$, with a parameter $k \in \R$:
$$\begin{cases} x + 2y + kz = 1 \\ -x + y - kz = 2 \\ kx + ky + z = k - 1 \end{cases}$$
(1) Compute the determinant of the coefficient matrix $A$. (2) As $k \in \R$ varies, discuss how many solutions the system has. (3) For $k = 1$, find all the solutions. (4) For $k = 2$, find all the solutions.
::: solution
**(1)** With $R_2 \to R_2 + R_1$ (which does not change the determinant, lesson L10) the second row becomes $(0, 3, 0)$:
$$\det \begin{pmatrix} 1 & 2 & k \\ -1 & 1 & -k \\ k & k & 1 \end{pmatrix} = \det \begin{pmatrix} 1 & 2 & k \\ 0 & 3 & 0 \\ k & k & 1 \end{pmatrix} = 3 \cdot \det \begin{pmatrix} 1 & k \\ k & 1 \end{pmatrix} = 3(1 - k^2).$$
I expanded along the second row: the only non-zero entry is the $3$ in position $(2, 2)$, with sign $(-1)^{2 + 2} = +1$. So $\det A = 3(1 - k)(1 + k)$.

**(2)** For $k \neq \pm 1$, $\det A \neq 0$: **exactly one solution** (Corollary 12.8). For the two special cases I reduce the augmented matrix with generic $k$: $R_2 \to R_2 + R_1$ gives $(0, 3, 0 \mid 3)$; $R_3 \to R_3 - kR_1$ gives $(0, -k, 1 - k^2 \mid -1)$; finally $R_3 \to R_3 + \frac k3 R_2$ gives $(0, 0, 1 - k^2 \mid k - 1)$.
$$\left(\begin{array}{ccc|c} 1 & 2 & k & 1 \\ 0 & 3 & 0 & 3 \\ 0 & 0 & 1 - k^2 & k - 1 \end{array}\right)$$
- $k = 1$: the last row is $(0, 0, 0 \mid 0)$. $\rk(A) = \rk(A \mid b) = 2 < 3$: **infinitely many** solutions, with $3 - 2 = 1$ parameter.
- $k = -1$: the last row is $(0, 0, 0 \mid -2)$. $\rk(A) = 2 < 3 = \rk(A \mid b)$: **no** solution.

**(3)** $k = 1$: the non-zero rows say $x + 2y + z = 1$ and $3y = 3$. So $y = 1$ and, with $z = t$, $x = 1 - 2 - t = -1 - t$:
$$(x, y, z) = (-1 - t,\ 1,\ t), \qquad t \in \R.$$
Check with $t = 0$, that is $(-1, 1, 0)$, in the system with $k = 1$: $-1 + 2 + 0 = 1$; $1 + 1 - 0 = 2$; $-1 + 1 + 0 = 0 = k - 1$.

**(4)** $k = 2$: the last row is $(0, 0, -3 \mid 1)$, so $z = -\frac 13$; then $y = 1$ and $x = 1 - 2y - 2z = 1 - 2 + \frac 23 = -\frac 13$:
$$(x, y, z) = \left(-\tfrac 13,\ 1,\ -\tfrac 13\right).$$
Check: $-\frac 13 + 2 - \frac 23 = 1$; $\frac 13 + 1 + \frac 23 = 2$; $-\frac 23 + 2 - \frac 13 = 1 = k - 1$.
:::

::: exercise exam As at the exam: exam of 03/07/2026, problem 11
Consider the linear system
$$\begin{cases} x + ky + z = 1 \\ (k + 1)x + (k + 1)y + 2z = k + 1 \\ x + y + kz = k^2 \end{cases}$$
(1) Determine for which $k \in \R$ the coefficient matrix is invertible. (2) As $k$ varies, discuss the number of solutions. (3) Find the set of solutions in the cases $k = 0$ and $k = 1$.
::: solution
**(1)** I expand along the first row:
$$\det A = 1 \cdot \big((k + 1)k - 2\big) - k \cdot \big((k + 1)k - 2\big) + 1 \cdot \big((k + 1) - (k + 1)\big) = (1 - k)(k^2 + k - 2).$$
Since $k^2 + k - 2 = (k + 2)(k - 1)$, we have $\det A = -(k - 1)^2(k + 2)$. The matrix is **invertible for $k \neq 1$ and $k \neq -2$**.

**(2)** For $k \neq 1, -2$: **exactly one solution**. Special cases:
- $k = 1$: the three equations become $x + y + z = 1$, $2x + 2y + 2z = 2$, $x + y + z = 1$, all the same. $\rk(A) = \rk(A \mid b) = 1$: **infinitely many** solutions, with $3 - 1 = 2$ parameters.
- $k = -2$: the augmented matrix is $\left(\begin{array}{ccc|c} 1 & -2 & 1 & 1 \\ -1 & -1 & 2 & -1 \\ 1 & 1 & -2 & 4 \end{array}\right)$. With $R_2 \to R_2 + R_1$ you get $(0, -3, 3 \mid 0)$, with $R_3 \to R_3 - R_1$ you get $(0, 3, -3 \mid 3)$, and $R_3 \to R_3 + R_2$ gives $(0, 0, 0 \mid 3)$. $\rk(A) = 2 < 3 = \rk(A \mid b)$: **no** solution.

**(3)** $k = 0$: the system is $x + z = 1$, $x + y + 2z = 1$, $x + y = 0$. From the third $y = -x$; in the second $x - x + 2z = 1$, so $z = \frac 12$; from the first $x = \frac 12$ and so $y = -\frac 12$. Unique solution $\left(\frac 12, -\frac 12, \frac 12\right)$; check in the second: $\frac 12 - \frac 12 + 1 = 1$.

$k = 1$: only the equation $x + y + z = 1$ remains. Columns without a pivot: $y = s$, $z = t$:
$$S = \{(1 - s - t,\ s,\ t) \mid s, t \in \R\} = (1, 0, 0) + \Span\big((-1, 1, 0),\ (-1, 0, 1)\big),$$
an affine plane of $\R^3$.
:::

::: exercise exam As at the exam: when there are infinitely many solutions
Find all the values of $k \in \R$ for which the system $\begin{cases} x + y + z = 1 \\ x + 2y + 3z = k \\ x + 3y + 5z = k^2 \end{cases}$ has infinitely many solutions, and write them. For the other values how many solutions are there?
::: solution
Here the parameter is only in the constant terms, and the coefficient matrix is not invertible: $\det A = 0$ for every $k$ (the third column is $2A^2 - A^1$). Gauss is needed.
$$\left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & k \\ 1 & 3 & 5 & k^2 \end{array}\right) \xrightarrow[R_3 \to R_3 - R_1]{R_2 \to R_2 - R_1} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & k - 1 \\ 0 & 2 & 4 & k^2 - 1 \end{array}\right)$$
$$\xrightarrow{R_3 \to R_3 - 2R_2} \left(\begin{array}{ccc|c} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & k - 1 \\ 0 & 0 & 0 & (k - 1)^2 \end{array}\right)$$
The last term: $k^2 - 1 - 2(k - 1) = k^2 - 2k + 1 = (k - 1)^2$.

- $\rk(A) = 2$ for every $k$.
- If $k \neq 1$, $(k - 1)^2 \neq 0$: $\rk(A \mid b) = 3$, **no** solution.
- If $k = 1$: $\rk(A \mid b) = 2$, **infinitely many** solutions with $3 - 2 = 1$ parameter. The rows say $x + y + z = 1$ and $y + 2z = 0$: with $z = t$, $y = -2t$ and $x = 1 + 2t - t = 1 + t$.
$$S = \{(1 + t,\ -2t,\ t) \mid t \in \R\}, \qquad k = 1.$$
Check with $t = 1$, that is $(2, -2, 1)$: $2 - 2 + 1 = 1$; $2 - 4 + 3 = 1 = k$; $2 - 6 + 5 = 1 = k^2$. There is no $k$ with exactly one solution. The scheme is that of problem 12 (point 3) of the exam of 10/07/2025.
:::

## Review questions

::: question What is the homogeneous system associated with a linear system?
It is the system with the same coefficients $a_{ij}$ and all the constant terms equal to zero. If the starting system has augmented matrix $(A \mid b)$, the homogeneous one has matrix $(A \mid 0)$, also written simply $A$.
:::

::: question Why do the solutions $S_0$ of the homogeneous system form a subspace?
Because they satisfy the three axioms: $0$ is a solution; the sum of two solutions is a solution ($0 + 0 = 0$ in every equation); a multiple of a solution is a solution ($\lambda \cdot 0 = 0$).
:::

::: question Why, if $b \neq 0$, is the set $S$ of solutions of $Ax = b$ not a subspace?
Because it does not contain the origin: substituting $x = 0$ into an equation with $b_i \neq 0$ you get $0 = b_i$, false. Moreover the sum of two solutions solves $Ax = 2b$, not $Ax = b$.
:::

::: question How do you get all the solutions starting from a single one?
You add to the particular solution $x$ all the solutions of the homogeneous system: $S = x + S_0$ (Proposition 12.3). Any solution can act as the particular solution.
:::

::: question What is an affine subspace and what is its dimension?
A set $x + W = \{x + v \mid v \in W\}$, with $x$ a fixed point and $W$ a vector subspace: $W$ translated by $x$. Its dimension is $\dim W$. Arbitrary points, lines and planes are affine subspaces of dimension 0, 1 and 2.
:::

::: question How do you write a system as a combination of the columns, and what do you get from it?
$x_1A^1 + \cdots + x_nA^n = b$. The system has solutions if and only if $b$ is a linear combination of the columns of $A$, that is $b \in \Span(A^1, \dots, A^n)$.
:::

::: question How do you compute the rank with Gauss, and why does it work?
You reduce the matrix to row echelon form and count the pivots. It works because the Gauss moves do not change the space spanned by the rows (so not the rank either), and in the reduced form the pivot columns are standard basis vectors that span all the other columns.
:::

::: question What does the Rouché–Capelli theorem say?
The system $Ax = b$ has solutions if and only if $\rk(A \mid b) = \rk(A)$. In this case the solutions form an affine subspace of $\K^n$ of dimension $n - \rk(A)$, where $n$ is the number of unknowns.
:::

::: question Why can a real system not have exactly two solutions?
Because if it has more than one solution, by Rouché–Capelli the solutions form an affine subspace of dimension at least 1: there is a free parameter that can take infinitely many real values. So the solutions are 0, 1 or infinitely many (Corollary 12.7).
:::

::: question What can you say about a square system $Ax = b$ with $\det A \neq 0$? And with $\det A = 0$?
With $\det A \neq 0$: exactly one solution for every $b$, $x = A^{-1}b$ (Corollary 12.8). With $\det A = 0$: zero or infinitely many solutions, depending on $b$; you decide by comparing $\rk(A)$ and $\rk(A \mid b)$.
:::

::: question How do you discuss a system with a parameter $k$?
If $A$ is square you start from $\det A$: for the $k$ that do not make it zero there is exactly one solution. Otherwise you do Gauss keeping $k$ as a letter. The values of $k$ that make the determinant (or a pivot) zero are studied separately, by substituting them and comparing the two ranks.
:::

::: question How do you find a particular solution and a basis of $S_0$ from the general solution?
You write the general solution in vector form $x_0 + t_1v_1 + \cdots + t_hv_h$: with all the parameters equal to zero you have the particular solution $x_0$, and the vectors $v_1, \dots, v_h$ are a basis of $S_0$.
:::

## Glossary

```glossary
Homogeneous system | Linear system with all the constant terms equal to zero.
Associated homogeneous system | The same system with the constant terms set to zero; matrix $(A \mid 0)$, or simply $A$.
$S$ and $S_0$ | The sets of solutions of the starting system and of its associated homogeneous system.
Particular solution | Any fixed solution of the system $Ax = b$.
Affine subspace | Set $x + W = \{x + v \mid v \in W\}$ with $W$ a vector subspace: $W$ translated by $x$.
Direction space (giacitura) | The vector subspace $W$ of an affine subspace $x + W$; for the solutions of a system it is $S_0$.
Dimension of an affine subspace | The dimension of its direction space $W$.
Affine line and plane | Affine subspaces of dimension 1 and 2.
Columns $A^1, \dots, A^n$ | The columns of the matrix $A$; the system is written $x_1A^1 + \cdots + x_nA^n = b$.
Rank $\rk(A)$ | The dimension of the space spanned by the columns; it is computed by counting the pivots of a row echelon form.
Rouché–Capelli theorem | The system has solutions if and only if $\rk(A \mid b) = \rk(A)$; then the solutions form an affine subspace of dimension $n - \rk(A)$.
Corollary 12.7 | Over an infinite field the solutions are $0$, $1$ or infinitely many.
Square system | System with as many equations as unknowns: $A$ is an $n \times n$ matrix.
Corollary 12.8 | If $A$ is square with $\det A \neq 0$, the system $Ax = b$ has exactly one solution, $x = A^{-1}b$.
Parameter of a system | Letter (usually $k$) in the coefficients or in the constant terms; you discuss the system as $k$ varies.
Special case | Value of the parameter that makes the determinant or a pivot zero: it must be studied separately.
```

## Checklist

```checklist
- I can write the associated homogeneous system and prove that its solutions form a subspace.
- I can explain why the solutions of $Ax = b$ with $b \neq 0$ do not form a vector subspace.
- I can use $S = x_0 + S_0$: I find a particular solution and the solutions of the homogeneous system from the general solution.
- I can say what an affine subspace is and what its dimension is, with examples in $\R^2$ and $\R^3$.
- I can rewrite a system as a combination of the columns and say when it has solutions.
- I can compute the rank by counting the pivots and explain why the Gauss moves do not change it.
- I can state the Rouché–Capelli theorem and use it to count solutions and parameters.
- I can explain why the solutions are 0, 1 or infinitely many (Corollary 12.7).
- I can solve a square system with $\det A \neq 0$ using the inverse, and I know that with $\det A = 0$ the solutions are zero or infinitely many.
- I can discuss a system with a parameter, without forgetting the special cases.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 12 "Sistemi Lineari II", pp. 56–61: sections 12.A–12.C are followed in order, with the page next to each heading; definitions, propositions, theorem, corollaries and examples keep their numbering (Definitions 12.1 and 12.5, Propositions 12.2 and 12.3, Theorem 12.6, Corollaries 12.7 and 12.8, Examples 12.4 and 12.9, Exercises 12.10 and 12.11), including the box "Link with computer science" on linear programming.
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §3.2 "Teorema di Rouché–Capelli" (pp. 85–93), in particular Examples 3.2.2 and 3.2.5, the direction space, Proposition 3.2.9 and Corollary 3.2.16 on homogeneous systems.
- **Exam papers** of Linear Algebra 2023/24–2025/26 with official solutions (2025/26 Moodle, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): reported: question 3 of 07/09/2026 and problems 11 of 05/02/2026 and 03/07/2026; cited: problem 11 of 07/02/2025, problems 12 of 08/02/2024 and 10/07/2025 and the questions of 10/06/2024, 10/07/2024 and 16/01/2025. The solutions here are written from scratch. The exercise with a parameter is exercise 10 of tutoring Sheet 2 (MDAG2 Moodle).
- The **"Beyond the handouts"** parts (affine subspaces that pass through the origin, finite fields, homogeneous systems and eigenvectors, the general solution of Example 12.9, the unnumbered exercises) are additions in these notes to connect the lesson to the rest of the course and to the exam.
