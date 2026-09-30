---
course: MDAG
module: AG
lesson: L19
title: Scalar products I
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Linear Algebra and Geometry · Channels A, B and C · Lesson L19
description: >-
  Notes on lesson L19 of Linear Algebra and Geometry (MDAG, part 2): what a scalar product is, degenerate and
  positive definite products, the Euclidean scalar product, symmetric matrices and the matrix associated with a
  scalar product in a basis, with exam-style quizzes and worked exercises.
lede: >-
  So far you could add vectors and multiply them by a number. In this lesson you learn to "multiply" two vectors and
  get a number: the scalar product, from which lengths, angles and perpendicularity will come. You will see the
  Euclidean scalar product $\langle x, y\rangle = x_1y_1 + \dots + x_ny_n$, the products that come from a symmetric
  matrix, $g_S(x, y) = {}^tx\,S\,y$, and how every scalar product becomes a matrix as soon as you fix a basis.
material: handouts
facts:
  Handouts: lesson 19 · pp. 96–99
  Book: Martelli, §7.1 and §7.2
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 90–120 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 19 "Prodotti scalari I"; B. Martelli, Geometria e algebra
  lineare, §7.1 and §7.2
italian_file: L19_prodotti_scalari_1.html
html_notes: notes/MDAG/L19_scalar_products_1.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L19_prodotti_scalari_1.md
---

## In brief

- In the lessons on scalar products the field is always $\K = \R$: you need the **order** (knowing whether a number is positive) and the **square roots** of positive numbers.
- A **scalar product** takes two vectors $v, w$ and returns a **real number** $\langle v, w\rangle$. It must be **bilinear** (linear in the first slot and in the second) and **symmetric** ($\langle v, w\rangle = \langle w, v\rangle$). As a consequence $\langle v, 0\rangle = 0$ for every $v$.
- A scalar product is **positive definite** if $\langle v, v\rangle > 0$ for every $v \neq 0$; it is **degenerate** if there is a $v \neq 0$ with $\langle v, w\rangle = 0$ for **every** $w$. Positive definite implies non-degenerate, but not the other way round.
- The model for everything is the **Euclidean scalar product** of $\R^n$: $\langle x, y\rangle = {}^tx\,y = x_1y_1 + \dots + x_ny_n$. For example $\langle (1, 3), (-2, 1)\rangle = -2 + 3 = 1$. It is positive definite.
- Every **symmetric matrix** $S$ gives a scalar product on $\R^n$: $g_S(x, y) = {}^tx\,S\,y = \sum_{i,j} x_iS_{ij}y_j$. The entry $S_{ij}$ is the coefficient of $x_iy_j$, and $g_S(e_i, e_j) = S_{ij}$.
- Once a basis $\mathcal B = \{v_1, \dots, v_n\}$ is fixed, every scalar product $g$ has an **associated matrix** $[g]_{\mathcal B}$, symmetric, with entries $g(v_i, v_j)$.
- With the associated matrix everything is computed in coordinates: $g(v, w) = {}^t[v]_{\mathcal B}\,[g]_{\mathcal B}\,[w]_{\mathcal B}$.
- At the exam the typical question is: "given the scalar product $g$ and the basis $\mathcal B$, what is $[g]_{\mathcal B}$?", also on spaces of polynomials. It is solved entry by entry.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## Why a product between vectors is needed (p. 96)

With what you know from lessons L05–L18 you can add vectors and multiply them by a number. But you cannot yet say **how long** a vector is, nor whether two vectors are **perpendicular**, nor what **angle** they form. These are the questions of geometry, and to answer them you need a new operation.

At school (or in physics) you may have seen the "scalar product" of two vectors of the plane: you multiply the corresponding coordinates and add the results. With $u = (1, 3)$ and $v = (-2, 1)$:

$$u \cdot v = 1 \cdot (-2) + 3 \cdot 1 = -2 + 3 = 1.$$

**Two vectors** go in, **a number** comes out. Now fix $u = (2, 1)$ and look at what happens when you change the second vector:

| $v$ | $\langle u, v\rangle$ | What you see in the drawing |
|---|--:|---|
| $a = (1, 2)$ | $2 \cdot 1 + 1 \cdot 2 = 4$ | $a$ forms an **acute** angle with $u$ |
| $b = (-1, 2)$ | $2 \cdot (-1) + 1 \cdot 2 = 0$ | $b$ is **perpendicular** to $u$ |
| $c = (-2, 1)$ | $2 \cdot (-2) + 1 \cdot 1 = -3$ | $c$ forms an **obtuse** angle with $u$ |

```graph
title: With $u = (2, 1)$: $\langle u, a\rangle = 4 > 0$, $\langle u, b\rangle = 0$, $\langle u, c\rangle = -3 < 0$
x: -3 3
y: -1 3
vector: 2 1 | accent | thick | $u$ | se
vector: 1 2 | green | $a$ | ne
vector: -1 2 | blue | $b$ | n
vector: -2 1 | pink | $c$ | nw
```

The sign of this number already "knows" something about the angle between the two vectors: positive, zero, negative for acute, right, obtuse. In lesson L20 you will make it precise with the formula for the angle; here you build the foundation: what an operation must satisfy to deserve the name of scalar product.

> [!NOTE] Why the field is $\R$ for scalar products
> The handouts warn that in this chapter, unlike the previous ones, the field is always $\K = \R$, for two reasons:
>
> - you need the **order**: saying that a number is positive ($\langle v, v\rangle > 0$). In $\C$ there is no order (lesson L02);
> - you need the **square root** of a positive number, to define the length $\sqrt{\langle v, v\rangle}$ in lesson L20. In $\Q$, for example, $\sqrt 2$ is missing (lesson L01).
>
> So all the vector spaces of these lessons are **real**. (In lesson L25 you will see the complex version, the Hermitian product.)

## The definition of scalar product (p. 96)

> [!DEF] 19.1 · Scalar product
> Let $V$ be a real vector space. A **scalar product** on $V$ is a map
> $$V \times V \longrightarrow \R, \qquad (v, w) \longmapsto \langle v, w\rangle$$
> that satisfies the following axioms:
> 1. $\langle v + v', w\rangle = \langle v, w\rangle + \langle v', w\rangle$,
> 2. $\langle \lambda v, w\rangle = \lambda\langle v, w\rangle$,
> 3. $\langle v, w\rangle = \langle w, v\rangle$,
>
> for every $v, v', w, w' \in V$ and every $\lambda \in \R$.

Piece by piece:

- $V \times V$ is the set of **ordered pairs** $(v, w)$ of vectors of $V$: the scalar product receives **two** vectors.
- The arrow towards $\R$ says that the result is **a real number**, not a vector. The symbol $\langle v, w\rangle$ (angle brackets) is read "scalar product of $v$ and $w$".
- Axiom (1) says that you can **split a sum** in the first slot: adding and then multiplying gives the same result as multiplying and then adding.
- Axiom (2) says that **a number in the first slot comes out**: $\langle 3v, w\rangle = 3\langle v, w\rangle$.
- Axiom (3), **symmetry**, says that the order of the two vectors does not matter.
- "For every $v, v', w, w'$ and every $\lambda$": the rules must hold **always**, for all vectors and all real numbers, not only in some lucky case.

> [!PITFALL] Scalar product and multiplication by a scalar
> They are two different things. **Multiplication by a scalar** (lesson L05) takes a number and a vector and returns a **vector**: $3 \cdot (1, 2) = (3, 6)$. The **scalar product** takes two vectors and returns a **number**: $\langle (1, 2), (3, 6)\rangle = 3 + 12 = 15$.

### The consequences of the axioms

The handouts observe that the rules "on the right" also follow from the three axioms:

4. $\langle v, w + w'\rangle = \langle v, w\rangle + \langle v, w'\rangle$,
5. $\langle v, \lambda w\rangle = \lambda\langle v, w\rangle$.

Here is why, one step at a time (above the equals sign there is the axiom used):

$$\begin{aligned} \langle v, w + w'\rangle &\overset{(3)}{=} \langle w + w', v\rangle \overset{(1)}{=} \langle w, v\rangle + \langle w', v\rangle \\ &\overset{(3)}{=} \langle v, w\rangle + \langle v, w'\rangle, \end{aligned}$$

$$\langle v, \lambda w\rangle \overset{(3)}{=} \langle \lambda w, v\rangle \overset{(2)}{=} \lambda\langle w, v\rangle \overset{(3)}{=} \lambda\langle v, w\rangle.$$

Symmetry lets you "turn round" the vectors, use the rule on the first slot and then turn them round again.

Two words to remember:

- axioms (1), (2), (4), (5) say that the product is **bilinear**: with the second vector fixed, it is linear in the first; with the first fixed, it is linear in the second;
- axiom (3) says that it is **symmetric**.

**The product with the zero vector is zero.** For every $v \in V$ we have $\langle v, 0\rangle = 0$. Indeed, since $0 = 0 + 0$, by axiom (4)

$$\langle v, 0\rangle = \langle v, 0 + 0\rangle = \langle v, 0\rangle + \langle v, 0\rangle.$$

Call $a = \langle v, 0\rangle$: you have found that $a = a + a$. Taking $a$ away from both sides, what is left is $0 = a$. By symmetry $\langle 0, v\rangle = 0$ holds too.

**A name for the product.** When you want to give the scalar product a name, you denote it with a letter, $g : V \times V \to \R$, and write $g(v, w)$ instead of $\langle v, w\rangle$. It is useful when **several** different scalar products appear in the same discussion.

> [!BEYOND] A computation you will use often
> With bilinearity and symmetry you expand the "square of a sum" as with numbers:
> $$\begin{aligned} \langle v + w, v + w\rangle &= \langle v, v + w\rangle + \langle w, v + w\rangle \\ &= \langle v, v\rangle + \langle v, w\rangle + \langle w, v\rangle + \langle w, w\rangle \\ &= \langle v, v\rangle + 2\langle v, w\rangle + \langle w, w\rangle. \end{aligned}$$
> The first step uses axiom (1), the second axiom (4) twice, the last one symmetry. It is the vector version of $(a + b)^2 = a^2 + 2ab + b^2$, and in lesson L20 it is needed to prove the triangle inequality.

### Formulas that are (and are not) scalar products

To decide whether a formula is a scalar product you check bilinearity and symmetry. To say **no**, a single numerical example in which a rule fails is enough.

> [!EXAMPLE] A formula that works: $g(x, y) = 2x_1y_1 + 3x_2y_2$ on $\R^2$
> Here $x = (x_1, x_2)$ and $y = (y_1, y_2)$.
>
> - **Axiom (1).** With $x' = (x_1', x_2')$: $g(x + x', y) = 2(x_1 + x_1')y_1 + 3(x_2 + x_2')y_2 = (2x_1y_1 + 3x_2y_2) + (2x_1'y_1 + 3x_2'y_2) = g(x, y) + g(x', y)$.
> - **Axiom (2).** $g(\lambda x, y) = 2\lambda x_1y_1 + 3\lambda x_2y_2 = \lambda(2x_1y_1 + 3x_2y_2) = \lambda g(x, y)$.
> - **Axiom (3).** $g(y, x) = 2y_1x_1 + 3y_2x_2 = g(x, y)$, because the product of numbers is commutative.
>
> So $g$ is a scalar product. For example $g((1, 1), (1, -1)) = 2 \cdot 1 \cdot 1 + 3 \cdot 1 \cdot (-1) = -1$.

> [!EXAMPLE] Three formulas that do not work
> - $g(x, y) = x_1y_2$ **is not symmetric**: $g(e_1, e_2) = 1 \cdot 1 = 1$, but $g(e_2, e_1) = 0 \cdot 0 = 0$. (Here $e_1 = (1, 0)$ and $e_2 = (0, 1)$ are the vectors of the canonical basis.)
> - $g(x, y) = x_1y_1 + x_2y_2 + 1$ **is not bilinear**: $g(0, 0) = 1$, while a scalar product always gives $\langle v, 0\rangle = 0$.
> - $g(x, y) = x_1^2y_1^2$ **is not linear** in the first slot: $g(2e_1, e_1) = 4$, while $2\,g(e_1, e_1) = 2$.

## Degenerate and positive definite products (p. 96)

Not all scalar products behave well. Take on $\R^2$ the formula $g(x, y) = x_1y_1$: it is bilinear and symmetric, so it is a scalar product. But it **ignores the second coordinate**: the vector $e_2 = (0, 1)$ gives

$$g(e_2, w) = 0 \cdot w_1 = 0 \quad \text{for every } w \in \R^2.$$

A non-zero vector that gives zero with **everything**: it is a serious defect, because this product "does not see" $e_2$. The handouts give a name to this defect and to the opposite property.

> [!DEF] 19.2 · Degenerate, positive definite
> A scalar product on $V$ is:
> - **degenerate** if there exists $v \neq 0$ such that $\langle v, w\rangle = 0$ for every $w \in V$;
> - **positive definite** if $\langle v, v\rangle > 0$ for every non-zero $v \in V$.

Piece by piece:

- **Degenerate** is about $\langle v, w\rangle$ with **any** $w$: there is a non-zero vector that gives zero with all the vectors of the space, itself included. A product that is not degenerate is called **non-degenerate**: for every $v \neq 0$ there is at least one $w$ with $\langle v, w\rangle \neq 0$.
- **Positive definite** is only about $\langle v, v\rangle$, the product of a vector **with itself**: it must be strictly positive for every non-zero vector. (For $v = 0$ we always have $\langle 0, 0\rangle = 0$.)

> [!PROP] 19.3
> A positive definite scalar product is not degenerate.

The handouts' explanation, step by step:

1. Suppose by contradiction that the product is positive definite **and** degenerate.
2. Since it is degenerate, there exists $v \neq 0$ with $\langle v, w\rangle = 0$ for **every** $w$.
3. In particular you can choose $w = v$: you get $\langle v, v\rangle = 0$.
4. But $v \neq 0$ and the product is positive definite, so $\langle v, v\rangle > 0$. Contradiction: the product cannot be degenerate. $\square$

> [!EXAMPLE] Three scalar products on $\R^2$ compared
> - $g(x, y) = x_1y_1 + x_2y_2$ is **positive definite**: $g(x, x) = x_1^2 + x_2^2 > 0$ as soon as one coordinate is not zero.
> - $g(x, y) = x_1y_1$ is **degenerate**: $e_2 \neq 0$ and $g(e_2, w) = 0$ for every $w$.
> - $g(x, y) = x_1y_1 - x_2y_2$ is **not degenerate**, but it is **not positive definite**. It is not positive definite because $g(e_2, e_2) = 0 - 1 = -1 < 0$. It is not degenerate because, given $v = (a, b) \neq 0$, the vector $w = (a, -b)$ gives
>   $$g(v, w) = a \cdot a - b \cdot (-b) = a^2 + b^2 > 0.$$

> [!PITFALL] The converse of Proposition 19.3 is false
> "Non-degenerate" does **not** imply "positive definite": the last example, $x_1y_1 - x_2y_2$, shows it. Watch out for a second mistake too: in that product the vector $v = (1, 1)$ has $g(v, v) = 1 - 1 = 0$ even though it is non-zero, and yet the product is **not** degenerate. To be degenerate you need a vector that gives zero with **all** vectors, not only with itself ($g((1, 1), (1, 0)) = 1 \neq 0$). Martelli's book calls a vector with $\langle v, v\rangle = 0$ **isotropic**.

| Product on $\R^2$ | Degenerate? | Positive definite? | Reason in one line |
|---|---|---|---|
| $x_1y_1 + x_2y_2$ | no | yes | $g(x, x) = x_1^2 + x_2^2$ |
| $2x_1y_1 + 3x_2y_2$ | no | yes | $g(x, x) = 2x_1^2 + 3x_2^2$ |
| $x_1y_1$ | yes | no | $e_2$ gives zero with everything |
| $x_1y_1 - x_2y_2$ | no | no | $g(e_2, e_2) = -1$ |

## Three scalar products on polynomials (p. 97)

A scalar product does not live only on $\R^n$. The handouts show an example on the space $\R_2[x]$ of polynomials with real coefficients of degree $\le 2$, that is the polynomials $a + bx + cx^2$ (lessons L05–L07: it has dimension 3 and canonical basis $\{1, x, x^2\}$). The idea is to **evaluate** the polynomials at some points and multiply the values.

> [!EXAMPLE] 19.4 · Three scalar products on $\R_2[x]$
> On the space $\R_2[x]$ of polynomials with real coefficients of degree $\le 2$ consider the scalar product
> $$\langle p, q\rangle = p(0)q(0) + p(1)q(1) + p(2)q(2).$$
> This scalar product is **positive definite**: $\langle p, p\rangle = p(0)^2 + p(1)^2 + p(2)^2 > 0$ for every non-zero polynomial $p$ of degree $\le 2$, because such a polynomial cannot vanish at the three distinct values $0, 1, 2$.
>
> The scalar product $\langle p, q\rangle = p(0)q(0) + p(1)q(1)$ is instead **degenerate**: for $p(x) = x(1 - x)$ we have $\langle p, q\rangle = 0$ for every $q \in \R_2[x]$.
>
> Finally $\langle p, q\rangle = p(0)q(0) + p(1)q(1) - p(2)q(2)$ **is not degenerate, but it is not positive definite**: for $p(x) = x - 1$ we have $\langle p, p\rangle = (-1)^2 - 1^2 = 0$.

Let us look at the three products one by one.

**The first product: how it is computed.** With $p = x$ and $q = x^2$: the values of $p$ at $0, 1, 2$ are $0, 1, 2$; those of $q$ are $0, 1, 4$. So

$$\langle x, x^2\rangle = 0 \cdot 0 + 1 \cdot 1 + 2 \cdot 4 = 9.$$

With $p = q = 1 + x$ (values $1, 2, 3$): $\langle 1 + x, 1 + x\rangle = 1 + 4 + 9 = 14$.

**Why it is a scalar product.** It is symmetric, because $p(t)q(t) = q(t)p(t)$. It is bilinear because evaluating is linear: $(p + p')(t) = p(t) + p'(t)$ and $(\lambda p)(t) = \lambda p(t)$. For example, for axiom (1):

$$\begin{aligned} \langle p + p', q\rangle &= \sum_{t = 0, 1, 2} \big(p(t) + p'(t)\big)q(t) \\ &= \sum_{t = 0, 1, 2} p(t)q(t) + \sum_{t = 0, 1, 2} p'(t)q(t) \\ &= \langle p, q\rangle + \langle p', q\rangle. \end{aligned}$$

**Why it is positive definite.** $\langle p, p\rangle$ is a sum of three squares, so it is $\ge 0$. It is $0$ only if $p(0) = p(1) = p(2) = 0$, that is if $p$ has **three** distinct **roots**. But by Theorem 4.6 (lesson L04) a non-zero polynomial of degree $n \ge 1$ has at most $n$ roots, and a non-zero constant polynomial has none: a non-zero polynomial of degree $\le 2$ has at most two roots. So $\langle p, p\rangle = 0$ only for $p = 0$.

**The second product is degenerate.** With only two points the reasoning breaks down: $p(x) = x(1 - x) = x - x^2$ is a non-zero polynomial of degree 2 that vanishes both at 0 and at 1. Then for **every** $q$:

$$\langle p, q\rangle = p(0)q(0) + p(1)q(1) = 0 \cdot q(0) + 0 \cdot q(1) = 0.$$

**The third product is not positive definite.** $p(x) = x - 1$ equals $-1$ at 0, $0$ at 1 and $1$ at 2, so

$$\langle p, p\rangle = (-1)^2 + 0^2 - 1^2 = 0$$

with $p \neq 0$. (The handouts write $(-1)^2 - 1^2$ because the term $p(1)^2 = 0$ disappears.) Moreover: $\langle 1, 1\rangle = 1 + 1 - 1 = 1 > 0$ and $\langle x, x\rangle = 0 + 1 - 4 = -3 < 0$, so the values of $\langle p, p\rangle$ can have both signs.

> [!BEYOND] Why the third product is not degenerate
> The handouts state it without proof. Here is one way. Consider the three polynomials
> $$q_0 = \frac{(x - 1)(x - 2)}{2}, \quad q_1 = 2x - x^2, \quad q_2 = \frac{x(x - 1)}{2}.$$
> Check the values: $q_0$ equals $1, 0, 0$ at $0, 1, 2$; $q_1$ equals $0, 1, 0$; $q_2$ equals $0, 0, 1$. Then, for every $p$:
> $$\langle p, q_0\rangle = p(0), \quad \langle p, q_1\rangle = p(1), \quad \langle p, q_2\rangle = -p(2).$$
> If $\langle p, q\rangle = 0$ for **every** $q$, in particular for $q_0, q_1, q_2$, then $p(0) = p(1) = p(2) = 0$ and, as above, $p = 0$. So no non-zero polynomial gives zero with everything: the product is not degenerate.

## The Euclidean scalar product (p. 97)

The "school" product of the first section has a precise name.

> [!DEF] 19.5 · Euclidean scalar product
> The **Euclidean scalar product** on $\R^n$ is defined as
> $$\langle x, y\rangle = {}^tx\,y = \sum_{i=1}^n x_iy_i.$$

Piece by piece:

- $x$ and $y$ are **column** vectors of $\R^n$, that is $n \times 1$ matrices.
- ${}^tx$ is the **transpose** of $x$ (lesson L08): the same vector written as a **row**, a $1 \times n$ matrix.
- ${}^tx\,y$ is a row-by-column product between a $1 \times n$ matrix and an $n \times 1$ one: the result is a $1 \times 1$ matrix, that is **a number**:
  $${}^tx\,y = (x_1, \dots, x_n)\begin{pmatrix} y_1 \\ \vdots \\ y_n \end{pmatrix} = x_1y_1 + x_2y_2 + \dots + x_ny_n.$$
- The symbol $\sum_{i=1}^n x_iy_i$ means "sum of the products $x_iy_i$ for $i$ going from 1 to $n$".

Examples:

- in $\R^2$, as in the handouts: $\left\langle \begin{pmatrix} 1 \\ 3 \end{pmatrix}, \begin{pmatrix} -2 \\ 1 \end{pmatrix}\right\rangle = 1 \cdot (-2) + 3 \cdot 1 = 1$;
- in $\R^3$: $\langle (1, 2, 3), (4, -5, 6)\rangle = 4 - 10 + 18 = 12$;
- in $\R^4$: $\langle (1, 0, -1, 2), (3, 5, 1, 1)\rangle = 3 + 0 - 1 + 2 = 4$.

> [!PROP] 19.6
> The Euclidean scalar product is a positive definite scalar product on $\R^n$.

The handouts do not give the proof; here it is, from Martelli's book (Proposition 7.1.5).

1. **Bilinearity.** It comes from the properties of the matrix product. For axiom (1): ${}^t(x + x')\,y = ({}^tx + {}^tx')\,y = {}^tx\,y + {}^tx'\,y$. The other linearity axioms are checked in the same way.
2. **Symmetry.** $x_1y_1 + \dots + x_ny_n = y_1x_1 + \dots + y_nx_n$, because the product of real numbers is commutative.
3. **Positive definite.** $\langle x, x\rangle = x_1^2 + \dots + x_n^2$ is a sum of squares. If $x \neq 0$, at least one coordinate $x_i$ is not zero, and then $x_i^2 > 0$ makes the whole sum positive. $\square$

Try it yourself with the tool: drag $u$ and $v$ and look at the number $u \cdot v$. Look for a position in which it is zero (the vectors are perpendicular) and one in which it is negative (obtuse angle). The tool also already shows the angle and the projection, which you will see in lessons L20 and L21.

```widget vettori
title: The Euclidean scalar product in the plane
u: 1 3
v: -2 1
modo: scalare
modi: scalare
raggio: 5
```

> [!BEYOND] The scalar product of physics
> In physics the scalar product of two vectors of the plane or of space is defined with lengths and angles: $\langle v, w\rangle = \|v\|\,\|w\|\cos\vartheta$. The course goes the opposite way: first the scalar product, then (lesson L20) length $\|v\| = \sqrt{\langle v, v\rangle}$ and angle. The advantage is that the same construction works for very different spaces, like that of polynomials.

## Symmetric matrices and scalar products on $\R^n$ (pp. 97–98)

In lesson L14 you saw that a square matrix $A$ determines an endomorphism $L_A(x) = Ax$ of $\R^n$. In the same way, a **symmetric** matrix determines a scalar product on $\R^n$. Two reminders from lesson L08:

- a matrix $S$ is **symmetric** if it equals its transpose, ${}^tS = S$, that is $S_{ij} = S_{ji}$ for every $i, j$: the part above the diagonal is the mirror image of the part below;
- the **transpose of a product** is the product of the transposes in reverse order: ${}^t(AB) = {}^tB\,{}^tA$.

> [!PROP] 19.7
> A symmetric matrix $S$ defines a scalar product $g_S$ on $\R^n$ by setting
> $$g_S(x, y) = {}^tx\,S\,y.$$

The proof, with all the steps:

1. **It is a number.** ${}^tx$ is $1 \times n$, $S$ is $n \times n$, $y$ is $n \times 1$: the product can be done and gives a $1 \times 1$ matrix, a number.
2. **Bilinearity.** It comes from the properties of the matrix product (distributivity, and scalars come out). For example ${}^t(x + x')\,S\,y = {}^tx\,S\,y + {}^tx'\,S\,y$.
3. **Symmetry.** This is the chain of the handouts:
   $$\begin{aligned} g_S(x, y) = {}^tx\,S\,y &= {}^t\big({}^tx\,S\,y\big) \\ &= {}^ty\,{}^tS\,x = {}^ty\,S\,x = g_S(y, x). \end{aligned}$$
   - the second equals sign holds because ${}^tx\,S\,y$ is a $1 \times 1$ matrix, and a $1 \times 1$ matrix is equal to its transpose;
   - the third uses ${}^t(ABC) = {}^tC\,{}^tB\,{}^tA$ (the rule ${}^t(AB) = {}^tB\,{}^tA$ applied twice) and ${}^t({}^tx) = x$;
   - the fourth uses **precisely** the hypothesis ${}^tS = S$. Without symmetry of $S$ the chain stops there. $\square$

To do the computations it is convenient to expand the matrix product.

> [!PROP] 19.8
> We have
> $$g_S(x, y) = {}^tx\,S\,y = \sum_{i,j=1}^n x_iS_{ij}y_j.$$

Indeed coordinate $i$ of the vector $Sy$ is $(Sy)_i = \sum_{j} S_{ij}y_j$ (row $i$ of $S$ times the column $y$), and then ${}^tx\,(Sy) = \sum_i x_i(Sy)_i = \sum_{i,j} x_iS_{ij}y_j$.

The double sum $\sum_{i,j=1}^n$ has one term for **each pair** $(i, j)$: $n^2$ terms. For $n = 2$ and $S = \begin{pmatrix} a & b \\ b & c \end{pmatrix}$:

$$g_S(x, y) = a\,x_1y_1 + b\,x_1y_2 + b\,x_2y_1 + c\,x_2y_2.$$

The rule to remember: **the entry $S_{ij}$ is the coefficient of $x_iy_j$**.

> [!COROLLARY] 19.9
> For the vectors of the canonical basis we have
> $$g_S(e_i, e_j) = S_{ij}.$$

The reason: $e_i$ has a 1 in position $i$ and zeros elsewhere. In the sum of Proposition 19.8 with $x = e_i$ and $y = e_j$ only one term survives, the one with $x_i = 1$ and $y_j = 1$, which equals $S_{ij}$. In words: ${}^te_i$ **picks row** $i$ of $S$, and $e_j$ **picks column** $j$.

> [!EXAMPLE] 19.10 · The identity matrix
> For $S = I_n$ you get the Euclidean scalar product:
> $$g_{I_n}(x, y) = {}^tx\,y = x_1y_1 + \dots + x_ny_n.$$
> Indeed $I_n$ has 1 on the diagonal and 0 elsewhere: only the terms $x_iy_i$ survive.

> [!EXAMPLE] 19.11 · A non-diagonal matrix
> The matrix
> $$S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$$
> defines on $\R^2$ the scalar product
> $$g_S(x, y) = 2x_1y_1 + x_1y_2 + x_2y_1 + x_2y_2.$$
> Two computations: $g_S(e_1, e_2) = S_{12} = 1$ (so $e_1$ and $e_2$ do **not** give zero, unlike in the Euclidean product); with $x = y = (1, -1)$: $g_S = 2 \cdot 1 + 1 \cdot (-1) + (-1) \cdot 1 + (-1) \cdot (-1) = 2 - 1 - 1 + 1 = 1$.
>
> Is it positive definite? With $y = x$ you get $g_S(x, x) = 2x_1^2 + 2x_1x_2 + x_2^2 = x_1^2 + (x_1 + x_2)^2$. A sum of two squares is $\ge 0$ and it is 0 only if $x_1 = 0$ and $x_1 + x_2 = 0$, that is if $x = 0$. So yes.

### From the formula to the matrix and back

> [!METHOD] Between $S$ and the formula of $g_S$
> **From the matrix to the formula.** For each entry $S_{ij}$ write the term $S_{ij}\,x_iy_j$ and add everything up. Zero entries give no terms.
>
> **From the formula to the matrix.**
> 1. Check that every term is of the form (number) $\cdot\, x_iy_j$, with **one** $x$ and **one** $y$. Terms like $x_1$, $1$, $x_1x_2$, $x_1^2y_1$ mean that the formula is not bilinear.
> 2. Put the coefficient of $x_iy_j$ in position $(i, j)$.
> 3. Check that the matrix is symmetric: the coefficient of $x_iy_j$ must be equal to that of $x_jy_i$. If it is not, the formula is not a scalar product.

> [!EXAMPLE] There and back
> - $g(x, y) = 3x_1y_1 - 2x_1y_2 - 2x_2y_1 + 5x_2y_2$ has matrix $S = \begin{pmatrix} 3 & -2 \\ -2 & 5 \end{pmatrix}$: the coefficient of $x_1y_2$ goes in position $(1, 2)$, that of $x_2y_1$ in position $(2, 1)$, and they are equal.
> - The matrix $S = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 0 & -1 \\ 0 & -1 & 3 \end{pmatrix}$ gives on $\R^3$
>   $$\begin{aligned} g_S(x, y) = {} & x_1y_1 + 2x_1y_2 + 2x_2y_1 \\ & - x_2y_3 - x_3y_2 + 3x_3y_3. \end{aligned}$$
> - $g(x, y) = x_1y_2 + 2x_2y_1$ is **not** a scalar product: it would put 1 in position $(1, 2)$ and 2 in position $(2, 1)$, and the matrix would not be symmetric.

> [!PITFALL] Do not divide by two
> In the scalar product $g_S(x, y)$ the terms $x_1y_2$ and $x_2y_1$ are **different** and each one has its own position: the coefficient goes into the matrix **as it is**. Dividing by two is needed for the **quadratic forms** of lesson L20, where $x_1x_2$ and $x_2x_1$ are the same monomial.

### When $g_S$ is degenerate or positive definite (beyond the handouts)

> [!BEYOND] Three convenient criteria
> **1. Degenerate if and only if $\det S = 0$** (Martelli, Proposition 7.1.23). If $Sv = 0$ with $v \neq 0$, then for every $w$
> $$g_S(v, w) = {}^tv\,S\,w = {}^t(Sv)\,w = 0,$$
> because ${}^t(Sv) = {}^tv\,{}^tS = {}^tv\,S$. So $g_S$ is degenerate. Conversely, if $g_S(v, w) = 0$ for every $w$, take $w = Sv$: you get ${}^t(Sv)(Sv) = 0$, that is $\langle Sv, Sv\rangle = 0$ in the Euclidean product, so $Sv = 0$. In short: $g_S$ is degenerate $\iff$ there is $v \neq 0$ with $Sv = 0$ $\iff$ $\det S = 0$ (lesson L10). The vectors that give zero with everything are those of the kernel of $S$.
>
> **2. Diagonal matrices** (Martelli, §7.1.6). If $S$ is diagonal with $d_1, \dots, d_n$ on the diagonal, then $g_S(x, x) = d_1x_1^2 + \dots + d_nx_n^2$: $g_S$ is positive definite $\iff$ all the $d_i > 0$, and it is non-degenerate $\iff$ all the $d_i \neq 0$. For example $\operatorname{diag}(1, -3)$ is non-degenerate but not positive definite, $\operatorname{diag}(0, 1)$ is degenerate, $\operatorname{diag}(5, 1)$ is positive definite.
>
> **3. $2 \times 2$ matrices.** $S = \begin{pmatrix} a & b \\ b & c \end{pmatrix}$ is positive definite $\iff$ $a > 0$ and $\det S = ac - b^2 > 0$. If $a \neq 0$ you "complete the square":
> $$a x_1^2 + 2b\,x_1x_2 + c\,x_2^2 = a\left(x_1 + \frac ba x_2\right)^2 + \frac{ac - b^2}{a}\,x_2^2.$$
> If $a > 0$ and $ac - b^2 > 0$ the two summands are $\ge 0$ and they vanish together only for $x_2 = 0$ and $x_1 = 0$. Conversely, if $g_S$ is positive definite, then $a = g_S(e_1, e_1) > 0$, and with $x = (-b, a) \neq 0$ you find $g_S(x, x) = a(ac - b^2) > 0$, so $ac - b^2 > 0$. For $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$: $a = 2 > 0$ and $\det S = 1 > 0$, positive definite as already seen.

## The matrix associated with a scalar product (pp. 98–99)

For linear maps (lesson L15), once a basis is fixed, every map becomes a matrix. With scalar products the same happens.

> [!DEF] 19.12 · Associated matrix
> Let $V$ be a real vector space, let $g : V \times V \to \R$ be a scalar product and let $\mathcal B = \{v_1, \dots, v_n\}$ be a basis of $V$. The **matrix associated** with $g$ in the basis $\mathcal B$ is the symmetric matrix
> $$S = [g]_{\mathcal B}, \qquad S_{ij} = g(v_i, v_j).$$

Piece by piece:

- the matrix is $n \times n$, with $n = \dim V$: one row and one column for each vector of the basis;
- in position $(i, j)$ there is the **scalar product** between the $i$-th and the $j$-th vector of the basis;
- on the diagonal there are the products $g(v_i, v_i)$ of each vector with itself;
- it is **symmetric** because $g(v_i, v_j) = g(v_j, v_i)$ (axiom 3);
- it **depends on the basis**: same product, different basis, different matrix. How it changes you will see in lesson L20.

> [!EXAMPLE] 19.13 · The canonical basis
> If $S \in M(n, \R)$ is symmetric, the matrix associated with $g_S$ with respect to the canonical basis $\mathcal C$ is $S$ itself:
> $$[g_S]_{\mathcal C} = S.$$
> It is Corollary 19.9: the entry $(i, j)$ of $[g_S]_{\mathcal C}$ is $g_S(e_i, e_j) = S_{ij}$.

> [!EXAMPLE] 19.14 · The Euclidean product in another basis
> Consider the Euclidean scalar product on $\R^2$ and the basis
> $$\mathcal B = \left\{ v_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, v_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix} \right\}.$$
> The associated matrix is
> $$[g]_{\mathcal B} = \begin{pmatrix} g(v_1, v_1) & g(v_1, v_2) \\ g(v_2, v_1) & g(v_2, v_2) \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}.$$
> The computations: $g(v_1, v_1) = 1 + 0 = 1$, $g(v_1, v_2) = 1 \cdot 1 + 0 \cdot 1 = 1$, $g(v_2, v_2) = 1 + 1 = 2$. In the canonical basis the same product has matrix $I_2$.

Why is the associated matrix useful? Because it contains **all** the information about the product: knowing the products between the vectors of the basis, you can compute the product of any two vectors.

> [!PROP] 19.15
> If
> $$v = \lambda_1v_1 + \dots + \lambda_nv_n, \qquad w = \mu_1v_1 + \dots + \mu_nv_n,$$
> then
> $$g(v, w) = \sum_{i,j=1}^n \lambda_i\mu_j\,g(v_i, v_j).$$

The formula follows from bilinearity: you "expand" it like a product of two sums. With $n = 2$, one step at a time. First linearity in the first slot (axioms 1 and 2), keeping $w = \mu_1v_1 + \mu_2v_2$ fixed:

$$g(\lambda_1v_1 + \lambda_2v_2,\ w) = \lambda_1\,g(v_1, w) + \lambda_2\,g(v_2, w).$$

Then linearity in the second slot (axioms 4 and 5) inside each term:

$$\begin{aligned} g(v_1, w) &= \mu_1\,g(v_1, v_1) + \mu_2\,g(v_1, v_2), \\ g(v_2, w) &= \mu_1\,g(v_2, v_1) + \mu_2\,g(v_2, v_2). \end{aligned}$$

Putting it together:

$$\begin{aligned} g(v, w) = {} & \lambda_1\mu_1\,g(v_1, v_1) + \lambda_1\mu_2\,g(v_1, v_2) \\ & + \lambda_2\mu_1\,g(v_2, v_1) + \lambda_2\mu_2\,g(v_2, v_2). \end{aligned}$$

There are four terms, one for each pair $(i, j)$.

> [!COROLLARY] 19.16
> For every $v, w \in V$ we have
> $$g(v, w) = {}^t[v]_{\mathcal B}\,[g]_{\mathcal B}\,[w]_{\mathcal B}.$$

Here $[v]_{\mathcal B} = (\lambda_1, \dots, \lambda_n)$ is the column vector of the **coordinates** of $v$ in the basis $\mathcal B$ (lesson L15). The row-matrix-column product, expanded with Proposition 19.8, gives exactly the sum of Proposition 19.15. In words: **in coordinates, every scalar product becomes a $g_S$**, with $S$ the associated matrix.

### Computing with coordinates

> [!EXAMPLE] Corollary 19.16 at work
> Euclidean product on $\R^2$, basis $\mathcal B = \{(1, 0), (1, 1)\}$ and $[g]_{\mathcal B} = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$ (Example 19.14). Take $v = (3, 2)$ and $w = (1, -1)$.
>
> 1. **Coordinates of $v$.** I look for $a, b$ with $a(1, 0) + b(1, 1) = (3, 2)$: the second coordinate gives $b = 2$, the first $a + b = 3$, so $a = 1$. $[v]_{\mathcal B} = (1, 2)$.
> 2. **Coordinates of $w$.** $a(1, 0) + b(1, 1) = (1, -1)$: $b = -1$, $a = 2$. $[w]_{\mathcal B} = (2, -1)$.
> 3. **Product.** First $[g]_{\mathcal B}[w]_{\mathcal B} = \begin{pmatrix} 1 \cdot 2 + 1 \cdot (-1) \\ 1 \cdot 2 + 2 \cdot (-1) \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$, then ${}^t(1, 2)\begin{pmatrix} 1 \\ 0 \end{pmatrix} = 1$.
> 4. **Direct check.** $\langle (3, 2), (1, -1)\rangle = 3 - 2 = 1$. ✓

> [!EXAMPLE] The matrix of a product on polynomials
> Take on $\R_2[x]$ the product $\langle p, q\rangle = p(0)q(0) + p(1)q(1) + p(2)q(2)$ and the canonical basis $\{1, x, x^2\}$. First the values at the points $0, 1, 2$: $1 \to (1, 1, 1)$, $x \to (0, 1, 2)$, $x^2 \to (0, 1, 4)$. Then the products (six are enough, the others follow by symmetry):
>
> | Pair | Computation | Value |
> |---|---|--:|
> | $\langle 1, 1\rangle$ | $1 + 1 + 1$ | 3 |
> | $\langle 1, x\rangle$ | $0 + 1 + 2$ | 3 |
> | $\langle 1, x^2\rangle$ | $0 + 1 + 4$ | 5 |
> | $\langle x, x\rangle$ | $0 + 1 + 4$ | 5 |
> | $\langle x, x^2\rangle$ | $0 + 1 + 8$ | 9 |
> | $\langle x^2, x^2\rangle$ | $0 + 1 + 16$ | 17 |
>
> $$[\,\langle\ ,\ \rangle\,]_{\{1, x, x^2\}} = \begin{pmatrix} 3 & 3 & 5 \\ 3 & 5 & 9 \\ 5 & 9 & 17 \end{pmatrix}.$$
> Check with Corollary 19.16: $[1 + x] = (1, 1, 0)$ and $[x^2] = (0, 0, 1)$, so $\langle 1 + x, x^2\rangle = {}^t(1, 1, 0)\,S\,(0, 0, 1) = S_{13} + S_{23} = 5 + 9 = 14$. Directly: $1 + x$ takes the values $1, 2, 3$ and $x^2$ the values $0, 1, 4$, so $0 + 2 + 12 = 14$. ✓

> [!METHOD] Computing $[g]_{\mathcal B}$
> 1. Write the vectors of the basis **in the given order**: the order decides rows and columns.
> 2. If $g$ is defined on polynomials by evaluating at some points, first compute the table of the values of each $v_i$ at those points.
> 3. Compute $g(v_i, v_j)$ for $i \le j$: that is $\frac{n(n+1)}2$ computations (3 for $n = 2$, 6 for $n = 3$).
> 4. Fill in the matrix and copy the entries above the diagonal into those below.
> 5. Check: if $g = g_S$ on $\R^n$, the entry $(i, j)$ is ${}^tv_i\,S\,v_j$; compute the columns $Sv_j$ only once and reuse them.

> [!BEYOND] Where to find it in the book
> Martelli, chapter 7 "Prodotti scalari": §7.1.1–7.1.3 (definition, degenerate and positive definite, Euclidean product, pp. 199–201), §7.1.4 (symmetric matrices, pp. 201–203), §7.1.6 (diagonal matrices, pp. 204–205), §7.1.10 (the products on polynomials of Example 19.4, p. 209), §7.2.1 (associated matrix, pp. 210–212). In the book you also find the words **isotropic vector** (§7.1.8) and **radical** (§7.1.9), which the handouts do not use.

## Towards the exam

The written test of Linear Algebra and Geometry has 10 multiple-choice questions (5 answers, one right) and 2 problems worth 11 points, marked only with at least 6 points in the quiz; it lasts 2 hours, with no calculator, and only 4 handwritten pages of notes. 2026/27 exam sessions: 22/01 and 05/02/2027, at 14:00. The details are in lesson L01.

**What of this lesson appears in the 2023–2026 exam sessions**

1. **The associated matrix in a basis (quiz).** It is the most frequent question: in the exam sessions of 24/01/2024 (question 7), 10/07/2024 (question 9) and 15/01/2026 (question 9) the product is given by an unusual formula on $\R_1[x]$ or on $\R^2$, and you must find $[g]_{\mathcal B}$ among five matrices. In the exam sessions of 10/06/2024 (question 4) and 03/06/2026 (question 4) you are given $g_S$ with $S$ of order 3 and a new basis: you work entry by entry or with the formula ${}^tMSM$ of lesson L20.
2. **The first part of the problems.** In problems 12 of 16/01/2025, 07/02/2025 and 05/02/2026 part (1) asks for the associated matrix (in the canonical basis of $\R_2[x]$ or in a basis of $\R^3$); the following parts use norms, angles, Gram–Schmidt and projections (lessons L20 and L21).
3. **Theory.** Telling apart degenerate, non-degenerate and positive definite; knowing that $g_S$ is a scalar product only if $S$ is symmetric.

**Three real exam questions, solved**

> [!EXAMPLE] Exam of 15/01/2026, question 9
> Given $x = {}^t(x_1, x_2)$ and $y = {}^t(y_1, y_2)$, let $g(x, y) = x_1y_2 + x_2y_1 - x_2y_2$. Given the basis $\mathcal B = \{{}^t(1, 1), {}^t(0, 1)\}$, what is $[g]_{\mathcal B}$?
>
> **Solution.** $v_1 = (1, 1)$, $v_2 = (0, 1)$.
> - $g(v_1, v_1) = 1 \cdot 1 + 1 \cdot 1 - 1 \cdot 1 = 1$;
> - $g(v_1, v_2)$ with $x = (1, 1)$, $y = (0, 1)$: $1 \cdot 1 + 1 \cdot 0 - 1 \cdot 1 = 0$;
> - $g(v_2, v_2)$ with $x = y = (0, 1)$: $0 + 0 - 1 = -1$.
>
> So $[g]_{\mathcal B} = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ (answer (a)). Note: the product is non-degenerate but not positive definite, because $g(v_2, v_2) = -1$.

> [!EXAMPLE] Exam of 24/01/2024, question 7
> On $\R_1[x]$ you are given the scalar product $g(p, q) = q(1)p(1) - q(0)p(0)$ and the basis $\mathcal B = \{x + 1, 2\}$. What is $[g]_{\mathcal B}$?
>
> **Solution.** Table of values: $x + 1$ equals $2$ at 1 and $1$ at 0; the constant polynomial $2$ equals $2$ at both points.
> - $g(x + 1, x + 1) = 2 \cdot 2 - 1 \cdot 1 = 3$;
> - $g(x + 1, 2) = 2 \cdot 2 - 1 \cdot 2 = 2$;
> - $g(2, 2) = 2 \cdot 2 - 2 \cdot 2 = 0$.
>
> So $[g]_{\mathcal B} = \begin{pmatrix} 3 & 2 \\ 2 & 0 \end{pmatrix}$ (answer (a)). Answer (e), $\begin{pmatrix} 3 & 1 \\ 1 & 0 \end{pmatrix}$, is the one you get by mistakenly using the polynomial $1$ instead of $2$: the second vector of the basis equals 2, not 1.

> [!EXAMPLE] Exam of 07/02/2025, problem 12, part (1)
> On $\R_2[x]$ we define $g(p, q) = p(1)q(1) + p(-1)q(-1) + p(1)q(0) + p(0)q(1) + 2p(0)q(0)$. Find the matrix associated with $g$ in the canonical basis $\{1, x, x^2\}$.
>
> **Solution.** Values at $1, -1, 0$: $1 \to (1, 1, 1)$, $x \to (1, -1, 0)$, $x^2 \to (1, 1, 0)$. Then, term by term in the order of the formula:
> - $g(1, 1) = 1 + 1 + 1 + 1 + 2 = 6$;
> - $g(1, x) = 1 \cdot 1 + 1 \cdot (-1) + 1 \cdot 0 + 1 \cdot 1 + 2 \cdot 1 \cdot 0 = 1$;
> - $g(1, x^2) = 1 + 1 + 0 + 1 + 0 = 3$;
> - $g(x, x) = 1 + 1 + 0 + 0 + 0 = 2$;
> - $g(x, x^2) = 1 \cdot 1 + (-1) \cdot 1 + 1 \cdot 0 + 0 \cdot 1 + 0 = 0$;
> - $g(x^2, x^2) = 1 + 1 + 0 + 0 + 0 = 2$.
>
> $$[g]_{\{1, x, x^2\}} = \begin{pmatrix} 6 & 1 & 3 \\ 1 & 2 & 0 \\ 3 & 0 & 2 \end{pmatrix}.$$
> Check of the symmetry on one pair: $g(x, 1) = 1 \cdot 1 + (-1) \cdot 1 + 1 \cdot 1 + 0 \cdot 1 + 0 = 1 = g(1, x)$. ✓ Parts (2) and (3) of the problem continue in lessons L20 and L21.

**Mistakes to avoid**

- Mixing up the **order of the vectors** of the basis: $[g]_{\{v_1, v_2\}}$ and $[g]_{\{v_2, v_1\}}$ have the diagonal entries swapped.
- In products on polynomials, getting a value wrong: write the table of values **first**, then do the products.
- Forgetting that the associated matrix is **always symmetric**: in the quiz discard the non-symmetric matrices at once.
- Dividing the mixed coefficients of $g(x, y)$ by two: you divide only for quadratic forms (lesson L20).

> [!EXAM] On the 4-page sheet
> - $g_S(x, y) = {}^tx\,S\,y = \sum_{i,j} x_iS_{ij}y_j$; $S_{ij}$ = coefficient of $x_iy_j$; $g_S(e_i, e_j) = S_{ij}$.
> - $[g]_{\mathcal B}$: entry $(i, j) = g(v_i, v_j)$, always symmetric; $g(v, w) = {}^t[v]_{\mathcal B}[g]_{\mathcal B}[w]_{\mathcal B}$.
> - Degenerate: $\exists\, v \neq 0$ with $\langle v, w\rangle = 0\ \forall w$ ($\iff \det S = 0$). Positive definite: $\langle v, v\rangle > 0\ \forall v \neq 0$. Positive definite $\Rightarrow$ non-degenerate, not vice versa.
> - $2 \times 2$ criterion: $\begin{pmatrix} a & b \\ b & c \end{pmatrix}$ positive definite $\iff a > 0$ and $ac - b^2 > 0$.

## Quiz

```quiz
Q: Which of these formulas defines a scalar product on $\R^2$? (Here $x = (x_1, x_2)$ and $y = (y_1, y_2)$.)
+ $g(x, y) = x_1y_1 + x_1y_2 + x_2y_1$
- $g(x, y) = x_1y_2 - x_2y_1$
- $g(x, y) = x_1y_1 + x_2$
- $g(x, y) = x_1x_2y_1y_2$
- $g(x, y) = x_1y_1 + x_2y_2 + 1$
= The first is $g_S$ with $S = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$, which is symmetric: it is bilinear and symmetric. The second is not symmetric ($g(e_1, e_2) = 1$, $g(e_2, e_1) = -1$). The third and the fifth do not give zero with the zero vector ($g(e_2, 0) = 1$, $g(0, 0) = 1$). The fourth is not linear: doubling $x$ multiplies the result by 4.

Q: On $\R_1[x]$ let $g(p, q) = p(1)q(2) + p(2)q(1)$ and let $\mathcal B = \{x - 1, x - 2\}$. Then $[g]_{\mathcal B}$ is:
+ $\begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 0 & -2 \\ -2 & 0 \end{pmatrix}$
- $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$
= Values at 1 and at 2: $x - 1 \to (0, 1)$, $x - 2 \to (-1, 0)$. Then $g(x - 1, x - 1) = 0 \cdot 1 + 1 \cdot 0 = 0$, $g(x - 1, x - 2) = 0 \cdot 0 + 1 \cdot (-1) = -1$, $g(x - 2, x - 2) = (-1) \cdot 0 + 0 \cdot (-1) = 0$. Similar to the exam of 10/07/2024, question 9.

Q: What is the matrix $S$ such that $g(x, y) = x_1y_2 + x_2y_1 + 3x_2y_2$ equals $g_S(x, y) = {}^tx\,S\,y$?
+ $\begin{pmatrix} 0 & 1 \\ 1 & 3 \end{pmatrix}$
- $\begin{pmatrix} 0 & 2 \\ 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 1 & 3 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1/2 \\ 1/2 & 3 \end{pmatrix}$
- $\begin{pmatrix} 3 & 1 \\ 1 & 0 \end{pmatrix}$
= $S_{ij}$ is the coefficient of $x_iy_j$: $S_{11} = 0$ (there is no $x_1y_1$), $S_{12} = S_{21} = 1$, $S_{22} = 3$. You do not divide by two: $x_1y_2$ and $x_2y_1$ are two distinct terms. The matrix with 3 in the top left has swapped the order of the coordinates. Compare with the exam of 08/02/2024, question 7, where a **quadratic form** was given: there the coefficient of the mixed monomial must be divided by two (lesson L20).

Q: On $\R_1[x]$ consider the scalar product $\langle p, q\rangle = p(0)q(0) + p(1)q(1)$ and the basis $\mathcal B = \{x, x + 1\}$. Then $[\,\langle\ ,\ \rangle\,]_{\mathcal B}$ is:
+ $\begin{pmatrix} 1 & 2 \\ 2 & 5 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 1 & 2 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 1 & 5 \end{pmatrix}$
- $\begin{pmatrix} 5 & 2 \\ 2 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$
= Values at $0, 1$: $x \to (0, 1)$, $x + 1 \to (1, 2)$. Then $\langle x, x\rangle = 0 + 1 = 1$, $\langle x, x + 1\rangle = 0 \cdot 1 + 1 \cdot 2 = 2$, $\langle x + 1, x + 1\rangle = 1 + 4 = 5$. The matrix with 5 in the top left uses the basis in reverse order. Similar to the exam of 24/01/2024, question 7.

Q: On $\R^2$ let $g(x, y) = x_1y_1 + x_1y_2 + x_2y_1$ and let $\mathcal B = \{{}^t(1, 0), {}^t(1, -1)\}$. Then $[g]_{\mathcal B}$ is:
+ $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 1 & -1 \end{pmatrix}$
= With $v_1 = (1, 0)$ and $v_2 = (1, -1)$: $g(v_1, v_1) = 1$; $g(v_1, v_2) = 1 \cdot 1 + 1 \cdot (-1) + 0 = 0$; $g(v_2, v_2) = 1 + 1 \cdot (-1) + (-1) \cdot 1 = -1$. The second matrix is the one in the canonical basis; the last one is not symmetric, so it cannot be an associated matrix. Similar to the exam of 15/01/2026, question 9.

Q: Which symmetric matrix defines a **degenerate** scalar product on $\R^2$?
+ $\begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$
= $g_S$ is degenerate exactly when $\det S = 0$. Only the first has determinant $1 \cdot 4 - 2 \cdot 2 = 0$: with $v = (2, -1)$ we have $Sv = 0$, so $g_S(v, w) = {}^t(Sv)\,w = 0$ for every $w$. The others have determinant $-1$, $1$, $-1$, $6$.

Q: Which statement is true for every scalar product on a real vector space?
+ If it is positive definite, then it is not degenerate.
- If it is not degenerate, then it is positive definite.
- If $\langle v, v\rangle = 0$ for some $v \neq 0$, then it is degenerate.
- Every symmetric matrix $S$ defines a positive definite scalar product.
- It can happen that $\langle v, 0\rangle \neq 0$.
= It is Proposition 19.3: the vector that gives zero with everything would give zero with itself too. The product $x_1y_1 - x_2y_2$ disproves the second and the third (non-degenerate, not positive definite, and $(1, 1)$ gives zero with itself); $S = -I_2$ disproves the fourth; bilinearity always gives $\langle v, 0\rangle = 0$.

Q: Let $S = \begin{pmatrix} 4 & 1 & -2 \\ 1 & 0 & 5 \\ -2 & 5 & 3 \end{pmatrix}$. What is $g_S(e_1 + e_2, e_3)$?
N: 3
= By bilinearity $g_S(e_1 + e_2, e_3) = g_S(e_1, e_3) + g_S(e_2, e_3) = S_{13} + S_{23} = -2 + 5 = 3$ (Corollary 19.9).

Q: Let $S = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 1 & 1 \\ 0 & 1 & 3 \end{pmatrix}$ and $\mathcal B = \{{}^t(2, 0, 0), {}^t(0, 1, 0), {}^t(0, 0, -1)\}$. The matrix associated with $g_S$ in the basis $\mathcal B$ is:
+ $\begin{pmatrix} 4 & 4 & 0 \\ 4 & 1 & -1 \\ 0 & -1 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 & 0 \\ 2 & 1 & 1 \\ 0 & 1 & 3 \end{pmatrix}$
- $\begin{pmatrix} 4 & 2 & 0 \\ 2 & 1 & 1 \\ 0 & 1 & 3 \end{pmatrix}$
- $\begin{pmatrix} 2 & 4 & 0 \\ 2 & 1 & -1 \\ 0 & 1 & -3 \end{pmatrix}$
- $\begin{pmatrix} 4 & 4 & 0 \\ 4 & 1 & 1 \\ 0 & 1 & 3 \end{pmatrix}$
= With $v_1 = 2e_1$, $v_2 = e_2$, $v_3 = -e_3$ bilinearity gives $g_S(v_i, v_j) = d_id_jS_{ij}$ with $d = (2, 1, -1)$: $g(v_1, v_1) = 4 \cdot 1 = 4$, $g(v_1, v_2) = 2 \cdot 2 = 4$, $g(v_1, v_3) = 0$, $g(v_2, v_2) = 1$, $g(v_2, v_3) = 1 \cdot (-1) \cdot 1 = -1$, $g(v_3, v_3) = (-1)^2 \cdot 3 = 3$. The fourth is not symmetric. Similar to the exams of 10/06/2024 and 03/06/2026, question 4.

Q: On $\R_2[x]$, which of these scalar products is **positive definite**?
+ $\langle p, q\rangle = p(0)q(0) + p(1)q(1) + p(2)q(2)$
- $\langle p, q\rangle = p(0)q(0) + p(1)q(1)$
- $\langle p, q\rangle = p(0)q(0) + p(1)q(1) - p(2)q(2)$
- $\langle p, q\rangle = p(0)q(1) + p(1)q(0)$
- $\langle p, q\rangle = p(1)q(1)$
= In the first $\langle p, p\rangle$ is a sum of three squares, zero only if $p$ has three distinct roots, that is $p = 0$ (Example 19.4). The second and the last are degenerate ($x - x^2$ and $x - 1$ give zero with everything); the third gives $\langle x - 1, x - 1\rangle = 0$; the fourth gives $\langle p, p\rangle = 2p(0)p(1)$, which is $-2$ for $p = 1 - 2x$.
```

## Exercises

The handouts have no exercises for this lesson: these are all built for the notes; the last two are modelled on the exam papers.

::: exercise basic Scalar product or not?
For each formula on $\R^2$ say whether it is a scalar product; if it is not, indicate a rule that fails with a numerical example.
(a) $2x_1y_1 + 3x_2y_2$; (b) $x_1y_2$; (c) $x_1y_1 + x_2y_2 + 1$; (d) $x_1y_1 - 4x_1y_2 - 4x_2y_1 + x_2y_2$; (e) $x_1^2y_1^2$.
::: solution
(a) **Yes.** It is $g_S$ with $S = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$, which is symmetric (Proposition 19.7). The axioms are checked one by one in the example of the section on the definition.

(b) **No**, it is not symmetric: $g(e_1, e_2) = 1 \cdot 1 = 1$ but $g(e_2, e_1) = 0 \cdot 0 = 0$.

(c) **No**, it is not bilinear: $g(0, 0) = 1$, while $\langle v, 0\rangle = 0$ must hold.

(d) **Yes.** Every term has one $x$ and one $y$, and the coefficients of $x_1y_2$ and $x_2y_1$ are equal: it is $g_S$ with $S = \begin{pmatrix} 1 & -4 \\ -4 & 1 \end{pmatrix}$, which is symmetric. (It is not positive definite: $g((1, 1), (1, 1)) = 1 - 4 - 4 + 1 = -6$.)

(e) **No**, it is not linear in the first slot: $g(2e_1, e_1) = 4 \cdot 1 = 4$, while $2\,g(e_1, e_1) = 2$.
:::

::: exercise basic Computations with the Euclidean product
(a) Compute $\langle (2, -1, 3), (1, 4, 1)\rangle$. (b) Compute $\langle (1, 1, 1, 1), (1, -1, 1, -1)\rangle$. (c) Find $k \in \R$ such that $\langle (1, k, 2), (3, 1, -k)\rangle = 0$.
::: solution
(a) $2 \cdot 1 + (-1) \cdot 4 + 3 \cdot 1 = 2 - 4 + 3 = 1$.

(b) $1 - 1 + 1 - 1 = 0$: the two vectors of $\R^4$ are perpendicular.

(c) $\langle (1, k, 2), (3, 1, -k)\rangle = 1 \cdot 3 + k \cdot 1 + 2 \cdot (-k) = 3 + k - 2k = 3 - k$. It is zero for $k = 3$. Check: $\langle (1, 3, 2), (3, 1, -3)\rangle = 3 + 3 - 6 = 0$. ✓
:::

::: exercise basic From the matrix to the formula and back
(a) Write $g_S(x, y)$ for $S = \begin{pmatrix} 1 & -2 & 0 \\ -2 & 3 & 4 \\ 0 & 4 & -1 \end{pmatrix}$. (b) Find the matrix of $g(x, y) = x_1y_1 + 3x_1y_2 + 3x_2y_1 - x_2y_2 + 2x_1y_3 + 2x_3y_1$ on $\R^3$. (c) Compute $g_S(e_2, e_3)$ for the matrix of part (a).
::: solution
(a) One term $S_{ij}x_iy_j$ for each non-zero entry:
$$\begin{aligned} g_S(x, y) = {} & x_1y_1 - 2x_1y_2 - 2x_2y_1 + 3x_2y_2 \\ & + 4x_2y_3 + 4x_3y_2 - x_3y_3. \end{aligned}$$

(b) The coefficient of $x_iy_j$ goes in position $(i, j)$; the terms with $x_2y_3$, $x_3y_2$, $x_3y_3$ are missing, so those entries are 0:
$$S = \begin{pmatrix} 1 & 3 & 2 \\ 3 & -1 & 0 \\ 2 & 0 & 0 \end{pmatrix}.$$
It is symmetric, so the formula really is a scalar product.

(c) By Corollary 19.9, $g_S(e_2, e_3) = S_{23} = 4$.
:::

::: exercise intermediate Degenerate, positive definite or neither?
For each matrix say whether $g_S$ on $\R^2$ is degenerate, positive definite, or non-degenerate but not positive definite:
$$S_1 = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}, \qquad S_2 = \begin{pmatrix} 1 & 2 \\ 2 & 5 \end{pmatrix}, \qquad S_3 = \begin{pmatrix} 1 & 2 \\ 2 & 3 \end{pmatrix}.$$
::: solution
**$S_1$: degenerate.** I look for $v \neq 0$ with $S_1v = 0$: $x_1 + 2x_2 = 0$ (the second row is twice the first), for example $v = (2, -1)$: $S_1v = (2 - 2, 4 - 4) = (0, 0)$. Then for every $w$: $g_{S_1}(v, w) = {}^t(S_1v)\,w = 0$.

**$S_2$: positive definite.** I complete the square:
$$\begin{aligned} g_{S_2}(x, x) &= x_1^2 + 4x_1x_2 + 5x_2^2 \\ &= (x_1^2 + 4x_1x_2 + 4x_2^2) + x_2^2 = (x_1 + 2x_2)^2 + x_2^2. \end{aligned}$$
It is $\ge 0$ and it is 0 only if $x_2 = 0$ and $x_1 + 2x_2 = 0$, that is $x = 0$. (With the $2 \times 2$ criterion: $a = 1 > 0$, $\det S_2 = 1 > 0$.)

**$S_3$: non-degenerate, not positive definite.** $\det S_3 = 3 - 4 = -1 \neq 0$, so it is not degenerate (determinant criterion). But with $x = (2, -1)$:
$$g_{S_3}(x, x) = x_1^2 + 4x_1x_2 + 3x_2^2 = 4 - 8 + 3 = -1 < 0.$$
:::

::: exercise intermediate A basis in which $g_S$ looks Euclidean
Let $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ (Example 19.11) and let $\mathcal B = \{v_1 = (1, -1),\ v_2 = (0, 1)\}$. Compute $[g_S]_{\mathcal B}$. What do you notice?
::: solution
I use $g_S(x, y) = 2x_1y_1 + x_1y_2 + x_2y_1 + x_2y_2$.

- $g_S(v_1, v_1)$ with $x = y = (1, -1)$: $2 \cdot 1 + 1 \cdot (-1) + (-1) \cdot 1 + (-1) \cdot (-1) = 2 - 1 - 1 + 1 = 1$.
- $g_S(v_1, v_2)$ with $x = (1, -1)$, $y = (0, 1)$: $2 \cdot 1 \cdot 0 + 1 \cdot 1 + (-1) \cdot 0 + (-1) \cdot 1 = 0 + 1 + 0 - 1 = 0$.
- $g_S(v_2, v_2)$ with $x = y = (0, 1)$: $0 + 0 + 0 + 1 = 1$.

$$[g_S]_{\mathcal B} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = I_2.$$
In this basis the product $g_S$ has the same matrix as the Euclidean product in the canonical basis: in coordinates, $g_S(v, w) = \lambda_1\mu_1 + \lambda_2\mu_2$. Bases of this kind (vectors of norm 1, pairwise orthogonal) are called **orthonormal**; in lesson L21 you will learn to build them with the Gram–Schmidt algorithm.
:::

::: exercise intermediate A product on polynomials at three symmetric points
On $\R_2[x]$ let $\langle p, q\rangle = p(-1)q(-1) + p(0)q(0) + p(1)q(1)$. (a) Find the associated matrix in the basis $\{1, x, x^2\}$. (b) Is it positive definite? (c) What is $\langle x, x^2\rangle$?
::: solution
(a) Values at $-1, 0, 1$: $1 \to (1, 1, 1)$, $x \to (-1, 0, 1)$, $x^2 \to (1, 0, 1)$.
- $\langle 1, 1\rangle = 3$; $\langle 1, x\rangle = -1 + 0 + 1 = 0$; $\langle 1, x^2\rangle = 1 + 0 + 1 = 2$;
- $\langle x, x\rangle = 1 + 0 + 1 = 2$; $\langle x, x^2\rangle = -1 + 0 + 1 = 0$; $\langle x^2, x^2\rangle = 1 + 0 + 1 = 2$.
$$S = \begin{pmatrix} 3 & 0 & 2 \\ 0 & 2 & 0 \\ 2 & 0 & 2 \end{pmatrix}.$$

(b) Yes, with the same reasoning as in Example 19.4: $\langle p, p\rangle = p(-1)^2 + p(0)^2 + p(1)^2$ is 0 only if $p$ has the three distinct roots $-1, 0, 1$, that is only if $p = 0$ (Theorem 4.6).

(c) $\langle x, x^2\rangle = S_{23} = 0$: the polynomials $x$ and $x^2$ are "perpendicular" for this product. It is the computation needed in the exam of 08/02/2024 (question 8), which asked for the angle between $x$ and $x^2$: you will see in lesson L20 that it is $\frac\pi2$.
:::

::: exercise intermediate Corollary 19.16 with polynomials
With the product and the matrix $S$ of the previous exercise, compute $\langle 1 + 2x,\ x - x^2\rangle$ in two ways: with coordinates and directly.
::: solution
**With coordinates.** $[1 + 2x] = (1, 2, 0)$ and $[x - x^2] = (0, 1, -1)$. First
$$S\begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix} = \begin{pmatrix} 3 \cdot 0 + 0 \cdot 1 + 2 \cdot (-1) \\ 0 \cdot 0 + 2 \cdot 1 + 0 \cdot (-1) \\ 2 \cdot 0 + 0 \cdot 1 + 2 \cdot (-1) \end{pmatrix} = \begin{pmatrix} -2 \\ 2 \\ -2 \end{pmatrix},$$
then ${}^t(1, 2, 0)\,(-2, 2, -2) = -2 + 4 + 0 = 2$.

**Directly.** $p = 1 + 2x$ takes the values $-1, 1, 3$ at $-1, 0, 1$; $q = x - x^2$ takes $-2, 0, 0$. So $\langle p, q\rangle = (-1)(-2) + 1 \cdot 0 + 3 \cdot 0 = 2$. ✓
:::

::: exercise hard Two points are enough for $\R_1[x]$, not for $\R_2[x]$
Let $\langle p, q\rangle = p(0)q(0) + p(1)q(1)$. (a) Prove that on $\R_1[x]$ it is positive definite. (b) On $\R_2[x]$ find the associated matrix in the basis $\{1, x, x^2\}$ and all the polynomials $p$ such that $\langle p, q\rangle = 0$ for every $q$.
::: solution
(a) $\langle p, p\rangle = p(0)^2 + p(1)^2 \ge 0$, and it is 0 only if $p(0) = p(1) = 0$. A polynomial of degree $\le 1$ with two distinct roots is the zero polynomial: if it were non-zero of degree 1 it would have at most one root (Theorem 4.6), if it were a non-zero constant it would have none. So $\langle p, p\rangle > 0$ for every $p \neq 0$.

(b) Values at $0, 1$: $1 \to (1, 1)$, $x \to (0, 1)$, $x^2 \to (0, 1)$. Products: $\langle 1, 1\rangle = 2$, $\langle 1, x\rangle = 1$, $\langle 1, x^2\rangle = 1$, $\langle x, x\rangle = 1$, $\langle x, x^2\rangle = 1$, $\langle x^2, x^2\rangle = 1$:
$$S = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}, \qquad \det S = 0$$
(two equal rows). The product is therefore degenerate. A polynomial $p$ with coordinates $(a, b, c)$ gives zero with everything if and only if ${}^t[p]\,S = 0$, that is $S[p] = 0$ ($S$ is symmetric):
$$\begin{cases} 2a + b + c = 0 \\ a + b + c = 0 \end{cases}$$
(the third equation is equal to the second). Subtracting: $a = 0$, then $c = -b$. So $p = bx - bx^2 = b(x - x^2)$: they are the multiples of $x - x^2 = x(1 - x)$, the polynomial of the handouts.
:::

::: exercise hard A scalar product on matrices
On $M(2, \R)$ let $g(A, B) = \operatorname{tr}({}^tA\,B)$ (the trace is the sum of the entries on the diagonal). (a) Write $g(A, B)$ in terms of the entries. (b) Prove that it is a positive definite scalar product. (c) Find the associated matrix in the basis $\{E_{11}, E_{12}, E_{21}, E_{22}\}$ of the matrices with a single 1. (d) Compute $g(A, B)$ for $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$, $B = \begin{pmatrix} 3 & 0 \\ 1 & -1 \end{pmatrix}$.
::: solution
(a) With $A = \begin{pmatrix} a_1 & a_2 \\ a_3 & a_4 \end{pmatrix}$ and $B = \begin{pmatrix} b_1 & b_2 \\ b_3 & b_4 \end{pmatrix}$:
$${}^tA\,B = \begin{pmatrix} a_1 & a_3 \\ a_2 & a_4 \end{pmatrix}\begin{pmatrix} b_1 & b_2 \\ b_3 & b_4 \end{pmatrix} = \begin{pmatrix} a_1b_1 + a_3b_3 & \ast \\ \ast & a_2b_2 + a_4b_4 \end{pmatrix},$$
so $g(A, B) = a_1b_1 + a_2b_2 + a_3b_3 + a_4b_4$ (the off-diagonal entries $\ast$ are not needed).

(b) It is the Euclidean product of $\R^4$ written on the four entries: bilinear, symmetric and positive definite by Proposition 19.6, because $g(A, A) = a_1^2 + a_2^2 + a_3^2 + a_4^2 > 0$ if $A \neq 0$.

(c) $g(E_{ij}, E_{kl})$ equals 1 if the two matrices are equal and 0 otherwise: the associated matrix is $I_4$.

(d) $g(A, B) = 1 \cdot 3 + 2 \cdot 0 + 0 \cdot 1 + 1 \cdot (-1) = 2$.
:::

::: exercise exam Associated matrix on $\R_1[x]$
On $\R_1[x]$ let $g(p, q) = p(2)q(2) - p(0)q(0)$ and let $\mathcal B = \{x + 1, 1\}$. (a) Compute $[g]_{\mathcal B}$. (b) Is $g$ degenerate? (c) Is $g$ positive definite?
::: solution
(a) Values at $2$ and at $0$: $x + 1 \to (3, 1)$, $1 \to (1, 1)$.
- $g(x + 1, x + 1) = 3 \cdot 3 - 1 \cdot 1 = 8$;
- $g(x + 1, 1) = 3 \cdot 1 - 1 \cdot 1 = 2$;
- $g(1, 1) = 1 - 1 = 0$.
$$[g]_{\mathcal B} = \begin{pmatrix} 8 & 2 \\ 2 & 0 \end{pmatrix}.$$

(b) No. With the determinant criterion: $\det [g]_{\mathcal B} = 0 - 4 = -4 \neq 0$ (the criterion holds for the associated matrix in any basis, because in coordinates $g$ becomes a $g_S$, Corollary 19.16). Or directly: if $p$ gives zero with everything, with $q = 1$ you get $p(2) - p(0) = 0$ and with $q = x$ you get $2p(2) = 0$; so $p(2) = p(0) = 0$ and $p$, of degree $\le 1$ with two roots, is zero.

(c) No: $g(1, 1) = 0$ with $1 \neq 0$. (Also $g(x, x) = 4 - 0 = 4 > 0$ and $g(x - 2, x - 2) = 0 - 4 = -4 < 0$: the signs change.)
:::

::: exercise exam Matrix associated with $g_S$ in a basis of $\R^3$
Let $S = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$. (a) Prove that $g_S$ is positive definite. (b) Compute $[g_S]_{\mathcal B}$ for $\mathcal B = \{v_1 = (1, 0, 1),\ v_2 = (0, 1, 1),\ v_3 = (1, 1, 0)\}$. (c) Compute $g_S(v_1 + v_2, v_3)$ in two ways.
::: solution
(a) $g_S(x, x) = x_1^2 + 2x_1x_2 + 2x_2^2 + 3x_3^2 = (x_1 + x_2)^2 + x_2^2 + 3x_3^2$. It is a sum of terms $\ge 0$ that all vanish only for $x_3 = 0$, $x_2 = 0$ and $x_1 + x_2 = 0$, that is $x = 0$.

(b) I compute the columns $Sv_j$ once:
$$Sv_1 = (1, 1, 3), \quad Sv_2 = (1, 2, 3), \quad Sv_3 = (2, 3, 0).$$
Then $g_S(v_i, v_j) = {}^tv_i\,(Sv_j)$:
- $g(v_1, v_1) = (1, 0, 1) \cdot (1, 1, 3) = 4$; $g(v_1, v_2) = (1, 0, 1) \cdot (1, 2, 3) = 4$; $g(v_1, v_3) = (1, 0, 1) \cdot (2, 3, 0) = 2$;
- $g(v_2, v_2) = (0, 1, 1) \cdot (1, 2, 3) = 5$; $g(v_2, v_3) = (0, 1, 1) \cdot (2, 3, 0) = 3$;
- $g(v_3, v_3) = (1, 1, 0) \cdot (2, 3, 0) = 5$.
$$[g_S]_{\mathcal B} = \begin{pmatrix} 4 & 4 & 2 \\ 4 & 5 & 3 \\ 2 & 3 & 5 \end{pmatrix}.$$

(c) **With the matrix:** $[v_1 + v_2]_{\mathcal B} = (1, 1, 0)$ and $[v_3]_{\mathcal B} = (0, 0, 1)$, so the product is the sum of the entries $(1, 3)$ and $(2, 3)$ of $[g_S]_{\mathcal B}$: $2 + 3 = 5$. **Directly:** $v_1 + v_2 = (1, 1, 2)$ and $Sv_3 = (2, 3, 0)$, so $(1, 1, 2) \cdot (2, 3, 0) = 2 + 3 + 0 = 5$. ✓
:::

## Review questions

::: question What is a scalar product on a real vector space $V$?
A map $V \times V \to \R$, $(v, w) \mapsto \langle v, w\rangle$, which is linear in the first slot ($\langle v + v', w\rangle = \langle v, w\rangle + \langle v', w\rangle$ and $\langle \lambda v, w\rangle = \lambda\langle v, w\rangle$) and symmetric ($\langle v, w\rangle = \langle w, v\rangle$). Linearity in the second slot follows from this: the product is bilinear.
:::

::: question Why is the field $\R$, and not $\C$ or $\Q$, in the lessons on scalar products?
Because you need positive numbers (to say $\langle v, v\rangle > 0$), which make no sense in $\C$, and the square roots of positive numbers (for the length $\sqrt{\langle v, v\rangle}$), which are missing in $\Q$.
:::

::: question How do you derive $\langle v, \lambda w\rangle = \lambda\langle v, w\rangle$ from the axioms?
You turn round with symmetry, use the axiom on the first slot and turn round again: $\langle v, \lambda w\rangle = \langle \lambda w, v\rangle = \lambda\langle w, v\rangle = \lambda\langle v, w\rangle$.
:::

::: question Why is $\langle v, 0\rangle = 0$ for every $v$?
Because $\langle v, 0\rangle = \langle v, 0 + 0\rangle = \langle v, 0\rangle + \langle v, 0\rangle$; taking $\langle v, 0\rangle$ away from both sides, what is left is $0 = \langle v, 0\rangle$.
:::

::: question What is the difference between "degenerate" and "positive definite"? Give an example of each.
Degenerate: there is $v \neq 0$ with $\langle v, w\rangle = 0$ for every $w$ (example: $x_1y_1$ on $\R^2$, with $v = e_2$). Positive definite: $\langle v, v\rangle > 0$ for every $v \neq 0$ (example: the Euclidean product). The first condition is about the product with all vectors, the second about the product of each vector with itself.
:::

::: question Why is a positive definite product not degenerate? Does the converse hold?
If there were $v \neq 0$ with $\langle v, w\rangle = 0$ for every $w$, with $w = v$ you would have $\langle v, v\rangle = 0$, against positive definiteness. The converse is false: $x_1y_1 - x_2y_2$ is non-degenerate but $\langle e_2, e_2\rangle = -1$.
:::

::: question What is the Euclidean scalar product and why is it positive definite?
It is $\langle x, y\rangle = {}^tx\,y = x_1y_1 + \dots + x_ny_n$ on $\R^n$. It is positive definite because $\langle x, x\rangle = x_1^2 + \dots + x_n^2$ is a sum of squares, positive as soon as one coordinate is not zero.
:::

::: question How do you get a scalar product from a matrix? Why must the matrix be symmetric?
With $g_S(x, y) = {}^tx\,S\,y = \sum_{i,j} x_iS_{ij}y_j$. Bilinearity comes from the matrix product; the symmetry $g_S(x, y) = g_S(y, x)$ requires ${}^tS = S$, because ${}^tx\,S\,y = {}^ty\,{}^tS\,x$.
:::

::: question What is $g_S(e_i, e_j)$? And how do you read the matrix off the formula of $g_S$?
$g_S(e_i, e_j) = S_{ij}$: ${}^te_i$ picks row $i$, $e_j$ column $j$. As a consequence $S_{ij}$ is the coefficient of $x_iy_j$ in the formula, without dividing by two.
:::

::: question What is the associated matrix $[g]_{\mathcal B}$? Why is it symmetric?
Once the basis $\mathcal B = \{v_1, \dots, v_n\}$ is fixed, it is the $n \times n$ matrix with entry $(i, j)$ equal to $g(v_i, v_j)$. It is symmetric because $g(v_i, v_j) = g(v_j, v_i)$.
:::

::: question How do you compute $g(v, w)$ knowing $[g]_{\mathcal B}$?
With coordinates: $g(v, w) = {}^t[v]_{\mathcal B}\,[g]_{\mathcal B}\,[w]_{\mathcal B}$ (Corollary 19.16). It comes from bilinearity: if $v = \sum \lambda_iv_i$ and $w = \sum \mu_jv_j$, then $g(v, w) = \sum_{i,j} \lambda_i\mu_j\,g(v_i, v_j)$.
:::

::: question Why is $p(0)q(0) + p(1)q(1) + p(2)q(2)$ positive definite on $\R_2[x]$, while $p(0)q(0) + p(1)q(1)$ is degenerate?
In the first, $\langle p, p\rangle = 0$ forces $p$ to have three distinct roots, impossible for a non-zero polynomial of degree $\le 2$. In the second two roots are enough: $p = x(1 - x)$ is non-zero, vanishes at 0 and at 1, and so gives zero with every $q$.
:::

## Glossary

```glossary
Scalar product | Bilinear and symmetric map $V \times V \to \R$; it is written $\langle v, w\rangle$ or $g(v, w)$.
Bilinear | Linear in the first slot when the second is fixed, and linear in the second when the first is fixed.
Symmetric | $\langle v, w\rangle = \langle w, v\rangle$ for every $v, w$.
Degenerate | There is $v \neq 0$ with $\langle v, w\rangle = 0$ for every $w \in V$. For $g_S$: it happens if and only if $\det S = 0$.
Non-degenerate | For every $v \neq 0$ there is $w$ with $\langle v, w\rangle \neq 0$.
Positive definite | $\langle v, v\rangle > 0$ for every $v \neq 0$. It implies non-degenerate.
Euclidean scalar product | On $\R^n$: $\langle x, y\rangle = {}^tx\,y = x_1y_1 + \dots + x_ny_n$. It is positive definite.
Transpose ${}^tx$ | The column vector $x$ written as a row; ${}^tx\,y$ is a row-by-column product that gives a number.
Symmetric matrix | Square matrix with ${}^tS = S$, that is $S_{ij} = S_{ji}$.
$g_S$ | The scalar product $g_S(x, y) = {}^tx\,S\,y = \sum_{i,j} x_iS_{ij}y_j$ defined by a symmetric matrix $S$.
Canonical basis | $e_1, \dots, e_n$, with $e_i$ having 1 in position $i$ and 0 elsewhere; $g_S(e_i, e_j) = S_{ij}$.
Associated matrix $[g]_{\mathcal B}$ | Symmetric matrix with entry $(i, j)$ equal to $g(v_i, v_j)$, where $\mathcal B = \{v_1, \dots, v_n\}$.
Coordinates $[v]_{\mathcal B}$ | The coefficients $\lambda_1, \dots, \lambda_n$ with $v = \lambda_1v_1 + \dots + \lambda_nv_n$, written as a column.
$\R_k[x]$ | The space of polynomials with real coefficients of degree $\le k$; it has dimension $k + 1$ and canonical basis $\{1, x, \dots, x^k\}$.
Isotropic vector | (Martelli's term.) Vector $v$ with $\langle v, v\rangle = 0$; if the product is positive definite the only one is $v = 0$.
Radical | (Martelli's term.) The set of vectors that give zero with everything; for $g_S$ it is the kernel of $S$. It is $\{0\}$ exactly when the product is non-degenerate.
```

## Checklist

```checklist
- I can state the three axioms of the scalar product and derive from them linearity in the second slot.
- I can prove that $\langle v, 0\rangle = 0$.
- I can recognise whether a formula on $\R^2$ or $\R^3$ is a scalar product, and show with a numerical example when it is not.
- I can tell apart degenerate, non-degenerate and positive definite, with an example for each case.
- I can prove that positive definite implies non-degenerate, and why the converse is false.
- I can compute the Euclidean scalar product in $\R^n$ and write it as ${}^tx\,y$.
- I can go from a symmetric matrix $S$ to the formula of $g_S$ and back, without dividing by two.
- I can compute the associated matrix $[g]_{\mathcal B}$ in any basis, also for products on polynomials.
- I can use the formula $g(v, w) = {}^t[v]_{\mathcal B}\,[g]_{\mathcal B}\,[w]_{\mathcal B}$.
- I can decide whether $g_S$ is degenerate with the determinant, and whether a $2 \times 2$ matrix is positive definite.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 19 "Prodotti scalari I", pp. 96–99: sections 19.A (definitions), 19.B (symmetric matrices) and 19.C (associated matrix) are followed in order, with the same numbering (Definitions 19.1, 19.2, 19.5, 19.12; Propositions 19.3, 19.6, 19.7, 19.8, 19.15; Corollaries 19.9, 19.16; Examples 19.4, 19.10, 19.11, 19.13, 19.14). The handouts have no exercises for this lesson. Reminders from other lessons: Theorem 4.6 (roots of a polynomial), lessons L08 (transpose), L10 (determinant), L15 (coordinates).
- **B. Martelli, *Geometria e algebra lineare***, chapter 7: §7.1 (in particular the proof of Proposition 7.1.5, the criteria for diagonal matrices of §7.1.6, Proposition 7.1.23 on the radical and the words "isotropo" and "radicale") and §7.2.1 (associated matrix). The book is free: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf).
- **Exam papers** (Moodle 2025/26): texts of the exam sessions of 24/01/2024 (question 7), 10/06/2024 (question 4), 10/07/2024 (question 9), 16/01/2025 and 07/02/2025 (problem 12), 15/01/2026 (question 9), 05/02/2026 (problem 12), 03/06/2026 (question 4). The three questions reported are solved in these notes.
- The **"Beyond the handouts"** parts (the square of a sum, the non-degeneracy of the third product of Example 19.4, the product of physics, the criteria with the determinant, diagonal matrices and the $2 \times 2$ criterion) and all the exercises are additions in these notes, to connect the lesson to the rest of the course and to the exam.
