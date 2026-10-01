---
course: MDAG
module: AG
lesson: L24
title: Euclidean space III
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Part 2 (modB) · Linear Algebra and Geometry · Channels A, B and C · Lesson L24
description: >-
  Notes on lesson L24 of Linear Algebra and Geometry (MDAG, part 2): angles between lines, between a line and a plane
  and between planes, distances between points, between a point and a line, between skew lines and between a point
  and a plane, with exam-style quizzes and worked exercises.
lede: >-
  When two lines or planes meet you measure the angle they form; when they do not meet you measure how far apart they
  are. Here you find the handouts' definitions and the formulas that turn them into a computation of a few lines:
  projections, normal vectors, cross product and determinant. They are among the most frequent questions of the exam.
material: handouts
facts:
  Handouts: lesson 24 · pp. 122–128
  Book: Martelli, §9.2.9, §9.2.10 and §8.1
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 120–150 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 24 "Lo spazio euclideo III"; B. Martelli, Geometria e algebra lineare, §8.1 and §9.2
italian_file: L24_spazio_euclideo_3.html
html_notes: notes/MDAG/L24_euclidean_space_3.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L24_spazio_euclideo_3.md
---

## In brief

- If two affine subspaces **meet**, you measure their **angle**; if they are **disjoint**, their **distance**.
- **Angle between two** incident **lines**: it is the angle between the direction vectors. There are two candidates, $\vartheta$ and $\pi - \vartheta$: you choose the one that is **acute or right**, that is $\cos\vartheta = \frac{\lvert \langle v, v' \rangle \rvert}{\lVert v \rVert \lVert v' \rVert}$.
- **Angle between a line and a plane**: it is the angle between the direction $v$ of the line and its **orthogonal projection** onto the plane. It can also be computed as $\frac{\pi}{2}$ minus the acute angle with the **normal vector** (Proposition 24.4).
- **Angle between two planes** (dihedral angle): it is the acute (or right) angle between the lines spanned by the **normal vectors** (Proposition 24.7).
- **Point–line distance**: $d(P, r) = \frac{\lVert v_0 \times (P - P_0) \rVert}{\lVert v_0 \rVert}$, that is the area of the parallelogram divided by the base.
- **Distance between lines**: if they are parallel it is the distance of a point from the other line; if they are **skew** it equals $\frac{\lvert \det(v \mid v' \mid P_0' - P_0) \rvert}{\lVert v \times v' \rVert}$, that is volume divided by base area.
- **Point–plane distance**: $d(P_0, \pi) = \frac{\lvert a x_0 + b y_0 + c z_0 - d \rvert}{\sqrt{a^2 + b^2 + c^2}}$.
- At the exam there is no calculator: angles are left as $\arccos\frac 13$, distances as $\frac{2}{7}\sqrt{133}$, and the special values ($\cos\frac{\pi}{3} = \frac 12$, $\cos\frac{\pi}{4} = \frac{\sqrt 2}{2}$, …) must be recognised.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## Angles and distances: the idea (p. 122)

Think of two roads. If they **cross**, the natural question is: at what **angle**? If instead one passes on a **flyover** above the other, they do not touch, but they are not parallel either: the natural question is how **far apart** they are (the height of the flyover). In space the lines of the flyover are called **skew**.

Lesson L23 defined **incident** affine subspaces ($S \cap S' \neq \emptyset$). The handouts open lesson 24 like this: for two incident subspaces you study the **angle** of the intersection, for two non-incident subspaces the **distance**.

| Pair | If they meet | If they do not meet |
|---|---|---|
| two lines | angle (Definition 24.1) | distance (Definition 24.13) |
| line and plane | angle (Definition 24.2) | distance (beyond the handouts: see the section on the plane) |
| two planes | dihedral angle (Definition 24.6) | distance (beyond the handouts) |
| a point and a line or a plane | distance zero | distance (Definitions 24.10 and 24.16) |

Everything is based on the Euclidean scalar product of $\R^3$ and on the notions of lesson L20. In particular the **angle between two** non-zero **vectors** is the number $\vartheta \in [0, \pi]$ with

$$\cos\vartheta = \frac{\langle v, w \rangle}{\lVert v \rVert \lVert w \rVert}$$

(Definition 20.12), and the angle is acute, right or obtuse according to whether $\langle v, w \rangle$ is positive, zero or negative.

Without a calculator, these values must be recognised on the spot:

| Angle $\vartheta$ | In degrees | $\cos\vartheta$ | $\sin\vartheta$ |
|---|---|---|---|
| $0$ | $0^\circ$ | $1$ | $0$ |
| $\frac{\pi}{6}$ | $30^\circ$ | $\frac{\sqrt 3}{2}$ | $\frac 12$ |
| $\frac{\pi}{4}$ | $45^\circ$ | $\frac{\sqrt 2}{2} = \frac{1}{\sqrt 2}$ | $\frac{\sqrt 2}{2}$ |
| $\frac{\pi}{3}$ | $60^\circ$ | $\frac 12$ | $\frac{\sqrt 3}{2}$ |
| $\frac{\pi}{2}$ | $90^\circ$ | $0$ | $1$ |
| $\frac{2\pi}{3}$ | $120^\circ$ | $-\frac 12$ | $\frac{\sqrt 3}{2}$ |
| $\frac{3\pi}{4}$ | $135^\circ$ | $-\frac{\sqrt 2}{2}$ | $\frac{\sqrt 2}{2}$ |
| $\pi$ | $180^\circ$ | $-1$ | $0$ |

The sine column is needed for the shortcut for the angle between a line and a plane (further on).

For the other values the answer stays written as $\arccos(\dots)$: in the exam quizzes answers like $\arccos\frac 13$ or $\arccos\frac{6}{\sqrt{42}}$ appear precisely.

## Angle between two lines (p. 122)

The handouts consider three cases separately: two lines, a line and a plane, two planes. The first is the most direct.

> [!DEF] 24.1 · Angle between lines
> Let $r$ and $r'$ be two lines in $\R^3$ that meet at a point $P$. We have $r = P + \Span(v)$ and $r' = P + \Span(v')$, and we define the **angle between $r$ and $r'$** as the angle $\vartheta$ formed by $v$ and $v'$.

Piece by piece:

- the lines must **meet** at a point $P$: for two skew lines this definition does not apply;
- $v$ and $v'$ are **direction vectors**: they span the direction spaces of the two lines;
- depending on how $v$ and $v'$ are chosen there are **two** possible angles, $\vartheta$ and $\pi - \vartheta$: replacing $v$ with $-v$ turns an acute angle into an obtuse one. The handouts always choose the angle that is **acute or right**: if $\vartheta$ is obtuse, you take $\pi - \vartheta$.

Since $\cos(\pi - \vartheta) = -\cos\vartheta$, choosing the acute angle means taking the absolute value of the scalar product:

$$\cos\vartheta = \frac{\lvert \langle v, v' \rangle \rvert}{\lVert v \rVert \lVert v' \rVert}.$$

```graph
title: Two incident lines form two angles, $\vartheta$ and $\pi - \vartheta$: the acute one is chosen
axes: no
grid: no
x: -3 3
y: -2 2.4
line: -2.5 0 2.5 0 | accent | $r$ | ne
line: -1.8 -1.8 1.8 1.8 | blue | $r'$ | se
vector: 0 0 1.6 0 | accent | thick | $v$ | s
vector: 0 0 1.2 1.2 | blue | thick | $v'$ | nw
arc: 0 0 0.8 0 pi/4 | amber | $\vartheta$
arc: 0 0 0.5 pi/4 pi | grey | $\pi - \vartheta$
point: 0 0 | $P$ | sw
```

> [!EXAMPLE] Two lines forming an angle of $\frac{\pi}{3}$
> The lines $r = (1, 0, 0) + t\,(1, 1, 0)$ and $r' = (1, 0, 0) + s\,(0, 1, 1)$ both pass through $P = (1, 0, 0)$. With $v = (1, 1, 0)$ and $v' = (0, 1, 1)$:
> - $\langle v, v' \rangle = 0 + 1 + 0 = 1$;
> - $\lVert v \rVert = \sqrt 2$ and $\lVert v' \rVert = \sqrt 2$;
> - $\cos\vartheta = \frac{1}{\sqrt 2 \cdot \sqrt 2} = \frac 12$, so $\vartheta = \frac{\pi}{3}$ ($60^\circ$).

> [!EXAMPLE] When the computation gives an obtuse angle
> The lines through the origin with directions $v = (1, 0, 0)$ and $v' = (-1, 1, 0)$: $\cos = \frac{-1}{1 \cdot \sqrt 2} = -\frac{\sqrt 2}{2}$, that is $\frac{3\pi}{4}$, which is obtuse. The angle between the **lines** is $\pi - \frac{3\pi}{4} = \frac{\pi}{4}$: the same one you get with the absolute value, $\frac{\lvert -1 \rvert}{\sqrt 2} = \frac{\sqrt 2}{2}$.

> [!PITFALL] Angle between vectors and angle between lines
> Between two **vectors** the angle can be obtuse (it lies in $[0, \pi]$). Between two **lines** it cannot: the result must lie in $\left[0, \frac{\pi}{2}\right]$. If you find a negative cosine, you are looking at the angle between the vectors: remove the minus sign.

## Angle between a line and a plane (pp. 122–124)

Imagine a pole stuck crookedly into the floor. The angle with the floor is measured by looking at the **shadow** of the pole when the sun is exactly overhead: the shadow is the orthogonal projection of the pole onto the floor, and the angle we want is the one between the pole and its shadow.

> [!DEF] 24.2 · Angle between a line and a plane
> Let $r$ be a line and $\pi$ a plane that meet at a point $P$. We define the angle $\vartheta$ between $r$ and $\pi$ as follows. We translate the origin so that $P = 0$. At this point $\pi$ is a vector subspace and we define the vector $v' = p_\pi(v)$ by taking the orthogonal projection of $v$ onto $\pi$. If $v' = 0$ we set $\vartheta = \frac{\pi}{2}$, otherwise we define $\vartheta$ as the angle between $v$ and $v'$.

Piece by piece:

- $v$ is a direction vector of the line: $r = P + \Span(v)$;
- "we translate the origin to $P$" only serves to turn $\pi$ into a vector subspace, so that projecting makes sense; in practice you use the **direction space** of $\pi$;
- $p_\pi(v)$ is the **orthogonal projection** of $v$ onto the plane (lesson L21): the "shadow" of $v$;
- if the shadow is zero, $v$ is orthogonal to the plane and the angle is right;
- in other words, if $r$ is not orthogonal to $\pi$, projecting $r$ orthogonally onto $\pi$ you get a line $r' \subset \pi$, and $\vartheta$ is the acute angle between $r$ and $r'$.

The angle defined in this way is **automatically acute or right**: since $v - p_\pi(v)$ is orthogonal to $p_\pi(v)$, we have $\langle v, p_\pi(v) \rangle = \lVert p_\pi(v) \rVert^2 \ge 0$, so the cosine is never negative.

To compute the projection, the handouts recall the formula of lesson L21: if $v_1, v_2$ is an **orthogonal basis** of the plane (you always get one with Gram–Schmidt),

$$p_\pi(v) = \frac{\langle v, v_1 \rangle}{\langle v_1, v_1 \rangle} v_1 + \frac{\langle v, v_2 \rangle}{\langle v_2, v_2 \rangle} v_2.$$

> [!EXAMPLE] 24.3
> Consider $\pi = \{x + y - z = 0\} \subset \R^3$ and the vector $e_3$. We first look for an orthogonal basis for $\pi$ and find for example
> $$v_1 = \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix}, \qquad v_2 = \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}.$$
> At this point we determine the orthogonal projection onto $\pi$ of a generic vector of $\R^3$ with the previous formula:
> $$p_\pi\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \frac{x + y + 2z}{6} \begin{pmatrix} 1 \\ 1 \\ 2 \end{pmatrix} + \frac{x - y}{2} \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix} = \frac 13 \begin{pmatrix} 2x - y + z \\ -x + 2y + z \\ x + y + 2z \end{pmatrix}.$$
> So the matrix associated with $p_\pi$ in the canonical basis is
> $$\frac 13 \begin{pmatrix} 2 & -1 & 1 \\ -1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}.$$
> With this matrix we can compute the orthogonal projection onto $\pi$ of any vector of $\R^3$. In particular $p_\pi(e_3) = \frac 13 (1, 1, 2)$, and then the angle between $e_3$ and $\pi$ is
> $$\vartheta = \arccos \frac{\langle (1, 1, 2), (0, 0, 1) \rangle}{\lVert (1, 1, 2) \rVert \, \lVert (0, 0, 1) \rVert} = \arccos \frac{2}{\sqrt 6} = \arccos \frac{\sqrt 6}{3} \simeq 0.615,$$
> which corresponds to an angle of about $35.3^\circ$.

Let us look at the steps that the example takes for granted.

1. **Where the orthogonal basis comes from.** A first vector of the plane is found by eye: $v_2 = (1, -1, 0)$ satisfies $1 - 1 - 0 = 0$. The second must lie in the plane and be orthogonal to $v_2$: the cross product between the normal vector $n = (1, 1, -1)$ and $v_2$ does exactly this (it is orthogonal to $n$, so it lies in the plane, and it is orthogonal to $v_2$). The computation gives $n \times v_2 = (-1, -1, -2)$, that is, changing sign, $v_1 = (1, 1, 2)$. Check: $1 + 1 - 2 = 0$ and $\langle v_1, v_2 \rangle = 1 - 1 + 0 = 0$.
2. **The coefficients.** $\langle (x, y, z), v_1 \rangle = x + y + 2z$ and $\langle v_1, v_1 \rangle = 1 + 1 + 4 = 6$; $\langle (x, y, z), v_2 \rangle = x - y$ and $\langle v_2, v_2 \rangle = 2$.
3. **The sum.** First component:
   $$\frac{x + y + 2z}{6} + \frac{x - y}{2} = \frac{x + y + 2z + 3x - 3y}{6} = \frac{4x - 2y + 2z}{6} = \frac{2x - y + z}{3}.$$
   The other two in the same way.
4. **The angle.** The projection of $e_3$ is the third column of the matrix, $\frac 13 (1, 1, 2)$. For the angle the factor $\frac 13$ does not matter (multiplying a vector by a positive number does not change angles): $\langle (1, 1, 2), e_3 \rangle = 2$, $\lVert (1, 1, 2) \rVert = \sqrt 6$, $\lVert e_3 \rVert = 1$. Finally $\frac{2}{\sqrt 6} = \frac{2\sqrt 6}{6} = \frac{\sqrt 6}{3}$.

With the Gauss calculator you can redo point 1 with the Gram–Schmidt algorithm: the rows are any two vectors of the plane, $(1, -1, 0)$ and $(1, 0, 1)$ (check that they satisfy $x + y - z = 0$). The tool finds $u_2 = \left(\frac 12, \frac 12, 1\right)$ and in the final basis rewrites it without fractions as $(1, 1, 2)$: it is exactly the $v_1$ of the handouts.

```widget gauss
title: An orthogonal basis of the plane $x + y - z = 0$ with Gram–Schmidt
matrice: 1 -1 0; 1 0 1
modo: gram-schmidt
```

### The normal-vector shortcut

For a plane there is a special vector that does not lie **inside** the plane: the normal vector. The angle with the plane and the angle with the normal are complementary.

> [!PROP] 24.4
> The angle between $v$ and the plane $\pi$ and the angle between $v$ and the vector orthogonal to $\pi$ that forms an acute angle with $v$ add up to $\frac{\pi}{2}$.

```graph
title: Side view: the plane $\pi$ is the violet line, $n$ is orthogonal to it; $\vartheta$ (between $v$ and its shadow) and $\alpha$ (between $v$ and $n$) add up to a right angle
axes: no
grid: no
x: -3 3
y: -0.8 2.8
line: 3 0 -2.6 0 | violet | thick | $\pi$ | ne
vector: 0 0 0 2.4 | amber | thick | $n$ | e
vector: 0 0 2 1.414 | accent | thick | $v$ | ne
vector: 0 0 2 0 | blue | thick | $p_\pi(v)$ | s
segment: 2 1.414 2 0 | grey | dashed
arc: 0 0 0.9 0 0.6155 | amber | $\vartheta$
arc: 0 0 1.4 0.6155 pi/2 | grey | $\alpha$
```

> [!PROOF] of Proposition 24.4 (beyond the handouts)
> 1. I write $v = p + q$ with $p = p_\pi(v)$ in the direction space of the plane and $q = v - p$ parallel to the normal vector (it is the orthogonal decomposition of lesson L21). I choose the normal vector $n$ with $\langle v, n \rangle \ge 0$, that is forming an acute angle with $v$: then $q$ points the same way as $n$.
> 2. $\cos\vartheta = \frac{\langle v, p \rangle}{\lVert v \rVert \lVert p \rVert} = \frac{\lVert p \rVert^2}{\lVert v \rVert \lVert p \rVert} = \frac{\lVert p \rVert}{\lVert v \rVert}$, because $\langle v, p \rangle = \langle p + q, p \rangle = \lVert p \rVert^2$.
> 3. In the same way, calling $\alpha$ the angle between $v$ and $n$: $\cos\alpha = \frac{\langle v, n \rangle}{\lVert v \rVert \lVert n \rVert} = \frac{\lVert q \rVert}{\lVert v \rVert}$, because $\langle v, n \rangle = \langle q, n \rangle = \lVert q \rVert \lVert n \rVert$ ($q$ and $n$ are parallel and point the same way).
> 4. By Pythagoras $\lVert p \rVert^2 + \lVert q \rVert^2 = \lVert v \rVert^2$, so $\cos^2\vartheta + \cos^2\alpha = 1$, that is $\cos\alpha = \sin\vartheta$ (both angles lie in $\left[0, \frac{\pi}{2}\right]$). Two acute angles with $\cos\alpha = \sin\vartheta$ are complementary: $\vartheta + \alpha = \frac{\pi}{2}$. $\square$

> [!EXAMPLE] 24.5
> In the previous example we can also compute the angle $\vartheta$ as $\frac{\pi}{2} - \alpha$, where $\alpha$ is the angle between $e_3$ and the vector $n = (-1, -1, 1)$, which is orthogonal to $\pi$. Then
> $$\begin{aligned} \vartheta &= \frac{\pi}{2} - \arccos \frac{\langle (-1, -1, 1), (0, 0, 1) \rangle}{\lVert (-1, -1, 1) \rVert \, \lVert (0, 0, 1) \rVert} \\ &= \frac{\pi}{2} - \arccos \frac{1}{\sqrt 3} \simeq 1.570 - 0.955 = 0.615. \end{aligned}$$
> We get the same result.

Why $n = (-1, -1, 1)$ and not $(1, 1, -1)$, which is the vector of the coefficients of $x + y - z = 0$? Because the proposition asks for the normal vector that forms an **acute** angle with $v = e_3$: $\langle (1, 1, -1), e_3 \rangle = -1 < 0$, while $\langle (-1, -1, 1), e_3 \rangle = 1 > 0$. With the absolute value the problem disappears.

> [!BEYOND] Two formulas without Gram–Schmidt
> **The projection onto a plane.** If $n$ is a normal vector of the plane $\pi$ (through the origin), the projection onto $\pi$ is $v$ minus its projection onto the normal:
> $$p_\pi(v) = v - \frac{\langle v, n \rangle}{\langle n, n \rangle}\, n.$$
> In Example 24.3: $e_3 - \frac{-1}{3}(1, 1, -1) = \left(\frac 13, \frac 13, 1 - \frac 13\right) = \frac 13 (1, 1, 2)$, as before.
>
> **The line–plane angle in one line.** From Proposition 24.4 and from point 4 of the proof:
> $$\sin\vartheta = \frac{\lvert \langle v, n \rangle \rvert}{\lVert v \rVert \lVert n \rVert}.$$
> In Example 24.3: $\sin\vartheta = \frac{1}{1 \cdot \sqrt 3}$, so $\vartheta = \arcsin\frac{1}{\sqrt 3}$, which is the same angle as $\arccos\frac{\sqrt 6}{3}$ because $\left(\frac{1}{\sqrt 3}\right)^2 + \left(\frac{\sqrt 6}{3}\right)^2 = \frac 13 + \frac 23 = 1$.

> [!METHOD] The angle between a line and a plane
> 1. Check that they meet (if the line is parallel to the plane, the angle is not defined).
> 2. Take the direction vector $v$ of the line and a normal vector $n$ of the plane (the coefficients of the Cartesian equation, or $v_1 \times v_2$ if the plane is in parametric form).
> 3. **The handouts' method**: compute $p_\pi(v)$ and then the angle between $v$ and $p_\pi(v)$. **Quick method**: $\sin\vartheta = \frac{\lvert \langle v, n \rangle \rvert}{\lVert v \rVert \lVert n \rVert}$.
> 4. If $\langle v, n \rangle = 0$ the line is parallel to the plane (or lies in it); if $v$ is proportional to $n$ the angle is $\frac{\pi}{2}$.

## Angle between two planes (p. 124)

Open a book halfway: the two halves of the cover are two planes that meet in the line of the spine. The opening of the book is measured by looking from above, that is by cutting with a plane **perpendicular** to the spine: the cut is made of two segments, and the angle between those segments is the opening.

> [!DEF] 24.6 · Angle between planes
> Let $\pi_1$ and $\pi_2$ be two planes that meet in a line $r = \pi_1 \cap \pi_2$. The (**dihedral**) angle between $\pi_1$ and $\pi_2$ is defined as follows: take two lines $s_1 \subset \pi_1$ and $s_2 \subset \pi_2$ that are incident and both orthogonal to $r$; the dihedral angle between $\pi_1$ and $\pi_2$ is by definition the angle $\alpha$ between $s_1$ and $s_2$. In fact you get two angles $\alpha$ and $\pi - \alpha$, and as always we choose the acute (or right) one.

The definition is geometric but awkward to use. The next proposition turns it into a computation.

> [!PROP] 24.7
> Let $v_1$ and $v_2$ be two non-zero vectors orthogonal to $\pi_1$ and $\pi_2$. The angle $\alpha$ between $\pi_1$ and $\pi_2$ is equal to the acute (or right) angle between the lines spanned by $v_1$ and $v_2$.

> [!IDEA] Why the normals can be used
> Look at everything in the plane perpendicular to the line $r$ (the "cut" of the book). Inside it lie the two lines $s_1$ and $s_2$ of the definition, and so do the two normals $v_1$ and $v_2$ (they are orthogonal to $r$, because $r$ lies in both planes). In that plane $v_1$ is perpendicular to $s_1$ and $v_2$ to $s_2$: turning two lines by a right angle does not change the angle between them. Martelli's book leaves this fact as an exercise (Exercise 9.2.34).

So for two planes $\pi_1 = \{a_1 x + b_1 y + c_1 z = d_1\}$ and $\pi_2 = \{a_2 x + b_2 y + c_2 z = d_2\}$ the dihedral angle is simply the acute (or right) angle between the lines spanned by the **vectors of the coefficients** $(a_1, b_1, c_1)$ and $(a_2, b_2, c_2)$:

$$\cos\alpha = \frac{\lvert a_1 a_2 + b_1 b_2 + c_1 c_2 \rvert}{\sqrt{a_1^2 + b_1^2 + c_1^2}\,\sqrt{a_2^2 + b_2^2 + c_2^2}}.$$

> [!EXAMPLE] 24.8
> The planes $\pi_1 = \{x + y - z = 3\}$ and $\pi_2 = \{x - y - z = 9\}$ form an angle
> $$\vartheta = \arccos \frac{\langle (1, 1, -1), (1, -1, -1) \rangle}{\lVert (1, 1, -1) \rVert \, \lVert (1, -1, -1) \rVert} = \arccos \frac{1}{\sqrt 3 \sqrt 3} = \arccos \frac 13 \simeq 1.230.$$
> This corresponds to an angle of about $70.5^\circ$.

The computations: $\langle (1, 1, -1), (1, -1, -1) \rangle = 1 - 1 + 1 = 1$ and the two norms equal $\sqrt{1 + 1 + 1} = \sqrt 3$. The cosine $\frac 13$ is not a special value: the answer is left as $\arccos\frac 13$. Note that the constant terms $3$ and $9$ are not needed: the angle depends only on the **direction spaces**.

> [!EXAMPLE] Two perpendicular planes
> The two planes of Example 23.9, $\{x + y = 1\}$ and $\{x - y + z = 3\}$, have normals $(1, 1, 0)$ and $(1, -1, 1)$ with scalar product $1 - 1 + 0 = 0$: the cosine is $0$ and the planes are **perpendicular** ($\alpha = \frac{\pi}{2}$).

> [!PITFALL] Proportional normals
> If the normal vectors are proportional (for example $(1, 2, -1)$ and $(-2, -4, 2)$), the computation would give $\cos\alpha = 1$: the planes are **parallel** and do not meet (or they coincide). It makes no sense to talk about the dihedral angle: you compute the distance.

## Distance between points and point–line distance (pp. 124–126)

The handouts define the distance $d(S, S')$ between two affine subspaces of $\R^3$. If they are **incident** the distance is **zero**. If they are **disjoint** the distance is positive and it is defined case by case. The common idea: you look for the **shortest segment** that connects them, which is always the **perpendicular** one.

> [!DEF] 24.9 · Distance between points
> As we already know, the distance $d(P, Q)$ between two points $P, Q \in \R^3$ is defined using the norm:
> $$d(P, Q) = \lVert \overrightarrow{PQ} \rVert = \lVert Q - P \rVert.$$

For example $d((1, 2, 3), (3, 1, 1)) = \lVert (2, -1, -2) \rVert = \sqrt{4 + 1 + 4} = 3$ (it is Definition 20.10 of lesson L20).

> [!DEF] 24.10 · Distance between a point and a line
> The distance $d(P, r)$ between a point $P$ and a line $r$ in space is defined as follows. We draw (Figure 10 of the handouts) the perpendicular $s$ to $r$ through $P$ and we define
> $$d(P, r) = d(P, Q), \quad \text{where } Q = r \cap s.$$

$Q$ is the **foot of the perpendicular**: the point of the line closest to $P$. If $r$ is in parametric form $r = \{P_0 + t v_0\}$, the distance is computed without looking for $Q$, with the cross product.

> [!PROP] 24.11
> The following equality holds
> $$d(P, r) = \frac{\lVert v_0 \times v_1 \rVert}{\lVert v_0 \rVert}, \quad \text{where } v_1 = \overrightarrow{P_0 P} = P - P_0.$$

The handouts' proof computes the same area in two ways.

1. Consider the parallelogram with sides $v_0$ (along the line) and $v_1$ (from $P_0$ to $P$).
2. By Corollary 23.3 its area is $\lVert v_0 \times v_1 \rVert$.
3. As base times height: the base is $\lVert v_0 \rVert$ and the height is the distance of $P$ from the line of the base, that is $d(P, Q)$.
4. Equating, $\lVert v_0 \times v_1 \rVert = \lVert v_0 \rVert \cdot d(P, Q)$, and dividing by $\lVert v_0 \rVert$ you get the formula.

```graph
title: The parallelogram with sides $v_0$ and $v_1 = P - P_0$: its height is the distance of $P$ from the line $r$
x: -1 5
y: -0.8 4
line: 0 0 3 1 | accent | $r$ | se
polygon: 0 0 3 1 4 4 1 3 | amber
vector: 0 0 3 1 | accent | thick | $v_0$ | se
vector: 0 0 1 3 | blue | thick | $v_1$ | w
point: 0 0 | $P_0$ | sw
point: 1 3 | pink | $P$ | n
point: 1.8 0.6 | $Q$ | se
segment: 1 3 1.8 0.6 | pink | dashed | $d(P, r)$ | e
```

> [!EXAMPLE] 24.12
> Consider the point and the line
> $$P = \begin{pmatrix} 1 \\ -2 \\ 3 \end{pmatrix}, \qquad r = \left\{ \begin{pmatrix} -1 \\ 0 \\ 1 \end{pmatrix} + t \begin{pmatrix} 3 \\ 2 \\ 1 \end{pmatrix} \right\}.$$
> The distance between $P$ and $r$ is
> $$d(P, r) = \frac{\left\lVert (3, 2, 1) \times (2, -2, 2) \right\rVert}{\lVert (3, 2, 1) \rVert} = \frac{\lVert (6, -4, -10) \rVert}{\sqrt{14}} = \frac{2\sqrt{38}}{\sqrt{14}} = \frac 27 \sqrt{133}.$$

All the steps:

1. $P_0 = (-1, 0, 1)$ and $v_0 = (3, 2, 1)$; $v_1 = P - P_0 = (1 - (-1),\ -2 - 0,\ 3 - 1) = (2, -2, 2)$.
2. Cross product (rows side by side $(3, 2)$, $(2, -2)$, $(1, 2)$): $\big(2 \cdot 2 - 1 \cdot (-2),\ -(3 \cdot 2 - 1 \cdot 2),\ 3 \cdot (-2) - 2 \cdot 2\big) = (6, -4, -10)$.
3. $\lVert (6, -4, -10) \rVert = \sqrt{36 + 16 + 100} = \sqrt{152} = \sqrt{4 \cdot 38} = 2\sqrt{38}$ and $\lVert v_0 \rVert = \sqrt{9 + 4 + 1} = \sqrt{14}$.
4. I simplify: $\frac{2\sqrt{38}}{\sqrt{14}} = 2\sqrt{\frac{38}{14}} = 2\sqrt{\frac{19}{7}} = \frac{2\sqrt{19}}{\sqrt 7} = \frac{2\sqrt{19}\sqrt 7}{7} = \frac{2\sqrt{133}}{7}$.

> [!BEYOND] The foot of the perpendicular, and a check
> The point $Q$ is found by projecting $v_1$ onto the line (lesson L21):
> $$Q = P_0 + \frac{\langle v_1, v_0 \rangle}{\langle v_0, v_0 \rangle} v_0.$$
> In Example 24.12: $\langle v_1, v_0 \rangle = 6 - 4 + 2 = 4$ and $\langle v_0, v_0 \rangle = 14$, so $Q = (-1, 0, 1) + \frac{2}{7}(3, 2, 1) = \left(-\frac 17, \frac 47, \frac 97\right)$. Then $P - Q = \left(\frac 87, -\frac{18}{7}, \frac{12}{7}\right)$, with norm $\frac{\sqrt{64 + 324 + 144}}{7} = \frac{\sqrt{532}}{7} = \frac{2\sqrt{133}}{7}$: the same distance. I check that $P - Q$ is orthogonal to the line: $\frac{24 - 36 + 12}{7} = 0$.

> [!PITFALL] You divide by the norm, not by its square
> In the formula there is $\lVert v_0 \rVert$ in the denominator, not $\lVert v_0 \rVert^2$ (which appears instead in the projection). And the vector $v_1$ goes from a point **of the line** to the point $P$: using $P$ instead of $P - P_0$ gives a wrong result (unless the line passes through the origin).

## Distance between two lines (pp. 126–127)

> [!DEF] 24.13 · Distance between lines
> The distance $d(r, r')$ between two **disjoint** lines $r$ and $r'$ in the plane or in space is defined as follows. The two lines $r$ and $r'$ are parallel or skew. In both cases we find a line $s$ perpendicular to both. We then define
> $$d(r, r') = d(P, P'), \quad \text{where } P = r \cap s \text{ and } P' = r' \cap s.$$

Piece by piece:

- **disjoint**: if they meet the distance is zero;
- **parallel**: same direction, no common point; the common perpendiculars are infinitely many, all of the same length;
- **skew**: different directions and no common point (lesson L23); the common perpendicular $s$ is **unique** (Martelli, Proposition 9.2.27) and it is the "pillar" of the flyover.

If $r = \{P_0 + t v\}$ and $r' = \{P_0' + u v'\}$ are in parametric form, the distance is computed quickly.

**Parallel lines.** The distance $d(r, r')$ is equal to $d(P_0, r')$: you take a point of $r$ and apply Proposition 24.11.

> [!EXAMPLE] Two parallel lines
> $r = \{t\,(1, 1, 0)\}$ and $r' = \{(1, 0, 0) + s\,(1, 1, 0)\}$ have the same direction, and $(0, 0, 0) \in r$ does not lie on $r'$. With $P = (0, 0, 0)$, $P_0' = (1, 0, 0)$, $v_0 = (1, 1, 0)$:
> - $P - P_0' = (-1, 0, 0)$;
> - $(1, 1, 0) \times (-1, 0, 0) = \big(1 \cdot 0 - 0 \cdot 0,\ -(1 \cdot 0 - 0 \cdot (-1)),\ 1 \cdot 0 - 1 \cdot (-1)\big) = (0, 0, 1)$;
> - $d(r, r') = \frac{\lVert (0, 0, 1) \rVert}{\lVert (1, 1, 0) \rVert} = \frac{1}{\sqrt 2} = \frac{\sqrt 2}{2}$.
>
> In the plane $z = 0$ they are the lines $y = x$ and $y = x - 1$: vertically they are $1$ apart, but the perpendicular segment, which measures the true distance, is shorter, $\frac{\sqrt 2}{2}$.

**Skew lines.** Here a new formula is needed, with a **volume** instead of the area (Figure 11 of the handouts).

> [!PROP] 24.14
> If $r$ and $r'$ are skew, the following formula holds
> $$d(r, r') = \frac{\lvert \det(v \mid v' \mid v'') \rvert}{\lVert v \times v' \rVert}, \quad \text{where } v'' = \overrightarrow{P_0 P_0'} = P_0' - P_0.$$

The reasoning is the same as for Proposition 24.11, one dimension higher.

1. Consider the parallelepiped spanned by $v$, $v'$ and $v''$.
2. Its volume is $\lvert \det(v \mid v' \mid v'') \rvert$: it is the geometric meaning of the determinant (Martelli, Proposition 9.1.9, proved with the cross product).
3. As base area times height: the base is the parallelogram with sides $v$ and $v'$, of area $\lVert v \times v' \rVert$; the height is the distance between the two parallel planes that contain the two lines, that is exactly $d = d(P, P') = d(r, r')$.
4. Equating, $\lvert \det(v \mid v' \mid v'') \rvert = d(r, r') \cdot \lVert v \times v' \rVert$, hence the formula.

> [!EXAMPLE] 24.15
> Let us compute the distance between the skew lines
> $$r = \left\{ \begin{pmatrix} 2 \\ -5 \\ 1 \end{pmatrix} + t \begin{pmatrix} 2 \\ 0 \\ 1 \end{pmatrix} \right\}, \qquad r' = \left\{ \begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} + u \begin{pmatrix} -1 \\ -2 \\ 3 \end{pmatrix} \right\}.$$
> It is
> $$\begin{aligned} d(r, r') &= \frac{\left\lvert \det\begin{pmatrix} 2 & -1 & -1 \\ 0 & -2 & 6 \\ 1 & 3 & -1 \end{pmatrix} \right\rvert}{\left\lVert (2, 0, 1) \times (-1, -2, 3) \right\rVert} \\ &= \frac{\lvert 2(2 - 18) + (-6 - 2) \rvert}{\sqrt{2^2 + (-7)^2 + (-4)^2}} = \frac{40}{\sqrt{69}} = \frac{40}{69}\sqrt{69}. \end{aligned}$$

All the steps:

1. $v = (2, 0, 1)$, $v' = (-1, -2, 3)$ and $v'' = P_0' - P_0 = (1 - 2,\ 1 - (-5),\ 0 - 1) = (-1, 6, -1)$: they are the three columns of the matrix.
2. Determinant with Laplace along the **first column** $(2, 0, 1)$: $2 \cdot \det\begin{pmatrix} -2 & 6 \\ 3 & -1 \end{pmatrix} - 0 + 1 \cdot \det\begin{pmatrix} -1 & -1 \\ -2 & 6 \end{pmatrix} = 2\,(2 - 18) + (-6 - 2) = -32 - 8 = -40$. In absolute value: $40$.
3. Cross product (rows side by side $(2, -1)$, $(0, -2)$, $(1, 3)$): $\big(0 \cdot 3 - 1 \cdot (-2),\ -(2 \cdot 3 - 1 \cdot (-1)),\ 2 \cdot (-2) - 0 \cdot (-1)\big) = (2, -7, -4)$, of norm $\sqrt{4 + 49 + 16} = \sqrt{69}$.
4. $d = \frac{40}{\sqrt{69}} = \frac{40\sqrt{69}}{69}$.

> [!BEYOND] The determinant also tells whether two lines meet
> For any two lines $r = \{P_0 + t v\}$ and $r' = \{P_0' + u v'\}$ we have: they are **coplanar** (that is incident or parallel) **if and only if** $\det(v \mid v' \mid P_0' - P_0) = 0$ (Martelli, Proposition 9.2.41). Indeed the determinant is zero exactly when the three vectors lie in the same plane. This gives a complete recipe:
> 1. if $v$ and $v'$ are **proportional**, the lines are parallel (or coincide): distance with Proposition 24.11;
> 2. otherwise compute $\det(v \mid v' \mid P_0' - P_0)$: if it is $0$ the lines are **incident** (distance $0$, and you can compute the angle); if it is not $0$ they are **skew** and the distance is given by Proposition 24.14.
>
> Since $\det(v \mid v' \mid v'') = \langle v \times v', v'' \rangle$ (triple product, lesson L23), it is best to compute $v \times v'$ first: it is needed both in the numerator and in the denominator.

## Distance between a point and a plane (pp. 127–128)

> [!DEF] 24.16 · Distance between a point and a plane
> The distance between a point $P_0$ and a plane $\pi$ in space is defined in a way similar to what we have already seen: you draw the perpendicular $s$ to $\pi$ through $P_0$ and you define
> $$d(P_0, \pi) = d(P_0, Q), \quad \text{with } Q = s \cap \pi.$$

If the plane is in Cartesian form, there is a formula that does not require finding $Q$.

> [!PROP] 24.17
> If $\pi = \{ax + by + cz = d\}$ and $P_0 = (x_0, y_0, z_0)$, we have
> $$d(P_0, \pi) = \frac{\lvert a x_0 + b y_0 + c z_0 - d \rvert}{\sqrt{a^2 + b^2 + c^2}}.$$

Piece by piece:

- in the numerator substitute the coordinates of $P_0$ into the equation of the plane **brought into the form** $ax + by + cz - d$: the result is zero exactly when $P_0$ lies on the plane;
- in the denominator there is the norm of the normal vector $n = (a, b, c)$;
- if you multiply the equation by a number, numerator and denominator change by the same factor: the distance does not change.

```graph
title: Point–plane distance (side view): the projection of $w = P_0 - P$ onto the normal $n$ is exactly as long as $d(P_0, \pi)$
axes: no
grid: no
x: -3.2 3
y: -0.8 3
line: 3 0 -3 0 | violet | thick | $\pi$ | ne
point: -2 0 | $P$ | s
point: 1 2.2 | pink | $P_0$ | ne
point: 1 0 | $Q$ | s
vector: -2 0 1 2.2 | blue | thick
text: -0.75 1.4 | blue | $w$
segment: 1 2.2 1 0 | pink | dashed | $d$ | e
vector: 2 0 2 1.2 | amber | thick | $n$ | e
```

> [!PROOF] of Proposition 24.17 (from Martelli's book)
> 1. Let $n = (a, b, c)$, which is orthogonal to the plane (lesson L23), and let $P = (x, y, z)$ be **any** point of the plane.
> 2. Set $w = P_0 - P$. The segment $P_0 Q$ is parallel to $n$, and its length is the length of the projection of $w$ onto the line of $n$: $d(P_0, Q) = \lVert p_n(w) \rVert = \frac{\lvert \langle w, n \rangle \rvert}{\lVert n \rVert}$ (lesson L21: $p_n(w) = \frac{\langle w, n \rangle}{\langle n, n \rangle} n$).
> 3. I expand: $\langle w, n \rangle = a(x_0 - x) + b(y_0 - y) + c(z_0 - z) = a x_0 + b y_0 + c z_0 - (ax + by + cz)$.
> 4. Since $P \in \pi$, we have $ax + by + cz = d$: so $\langle w, n \rangle = a x_0 + b y_0 + c z_0 - d$, and you get the formula. $\square$

> [!EXAMPLE] 24.18
> Consider the following plane and point in $\R^3$:
> $$\pi = \{2x - y + z = 4\}, \qquad P_0 = \begin{pmatrix} 2 \\ 1 \\ -2 \end{pmatrix}.$$
> Applying the formula we find
> $$d(P_0, \pi) = \frac{\lvert 2 \cdot 2 - 1 - 2 - 4 \rvert}{\sqrt 6} = \frac{\sqrt 6}{2}.$$

The computations: in the numerator $4 - 1 - 2 - 4 = -3$, in absolute value $3$; in the denominator $\sqrt{4 + 1 + 1} = \sqrt 6$. Finally $\frac{3}{\sqrt 6} = \frac{3\sqrt 6}{6} = \frac{\sqrt 6}{2}$.

```widget spazio
title: The distance of the point $P_0 = (2, 1, -2)$ from the plane $2x - y + z = 4$ (Example 24.18)
modo: piano
piano: 2 -1 1 = 4
punto: 2 1 -2
```

The tool draws the plane, the normal vector $n = (2, -1, 1)$, the point $P_0$ and the **foot of the perpendicular** $H$ (which in the handouts is called $Q$). It should give you $d = 1.225$, that is $\frac{\sqrt 6}{2}$, and $H = (3;\ 0.5;\ -1.5)$. Try moving $P_0$ **parallel to the plane**, for example to $(3, 3, -2)$, that is type `3 3 -2` (you have added $(1, 2, 0)$, which satisfies $2 \cdot 1 - 2 + 0 = 0$, so it lies in the direction space): the distance does not change. Then multiply the equation by $2$, that is type `4 -2 2 = 8`: the distance stays the same in this case too.

> [!BEYOND] The foot of the perpendicular and two more distances
> **The foot $Q$.** Starting from $P_0$ you move along the normal until you reach the plane:
> $$Q = P_0 - \frac{a x_0 + b y_0 + c z_0 - d}{a^2 + b^2 + c^2}\, (a, b, c).$$
> In Example 24.18: $Q = (2, 1, -2) - \frac{-3}{6}(2, -1, 1) = (2, 1, -2) + \left(1, -\frac 12, \frac 12\right) = \left(3, \frac 12, -\frac 32\right)$. Check: $6 - \frac 12 - \frac 32 = 4$.
>
> **Two parallel planes** $ax + by + cz = d_1$ and $ax + by + cz = d_2$ (with **the same** coefficients): the distance is $\frac{\lvert d_1 - d_2 \rvert}{\sqrt{a^2 + b^2 + c^2}}$, because it is enough to take a point of the first and use Proposition 24.17.
>
> **A line parallel to a plane**: all its points have the same distance from the plane, so any one of its points is enough.

## All the formulas in a table (beyond the handouts)

> [!BEYOND] The summary for the exam sheet
> Notation: $r = P_0 + \Span(v)$, $r' = P_0' + \Span(v')$, plane $\pi = \{ax + by + cz = d\}$ with normal $n = (a, b, c)$.
>
> | What | Formula | Where |
> |---|---|---|
> | angle between incident lines | $\cos\vartheta = \frac{\lvert \langle v, v' \rangle \rvert}{\lVert v \rVert \lVert v' \rVert}$ | Def. 24.1 |
> | angle between line and plane | angle between $v$ and $p_\pi(v)$; $\sin\vartheta = \frac{\lvert \langle v, n \rangle \rvert}{\lVert v \rVert \lVert n \rVert}$ | Def. 24.2, Prop. 24.4 |
> | angle between planes | $\cos\alpha = \frac{\lvert \langle n_1, n_2 \rangle \rvert}{\lVert n_1 \rVert \lVert n_2 \rVert}$ | Prop. 24.7 |
> | point–point | $\lVert Q - P \rVert$ | Def. 24.9 |
> | point–line | $\frac{\lVert v \times (P - P_0) \rVert}{\lVert v \rVert}$ | Prop. 24.11 |
> | parallel lines | $d(P_0, r')$ | Def. 24.13 |
> | skew lines | $\frac{\lvert \det(v \mid v' \mid P_0' - P_0) \rvert}{\lVert v \times v' \rVert}$ | Prop. 24.14 |
> | point–plane | $\frac{\lvert a x_0 + b y_0 + c z_0 - d \rvert}{\sqrt{a^2 + b^2 + c^2}}$ | Prop. 24.17 |
> | parallel planes | $\frac{\lvert d_1 - d_2 \rvert}{\sqrt{a^2 + b^2 + c^2}}$ (same coefficients) | beyond the handouts |

> [!BEYOND] Where to find it in the book
> In Martelli's book: angles between lines, between a line and a plane and between planes in §9.2.9 (pp. 285–287, with Proposition 9.2.33: among all the lines of the plane through $P$, the projected one forms the smallest angle with $r$); distances in §9.2.10 (pp. 287–291: Propositions 9.2.36, 9.2.39, 9.2.41 and 9.2.42, which are our 24.11, 24.14, the coplanarity criterion and 24.17). Norm, angle between vectors, distance and orthogonal projection are in §8.1 (pp. 240–245); the volume of the parallelepiped in Proposition 9.1.9 (p. 271); lines perpendicular to a plane or to a line in §9.2.6 (pp. 279–281).

## Towards the exam

The written test of Linear Algebra and Geometry has **10 quiz questions** with 5 answers (only one right) and **2 problems worth 11 points**, marked only with **at least 6 correct quiz answers**; it lasts **2 hours**, **with no calculator**, and you may bring only a sheet of **4 handwritten pages**. The 2026/27 exam sessions are on **22/01/2027** and **05/02/2027** at 14:00. All the details are in lesson L01.

**What of this lesson appears in the 2023–2026 exam sessions.** Angles and distances are present in almost every exam session.

- **Quiz on the distance between two lines**: 08/02/2024 (question 10), 06/09/2024 (question 6), 05/02/2026 (question 10, where the lines meet and the right answer is $0$), 03/06/2026 (question 10), 07/09/2026 (question 7).
- **Quiz on the point–plane distance**: 16/01/2025 (question 4). **Quiz on the line–plane angle**: 10/07/2025 (question 8). **Quiz on the line perpendicular to a plane**: 02/09/2025 (question 9): the direction must be proportional to the normal vector.
- **Open problems with the angle between a line and a plane**, usually after finding a line as the intersection of planes or a projection: 24/01/2024, 10/06/2024, 10/07/2024, 06/09/2024, 02/09/2025, 03/06/2026, 07/09/2026 (always problem 12). **Distance between lines** in an open problem: 10/07/2024 and 03/06/2025.

Two real quiz questions, solved.

*Exam of 07/09/2026, question 7.* The distance between the lines $r_1 = (2, 0, 0) + \Span(0, 1, 1)$ and $r_2 = (0, 3, 0) + \Span(-1, 1, 0)$ is: (a) $3$; (b) $\frac{\sqrt 3}{3}$; (c) $3\sqrt 3$; (d) $\sqrt 3$; (e) $3 + \sqrt 3$.

Working: $v = (0, 1, 1)$ and $v' = (-1, 1, 0)$ are not proportional, and $v'' = (0, 3, 0) - (2, 0, 0) = (-2, 3, 0)$. Cross product (rows side by side $(0, -1)$, $(1, 1)$, $(1, 0)$): $v \times v' = \big(1 \cdot 0 - 1 \cdot 1,\ -(0 \cdot 0 - 1 \cdot (-1)),\ 0 \cdot 1 - 1 \cdot (-1)\big) = (-1, -1, 1)$, of norm $\sqrt 3$. Triple product: $\langle (-1, -1, 1), (-2, 3, 0) \rangle = 2 - 3 + 0 = -1 \neq 0$, so the lines are skew and $d = \frac{1}{\sqrt 3} = \frac{\sqrt 3}{3}$: answer (b). Here the rationalisation of lesson L01 really is needed.

*Exam of 10/07/2025, question 8.* The angle between the plane $\Pi = \{x + z = 3\}$ and the line $r = {}^t(1, 0, 1) + s\,{}^t(2, 2, 0)$ is: (a) $\frac 12$; (b) $0$; (c) $\frac{\pi}{3}$; (d) $\frac{\pi}{2} - \frac 12$; (e) $\frac{\pi}{6}$.

Working: $v = (2, 2, 0)$, $n = (1, 0, 1)$, $\langle v, n \rangle = 2 \neq 0$ (the line is not parallel to the plane, so (b) is excluded). With the shortcut: $\sin\vartheta = \frac{2}{2\sqrt 2 \cdot \sqrt 2} = \frac 12$, so $\vartheta = \frac{\pi}{6}$: answer (e). With the handouts' method: $p_\pi(v) = (2, 2, 0) - \frac 22 (1, 0, 1) = (1, 2, -1)$ and $\cos\vartheta = \frac{2 + 4 + 0}{2\sqrt 2 \cdot \sqrt 6} = \frac{6}{4\sqrt 3} = \frac{\sqrt 3}{2}$, again $\frac{\pi}{6}$. Answers (a) and (d) are traps: $\frac 12$ is the **sine** of the angle, not the angle; (c) is the angle with the normal.

> [!METHOD] Distance between two lines, in four lines
> 1. Write $v$, $v'$, $v'' = P_0' - P_0$.
> 2. If $v$ and $v'$ are proportional: parallel lines, $d = \frac{\lVert v \times (P_0' - P_0) \rVert}{\lVert v \rVert}$.
> 3. Otherwise compute $v \times v'$ and then $\langle v \times v', v'' \rangle$. If it is $0$, the lines meet: $d = 0$ (as in the quiz of 05/02/2026).
> 4. If it is not $0$: $d = \frac{\lvert \langle v \times v', v'' \rangle \rvert}{\lVert v \times v' \rVert}$, and rationalise.

> [!METHOD] The angle between a line and a plane in the open problems
> The problems often ask, in this order: find the line (intersection of two planes, lesson L23), show that it meets the plane, compute the **orthogonal projection** of the direction onto the plane, and finally the angle. The "projection" part prepares exactly Definition 24.2: once $p_\pi(v)$ is found, the angle is $\arccos\frac{\langle v, p_\pi(v) \rangle}{\lVert v \rVert \lVert p_\pi(v) \rVert}$. If the text asks for the **cosine** of the angle (as on 03/06/2026), stop at the cosine.

**Mistakes to avoid.**

- Giving an **obtuse** angle as the angle between lines (or between planes): you always take the acute or right one.
- Confusing the angle with the **normal** and the angle with the **plane**: they are complementary.
- Writing the value of the **cosine** or of the **sine** as the "angle" (the trap of the answer $\frac 12$).
- In the point–plane formula, forgetting to bring **everything to the left** ($ax + by + cz - d$) or forgetting the **absolute value**.
- Comparing parallel planes with **non-normalised** equations: $x + 2y + 2z = 1$ and $2x + 4y + 4z = 5$ must first be written with the same coefficients.
- Using the formula for skew lines for **parallel** lines: the denominator $\lVert v \times v' \rVert$ is zero.

> [!EXAM] The 4-page sheet
> From this lesson: the table of formulas (previous section), the table of special cosines, the "parallel / incident / skew" recipe with the determinant, and the formula for the foot of the perpendicular on a plane.

## Quiz

```quiz
Q: The lines $r = (1, 0, 0) + t\,(1, 1, 0)$ and $r' = (1, 0, 0) + s\,(0, 1, 1)$ meet at $(1, 0, 0)$. What angle do they form?
+ $\frac{\pi}{3}$
- $\frac{\pi}{6}$
- $\frac{2\pi}{3}$
- $\frac{\pi}{4}$
- $\arccos\frac 14$
= $\cos\vartheta = \frac{\lvert \langle (1, 1, 0), (0, 1, 1) \rangle \rvert}{\sqrt 2 \cdot \sqrt 2} = \frac 12$, so $\vartheta = \frac{\pi}{3}$. $\frac{2\pi}{3}$ is the obtuse angle, which is never chosen for two lines.

Q: What is the angle between the plane $\pi = \{x + y = 3\}$ and the line $r = (0, 0, 1) + t\,(1, 0, 1)$?
+ $\frac{\pi}{6}$
- $\frac{\pi}{3}$
- $\frac 12$
- $\frac{\pi}{2} - \frac 12$
- $0$
= $v = (1, 0, 1)$, $n = (1, 1, 0)$: $\sin\vartheta = \frac{\lvert 1 \rvert}{\sqrt 2 \cdot \sqrt 2} = \frac 12$, so $\vartheta = \frac{\pi}{6}$. With the projection: $p_\pi(v) = (1, 0, 1) - \frac 12 (1, 1, 0) = \left(\frac 12, -\frac 12, 1\right)$ and $\cos\vartheta = \frac{3/2}{\sqrt 2 \cdot \sqrt{3/2}} = \frac{\sqrt 3}{2}$. $\frac{\pi}{3}$ is the angle with the normal, $\frac 12$ the sine. Similar to the exam of 10/07/2025 (question 8), which had the same distractors.

Q: What is the dihedral angle between the planes $\{x = 2\}$ and $\{x + y = 3\}$?
+ $\frac{\pi}{4}$
- $\frac{3\pi}{4}$
- $\frac{\pi}{3}$
- $\frac{\pi}{2}$
- $\frac{\pi}{6}$
= Normals $(1, 0, 0)$ and $(1, 1, 0)$: $\cos\alpha = \frac{1}{1 \cdot \sqrt 2} = \frac{\sqrt 2}{2}$, so $\alpha = \frac{\pi}{4}$ (Proposition 24.7). $\frac{3\pi}{4}$ is the obtuse angle, which is discarded.

Q: The distance of the point $P = (1, 2, 3)$ from the plane $\pi = \{2x - y + 2z = 1\}$ is:
+ $\frac 53$
- $5$
- $\frac 59$
- $\frac 73$
- $\frac{\sqrt 5}{3}$
= $\frac{\lvert 2 - 2 + 6 - 1 \rvert}{\sqrt{4 + 1 + 4}} = \frac{5}{3}$. $5$ forgets the denominator, $\frac 59$ divides by $\lVert n \rVert^2$, $\frac 73$ gets the sign of $d$ wrong ($+1$ instead of $-1$). Similar to the exam of 16/01/2025 (question 4).

Q: The distance of the point $P = (2, 0, 1)$ from the line $r = \{t\,(1, 1, 0) \mid t \in \R\}$ is:
+ $\sqrt 3$
- $\sqrt 6$
- $3$
- $\sqrt 2$
- $\frac{\sqrt 6}{2}$
= $v_0 = (1, 1, 0)$, $v_1 = P - (0, 0, 0) = (2, 0, 1)$, $v_0 \times v_1 = (1 \cdot 1 - 0 \cdot 0,\ -(1 \cdot 1 - 0 \cdot 2),\ 1 \cdot 0 - 1 \cdot 2) = (1, -1, -2)$, of norm $\sqrt 6$. So $d = \frac{\sqrt 6}{\sqrt 2} = \sqrt 3$. $\sqrt 6$ forgets to divide by $\lVert v_0 \rVert$; $\frac{\sqrt 6}{2}$ divides by $\lVert v_0 \rVert^2$.

Q: The lines $r_1 = (1, 0, 0) + t\,(0, 1, 2)$ and $r_2 = (3, -1, -1) + s\,(-1, 1, 4)$ are skew. What is their distance?
+ $\frac 53$
- $5$
- $\frac 59$
- $\frac 35$
- $0$
= $v \times v' = (0, 1, 2) \times (-1, 1, 4) = (1 \cdot 4 - 2 \cdot 1,\ -(0 \cdot 4 - 2 \cdot (-1)),\ 0 \cdot 1 - 1 \cdot (-1)) = (2, -2, 1)$, of norm $3$. $v'' = (2, -1, -1)$ and $\langle (2, -2, 1), (2, -1, -1) \rangle = 4 + 2 - 1 = 5$. So $d = \frac 53$. Similar to the exams of 06/09/2024 (question 6) and 03/06/2026 (question 10); the lines are those of the problem of 03/06/2025 with $k = 0$.

Q: What is the distance between the lines $r = \{t\,(1, 1, 0)\}$ and $r' = \{(1, 1, 1) + s\,(0, 0, 1)\}$?
+ $0$
- $\frac{\sqrt 2}{2}$
- $1$
- $\sqrt 2$
- the point $(1, 1, 0)$
= The directions are not proportional, and $\det\left((1, 1, 0) \mid (0, 0, 1) \mid (1, 1, 1)\right) = \langle (1, 1, 0) \times (0, 0, 1), (1, 1, 1) \rangle = \langle (1, -1, 0), (1, 1, 1) \rangle = 0$: the lines are incident (they meet at $(1, 1, 0)$, with $t = 1$ and $s = -1$), so the distance is $0$. The point $(1, 1, 0)$ is not a distance. Similar to the exam of 05/02/2026 (question 10).

Q: A line forms an acute angle $\alpha = \frac{\pi}{3}$ with the normal vector of a plane. What is the angle between the line and the plane?
+ $\frac{\pi}{6}$
- $\frac{\pi}{3}$
- $\frac{2\pi}{3}$
- $\frac{\pi}{2}$
- $\frac{5\pi}{6}$
= By Proposition 24.4 the two angles add up to $\frac{\pi}{2}$: $\vartheta = \frac{\pi}{2} - \frac{\pi}{3} = \frac{\pi}{6}$.

Q: Which of these lines meets the plane $\pi = \{2x - y + 2z = 3\}$ **perpendicularly**?
+ $(1, 1, 1) + t\,(2, -1, 2)$
- $t\,(1, 2, 0)$
- $(2, -1, 2) + t\,(1, 1, 1)$
- $\{2x - y + 2z = 0\}$
- $(0, 3, 0) + t\,(2, 1, 2)$
= A line is perpendicular to the plane when its direction is proportional to the normal vector $(2, -1, 2)$. $(1, 2, 0)$ is orthogonal to the normal ($2 - 2 + 0 = 0$): that line is parallel to the plane. $(2, -1, 2) + t\,(1, 1, 1)$ uses the normal as a **point**, not as a direction. $\{2x - y + 2z = 0\}$ is a plane, not a line. $(2, 1, 2)$ is not proportional to $(2, -1, 2)$. Similar to the exam of 02/09/2025 (question 9).

Q: What is the distance between the parallel planes $\{x + 2y + 2z = 1\}$ and $\{x + 2y + 2z = 7\}$?
N: 2
= Same coefficients, so $d = \frac{\lvert 7 - 1 \rvert}{\sqrt{1 + 4 + 4}} = \frac 63 = 2$. It is equivalent to taking the point $(1, 0, 0)$ of the first plane and using Proposition 24.17.
```

## Exercises

::: exercise basic Angles between lines
(a) The lines $r = (1, 2, 0) + t\,(1, 0, 1)$ and $r' = (1, 2, 0) + s\,(1, 1, 0)$ meet at $(1, 2, 0)$: compute the angle. (b) Same question for the lines through the origin with directions $(1, 2, 2)$ and $(2, -2, -1)$. (c) Same question for the lines through the origin with directions $(1, 1, 1)$ and $(-1, 0, -1)$.
::: solution
(a) $\langle (1, 0, 1), (1, 1, 0) \rangle = 1$, norms $\sqrt 2$ and $\sqrt 2$: $\cos\vartheta = \frac 12$, $\vartheta = \frac{\pi}{3}$.

(b) $\langle (1, 2, 2), (2, -2, -1) \rangle = 2 - 4 - 2 = -4$, norms $3$ and $3$: the cosine between the vectors is $-\frac 49$ (obtuse angle). Between the lines you take the absolute value: $\vartheta = \arccos\frac 49$.

(c) $\langle (1, 1, 1), (-1, 0, -1) \rangle = -2$, norms $\sqrt 3$ and $\sqrt 2$: $\cos\vartheta = \frac{2}{\sqrt 6} = \frac{\sqrt 6}{3}$, so $\vartheta = \arccos\frac{\sqrt 6}{3}$ (about $35.3^\circ$, the same number as in Example 24.3).
:::

::: exercise basic Angle between two planes
Compute the dihedral angle between the planes $\pi_1 = \{2x + y - z = 1\}$ and $\pi_2 = \{x + 2y + z = 2\}$ (they are the planes of the exam of 24/01/2024). Then write a plane through the origin perpendicular to both.
::: solution
Normals $n_1 = (2, 1, -1)$ and $n_2 = (1, 2, 1)$: $\langle n_1, n_2 \rangle = 2 + 2 - 1 = 3$, norms $\sqrt 6$ and $\sqrt 6$. So $\cos\alpha = \frac{3}{6} = \frac 12$ and $\alpha = \frac{\pi}{3}$.

Two planes are perpendicular when their **normal vectors** are orthogonal (cosine zero). So you need a normal vector $m$ with $\langle m, n_1 \rangle = \langle m, n_2 \rangle = 0$, for example
$$\begin{aligned} m = n_1 \times n_2 &= \big(1 \cdot 1 - (-1) \cdot 2,\ -(2 \cdot 1 - (-1) \cdot 1),\ 2 \cdot 2 - 1 \cdot 1\big) \\ &= (3, -3, 3). \end{aligned}$$
The plane $x - y + z = 0$ works. Since $m$ is also the direction of the line $\pi_1 \cap \pi_2$ (it is orthogonal to both normals), this is the plane through the origin perpendicular to the common line: the "cut" of Definition 24.6.
:::

::: exercise intermediate A line and a plane, with two methods
Compute the angle between the plane $\pi = \{x + y - z = 0\}$ and the line $r = \{t\,(1, 1, 1)\}$: (a) with the projection of Definition 24.2; (b) with Proposition 24.4. Check that the results coincide.
::: solution
First of all the line meets the plane (at the origin).

(a) With the formula of the projection onto the normal $n = (1, 1, -1)$: $\langle v, n \rangle = 1 + 1 - 1 = 1$ and $\langle n, n \rangle = 3$, so
$$p_\pi(v) = (1, 1, 1) - \tfrac 13 (1, 1, -1) = \left(\tfrac 23, \tfrac 23, \tfrac 43\right).$$
$\langle v, p_\pi(v) \rangle = \frac{2 + 2 + 4}{3} = \frac 83$, $\lVert v \rVert = \sqrt 3$, $\lVert p_\pi(v) \rVert = \frac{\sqrt{4 + 4 + 16}}{3} = \frac{\sqrt{24}}{3} = \frac{2\sqrt 6}{3}$. Then
$$\cos\vartheta = \frac{8/3}{\sqrt 3 \cdot 2\sqrt 6 / 3} = \frac{8}{2\sqrt{18}} = \frac{4}{3\sqrt 2} = \frac{2\sqrt 2}{3}.$$

(b) $\sin\vartheta = \frac{\lvert \langle v, n \rangle \rvert}{\lVert v \rVert \lVert n \rVert} = \frac{1}{\sqrt 3 \cdot \sqrt 3} = \frac 13$, so $\vartheta = \arcsin\frac 13$.

They coincide: $\left(\frac{2\sqrt 2}{3}\right)^2 + \left(\frac 13\right)^2 = \frac 89 + \frac 19 = 1$, so $\arccos\frac{2\sqrt 2}{3} = \arcsin\frac 13$ (an acute angle is determined by its sine).
:::

::: exercise basic Point–line distance with the formula and with the foot
Let $P = (1, 1, 1)$ and $r = \{t\,(1, 2, 2)\}$. Compute $d(P, r)$ with Proposition 24.11 and then by finding the foot of the perpendicular $Q$.
::: solution
**With the formula.** $v_0 = (1, 2, 2)$, $v_1 = P - (0, 0, 0) = (1, 1, 1)$. Rows side by side $(1, 1)$, $(2, 1)$, $(2, 1)$:
$$v_0 \times v_1 = (2 \cdot 1 - 2 \cdot 1,\ -(1 \cdot 1 - 2 \cdot 1),\ 1 \cdot 1 - 2 \cdot 1) = (0, 1, -1).$$
$d = \frac{\sqrt 2}{\lVert v_0 \rVert} = \frac{\sqrt 2}{3}$.

**With the foot.** $Q = \frac{\langle v_1, v_0 \rangle}{\langle v_0, v_0 \rangle} v_0 = \frac{5}{9}(1, 2, 2) = \left(\frac 59, \frac{10}{9}, \frac{10}{9}\right)$. Then $P - Q = \left(\frac 49, -\frac 19, -\frac 19\right)$, orthogonal to $v_0$ ($\frac{4 - 2 - 2}{9} = 0$), with norm $\frac{\sqrt{16 + 1 + 1}}{9} = \frac{\sqrt{18}}{9} = \frac{3\sqrt 2}{9} = \frac{\sqrt 2}{3}$. Same result.
:::

::: exercise basic Point–plane distance and foot of the perpendicular
For the plane $\pi = \{2x - y + z = 4\}$ and the point $P_0 = (2, 1, -2)$ of Example 24.18: (a) find the foot $Q$ of the perpendicular; (b) check that $d(P_0, Q) = \frac{\sqrt 6}{2}$; (c) write in parametric form the line $s$ perpendicular to $\pi$ through $P_0$.
::: solution
(c) The perpendicular line has the direction of the normal: $s = (2, 1, -2) + \lambda\,(2, -1, 1)$.

(a) $Q = s \cap \pi$: I substitute $(2 + 2\lambda,\ 1 - \lambda,\ -2 + \lambda)$ into the equation: $2(2 + 2\lambda) - (1 - \lambda) + (-2 + \lambda) = 4$, that is $1 + 6\lambda = 4$ and $\lambda = \frac 12$. So $Q = \left(3, \frac 12, -\frac 32\right)$.

(b) $P_0 - Q = \left(-1, \frac 12, -\frac 12\right)$, of norm $\sqrt{1 + \frac 14 + \frac 14} = \sqrt{\frac 32} = \frac{\sqrt 6}{2}$.
:::

::: exercise intermediate Parallel lines and parallel planes
(a) Compute the distance between the parallel lines $r = \{(1, 0, 1) + t\,(1, 0, -1)\}$ and $r' = \{(0, 2, 0) + s\,(-2, 0, 2)\}$. (b) Compute the distance between the planes $\pi_1 = \{x + 2y + 2z = 1\}$ and $\pi_2 = \{2x + 4y + 4z = 5\}$.
::: solution
(a) The directions are proportional ($(-2, 0, 2) = -2\,(1, 0, -1)$). I take $P = (1, 0, 1) \in r$ and use Proposition 24.11 for the line $r'$, with $P_0' = (0, 2, 0)$ and, as direction, $v_0 = (1, 0, -1)$ (any vector proportional to $(-2, 0, 2)$ works). Then $P - P_0' = (1, -2, 1)$ and
$$\begin{aligned} v_0 \times (P - P_0') &= \big(0 \cdot 1 - (-1)(-2),\ -(1 \cdot 1 - (-1) \cdot 1),\ 1 \cdot (-2) - 0 \cdot 1\big) \\ &= (-2, -2, -2), \end{aligned}$$
of norm $2\sqrt 3$. So $d = \frac{2\sqrt 3}{\lVert v_0 \rVert} = \frac{2\sqrt 3}{\sqrt 2} = \sqrt 6$.

(b) First I make the coefficients equal: dividing by 2, $\pi_2 = \{x + 2y + 2z = \frac 52\}$. Now $d = \frac{\lvert \frac 52 - 1 \rvert}{\sqrt{1 + 4 + 4}} = \frac{3/2}{3} = \frac 12$. Without dividing, the computation "$\frac{\lvert 5 - 1 \rvert}{3}$" would have given $\frac 43$, which is wrong.
:::

::: exercise intermediate Classifying two lines and computing the distance
Let $r = \{(1, 1, 0) + t\,(1, 0, 2)\}$ and $r' = \{(0, 1, 1) + s\,(0, 1, 1)\}$. Decide whether they are incident, parallel or skew and compute their distance.
::: solution
The directions $v = (1, 0, 2)$ and $v' = (0, 1, 1)$ are not proportional: the lines are not parallel. Then $v'' = (0, 1, 1) - (1, 1, 0) = (-1, 0, 1)$ and
$$v \times v' = \big(0 \cdot 1 - 2 \cdot 1,\ -(1 \cdot 1 - 2 \cdot 0),\ 1 \cdot 1 - 0 \cdot 0\big) = (-2, -1, 1).$$
$\langle v \times v', v'' \rangle = 2 + 0 + 1 = 3 \neq 0$: the lines are **skew**. The distance is
$$d(r, r') = \frac{3}{\lVert (-2, -1, 1) \rVert} = \frac{3}{\sqrt 6} = \frac{\sqrt 6}{2}.$$
:::

::: exercise hard The common perpendicular to two skew lines
Let $r = \{(1, 1, 1) + t\,(-1, 2, 1)\}$ and $r' = \{(0, 1, 2) + s\,(1, 1, 1)\}$ (Martelli, Example 9.2.28). (a) Compute $d(r, r')$ with Proposition 24.14. (b) Find the points $P \in r$ and $P' \in r'$ such that the segment $PP'$ is perpendicular to both lines, and check that $d(P, P') = d(r, r')$.
::: solution
(a) $v = (-1, 2, 1)$, $v' = (1, 1, 1)$, $v'' = (0, 1, 2) - (1, 1, 1) = (-1, 0, 1)$. Cross product:
$$v \times v' = \big(2 \cdot 1 - 1 \cdot 1,\ -((-1) \cdot 1 - 1 \cdot 1),\ (-1) \cdot 1 - 2 \cdot 1\big) = (1, 2, -3),$$
of norm $\sqrt{14}$. $\langle (1, 2, -3), (-1, 0, 1) \rangle = -1 + 0 - 3 = -4$. So $d = \frac{4}{\sqrt{14}} = \frac{2\sqrt{14}}{7}$.

(b) The generic point of $r$ is $P(t) = (1 - t,\ 1 + 2t,\ 1 + t)$, that of $r'$ is $P'(s) = (s,\ 1 + s,\ 2 + s)$. The vector $P(t) - P'(s) = (1 - t - s,\ 2t - s,\ -1 + t - s)$ must be orthogonal to $v$ and to $v'$:
- $\langle P - P', v \rangle = -(1 - t - s) + 2(2t - s) + (-1 + t - s) = 6t - 2s - 2 = 0$;
- $\langle P - P', v' \rangle = (1 - t - s) + (2t - s) + (-1 + t - s) = 2t - 3s = 0$.

From the second $t = \frac{3s}{2}$; in the first $9s - 2s - 2 = 0$, that is $s = \frac 27$ and $t = \frac 37$. So
$$P = \left(\tfrac 47, \tfrac{13}{7}, \tfrac{10}{7}\right), \qquad P' = \left(\tfrac 27, \tfrac 97, \tfrac{16}{7}\right), \qquad P - P' = \tfrac 27\,(1, 2, -3).$$
$P - P'$ is proportional to $v \times v'$, as it must be, and $d(P, P') = \frac 27 \sqrt{14}$: it coincides with (a). The common perpendicular is the line $P' + \Span((1, 2, -3))$, the same one found by Martelli.
:::

::: exercise hard Planes at a given distance
(a) Find the planes parallel to $\pi = \{x + 2y + 2z = 1\}$ that are at distance $2$ from $\pi$. (b) Find the points of the line $r = \{t\,(1, 1, 1)\}$ that are at distance $\sqrt 3$ from the plane $\sigma = \{x + y + z = 0\}$.
::: solution
(a) A parallel plane has the form $x + 2y + 2z = c$ (same normal). The distance from $\pi$ is $\frac{\lvert c - 1 \rvert}{3}$; imposing that it equals $2$: $\lvert c - 1 \rvert = 6$, that is $c = 7$ or $c = -5$. The planes are $x + 2y + 2z = 7$ and $x + 2y + 2z = -5$, one on each side.

(b) The point $(t, t, t)$ is at distance $\frac{\lvert 3t \rvert}{\sqrt 3} = \sqrt 3\,\lvert t \rvert$ from $\sigma$. Imposing $\sqrt 3\,\lvert t \rvert = \sqrt 3$: $t = \pm 1$. The points are $(1, 1, 1)$ and $(-1, -1, -1)$.
:::

::: exercise exam Line, plane, angle and distance (exam of 10/07/2024, problem 12)
Let $\pi_1 = \{x + y + 2z = 1\}$ and $\pi_2 = \{2x - 2y = 2\}$ be two planes in $\R^3$. (1) Compute the line $r = \pi_1 \cap \pi_2$ in the form $r = P + \Span(v)$. (2) Prove that $r$ and the plane $\pi_3 = \{x + y = -1\}$ are incident. (3) Compute the angle between $r$ and the plane $\pi_3$. (4) Compute the distance between $r$ and the line $s = {}^t(1, 0, 1) + \Span({}^t(2, 1, -2))$.
::: solution
(1) From the second equation, divided by 2: $x - y = 1$, that is $x = 1 + y$. In the first: $1 + y + y + 2z = 1$, that is $z = -y$. With $y = t$:
$$r = \{(1 + t,\ t,\ -t)\} = (1, 0, 0) + \Span((1, 1, -1)).$$
Check: $(1, 0, 0)$ satisfies $1 = 1$ and $2 = 2$; the direction is proportional to $(1, 1, 2) \times (2, -2, 0) = (4, 4, -4)$.

(2) The normal of $\pi_3$ is $n = (1, 1, 0)$ and $\langle (1, 1, -1), (1, 1, 0) \rangle = 2 \neq 0$: the direction of the line does not lie in the direction space of the plane, so the direction spaces add up to $\R^3$ and, by Proposition 23.10, $r$ and $\pi_3$ are incident. The point: $(1 + t) + t = -1$ gives $t = -1$, that is $(0, -1, 1)$.

(3) Projection of the direction $v = (1, 1, -1)$ onto the direction space of $\pi_3$:
$$p(v) = v - \frac{\langle v, n \rangle}{\langle n, n \rangle} n = (1, 1, -1) - \tfrac 22 (1, 1, 0) = (0, 0, -1).$$
Then $\cos\vartheta = \frac{\langle v, p(v) \rangle}{\lVert v \rVert \lVert p(v) \rVert} = \frac{1}{\sqrt 3 \cdot 1} = \frac{\sqrt 3}{3}$ and $\vartheta = \arccos\frac{\sqrt 3}{3}$ (about $54.7^\circ$). Check with the normal: $\sin\vartheta = \frac{2}{\sqrt 3 \sqrt 2} = \frac{\sqrt 6}{3}$, and $\frac 13 + \frac 69 = 1$.

(4) Directions $v = (1, 1, -1)$ and $v' = (2, 1, -2)$, not proportional. $v'' = (1, 0, 1) - (1, 0, 0) = (0, 0, 1)$.
$$\begin{aligned} v \times v' &= \big(1 \cdot (-2) - (-1) \cdot 1,\ -(1 \cdot (-2) - (-1) \cdot 2),\ 1 \cdot 1 - 1 \cdot 2\big) \\ &= (-1, 0, -1), \end{aligned}$$
of norm $\sqrt 2$. $\langle (-1, 0, -1), (0, 0, 1) \rangle = -1 \neq 0$: the lines are skew and $d(r, s) = \frac{1}{\sqrt 2} = \frac{\sqrt 2}{2}$.
:::

::: exercise exam Projection, intersection and angle
Let $v_1 = (1, 0, 1)$ and $v_2 = (1, 2, 1)$, and let $V = \Span(v_1, v_2)$. (1) Compute an orthogonal basis of $V$. (2) Compute the orthogonal projection of $w = (1, 1, 0)$ onto $V$. (3) Compute the intersection point and the angle of intersection between the line $r = (2, 0, 0) + \Span(w)$ and the plane $V$.
::: solution
(1) Gram–Schmidt: $u_1 = v_1 = (1, 0, 1)$ and
$$u_2 = v_2 - \frac{\langle v_2, u_1 \rangle}{\langle u_1, u_1 \rangle} u_1 = (1, 2, 1) - \tfrac 22 (1, 0, 1) = (0, 2, 0).$$
Orthogonal basis: $(1, 0, 1)$ and $(0, 2, 0)$ (or, more conveniently, $(0, 1, 0)$).

(2) $p_V(w) = \frac{\langle w, u_1 \rangle}{\langle u_1, u_1 \rangle} u_1 + \frac{\langle w, e_2 \rangle}{\langle e_2, e_2 \rangle} e_2 = \frac 12 (1, 0, 1) + 1 \cdot (0, 1, 0) = \left(\frac 12, 1, \frac 12\right)$. Check: $w - p_V(w) = \left(\frac 12, 0, -\frac 12\right)$ is orthogonal to $u_1$ ($\frac 12 - \frac 12 = 0$) and to $e_2$.

(3) The plane $V$ has normal $v_1 \times v_2 = (0 \cdot 1 - 1 \cdot 2,\ -(1 \cdot 1 - 1 \cdot 1),\ 1 \cdot 2 - 0 \cdot 1) = (-2, 0, 2)$, that is $V = \{x - z = 0\}$. The generic point of the line is $(2 + t, t, 0)$: $2 + t - 0 = 0$ gives $t = -2$, and the point is $(0, -2, 0)$. The angle is the one between $w$ and $p_V(w)$:
$$\cos\vartheta = \frac{\frac 12 + 1 + 0}{\sqrt 2 \cdot \sqrt{\frac 14 + 1 + \frac 14}} = \frac{3/2}{\sqrt 2 \cdot \sqrt{3/2}} = \frac{3/2}{\sqrt 3} = \frac{\sqrt 3}{2},$$
so $\vartheta = \frac{\pi}{6}$. Check with the normal $(1, 0, -1)$: $\sin\vartheta = \frac{\lvert 1 \rvert}{\sqrt 2 \cdot \sqrt 2} = \frac 12$. It is the same scheme as problems 12 of the exam sessions of 10/06/2024, 03/06/2026 and 07/09/2026.
:::

## Review questions

::: question When do you compute an angle and when a distance?
For two incident affine subspaces you compute the angle; for two disjoint subspaces the distance (for incident subspaces the distance is zero).
:::

::: question How is the angle between two incident lines defined? Why is the acute angle chosen?
It is the angle between the direction vectors $v$ and $v'$ (Definition 24.1). Since changing $v$ into $-v$ turns the angle into $\pi - \vartheta$, the choice is not unique: you always take the acute or right one, that is $\cos\vartheta = \frac{\lvert \langle v, v' \rangle \rvert}{\lVert v \rVert \lVert v' \rVert}$.
:::

::: question How is the angle between a line and a plane defined?
You bring the origin to the meeting point, project the direction $v$ of the line orthogonally onto the plane and take the angle between $v$ and the projection; if the projection is zero, the angle is $\frac{\pi}{2}$ (Definition 24.2).
:::

::: question What does Proposition 24.4 say and what is it for?
The angle between $v$ and the plane and the angle between $v$ and the normal vector that forms an acute angle with $v$ add up to $\frac{\pi}{2}$. It lets you avoid the projection: $\sin\vartheta = \frac{\lvert \langle v, n \rangle \rvert}{\lVert v \rVert \lVert n \rVert}$.
:::

::: question How do you compute the dihedral angle between two planes?
It is the acute (or right) angle between the lines spanned by the normal vectors (Proposition 24.7): for planes in Cartesian form, between the vectors of the coefficients.
:::

::: question How is the distance between a point and a line defined? What is the formula?
It is the distance between the point $P$ and the foot $Q$ of the perpendicular to the line through $P$ (Definition 24.10). If $r = P_0 + t v_0$, we have $d(P, r) = \frac{\lVert v_0 \times (P - P_0) \rVert}{\lVert v_0 \rVert}$ (Proposition 24.11).
:::

::: question Where does the formula for the point–line distance come from?
The area of the parallelogram with sides $v_0$ and $P - P_0$ is computed in two ways: with the cross product, $\lVert v_0 \times (P - P_0) \rVert$, and as base $\lVert v_0 \rVert$ times height $d(P, r)$.
:::

::: question How do you compute the distance between two parallel lines? And between two skew lines?
Parallel: it is the distance of a point of one from the other. Skew: $\frac{\lvert \det(v \mid v' \mid P_0' - P_0) \rvert}{\lVert v \times v' \rVert}$ (Proposition 24.14), that is the volume of the parallelepiped divided by the area of the base.
:::

::: question How do you tell whether two lines are incident, parallel or skew?
If the directions are proportional they are parallel (or coincident). Otherwise you compute $\det(v \mid v' \mid P_0' - P_0)$: if it is zero they are incident, if it is non-zero they are skew.
:::

::: question What is the formula for the point–plane distance and how is it proved?
$d(P_0, \pi) = \frac{\lvert a x_0 + b y_0 + c z_0 - d \rvert}{\sqrt{a^2 + b^2 + c^2}}$ (Proposition 24.17). You project onto the normal vector the vector that goes from any point of the plane to $P_0$.
:::

::: question How do you compute the distance between two parallel planes?
You write them with the same coefficients $ax + by + cz = d_1$ and $ax + by + cz = d_2$; the distance is $\frac{\lvert d_1 - d_2 \rvert}{\sqrt{a^2 + b^2 + c^2}}$.
:::

::: question When is a line perpendicular to a plane? And parallel?
Perpendicular when its direction is proportional to the normal vector; parallel (or contained in it) when the direction is orthogonal to the normal vector, that is $\langle v, n \rangle = 0$.
:::

## Glossary

```glossary
Angle between two vectors | The number $\vartheta \in [0, \pi]$ with $\cos\vartheta = \frac{\langle v, w \rangle}{\lVert v \rVert \lVert w \rVert}$ (Definition 20.12).
Angle between two lines | Acute or right angle between the direction vectors of two incident lines (Definition 24.1).
Angle between a line and a plane | Angle between the direction of the line and its orthogonal projection onto the plane; right if the projection is zero (Definition 24.2).
Dihedral angle | Angle between two incident planes, measured with two lines orthogonal to the common line; equal to the acute angle between the normals (Definition 24.6, Proposition 24.7).
Normal vector | Vector orthogonal to a plane; for $ax + by + cz = d$ it is $(a, b, c)$.
Orthogonal projection onto a plane | The vector $p_\pi(v)$ of the plane such that $v - p_\pi(v)$ is orthogonal to the plane; $p_\pi(v) = v - \frac{\langle v, n \rangle}{\langle n, n \rangle} n$.
Foot of the perpendicular | The point $Q$ of a line or of a plane closest to a given point; the segment $PQ$ is perpendicular.
Distance between points | $d(P, Q) = \lVert Q - P \rVert$ (Definition 24.9).
Point–line distance | $d(P, r) = \frac{\lVert v_0 \times (P - P_0) \rVert}{\lVert v_0 \rVert}$ (Proposition 24.11).
Skew lines | Lines in space that are neither incident nor parallel; they have a unique common perpendicular.
Common perpendicular | Line that meets two disjoint lines and is orthogonal to both; its part between the two lines measures the distance.
Distance between skew lines | $\frac{\lvert \det(v \mid v' \mid P_0' - P_0) \rvert}{\lVert v \times v' \rVert}$ (Proposition 24.14).
Coplanar lines | Lines contained in the same plane: incident or parallel; equivalent to $\det(v \mid v' \mid P_0' - P_0) = 0$.
Point–plane distance | $\frac{\lvert a x_0 + b y_0 + c z_0 - d \rvert}{\sqrt{a^2 + b^2 + c^2}}$ (Proposition 24.17).
Volume of the parallelepiped | $\lvert \det(u \mid v \mid w) \rvert$ for the parallelepiped spanned by $u, v, w$.
```

## Checklist

```checklist
- I can tell when to compute an angle and when a distance.
- I can compute the angle between two incident lines and I always choose the acute or right one.
- I can compute the angle between a line and a plane both with the projection (Definition 24.2) and with the normal vector (Proposition 24.4).
- I can compute the dihedral angle between two planes with the normal vectors.
- I can recognise the special cosines and leave the other answers as $\arccos(\dots)$.
- I can compute the point–line distance with the cross product and explain the formula with the area of the parallelogram.
- I can decide whether two lines are parallel, incident or skew with the determinant $\det(v \mid v' \mid P_0' - P_0)$.
- I can compute the distance between two parallel lines and between two skew lines.
- I can compute the point–plane distance and the foot of the perpendicular.
- I can compute the distance between two parallel planes after writing them with the same coefficients.
- I can rationalise the results to recognise them among the quiz answers.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 24 "Lo spazio euclideo III", pp. 122–128: sections 24.A (angles between incident subspaces) and 24.B (distances between disjoint subspaces), followed in order with the original numbering (Definitions 24.1, 24.2, 24.6, 24.9, 24.10, 24.13, 24.16; Propositions 24.4, 24.7, 24.11, 24.14, 24.17; Examples 24.3, 24.5, 24.8, 24.12, 24.15, 24.18). From the previous lessons: Definition 20.12 (angle), Definition 20.10 (distance), projections of lesson 21, Proposition 23.10. This lesson of the handouts has no exercise section.
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §8.1 (norm, angles, distances, orthogonal projection), §9.1.3 (volume of the parallelepiped), §9.2.6–9.2.10 (orthogonality, positions, angles, distances; the proof of Proposition 24.17, the coplanarity criterion and Example 9.2.28 on the common perpendicular come from there).
- **Exam papers** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): text reported from 07/09/2026 (question 7), 10/07/2025 (question 8) and 10/07/2024 (problem 12), with solutions written for these notes; the exam sessions of 24/01/2024, 08/02/2024, 10/06/2024, 06/09/2024, 16/01/2025, 03/06/2025, 02/09/2025, 05/02/2026 and 03/06/2026 are cited by type of question.
- The **"Beyond the handouts"** parts (proof of Proposition 24.4, formulas with the normal vector, foot of the perpendicular, parallel planes, coplanarity criterion, summary table, additional examples and exercises) are additions in these notes to connect the lesson to the book and to the exam.
