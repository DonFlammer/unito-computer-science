---
course: MDAG
module: AG
lesson: L23
title: Euclidean space II
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Part 2 · Linear Algebra and Geometry · Channels A, B and C · Lesson L23
description: >-
  Notes on lesson L23 of Linear Algebra and Geometry (MDAG, part 2): properties of the cross product and area of the
  parallelogram, Cartesian and parametric form of lines and planes, affine subspaces and direction space (giacitura),
  intersections, with exam-style quizzes and worked exercises.
lede: >-
  The cross product $v \times w$ has a length that measures an area and an orientation that you find with your right
  hand. Then we move on to the geometry of lines and planes in $\R^3$: how they are written (equations or parameters),
  how to go from one way of writing to the other, what an affine subspace $x + W$ is and how intersections are
  computed. These are the computations that come back in almost every geometry problem at the exam.
material: handouts
facts:
  Handouts: lesson 23 · pp. 116–121
  Book: Martelli, §9.1 and §9.2
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 120–150 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 23 "Lo spazio euclideo II"; B. Martelli, Geometria e algebra lineare, §9.1–9.2
italian_file: L23_spazio_euclideo_2.html
html_notes: notes/MDAG/L23_euclidean_space_2.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L23_spazio_euclideo_2.md
---

## In brief

- The **cross product** $v \times w$ of two vectors of $\R^3$ (lesson L22) is orthogonal to $v$ and to $w$, and its **length** is the **area of the parallelogram** with sides $v$ and $w$: $\lVert v \times w \rVert = \lVert v \rVert \lVert w \rVert \sin\vartheta$.
- Everything follows from **Lagrange's identity** $\lVert v \times w \rVert^2 + \langle v, w \rangle^2 = \lVert v \rVert^2 \lVert w \rVert^2$.
- The **orientation** of $v \times w$ is found with the **right-hand rule**: if $v$ and $w$ are independent, $v, w, v \times w$ is a **positive basis** of $\R^3$ (positive determinant).
- The cross product is **bilinear** and **anticommutative** ($v \times w = -\,w \times v$), but it is **not associative**: brackets matter.
- A subspace is described in **Cartesian form** (equations: they say *what lies inside it*) or in **parametric form** (generators: they say *what its points look like*).
- An **affine subspace** is a translated vector subspace, $S = x + W$: $W$ is the **direction space** (giacitura), $x$ any point of $S$. The solutions of $Ax = b$, if there are any, form an affine subspace of dimension $n - \rk A$.
- In $\R^3$ a plane has **one** equation $ax + by + cz = d$. From $P_0 + t v_1 + s v_2$ you get it like this: $(a, b, c) = v_1 \times v_2$, and $d$ is found by imposing that the plane passes through $P_0$.
- To **intersect** you solve equations: you put the equations together (Cartesian with Cartesian), you substitute the generic point (Cartesian with parametric), you equate the generic points (parametric with parametric). If $\operatorname{giac}(S) + \operatorname{giac}(S') = \R^n$, the intersection is not empty.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## Where we start again: the cross product (pp. 114–116)

In lesson L22 you met an operation that exists **only in $\R^3$**: it takes **two vectors** and returns **a vector** (the scalar product, instead, returns a number). In these notes, to save space, we often write as rows the vectors that the handouts write as columns: $(1, 2, 2)$ means the column vector ${}^t(1, 2, 2)$.

> [!DEF] 22.14 · Cross product (reminder from lesson L22)
> Given two vectors $v = (v_1, v_2, v_3)$ and $w = (w_1, w_2, w_3)$ of $\R^3$, the **cross product** of $v$ and $w$ is the vector
> $$v \times w = \begin{pmatrix} v_2 w_3 - v_3 w_2 \\ v_3 w_1 - v_1 w_3 \\ v_1 w_2 - v_2 w_1 \end{pmatrix}.$$
> In other words $v \times w = (d_1, -d_2, d_3)$, where $d_i$ is the determinant of the $2 \times 2$ minor obtained by deleting the $i$-th row from the matrix $\begin{pmatrix} v_1 & w_1 \\ v_2 & w_2 \\ v_3 & w_3 \end{pmatrix}$.

The handouts' mnemonic rule is a "determinant" made with a column of vectors (it is not a real matrix, because $e_1, e_2, e_3$ are not numbers):

$$\begin{aligned} v \times w &= \det\begin{pmatrix} v_1 & w_1 & e_1 \\ v_2 & w_2 & e_2 \\ v_3 & w_3 & e_3 \end{pmatrix} \\ &= \det\begin{pmatrix} v_2 & w_2 \\ v_3 & w_3 \end{pmatrix} e_1 - \det\begin{pmatrix} v_1 & w_1 \\ v_3 & w_3 \end{pmatrix} e_2 + \det\begin{pmatrix} v_1 & w_1 \\ v_2 & w_2 \end{pmatrix} e_3. \end{aligned}$$

In practice you do this:

1. write $v$ and $w$ **side by side**, as two columns;
2. first component: cover the **first row** and compute the $2 \times 2$ determinant that is left;
3. second component: cover the **second row**, compute the determinant and **change its sign**;
4. third component: cover the **third row** and compute the determinant.

> [!EXAMPLE] $v = (1, 2, 2)$ and $w = (0, 3, 4)$
> The two columns side by side give the rows $(1, 0)$, $(2, 3)$, $(2, 4)$.
> - I cover the first row: $\det\begin{pmatrix} 2 & 3 \\ 2 & 4 \end{pmatrix} = 2 \cdot 4 - 3 \cdot 2 = 8 - 6 = 2$.
> - I cover the second row: $\det\begin{pmatrix} 1 & 0 \\ 2 & 4 \end{pmatrix} = 1 \cdot 4 - 0 \cdot 2 = 4$, and I change the sign: $-4$.
> - I cover the third row: $\det\begin{pmatrix} 1 & 0 \\ 2 & 3 \end{pmatrix} = 1 \cdot 3 - 0 \cdot 2 = 3$.
>
> So $v \times w = (2, -4, 3)$. I check that it is orthogonal to both:
> $$\langle v \times w, v \rangle = 2 \cdot 1 + (-4) \cdot 2 + 3 \cdot 2 = 2 - 8 + 6 = 0,$$
> $$\langle v \times w, w \rangle = 2 \cdot 0 + (-4) \cdot 3 + 3 \cdot 4 = 0 - 12 + 12 = 0.$$

From lesson L22 you also need three facts:

- $v \times w$ is **orthogonal** to both $v$ and $w$ (Proposition 22.15): the check just done;
- $v \times w = 0$ **if and only if** $v$ and $w$ are **dependent**, that is one is a multiple of the other (Proposition 22.16);
- if $v$ and $w$ are independent, $v, w, v \times w$ is a **basis** of $\R^3$ (Corollary 22.17).

> [!PITFALL] The sign of the middle component
> The most frequent mistake is forgetting the **minus** in front of the second determinant. A quick check that always saves you: the result must give **zero** in the scalar product with $v$ and with $w$. If it does not give zero, there is a computation mistake.

## The length of $v \times w$ and the area of the parallelogram (pp. 116–117)

Let us start from a case you can draw on paper. Take $v = (3, 0, 0)$ and $w = (1, 2, 0)$: both lie in the plane $z = 0$. The parallelogram with sides $v$ and $w$ has **base** $3$ and **height** $2$, so **area** $3 \cdot 2 = 6$.

```graph
title: The parallelogram with sides $v = (3, 0)$ and $w = (1, 2)$ in the plane $z = 0$: base $3$, height $h = 2$, area $6$
x: -0.5 4.5
y: -0.8 2.8
names: $x$ $y$
polygon: 0 0 3 0 4 2 1 2 | amber
vector: 3 0 | accent | thick | $v$ | s
vector: 1 2 | blue | thick | $w$ | nw
segment: 1 2 1 0 | grey | dashed | $h$ | e
arc: 0 0 0.6 0 1.107 | grey | $\vartheta$
```

Now compute the cross product. The rows side by side are $(3, 1)$, $(0, 2)$, $(0, 0)$:

$$v \times w = \begin{pmatrix} 0 \cdot 0 - 0 \cdot 2 \\ 0 \cdot 1 - 3 \cdot 0 \\ 3 \cdot 2 - 0 \cdot 1 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 6 \end{pmatrix}.$$

The vector points upwards (it is orthogonal to the plane $z = 0$, where $v$ and $w$ lie) and has **length 6**: exactly the area. It is not a coincidence, and it is what this section proves.

### Lagrange's identity

> [!PROP] 23.1
> For every $v, w \in \R^3$ the following equation holds
> $$\lVert v \times w \rVert^2 + \langle v, w \rangle^2 = \lVert v \rVert^2 \lVert w \rVert^2.$$

Piece by piece:

- $\lVert v \rVert = \sqrt{v_1^2 + v_2^2 + v_3^2}$ is the **norm** (length) of $v$ in the Euclidean scalar product (lesson L20), and $\lVert v \rVert^2 = v_1^2 + v_2^2 + v_3^2$;
- $\langle v, w \rangle = v_1 w_1 + v_2 w_2 + v_3 w_3$ is the Euclidean **scalar product**;
- the equality links the three quantities: if you know two of them, you find the third.

> [!EXAMPLE] Check with $v = (1, 2, 2)$ and $w = (0, 3, 4)$
> - $v \times w = (2, -4, 3)$, so $\lVert v \times w \rVert^2 = 4 + 16 + 9 = 29$;
> - $\langle v, w \rangle = 0 + 6 + 8 = 14$, so $\langle v, w \rangle^2 = 196$;
> - $\lVert v \rVert^2 = 1 + 4 + 4 = 9$ and $\lVert w \rVert^2 = 0 + 9 + 16 = 25$, so $\lVert v \rVert^2 \lVert w \rVert^2 = 225$.
>
> And indeed $29 + 196 = 225$.

> [!PROOF] of Proposition 23.1
> The handouts expand the squares: it is worth doing it in full, once.
>
> 1. On the left, expanding the three squares of $\lVert v \times w \rVert^2 = (v_2 w_3 - v_3 w_2)^2 + (v_1 w_3 - v_3 w_1)^2 + (v_1 w_2 - v_2 w_1)^2$ you get six squares and three double products:
> $$\begin{aligned} &v_2^2 w_3^2 + v_3^2 w_2^2 + v_1^2 w_3^2 + v_3^2 w_1^2 + v_1^2 w_2^2 + v_2^2 w_1^2 \\ &\quad - 2\,(v_2 w_2 v_3 w_3 + v_1 w_1 v_3 w_3 + v_1 w_1 v_2 w_2). \end{aligned}$$
> 2. The product $(v_1^2 + v_2^2 + v_3^2)(w_1^2 + w_2^2 + w_3^2)$ contains **all nine** terms $v_i^2 w_j^2$.
> 3. The square $(v_1 w_1 + v_2 w_2 + v_3 w_3)^2$ contains the three terms with equal indices, $v_1^2 w_1^2 + v_2^2 w_2^2 + v_3^2 w_3^2$, plus the same three double products of point 1 (with the $+$ sign).
> 4. Subtracting, $(v_1^2 + v_2^2 + v_3^2)(w_1^2 + w_2^2 + w_3^2) - (v_1 w_1 + v_2 w_2 + v_3 w_3)^2$ leaves the six terms $v_i^2 w_j^2$ with $i \neq j$ minus the three double products: it is exactly the expression of point 1.
> 5. So $\lVert v \times w \rVert^2 = \lVert v \rVert^2 \lVert w \rVert^2 - \langle v, w \rangle^2$, which is the statement. $\square$

### From the identity to the area

Now suppose that $v$ and $w$ are **independent**. Then they lie in a plane $\pi = \Span(v, w)$, and inside that plane there is the parallelogram $P$ with sides $v$ and $w$ (Figure 8 of the handouts draws it with $v \times w$ coming out of the plane).

> [!PROP] 23.2
> The area of $P$ is $\operatorname{Area}(P) = \lVert v \rVert \lVert w \rVert \sin\vartheta$.

Here $\vartheta$ is the angle between $v$ and $w$ (as in the corollary that follows). Why it holds: take $v$ as the **base**, of length $\lVert v \rVert$. The height is the distance of the vertex $w$ from the line of $v$: in the right triangle with hypotenuse $w$ and angle $\vartheta$ the leg opposite $\vartheta$ measures $\lVert w \rVert \sin\vartheta$ (it is the definition of sine you know from high school; Martelli's book uses the same argument). Base times height: $\lVert v \rVert \cdot \lVert w \rVert \sin\vartheta$. In the figure above: $3 \cdot \sqrt 5 \cdot \frac{2}{\sqrt 5} = 6$.

> [!COROLLARY] 23.3
> The modulus of the cross product is
> $$\lVert v \times w \rVert = \lVert v \rVert \lVert w \rVert \sin\vartheta = \operatorname{Area}(P),$$
> where $\vartheta$ is the angle formed by $v$ and $w$ and $P$ is the parallelogram with sides $v$ and $w$.

The handouts' explanation, one step at a time:

1. from the definition of angle (lesson L20), $\langle v, w \rangle = \lVert v \rVert \lVert w \rVert \cos\vartheta$;
2. I substitute in Proposition 23.1: $\lVert v \times w \rVert^2 = \lVert v \rVert^2 \lVert w \rVert^2 - \lVert v \rVert^2 \lVert w \rVert^2 \cos^2\vartheta = \lVert v \rVert^2 \lVert w \rVert^2 (1 - \cos^2\vartheta)$;
3. since $\sin^2\vartheta + \cos^2\vartheta = 1$, I get $\lVert v \times w \rVert^2 = \lVert v \rVert^2 \lVert w \rVert^2 \sin^2\vartheta$;
4. I take the root. Here we need $\sin\vartheta \ge 0$, and indeed the angle between two vectors always lies in $[0, \pi]$, where the sine is never negative. So $\lVert v \times w \rVert = \lVert v \rVert \lVert w \rVert \sin\vartheta$, which by Proposition 23.2 is the area.

> [!EXAMPLE] The area with the two methods
> With $v = (1, 2, 2)$ and $w = (0, 3, 4)$:
> - **with the cross product**: $\operatorname{Area}(P) = \lVert (2, -4, 3) \rVert = \sqrt{29}$;
> - **with the angle**: $\cos\vartheta = \frac{14}{3 \cdot 5} = \frac{14}{15}$, so $\sin\vartheta = \sqrt{1 - \frac{196}{225}} = \frac{\sqrt{29}}{15}$ and $\operatorname{Area}(P) = 3 \cdot 5 \cdot \frac{\sqrt{29}}{15} = \sqrt{29}$.
>
> Same result; the first method needs no angle.

> [!EXAMPLE] The area of a triangle in space
> The triangle with vertices $A = (1, 0, 0)$, $B = (0, 2, 0)$, $C = (0, 0, 3)$ is **half** of the parallelogram with sides $\overrightarrow{AB}$ and $\overrightarrow{AC}$ (the diagonal $BC$ cuts it into two equal triangles).
> - $\overrightarrow{AB} = B - A = (-1, 2, 0)$ and $\overrightarrow{AC} = C - A = (-1, 0, 3)$;
> - rows side by side $(-1, -1)$, $(2, 0)$, $(0, 3)$: $\overrightarrow{AB} \times \overrightarrow{AC} = (2 \cdot 3 - 0 \cdot 0,\ -((-1) \cdot 3 - (-1) \cdot 0),\ (-1) \cdot 0 - (-1) \cdot 2) = (6, 3, 2)$;
> - $\lVert (6, 3, 2) \rVert = \sqrt{36 + 9 + 4} = \sqrt{49} = 7$.
>
> Area of the triangle: $\frac 72$.

```widget spazio
title: Cross product and area of the parallelogram
modo: vettoriale
u: 1 2 2
v: 0 3 4
```

Drag the drawing to turn it: the yellow parallelogram has area $\lVert u \times v \rVert = \sqrt{29} \approx 5.385$. Then try $v = (2, 4, 4)$, which is twice $u$: the parallelogram flattens onto a segment and the cross product becomes zero (Proposition 22.16). Finally swap $u$ and $v$: the vector $u \times v$ turns upside down (you will see why in the next section).

## The orientation of $v \times w$: the right-hand rule (p. 117)

If $v$ and $w$ are **dependent**, $v \times w = 0$ and there is nothing more to say. If they are **independent**, we already know two things:

- the **direction**: $v \times w$ is orthogonal to the plane that contains $v$ and $w$;
- the **length**: it is the area of the parallelogram.

These two pieces of information leave **two** candidates, opposite to each other (one "above" the plane, one "below"). To choose the right orientation you use the **right-hand rule** (Figure 9 of the handouts): with your **right** hand, put the **thumb** along $v$ and the **index finger** along $w$; the **middle finger**, bent at a right angle to the palm, shows the orientation of $v \times w$. In the first example of the previous section $v$ pointed to the right, $w$ up and to the right, and $v \times w = (0, 0, 6)$ comes out of the sheet towards you.

> [!PROP] 23.4
> If $v$ and $w$ are independent, the triple $v, w, v \times w$ is a **positive basis** of $\R^3$, that is the matrix with columns $v, w, v \times w$ has positive determinant.

Piece by piece:

- a **positive basis** (or *positively oriented* basis) is a basis $u_1, u_2, u_3$ for which $\det(u_1 \mid u_2 \mid u_3) > 0$: the notation $(u_1 \mid u_2 \mid u_3)$ denotes the matrix with those columns;
- the typical example is the canonical basis: $\det(e_1 \mid e_2 \mid e_3) = \det I_3 = 1 > 0$, and indeed $e_1 \times e_2 = e_3$;
- the right-hand rule is the "physical" translation of this positive determinant.

> [!PROOF] of Proposition 23.4 (from Martelli's book)
> The handouts do not give the proof; the one in the book (Proposition 9.1.7) is short.
>
> 1. I write $v \times w = (d_1, -d_2, d_3)$ as in Definition 22.14, where $d_i$ is the minor of $\begin{pmatrix} v_1 & w_1 \\ v_2 & w_2 \\ v_3 & w_3 \end{pmatrix}$ without row $i$.
> 2. I expand $\det(v \mid w \mid v \times w)$ with Laplace along the **third column**. The cofactor in position $(i, 3)$ is $(-1)^{i+3} d_i$, that is $+d_1$, $-d_2$, $+d_3$.
> 3. So $\det(v \mid w \mid v \times w) = d_1 \cdot d_1 + (-d_2) \cdot (-d_2) + d_3 \cdot d_3 = d_1^2 + d_2^2 + d_3^2 = \lVert v \times w \rVert^2$.
> 4. If $v$ and $w$ are independent, $v \times w \neq 0$ (Proposition 22.16), so the sum of the squares is **strictly** positive. $\square$

> [!EXAMPLE] The determinant of the triple
> With $v = (1, 2, 2)$, $w = (0, 3, 4)$ and $v \times w = (2, -4, 3)$, expanding along the third column:
> $$\begin{aligned} \det\begin{pmatrix} 1 & 0 & 2 \\ 2 & 3 & -4 \\ 2 & 4 & 3 \end{pmatrix} &= 2 \cdot (8 - 6) - (-4) \cdot (4 - 0) + 3 \cdot (3 - 0) \\ &= 4 + 16 + 9 = 29 > 0, \end{aligned}$$
> and $29 = \lVert v \times w \rVert^2$, as the proof says.

> [!IDEA] A geometric definition
> At this point the cross product of two **independent** vectors can be described without coordinates: it is the **only** vector orthogonal to both, as long as the area of the parallelogram with sides $v$ and $w$, and positively oriented with respect to $v$ and $w$. Direction, length and orientation: three pieces of information, a single vector.

## The computation rules (p. 117)

Two rules follow from the definition, which the handouts list right after Proposition 23.4.

**1. Anticommutativity.** For every $v, w \in \R^3$:

$$v \times w = -\,w \times v.$$

The reason: swapping $v$ and $w$, in every component the two products swap places. For example the first component becomes $w_2 v_3 - w_3 v_2 = -(v_2 w_3 - v_3 w_2)$. With the numbers from before: $w \times v = (-2, 4, -3)$. Consequence: $v \times v = -\,v \times v$, so $2\,(v \times v) = 0$ and $v \times v = 0$.

**2. Bilinearity.** The product $\times \colon \R^3 \times \R^3 \to \R^3$ is linear in each of its two slots, like the scalar product:

$$(v + v') \times w = v \times w + v' \times w, \qquad (\lambda v) \times w = \lambda\,(v \times w),$$
$$v \times (w + w') = v \times w + v \times w', \qquad v \times (\lambda w) = \lambda\,(v \times w).$$

The reason: every component is a sum of terms of the form "a coordinate of $v$ times a coordinate of $w$", and an expression like this is linear in $v$ when $w$ is fixed (and vice versa). For example $(2v) \times w$ with $v = (1, 2, 2)$, $w = (0, 3, 4)$: $(2, 4, 4) \times (0, 3, 4) = (16 - 12,\ 0 - 8,\ 6 - 0) = (4, -8, 6) = 2\,(2, -4, 3)$.

**The products of the vectors of the canonical basis**, to keep in mind:

| $\times$ | $e_1$ | $e_2$ | $e_3$ |
|---|---|---|---|
| $e_1$ | $0$ | $e_3$ | $-e_2$ |
| $e_2$ | $-e_3$ | $0$ | $e_1$ |
| $e_3$ | $e_2$ | $-e_1$ | $0$ |

(It is read "row $\times$ column": $e_1 \times e_2 = e_3$.) The cycle $e_1 \to e_2 \to e_3 \to e_1$ gives the $+$ sign, the opposite direction gives the $-$ sign.

**3. No associative property.** Here is the fundamental difference with products of numbers or of matrices. The handouts' example:

$$(e_1 \times e_2) \times e_2 = e_3 \times e_2 = -\,e_2 \times e_3 = -e_1, \qquad e_1 \times (e_2 \times e_2) = e_1 \times 0 = 0.$$

Same three vectors, different brackets, different results.

> [!PITFALL] Three mistakes not to make
> - Writing $u \times v \times w$ **without brackets**: it has no unique meaning.
> - Swapping the factors without changing the sign: $w \times v$ is the **opposite** of $v \times w$.
> - Thinking that $v \times w = 0$ means $v = 0$ or $w = 0$: it is enough that they are **parallel**, for example $(1, 2, 3) \times (2, 4, 6) = 0$.

## Cartesian form and parametric form (p. 118)

The floor of a room, with the origin in a corner, is the plane $z = 0$. You can describe it in two ways:

- with a **test**: "a point lies on the floor if its height $z$ is zero";
- with a **recipe**: "the points of the floor are all those of the form $(t, s, 0)$, with $t$ and $s$ any numbers".

The first is an **equation**, the second uses **parameters**. The handouts give a name to the two ways of writing.

> [!DEF] Cartesian form and parametric form (p. 118)
> A vector subspace of $\R^n$ described as the **zero set of a system of homogeneous linear equations** is said to be in **Cartesian form**. A vector subspace of $\R^n$ described as the **subspace spanned by some vectors** is said to be in **parametric form**. Every vector subspace of $\R^n$ can be described in both ways.

The handouts' example is precisely the floor: the plane $W = \{z = 0\}$ of $\R^3$ in Cartesian form has the equation $z = 0$; in parametric form it is spanned by $e_1$ and $e_2$:

$$W = \Span(e_1, e_2) = \left\{ t \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} + s \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} \ \middle|\ s, t \in \R \right\} = \left\{ \begin{pmatrix} t \\ s \\ 0 \end{pmatrix} \ \middle|\ s, t \in \R \right\}.$$

- The parametric form is **explicit**: it says what the points look like, as the **parameters** ($t$ and $s$) vary.
- The Cartesian form is **implicit**: it describes $W$ as the set of solutions of an equation (or of a system).

The parametric form is often more convenient, precisely because it is explicit, but it depends on what you have to do:

| What you have to do | More convenient form | Why |
|---|---|---|
| Decide whether $(2, 5, 0)$ lies in $W$ | Cartesian | substitute: $z = 0$, yes |
| Write three points of $W$ | parametric | choose three pairs $(t, s)$ |
| Find the dimension | parametric | count the independent generators |
| Intersect with another subspace | it depends | you see it in the section on intersections |

> [!EXAMPLE] Two passages between the forms, for vector subspaces
> **From parametric to Cartesian.** The line $L = \Span((1, 2, 3))$ has the points $(x, y, z) = (t, 2t, 3t)$. From the first coordinate $t = x$; substituting into the others, $y = 2x$ and $z = 3x$. So
> $$L = \{2x - y = 0,\ 3x - z = 0\}.$$
> Check with the generator: $2 \cdot 1 - 2 = 0$ and $3 \cdot 1 - 3 = 0$.
>
> **From Cartesian to parametric.** The plane $\{x + y + z = 0\}$: I get $x = -y - z$ and leave $y = s$, $z = t$ free. The points are $(-s - t, s, t) = s(-1, 1, 0) + t(-1, 0, 1)$, so the plane is $\Span((-1, 1, 0), (-1, 0, 1))$.

## Affine subspaces (pp. 118–119)

In the plane $\R^2$ the line $y = x - 1$ **does not pass through the origin**: $(0, 0)$ does not satisfy the equation. So it is not a vector subspace (which always contains zero). But it is the line $y = x$, which is a vector subspace, **shifted** one step to the right: each of its points is $(1, 0)$ plus a vector of $\Span((1, 1))$. Lines and planes that do not pass through the origin are of this kind.

> [!DEF] 12.5 · Affine subspace (reminder from lesson L12)
> Let $V$ be a vector space. An **affine subspace** of $V$ is a subset of the form
> $$S = \{x + v \mid v \in W\} =: x + W,$$
> where $x$ is a fixed point of $V$ and $W \subseteq V$ is a vector subspace.

The handouts recall where they come from: the solutions $S$ of a system of linear equations form **the empty set or an affine subspace** of $\R^n$. Indeed, if $S \neq \emptyset$,

$$S = \{x + v \mid v \in S_0\},$$

where $x$ is **any** solution and $S_0$ is the set of solutions of the **associated homogeneous system** (same equations with the constant terms equal to $0$), which is always a vector subspace. It is what you did in lesson L12: "particular solution plus solutions of the homogeneous system".

### When two ways of writing give the same subspace

The same affine subspace can be written in many ways, because **any** of its points is fine as a starting point.

> [!PROP] 23.5
> The affine spaces $x + W$ and $x' + W'$ coincide if and only if $W = W'$ and $x - x' \in W$.

Piece by piece:

- $W = W'$: the two ways of writing must have **the same direction** (the same vector subspace, even if written with different generators);
- $x - x' \in W$: the vector that goes from one starting point to the other must be **an allowed direction**, that is the two starting points lie on the same affine subspace.

> [!PROOF] of Proposition 23.5 (beyond the handouts)
> The handouts do not prove it; here is a short proof.
>
> ($\Leftarrow$) Suppose $W = W'$ and $x - x' \in W$. A point of $x + W$ is $x + w$ with $w \in W$, and it can be rewritten $x + w = x' + \big((x - x') + w\big)$. The vector in brackets is a sum of two vectors of $W$, so it lies in $W = W'$: the point lies in $x' + W'$. Swapping the roles ($x' - x = -(x - x')$ lies in $W$ too) you get the other inclusion.
>
> ($\Rightarrow$) Suppose $x + W = x' + W'$ and call this set $S$. The **differences** $p - q$ between two points of $S$ are exactly the vectors of $W$: if $p = x + w_1$ and $q = x + w_2$, then $p - q = w_1 - w_2 \in W$; and every $w \in W$ is the difference $(x + w) - x$. The same reasoning, starting from $x'$, says that the differences are exactly the vectors of $W'$. So $W = W'$. Finally $x = x + 0 \in S = x' + W'$, that is $x - x' \in W' = W$. $\square$

> [!EXAMPLE] 23.6
> If $W = \Span\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ in $\R^2$, the two affine lines
> $$r_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix} + W = \left\{ \begin{pmatrix} t + 1 \\ t \end{pmatrix} \ \middle|\ t \in \R \right\},$$
> $$r_2 = \begin{pmatrix} 0 \\ -1 \end{pmatrix} + W = \left\{ \begin{pmatrix} u \\ u - 1 \end{pmatrix} \ \middle|\ u \in \R \right\}$$
> are actually the same line, with equation $y = x - 1$.

Let us check it in three ways:

1. **with Proposition 23.5**: the direction space is the same, and $(1, 0) - (0, -1) = (1, 1) \in W$;
2. **with the equation**: in $r_1$ the generic point $(t + 1, t)$ has $y = t = (t + 1) - 1 = x - 1$; in $r_2$ the point $(u, u - 1)$ has $y = u - 1 = x - 1$;
3. **with the parameters**: the point of $r_1$ with parameter $t$ is the one of $r_2$ with parameter $u = t + 1$.

Instead $(0, 0) + W$, that is the line $y = x$, is **different**: $(1, 0) - (0, 0) = (1, 0)$ is not a multiple of $(1, 1)$. It is a line **parallel** to $r_1$.

```graph
title: The line $y = x - 1$ is the line $W$ shifted: you can start from $(1, 0)$ or from $(0, -1)$
x: -2.5 3.5
y: -2.5 3
line: 0 0 1 1 | grey | dashed | $W$ | nw
line: 1 0 2 1 | accent | thick | $r_1 = r_2$ | se
point: 1 0 | blue | $(1, 0)$ | se
point: 0 -1 | amber | $(0, -1)$ | nw
vector: 1 0 2 1 | violet | $(1, 1)$ | nw
```

### Direction space and dimension

> [!DEF] 23.7
> In the description of an affine space $S$ as $x + W$, the vector space $W$ is determined by $S$ and is called the **direction space** (giacitura) of $S$, denoted by $\operatorname{giac}(S)$. The point $x$ instead is **any** point of $S$. The **dimension** of $S$ is the dimension of the direction space $W$.

Proposition 23.5 explains why the definition makes sense: the point $x$ can be changed, the direction space cannot. The direction space is the set of the vectors $\overrightarrow{PQ} = Q - P$ with $P, Q \in S$: the **directions** in which you can move while staying inside $S$.

Affine subspaces also have the two forms.

- **Parametric form** (explicit):
$$S = x + \Span(v_1, \dots, v_k) = \{x + t_1 v_1 + \dots + t_k v_k \mid t_1, \dots, t_k \in \R\},$$
where $v_1, \dots, v_k$ form a **basis** of the direction space. In this case $\dim S = k$: one parameter for each vector of the basis.
- **Cartesian form** (implicit): $S = \{x \in \R^n \mid Ax = b\}$, with $A \in M(m, n)$ and $b \in \R^m$. By the **Rouché–Capelli theorem** (Theorem 12.6):
$$S \neq \emptyset \iff \rk A = \rk(A \mid b), \qquad \text{and in this case } \dim S = n - \rk A.$$

> [!EXAMPLE] Counting dimensions with Rouché–Capelli
> **A system that gives a line.** $S = \{x + y + z = 3,\ x - y = 1\}$ in $\R^3$. The rows $(1, 1, 1)$ and $(1, -1, 0)$ of $A$ are not proportional, so $\rk A = 2 = \rk(A \mid b)$ and $\dim S = 3 - 2 = 1$: a line. To write it: from the second equation $x = 1 + y$; in the first $1 + y + y + z = 3$, that is $z = 2 - 2y$. With $y = t$:
> $$S = \{(1 + t,\ t,\ 2 - 2t)\} = (1, 0, 2) + \Span((1, 1, -2)).$$
>
> **A system with no solutions.** $\{x + y + z = 1,\ x + y + z = 2\}$: subtracting the equations you get $0 = 1$. Here $\rk A = 1$ but $\rk(A \mid b) = 2$, and $S = \emptyset$. Geometrically: two distinct **parallel** planes.

> [!NOTE] Link with computer science: linear classifiers (p. 119)
> The handouts link this lesson to *machine learning*. An affine **hyperplane** of $\R^n$ (an affine subspace of dimension $n - 1$: a line in $\R^2$, a plane in $\R^3$) can be written as
> $${}^t w\, x + b = 0,$$
> with $w \in \R^n$ non-zero and $b \in \R$. The hyperplane divides space into two **half-spaces**: the one where ${}^t w\, x + b$ is positive and the one where it is negative. A simple **linear classifier** assigns a data vector $x$ to one of the two classes by looking at the **sign** of ${}^t w\, x + b$. The vector $w$ is **orthogonal** to the separating hyperplane. The same geometry underlies the perceptron and support vector machines in their linear form.

> [!EXAMPLE] A classifier in $\R^2$
> With $w = (1, 1)$ and $b = -3$ the hyperplane is the line $x + y - 3 = 0$. Let us classify three points by computing $x + y - 3$:
> - $(1, 1)$: $1 + 1 - 3 = -1 < 0$, "negative" class;
> - $(3, 2)$: $3 + 2 - 3 = 2 > 0$, "positive" class;
> - $(1, 2)$: $1 + 2 - 3 = 0$, it lies exactly on the separating line.

```graph
title: The line $x + y = 3$ separates the points with $x + y - 3 < 0$ from those with $x + y - 3 > 0$; the vector $w = (1, 1)$ is orthogonal to it
x: -0.5 4.5
y: -0.5 4
line: 3 0 0 3 | accent | $x + y = 3$ | ne
point: 1 1 | pink | $(1, 1)$ | sw
point: 3 2 | green | $(3, 2)$ | ne
point: 1 2 | grey | $(1, 2)$ | sw
vector: 1.5 1.5 2.3 2.3 | violet | thick | $w$ | e
```

## Lines and planes in space (pp. 119–120)

The affine subspaces of $\R^3$ are of four kinds. The number of independent equations needed is $3 - \dim S$ (Rouché–Capelli with $n = 3$).

| Dimension | What it is | Parametric form | Cartesian form |
|---|---|---|---|
| 0 | a point | $P_0$ | 3 independent equations |
| 1 | a line | $P_0 + t v$ | 2 independent equations |
| 2 | a plane | $P_0 + t v_1 + s v_2$ | 1 equation |
| 3 | the whole of $\R^3$ | $P_0 + t e_1 + s e_2 + u e_3$ | no equation |

- An affine **plane** $\pi$ in $\R^3$ is described by **one equation** $\pi = \{ax + by + cz = d\}$ (with $(a, b, c) \neq 0$), or by a point and two independent vectors that span the direction space: $\pi = \{P_0 + t v_1 + s v_2 \mid t, s \in \R\}$.
- An affine **line** $r$ in $\R^3$ is described by **two** equations of that kind, or, more easily, in parametric form: $r = \{P_0 + t v \mid t \in \R\}$, with $v \neq 0$ (the **direction vector**).

> [!PITFALL] A single equation is not enough for a line in space
> In $\R^2$ the line $x + 2y = 3$ has a single equation. In $\R^3$ the same equation $x + 2y = 3$ describes a **plane** ($z$ is free): for a line in space you need **two** independent equations.

> [!IDEA] The vector of the coefficients is orthogonal to the plane
> Take two points $P$ and $Q$ of the plane $\{ax + by + cz = d\}$ and call $n = (a, b, c)$. Then $\langle n, P \rangle = d$ and $\langle n, Q \rangle = d$, so
> $$\langle n, Q - P \rangle = d - d = 0.$$
> Every vector of the direction space is orthogonal to $n$: this is why $n$ is called the **normal vector** of the plane. The direction space is exactly the vector plane $\{ax + by + cz = 0\}$, made of the vectors orthogonal to $n$. This fact will come back all the time in lesson L24 (angles and distances).

### From Cartesian to parametric

You solve the system $Ax = b$, for example with the Gauss–Jordan algorithm (lesson L11): the free variables become the parameters.

> [!EXAMPLE] A plane and a line, from Cartesian to parametric
> **The plane $x + 2y - z = 8$.** I get $z = x + 2y - 8$ and leave $x = s$, $y = t$ free:
> $$(s,\ t,\ s + 2t - 8) = (0, 0, -8) + s(1, 0, 1) + t(0, 1, 2).$$
> Check: $(0, 0, -8)$ satisfies $0 + 0 - (-8) = 8$; the two vectors satisfy the **homogeneous** equation: $1 + 0 - 1 = 0$ and $0 + 2 - 2 = 0$.
>
> **The line $\{x + y + z = 3,\ x - y = 1\}$** we already solved above: $(1, 0, 2) + \Span((1, 1, -2))$.

### From parametric to Cartesian: the cross-product trick

Sometimes you need the opposite. For **planes of $\R^3$** there is a quick method. Let $\pi = \{P_0 + t v_1 + u v_2\}$ with $v_1, v_2$ independent:

1. compute $v_1 \times v_2$: it will have three coefficients $a, b, c$;
2. the plane is $\pi = \{ax + by + cz = d\}$ for some $d \in \R$;
3. you find $d$ by imposing $P_0 \in \pi$, that is by substituting the coordinates of $P_0$.

Why it works: $n = v_1 \times v_2$ is orthogonal to $v_1$ and $v_2$ (Proposition 22.15). For every point $P = P_0 + t v_1 + u v_2$ of the plane
$$\langle n, P \rangle = \langle n, P_0 \rangle + t \langle n, v_1 \rangle + u \langle n, v_2 \rangle = \langle n, P_0 \rangle,$$
so all the points of the plane satisfy $ax + by + cz = d$ with $d = \langle n, P_0 \rangle$. And $n \neq 0$ because $v_1, v_2$ are independent (Proposition 22.16).

> [!EXAMPLE] 23.8
> Consider
> $$\pi = \left\{ \begin{pmatrix} 1 \\ 2 \\ -3 \end{pmatrix} + t \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} + s \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix} \right\}.$$
> We find
> $$\begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix} \times \begin{pmatrix} 2 \\ -1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix}.$$
> So $\pi = \{x + 2y - z = d\}$ for some $d \in \R$, which we determine by imposing
> $$\begin{pmatrix} 1 \\ 2 \\ -3 \end{pmatrix} \in \pi \ \Rightarrow\ 1 + 4 + 3 = d,$$
> and so $d = 8$. We have found a Cartesian equation for the plane: $\pi = \{x + 2y - z = 8\}$.

The cross-product computations, row by row (rows side by side $(1, 2)$, $(0, -1)$, $(1, 0)$):

- first component, I cover the first row: $0 \cdot 0 - (-1) \cdot 1 = 1$;
- second, I cover the second row: $1 \cdot 0 - 2 \cdot 1 = -2$, and I change the sign: $2$;
- third, I cover the third row: $1 \cdot (-1) - 2 \cdot 0 = -1$.

Final check with another point of the plane, for example $t = s = 1$: $P = (1 + 1 + 2,\ 2 + 0 - 1,\ -3 + 1 + 0) = (4, 1, -2)$, and $4 + 2 \cdot 1 - (-2) = 8$.

Notice one thing: in the previous example the same equation $x + 2y - z = 8$ had given us **another** parametric form, $(0, 0, -8) + s(1, 0, 1) + t(0, 1, 2)$. No contradiction, by Proposition 23.5: the direction spaces coincide, because $(2, -1, 0) = 2\,(1, 0, 1) - (0, 1, 2)$, and the difference of the starting points $(1, 2, -3) - (0, 0, -8) = (1, 2, 5) = (1, 0, 1) + 2\,(0, 1, 2)$ lies in the direction space.

```widget spazio
title: The plane of Example 23.8 with its normal vector
modo: piano
piano: 1 2 -1 = 8
punto: 4 1 -2
```

The violet plane is $x + 2y - z = 8$ and the arrow $n$ is the normal vector $(1, 2, -1)$. The point $P = (4, 1, -2)$ lies on the plane: the tool says that its distance from the plane is $0$. Try changing $d$ (for example $x + 2y - z = 0$): the plane moves **parallel to itself**, because the direction space does not change. You will study the distance of a point from a plane in lesson L24.

> [!BEYOND] Lines from parametric to Cartesian, and the plane through three points
> **A line.** For $r = (1, 2, 3) + t(2, 1, -1)$ you **eliminate the parameter**: $x = 1 + 2t$, $y = 2 + t$, $z = 3 - t$. From the second $t = y - 2$; substituting, $x = 1 + 2(y - 2)$, that is $x - 2y = -3$, and $z = 3 - (y - 2)$, that is $y + z = 5$. So $r = \{x - 2y = -3,\ y + z = 5\}$. Check with $t = 1$, point $(3, 3, 2)$: $3 - 6 = -3$ and $3 + 2 = 5$.
>
> **A plane through three non-collinear points** $P_0, P_1, P_2$: it is $P_0 + t\,\overrightarrow{P_0P_1} + s\,\overrightarrow{P_0P_2}$, and then you use the cross product as above (Martelli, Proposition 9.2.12). With $A, B, C$ of the triangle example: $\overrightarrow{AB} \times \overrightarrow{AC} = (6, 3, 2)$ and $d = 6 \cdot 1 = 6$, so the plane is $6x + 3y + 2z = 6$.

## Intersections (pp. 120–121)

Two **vector** subspaces always meet, at least at the origin. Two **affine** subspaces do not: the planes $x + y + z = 1$ and $x + y + z = 2$ have no points in common, because no point can have $x + y + z$ equal to $1$ and to $2$ at the same time.

> [!DEF] Incident subspaces (p. 120)
> Two affine subspaces $S, S' \subseteq \R^n$ are **incident** if $S \cap S' \neq \emptyset$.

If they are incident, take a point $x \in S \cap S'$ and write both starting from there: $S = x + W$ and $S' = x + W'$ (you can, by Definition 23.7). A point $y$ lies in both exactly when $y - x \in W$ and $y - x \in W'$, that is $y - x \in W \cap W'$. So

$$S \cap S' = x + (W \cap W').$$

In particular **the intersection, if it is not empty, is always an affine subspace**, with direction space $W \cap W'$.

### Three cases, three methods

How the intersection is computed depends on the form in which $S$ and $S'$ are given. Example 23.9 of the handouts shows the three cases; we work them out to the end.

> [!EXAMPLE] 23.9 · First case: both in Cartesian form
> If $S$ and $S'$ are described in Cartesian form, their intersection $S \cap S'$ is described in Cartesian form **by putting the equations together**. For example, if $S = \{x + y = 1\}$ and $S' = \{x - y + z = 3\}$ are two planes in $\R^3$, their intersection is the set of solutions of
> $$\begin{cases} x + y = 1 \\ x - y + z = 3. \end{cases}$$

The handouts stop at the system; let us solve it. From the first $x = 1 - y$. I substitute into the second: $1 - y - y + z = 3$, that is $z = 2 + 2y$. With $y = t$:

$$S \cap S' = \{(1 - t,\ t,\ 2 + 2t)\} = (1, 0, 2) + \Span((-1, 1, 2)).$$

It is a **line**. Check: $(1, 0, 2)$ satisfies $1 + 0 = 1$ and $1 - 0 + 2 = 3$. The vector $(-1, 1, 2)$ satisfies the homogeneous equations: $-1 + 1 = 0$ and $-1 - 1 + 2 = 0$.

> [!EXAMPLE] 23.9 · Second case: one Cartesian and one parametric
> If $S$ is described in Cartesian form and $S'$ in parametric form, to find $S \cap S'$ it is enough to **substitute the generic point** of $S'$ into the equations of $S$ and find the parameters that satisfy them. For example, if $S = \{x + y - z = 2\}$ is a plane in $\R^3$ and
> $$S' = \left\{ \begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix} + t \begin{pmatrix} 1 \\ 2 \\ -3 \end{pmatrix} \right\} = \left\{ \begin{pmatrix} 1 + t \\ -1 + 2t \\ 1 - 3t \end{pmatrix} \right\}$$
> is a line, you substitute $x = 1 + t$, $y = -1 + 2t$, $z = 1 - 3t$ into the equation of $S$:
> $$(1 + t) + (-1 + 2t) - (1 - 3t) = 2 \iff -1 + 6t = 2 \iff t = \tfrac 12,$$
> and the intersection is the point
> $$S \cap S' = \left\{ \begin{pmatrix} 3/2 \\ 0 \\ -1/2 \end{pmatrix} \right\}.$$

The point comes from $t = \frac 12$: $\left(1 + \frac 12,\ -1 + 1,\ 1 - \frac 32\right) = \left(\frac 32, 0, -\frac 12\right)$. Check in the plane: $\frac 32 + 0 + \frac 12 = 2$. Watch out for the sign: $-(1 - 3t) = -1 + 3t$.

> [!EXAMPLE] 23.9 · Third case: both in parametric form
> If $S$ and $S'$ are both in parametric form, you **equate the generic point** of $S$ with that of $S'$ and find which parameters solve the system. The handouts warn that it can be more laborious.

An example of ours. Let $r = (1, 0, 1) + t(1, 1, 0)$ and $r' = (0, 3, -1) + s(1, -1, 1)$. Equating the coordinates:

$$\begin{cases} 1 + t = s \\ t = 3 - s \\ 1 = -1 + s. \end{cases}$$

From the third $s = 2$; from the first $t = s - 1 = 1$; the second must be **checked**: $t = 1$ and $3 - s = 1$, it works. The lines meet at the point $r(1) = (2, 1, 1)$, and indeed also $r'(2) = (0 + 2,\ 3 - 2,\ -1 + 2) = (2, 1, 1)$.

> [!METHOD] How to intersect
> 1. **Cartesian with Cartesian**: put all the equations in a single system and solve it with Gauss; the solution in parametric form is the intersection.
> 2. **Cartesian with parametric**: substitute the generic point (with the parameters) into the equations; you find the parameters and put them back into the generic point.
> 3. **Parametric with parametric**: equate the generic points, with **different names** for the parameters ($t$ and $s$, never $t$ and $t$); solve and **check all the equations**. If one equation does not work, the intersection is empty.
> 4. In every case, at the end **substitute** the point found into the two descriptions: it is the cheapest check there is.

With the calculator below you can redo the first case: the augmented matrix of the system of Example 23.9 has rows $(1, 1, 0 \mid 1)$ and $(1, -1, 1 \mid 3)$. The tool reduces with Gauss–Jordan and writes the solutions with one parameter.

```widget gauss
title: The intersection of the two planes of Example 23.9
matrice: 1 1 0 1; 1 -1 1 3
modo: sistema
```

The tool chooses the third unknown as the parameter and finds $(2, -1, 0) + t\left(-\frac 12, \frac 12, 1\right)$. It looks like a different result from ours, but it is the **same line**, by Proposition 23.5: the direction is half of $(-1, 1, 2)$, and $(2, -1, 0) - (1, 0, 2) = (1, -1, -2)$ lies in the direction space.

### When the intersection is certainly not empty

The last proposition of the lesson gives a condition on the **direction spaces** that guarantees that they meet.

> [!PROP] 23.10
> If $\operatorname{giac}(S) + \operatorname{giac}(S') = \R^n$, then the subspaces $S$ and $S'$ are incident.

Piece by piece:

- $\operatorname{giac}(S) + \operatorname{giac}(S')$ is the **sum** of the two vector subspaces (lesson L07): all the vectors $w + w'$ with $w \in \operatorname{giac}(S)$ and $w' \in \operatorname{giac}(S')$;
- the hypothesis says that, moving first along $S$ and then along $S'$, you reach **any** vector of $\R^n$;
- the conclusion: $S \cap S' \neq \emptyset$. It does not say **where** they meet: for that you have to do the computations.

> [!PROOF] of Proposition 23.10 (from Martelli's book)
> 1. I write $S = \{P + t_1 v_1 + \dots + t_k v_k\}$ and $S' = \{Q + u_1 w_1 + \dots + u_h w_h\}$, with $v_i$ a basis of $\operatorname{giac}(S)$ and $w_j$ a basis of $\operatorname{giac}(S')$.
> 2. The two subspaces are incident if and only if the system $P + t_1 v_1 + \dots + t_k v_k = Q + u_1 w_1 + \dots + u_h w_h$ in the unknowns $t_i, u_j$ has a solution.
> 3. By hypothesis $v_1, \dots, v_k, w_1, \dots, w_h$ span $\R^n$. So the vector $Q - P$ is a linear combination of them: $Q - P = a_1 v_1 + \dots + a_k v_k + b_1 w_1 + \dots + b_h w_h$.
> 4. Then $t_i = a_i$ and $u_j = -b_j$ solve the system: $P + \sum a_i v_i = Q - \sum b_j w_j$. $\square$

> [!EXAMPLE] Two applications in $\R^3$
> **Two planes with non-parallel normal vectors**, for example $x + y + z = 1$ and $x - y = 5$. The direction spaces are two **different** vector planes, so their sum strictly contains a plane: it has dimension $3$ and is the whole of $\R^3$. By Proposition 23.10 the planes meet (in a line).
>
> **A line and a plane**, with the direction of the line outside the direction space of the plane: $r = \{t(1, 1, 1)\}$ and $\pi = \{x + y + z = 7\}$. The vector $(1, 1, 1)$ does not lie in the direction space $\{x + y + z = 0\}$, because $1 + 1 + 1 = 3 \neq 0$. Then the direction space of the plane (dimension 2) and the direction of the line together span $\R^3$, and there is a common point. Substituting: $3t = 7$, $t = \frac 73$, point $\left(\frac 73, \frac 73, \frac 73\right)$.

> [!PITFALL] The converse is false
> If the sum of the direction spaces is **not** $\R^n$, the proposition says nothing: the intersection may or may not exist. Two lines of $\R^3$ have direction spaces of dimension $1$, whose sum has dimension at most $2$: the proposition never applies. Yet the $x$ axis and the $y$ axis meet (at the origin), while the line $\{t(1, -1, 0)\}$ and the plane $x + y + z = 7$ do not: substituting you get $0 = 7$.

> [!BEYOND] Relative positions in $\R^3$
> Putting together direction spaces and intersections you get this table (Martelli, §9.2.5 and §9.2.7). Two affine subspaces are **parallel** if the direction space of one is contained in that of the other; two lines that are neither incident nor parallel are called **skew**.
>
> | Pair | Direction spaces | Intersection |
> |---|---|---|
> | two planes | normals not proportional | a line |
> | two planes | normals proportional | empty (distinct parallel planes) or the same plane |
> | line and plane | direction outside the direction space of the plane | a point |
> | line and plane | direction inside the direction space | empty (parallel line) or the whole line |
> | two lines | proportional directions | empty (distinct parallel lines) or the same line |
> | two lines | non-proportional directions | a point (incident) or empty (**skew**) |
>
> Skew lines exist only from space upwards: in the plane two non-parallel lines always meet (in $\R^2$ two different direction spaces add up to $\R^2$, and Proposition 23.10 applies).

> [!BEYOND] Where to find it in the book
> In Martelli's book: the cross product and its properties in §9.1 (pp. 267–272: Lagrange's identity Prop. 9.1.4, area Prop. 9.1.5 and Cor. 9.1.6, positive basis Prop. 9.1.7, triple product Exercise 9.1.8, volume of the parallelepiped Prop. 9.1.9); parametric and Cartesian form in §9.2.1 (pp. 272–274, with Example 9.2.3, which is our 23.8); intersections in §9.2.3 (pp. 275–276, Example 9.2.6 and Proposition 9.2.7); subspace spanned by points, parallelism and relative positions in §9.2.4, §9.2.5 and §9.2.7 (pp. 277–283).

## Towards the exam

The written test of Linear Algebra and Geometry has **10 quiz questions** with 5 answers (only one right) and **2 problems worth 11 points**, marked only with **at least 6 correct quiz answers**; it lasts **2 hours**, **with no calculator**, and you may bring only a sheet of **4 handwritten pages**. The 2026/27 exam sessions are on **22/01/2027** and **05/02/2027** at 14:00. All the details are in lesson L01.

**What of this lesson appears in the 2023–2026 exam sessions.** Intersections are among the most frequent topics of all:

- **quiz on the line–plane intersection**: exam sessions of 07/02/2025 (question 10) and 03/07/2026 (question 8); the proposed answers are always of the kind "a point $P = \dots$", "the whole line", "the whole plane", "empty";
- **quiz on the intersection of two lines in parametric form**: exam sessions of 03/06/2025 and 10/07/2025 (question 10 in both);
- **open problems**: writing the line $r = \pi_1 \cap \pi_2$ in the form $P + \Span(v)$ (24/01/2024, 10/07/2024, 06/09/2024, 15/01/2026), proving that a line and a plane are incident (24/01/2024, 10/07/2024), finding the intersection of three planes (06/09/2024, 15/01/2026), planes or lines depending on a parameter $k$ (03/06/2025, 02/09/2025).

A real quiz question, as an example (exam of 07/02/2025, question 10): *the intersection of the line $r = {}^t(2, -2, 0) + s\,{}^t(1, -2, 1)$ with the plane $\pi = \{2x - 2y + z = 1\}$ is: (a) the whole plane; (b) $P = {}^t(-1, -1, 1)$; (c) $P = {}^t(1, 0, -1)$; (d) they have no intersection; (e) the whole line.*

Working: the generic point of $r$ is $(2 + s,\ -2 - 2s,\ s)$. I substitute: $2(2 + s) - 2(-2 - 2s) + s = 4 + 2s + 4 + 4s + s = 8 + 7s$. The equation $8 + 7s = 1$ gives $s = -1$ and the point $(1, 0, -1)$: answer (c). Check: $2 - 0 - 1 = 1$. The quiz trick: you can also **substitute answers** (b) and (c) into the equation of the plane and into the line, and exclude (a) and (e) by looking at the scalar product between direction and normal, $\langle (1, -2, 1), (2, -2, 1) \rangle = 2 + 4 + 1 = 7 \neq 0$: the line is not parallel to the plane, so the intersection is **a point**.

> [!METHOD] The line of intersection of two planes, in the form $P + \Span(v)$
> 1. Put the two equations in a system and reduce it with Gauss (or solve for one variable and substitute).
> 2. Choose the free variable as the parameter and write the generic point.
> 3. Separate the constant part ($P$) from the part with the parameter ($t\,v$).
> 4. Quick check: $v$ must be proportional to $n_1 \times n_2$, the cross product of the two normal vectors (it is orthogonal to both, so it lies in both direction spaces); $P$ must satisfy the two equations.

> [!METHOD] Proving that a line and a plane are incident
> Two ways, both accepted:
> - **with Proposition 23.10**: if the direction $v$ of the line does not lie in the direction space of the plane (for a plane $ax + by + cz = d$: $\langle v, (a, b, c) \rangle \neq 0$; for a plane given by two generators $v_1, v_2$: $\det(v_1 \mid v_2 \mid v) \neq 0$), then the direction spaces add up to $\R^3$ and there is an intersection;
> - **with the computation**: substitute the generic point of the line into the equation of the plane and find the parameter. If it exists, they are incident, and you also have the point.

**Mistakes to avoid.**

- Using the **same name** for the parameters of two different lines: the system becomes wrong.
- In the intersection of two lines, not checking the **third** equation: two equations out of three can work even if the lines are skew.
- Mixing up the **normal vector** of a plane with a vector **of** the plane: $(a, b, c)$ is orthogonal to the plane, it does not lie in it.
- Writing a line of $\R^3$ with a single equation.
- The $-$ sign of the second component of the cross product.

> [!EXAM] The 4-page sheet
> From this lesson: the formula for $v \times w$ with the scheme "cover the row, minus sign in the middle"; $\lVert v \times w \rVert = \text{area of the parallelogram}$ and $\frac 12 \lVert \overrightarrow{AB} \times \overrightarrow{AC} \rVert = \text{area of the triangle } ABC$; the table of the kinds of subspaces of $\R^3$ (how many equations, how many parameters); the method $n = v_1 \times v_2$, $d = \langle n, P_0 \rangle$; the three methods for intersections; Proposition 23.10.

## Quiz

```quiz
Q: What is the cross product $(1, 0, 1) \times (2, -1, 0)$?
+ $(1, 2, -1)$
- $(-1, -2, 1)$
- $(1, -2, -1)$
- $(2, 0, 0)$
- $(-1, 2, 1)$
= Rows side by side $(1, 2)$, $(0, -1)$, $(1, 0)$. First component $0 \cdot 0 - 1 \cdot (-1) = 1$; second $-(1 \cdot 0 - 1 \cdot 2) = 2$; third $1 \cdot (-1) - 0 \cdot 2 = -1$. It is the computation of Example 23.8. $(-1, -2, 1)$ is $(2, -1, 0) \times (1, 0, 1)$, with the factors swapped; $(1, -2, -1)$ forgets the minus sign in the middle; $(2, 0, 0)$ multiplies the coordinates one by one.

Q: What is the area of the parallelogram with sides $v = (1, 1, 0)$ and $w = (0, 1, 1)$?
+ $\sqrt 3$
- $\frac{\sqrt 3}{2}$
- $3$
- $1$
- $\sqrt 2$
= $v \times w = (1 \cdot 1 - 0 \cdot 1,\ -(1 \cdot 1 - 0 \cdot 0),\ 1 \cdot 1 - 1 \cdot 0) = (1, -1, 1)$, of norm $\sqrt{1 + 1 + 1} = \sqrt 3$. By Corollary 23.3 it is the area. $\frac{\sqrt 3}{2}$ would be the area of the triangle with sides $v$ and $w$; $3$ is the square of the norm.

Q: Which of these statements about the cross product in $\R^3$ is **false**?
+ $(u \times v) \times w = u \times (v \times w)$ for every $u, v, w$
- $v \times w = -\,w \times v$ for every $v, w$
- $v \times v = 0$ for every $v$
- $v \times w$ is orthogonal to both $v$ and $w$
- $(2v) \times w = 2\,(v \times w)$ for every $v, w$
= The cross product is not associative: $(e_1 \times e_2) \times e_2 = e_3 \times e_2 = -e_1$, while $e_1 \times (e_2 \times e_2) = e_1 \times 0 = 0$. The others are anticommutativity, its consequence $v \times v = 0$, Proposition 22.15 and bilinearity.

Q: The planes $\pi_1 = \{x + y + z = 3\}$ and $\pi_2 = \{x - y = 1\}$ meet in the line:
+ $(1, 0, 2) + \Span((1, 1, -2))$
- $(1, 0, 2) + \Span((1, 1, 1))$
- $(0, 0, 3) + \Span((1, 1, -2))$
- $(1, 0, 2) + \Span((1, -1, 0))$
- $(2, 1, 1) + \Span((1, 1, -2))$
= From the second equation $x = 1 + y$; in the first $1 + 2y + z = 3$, that is $z = 2 - 2y$. With $y = t$: $(1 + t, t, 2 - 2t)$. Check: $(1, 1, 1) \times (1, -1, 0) = (1, 1, -2)$. The directions $(1, 1, 1)$ and $(1, -1, 0)$ are the normal vectors, which are orthogonal to the planes; $(0, 0, 3)$ does not lie on $\pi_2$; $(2, 1, 1)$ does not lie on $\pi_1$. Similar to the exams of 24/01/2024 and 10/07/2024 (problem 12, part 1).

Q: The plane $\pi = \{s\,e_1 + t\,(e_2 + e_3) \mid s, t \in \R\}$ in Cartesian form is:
+ $\{y - z = 0\}$
- $\{x = 0\}$
- $\{y + z = 0\}$
- $\{x + y + z = 0\}$
- $\{x - y + z = 0\}$
= The plane passes through the origin and is spanned by $(1, 0, 0)$ and $(0, 1, 1)$. The normal vector is $(1, 0, 0) \times (0, 1, 1) = (0 \cdot 1 - 0 \cdot 1,\ -(1 \cdot 1 - 0 \cdot 0),\ 1 \cdot 1 - 0 \cdot 0) = (0, -1, 1)$, so $-y + z = 0$, that is $y = z$. Check: $e_1$ and $e_2 + e_3$ have $y = z$. Similar to the exam of 24/01/2024 (problem 12), where the plane $\pi_3$ was given exactly like this.

Q: The plane $(0, 1, 1) + t(1, 0, 0) + s(0, 1, 2)$ has an equation of the form $2y - z = d$. What is $d$?
N: 1
= The normal vector is $(1, 0, 0) \times (0, 1, 2) = (0, -2, 1)$, that is the equation is $-2y + z = \text{const}$, equivalent to $2y - z = d$. Substituting the point $(0, 1, 1)$: $d = 2 \cdot 1 - 1 = 1$.

Q: Which of these lines of $\R^2$ **coincides** with $r = (1, 2) + \Span((2, 1))$?
+ $(5, 4) + \Span((-4, -2))$
- $(2, 1) + \Span((2, 1))$
- $(1, 2) + \Span((1, 2))$
- $(0, 0) + \Span((2, 1))$
- $(3, 2) + \Span((2, 1))$
= Proposition 23.5: you need the same direction space and the difference of the points must lie in the direction space. $\Span((-4, -2)) = \Span((2, 1))$ and $(5, 4) - (1, 2) = (4, 2) = 2\,(2, 1)$: same line. For the others: $(2, 1) - (1, 2) = (1, -1)$, $(0, 0) - (1, 2)$ and $(3, 2) - (1, 2) = (2, 0)$ are not multiples of $(2, 1)$ (distinct parallel lines); $(1, 2) + \Span((1, 2))$ has another direction space.

Q: The intersection of the line $r = (1, 1, 0) + t\,(1, 0, 2)$ with the plane $\pi = \{x + y + z = 5\}$ is:
+ the point $(2, 1, 2)$
- the point $(3, 1, 4)$
- the point $(1, 1, 0)$
- the whole line $r$
- empty
= I substitute $(1 + t, 1, 2t)$: $1 + t + 1 + 2t = 5$, that is $3t = 3$ and $t = 1$. The point is $(2, 1, 2)$; check $2 + 1 + 2 = 5$. The direction $(1, 0, 2)$ has scalar product $3 \neq 0$ with the normal $(1, 1, 1)$: the line is not parallel to the plane, so the intersection can be neither empty nor the whole line. Similar to the exams of 07/02/2025 (question 10) and 03/07/2026 (question 8).

Q: The intersection of the lines $r = (1, 0, 1) + t\,(1, 1, 0)$ and $r' = (0, 3, -1) + s\,(1, -1, 1)$ is:
+ the point $(2, 1, 1)$
- the point $(1, 0, 1)$
- the point $(0, 3, -1)$
- the point $(3, 2, 1)$
- empty: the lines are skew
= Equating: $1 + t = s$, $t = 3 - s$, $1 = -1 + s$. From the third $s = 2$, from the first $t = 1$, and the second works ($1 = 3 - 2$). The point is $(2, 1, 1)$. $(1, 0, 1)$ lies only on $r$, $(0, 3, -1)$ only on $r'$, $(3, 2, 1)$ is on $r$ but not on $r'$. Similar to the exams of 03/06/2025 and 10/07/2025 (question 10).

Q: Which pair of affine subspaces of $\R^3$ **certainly** has a non-empty intersection?
+ Two planes whose normal vectors are not proportional.
- Two lines with non-proportional directions.
- The planes $\{x + y + z = 1\}$ and $\{x + y + z = 2\}$.
- A line and a plane, when the direction of the line lies in the direction space of the plane.
- A line and a point.
= Two planes with non-proportional normals have different direction spaces, which add up to $\R^3$: by Proposition 23.10 they are incident. Two lines can be skew; the two planes with the same $x + y + z$ are parallel and disjoint; a line parallel to a plane may not touch it; a point can lie off a line. It is the argument used to "prove that $r$ and $\pi_3$ are incident" in the exams of 24/01/2024 and 10/07/2024.
```

## Exercises

::: exercise basic Cross product and Lagrange's identity
Let $v = (2, 1, -1)$ and $w = (1, 0, 3)$. (a) Compute $v \times w$ and check that it is orthogonal to $v$ and to $w$. (b) Check Lagrange's identity. (c) What is the area of the parallelogram with sides $v$ and $w$? (d) Check that $\det(v \mid w \mid v \times w) > 0$.
::: solution
(a) Rows side by side $(2, 1)$, $(1, 0)$, $(-1, 3)$:
- first component, I cover the first row: $1 \cdot 3 - 0 \cdot (-1) = 3$;
- second, I cover the second row: $2 \cdot 3 - 1 \cdot (-1) = 7$, I change the sign: $-7$;
- third, I cover the third row: $2 \cdot 0 - 1 \cdot 1 = -1$.

So $v \times w = (3, -7, -1)$. Checks: $\langle v \times w, v \rangle = 6 - 7 + 1 = 0$ and $\langle v \times w, w \rangle = 3 + 0 - 3 = 0$.

(b) $\lVert v \times w \rVert^2 = 9 + 49 + 1 = 59$; $\langle v, w \rangle = 2 + 0 - 3 = -1$, squared $1$; $\lVert v \rVert^2 = 4 + 1 + 1 = 6$ and $\lVert w \rVert^2 = 1 + 0 + 9 = 10$. Indeed $59 + 1 = 60 = 6 \cdot 10$.

(c) Area $= \lVert v \times w \rVert = \sqrt{59}$.

(d) By the proof of Proposition 23.4 the determinant equals $\lVert v \times w \rVert^2 = 59 > 0$. Direct check, expanding along the third column of $\begin{pmatrix} 2 & 1 & 3 \\ 1 & 0 & -7 \\ -1 & 3 & -1 \end{pmatrix}$:
$$3 \cdot (1 \cdot 3 - 0 \cdot (-1)) - (-7) \cdot (2 \cdot 3 - 1 \cdot (-1)) + (-1) \cdot (2 \cdot 0 - 1 \cdot 1) = 9 + 49 + 1 = 59.$$
:::

::: exercise basic The triangle and its plane
Let $A = (1, 0, 0)$, $B = (0, 2, 0)$, $C = (0, 0, 3)$. (a) Compute the area of the triangle $ABC$. (b) Write the Cartesian equation of the plane that contains the three points (it is part 1 of exercise 6 of tutoring sheet 4, 2025).
::: solution
(a) $\overrightarrow{AB} = (-1, 2, 0)$, $\overrightarrow{AC} = (-1, 0, 3)$. Rows side by side $(-1, -1)$, $(2, 0)$, $(0, 3)$:
$$\begin{aligned} \overrightarrow{AB} \times \overrightarrow{AC} &= \big(2 \cdot 3 - 0 \cdot 0,\ -((-1) \cdot 3 - (-1) \cdot 0),\ (-1) \cdot 0 - (-1) \cdot 2\big) \\ &= (6, 3, 2). \end{aligned}$$
The norm is $\sqrt{36 + 9 + 4} = 7$: the parallelogram has area $7$ and the triangle, which is half of it, has area $\frac 72$.

(b) The plane is $A + t\,\overrightarrow{AB} + s\,\overrightarrow{AC}$ and its normal vector is $(6, 3, 2)$. So $6x + 3y + 2z = d$ with $d = 6 \cdot 1 + 0 + 0 = 6$:
$$\pi = \{6x + 3y + 2z = 6\}.$$
Check: $B$ gives $3 \cdot 2 = 6$, $C$ gives $2 \cdot 3 = 6$. Dividing by 6 you get the form $x + \frac y2 + \frac z3 = 1$: the denominators are the points where the plane cuts the axes.
:::

::: exercise intermediate Computations without coordinates
All you know is that $v \times w = (1, 2, 3)$. Compute (a) $w \times v$; (b) $(2v + w) \times (v - 3w)$; (c) $\langle v \times w, v \rangle$; (d) $(v + w) \times (v + w)$.
::: solution
Use only anticommutativity, bilinearity and $u \times u = 0$.

(a) $w \times v = -\,v \times w = (-1, -2, -3)$.

(b) I expand as a product of binomials, **keeping the order** of the factors:
$$(2v + w) \times (v - 3w) = 2\,v \times v - 6\,v \times w + w \times v - 3\,w \times w.$$
Now $v \times v = w \times w = 0$ and $w \times v = -\,v \times w$, so the result is $-6\,(v \times w) - (v \times w) = -7\,(v \times w) = (-7, -14, -21)$.

(c) $0$: the cross product is orthogonal to $v$ (Proposition 22.15).

(d) $0$: it is the cross product of a vector with itself.
:::

::: exercise basic From parametric to Cartesian
Write the Cartesian equation of the plane $\pi = (2, 0, 1) + s\,(1, 2, 0) + t\,(0, 1, 1)$.
::: solution
Normal vector: rows side by side $(1, 0)$, $(2, 1)$, $(0, 1)$, so
$$(1, 2, 0) \times (0, 1, 1) = (2 \cdot 1 - 0 \cdot 1,\ -(1 \cdot 1 - 0 \cdot 0),\ 1 \cdot 1 - 2 \cdot 0) = (2, -1, 1).$$
The plane is $2x - y + z = d$, and imposing that it passes through $(2, 0, 1)$: $d = 4 - 0 + 1 = 5$. Result: $\pi = \{2x - y + z = 5\}$.

Check with $s = t = 1$: the point $(3, 3, 2)$ gives $6 - 3 + 2 = 5$.
:::

::: exercise basic From Cartesian to parametric
Write the line $r = \{x - y + z = 1,\ 2x + y - z = 2\}$ in parametric form and check the direction with the cross product of the normal vectors.
::: solution
Adding the two equations: $3x = 3$, that is $x = 1$. In the first: $1 - y + z = 1$, that is $z = y$. With $y = t$:
$$r = \{(1, t, t)\} = (1, 0, 0) + \Span((0, 1, 1)).$$
Check: $(1, -1, 1) \times (2, 1, -1)$ with rows side by side $(1, 2)$, $(-1, 1)$, $(1, -1)$ gives
$$\big((-1)(-1) - 1 \cdot 1,\ -(1 \cdot (-1) - 2 \cdot 1),\ 1 \cdot 1 - 2 \cdot (-1)\big) = (0, 3, 3),$$
which is proportional to $(0, 1, 1)$. The point $(1, 0, 0)$ satisfies $1 = 1$ and $2 = 2$.
:::

::: exercise intermediate Is it the same line?
Let $r_1 = (1, 0, 2) + \Span((1, -1, 1))$, $r_2 = (3, -2, 4) + \Span((-2, 2, -2))$ and $r_3 = (1, 1, 1) + \Span((1, -1, 1))$. Which ones coincide?
::: solution
I use Proposition 23.5.

- $r_1$ and $r_2$: the direction spaces coincide, because $(-2, 2, -2) = -2\,(1, -1, 1)$. The difference of the points is $(3, -2, 4) - (1, 0, 2) = (2, -2, 2) = 2\,(1, -1, 1)$, which lies in the direction space. So $r_1 = r_2$.
- $r_1$ and $r_3$: same direction space, but $(1, 1, 1) - (1, 0, 2) = (0, 1, -1)$ is not a multiple of $(1, -1, 1)$ (the first coordinate would force the multiple to be $0$). So $r_3 \neq r_1$: they are **distinct parallel** lines.
:::

::: exercise intermediate Three pairs of lines
For each pair decide whether the lines meet; if they do, find the point. (a) $r = (1, 2, 0) + t\,(1, 0, 1)$ and $r' = (0, 1, 1) + s\,(2, 1, 0)$. (b) The $x$ axis, that is $r = t\,(1, 0, 0)$, and $r' = (0, 1, 0) + s\,(0, 0, 1)$. (c) $r = t\,(1, 1, 1)$ and $r' = (1, 0, 0) + s\,(2, 2, 2)$.
::: solution
(a) I equate: $1 + t = 2s$, $2 = 1 + s$, $t = 1$. From the second $s = 1$, from the third $t = 1$; the first gives $2 = 2$, it works. Common point: $(2, 2, 1)$.

(b) I equate: $t = 0$, $0 = 1$, $0 = s$. The second equation is impossible: no common point. The directions $(1, 0, 0)$ and $(0, 0, 1)$ are not proportional, so the lines are not parallel: they are **skew**.

(c) The directions are proportional: $(2, 2, 2) = 2\,(1, 1, 1)$. Does the point $(1, 0, 0)$ lie on $r$? You would need $t = 1$ from the first coordinate and $t = 0$ from the second: no. So the lines are **distinct parallel** lines and do not meet.
:::

::: exercise intermediate Two planes that do not meet
Compute the intersection of the planes $\pi_1 = \{x + 2y - z = 1\}$ and $\pi_2 = \{-2x - 4y + 2z = 3\}$, first with Rouché–Capelli and then with a geometric argument. What changes if instead of $3$ there is $-2$?
::: solution
Augmented matrix and one Gauss move:
$$\left(\begin{array}{ccc|c} 1 & 2 & -1 & 1 \\ -2 & -4 & 2 & 3 \end{array}\right) \xrightarrow{R_2 \to R_2 + 2R_1} \left(\begin{array}{ccc|c} 1 & 2 & -1 & 1 \\ 0 & 0 & 0 & 5 \end{array}\right).$$
The second row says $0 = 5$: $\rk A = 1$ but $\rk(A \mid b) = 2$, so the intersection is **empty**.

Geometrically: the normal vectors $(1, 2, -1)$ and $(-2, -4, 2)$ are proportional, so the planes have the same direction space (they are parallel). Dividing the second equation by $-2$ you get $x + 2y - z = -\frac 32$, which is incompatible with $x + 2y - z = 1$.

With $-2$ instead of $3$ the second equation becomes $-2\,(x + 2y - z) = -2$, that is $x + 2y - z = 1$: it is **the same plane**, and the intersection is the whole of $\pi_1$.
:::

::: exercise intermediate A plane that depends on a parameter
For every $k \in \R$ let $\pi_k = \{x + ky + z = 1\}$ and let $r = \{t\,(1, 1, -1) \mid t \in \R\}$. For which $k$ does the line $r$ meet $\pi_k$? In that case, at which point?
::: solution
I substitute the generic point $(t, t, -t)$: $t + kt - t = 1$, that is $kt = 1$.

- If $k \neq 0$: $t = \frac 1k$ and the point is $\left(\frac 1k, \frac 1k, -\frac 1k\right)$. Check: $\frac 1k + k \cdot \frac 1k - \frac 1k = 1$.
- If $k = 0$: the equation becomes $0 = 1$, impossible. The line does not touch the plane $\pi_0 = \{x + z = 1\}$.

Reading with the direction spaces: the scalar product between the direction $(1, 1, -1)$ and the normal $(1, k, 1)$ equals $1 + k - 1 = k$. For $k \neq 0$ the direction is outside the direction space and Proposition 23.10 guarantees that they meet; for $k = 0$ the line is parallel to the plane and, since the origin (which lies on $r$) does not satisfy $x + z = 1$, it does not touch it.
:::

::: exercise hard The triple product
(a) Prove that for every $u, v, w \in \R^3$ we have $\langle u \times v, w \rangle = \det(u \mid v \mid w)$ (Martelli, Exercise 9.1.8). (b) Deduce that $u, v, w$ are linearly dependent if and only if $\langle u \times v, w \rangle = 0$. (c) Decide whether the points $A = (1, 0, 0)$, $B = (0, 1, 0)$, $C = (0, 0, 1)$, $D = (1, 1, -1)$ lie on the same plane.
::: solution
(a) I write $u \times v = (d_1, -d_2, d_3)$, with $d_i$ the minor of $(u \mid v)$ without row $i$. Then
$$\langle u \times v, w \rangle = d_1 w_1 - d_2 w_2 + d_3 w_3.$$
This is exactly the Laplace expansion of $\det(u \mid v \mid w)$ along the **third column**: the cofactor in position $(i, 3)$ is $(-1)^{i+3} d_i$, that is $+d_1$, $-d_2$, $+d_3$. It is the same argument as in the proof of Proposition 22.15, where instead of $w$ there was $v$.

(b) Three vectors of $\R^3$ are dependent if and only if the determinant of the matrix having them as columns is zero (lessons L09–L10). By (a) that determinant is $\langle u \times v, w \rangle$.

(c) The four points are coplanar if and only if $\overrightarrow{AB}$, $\overrightarrow{AC}$, $\overrightarrow{AD}$ are dependent. $\overrightarrow{AB} = (-1, 1, 0)$, $\overrightarrow{AC} = (-1, 0, 1)$, $\overrightarrow{AD} = (0, 1, -1)$. Expansion along the first row:
$$\det\begin{pmatrix} -1 & -1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & -1 \end{pmatrix} = -1 \cdot (0 \cdot (-1) - 1 \cdot 1) - (-1) \cdot (1 \cdot (-1) - 1 \cdot 0) + 0 = 1 - 1 = 0.$$
They are coplanar: indeed all four satisfy $x + y + z = 1$ (for $D$: $1 + 1 - 1 = 1$).
:::

::: exercise exam Three planes (exam of 15/01/2026, problem 12)
Let $\pi_1 = \{x + y + z = 2\}$, $\pi_2 = \{x - y - 2z = 1\}$ and $\pi_3 = \{x + y - z = 0\}$ be three planes in $\R^3$. (1) Find the point $P = \pi_1 \cap \pi_2 \cap \pi_3$. (2) Find a vector $v \in \R^3$ such that $\pi_1 \cap \pi_2 = P + \Span(v)$. (3) Find two orthogonal vectors $w_1$ and $w_2$ such that $\pi_3 = \Span(w_1, w_2)$. (4) Find the orthogonal projection of $v$ onto the plane $\pi_3$.
::: solution
(1) I subtract the third equation from the first: $(x + y + z) - (x + y - z) = 2 - 0$, that is $2z = 2$ and $z = 1$. Then the first gives $x + y = 1$ and the second $x - y = 1 + 2z = 3$. Adding: $2x = 4$, $x = 2$, and so $y = -1$. $P = (2, -1, 1)$. Check: $2 - 1 + 1 = 2$, $2 + 1 - 2 = 1$, $2 - 1 - 1 = 0$.

(2) $\pi_1 \cap \pi_2$ is a line (the normal vectors $(1, 1, 1)$ and $(1, -1, -2)$ are not proportional) that passes through $P$. Its direction is orthogonal to both normal vectors, so I can take their cross product (rows side by side $(1, 1)$, $(1, -1)$, $(1, -2)$):
$$v = \big(1 \cdot (-2) - 1 \cdot (-1),\ -(1 \cdot (-2) - 1 \cdot 1),\ 1 \cdot (-1) - 1 \cdot 1\big) = (-1, 3, -2).$$
Check: $-1 + 3 - 2 = 0$ and $-1 - 3 + 4 = 0$. So $\pi_1 \cap \pi_2 = (2, -1, 1) + \Span((-1, 3, -2))$.

(3) $\pi_3$ passes through the origin, so it is a vector subspace. I choose a vector that satisfies $x + y - z = 0$, for example $w_1 = (1, -1, 0)$. For the second I need a vector of $\pi_3$ (orthogonal to the normal $n_3 = (1, 1, -1)$) and orthogonal to $w_1$: the cross product $n_3 \times w_1$ does exactly this. Rows side by side $(1, 1)$, $(1, -1)$, $(-1, 0)$:
$$\begin{aligned} n_3 \times w_1 &= \big(1 \cdot 0 - (-1)(-1),\ -(1 \cdot 0 - 1 \cdot (-1)),\ 1 \cdot (-1) - 1 \cdot 1\big) \\ &= (-1, -1, -2). \end{aligned}$$
I take $w_2 = (1, 1, 2)$. Checks: $1 + 1 - 2 = 0$ (it lies in $\pi_3$) and $\langle w_1, w_2 \rangle = 1 - 1 + 0 = 0$.

(4) With the orthogonal basis $w_1, w_2$ the projection is (lesson L21)
$$p_{\pi_3}(v) = \frac{\langle v, w_1 \rangle}{\langle w_1, w_1 \rangle} w_1 + \frac{\langle v, w_2 \rangle}{\langle w_2, w_2 \rangle} w_2.$$
$\langle v, w_1 \rangle = -1 - 3 + 0 = -4$ and $\langle w_1, w_1 \rangle = 2$; $\langle v, w_2 \rangle = -1 + 3 - 4 = -2$ and $\langle w_2, w_2 \rangle = 6$. So
$$p_{\pi_3}(v) = -2\,(1, -1, 0) - \tfrac 13\,(1, 1, 2) = \left(-\tfrac 73,\ \tfrac 53,\ -\tfrac 23\right).$$
Check: $v - p_{\pi_3}(v) = \left(\frac 43, \frac 43, -\frac 43\right) = \frac 43\,(1, 1, -1)$ is proportional to the normal of $\pi_3$, as it must be.
:::

::: exercise exam A line, two planes and a meeting point
Let $\pi_1 = \{x + y - z = 2\}$ and $\pi_2 = \{x - y + 2z = 1\}$. (1) Write the line $r = \pi_1 \cap \pi_2$ in the form $P + \Span(v)$. (2) Prove that $r$ and the plane $\pi_3 = \{x + y + z = 0\}$ are incident. (3) Find the intersection point. (4) Write the Cartesian equation of the plane that contains $r$ and the origin.
::: solution
(1) I add the equations: $2x + z = 3$, so $z = 3 - 2x$. From the first $y = 2 - x + z = 2 - x + 3 - 2x = 5 - 3x$. With $x = t$:
$$r = \{(t,\ 5 - 3t,\ 3 - 2t)\} = (0, 5, 3) + \Span((1, -3, -2)).$$
Checks: $(0, 5, 3)$ gives $0 + 5 - 3 = 2$ and $0 - 5 + 6 = 1$; moreover $(1, 1, -1) \times (1, -1, 2) = (1 \cdot 2 - (-1)(-1),\ -(1 \cdot 2 - (-1) \cdot 1),\ 1 \cdot (-1) - 1 \cdot 1) = (1, -3, -2)$.

(2) The scalar product between the direction $(1, -3, -2)$ and the normal $(1, 1, 1)$ of $\pi_3$ equals $1 - 3 - 2 = -4 \neq 0$: the direction does not lie in the direction space of $\pi_3$, so $\operatorname{giac}(r) + \operatorname{giac}(\pi_3) = \R^3$ and, by Proposition 23.10, $r$ and $\pi_3$ are incident.

(3) I substitute the generic point: $t + (5 - 3t) + (3 - 2t) = 0$, that is $8 - 4t = 0$ and $t = 2$. The point is $Q = (2, -1, -1)$. Check: $2 - 1 - 1 = 0$, and $Q$ also lies on $\pi_1$ ($2 - 1 + 1 = 2$) and on $\pi_2$ ($2 + 1 - 2 = 1$).

(4) The plane contains the origin $O$, the point $P = (0, 5, 3)$ and the direction $v = (1, -3, -2)$: it is $O + s\,\overrightarrow{OP} + t\,v$. Normal vector (rows side by side $(1, 0)$, $(-3, 5)$, $(-2, 3)$):
$$\begin{aligned} v \times \overrightarrow{OP} &= \big((-3) \cdot 3 - (-2) \cdot 5,\ -(1 \cdot 3 - (-2) \cdot 0),\ 1 \cdot 5 - (-3) \cdot 0\big) \\ &= (1, -3, 5). \end{aligned}$$
It passes through the origin, so $d = 0$: the plane is $x - 3y + 5z = 0$. Check: $P$ gives $-15 + 15 = 0$ and $Q$ gives $2 + 3 - 5 = 0$.
:::

## Review questions

::: question What does Lagrange's identity say?
$\lVert v \times w \rVert^2 + \langle v, w \rangle^2 = \lVert v \rVert^2 \lVert w \rVert^2$ for every $v, w \in \R^3$ (Proposition 23.1). It is proved by expanding the squares.
:::

::: question Why is the length of $v \times w$ the area of the parallelogram with sides $v$ and $w$?
Because, substituting $\langle v, w \rangle = \lVert v \rVert \lVert w \rVert \cos\vartheta$ into Lagrange's identity, you get $\lVert v \times w \rVert^2 = \lVert v \rVert^2 \lVert w \rVert^2 \sin^2\vartheta$; with $\sin\vartheta \ge 0$ (because $\vartheta \in [0, \pi]$) what is left is $\lVert v \rVert \lVert w \rVert \sin\vartheta$, which is base times height.
:::

::: question How do you choose the orientation of $v \times w$? What is a positive basis?
With the right-hand rule: thumb on $v$, index finger on $w$, the middle finger shows $v \times w$. In formulas: if $v, w$ are independent, $\det(v \mid w \mid v \times w) > 0$, that is $v, w, v \times w$ is a positive basis (Proposition 23.4). The determinant is exactly $\lVert v \times w \rVert^2$.
:::

::: question Is the cross product commutative? Associative? Bilinear?
It is not commutative but anticommutative: $v \times w = -\,w \times v$. It is not associative: $(e_1 \times e_2) \times e_2 = -e_1$ but $e_1 \times (e_2 \times e_2) = 0$. It is bilinear: linear in each of the two factors.
:::

::: question What is the difference between Cartesian form and parametric form?
The Cartesian (implicit) form describes the subspace with equations: it is used to decide whether a point lies in it. The parametric (explicit) form describes it with a point and some generators, as parameters vary: it is used to produce the points and to read off the dimension.
:::

::: question What is an affine subspace? And its direction space?
A subset of the form $x + W = \{x + v \mid v \in W\}$, with $W$ a vector subspace. $W$ is the direction space, determined by the subspace (it is made of the differences of two of its points); $x$ is any of its points. The dimension is $\dim W$.
:::

::: question When are $x + W$ and $x' + W'$ the same affine subspace?
If and only if $W = W'$ and $x - x' \in W$ (Proposition 23.5).
:::

::: question What is the dimension of the solutions of $Ax = b$?
If $\rk A = \rk(A \mid b)$, the solutions form an affine subspace of dimension $n - \rk A$, where $n$ is the number of unknowns; if $\rk A < \rk(A \mid b)$ there are no solutions (Rouché–Capelli).
:::

::: question How do you go from the parametric form to the Cartesian form of a plane of $\R^3$, and why does it work?
You compute $(a, b, c) = v_1 \times v_2$ and find $d$ by substituting $P_0$ into $ax + by + cz = d$. It works because $v_1 \times v_2$ is orthogonal to $v_1$ and $v_2$, so $\langle v_1 \times v_2, P \rangle$ is the same number for all the points $P = P_0 + t v_1 + s v_2$.
:::

::: question How many equations are needed for a line of $\R^3$? And for a plane?
A line has dimension 1: you need $3 - 1 = 2$ independent equations. A plane has dimension 2: $3 - 2 = 1$ equation is enough.
:::

::: question How do you compute an intersection in the three cases?
Cartesian with Cartesian: you put the equations together. Cartesian with parametric: you substitute the generic point into the equations. Parametric with parametric: you equate the generic points (with parameters with different names) and solve the system, checking all the equations.
:::

::: question Why is the intersection of two affine subspaces, if it is not empty, an affine subspace?
If $x \in S \cap S'$, you write $S = x + W$ and $S' = x + W'$; then $S \cap S' = x + (W \cap W')$, and $W \cap W'$ is a vector subspace.
:::

::: question What does Proposition 23.10 say? Does the converse hold?
If $\operatorname{giac}(S) + \operatorname{giac}(S') = \R^n$, then $S$ and $S'$ meet. The converse is false: two lines of $\R^3$ can meet even if their direction spaces only add up to a plane (for example the $x$ and $y$ axes).
:::

::: question What are two skew lines?
Two lines in space that do not meet and are not parallel (non-proportional directions). In the plane they do not exist.
:::

## Glossary

```glossary
Cross product | The vector $v \times w = (v_2 w_3 - v_3 w_2,\ v_3 w_1 - v_1 w_3,\ v_1 w_2 - v_2 w_1)$, defined only in $\R^3$.
Lagrange's identity | $\lVert v \times w \rVert^2 + \langle v, w \rangle^2 = \lVert v \rVert^2 \lVert w \rVert^2$ (Proposition 23.1).
Parallelogram with sides $v$ and $w$ | The figure with vertices $0$, $v$, $v + w$, $w$; its area is $\lVert v \times w \rVert = \lVert v \rVert \lVert w \rVert \sin\vartheta$.
Positive basis | Basis $u_1, u_2, u_3$ of $\R^3$ with $\det(u_1 \mid u_2 \mid u_3) > 0$; for example $v, w, v \times w$ with $v, w$ independent.
Right-hand rule | Thumb on $v$, index finger on $w$: the middle finger shows the orientation of $v \times w$.
Anticommutativity | $v \times w = -\,w \times v$; in particular $v \times v = 0$.
Bilinearity | Linearity in each of the two factors: $(v + v') \times w = v \times w + v' \times w$, $(\lambda v) \times w = \lambda\,(v \times w)$, and the same on the right.
Cartesian form | Description of a subspace as the set of solutions of a system of linear equations (implicit).
Parametric form | Description of a subspace with a point and some generators, as parameters vary (explicit).
Affine subspace | A set $x + W = \{x + v \mid v \in W\}$ with $W$ a vector subspace: a translated vector subspace.
Direction space (giacitura) | The vector subspace $W = \operatorname{giac}(S)$ of an affine subspace $S = x + W$: the set of the differences of two points of $S$.
Dimension of an affine subspace | The dimension of the direction space; for a non-empty $\{Ax = b\}$ it is $n - \rk A$.
Normal vector | For the plane $ax + by + cz = d$, the vector $(a, b, c)$, orthogonal to all the vectors of the direction space.
Hyperplane | Affine subspace of dimension $n - 1$ in $\R^n$, of the form ${}^t w\, x + b = 0$ with $w \neq 0$.
Linear classifier | Rule that assigns a data vector $x$ to a class according to the sign of ${}^t w\, x + b$.
Incident subspaces | Two affine subspaces with non-empty intersection.
Parallel subspaces | Two affine subspaces in which the direction space of one is contained in that of the other (Martelli, §9.2.5).
Skew lines | Two lines in space that are neither incident nor parallel.
```

## Checklist

```checklist
- I can compute $v \times w$ with the "cover the row" scheme without getting the sign of the middle component wrong, and I can check the result with scalar products.
- I can state Lagrange's identity and use it to find $\lVert v \times w \rVert$ from norms and scalar product.
- I can compute the area of a parallelogram and of a triangle in space with the cross product.
- I can explain the right-hand rule and what it means that $v, w, v \times w$ is a positive basis.
- I can use anticommutativity and bilinearity, and I know that the cross product is not associative.
- I can go from the Cartesian form to the parametric one (Gauss) and from the parametric form to the Cartesian one (cross product for planes, eliminating the parameter for lines).
- I can recognise when two expressions $x + W$ and $x' + W'$ describe the same affine subspace.
- I can compute the dimension of an affine subspace with Rouché–Capelli and I know how many equations are needed for lines and planes of $\R^3$.
- I can intersect two subspaces in the three cases (Cartesian and Cartesian, Cartesian and parametric, parametric and parametric) and I always check the result.
- I can use Proposition 23.10 to prove that a line and a plane are incident, and I know that the converse is false.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 23 "Lo spazio euclideo II", pp. 116–121: sections 23.A (more properties of the cross product), 23.B (Cartesian and parametric form), 23.C (affine spaces) and 23.D (intersections), followed in order with the original numbering (Propositions 23.1, 23.2, 23.4, 23.5, 23.10, Corollary 23.3, Definition 23.7, Examples 23.6, 23.8, 23.9). The initial reminder comes from lesson 22 (Definition 22.14, Propositions 22.15 and 22.16, Corollary 22.17, pp. 114–115) and from lesson 12 (Definition 12.5, Theorem 12.6). This lesson of the handouts has no exercise section.
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §9.1 (cross product; the proofs of Propositions 23.2 and 23.4 and Exercise 9.1.8 on the triple product come from there) and §9.2 (affine subspaces, intersections with the proof of Proposition 9.2.7 = 23.10, relative positions).
- **Exam papers** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): text reported from 07/02/2025 (question 10) and 15/01/2026 (problem 12), with solutions written for these notes; the exam sessions of 24/01/2024, 10/07/2024, 06/09/2024, 03/06/2025, 10/07/2025, 02/09/2025 and 03/07/2026 are cited by type of question. Tutoring sheet 4, 2025 (exercise 6).
- The **"Beyond the handouts"** parts (proof of Proposition 23.5, lines from parametric to Cartesian, plane through three points, relative positions, additional examples and exercises) are additions in these notes to connect the lesson to the book and to the exam.
