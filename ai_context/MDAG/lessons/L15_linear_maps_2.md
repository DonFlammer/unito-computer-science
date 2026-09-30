---
course: MDAG
module: AG
lesson: L15
title: Linear maps II
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Linear Algebra and Geometry · Channels A, B and C · Lesson L15
description: >-
  Notes on lesson L15 of Linear Algebra and Geometry (MDAG, part 2): isomorphisms, isomorphic vector spaces,
  coordinates and the matrix associated with a linear map with respect to two bases, with exam-style quizzes and
  worked exercises.
lede: >-
  When two vector spaces are "the same space with different names" (isomorphisms), and how any linear map
  $f : V \to W$ is turned into a matrix $[f]^{\mathcal B}_{\mathcal C}$ by choosing a basis at the start and one at
  the end. From here on every calculation on polynomials, matrices or abstract vectors becomes a calculation with
  matrices: it is the tool you need for changes of basis (L16) and for eigenvalues (L17–L18).
material: handouts
facts:
  Handouts: lesson 15 · pp. 74–78
  Book: Martelli, §4.2.5, §4.2.7 and §4.3
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 90–120 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 15 "Applicazioni lineari II"; B. Martelli, Geometria e algebra lineare, §4.2.5, §4.2.7 and §4.3
italian_file: L15_applicazioni_lineari_2.html
html_notes: notes/MDAG/L15_linear_maps_2.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L15_applicazioni_lineari_2.md
---

## In brief

- An **isomorphism** is a **bijective** linear map (injective and surjective). Its inverse $f^{-1}$ is still linear.
- The dimensions already say a lot: if $f : V \to W$ is injective then $\dim V \le \dim W$; if it is surjective then $\dim V \ge \dim W$; if it is an isomorphism then $\dim V = \dim W$.
- The converse of the last point also holds: two finite-dimensional spaces are **isomorphic** if and only if they have the **same dimension**. Every space of dimension $n$ over $\K$ is isomorphic to $\K^n$: the isomorphism sends every vector to its **coordinates** $[v]_{\mathcal B}$ and depends on the basis chosen.
- Once a basis $\mathcal B = \{v_1, \dots, v_n\}$ of $V$ and a basis $\mathcal C = \{w_1, \dots, w_m\}$ of $W$ are fixed, every linear $f : V \to W$ has an **associated matrix** $[f]^{\mathcal B}_{\mathcal C}$, of size $m \times n$: **column $j$** contains the coordinates of $f(v_j)$ with respect to $\mathcal C$.
- Notation rule: the **starting** basis goes **at the top**, the **target** basis goes **at the bottom**.
- For $L_A : \K^n \to \K^m$ with the standard bases the associated matrix is exactly $A$.
- The key formula is $[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C} \cdot [v]_{\mathcal B}$: in coordinates, **every** linear map becomes a matrix-times-vector multiplication.
- The matrix depends on the bases: the same $f$ has different matrices in different bases. With the same basis at the start and at the end, the identity always has matrix $I_n$.
- The linear maps $V \to W$ form a vector space, and $f \mapsto [f]^{\mathcal A}_{\mathcal B}$ is an isomorphism with $M(m, n, \K)$.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## Isomorphisms: the same space with different names (p. 74)

In lesson L14 you saw what a linear map is, the kernel $\Ker f$, the image $\Imm f$ and the rank–nullity theorem. Here we ask: when do two different vector spaces behave **in exactly the same way**?

A writing convention, as in the handouts: the vectors of $\K^n$ are **columns**; in the text, to save space, we often write them as rows, like $(1, 2)$. In the exam papers you also find the notation ${}^t(1, 2)$, that is "the transpose of the row $(1, 2)$", which is again the column.

### An example to start: polynomials and triples of numbers

Take the space $\R_2[x]$ of polynomials of degree at most 2. A polynomial $a + bx + cx^2$ is determined by its three coefficients, so we can pair it with the triple $(a, b, c) \in \R^3$. Look at what happens to the calculations:

| In $\R_2[x]$ | In $\R^3$ |
|---|---|
| $p = 1 + 2x + 3x^2$ | $(1, 2, 3)$ |
| $q = -1 + x^2$ | $(-1, 0, 1)$ |
| $p + q = 2x + 4x^2$ | $(1, 2, 3) + (-1, 0, 1) = (0, 2, 4)$ |
| $2q = -2 + 2x^2$ | $2 \cdot (-1, 0, 1) = (-2, 0, 2)$ |

Adding polynomials and then taking the coefficients gives the same result as taking the coefficients and then adding the triples. The same for multiples. Moreover the pairing is **one-to-one**: each polynomial corresponds to exactly one triple and each triple to exactly one polynomial. From the point of view of linear algebra, $\R_2[x]$ and $\R^3$ are **the same space with different names**. The technical name is *isomorphic* (from Greek: "of the same shape").

### The definition

Remember three words about functions (you see them in detail in Discrete Mathematics). A function $f : V \to W$ is:

- **injective** if different vectors have different images; for a linear map this is equivalent to $\Ker f = \{0\}$ (Proposition 14.11);
- **surjective** if every $w \in W$ is the image of some $v \in V$, that is $\Imm f = W$;
- **bijective** if it is both injective and surjective. In this case every $w \in W$ is the image of **one and only one** $v$, and you can define the **inverse** function $f^{-1} : W \to V$ that goes the other way: $f^{-1}(f(v)) = v$ and $f(f^{-1}(w)) = w$.

> [!DEF] 15.1 · Isomorphism and isomorphic spaces
> A linear map $f : V \to W$ is an **isomorphism** if it is bijective. (Recall that a function $f$ is bijective if and only if it is both injective and surjective.)
>
> We say that two vector spaces $V$ and $W$ over the same field $\K$ are **isomorphic** if there exists an isomorphism $f : V \to W$.

Piece by piece:

- "linear map" comes first of all: a function that is bijective but not linear is **not** an isomorphism of vector spaces.
- "bijective" is checked in two halves: $\Ker f = \{0\}$ (injective) and $\Imm f = W$ (surjective).
- "over the same field": you compare spaces with the same scalars, for example two real spaces.
- "isomorphic" is a property of the **pair** of spaces: it is enough that **one** isomorphism between them exists, even if many other linear maps between the same spaces are not.

> [!EXAMPLE] · three maps, only one is an isomorphism
> **(a)** $f = L_A : \R^2 \to \R^2$ with $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, that is $f(x, y) = (2x + y,\ x + y)$.
> Kernel: $2x + y = 0$ and $x + y = 0$; subtracting the two equations what remains is $x = 0$, and then $y = 0$. So $\Ker f = \{0\}$ and $f$ is injective. By the rank–nullity theorem $\dim \Imm f = 2 - 0 = 2$, so $\Imm f = \R^2$ and $f$ is surjective. It is an **isomorphism**.
>
> **(b)** The derivative $D : \R_2[x] \to \R_2[x]$, $D(p) = p'$. Since $D(5) = 0$, the constant polynomial $5$ lies in the kernel: $\Ker D \neq \{0\}$, so $D$ is **not** injective and not an isomorphism. (It is not surjective either: the derivative of a polynomial of degree at most 2 has degree at most 1, so $x^2 \notin \Imm D$.)
>
> **(c)** $g : \R^2 \to \R^3$, $g(x, y) = (x, y, 0)$. It is injective (if $(x, y, 0) = (0, 0, 0)$ then $x = y = 0$) but not surjective: $(0, 0, 1)$ is the image of nothing. It is **not** an isomorphism.

### The inverse of an isomorphism is linear

> [!PROP] 15.2
> If a linear function $f : V \to W$ is bijective, the inverse $f^{-1} : W \to V$ is linear too.

Let us see it on example (a). To find $f^{-1}(a, b)$ we look for $(x, y)$ with $f(x, y) = (a, b)$:

$$\begin{cases} 2x + y = a \\ x + y = b \end{cases} \quad\Longrightarrow\quad x = a - b, \qquad y = b - x = -a + 2b.$$

So $f^{-1}(a, b) = (a - b,\ -a + 2b)$, which is again linear: it is $L_{A^{-1}}$ with $A^{-1} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$. Check: $f(3, 1) = (7, 4)$ and $f^{-1}(7, 4) = (7 - 4,\ -7 + 8) = (3, 1)$.

> [!PROOF] of Proposition 15.2 (from Martelli's book, §4.2.5; the handouts do not include it)
> Let $w, w' \in W$ and $\lambda \in \K$. We call $v = f^{-1}(w)$ and $v' = f^{-1}(w')$, that is $f(v) = w$ and $f(v') = w'$.
> 1. **Sum.** By the linearity of $f$: $f(v + v') = f(v) + f(v') = w + w'$. So $v + v'$ is *the* vector that $f$ sends to $w + w'$, that is $f^{-1}(w + w') = v + v' = f^{-1}(w) + f^{-1}(w')$.
> 2. **Multiples.** $f(\lambda v) = \lambda f(v) = \lambda w$, so $f^{-1}(\lambda w) = \lambda v = \lambda f^{-1}(w)$.
>
> In each step you use that $f$ is bijective: the vector that goes to $w + w'$ (or to $\lambda w$) is **unique**, so it is exactly the one found.

### What the dimensions say

> [!PROP] 15.3
> Let $f : V \to W$ be a linear map.
> 1. If $f$ is injective, then $\dim V \le \dim W$. (Indeed $\dim V = \dim \Imm f \le \dim W$.)
> 2. If $f$ is surjective, then $\dim V \ge \dim W$. (Indeed $\dim V \ge \dim \Imm f = \dim W$.)
> 3. If $f$ is an isomorphism, then $\dim V = \dim W$. (From the two previous points.)

The justifications in brackets use the **rank–nullity theorem** of lesson L14, $\dim V = \dim \Ker f + \dim \Imm f$:

1. if $f$ is injective, $\Ker f = \{0\}$, so $\dim V = 0 + \dim \Imm f$; and $\Imm f$ is a subspace of $W$, so $\dim \Imm f \le \dim W$;
2. if $f$ is surjective, $\Imm f = W$, so $\dim V = \dim \Ker f + \dim W \ge \dim W$;
3. an isomorphism is both injective and surjective, so both inequalities hold.

In practice, **looking only at the dimensions** you can rule out many things:

| Dimensions | Can it be injective? | Can it be surjective? | Can it be an isomorphism? |
|---|---|---|---|
| $\dim V < \dim W$ (for example $\R^2 \to \R^3$) | yes | **never** | **never** |
| $\dim V > \dim W$ (for example $\R^4 \to \R^2$) | **never** | yes | **never** |
| $\dim V = \dim W$ | yes | yes | yes |

> [!PITFALL] The dimensions rule out, they do not guarantee
> $\dim V \le \dim W$ is **not** enough to say that $f$ is injective: the zero map $\R^2 \to \R^3$, $f(v) = 0$, has $\dim V = 2 \le 3$ but kernel equal to the whole of $\R^2$. Proposition 15.3 only says what happens **if** $f$ is injective (or surjective). To prove that a specific $f$ is injective you have to compute the kernel.

### Same dimension, isomorphic spaces

The converse of the last point also holds:

> [!PROP] 15.4
> Let $V$ and $W$ be two finite-dimensional vector spaces. Then
> $$V \text{ and } W \text{ are isomorphic} \iff \dim V = \dim W.$$
> In particular, all the vector spaces over $\K$ of dimension $n$ are isomorphic to $\K^n$.

The handouts specify which isomorphism to use: the map $V \to \K^n$ that sends every vector $v \in V$ to its **coordinates** with respect to a basis of $V$ (you saw them in lesson L13, Definition 13.5). This isomorphism **depends on the choice of the basis**.

> [!EXAMPLE] · the same polynomial, two different coordinate vectors
> In $\R_2[x]$ take the standard basis $\mathcal B = \{1, x, x^2\}$ and the basis $\mathcal B' = \{1,\ x - 1,\ (x - 1)^2\}$. The polynomial $x^2$ has coordinates $(0, 0, 1)$ with respect to $\mathcal B$. With respect to $\mathcal B'$ we look for $a, b, c$ with
> $$x^2 = a \cdot 1 + b\,(x - 1) + c\,(x - 1)^2 = (a - b + c) + (b - 2c)\,x + c\,x^2.$$
> Comparing the coefficients: $c = 1$, then $b - 2c = 0$ gives $b = 2$, then $a - b + c = 0$ gives $a = 1$. So the coordinates are $(1, 2, 1)$. Check: $1 + 2(x - 1) + (x - 1)^2 = 1 + 2x - 2 + x^2 - 2x + 1 = x^2$.
>
> The two bases give two different isomorphisms $\R_2[x] \to \R^3$: the first sends $x^2$ to $(0, 0, 1)$, the second to $(1, 2, 1)$.

Some pairs of isomorphic spaces you will meet often:

| Space | Dimension | It is isomorphic to |
|---|--:|---|
| $\R_n[x]$ (polynomials of degree at most $n$) | $n + 1$ | $\R^{n+1}$ |
| $M(m, n, \R)$ ($m \times n$ matrices) | $mn$ | $\R^{mn}$ |
| $M(2, \R)$ | 4 | $\R^4$, and also $\R_3[x]$ |
| $\C$ seen as a vector space **over $\R$** | 2 | $\R^2$ (the complex plane of lesson L02) |
| the plane $\{(x, y, z) \in \R^3 \mid x + y + z = 0\}$ | 2 | $\R^2$ |

> [!BEYOND] how the isomorphism is built, and a useful shortcut
> **Why $\Leftarrow$ holds** (Martelli, Proposition 4.2.30). If $\dim V = \dim W = n$, choose a basis $v_1, \dots, v_n$ of $V$ and a basis $w_1, \dots, w_n$ of $W$, and define $f$ by imposing $f(v_i) = w_i$ and extending by linearity, $f(\lambda_1 v_1 + \dots + \lambda_n v_n) = \lambda_1 w_1 + \dots + \lambda_n w_n$ (Martelli, Proposition 4.1.18). The image contains all the $w_i$, so $\Imm f = W$; by the rank–nullity theorem $\dim \Ker f = n - n = 0$. So $f$ is bijective.
>
> **The shortcut** (Martelli, Proposition 4.2.24). If $\dim V = \dim W$, for a linear map $f : V \to W$ the three things "injective", "surjective", "isomorphism" are **equivalent**: it is enough to check one. Indeed $\dim \Ker f = 0 \iff \dim \Imm f = n \iff \Imm f = W$. For a square matrix $A$ this is summed up as: $L_A$ is an isomorphism $\iff \det A \neq 0 \iff \rk A = n$.

## Coordinates of a vector (p. 74)

The whole rest of the lesson uses coordinates, so let us go over them calmly. If $\mathcal B = \{v_1, \dots, v_n\}$ is a basis of $V$, every $v \in V$ can be written **in only one way** (Proposition 13.4) as
$$v = \lambda_1 v_1 + \dots + \lambda_n v_n.$$
The column of coefficients is called the **coordinate vector** of $v$ with respect to $\mathcal B$ and is written
$$[v]_{\mathcal B} = \begin{pmatrix} \lambda_1 \\ \vdots \\ \lambda_n \end{pmatrix} \in \K^n.$$

> [!EXAMPLE] · coordinates in a non-standard basis of $\R^2$
> Let $\mathcal B = \{v_1, v_2\}$ with $v_1 = (1, 1)$ and $v_2 = (1, -1)$, and let $v = (3, 1)$. We look for $\lambda_1, \lambda_2$ with $\lambda_1 (1, 1) + \lambda_2 (1, -1) = (3, 1)$:
> $$\begin{cases} \lambda_1 + \lambda_2 = 3 \\ \lambda_1 - \lambda_2 = 1 \end{cases}$$
> Adding the equations: $2\lambda_1 = 4$, that is $\lambda_1 = 2$; then $\lambda_2 = 3 - 2 = 1$. So $[v]_{\mathcal B} = (2, 1)$: to reach $v$ you take two steps along $v_1$ and one along $v_2$.

```graph
title: $v = (3, 1)$ has coordinates $(2, 1)$ with respect to $\mathcal B = \{v_1, v_2\}$
x: -1 4
y: -2 3
arrow: 0 0 2 2 | accent | dashed | $2v_1$ | nw
arrow: 2 2 3 1 | blue | dashed | $+\,v_2$ | ne
vector: 1 1 | accent | thick | $v_1$ | se
vector: 1 -1 | blue | thick | $v_2$ | se
vector: 3 1 | amber | thick | $v = 2v_1 + v_2$ | se
```

> [!PITFALL] The order of the basis vectors matters
> For coordinates, a basis is an **ordered** list. With $\mathcal B' = \{v_2, v_1\}$ (same vectors, order swapped) the same $v$ has coordinates $(1, 2)$. That is why, even though it is written with curly brackets, $\mathcal B = \{v_1, \dots, v_n\}$ must be read as a list in that order.

## The matrix associated with a linear map (pp. 74–75)

### The idea

In lesson L14 you saw that a linear map respects linear combinations:
$$f(\lambda_1 v_1 + \dots + \lambda_n v_n) = \lambda_1 f(v_1) + \dots + \lambda_n f(v_n).$$
So, if you know the **images of the vectors of a basis**, $f(v_1), \dots, f(v_n)$, you know $f$ everywhere. Each $f(v_j)$ is a vector of $W$: we store it with its $m$ coordinates with respect to a basis $\mathcal C$ of $W$. We get $n$ columns of $m$ numbers: an **$m \times n$ matrix**. This is the associated matrix.

> [!DEF] 15.5 · Associated matrix
> Let $f : V \to W$ be a linear map between vector spaces defined over $\K$. Let moreover
> $$\mathcal B = \{v_1, \dots, v_n\}, \qquad \mathcal C = \{w_1, \dots, w_m\}$$
> be two bases of $V$ and of $W$ respectively. We know that
> $$\begin{aligned} f(v_1) &= a_{11} w_1 + \dots + a_{m1} w_m, \\ &\ \ \vdots \\ f(v_n) &= a_{1n} w_1 + \dots + a_{mn} w_m \end{aligned}$$
> for some set of coefficients $a_{ij} \in \K$. We define the **matrix associated** with $f$ in the bases $\mathcal B$ and $\mathcal C$ as the $m \times n$ matrix
> $$A = (a_{ij})$$
> that collects these coefficients, and we denote it by the symbol $A = [f]^{\mathcal B}_{\mathcal C}$.

Piece by piece:

- **Size $m \times n$**: as many **rows** as the dimension of the **target** space ($m = \dim W$), as many **columns** as the dimension of the **starting** space ($n = \dim V$).
- **The entry $a_{ij}$** is the $i$-th coordinate of $f(v_j)$: the index $j$ says *which vector of the starting basis* you are transforming, the index $i$ says *which coordinate* of the image you are reading.
- **The notation** $[f]^{\mathcal B}_{\mathcal C}$ reminds you that the matrix depends on three things: $f$, $\mathcal B$ and $\mathcal C$. As the handouts say, "the starting basis" $\mathcal B$ goes **at the top**, "the target basis" $\mathcal C$ goes **at the bottom**.
- **Column $j$**, which the handouts call $A^j$, contains the coordinates of $f(v_j)$ with respect to $\mathcal C$:
$$A^j = \begin{pmatrix} a_{1j} \\ \vdots \\ a_{mj} \end{pmatrix} = [f(v_j)]_{\mathcal C}.$$

> [!PITFALL] The coefficients go in a column, not in a row
> In the definition the first equation, $f(v_1) = a_{11} w_1 + \dots + a_{m1} w_m$, fills the **first column**. If you write the coordinates of $f(v_1)$ in the first **row** you get the transpose, which is wrong. In the exam papers the transpose almost always appears among the wrong answers.

> [!METHOD] The associated matrix in three steps
> 1. Compute the images $f(v_1), \dots, f(v_n)$ of the vectors of the **starting** basis, in the given order.
> 2. Write each $f(v_j)$ in coordinates with respect to the **target** basis $\mathcal C$. If $\mathcal C$ is the standard basis of $\K^m$ the coordinates are the components themselves; otherwise solve the system $f(v_j) = x_1 w_1 + \dots + x_m w_m$.
> 3. Put $[f(v_j)]_{\mathcal C}$ in column $j$.
>
> Quick check: the matrix must have $\dim W$ rows and $\dim V$ columns.

### The case of the standard bases

> [!EXAMPLE] 15.6 · The matrix of $L_A$
> The matrix associated with $L_A$ with respect to the standard bases of $\K^n$ and $\K^m$ is exactly $A$. Indeed, by construction, $f(e_j) = a_{1j} e_1 + \dots + a_{mj} e_m$.

With numbers: let $A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 3 \end{pmatrix}$, so $L_A : \R^3 \to \R^2$. Then $L_A(e_1) = A e_1$ is the first column of $A$, that is $(1, 0) = 1 \cdot e_1 + 0 \cdot e_2$; its coordinates with respect to the standard basis are $(1, 0)$, and they end up in the first column. The same for $e_2$ and $e_3$: you find $A$ again. That is why, with the standard bases, the associated matrix of $f(x, y, z) = (x + 2y,\ y + 3z)$ is read off the coefficients: first row $1, 2, 0$, second row $0, 1, 3$.

### An example with polynomials

> [!EXAMPLE] 15.7 · Values of a polynomial at $2$ and at $-2$
> Consider the linear map
> $$f : \R_2[x] \longrightarrow \R^2, \qquad f(p) = \begin{pmatrix} p(2) \\ p(-2) \end{pmatrix}$$
> which assigns to every polynomial its values at $2$ and at $-2$. We write the matrix associated with $f$ in the standard bases $\mathcal B = \{1, x, x^2\}$ of $\R_2[x]$ and $\mathcal C = \{e_1, e_2\}$ of $\R^2$.
>
> **Step 1**, the images of the starting basis:
> - $p = 1$ (the constant polynomial): $p(2) = 1$ and $p(-2) = 1$, so $f(1) = (1, 1)$;
> - $p = x$: $p(2) = 2$ and $p(-2) = -2$, so $f(x) = (2, -2)$;
> - $p = x^2$: $p(2) = 4$ and $p(-2) = (-2)^2 = 4$, so $f(x^2) = (4, 4)$.
>
> **Step 2**: the target basis is the standard one, so the coordinates are the components themselves.
>
> **Step 3**, the three columns side by side:
> $$[f]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 2 & 4 \\ 1 & -2 & 4 \end{pmatrix}.$$
> It is $2 \times 3$: $\dim \R^2 = 2$ rows, $\dim \R_2[x] = 3$ columns.

### Same map, another target basis

> [!EXAMPLE] 15.8 · We change the target basis
> We take the linear map $f$ and the basis $\mathcal B$ as in the previous example, but at the end we take the basis
> $$\mathcal C' = \left\{ \begin{pmatrix} 1 \\ -1 \end{pmatrix}, \begin{pmatrix} 0 \\ 1 \end{pmatrix} \right\}$$
> instead of the standard basis $\mathcal C$. The images are the same as before; step 2 changes: you must compute the coordinates of each image with respect to $\mathcal C'$, that is find $a, b$ with $a (1, -1) + b (0, 1) = (a,\ -a + b)$ equal to the image.
> - $f(1) = (1, 1)$: first component $a = 1$; second $-1 + b = 1$, so $b = 2$. So $(1, 1) = 1 \cdot (1, -1) + 2 \cdot (0, 1)$.
> - $f(x) = (2, -2)$: $a = 2$; $-2 + b = -2$, so $b = 0$. So $(2, -2) = 2 \cdot (1, -1) + 0 \cdot (0, 1)$.
> - $f(x^2) = (4, 4)$: $a = 4$; $-4 + b = 4$, so $b = 8$. So $(4, 4) = 4 \cdot (1, -1) + 8 \cdot (0, 1)$.
>
> The associated matrix therefore becomes
> $$[f]^{\mathcal B}_{\mathcal C'} = \begin{pmatrix} 1 & 2 & 4 \\ 2 & 0 & 8 \end{pmatrix}.$$

The same $f$ has two different matrices: **the associated matrix depends on the bases**. In lesson L16 you will see the formula that goes from one to the other with a product of matrices. In exercise 6 you find a third target basis that makes the matrix simpler.

To solve the systems of step 2 you can use the tool below. It is already set up with the system of exercise 15.13 (exercise 1): the first three columns are the vectors $w_1 = (1, 1, 0)$, $w_2 = (0, 1, 1)$, $w_3 = (1, 0, 1)$ of the target basis, the last is the vector $f(v_1) = (0, 2, 1)$ whose coordinates you are looking for. The solution $(x_1, x_2, x_3)$ is the column $[f(v_1)]_{\mathcal C}$. Then try changing the last column to $(2, 2, -1)$ to get the second column of the matrix.

```widget gauss
title: Coordinates with respect to the target basis = solution of a system
matrice: 1 0 1 0; 1 1 0 2; 0 1 1 1
modo: sistema
modi: sistema, nucleo
```

## Computing images with the matrix (pp. 76–77)

From the associated matrix we can compute the image of any vector. Let $f : V \to W$ be a linear map and let $\mathcal B = \{v_1, \dots, v_n\}$ and $\mathcal C = \{w_1, \dots, w_m\}$ be bases of $V$ and $W$.

> [!PROP] 15.9
> For every $v \in V$ we find
> $$[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C} \cdot [v]_{\mathcal B}.$$

In words: to find the coordinates of $f(v)$ with respect to $\mathcal C$ it is enough to **multiply the associated matrix by the coordinates of $v$** with respect to $\mathcal B$. The handouts' proof, with the steps explained:

1. We write $v$ in the basis $\mathcal B$: $v = \lambda_1 v_1 + \dots + \lambda_n v_n$, so $[v]_{\mathcal B} = (\lambda_1, \dots, \lambda_n)$.
2. By the linearity of $f$: $f(v) = \lambda_1 f(v_1) + \dots + \lambda_n f(v_n)$.
3. Taking coordinates is linear too (it is the isomorphism of Proposition 15.4), so
$$[f(v)]_{\mathcal C} = \lambda_1 [f(v_1)]_{\mathcal C} + \dots + \lambda_n [f(v_n)]_{\mathcal C}.$$
4. But $[f(v_j)]_{\mathcal C}$ is column $j$ of the associated matrix $A = (a_{ij})$. And a combination of the columns with coefficients $\lambda_1, \dots, \lambda_n$ is exactly the row-by-column product $A \cdot (\lambda_1, \dots, \lambda_n)$: component $i$ of the combination is $a_{i1}\lambda_1 + \dots + a_{in}\lambda_n$, that is exactly row $i$ of the product. So the result is $[f]^{\mathcal B}_{\mathcal C} \cdot [v]_{\mathcal B}$. $\square$

> [!REMARK] Every linear map, in coordinates, is an $L_A$
> If we write $x = [v]_{\mathcal B}$, $A = [f]^{\mathcal B}_{\mathcal C}$ and $y = [f(v)]_{\mathcal C}$, then
> $$y = Ax = L_A(x).$$
> This means that, after choosing two bases for $V$ and $W$, any linear map $V \to W$ can be interpreted in coordinates as a map of the form $L_A : \K^n \to \K^m$. It is enough to replace the vectors $v$ and $f(v)$ with their coordinates $x$ and $y$, and use the associated matrix $A$.

The diagram below sums up the remark: you get from $v$ to the coordinates of $f(v)$ by two routes, and the result is the same. At the top you work with the real vectors (polynomials, matrices, …), at the bottom only with columns of numbers.

```graph
title: Two routes, same result: first $f$ then the coordinates, or first the coordinates then $A$
axes: no
grid: no
x: 0 10
y: 0 4.4
text: 2 3.6 | $v \in V$
text: 8 3.6 | $f(v) \in W$
text: 2 0.8 | $[v]_{\mathcal B} \in \K^n$
text: 8 0.8 | $[f(v)]_{\mathcal C} \in \K^m$
arrow: 3.1 3.6 6.8 3.6 | accent | thick
arrow: 3.4 0.8 6.5 0.8 | blue | thick
arrow: 2 3.1 2 1.3 | grey
arrow: 8 3.1 8 1.3 | grey
text: 4.95 4.05 | accent | $f$
text: 4.95 0.35 | blue | $A = [f]^{\mathcal B}_{\mathcal C}$
text: 3.1 2.2 | "coordinates"
text: 6.9 2.2 | "coordinates"
```

> [!EXAMPLE] 15.10 · The image of a polynomial computed with the matrix
> We take again the associated matrix with respect to the standard bases
> $$[f]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 2 & 4 \\ 1 & -2 & 4 \end{pmatrix}.$$
> We use it to compute in coordinates the image of $p(x) = 3x^2 + 5x + 1$, which has as coordinates with respect to $\mathcal B = \{1, x, x^2\}$ its coefficients **in reverse order**: $[p]_{\mathcal B} = (1, 5, 3)$. So $f(p)$ has coordinates
> $$\begin{pmatrix} 1 & 2 & 4 \\ 1 & -2 & 4 \end{pmatrix} \begin{pmatrix} 1 \\ 5 \\ 3 \end{pmatrix} = \begin{pmatrix} 1 \cdot 1 + 2 \cdot 5 + 4 \cdot 3 \\ 1 \cdot 1 - 2 \cdot 5 + 4 \cdot 3 \end{pmatrix} = \begin{pmatrix} 1 + 10 + 12 \\ 1 - 10 + 12 \end{pmatrix} = \begin{pmatrix} 23 \\ 3 \end{pmatrix}.$$
> We check with the definition of $f$: $p(2) = 3 \cdot 4 + 5 \cdot 2 + 1 = 23$ and $p(-2) = 3 \cdot 4 - 10 + 1 = 3$. So $f(p) = (23, 3)$.

> [!NOTE] A cross-reference to correct
> In the handouts, on p. 77, Example 15.10 starts with "In Example 15.8 above, we obtained the associated matrix … with respect to the standard bases". The matrix with respect to the standard bases, $\begin{pmatrix} 1 & 2 & 4 \\ 1 & -2 & 4 \end{pmatrix}$, is the one of Example **15.7**; Example 15.8 uses the basis $\mathcal C'$ at the end.

> [!EXAMPLE] · the same calculation with the basis $\mathcal C'$
> With the matrix of Example 15.8:
> $$[f(p)]_{\mathcal C'} = \begin{pmatrix} 1 & 2 & 4 \\ 2 & 0 & 8 \end{pmatrix} \begin{pmatrix} 1 \\ 5 \\ 3 \end{pmatrix} = \begin{pmatrix} 1 + 10 + 12 \\ 2 + 0 + 24 \end{pmatrix} = \begin{pmatrix} 23 \\ 26 \end{pmatrix}.$$
> Careful: $(23, 26)$ is **not** $f(p)$, they are its coordinates with respect to $\mathcal C'$. To go back to the vector you take the combination: $23 \cdot (1, -1) + 26 \cdot (0, 1) = (23,\ -23 + 26) = (23, 3)$. Same result as before, as it must be.

> [!PITFALL] Coordinates or vector?
> The product $[f]^{\mathcal B}_{\mathcal C} \cdot [v]_{\mathcal B}$ gives the **coordinates** of $f(v)$ with respect to $\mathcal C$. They coincide with $f(v)$ only if $\mathcal C$ is the standard basis of $\K^m$. And before multiplying you must put $v$ **in coordinates** with respect to $\mathcal B$: for a polynomial, the coefficients in the order of the basis (for $\{1, x, x^2\}$: constant term, then $x$, then $x^2$).

## The matrix of the identity (p. 77)

A special case, useful in the future:

> [!PROP] 15.11
> Let $\mathcal B$ be any basis of a space $V$ of dimension $n$. We find
> $$[\id]^{\mathcal B}_{\mathcal B} = I_n.$$

The reason: $\id(v_j) = v_j = 0 \cdot v_1 + \dots + 1 \cdot v_j + \dots + 0 \cdot v_n$, so column $j$ is the vector $e_j$, with a 1 in place $j$ and zeros elsewhere. All the columns together form the identity matrix.

> [!PITFALL] With two different bases the identity does not have matrix $I_n$
> Proposition 15.11 requires the **same** basis at the start and at the end. With $\mathcal B = \{(1, 1), (1, -1)\}$ at the start and the standard basis $\mathcal C$ at the end, the columns are $[\id(v_1)]_{\mathcal C} = (1, 1)$ and $[\id(v_2)]_{\mathcal C} = (1, -1)$:
> $$[\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} \neq I_2.$$
> This is a **change-of-basis matrix**, the topic of lesson L16.

## The space of linear maps (pp. 77–78)

Linear maps can be added and multiplied by a scalar, "point by point". If $V, W$ are vector spaces and $f, g : V \to W$ two linear maps, for $\lambda \in \K$ one defines
$$(f + g)(v) = f(v) + g(v), \qquad (\lambda f)(v) = \lambda f(v).$$
With these two operations the set of all the linear maps between $V$ and $W$ becomes a vector space: the zero is the zero map, and the properties of sum and product are inherited from those of $W$.

> [!EXAMPLE] · adding maps = adding matrices
> Let $f, g : \R^2 \to \R^2$ with $f(x, y) = (x + y,\ 0)$ and $g(x, y) = (x,\ y)$. Then
> $$(f + g)(x, y) = (x + y + x,\ 0 + y) = (2x + y,\ y), \qquad (3f)(x, y) = (3x + 3y,\ 0).$$
> With the standard bases: $[f] = \begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix}$, $[g] = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ and
> $$[f + g] = \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix} = [f] + [g], \qquad [3f] = \begin{pmatrix} 3 & 3 \\ 0 & 0 \end{pmatrix} = 3\,[f].$$

> [!THEOREM] 15.12
> Let $V, W$ be two finite-dimensional vector spaces with bases $\mathcal A = \{v_1, \dots, v_n\}$, $\mathcal B = \{w_1, \dots, w_m\}$, respectively. Then the set of linear maps $f : V \to W$ is a vector space, and the map
> $$f \longmapsto [f]^{\mathcal A}_{\mathcal B}$$
> from the set of linear maps $f : V \to W$ to $M(m, n, \K)$ is an isomorphism.

Piece by piece (careful: here the bases are called $\mathcal A$ and $\mathcal B$, with $\mathcal B$ a basis of $W$):

- **It is linear**: column $j$ of $[f + g]$ is $[f(v_j) + g(v_j)]_{\mathcal B} = [f(v_j)]_{\mathcal B} + [g(v_j)]_{\mathcal B}$, so $[f + g] = [f] + [g]$; in the same way $[\lambda f] = \lambda [f]$. It is what you saw in the example.
- **It is injective**: if $[f] = 0$, all the images $f(v_j)$ are zero, and then $f$ is the zero map.
- **It is surjective**: every matrix $A = (a_{ij})$ is the matrix of some $f$. It is enough to define $f$ on the basis, $f(v_j) = a_{1j} w_1 + \dots + a_{mj} w_m$, and extend by linearity.

In practice: **once the bases are chosen, linear maps and matrices are the same thing**. Everything that is proved for matrices holds for linear maps, and vice versa.

> [!BEYOND] Hom and its dimension
> In Martelli's book (§4.3.4) the set of linear maps $V \to W$ is called $\mathrm{Hom}(V, W)$, from "homomorphism", a synonym of linear map. Since it is isomorphic to $M(m, n, \K)$, it has dimension $mn$ (Corollary 4.3.12). For example the linear maps $\R^3 \to \R^2$ form a space of dimension $2 \cdot 3 = 6$.

One way to see the associated matrix in action is the tool below: a $2 \times 2$ matrix as a transformation of the plane. With $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, the isomorphism of example (a), the columns are the images of $e_1$ and $e_2$ and the unit square becomes a parallelogram of area $|\det A| = 1$. Then try typing $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$: the plane gets squashed onto a line, the kernel is no longer $\{0\}$ and $L_A$ is not an isomorphism.

```widget matrice
title: A $2 \times 2$ matrix as a linear map of the plane
a: 2 1; 1 1
x: 1 1
raggio: 4
```

> [!BEYOND] where to find it in the book
> In Martelli's book: §4.2.5 "Isomorfismi" (pp. 127–128, with the proof of Proposition 15.2 and the shortcut of Proposition 4.2.24), §4.2.7 "Spazi vettoriali isomorfi" (p. 129), §4.3 "Matrice associata" up to §4.3.4 "Hom" (pp. 130–135). Examples 4.3.2 and 4.3.3 of the book are Examples 15.7–15.8 and Exercise 15.13 of the handouts.

## Towards the exam

The Linear Algebra and Geometry test has 10 multiple-choice questions (5 answers, one right) and 2 problems worth 11 points, which are marked only with at least 6 correct answers; it lasts 2 hours, with no calculator, and you may bring only a 4-page handwritten sheet. The 2026/27 exam sessions are on 22/01 and 05/02/2027 at 14:00. All the details are in lesson L01.

**What you need from this lesson for the exam**

1. **The associated matrix** is one of the most frequent quiz questions. In the 2023–2026 exam papers it appears like this: matrix of $T : \R^2 \to \R^2$ with respect to a non-standard basis (exam of 24/01/2024, question 3, and of 15/01/2026, question 8); coordinates $[T(v_1)]_{\mathcal B}$ of an image (05/02/2026, question 6); matrix of a composition (16/01/2025, question 5, which you will see in lesson L16). Tutoring sheet 3 (exercises 4 and 5) trains exactly this.
2. **The dimension arguments** of Proposition 15.3 give the answer in one line: exam of 02/09/2025, question 5.
3. **In the open problems** you are often asked to write the matrix of $T$ in the standard basis and to say whether $T$ is bijective (exam of 10/07/2024, problem 11), or to compute kernel and image starting from the matrix.
4. **The whole part on eigenvalues** (lessons L17–L18) uses the associated matrix: for an endomorphism of $\R_2[x]$ you work with its $3 \times 3$ matrix.

### Three real exam questions, solved

> [!EXAM] Exam of 15/01/2026, question 8
> *The matrix associated with $T : \R^2 \to \R^2$, $T(x, y) = (2x, 3y)$, with respect to the basis $\mathcal B = \{(0, 1), (1, 2)\}$ is …* (meaning $[T]^{\mathcal B}_{\mathcal B}$, the same basis at the start and at the end).
>
> Solution. Step 1: $T(0, 1) = (0, 3)$ and $T(1, 2) = (2, 6)$. Step 2, coordinates with respect to $\mathcal B$: $a (0, 1) + b (1, 2) = (b,\ a + 2b)$.
> - $(0, 3)$: $b = 0$, $a = 3$, so $[T(v_1)]_{\mathcal B} = (3, 0)$;
> - $(2, 6)$: $b = 2$, $a + 4 = 6$ that is $a = 2$, so $[T(v_2)]_{\mathcal B} = (2, 2)$.
>
> Step 3: $[T]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 3 & 2 \\ 0 & 2 \end{pmatrix}$. Among the answers there were also $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$ (the matrix in the standard basis) and $\begin{pmatrix} 0 & 1 \\ 1 & 2 \end{pmatrix}$ (the basis vectors): they are the two classic traps.

> [!EXAM] Exam of 05/02/2026, question 6
> *Given $T(x, y) = (3x,\ x + 2y)$ and the basis $\mathcal B = \{v_1 = (0, 1),\ v_2 = (1, 1)\}$, the coordinate vector $[T(v_1)]_{\mathcal B}$ is …*
>
> Solution. $T(v_1) = T(0, 1) = (0, 2)$. We look for $a, b$ with $a (0, 1) + b (1, 1) = (b,\ a + b) = (0, 2)$: $b = 0$ and $a = 2$. So $[T(v_1)]_{\mathcal B} = (2, 0)$. The most tempting wrong answer was $(0, 2)$, that is $T(v_1)$ itself: but the question asks for the **coordinates**.

> [!EXAM] Exam of 02/09/2025, question 5
> *Let $f : V \to W$ be linear with $\dim V = 4$ and $\dim W = 2$. Which is necessarily true?*
>
> Solution. By the rank–nullity theorem $\dim \Ker f = 4 - \dim \Imm f \ge 4 - 2 = 2$, so the kernel is never $\{0\}$: **$f$ cannot be injective** (it is point 1 of Proposition 15.3 read backwards). The other answers ("it must be surjective", "it cannot be surjective", "it must be injective", "it is an isomorphism") are false: the zero map is not surjective, while $(x_1, x_2, x_3, x_4) \mapsto (x_1, x_2)$ is.

### Mistakes to avoid

- Writing the images **in a row** instead of in a column (you get the transpose).
- Putting $f(v_j)$ in the column instead of its **coordinates** with respect to the target basis.
- Confusing the size: $[f]^{\mathcal B}_{\mathcal C}$ has $\dim W$ rows and $\dim V$ columns.
- Changing the order of the basis vectors: the order of the columns follows the order of $\mathcal B$, the order of the rows follows that of $\mathcal C$.
- For polynomials, forgetting that the coordinates with respect to $\{1, x, x^2\}$ are the coefficients **from the constant term upwards**.

> [!EXAM] The 4-page sheet
> From this lesson three lines are enough: "column $j$ of $[f]^{\mathcal B}_{\mathcal C}$ = $[f(v_j)]_{\mathcal C}$ (start at the top, target at the bottom)"; "$[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C} [v]_{\mathcal B}$"; "$f$ injective $\Rightarrow \dim V \le \dim W$, surjective $\Rightarrow \dim V \ge \dim W$, isomorphic $\iff$ same dimension".

## Quiz

```quiz
Q: Let $f : \R^2 \to \R^3$ be a linear map. Which statement is necessarily true?
- $f$ must be injective.
+ $f$ cannot be surjective.
- $f$ cannot be injective.
- $f$ is an isomorphism.
- $f$ must be surjective.
= $\dim \Imm f \le \dim \R^2 = 2 < 3$, so $\Imm f \neq \R^3$: $f$ is never surjective (Proposition 15.3, point 2). It can be injective ($(x, y) \mapsto (x, y, 0)$) but it does not have to be (the zero map). Similar to the exam of 02/09/2025, question 5.

Q: Which pair of real vector spaces is made of isomorphic spaces?
+ $\R_2[x]$ and $\R^3$
- $\R_2[x]$ and $\R^2$
- $M(2, \R)$ and $\R^3$
- $\R^2$ and $\R^3$
- $M(2, 3, \R)$ and $\R^5$
= Two finite-dimensional spaces are isomorphic if and only if they have the same dimension (Proposition 15.4). $\dim \R_2[x] = 3 = \dim \R^3$. In the other pairs the dimensions are $3$ and $2$, $4$ and $3$, $2$ and $3$, $6$ and $5$.

Q: The matrix associated with $f : \R^3 \to \R^2$, $f(x, y, z) = (x - z,\ 2y + z)$, with respect to the standard bases is:
+ $\begin{pmatrix} 1 & 0 & -1 \\ 0 & 2 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 0 & 2 \\ -1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 & 1 \\ 0 & 2 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & -1 \end{pmatrix}$
= The columns are $f(e_1) = (1, 0)$, $f(e_2) = (0, 2)$, $f(e_3) = (-1, 1)$. The matrix is $2 \times 3$ (target $\R^2$, start $\R^3$) and is read off the coefficients row by row. The second answer is the transpose.

Q: The matrix of the derivative $D : \R_2[x] \to \R_1[x]$, $D(p) = p'$, with respect to the bases $\{1, x, x^2\}$ and $\{1, x\}$ is:
+ $\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$
- $\begin{pmatrix} 0 & 0 \\ 1 & 0 \\ 0 & 2 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 2 \\ 0 & 0 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \end{pmatrix}$
- $\begin{pmatrix} 0 & 2 & 0 \\ 0 & 0 & 1 \end{pmatrix}$
= $D(1) = 0 \to (0, 0)$, $D(x) = 1 \to (1, 0)$, $D(x^2) = 2x \to (0, 2)$: they are the three columns. The size is $2 \times 3$ because $\dim \R_1[x] = 2$ and $\dim \R_2[x] = 3$; the second answer is the transpose, the third has the size of an endomorphism of $\R_2[x]$.

Q: Let $T : \R^2 \to \R^2$, $T(x, y) = (x + y,\ 2x)$, and let $\mathcal B = \{v_1 = (1, 0),\ v_2 = (1, 1)\}$. The coordinate vector $[T(v_1)]_{\mathcal B}$ is:
+ $(-1, 2)$
- $(1, 2)$
- $(2, -1)$
- $(1, 0)$
- $(2, 2)$
= $T(v_1) = (1, 2)$. Coordinates: $a (1, 0) + b (1, 1) = (a + b,\ b) = (1, 2)$ gives $b = 2$ and $a = -1$. The answer $(1, 2)$ is $T(v_1)$ itself, not its coordinates. Similar to the exam of 05/02/2026, question 6.

Q: Let $T(x, y) = (y, x)$ and let $\mathcal B = \{(1, 2), (0, 1)\}$. The matrix $[T]^{\mathcal B}_{\mathcal B}$ is:
+ $\begin{pmatrix} 2 & 1 \\ -3 & -2 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 2 & -3 \\ 1 & -2 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 \\ 1 & 0 \end{pmatrix}$
= $T(1, 2) = (2, 1) = 2 (1, 2) - 3 (0, 1)$ and $T(0, 1) = (1, 0) = 1 (1, 2) - 2 (0, 1)$: the columns are $(2, -3)$ and $(1, -2)$. The second answer is the matrix in the standard basis, the third the transpose, the fifth puts in the images without going to coordinates. Similar to the exams of 24/01/2024 (question 3) and 15/01/2026 (question 8).

Q: Let $f(p) = (p(2), p(-2))$ with matrix $\begin{pmatrix} 1 & 2 & 4 \\ 1 & -2 & 4 \end{pmatrix}$ with respect to $\{1, x, x^2\}$ and to the standard basis. What is $f(1 - x + x^2)$?
+ $(3, 7)$
- $(3, -1)$
- $(7, 3)$
- $(1, 7)$
- $(4, 4)$
= $[p]_{\mathcal B} = (1, -1, 1)$, and the product gives $(1 - 2 + 4,\ 1 + 2 + 4) = (3, 7)$. Direct check: $p(2) = 1 - 2 + 4 = 3$ and $p(-2) = 1 + 2 + 4 = 7$.

Q: The polynomials $(x + 1)^2$, $x + 1$, $1$ form a basis of $\R_2[x]$. The coordinates of $q(x) = (x - 1)^2$ in this basis are:
+ $(1, -4, 4)$
- $(1, -2, 1)$
- $(1, 4, 4)$
- $(4, -4, 1)$
- $(1, 0, 0)$
= We write $x - 1 = (x + 1) - 2$. Then $(x - 1)^2 = (x + 1)^2 - 4(x + 1) + 4 \cdot 1$. Check: $x^2 + 2x + 1 - 4x - 4 + 4 = x^2 - 2x + 1$. The answer $(1, -2, 1)$ is the coordinates in the basis $\{x^2, x, 1\}$. Similar to the exam of 06/09/2024, question 9.

Q: The matrix associated with the inverse of $f = L_A : \R^2 \to \R^2$, with $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, with respect to the standard basis is:
+ $\begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$
- $\begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1/2 & 1 \\ 1 & 1 \end{pmatrix}$
- $f$ is not invertible.
= $\det A = 2 - 1 = 1 \neq 0$, so $f$ is an isomorphism and $f^{-1} = L_{A^{-1}}$ with $A^{-1} = \frac{1}{1}\begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$. Check: $A A^{-1} = I_2$. Similar to the exam of 10/07/2024, problem 11, point 2.

Q: What is the dimension of the vector space of all the linear maps $\R^3 \to \R^2$?
N: 6
= By Theorem 15.12 this space is isomorphic to $M(2, 3, \R)$, the $2 \times 3$ matrices, which has dimension $2 \cdot 3 = 6$.
```

## Exercises

::: exercise intermediate Exercise 15.13 of the handouts: a matrix with non-standard bases over $\C$
Consider the linear map
$$f : \C^2 \longrightarrow \C^3, \qquad f\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x - y \\ 2x \\ y \end{pmatrix}.$$
Find the matrix associated with $f$ with respect to the bases $v_1 = (1, 1)$, $v_2 = (1, -1)$ at the start and $w_1 = (1, 1, 0)$, $w_2 = (0, 1, 1)$, $w_3 = (1, 0, 1)$ at the end.
::: solution
The field is $\C$, but all the numbers involved are real: the calculations are the usual ones.

**Step 1**, the images:
$$f(v_1) = f(1, 1) = (1 - 1,\ 2,\ 1) = (0, 2, 1), \qquad f(v_2) = f(1, -1) = (1 + 1,\ 2,\ -1) = (2, 2, -1).$$

**Step 2**, coordinates with respect to $w_1, w_2, w_3$. We write $a w_1 + b w_2 + c w_3 = (a + c,\ a + b,\ b + c)$.

For $f(v_1) = (0, 2, 1)$:
$$\begin{cases} a + c = 0 \\ a + b = 2 \\ b + c = 1 \end{cases}$$
From the first $c = -a$; the third becomes $b - a = 1$. Adding it to the second: $2b = 3$, so $b = \frac 32$; then $a = 2 - \frac 32 = \frac 12$ and $c = -\frac 12$. So $[f(v_1)]_{\mathcal C} = \left(\frac 12, \frac 32, -\frac 12\right)$.

For $f(v_2) = (2, 2, -1)$:
$$\begin{cases} a + c = 2 \\ a + b = 2 \\ b + c = -1 \end{cases}$$
Subtracting the second from the first: $c - b = 0$, that is $b = c$. The third gives $2c = -1$, so $b = c = -\frac 12$ and $a = 2 - c = \frac 52$. So $[f(v_2)]_{\mathcal C} = \left(\frac 52, -\frac 12, -\frac 12\right)$.

**Step 3**, the columns:
$$[f]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1/2 & 5/2 \\ 3/2 & -1/2 \\ -1/2 & -1/2 \end{pmatrix} = \frac 12 \begin{pmatrix} 1 & 5 \\ 3 & -1 \\ -1 & -1 \end{pmatrix}.$$
It is the result given in the handouts. Check on the first column: $\frac 12 (1, 1, 0) + \frac 32 (0, 1, 1) - \frac 12 (1, 0, 1) = \left(\frac 12 - \frac 12,\ \frac 12 + \frac 32,\ \frac 32 - \frac 12\right) = (0, 2, 1)$.

In lesson L16 you will find the same result again with the change-of-basis formula.
:::

::: exercise basic Isomorphism or not?
For each linear map say whether it is an isomorphism, giving reasons:
(a) $f : \R^2 \to \R^2$, $f(x, y) = (x + y,\ x - y)$;
(b) $g : \R^3 \to \R^2$, $g(x, y, z) = (x, y)$;
(c) $h : \R_2[x] \to \R^3$, $h(p) = (p(0), p(1), p(2))$;
(d) $k : M(2, \R) \to M(2, \R)$, $k(A) = A - {}^tA$.
::: solution
(a) **Yes.** Kernel: $x + y = 0$ and $x - y = 0$; adding, $2x = 0$, so $x = 0$ and $y = 0$. $\Ker f = \{0\}$, so $f$ is injective; since start and target have the same dimension 2, by the rank–nullity theorem $\dim \Imm f = 2$ and $f$ is also surjective. (Alternatively: $\det \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = -2 \neq 0$.)

(b) **No.** $\dim \R^3 = 3 \neq 2 = \dim \R^2$: by Proposition 15.3 an isomorphism requires equal dimensions. Concretely $g(0, 0, 1) = (0, 0)$, so $g$ is not injective.

(c) **Yes.** With the basis $\{1, x, x^2\}$ at the start and the standard one at the end: $h(1) = (1, 1, 1)$, $h(x) = (0, 1, 2)$, $h(x^2) = (0, 1, 4)$, so
$$[h] = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 1 \\ 1 & 2 & 4 \end{pmatrix}, \qquad \det [h] = 1 \cdot (1 \cdot 4 - 1 \cdot 2) = 2 \neq 0$$
(expansion along the first row). The rank is 3, so $\Ker h = \{0\}$ and $\Imm h = \R^3$. In words: a polynomial of degree at most 2 is determined by its values at three points.

(d) **No.** If $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, then $k(A) = \begin{pmatrix} 0 & b - c \\ c - b & 0 \end{pmatrix}$. All the symmetric matrices ($b = c$) end up in 0, for example $k(I_2) = 0$. The kernel is not $\{0\}$ (it has dimension 3), so $k$ is not injective.
:::

::: exercise basic Coordinates in non-standard bases
(a) Find the coordinates of $v = (5, 1)$ with respect to $\mathcal B = \{(1, 1), (1, -1)\}$.
(b) Find the coordinates of $p(x) = 2x^2 - x + 3$ with respect to $\{1, x, x^2\}$ and with respect to $\mathcal B' = \{1,\ x - 1,\ (x - 1)^2\}$.
::: solution
(a) $\lambda_1 (1, 1) + \lambda_2 (1, -1) = (5, 1)$ gives $\lambda_1 + \lambda_2 = 5$ and $\lambda_1 - \lambda_2 = 1$. Adding: $2\lambda_1 = 6$, $\lambda_1 = 3$; then $\lambda_2 = 2$. So $[v]_{\mathcal B} = (3, 2)$. Check: $3(1, 1) + 2(1, -1) = (5, 1)$.

(b) With respect to $\{1, x, x^2\}$ the coefficients from the constant term upwards are enough: $(3, -1, 2)$.

With respect to $\mathcal B'$ we look for $a, b, c$ with
$$a + b(x - 1) + c(x - 1)^2 = (a - b + c) + (b - 2c)\,x + c\,x^2 = 3 - x + 2x^2.$$
Comparing: $c = 2$; $b - 2c = -1$ gives $b = 3$; $a - b + c = 3$ gives $a = 3 + 3 - 2 = 4$. So $[p]_{\mathcal B'} = (4, 3, 2)$. Check: $4 + 3(x - 1) + 2(x^2 - 2x + 1) = 4 + 3x - 3 + 2x^2 - 4x + 2 = 2x^2 - x + 3$.
:::

::: exercise basic Matrix in the standard bases and image of a vector
Let $f : \R^3 \to \R^2$, $f(x, y, z) = (x + 2y,\ y - z)$. Write the associated matrix with respect to the standard bases and use it to compute $f(1, 1, 1)$ and $f(2, -1, 3)$.
::: solution
Columns: $f(e_1) = (1, 0)$, $f(e_2) = (2, 1)$, $f(e_3) = (0, -1)$, so
$$[f] = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & -1 \end{pmatrix}.$$
With the standard bases coordinates and vectors coincide:
$$[f]\begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 + 2 + 0 \\ 0 + 1 - 1 \end{pmatrix} = \begin{pmatrix} 3 \\ 0 \end{pmatrix}, \qquad [f]\begin{pmatrix} 2 \\ -1 \\ 3 \end{pmatrix} = \begin{pmatrix} 2 - 2 + 0 \\ 0 - 1 - 3 \end{pmatrix} = \begin{pmatrix} 0 \\ -4 \end{pmatrix}.$$
Direct check: $f(2, -1, 3) = (2 - 2,\ -1 - 3) = (0, -4)$.
:::

::: exercise intermediate The matrix of the derivative
Let $D : \R_3[x] \to \R_2[x]$, $D(p) = p'$. Write $[D]$ with respect to the bases $\{1, x, x^2, x^3\}$ and $\{1, x, x^2\}$, and use it to compute the derivative of $q(x) = 1 + 2x - x^2 + 4x^3$. What are $\dim \Ker D$ and $\dim \Imm D$?
::: solution
Images of the starting basis: $D(1) = 0$, $D(x) = 1$, $D(x^2) = 2x$, $D(x^3) = 3x^2$. Coordinates with respect to $\{1, x, x^2\}$: $(0, 0, 0)$, $(1, 0, 0)$, $(0, 2, 0)$, $(0, 0, 3)$. So
$$[D] = \begin{pmatrix} 0 & 1 & 0 & 0 \\ 0 & 0 & 2 & 0 \\ 0 & 0 & 0 & 3 \end{pmatrix}.$$
$[q] = (1, 2, -1, 4)$, and
$$[D]\begin{pmatrix} 1 \\ 2 \\ -1 \\ 4 \end{pmatrix} = \begin{pmatrix} 2 \\ -2 \\ 12 \end{pmatrix},$$
that is $q'(x) = 2 - 2x + 12x^2$. Direct check: the derivative of $1 + 2x - x^2 + 4x^3$ is $2 - 2x + 12x^2$.

The matrix has rank 3 (three pivots), so $\dim \Imm D = 3$: $D$ is surjective. By the rank–nullity theorem $\dim \Ker D = 4 - 3 = 1$: the kernel is the constant polynomials.
:::

::: exercise intermediate A target basis that simplifies the matrix
Take again $f : \R_2[x] \to \R^2$, $f(p) = (p(2), p(-2))$, with $\mathcal B = \{1, x, x^2\}$ at the start. (a) Compute $[f]^{\mathcal B}_{\mathcal C''}$ with $\mathcal C'' = \{(1, 1), (1, -1)\}$ at the end. (b) Use it to find $f(3x^2 + 5x + 1) = (23, 3)$ again.
::: solution
(a) The images are $f(1) = (1, 1)$, $f(x) = (2, -2)$, $f(x^2) = (4, 4)$. With respect to $\mathcal C''$:
- $(1, 1) = 1 \cdot (1, 1) + 0 \cdot (1, -1)$, coordinates $(1, 0)$;
- $(2, -2) = 0 \cdot (1, 1) + 2 \cdot (1, -1)$, coordinates $(0, 2)$;
- $(4, 4) = 4 \cdot (1, 1) + 0 \cdot (1, -1)$, coordinates $(4, 0)$.

$$[f]^{\mathcal B}_{\mathcal C''} = \begin{pmatrix} 1 & 0 & 4 \\ 0 & 2 & 0 \end{pmatrix}.$$
There are many zeros: the first row "sees" only the even part of the polynomial ($1$ and $x^2$), the second only the odd part ($x$).

(b) $[p]_{\mathcal B} = (1, 5, 3)$ and
$$\begin{pmatrix} 1 & 0 & 4 \\ 0 & 2 & 0 \end{pmatrix}\begin{pmatrix} 1 \\ 5 \\ 3 \end{pmatrix} = \begin{pmatrix} 13 \\ 10 \end{pmatrix}.$$
They are the coordinates with respect to $\mathcal C''$: $13 (1, 1) + 10 (1, -1) = (23, 3)$.
:::

::: exercise intermediate An isomorphism built with a basis
In $\R_1[x]$ consider the basis $\mathcal B = \{1 + x,\ 1 - x\}$. Write explicitly the isomorphism $\Phi : \R_1[x] \to \R^2$ that sends $p$ to $[p]_{\mathcal B}$, and its inverse. What is $\Phi(3 + x)$?
::: solution
Let $p = a + bx$. We look for $\alpha, \beta$ with $\alpha(1 + x) + \beta(1 - x) = (\alpha + \beta) + (\alpha - \beta)x = a + bx$:
$$\begin{cases} \alpha + \beta = a \\ \alpha - \beta = b \end{cases} \quad\Longrightarrow\quad \alpha = \frac{a + b}{2}, \qquad \beta = \frac{a - b}{2}.$$
So
$$\Phi(a + bx) = \left(\frac{a + b}{2},\ \frac{a - b}{2}\right), \qquad \Phi^{-1}(\alpha, \beta) = \alpha(1 + x) + \beta(1 - x) = (\alpha + \beta) + (\alpha - \beta)x.$$
Both are linear (as Proposition 15.2 predicts). For $p = 3 + x$: $\Phi(3 + x) = (2, 1)$. Check: $2(1 + x) + 1(1 - x) = 3 + x$.
:::

::: exercise intermediate A matrix from $M(2, \R)$ to $\R_2[x]$ (tutoring sheet 3, exercise 4)
Compute the matrix associated with $T : M(2, \R) \to \R_2[x]$,
$$T\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ax^2 + (b + c)x + d,$$
from the basis $\mathcal A = \left\{ \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}, \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}, \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \right\}$ to the basis $\mathcal B = \{1, x, x^2\}$. What can you say about $\Ker T$ and $\Imm T$?
::: solution
The matrix will be $3 \times 4$ ($\dim \R_2[x] = 3$, $\dim M(2, \R) = 4$). We call $A_1, \dots, A_4$ the matrices of the basis.
- $T(A_1)$: $a = 1$, $b = c = 0$, $d = -1$, so $T(A_1) = x^2 - 1$, coordinates $(-1, 0, 1)$ (constant term, $x$, $x^2$).
- $T(A_2)$: $a = 0$, $b = c = 1$, $d = 0$, so $T(A_2) = 2x$, coordinates $(0, 2, 0)$.
- $T(A_3)$: $a = 0$, $b = 1$, $c = -1$, $d = 0$, so $T(A_3) = 0$, coordinates $(0, 0, 0)$.
- $T(A_4)$: $a = 1$, $b = c = 0$, $d = 1$, so $T(A_4) = x^2 + 1$, coordinates $(1, 0, 1)$.

$$[T]^{\mathcal A}_{\mathcal B} = \begin{pmatrix} -1 & 0 & 0 & 1 \\ 0 & 2 & 0 & 0 \\ 1 & 0 & 0 & 1 \end{pmatrix}.$$
Columns 1, 2 and 4 are independent (1 and 4 have sum $(0, 0, 2)$ and difference $(2, 0, 0)$, 2 is $(0, 2, 0)$), so the rank is 3: $T$ is surjective, $\Imm T = \R_2[x]$. By the rank–nullity theorem $\dim \Ker T = 4 - 3 = 1$, and the zero column says that $A_3 \in \Ker T$: $\Ker T = \Span(A_3)$, the skew-symmetric matrices.
:::

::: exercise hard Injective if and only if surjective
Let $f : V \to W$ be linear with $\dim V = \dim W = n$. Prove that $f$ is injective if and only if it is surjective. Then show with an example that the hypothesis $\dim V = \dim W$ cannot be dropped.
::: solution
By the rank–nullity theorem, $n = \dim \Ker f + \dim \Imm f$.

($\Rightarrow$) If $f$ is injective, $\Ker f = \{0\}$, so $\dim \Imm f = n = \dim W$. A subspace of $W$ with the same dimension as $W$ is the whole of $W$: a basis of it is made of $n$ independent vectors of $W$, which by Theorem 7.12 are a basis of $W$. So $\Imm f = W$: $f$ is surjective.

($\Leftarrow$) If $f$ is surjective, $\dim \Imm f = \dim W = n$, so $\dim \Ker f = n - n = 0$, that is $\Ker f = \{0\}$: $f$ is injective.

Without the hypothesis: $g : \R^2 \to \R^3$, $g(x, y) = (x, y, 0)$ is injective but not surjective; $h : \R^3 \to \R^2$, $h(x, y, z) = (x, y)$ is surjective but not injective.
:::

::: exercise exam As at the exam: a basis that makes the matrix simple
Let $f : \R_2[x] \to \R^2$, $f(p) = (p(1),\ p'(1))$.
(1) Write the matrix associated with $f$ with respect to the bases $\mathcal B = \{1, x, x^2\}$ and $\mathcal C = \{e_1, e_2\}$.
(2) Find $\Ker f$ and $\Imm f$; is $f$ injective? Is it surjective?
(3) Write the matrix of $f$ with respect to $\mathcal B' = \{1,\ x - 1,\ (x - 1)^2\}$ at the start and $\mathcal C$ at the end.
::: solution
(1) $f(1) = (1, 0)$ (the derivative of a constant is 0); $f(x) = (1, 1)$; $f(x^2) = (1, 2)$ because $(x^2)' = 2x$ is 2 at 1. So
$$[f]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 2 \end{pmatrix}.$$

(2) The matrix is already in row echelon form with two pivots: rank 2. So $\dim \Imm f = 2$ and $\Imm f = \R^2$: **$f$ is surjective**. By the rank–nullity theorem $\dim \Ker f = 3 - 2 = 1$: **it is not injective**. The kernel: $a + b + c = 0$ and $b + 2c = 0$ (where $p = a + bx + cx^2$). Setting $c = t$: $b = -2t$, $a = -b - c = t$. So $p = t(1 - 2x + x^2) = t(x - 1)^2$ and
$$\Ker f = \Span\big((x - 1)^2\big).$$
Check: $(x - 1)^2$ is 0 at 1, and its derivative $2(x - 1)$ is 0 at 1.

(3) $f(1) = (1, 0)$; $f(x - 1) = (0, 1)$ because $x - 1$ is 0 at 1 and has derivative 1; $f((x - 1)^2) = (0, 0)$ by point (2). So
$$[f]^{\mathcal B'}_{\mathcal C} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}.$$
With the basis "centred at 1" the matrix is almost the identity: you read straight away that $f$ is surjective and that the third basis vector spans the kernel.
:::

::: exercise exam As at the exam: non-standard bases at the start and at the end
Let $T : \R^3 \to \R^2$, $T(a, b, c) = (a + b,\ b - c)$, and let $\mathcal B = \{(1, 0, 0), (1, 1, 0), (1, 1, 1)\}$ be a basis of $\R^3$ and $\mathcal C = \{(1, 1), (0, 1)\}$ a basis of $\R^2$.
(1) Compute $[T]^{\mathcal B}_{\mathcal C}$.
(2) Compute $[v]_{\mathcal B}$ for $v = (2, 3, 4)$.
(3) Use Proposition 15.9 to compute $T(v)$, and check the result with the definition.
::: solution
(1) The images: $T(1, 0, 0) = (1, 0)$, $T(1, 1, 0) = (2, 1)$, $T(1, 1, 1) = (2, 0)$. Coordinates with respect to $\mathcal C$: $\alpha (1, 1) + \beta (0, 1) = (\alpha,\ \alpha + \beta)$, so $\alpha$ is the first component and $\beta$ = second component $- \alpha$.
- $(1, 0)$: $\alpha = 1$, $\beta = -1$;
- $(2, 1)$: $\alpha = 2$, $\beta = -1$;
- $(2, 0)$: $\alpha = 2$, $\beta = -2$.

$$[T]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 2 & 2 \\ -1 & -1 & -2 \end{pmatrix}.$$

(2) $x (1, 0, 0) + y (1, 1, 0) + z (1, 1, 1) = (x + y + z,\ y + z,\ z) = (2, 3, 4)$: from the last $z = 4$, then $y = 3 - 4 = -1$, then $x = 2 - (-1) - 4 = -1$. So $[v]_{\mathcal B} = (-1, -1, 4)$.

(3) $$[T(v)]_{\mathcal C} = \begin{pmatrix} 1 & 2 & 2 \\ -1 & -1 & -2 \end{pmatrix}\begin{pmatrix} -1 \\ -1 \\ 4 \end{pmatrix} = \begin{pmatrix} -1 - 2 + 8 \\ 1 + 1 - 8 \end{pmatrix} = \begin{pmatrix} 5 \\ -6 \end{pmatrix}.$$
They are coordinates with respect to $\mathcal C$: $T(v) = 5 (1, 1) - 6 (0, 1) = (5, -1)$. Check with the definition: $T(2, 3, 4) = (2 + 3,\ 3 - 4) = (5, -1)$.
:::

## Review questions

::: question What is an isomorphism? When are two spaces called isomorphic?
A bijective linear map, that is injective ($\Ker f = \{0\}$) and surjective ($\Imm f = W$). Two spaces over the same field are isomorphic if there is at least one isomorphism between them.
:::

::: question Is the inverse of an isomorphism linear? Why?
Yes (Proposition 15.2). If $f(v) = w$ and $f(v') = w'$, then $f(v + v') = w + w'$ and $f(\lambda v) = \lambda w$; since $f$ is bijective, this says that $f^{-1}(w + w') = v + v'$ and $f^{-1}(\lambda w) = \lambda v$.
:::

::: question What can you deduce about the dimensions if $f : V \to W$ is injective? And if it is surjective?
Injective: $\dim V = \dim \Imm f \le \dim W$. Surjective: $\dim V \ge \dim \Imm f = \dim W$. Isomorphism: $\dim V = \dim W$. Everything comes from the rank–nullity theorem.
:::

::: question When are two finite-dimensional vector spaces isomorphic?
If and only if they have the same dimension (Proposition 15.4). In particular every space of dimension $n$ over $\K$ is isomorphic to $\K^n$.
:::

::: question Which isomorphism $V \to \K^n$ do the handouts point to, and what does it depend on?
The map that sends every vector to its coordinates with respect to a basis of $V$. It depends on the basis: with different bases the same vector has different coordinates (for example $x^2$ is $(0, 0, 1)$ in $\{1, x, x^2\}$ and $(1, 2, 1)$ in $\{1, x - 1, (x - 1)^2\}$).
:::

::: question What does the associated matrix $[f]^{\mathcal B}_{\mathcal C}$ look like?
It is an $m \times n$ matrix with $m = \dim W$ and $n = \dim V$; column $j$ contains the coordinates of $f(v_j)$ with respect to $\mathcal C$. The starting basis goes at the top, the target one at the bottom.
:::

::: question What is the matrix associated with $L_A$ with respect to the standard bases?
It is $A$ itself (Example 15.6): $L_A(e_j)$ is column $j$ of $A$, and its coordinates with respect to the standard basis are its components.
:::

::: question How do you compute $f(v)$ using the associated matrix?
You write $v$ in coordinates, $[v]_{\mathcal B}$; you multiply: $[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C}[v]_{\mathcal B}$; finally, if $\mathcal C$ is not the standard basis, you rebuild $f(v)$ as a combination of the vectors of $\mathcal C$ with those coefficients.
:::

::: question Why does the same map have different matrices?
Because the matrix records the coordinates of the images, and the coordinates depend on the bases chosen at the start and at the end (Examples 15.7 and 15.8).
:::

::: question What is $[\id]^{\mathcal B}_{\mathcal B}$? And $[\id]^{\mathcal B}_{\mathcal C}$ with $\mathcal B \neq \mathcal C$?
$[\id]^{\mathcal B}_{\mathcal B} = I_n$ for every basis $\mathcal B$ (Proposition 15.11). With two different bases it is generally not $I_n$: its columns are the coordinates of the vectors of $\mathcal B$ with respect to $\mathcal C$ (it is the change-of-basis matrix of lesson L16).
:::

::: question How do you add two linear maps, and what happens to the matrices?
$(f + g)(v) = f(v) + g(v)$ and $(\lambda f)(v) = \lambda f(v)$. Once the bases are fixed, $[f + g] = [f] + [g]$ and $[\lambda f] = \lambda [f]$.
:::

::: question What does Theorem 15.12 say?
That the linear maps $V \to W$ form a vector space and that, once the bases are fixed, $f \mapsto [f]^{\mathcal A}_{\mathcal B}$ is an isomorphism with $M(m, n, \K)$: every $m \times n$ matrix is the matrix of one and only one linear map.
:::

## Glossary

```glossary
Injective | Different vectors have different images; for a linear map it is equivalent to $\Ker f = \{0\}$.
Surjective | Every vector of the target space is the image of something: $\Imm f = W$.
Bijective | Injective and surjective; then the inverse $f^{-1}$ exists.
Isomorphism | Bijective linear map (Definition 15.1); its inverse is linear.
Isomorphic spaces | Spaces over the same field between which there is an isomorphism; in finite dimension, spaces with the same dimension.
Coordinates $[v]_{\mathcal B}$ | The column of the coefficients that write $v$ as a combination of the vectors of the basis $\mathcal B$, in the order of the basis.
Ordered basis | A basis used as a list: the order of the vectors decides the order of the coordinates and of the columns.
Associated matrix $[f]^{\mathcal B}_{\mathcal C}$ | $m \times n$ matrix whose column $j$ is $[f(v_j)]_{\mathcal C}$ (Definition 15.5).
Starting / target basis | The basis of the domain (at the top in the notation) and that of the codomain (at the bottom).
$L_A$ | The map $x \mapsto Ax$; its matrix in the standard bases is $A$.
Coordinate formula | $[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C}\,[v]_{\mathcal B}$ (Proposition 15.9).
Matrix of the identity | $[\id]^{\mathcal B}_{\mathcal B} = I_n$ for every basis $\mathcal B$ (Proposition 15.11).
Sum of maps | $(f + g)(v) = f(v) + g(v)$; the matrix of the sum is the sum of the matrices.
$\mathrm{Hom}(V, W)$ | Name used in Martelli's book for the space of linear maps $V \to W$; it has dimension $\dim V \cdot \dim W$.
Rank–nullity theorem | $\dim V = \dim \Ker f + \dim \Imm f$ (lesson L14): it is the basis of all the properties about dimensions.
```

## Checklist

```checklist
- I can say what an isomorphism is and check whether a given map is one (kernel, image or determinant).
- I can explain why the inverse of an isomorphism is linear.
- I can use the dimensions to rule out injectivity, surjectivity or isomorphism (Proposition 15.3).
- I know that two finite-dimensional spaces are isomorphic if and only if they have the same dimension, and I can give examples ($\R_2[x] \cong \R^3$, $M(2, \R) \cong \R^4$).
- I can compute the coordinates of a vector or of a polynomial with respect to a non-standard basis, by solving a system.
- I can write the associated matrix $[f]^{\mathcal B}_{\mathcal C}$ in three steps, with the coordinates in columns and the right size.
- I can use $[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C}[v]_{\mathcal B}$ and rebuild $f(v)$ from its coordinates.
- I know that the associated matrix depends on the bases and that $[\id]^{\mathcal B}_{\mathcal B} = I_n$.
- I can add linear maps and I know that, once the bases are fixed, linear maps and $m \times n$ matrices correspond one to one.
- I recognise the quiz traps straight away: transpose, images instead of coordinates, order of the basis.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 15 "Applicazioni lineari II", pp. 74–78: sections 15.A (isomorphisms) and 15.B (associated matrix) are followed in order, with the page next to each heading; definitions, propositions and examples keep their numbering (Definitions 15.1 and 15.5, Propositions 15.2–15.4, 15.9, 15.11, Examples 15.6–15.8 and 15.10, Theorem 15.12); Exercise 15.13 of section 15.C is worked out in the exercises.
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §4.2.5 and §4.2.7 (isomorphisms, with the proof of Proposition 15.2 and Proposition 4.2.24), §4.3.1–4.3.4 (associated matrix, properties, Hom).
- **Exam**: exam sessions of 24/01/2024 (question 3), 10/07/2024 (problem 11), 06/09/2024 (question 9), 16/01/2025 (question 5), 02/09/2025 (question 5), 15/01/2026 (question 8), 05/02/2026 (question 6); tutoring sheet 3, 2025/26 (exercises 4 and 5). Official papers and solutions on the 2025/26 Moodle ([id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); the solutions reported here are written from scratch.
- The **"Beyond the handouts"** parts (the proof of Proposition 15.2, the construction of the isomorphism, the shortcut for equal dimensions, Hom, the added examples and exercises) serve to connect the lesson to the rest of the course and to the exam.
