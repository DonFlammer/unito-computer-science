---
course: MDAG
module: AG
lesson: L14
title: Linear maps I
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Linear Algebra and Geometry · Channels A, B and C · Lesson L14
description: >-
  Notes on lesson L14 of Linear Algebra and Geometry (MDAG, part 2): linear maps, examples and non-examples, the map
  associated with a matrix, kernel and image, injectivity and surjectivity, rank–nullity theorem, with exam-style
  quizzes and worked exercises.
lede: >-
  The functions that respect sums and multiples: what they are, how to recognise them in a moment, why every matrix
  $A$ defines one ($x \mapsto Ax$). Then the two subspaces that tell you everything about a linear map, the kernel
  and the image, and the rank–nullity theorem, which links their dimensions and is, for matrices, the
  Rouché–Capelli theorem seen from another side.
material: handouts
facts:
  Handouts: lesson 14 · pp. 68–73
  Book: Martelli, §4.1 and §4.2
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 120–150 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 14 "Applicazioni lineari I"; B. Martelli, Geometria e algebra lineare, §4.1 and §4.2
italian_file: L14_applicazioni_lineari_1.html
html_notes: notes/MDAG/L14_linear_maps_1.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L14_applicazioni_lineari_1.md
---

## In brief

- A **linear map** $f: V \to W$ between two vector spaces over the same field respects sums and multiples: $f(v + w) = f(v) + f(w)$ and $f(\lambda v) = \lambda f(v)$.
- Consequences: $f(0) = 0$, and $f$ sends every linear combination to the linear combination of the images, **with the same coefficients**.
- Quick test: if $f(0) \neq 0$ the function is not linear; squares, products of unknowns and added constants are the typical signs of a non-linear function.
- Every matrix $A$ of size $m \times n$ defines the linear map $L_A: \K^n \to \K^m$, $L_A(x) = Ax$. The columns of $A$ are the images of the vectors $e_1, \dots, e_n$ of the standard basis.
- The **kernel** $\Ker f$ (the vectors sent to $0$) is a subspace of the domain; the **image** $\Imm f$ (the vectors reached) is a subspace of the codomain.
- $f$ is **injective** if and only if $\Ker f = \{0\}$; it is **surjective** if and only if $\Imm f = W$.
- For matrices: $\Ker L_A$ is the set of solutions of $Ax = 0$, $\Imm L_A$ is the Span of the columns, and $\rk(A) = \dim \Imm L_A$.
- **Rank–nullity theorem**: $\dim \Ker f + \dim \Imm f = \dim V$. For $L_A$ it is the Rouché–Capelli theorem.
- Consequences for the quizzes: $\dim \Imm f \le \dim V$; if $\dim V > \dim W$, $f$ cannot be injective; if $\dim V < \dim W$, it cannot be surjective.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## What a linear map is (p. 68)

Start from three functions from $\R$ to $\R$ and do two tests: (1) does it matter whether you add before applying the function or after? (2) does it matter whether you multiply by a number before or after?

| Function | $f(2 + 5)$ | $f(2) + f(5)$ | $f(4 \cdot 2)$ | $4 \cdot f(2)$ | Does it respect sums and multiples? |
|---|--:|--:|--:|--:|---|
| $f(x) = 3x$ | $21$ | $6 + 15 = 21$ | $24$ | $24$ | yes |
| $g(x) = 2x + 1$ | $15$ | $5 + 11 = 16$ | $17$ | $20$ | no |
| $h(x) = x^2$ | $49$ | $4 + 25 = 29$ | $64$ | $16$ | no |

Only $f(x) = 3x$ passes both tests, and for any numbers: $f(x + x') = 3x + 3x' = f(x) + f(x')$ and $f(\lambda x) = 3\lambda x = \lambda f(x)$. Its graph is a line **through the origin**. The graph of $g$ is also a line, but it does not pass through the origin, and that is enough to spoil everything.

```graph
title: $f(x) = 3x$ is linear; $g(x) = 2x + 1$ is not: its graph is a line, but it does not pass through the origin
proportions: free
x: -2 2
y: -4 5
line: 0 0 1.2 3.6 | accent | $f(x) = 3x$ | w
line: 0 1 -1.2 -1.4 | blue | $g(x) = 2x + 1$ | se
point: 0 0 | accent
point: 0 1 | blue
```

The functions that respect sums and multiples are called **linear**, and they make sense between any vector spaces: vectors, polynomials, matrices.

> [!DEF] 14.1 · Linear map
> Let $V$ and $W$ be two vector spaces over the same field $\K$. A **linear map** is a function
> $$f: V \longrightarrow W$$
> such that
> 1. $f(v + w) = f(v) + f(w)$ for all $v, w \in V$;
> 2. $f(\lambda v) = \lambda f(v)$ for all $v \in V$ and $\lambda \in \K$.

Piece by piece:

- $f: V \to W$ is read "$f$ goes from $V$ to $W$": to each vector $v$ of the **domain** $V$ it associates a vector $f(v)$ of the **codomain** $W$. $f(v)$ is called the **image** of $v$.
- **Same field**: you need the same scalars $\lambda$ on both sides, otherwise condition (2) would make no sense.
- Condition (1): "adding and then applying $f$" gives the same result as "applying $f$ and then adding". On the left the sum is that of $V$, on the right that of $W$.
- Condition (2): the same with multiples.
- In mathematics **function**, **map** and **mapping** are synonyms; "map" is used above all for linear ones.

### Two consequences of the definition

**Zero goes to zero.** From condition (2) with $\lambda = 0$:

$$f(0) = f(0 \cdot 0) = 0 \cdot f(0) = 0.$$

Watch out for the three different zeros that appear here: the zero vector of $V$ (inside $f$), the scalar $0 \in \K$ (the number that multiplies) and the zero vector of $W$ (the result). In words: a linear map sends the origin of $V$ to the origin of $W$.

**Linear combinations go to linear combinations.** If $v = \lambda_1v_1 + \cdots + \lambda_kv_k$, using condition (1) $k - 1$ times and then (2) on each piece:

$$f(v) = f(\lambda_1v_1 + \cdots + \lambda_kv_k) = f(\lambda_1v_1) + \cdots + f(\lambda_kv_k) = \lambda_1f(v_1) + \cdots + \lambda_kf(v_k).$$

$f$ sends a linear combination of the vectors $v_1, \dots, v_k$ to the linear combination **with the same coefficients** of their images $f(v_1), \dots, f(v_k)$. This is the property you will use the most: if you know $f$ on a few vectors, you know it on all their combinations.

> [!METHOD] Is it linear or not?
> 1. **Zero test**: compute $f(0)$. If it is not the zero vector, $f$ is **not** linear (Example 14.3).
> 2. **Look at the formula**: squares, products of coordinates, absolute values, roots, sines, added constants are signs of non-linearity.
> 3. If you suspect it is **not** linear, **one counterexample with numbers** is enough: two vectors for which $f(v + w) \neq f(v) + f(w)$, or a $v$ and a $\lambda$ for which $f(\lambda v) \neq \lambda f(v)$ (Example 14.4).
> 4. If it looks linear, prove the two conditions **with letters**, for generic vectors (Example 14.2). Shortcut: if every coordinate of $f(v)$ is a combination of the coordinates of $v$ with fixed coefficients, $f$ is of the form $L_A$ and it is linear (Example 14.6).

> [!PITFALL] $f(0) = 0$ is not enough
> The zero test is only for **ruling out**. A function can send $0$ to $0$ and not be linear: in Example 14.4 $T(0) = 0$, and yet $T$ does not respect sums.

## Examples and non-examples (pp. 68–69)

The handouts' examples all have $\K = \R$ and $V = W = \R^2$.

> [!EXAMPLE] 14.2 · A linear function
> $T: \R^2 \to \R^2$ defined by $T\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 2a + b \\ a + 3b \end{pmatrix}$. For $v = \begin{pmatrix} a_1 \\ b_1 \end{pmatrix}$, $w = \begin{pmatrix} a_2 \\ b_2 \end{pmatrix}$ and $\lambda \in \R$:
> $$T(v + w) = T\begin{pmatrix} a_1 + a_2 \\ b_1 + b_2 \end{pmatrix} = \begin{pmatrix} 2(a_1 + a_2) + (b_1 + b_2) \\ (a_1 + a_2) + 3(b_1 + b_2) \end{pmatrix} = \begin{pmatrix} 2a_1 + b_1 \\ a_1 + 3b_1 \end{pmatrix} + \begin{pmatrix} 2a_2 + b_2 \\ a_2 + 3b_2 \end{pmatrix} = T(v) + T(w)$$
> and
> $$T(\lambda v) = T\begin{pmatrix} \lambda a_1 \\ \lambda b_1 \end{pmatrix} = \begin{pmatrix} 2\lambda a_1 + \lambda b_1 \\ \lambda a_1 + 3\lambda b_1 \end{pmatrix} = \lambda\begin{pmatrix} 2a_1 + b_1 \\ a_1 + 3b_1 \end{pmatrix} = \lambda T(v).$$
> So $T$ is linear.

The key step of the first calculation is **redistributing**: $2(a_1 + a_2) + (b_1 + b_2) = (2a_1 + b_1) + (2a_2 + b_2)$, and the same for the second coordinate. In the second you factor out $\lambda$.

> [!EXAMPLE] 14.3 · A translation is not linear
> $T: \R^2 \to \R^2$ defined by $T\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} a + 2 \\ a + b - 1 \end{pmatrix}$. We have $T(0) = \begin{pmatrix} 0 + 2 \\ 0 + 0 - 1 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \end{pmatrix} \neq 0$, so $T$ is not linear.

> [!EXAMPLE] 14.4 · A square spoils the sum
> $T: \R^2 \to \R^2$ defined by $T\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} a^2 \\ a + b \end{pmatrix}$. Let for example $v = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ and $w = \begin{pmatrix} 2 \\ 0 \end{pmatrix}$. We have
> $$T(v + w) = T\begin{pmatrix} 4 \\ 1 \end{pmatrix} = \begin{pmatrix} 16 \\ 5 \end{pmatrix}, \qquad \text{but} \qquad T(v) + T(w) = \begin{pmatrix} 4 \\ 3 \end{pmatrix} + \begin{pmatrix} 4 \\ 2 \end{pmatrix} = \begin{pmatrix} 8 \\ 5 \end{pmatrix}.$$
> So $T$ is not linear. Notice that here $T(0) = (0, 0)$: the zero test was not enough.

The two linear maps of the next example exist for **every** vector space.

> [!EXAMPLE] 14.5 · The zero function and the identity
> Given any two vector spaces $V$, $W$ over $\K$, the **zero function** is the function $f: V \to W$ that is constantly zero, that is such that $f(v) = 0$ for every $v$. The zero function is linear.
>
> Given any vector space $V$, the **identity function** is the function $\id: V \to V$ that sends every vector to itself, that is $\id(v) = v$ for every $v \in V$. The identity function is linear too.

The checks are one line each, and it is worth writing them down:

- zero function: $f(v + w) = 0 = 0 + 0 = f(v) + f(w)$ and $f(\lambda v) = 0 = \lambda \cdot 0 = \lambda f(v)$;
- identity: $\id(v + w) = v + w = \id(v) + \id(w)$ and $\id(\lambda v) = \lambda v = \lambda\,\id(v)$.

More examples, from $\R^2$ to $\R^2$, to train your eye:

| $T(x, y)$ | Linear? | Why |
|---|---|---|
| $(x - y,\ 2y)$ | yes | each coordinate is a combination of $x$ and $y$ |
| $(0,\ 5x)$ | yes | coefficients equal to $0$ are fine too |
| $(x + 1,\ y)$ | no | $T(0, 0) = (1, 0) \neq 0$ |
| $(xy,\ x)$ | no | $T(2, 2) = (4, 2)$ but $2\,T(1, 1) = (2, 2)$ |
| $(\lvert x \rvert,\ y)$ | no | $T(-1, 0) = (1, 0)$ but $-T(1, 0) = (-1, 0)$ |
| $(\sin x,\ y)$ | no | $T(\pi, 0) = (0, 0)$ but $2\,T\big(\frac\pi 2, 0\big) = (2, 0)$ |

## The map associated with a matrix (pp. 69–70)

The most important example of the course: every matrix is a linear map.

> [!EXAMPLE] 14.6 · $L_A$
> We take a matrix $A = (a_{ij})$ of size $m \times n$ and define
> $$L_A: \K^n \longrightarrow \K^m$$
> using the product of matrices and vectors, $L_A(x) = Ax$. In detail:
> $$L_A(x) = Ax = \begin{pmatrix} a_{11} & \cdots & a_{1n} \\ \vdots & \ddots & \vdots \\ a_{m1} & \cdots & a_{mn} \end{pmatrix} \cdot \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} = \begin{pmatrix} a_{11}x_1 + \cdots + a_{1n}x_n \\ \vdots \\ a_{m1}x_1 + \cdots + a_{mn}x_n \end{pmatrix}.$$
> The letter $L$ stands for *left*, because we multiply by $A$ on the left. The linearity of $L_A$ follows from the properties of matrices:
> 1. $L_A(x + x') = A(x + x') = Ax + Ax' = L_A(x) + L_A(x')$;
> 2. $L_A(\lambda x) = A(\lambda x) = \lambda Ax = \lambda L_A(x)$.

Piece by piece:

- **The sizes.** $A$ has $m$ rows and $n$ columns. The vector $x$ must have $n$ components (as many as the **columns**), and $Ax$ has $m$ of them (as many as the **rows**). So $L_A$ goes from $\K^n$ (domain) to $\K^m$ (codomain): watch the order, $n$ before $m$.
- **The two properties used** are those of the matrix product of lesson L08 (Proposition 8.11): distributivity $A(B + C) = AB + AC$ and $\lambda(AB) = A(\lambda B)$, with $B = x$ and $C = x'$ column matrices.
- **Reading $Ax$ by columns.** Collecting the $x_j$, the vector $Ax$ is
  $$Ax = x_1A^1 + x_2A^2 + \cdots + x_nA^n,$$
  the combination of the columns of $A$ with coefficients $x_1, \dots, x_n$: it is the same reading as for the system $Ax = b$ of lesson L12.

> [!EXAMPLE] 14.7 · The matrix of Example 14.2
> If in the previous example we choose $A = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}$, we get the function $L_A: \R^2 \to \R^2$ given by
> $$L_A\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 3 \end{pmatrix}\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 2a + b \\ a + 3b \end{pmatrix},$$
> that is exactly the linear map of Example 14.2.

### The columns are the images of the standard basis

Compute $L_A$ on the vectors of the standard basis $e_1 = (1, 0)$ and $e_2 = (0, 1)$, with the matrix of Example 14.7:

$$L_A(e_1) = \begin{pmatrix} 2 \cdot 1 + 1 \cdot 0 \\ 1 \cdot 1 + 3 \cdot 0 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix} = A^1,$$

$$L_A(e_2) = \begin{pmatrix} 2 \cdot 0 + 1 \cdot 1 \\ 1 \cdot 0 + 3 \cdot 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 3 \end{pmatrix} = A^2.$$

In general $L_A(e_i) = A^i$, the $i$-th column (the handouts use this on p. 72). And so, by linearity, $L_A$ is determined by its columns:

$$L_A\begin{pmatrix} a \\ b \end{pmatrix} = L_A(a\,e_1 + b\,e_2) = a\,L_A(e_1) + b\,L_A(e_2) = a\begin{pmatrix} 2 \\ 1 \end{pmatrix} + b\begin{pmatrix} 1 \\ 3 \end{pmatrix}.$$

```widget matrice
title: The matrix of Examples 14.2 and 14.7 as a transformation of the plane
a: 2 1; 1 3
x: 1 1
raggio: 5
```

In the tool the square grid of the plane is transformed by $L_A$ into a grid of parallelograms: lines stay lines, the origin stays still, parallel and evenly spaced lines stay parallel and evenly spaced. The arrows $Ae_1$ and $Ae_2$ are the two columns, $(2, 1)$ and $(1, 3)$. Drag the vector $x$ and see where $Ax$ ends up; also try changing the matrix to `1 2; 2 4`: the whole plane gets squashed onto a line (you meet it again in the section on the kernel).

> [!BEYOND] every linear map from $\K^n$ to $\K^m$ is an $L_A$
> The converse also holds (Martelli, Proposition 4.1.19): if $T: \K^n \to \K^m$ is linear, there is exactly one matrix $A$ with $T = L_A$, and it is the matrix that has **as columns** $T(e_1), \dots, T(e_n)$. For example, for $T(x, y, z) = (x - z,\ y + 2z)$: $T(e_1) = (1, 0)$, $T(e_2) = (0, 1)$, $T(e_3) = (-1, 2)$, so $A = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 2 \end{pmatrix}$. In practice: **the rows of $A$ are the coefficients of the coordinates of $T$**. It is the "matrix associated with $T$ with respect to the standard basis" that the exam papers often ask for (lesson L15).

> [!NOTE] Link with computer science: neural networks (p. 70)
> One of the fundamental operations of a neural network is the matrix–vector multiplication. A single layer typically uses a transformation of the form $x \mapsto Ax + b$, where the numbers of $A$ and $b$ are parameters that are changed during training. The part $x \mapsto Ax$ is precisely the linear map $L_A$; if $b \neq 0$, the function $x \mapsto Ax + b$ is **not** linear but **affine** (it sends $0$ to $b \neq 0$, as in Example 14.3). The layers of a network alternate transformations of this kind with non-linear operations: that is why matrices, vectors and linear maps are the basic language of many *machine learning* models.

### The trace

> [!EXAMPLE] 14.8 · The trace is linear
> $\tr: M(n, \K) \to \K$ is a linear map. For $A = (a_{ij})$ and $B = (b_{ij})$ we have $A + B = (a_{ij} + b_{ij})$, so on the diagonal of $A + B$ there are the numbers $a_{11} + b_{11}, \dots, a_{nn} + b_{nn}$. We conclude
> $$\tr(A + B) = (a_{11} + b_{11}) + \cdots + (a_{nn} + b_{nn}) = \tr(A) + \tr(B).$$
> Similarly $\tr(\lambda A) = \lambda a_{11} + \cdots + \lambda a_{nn} = \lambda \cdot \tr(A)$.

The trace $\tr A$ is the sum of the entries on the diagonal (Definition 8.12, lesson L08; in this example the handouts write it $\operatorname{Tr}$). Here the domain is the space of matrices $M(n, \K)$ and the codomain is the field $\K$, which is a vector space of dimension 1. With numbers: for $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and $B = \begin{pmatrix} 5 & 0 \\ 1 & -2 \end{pmatrix}$ we have $\tr(A + B) = \tr\begin{pmatrix} 6 & 2 \\ 4 & 2 \end{pmatrix} = 8 = 5 + 3 = \tr A + \tr B$, and $\tr(3A) = 3 + 12 = 15 = 3 \tr A$.

> [!PITFALL] The determinant is not linear
> In the quizzes functions between spaces of matrices or of polynomials often appear. The **determinant** is not linear: with $A = B = I_2$, $\det(A + B) = \det(2I_2) = 4$ but $\det A + \det B = 2$; and in general $\det(\lambda A) = \lambda^n \det A$, not $\lambda \det A$. Linear ones instead are the trace, the **transposition** $A \mapsto {}^tA$ (because ${}^t(A + B) = {}^tA + {}^tB$ and ${}^t(\lambda A) = \lambda\,{}^tA$), the **evaluation** $p \mapsto p(x_0)$ of a polynomial at a fixed point and the **derivative** $p \mapsto p'$ (Martelli, Examples 4.1.10, 4.1.13 and 4.1.15).

## Kernel and image (pp. 70–71)

Take $T: \R^2 \to \R^2$, $T(x, y) = (x + y,\ 2x + 2y)$, and ask two questions.

- **Which vectors end up in zero?** $T(x, y) = (0, 0)$ when $x + y = 0$: they are the vectors $(t, -t)$, the line $\Span\big((1, -1)\big)$.
- **Which vectors are reached?** $T(x, y) = (x + y)\,(1, 2)$: always multiples of $(1, 2)$, and all the multiples are reached (for example $T(s, 0) = s(1, 2)$). It is the line $\Span\big((1, 2)\big)$.

The first line lives in the **domain**, the second in the **codomain** (here both are $\R^2$, which is why they can be drawn together).

```graph
title: For $T(x, y) = (x + y,\ 2x + 2y)$ the kernel (blue) is the line $y = -x$ of the domain, the image (amber) is the line $y = 2x$ of the codomain
x: -3 3
y: -3 3
line: 0 0 -1.5 1.5 | blue | thick | $\Ker T$ | nw
line: 0 0 1.2 2.4 | amber | thick | $\Imm T$ | e
point: 1 -1 | blue
point: 1 2 | amber
```

> [!DEF] 14.9 · Kernel and image
> Let $f: V \to W$ be a linear map. The **kernel** of $f$ is the subset of $V$ defined by
> $$\Ker f = \{v \in V \mid f(v) = 0\}.$$
> The **image** of $f$ is the subset of $W$ defined by
> $$\Imm f = \{w \in W \mid \exists\, v \in V \text{ with } f(v) = w\}.$$

Piece by piece:

- $\Ker$ comes from *kernel*; $\Imm$ is read "image".
- The kernel lies in the **domain** $V$: they are the inputs that $f$ "squashes" onto zero.
- The image lies in the **codomain** $W$: they are the outputs that $f$ actually produces. The symbol $\exists$ is read "there exists" (lesson L01): $w$ lies in the image if **there exists at least one** $v$ that goes to $w$.
- Zero is always in both, because $f(0) = 0$.

> [!PROP] 14.10
> The kernel $\Ker f$ is a vector subspace of $V$, the image $\Imm f$ is a subspace of $W$.

You have to check the three subspace axioms (Definition 6.2) for both.

**Kernel.**
1. $0 \in \Ker f$, because $f(0) = 0$.
2. If $v, w \in \Ker f$ then $v + w \in \Ker f$: indeed $f(v + w) = f(v) + f(w) = 0 + 0 = 0$.
3. If $v \in \Ker f$ and $\lambda \in \K$ then $\lambda v \in \Ker f$: indeed $f(\lambda v) = \lambda f(v) = \lambda \cdot 0 = 0$.

**Image.**
1. $0 \in \Imm f$, because $f(0) = 0$: the zero of $W$ is reached from the zero of $V$.
2. If $f(v)$ and $f(v')$ lie in $\Imm f$, so does their sum: $f(v) + f(v') = f(v + v')$ is reached from $v + v'$.
3. If $f(v) \in \Imm f$ and $\lambda \in \K$, also $\lambda f(v)$: indeed $\lambda f(v) = f(\lambda v)$ is reached from $\lambda v$. $\square$

### Injective, surjective

Two words from the theory of functions (you see them in Discrete Mathematics too):

- $f$ is **injective** if it sends different vectors to different vectors: $v \neq v' \Rightarrow f(v) \neq f(v')$. No output is "reached twice".
- $f$ is **surjective** if every vector of the codomain is reached: for every $w \in W$ there is $v$ with $f(v) = w$.

Examples: $T(x, y) = (x, y, 0)$ from $\R^2$ to $\R^3$ is injective but not surjective (it does not reach $(0, 0, 1)$); $P(x, y, z) = (x, y)$ from $\R^3$ to $\R^2$ is surjective but not injective ($P(0, 0, 1) = P(0, 0, 2)$).

> [!PROP] 14.11
> The function $f: V \to W$ is injective $\Longleftrightarrow \Ker f = \{0\}$. The function $f$ is surjective $\Longleftrightarrow \Imm f = W$.

**Proof.** For surjectivity there is nothing to prove: "every $w \in W$ is reached" means exactly $\Imm f = W$. For injectivity two arrows are needed.

1. ($\Rightarrow$) We already know that $f(0) = 0$. If $f$ is injective, a vector $v \neq 0$ cannot go where $0$ goes, so $f(v) \neq 0$. Then the only vector with zero image is $0$: $\Ker f = \{0\}$.
2. ($\Leftarrow$) Let $v, v' \in V$ be different. Then $v - v' \neq 0$ and, since $\Ker f = \{0\}$, $f(v - v') \neq 0$. By linearity $f(v) - f(v') = f(v - v') \neq 0$, so $f(v) \neq f(v')$. $\square$

The advantage is huge: for injectivity you do not need to compare all the pairs of vectors, it is enough to solve $f(v) = 0$. In the opening example $\Ker T = \Span\big((1, -1)\big) \neq \{0\}$, so $T$ is not injective: indeed $T(1, 0) = T(0, 1) = (1, 2)$. And it is not surjective, because $(1, 0)$ is not a multiple of $(1, 2)$.

> [!NOTE] Link with computer science: the kernel as the set of admissible directions (p. 71)
> Suppose that a vector $x$ must satisfy a linear constraint $Ax = b$. If you want to move from $x$ in the direction $y$ without violating the constraint, you consider the points $x + ty$. Since $A(x + ty) = Ax + tAy = b + tAy$, we have $A(x + ty) = b$ for every $t$ precisely when $Ay = 0$, that is when $y \in \Ker A$ (the kernel of $L_A$). The kernel describes all the directions along which you can move while keeping the equality constraints, an idea used directly in linear optimisation algorithms.
>
> With numbers: the constraint $x_1 + x_2 + x_3 = 3$ is $Ax = b$ with $A = (1\ 1\ 1)$. From $x = (1, 1, 1)$, moving along $y = (1, -1, 0) \in \Ker A$ you stay on the constraint: $(1 + t) + (1 - t) + 1 = 3$ for every $t$. It is Proposition 12.3 seen through the eyes of the kernel: the solutions of $Ax = b$ are $x + \Ker A$.

### The image is spanned by the images of the generators

> [!REMARK] Generators of the image (p. 72)
> If $v_1, \dots, v_n$ are generators of $V$, then $f(v_1), \dots, f(v_n)$ are generators of $\Imm f$. In particular, if $A$ is an $m \times n$ matrix, the image of $L_A: \K^n \to \K^m$ is the space spanned by the columns,
> $$\Imm L_A = \Span\left(A^1, \dots, A^n\right),$$
> and for every matrix $A$
> $$\rk(A) = \dim \Span\left(A^1, \dots, A^n\right) = \dim \Imm L_A.$$

Why it holds, step by step:

1. Let $w \in \Imm f$: there exists $v \in V$ with $f(v) = w$.
2. The $v_i$ span $V$, so $v = \lambda_1v_1 + \cdots + \lambda_nv_n$ for some $\lambda_1, \dots, \lambda_n$.
3. By linearity $w = f(v) = \lambda_1f(v_1) + \cdots + \lambda_nf(v_n) \in \Span\big(f(v_1), \dots, f(v_n)\big)$.
4. This holds for every $w$, so $\Imm f \subset \Span\big(f(v_1), \dots, f(v_n)\big)$; the other inclusion holds because $\Imm f$ is a subspace (Proposition 14.10) that contains all the $f(v_i)$. So $\Imm f = \Span\big(f(v_1), \dots, f(v_n)\big)$.
5. For $L_A$: the vectors $e_1, \dots, e_n$ span $\K^n$ and $L_A(e_i) = A^i$. So $\Imm L_A$ is the Span of the columns, and its dimension is the rank (Definition 8.3).

> [!METHOD] Kernel and image of $L_A$
> 1. **Kernel** = solutions of the homogeneous system $Ax = 0$. Gauss–Jordan on $A$; one free unknown for each column without a pivot; one basis vector for each free unknown (lesson L12).
> 2. **Image** = Span of the columns. A basis: the columns **of the starting matrix** $A$ that contain a pivot in the row echelon form (lesson L13). $\dim \Imm L_A = \rk(A)$.
> 3. **Check**: $\dim \Ker L_A + \dim \Imm L_A$ must give $n$, the number of columns (rank–nullity theorem, next section).

> [!EXAMPLE] Kernel and image, the whole calculation
> $A = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 4 & 1 \\ 1 & 2 & 1 \end{pmatrix}$, $L_A: \R^3 \to \R^3$.
> 1. **Gauss–Jordan.** $R_2 \to R_2 - 2R_1$ gives $(0, 0, 1)$; $R_3 \to R_3 - R_1$ gives $(0, 0, 1)$; $R_3 \to R_3 - R_2$ gives the zero row:
>    $$\begin{pmatrix} 1 & 2 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}.$$
>    It is already reduced. Pivots in columns 1 and 3.
> 2. **Kernel.** Column 2 has no pivot: $x_2 = t$. The rows say $x_1 + 2t = 0$ and $x_3 = 0$. So $\Ker L_A = \{(-2t, t, 0)\} = \Span\big((-2, 1, 0)\big)$, of dimension 1. Check: $A(-2, 1, 0) = (-2 + 2,\ -4 + 4,\ -2 + 2) = (0, 0, 0)$.
> 3. **Image.** Columns 1 and 3 **of $A$**: $\Imm L_A = \Span\big((1, 2, 1),\ (0, 1, 1)\big)$, of dimension 2 (column 2 is twice the first).
> 4. **Check**: $1 + 2 = 3$, the number of columns.

```widget gauss
title: Kernel and image of $L_A$ with the steps (here the matrix of the example)
matrice: 1 2 0; 2 4 1; 1 2 1
modo: nucleo
```

The tool reduces the matrix, writes a basis of the kernel and takes as a basis of the image the columns of the starting matrix where the pivots are. Try with the matrix `1 2; 2 4` of the pitfall below, and with an invertible matrix such as `2 1; 1 3`: the kernel shrinks to the zero vector alone.

> [!PITFALL] The image is read off the starting columns
> The Gauss moves on the rows change the columns, and with them the space they span. With $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ the reduced form is $\begin{pmatrix} 1 & 2 \\ 0 & 0 \end{pmatrix}$, whose first column is $(1, 0)$; but $\Imm L_A = \Span\big((1, 2)\big)$ and $(1, 0)$ does **not** lie in it. From the reduced form you read the **positions** of the pivots; the columns must be taken from the **original** matrix.

## The rank–nullity theorem (p. 72)

In the example $T(x, y) = (x + y, 2x + 2y)$ the kernel and the image are two lines: $1 + 1 = 2 = \dim \R^2$. It is a case of a general rule: **what the kernel "squashes" is lost, what remains forms the image.**

| $f$ | $\dim V$ | $\dim \Ker f$ | $\dim \Imm f$ |
|---|--:|--:|--:|
| $T(x, y) = (x + y,\ 2x + 2y)$ | 2 | 1 | 1 |
| $P(x, y, z) = (x, y)$ | 3 | 1 (the $z$-axis) | 2 |
| zero function $V \to W$ | $n$ | $n$ | 0 |
| identity $V \to V$ | $n$ | 0 | $n$ |

> [!THEOREM] 14.12 · Rank–nullity theorem
> Let $f: V \to W$ be a linear function. If $V$ has finite dimension $n$, then
> $$\dim \Ker f + \dim \Imm f = n.$$

Piece by piece:

- On the right there is the dimension of the **domain** $V$, not that of the codomain.
- $W$ can be anything; you only need $V$ to have finite dimension.
- So it is enough to compute **one** of the two dimensions: the other comes by difference.

The idea of the proof, in the handouts: you take a basis $v_1, \dots, v_k$ of $\Ker f$ and complete it to a basis $v_1, \dots, v_n$ of $V$. Then $f(v_{k+1}), \dots, f(v_n)$ form a basis of $\Imm f$, so $\dim \Imm f = n - k$, and the formula follows.

> [!PROOF] of Theorem 14.12, with all the steps (from Martelli's book, Theorem 4.2.9)
> Let $v_1, \dots, v_k$ be a basis of $\Ker f$, completed to a basis $v_1, \dots, v_n$ of $V$ (it can always be done: it is the completion algorithm of Martelli's book, §2.3.5). It is enough to prove that $f(v_{k+1}), \dots, f(v_n)$ are a basis of $\Imm f$: then $\dim \Ker f = k$ and $\dim \Imm f = n - k$.
>
> **They span.** By the remark on p. 72, $f(v_1), \dots, f(v_n)$ span $\Imm f$. But $f(v_1) = \cdots = f(v_k) = 0$, because $v_1, \dots, v_k$ lie in the kernel: removing them from the list, $f(v_{k+1}), \dots, f(v_n)$ still span $\Imm f$.
>
> **They are independent.** Suppose $\lambda_{k+1}f(v_{k+1}) + \cdots + \lambda_nf(v_n) = 0$. By linearity $f(\lambda_{k+1}v_{k+1} + \cdots + \lambda_nv_n) = 0$, that is $\lambda_{k+1}v_{k+1} + \cdots + \lambda_nv_n \in \Ker f$. Since $v_1, \dots, v_k$ is a basis of $\Ker f$, there exist $\alpha_1, \dots, \alpha_k$ with
> $$\lambda_{k+1}v_{k+1} + \cdots + \lambda_nv_n = \alpha_1v_1 + \cdots + \alpha_kv_k.$$
> Bringing everything to the left, $-\alpha_1v_1 - \cdots - \alpha_kv_k + \lambda_{k+1}v_{k+1} + \cdots + \lambda_nv_n = 0$. But $v_1, \dots, v_n$ are independent (they are a basis), so all the coefficients are zero, in particular $\lambda_{k+1} = \cdots = \lambda_n = 0$. $\square$

### For matrices it is Rouché–Capelli

In the case of $L_A: \K^n \to \K^m$ the kernel is

$$\Ker L_A = \{x \in \K^n \mid L_A(x) = 0\} = \{x \in \K^n \mid Ax = 0\} = S,$$

the space of solutions of the homogeneous system $Ax = 0$. With the remark on p. 72, $\dim \Imm L_A = \rk(A)$, and the rank–nullity theorem becomes

$$\dim S = n - \rk(A):$$

which is exactly the Rouché–Capelli theorem for homogeneous systems (lesson L12). Two very different routes, one with the Gauss moves and one with bases, lead to the same result.

> [!COROLLARY] 14.13
> Let $f: V \to W$ be a linear map. Then
> $$\dim \Imm f \le \dim V.$$
> Moreover:
> 1. $f$ injective $\Longleftrightarrow \dim \Imm f = \dim V$;
> 2. $f$ surjective $\Longleftrightarrow \dim \Imm f = \dim W$.

**Explanation.** From the rank–nullity theorem $\dim \Imm f = \dim V - \dim \Ker f \le \dim V$. Moreover:

1. $f$ is injective if and only if $\Ker f = \{0\}$ (Proposition 14.11), that is $\dim \Ker f = 0$, that is (rank–nullity theorem) $\dim \Imm f = \dim V$;
2. $f$ is surjective if and only if $\Imm f = W$. Since $\Imm f$ is a subspace of $W$, and a subspace with the same (finite) dimension as the space that contains it is the whole space, this happens if and only if $\dim \Imm f = \dim W$.

Here, as in the theorem, the dimensions are finite.

> [!BEYOND] the consequences you need in the quizzes
> From Corollary 14.13 follow three rules that are used without calculations (Martelli, Corollary 4.2.23 and Proposition 4.2.24):
> 1. if $\dim V > \dim W$, $f$ **cannot be injective** ($\dim \Imm f \le \dim W < \dim V$);
> 2. if $\dim V < \dim W$, $f$ **cannot be surjective** ($\dim \Imm f \le \dim V < \dim W$);
> 3. if $\dim V = \dim W$, $f$ is injective **if and only if** it is surjective.
>
> For matrices: $L_A: \K^n \to \K^m$ is injective if and only if $\rk(A) = n$, surjective if and only if $\rk(A) = m$ (Martelli, Example 4.2.16).

> [!EXAMPLE] The rank–nullity theorem instead of calculations (from Martelli's book, Example 4.2.12)
> What is the dimension of $W = \{p \in \R_2[x] \mid p(1) = 0\}$? $W$ is the kernel of the evaluation $f: \R_2[x] \to \R$, $f(p) = p(1)$, which is linear. $f$ is surjective: the constant polynomial $\lambda$ goes to $\lambda$. So $\dim \Imm f = 1$ and
> $$\dim W = \dim \Ker f = \dim \R_2[x] - \dim \Imm f = 3 - 1 = 2.$$
> The polynomials $x - 1$ and $x^2 - 1$ lie in $W$ (they are $0$ at $1$) and are independent (neither is a multiple of the other): two independent vectors in a space of dimension 2 are a basis (Theorem 7.12). So $W = \Span(x - 1,\ x^2 - 1)$.

> [!BEYOND] where to find it in the book
> In Martelli's book: **§4.1 "Introduzione"** (pp. 115–123): the definition (where $f(0) = 0$ appears as the first axiom, while the handouts derive it from the other two), the basic examples, $L_A$ with Proposition 4.1.6 and Corollary 4.1.7 ($L_A(e_i) = A^i$), transposition, evaluation, derivative, coordinates, and Proposition 4.1.19. **§4.2 "Nucleo e immagine"** (pp. 123–130): Propositions 4.2.1, 4.2.2, 4.2.5, 4.2.6, Corollaries 4.2.7 and 4.2.8, the rank–nullity theorem with the complete proof (Theorem 4.2.9, pp. 124–125), Examples 4.2.10–4.2.13 and Corollary 4.2.14.

## Towards the exam

The AG written test has 10 quiz questions with 5 answers each (you need at least 6 points for the 2 problems worth 11 points to be marked), it lasts 2 hours, with no calculator and only 4 handwritten pages of notes; the 2026/27 exam sessions are on 22/01 and 05/02/2027 at 14:00. All the details are in lesson L01.

**What you need from this lesson for the exam** (almost every exam session has at least one question on these topics)

1. **"Is it linear?"**: exams of 10/07/2024 (question 7, which formula defines a linear map $\R^3 \to \R^2$) and 10/07/2025 (question 3, the evaluation $p \mapsto p(7)$).
2. **The kernel**: exams of 24/01/2024 (question 8, on $\R_2[x]$), 08/02/2024 (question 6, $A \mapsto A + {}^tA$ on matrices) and 15/01/2026 (question 10, kernel of a composition).
3. **The image**: exams of 07/02/2025 (question 7), 10/07/2025 (question 7), 05/02/2026 (question 7), 07/09/2026 (question 4), almost always for a map $\R_2[x] \to \R_2[x]$; exams of 03/06/2025 (question 7, the rank of $T$) and 03/07/2026 (question 4, $\dim \Imm T$).
4. **Rank–nullity theorem without calculations**: exams of 06/09/2024 (question 3: $T: \R^6 \to \R_3[x]$ surjective, what is $\dim \Ker T$?) and 02/09/2025 (question 5). The dimension of subspaces of polynomials defined by conditions such as $p(2) = p(-2) = 0$ (exam of 03/07/2026, question 1) is also found as the dimension of a kernel.
5. **Open problems**: in the exams of 08/02/2024 and 10/07/2025 (problem 12) you are asked for the matrix of $T$ with respect to the standard basis, the rank of $T$, all the $v$ with $T(v) = w$ and the values of $k$ for which a vector depending on $k$ lies in $\Imm T$; in the exam of 06/09/2024 (problem 11) a basis of $\Ker A$ as $k$ varies. Two exercises below follow these schemes.

> [!METHOD] The image of $T: \R_2[x] \to \R_2[x]$ in the quiz
> 1. Write $T(ax^2 + bx + c)$ **collecting** $a$, $b$, $c$: for example $(a - b)x^2 + (b - a)x + c = a(x^2 - x) + b(-x^2 + x) + c \cdot 1$.
> 2. The polynomials that multiply $a$, $b$, $c$ are $T(x^2)$, $T(x)$, $T(1)$: they span the image (remark on p. 72). Here $\Imm T = \Span(x^2 - x,\ 1)$.
> 3. Remove the dependent ones and count: $\dim \Imm T$. If you get $3$, the image is the whole of $\R_2[x]$.
> 4. Compare with the answers: two Spans are equal if every generator of one lies in the other and the dimensions coincide.

> [!PITFALL] The typical mistakes
> - Confusing domain and codomain: the kernel lies in the **domain**, the image in the **codomain**; in the rank–nullity theorem you use $\dim V$, the dimension of the domain.
> - Taking the columns of the reduced matrix as a basis of the image.
> - Saying that a function is linear just because $f(0) = 0$.
> - Forgetting that the dimensions of the spaces of polynomials are $\dim \R_n[x] = n + 1$ and that $\dim M(m, n, \R) = mn$: $\dim \R_3[x] = 4$, $\dim M(2, \R) = 4$.

> [!EXAM] The 4-page sheet
> From this lesson: the two linearity conditions and the test $f(0) = 0$; "$L_A(e_i) = A^i$, $\Imm L_A = \Span$ of the columns, $\rk A = \dim \Imm L_A$, $\Ker L_A$ = solutions of $Ax = 0$"; $\dim \Ker f + \dim \Imm f = \dim V$; injective $\Leftrightarrow \Ker f = \{0\}$; the three rules "$\dim V > \dim W \Rightarrow$ not injective", "$\dim V < \dim W \Rightarrow$ not surjective", "$\dim V = \dim W$: injective $\Leftrightarrow$ surjective".

## Quiz

```quiz
Q: Which of the functions below defines a linear map $T: \R^3 \to \R^2$?
+ $T(x, y, z) = (2x + 3y,\ x + 2z)$
- $T(x, y) = (2x - 3y,\ x + 2y)$
- $T(x, y, z) = (x^2 + y,\ x - 2z^2)$
- $T(x, y, z) = (2x + 1,\ y + z)$
- $T(x, y) = (x + 2y,\ y + 2z,\ x - 3z)$
= Exam of 10/07/2024, question 7. The first has domain $\R^3$, codomain $\R^2$ and coordinates that are combinations of $x, y, z$: it is $L_A$ with $A = \begin{pmatrix} 2 & 3 & 0 \\ 1 & 0 & 2 \end{pmatrix}$. The second goes from $\R^2$, not from $\R^3$; the last has two variables but also uses $z$ and gives three coordinates; the third has squares; the fourth sends $0$ to $(1, 0)$.

Q: Let $f: V \to W$ be a linear map, with $\dim V = 4$ and $\dim W = 2$. Which of the following is necessarily true?
- $f$ must be surjective.
- $f$ cannot be surjective.
+ $f$ cannot be injective.
- $f$ must be injective.
- $f$ is an isomorphism.
= Exam of 02/09/2025, question 5. $\dim \Imm f \le \dim W = 2$, so $\dim \Ker f = 4 - \dim \Imm f \ge 2 > 0$: the kernel is not $\{0\}$ and $f$ is not injective. It can be surjective (for example $(x_1, x_2, x_3, x_4) \mapsto (x_1, x_2)$) but also not (the zero function).

Q: The kernel of the linear map $T: \R_2[x] \to \R_2[x]$, $T(ax^2 + bx + c) = bx^2 + cx$, is:
- $\{\}$
- $\R_1[x]$
- $\Span(x + 1,\ x - 1)$
+ $\Span(x^2)$
- $\R_2[x] \setminus \R_1[x]$
= Exam of 24/01/2024, question 8. $T(ax^2 + bx + c) = 0$ if and only if $b = 0$ and $c = 0$, with any $a$: the kernel is $\{ax^2\} = \Span(x^2)$. It is not empty (it always contains zero), and $\R_2[x] \setminus \R_1[x]$ does not contain zero, so it is not even a subspace.

Q: The image of the linear map $T: \R_2[x] \to \R_2[x]$, $T(ax^2 + bx + c) = (a - b)x^2 + (b - a)x + c$, is:
- $\R_2[x]$
+ $\Span(x^2 - x,\ 1)$
- $\Span(x^2,\ x)$
- $\R_1[x]$
- $\{p \in \R_2[x] \mid p(0) = 0\}$
= Similar to the exam of 07/09/2026, question 4. Collecting terms, $T(ax^2 + bx + c) = (a - b)(x^2 - x) + c \cdot 1$: the image is $\Span(x^2 - x, 1)$, of dimension 2 (so it is not $\R_2[x]$). $\Span(x^2, x)$ and $\{p \mid p(0) = 0\}$ do not contain $1$; $\R_1[x]$ does not contain $x^2 - x$.

Q: Let $T: \R^5 \to \R_2[x]$ be a surjective linear map. Then $\Ker T$ has dimension:
- $1$
+ $2$
- $3$
- $5$
- $0$
= Similar to the exam of 06/09/2024, question 3. $T$ surjective means $\dim \Imm T = \dim \R_2[x] = 3$. By the rank–nullity theorem $\dim \Ker T = 5 - 3 = 2$.

Q: Which of these functions is **not** linear?
+ $\det: M(2, \R) \to \R$
- $\tr: M(2, \R) \to \R$
- $M(2, \R) \to M(2, \R)$, $A \mapsto {}^tA$
- $\R_2[x] \to \R$, $p \mapsto p(3)$
- $M(2, \R) \to M(2, \R)$, $A \mapsto 2A$
= $\det(I + I) = \det(2I) = 4$, while $\det I + \det I = 2$: the determinant does not respect sums. Trace, transposition, evaluation at a point and multiplication by 2 respect sums and multiples.

Q: Let $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$. The kernel of $L_A: \R^2 \to \R^2$ is:
+ $\Span((-2, 1))$
- $\Span((1, 2))$
- $\Span((1, -2))$
- $\{0\}$
- $\R^2$
= $Ax = 0$ reduces to the equation $x_1 + 2x_2 = 0$: with $x_2 = t$, $x_1 = -2t$. Check: $A(-2, 1) = (-2 + 2,\ -4 + 4) = (0, 0)$. $(1, 2)$ spans the image, not the kernel; $A(1, -2) = (-3, -6) \neq 0$.

Q: Let $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{pmatrix}$. What is the dimension of the image of $L_A: \R^3 \to \R^2$?
- $0$
+ $1$
- $2$
- $3$
- $6$
= Similar to the exam of 03/07/2026, question 4. $\dim \Imm L_A = \rk(A)$. The second row is twice the first: a single pivot, rank 1. The image is the line $\Span\big((1, 2)\big)$, and the kernel has dimension $3 - 1 = 2$.

Q: Let $f: \R^3 \to \R^3$ be linear with $\Ker f = \{0\}$. Then:
+ $f$ is also surjective.
- $f$ is the zero function.
- $\dim \Imm f = 0$.
- $f$ cannot be surjective.
- $\dim \Imm f = 2$.
= Similar to the exam of 02/09/2025, question 5. $\dim \Imm f = 3 - 0 = 3 = \dim \R^3$: the image is the whole codomain. With domain and codomain of the same dimension, injective and surjective are the same thing.

Q: A matrix $A$ of size $3 \times 5$ has rank 2. What is the dimension of the kernel of $L_A: \R^5 \to \R^3$?
N: 3
= Rank–nullity theorem: $\dim \Ker L_A = 5 - \dim \Imm L_A = 5 - \rk(A) = 5 - 2 = 3$. The number that counts is that of the columns, that is the dimension of the domain.
```

## Exercises

::: exercise intermediate Exercise 14.14 of the handouts, point 1
Let $f_1: \R^3 \to \R^2$, $f_1(x, y, z) = (x + y + z,\ 2x + 3y + 4z)$. Check that $f_1$ is linear, find $\Ker f_1$ and $\Imm f_1$ and verify the rank–nullity theorem.
::: solution
**Linear.** Each coordinate is a combination of $x, y, z$ with fixed coefficients: $f_1 = L_A$ with
$$A = \begin{pmatrix} 1 & 1 & 1 \\ 2 & 3 & 4 \end{pmatrix},$$
so it is linear (Example 14.6). Check on the columns: $f_1(e_1) = (1, 2)$, $f_1(e_2) = (1, 3)$, $f_1(e_3) = (1, 4)$.

**Kernel.** $R_2 \to R_2 - 2R_1$ gives $(0, 1, 2)$, then $R_1 \to R_1 - R_2$ gives $(1, 0, -1)$:
$$\begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 2 \end{pmatrix}.$$
$z = t$ free, $x = t$, $y = -2t$: $\Ker f_1 = \Span\big((1, -2, 1)\big)$, dimension 1. Check: $f_1(1, -2, 1) = (1 - 2 + 1,\ 2 - 6 + 4) = (0, 0)$.

**Image.** Two pivots, $\rk A = 2$: $\dim \Imm f_1 = 2 = \dim \R^2$, so $\Imm f_1 = \R^2$ ($f_1$ is surjective). A basis: $(1, 2), (1, 3)$, the pivot columns.

**Rank–nullity theorem:** $1 + 2 = 3 = \dim \R^3$.
:::

::: exercise intermediate Exercise 14.14 of the handouts, point 2
Let $f_2: \R_2[x] \to \R$, $f_2(p(x)) = p(1) + p(-1)$. Check that $f_2$ is linear, find $\Ker f_2$ and $\Imm f_2$ and verify the rank–nullity theorem.
::: solution
**Linear.** For $p, q \in \R_2[x]$ and $\lambda \in \R$ (the sum of polynomials is evaluated point by point):
$$f_2(p + q) = (p + q)(1) + (p + q)(-1) = p(1) + q(1) + p(-1) + q(-1) = f_2(p) + f_2(q),$$
$$f_2(\lambda p) = \lambda p(1) + \lambda p(-1) = \lambda f_2(p).$$

**A handy formula.** With $p = a_0 + a_1x + a_2x^2$: $p(1) = a_0 + a_1 + a_2$ and $p(-1) = a_0 - a_1 + a_2$, so
$$f_2(p) = 2a_0 + 2a_2.$$

**Kernel.** $f_2(p) = 0$ if and only if $a_2 = -a_0$, with $a_1$ free: $p = a_0(1 - x^2) + a_1x$. So $\Ker f_2 = \Span(1 - x^2,\ x)$, of dimension 2 (the two polynomials are not multiples of each other). Check: $f_2(1 - x^2) = 0 + 0 = 0$, $f_2(x) = 1 + (-1) = 0$.

**Image.** $f_2\!\left(\tfrac 12\right) = \tfrac 12 + \tfrac 12 = 1$, so $1 \in \Imm f_2$ and, being a subspace, $\Imm f_2 = \R$: dimension 1, $f_2$ surjective.

**Rank–nullity theorem:** $2 + 1 = 3 = \dim \R_2[x]$.
:::

::: exercise intermediate Exercise 14.14 of the handouts, point 3
Let $f_3: M_2(\R) \to M_2(\R)$, $f_3(A) = A - {}^tA$ (where $M_2(\R) = M(2, \R)$ are the real $2 \times 2$ matrices). Check that $f_3$ is linear, find $\Ker f_3$ and $\Imm f_3$ and verify the rank–nullity theorem.
::: solution
**Linear.** The transpose respects sums and multiples (lesson L08), so
$$f_3(A + B) = (A + B) - {}^t(A + B) = A - {}^tA + B - {}^tB = f_3(A) + f_3(B), \qquad f_3(\lambda A) = \lambda A - \lambda\,{}^tA = \lambda f_3(A).$$

**Formula.** With $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:
$$f_3(A) = \begin{pmatrix} a & b \\ c & d \end{pmatrix} - \begin{pmatrix} a & c \\ b & d \end{pmatrix} = \begin{pmatrix} 0 & b - c \\ c - b & 0 \end{pmatrix}.$$

**Kernel.** $f_3(A) = 0$ if and only if $b = c$: they are the **symmetric** matrices $\begin{pmatrix} a & b \\ b & d \end{pmatrix} = a\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} + b\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} + d\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$. The three matrices are independent (each has a 1 where the others have 0): $\dim \Ker f_3 = 3$.

**Image.** All the matrices $\begin{pmatrix} 0 & s \\ -s & 0 \end{pmatrix}$ with $s = b - c$ (and every $s$ is obtained, for example with $b = s$, $c = 0$): they are the **skew-symmetric** matrices, $\Imm f_3 = \Span\left(\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}\right)$, of dimension 1.

**Rank–nullity theorem:** $3 + 1 = 4 = \dim M_2(\R)$.
:::

::: exercise hard Exercise 14.15 of the handouts
Let $f: \R^4 \to \R^3$ be the linear map $f(x_1, x_2, x_3, x_4) = (x_1 + x_2 + x_3,\ x_2 + x_3 + x_4,\ x_1 - x_4)$. (1) Find a basis of $\Ker f$. (2) Find $\dim \Imm f$ with the rank–nullity theorem. (3) Find a basis of $\Imm f$. (4) Decide whether $f$ is injective and whether it is surjective.
::: solution
The matrix (rows = coefficients of the three coordinates):
$$A = \begin{pmatrix} 1 & 1 & 1 & 0 \\ 0 & 1 & 1 & 1 \\ 1 & 0 & 0 & -1 \end{pmatrix}.$$
**Gauss–Jordan.** $R_3 \to R_3 - R_1$ gives $(0, -1, -1, -1)$; $R_3 \to R_3 + R_2$ gives the zero row; $R_1 \to R_1 - R_2$ gives $(1, 0, 0, -1)$:
$$\begin{pmatrix} 1 & 0 & 0 & -1 \\ 0 & 1 & 1 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}.$$

**(1)** Pivots in columns 1 and 2; free $x_3 = s$ and $x_4 = t$. The rows say $x_1 = t$ and $x_2 = -s - t$:
$$(x_1, x_2, x_3, x_4) = s\,(0, -1, 1, 0) + t\,(1, -1, 0, 1).$$
A basis of $\Ker f$ is $(0, -1, 1, 0),\ (1, -1, 0, 1)$. Check: $f(0, -1, 1, 0) = (0, 0, 0)$ and $f(1, -1, 0, 1) = (1 - 1 + 0,\ -1 + 0 + 1,\ 1 - 1) = (0, 0, 0)$.

**(2)** $\dim \Imm f = 4 - \dim \Ker f = 4 - 2 = 2$.

**(3)** Columns 1 and 2 of the **starting** matrix: $(1, 0, 1)$ and $(1, 1, 0)$. They are two independent vectors in the image, which has dimension 2: they are a basis.

**(4)** Not injective: $\Ker f \neq \{0\}$. Not surjective: $\dim \Imm f = 2 < 3 = \dim \R^3$. (For example $(0, 0, 1)$ is not in the image: $\Imm f$ is the plane through the origin spanned by $(1, 0, 1)$ and $(1, 1, 0)$, that is $x - y - z = 0$, and $0 - 0 - 1 \neq 0$.)
:::

::: exercise basic Linear or not?
Decide which are linear; for the others give a counterexample. (a) $T: \R^2 \to \R^2$, $T(x, y) = (3x - y,\ 0)$. (b) $T: \R^2 \to \R^2$, $T(x, y) = (x + y,\ 1)$. (c) $T: \R^3 \to \R^2$, $T(x, y, z) = (xz,\ y)$. (d) $T: \R_2[x] \to \R$, $T(p) = p(0) \cdot p(1)$.
::: solution
(a) **Linear**: it is $L_A$ with $A = \begin{pmatrix} 3 & -1 \\ 0 & 0 \end{pmatrix}$.

(b) **Not linear**: $T(0, 0) = (0, 1) \neq 0$.

(c) **Not linear**: $T(2 \cdot (1, 0, 1)) = T(2, 0, 2) = (4, 0)$, but $2\,T(1, 0, 1) = 2 \cdot (1, 0) = (2, 0)$.

(d) **Not linear**: for the constant polynomial $1$, $T(2 \cdot 1) = 2 \cdot 2 = 4$, but $2\,T(1) = 2 \cdot (1 \cdot 1) = 2$. Here $T(0) = 0$: the zero test was not enough, the counterexample was needed.
:::

::: exercise basic Knowing $T$ from its values on the basis
(a) $T: \R^2 \to \R^2$ is linear, with $T(1, 0) = (2, 1)$ and $T(0, 1) = (-1, 3)$. Compute $T(3, -2)$ and the matrix $A$ with $T = L_A$. (b) If instead you know that $T(1, 1) = (3, 0)$ and $T(1, -1) = (1, 2)$, what is $T(1, 0)$?
::: solution
(a) By linearity, $T(3, -2) = T(3e_1 - 2e_2) = 3T(e_1) - 2T(e_2) = 3(2, 1) - 2(-1, 3) = (6 + 2,\ 3 - 6) = (8, -3)$. The matrix has as columns $T(e_1)$ and $T(e_2)$: $A = \begin{pmatrix} 2 & -1 \\ 1 & 3 \end{pmatrix}$. Check: $A(3, -2) = (6 + 2,\ 3 - 6) = (8, -3)$.

(b) $(1, 0) = \frac 12\big((1, 1) + (1, -1)\big)$, so $T(1, 0) = \frac 12\big((3, 0) + (1, 2)\big) = \frac 12 (4, 2) = (2, 1)$.
:::

::: exercise basic Kernel and image of an oblique projection
Find kernel and image of $T: \R^3 \to \R^2$, $T(x, y, z) = (x - z,\ y + z)$, and say whether $T$ is injective or surjective.
::: solution
$A = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 1 \end{pmatrix}$ is already in reduced form, with pivots in columns 1 and 2: $\rk A = 2$.
- **Kernel**: $z = t$, $x = t$, $y = -t$: $\Ker T = \Span\big((1, -1, 1)\big)$. Check: $T(1, -1, 1) = (0, 0)$.
- **Image**: $\dim \Imm T = 2 = \dim \R^2$, so $\Imm T = \R^2$.
- $T$ is **surjective** but **not injective**; and indeed $1 + 2 = 3$. From $\R^3$ to $\R^2$ it could not be injective anyway ($3 > 2$).
:::

::: exercise intermediate A subspace of polynomials as a kernel
Let $W = \{p \in \R_3[x] \mid p(0) = 0,\ p(1) = 0\}$. Find $\dim W$ with the rank–nullity theorem and then a basis of $W$.
::: solution
$W$ is the kernel of $f: \R_3[x] \to \R^2$, $f(p) = (p(0),\ p(1))$, which is linear (evaluations at two points).

**$f$ is surjective**: $f(1 - x) = (1, 0)$ and $f(x) = (0, 1)$, and these two vectors span $\R^2$. So $\dim \Imm f = 2$ and
$$\dim W = \dim \R_3[x] - 2 = 4 - 2 = 2.$$
**Basis.** $x^2 - x = x(x - 1)$ and $x^3 - x = x(x - 1)(x + 1)$ vanish at $0$ and at $1$, so they lie in $W$; they have different degrees, so neither is a multiple of the other: they are independent. Two independent vectors in a space of dimension 2 are a basis: $W = \Span(x^2 - x,\ x^3 - x)$. It is the scheme of question 1 of the exam of 03/07/2026.
:::

::: exercise exam As at the exam: rank, preimages and image with a parameter
Let $T: \R^3 \to \R^3$, $T(x, y, z) = (x + y + 2z,\ 2x + y + 3z,\ x + 2y + 3z)$. (1) Write the matrix $A$ with $T = L_A$ and compute the rank of $T$. (2) Find all the vectors $v$ with $T(v) = (3, 4, 5)$. (3) For which $k \in \R$ does the vector $(k, k^2, 2)$ belong to the image of $T$? (4) Find a basis of $\Ker T$ and say whether $T$ is injective or surjective.
::: solution
**(1)** The rows of $A$ are the coefficients of the three coordinates:
$$A = \begin{pmatrix} 1 & 1 & 2 \\ 2 & 1 & 3 \\ 1 & 2 & 3 \end{pmatrix}.$$
For questions (2) and (3) it pays to reduce the augmented matrix straight away with a generic constant term $(a, b, c)$:
$$\left(\begin{array}{ccc|c} 1 & 1 & 2 & a \\ 2 & 1 & 3 & b \\ 1 & 2 & 3 & c \end{array}\right) \xrightarrow[R_3 \to R_3 - R_1]{R_2 \to R_2 - 2R_1} \left(\begin{array}{ccc|c} 1 & 1 & 2 & a \\ 0 & -1 & -1 & b - 2a \\ 0 & 1 & 1 & c - a \end{array}\right)$$
$$\xrightarrow{R_3 \to R_3 + R_2} \left(\begin{array}{ccc|c} 1 & 1 & 2 & a \\ 0 & -1 & -1 & b - 2a \\ 0 & 0 & 0 & b + c - 3a \end{array}\right)$$
Two pivots on the left: $\rk T = \rk A = 2$.

**(2)** With $(a, b, c) = (3, 4, 5)$: $b + c - 3a = 4 + 5 - 9 = 0$, so there are solutions (Rouché–Capelli), with $3 - 2 = 1$ parameter. The rows say $x + y + 2z = 3$ and $-y - z = 4 - 6 = -2$. With $z = t$: $y = 2 - t$ and $x = 3 - (2 - t) - 2t = 1 - t$.
$$v = (1 - t,\ 2 - t,\ t), \qquad t \in \R.$$
Check with $t = 0$: $T(1, 2, 0) = (1 + 2,\ 2 + 2,\ 1 + 4) = (3, 4, 5)$.

**(3)** A vector $(a, b, c)$ lies in $\Imm T$ if and only if the system has a solution, that is if and only if $b + c - 3a = 0$ (it is the equation of the plane $\Imm T$). For $(k, k^2, 2)$: $k^2 + 2 - 3k = 0$, that is $(k - 1)(k - 2) = 0$. So **$k = 1$ or $k = 2$**. Check: $(1, 1, 2)$ gives $1 + 2 - 3 = 0$ and $(2, 4, 2)$ gives $4 + 2 - 6 = 0$.

**(4)** Zero constant term: $z = t$, $y = -t$, $x = -y - 2z = -t$. $\Ker T = \Span\big((-1, -1, 1)\big)$, of dimension 1. Check: $T(-1, -1, 1) = (-1 - 1 + 2,\ -2 - 1 + 3,\ -1 - 2 + 3) = (0, 0, 0)$. $T$ is **not injective** (non-zero kernel) and **not surjective** ($\dim \Imm T = 2 < 3$). Check of the theorem: $1 + 2 = 3$. The scheme is that of problems 12 of the exams of 08/02/2024 and 10/07/2025.
:::

::: exercise exam As at the exam: the kernel as $k$ varies
Let $A = \begin{pmatrix} 1 & 1 & k \\ 1 & k & 1 \\ k & 1 & 1 \end{pmatrix}$ with $k \in \R$. As $k$ varies, find a basis of $\Ker L_A$ and say for which $k$ the map $L_A: \R^3 \to \R^3$ is injective.
::: solution
**Determinant.** Expanding along the first row:
$$\det A = 1 \cdot (k - 1) - 1 \cdot (1 - k) + k \cdot (1 - k^2) = 2(k - 1) - k(k - 1)(k + 1) = -(k - 1)(k^2 + k - 2) = -(k - 1)^2(k + 2).$$
(I factored out $k - 1$: $2(k - 1) + k(1 - k)(1 + k) = (k - 1)(2 - k - k^2)$, and $k^2 + k - 2 = (k - 1)(k + 2)$.)

**If $k \neq 1$ and $k \neq -2$**: $\det A \neq 0$, the system $Ax = 0$ has only the zero solution: $\Ker L_A = \{0\}$ (no basis, dimension 0) and $L_A$ is **injective**, and so also surjective.

**If $k = 1$**: all the rows are $(1, 1, 1)$, rank 1. The kernel is the plane $x + y + z = 0$: with $y = s$, $z = t$, $x = -s - t$, a basis is $(-1, 1, 0),\ (-1, 0, 1)$. Dimension $3 - 1 = 2$.

**If $k = -2$**: $A = \begin{pmatrix} 1 & 1 & -2 \\ 1 & -2 & 1 \\ -2 & 1 & 1 \end{pmatrix}$. $R_2 \to R_2 - R_1$ gives $(0, -3, 3)$, $R_3 \to R_3 + 2R_1$ gives $(0, 3, -3)$, and $R_3 \to R_3 + R_2$ gives the zero row: rank 2. With $z = t$: $y = t$ and $x = -t + 2t = t$. A basis of the kernel is $(1, 1, 1)$ (indeed every row of $A$ has sum zero). Dimension $3 - 2 = 1$.

**$L_A$ is injective exactly for $k \neq 1, -2$.** The scheme is that of problem 11, point 2, of the exam of 06/09/2024.
:::

::: exercise hard What a linear map does to dependent and independent vectors
Let $f: V \to W$ be linear and let $v_1, \dots, v_k \in V$. (a) Prove that if $v_1, \dots, v_k$ are dependent, so are $f(v_1), \dots, f(v_k)$. (b) Prove that if $f$ is injective and $v_1, \dots, v_k$ are independent, then $f(v_1), \dots, f(v_k)$ are independent too. (c) Show with an example that injectivity is needed in (b).
::: solution
(a) There are $\lambda_1, \dots, \lambda_k$ not all zero with $\sum \lambda_iv_i = 0$. Applying $f$ and using linearity: $\sum \lambda_if(v_i) = f\big(\sum \lambda_iv_i\big) = f(0) = 0$. The same coefficients, not all zero, give a relation between the images.

(b) Suppose $\sum \lambda_if(v_i) = 0$. By linearity $f\big(\sum \lambda_iv_i\big) = 0$, that is $\sum \lambda_iv_i \in \Ker f$. Since $f$ is injective, $\Ker f = \{0\}$ (Proposition 14.11), so $\sum \lambda_iv_i = 0$; and since the $v_i$ are independent, all the $\lambda_i$ are zero.

(c) $f: \R^2 \to \R^2$, $f(x, y) = (x + y,\ 2x + 2y)$ is not injective: $e_1, e_2$ are independent, but $f(e_1) = f(e_2) = (1, 2)$ are dependent.
:::

## Review questions

::: question What is a linear map?
A function $f: V \to W$ between vector spaces over the same field such that $f(v + w) = f(v) + f(w)$ and $f(\lambda v) = \lambda f(v)$ for all $v, w \in V$ and all $\lambda \in \K$.
:::

::: question Why does a linear map send $0$ to $0$? Which three zeros appear?
$f(0) = f(0 \cdot 0) = 0 \cdot f(0) = 0$. Inside $f$ there is the zero vector of $V$ written as the scalar $0$ times a vector; the scalar $0 \in \K$ comes out by the second condition; the result is the zero vector of $W$.
:::

::: question How do you prove that a function is not linear?
One counterexample with numbers is enough: $f(0) \neq 0$, or two vectors with $f(v + w) \neq f(v) + f(w)$, or a vector and a scalar with $f(\lambda v) \neq \lambda f(v)$. The zero test on its own may not be enough.
:::

::: question What is $L_A$ and why is it linear?
For a matrix $A$ of size $m \times n$, $L_A: \K^n \to \K^m$ is $L_A(x) = Ax$. It is linear because of the properties of the matrix product: $A(x + x') = Ax + Ax'$ and $A(\lambda x) = \lambda Ax$.
:::

::: question What are the columns of $A$ for the map $L_A$?
They are the images of the vectors of the standard basis: $L_A(e_i) = A^i$. By linearity $L_A(x) = x_1A^1 + \cdots + x_nA^n$.
:::

::: question What are kernel and image, and where do they live?
$\Ker f = \{v \in V \mid f(v) = 0\}$ is a subspace of the domain $V$; $\Imm f = \{f(v) \mid v \in V\}$ is a subspace of the codomain $W$.
:::

::: question Why is $f$ injective if and only if $\Ker f = \{0\}$?
If $f$ is injective, only $0$ goes to $0$. Conversely, if $\Ker f = \{0\}$ and $v \neq v'$, then $v - v' \neq 0$ is not in the kernel, so $f(v) - f(v') = f(v - v') \neq 0$.
:::

::: question How do you find kernel and image of $L_A$?
The kernel is the set of solutions of $Ax = 0$ (Gauss–Jordan, one basis vector for each free unknown). The image is the Span of the columns; a basis is given by the columns of the starting matrix that contain a pivot in the row echelon form. $\dim \Imm L_A = \rk(A)$.
:::

::: question What does the rank–nullity theorem say? What is the idea of the proof?
If $\dim V = n$ is finite, $\dim \Ker f + \dim \Imm f = n$. You take a basis $v_1, \dots, v_k$ of the kernel, complete it to a basis $v_1, \dots, v_n$ of $V$, and prove that $f(v_{k+1}), \dots, f(v_n)$ are a basis of the image.
:::

::: question Why is the rank–nullity theorem Rouché–Capelli for matrices?
Because $\Ker L_A$ is the space $S$ of solutions of $Ax = 0$ and $\dim \Imm L_A = \rk(A)$: the theorem says $\dim S = n - \rk(A)$, the Rouché–Capelli formula for homogeneous systems.
:::

::: question If $\dim V = 4$ and $\dim W = 2$, what do you know about a linear $f: V \to W$? And if $\dim V = \dim W$?
With $\dim V = 4 > 2 = \dim W$, $f$ cannot be injective: $\dim \Ker f \ge 4 - 2 = 2$. With $\dim V = \dim W$, $f$ is injective if and only if it is surjective (Corollary 14.13).
:::

::: question Which of these are linear: trace, determinant, transposition, evaluation of a polynomial at a point?
Trace, transposition and evaluation yes; the determinant no: $\det(2I_2) = 4 \neq 2 = \det I_2 + \det I_2$.
:::

## Glossary

```glossary
Linear map | Function $f: V \to W$ between spaces over the same field with $f(v + w) = f(v) + f(w)$ and $f(\lambda v) = \lambda f(v)$.
Domain and codomain | The starting space $V$ and the target space $W$ of $f: V \to W$.
Zero function | $f(v) = 0$ for every $v$; it is linear, with kernel the whole of $V$ and image $\{0\}$.
Identity $\id$ | $\id(v) = v$; it is linear, with kernel $\{0\}$ and image the whole of $V$.
$L_A$ | The map $\K^n \to \K^m$, $x \mapsto Ax$, defined by a matrix $A$ of size $m \times n$.
Trace | $\tr A = a_{11} + \cdots + a_{nn}$; it is a linear map $M(n, \K) \to \K$.
Affine map | Function of the form $x \mapsto Ax + b$; with $b \neq 0$ it is not linear.
Kernel $\Ker f$ | The vectors of the domain sent to $0$; it is a subspace of $V$.
Image $\Imm f$ | The vectors of the codomain reached by $f$; it is a subspace of $W$.
Injective | Different vectors go to different vectors; for linear $f$ it is equivalent to $\Ker f = \{0\}$.
Surjective | Every vector of the codomain is reached: $\Imm f = W$.
Rank of $f$ | $\dim \Imm f$; for $L_A$ it is $\rk(A)$.
Rank–nullity theorem | $\dim \Ker f + \dim \Imm f = \dim V$, if $V$ has finite dimension.
Corollary 14.13 | $\dim \Imm f \le \dim V$; injective $\Leftrightarrow \dim \Imm f = \dim V$; surjective $\Leftrightarrow \dim \Imm f = \dim W$.
Evaluation | The linear map $p \mapsto p(x_0)$ that computes a polynomial at a fixed point.
```

## Checklist

```checklist
- I can state the definition of linear map and derive $f(0) = 0$ from it.
- I can prove that a function is linear (with letters) or that it is not (with a numerical counterexample).
- I can recognise non-linear formulas at a glance: added constants, squares, products of coordinates.
- I can write $L_A$ for a matrix $A$ and I know that the columns of $A$ are the images of $e_1, \dots, e_n$.
- I know that trace, transposition and evaluation are linear and that the determinant is not.
- I can define kernel and image and prove that they are subspaces.
- I can prove that $f$ is injective if and only if $\Ker f = \{0\}$.
- I can compute kernel and image of $L_A$ with Gauss, taking the starting columns for the image.
- I can state the rank–nullity theorem and use it to find a dimension without calculations.
- I can answer the quizzes on injectivity and surjectivity by comparing $\dim V$ and $\dim W$.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 14 "Applicazioni Lineari I", pp. 68–73: sections 14.A–14.D are followed in order, with the page next to each heading; definitions, propositions, theorem, corollary and examples keep their numbering (Definitions 14.1 and 14.9, Examples 14.2–14.8, Propositions 14.10 and 14.11, Theorem 14.12, Corollary 14.13, Exercises 14.14 and 14.15), including the remark on p. 72 and the two boxes "Link with computer science" (neural networks; the kernel as the set of admissible directions).
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §4.1 (pp. 115–123) and §4.2 (pp. 123–130), in particular the complete proof of Theorem 4.2.9, Examples 4.1.10, 4.1.13, 4.1.15, 4.2.12 and 4.2.16, Corollary 4.2.23 and Propositions 4.1.19 and 4.2.24.
- **Exam papers** of Linear Algebra 2023/24–2025/26 with official solutions (2025/26 Moodle, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): reported: question 8 of 24/01/2024, question 7 of 10/07/2024 and question 5 of 02/09/2025; cited: the questions on linearity, kernel, image and dimensions of the other exam sessions (08/02/2024, 06/09/2024, 07/02/2025, 03/06/2025, 10/07/2025, 15/01/2026, 05/02/2026, 03/07/2026, 07/09/2026) and problems 12 of 08/02/2024 and 10/07/2025 and 11 of 06/09/2024. The solutions here are written from scratch.
- The **"Beyond the handouts"** parts (the determinant is not linear, every map $\K^n \to \K^m$ as an $L_A$, the consequences of Corollary 14.13 for the quizzes, the examples with polynomials, the unnumbered exercises) are additions in these notes to connect the lesson to the rest of the course and to the exam.
