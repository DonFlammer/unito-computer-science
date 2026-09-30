---
course: MDAG
module: AG
lesson: L20
title: Scalar products II
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Linear Algebra and Geometry · Channels A, B and C · Lesson L20
description: >-
  Notes on lesson L20 of Linear Algebra and Geometry (MDAG, part 2): how the matrix of a scalar product changes when
  the basis changes, quadratic forms, norm, the Cauchy–Schwarz and triangle inequalities, distances and angles between
  vectors, with exam-style quizzes and worked exercises.
lede: >-
  The scalar product of lesson L19 becomes geometry. You will see how its matrix changes when you change basis
  (${}^tMSM$), what quadratic forms are, and above all how lengths
  $\|v\| = \sqrt{\langle v, v\rangle}$, distances and angles are measured, thanks to the Cauchy–Schwarz inequality.
  With the same method you will also measure polynomials and vectors with scalar products other than the Euclidean one.
material: handouts
facts:
  Handouts: lesson 20 · pp. 100–104
  Book: Martelli, §7.1.5, §7.2.2 and §8.1
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 90–120 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 20 "Prodotti scalari II"; B. Martelli, Geometria e algebra
  lineare, §7.1.5, §7.2.2, §8.1.1–8.1.4
italian_file: L20_prodotti_scalari_2.html
html_notes: notes/MDAG/L20_scalar_products_2.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L20_prodotti_scalari_2.md
---

## In brief

- The same scalar product has different matrices in different bases. If $M = [\id]^{\mathcal B'}_{\mathcal B}$ is the change-of-basis matrix, then $S' = {}^tM\,S\,M$: with the **transpose**, not with the inverse as for endomorphisms.
- A **quadratic form** is a homogeneous polynomial of degree 2, like $x_1^2 - 6x_1x_2$. Every quadratic form is $q_S(x) = {}^tx\,S\,x$ for a unique symmetric matrix $S$: on the diagonal the coefficients of the squares, off the diagonal **half** the coefficient of $x_ix_j$.
- $g_S$ is positive definite if and only if $q_S(x) > 0$ for every $x \neq 0$. For the rest of the lesson, and in lessons L21–L22, the scalar product is always **positive definite**.
- The **norm** $\|v\| = \sqrt{\langle v, v\rangle}$ is the length of $v$. In the Euclidean product it is Pythagoras' theorem: $\|(3, 4)\| = 5$.
- Four properties: $\|v\| > 0$ if $v \neq 0$; $\|\lambda v\| = |\lambda|\,\|v\|$; **Cauchy–Schwarz** $|\langle v, w\rangle| \le \|v\|\,\|w\|$; **triangle inequality** $\|v + w\| \le \|v\| + \|w\|$.
- The **distance** between two points is $d(P, Q) = \|Q - P\|$; it is positive, symmetric and satisfies the triangle inequality.
- The **angle** between two non-zero vectors is the $\vartheta \in [0, \pi]$ with $\cos\vartheta = \frac{\langle v, w\rangle}{\|v\|\,\|w\|}$. The sign of $\langle v, w\rangle$ tells you whether it is acute, right or obtuse.
- At the exam: norms and angles with a given $g_S$ (quiz and first part of the problems), matrix of a quadratic form, change of basis. All without a calculator: you need the cosines of the special angles.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## Change of basis (p. 100)

In lesson L19 you saw two matrices for the **same** scalar product, the Euclidean one of $\R^2$: in the canonical basis it is $I_2$, in the basis $\mathcal B = \{(1, 0), (1, 1)\}$ it is $\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$ (Example 19.14). What is the link between the two? You need a formula, like the one of lesson L16 for endomorphisms.

**The reminder from lesson L16.** If $\mathcal B = \{v_1, \dots, v_n\}$ and $\mathcal B' = \{v_1', \dots, v_n'\}$ are two bases of $V$, the **change-of-basis matrix** from $\mathcal B'$ to $\mathcal B$ is

$$M = [\id]^{\mathcal B'}_{\mathcal B}.$$

Its $i$-th column, which the handouts denote by $M^i$, contains the **coordinates of the new vector $v_i'$ in the old basis** $\mathcal B$: $M^i = [v_i']_{\mathcal B}$.

**The computation.** Let $S = [g]_{\mathcal B}$ and $S' = [g]_{\mathcal B'}$ be the matrices of the same scalar product $g$ in the two bases. By definition and by Corollary 19.16 (computation in coordinates in the basis $\mathcal B$):

$$S'_{ij} = g(v_i', v_j') = {}^t[v_i']_{\mathcal B}\,S\,[v_j']_{\mathcal B} = {}^t(M^i)\,S\,M^j.$$

On the right there is the row ${}^t(M^i)$, that is row $i$ of the matrix ${}^tM$, times $S$, times column $j$ of $M$: it is exactly the entry $(i, j)$ of the product ${}^tM\,S\,M$.

> [!PROP] 20.1
> We have
> $$S' = {}^tM\,S\,M.$$

> [!EXAMPLE] 20.2 · The Euclidean product in the basis $\{(1, 0), (1, 1)\}$
> For the Euclidean scalar product of $\R^2$, with respect to the basis $\mathcal B = \{(1, 0), (1, 1)\}$ we have already found $\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$. Here the "old" basis is the canonical one $\mathcal C$, where the matrix is $I_2$. The change-of-basis matrix is
> $$M = [\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$$
> (columns: the vectors of $\mathcal B$ written in the canonical basis), and indeed
> $$\begin{aligned} {}^tM\,I_2\,M &= \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} \\ &= \begin{pmatrix} 1 \cdot 1 + 0 \cdot 0 & 1 \cdot 1 + 0 \cdot 1 \\ 1 \cdot 1 + 1 \cdot 0 & 1 \cdot 1 + 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}. \end{aligned}$$

In the handouts, in this example, the matrix in the new basis is called $S$ and the old one is $I_2$: the names change, the rule does not. **Old** matrix in the middle, $M$ on the right, ${}^tM$ on the left.

> [!EXAMPLE] A basis in which $g_S$ becomes the identity
> Take $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ (Example 19.11) and the new basis $\mathcal B' = \{(1, -1), (0, 1)\}$. The old basis is the canonical one, so $M = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$. One product at a time:
> $$SM = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix},$$
> $${}^tM(SM) = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}.$$
> It is the same result that in lesson L19 (exercise 5) was obtained entry by entry: in the basis $\mathcal B'$ the product $g_S$ has matrix $I_2$.

> [!PITFALL] Transpose for scalar products, inverse for endomorphisms
> With the same $M = [\id]^{\mathcal B'}_{\mathcal B}$:
> - an **endomorphism** changes as $A' = M^{-1}A\,M$ (lesson L16);
> - a **scalar product** changes as $S' = {}^tM\,S\,M$.
>
> The two formulas give different results. With $M = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ and $I_2$: as an endomorphism (the identity) it stays $M^{-1}I_2M = I_2$; as a scalar product it becomes ${}^tMI_2M = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$. The two formulas give the same result for every matrix when ${}^tM = M^{-1}$: these are the orthogonal matrices of lesson L22.

> [!METHOD] Two ways of finding $[g]_{\mathcal B'}$
> 1. **Entry by entry** (lesson L19): $S'_{ij} = g(v_i', v_j')$. Convenient if $n = 2$ or if $g$ is given by a formula.
> 2. **With the formula** $S' = {}^tM\,S\,M$: put in the columns of $M$ the coordinates of the new vectors in the basis in which you know $S$; compute $SM$ first, then ${}^tM(SM)$.
>
> In both cases check at the end that $S'$ is **symmetric**: if it is not, there is a computation mistake.

> [!BEYOND] The sign of the determinant does not change
> By Binet's theorem (Theorem 10.4) and $\det({}^tM) = \det M$:
> $$\det S' = \det({}^tM)\det S\det M = (\det M)^2\det S.$$
> Since $M$ is invertible, $(\det M)^2 > 0$: $\det S'$ has **the same sign** as $\det S$. In particular $S'$ is degenerate if and only if $S$ is (it is the same scalar product). It is a good quick check at the exam. Martelli calls two symmetric matrices linked by $S' = {}^tM\,S\,M$ with $M$ invertible **congruent** (§7.2.3).

## Quadratic forms (pp. 100–102)

If in a scalar product you put the **same** vector in both slots, you get a second-degree polynomial in the coordinates. For example with $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$:

$$\begin{aligned} g_S(x, x) &= 2x_1x_1 + x_1x_2 + x_2x_1 + x_2x_2 \\ &= 2x_1^2 + 2x_1x_2 + x_2^2. \end{aligned}$$

The two mixed terms $x_1x_2$ and $x_2x_1$ are now **the same monomial** and add up. These polynomials have a name.

**Homogeneous polynomials.** A polynomial in the variables $x_1, \dots, x_n$ is **homogeneous** if all its monomials have the same degree. The handouts' examples:

| Polynomial | Monomials and degrees | Homogeneous of degree |
|---|---|--:|
| $x_1 + x_2 - 3x_3$ | three monomials of degree 1 | 1 |
| $2x_1x_2 - x_3^2 + x_1x_3$ | three monomials of degree 2 | 2 |
| $x_1^3 - x_2x_3^2$ | two monomials of degree 3 | 3 |

Instead $x_1^2 + x_2$ is not homogeneous (a monomial of degree 2 and one of degree 1), and neither is $x_1x_2 + 1$ (the constant has degree 0).

> [!DEF] 20.3 · Quadratic form
> A **quadratic form** is a homogeneous polynomial of degree 2 in the variables $x_1, \dots, x_n$.

In practice a quadratic form is a sum of terms of the form (number) $\cdot\, x_i^2$ and (number) $\cdot\, x_ix_j$, with no terms of degree 1 and no constants.

> [!PROP] 20.4
> Every quadratic form can be written in a unique way as
> $$q(x) = g_S(x, x) = \sum_{i,j=1}^n x_iS_{ij}x_j$$
> for a suitable symmetric matrix $S$.

The handouts' proof, with the steps explained.

1. A quadratic form is written $q(x) = \sum_{1 \le i \le j \le n} a_{ij}x_ix_j$. The condition $i \le j$ is there so as not to count the same monomial twice: $x_1x_2$ and $x_2x_1$ are the same, and it appears only once, with coefficient $a_{12}$.
2. Define $S_{ii} = a_{ii}$ on the diagonal and $S_{ij} = S_{ji} = \frac12 a_{ij}$ for $i < j$: the coefficient of the mixed monomial is **split in half** between the two symmetric positions.
3. In the sum $\sum_{i,j} S_{ij}x_ix_j$ the monomial $x_ix_j$ with $i < j$ appears twice, as $S_{ij}x_ix_j$ and as $S_{ji}x_jx_i$: in total $\frac12 a_{ij} + \frac12 a_{ij} = a_{ij}$, the right coefficient. The squares appear only once, with $S_{ii} = a_{ii}$. So $\sum_{i,j} S_{ij}x_ix_j = q(x)$.
4. The construction determines $S$ in a unique way: a **symmetric** matrix with $g_S(x, x) = q(x)$ must have the coefficients of the squares on the diagonal, and in each pair of positions $(i, j)$, $(j, i)$ two equal numbers with sum $a_{ij}$, so both are $\frac12 a_{ij}$. $\square$

> [!METHOD] From the form to the matrix and back
> - **Form → matrix.** The coefficient of $x_i^2$ goes in position $(i, i)$. The coefficient of $x_ix_j$ ($i \ne j$) is **divided by 2** and goes both in position $(i, j)$ and in position $(j, i)$. The variables that do not appear give rows and columns of zeros.
> - **Matrix → form.** $q_S(x) = \sum_i S_{ii}x_i^2 + \sum_{i < j} 2S_{ij}\,x_ix_j$: the squares with the diagonal coefficient, the mixed terms with **twice** the off-diagonal entry.

> [!EXAMPLE] 20.5 · There and back
> The symmetric matrices
> $$\begin{pmatrix} 1 & -3 \\ -3 & 0 \end{pmatrix}, \qquad \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{pmatrix}, \qquad \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix}$$
> define respectively the quadratic forms
> $$x_1^2 - 6x_1x_2, \quad x_1^2 + x_2^2 - x_3^2, \quad 2x_1x_2 + 2x_2x_3 + 2x_3x_1.$$
> Conversely, $q(x) = x_1^2 + 4x_1x_2 - x_2^2 + 4x_3^2$ is described by the matrix
> $$S = \begin{pmatrix} 1 & 2 & 0 \\ 2 & -1 & 0 \\ 0 & 0 & 4 \end{pmatrix}.$$

Check the steps. In the first matrix $S_{12} = -3$, so the mixed term is $2 \cdot (-3)\,x_1x_2 = -6x_1x_2$; $S_{22} = 0$, so $x_2^2$ does not appear. In the third, every off-diagonal entry equals 1 and gives $2x_ix_j$. In the last, the coefficient 4 of $x_1x_2$ is split into $2 + 2$ in positions $(1, 2)$ and $(2, 1)$, while $4x_3^2$ goes on the diagonal **whole**; $x_3$ does not appear in mixed terms, so row and column 3 have zeros off the diagonal.

> [!PITFALL] Half yes, half no
> You divide by two **only the coefficient of the mixed terms**, and only for **quadratic forms**. In the formula of a scalar product $g(x, y)$ the terms $x_1y_2$ and $x_2y_1$ are different and go into the matrix without halving (lesson L19). In the exam of 08/02/2024 (question 7) the wrong answers included precisely the matrices with the mixed coefficient not halved.

**The form of a matrix and positive definiteness.** The handouts denote by

$$q_S(x) = g_S(x, x)$$

the quadratic form defined by the symmetric matrix $S$. By the definition of positive definite product (Definition 19.2), with $v = x$:

$$g_S \text{ positive definite} \iff q_S(x) > 0 \quad \forall\, x \neq 0.$$

So to decide whether $g_S$ is positive definite it is enough to study the **sign** of a second-degree polynomial.

> [!BEYOND] Completing the squares, and going back from the form to the product
> **Completing the squares.** To see that a form is positive you rewrite it as a sum of squares with positive coefficients. For $q = 2x_1^2 + 2x_1x_2 + 2x_2^2$:
> $$q = 2\left(x_1 + \frac{x_2}2\right)^2 + \frac32 x_2^2,$$
> or
> $$q = x_1^2 + x_2^2 + (x_1 + x_2)^2.$$
> In both expressions $q \ge 0$, and $q = 0$ only if $x_2 = 0$ and $x_1 = 0$. For $2 \times 2$ matrices there is also the criterion of lesson L19: $\begin{pmatrix} a & b \\ b & c \end{pmatrix}$ is positive definite if and only if $a > 0$ and $ac - b^2 > 0$.
>
> **From the form to the product (polarisation).** The quadratic form contains all the information about the scalar product. Expanding $q(x + y) = g(x + y, x + y) = q(x) + 2g(x, y) + q(y)$ (lesson L19) you get
> $$g(x, y) = \frac12\big(q(x + y) - q(x) - q(y)\big).$$

The handouts say it explicitly: **for the rest of the lesson the scalar product is always positive definite**. It is needed for the square roots of the next section.

## The norm: the length of a vector (pp. 102–103)

In the plane, the vector $v = (3, 4)$ is the hypotenuse of a right triangle with legs 3 and 4. By Pythagoras' theorem its length is

$$\sqrt{3^2 + 4^2} = \sqrt{25} = 5.$$

Under the root there is exactly $\langle v, v\rangle = 3 \cdot 3 + 4 \cdot 4$. The idea of the norm is this: **the length is the root of the scalar product of a vector with itself**, whatever the scalar product.

```graph
title: $\|(3, 4)\| = \sqrt{3^2 + 4^2} = 5$: the Euclidean norm is Pythagoras' theorem
x: -1 5
y: -1 5
polygon: 0 0 3 0 3 4 | faint
vector: 3 4 | accent | thick | $v = (3, 4)$ | nw
segment: 0 0 3 0 | blue | $3$ | s
segment: 3 0 3 4 | amber | $4$ | e
```

> [!DEF] 20.6 · Norm
> Let $V$ be a vector space equipped with a positive definite scalar product. The **norm** of $v \in V$ is
> $$\|v\| = \sqrt{\langle v, v\rangle}.$$

Piece by piece:

- the norm is to be interpreted as the **length** of the vector;
- the product must be **positive definite**: this way $\langle v, v\rangle \ge 0$ and the square root makes sense in $\R$ (this is why the field is $\R$);
- the symbol $\|v\|$ has two bars so as not to confuse it with the absolute value $|x|$ of a number;
- the norm **depends on the scalar product**: the same vector can have different lengths with different products.

> [!EXAMPLE] 20.8 · The Euclidean norm
> For the Euclidean scalar product on $\R^n$:
> $$\|x\| = \sqrt{x_1^2 + \dots + x_n^2}.$$
> For example $\|(3, 4)\| = 5$, $\|(1, 2, 2)\| = \sqrt{1 + 4 + 4} = 3$, $\|(1, 1, 1, 1)\| = \sqrt 4 = 2$.

> [!EXAMPLE] 20.9 · A different norm
> Consider the scalar product $g_S$ on $\R^2$ defined by $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$. The norm of $x$ is
> $$\|x\| = \sqrt{2x_1^2 + 2x_1x_2 + x_2^2}.$$
> Under the root there is the quadratic form $q_S(x)$. Some values:
>
> | $x$ | $q_S(x) = 2x_1^2 + 2x_1x_2 + x_2^2$ | $\|x\|$ with $g_S$ | Euclidean $\|x\|$ |
> |---|---|---|---|
> | $(1, 0)$ | $2$ | $\sqrt 2$ | $1$ |
> | $(0, 1)$ | $1$ | $1$ | $1$ |
> | $(1, -1)$ | $2 - 2 + 1 = 1$ | $1$ | $\sqrt 2$ |
> | $(1, 1)$ | $2 + 2 + 1 = 5$ | $\sqrt 5$ | $\sqrt 2$ |

The properties that make the norm a good "length" are four.

> [!PROP] 20.7
> For every $v, w \in V$ and $\lambda \in \R$ the following hold:
> 1. $\|v\| > 0$ if $v \neq 0$ and $\|0\| = 0$,
> 2. $\|\lambda v\| = |\lambda|\,\|v\|$,
> 3. $|\langle v, w\rangle| \le \|v\|\,\|w\|$,
> 4. $\|v + w\| \le \|v\| + \|w\|$.
>
> (3) is the **Cauchy–Schwarz inequality** and (4) is the **triangle inequality**.

Piece by piece, with numbers:

- **(1)** only the zero vector has length zero. It is positive definiteness.
- **(2)** multiplying a vector by $\lambda$ multiplies the length by $|\lambda|$: $\|-3v\| = 3\|v\|$. The absolute value is needed because lengths are never negative.
- **(3)** the scalar product never exceeds, in absolute value, the product of the lengths. With $v = (1, 2)$ and $w = (3, 1)$: $|\langle v, w\rangle| = 5$ and $\|v\|\,\|w\| = \sqrt 5\sqrt{10} = \sqrt{50} \approx 7.07$. With $w = (2, 4) = 2v$ equality holds: $\langle v, w\rangle = 10 = \sqrt 5 \cdot \sqrt{20}$.
- **(4)** in a triangle one side does not exceed the sum of the other two. With $v = (3, 0)$ and $w = (0, 4)$: $\|v + w\| = \|(3, 4)\| = 5 \le 3 + 4 = 7$.

**Proof of points (1) and (2).** Point (1) comes from positive definiteness: if $v \ne 0$, then $\langle v, v\rangle > 0$ and its root is positive; $\langle 0, 0\rangle = 0$. For point (2), with axioms (2) and (5) of lesson L19:

$$\|\lambda v\| = \sqrt{\langle \lambda v, \lambda v\rangle} = \sqrt{\lambda^2\langle v, v\rangle} = \sqrt{\lambda^2}\,\sqrt{\langle v, v\rangle} = |\lambda|\,\|v\|,$$

because $\sqrt{\lambda^2} = |\lambda|$ (for example $\sqrt{(-3)^2} = 3$).

**Proof of Cauchy–Schwarz.** If $w = 0$ both sides equal 0. So let $w \neq 0$ and call $c = \frac{\langle v, w\rangle}{\langle w, w\rangle}$. The idea: the vector $v - cw$ is "what is left of $v$ after taking away the part in the direction of $w$" (in lesson L21 $cw$ will be called the **projection** of $v$ onto $w$). Its squared norm is $\ge 0$:

1. expand with bilinearity (like $(a - b)^2$):
   $$0 \le \|v - cw\|^2 = \langle v, v\rangle - 2c\langle v, w\rangle + c^2\langle w, w\rangle;$$
2. substitute $c = \frac{\langle v, w\rangle}{\|w\|^2}$:
   $$0 \le \|v\|^2 - 2\,\frac{\langle v, w\rangle^2}{\|w\|^2} + \frac{\langle v, w\rangle^2}{\|w\|^4}\,\|w\|^2 = \|v\|^2 - \frac{\langle v, w\rangle^2}{\|w\|^2};$$
3. multiply by $\|w\|^2 > 0$: $\langle v, w\rangle^2 \le \|v\|^2\|w\|^2$;
4. take the square root of both sides (they are $\ge 0$): $\sqrt{\langle v, w\rangle^2} = |\langle v, w\rangle|$, so $|\langle v, w\rangle| \le \|v\|\,\|w\|$. $\square$

**Proof of the triangle inequality.** Expand the square (lesson L19) and use Cauchy–Schwarz:

$$\begin{aligned} \|v + w\|^2 &= \|v\|^2 + \|w\|^2 + 2\langle v, w\rangle \\ &\le \|v\|^2 + \|w\|^2 + 2\|v\|\,\|w\| = \big(\|v\| + \|w\|\big)^2. \end{aligned}$$

The step with $\le$ uses $\langle v, w\rangle \le |\langle v, w\rangle| \le \|v\|\,\|w\|$. Finally you take the root of both sides, both $\ge 0$. $\square$

> [!BEYOND] When equality holds
> In Cauchy–Schwarz $=$ holds exactly when $v$ and $w$ are **parallel** (one is a multiple of the other): in step 1 equality means $\|v - cw\| = 0$, that is $v = cw$. In the triangle inequality $=$ holds when in addition they point in the **same direction** (you need $\langle v, w\rangle = \|v\|\,\|w\|$, not with the minus sign).

**Unit vectors.** A vector of norm 1 is called a **unit** vector. By property (2), if $v \neq 0$ the vector $\frac{v}{\|v\|}$ has norm $\frac{1}{\|v\|}\,\|v\| = 1$: dividing by the norm is called **normalising**. For example $\frac{(3, 4)}{5} = \left(\frac35, \frac45\right)$. The handouts use normalised vectors in the next section and orthonormal bases in lesson L21.

## Distances (p. 103)

With a length you immediately measure a distance: the distance between two points is the length of the vector that goes from one to the other. If $P, Q \in V$, we set

$$\overrightarrow{PQ} = Q - P.$$

The vector $\overrightarrow{PQ}$ starts at $P$ and ends at $Q$: it is computed as "end minus start".

> [!DEF] 20.10 · Distance
> The **distance** between $P$ and $Q$ is
> $$d(P, Q) = \|Q - P\|.$$

Examples with the Euclidean product:

- $P = (1, 2)$, $Q = (4, 6)$: $Q - P = (3, 4)$ and $d(P, Q) = 5$;
- $P = (1, 0, 2)$, $Q = (3, 1, 0)$: $Q - P = (2, 1, -2)$ and $d(P, Q) = \sqrt{4 + 1 + 4} = 3$.

With another product the distances change too. With $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ the distance between $P = (0, 0)$ and $Q = (1, -1)$ is $\|(1, -1)\|_S = 1$ (table of Example 20.9), while the Euclidean one is $\sqrt 2$.

> [!PROP] 20.11
> For every $P, Q, R \in V$:
> 1. $d(P, Q) > 0$ if $P \neq Q$ and $d(P, P) = 0$,
> 2. $d(P, Q) = d(Q, P)$,
> 3. $d(P, R) \le d(P, Q) + d(Q, R)$.

The explanation, point by point:

1. if $P \neq Q$ the vector $Q - P$ is not zero, so it has positive norm (Proposition 20.7, point 1); $d(P, P) = \|0\| = 0$;
2. $P - Q = (-1)(Q - P)$, so $\|P - Q\| = |-1|\,\|Q - P\| = \|Q - P\|$ (point 2 of the norm);
3. you split the path from $P$ to $R$ by going through $Q$: $R - P = (Q - P) + (R - Q)$. By the triangle inequality of the norm
   $$\begin{aligned} d(P, R) &= \|(Q - P) + (R - Q)\| \\ &\le \|Q - P\| + \|R - Q\| = d(P, Q) + d(Q, R). \end{aligned}$$

```graph
title: $d(P, R) = 5 \le d(P, Q) + d(Q, R) = 3 + 4$
x: 0 6
y: 0 6
point: 1 1 | accent | $P$ | sw
point: 4 1 | accent | $Q$ | se
point: 4 5 | accent | $R$ | ne
segment: 1 1 4 1 | blue | $3$ | s
segment: 4 1 4 5 | amber | $4$ | e
segment: 1 1 4 5 | green | thick | $5$ | nw
```

## Angles (p. 104)

In physics you learn the formula $\langle v, w\rangle = \|v\|\,\|w\|\cos\vartheta$, where $\vartheta$ is the angle between the two vectors. The course **turns it round** and uses it as the definition of the angle: the scalar product and the norms can be computed, and from them you get $\cos\vartheta$.

> [!DEF] 20.12 · Angle
> Let $V$ be equipped with a positive definite scalar product. The **angle** between two non-zero vectors $v, w \in V$ is the number $\vartheta \in [0, \pi]$ such that
> $$\cos\vartheta = \frac{\langle v, w\rangle}{\|v\|\,\|w\|}.$$

Piece by piece:

- the vectors must be **non-zero**, otherwise you would divide by zero;
- the angle is in **radians** and lies in $[0, \pi]$, that is between 0° and 180°: the angle between two vectors has no orientation and does not exceed a straight angle;
- **the definition makes sense thanks to Cauchy–Schwarz**: dividing $|\langle v, w\rangle| \le \|v\|\,\|w\|$ by $\|v\|\,\|w\| > 0$ you get
  $$-1 \le \frac{\langle v, w\rangle}{\|v\|\,\|w\|} \le 1,$$
  and for every number in $[-1, 1]$ there is **one and only one** $\vartheta \in [0, \pi]$ with that cosine;
- the same thing is written with the arccosine: $\vartheta = \arccos\frac{\langle v, w\rangle}{\|v\|\,\|w\|}$.

The sign of the scalar product decides the type of angle, because $\|v\|\,\|w\| > 0$ and the cosine in $[0, \pi]$ is positive before $\frac\pi2$ and negative after:

| $\langle v, w\rangle$ | $\cos\vartheta$ | The angle $\vartheta$ is |
|---|---|---|
| $> 0$ | $> 0$ | **acute**, $0 \le \vartheta < \frac\pi2$ |
| $= 0$ | $= 0$ | **right**, $\vartheta = \frac\pi2$ |
| $< 0$ | $< 0$ | **obtuse**, $\frac\pi2 < \vartheta \le \pi$ |

**Without a calculator**: at the exam you recognise the cosines of the special angles. It is worth having them on the sheet.

| $\vartheta$ | $0$ | $\frac\pi6$ | $\frac\pi4$ | $\frac\pi3$ | $\frac\pi2$ | $\frac{2\pi}3$ | $\frac{3\pi}4$ | $\frac{5\pi}6$ | $\pi$ |
|---|---|---|---|---|---|---|---|---|---|
| degrees | 0° | 30° | 45° | 60° | 90° | 120° | 135° | 150° | 180° |
| $\cos\vartheta$ | $1$ | $\frac{\sqrt3}2$ | $\frac{\sqrt2}2$ | $\frac12$ | $0$ | $-\frac12$ | $-\frac{\sqrt2}2$ | $-\frac{\sqrt3}2$ | $-1$ |

> [!EXAMPLE] Four angles with the Euclidean product
> 1. $v = (1, 0)$, $w = (1, 1)$: $\langle v, w\rangle = 1$, $\|v\| = 1$, $\|w\| = \sqrt 2$, so $\cos\vartheta = \frac1{\sqrt2} = \frac{\sqrt2}2$ and $\vartheta = \frac\pi4$.
> 2. $v = (1, 2)$, $w = (-2, 1)$: $\langle v, w\rangle = -2 + 2 = 0$, so $\vartheta = \frac\pi2$.
> 3. $v = (1, 0)$, $w = (-1, \sqrt3)$: $\langle v, w\rangle = -1$, $\|w\| = \sqrt{1 + 3} = 2$, so $\cos\vartheta = -\frac12$ and $\vartheta = \frac{2\pi}3$.
> 4. $v = (1, 1, 1)$, $w = (1, 2, 3)$: $\langle v, w\rangle = 6$, $\|v\| = \sqrt3$, $\|w\| = \sqrt{14}$, so $\cos\vartheta = \frac6{\sqrt{42}}$ and $\vartheta = \arccos\frac{6}{\sqrt{42}}$, which is not a special angle. It is question 10 of the exam of 07/09/2026.

```graph
title: $v = (1, 0)$ and $w = (-1, \sqrt 3)$: $\cos\vartheta = -\frac12$, so $\vartheta = \frac{2\pi}{3}$ (obtuse)
x: -2 2
y: -0.5 2
vector: 1 0 | accent | thick | $v$ | s
vector: -1 sqrt(3) | blue | thick | $w$ | nw
arc: 0 0 0.45 0 2pi/3 | amber | $\vartheta$
```

Try it with the tool: drag $v$ so that the product $u \cdot v$ changes sign, and watch the angle go from acute to right to obtuse. When $u \cdot v = 0$ the tool writes that the vectors are orthogonal. Careful: the tool writes the angle in **degrees** (90° corresponds to $\frac\pi2$), while at the exam radians are used.

```widget vettori
title: Norms, scalar product and angle
u: 2 1
v: -1 3
modo: scalare
modi: scalare
raggio: 5
```

**Angles with a non-Euclidean product.** The definition holds for **every** positive definite product. With $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, for example, $e_1$ and $e_2$ are no longer perpendicular: $g_S(e_1, e_2) = 1$, $\|e_1\| = \sqrt2$, $\|e_2\| = 1$, so $\cos\vartheta = \frac1{\sqrt2}$ and the angle between $e_1$ and $e_2$ is $\frac\pi4$ (exercise 7).

> [!NOTE] Link with computer science: cosine similarity
> The handouts end the lesson with a link. In many applications (search engines, recommender systems, image recognition) an object, for example a word, a document or an image, is represented by a vector $x \in \R^n$, often called an **embedding**. To compare two representations $x$ and $y$ one uses the **cosine similarity**
> $$\operatorname{sim}(x, y) = \frac{\langle x, y\rangle}{\|x\|\,\|y\|} = \cos\vartheta.$$
> It depends on the angle and **not on the length** of the vectors. If the embeddings are normalised ($\|x\| = \|y\| = 1$), the cosine similarity is simply the scalar product $\langle x, y\rangle$. Vectors pointing in similar directions have similarity close to 1.
>
> A small example: three documents described by the number of times four words appear in them, $d_1 = (2, 1, 0, 1)$, $d_2 = (4, 2, 0, 2)$, $d_3 = (0, 1, 3, 0)$. The second is the first "written twice": $\operatorname{sim}(d_1, d_2) = 1$, even though $d_2$ is longer. Instead $\operatorname{sim}(d_1, d_3) = \frac{1}{\sqrt6\sqrt{10}} = \frac{\sqrt{15}}{30} \approx 0.13$: they talk about different things.

> [!BEYOND] Where to find it in the book
> Martelli: §7.2.2 "Cambiamento di base" (p. 212) and §7.2.3 on congruent matrices (p. 213); §7.1.5 "Forme quadratiche" (pp. 203–204); chapter 8, §8.1.1 "Norma" (pp. 240–241), §8.1.2 with the applications of Cauchy–Schwarz and the parallelogram law (pp. 241–242), §8.1.3 "Angoli" (pp. 242–243), §8.1.4 "Distanze" (pp. 243–244). The book proves Cauchy–Schwarz in a slightly different way, with $\|av + bw\|^2 \ge 0$ for $a = \|w\|^2$ and $b = -\langle v, w\rangle$.

## Towards the exam

The written test of Linear Algebra and Geometry has 10 multiple-choice questions (5 answers, one right) and 2 problems worth 11 points, marked only with at least 6 points in the quiz; it lasts 2 hours, with no calculator, and only 4 handwritten pages of notes. 2026/27 exam sessions: 22/01 and 05/02/2027, at 14:00. The details are in lesson L01.

**What of this lesson appears in the 2023–2026 exam sessions**

1. **Norm and angle (quiz).** Exam of 07/09/2026: question 5 (norm of ${}^t(1, 1, 1)$ with an $S$ of order 3) and question 10 (Euclidean angle between ${}^t(1, 1, 1)$ and ${}^t(1, 2, 3)$). Exam of 03/06/2025, question 6 (angle with $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$). Exam of 08/02/2024, question 8 (angle between the polynomials $x$ and $x^2$).
2. **Quadratic form → matrix (quiz).** Exam of 08/02/2024, question 7.
3. **Change of basis (quiz).** Exams of 10/06/2024 and 03/06/2026, question 4: the matrix of $g_S$ in a new basis, with ${}^tMSM$ or entry by entry.
4. **Problems.** Part (1) of problem 12 of 03/07/2026 asks for norms and the cosine of the angle with a $g_S$ on $\R^3$; part (2) of problem 12 of 07/02/2025 asks for norms and angle of two polynomials; part (2) of problem 12 of 05/02/2026 asks for which values of a parameter two vectors are orthogonal with respect to $g_S$.

> [!METHOD] Norm and angle with a $g_S$
> 1. Compute the vectors $Sv$ and $Sw$ **once**.
> 2. $\|v\|^2 = {}^tv\,(Sv)$, $\|w\|^2 = {}^tw\,(Sw)$, $g_S(v, w) = {}^tv\,(Sw)$: they are Euclidean products between vectors you already know.
> 3. $\cos\vartheta = \frac{g_S(v, w)}{\|v\|\,\|w\|}$. Simplify the roots ($\frac{1}{\sqrt2} = \frac{\sqrt2}2$, $\frac{3}{\sqrt{12}} = \frac{\sqrt3}2$) and compare with the table of special angles.
> 4. If no special angle matches, the answer stays in the form $\arccos(\dots)$: in the quiz look for the equivalent option, perhaps written with a rationalised denominator.

**Three real exam questions, solved**

> [!EXAMPLE] Exam of 07/09/2026, question 5
> On $\R^3$ you are given $g_S$ with $S = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 0 \\ 1 & 0 & 1 \end{pmatrix}$. What is the norm of $v = {}^t(1, 1, 1)$? (Options: $\sqrt2$, $2$, $\sqrt7$, $\sqrt3$, $3$.)
>
> **Solution.** $Sv = (2 + 1 + 1,\ 1 + 2 + 0,\ 1 + 0 + 1) = (4, 3, 2)$, then $\|v\|^2 = {}^tv\,(Sv) = 4 + 3 + 2 = 9$, so $\|v\| = 3$. The typical mistake is to answer $\sqrt3$, the **Euclidean** norm of $(1, 1, 1)$: here the product is $g_S$.

> [!EXAMPLE] Exam of 03/06/2025, question 6
> With $g_S(v, w) = {}^tv\,S\,w$ and $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, what is the angle between $u = {}^t(0, 2)$ and $w = {}^t(\sqrt3, 1 - \sqrt3)$? (Options: $\frac\pi4$, $0$, $\frac\pi3$, $\arccos\frac{1 - \sqrt3}{\sqrt{7 - 2\sqrt3}}$, $\frac\pi2$.)
>
> **Solution.**
> - $Sw = \big(2\sqrt3 + 1 - \sqrt3,\ \sqrt3 + 1 - \sqrt3\big) = (\sqrt3 + 1,\ 1)$;
> - $g_S(u, w) = {}^tu\,(Sw) = 0 \cdot (\sqrt3 + 1) + 2 \cdot 1 = 2$;
> - $Su = (2, 2)$ and $\|u\|^2 = 0 \cdot 2 + 2 \cdot 2 = 4$, so $\|u\| = 2$;
> - $\|w\|^2 = {}^tw\,(Sw) = \sqrt3(\sqrt3 + 1) + (1 - \sqrt3) \cdot 1 = 3 + \sqrt3 + 1 - \sqrt3 = 4$, so $\|w\| = 2$.
>
> $\cos\vartheta = \frac{2}{2 \cdot 2} = \frac12$, so $\vartheta = \frac\pi3$. The option with the arccosine is the cosine computed with the **Euclidean** product: $\frac{0 \cdot \sqrt3 + 2(1 - \sqrt3)}{2\sqrt{3 + (1 - \sqrt3)^2}} = \frac{1 - \sqrt3}{\sqrt{7 - 2\sqrt3}}$, the trap for those who forget $S$.

> [!EXAMPLE] Exam of 10/06/2024, question 4
> Given $S = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 0 & 0 \\ 1 & 0 & 2 \end{pmatrix}$, what is the matrix of $g_S$ in the basis $\mathcal B = \{{}^t(1, 0, 0), {}^t(1, 1, 0), {}^t(1, 1, 1)\}$?
>
> **Solution with ${}^tMSM$.** $M = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{pmatrix}$ (columns: the vectors of the basis). First $SM = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \\ 1 & 1 & 3 \end{pmatrix}$, then
> $${}^tM(SM) = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 1 & 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \\ 1 & 1 & 3 \end{pmatrix} = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 3 & 4 \\ 3 & 4 & 7 \end{pmatrix}.$$
> Checks: the result is symmetric; $\det S = -2$ and $\det M = 1$, so the result must also have determinant $-2$ (and indeed $1(21 - 16) - 2(14 - 12) + 3(8 - 9) = 5 - 4 - 3 = -2$).
>
> The wrong answers are instructive: one was $M$ itself, which is not symmetric and is discarded at once; one was $S$, the matrix in the canonical basis; one was ${}^tM\,M = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 2 \\ 1 & 2 & 3 \end{pmatrix}$, that is the matrix of the **Euclidean** product in the basis $\mathcal B$, for those who forget $S$. The fastest way to choose is to compute a single entry: $S'_{22} = g_S(v_2, v_2) = {}^t(1, 1, 0)\,S\,(1, 1, 0) = {}^t(1, 1, 0)\,(2, 1, 1) = 3$, and only one of the five matrices has 3 in position $(2, 2)$.

**Mistakes to avoid**

- Using the **Euclidean** product when a $g_S$ is given (see the two traps above).
- Forgetting the **root**: $\|v\|^2 = 9$ means $\|v\| = 3$.
- Using $M^{-1}SM$ instead of ${}^tMSM$.
- Not halving the mixed coefficients of a quadratic form.
- Giving the angle in degrees or outside $[0, \pi]$: a negative cosine gives an **obtuse** angle, not a negative angle.

> [!EXAM] On the 4-page sheet
> - $S' = {}^tM\,S\,M$ with $M = [\id]^{\mathcal B'}_{\mathcal B}$ (columns = new vectors in the old basis); $\det S' = (\det M)^2\det S$.
> - Quadratic form: diagonal = coefficients of the squares, off the diagonal = **half** of the mixed coefficients.
> - $\|v\| = \sqrt{\langle v, v\rangle}$; $|\langle v, w\rangle| \le \|v\|\,\|w\|$; $\|v + w\|^2 = \|v\|^2 + 2\langle v, w\rangle + \|w\|^2$.
> - $d(P, Q) = \|Q - P\|$; $\cos\vartheta = \frac{\langle v, w\rangle}{\|v\|\,\|w\|}$, $\vartheta \in [0, \pi]$.
> - The table of the cosines of the special angles.

## Quiz

```quiz
Q: The quadratic form $q(x) = x_1^2 - 4x_1x_2 + 3x_3^2$ can be written as $q_S(x) = {}^tx\,S\,x$ with $S$ symmetric equal to:
+ $\begin{pmatrix} 1 & -2 & 0 \\ -2 & 0 & 0 \\ 0 & 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & -4 & 0 \\ -4 & 0 & 0 \\ 0 & 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & -4 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & -2 & 0 \\ -2 & 3 & 0 \\ 0 & 0 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 & 0 \\ 2 & 0 & 0 \\ 0 & 0 & 3 \end{pmatrix}$
= On the diagonal the coefficients of the squares: $1$ for $x_1^2$, $0$ for $x_2^2$, $3$ for $x_3^2$. The coefficient $-4$ of $x_1x_2$ is split: $-2$ in positions $(1, 2)$ and $(2, 1)$. The second matrix gives $-8x_1x_2$; the third gives the right form but is not symmetric; the fourth puts $3$ on $x_2^2$; the last has the wrong sign. Similar to the exam of 08/02/2024, question 7.

Q: Which quadratic form is defined by the matrix $S = \begin{pmatrix} 0 & 1 & -1 \\ 1 & 2 & 0 \\ -1 & 0 & 0 \end{pmatrix}$?
+ $2x_2^2 + 2x_1x_2 - 2x_1x_3$
- $2x_2^2 + x_1x_2 - x_1x_3$
- $2x_2^2 + 2x_1x_2 + 2x_1x_3$
- $x_1^2 + 2x_2^2 + 2x_1x_2 - 2x_1x_3$
- $2x_2^2 + 4x_1x_2 - 4x_1x_3$
= $q_S(x) = \sum_i S_{ii}x_i^2 + \sum_{i < j} 2S_{ij}x_ix_j$: from the diagonal only $2x_2^2$; off the diagonal $2 \cdot 1 \cdot x_1x_2$ and $2 \cdot (-1) \cdot x_1x_3$; $S_{23} = 0$. Whoever forgets to double gets the second answer.

Q: On $\R^3$ let $g_S$ be the scalar product with $S = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 1 & 2 \end{pmatrix}$. What is the norm of $v = {}^t(1, 1, 1)$ with respect to $g_S$?
+ $\sqrt{10}$
- $10$
- $\sqrt3$
- $3$
- $\sqrt7$
= $Sv = (1 + 1,\ 1 + 3 + 1,\ 1 + 2) = (2, 5, 3)$ and $\|v\|^2 = {}^tv\,(Sv) = 2 + 5 + 3 = 10$, so $\|v\| = \sqrt{10}$. $10$ is the square of the norm; $\sqrt3$ is the Euclidean norm. Similar to the exam of 07/09/2026, question 5.

Q: With respect to the Euclidean scalar product, what is the angle between ${}^t(1, 0, 1)$ and ${}^t(1, 1, 0)$?
+ $\frac\pi3$
- $\frac\pi6$
- $\frac\pi4$
- $\frac{2\pi}3$
- $\arccos\frac14$
= Product $1 + 0 + 0 = 1$, norms $\sqrt2$ and $\sqrt2$: $\cos\vartheta = \frac{1}{2}$, so $\vartheta = \frac\pi3$. The cosine is positive, so the angle is acute: $\frac{2\pi}3$ has cosine $-\frac12$. Similar to the exam of 07/09/2026, question 10.

Q: Let $g_S$ be the scalar product on $\R^2$ with $S = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. What is the angle between ${}^t(1, 0)$ and ${}^t(1, 1)$ with respect to $g_S$?
+ $\frac\pi6$
- $\frac\pi4$
- $\frac\pi3$
- $0$
- $\arccos\frac34$
= $g_S(e_1, (1, 1)) = S_{11} + S_{12} = 3$; $\|e_1\|^2 = S_{11} = 2$; $\|(1, 1)\|^2 = 2 + 1 + 1 + 2 = 6$. So $\cos\vartheta = \frac{3}{\sqrt2\sqrt6} = \frac{3}{\sqrt{12}} = \frac{\sqrt3}2$ and $\vartheta = \frac\pi6$. The answer $\frac\pi4$ is the **Euclidean** angle. Similar to the exam of 03/06/2025, question 6.

Q: On $\R_2[x]$ consider the product $\langle p, q\rangle = p(-1)q(-1) + p(0)q(0) + p(1)q(1)$. The angle between $p(x) = x$ and $q(x) = x + x^2$ is:
+ $\frac\pi4$
- $\frac\pi2$
- $\frac\pi3$
- $0$
- $\frac\pi6$
= Values at $-1, 0, 1$: $x \to (-1, 0, 1)$, $x + x^2 \to (0, 0, 2)$. Then $\langle p, q\rangle = 0 + 0 + 2 = 2$, $\|p\| = \sqrt2$, $\|q\| = 2$, and $\cos\vartheta = \frac{2}{2\sqrt2} = \frac{\sqrt2}2$: $\vartheta = \frac\pi4$. Similar to the exam of 08/02/2024, question 8.

Q: Let $S = [g]_{\mathcal B}$ and $S' = [g]_{\mathcal B'}$ be the matrices of the same scalar product in two bases, and let $M = [\id]^{\mathcal B'}_{\mathcal B}$. Which relation always holds?
+ $S' = {}^tM\,S\,M$
- $S' = M^{-1}S\,M$
- $S' = M\,S\,{}^tM$
- $S' = {}^tM\,S$
- $S' = S$
= It is Proposition 20.1: $S'_{ij} = g(v_i', v_j') = {}^t(M^i)\,S\,M^j$. The formula with the inverse holds for endomorphisms. The matrix of a scalar product depends on the basis, so $S' = S$ is false in general. It is needed in the exams of 10/06/2024 and 03/06/2026, question 4.

Q: Which statement is true for every pair of vectors $v, w$ of a space with a positive definite scalar product?
+ $|\langle v, w\rangle| \le \|v\|\,\|w\|$
- $\|v + w\| = \|v\| + \|w\|$
- $\|v + w\|^2 = \|v\|^2 + \|w\|^2$
- $\|\lambda v\| = \lambda\,\|v\|$ for every $\lambda \in \R$
- $\langle v, w\rangle \ge 0$
= It is Cauchy–Schwarz. The second holds only for parallel vectors pointing the same way; the third (Pythagoras) only if $\langle v, w\rangle = 0$; the fourth is false for $\lambda < 0$ (you need $|\lambda|$); the last is false for $w = -v \ne 0$.

Q: What is the Euclidean distance between the points $P = (1, 2, 3)$ and $Q = (3, 3, 5)$?
N: 3
= $Q - P = (2, 1, 2)$ and $d(P, Q) = \sqrt{4 + 1 + 4} = \sqrt9 = 3$.

Q: Let $v, w$ be vectors with $\|v\| = 2$, $\|w\| = 3$ and $\langle v, w\rangle = 1$. What is $\|v + w\|^2$?
N: 15
= $\|v + w\|^2 = \|v\|^2 + 2\langle v, w\rangle + \|w\|^2 = 4 + 2 + 9 = 15$ (expansion of the square with bilinearity).
```

## Exercises

::: exercise intermediate Exercise 20.13 of the handouts
On $\R^2$ consider the scalar product $g(x, y) = 2x_1y_1 + x_1y_2 + x_2y_1 + 2x_2y_2$.
1. Find the matrix associated with $g$ with respect to the canonical basis and the corresponding quadratic form.
2. Check that $g$ is positive definite.
3. Compute the norms of $e_1, e_2$ and the angle between these two vectors.
4. Find the matrix associated with $g$ with respect to the basis $\mathcal B = \{(1, 1), (1, -1)\}$.
::: solution
**1.** The coefficient of $x_iy_j$ goes in position $(i, j)$ (lesson L19):
$$S = [g]_{\mathcal C} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}.$$
The quadratic form is $q(x) = g(x, x) = 2x_1^2 + x_1x_2 + x_2x_1 + 2x_2^2 = 2x_1^2 + 2x_1x_2 + 2x_2^2$.

**2.** I complete the square:
$$\begin{aligned} q(x) &= 2\left(x_1^2 + x_1x_2\right) + 2x_2^2 \\ &= 2\left(x_1 + \frac{x_2}2\right)^2 - \frac{x_2^2}2 + 2x_2^2 \\ &= 2\left(x_1 + \frac{x_2}2\right)^2 + \frac32 x_2^2. \end{aligned}$$
Both summands are $\ge 0$; the sum is 0 only if $x_2 = 0$ and then $x_1 = 0$. So $q(x) > 0$ for every $x \neq 0$: $g$ is positive definite. (With the $2 \times 2$ criterion: $2 > 0$ and $\det S = 3 > 0$.)

**3.** By Corollary 19.9: $\|e_1\|^2 = S_{11} = 2$ and $\|e_2\|^2 = S_{22} = 2$, so $\|e_1\| = \|e_2\| = \sqrt2$. Then $g(e_1, e_2) = S_{12} = 1$:
$$\cos\vartheta = \frac{1}{\sqrt2\,\sqrt2} = \frac12, \qquad \vartheta = \frac\pi3.$$
For this product $e_1$ and $e_2$ form an angle of 60°, not of 90°.

**4.** With $M = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$ (columns: the vectors of $\mathcal B$):
$$SM = \begin{pmatrix} 2 + 1 & 2 - 1 \\ 1 + 2 & 1 - 2 \end{pmatrix} = \begin{pmatrix} 3 & 1 \\ 3 & -1 \end{pmatrix},$$
$${}^tM(SM) = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} 3 & 1 \\ 3 & -1 \end{pmatrix} = \begin{pmatrix} 6 & 0 \\ 0 & 2 \end{pmatrix}.$$
Check entry by entry: $g((1, 1), (1, 1)) = 2 + 1 + 1 + 2 = 6$; $g((1, 1), (1, -1)) = 2 - 1 + 1 - 2 = 0$; $g((1, -1), (1, -1)) = 2 - 1 - 1 + 2 = 2$. ✓ The matrix is diagonal: the two vectors of $\mathcal B$ are orthogonal for $g$ (lesson L21).
:::

::: exercise basic Euclidean norms and distances
(a) Compute $\|(2, -1, 2)\|$ and normalise the vector. (b) Compute the distance between $P = (1, 1, 1)$ and $Q = (3, -1, 2)$. (c) Normalise $(1, 1, 1, 1)$ in $\R^4$.
::: solution
(a) $\|(2, -1, 2)\| = \sqrt{4 + 1 + 4} = 3$; normalised: $\frac13(2, -1, 2) = \left(\frac23, -\frac13, \frac23\right)$. Check: $\frac{4 + 1 + 4}{9} = 1$. ✓

(b) $Q - P = (2, -2, 1)$ and $d(P, Q) = \sqrt{4 + 4 + 1} = 3$.

(c) $\|(1, 1, 1, 1)\| = \sqrt4 = 2$; normalised: $\left(\frac12, \frac12, \frac12, \frac12\right)$.
:::

::: exercise basic Five Euclidean angles
Compute the angle between: (a) $(1, 2, 2)$ and $(2, -1, 2)$; (b) $(1, 1)$ and $(1, -1)$; (c) $(1, \sqrt3)$ and $(\sqrt3, 1)$; (d) $(1, 0, 1)$ and $(0, 1, 1)$; (e) $(1, 1, 0)$ and $(-1, 0, -1)$.
::: solution
(a) $\langle v, w\rangle = 2 - 2 + 4 = 4$, norms $3$ and $3$: $\cos\vartheta = \frac49$, $\vartheta = \arccos\frac49$ (acute, not a special angle).

(b) $\langle v, w\rangle = 1 - 1 = 0$: $\vartheta = \frac\pi2$.

(c) $\langle v, w\rangle = \sqrt3 + \sqrt3 = 2\sqrt3$, norms $\sqrt{1 + 3} = 2$ and $2$: $\cos\vartheta = \frac{2\sqrt3}4 = \frac{\sqrt3}2$, $\vartheta = \frac\pi6$.

(d) $\langle v, w\rangle = 0 + 0 + 1 = 1$, norms $\sqrt2$ and $\sqrt2$: $\cos\vartheta = \frac12$, $\vartheta = \frac\pi3$.

(e) $\langle v, w\rangle = -1 + 0 + 0 = -1$, norms $\sqrt2$ and $\sqrt2$: $\cos\vartheta = -\frac12$, $\vartheta = \frac{2\pi}3$ (obtuse).
:::

::: exercise basic Quadratic forms and matrices
(a) Write the symmetric matrices of $q_1 = x_1^2 - 2x_1x_2 + 3x_2^2$ on $\R^2$, of $q_2 = x_2^2 + x_1x_3$ on $\R^3$ and of $q_3 = x_1^2 + 4x_1x_2$ on $\R^3$. (b) Write the quadratic forms of the matrices $\begin{pmatrix} 3 & 1 \\ 1 & 0 \end{pmatrix}$ and $\begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 2 \\ 0 & 2 & -1 \end{pmatrix}$.
::: solution
(a) Diagonal = coefficients of the squares, off the diagonal = half of the mixed coefficients:
$$S_1 = \begin{pmatrix} 1 & -1 \\ -1 & 3 \end{pmatrix}, \qquad S_2 = \begin{pmatrix} 0 & 0 & \frac12 \\ 0 & 1 & 0 \\ \frac12 & 0 & 0 \end{pmatrix},$$
$$S_3 = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}.$$
In $S_3$ the variable $x_3$ does not appear: row and column 3 are zero (and the matrix must still be written as $3 \times 3$, because the form is on $\R^3$).

(b) Squares from the diagonal, mixed terms with twice the entry:
$$3x_1^2 + 2x_1x_2, \qquad 2x_1x_2 + 4x_2x_3 - x_3^2.$$
:::

::: exercise intermediate Changing basis to see that a product is positive definite
Let $S = \begin{pmatrix} 1 & 2 \\ 2 & 5 \end{pmatrix}$ and $\mathcal B' = \{(1, 0), (-2, 1)\}$. (a) Compute $[g_S]_{\mathcal B'}$ with Proposition 20.1. (b) Deduce that $g_S$ is positive definite.
::: solution
(a) $M = \begin{pmatrix} 1 & -2 \\ 0 & 1 \end{pmatrix}$. First
$$SM = \begin{pmatrix} 1 & -2 + 2 \\ 2 & -4 + 5 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix},$$
then
$${}^tM(SM) = \begin{pmatrix} 1 & 0 \\ -2 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ -2 + 2 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}.$$

(b) In coordinates with respect to $\mathcal B'$ the product becomes $g_S(v, v) = \lambda_1^2 + \lambda_2^2$ (Corollary 19.16 with the matrix $I_2$), where $(\lambda_1, \lambda_2) = [v]_{\mathcal B'}$. If $v \neq 0$ its coordinates are not both zero, so $g_S(v, v) > 0$. It is the same result as completing the square $x_1^2 + 4x_1x_2 + 5x_2^2 = (x_1 + 2x_2)^2 + x_2^2$: the new coordinates are exactly $\lambda_1 = x_1 + 2x_2$ and $\lambda_2 = x_2$.
:::

::: exercise intermediate Cauchy–Schwarz and the triangle inequality with numbers
Let $v = (1, -2, 2)$ and $w = (3, 0, 4)$. (a) Check Cauchy–Schwarz. (b) Check the triangle inequality. (c) Find a vector $w'$ for which Cauchy–Schwarz becomes an equality.
::: solution
(a) $\langle v, w\rangle = 3 + 0 + 8 = 11$; $\|v\| = \sqrt{1 + 4 + 4} = 3$; $\|w\| = \sqrt{9 + 16} = 5$. Indeed $11 \le 15$.

(b) $v + w = (4, -2, 6)$ and $\|v + w\| = \sqrt{16 + 4 + 36} = \sqrt{56} = 2\sqrt{14}$. Since $56 < 64$, $\sqrt{56} < 8 = 3 + 5$ holds. ✓ (Without a calculator you compare the squares.)

(c) You need a vector parallel to $v$, for example $w' = -2v = (-2, 4, -4)$: $|\langle v, w'\rangle| = |{-2}\langle v, v\rangle| = 18$ and $\|v\|\,\|w'\| = 3 \cdot 6 = 18$.
:::

::: exercise intermediate Measuring with $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$
With the product $g_S$: (a) compute the distance between $P = (1, 2)$ and $Q = (2, 1)$ and compare it with the Euclidean one; (b) compute the angle between $e_1$ and $e_2$.
::: solution
(a) $Q - P = (1, -1)$ and $\|(1, -1)\|^2 = 2 \cdot 1 + 2 \cdot 1 \cdot (-1) + 1 = 1$, so $d_S(P, Q) = 1$. The Euclidean distance is $\sqrt{1 + 1} = \sqrt2$.

(b) $g_S(e_1, e_2) = S_{12} = 1$, $\|e_1\| = \sqrt{S_{11}} = \sqrt2$, $\|e_2\| = \sqrt{S_{22}} = 1$. So $\cos\vartheta = \frac{1}{\sqrt2} = \frac{\sqrt2}2$ and $\vartheta = \frac\pi4$.
:::

::: exercise intermediate Angles between polynomials
On $\R_2[x]$ let $\langle p, q\rangle = p(-1)q(-1) + p(0)q(0) + p(1)q(1)$. Compute: (a) $\|x\|$; (b) the angle between $1$ and $x^2$; (c) the angle between $x$ and $1 + x^2$.
::: solution
Values at $-1, 0, 1$: $1 \to (1, 1, 1)$, $x \to (-1, 0, 1)$, $x^2 \to (1, 0, 1)$, $1 + x^2 \to (2, 1, 2)$.

(a) $\|x\|^2 = 1 + 0 + 1 = 2$, so $\|x\| = \sqrt2$.

(b) $\langle 1, x^2\rangle = 1 + 0 + 1 = 2$, $\|1\| = \sqrt3$, $\|x^2\| = \sqrt2$: $\cos\vartheta = \frac{2}{\sqrt6} = \frac{2\sqrt6}{6} = \frac{\sqrt6}3$, so $\vartheta = \arccos\frac{\sqrt6}3$.

(c) $\langle x, 1 + x^2\rangle = -2 + 0 + 2 = 0$: the two polynomials are orthogonal, $\vartheta = \frac\pi2$.
:::

::: exercise hard Parallelogram law and polarisation
Prove that in every space with a positive definite scalar product (a) $\|v + w\|^2 + \|v - w\|^2 = 2\big(\|v\|^2 + \|w\|^2\big)$; (b) $\langle v, w\rangle = \frac14\big(\|v + w\|^2 - \|v - w\|^2\big)$. (c) Check both with $v = (1, 2)$, $w = (3, -1)$.
::: solution
Expanding with bilinearity (lesson L19):
$$\begin{aligned} \|v + w\|^2 &= \|v\|^2 + 2\langle v, w\rangle + \|w\|^2, \\ \|v - w\|^2 &= \|v\|^2 - 2\langle v, w\rangle + \|w\|^2. \end{aligned}$$

(a) Adding, the terms $\pm 2\langle v, w\rangle$ cancel out: $2\|v\|^2 + 2\|w\|^2$. Geometrically: in a parallelogram the sum of the squares of the diagonals equals the sum of the squares of the four sides.

(b) Subtracting, $\|v\|^2$ and $\|w\|^2$ cancel out: $\|v + w\|^2 - \|v - w\|^2 = 4\langle v, w\rangle$.

(c) $v + w = (4, 1)$, $v - w = (-2, 3)$: $\|v + w\|^2 = 17$, $\|v - w\|^2 = 13$. (a): $17 + 13 = 30 = 2(5 + 10)$. ✓ (b): $\frac14(17 - 13) = 1 = \langle v, w\rangle = 3 - 2$. ✓
:::

::: exercise hard The angles of a triangle in space
Let $A = (1, 0, 0)$, $B = (0, 1, 0)$, $C = (0, 0, 2)$. Compute the cosines of the three angles of the triangle $ABC$ and check that the triangle is isosceles. Then check that the angle at $C$ equals $\pi$ minus twice the angle at $A$.
::: solution
The angle at a vertex is the angle between the two vectors that start from that vertex.

- At $A$: $B - A = (-1, 1, 0)$, $C - A = (-1, 0, 2)$; product $1$, norms $\sqrt2$ and $\sqrt5$: $\cos\alpha = \frac{1}{\sqrt{10}}$.
- At $B$: $A - B = (1, -1, 0)$, $C - B = (0, -1, 2)$; product $1$, norms $\sqrt2$ and $\sqrt5$: $\cos\beta = \frac{1}{\sqrt{10}}$.
- At $C$: $A - C = (1, 0, -2)$, $B - C = (0, 1, -2)$; product $4$, norms $\sqrt5$ and $\sqrt5$: $\cos\gamma = \frac45$.

$\alpha = \beta$ and the sides $AC$ and $BC$ have the same length $\sqrt5$: the triangle is isosceles. Now I compute the cosine of $\pi - 2\alpha$ with the formulas $\cos(\pi - t) = -\cos t$ and $\cos 2\alpha = 2\cos^2\alpha - 1$:
$$\cos(\pi - 2\alpha) = -(2\cos^2\alpha - 1) = -\left(\frac{2}{10} - 1\right) = \frac45 = \cos\gamma.$$
Since $\cos\alpha = \frac{1}{\sqrt{10}} > 0$, the angle $\alpha$ is acute, so $\pi - 2\alpha$ lies in $[0, \pi]$, like $\gamma$; and in $[0, \pi]$ the cosine takes each value only once. So $\gamma = \pi - 2\alpha$, that is $\alpha + \beta + \gamma = \pi$, as it must be in a triangle.
:::

::: exercise exam Norms, angle and distance with a $g_S$ on $\R^3$
Let $S = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$ (positive definite, lesson L19, exercise 11), $u = {}^t(1, 0, 1)$, $v = {}^t(0, 1, 1)$. Compute with respect to $g_S$: (a) $\|u\|$ and $\|v\|$; (b) the cosine of the angle between $u$ and $v$; (c) the distance between $u$ and $v$.
::: solution
First the vectors $Su$ and $Sv$:
$$\begin{aligned} Su &= (1 + 0 + 0,\ 1 + 0 + 0,\ 0 + 0 + 3) = (1, 1, 3), \\ Sv &= (0 + 1 + 0,\ 0 + 2 + 0,\ 0 + 0 + 3) = (1, 2, 3). \end{aligned}$$

(a) $\|u\|^2 = {}^tu\,(Su) = 1 + 0 + 3 = 4$, so $\|u\| = 2$; $\|v\|^2 = {}^tv\,(Sv) = 0 + 2 + 3 = 5$, so $\|v\| = \sqrt5$.

(b) $g_S(u, v) = {}^tu\,(Sv) = 1 + 0 + 3 = 4$, so
$$\cos\vartheta = \frac{4}{2\sqrt5} = \frac{2}{\sqrt5} = \frac{2\sqrt5}5.$$

(c) $v - u = (-1, 1, 0)$ and $S(v - u) = Sv - Su = (0, 1, 0)$, so $\|v - u\|^2 = {}^t(-1, 1, 0)\,(0, 1, 0) = 1$ and $d(u, v) = 1$. Check with the expansion of the square: $\|v - u\|^2 = \|v\|^2 - 2g_S(u, v) + \|u\|^2 = 5 - 8 + 4 = 1$. ✓
:::

::: exercise exam Orthogonality with a parameter
Let $g_S$ on $\R^2$ with $S = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. (a) For which $k$ are the vectors $u = (1, 0)$ and $v = (k, 1)$ orthogonal with respect to $g_S$? (b) For that $k$, what is $\|v\|$? (c) What is the angle between $u$ and $(1, 1)$?
::: solution
(a) $g_S(u, v) = {}^tu\,S\,v$; the row ${}^tu\,S$ is the first row of $S$, $(2, 1)$, so $g_S(u, v) = 2k + 1$. It is 0 for $k = -\frac12$.

(b) $v = \left(-\frac12, 1\right)$, $Sv = \left(-1 + 1,\ -\frac12 + 2\right) = \left(0, \frac32\right)$, so $\|v\|^2 = -\frac12 \cdot 0 + 1 \cdot \frac32 = \frac32$ and $\|v\| = \sqrt{\frac32} = \frac{\sqrt6}2$.

(c) $g_S(u, (1, 1)) = 2 + 1 = 3$, $\|u\|^2 = 2$, $\|(1, 1)\|^2 = 2 + 1 + 1 + 2 = 6$: $\cos\vartheta = \frac{3}{\sqrt{12}} = \frac{\sqrt3}2$, so $\vartheta = \frac\pi6$. (With the Euclidean product it would be $\frac\pi4$.)
:::

## Review questions

::: question How does the matrix of a scalar product change when you change basis? Where does the formula come from?
$S' = {}^tM\,S\,M$ with $M = [\id]^{\mathcal B'}_{\mathcal B}$. It comes from $S'_{ij} = g(v_i', v_j') = {}^t[v_i']_{\mathcal B}\,S\,[v_j']_{\mathcal B}$ and from the fact that $[v_i']_{\mathcal B}$ is column $i$ of $M$.
:::

::: question What is the difference with the change-of-basis formula for endomorphisms?
For an endomorphism $A' = M^{-1}A\,M$; for a scalar product $S' = {}^tM\,S\,M$. The two formulas give the same result for every matrix when ${}^tM = M^{-1}$, that is when $M$ is orthogonal (lesson L22).
:::

::: question What is a quadratic form? How do you find its matrix?
A homogeneous polynomial of degree 2 in $x_1, \dots, x_n$. The symmetric matrix $S$ with $q = q_S$ is unique: on the diagonal the coefficients of $x_i^2$, in positions $(i, j)$ and $(j, i)$ half the coefficient of $x_ix_j$.
:::

::: question How do you read the positive definiteness of $g_S$ off the quadratic form?
$g_S$ is positive definite if and only if $q_S(x) = {}^tx\,S\,x > 0$ for every $x \neq 0$. To check it you can complete the square, or for $2 \times 2$ check $a > 0$ and $\det S > 0$.
:::

::: question What is the norm of a vector? Why is a positive definite product needed?
$\|v\| = \sqrt{\langle v, v\rangle}$, the length of $v$. You need $\langle v, v\rangle \ge 0$ to be able to take the root, and $\langle v, v\rangle > 0$ for $v \ne 0$ so that only the zero vector has length zero.
:::

::: question Why $\|\lambda v\| = |\lambda|\,\|v\|$ and not $\lambda\|v\|$?
Because $\|\lambda v\| = \sqrt{\lambda^2\langle v, v\rangle}$ and $\sqrt{\lambda^2} = |\lambda|$. With $\lambda = -1$: $\|-v\| = \|v\|$, a vector and its opposite are equally long.
:::

::: question State Cauchy–Schwarz and explain the idea of the proof.
$|\langle v, w\rangle| \le \|v\|\,\|w\|$. For $w \ne 0$ you use $0 \le \|v - cw\|^2$ with $c = \frac{\langle v, w\rangle}{\langle w, w\rangle}$: expanding you get $0 \le \|v\|^2 - \frac{\langle v, w\rangle^2}{\|w\|^2}$, that is $\langle v, w\rangle^2 \le \|v\|^2\|w\|^2$.
:::

::: question How do you derive the triangle inequality from Cauchy–Schwarz?
$\|v + w\|^2 = \|v\|^2 + \|w\|^2 + 2\langle v, w\rangle \le \|v\|^2 + \|w\|^2 + 2\|v\|\,\|w\| = (\|v\| + \|w\|)^2$, then you take the root.
:::

::: question How is the distance between two points defined? What properties does it have?
$d(P, Q) = \|Q - P\|$. It is positive for $P \ne Q$ and zero for $P = Q$, it is symmetric, and $d(P, R) \le d(P, Q) + d(Q, R)$ because $R - P = (Q - P) + (R - Q)$.
:::

::: question How is the angle between two vectors defined? Why does the definition make sense?
It is the $\vartheta \in [0, \pi]$ with $\cos\vartheta = \frac{\langle v, w\rangle}{\|v\|\,\|w\|}$, for $v, w \ne 0$. By Cauchy–Schwarz the ratio lies in $[-1, 1]$, and the cosine takes each value of $[-1, 1]$ exactly once in $[0, \pi]$.
:::

::: question How do you tell whether an angle is acute, right or obtuse without computing it?
From the sign of $\langle v, w\rangle$: positive acute, zero right, negative obtuse.
:::

::: question What is cosine similarity and why does it not depend on the length of the vectors?
$\operatorname{sim}(x, y) = \frac{\langle x, y\rangle}{\|x\|\,\|y\|} = \cos\vartheta$. If you multiply $x$ by $\lambda > 0$, numerator and denominator are both multiplied by $\lambda$, and the ratio does not change.
:::

## Glossary

```glossary
Change-of-basis matrix | $M = [\id]^{\mathcal B'}_{\mathcal B}$: column $i$ contains the coordinates of the new vector $v_i'$ in the old basis $\mathcal B$.
Formula ${}^tMSM$ | Link between the matrices of the same scalar product in two bases: $[g]_{\mathcal B'} = {}^tM\,[g]_{\mathcal B}\,M$.
Congruent matrices | (Martelli's term.) Symmetric matrices with $S' = {}^tM\,S\,M$ for an invertible $M$; their determinants have the same sign.
Homogeneous polynomial | Polynomial whose monomials all have the same degree.
Quadratic form | Homogeneous polynomial of degree 2; it can be written in a unique way as $q_S(x) = {}^tx\,S\,x$ with $S$ symmetric.
$q_S$ | The quadratic form $q_S(x) = g_S(x, x)$ of the symmetric matrix $S$.
Norm | $\lVert v \rVert = \sqrt{\langle v, v\rangle}$, the length of $v$ (with a positive definite product).
Euclidean norm | $\lVert x \rVert = \sqrt{x_1^2 + \dots + x_n^2}$ on $\R^n$: Pythagoras' theorem.
Unit vector | Vector of norm 1.
Normalise | Divide a non-zero vector by its norm, getting a unit vector with the same direction and orientation.
Cauchy–Schwarz inequality | $\lvert\langle v, w\rangle\rvert \le \lVert v \rVert\,\lVert w \rVert$; equality holds if and only if $v$ and $w$ are parallel.
Triangle inequality | $\lVert v + w \rVert \le \lVert v \rVert + \lVert w \rVert$; for distances $d(P, R) \le d(P, Q) + d(Q, R)$.
Vector $\overrightarrow{PQ}$ | The vector $Q - P$, which goes from the point $P$ to the point $Q$.
Distance | $d(P, Q) = \lVert Q - P \rVert$.
Angle between two vectors | The $\vartheta \in [0, \pi]$ with $\cos\vartheta = \frac{\langle v, w\rangle}{\lVert v \rVert\,\lVert w \rVert}$, for $v, w \ne 0$.
Arccosine | The function $\arccos : [-1, 1] \to [0, \pi]$ that associates to a number the angle with that cosine.
Cosine similarity | $\operatorname{sim}(x, y) = \cos\vartheta$ between two vectors, used to compare embeddings; it does not depend on the lengths.
```

## Checklist

```checklist
- I can write the matrix $M = [\id]^{\mathcal B'}_{\mathcal B}$ and compute $[g]_{\mathcal B'} = {}^tM\,S\,M$, checking that the result is symmetric.
- I can explain why ${}^tM$ is used for scalar products and $M^{-1}$ for endomorphisms.
- I can go from a quadratic form to its symmetric matrix and back, halving or doubling the mixed terms.
- I can decide whether a quadratic form in two variables is positive definite by completing the square.
- I can compute norms and distances with the Euclidean product and with a given $g_S$.
- I can state and prove the four properties of the norm, including Cauchy–Schwarz.
- I can derive the triangle inequality for distances from the one for the norm.
- I can compute the angle between two vectors (also between polynomials) and recognise the special angles without a calculator.
- I can say whether an angle is acute, right or obtuse by looking at the sign of the scalar product.
- I can explain what cosine similarity is and why it does not depend on the length of the vectors.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 20 "Prodotti scalari II", pp. 100–104: sections 20.A (change of basis), 20.B (quadratic forms), 20.C (norm), 20.D (distances), 20.E (angles, with the box on cosine similarity) and 20.F (Exercise 20.13, solved here as the first exercise). The numbering is that of the handouts (Propositions 20.1, 20.4, 20.7, 20.11; Definitions 20.3, 20.6, 20.10, 20.12; Examples 20.2, 20.5, 20.8, 20.9). Reminders: lessons L16 (change of basis), L19 (scalar products, Corollary 19.16), Binet's theorem (Theorem 10.4).
- **B. Martelli, *Geometria e algebra lineare***: §7.1.5 (quadratic forms), §7.2.2–7.2.3 (change of basis, congruent matrices), §8.1.1–8.1.4 (norm, applications, angles, distances). The book is free: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf).
- **Exam papers** (Moodle 2025/26): questions of 08/02/2024 (7 and 8), 10/06/2024 (4), 03/06/2025 (6), 03/06/2026 (4), 07/09/2026 (5 and 10); problems 12 of 07/02/2025, 05/02/2026 and 03/07/2026. The three questions reported are solved in these notes.
- The **"Beyond the handouts"** parts (sign of the determinant and congruent matrices, completing the squares and polarisation, equality cases, where to find it in the book) and the exercises after the first one are additions in these notes, to connect the lesson to the rest of the course and to the exam.
