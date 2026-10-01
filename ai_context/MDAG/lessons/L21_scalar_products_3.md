---
course: MDAG
module: AG
lesson: L21
title: Scalar products III
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Part 2 (modB) · Linear Algebra and Geometry · Channels A, B and C · Lesson L21
description: >-
  Notes on lesson L21 of Linear Algebra and Geometry (MDAG, part 2): orthogonal vectors, orthogonal complement,
  orthogonal projection onto a line and onto a subspace, orthogonal and orthonormal bases, the Gram–Schmidt algorithm,
  orthogonal decomposition and least squares, with exam-style quizzes and worked exercises.
lede: >-
  Orthogonality is the most used tool of the course. In this lesson you learn to find all the vectors orthogonal to a
  subspace ($W^\perp$), to project a vector onto a line and onto a plane, to build orthogonal bases with the
  Gram–Schmidt algorithm and to solve "as well as possible" a system that has no solutions, with the normal equations
  ${}^tAAx = {}^tAb$. It is the heart of the second problem of many exam sessions.
material: handouts
facts:
  Handouts: lesson 21 · pp. 105–110
  Book: Martelli, §7.3 and §8.1.5–8.1.10
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 120–150 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 21 "Prodotti scalari III"; B. Martelli, Geometria e algebra
  lineare, §7.1.7, §7.3, §8.1.5–8.1.10
italian_file: L21_prodotti_scalari_3.html
html_notes: notes/MDAG/L21_scalar_products_3.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L21_prodotti_scalari_3.md
---

## In brief

- Throughout the lesson the scalar product is **positive definite**. Two vectors are **orthogonal** if $\langle v, w\rangle = 0$; if they are non-zero, it means that they form a right angle. The zero vector is orthogonal to everything.
- The **orthogonal complement** of a subspace $W$ is $W^\perp = \{v \mid \langle v, w\rangle = 0 \ \forall w \in W\}$: it is always a subspace. It is computed by imposing orthogonality to the **generators** of $W$: it is a homogeneous linear system.
- The **orthogonal projection** of $v$ onto the line $\Span(w)$ is $p_w(v) = \frac{\langle v, w\rangle}{\langle w, w\rangle}\,w$; the number $\frac{\langle v, w\rangle}{\langle w, w\rangle}$ is called the **Fourier coefficient**. The remainder $v - p_w(v)$ is orthogonal to $w$.
- In an **orthogonal basis** the coordinates are computed without systems: $v = \sum_i \frac{\langle v, v_i\rangle}{\langle v_i, v_i\rangle}\,v_i$.
- The **Gram–Schmidt** algorithm turns independent vectors into orthogonal vectors: from each $v_i$ you take away the projections onto the vectors already built. Dividing by the norms you get an **orthonormal** basis.
- **Orthogonal decomposition**: $V = W \oplus W^\perp$, so every $v$ can be written in only one way as $v = w + z$ with $w \in W$, $z \in W^\perp$, and $\dim W + \dim W^\perp = \dim V$.
- The piece $w = p_W(v)$ is the **orthogonal projection** onto $W$: with an orthonormal basis $p_W(v) = \sum_i \langle v, w_i\rangle w_i$. It is the point of $W$ **closest** to $v$.
- **Least squares**: if $Ax = b$ has no solutions, you look for $x_0$ that makes $\|Ax_0 - b\|$ as small as possible. They are the solutions of the **normal equations** ${}^tA\,A\,x_0 = {}^tA\,b$; this is how you find the regression line.
- At the exam: "orthonormal basis of a plane, then projection of a vector" is problem 12 of many exam sessions, with the Euclidean product or with a $g_S$.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## Orthogonal vectors (p. 105)

In lesson L20 you saw that the angle between two non-zero vectors is right exactly when the scalar product is zero. This condition is so important that it has a name, and it is used even when one of the vectors is zero.

> [!DEF] Orthogonal vectors (p. 105)
> Let $V$ be equipped with a positive definite scalar product. Two vectors $v, w \in V$ are **orthogonal** if
> $$\langle v, w\rangle = 0.$$
> If both are non-zero, this is equivalent to saying that they form a right angle.

Piece by piece:

- "orthogonal" is the technical name for "perpendicular";
- the zero vector is orthogonal to **all** vectors, because $\langle 0, w\rangle = 0$ always (lesson L19);
- orthogonality **depends on the scalar product**: two vectors orthogonal for one product may not be for another.

> [!EXAMPLE] 21.1 · The vectors orthogonal to a vector of the plane
> In the Euclidean scalar product of $\R^2$, the vectors $(x, y)$ orthogonal to $(a, b) \neq 0$ satisfy $ax + by = 0$ and therefore form the line
> $$\Span\begin{pmatrix} -b \\ a \end{pmatrix}.$$
> For example, the vectors orthogonal to $(2, 1)$ are those with $2x + y = 0$, that is the line $\Span((-1, 2))$. Check: $\langle (-1, 2), (2, 1)\rangle = -2 + 2 = 0$.

Why exactly that line? The equation $ax + by = 0$ is a homogeneous system with a single non-zero equation in two unknowns: the solutions form a space of dimension $2 - 1 = 1$, a line. The vector $(-b, a)$ is a solution ($a(-b) + ba = 0$) and it is not zero, so it spans the line. The practical rule: **swap the coordinates and change one sign**.

```graph
title: The vectors orthogonal to $(2, 1)$ form the line $\Span((-1, 2))$
x: -3 3
y: -2.5 2.5
line: 0 0 -1 2 | violet | dashed
vector: 2 1 | accent | thick | $(2, 1)$ | se
vector: -1 2 | blue | thick | $(-1, 2)$ | nw
```

> [!EXAMPLE] 21.2 · The canonical basis
> With respect to the Euclidean scalar product of $\R^n$, the vectors $e_i$ and $e_j$ of the canonical basis are orthogonal for $i \neq j$: $\langle e_i, e_j\rangle$ is the sum of the products of the coordinates, and $e_i$, $e_j$ never have a 1 in the same position.

> [!EXAMPLE] With another scalar product
> With $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ the vectors $e_1$ and $e_2$ are **not** orthogonal: $g_S(e_1, e_2) = S_{12} = 1$. The vectors $g_S$-orthogonal to $e_1$ are those with $g_S(e_1, y) = 2y_1 + y_2 = 0$ (the first row of $S$ times $y$), that is the line $\Span((1, -2))$. For the Euclidean product, instead, they would be the line $\Span((0, 1))$.

> [!BEYOND] Non-zero orthogonal vectors are independent
> If $v_1, \dots, v_k$ are non-zero and pairwise orthogonal, then they are linearly independent (Martelli, Proposition 8.1.25). Start from a zero combination $\lambda_1v_1 + \dots + \lambda_kv_k = 0$ and take the scalar product with $v_i$:
> $$0 = \langle 0, v_i\rangle = \lambda_1\langle v_1, v_i\rangle + \dots + \lambda_k\langle v_k, v_i\rangle = \lambda_i\langle v_i, v_i\rangle,$$
> because all the other products are zero. Since $v_i \neq 0$, $\langle v_i, v_i\rangle > 0$ and so $\lambda_i = 0$, for every $i$. In particular $n$ non-zero pairwise orthogonal vectors in a space of dimension $n$ always form a basis.

## The orthogonal complement (p. 105)

Now not a single vector, but a whole subspace: which vectors are orthogonal to **all** the vectors of $W$?

> [!DEF] 21.3 · Orthogonal complement
> Let $W \subset V$ be a subspace. The **orthogonal complement** of $W$ is
> $$W^\perp = \{v \in V \mid \langle v, w\rangle = 0 \text{ for every } w \in W\}.$$

Piece by piece:

- the symbol $W^\perp$ is read "$W$ orthogonal" or "$W$ perp";
- a vector belongs to $W^\perp$ if it is orthogonal to **every** vector of $W$, not only to some;
- extreme cases: $\{0\}^\perp = V$ (everything is orthogonal to the zero vector) and $V^\perp = \{0\}$ (a vector orthogonal to the whole of $V$ is orthogonal to itself, so it is zero because the product is positive definite).

> [!PROP] 21.4
> $W^\perp$ is a vector subspace of $V$.

The proof checks the three conditions for a subspace (lesson L06):

1. $0 \in W^\perp$, because $\langle 0, w\rangle = 0$ for every $w$;
2. if $v, v' \in W^\perp$, for every $w \in W$ we have $\langle v + v', w\rangle = \langle v, w\rangle + \langle v', w\rangle = 0 + 0 = 0$, so $v + v' \in W^\perp$;
3. if $v \in W^\perp$ and $\lambda \in \R$, for every $w \in W$ we have $\langle \lambda v, w\rangle = \lambda\langle v, w\rangle = \lambda \cdot 0 = 0$, so $\lambda v \in W^\perp$. $\square$

For example the exam of 05/02/2026 (question 2) asked which of five sets was not a subspace of $\R_2[x]$, and among the sets there was $\R_1[x]^\perp$: it is a subspace by Proposition 21.4, so it was not the answer.

**How it is computed in practice.** The definition asks you to check **infinitely many** vectors $w$. The generators are enough.

> [!BEYOND] The generators are enough
> If $W = \Span(w_1, \dots, w_k)$, then (Martelli, Proposition 7.3.3)
> $$W^\perp = \{v \in V \mid \langle v, w_1\rangle = 0, \ \dots, \ \langle v, w_k\rangle = 0\}.$$
> Indeed every $w \in W$ can be written $w = \lambda_1w_1 + \dots + \lambda_kw_k$, and if $v$ is orthogonal to the generators then $\langle v, w\rangle = \lambda_1\langle v, w_1\rangle + \dots + \lambda_k\langle v, w_k\rangle = 0$. With a product $g_S$ on $\R^n$ the conditions become the homogeneous linear system ${}^tw_i\,S\,x = 0$ for $i = 1, \dots, k$; with the Euclidean product, simply $\langle w_i, x\rangle = 0$.

> [!METHOD] Computing $W^\perp$
> 1. Find some generators $w_1, \dots, w_k$ of $W$ (if $W$ is given by equations, first find a basis).
> 2. Write one equation for each generator: $\langle x, w_i\rangle = 0$. With $g_S$ the row of coefficients is ${}^tw_i\,S = {}^t(Sw_i)$.
> 3. Solve the homogeneous system (lessons L11–L13) and write a basis of the solutions.
> 4. Check: $\dim W^\perp = \dim V - \dim W$ (Theorem 21.8, further on).

> [!EXAMPLE] Three complements in $\R^3$ (Euclidean product)
> 1. **A line.** $W = \Span((1, 2, 3))$. A single equation: $x + 2y + 3z = 0$. $W^\perp$ is the **plane** with this equation; a basis: $y$ and $z$ are free, so $(-2, 1, 0)$ (with $y = 1, z = 0$) and $(-3, 0, 1)$ (with $y = 0, z = 1$).
> 2. **A plane given by generators.** $W = \Span((1, 1, 0), (0, 1, 1))$. Two equations: $x + y = 0$ and $y + z = 0$. So $x = -y$, $z = -y$: $W^\perp = \Span((1, -1, 1))$, a **line**. Check: $1 - 1 + 0 = 0$ and $0 - 1 + 1 = 0$.
> 3. **A plane given by an equation.** $W = \{x + y + z = 0\}$: the equation itself says that every vector of $W$ is orthogonal to $(1, 1, 1)$, so $\Span((1, 1, 1)) \subset W^\perp$. By the dimension formula $\dim W^\perp = 3 - 2 = 1$, so $W^\perp = \Span((1, 1, 1))$. In general the complement of the plane $\{ax + by + cz = 0\}$ is the line spanned by $(a, b, c)$.

> [!EXAMPLE] A complement among polynomials
> On $\R_2[x]$ with $\langle p, q\rangle = p(0)q(0) + p(1)q(1) + p(2)q(2)$ (lesson L19), we look for $\R_1[x]^\perp = \Span(1, x)^\perp$. With the matrix $\begin{pmatrix} 3 & 3 & 5 \\ 3 & 5 & 9 \\ 5 & 9 & 17 \end{pmatrix}$ of lesson L19 and $p = a + bx + cx^2$:
> $$\begin{aligned} \langle p, 1\rangle &= 3a + 3b + 5c = 0, \\ \langle p, x\rangle &= 3a + 5b + 9c = 0. \end{aligned}$$
> Subtracting: $2b + 4c = 0$, that is $b = -2c$; then $3a - 6c + 5c = 0$, that is $a = \frac c3$. With $c = 3$: $p = 1 - 6x + 3x^2$, and $\R_1[x]^\perp = \Span(1 - 6x + 3x^2)$. Check with the values at $0, 1, 2$, which are $1, -2, 1$: $\langle p, 1\rangle = 1 - 2 + 1 = 0$ and $\langle p, x\rangle = 0 - 2 + 2 = 0$.

## Orthogonal projection onto a line (pp. 105–106)

Imagine a line $U$ through the origin and a vector $v$ off the line. If the sun is straight above, perpendicular to the line, the shadow of $v$ on $U$ is a vector of $U$: the **orthogonal projection** of $v$. What is left, $v$ minus its shadow, is perpendicular to the line.

Let $w \neq 0$ and let $U = \Span(w)$. For $v \in V$ we look for a vector $p_w(v) \in U$ such that

$$v - p_w(v) \in U^\perp.$$

This vector is the **orthogonal projection** of $v$ onto the line $U$.

> [!PROP] 21.5
> We have
> $$p_w(v) = \frac{\langle v, w\rangle}{\langle w, w\rangle}\,w = \frac{\langle v, w\rangle}{\|w\|^2}\,w.$$

The handouts' proof, step by step:

1. $p_w(v)$ lies on the line $U = \Span(w)$, so it is a multiple of $w$: $p_w(v) = kw$ for a number $k$ to be found;
2. the condition $v - kw \in U^\perp$ means that $v - kw$ is orthogonal to $w$ (the generator of the line is enough):
   $$0 = \langle v - kw, w\rangle = \langle v, w\rangle - k\langle w, w\rangle;$$
3. since $w \neq 0$, $\langle w, w\rangle > 0$ and you can divide: $k = \frac{\langle v, w\rangle}{\langle w, w\rangle}$. $\square$

> [!EXAMPLE] Projecting $v = (1, 3)$ onto the line of $w = (4, 2)$
> 1. $\langle v, w\rangle = 4 + 6 = 10$ and $\langle w, w\rangle = 16 + 4 = 20$;
> 2. coefficient $\frac{10}{20} = \frac12$, so $p_w(v) = \frac12(4, 2) = (2, 1)$;
> 3. the remainder is $v - p_w(v) = (1, 3) - (2, 1) = (-1, 2)$;
> 4. check: $\langle (-1, 2), (4, 2)\rangle = -4 + 4 = 0$. ✓
>
> With $w' = (2, 1)$ instead of $w$ (same line) the coefficient becomes $\frac{\langle v, w'\rangle}{\langle w', w'\rangle} = \frac55 = 1$, but the projection is the same: $1 \cdot (2, 1) = (2, 1)$. **The projection depends on the line, not on the vector chosen to span it.**

```graph
title: $v = (1, 3)$ splits into $p_w(v) = (2, 1)$, on the line of $w$, plus $(-1, 2)$, orthogonal to the line
x: -1.5 4.5
y: -0.5 3.5
line: 0 0 4 2 | grey | dashed
vector: 4 2 | grey | $w$ | se
vector: 1 3 | accent | thick | $v$ | nw
vector: 2 1 | amber | thick | $p_w(v)$ | se
segment: 2 1 1 3 | violet | dashed | $v - p_w(v)$ | e
```

> [!EXAMPLE] A projection in $\R^3$
> $v = (1, 2, 3)$ onto the line of $w = (1, 1, 1)$: $\langle v, w\rangle = 6$, $\langle w, w\rangle = 3$, so $p_w(v) = 2(1, 1, 1) = (2, 2, 2)$. The remainder $(1, 2, 3) - (2, 2, 2) = (-1, 0, 1)$ is orthogonal to $w$: $-1 + 0 + 1 = 0$.

**Every vector splits into two orthogonal pieces.** From the construction:

$$v = p_w(v) + \big(v - p_w(v)\big),$$

with the first term in $U$ and the second in $U^\perp$. Moreover $U \cap U^\perp = \{0\}$: a vector lying in both is orthogonal to itself, so it is zero. Then the sum is **direct** (Definition 18.4: the way of writing it as a sum is unique) and

$$V = U \oplus U^\perp.$$

The number $\frac{\langle v, w\rangle}{\langle w, w\rangle}$ is called the **Fourier coefficient** of $v$ with respect to $w$.

> [!PITFALL] Two frequent mistakes
> - Dividing by $\|w\|$ instead of by $\|w\|^2 = \langle w, w\rangle$. With $v = (3, 1)$ and $w = (1, 1)$ the right projection is $\frac42(1, 1) = (2, 2)$; dividing by $\|w\| = \sqrt2$ you would get $(2\sqrt2, 2\sqrt2)$, which does not even have an orthogonal remainder.
> - Swapping the roles: $p_w(v)$ projects $v$ **onto the line of $w$**. Projecting $w$ onto the line of $v$ gives another vector.

> [!BEYOND] The length of the projection
> $\|p_w(v)\| = \frac{|\langle v, w\rangle|}{\|w\|^2}\,\|w\| = \frac{|\langle v, w\rangle|}{\|w\|}$ (Martelli, Exercise 8.1.15). If $w$ is a unit vector, $p_w(v) = \langle v, w\rangle\,w$ and the length of the projection is $|\langle v, w\rangle|$: it is the interpretation of the scalar product as a "shadow" that you see in physics.

Try it with the tool: the yellow arrow is the projection of $v$ onto the line of $u$, and the violet segment is the remainder. Drag $v$: the violet segment always stays perpendicular to the line. When $v$ is perpendicular to $u$ the projection becomes the zero vector.

```widget vettori
title: Orthogonal projection of v onto the line of u
u: 4 2
v: 1 3
modo: scalare
modi: scalare
raggio: 5
```

## Coordinates in an orthogonal basis (p. 106)

A basis $\{v_1, \dots, v_n\}$ is called **orthogonal** if its vectors are pairwise orthogonal ($\langle v_i, v_j\rangle = 0$ for $i \ne j$), and **orthonormal** if in addition every vector has norm 1. The canonical basis of $\R^n$ is orthonormal for the Euclidean product (Example 21.2). With an orthogonal basis the coordinates are computed **without solving systems**.

> [!PROP] 21.6
> Let $\mathcal B = \{v_1, \dots, v_n\}$ be an orthogonal basis of $V$. For every $v \in V$,
> $$v = \sum_{i=1}^n p_{v_i}(v) = \sum_{i=1}^n \frac{\langle v, v_i\rangle}{\langle v_i, v_i\rangle}\,v_i.$$

In words: every vector is the **sum of its projections** onto the vectors of an orthogonal basis, and the coordinates are the Fourier coefficients. The proof:

1. since $\mathcal B$ is a basis, $v = \lambda_1v_1 + \dots + \lambda_nv_n$ for some numbers $\lambda_1, \dots, \lambda_n$;
2. take the scalar product of both sides with $v_i$: on the right all the terms $\lambda_j\langle v_j, v_i\rangle$ with $j \ne i$ are zero, by orthogonality, and what is left is $\langle v, v_i\rangle = \lambda_i\langle v_i, v_i\rangle$;
3. so $\lambda_i = \frac{\langle v, v_i\rangle}{\langle v_i, v_i\rangle}$. $\square$

If the basis is **orthonormal**, $\langle v_i, v_i\rangle = 1$ and the formula becomes even shorter: $v = \sum_i \langle v, v_i\rangle\,v_i$.

> [!EXAMPLE] Coordinates without a system
> In $\R^2$ the basis $v_1 = (2, 1)$, $v_2 = (-1, 2)$ is orthogonal ($-2 + 2 = 0$). For $v = (2, 3)$:
> $$\frac{\langle v, v_1\rangle}{\langle v_1, v_1\rangle} = \frac{4 + 3}{5} = \frac75, \qquad \frac{\langle v, v_2\rangle}{\langle v_2, v_2\rangle} = \frac{-2 + 6}{5} = \frac45.$$
> Check: $\frac75(2, 1) + \frac45(-1, 2) = \left(\frac{14 - 4}{5}, \frac{7 + 8}{5}\right) = (2, 3)$. ✓ (It is Example 8.1.19 of Martelli.)
>
> In $\R^3$, with the orthogonal basis $(1, 1, 0)$, $(1, -1, 0)$, $(0, 0, 1)$ and $v = (3, 1, 2)$: the coefficients are $\frac{3 + 1}{2} = 2$, $\frac{3 - 1}{2} = 1$, $\frac{2}{1} = 2$, and indeed $2(1, 1, 0) + (1, -1, 0) + 2(0, 0, 1) = (3, 1, 2)$.

> [!IDEA] Why orthogonal bases save work
> With an arbitrary basis, to find the coordinates of $v$ you have to solve an $n \times n$ system. With an orthogonal basis each coordinate is **a ratio of two scalar products**, computed on its own. This is why so much effort goes into building orthogonal bases: it is what Gram–Schmidt does.

## The Gram–Schmidt algorithm (p. 107)

Orthogonal bases are convenient: how do you build one? The **Gram–Schmidt** algorithm takes linearly independent vectors $v_1, \dots, v_k$ and turns them into orthogonal vectors $w_1, \dots, w_k$ by setting

$$w_1 = v_1$$

and, for $i \ge 2$,

$$w_i = v_i - \sum_{j=1}^{i-1} p_{w_j}(v_i) = v_i - \sum_{j=1}^{i-1} \frac{\langle v_i, w_j\rangle}{\langle w_j, w_j\rangle}\,w_j.$$

So at each step you take away from $v_i$ its components in the directions already built. Written out for three vectors:

$$\begin{aligned} w_1 &= v_1, \\ w_2 &= v_2 - \frac{\langle v_2, w_1\rangle}{\langle w_1, w_1\rangle}\,w_1, \\ w_3 &= v_3 - \frac{\langle v_3, w_1\rangle}{\langle w_1, w_1\rangle}\,w_1 - \frac{\langle v_3, w_2\rangle}{\langle w_2, w_2\rangle}\,w_2. \end{aligned}$$

**Why it works.** $w_2$ is $v_2$ minus its projection onto the line of $w_1$: by Proposition 21.5 the remainder is orthogonal to $w_1$. In the same way, taking away from $v_3$ the projections onto $w_1$ and onto $w_2$ (which are already orthogonal to each other), the remainder is orthogonal to both. Moreover each $w_i$ is $v_i$ plus a combination of the previous vectors, so $\Span(w_1, \dots, w_i) = \Span(v_1, \dots, v_i)$, and $w_i \ne 0$ because the $v_i$ are independent.

> [!EXAMPLE] Gram–Schmidt in the plane
> $v_1 = (3, 1)$, $v_2 = (2, 2)$. Then $w_1 = (3, 1)$ and
> $$\begin{aligned} w_2 &= (2, 2) - \frac{\langle (2, 2), (3, 1)\rangle}{\langle (3, 1), (3, 1)\rangle}(3, 1) = (2, 2) - \frac{8}{10}(3, 1) \\ &= \left(2 - \frac{12}5, 2 - \frac45\right) = \left(-\frac25, \frac65\right). \end{aligned}$$
> Check: $\langle w_2, w_1\rangle = -\frac65 + \frac65 = 0$. ✓ Multiplying by 5 you can use $(-2, 6)$, or dividing by 2, $(-1, 3)$: it stays orthogonal to $w_1$.

> [!EXAMPLE] 21.7 · Gram–Schmidt in $\R^3$
> Let us orthogonalise
> $$v_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \qquad v_2 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}, \qquad v_3 = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$$
> with respect to the Euclidean scalar product of $\R^3$. We get
> $$w_1 = v_1 = \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \qquad w_2 = v_2 - \frac{\langle v_2, w_1\rangle}{\langle w_1, w_1\rangle}\,w_1 = \begin{pmatrix} -\frac12 \\ \frac12 \\ 1 \end{pmatrix}$$
> and
> $$w_3 = v_3 - \frac{\langle v_3, w_1\rangle}{\langle w_1, w_1\rangle}\,w_1 - \frac{\langle v_3, w_2\rangle}{\langle w_2, w_2\rangle}\,w_2 = \begin{pmatrix} \frac23 \\ -\frac23 \\ \frac23 \end{pmatrix}.$$
> The vectors $w_1, w_2, w_3$ are orthogonal.

The computations that the handouts do not write:

1. $\langle v_2, w_1\rangle = 0 + 1 + 0 = 1$ and $\langle w_1, w_1\rangle = 2$, so $w_2 = (0, 1, 1) - \frac12(1, 1, 0) = \left(-\frac12, \frac12, 1\right)$;
2. $\langle v_3, w_1\rangle = 1 + 0 + 0 = 1$, so the first coefficient is $\frac12$;
3. $\langle v_3, w_2\rangle = -\frac12 + 0 + 1 = \frac12$ and $\langle w_2, w_2\rangle = \frac14 + \frac14 + 1 = \frac32$, so the second coefficient is $\frac{1/2}{3/2} = \frac13$;
4. $w_3 = (1, 0, 1) - \frac12(1, 1, 0) - \frac13\left(-\frac12, \frac12, 1\right)$, coordinate by coordinate:
   $$1 - \frac12 + \frac16 = \frac23, \quad 0 - \frac12 - \frac16 = -\frac23, \quad 1 - 0 - \frac13 = \frac23;$$
5. checks: $\langle w_1, w_2\rangle = -\frac12 + \frac12 + 0 = 0$, $\langle w_1, w_3\rangle = \frac23 - \frac23 + 0 = 0$, $\langle w_2, w_3\rangle = -\frac13 - \frac13 + \frac23 = 0$. ✓

**From orthogonal to orthonormal.** To get an **orthonormal** basis it is enough to divide each vector by its norm (lesson L20): $\|w_1\| = \sqrt2$, $\|w_2\| = \sqrt{\frac32} = \frac{\sqrt6}2$, $\|w_3\| = \sqrt{\frac{4}{3}} = \frac{2}{\sqrt3}$, so

$$\frac{1}{\sqrt2}\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}, \qquad \frac{1}{\sqrt6}\begin{pmatrix} -1 \\ 1 \\ 2 \end{pmatrix}, \qquad \frac{1}{\sqrt3}\begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}.$$

In the second and third vectors it is best to remove the fractions first: $w_2 = \frac12(-1, 1, 2)$ and $\|(-1, 1, 2)\| = \sqrt6$; $w_3 = \frac23(1, -1, 1)$ and $\|(1, -1, 1)\| = \sqrt3$.

> [!BEYOND] Rescaling during the algorithm
> The projection onto a line does not change if you replace the generator with a non-zero multiple of it (you saw this in the section on projection). So during Gram–Schmidt you can **multiply each $w_i$ by a convenient number** before going on (Martelli, §8.1.8). In Example 21.7, with $w_2' = 2w_2 = (-1, 1, 2)$: $\langle v_3, w_2'\rangle = -1 + 0 + 2 = 1$, $\langle w_2', w_2'\rangle = 6$, and
> $$w_3 = (1, 0, 1) - \frac12(1, 1, 0) - \frac16(-1, 1, 2) = \left(\frac23, -\frac23, \frac23\right),$$
> the same result with fewer fractions.

> [!PITFALL] You project onto the new $w$, not onto the old $v$
> In the computation of $w_3$ the coefficients use $w_1$ and $w_2$, already orthogonal to each other. If by mistake you project onto $v_2$ instead of onto $w_2$:
> $$(1, 0, 1) - \frac12(1, 1, 0) - \frac12(0, 1, 1) = \left(\frac12, -1, \frac12\right),$$
> and this vector is **not** orthogonal to $w_2$: $\left\langle \left(\frac12, -1, \frac12\right), \left(-\frac12, \frac12, 1\right)\right\rangle = -\frac14 - \frac12 + \frac12 = -\frac14 \ne 0$.

**With a non-Euclidean product.** The algorithm is identical: only the scalar products change, and they are computed with $S$. With $S = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ and $v_1 = e_1$, $v_2 = e_2$: $w_1 = e_1$, $g_S(e_2, e_1) = S_{21} = 1$, $g_S(e_1, e_1) = S_{11} = 2$, so

$$w_2 = e_2 - \frac12 e_1 = \left(-\frac12, 1\right).$$

Check: $g_S(e_1, w_2) = 2 \cdot \left(-\frac12\right) + 1 \cdot 1 = 0$. ✓ To normalise: $\|w_1\|_S = \sqrt2$ and $g_S(w_2, w_2) = 2 \cdot \frac14 + 2 \cdot \left(-\frac12\right) \cdot 1 + 1 = \frac12$, so the basis $\left\{\frac{e_1}{\sqrt2},\ \sqrt2\,w_2\right\} = \left\{\left(\frac{\sqrt2}2, 0\right), \left(-\frac{\sqrt2}2, \sqrt2\right)\right\}$ is orthonormal **for $g_S$** (not for the Euclidean product).

Try the calculator: each row is a vector, and the product is the Euclidean one. With the vectors of Example 21.7 it writes the steps $u_2 = v_2 - \frac12 u_1$ and so on (the tool calls $u_i$ the vectors that are $w_i$ here), and at the end the orthonormal basis. Also try writing three dependent vectors: the third one becomes zero and is discarded.

```widget gauss
title: Gram–Schmidt step by step (rows = vectors)
matrice: 1 1 0; 0 1 1; 1 0 1
modo: gram-schmidt
modi: gram-schmidt
```

> [!METHOD] Gram–Schmidt at the exam
> 1. $w_1 = v_1$. Compute and write down $\langle w_1, w_1\rangle$: it will be needed again.
> 2. $w_2 = v_2 - \frac{\langle v_2, w_1\rangle}{\langle w_1, w_1\rangle}\,w_1$. **Check** $\langle w_2, w_1\rangle = 0$ before going on; if there are fractions, rescale $w_2$.
> 3. $w_3 = v_3 - \frac{\langle v_3, w_1\rangle}{\langle w_1, w_1\rangle}\,w_1 - \frac{\langle v_3, w_2\rangle}{\langle w_2, w_2\rangle}\,w_2$; check orthogonality with $w_1$ and with $w_2$.
> 4. If an **orthonormal** basis is needed, divide each vector by its norm only at the end.
> 5. With a $g_S$: every product is ${}^tu\,S\,w$; compute the vectors $Sw_j$ once and reuse them.

## Orthogonal decomposition and projection onto a subspace (pp. 107–108)

With Gram–Schmidt the projection goes from a line to any subspace. From here on $V$ has **finite dimension** and $W \subset V$ is a subspace.

> [!THEOREM] 21.8 · Orthogonal decomposition
> We have
> $$V = W \oplus W^\perp.$$
> In other words, every $v \in V$ can be written in a unique way as
> $$v = w + z, \qquad w \in W, \quad z \in W^\perp.$$
> In particular,
> $$\dim W + \dim W^\perp = \dim V.$$

The handouts' explanation, with the steps added:

1. **An orthonormal basis of $W$.** Start from any basis of $W$, apply Gram–Schmidt and divide by the norms: you get an orthonormal basis $w_1, \dots, w_k$ of $W$ (if $W = \{0\}$ there is nothing to do: $W^\perp = V$).
2. **The candidate.** Set
   $$p_W(v) = \sum_{i=1}^k \langle v, w_i\rangle\,w_i.$$
   It is a combination of the $w_i$, so $p_W(v) \in W$.
3. **The remainder is orthogonal to $W$.** For every $j$, since $\langle w_i, w_j\rangle$ equals 1 for $i = j$ and 0 otherwise,
   $$\begin{aligned} \langle v - p_W(v), w_j\rangle &= \langle v, w_j\rangle - \sum_{i=1}^k \langle v, w_i\rangle\langle w_i, w_j\rangle \\ &= \langle v, w_j\rangle - \langle v, w_j\rangle = 0. \end{aligned}$$
   Being orthogonal to all the generators $w_j$, $v - p_W(v)$ is orthogonal to the whole of $W$: $v - p_W(v) \in W^\perp$.
4. **Existence.** $v = p_W(v) + \big(v - p_W(v)\big)$ with the first piece in $W$ and the second in $W^\perp$: so $V = W + W^\perp$.
5. **Uniqueness.** $W \cap W^\perp = \{0\}$, because a vector in the intersection is orthogonal to itself, so it is zero. The sum is direct (Definition 18.4) and the decomposition is unique.
6. **Dimensions.** Putting together a basis of $W$ and one of $W^\perp$ you get a basis of $V$ (they span by point 4, they are independent because the sum is direct): so $\dim W + \dim W^\perp = \dim V$. $\square$

The vector $p_W(v)$ is the **orthogonal projection** of $v$ onto $W$ and, for an orthonormal basis $w_1, \dots, w_k$ of $W$,

$$p_W(v) = \sum_{i=1}^k \langle v, w_i\rangle\,w_i.$$

> [!REMARK] The same formula with a basis that is only orthogonal
> If $w_1, \dots, w_k$ is an **orthogonal** basis of $W$ (not normalised), substituting $\frac{w_i}{\|w_i\|}$ in the formula you get
> $$p_W(v) = \sum_{i=1}^k \frac{\langle v, w_i\rangle}{\langle w_i, w_i\rangle}\,w_i = \sum_{i=1}^k p_{w_i}(v),$$
> the sum of the projections onto the lines of the $w_i$ (Martelli, Proposition 8.1.28). It is the most convenient formula at the exam: it avoids square roots. **Careful**: it holds only if the basis of $W$ is orthogonal; with an arbitrary basis you first apply Gram–Schmidt.

> [!EXAMPLE] Projecting $v = (1, 2, 3)$ onto the plane $W = \{x + y + z = 0\}$
> **With an orthogonal basis.** Two vectors of $W$ orthogonal to each other: $a = (1, -1, 0)$ and $b = (1, 1, -2)$ (both have coordinates adding up to 0, and $\langle a, b\rangle = 1 - 1 + 0 = 0$). Then
> $$\begin{aligned} p_W(v) &= \frac{\langle v, a\rangle}{\langle a, a\rangle}\,a + \frac{\langle v, b\rangle}{\langle b, b\rangle}\,b \\ &= \frac{-1}{2}(1, -1, 0) + \frac{-3}{6}(1, 1, -2) = (-1, 0, 1). \end{aligned}$$
> The remainder is $v - p_W(v) = (2, 2, 2)$, a multiple of $(1, 1, 1)$: it lies in $W^\perp$. ✓
>
> **With the shortcut.** $W^\perp = \Span((1, 1, 1))$ is a line, and $v = p_W(v) + p_{W^\perp}(v)$. So
> $$p_W(v) = v - p_{(1, 1, 1)}(v) = (1, 2, 3) - \frac63(1, 1, 1) = (-1, 0, 1).$$
> Same result with a single computation. When $W$ is a plane of $\R^3$ it is almost always better to project onto the line $W^\perp$ and subtract.

The projection has a minimum property that explains its geometric name: it is the point of $W$ **closest** to $v$.

> [!PROP] 21.9
> For every $w \in W$ we have
> $$\|v - p_W(v)\| \le \|v - w\|,$$
> with equality if and only if $w = p_W(v)$.

The explanation:

1. write $v - w = \big(v - p_W(v)\big) + \big(p_W(v) - w\big)$;
2. the first piece lies in $W^\perp$ (Theorem 21.8), the second in $W$ (difference of two vectors of $W$): so they are **orthogonal**;
3. for two orthogonal vectors **Pythagoras' theorem** holds, $\|a + b\|^2 = \|a\|^2 + \|b\|^2$ (it is the expansion of the square of lesson L20 with $\langle a, b\rangle = 0$):
   $$\|v - w\|^2 = \|v - p_W(v)\|^2 + \|p_W(v) - w\|^2;$$
4. the second summand is $\ge 0$, so $\|v - w\|^2 \ge \|v - p_W(v)\|^2$; it is an equality only if $\|p_W(v) - w\| = 0$, that is $w = p_W(v)$. $\square$

In the example of the plane: $\|v - p_W(v)\| = \|(2, 2, 2)\| = 2\sqrt3 = \sqrt{12}$ is the **distance** of $v$ from the plane. Any other point of $W$ is further away: $w = 0$ gives $\|v\| = \sqrt{14}$, and indeed $14 = 12 + \|p_W(v)\|^2 = 12 + 2$; $w = (1, -1, 0)$ gives $\|(0, 3, 3)\| = \sqrt{18}$.

> [!METHOD] Projection onto a subspace $W$
> 1. Find a basis of $W$ (if $W$ is given by equations, solve them).
> 2. Make it orthogonal with Gram–Schmidt.
> 3. Add up the projections: $p_W(v) = \sum_i \frac{\langle v, w_i\rangle}{\langle w_i, w_i\rangle}\,w_i$.
> 4. **Check** that $v - p_W(v)$ is orthogonal to the generators of $W$.
> 5. If $W^\perp$ is smaller than $W$ (for example $W$ a plane in $\R^3$), compute $p_{W^\perp}(v)$ and then $p_W(v) = v - p_{W^\perp}(v)$.
> 6. The distance of $v$ from $W$ is $\|v - p_W(v)\|$.

## Least squares (pp. 109–110)

Three experimental points, $(0, 1)$, $(1, 2)$, $(2, 2)$: is there a line $y = a + bt$ that passes through all three? You would need

$$\begin{cases} a + 0b = 1 \\ a + 1b = 2 \\ a + 2b = 2 \end{cases}$$

The first two give $a = 1$ and $b = 1$, but then the third would give $a + 2b = 3 \neq 2$: the system **has no solutions**. In reality this always happens, because measurements have errors. So you look for the line that passes "as close as possible" to the points.

In general: consider a linear system $Ax = b$, with $A \in M(m, n, \R)$ and $b \in \R^m$. If the system has no solutions, we can look for $x$ so that $Ax$ is as close as possible to $b$.

> [!DEF] 21.10 · Least-squares solution
> A **least-squares solution** of $Ax = b$ is a vector $x_0 \in \R^n$ such that
> $$\|Ax_0 - b\| \le \|Ax - b\| \qquad \forall\, x \in \R^n.$$

Piece by piece:

- $Ax - b$ is the vector of the **errors** (or residuals): how much each equation is off with the choice $x$;
- $x_0$ makes the (Euclidean) length of this vector as small as possible;
- minimising $\|Ax - b\|$ is the same as minimising $\|Ax - b\|^2$, that is the **sum of the squares** of the errors: hence the name;
- if the system has solutions, the least-squares solutions are exactly those (zero error).

**The link with projection.** Let

$$W = \Imm L_A = \Span(A^1, \dots, A^n),$$

be the space spanned by the columns $A^1, \dots, A^n$ of $A$ (lesson L14): the vectors $Ax$, as $x$ varies, are **exactly** the vectors of $W$. Looking for $Ax$ as close as possible to $b$ means looking for the point of $W$ closest to $b$, which by Proposition 21.9 is the projection $p_W(b)$. So $x_0$ is a least-squares solution precisely when

$$Ax_0 = p_W(b), \quad \text{that is, when} \quad b - Ax_0 \in W^\perp.$$

(The second form comes from the uniqueness of the decomposition $b = p_W(b) + (b - p_W(b))$ of Theorem 21.8: $Ax_0$ lies in $W$, and if $b - Ax_0$ lies in $W^\perp$ then $Ax_0$ must be $p_W(b)$.)

**How to recognise a vector of $W^\perp$.** For every $y \in \R^m$:

$$y \in W^\perp \iff \langle y, Ax\rangle = 0 \ \ \forall x \iff {}^tA\,y = 0.$$

The first $\iff$ is the definition ($W$ is made of the vectors $Ax$). For the second: $\langle y, Ax\rangle = {}^ty\,A\,x = {}^t({}^tA\,y)\,x = \langle {}^tA\,y, x\rangle$, and a vector of $\R^n$ orthogonal to **all** the $x$ is zero (just take $x = {}^tA\,y$). Applying this to $y = b - Ax_0$: ${}^tA(b - Ax_0) = 0$, that is ${}^tA\,A\,x_0 = {}^tA\,b$.

> [!THEOREM] 21.11 · Normal equations
> A vector $x_0 \in \R^n$ is a least-squares solution of $Ax = b$ if and only if
> $${}^tA\,A\,x_0 = {}^tA\,b.$$
> These are called the **normal equations**.

Three remarks from the handouts, with the reasons:

- **The normal equations always have at least one solution**, because $p_W(b) \in W = \Imm L_A$: there is $x_0$ with $Ax_0 = p_W(b)$.
- **If the columns of $A$ are linearly independent, the solution is unique**: in this case ${}^tAA$ is invertible and
  $$x_0 = ({}^tA\,A)^{-1}\,{}^tA\,b.$$
  The reason for invertibility (the handouts do not write it): if ${}^tAAx = 0$, then $0 = {}^tx\,{}^tAAx = \|Ax\|^2$, so $Ax = 0$, and with independent columns this forces $x = 0$. A square matrix with zero kernel is invertible.
- ${}^tAA$ is a **symmetric** $n \times n$ matrix (${}^t({}^tAA) = {}^tA\,A$), small even when there are many data: with $m = 1000$ points and a line ($n = 2$) you solve a $2 \times 2$ system.

> [!EXAMPLE] 21.12 · The least-squares line
> We want to find the line $y = a + bt$ that best approximates, in the least-squares sense, the points $(0, 1)$, $(1, 2)$, $(2, 2)$. So we look for $a, b$ such that
> $$\begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} a \\ b \end{pmatrix} \approx \begin{pmatrix} 1 \\ 2 \\ 2 \end{pmatrix}.$$
> The normal equations are
> $$\begin{pmatrix} 3 & 3 \\ 3 & 5 \end{pmatrix}\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 5 \\ 6 \end{pmatrix},$$
> from which $a = \frac76$, $b = \frac12$. The line we are looking for is
> $$y = \frac76 + \frac12 t.$$

Watch out for the names: in this example the letter $b$ denotes both the slope of the line and (in the theorem) the data vector $(1, 2, 2)$. The computations, one by one:

1. **The matrix and the data.** Each point $(t, y)$ gives an equation $a + bt = y$: the row of $A$ is $(1, t)$ and the data value is $y$.
2. **${}^tAA$.** The columns of $A$ are $A^1 = (1, 1, 1)$ and $A^2 = (0, 1, 2)$; the entries of ${}^tAA$ are their scalar products: $\langle A^1, A^1\rangle = 3$, $\langle A^1, A^2\rangle = 0 + 1 + 2 = 3$, $\langle A^2, A^2\rangle = 0 + 1 + 4 = 5$.
3. **${}^tA\,b$.** $\langle A^1, b\rangle = 1 + 2 + 2 = 5$ and $\langle A^2, b\rangle = 0 + 2 + 4 = 6$.
4. **The $2 \times 2$ system.** $3a + 3b = 5$ and $3a + 5b = 6$. Subtracting: $2b = 1$, that is $b = \frac12$; then $3a = 5 - \frac32 = \frac72$, that is $a = \frac76$.
5. **Check.** On the line the values are $\frac76$, $\frac76 + \frac12 = \frac53$, $\frac76 + 1 = \frac{13}6$. The errors $b - Ax_0 = \left(1 - \frac76,\ 2 - \frac53,\ 2 - \frac{13}6\right) = \left(-\frac16, \frac13, -\frac16\right)$ are orthogonal to the columns: $-\frac16 + \frac13 - \frac16 = 0$ and $0 + \frac13 - \frac13 = 0$. ✓ The sum of the squares of the errors is $\frac1{36} + \frac4{36} + \frac1{36} = \frac16$: no line does better.

```graph
title: The line $y = \frac76 + \frac12 t$ and the (vertical) errors with respect to the three points
x: -0.5 2.5
y: 0 3
names: $t$ $y$
line: 0 7/6 2 13/6 | accent | thick
point: 0 1 | amber | $(0, 1)$ | sw
point: 1 2 | amber | $(1, 2)$ | n
point: 2 2 | amber | $(2, 2)$ | se
segment: 0 1 0 7/6 | pink | thick
segment: 1 2 1 5/3 | pink | thick
segment: 2 2 2 13/6 | pink | thick
```

> [!NOTE] Link with computer science: linear regression
> As the handouts observe, the previous example is precisely a **linear regression** with one variable. The observed data are collected in a vector $b$, while the matrix $A$ contains the features used to make the prediction. The model produces the vector $Ax$, and the parameters $x$ are chosen by minimising $\|Ax - b\|^2$. With more explanatory variables you simply add more columns to the matrix $A$. Least squares is one of the first examples in which orthogonal projections and linear systems become a method to **learn a model from data**.

> [!METHOD] Least squares step by step
> 1. Write the system as $Ax = b$ (for a line $y = a + bt$: rows $(1, t_i)$, data $y_i$).
> 2. Compute ${}^tA\,A$ (scalar products between the columns) and ${}^tA\,b$ (scalar products between the columns and $b$).
> 3. Solve the square system ${}^tA\,A\,x_0 = {}^tA\,b$.
> 4. Check that the error $b - Ax_0$ is orthogonal to all the columns of $A$.

> [!BEYOND] Where to find it in the book
> Martelli: §7.1.7 "Vettori ortogonali" (pp. 205–206); §7.3 "Sottospazio ortogonale" (pp. 213–218), with Theorem 7.3.12 on the dimensions; chapter 8, §8.1.5 "Proiezione ortogonale" (pp. 244–245), §8.1.6 "Coefficienti di Fourier" (pp. 245–247), §8.1.7 "Ortogonalizzazione di Gram–Schmidt" (pp. 247–249), §8.1.8 "Riscalamento" (pp. 249–250), §8.1.9 "Ortogonalità" (p. 250) and §8.1.10 "Proiezioni su sottospazi" (pp. 251–253). Least squares is not covered in the book: for that section the handouts are the reference.

## Towards the exam

The written test of Linear Algebra and Geometry has 10 multiple-choice questions (5 answers, one right) and 2 problems worth 11 points, marked only with at least 6 points in the quiz; it lasts 2 hours, with no calculator, and only 4 handwritten pages of notes. 2026/27 exam sessions: 22/01 and 05/02/2027, at 14:00. The details are in lesson L01.

**What of this lesson appears in the 2023–2026 exam sessions**

This lesson is the basis of **problem 12** of many exam sessions: in 7 of the 15 exam sessions 2023–2026 problem 12 is about scalar products, Gram–Schmidt and projections, and in two others it also asks for a projection onto a plane. The typical scheme:

1. **orthonormal (or orthogonal) basis of a plane** $V = \Span(v_1, v_2) \subset \R^3$ with Gram–Schmidt: exam sessions of 10/06/2024, 03/06/2026 and 07/09/2026 (Euclidean product); of 16/01/2025 and 03/07/2026 (with a $g_S$);
2. **orthogonal projection** of a vector onto that plane: the same exam sessions except that of 03/07/2026 (which asks for the orthogonal complement instead of the projection), plus 24/01/2024 (projection onto $\pi_3 = \Span(e_1, e_2 + e_3)$), 05/02/2026 (with $g_S$) and 15/01/2026 (part 4);
3. **orthogonal complement**: exam sessions of 07/02/2025 (of $\Span(x, x^2)$ in $\R_2[x]$) and 03/07/2026 (of a plane with respect to $g_S$);
4. the next part (intersection of a line with the plane and angle of incidence) is material of lessons L23–L24.

In the quiz: the exam of 05/02/2026 (question 2) uses the fact that $W^\perp$ is always a subspace. In the 2023–2026 exam sessions there are no questions on least squares, which the 2026 handouts cover in section 21.E: they must be studied anyway.

**Three real exam questions, solved**

> [!EXAMPLE] Exam of 03/06/2026, problem 12, parts (1) and (2)
> Let $v_1 = (1, 1, 0)$ and $v_2 = (0, 1, 1)$. (1) Compute an orthonormal basis of $V = \Span(v_1, v_2)$. (2) Determine the orthogonal projection of $w = (2, 1, 2)$ onto $V$.
>
> **Solution.** (1) Gram–Schmidt: $w_1 = v_1$; $\langle v_2, w_1\rangle = 1$, $\langle w_1, w_1\rangle = 2$, so $w_2 = (0, 1, 1) - \frac12(1, 1, 0) = \left(-\frac12, \frac12, 1\right)$, which I rescale to $w_2' = (-1, 1, 2)$. Check: $\langle w_1, w_2'\rangle = -1 + 1 + 0 = 0$. Normalising: $\left\{\frac{1}{\sqrt2}(1, 1, 0),\ \frac{1}{\sqrt6}(-1, 1, 2)\right\}$.
>
> (2) With the orthogonal basis $w_1, w_2'$:
> $$\begin{aligned} p_V(w) &= \frac{\langle w, w_1\rangle}{2}\,w_1 + \frac{\langle w, w_2'\rangle}{6}\,w_2' \\ &= \frac32(1, 1, 0) + \frac36(-1, 1, 2) = (1, 2, 1). \end{aligned}$$
> Check: $w - p_V(w) = (1, -1, 1)$ is orthogonal to $v_1$ ($1 - 1 = 0$) and to $v_2$ ($-1 + 1 = 0$). ✓

> [!EXAMPLE] Exam of 16/01/2025, problem 12, parts (2) and (3)
> Let $g_S$ be the scalar product of $\R^3$ with $S = \operatorname{diag}(1, 2, 3)$, and let $v_1 = (1, 1, 0)$, $v_2 = (1, 0, 1)$, $v_3 = (0, 1, 1)$. (2) Apply Gram–Schmidt to find an orthogonal basis of $\Span(v_1, v_2)$ with respect to $g_S$. (3) Compute the orthogonal projection of $v_3$ onto $\Span(v_1, v_2)$ with respect to $g_S$.
>
> **Solution.** With $S$ diagonal, $g_S(x, y) = x_1y_1 + 2x_2y_2 + 3x_3y_3$.
> (2) $w_1 = v_1$, $g_S(w_1, w_1) = 1 + 2 = 3$, $g_S(v_2, w_1) = 1 + 0 + 0 = 1$, so $w_2 = (1, 0, 1) - \frac13(1, 1, 0) = \left(\frac23, -\frac13, 1\right)$; I rescale: $w_2' = (2, -1, 3)$. Check: $g_S(w_1, w_2') = 2 - 2 + 0 = 0$. ✓
>
> (3) $g_S(v_3, w_1) = 0 + 2 + 0 = 2$; $g_S(v_3, w_2') = 0 - 2 + 9 = 7$; $g_S(w_2', w_2') = 4 + 2 + 27 = 33$. So
> $$\begin{aligned} p(v_3) &= \frac23(1, 1, 0) + \frac{7}{33}(2, -1, 3) \\ &= \left(\frac{22 + 14}{33}, \frac{22 - 7}{33}, \frac{21}{33}\right) = \left(\frac{12}{11}, \frac{5}{11}, \frac{7}{11}\right). \end{aligned}$$
> Check: $v_3 - p(v_3) = \left(-\frac{12}{11}, \frac{6}{11}, \frac{4}{11}\right)$ and $g_S$ with $v_1$ gives $-\frac{12}{11} + \frac{12}{11} = 0$, with $v_2$ gives $-\frac{12}{11} + \frac{12}{11} = 0$. ✓ The mistake not to make: using the Euclidean product in one of the computations.

> [!EXAMPLE] Exam of 07/02/2025, problem 12, part (3)
> With the product $g$ on $\R_2[x]$ of lesson L19, with matrix $\begin{pmatrix} 6 & 1 & 3 \\ 1 & 2 & 0 \\ 3 & 0 & 2 \end{pmatrix}$ in the basis $\{1, x, x^2\}$, find a basis of the orthogonal complement of $\Span(x, x^2)$.
>
> **Solution.** For $p = a + bx + cx^2$: $g(p, x)$ is the second coordinate of $S(a, b, c)$, that is $a + 2b$; $g(p, x^2)$ is the third, that is $3a + 2c$. The system $a + 2b = 0$, $3a + 2c = 0$ gives $b = -\frac a2$, $c = -\frac{3a}2$; with $a = 2$: $p = 2 - x - 3x^2$. So the complement is $\Span(2 - x - 3x^2)$, of dimension $3 - 2 = 1$ as predicted by Theorem 21.8. Check: $S(2, -1, -3) = (12 - 1 - 9,\ 2 - 2 + 0,\ 6 + 0 - 6) = (2, 0, 0)$, with second and third coordinates zero. ✓ (In the previous parts the problem asked for the matrix, lesson L19, and the angle between $x$ and $x^2$, lesson L20: $g(x, x^2) = 0$, so it is $\frac\pi2$.)

**Mistakes to avoid**

- Projecting onto a **non-orthogonal** basis of the plane by adding the projections onto the single vectors: the result is wrong. Gram–Schmidt first.
- In Gram–Schmidt, projecting onto the $v$ instead of onto the $w$ (see the pitfall).
- Forgetting to **check** orthogonality: it is a computation of a few seconds and it saves many points.
- With a $g_S$, computing a product with the Euclidean product.
- Confusing $p_W(v)$ (which lies in $W$) with $v - p_W(v)$ (which lies in $W^\perp$).

> [!EXAM] On the 4-page sheet
> - $p_w(v) = \frac{\langle v, w\rangle}{\langle w, w\rangle}\,w$; $v - p_w(v) \perp w$.
> - Orthogonal basis: $v = \sum \frac{\langle v, v_i\rangle}{\langle v_i, v_i\rangle}v_i$; orthonormal: $v = \sum \langle v, v_i\rangle v_i$.
> - Gram–Schmidt for three vectors (the three rows of the formula), with the advice to rescale.
> - $V = W \oplus W^\perp$, $\dim W^\perp = \dim V - \dim W$; $p_W(v) = \sum_i \frac{\langle v, w_i\rangle}{\langle w_i, w_i\rangle}w_i$ with **orthogonal** $w_i$; $p_W(v) = v - p_{W^\perp}(v)$; distance $= \|v - p_W(v)\|$.
> - Least squares: ${}^tAAx_0 = {}^tAb$; error orthogonal to the columns.

## Quiz

```quiz
Q: With respect to the Euclidean scalar product, the orthogonal complement of $W = \Span({}^t(1, 2, -1))$ in $\R^3$ is:
+ the plane $\{x + 2y - z = 0\}$
- the line $\Span({}^t(1, 2, -1))$
- the set $\{x + 2y - z = 1\}$
- the line $\Span({}^t(-2, 1, 0))$
- $\{0\}$
= $v = (x, y, z)$ lies in $W^\perp$ if and only if it is orthogonal to the generator: $x + 2y - z = 0$. It is a plane (dimension $3 - 1 = 2$). The line $\Span((-2, 1, 0))$ is contained in the plane but it is not the whole of $W^\perp$; the set with $= 1$ does not contain zero, so it is not a subspace. Similar to the part on the orthogonal complement of the problems of 07/02/2025 and 03/07/2026.

Q: What is the orthogonal projection (Euclidean product) of $v = {}^t(3, 1)$ onto the line $\Span({}^t(1, 1))$?
+ ${}^t(2, 2)$
- ${}^t(4, 4)$
- ${}^t(1, -1)$
- ${}^t(2\sqrt2, 2\sqrt2)$
- ${}^t(1, 1)$
= $\frac{\langle v, w\rangle}{\langle w, w\rangle}w = \frac42(1, 1) = (2, 2)$. $(1, -1)$ is the remainder $v - p_w(v)$; $(2\sqrt2, 2\sqrt2)$ comes from dividing by $\|w\|$ instead of by $\|w\|^2$; $(4, 4)$ forgets to divide. Similar to part (2) of problems 12 of 03/06/2026 and 07/09/2026.

Q: The basis $\{{}^t(1, 1), {}^t(1, -1)\}$ of $\R^2$ is orthogonal. What are the coordinates of $v = {}^t(5, 1)$ in this basis?
+ $(3, 2)$
- $(6, 4)$
- $(5, 1)$
- $(2, 3)$
- $(3, -2)$
= Fourier coefficients: $\frac{5 + 1}{2} = 3$ and $\frac{5 - 1}{2} = 2$. Check: $3(1, 1) + 2(1, -1) = (5, 1)$. $(6, 4)$ forgets to divide by $\langle v_i, v_i\rangle = 2$.

Q: Applying Gram–Schmidt (Euclidean product) to $v_1 = {}^t(1, 1, 0)$ and $v_2 = {}^t(1, 0, 1)$, the vector $w_2$ is:
+ ${}^t\left(\frac12, -\frac12, 1\right)$
- ${}^t(0, -1, 1)$
- ${}^t(1, 0, 1)$
- ${}^t\left(\frac12, \frac12, 1\right)$
- ${}^t\left(-\frac12, \frac12, 1\right)$
= $w_2 = v_2 - \frac{\langle v_2, v_1\rangle}{\langle v_1, v_1\rangle}v_1 = (1, 0, 1) - \frac12(1, 1, 0) = \left(\frac12, -\frac12, 1\right)$. $(0, -1, 1)$ takes away all of $v_1$ instead of half; $\left(-\frac12, \frac12, 1\right)$ is orthogonal to $v_1$ but does not lie in $\Span(v_1, v_2)$. Similar to part (1) of problems 12 of 07/09/2026 and 03/06/2026.

Q: Let $W$ be a subspace of dimension 2 of $\R^5$, with the Euclidean scalar product. What is the dimension of $W^\perp$?
N: 3
= By Theorem 21.8, $\dim W + \dim W^\perp = \dim \R^5 = 5$, so $\dim W^\perp = 3$.

Q: Let $V$ have finite dimension with a positive definite scalar product and let $W \subset V$ be a subspace. Which statement is always true?
+ $V = W \oplus W^\perp$
- $W \cap W^\perp = W$
- $W^\perp$ is the set of the vectors of $V$ that do not lie in $W$
- $\dim W^\perp = \dim W$
- $W^\perp$ is a subspace only if $W$ is a line
= It is Theorem 21.8. $W \cap W^\perp = \{0\}$ (not $W$, unless $W = \{0\}$); the set complement $V \setminus W$ does not contain zero and is not a subspace; the dimensions add up to $\dim V$, they are not equal in general; $W^\perp$ is always a subspace (Proposition 21.4).

Q: The vector $x_0$ is a least-squares solution of the system $Ax = b$ if and only if:
+ ${}^tA\,A\,x_0 = {}^tA\,b$
- $Ax_0 = b$
- ${}^tA\,x_0 = b$
- $A\,{}^tA\,x_0 = b$
- $x_0 = A^{-1}b$
= They are the normal equations (Theorem 21.11). $Ax_0 = b$ usually has no solutions (that is why least squares is used); $A$ is generally not square, so $A^{-1}$ makes no sense; the other two do not even have the right sizes in general.

Q: Which of the following sets is **not** a subspace of $\R_2[x]$ (with a fixed positive definite scalar product)?
+ $\{x^2 + tx \mid t \in \R\}$
- $\R_1[x]^\perp$
- $\Span(1 + x, x^2)$
- $\{p(x) \in \R_2[x] \mid p(1) = p(2)\}$
- $\{p(x) \in \R_2[x] \mid p(0) = 0\}$
= $\{x^2 + tx\}$ does not contain the zero polynomial (the coefficient of $x^2$ is always 1). The orthogonal complement is always a subspace (Proposition 21.4), and so is a span, and the last two are defined by homogeneous linear equations in the coefficients. Similar to the exam of 05/02/2026, question 2.

Q: With respect to the Euclidean scalar product, what is the distance of the vector $v = {}^t(3, 0, 0)$ from the plane $W = \{x + 2y + 2z = 0\}$?
N: 1
= $W^\perp = \Span(n)$ with $n = (1, 2, 2)$, $\|n\| = 3$. The distance is $\|v - p_W(v)\| = \|p_n(v)\| = \frac{|\langle v, n\rangle|}{\|n\|} = \frac{3}{3} = 1$. An idea similar to the point–plane distance of the exam of 16/01/2025 (question 4), which however concerns an affine plane (lesson L24).

Q: If $\{v_1, \dots, v_n\}$ is an **orthonormal** basis of $V$, the $i$-th coordinate of a vector $v$ in this basis is:
+ $\langle v, v_i\rangle$
- $\|v\|$
- $\langle v_i, v_i\rangle$
- $\langle v, v\rangle$
- $\langle v, v_1\rangle + \dots + \langle v, v_n\rangle$
= By Proposition 21.6 the coordinate is $\frac{\langle v, v_i\rangle}{\langle v_i, v_i\rangle}$, and in an orthonormal basis $\langle v_i, v_i\rangle = 1$. The other answers cannot be coordinates: $\|v\|$, $\langle v, v\rangle$ and the sum do not depend on $i$, and $\langle v_i, v_i\rangle$ always equals 1.
```

## Exercises

::: exercise intermediate Exercise 21.13 of the handouts
Find the least-squares solution of the system
$$\begin{cases} x = 1, \\ y = 1, \\ x + y = 3. \end{cases}$$
Write the system in the form $Ax = b$, solve the normal equations and check that the error vector $b - Ax_0$ is orthogonal to the columns of $A$.
::: solution
**The system has no solutions.** The first two equations give $x = y = 1$, but then $x + y = 2 \neq 3$.

**Form $Ax = b$.** One row per equation, one column per unknown:
$$A = \begin{pmatrix} 1 & 0 \\ 0 & 1 \\ 1 & 1 \end{pmatrix}, \qquad \begin{pmatrix} x \\ y \end{pmatrix}, \qquad b = \begin{pmatrix} 1 \\ 1 \\ 3 \end{pmatrix}.$$

**Normal equations.** Columns $A^1 = (1, 0, 1)$ and $A^2 = (0, 1, 1)$:
$${}^tA\,A = \begin{pmatrix} \langle A^1, A^1\rangle & \langle A^1, A^2\rangle \\ \langle A^2, A^1\rangle & \langle A^2, A^2\rangle \end{pmatrix} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix},$$
$${}^tA\,b = \begin{pmatrix} 1 + 0 + 3 \\ 0 + 1 + 3 \end{pmatrix} = \begin{pmatrix} 4 \\ 4 \end{pmatrix}.$$
The system is $2x + y = 4$, $x + 2y = 4$. Subtracting: $x - y = 0$, so $x = y$ and $3x = 4$:
$$x_0 = \begin{pmatrix} \frac43 \\ \frac43 \end{pmatrix}.$$
The columns of $A$ are independent, so this is the only least-squares solution.

**Error vector.** $Ax_0 = \left(\frac43, \frac43, \frac83\right)$ and
$$b - Ax_0 = \left(1 - \frac43,\ 1 - \frac43,\ 3 - \frac83\right) = \left(-\frac13, -\frac13, \frac13\right).$$
**Check.** With $A^1$: $-\frac13 + 0 + \frac13 = 0$. With $A^2$: $0 - \frac13 + \frac13 = 0$. ✓ The error is orthogonal to the columns, as Theorem 21.11 says. The sum of the squares of the errors is $\frac19 + \frac19 + \frac19 = \frac13$.
:::

::: exercise basic Orthogonal complements
With the Euclidean product, find a basis of $W^\perp$ for: (a) $W = \Span((3, -1)) \subset \R^2$; (b) $W = \Span((1, 0, 2)) \subset \R^3$; (c) $W = \Span((1, 1, 1), (1, 0, -1)) \subset \R^3$.
::: solution
(a) I swap the coordinates and change one sign: $W^\perp = \Span((1, 3))$. Check: $3 - 3 = 0$.

(b) Equation $x + 2z = 0$, that is $x = -2z$ with $y, z$ free. Basis: $(0, 1, 0)$ (with $y = 1$, $z = 0$) and $(-2, 0, 1)$ (with $y = 0$, $z = 1$). $\dim W^\perp = 2$.

(c) Two equations: $x + y + z = 0$ and $x - z = 0$. From the second $x = z$; from the first $y = -2z$. $W^\perp = \Span((1, -2, 1))$. Check: $1 - 2 + 1 = 0$ and $1 + 0 - 1 = 0$. ✓
:::

::: exercise basic Projections onto a line
(a) Project $v = (4, 2)$ onto the line of $w = (1, 1)$ and write $v$ as the sum of a vector of the line and one orthogonal to it. (b) Project $v = (1, 0, 2)$ onto the line of $w = (2, 1, 2)$.
::: solution
(a) $\frac{\langle v, w\rangle}{\langle w, w\rangle} = \frac{6}{2} = 3$, so $p_w(v) = (3, 3)$. The remainder is $(4, 2) - (3, 3) = (1, -1)$, orthogonal to $(1, 1)$. So $(4, 2) = (3, 3) + (1, -1)$.

(b) $\langle v, w\rangle = 2 + 0 + 4 = 6$, $\langle w, w\rangle = 4 + 1 + 4 = 9$: $p_w(v) = \frac69(2, 1, 2) = \left(\frac43, \frac23, \frac43\right)$. Check: the remainder $\left(-\frac13, -\frac23, \frac23\right)$ gives with $w$: $-\frac23 - \frac23 + \frac43 = 0$. ✓
:::

::: exercise basic Coordinates in an orthogonal basis of $\R^3$
Check that $v_1 = (1, 1, 1)$, $v_2 = (1, -1, 0)$, $v_3 = (1, 1, -2)$ form an orthogonal basis and find the coordinates of $v = (2, 0, 4)$ without solving systems.
::: solution
**Orthogonality.** $\langle v_1, v_2\rangle = 1 - 1 + 0 = 0$; $\langle v_1, v_3\rangle = 1 + 1 - 2 = 0$; $\langle v_2, v_3\rangle = 1 - 1 + 0 = 0$. Three non-zero orthogonal vectors in $\R^3$ are independent, so they are a basis.

**Coordinates.**
- $\frac{\langle v, v_1\rangle}{\langle v_1, v_1\rangle} = \frac{2 + 0 + 4}{3} = 2$;
- $\frac{\langle v, v_2\rangle}{\langle v_2, v_2\rangle} = \frac{2 - 0 + 0}{2} = 1$;
- $\frac{\langle v, v_3\rangle}{\langle v_3, v_3\rangle} = \frac{2 + 0 - 8}{6} = -1$.

Check: $2(1, 1, 1) + (1, -1, 0) - (1, 1, -2) = (2 + 1 - 1,\ 2 - 1 - 1,\ 2 + 0 + 2) = (2, 0, 4)$. ✓
:::

::: exercise intermediate Gram–Schmidt and coordinates
(a) Show that $v_1 = (1, -1, 0)$, $v_2 = (2, 0, 1)$, $v_3 = (0, -1, 1)$ form a basis of $\R^3$ and orthogonalise it with Gram–Schmidt. (b) Compute the coordinates of $2e_1 - 5e_2 + e_3$ in the orthogonal basis found.
::: solution
(a) **Basis.** $\det\begin{pmatrix} 1 & 2 & 0 \\ -1 & 0 & -1 \\ 0 & 1 & 1 \end{pmatrix} = 1 \cdot (0 + 1) - 2 \cdot (-1 - 0) + 0 = 1 + 2 = 3 \neq 0$ (expansion along the first row; the columns are the three vectors).

**Gram–Schmidt.**
- $w_1 = (1, -1, 0)$, $\langle w_1, w_1\rangle = 2$.
- $\langle v_2, w_1\rangle = 2$, so $w_2 = (2, 0, 1) - \frac22(1, -1, 0) = (1, 1, 1)$, with $\langle w_2, w_2\rangle = 3$. Check: $\langle w_1, w_2\rangle = 1 - 1 + 0 = 0$.
- $\langle v_3, w_1\rangle = 0 + 1 + 0 = 1$ and $\langle v_3, w_2\rangle = 0 - 1 + 1 = 0$, so
  $$w_3 = (0, -1, 1) - \frac12(1, -1, 0) - 0 \cdot w_2 = \left(-\frac12, -\frac12, 1\right),$$
  which I rescale to $w_3' = (-1, -1, 2)$, with $\langle w_3', w_3'\rangle = 6$. Check: $\langle w_3', w_1\rangle = -1 + 1 = 0$, $\langle w_3', w_2\rangle = -1 - 1 + 2 = 0$. ✓

(b) $v = (2, -5, 1)$. Fourier coefficients:
$$\begin{aligned} \frac{\langle v, w_1\rangle}{2} &= \frac{2 + 5}{2} = \frac72, \\ \frac{\langle v, w_2\rangle}{3} &= \frac{2 - 5 + 1}{3} = -\frac23, \\ \frac{\langle v, w_3'\rangle}{6} &= \frac{-2 + 5 + 2}{6} = \frac56. \end{aligned}$$
Check of the first coordinate: $\frac72 - \frac23 - \frac56 = \frac{21 - 4 - 5}{6} = 2$. ✓ (The other two work out in the same way: $-\frac72 - \frac23 - \frac56 = -5$ and $0 - \frac23 + \frac53 = 1$.)
:::

::: exercise intermediate Projection onto a plane and distance
Let $W = \{x - y + 2z = 0\} \subset \R^3$ (Euclidean product) and $v = (1, 2, 3)$. Compute $p_W(v)$ and the distance of $v$ from $W$.
::: solution
I use the shortcut: $W^\perp = \Span(n)$ with $n = (1, -1, 2)$, $\langle n, n\rangle = 6$.

1. $\langle v, n\rangle = 1 - 2 + 6 = 5$, so $p_{W^\perp}(v) = \frac56(1, -1, 2)$.
2. $p_W(v) = v - p_{W^\perp}(v) = \left(1 - \frac56,\ 2 + \frac56,\ 3 - \frac{10}6\right) = \left(\frac16, \frac{17}6, \frac43\right)$.
3. I check that it lies in $W$: $\frac16 - \frac{17}6 + \frac83 = \frac{1 - 17 + 16}{6} = 0$. ✓
4. Distance: $\|v - p_W(v)\| = \|p_{W^\perp}(v)\| = \frac56\sqrt6 = \frac{5}{\sqrt6} = \frac{5\sqrt6}{6}$.
:::

::: exercise intermediate Gram–Schmidt with a non-Euclidean product
Let $S = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 3 \end{pmatrix}$ (positive definite). Apply Gram–Schmidt to the canonical basis $e_1, e_2, e_3$ with respect to $g_S$ and find an orthonormal basis for $g_S$.
::: solution
Remember: $g_S(e_i, e_j) = S_{ij}$ and $g_S(e_i, y) = (Sy)_i$.

- $w_1 = e_1$, $g_S(w_1, w_1) = S_{11} = 1$.
- $g_S(e_2, w_1) = S_{21} = 1$, so $w_2 = e_2 - 1 \cdot e_1 = (-1, 1, 0)$. I compute $Sw_2 = (-1 + 1,\ -1 + 2,\ 0 + 1) = (0, 1, 1)$, so $g_S(w_2, w_2) = {}^tw_2\,(Sw_2) = 0 + 1 + 0 = 1$. Check: $g_S(w_1, w_2) = (Sw_2)_1 = 0$. ✓
- $g_S(e_3, w_1) = S_{31} = 0$ and $g_S(e_3, w_2) = (Sw_2)_3 = 1$, so $w_3 = e_3 - 0 \cdot w_1 - \frac11 w_2 = (0, 0, 1) - (-1, 1, 0) = (1, -1, 1)$.
- $Sw_3 = (1 - 1,\ 1 - 2 + 1,\ -1 + 3) = (0, 0, 2)$: checks $g_S(w_1, w_3) = 0$, $g_S(w_2, w_3) = {}^tw_2\,(Sw_3) = 0$ ✓, and $g_S(w_3, w_3) = {}^tw_3\,(0, 0, 2) = 2$.

Orthonormal basis for $g_S$: $\left\{(1, 0, 0),\ (-1, 1, 0),\ \frac{1}{\sqrt2}(1, -1, 1)\right\}$. Note: for the **Euclidean** product these vectors are not even orthogonal ($\langle e_1, w_2\rangle = -1$).
:::

::: exercise hard A line through four points
Find the least-squares line $y = a + bt$ for the points $(0, 0)$, $(1, 1)$, $(2, 1)$, $(3, 3)$, and compute the errors.
::: solution
$A$ has rows $(1, t_i)$ and the data are $b = (0, 1, 1, 3)$:
$$A = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \\ 1 & 3 \end{pmatrix}.$$
The entries of ${}^tA\,A$ and of ${}^tA\,b$ are scalar products between the columns $A^1 = (1, 1, 1, 1)$, $A^2 = (0, 1, 2, 3)$ and the vector $b$:
$${}^tA\,A = \begin{pmatrix} 4 & 0 + 1 + 2 + 3 \\ 0 + 1 + 2 + 3 & 0 + 1 + 4 + 9 \end{pmatrix} = \begin{pmatrix} 4 & 6 \\ 6 & 14 \end{pmatrix},$$
$${}^tA\,b = \begin{pmatrix} 0 + 1 + 1 + 3 \\ 0 + 1 + 2 + 9 \end{pmatrix} = \begin{pmatrix} 5 \\ 12 \end{pmatrix}.$$
System: $4a + 6b = 5$ and $6a + 14b = 12$. I multiply the first by 3 and the second by 2: $12a + 18b = 15$ and $12a + 28b = 24$; subtracting, $10b = 9$, that is $b = \frac9{10}$; then $4a = 5 - \frac{54}{10} = -\frac4{10}$, that is $a = -\frac1{10}$.

Line: $y = -\frac1{10} + \frac9{10}t$. Values on the line: $-\frac1{10}, \frac8{10}, \frac{17}{10}, \frac{26}{10}$. Errors $b - Ax_0 = \left(\frac1{10}, \frac2{10}, -\frac7{10}, \frac4{10}\right)$. Check: sum $\frac{1 + 2 - 7 + 4}{10} = 0$ (orthogonal to the first column) and $\frac{0 + 2 - 14 + 12}{10} = 0$ (orthogonal to the second). ✓
:::

::: exercise hard Orthogonality and dimensions
(a) Prove that non-zero pairwise orthogonal vectors are linearly independent. (b) Deduce that if $w \ne 0$ in $V$ of dimension $n$, then $\dim \Span(w)^\perp = n - 1$, without using Theorem 21.8. Hint: look at the linear map $f(v) = \langle v, w\rangle$.
::: solution
(a) From $\lambda_1v_1 + \dots + \lambda_kv_k = 0$, taking the scalar product with $v_i$ only $\lambda_i\langle v_i, v_i\rangle = 0$ is left (the other terms are zero by orthogonality). Since $v_i \ne 0$, $\langle v_i, v_i\rangle > 0$, so $\lambda_i = 0$ for every $i$.

(b) $f : V \to \R$, $f(v) = \langle v, w\rangle$, is linear (linearity of the product in the first slot) and its kernel is exactly $\Span(w)^\perp$ (orthogonality to the generator is enough). The image is not $\{0\}$ because $f(w) = \|w\|^2 > 0$, so it is the whole of $\R$ and has dimension 1. By the rank–nullity theorem (Theorem 14.12): $\dim \Ker f = n - 1$.
:::

::: exercise hard A complement among polynomials
On $\R_2[x]$ let $\langle p, q\rangle = p(-1)q(-1) + p(0)q(0) + p(1)q(1)$. Find $\R_1[x]^\perp$ and check the result with the values.
::: solution
The matrix in the basis $\{1, x, x^2\}$ is $\begin{pmatrix} 3 & 0 & 2 \\ 0 & 2 & 0 \\ 2 & 0 & 2 \end{pmatrix}$ (lesson L19, exercise 6). For $p = a + bx + cx^2$, orthogonal to $1$ and to $x$:
$$\langle p, 1\rangle = 3a + 2c = 0, \qquad \langle p, x\rangle = 2b = 0.$$
So $b = 0$ and $a = -\frac{2c}3$; with $c = 3$: $p = 3x^2 - 2$. $\R_1[x]^\perp = \Span(3x^2 - 2)$, of dimension $3 - 2 = 1$.

Check: $3x^2 - 2$ takes the values $1, -2, 1$ at $-1, 0, 1$. Then $\langle p, 1\rangle = 1 - 2 + 1 = 0$ and $\langle p, x\rangle = -1 + 0 + 1 = 0$. ✓
:::

::: exercise exam Orthonormal basis of a plane, projection and distance
Let $v_1 = (1, 0, 1)$ and $v_2 = (2, 1, 0)$ in $\R^3$ with the Euclidean product, and $V = \Span(v_1, v_2)$. (1) Compute an orthonormal basis of $V$. (2) Compute the orthogonal projection of $w = (2, 3, 2)$ onto $V$. (3) Compute the distance of $w$ from $V$ and a Cartesian equation of $V$.
::: solution
(1) $w_1 = v_1$, $\langle w_1, w_1\rangle = 2$; $\langle v_2, w_1\rangle = 2$, so $w_2 = (2, 1, 0) - (1, 0, 1) = (1, 1, -1)$, with $\langle w_2, w_2\rangle = 3$. Check: $\langle w_1, w_2\rangle = 1 + 0 - 1 = 0$. Orthonormal basis: $\left\{\frac{1}{\sqrt2}(1, 0, 1),\ \frac{1}{\sqrt3}(1, 1, -1)\right\}$.

(2) $\langle w, w_1\rangle = 2 + 0 + 2 = 4$ and $\langle w, w_2\rangle = 2 + 3 - 2 = 3$:
$$\begin{aligned} p_V(w) &= \frac42(1, 0, 1) + \frac33(1, 1, -1) \\ &= (2, 0, 2) + (1, 1, -1) = (3, 1, 1). \end{aligned}$$

(3) $w - p_V(w) = (-1, 2, 1)$. Check: orthogonal to $v_1$ ($-1 + 0 + 1 = 0$) and to $v_2$ ($-2 + 2 + 0 = 0$). ✓ The distance is $\|(-1, 2, 1)\| = \sqrt6$. Since $(-1, 2, 1)$ spans $V^\perp$, an equation of $V$ is $-x + 2y + z = 0$ (check: $v_1$ gives $-1 + 0 + 1 = 0$, $v_2$ gives $-2 + 2 + 0 = 0$).
:::

::: exercise exam Orthonormalisation, complement and projection with $g_S$
On $\R^3$ let $g_S$ with $S = \begin{pmatrix} 2 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}$ (positive definite), and let $u = (1, 1, 0)$, $v = (0, 1, 1)$, $W = \Span(u, v)$. (1) Find an orthonormal basis of $W$ with respect to $g_S$. (2) Find a basis of the orthogonal complement of $W$ with respect to $g_S$. (3) Compute the $g_S$-orthogonal projection of $e_1$ onto $W$.
::: solution
First the vectors $Su = (2, 1, 1)$ and $Sv = (1, 1, 1)$. Then $g_S(u, u) = {}^tu\,(Su) = 3$, $g_S(u, v) = {}^tu\,(Sv) = 2$, $g_S(v, v) = {}^tv\,(Sv) = 2$.

(1) $w_1 = u$; $w_2 = v - \frac23 u = \left(-\frac23, \frac13, 1\right)$, rescaled $w_2' = (-2, 1, 3)$. Then $Sw_2' = (-4 + 3,\ 1,\ -2 + 3) = (-1, 1, 1)$: check $g_S(u, w_2') = {}^tu\,(Sw_2') = -1 + 1 + 0 = 0$ ✓, and $g_S(w_2', w_2') = 2 + 1 + 3 = 6$. Orthonormal basis: $\left\{\frac{1}{\sqrt3}(1, 1, 0),\ \frac{1}{\sqrt6}(-2, 1, 3)\right\}$.

(2) $x \in W^\perp$ if $g_S(u, x) = {}^t(Su)\,x = 0$ and $g_S(v, x) = {}^t(Sv)\,x = 0$:
$$2x_1 + x_2 + x_3 = 0, \qquad x_1 + x_2 + x_3 = 0.$$
Subtracting, $x_1 = 0$, then $x_3 = -x_2$: $W^\perp = \Span((0, 1, -1))$, of dimension $3 - 2 = 1$. ✓

(3) $g_S(e_1, u) = (Su)_1 = 2$ and $g_S(e_1, w_2') = (Sw_2')_1 = -1$, so
$$\begin{aligned} p_W(e_1) &= \frac23(1, 1, 0) - \frac16(-2, 1, 3) \\ &= \left(\frac23 + \frac13,\ \frac23 - \frac16,\ -\frac12\right) = \left(1, \frac12, -\frac12\right). \end{aligned}$$
Check: $e_1 - p_W(e_1) = \left(0, -\frac12, \frac12\right) = -\frac12(0, 1, -1)$ lies in $W^\perp$. ✓
:::

## Review questions

::: question When are two vectors orthogonal? Is the zero vector orthogonal to anything?
When $\langle v, w\rangle = 0$; if they are non-zero it means that they form a right angle. The zero vector is orthogonal to everything, because $\langle 0, w\rangle = 0$.
:::

::: question Which vectors of $\R^2$ are orthogonal to $(a, b) \ne 0$?
Those with $ax + by = 0$: the line $\Span((-b, a))$. You swap the coordinates and change one sign.
:::

::: question What is $W^\perp$ and why is it a subspace?
The set of the vectors orthogonal to all the vectors of $W$. It contains zero, and it is closed under sum and multiplication by a scalar because the scalar product is linear in the first slot.
:::

::: question How do you compute $W^\perp$ in practice?
You impose orthogonality only to the generators of $W$: you get a homogeneous linear system, with one equation per generator. With a $g_S$ the row of coefficients for the generator $w_i$ is ${}^t(Sw_i)$.
:::

::: question What is the formula for the projection of $v$ onto the line of $w$? Where does it come from?
$p_w(v) = \frac{\langle v, w\rangle}{\langle w, w\rangle}w$. You look for $kw$ with $v - kw$ orthogonal to $w$: $\langle v, w\rangle - k\langle w, w\rangle = 0$.
:::

::: question What is the Fourier coefficient and what is it for?
It is the number $\frac{\langle v, w\rangle}{\langle w, w\rangle}$. In an orthogonal basis $\{v_i\}$ the Fourier coefficients of $v$ with respect to the $v_i$ are exactly the coordinates of $v$, without solving systems.
:::

::: question How does the Gram–Schmidt algorithm work?
$w_1 = v_1$; then each $w_i$ is $v_i$ minus its projections onto the $w_1, \dots, w_{i-1}$ already built. The $w_i$ are orthogonal and span the same spaces as the $v_i$; dividing by the norms you get an orthonormal basis.
:::

::: question Why, in the computation of $w_3$, do you project onto $w_2$ and not onto $v_2$?
Because the "sum of the projections" formula works only on vectors that are already orthogonal to each other. Projecting onto $v_2$, which is not orthogonal to $w_1$, the result in general is not orthogonal to $w_2$.
:::

::: question What does the orthogonal decomposition theorem say?
If $V$ has finite dimension and the product is positive definite, $V = W \oplus W^\perp$: every $v$ can be written in only one way as $w + z$ with $w \in W$ and $z \in W^\perp$, and $\dim W + \dim W^\perp = \dim V$.
:::

::: question How do you compute the projection onto a plane of $\R^3$? Are there shortcuts?
With an orthogonal basis $w_1, w_2$ of the plane: $p_W(v) = \sum \frac{\langle v, w_i\rangle}{\langle w_i, w_i\rangle}w_i$. Shortcut: if $n$ spans $W^\perp$, $p_W(v) = v - \frac{\langle v, n\rangle}{\langle n, n\rangle}n$.
:::

::: question Why is the projection the point of $W$ closest to $v$?
For every $w \in W$, $v - w = (v - p_W(v)) + (p_W(v) - w)$ with the two pieces orthogonal; by Pythagoras $\|v - w\|^2 = \|v - p_W(v)\|^2 + \|p_W(v) - w\|^2 \ge \|v - p_W(v)\|^2$.
:::

::: question What are the normal equations and why do they work?
${}^tAAx_0 = {}^tAb$. $x_0$ minimises $\|Ax - b\|$ when $Ax_0$ is the projection of $b$ onto $\Imm L_A$, that is when $b - Ax_0$ is orthogonal to the columns of $A$, that is ${}^tA(b - Ax_0) = 0$.
:::

::: question When is the least-squares solution unique?
When the columns of $A$ are linearly independent: then ${}^tAA$ is invertible and $x_0 = ({}^tAA)^{-1}\,{}^tA\,b$.
:::

## Glossary

```glossary
Orthogonal vectors | $v$ and $w$ with $\langle v, w\rangle = 0$; if non-zero, they form a right angle.
Orthogonal complement $W^\perp$ | $\{v \in V \mid \langle v, w\rangle = 0 \ \forall w \in W\}$; it is always a subspace.
Orthogonal projection onto a line | $p_w(v) = \frac{\langle v, w\rangle}{\langle w, w\rangle}w$: the vector of the line $\Span(w)$ with $v - p_w(v)$ orthogonal to $w$.
Fourier coefficient | The number $\frac{\langle v, w\rangle}{\langle w, w\rangle}$.
Orthogonal basis | Basis whose vectors are pairwise orthogonal.
Orthonormal basis | Orthogonal basis of vectors of norm 1; the coordinates of $v$ are $\langle v, v_i\rangle$.
Normalise | Divide a non-zero vector by its norm.
Gram–Schmidt algorithm | Turns independent vectors $v_1, \dots, v_k$ into orthogonal vectors $w_1, \dots, w_k$ with the same spans: $w_i = v_i - \sum_{j < i} p_{w_j}(v_i)$.
Rescale | Replace a vector with a non-zero multiple of it; it does not change the projections and helps to avoid fractions.
Direct sum $\oplus$ | $V = U \oplus W$: every vector can be written in only one way as the sum of a vector of $U$ and one of $W$.
Orthogonal decomposition | $V = W \oplus W^\perp$ (Theorem 21.8), with $\dim W + \dim W^\perp = \dim V$.
Orthogonal projection onto a subspace | $p_W(v)$, the part in $W$ of the decomposition $v = w + z$; with an orthonormal basis $p_W(v) = \sum \langle v, w_i\rangle w_i$.
Pythagoras' theorem | If $\langle a, b\rangle = 0$, then $\lVert a + b \rVert^2 = \lVert a \rVert^2 + \lVert b \rVert^2$.
Distance of a vector from a subspace | $\lVert v - p_W(v) \rVert$, the minimum distance between $v$ and the vectors of $W$.
Least-squares solution | $x_0$ that minimises $\lVert Ax - b \rVert$ (Definition 21.10).
Normal equations | ${}^tAAx_0 = {}^tAb$; their solutions are the least-squares solutions.
Linear regression | Choice of the parameters of a linear model by minimising the sum of the squares of the errors.
Residual (error) | The vector $b - Ax$; in the least-squares solution it is orthogonal to the columns of $A$.
```

## Checklist

```checklist
- I can decide whether two vectors are orthogonal, also with a product $g_S$ other than the Euclidean one.
- I can compute $W^\perp$ by solving the system given by the generators of $W$, and check its dimension.
- I can prove that $W^\perp$ is a subspace.
- I can compute the orthogonal projection of a vector onto a line and derive the formula.
- I can compute the coordinates of a vector in an orthogonal basis with the Fourier coefficients.
- I can apply Gram–Schmidt to two or three vectors, checking orthogonality at each step and rescaling.
- I can turn an orthogonal basis into an orthonormal one.
- I can state and explain the orthogonal decomposition theorem and the dimension formula.
- I can project a vector onto a plane of $\R^3$, also with the normal-vector shortcut, and compute its distance from the plane.
- I can explain why the projection is the closest point (Pythagoras).
- I can write and solve the normal equations, and find the least-squares line for some points.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 21 "Prodotti scalari III", pp. 105–110: sections 21.A (orthogonal vectors and complement), 21.B (orthogonal projection), 21.C (Gram–Schmidt), 21.D (orthogonal decomposition), 21.E (least squares, with the box on linear regression) and 21.F (Exercise 21.13, solved here as the first exercise). Numbering of the handouts: Examples 21.1, 21.2, 21.7, 21.12; Definitions 21.3, 21.10; Propositions 21.4, 21.5, 21.6, 21.9; Theorems 21.8, 21.11. Reminders: Definition 18.4 (direct sum), Theorem 14.12 (rank–nullity theorem), lessons L19 and L20.
- **B. Martelli, *Geometria e algebra lineare***: §7.1.7, §7.3 (orthogonal subspace, Propositions 7.3.3 and 7.3.7, Theorem 7.3.12), §8.1.5–8.1.10 (projections, Fourier coefficients, Gram–Schmidt, rescaling, Propositions 8.1.25 and 8.1.28, Example 8.1.19). The book is free: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Exercise 5 is based on Exercise 8.2 of the book.
- **Exam papers** (Moodle 2025/26): problems 12 of 24/01/2024, 10/06/2024, 16/01/2025, 07/02/2025, 15/01/2026, 05/02/2026, 03/06/2026, 03/07/2026, 07/09/2026; question 2 of 05/02/2026. The three questions reported are solved in these notes.
- The **"Beyond the handouts"** parts (independence of orthogonal vectors, generators and complement, length of the projection, rescaling, where to find it in the book) and the exercises after the first one are additions in these notes, to connect the lesson to the rest of the course and to the exam.
