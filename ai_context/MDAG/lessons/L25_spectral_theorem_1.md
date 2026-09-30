---
course: MDAG
module: AG
lesson: L25
title: Spectral theorem I
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Linear Algebra and Geometry · Channels A, B and C · Lesson L25
description: >-
  Notes on lesson L25 of Linear Algebra and Geometry (MDAG, part 2): Hermitian products on complex spaces, Hermitian
  matrices, associated matrix, self-adjoint endomorphisms and invariant subspaces, with exam-style quizzes and worked
  exercises.
lede: >-
  To do geometry with complex vectors you need a product that gives real, positive lengths: it is the Hermitian
  product, with a conjugation in the right place. Then come Hermitian matrices (${}^tH = \bar H$) and self-adjoint
  endomorphisms, $\langle T(v), w \rangle = \langle v, T(w) \rangle$: they are the protagonists of the spectral
  theorem of the next lesson.
material: handouts
facts:
  Handouts: lesson 25 · pp. 129–133
  Book: Martelli, §11.1 and §11.2
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 100–130 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 25 "Teorema spettrale I"; B. Martelli, Geometria e algebra lineare, §11.1–11.2
italian_file: L25_teorema_spettrale_1.html
html_notes: notes/MDAG/L25_spectral_theorem_1.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L25_teorema_spettrale_1.md
---

## In brief

- On $\C^n$ the product "copied from the real case", $x_1 y_1 + \dots + x_n y_n$, does not measure lengths: the vector $(1, i)$ would have "squared length" $1 + i^2 = 0$. The remedy is to **conjugate the second vector**: it is the **Hermitian product**.
- A Hermitian product is linear in the first slot and satisfies $\langle v, w \rangle = \overline{\langle w, v \rangle}$. It follows that $\langle v, \lambda w \rangle = \bar\lambda \langle v, w \rangle$ (it is **sesquilinear**) and, above all, that $\langle v, v \rangle$ is **always real**.
- If $\langle v, v \rangle > 0$ for every $v \neq 0$ the product is **positive definite**: norm, orthogonality, orthonormal bases and Gram–Schmidt work as in the real case. The basic example is the **Euclidean Hermitian product** $\langle x, y \rangle = {}^t x\, \bar y = x_1 \bar y_1 + \dots + x_n \bar y_n$.
- A **Hermitian matrix** satisfies ${}^tH = \bar H$, that is $H_{ij} = \overline{H_{ji}}$: the diagonal is real and the symmetric entries are conjugate. A **real** matrix is Hermitian if and only if it is **symmetric**.
- Every Hermitian product on $\C^n$ is $g_H(x, y) = {}^t x\, H\, \bar y$ with $H$ Hermitian: the coefficient of $x_i \bar y_j$ is $H_{ij}$.
- An endomorphism is **self-adjoint** if $\langle T(v), w \rangle = \langle v, T(w) \rangle$. With respect to an **orthonormal** basis it is self-adjoint if and only if its matrix is Hermitian (in the real case: symmetric). With a non-orthonormal basis this criterion does not hold.
- A subspace $U$ is **$T$-invariant** if $T(U) \subseteq U$. If $T$ is self-adjoint and $U$ is invariant, $U^\perp$ is invariant too: it is the key step of the spectral theorem (lesson L26).
- At the exam this lesson is usually worth a quiz question (in 9 of the 15 exam sessions 2023–2026): "which formula is a Hermitian product?", "which matrix is Hermitian?", "which map is self-adjoint?".

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## Hermitian products (pp. 129–130)

In lessons L19–L21 scalar products were defined on **real** vector spaces. Let us try to use the same formula on $\C^2$, the space of pairs of complex numbers, and compute the "length" of the vector $x = (1, i)$:

$$x_1 x_1 + x_2 x_2 = 1 \cdot 1 + i \cdot i = 1 + i^2 = 1 - 1 = 0.$$

A **non-zero** vector with length zero: geometry breaks down. With $x = (i, 0)$ it is even worse: $i \cdot i = -1$, a negative "squared length".

The cure comes from the modulus of complex numbers (lesson L02): $\lvert z \rvert^2 = z \bar z$, where $\bar z$ is the **conjugate**. If in the product you conjugate the coordinates of the **second** vector, the vector $(1, i)$ becomes

$$x_1 \bar x_1 + x_2 \bar x_2 = 1 \cdot 1 + i \cdot (-i) = 1 + 1 = 2,$$

that is $\lvert x_1 \rvert^2 + \lvert x_2 \rvert^2$: a real, positive number, as a squared length should be.

> [!NOTE] Reminder on conjugation (lesson L02)
> If $z = a + bi$, the conjugate is $\bar z = a - bi$. These rules are needed:
> - $\overline{z + w} = \bar z + \bar w$ and $\overline{z w} = \bar z\, \bar w$ (conjugation respects sums and products; for the product: $\overline{(a + bi)(c + di)} = (ac - bd) - (ad + bc)i = (a - bi)(c - di)$);
> - $\bar{\bar z} = z$;
> - $z$ is real if and only if $z = \bar z$;
> - $z \bar z = a^2 + b^2 = \lvert z \rvert^2$, real and non-negative, zero only for $z = 0$.

The handouts translate the idea into axioms, as for scalar products.

> [!DEF] 25.1 · Hermitian product
> Let $V$ be a complex vector space. A **Hermitian product** on $V$ is a map
> $$V \times V \longrightarrow \C, \qquad (v, w) \longmapsto \langle v, w \rangle$$
> that satisfies the following axioms:
> 1. $\langle v + v', w \rangle = \langle v, w \rangle + \langle v', w \rangle$,
> 2. $\langle \lambda v, w \rangle = \lambda \langle v, w \rangle$,
> 3. $\langle v, w \rangle = \overline{\langle w, v \rangle}$,
>
> for every $v, v', w \in V$ and every $\lambda \in \C$.

Piece by piece:

- **complex vector space**: the scalars are complex numbers, and the result $\langle v, w \rangle$ is a complex number;
- (1) and (2) say that the product is **linear in the first slot**, exactly like a scalar product;
- (3) is the difference: swapping the two vectors the result **is conjugated**. In the real case it was $\langle v, w \rangle = \langle w, v \rangle$.

From the axioms the handouts derive other properties, for every $v, w, w' \in V$ and $\lambda \in \C$:

4. $\langle v, w + w' \rangle = \langle v, w \rangle + \langle v, w' \rangle$;
5. $\langle v, \lambda w \rangle = \bar\lambda \langle v, w \rangle$;
6. $\langle 0, w \rangle = \langle v, 0 \rangle = 0$;
7. $\langle v, v \rangle$ is a **real number**, for every $v \in V$.

The proofs are short and use only (1), (2), (3) and the rules of conjugation.

- **(5)**, as in the handouts: $\langle v, \lambda w \rangle \overset{(3)}{=} \overline{\langle \lambda w, v \rangle} \overset{(2)}{=} \overline{\lambda \langle w, v \rangle} = \bar\lambda\, \overline{\langle w, v \rangle} \overset{(3)}{=} \bar\lambda \langle v, w \rangle$.
- **(4)**, in the same way: $\langle v, w + w' \rangle = \overline{\langle w + w', v \rangle} = \overline{\langle w, v \rangle + \langle w', v \rangle} = \overline{\langle w, v \rangle} + \overline{\langle w', v \rangle} = \langle v, w \rangle + \langle v, w' \rangle$.
- **(6)**: with $\lambda = 0$ in (2), $\langle 0, w \rangle = \langle 0 \cdot 0, w \rangle = 0 \cdot \langle 0, w \rangle = 0$; then $\langle v, 0 \rangle = \overline{\langle 0, v \rangle} = \bar 0 = 0$.
- **(7)**: with $w = v$, axiom (3) says $\langle v, v \rangle = \overline{\langle v, v \rangle}$, and a number equal to its own conjugate is real.

The handouts say it explicitly: **the conjugation in (3) is a trick to make $\langle v, v \rangle$ a real number.** Only then does it make sense to ask whether it is positive.

> [!REMARK] Linear one and a half times (p. 130)
> Axioms (1), (2) and property (4) are the same as for scalar products, while (5) is different: the Hermitian product is **linear on the left** and **antilinear on the right**. Putting the two things together we say that it is **sesquilinear** instead of bilinear, from the Latin *sesqui*, which means "one and a half": in a certain sense the Hermitian product is linear one and a half times, but not twice.

| | Scalar product (real) | Hermitian product (complex) |
|---|---|---|
| scalars and result | real numbers | complex numbers |
| first slot | linear | linear |
| second slot | linear: $\langle v, \lambda w \rangle = \lambda \langle v, w \rangle$ | antilinear: $\langle v, \lambda w \rangle = \bar\lambda \langle v, w \rangle$ |
| swap | $\langle v, w \rangle = \langle w, v \rangle$ | $\langle v, w \rangle = \overline{\langle w, v \rangle}$ |
| $\langle v, v \rangle$ | real | real (property 7) |
| associated matrix | symmetric | Hermitian |

> [!PITFALL] A scalar comes out conjugated only from the right
> $\langle \lambda v, w \rangle = \lambda \langle v, w \rangle$ but $\langle v, \lambda w \rangle = \bar\lambda \langle v, w \rangle$. With the Euclidean Hermitian product (next section) and $v = w = (1, 0)$: $\langle i v, v \rangle = i$, while $\langle v, i v \rangle = \bar i = -i$. In this course, as in the handouts and in the book, the product is linear in the **first** slot: some physics texts make the opposite choice.

Since $\langle v, v \rangle$ is real, it makes sense to ask whether it is positive.

> [!DEF] 25.2 · Positive definite Hermitian product
> A Hermitian product is **positive definite** if $\langle v, v \rangle > 0$ for every $v \neq 0$.

With a positive definite Hermitian product the constructions of the real case are repeated. The **norm** of a vector is

$$\lVert v \rVert = \sqrt{\langle v, v \rangle},$$

two vectors are **orthogonal** if $\langle v, w \rangle = 0$ (and then also $\langle w, v \rangle = \bar 0 = 0$), we talk about the **orthogonal space** $U^\perp$ and about **orthonormal bases**, and the **Gram–Schmidt** process works in this context too.

## The Euclidean Hermitian product (p. 130)

> [!EXAMPLE] 25.3 · The Euclidean Hermitian product
> If $x \in \C^n$ is a vector and, more generally, $A \in M(m, n, \C)$ is a matrix with complex entries, we denote by $\bar x$ and $\bar A$ the vector or the matrix obtained by conjugating every single entry. The **Euclidean Hermitian product** on $\C^n$ is given by
> $$\langle x, y \rangle = {}^t x\, \bar y.$$
> It really is a Hermitian product, analogous to the Euclidean scalar product: the conjugation on the variable $y$ makes axiom (3) hold, indeed
> $$\overline{\langle y, x \rangle} = \overline{{}^t y\, \bar x} = {}^t \bar y\, x = {}^t x\, \bar y = \langle x, y \rangle.$$
> As in the real case, the Euclidean Hermitian product is positive definite, because for every non-zero $x \in \C^n$ we find
> $$\langle x, x \rangle = {}^t x\, \bar x = x_1 \bar x_1 + \dots + x_n \bar x_n = \lvert x_1 \rvert^2 + \dots + \lvert x_n \rvert^2 > 0.$$

In coordinates: $\langle x, y \rangle = x_1 \bar y_1 + x_2 \bar y_2 + \dots + x_n \bar y_n$. In the chain that checks axiom (3), the second-to-last step uses the fact that ${}^t \bar y\, x$ and ${}^t x\, \bar y$ are the same sum $\sum_k \bar y_k x_k$ written in another order.

> [!EXAMPLE] Computations with the Euclidean Hermitian product
> Let $x = (1, i)$ and $y = (2, 1 + i)$ in $\C^2$.
> - $\langle x, y \rangle = 1 \cdot \bar 2 + i \cdot \overline{1 + i} = 2 + i(1 - i) = 2 + i - i^2 = 3 + i$.
> - $\langle y, x \rangle = 2 \cdot \bar 1 + (1 + i) \cdot \bar i = 2 + (1 + i)(-i) = 2 - i - i^2 = 3 - i$: it is the conjugate of $3 + i$, as axiom (3) requires.
> - $\lVert x \rVert^2 = \lvert 1 \rvert^2 + \lvert i \rvert^2 = 2$ and $\lVert y \rVert^2 = \lvert 2 \rvert^2 + \lvert 1 + i \rvert^2 = 4 + 2 = 6$: $\lVert x \rVert = \sqrt 2$, $\lVert y \rVert = \sqrt 6$.

> [!EXAMPLE] Orthogonal vectors and an orthonormal basis of $\C^2$
> $\langle (1, i), (1, -i) \rangle = 1 \cdot 1 + i \cdot \overline{-i} = 1 + i \cdot i = 0$: the two vectors are **orthogonal**. Both have norm $\sqrt 2$, so
> $$\left\{ \tfrac{1}{\sqrt 2}(1, i),\ \tfrac{1}{\sqrt 2}(1, -i) \right\}$$
> is an orthonormal basis of $\C^2$.
>
> You get to the same result with **Gram–Schmidt**, starting from $v_1 = (1, i)$ and $v_2 = (1, 0)$. You set $w_1 = v_1$ and
> $$w_2 = v_2 - \frac{\langle v_2, w_1 \rangle}{\langle w_1, w_1 \rangle} w_1 = (1, 0) - \frac{1}{2}(1, i) = \left(\tfrac 12, -\tfrac i2\right),$$
> where $\langle v_2, w_1 \rangle = 1 \cdot \bar 1 + 0 \cdot \bar i = 1$. Check: $\langle w_2, w_1 \rangle = \frac 12 \cdot 1 + \left(-\frac i2\right) \cdot (-i) = \frac 12 + \frac{i^2}{2} = 0$. Normalising ($\lVert w_2 \rVert^2 = \frac 14 + \frac 14 = \frac 12$) you find $\frac{1}{\sqrt 2}(1, -i)$ again.

> [!PITFALL] The order in the Gram–Schmidt coefficient
> The coefficient is $\frac{\langle v_2, w_1 \rangle}{\langle w_1, w_1 \rangle}$, with the vector to be corrected **on the left**. Writing $\langle w_1, v_2 \rangle$ you get the conjugate and the vector found is no longer orthogonal (in the real case the order did not matter). The reason: you want $\langle v_2 - c\, w_1, w_1 \rangle = 0$, that is $\langle v_2, w_1 \rangle - c \langle w_1, w_1 \rangle = 0$, and $c$ comes out without conjugation only because it is in the **first** slot.

## Hermitian matrices (pp. 130–131)

In scalar products **symmetric** matrices had a central role (lessons L19–L20). In Hermitian products the same role belongs to Hermitian matrices.

> [!DEF] 25.4 · Hermitian matrix
> A **Hermitian matrix** is a complex square matrix $H$ for which
> $${}^t H = \bar H.$$
> In other words $H_{ij} = \overline{H_{ji}}$ holds for every $i, j$.

Piece by piece:

- ${}^t H$ swaps rows and columns, $\bar H$ conjugates every entry: the condition says that **transposing is like conjugating**;
- entry by entry: the one in row $i$ and column $j$ is the **conjugate** of the one in row $j$ and column $i$, its "mirror image" with respect to the diagonal;
- on the diagonal ($i = j$) the condition becomes $H_{ii} = \overline{H_{ii}}$: **the diagonal entries are real**.

The handouts' example:

$$\begin{pmatrix} 2 & 1 + i \\ 1 - i & 1 \end{pmatrix}.$$

The diagonal ($2$ and $1$) is real and the off-diagonal entries are conjugate: $\overline{1 - i} = 1 + i$.

> [!REMARK] Real matrices (p. 131)
> A square matrix with **real** entries is Hermitian if and only if it is **symmetric**: for a real number conjugation changes nothing, so $\bar H = H$ and the condition becomes ${}^t H = H$.

> [!METHOD] Recognising a Hermitian matrix
> 1. The matrix must be **square**.
> 2. The **diagonal** must be **real**: a single $i$ on the diagonal is enough to exclude it.
> 3. Every entry below the diagonal must be the **conjugate** of its mirror above: you change the sign of the imaginary part, **not** that of the real part.

| Matrix | Hermitian? | Why |
|---|---|---|
| $\begin{pmatrix} 1 & 3 - 2i \\ 3 + 2i & -4 \end{pmatrix}$ | yes | real diagonal, $\overline{3 + 2i} = 3 - 2i$ |
| $\begin{pmatrix} 1 & 3 - 2i \\ 3 - 2i & -4 \end{pmatrix}$ | no | it is symmetric, but $\overline{3 - 2i} = 3 + 2i \neq 3 - 2i$ |
| $\begin{pmatrix} 1 & 3 - 2i \\ -3 - 2i & -4 \end{pmatrix}$ | no | $\overline{-3 - 2i} = -3 + 2i$: the sign of the real part has been changed too |
| $\begin{pmatrix} i & 0 \\ 0 & 2 \end{pmatrix}$ | no | the diagonal contains $i$ |
| $\begin{pmatrix} 0 & -i \\ i & 0 \end{pmatrix}$ | yes | $\overline{i} = -i$ |

### From the matrix to the product

A symmetric matrix $S$ defines the scalar product $g_S$ on $\R^n$. In the same way a Hermitian matrix $H$ defines a Hermitian product on $\C^n$:

$$g_H(x, y) = {}^t x\, H\, \bar y.$$

The handouts check axiom (3) with this chain; here is the reason for each step.

$$g_H(x, y) = {}^t x H \bar y \overset{(a)}{=} {}^t\big({}^t x H \bar y\big) \overset{(b)}{=} {}^t \bar y\, {}^t H\, x \overset{(c)}{=} {}^t \bar y\, \bar H x \overset{(d)}{=} \overline{{}^t y H \bar x} = \overline{g_H(y, x)}.$$

- (a) ${}^t x H \bar y$ is a $1 \times 1$ matrix, that is a number, and it is equal to its transpose;
- (b) the transpose of a product is the product of the transposes **in reverse order**, and ${}^t({}^t x) = x$;
- (c) $H$ is Hermitian: ${}^t H = \bar H$;
- (d) conjugation respects products: $\overline{{}^t y H \bar x} = {}^t \bar y\, \bar H\, x$.

Axioms (1) and (2) are checked as for scalar products. Moreover, as for scalar products,

$$g_H(e_i, e_j) = {}^t e_i H \bar e_j = {}^t e_i H e_j = H_{ij},$$

where $e_1, \dots, e_n$ is the canonical basis of $\C^n$ (its vectors are real, so $\bar e_j = e_j$).

In coordinates: $g_H(x, y) = \sum_{i, j} H_{ij}\, x_i \bar y_j$, that is **the coefficient of $x_i \bar y_j$ is $H_{ij}$**. In $\C^2$:

$$g_H(x, y) = H_{11} x_1 \bar y_1 + H_{12} x_1 \bar y_2 + H_{21} x_2 \bar y_1 + H_{22} x_2 \bar y_2.$$

With the handouts' matrix: $g_H(x, y) = 2 x_1 \bar y_1 + (1 + i) x_1 \bar y_2 + (1 - i) x_2 \bar y_1 + x_2 \bar y_2$.

> [!METHOD] Deciding whether a formula is a Hermitian product
> It is the most frequent exam question on this lesson. For a formula on $\C^2$ of the form $a\, x_1 \bar y_1 + b\, x_1 \bar y_2 + c\, x_2 \bar y_1 + d\, x_2 \bar y_2$:
> 1. check that there is the **conjugation on the second vector** in every term (the $y$ with the bar); a formula without bars is bilinear, not Hermitian;
> 2. write the matrix $H = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$: the row is the index of $x$, the column that of $\bar y$;
> 3. check that $H$ is Hermitian: $a$ and $d$ **real**, and $c = \bar b$.

> [!BEYOND] Hermitian does not mean positive definite
> Definition 25.1 does not require positivity. The matrix $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ is Hermitian (it is real and symmetric), so $g(x, y) = x_1 \bar y_1 - x_2 \bar y_2$ is a Hermitian product; however $g(e_2, e_2) = -1 < 0$: it is not positive definite. In the exam quizzes the question is almost always "which one is a Hermitian product", and the right answer may well not be positive definite.

## The associated matrix (p. 131)

As in the real case, a Hermitian product is described by a matrix once a basis is chosen. If $V$ is a complex vector space with a Hermitian product and $\mathcal B = \{v_1, \dots, v_n\}$ is a basis of $V$, the **associated matrix** $H$ is

$$H_{ij} = \langle v_i, v_j \rangle \quad \text{for every } i, j.$$

The handouts use the letter $H$ instead of $S$ because this matrix is not symmetric but **Hermitian**: by axiom (3), $H_{ij} = \langle v_i, v_j \rangle = \overline{\langle v_j, v_i \rangle} = \overline{H_{ji}}$.

For every pair of vectors $v, w \in V$ we have

$$\langle v, w \rangle = {}^t[v]_{\mathcal B} \cdot H \cdot \overline{[w]_{\mathcal B}},$$

where $[v]_{\mathcal B}$ is the vector of the coordinates of $v$ in the basis $\mathcal B$. It is proved exactly as for a scalar product, paying attention to sesquilinearity (the coordinates of $w$ come out conjugated, by property 5). It follows that **any Hermitian product on $\C^n$ is of the form $g_H$** for a Hermitian matrix $H$: just take the canonical basis.

> [!EXAMPLE] The matrix of the Euclidean product in another basis
> In $\C^2$ with the Euclidean Hermitian product we take the basis $\mathcal B = \{b_1, b_2\}$ with $b_1 = (1, i)$ and $b_2 = (0, 1)$.
> - $H_{11} = \langle b_1, b_1 \rangle = 1 + i \cdot \bar i = 2$;
> - $H_{12} = \langle b_1, b_2 \rangle = 1 \cdot \bar 0 + i \cdot \bar 1 = i$;
> - $H_{21} = \langle b_2, b_1 \rangle = 0 \cdot \bar 1 + 1 \cdot \bar i = -i$;
> - $H_{22} = \langle b_2, b_2 \rangle = 1$.
>
> So $H = \begin{pmatrix} 2 & i \\ -i & 1 \end{pmatrix}$, Hermitian. Check of the formula with $v = b_1 + b_2 = (1, 1 + i)$ and $w = b_2 = (0, 1)$:
> - directly, $\langle v, w \rangle = 1 \cdot 0 + (1 + i) \cdot 1 = 1 + i$;
> - with the coordinates $[v]_{\mathcal B} = (1, 1)$ and $[w]_{\mathcal B} = (0, 1)$ (real, so conjugation does not change them): $H \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} i \\ 1 \end{pmatrix}$ and $(1, 1) \begin{pmatrix} i \\ 1 \end{pmatrix} = i + 1$.
>
> Same result.

## Self-adjoint endomorphisms (pp. 132–133)

In this section and in the next one $V$ is a **real** vector space with a positive definite scalar product, or a **complex** vector space with a positive definite Hermitian product.

Let us start with a computation in $\R^2$ with the Euclidean scalar product. Let $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ and compare $\langle A e_1, e_2 \rangle$ with $\langle e_1, A e_2 \rangle$:

- $A e_1 = (2, 1)$ and $\langle (2, 1), (0, 1) \rangle = 1$;
- $A e_2 = (1, 1)$ and $\langle (1, 0), (1, 1) \rangle = 1$.

Equal. With the matrix $B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ instead: $\langle B e_1, e_2 \rangle = \langle (1, 0), (0, 1) \rangle = 0$, but $\langle e_1, B e_2 \rangle = \langle (1, 0), (1, 1) \rangle = 1$. The difference: $A$ is symmetric, $B$ is not. In general, with the Euclidean product, $\langle Av, w \rangle = {}^t v\, {}^t A\, w$ and $\langle v, Aw \rangle = {}^t v\, A\, w$, which coincide for every $v, w$ precisely when ${}^t A = A$.

> [!DEF] 25.5 · Self-adjoint endomorphism
> An endomorphism $T \colon V \to V$ is **self-adjoint** if
> $$\langle T(v), w \rangle = \langle v, T(w) \rangle \quad \text{for every } v, w \in V.$$

Piece by piece:

- an **endomorphism** is a linear map from $V$ to itself (lesson L16);
- "self-adjoint": $T$ can be **moved from one side of the product to the other** without changing the result;
- the definition recalls that of **isometry** (lesson L22), which requires $\langle v, w \rangle = \langle T(v), T(w) \rangle$. The handouts warn: there are analogies, but also important differences.

| | Isometry | Self-adjoint endomorphism |
|---|---|---|
| condition | $\langle T(v), T(w) \rangle = \langle v, w \rangle$ | $\langle T(v), w \rangle = \langle v, T(w) \rangle$ |
| $T$ appears | in both slots | in one slot only |
| matrix in an orthonormal basis (real) | orthogonal: ${}^t A A = I$ | symmetric: ${}^t A = A$ |
| example in $\R^2$ | rotation $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ | $\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ |

As for isometries, the definition translates into a concrete condition on the matrix, **provided the basis is orthonormal**. Let $\mathcal B$ be an orthonormal basis of $V$, $T \colon V \to V$ an endomorphism and $A = [T]^{\mathcal B}_{\mathcal B}$ its associated matrix.

> [!PROP] 25.6
> The endomorphism $T$ is self-adjoint if and only if the matrix $A$ is Hermitian.

The handouts' proof, with the steps explained.

1. **It is enough to check the vectors of the basis.** By bilinearity (or sesquilinearity in the complex case), if the equality of Definition 25.5 holds for $v = v_i$ and $w = v_j$ elements of the basis, it holds for all linear combinations, that is for all vectors.
2. **The matrix of the product is the identity.** The basis is orthonormal, so $\langle v_i, v_j \rangle$ equals $1$ if $i = j$ and $0$ otherwise: the matrix associated with the product is $I_n$, and $\langle v, w \rangle = {}^t[v]_{\mathcal B}\, I_n\, \overline{[w]_{\mathcal B}}$.
3. **First computation.** $[T(v_i)]_{\mathcal B} = A^i$ is column $i$ of $A$, and $[v_j]_{\mathcal B} = e_j$. So
$$\langle T(v_i), v_j \rangle = {}^t A^i\, e_j = A_{ji},$$
that is the $j$-th coordinate of column $i$.
4. **Second computation.** $[v_i]_{\mathcal B} = e_i$ and $[T(v_j)]_{\mathcal B} = A^j$, which must be conjugated:
$$\langle v_i, T(v_j) \rangle = {}^t e_i\, \overline{A^j} = \overline{A_{ij}}.$$
5. **Conclusion.** $T$ is self-adjoint if and only if $A_{ji} = \overline{A_{ij}}$ for every $i, j$, that is if and only if $A$ is Hermitian. The real case is identical, without conjugations: the condition becomes $A_{ji} = A_{ij}$, that is $A$ symmetric.

Taking the canonical basis of $\R^n$ or of $\C^n$, which is orthonormal for the Euclidean product, you get the criterion used in the quizzes.

> [!COROLLARY] 25.7
> Let $A$ be an $n \times n$ matrix. The endomorphism $L_A \colon \C^n \to \C^n$ is self-adjoint with respect to the Euclidean Hermitian product of $\C^n$ if and only if the matrix $A$ is Hermitian. Similarly, if $A$ is real, the endomorphism $L_A \colon \R^n \to \R^n$ is self-adjoint with respect to the Euclidean scalar product of $\R^n$ if and only if the matrix $A$ is symmetric.

> [!METHOD] Is a map given by a formula self-adjoint?
> 1. Write the matrix in the canonical basis: for $T(x, y) = (ax + by,\ cx + dy)$ the matrix is $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ (each **row** contains the coefficients of one **component**).
> 2. Over the reals: self-adjoint if and only if the matrix is **symmetric**, that is $b = c$.
> 3. Over the complex numbers: self-adjoint if and only if the matrix is **Hermitian**: $a$, $d$ real and $c = \bar b$.

> [!EXAMPLE] Three maps of $\C^2$
> - $T(x, y) = \big(x + (1 - i)y,\ (1 + i)x + 2y\big)$ has matrix $\begin{pmatrix} 1 & 1 - i \\ 1 + i & 2 \end{pmatrix}$: real diagonal and $\overline{1 + i} = 1 - i$. It is Hermitian, so $T$ is self-adjoint.
> - $T(x, y) = (ix,\ y)$ has matrix $\begin{pmatrix} i & 0 \\ 0 & 1 \end{pmatrix}$, with $i$ on the diagonal: it is not self-adjoint. Direct check with $v = w = e_1$: $\langle T(e_1), e_1 \rangle = \langle (i, 0), (1, 0) \rangle = i$, while $\langle e_1, T(e_1) \rangle = \langle (1, 0), (i, 0) \rangle = \bar i = -i$.
> - $T(x, y) = (x + iy,\ ix + y)$ has matrix $\begin{pmatrix} 1 & i \\ i & 1 \end{pmatrix}$: it is symmetric, but $\bar i = -i \neq i$, so it is **not** Hermitian and $T$ is not self-adjoint. Over the complex numbers "symmetric" is not enough.

> [!REMARK] The double role of Hermitian matrices (p. 132)
> Hermitian (or symmetric) matrices appear in two roles: as matrices that represent a Hermitian (or scalar) **product**, and as matrices that represent a self-adjoint **endomorphism** with respect to an orthonormal basis. They are two quite distinct objects, even though they are represented by the same kind of matrix: the first takes two vectors and returns a number, the second turns a vector into a vector. They must not be confused.

### Why an orthonormal basis is needed

Proposition 25.6 holds only with an orthonormal basis. The handouts' example shows it; to write an endomorphism in another basis you use the formula of lesson L16, $[T]^{\mathcal B}_{\mathcal B} = M^{-1} A M$, where $M = [\id]^{\mathcal B}_{\mathcal C}$ has the vectors of $\mathcal B$ as columns.

> [!EXAMPLE] 25.8
> Consider $\R^2$ with the Euclidean scalar product. The endomorphism $L_A$ defined by the matrix $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ is self-adjoint, because the matrix $A$ is symmetric and we are using the canonical basis, which is orthonormal.
>
> If we write $L_A$ with respect to another orthonormal basis, for example $\mathcal B = \left\{ \begin{pmatrix} 0 \\ 1 \end{pmatrix}, \begin{pmatrix} -1 \\ 0 \end{pmatrix} \right\}$, we get a new symmetric matrix:
> $$A' = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}.$$
> This is consistent with Proposition 25.6. If however we write $A$ with respect to a non-orthonormal basis, for example $\mathcal B = \left\{ \begin{pmatrix} -1 \\ 1 \end{pmatrix}, \begin{pmatrix} 1 \\ 0 \end{pmatrix} \right\}$, the new associated matrix may not be symmetric. In this case we get
> $$A' = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} -1 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ -1 & 3 \end{pmatrix},$$
> which is not a symmetric matrix.

The computations, one product at a time.

1. **First basis.** $M = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ (columns $(0, 1)$ and $(-1, 0)$), with $\det M = 0 \cdot 0 - (-1) \cdot 1 = 1$ and inverse $M^{-1} = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$. Since the basis is orthonormal, $M$ is orthogonal and $M^{-1} = {}^t M$. Then $M^{-1} A = \begin{pmatrix} 1 & 1 \\ -2 & -1 \end{pmatrix}$ and $(M^{-1} A) M = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$.
2. **Second basis.** $M = \begin{pmatrix} -1 & 1 \\ 1 & 0 \end{pmatrix}$, with $\det M = 0 - 1 = -1$ and inverse $M^{-1} = \frac{1}{-1}\begin{pmatrix} 0 & -1 \\ -1 & -1 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 1 \end{pmatrix}$. Then $M^{-1} A = \begin{pmatrix} 1 & 1 \\ 3 & 2 \end{pmatrix}$ and $(M^{-1} A) M = \begin{pmatrix} 0 & 1 \\ -1 & 3 \end{pmatrix}$.

The endomorphism is always the same, and it is self-adjoint (the definition does not talk about bases); it is the **matrix** that, in a non-orthonormal basis, loses its symmetry.

> [!PITFALL] "The matrix is not symmetric, so $T$ is not self-adjoint"
> This conclusion is correct only if the basis is **orthonormal**. In the quizzes the maps are almost always given by a formula in canonical coordinates, and then the criterion of Corollary 25.7 applies without problems.

## Invariant subspaces (p. 133)

Take $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ and the line $U = \Span((1, 1))$. Since $A(1, 1) = (3, 3) = 3\,(1, 1)$, every vector of $U$ is sent into $U$: the line "stays in its place". The perpendicular line $U^\perp = \Span((1, -1))$ stays in its place too: $A(1, -1) = (1, -1)$. It is not a coincidence.

> [!DEF] 25.9 · Invariant subspace
> Let $T \colon V \to V$ be an endomorphism. A subspace $U \subseteq V$ is **$T$-invariant** if $T(U) \subseteq U$, that is if $T$ sends the elements of $U$ into $U$.

Examples you already know:

- $\{0\}$ and $V$ are always invariant;
- if $v$ is an **eigenvector**, $T(v) = \lambda v$, the line $\Span(v)$ is invariant: $T(t v) = t \lambda v \in \Span(v)$;
- every **eigenspace** $V_\lambda$ is invariant (beyond the handouts: kernel and image are too).

> [!PROP] 25.10
> Let $T \colon V \to V$ be a self-adjoint endomorphism and $U \subseteq V$ a subspace. If $T(U) \subseteq U$, then $T(U^\perp) \subseteq U^\perp$. In other words, if $U$ is $T$-invariant then $U^\perp$ is $T$-invariant too.

The handouts' proof:

1. I take any vector $v \in U^\perp$: I must show that $T(v) \in U^\perp$, that is that $T(v)$ is orthogonal to every $u \in U$;
2. for every $u \in U$: $\langle T(v), u \rangle = \langle v, T(u) \rangle$, because $T$ is self-adjoint;
3. $T(u) \in U$ because $U$ is invariant, and $v \in U^\perp$: so $\langle v, T(u) \rangle = 0$;
4. then $\langle T(v), u \rangle = 0$ for every $u \in U$, that is $T(v) \in U^\perp$. $\square$

> [!EXAMPLE] Without the "self-adjoint" hypothesis the proposition is false
> With $B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ (not symmetric) the line $U = \Span(e_1)$ is invariant, because $B e_1 = e_1$. But $U^\perp = \Span(e_2)$ is not: $B e_2 = (1, 1) \notin \Span(e_2)$.

> [!IDEA] What it is for
> It is the engine of the proof of the spectral theorem (lesson L26): once an eigenvector $v$ of a self-adjoint $T$ is found, the line $\Span(v)$ is invariant, so $U = \Span(v)^\perp$ is too; then $T$ restricts to an endomorphism of $U$, which has one dimension less, and you start again in there. Step by step you build an orthonormal basis of eigenvectors.

```widget matrice
title: A symmetric matrix: the lines of eigenvectors are invariant and perpendicular
a: 2 1; 1 2
x: 1 1
```

The tool draws the two lines of eigenvectors of $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$: they are $\Span((1, 1))$ (eigenvalue $3$) and $\Span((1, -1))$ (eigenvalue $1$), and they are **perpendicular**. Drag the vector $x$ along one of them: $Ax$ stays on the same line, that is the line is invariant. Then press the "shear" button, which loads $B = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$: the $x$ axis stays invariant, but the $y$ axis does not, as in the example above.

> [!BEYOND] Where to find it in the book
> In Martelli's book: Hermitian products in §11.1 (pp. 347–350: definition 11.1.1, positive definite 11.1.3, Euclidean Hermitian product and Hermitian matrices in §11.1.3–11.1.4, an example with integrals of complex functions in §11.1.5, associated matrix in §11.1.6); self-adjoint endomorphisms and invariant subspaces in §11.2 (pp. 350–352: Proposition 11.2.1 = 25.6, Corollary 11.2.2 = 25.7, Example 11.2.3 = 25.8, Proposition 11.2.5 = 25.10).

## Towards the exam

The written test of Linear Algebra and Geometry has **10 quiz questions** with 5 answers (only one right) and **2 problems worth 11 points**, marked only with **at least 6 correct quiz answers**; it lasts **2 hours**, **with no calculator**, and you may bring only a sheet of **4 handwritten pages**. The 2026/27 exam sessions are on **22/01/2027** and **05/02/2027** at 14:00. All the details are in lesson L01.

**What of this lesson appears in the 2023–2026 exam sessions.** Only quiz questions, but frequent ones: there is one in 9 of the 15 exam sessions. They are easy points, if you know the method.

- **"Which of the following is a Hermitian product on $\C^2$?"**: exam sessions of 24/01/2024 (question 4), 16/01/2025 (question 9), 07/02/2025 (question 6), 02/09/2025 (question 7), 15/01/2026 (question 2). The five formulas differ in the coefficients and in the presence of the conjugation bars.
- **"Which matrix is (or is not) Hermitian?"**: 10/06/2024 (question 9), 10/07/2024 (question 10).
- **"Which map is (or is not) self-adjoint?"**: 08/02/2024 (question 9, on $\C^2$), 03/06/2026 (question 9, on $\R^2$).

Three real quiz questions, solved.

*Exam of 15/01/2026, question 2.* We write $x = (x_1, x_2)$, $y = (y_1, y_2) \in \C^2$. Which of the following is a Hermitian product? (a) $x_1 \bar y_1 + 3i x_1 \bar y_2 + 2i x_2 \bar y_1 + x_2 \bar y_2$; (b) $x_1 y_1 + 2i x_1 y_2 - 2i x_2 y_1 + 2 x_2 y_2$; (c) $3i x_1 \bar y_1 + 2 x_1 \bar y_2 + 2 x_2 \bar y_1 + x_2 \bar y_2$; (d) $x_1 \bar y_1 + 2 x_1 \bar y_2 - 2 x_2 \bar y_1 + 2 x_2 \bar y_2$; (e) $3 x_1 \bar y_1 + i x_1 \bar y_2 - i x_2 \bar y_1 - x_2 \bar y_2$.

Working: (b) has no bars, so it is bilinear, discarded. For the others I write $H$: (a) $\begin{pmatrix} 1 & 3i \\ 2i & 1 \end{pmatrix}$, and $\overline{2i} = -2i \neq 3i$; (c) has $3i$ on the diagonal; (d) $\begin{pmatrix} 1 & 2 \\ -2 & 2 \end{pmatrix}$, and $-2 \neq \bar 2 = 2$; (e) $\begin{pmatrix} 3 & i \\ -i & -1 \end{pmatrix}$, real diagonal and $\overline{-i} = i$: **answer (e)**. Note that (e) is not positive definite ($g(e_2, e_2) = -1$): the question did not ask for it.

*Exam of 03/06/2026, question 9.* Which of the following linear maps $T \colon \R^2 \to \R^2$ is self-adjoint with respect to the Euclidean scalar product? (a) $T(x, y) = (2x - y, -x + y)$; (b) $T(x, y) = (x - y, x + y)$; (c) $T(x, y) = (x, x)$; (d) $T(x, y) = (-x + y, 2x - y)$; (e) $T(x, y) = (x + y, y)$.

Working: the matrices are (a) $\begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix}$, (b) $\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$, (c) $\begin{pmatrix} 1 & 0 \\ 1 & 0 \end{pmatrix}$, (d) $\begin{pmatrix} -1 & 1 \\ 2 & -1 \end{pmatrix}$, (e) $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$. The only symmetric one is (a): **answer (a)**, by Corollary 25.7.

*Exam of 10/06/2024, question 9.* Which of the following matrices is **not** Hermitian? (a) $\begin{pmatrix} \sqrt 2 & -2i \\ 2i & 3 \end{pmatrix}$; (b) $\begin{pmatrix} 1 & 0 & i \\ 0 & -1 & -2i \\ -i & 2i & 0 \end{pmatrix}$; (c) $\begin{pmatrix} 0 & 0 \\ 0 & \sqrt 7 \end{pmatrix}$; (d) $\begin{pmatrix} 2 & 1 - 2i \\ 1 + 2i & -2 \end{pmatrix}$; (e) $\begin{pmatrix} -2i & 3 \\ 3 & 2i \end{pmatrix}$.

Working: (e) has $-2i$ and $2i$ on the diagonal, which are not real: **answer (e)**. The others are Hermitian: in (a) $\overline{2i} = -2i$; in (b) $\overline{-i} = i$ and $\overline{2i} = -2i$; (c) is real and symmetric; in (d) $\overline{1 + 2i} = 1 - 2i$.

> [!EXAM] Watch out for the bars
> In the exam sessions of 16/01/2025 and 07/02/2025 the formulas of the Hermitian products are printed **without** the conjugation bars, with the variables called $(x_1, y_1)$ and $(x_2, y_2)$. The official solutions reason anyway on the **matrix of the coefficients**: real diagonal and conjugate off-diagonal coefficients. If you get a text like that, use the same criterion.

**Mistakes to avoid.**

- Forgetting to check the **diagonal**: a single non-real coefficient on the diagonal excludes the matrix.
- Conjugating by changing the sign of the **real** part: $\overline{a + bi} = a - bi$, not $-a - bi$.
- Believing that a complex **symmetric** matrix is Hermitian.
- Reading the matrix of $T(x, y)$ by columns instead of by rows: the first **component** of $T$ gives the first **row**.
- Thinking that "Hermitian" implies "positive definite".

> [!EXAM] The 4-page sheet
> From this lesson: the definition of Hermitian product with properties (4)–(7); ${}^tH = \bar H$ and the method "real diagonal, conjugate mirrors"; $g_H(x, y) = \sum H_{ij} x_i \bar y_j$; self-adjoint $\iff$ Hermitian (symmetric) matrix **in an orthonormal basis**; Proposition 25.10.

## Quiz

```quiz
Q: We write $x = (x_1, x_2)$, $y = (y_1, y_2) \in \C^2$. Which of the following is a Hermitian product?
+ $x_1 \bar y_1 + (1 - i) x_1 \bar y_2 + (1 + i) x_2 \bar y_1 + 3 x_2 \bar y_2$
- $x_1 \bar y_1 + (1 - i) x_1 \bar y_2 + (1 - i) x_2 \bar y_1 + 3 x_2 \bar y_2$
- $i x_1 \bar y_1 + x_1 \bar y_2 + x_2 \bar y_1 + x_2 \bar y_2$
- $x_1 y_1 + (1 - i) x_1 y_2 + (1 + i) x_2 y_1 + 3 x_2 y_2$
- $x_1 \bar y_1 + 2 x_1 \bar y_2 - 2 x_2 \bar y_1 + x_2 \bar y_2$
= The matrix $\begin{pmatrix} 1 & 1 - i \\ 1 + i & 3 \end{pmatrix}$ has real diagonal and $\overline{1 + i} = 1 - i$: it is Hermitian. In the second $\overline{1 - i} = 1 + i \neq 1 - i$; in the third there is $i$ on the diagonal; the fourth has no conjugations (it is bilinear); in the fifth $\overline{-2} = -2 \neq 2$. Similar to the exams of 24/01/2024, 16/01/2025, 07/02/2025, 02/09/2025 and 15/01/2026.

Q: Which of these matrices is Hermitian?
+ $\begin{pmatrix} 3 & 2 + i \\ 2 - i & 0 \end{pmatrix}$
- $\begin{pmatrix} 3 & 2 + i \\ 2 + i & 0 \end{pmatrix}$
- $\begin{pmatrix} i & 1 \\ 1 & i \end{pmatrix}$
- $\begin{pmatrix} 1 & i \\ i & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 + i \\ -1 + i & 2 \end{pmatrix}$
= In the first the diagonal is real and $\overline{2 - i} = 2 + i$. The second and the fourth are symmetric but not Hermitian ($\overline{2 + i} = 2 - i$, $\bar i = -i$); the third has $i$ on the diagonal; in the fifth $\overline{-1 + i} = -1 - i \neq 1 + i$ (the sign of the real part has been changed too). Similar to the exams of 10/06/2024 and 10/07/2024.

Q: With the Euclidean Hermitian product of $\C^2$, what is $\langle (1, i), (i, 1) \rangle$?
+ $0$
- $2i$
- $-2i$
- $2$
- $1 + i$
= $\langle x, y \rangle = x_1 \bar y_1 + x_2 \bar y_2 = 1 \cdot \bar i + i \cdot \bar 1 = -i + i = 0$: the two vectors are orthogonal. $2i$ is the result when you forget the conjugation ($1 \cdot i + i \cdot 1$).

Q: With the Euclidean Hermitian product of $\C^2$, what is $\langle v, v \rangle$ for $v = (1 + i, 2i)$?
N: 6
= $\langle v, v \rangle = \lvert 1 + i \rvert^2 + \lvert 2i \rvert^2 = 2 + 4 = 6$, so $\lVert v \rVert = \sqrt 6$. Without conjugation you would get $(1 + i)^2 + (2i)^2 = 2i - 4$, which is not even real.

Q: Let $\langle\ ,\ \rangle$ be a Hermitian product on $V$ and $\lambda \in \C$. Which equality holds for every $v, w \in V$?
+ $\langle v, \lambda w \rangle = \bar\lambda \langle v, w \rangle$
- $\langle v, \lambda w \rangle = \lambda \langle v, w \rangle$
- $\langle \lambda v, w \rangle = \bar\lambda \langle v, w \rangle$
- $\langle v, \lambda w \rangle = \lvert \lambda \rvert \langle v, w \rangle$
- $\langle v, \lambda w \rangle = \lambda \langle w, v \rangle$
= It is property (5): $\langle v, \lambda w \rangle = \overline{\langle \lambda w, v \rangle} = \overline{\lambda \langle w, v \rangle} = \bar\lambda \langle v, w \rangle$. From the first slot instead $\lambda$ comes out without conjugation (axiom 2).

Q: In a Hermitian matrix the diagonal entries are:
+ always real
- always zero
- always purely imaginary
- always positive
- any complex numbers
= From $H_{ii} = \overline{H_{ii}}$ it follows that $H_{ii}$ is real. They do not have to be positive: $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ is Hermitian.

Q: Which of these maps $T \colon \R^2 \to \R^2$ is self-adjoint with respect to the Euclidean scalar product?
+ $T(x, y) = (3x + 2y,\ 2x - y)$
- $T(x, y) = (3x + 2y,\ -2x - y)$
- $T(x, y) = (x + y,\ y)$
- $T(x, y) = (y,\ -x)$
- $T(x, y) = (2x,\ x + y)$
= By Corollary 25.7 it is enough that the matrix in the canonical basis is symmetric. Only the first is: $\begin{pmatrix} 3 & 2 \\ 2 & -1 \end{pmatrix}$. The others have matrices $\begin{pmatrix} 3 & 2 \\ -2 & -1 \end{pmatrix}$, $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$ (a rotation), $\begin{pmatrix} 2 & 0 \\ 1 & 1 \end{pmatrix}$. Similar to the exam of 03/06/2026 (question 9).

Q: Which of these maps $T \colon \C^2 \to \C^2$ is **not** self-adjoint with respect to the Euclidean Hermitian product?
+ $T(x, y) = (x + iy,\ ix + y)$
- $T(x, y) = (x + iy,\ -ix + y)$
- $T(x, y) = (2x,\ 3y)$
- $T(x, y) = \big((1 + i)y,\ (1 - i)x\big)$
- $T(x, y) = (x + 2y,\ 2x)$
= The matrix $\begin{pmatrix} 1 & i \\ i & 1 \end{pmatrix}$ is symmetric but not Hermitian ($\bar i = -i \neq i$). The other matrices are $\begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$, $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$, $\begin{pmatrix} 0 & 1 + i \\ 1 - i & 0 \end{pmatrix}$ and $\begin{pmatrix} 1 & 2 \\ 2 & 0 \end{pmatrix}$, all Hermitian. Similar to the exam of 08/02/2024 (question 9).

Q: Let $T$ be a self-adjoint endomorphism of $\R^2$ with the Euclidean scalar product. With respect to which kind of basis is the matrix of $T$ **certainly** symmetric?
+ Any orthonormal basis.
- Any basis.
- A basis that contains the vector $e_1$.
- A basis made of vectors of norm $2$.
- A basis whose change-of-basis matrix has positive determinant.
= It is Proposition 25.6: the condition holds for orthonormal bases. Example 25.8 shows that in a non-orthonormal basis, like $\{(-1, 1), (1, 0)\}$, the matrix may not be symmetric.

Q: Let $T$ be a self-adjoint endomorphism of $\R^3$ and let $v$ be a vector with $T(v) = 2v$. Setting $U = \Span(v)$, which statement is true?
+ $U^\perp$ is $T$-invariant.
- $U^\perp = \Ker T$.
- $T(U^\perp) \subseteq U$.
- $T(U^\perp) = \{0\}$.
- Every vector of $U^\perp$ is an eigenvector with eigenvalue $2$.
= $U$ is invariant because $v$ is an eigenvector, and by Proposition 25.10 $U^\perp$ is too. The others are false in general: for example with $T = \operatorname{diag}(2, 1, 3)$ and $v = e_1$ we have $U^\perp = \Span(e_2, e_3)$, $T(e_2) = e_2$ and $T(e_3) = 3e_3$.
```

## Exercises

::: exercise basic Computations with the Euclidean Hermitian product
Let $x = (2 - i, 1)$ and $y = (i, 1 - i)$ in $\C^2$. Compute $\langle x, y \rangle$, $\langle y, x \rangle$, $\lVert x \rVert$ and $\lVert y \rVert$, and check axiom (3).
::: solution
- $\langle x, y \rangle = (2 - i)\,\bar i + 1 \cdot \overline{1 - i} = (2 - i)(-i) + (1 + i) = -2i + i^2 + 1 + i = -2i - 1 + 1 + i = -i$.
- $\langle y, x \rangle = i \cdot \overline{2 - i} + (1 - i) \cdot \bar 1 = i(2 + i) + 1 - i = 2i + i^2 + 1 - i = 2i - 1 + 1 - i = i$.

Indeed $\overline{-i} = i$: axiom (3) is verified.

- $\lVert x \rVert^2 = \lvert 2 - i \rvert^2 + \lvert 1 \rvert^2 = 5 + 1 = 6$, so $\lVert x \rVert = \sqrt 6$.
- $\lVert y \rVert^2 = \lvert i \rvert^2 + \lvert 1 - i \rvert^2 = 1 + 2 = 3$, so $\lVert y \rVert = \sqrt 3$.
:::

::: exercise basic The properties that follow from the axioms
Using only axioms (1), (2), (3) of Definition 25.1 and the rules of conjugation, prove that for every $v, w \in V$ and $\lambda, \mu \in \C$: (a) $\langle v, 0 \rangle = 0$; (b) $\langle \lambda v, \mu w \rangle = \lambda \bar\mu \langle v, w \rangle$; (c) $\langle v, w \rangle = 0$ if and only if $\langle w, v \rangle = 0$.
::: solution
(a) From axiom (2) with $\lambda = 0$: $\langle 0, v \rangle = \langle 0 \cdot 0, v \rangle = 0 \cdot \langle 0, v \rangle = 0$. By axiom (3), $\langle v, 0 \rangle = \overline{\langle 0, v \rangle} = \bar 0 = 0$.

(b) First I take $\lambda$ out of the first slot (axiom 2), then $\mu$ out of the second (property 5, proved in the theory): $\langle \lambda v, \mu w \rangle = \lambda \langle v, \mu w \rangle = \lambda \bar\mu \langle v, w \rangle$.

(c) By axiom (3), $\langle w, v \rangle = \overline{\langle v, w \rangle}$, and a complex number is zero if and only if its conjugate is zero. So orthogonality is a symmetric relation in the complex case too.
:::

::: exercise basic Completing a Hermitian matrix
Complete the matrix so that it is Hermitian, then decide which of the other matrices are Hermitian:
$$H = \begin{pmatrix} 1 & 2 - i & \ast \\ \ast & 0 & i \\ 3 & \ast & -2 \end{pmatrix}, \quad A = \begin{pmatrix} 5 & 1 + 4i \\ 1 - 4i & 0 \end{pmatrix}, \quad B = \begin{pmatrix} 0 & 2i \\ 2i & 0 \end{pmatrix}, \quad C = \begin{pmatrix} 1 & 2 \\ 2 & 7 \end{pmatrix}.$$
::: solution
Each asterisk is the conjugate of its mirror: $H_{21} = \overline{H_{12}} = \overline{2 - i} = 2 + i$; $H_{13} = \overline{H_{31}} = \bar 3 = 3$; $H_{32} = \overline{H_{23}} = \bar i = -i$. The diagonal $1, 0, -2$ is already real:
$$H = \begin{pmatrix} 1 & 2 - i & 3 \\ 2 + i & 0 & i \\ 3 & -i & -2 \end{pmatrix}.$$

$A$ is Hermitian ($\overline{1 - 4i} = 1 + 4i$). $B$ is not: it is symmetric, but $\overline{2i} = -2i \neq 2i$. $C$ is: it is real and symmetric (Remark on p. 131).
:::

::: exercise intermediate From the formula to the matrix and back
Let $g(x, y) = 2 x_1 \bar y_1 + (1 + 2i) x_1 \bar y_2 + (1 - 2i) x_2 \bar y_1 + 5 x_2 \bar y_2$ on $\C^2$. (a) Write the matrix $H$ and check that $g$ is a Hermitian product. (b) Compute $g(v, w)$ with $v = (1, 1)$ and $w = (0, i)$, both with the formula and with ${}^t v H \bar w$.
::: solution
(a) The coefficient of $x_i \bar y_j$ is $H_{ij}$:
$$H = \begin{pmatrix} 2 & 1 + 2i \\ 1 - 2i & 5 \end{pmatrix}.$$
Real diagonal and $\overline{1 - 2i} = 1 + 2i$: $H$ is Hermitian, so $g = g_H$ is a Hermitian product.

(b) **With the formula**: $\bar w = (0, -i)$, so $\bar w_1 = 0$ and $\bar w_2 = -i$. The terms with $\bar y_1$ disappear:
$$g(v, w) = (1 + 2i) \cdot 1 \cdot (-i) + 5 \cdot 1 \cdot (-i) = (-i - 2i^2) - 5i = 2 - 6i.$$
**With the matrices**: $H \bar w = \begin{pmatrix} (1 + 2i)(-i) \\ 5(-i) \end{pmatrix} = \begin{pmatrix} 2 - i \\ -5i \end{pmatrix}$, and ${}^t v H \bar w = (2 - i) + (-5i) = 2 - 6i$.
:::

::: exercise intermediate The associated matrix in a basis
In $\C^2$ with the Euclidean Hermitian product let $\mathcal B = \{b_1, b_2\}$ with $b_1 = (1, 1)$ and $b_2 = (1, i)$. (a) Compute the associated matrix $H$. (b) Check the formula $\langle v, w \rangle = {}^t[v]_{\mathcal B}\, H\, \overline{[w]_{\mathcal B}}$ with $v = b_1 + i\, b_2$ and $w = b_2$.
::: solution
(a) $H_{11} = \langle b_1, b_1 \rangle = 1 + 1 = 2$; $H_{12} = \langle b_1, b_2 \rangle = 1 \cdot \bar 1 + 1 \cdot \bar i = 1 - i$; $H_{21} = \langle b_2, b_1 \rangle = 1 + i \cdot \bar 1 = 1 + i$; $H_{22} = \langle b_2, b_2 \rangle = 1 + i \bar i = 2$. So
$$H = \begin{pmatrix} 2 & 1 - i \\ 1 + i & 2 \end{pmatrix},$$
Hermitian, as it must be.

(b) In canonical coordinates $v = (1, 1) + i(1, i) = (1 + i,\ 1 + i^2) = (1 + i, 0)$, and $\langle v, w \rangle = (1 + i) \cdot \bar 1 + 0 = 1 + i$.

With the formula: $[v]_{\mathcal B} = (1, i)$, $[w]_{\mathcal B} = (0, 1)$, $\overline{[w]_{\mathcal B}} = (0, 1)$. Then $H \begin{pmatrix} 0 \\ 1 \end{pmatrix} = \begin{pmatrix} 1 - i \\ 2 \end{pmatrix}$ and ${}^t[v]_{\mathcal B} \begin{pmatrix} 1 - i \\ 2 \end{pmatrix} = 1 \cdot (1 - i) + i \cdot 2 = 1 + i$. Same result.
:::

::: exercise intermediate Self-adjoint or not?
Decide which endomorphisms are self-adjoint with respect to the Euclidean product (scalar or Hermitian): (a) $T \colon \C^2 \to \C^2$, $T(x, y) = \big(x + (1 - i)y,\ (1 + i)x + 2y\big)$; (b) $T \colon \C^2 \to \C^2$, $T(x, y) = (ix, y)$; (c) $T \colon \R^3 \to \R^3$, $T(x, y, z) = (x + 2z,\ 3y,\ 2x - z)$. For (b) find explicitly two vectors for which Definition 25.5 fails.
::: solution
(a) Matrix $\begin{pmatrix} 1 & 1 - i \\ 1 + i & 2 \end{pmatrix}$: real diagonal, $\overline{1 + i} = 1 - i$. Hermitian: $T$ is self-adjoint (Corollary 25.7).

(b) Matrix $\begin{pmatrix} i & 0 \\ 0 & 1 \end{pmatrix}$: not Hermitian, so $T$ is not self-adjoint. With $v = w = e_1$: $\langle T(e_1), e_1 \rangle = \langle (i, 0), (1, 0) \rangle = i$, while $\langle e_1, T(e_1) \rangle = \langle (1, 0), (i, 0) \rangle = 1 \cdot \bar i = -i$.

(c) Matrix $\begin{pmatrix} 1 & 0 & 2 \\ 0 & 3 & 0 \\ 2 & 0 & -1 \end{pmatrix}$: real and symmetric, so $T$ is self-adjoint.
:::

::: exercise intermediate The same matrix in two bases
Let $A = \begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$, which defines a self-adjoint endomorphism of $\R^2$. Compute the matrix of $L_A$ (a) in the orthonormal basis $\mathcal B = \left\{ \frac{1}{\sqrt 2}(1, 1), \frac{1}{\sqrt 2}(1, -1) \right\}$; (b) in the basis $\mathcal B' = \{(1, 0), (1, 1)\}$. Comment in the light of Proposition 25.6.
::: solution
(a) $M = \frac{1}{\sqrt 2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$ is orthogonal and $M^{-1} = {}^t M = M$ (it is also symmetric). It is worth noticing that $A(1, 1) = (3, 3)$ and $A(1, -1) = (-1, 1)$: the vectors of the basis are **eigenvectors**, with eigenvalues $3$ and $-1$. So
$$[L_A]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 3 & 0 \\ 0 & -1 \end{pmatrix},$$
diagonal, and in particular symmetric, as Proposition 25.6 predicts. (It is a preview of the spectral theorem.)

(b) $M = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, $M^{-1} = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$. Then $M^{-1} A = \begin{pmatrix} -1 & 1 \\ 2 & 1 \end{pmatrix}$ and
$$M^{-1} A M = \begin{pmatrix} -1 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} -1 & 0 \\ 2 & 3 \end{pmatrix},$$
which is not symmetric: the basis $\mathcal B'$ is not orthonormal ($\langle (1, 0), (1, 1) \rangle = 1 \neq 0$), and Proposition 25.6 does not apply.
:::

::: exercise intermediate Invariant subspaces of a symmetric matrix
Let $A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 1 & 1 \end{pmatrix}$. (a) Check that $U = \Span((0, 1, 1))$ is $L_A$-invariant. (b) Find $U^\perp$ and check directly that it is invariant, as Proposition 25.10 predicts.
::: solution
(a) $A(0, 1, 1) = (0, 2, 2) = 2\,(0, 1, 1) \in U$: the generator is an eigenvector, so $U$ is invariant.

(b) $U^\perp = \{(x, y, z) \mid y + z = 0\} = \Span((1, 0, 0), (0, 1, -1))$. Check on the generators: $A(1, 0, 0) = (2, 0, 0) \in U^\perp$ and $A(0, 1, -1) = (0, 0, 0) \in U^\perp$. Since $A$ is linear, it is enough to check the generators: $U^\perp$ is invariant.
:::

::: exercise hard Eigenvalues and eigenvectors of a self-adjoint endomorphism
Let $T$ be a self-adjoint endomorphism of a space with a positive definite Hermitian (or scalar) product. Prove that: (a) if $T(v) = \lambda v$ with $v \neq 0$, then $\lambda$ is real; (b) if $T(v) = \lambda v$ and $T(w) = \mu w$ with $\lambda \neq \mu$, then $\langle v, w \rangle = 0$. (These are two facts you will use in lesson L26.)
::: solution
(a) I compute $\langle T(v), v \rangle$ in two ways. On the one hand $\langle \lambda v, v \rangle = \lambda \langle v, v \rangle$. On the other, since $T$ is self-adjoint, $\langle T(v), v \rangle = \langle v, T(v) \rangle = \langle v, \lambda v \rangle = \bar\lambda \langle v, v \rangle$. So $(\lambda - \bar\lambda) \langle v, v \rangle = 0$, and since $\langle v, v \rangle > 0$ (positive definite, $v \neq 0$), $\lambda = \bar\lambda$: $\lambda$ is real.

(b) By (a) $\mu$ is real too, so $\bar\mu = \mu$. Then
$$\lambda \langle v, w \rangle = \langle T(v), w \rangle = \langle v, T(w) \rangle = \langle v, \mu w \rangle = \bar\mu \langle v, w \rangle = \mu \langle v, w \rangle.$$
So $(\lambda - \mu) \langle v, w \rangle = 0$ and, since $\lambda \neq \mu$, $\langle v, w \rangle = 0$.
:::

::: exercise hard Hermitian but not positive definite
Let $H = \begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$. (a) Check that $H$ is Hermitian. (b) Find a vector $v \neq 0$ with $g_H(v, v) = 0$: the product $g_H$ is not positive definite.
::: solution
(a) Real diagonal and $\overline{-i} = i$: Hermitian.

(b) $g_H(x, y) = x_1 \bar y_1 + i x_1 \bar y_2 - i x_2 \bar y_1 + x_2 \bar y_2$. I try $v = (1, -i)$, so $\bar v = (1, i)$:
$$g_H(v, v) = 1 \cdot 1 + i \cdot 1 \cdot i + (-i)(-i) \cdot 1 + (-i) \cdot i = 1 - 1 - 1 + 1 = 0.$$
A non-zero vector with $g_H(v, v) = 0$: $g_H$ is Hermitian but not positive definite. (You arrive at this $v$ by looking for a vector of the kernel of $H$ and conjugating it: $H \bar v = 0$ gives $g_H(v, v) = {}^t v\, H \bar v = 0$. In lesson L26 you will see that the eigenvalues of $H$ are $0$ and $2$.)
:::

::: exercise exam A Hermitian product with a parameter
We write $x = (x_1, x_2)$, $y = (y_1, y_2) \in \C^2$ and, for $a \in \C$, let $g_a(x, y) = x_1 \bar y_1 + a\, x_1 \bar y_2 + (2 + i)\, x_2 \bar y_1 + 4\, x_2 \bar y_2$. (1) For which $a$ is the formula a Hermitian product? (2) For that value write the matrix $H$ and compute $g_a(v, v)$ with $v = (1, 1)$. (3) Find a vector $w \neq 0$ orthogonal to $e_1$ and compute $g_a(w, w)$: is the product positive definite?
::: solution
(1) The matrix is $\begin{pmatrix} 1 & a \\ 2 + i & 4 \end{pmatrix}$: the diagonal is real, and you need $a = \overline{2 + i} = 2 - i$. Only for $a = 2 - i$.

(2) $H = \begin{pmatrix} 1 & 2 - i \\ 2 + i & 4 \end{pmatrix}$. With $v = (1, 1)$ (real, so $\bar v = v$) you add up all the entries: $g(v, v) = 1 + (2 - i) + (2 + i) + 4 = 9$. It is real, as it must be by property (7).

(3) $g(w, e_1) = \sum_i H_{i1} w_i = w_1 + (2 + i) w_2$ (because $\bar e_1 = e_1$). Imposing $g(w, e_1) = 0$: for example $w_2 = 1$ and $w_1 = -(2 + i)$, that is $w = (-2 - i, 1)$. Then, with $\bar w = (-2 + i, 1)$:
$$g(w, w) = (-2 - i)(-2 + i) + (2 - i)(-2 - i) + (2 + i)(-2 + i) + 4 = 5 - 5 - 5 + 4 = -1.$$
(Computations: $(-2 - i)(-2 + i) = 4 - i^2 = 5$; $(2 - i)(-2 - i) = -(2 - i)(2 + i) = -5$; $(2 + i)(-2 + i) = -(2 + i)(2 - i) = -5$.) A non-zero vector with $g(w, w) < 0$: the product is **not** positive definite.
:::

::: exercise exam A self-adjoint endomorphism of $\C^2$
Let $T \colon \C^2 \to \C^2$, $T(x, y) = \big(2x + (1 - i)y,\ (1 + i)x + 3y\big)$. (1) Write the matrix $A$ of $T$ in the canonical basis and show that $T$ is self-adjoint with respect to the Euclidean Hermitian product. (2) Check directly that $\langle T(e_1), e_2 \rangle = \langle e_1, T(e_2) \rangle$. (3) Check that $U = \Span((-1 + i, 1))$ is $T$-invariant, find $U^\perp$ and check that $U^\perp$ is invariant too.
::: solution
(1) $A = \begin{pmatrix} 2 & 1 - i \\ 1 + i & 3 \end{pmatrix}$: real diagonal and $\overline{1 + i} = 1 - i$. It is Hermitian, so $T$ is self-adjoint (Corollary 25.7).

(2) $T(e_1) = (2, 1 + i)$ and $\langle (2, 1 + i), (0, 1) \rangle = (1 + i) \cdot \bar 1 = 1 + i$. $T(e_2) = (1 - i, 3)$ and $\langle (1, 0), (1 - i, 3) \rangle = 1 \cdot \overline{1 - i} = 1 + i$. Equal.

(3) $T(-1 + i, 1) = \big(2(-1 + i) + (1 - i),\ (1 + i)(-1 + i) + 3\big) = (-1 + i,\ -2 + 3) = (-1 + i, 1)$: the generator is an eigenvector with eigenvalue $1$, so $U$ is invariant. (Computation: $(1 + i)(-1 + i) = -1 + i - i + i^2 = -2$.)

$U^\perp$ is made of the $w$ with $\langle w, (-1 + i, 1) \rangle = w_1 \cdot \overline{-1 + i} + w_2 \cdot 1 = (-1 - i) w_1 + w_2 = 0$, that is $w_2 = (1 + i) w_1$: $U^\perp = \Span((1, 1 + i))$. Check: $T(1, 1 + i) = \big(2 + (1 - i)(1 + i),\ (1 + i) + 3(1 + i)\big) = (4,\ 4 + 4i) = 4\,(1, 1 + i)$. $U^\perp$ is invariant too (it is the line of the eigenvectors with eigenvalue $4$), as Proposition 25.10 predicts.
:::

## Review questions

::: question Why can't the formula $x_1 y_1 + \dots + x_n y_n$ be used on $\C^n$ to measure lengths?
Because it would give non-real or zero values for non-zero vectors: for $(1, i)$ you get $1 + i^2 = 0$. Conjugating the second vector you get $\lvert x_1 \rvert^2 + \dots + \lvert x_n \rvert^2$, real and positive.
:::

::: question What are the axioms of a Hermitian product?
(1) $\langle v + v', w \rangle = \langle v, w \rangle + \langle v', w \rangle$; (2) $\langle \lambda v, w \rangle = \lambda \langle v, w \rangle$; (3) $\langle v, w \rangle = \overline{\langle w, v \rangle}$, for every $v, v', w$ and every $\lambda \in \C$.
:::

::: question What does sesquilinear mean? How does a scalar come out of the second slot?
Linear in the first slot and antilinear in the second: $\langle v, \lambda w \rangle = \bar\lambda \langle v, w \rangle$. "Sesqui" means one and a half.
:::

::: question Why is $\langle v, v \rangle$ always real?
By axiom (3) with $w = v$: $\langle v, v \rangle = \overline{\langle v, v \rangle}$, and a number equal to its conjugate is real.
:::

::: question What is the Euclidean Hermitian product? Is it positive definite?
$\langle x, y \rangle = {}^t x\, \bar y = x_1 \bar y_1 + \dots + x_n \bar y_n$ on $\C^n$. It is positive definite: $\langle x, x \rangle = \lvert x_1 \rvert^2 + \dots + \lvert x_n \rvert^2 > 0$ for $x \neq 0$.
:::

::: question What is a Hermitian matrix? What can be said about its diagonal?
A complex square matrix with ${}^t H = \bar H$, that is $H_{ij} = \overline{H_{ji}}$. The diagonal entries are real. A real matrix is Hermitian if and only if it is symmetric.
:::

::: question How do you go from a formula $g(x, y) = \sum a_{ij} x_i \bar y_j$ to the matrix, and how do you decide whether it is a Hermitian product?
The matrix has $H_{ij} = a_{ij}$ (row = index of $x$, column = index of $\bar y$). The formula is a Hermitian product if and only if $H$ is Hermitian, and all the terms have the conjugation on the second vector.
:::

::: question What is the matrix associated with a Hermitian product in a basis?
$H_{ij} = \langle v_i, v_j \rangle$. It is Hermitian and $\langle v, w \rangle = {}^t[v]_{\mathcal B}\, H\, \overline{[w]_{\mathcal B}}$.
:::

::: question What is a self-adjoint endomorphism? What is the difference with an isometry?
$T$ is self-adjoint if $\langle T(v), w \rangle = \langle v, T(w) \rangle$ for every $v, w$. An isometry instead satisfies $\langle T(v), T(w) \rangle = \langle v, w \rangle$. In a real orthonormal basis: self-adjoint means symmetric matrix, isometry means orthogonal matrix.
:::

::: question What does Proposition 25.6 say? Why is the orthonormal basis needed?
In an orthonormal basis, $T$ is self-adjoint if and only if its matrix is Hermitian (symmetric in the real case). The proof uses the fact that the matrix of the product in that basis is the identity; in a non-orthonormal basis the matrix of a self-adjoint endomorphism may not be symmetric (Example 25.8).
:::

::: question How do you decide whether $T(x, y) = (ax + by, cx + dy)$ is self-adjoint?
You write the matrix $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$ in the canonical (orthonormal) basis and check that it is symmetric (real case) or Hermitian (complex case), by Corollary 25.7.
:::

::: question What is an invariant subspace? What does Proposition 25.10 say?
$U$ is $T$-invariant if $T(U) \subseteq U$. If $T$ is self-adjoint and $U$ is invariant, then $U^\perp$ is invariant too: for $v \in U^\perp$ and $u \in U$, $\langle T(v), u \rangle = \langle v, T(u) \rangle = 0$.
:::

## Glossary

```glossary
Conjugate | Of $z = a + bi$ it is $\bar z = a - bi$; we have $z \bar z = \lvert z \rvert^2$.
Hermitian product | Map $V \times V \to \C$ linear in the first slot with $\langle v, w \rangle = \overline{\langle w, v \rangle}$ (Definition 25.1).
Sesquilinear | Linear in the first slot and antilinear in the second: $\langle v, \lambda w \rangle = \bar\lambda \langle v, w \rangle$.
Antilinear | That makes scalars come out conjugated: $f(\lambda w) = \bar\lambda f(w)$.
Positive definite Hermitian product | With $\langle v, v \rangle > 0$ for every $v \neq 0$ (Definition 25.2).
Norm (complex case) | $\lVert v \rVert = \sqrt{\langle v, v \rangle}$, for a positive definite Hermitian product.
Euclidean Hermitian product | On $\C^n$: $\langle x, y \rangle = {}^t x\, \bar y = x_1 \bar y_1 + \dots + x_n \bar y_n$.
Conjugate matrix | $\bar A$: the matrix with all the entries conjugated.
Hermitian matrix | Square matrix with ${}^t H = \bar H$, that is $H_{ij} = \overline{H_{ji}}$; it has a real diagonal.
Product $g_H$ | The Hermitian product $g_H(x, y) = {}^t x\, H\, \bar y$ defined by a Hermitian matrix $H$; the coefficient of $x_i \bar y_j$ is $H_{ij}$.
Associated matrix (Hermitian case) | $H_{ij} = \langle v_i, v_j \rangle$ with respect to a basis; we have $\langle v, w \rangle = {}^t[v]\, H\, \overline{[w]}$.
Self-adjoint endomorphism | $T$ with $\langle T(v), w \rangle = \langle v, T(w) \rangle$ for every $v, w$ (Definition 25.5).
Orthonormal basis | Basis of vectors of norm $1$, pairwise orthogonal; in it the matrix of the product is the identity.
$T$-invariant subspace | Subspace $U$ with $T(U) \subseteq U$ (Definition 25.9).
Orthogonal complement $U^\perp$ | Set of the vectors orthogonal to all the vectors of $U$.
```

## Checklist

```checklist
- I can explain why over the complex numbers the product needs the conjugation, with the example of the vector $(1, i)$.
- I can state the axioms of the Hermitian product and prove properties (4), (5), (6), (7).
- I can compute Hermitian products and norms in $\C^n$ without forgetting the conjugations.
- I can use Gram–Schmidt in $\C^n$ with the coefficient $\frac{\langle v, w \rangle}{\langle w, w \rangle}$ in the right order.
- I can recognise a Hermitian matrix at a glance: real diagonal, conjugate symmetric entries.
- I can go from a formula $\sum a_{ij} x_i \bar y_j$ to the matrix and decide whether it is a Hermitian product.
- I can compute the matrix associated with a Hermitian product in a basis and use the formula ${}^t[v] H \overline{[w]}$.
- I can define a self-adjoint endomorphism and tell it apart from an isometry.
- I can decide whether a map given by a formula is self-adjoint, and I know that the criterion requires an orthonormal basis.
- I can prove that, for $T$ self-adjoint, if $U$ is invariant then $U^\perp$ is too.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 25 "Teorema spettrale I", pp. 129–133: sections 25.A (Hermitian products), 25.B (Hermitian matrices), 25.C (associated matrix), 25.D (self-adjoint endomorphisms) and 25.E (invariant subspaces), followed in order with the original numbering (Definitions 25.1, 25.2, 25.4, 25.5, 25.9; Example 25.3; Propositions 25.6, 25.10; Corollary 25.7; Example 25.8). From the previous lessons: conjugation and modulus (lesson 2), change of basis for endomorphisms (lesson 16), isometries (lesson 22). This lesson of the handouts has no exercise section.
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §11.1 (Hermitian products, Hermitian matrices, associated matrix) and §11.2 (self-adjoint endomorphisms, invariant subspaces).
- **Exam papers** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): text reported from 15/01/2026 (question 2), 03/06/2026 (question 9) and 10/06/2024 (question 9), with solutions written for these notes; the exam sessions of 24/01/2024, 08/02/2024, 10/07/2024, 16/01/2025, 07/02/2025 and 02/09/2025 are cited by type of question.
- The **"Beyond the handouts"** parts (motivation with the vector $(1, i)$, reminder on conjugation, numerical examples, Gram–Schmidt in $\C^2$, criterion for formulas, "Hermitian does not mean positive definite", exercises) are additions in these notes to connect the lesson to the book and to the exam.
