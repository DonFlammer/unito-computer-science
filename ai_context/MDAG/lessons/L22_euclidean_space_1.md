---
course: MDAG
module: AG
lesson: L22
title: Euclidean space I
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Linear Algebra and Geometry · Channels A, B and C · Lesson L22
description: >-
  Notes on lesson L22 of Linear Algebra and Geometry (MDAG, part 2): rotations and reflections of the plane,
  isometries between spaces with a scalar product, orthogonal matrices, classification of the isometries of the plane
  and of space, the cross product in R3, with exam-style quizzes and worked exercises.
lede: >-
  Which linear transformations move figures without deforming them? In the plane they are only rotations and
  reflections, and their matrices are the orthogonal matrices, those with ${}^tAA = I$. In space the antirotations are
  added. To close, the cross product $v \times w$: the fastest way to find a vector perpendicular to two vectors
  of $\R^3$, which you will use in all the lessons on the geometry of space.
material: handouts
facts:
  Handouts: lesson 22 · pp. 111–115
  Book: Martelli, §4.4.8–4.4.9, §7.5, §8.2 and §9.1
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 90–120 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 22 "Lo spazio euclideo I"; B. Martelli, Geometria e algebra
  lineare, §4.4.8–4.4.9, §7.5, §8.2 and §9.1
italian_file: L22_spazio_euclideo_1.html
html_notes: notes/MDAG/L22_euclidean_space_1.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L22_spazio_euclideo_1.md
---

## In brief

- In these lessons on Euclidean space $\R^n$ always has the **Euclidean scalar product**. The **linear isometries** are the linear transformations that do not change lengths, distances and angles; they fix the origin.
- The **rotation** by an angle $\vartheta$ (anticlockwise) has matrix $\mathrm{Rot}_\vartheta = \begin{pmatrix} \cos\vartheta & -\sin\vartheta \\ \sin\vartheta & \cos\vartheta \end{pmatrix}$, with determinant $1$.
- The **reflection** in the line that forms an angle $\frac\vartheta2$ with the $x$ axis has matrix $\mathrm{Rif}_\vartheta = \begin{pmatrix} \cos\vartheta & \sin\vartheta \\ \sin\vartheta & -\cos\vartheta \end{pmatrix}$, with determinant $-1$. Careful: the line has angle $\frac\vartheta2$, not $\vartheta$.
- An **isometry** is an isomorphism that preserves the scalar product. It is enough to check it on the vectors of a basis; with a positive definite product it is equivalent to preserving norms, or distances.
- $L_A$ is an isometry of $\R^n$ if and only if ${}^tAA = I_n$: $A$ is called **orthogonal**. Its columns form an orthonormal basis, $A^{-1} = {}^tA$ and $\det A = \pm1$.
- The $2 \times 2$ orthogonal matrices are exactly the $\mathrm{Rot}_\vartheta$ and the $\mathrm{Rif}_\vartheta$: the isometries of the plane are **rotations and reflections**. In space they are **rotations and antirotations**.
- The **cross product** of $v, w \in \R^3$ is $v \times w = (v_2w_3 - v_3w_2,\ v_3w_1 - v_1w_3,\ v_1w_2 - v_2w_1)$: it is orthogonal to both $v$ and $w$, and it is zero if and only if $v$ and $w$ are dependent.
- If $v$ and $w$ are independent, $v, w, v \times w$ is a basis of $\R^3$. At the exam the cross product is needed above all to find directions of lines and normal vectors to planes (lessons L23–L24).

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## Transformations that do not deform (p. 111)

Take a sheet with a drawing and turn it on the table around a fixed point, or flip it face down as in a mirror: the drawing moves, but no length and no angle changes. These transformations are called **isometries** ("same measure").

In these lessons the handouts always use the **Euclidean scalar product** on the **Euclidean space** $\R^n$, and consider only **linear isometries**, that is isometries that fix the origin: they are linear maps $L_A(x) = Ax$ (lesson L14), so they send $0$ to $0$. Translations, which also move the origin, are not linear and stay out of these lessons.

A reminder that will be needed all the time: **the columns of $A$ are the images of the vectors of the canonical basis**, $Ae_1 = A^1$ and $Ae_2 = A^2$. To write the matrix of a transformation of the plane it is enough to know where $e_1$ and $e_2$ go.

## Rotations of the plane (p. 111)

Rotate the plane by an angle $\vartheta$ anticlockwise around the origin. The vector $e_1 = (1, 0)$ lies on the circle of radius 1 at angle 0: after the rotation it lies at angle $\vartheta$, that is at the point $(\cos\vartheta, \sin\vartheta)$. The vector $e_2 = (0, 1)$ lies at angle $\frac\pi2$ and ends up at angle $\vartheta + \frac\pi2$, that is at the point $\left(\cos\left(\vartheta + \frac\pi2\right), \sin\left(\vartheta + \frac\pi2\right)\right) = (-\sin\vartheta, \cos\vartheta)$. These two images are the columns of the matrix.

```graph
title: The rotation by $\frac\pi6$ sends $e_1$ to $(\cos\frac\pi6, \sin\frac\pi6)$ and $e_2$ to $(-\sin\frac\pi6, \cos\frac\pi6)$
x: -1.2 1.4
y: -0.4 1.3
vector: 1 0 | grey | $e_1$ | s
vector: 0 1 | grey | $e_2$ | e
vector: sqrt(3)/2 1/2 | accent | thick | $\mathrm{Rot}\,e_1$ | e
vector: -1/2 sqrt(3)/2 | blue | thick | $\mathrm{Rot}\,e_2$ | nw
arc: 0 0 0.45 0 pi/6 | amber | $\vartheta$
arc: 0 0 0.45 pi/2 2pi/3 | amber | $\vartheta$
```

> [!DEF] 22.1 · Rotation
> A **rotation** by an angle $\vartheta$ is the transformation $L_A : \R^2 \to \R^2$ determined by the matrix $A = \mathrm{Rot}_\vartheta$, with
> $$\mathrm{Rot}_\vartheta = \begin{pmatrix} \cos\vartheta & -\sin\vartheta \\ \sin\vartheta & \cos\vartheta \end{pmatrix}.$$

Examples to be able to write on the spot:

| $\vartheta$ | $\mathrm{Rot}_\vartheta$ | What it does |
|---|---|---|
| $\frac\pi2$ | $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ | $(x, y) \mapsto (-y, x)$: for example $(1, 2) \mapsto (-2, 1)$ |
| $\pi$ | $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$ | $(x, y) \mapsto (-x, -y)$: the half turn is $-I_2$ |
| $\frac\pi3$ | $\begin{pmatrix} \frac12 & -\frac{\sqrt3}2 \\ \frac{\sqrt3}2 & \frac12 \end{pmatrix}$ | $(2, 0) \mapsto (1, \sqrt3)$ |
| $\frac\pi4$ | $\frac{\sqrt2}2\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$ | $(1, 0) \mapsto \left(\frac{\sqrt2}2, \frac{\sqrt2}2\right)$ |

> [!PROP] 22.2
> The transformation $L_A$ really is an anticlockwise rotation of the plane by the angle $\vartheta$ around the origin.

> [!PROOF] of Proposition 22.2 (from Martelli's book)
> The handouts do not prove it; here is Martelli's argument (Proposition 4.4.15). Write a point in **polar coordinates**: $x = \varrho\cos\varphi$, $y = \varrho\sin\varphi$, where $\varrho$ is the distance from the origin and $\varphi$ the angle with the $x$ axis. Then
> $$\begin{aligned} \mathrm{Rot}_\vartheta\begin{pmatrix} \varrho\cos\varphi \\ \varrho\sin\varphi \end{pmatrix} &= \begin{pmatrix} \varrho(\cos\vartheta\cos\varphi - \sin\vartheta\sin\varphi) \\ \varrho(\sin\vartheta\cos\varphi + \cos\vartheta\sin\varphi) \end{pmatrix} \\ &= \begin{pmatrix} \varrho\cos(\vartheta + \varphi) \\ \varrho\sin(\vartheta + \varphi) \end{pmatrix}, \end{aligned}$$
> by the addition formulas for cosine and sine. The point with polar coordinates $(\varrho, \varphi)$ goes to the point $(\varrho, \varphi + \vartheta)$: same distance from the origin, angle increased by $\vartheta$. It is the anticlockwise rotation by the angle $\vartheta$.

The handouts note that the matrix $\mathrm{Rot}_\vartheta$ always has determinant

$$\begin{aligned} \det\mathrm{Rot}_\vartheta &= \cos\vartheta\cos\vartheta - (-\sin\vartheta)\sin\vartheta \\ &= \cos^2\vartheta + \sin^2\vartheta = 1. \end{aligned}$$

Geometrically (Martelli, §3.3.10) the absolute value of the determinant is the factor by which areas are multiplied, and the sign says whether the orientation is preserved: a rotation preserves areas and does not "mirror" figures.

> [!BEYOND] Composing and inverting rotations
> - Rotating by $\beta$ and then by $\alpha$ is rotating by $\alpha + \beta$: $\mathrm{Rot}_\alpha\,\mathrm{Rot}_\beta = \mathrm{Rot}_{\alpha + \beta}$ (multiplying the matrices the addition formulas appear again). It is the same rule as the multiplication of complex numbers of modulus 1 (lesson L03): the angles add up.
> - The inverse of $\mathrm{Rot}_\vartheta$ is the rotation backwards, $\mathrm{Rot}_{-\vartheta}$, and it coincides with the **transpose**: ${}^t\mathrm{Rot}_\vartheta = \begin{pmatrix} \cos\vartheta & \sin\vartheta \\ -\sin\vartheta & \cos\vartheta \end{pmatrix} = \mathrm{Rot}_{-\vartheta}$. You will soon see that it is a property of all orthogonal matrices.

Try it with the tool: the initial matrix is $\begin{pmatrix} 0.6 & -0.8 \\ 0.8 & 0.6 \end{pmatrix} = \mathrm{Rot}_\vartheta$ with $\cos\vartheta = \frac35$ and $\sin\vartheta = \frac45$. Move the "from I to A" slider: the grid turns without deforming, the coloured square keeps its area ($\det A = 1$) and the tool points out that there are no real eigenvectors (lesson L17). Then press "90° rotation", "45° rotation" and "reflection", or type the matrix $\begin{pmatrix} 0.6 & 0.8 \\ 0.8 & -0.6 \end{pmatrix}$, the reflection of the next section: the square changes colour because the orientation is reversed.

```widget matrice
title: Rotations and reflections as transformations of the plane
a: 0.6 -0.8; 0.8 0.6
x: 2 1
raggio: 3
```

## Reflections of the plane (p. 111)

Three reflections that are easy to picture, with the images of $e_1$ and $e_2$ as columns:

| Reflection in | $e_1 \mapsto$ | $e_2 \mapsto$ | Matrix |
|---|---|---|---|
| the $x$ axis | $(1, 0)$ | $(0, -1)$ | $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ |
| the bisector $y = x$ | $(0, 1)$ | $(1, 0)$ | $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ |
| the $y$ axis | $(-1, 0)$ | $(0, 1)$ | $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$ |

In general you fix an angle $\vartheta$ and consider the vector line $r$ that forms an angle $\frac\vartheta2$ with the $x$ axis. Why exactly $\frac\vartheta2$? Reflecting in $r$, the vector $e_1$ (angle 0) goes to the vector symmetric with respect to $r$, which has angle $2 \cdot \frac\vartheta2 = \vartheta$: the first column is $(\cos\vartheta, \sin\vartheta)$, as in the rotation. It is convenient for the angle in the matrix to be $\vartheta$, and then the line has angle $\frac\vartheta2$.

> [!DEF] 22.3 · Reflection
> An (orthogonal) **reflection** in the line $r$ is the transformation $L_A : \R^2 \to \R^2$ determined by the matrix $A = \mathrm{Rif}_\vartheta$, with
> $$\mathrm{Rif}_\vartheta = \begin{pmatrix} \cos\vartheta & \sin\vartheta \\ \sin\vartheta & -\cos\vartheta \end{pmatrix}.$$

The three reflections in the table are $\mathrm{Rif}_0$ ($x$ axis, angle $0$), $\mathrm{Rif}_{\pi/2}$ (bisector, angle $\frac\pi4$) and $\mathrm{Rif}_\pi$ ($y$ axis, angle $\frac\pi2$).

> [!PROP] 22.4
> The transformation $L_A$ really is a reflection of the plane in $r$.

> [!PROOF] of Proposition 22.4 (from Martelli's book)
> As for the rotation (Martelli, Proposition 4.4.17), in polar coordinates:
> $$\begin{aligned} \mathrm{Rif}_\vartheta\begin{pmatrix} \varrho\cos\varphi \\ \varrho\sin\varphi \end{pmatrix} &= \begin{pmatrix} \varrho(\cos\vartheta\cos\varphi + \sin\vartheta\sin\varphi) \\ \varrho(\sin\vartheta\cos\varphi - \cos\vartheta\sin\varphi) \end{pmatrix} \\ &= \begin{pmatrix} \varrho\cos(\vartheta - \varphi) \\ \varrho\sin(\vartheta - \varphi) \end{pmatrix}. \end{aligned}$$
> The point with angle $\varphi$ goes to the point with angle $\vartheta - \varphi$, at the same distance from the origin. The two angles $\varphi$ and $\vartheta - \varphi$ have average $\frac\vartheta2$: they are symmetric with respect to the line $r$. In particular the points of $r$ ($\varphi = \frac\vartheta2$) stay fixed.

The handouts note that the matrix $\mathrm{Rif}_\vartheta$ always has determinant

$$\det\mathrm{Rif}_\vartheta = -\cos^2\vartheta - \sin^2\vartheta = -1.$$

The minus sign says that the reflection **reverses the orientation**: a turn anticlockwise becomes clockwise, like the right hand in the mirror.

> [!REMARK] The reflection in a convenient basis
> Let $s$ be the line orthogonal to $r$, that is the one that forms an angle $\frac\vartheta2 + \frac\pi2$ with the $x$ axis, and let $v_1$ and $v_2$ be vectors in the direction of the lines $r$ and $s$, respectively. The reflection $f$ is represented more easily with respect to the basis $\mathcal B = \{v_1, v_2\}$: since $f(v_1) = v_1$ and $f(v_2) = -v_2$, the matrix associated with the reflection with respect to $\mathcal B$ is simply
> $$\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}.$$

In other words $v_1$ is an eigenvector with eigenvalue $1$ and $v_2$ an eigenvector with eigenvalue $-1$ (lesson L17): the reflection is **diagonalisable**, and the two lines of eigenvectors are perpendicular.

> [!EXAMPLE] The reflection in the line of $(2, 1)$, in three ways
> **1. With the angle.** The line $r = \Span((2, 1))$ forms with the $x$ axis an angle $\frac\vartheta2$ with $\tan\frac\vartheta2 = \frac12$. With the double-angle formulas, setting $t = \tan\frac\vartheta2 = \frac12$:
> $$\begin{aligned} \cos\vartheta &= \frac{1 - t^2}{1 + t^2} = \frac{3/4}{5/4} = \frac35, \\ \sin\vartheta &= \frac{2t}{1 + t^2} = \frac{1}{5/4} = \frac45, \end{aligned}$$
> $$\mathrm{Rif}_\vartheta = \begin{pmatrix} \frac35 & \frac45 \\ \frac45 & -\frac35 \end{pmatrix}.$$
> Check: $\mathrm{Rif}_\vartheta\,(2, 1) = \left(\frac65 + \frac45, \frac85 - \frac35\right) = (2, 1)$ stays fixed, and $(-1, 2)$, perpendicular to $r$, goes to $\left(-\frac35 + \frac85, -\frac45 - \frac65\right) = (1, -2)$, its opposite. ✓
>
> **2. With the projection** (lesson L21). With $n = (-1, 2)$ perpendicular to $r$, reflecting means taking away **twice** the component along $n$: $f(v) = v - 2\,\frac{\langle v, n\rangle}{\langle n, n\rangle}\,n$. Then $f(e_1) = (1, 0) - 2 \cdot \frac{-1}{5}(-1, 2) = \left(\frac35, \frac45\right)$ and $f(e_2) = (0, 1) - 2 \cdot \frac25(-1, 2) = \left(\frac45, -\frac35\right)$: they are the columns found above.
>
> **3. With the change of basis** (lesson L16). In the basis $\mathcal B = \{(2, 1), (-1, 2)\}$ the matrix is $D = \operatorname{diag}(1, -1)$. With $M = [\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 2 & -1 \\ 1 & 2 \end{pmatrix}$ and $M^{-1} = \frac15\begin{pmatrix} 2 & 1 \\ -1 & 2 \end{pmatrix}$:
> $$M\,D\,M^{-1} = \begin{pmatrix} 2 & 1 \\ 1 & -2 \end{pmatrix}\cdot\frac15\begin{pmatrix} 2 & 1 \\ -1 & 2 \end{pmatrix} = \frac15\begin{pmatrix} 3 & 4 \\ 4 & -3 \end{pmatrix}.$$

```graph
title: The reflection in $r = \Span((2, 1))$ sends $v = (1, 2)$ to $\left(\frac{11}5, -\frac25\right)$
x: -1.5 3
y: -1 2.5
line: 0 0 2 1 | violet | $r$ | ne
vector: 1 2 | accent | thick | $v$ | n
vector: 11/5 -2/5 | blue | thick | $f(v)$ | se
segment: 1 2 11/5 -2/5 | grey | dashed
point: 8/5 4/5 | amber
```

The yellow point is the midpoint between $v$ and $f(v)$: it lies on the line $r$, and the dashed segment is perpendicular to $r$. It is the definition of symmetry with respect to a line.

> [!PITFALL] The angle of the line is half
> $\mathrm{Rif}_\vartheta$ reflects in the line with angle $\frac\vartheta2$, **not** $\vartheta$. For example $\mathrm{Rif}_{\pi/2} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ reflects in the bisector $y = x$ (angle $\frac\pi4$), not in the $y$ axis. To avoid mistakes, find the line as the **eigenspace of the eigenvalue 1**: the vectors with $Av = v$.

## Isometries between spaces with a scalar product (p. 112)

Rotations and reflections preserve lengths and angles. We need a definition that works for every space with a scalar product, like polynomials.

> [!DEF] 22.5 · Isometry
> Let $V$ and $W$ be two vector spaces, each equipped with a scalar product. An **isometry** is an isomorphism $T : V \to W$ such that
> $$\langle v, w\rangle = \langle T(v), T(w)\rangle \qquad \forall\, v, w \in V.$$

Piece by piece:

- $T$ is an **isomorphism**: linear and bijective (lesson L16);
- on the left there is the scalar product of $V$, on the right that of $W$: they can be different;
- preserving the scalar product means preserving **everything** that is derived from it: norms, distances, angles, orthogonality.

> [!EXAMPLE] A rotation preserves the scalar product
> With $x = (1, 2)$, $y = (3, -1)$ and $\mathrm{Rot}_{\pi/2}$: $\mathrm{Rot}_{\pi/2}\,x = (-2, 1)$ and $\mathrm{Rot}_{\pi/2}\,y = (1, 3)$. Before: $\langle x, y\rangle = 3 - 2 = 1$. After: $\langle (-2, 1), (1, 3)\rangle = -2 + 3 = 1$. ✓
>
> Two invertible transformations that are **not** isometries: the scaling $\begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix}$ sends $e_1$ to $(2, 0)$, which has norm 2; the shear $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ sends $e_2$ to $(1, 1)$, which has norm $\sqrt2$.

In fact it is enough to check the condition on the vectors of a fixed basis $\mathcal B = \{v_1, \dots, v_n\}$ of $V$.

> [!PROP] 22.6
> An isomorphism $T$ is an isometry if and only if
> $$\langle v_i, v_j\rangle = \langle T(v_i), T(v_j)\rangle \qquad \forall\, i, j.$$

The handouts' explanation, step by step. The condition is necessary, because it is the definition applied to the vectors of the basis. Conversely, write two arbitrary vectors as combinations $v = \sum_i \lambda_iv_i$ and $w = \sum_j \mu_jv_j$. By bilinearity (Proposition 19.15) and linearity of $T$:

$$\begin{aligned} \langle v, w\rangle &= \sum_{i,j} \lambda_i\mu_j\,\langle v_i, v_j\rangle, \\ \langle T(v), T(w)\rangle &= \Big\langle \sum_i \lambda_iT(v_i), \sum_j \mu_jT(v_j)\Big\rangle \\ &= \sum_{i,j} \lambda_i\mu_j\,\langle T(v_i), T(v_j)\rangle. \end{aligned}$$

If the products between the vectors of the basis are equal, the two sums are equal too.

With a positive definite product there are two more equivalent ways of saying "isometry".

> [!PROP] 22.7
> Let $T : V \to W$ be an isomorphism between spaces equipped with a positive definite scalar product. The following facts are equivalent:
> 1. $T$ is an isometry,
> 2. $T$ preserves the norm, that is $\|T(v)\| = \|v\|$ $\forall\, v \in V$,
> 3. $T$ preserves the distance, that is $d(v, w) = d(T(v), T(w))$ $\forall\, v, w \in V$.

> [!PROOF] of Proposition 22.7 (from Martelli's book)
> The handouts do not prove it; here are Martelli's arguments (Proposition 8.2.1).
> - **(1) ⇒ (2).** $\|T(v)\|^2 = \langle T(v), T(v)\rangle = \langle v, v\rangle = \|v\|^2$.
> - **(2) ⇒ (3).** By linearity, $d(T(v), T(w)) = \|T(v) - T(w)\| = \|T(v - w)\| = \|v - w\| = d(v, w)$.
> - **(3) ⇒ (2).** Since $T(0) = 0$: $\|v\| = d(0, v) = d(T(0), T(v)) = d(0, T(v)) = \|T(v)\|$.
> - **(2) ⇒ (1).** You rebuild the scalar product from the norms (polarisation, lesson L20):
>   $$\begin{aligned} \langle v, w\rangle &= \frac{\|v + w\|^2 - \|v\|^2 - \|w\|^2}{2} \\ &= \frac{\|T(v) + T(w)\|^2 - \|T(v)\|^2 - \|T(w)\|^2}{2} = \langle T(v), T(w)\rangle, \end{aligned}$$
>   where the second step uses $\|v + w\| = \|T(v + w)\| = \|T(v) + T(w)\|$.

**The language of matrices.** Let $V$ and $V'$ be spaces equipped with scalar products $g$ and $g'$ and with bases $\mathcal B$ and $\mathcal B'$, and let $T : V \to V'$ be an isomorphism. Let

$$S = [g]_{\mathcal B}, \qquad S' = [g']_{\mathcal B'}, \qquad A = [T]^{\mathcal B}_{\mathcal B'}$$

be the matrices associated with all the players on stage: the two scalar products (lesson L19) and the map (lesson L15).

> [!PROP] 22.8
> The isomorphism $T$ is an isometry if and only if
> $$S = {}^tA\,S'\,A.$$

The explanation: by Proposition 22.6 it is enough to check the vectors of the basis. The column $A^i$ contains the coordinates of $T(v_i)$ in the basis $\mathcal B'$, that is $A^i = [T(v_i)]_{\mathcal B'}$. By Corollary 19.16 in the basis $\mathcal B'$:

$$({}^tA\,S'\,A)_{ij} = {}^t(A^i)\,S'\,A^j = g'(T(v_i), T(v_j)),$$

while $S_{ij} = g(v_i, v_j)$. The two matrices are equal exactly when $g(v_i, v_j) = g'(T(v_i), T(v_j))$ for every $i, j$.

## Orthogonal matrices (p. 113)

The case we care about most is $\R^n$ with its Euclidean scalar product, and an endomorphism $L_A : \R^n \to \R^n$ with $A \in M(n)$. In Proposition 22.8 take the canonical basis as the bases: then $S = S' = I_n$ and $A$ is the matrix of $L_A$, so the condition becomes $I_n = {}^tA\,I_n\,A$.

> [!COROLLARY] 22.9
> The endomorphism $L_A$ is an isometry $\iff {}^tA\,A = I_n$.

> [!DEF] 22.10 · Orthogonal matrix
> A matrix $A \in M(n)$ with real entries such that ${}^tA\,A = I_n$ is called **orthogonal**.

What does ${}^tA\,A = I_n$ mean in practice? The entry $(i, j)$ of ${}^tA\,A$ is row $i$ of ${}^tA$ times column $j$ of $A$, that is the scalar product between the columns $A^i$ and $A^j$. So:

$${}^tA\,A = I_n \iff \langle A^i, A^j\rangle = \begin{cases} 1 & \text{if } i = j, \\ 0 & \text{if } i \neq j, \end{cases}$$

that is ${}^tA\,A = I_n$ exactly when **the columns of $A$ form an orthonormal basis of $\R^n$**.

> [!BEYOND] The properties of orthogonal matrices
> From ${}^tA\,A = I_n$ it follows (Martelli, §8.2.2) that:
> - **the inverse is the transpose**: $A^{-1} = {}^tA$, so also $A\,{}^tA = I_n$ (the **rows** are orthonormal too);
> - $\det A = \pm1$: by Binet's theorem $1 = \det I_n = \det({}^tA)\det A = (\det A)^2$;
> - any **real eigenvalues** are $\pm1$: if $Av = \lambda v$ with $v \neq 0$, then $\|v\| = \|Av\| = |\lambda|\,\|v\|$, so $|\lambda| = 1$;
> - the product of two orthogonal matrices is orthogonal: ${}^t(AB)(AB) = {}^tB\,({}^tA\,A)\,B = {}^tB\,B = I_n$.

> [!EXAMPLE] Orthogonal or not?
> 1. $\frac15\begin{pmatrix} 3 & -4 \\ 4 & 3 \end{pmatrix}$: columns $\frac15(3, 4)$ and $\frac15(-4, 3)$, both of norm $\frac{\sqrt{9 + 16}}{5} = 1$, and product $\frac{-12 + 12}{25} = 0$. **Orthogonal** (it is $\mathrm{Rot}_\vartheta$ with $\cos\vartheta = \frac35$).
> 2. $\begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}$: orthogonal columns ($1 - 1 = 0$) but of norm $\sqrt2$. **Not orthogonal**: it is $\sqrt2\,\mathrm{Rot}_{-\pi/4}$, a rotation followed by an enlargement.
> 3. $\frac13\begin{pmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1 \end{pmatrix}$: each column has norm $\frac{\sqrt{1 + 4 + 4}}{3} = 1$ and the products between columns are $\frac{2 + 2 - 4}{9} = 0$, $\frac{2 - 4 + 2}{9} = 0$, $\frac{4 - 2 - 2}{9} = 0$. **Orthogonal**, with determinant $-1$.

> [!PITFALL] Two conditions that are not enough
> - **Orthogonal** columns are not enough: you need **orthonormal** columns (example 2 above). The name "orthogonal matrix" is misleading.
> - $\det A = \pm1$ is not enough: $\begin{pmatrix} 0 & 2 \\ \frac12 & 0 \end{pmatrix}$ has determinant $-1$ but the columns have norms $\frac12$ and $2$. The determinant $\pm1$ is a consequence of orthogonality, not a characterisation.

## All the isometries of the plane (p. 113)

We want to classify completely the isometries of the plane $\R^2$ with the Euclidean scalar product. By Corollary 22.9 it is enough to classify the $2 \times 2$ orthogonal matrices, and a few lines are enough to describe them all.

> [!PROP] 22.11
> The orthogonal matrices in $M(2)$ are the following:
> $$\mathrm{Rot}_\vartheta = \begin{pmatrix} \cos\vartheta & -\sin\vartheta \\ \sin\vartheta & \cos\vartheta \end{pmatrix},$$
> $$\mathrm{Rif}_\vartheta = \begin{pmatrix} \cos\vartheta & \sin\vartheta \\ \sin\vartheta & -\cos\vartheta \end{pmatrix}$$
> as $\vartheta \in [0, 2\pi)$ varies.

The handouts' proof, step by step:

1. The columns $A^1$ and $A^2$ of an orthogonal matrix $A$ form an orthonormal basis of $\R^2$.
2. $A^1$ is a unit vector: it lies on the circle of radius 1, so it can be written $A^1 = (\cos\vartheta, \sin\vartheta)$ for a unique $\vartheta \in [0, 2\pi)$.
3. $A^2$ must be orthogonal to $A^1$: by Example 21.1 it lies on the line $\Span((-\sin\vartheta, \cos\vartheta))$. It must also be a unit vector, and on that line there are only two vectors of norm 1, which differ in sign: $A^2 = \pm(-\sin\vartheta, \cos\vartheta)$.
4. With the $+$ sign you get $\mathrm{Rot}_\vartheta$, with the $-$ sign you get $\mathrm{Rif}_\vartheta$. Conversely, both matrices are orthogonal (you check it as in the previous example). $\square$

> [!COROLLARY] 22.12
> The isometries of $\R^2$ are rotations and reflections.

The determinant tells them apart: **$\det A = 1$ rotation, $\det A = -1$ reflection**.

> [!METHOD] Recognising an isometry of the plane
> 1. Check that $A$ is orthogonal: columns of norm 1 and orthogonal to each other.
> 2. Compute $\det A$.
> 3. If $\det A = 1$ it is the rotation $\mathrm{Rot}_\vartheta$: read $\cos\vartheta = a_{11}$ and $\sin\vartheta = a_{21}$ off the first column, and find $\vartheta \in [0, 2\pi)$.
> 4. If $\det A = -1$ it is a reflection: the axis is the eigenspace of the eigenvalue 1, that is the solutions of $(A - I)v = 0$ (or the line with angle $\frac\vartheta2$, with $\vartheta$ read off the first column).

> [!EXAMPLE] Two matrices to recognise
> - $A = \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$: columns $(0, -1)$ and $(1, 0)$, orthonormal; $\det A = 0 - (1)(-1) = 1$. It is a rotation with $\cos\vartheta = 0$ and $\sin\vartheta = -1$, that is $\vartheta = \frac{3\pi}2$: a quarter turn **clockwise**. Check: $A e_1 = (0, -1)$.
> - $B = \begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$: $\det B = -1$, a reflection. The first column $(-1, 0)$ gives $\vartheta = \pi$, so the axis has angle $\frac\pi2$: it is the $y$ axis. Check: $B(0, 1) = (0, 1)$.

> [!EXAM] The set of orthogonal matrices is not a subspace
> The set $O(2)$ of the $2 \times 2$ orthogonal matrices is not a subspace of $M(2, \R)$: it does not contain the zero matrix, and the sum of two orthogonal matrices is in general not orthogonal. By Proposition 22.11 it is made of two "circles" of matrices, $\mathrm{Rot}_\vartheta$ and $\mathrm{Rif}_\vartheta$, parametrised by the angle $\vartheta$. An exam session built a question on it: you find it solved in "Towards the exam".

## Isometries of space (p. 113)

With a little more work, but in a similar way, you classify the isometries of $\R^3$. First the two kinds of transformation that appear.

- The **rotation** by an angle $\vartheta$ around an axis $r$ (a line through the origin) turns space around $r$: the points of $r$ stay fixed, the plane $r^\perp$ turns as in the plane. Around the $z$ axis the matrix is
  $$\begin{pmatrix} \cos\vartheta & -\sin\vartheta & 0 \\ \sin\vartheta & \cos\vartheta & 0 \\ 0 & 0 & 1 \end{pmatrix}, \qquad \det = 1.$$
- An **antirotation** does the same rotation and then reflects in the plane $U = r^\perp$ perpendicular to the axis. Around the $z$ axis the plane $U$ is $\{z = 0\}$, and reflecting in it changes the sign of the $z$ coordinate:
  $$\begin{pmatrix} \cos\vartheta & -\sin\vartheta & 0 \\ \sin\vartheta & \cos\vartheta & 0 \\ 0 & 0 & -1 \end{pmatrix}, \qquad \det = -1.$$

> [!THEOREM] 22.13
> Every isometry of $\R^3$ is a rotation or an antirotation. Here an antirotation $T : \R^3 \to \R^3$ is the composition of a rotation around an axis $r$ and a reflection in the plane $U = r^\perp$.

Piece by piece:

- here too the determinant tells the two cases apart: **rotation if $\det = 1$, antirotation if $\det = -1$**;
- special cases (Martelli, §8.2.5–8.2.6): the rotation by angle $0$ is the identity, the one by angle $\pi$ is the reflection in the line $r$; the antirotation by angle $0$ is the reflection in the plane $U$, the one by angle $\pi$ is $-I_3$, the reflection in the origin.

> [!BEYOND] Recognising axis and angle
> Martelli (p. 261) gives a recipe for an orthogonal matrix $A$ of order 3, with $\det A = \pm1$:
> $$\operatorname{tr}A = \det A + 2\cos\vartheta, \quad \text{that is} \quad \cos\vartheta = \frac{\operatorname{tr}A - \det A}{2}.$$
> The axis is the eigenspace of the eigenvalue $1$ for a rotation, of $-1$ for an antirotation (if $\vartheta \neq 0, \pi$). Example: $A = \begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$ sends $e_1 \to e_2 \to e_3 \to e_1$. It is orthogonal (the columns are the vectors of the canonical basis in another order), $\det A = 1$, $\operatorname{tr}A = 0$, so it is a rotation with $\cos\vartheta = -\frac12$, that is $\vartheta = \frac{2\pi}3$. The axis is $\Ker(A - I) = \Span((1, 1, 1))$: indeed $A(1, 1, 1) = (1, 1, 1)$. Three applications of the rotation bring every vector back to its starting position, as it must be for $3 \cdot \frac{2\pi}{3} = 2\pi$.
>
> **Why the theorem is true** (idea of Martelli's proof, Theorem 8.2.13): the characteristic polynomial of $A$ has degree 3, so it has at least one real root; by what we saw above it is $\pm1$, with an eigenvector $v$ of norm 1. The plane $v^\perp$ is sent to itself, and there $A$ acts as an isometry of the plane: a rotation or a reflection. Putting the cases together you get rotations and antirotations.

## The cross product (pp. 114–115)

In space you constantly need a vector **perpendicular to two given vectors**: the normal direction to a plane, the direction of the line of intersection of two planes. You can solve a system (lesson L21: $W^\perp$), but there is a direct formula.

> [!DEF] 22.14 · Cross product
> Consider two vectors $v, w \in \R^3$:
> $$v = \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix}, \qquad w = \begin{pmatrix} w_1 \\ w_2 \\ w_3 \end{pmatrix}.$$
> The **cross product** (or vector product) of $v$ and $w$ is the vector
> $$v \times w = \begin{pmatrix} v_2w_3 - v_3w_2 \\ v_3w_1 - v_1w_3 \\ v_1w_2 - v_2w_1 \end{pmatrix}.$$

Piece by piece:

- unlike the scalar product, the result is a **vector** of $\R^3$, and the product is defined **only in $\R^3$**;
- each coordinate is a "$2 \times 2$ determinant" made with the **other two** coordinates: the first uses coordinates 2 and 3, the second coordinates 3 and 1, the third coordinates 1 and 2 (the cyclic order $1 \to 2 \to 3 \to 1$ helps to remember the signs).

**With the minors.** The handouts note that

$$v \times w = \begin{pmatrix} d_1 \\ -d_2 \\ d_3 \end{pmatrix},$$

where $d_i$ is the determinant of the $2 \times 2$ minor obtained by deleting the $i$-th row from the matrix

$$A = \begin{pmatrix} v_1 & w_1 \\ v_2 & w_2 \\ v_3 & w_3 \end{pmatrix}.$$

Watch out for the **minus sign** in front of $d_2$: $d_2 = v_1w_3 - v_3w_1$, and the second coordinate is $-d_2 = v_3w_1 - v_1w_3$.

**The mnemonic rule.** You get the cross product by formally computing the determinant of this "matrix", expanded along the third column (Laplace expansion, Theorem 9.6):

$$\begin{aligned} v \times w &= \det\begin{pmatrix} v_1 & w_1 & e_1 \\ v_2 & w_2 & e_2 \\ v_3 & w_3 & e_3 \end{pmatrix} \\ &= \det\begin{pmatrix} v_2 & w_2 \\ v_3 & w_3 \end{pmatrix}e_1 - \det\begin{pmatrix} v_1 & w_1 \\ v_3 & w_3 \end{pmatrix}e_2 + \det\begin{pmatrix} v_1 & w_1 \\ v_2 & w_2 \end{pmatrix}e_3. \end{aligned}$$

It is only a mnemonic rule: that matrix is not a real matrix, because $e_1, e_2, e_3$ are not numbers but the vectors of the canonical basis.

> [!EXAMPLE] Computing $(1, 2, 3) \times (4, 5, 6)$
> With $v = (1, 2, 3)$ and $w = (4, 5, 6)$, coordinate by coordinate:
> - first: $v_2w_3 - v_3w_2 = 2 \cdot 6 - 3 \cdot 5 = 12 - 15 = -3$;
> - second: $v_3w_1 - v_1w_3 = 3 \cdot 4 - 1 \cdot 6 = 12 - 6 = 6$;
> - third: $v_1w_2 - v_2w_1 = 1 \cdot 5 - 2 \cdot 4 = 5 - 8 = -3$.
>
> So $v \times w = (-3, 6, -3)$. With the minors of $A = \begin{pmatrix} 1 & 4 \\ 2 & 5 \\ 3 & 6 \end{pmatrix}$: $d_1 = 2 \cdot 6 - 5 \cdot 3 = -3$, $d_2 = 1 \cdot 6 - 4 \cdot 3 = -6$, $d_3 = 1 \cdot 5 - 4 \cdot 2 = -3$, and $(d_1, -d_2, d_3) = (-3, 6, -3)$. ✓
>
> Orthogonality check: $\langle (-3, 6, -3), (1, 2, 3)\rangle = -3 + 12 - 9 = 0$ and $\langle (-3, 6, -3), (4, 5, 6)\rangle = -12 + 30 - 18 = 0$. ✓

> [!EXAMPLE] The canonical basis
> $e_1 \times e_2 = e_3$, $e_2 \times e_3 = e_1$, $e_3 \times e_1 = e_2$ (Martelli, Example 9.1.1). For example $e_1 \times e_2 = (0 \cdot 0 - 0 \cdot 1,\ 0 \cdot 0 - 1 \cdot 0,\ 1 \cdot 1 - 0 \cdot 0) = (0, 0, 1)$. Swapping the order the sign changes: $e_2 \times e_1 = -e_3$.

> [!PROP] 22.15
> The vector $v \times w$ is orthogonal to both $v$ and $w$.

The handouts' proof is elegant: the scalar product with $v$ is obtained by replacing $e_1, e_2, e_3$ with $v_1, v_2, v_3$ in the mnemonic rule.

$$\begin{aligned} \langle v \times w, v\rangle &= \det\begin{pmatrix} v_2 & w_2 \\ v_3 & w_3 \end{pmatrix}v_1 - \det\begin{pmatrix} v_1 & w_1 \\ v_3 & w_3 \end{pmatrix}v_2 \\ &\quad + \det\begin{pmatrix} v_1 & w_1 \\ v_2 & w_2 \end{pmatrix}v_3 \\ &= \det\begin{pmatrix} v_1 & w_1 & v_1 \\ v_2 & w_2 & v_2 \\ v_3 & w_3 & v_3 \end{pmatrix} = 0. \end{aligned}$$

- The second equality is the **Laplace expansion along the last column** (the signs $+, -, +$ are those of the positions $(1, 3)$, $(2, 3)$, $(3, 3)$).
- The determinant is zero because the matrix has **two equal columns** (the first and the third).
- In the same way, with $w$ instead of $v$ in the third column, you find $\langle v \times w, w\rangle = 0$. $\square$

> [!PROP] 22.16
> The vector $v \times w$ is zero $\iff$ $v$ and $w$ are dependent.

The handouts' proof is a chain of equivalences, with the notation of the minors:

$$\begin{aligned} v \times w = 0 &\iff d_1 = d_2 = d_3 = 0 \\ &\iff \rk A \le 1 \\ &\iff v \text{ and } w \text{ are dependent}. \end{aligned}$$

- The first equivalence is the definition with the minors.
- The third: $\rk A$ is the dimension of the space spanned by the columns $v$ and $w$ (lesson L08), and it is $\le 1$ exactly when $v$ and $w$ are dependent.
- The second, the step that is not written: if $\rk A \le 1$, the two columns are proportional (or one is zero), and in every $2 \times 2$ minor they still are, so every $d_i = 0$. If instead $\rk A = 2$, the row rank is 2 as well (Proposition 8.6): there are two independent rows, and the minor formed by those two rows has independent rows, so a non-zero determinant. $\square$

Example: $(1, 2, 3) \times (2, 4, 6) = (12 - 12,\ 6 - 6,\ 4 - 4) = (0, 0, 0)$, because $(2, 4, 6) = 2(1, 2, 3)$.

> [!COROLLARY] 22.17
> If $v$ and $w$ are independent, the triple $v, w, v \times w$ is a basis of $\R^3$.

The handouts do not give the proof; here is a way with what you know. Three vectors in $\R^3$ are a basis if they are independent. Suppose $a\,v + b\,w + c\,(v \times w) = 0$ and take the scalar product with $v \times w$: by Proposition 22.15 the first two terms give zero, and what is left is $c\,\|v \times w\|^2 = 0$. By Proposition 22.16 $v \times w \neq 0$, so $c = 0$; then $a\,v + b\,w = 0$ and, since $v, w$ are independent, $a = b = 0$. $\square$

> [!BEYOND] Other useful properties (you will see them in lesson L23)
> - **Anticommutative**: $w \times v = -(v \times w)$ (in the definition the roles are swapped, and every coordinate changes sign); in particular $v \times v = 0$.
> - **Bilinear**: $(v + v') \times w = v \times w + v' \times w$ and $(\lambda v) \times w = \lambda(v \times w)$, and the same in the second slot.
> - **Not associative**: $(e_1 \times e_2) \times e_2 = e_3 \times e_2 = -e_1$, while $e_1 \times (e_2 \times e_2) = e_1 \times 0 = 0$.
> - **Length and orientation**: $\|v \times w\|$ is the area of the parallelogram with sides $v$ and $w$, and the orientation follows the right-hand rule (thumb $v$, index finger $w$, middle finger $v \times w$).
> - **Equation of a plane**: if $W = \Span(v, w)$ with $v, w$ independent, then $W = \{x \in \R^3 \mid \langle v \times w, x\rangle = 0\}$: the coordinates of $v \times w$ are the coefficients of the Cartesian equation (Martelli, Example 9.1.10). For example $(1, 0, 2) \times (0, 1, 1) = (-2, -1, 1)$, so $\Span((1, 0, 2), (0, 1, 1)) = \{-2x - y + z = 0\}$.

Try it with the tool: drag the drawing to turn it and look at $u \times v$ (in yellow) perpendicular to the parallelogram with sides $u$ and $v$. Swap $u$ and $v$: the product changes orientation. Type $v = 4\ 0\ 0$, parallel to $u$: the product becomes zero (Proposition 22.16).

```widget spazio
title: The cross product in space
modo: vettoriale
u: 2 0 0
v: 1 2 0
```

> [!BEYOND] Where to find it in the book
> Martelli: §4.4.8 "Rotazioni nel piano" and §4.4.9 "Riflessioni ortogonali nel piano" (pp. 143–144), §4.4.11 on rotations around the $z$ axis (p. 145); §7.5 "Isometrie" (pp. 227–229), with Lemma 7.5.5 and Proposition 7.5.8; §8.2 "Isometrie" (pp. 253–261): equivalent definitions, orthogonal matrices, reflections, isometries of the plane, rotations and antirotations, isometries of space; §9.1 "Prodotto vettoriale" (pp. 267–272).

## Towards the exam

The written test of Linear Algebra and Geometry has 10 multiple-choice questions (5 answers, one right) and 2 problems worth 11 points, marked only with at least 6 points in the quiz; it lasts 2 hours, with no calculator, and only 4 handwritten pages of notes. 2026/27 exam sessions: 22/01 and 05/02/2027, at 14:00. The details are in lesson L01.

**What of this lesson appears in the 2023–2026 exam sessions**

1. **Orthogonal matrices (quiz).** The exam of 10/07/2024 (question 2) asked for the dimension of $O(2)$: the answer is that it is not a subspace (see the box in the section on the isometries of the plane). Orthogonal matrices come back with the spectral theorem (lessons L25–L26), where a symmetric matrix is diagonalised with an orthogonal matrix.
2. **The cross product as a tool (problems).** In the problems on lines and planes of $\R^3$ the cross product gives in one go the direction of the line of intersection of two planes: exam sessions of 24/01/2024, 10/07/2024, 06/09/2024 and 15/01/2026 (problem 12). In the questions on the distance between two lines (08/02/2024, 06/09/2024, 05/02/2026, 03/06/2026, 07/09/2026) you need a vector perpendicular to the directions of the two lines: again a cross product. The formulas on lines and planes are in lessons L23–L24.
3. In the 2023–2026 exam sessions there are no questions on the isometries of $\R^3$ (rotations and antirotations).

**Two real exam questions, solved**

> [!EXAMPLE] Exam of 10/07/2024, question 2
> Let $V = M(2, \R)$ and $O(2)$ the subset of the orthogonal matrices. The dimension of $O(2)$ is: (a) it has no dimension because it is not a vector subspace; (b) two; (c) four; (d) three; (e) one.
>
> **Solution.** The dimension is defined only for vector spaces. $O(2)$ is not a subspace: it does not contain the zero matrix, because ${}^t0\,0 = 0 \ne I_2$. So the answer is (a). (A second reason: $I_2 \in O(2)$ but $I_2 + I_2 = 2I_2 \notin O(2)$.)

> [!EXAMPLE] Exam of 24/01/2024, problem 12, part (1)
> Let $\pi_1 = \{2x + y - z = 1\}$ and $\pi_2 = \{x + 2y + z = 2\}$. Compute the line $r = \pi_1 \cap \pi_2$ in the form $r = P + \Span(v)$.
>
> **Solution with the cross product.** The direction $v$ of the line lies in both "vector" planes $\{2x + y - z = 0\}$ and $\{x + 2y + z = 0\}$, so it is orthogonal to the two normal vectors $n_1 = (2, 1, -1)$ and $n_2 = (1, 2, 1)$:
> $$\begin{aligned} n_1 \times n_2 &= \big(1 \cdot 1 - (-1) \cdot 2,\ (-1) \cdot 1 - 2 \cdot 1,\ 2 \cdot 2 - 1 \cdot 1\big) \\ &= (3, -3, 3), \end{aligned}$$
> and I can take $v = (1, -1, 1)$. A point $P$: I set $z = 0$ and solve $2x + y = 1$, $x + 2y = 2$; from the first $y = 1 - 2x$, and substituting $x + 2 - 4x = 2$, so $x = 0$ and $y = 1$. Then $P = (0, 1, 0)$ and
> $$r = (0, 1, 0) + \Span((1, -1, 1)).$$
> Checks: $P$ lies in both planes ($0 + 1 - 0 = 1$ and $0 + 2 + 0 = 2$), and $v$ satisfies the two homogeneous equations ($2 - 1 - 1 = 0$ and $1 - 2 + 1 = 0$). ✓

**Mistakes to avoid**

- Reading the axis of $\mathrm{Rif}_\vartheta$ at angle $\vartheta$ instead of $\frac\vartheta2$.
- Believing that orthogonal columns, or $\det A = \pm1$, are enough for a matrix to be orthogonal.
- Getting the sign of the second coordinate of the cross product wrong: it is $v_3w_1 - v_1w_3$, that is $-d_2$.
- Forgetting that $w \times v = -(v \times w)$: the order matters for the orientation, not for the direction.
- Not checking the result: $v \times w$ must give scalar product zero with $v$ and with $w$.

> [!EXAM] On the 4-page sheet
> - $\mathrm{Rot}_\vartheta = \begin{pmatrix} \cos\vartheta & -\sin\vartheta \\ \sin\vartheta & \cos\vartheta \end{pmatrix}$ ($\det 1$); $\mathrm{Rif}_\vartheta = \begin{pmatrix} \cos\vartheta & \sin\vartheta \\ \sin\vartheta & -\cos\vartheta \end{pmatrix}$ ($\det -1$, axis at angle $\frac\vartheta2$).
> - $L_A$ isometry $\iff {}^tAA = I \iff$ orthonormal columns; then $A^{-1} = {}^tA$, $\det A = \pm1$.
> - Isometries: in the plane rotations ($\det 1$) and reflections ($\det -1$); in space rotations and antirotations, $\cos\vartheta = \frac{\operatorname{tr}A - \det A}2$.
> - $v \times w = (v_2w_3 - v_3w_2,\ v_3w_1 - v_1w_3,\ v_1w_2 - v_2w_1)$; orthogonal to $v$ and $w$; zero $\iff$ dependent.

## Quiz

```quiz
Q: Which of these matrices is orthogonal?
+ $\frac15\begin{pmatrix} 3 & -4 \\ 4 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 0 \\ 0 & \frac12 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 0 & 2 \\ \frac12 & 0 \end{pmatrix}$
= Only the first has columns of norm 1 and orthogonal: $\frac{3^2 + 4^2}{25} = 1$ and $\frac{-12 + 12}{25} = 0$. The second has orthogonal columns but of norm $\sqrt2$; the third and the last have determinant $\pm1$ but columns of norm $2$ and $\frac12$; the fourth (a shear) has second column of norm $\sqrt2$. Linked to the exam of 10/07/2024, question 2, on orthogonal matrices.

Q: What is the image of $v = (3, 1)$ under the anticlockwise rotation by the angle $\frac\pi2$?
+ $(-1, 3)$
- $(1, -3)$
- $(-3, 1)$
- $(1, 3)$
- $(-3, -1)$
= $\mathrm{Rot}_{\pi/2} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ sends $(x, y)$ to $(-y, x)$, so $(3, 1) \mapsto (-1, 3)$. Check: $\langle (3, 1), (-1, 3)\rangle = 0$ and the norms are equal. $(1, -3)$ is the **clockwise** rotation.

Q: The matrix $\mathrm{Rif}_{\pi/2} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ represents the reflection in:
+ the line $y = x$
- the $y$ axis
- the $x$ axis
- the line $y = -x$
- the origin
= The axis of $\mathrm{Rif}_\vartheta$ forms an angle $\frac\vartheta2 = \frac\pi4$ with the $x$ axis: it is the bisector $y = x$. Check: $(1, 1) \mapsto (1, 1)$ stays fixed, $(1, -1) \mapsto (-1, 1)$ changes sign. The $y$ axis is the mistake of those who read the angle $\vartheta$ instead of $\frac\vartheta2$.

Q: Let $O(2) \subset M(2, \R)$ be the set of the $2 \times 2$ orthogonal matrices. Which statement is true?
+ $O(2)$ is not a vector subspace of $M(2, \R)$.
- $O(2)$ is a subspace of dimension 4.
- $O(2)$ contains the zero matrix.
- The sum of two orthogonal matrices is always orthogonal.
- $O(2)$ contains only rotation matrices.
= The zero matrix is not orthogonal, and $I_2 + I_2 = 2I_2$ is not: $O(2)$ is not closed under sum, so it is not a subspace. It also contains the reflections (Proposition 22.11). Similar to the exam of 10/07/2024, question 2.

Q: If $A \in M(3, \R)$ is an orthogonal matrix, then certainly:
+ $\det A = \pm1$
- $\det A = 1$
- $A$ is symmetric
- $A^{-1} = A$
- $\operatorname{tr}A = 3$
= From ${}^tAA = I$ and Binet: $(\det A)^2 = 1$. The determinant can be $-1$ (a reflection, like $\operatorname{diag}(1, 1, -1)$). A rotation by $\frac\pi2$ around the $z$ axis is orthogonal but not symmetric, does not coincide with its inverse and has trace $1$. What always holds instead is $A^{-1} = {}^tA$.

Q: What is the cross product $(1, 2, 0) \times (0, 1, 3)$?
+ $(6, -3, 1)$
- $(6, 3, 1)$
- $(-6, 3, -1)$
- $(0, 2, 0)$
- $(6, -3, -1)$
= $(2 \cdot 3 - 0 \cdot 1,\ 0 \cdot 0 - 1 \cdot 3,\ 1 \cdot 1 - 2 \cdot 0) = (6, -3, 1)$. Check: $\langle (6, -3, 1), (1, 2, 0)\rangle = 6 - 6 = 0$ and $\langle (6, -3, 1), (0, 1, 3)\rangle = -3 + 3 = 0$. $(-6, 3, -1)$ is $(0, 1, 3) \times (1, 2, 0)$; $(0, 2, 0)$ is the coordinate-by-coordinate product. It is the computation needed for the direction of a line of intersection of planes, as in the exam of 15/01/2026 (problem 12, part 2).

Q: For which of these pairs of vectors is the cross product the zero vector?
+ $(1, -2, 3)$ and $(-2, 4, -6)$
- $(1, 0, 0)$ and $(0, 1, 0)$
- $(1, 1, 0)$ and $(1, -1, 0)$
- $(1, 2, 3)$ and $(3, 2, 1)$
- $(0, 0, 1)$ and $(1, 1, 1)$
= $v \times w = 0$ exactly when $v, w$ are dependent (Proposition 22.16): $(-2, 4, -6) = -2(1, -2, 3)$. The other pairs give $(0, 0, 1)$, $(0, 0, -2)$, $(-4, 8, -4)$, $(-1, 1, 0)$. In the questions on the distance between lines (for example the exam of 07/09/2026, question 7) this is how you check that the directions are not parallel.

Q: Which of these linear transformations of the plane is **not** an isometry (with the Euclidean product)?
+ $(x, y) \mapsto (x + y, y)$
- $(x, y) \mapsto (y, x)$
- $(x, y) \mapsto (-x, -y)$
- $(x, y) \mapsto \left(\frac{x - \sqrt3 y}{2}, \frac{\sqrt3 x + y}{2}\right)$
- $(x, y) \mapsto (x, -y)$
= The shear $(x, y) \mapsto (x + y, y)$ sends $e_2$ to $(1, 1)$, of norm $\sqrt2 \neq 1$. The others are $\mathrm{Rif}_{\pi/2}$, $\mathrm{Rot}_\pi$, $\mathrm{Rot}_{\pi/3}$ and $\mathrm{Rif}_0$: all with an orthogonal matrix.

Q: A linear isometry of $\R^3$ with determinant $-1$ is:
+ an antirotation
- a rotation
- a translation
- an orthogonal projection onto a plane
- a rotation by the angle $\pi$ around an axis
= By Theorem 22.13 every isometry of $\R^3$ is a rotation ($\det 1$) or an antirotation ($\det -1$). Translations are not linear; projections are not invertible; a rotation, by any angle, has determinant $1$. Special cases of antirotation are $-I_3$ (angle $\pi$) and the reflections in a plane (angle $0$).

Q: What is the norm of $(1, 0, 0) \times (0, 3, 4)$?
N: 5
= $(1, 0, 0) \times (0, 3, 4) = (0 \cdot 4 - 0 \cdot 3,\ 0 \cdot 0 - 1 \cdot 4,\ 1 \cdot 3 - 0 \cdot 0) = (0, -4, 3)$, of norm $\sqrt{16 + 9} = 5$. In lesson L23 you will see that it is the area of the parallelogram with the two vectors as sides (as in exercise 7 of tutoring sheet 4).
```

## Exercises

The handouts have no exercises for this lesson: these are all built for the notes; the last two are modelled on the exam papers and on tutoring sheet 4.

::: exercise basic Writing and using rotations
(a) Write $\mathrm{Rot}_{\pi/6}$ and $\mathrm{Rot}_{2\pi/3}$. (b) Rotate $(2, 0)$ by $\frac\pi3$ and $(1, 2)$ by $\frac\pi2$. (c) Check that $\mathrm{Rot}_{\pi/6}$ preserves the norm of $(2, 0)$.
::: solution
(a) With $\cos\frac\pi6 = \frac{\sqrt3}2$, $\sin\frac\pi6 = \frac12$, $\cos\frac{2\pi}3 = -\frac12$, $\sin\frac{2\pi}3 = \frac{\sqrt3}2$:
$$\mathrm{Rot}_{\pi/6} = \begin{pmatrix} \frac{\sqrt3}2 & -\frac12 \\ \frac12 & \frac{\sqrt3}2 \end{pmatrix}, \qquad \mathrm{Rot}_{2\pi/3} = \begin{pmatrix} -\frac12 & -\frac{\sqrt3}2 \\ \frac{\sqrt3}2 & -\frac12 \end{pmatrix}.$$

(b) $\mathrm{Rot}_{\pi/3}(2, 0) = 2 \cdot$ (first column) $= 2\left(\frac12, \frac{\sqrt3}2\right) = (1, \sqrt3)$. $\mathrm{Rot}_{\pi/2}(1, 2) = (-2, 1)$.

(c) $\mathrm{Rot}_{\pi/6}(2, 0) = (\sqrt3, 1)$, of norm $\sqrt{3 + 1} = 2 = \|(2, 0)\|$. ✓
:::

::: exercise basic The reflection in the line $y = -x$
Find the matrix of the reflection in the line $y = -x$ and check the result on two vectors.
::: solution
The line $y = -x$ forms with the $x$ axis an angle of $-\frac\pi4$ (or $\frac{3\pi}4$). With $\frac\vartheta2 = -\frac\pi4$ we have $\vartheta = -\frac\pi2$, and $\cos\left(-\frac\pi2\right) = 0$, $\sin\left(-\frac\pi2\right) = -1$:
$$\mathrm{Rif}_{-\pi/2} = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}, \qquad (x, y) \mapsto (-y, -x).$$
(With $\vartheta = \frac{3\pi}2 \in [0, 2\pi)$ you get the same matrix.) Check: $(1, -1)$, which lies on the line, goes to $(1, -1)$ and stays fixed; $(1, 1)$, perpendicular to the line, goes to $(-1, -1)$, its opposite. ✓
:::

::: exercise basic Orthogonal matrices and inverses
For each matrix say whether it is orthogonal; if it is, write its inverse without any computation:
$$A_1 = \frac15\begin{pmatrix} 3 & -4 \\ 4 & 3 \end{pmatrix}, \quad A_2 = \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix},$$
$$A_3 = \frac13\begin{pmatrix} 1 & 2 & 2 \\ 2 & 1 & -2 \\ 2 & -2 & 1 \end{pmatrix}, \quad A_4 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{pmatrix}.$$
::: solution
- $A_1$: orthogonal (unit and orthogonal columns). $A_1^{-1} = {}^tA_1 = \frac15\begin{pmatrix} 3 & 4 \\ -4 & 3 \end{pmatrix}$.
- $A_2$: **not** orthogonal, the columns have norm $\sqrt2$. (Its inverse exists, but it is not the transpose: it is $\frac12\,{}^tA_2$.)
- $A_3$: orthogonal (computations in the example of the section on orthogonal matrices). $A_3$ is also symmetric, so $A_3^{-1} = {}^tA_3 = A_3$: applying it twice gives the identity. It is the reflection in the plane $\{-x + y + z = 0\}$: the formula $f(v) = v - 2\,\frac{\langle v, n\rangle}{\langle n, n\rangle}n$ with $n = (-1, 1, 1)$ gives $f(e_1) = (1, 0, 0) - 2 \cdot \frac{-1}{3}(-1, 1, 1) = \left(\frac13, \frac23, \frac23\right)$, the first column.
- $A_4$: orthogonal, the columns are $e_3, e_1, e_2$ (the canonical basis in another order). $A_4^{-1} = {}^tA_4 = \begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$.
:::

::: exercise intermediate The reflection in the line of $(1, 2)$
Find the matrix of the reflection of the plane in the line $r = \Span((1, 2))$ in two ways: with $\mathrm{Rif}_\vartheta$ and with the change of basis.
::: solution
**With $\mathrm{Rif}_\vartheta$.** The angle $\frac\vartheta2$ of the line has $t = \tan\frac\vartheta2 = 2$. Then
$$\begin{aligned} \cos\vartheta &= \frac{1 - t^2}{1 + t^2} = \frac{1 - 4}{5} = -\frac35, \\ \sin\vartheta &= \frac{2t}{1 + t^2} = \frac45, \end{aligned}$$
$$\mathrm{Rif}_\vartheta = \begin{pmatrix} -\frac35 & \frac45 \\ \frac45 & \frac35 \end{pmatrix}.$$

**With the change of basis.** In the basis $\{(1, 2), (-2, 1)\}$ (one vector on $r$, one perpendicular) the matrix is $\operatorname{diag}(1, -1)$. With $M = \begin{pmatrix} 1 & -2 \\ 2 & 1 \end{pmatrix}$, $M^{-1} = \frac15\begin{pmatrix} 1 & 2 \\ -2 & 1 \end{pmatrix}$:
$$\begin{aligned} M\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}M^{-1} &= \begin{pmatrix} 1 & 2 \\ 2 & -1 \end{pmatrix}\cdot\frac15\begin{pmatrix} 1 & 2 \\ -2 & 1 \end{pmatrix} \\ &= \frac15\begin{pmatrix} -3 & 4 \\ 4 & 3 \end{pmatrix}. \end{aligned}$$
Same result. Check: $(1, 2) \mapsto \left(\frac{-3 + 8}{5}, \frac{4 + 6}{5}\right) = (1, 2)$ and $(-2, 1) \mapsto \left(\frac{6 + 4}{5}, \frac{-8 + 3}{5}\right) = (2, -1)$. ✓
:::

::: exercise intermediate Recognising rotations and reflections
Say which isometry $A = \frac15\begin{pmatrix} 4 & -3 \\ 3 & 4 \end{pmatrix}$ and $B = \frac15\begin{pmatrix} 4 & 3 \\ 3 & -4 \end{pmatrix}$ represent: angle for the rotation, axis for the reflection.
::: solution
Both have unit columns ($\frac{16 + 9}{25} = 1$) that are orthogonal: they are orthogonal.

- $\det A = \frac{16 + 9}{25} = 1$: **rotation** with $\cos\vartheta = \frac45$ and $\sin\vartheta = \frac35$, that is $\vartheta = \arccos\frac45$ (about 37°, not a special angle).
- $\det B = \frac{-16 - 9}{25} = -1$: **reflection**. The axis is $\Ker(B - I)$: the first row of $B - I$ is $\left(-\frac15, \frac35\right)$, so $-x + 3y = 0$, that is $x = 3y$: the axis is $\Span((3, 1))$. Check: $B(3, 1) = \left(\frac{12 + 3}{5}, \frac{9 - 4}{5}\right) = (3, 1)$. ✓
:::

::: exercise intermediate Two reflections make a rotation
(a) Compute $\mathrm{Rif}_{\pi/2}\,\mathrm{Rif}_0$ and recognise the result. (b) Prove that in general $\mathrm{Rif}_\alpha\,\mathrm{Rif}_\beta = \mathrm{Rot}_{\alpha - \beta}$.
::: solution
(a) $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \mathrm{Rot}_{\pi/2}$: reflecting in the $x$ axis and then in the bisector is rotating by a quarter turn.

(b) Row by column, the four entries of $\mathrm{Rif}_\alpha\,\mathrm{Rif}_\beta$ are:

- position $(1, 1)$: $\cos\alpha\cos\beta + \sin\alpha\sin\beta$;
- position $(1, 2)$: $\cos\alpha\sin\beta - \sin\alpha\cos\beta$;
- position $(2, 1)$: $\sin\alpha\cos\beta - \cos\alpha\sin\beta$;
- position $(2, 2)$: $\sin\alpha\sin\beta + \cos\alpha\cos\beta$.

By the subtraction formulas, $\cos\alpha\cos\beta + \sin\alpha\sin\beta = \cos(\alpha - \beta)$ and $\sin\alpha\cos\beta - \cos\alpha\sin\beta = \sin(\alpha - \beta)$; the top-right entry is $-\sin(\alpha - \beta)$. So the product is $\mathrm{Rot}_{\alpha - \beta}$. The determinant works out too: $(-1)(-1) = 1$.
:::

::: exercise intermediate Cross products and bases
(a) Compute $(2, -1, 1) \times (1, 3, -2)$ and check that it is orthogonal to the two vectors. (b) Explain why $(2, -1, 1)$, $(1, 3, -2)$ and their cross product form a basis of $\R^3$.
::: solution
(a) With $v = (2, -1, 1)$ and $w = (1, 3, -2)$:
- first: $v_2w_3 - v_3w_2 = (-1)(-2) - 1 \cdot 3 = 2 - 3 = -1$;
- second: $v_3w_1 - v_1w_3 = 1 \cdot 1 - 2 \cdot (-2) = 1 + 4 = 5$;
- third: $v_1w_2 - v_2w_1 = 2 \cdot 3 - (-1) \cdot 1 = 6 + 1 = 7$.

$v \times w = (-1, 5, 7)$. Checks: $\langle (-1, 5, 7), v\rangle = -2 - 5 + 7 = 0$ and $\langle (-1, 5, 7), w\rangle = -1 + 15 - 14 = 0$. ✓

(b) $v$ and $w$ are not proportional (the cross product is not zero, Proposition 22.16), so by Corollary 22.17 the triple is a basis.
:::

::: exercise intermediate The plane spanned by two vectors
Let $W = \Span((1, 0, 2), (0, 1, 1))$. (a) Find a vector orthogonal to $W$ and a Cartesian equation of $W$. (b) Does the vector $(1, 1, 3)$ lie in $W$? And $(1, 1, 1)$?
::: solution
(a) $(1, 0, 2) \times (0, 1, 1) = (0 \cdot 1 - 2 \cdot 1,\ 2 \cdot 0 - 1 \cdot 1,\ 1 \cdot 1 - 0 \cdot 0) = (-2, -1, 1)$. A vector $x$ lies in $W$ if and only if it is orthogonal to this vector (lesson L21: $W = (W^\perp)^\perp$ and $W^\perp$ is the line spanned by $(-2, -1, 1)$). Equation: $-2x - y + z = 0$, or $2x + y - z = 0$.

(b) $(1, 1, 3)$: $2 + 1 - 3 = 0$, it lies in $W$ (it is the sum of the two generators). $(1, 1, 1)$: $2 + 1 - 1 = 2 \neq 0$, it does not lie in $W$.
:::

::: exercise hard Properties of the cross product from the definition
Prove, using only Definition 22.14: (a) $w \times v = -(v \times w)$; (b) $v \times v = 0$; (c) $(\lambda v) \times w = \lambda(v \times w)$. (d) Check with $v = (1, 2, 3)$, $w = (4, 5, 6)$ the identity $\|v \times w\|^2 + \langle v, w\rangle^2 = \|v\|^2\|w\|^2$, which the handouts prove in lesson L23.
::: solution
(a) Swapping $v$ and $w$ the first coordinate becomes $w_2v_3 - w_3v_2 = -(v_2w_3 - v_3w_2)$, and the same for the other two: every coordinate changes sign.

(b) With $w = v$ every coordinate is of the form $v_2v_3 - v_3v_2 = 0$. (Or: by (a), $v \times v = -(v \times v)$, so $v \times v = 0$.)

(c) Every coordinate of $(\lambda v) \times w$ is, for example, $(\lambda v_2)w_3 - (\lambda v_3)w_2 = \lambda(v_2w_3 - v_3w_2)$.

(d) $v \times w = (-3, 6, -3)$, so $\|v \times w\|^2 = 9 + 36 + 9 = 54$; $\langle v, w\rangle = 4 + 10 + 18 = 32$, so $\langle v, w\rangle^2 = 1024$. On the right: $\|v\|^2 = 14$, $\|w\|^2 = 16 + 25 + 36 = 77$, and $14 \cdot 77 = 1078 = 54 + 1024$. ✓
:::

::: exercise hard An isometry of space
Let $A = \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & -1 \end{pmatrix}$. (a) Check that $A$ is orthogonal. (b) Is it a rotation or an antirotation? (c) Find the axis and the angle.
::: solution
(a) The columns are $(0, 1, 0)$, $(-1, 0, 0)$, $(0, 0, -1)$: unit vectors and pairwise orthogonal.

(b) Expansion along the third row: $\det A = (-1) \cdot \det\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = (-1) \cdot 1 = -1$. It is an **antirotation**.

(c) $Ae_3 = (0, 0, -1) = -e_3$: the axis is the $z$ axis, $\Span(e_3)$. On the plane $\{z = 0\}$ the matrix acts as $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \mathrm{Rot}_{\pi/2}$. So $A$ is the rotation by $\frac\pi2$ around the $z$ axis followed by the reflection in the plane $\{z = 0\}$. With Martelli's formula: $\cos\vartheta = \frac{\operatorname{tr}A - \det A}{2} = \frac{-1 + 1}{2} = 0$, that is $\vartheta = \frac\pi2$. ✓
:::

::: exercise exam Completing an orthogonal matrix
Let $A = \frac15\begin{pmatrix} 3 & a \\ 4 & b \end{pmatrix}$. (1) Find all the $a, b \in \R$ for which $A$ is orthogonal. (2) For each solution say whether $L_A$ is a rotation or a reflection (with angle or axis). (3) Compute $A^{-1}$.
::: solution
(1) The first column $\frac15(3, 4)$ is already a unit vector. The second, $\frac15(a, b)$, must be a unit vector, $a^2 + b^2 = 25$, and orthogonal to the first, $3a + 4b = 0$. From the second condition $a = -\frac43 b$; substituting, $\frac{16}9 b^2 + b^2 = 25$, that is $\frac{25}9 b^2 = 25$, so $b = \pm3$ and $a = \mp4$. The solutions are $(a, b) = (-4, 3)$ and $(a, b) = (4, -3)$.

(2) With $(-4, 3)$: $A = \frac15\begin{pmatrix} 3 & -4 \\ 4 & 3 \end{pmatrix}$, $\det A = \frac{9 + 16}{25} = 1$: rotation with $\cos\vartheta = \frac35$, $\sin\vartheta = \frac45$. With $(4, -3)$: $A = \frac15\begin{pmatrix} 3 & 4 \\ 4 & -3 \end{pmatrix}$, $\det A = -1$: reflection, with axis $\Span((2, 1))$ (it is the matrix of the example in the section on reflections; check: $A(2, 1) = \left(\frac{6 + 4}{5}, \frac{8 - 3}{5}\right) = (2, 1)$).

(3) For an orthogonal matrix $A^{-1} = {}^tA$. Rotation: $A^{-1} = \frac15\begin{pmatrix} 3 & 4 \\ -4 & 3 \end{pmatrix}$ (the rotation backwards). Reflection: $A$ is symmetric, so $A^{-1} = A$ (reflecting twice brings you back to the starting point).
:::

::: exercise exam Cross product, plane and basis
Let $v = (2, 1, 0)$ and $w = (1, 0, 1)$. (1) Compute a vector orthogonal to $\Span(v, w)$ and a unit vector with the same direction. (2) Write a Cartesian equation of the plane $\Span(v, w)$. (3) Prove that $v, w, v \times w$ is a basis of $\R^3$ by computing a determinant. (4) A preview of lesson L23: what is the area of the parallelogram with sides $v$ and $w$?
::: solution
(1) $v \times w = (1 \cdot 1 - 0 \cdot 0,\ 0 \cdot 1 - 2 \cdot 1,\ 2 \cdot 0 - 1 \cdot 1) = (1, -2, -1)$. Check: $\langle (1, -2, -1), v\rangle = 2 - 2 + 0 = 0$, $\langle (1, -2, -1), w\rangle = 1 + 0 - 1 = 0$. ✓ Norm $\sqrt{1 + 4 + 1} = \sqrt6$, unit vector $\frac{1}{\sqrt6}(1, -2, -1)$.

(2) $x - 2y - z = 0$. Check: $v$ gives $2 - 2 - 0 = 0$, $w$ gives $1 - 0 - 1 = 0$. ✓

(3) With the columns $v, w, v \times w$, expansion along the first row:
$$\begin{aligned} \det\begin{pmatrix} 2 & 1 & 1 \\ 1 & 0 & -2 \\ 0 & 1 & -1 \end{pmatrix} &= 2(0 + 2) - 1(-1 - 0) + 1(1 - 0) \\ &= 4 + 1 + 1 = 6 \neq 0. \end{aligned}$$
So the three vectors are independent: a basis. The value $6 = \|v \times w\|^2$ is not a coincidence: expanding along the third column, the determinant of the matrix with columns $v, w, v \times w$ always equals $d_1^2 + d_2^2 + d_3^2 = \|v \times w\|^2 > 0$ (in lesson L23 it is Proposition 23.4).

(4) $\|v \times w\| = \sqrt6$.
:::

## Review questions

::: question What is a linear isometry? Why does it fix the origin?
An isomorphism that preserves the scalar product: $\langle T(v), T(w)\rangle = \langle v, w\rangle$. Being linear, it sends $0$ to $0$; this is why translations are not among them.
:::

::: question How do you derive the matrix of the rotation by the angle $\vartheta$?
The columns are the images of $e_1$ and $e_2$: $e_1$ goes to $(\cos\vartheta, \sin\vartheta)$ and $e_2$ goes to $(-\sin\vartheta, \cos\vartheta)$. So $\mathrm{Rot}_\vartheta = \begin{pmatrix} \cos\vartheta & -\sin\vartheta \\ \sin\vartheta & \cos\vartheta \end{pmatrix}$, with determinant 1.
:::

::: question In which line does $\mathrm{Rif}_\vartheta$ reflect? What is its determinant?
In the line through the origin that forms an angle $\frac\vartheta2$ with the $x$ axis. The determinant is $-\cos^2\vartheta - \sin^2\vartheta = -1$.
:::

::: question Why does a reflection have matrix $\operatorname{diag}(1, -1)$ in a suitable basis?
If $v_1$ lies on the line $r$ and $v_2$ on the perpendicular line, the reflection keeps $v_1$ fixed and changes the sign of $v_2$: $f(v_1) = v_1$, $f(v_2) = -v_2$.
:::

::: question Why, to check that an isomorphism is an isometry, are the vectors of a basis enough?
Because, by bilinearity and linearity, $\langle v, w\rangle$ and $\langle T(v), T(w)\rangle$ are the same combinations of the products $\langle v_i, v_j\rangle$ and $\langle T(v_i), T(v_j)\rangle$.
:::

::: question Which equivalent conditions define an isometry with a positive definite product?
Preserving the scalar product, preserving the norms ($\|T(v)\| = \|v\|$), preserving the distances ($d(T(v), T(w)) = d(v, w)$).
:::

::: question When is $L_A$ an isometry of $\R^n$? What does it mean for the columns of $A$?
When ${}^tAA = I_n$, that is $A$ is orthogonal. The entry $(i, j)$ of ${}^tAA$ is $\langle A^i, A^j\rangle$, so the columns form an orthonormal basis.
:::

::: question What properties do orthogonal matrices have?
$A^{-1} = {}^tA$; $\det A = \pm1$; the real eigenvalues are $\pm1$; the rows are orthonormal too; the product of two orthogonal matrices is orthogonal.
:::

::: question Why are the $2 \times 2$ orthogonal matrices only rotations and reflections?
The first column is a unit vector, so $(\cos\vartheta, \sin\vartheta)$; the second is a unit vector orthogonal to the first, so $\pm(-\sin\vartheta, \cos\vartheta)$. With the $+$ sign you have $\mathrm{Rot}_\vartheta$, with the $-$ sign you have $\mathrm{Rif}_\vartheta$.
:::

::: question What are the isometries of $\R^3$?
Rotations around an axis ($\det 1$) and antirotations ($\det -1$): a rotation around an axis $r$ composed with the reflection in the plane $r^\perp$.
:::

::: question How do you compute the cross product? How do you remember the sign?
$v \times w = (v_2w_3 - v_3w_2,\ v_3w_1 - v_1w_3,\ v_1w_2 - v_2w_1)$, or $(d_1, -d_2, d_3)$ with the minors of the matrix with columns $v$ and $w$, or with the formal determinant with $e_1, e_2, e_3$ in the last column.
:::

::: question Why is $v \times w$ orthogonal to $v$? When is it zero?
$\langle v \times w, v\rangle$ is the determinant of the matrix with columns $v, w, v$, which has two equal columns, so it is 0. It is zero exactly when $v$ and $w$ are dependent (all the $2 \times 2$ minors zero, rank $\le 1$).
:::

## Glossary

```glossary
Isometry | Isomorphism $T$ between spaces with a scalar product such that $\langle T(v), T(w)\rangle = \langle v, w\rangle$ for every $v, w$.
Linear isometry | Isometry of $\R^n$ of the form $L_A(x) = Ax$; it fixes the origin.
Rotation of the plane | $L_A$ with $A = \mathrm{Rot}_\vartheta$: it turns the plane by $\vartheta$ anticlockwise; $\det = 1$.
$\mathrm{Rot}_\vartheta$ | The matrix with columns $(\cos\vartheta, \sin\vartheta)$ and $(-\sin\vartheta, \cos\vartheta)$.
Reflection of the plane | $L_A$ with $A = \mathrm{Rif}_\vartheta$: symmetry with respect to the line with angle $\frac\vartheta2$; $\det = -1$.
$\mathrm{Rif}_\vartheta$ | The matrix with columns $(\cos\vartheta, \sin\vartheta)$ and $(\sin\vartheta, -\cos\vartheta)$.
Orthogonal matrix | Real square matrix with ${}^tAA = I_n$: orthonormal columns, $A^{-1} = {}^tA$, $\det A = \pm1$.
$O(2)$ | The set of the $2 \times 2$ orthogonal matrices: the $\mathrm{Rot}_\vartheta$ and the $\mathrm{Rif}_\vartheta$. It is not a subspace.
Orientation | The "sense of rotation" of the plane or of space; transformations with negative determinant reverse it.
Rotation of space | Isometry of $\R^3$ that fixes a line $r$ (the axis) and rotates the plane $r^\perp$; $\det = 1$.
Antirotation | Composition of a rotation around an axis $r$ and the reflection in the plane $r^\perp$; $\det = -1$.
Axis | The line fixed by a rotation ($\Ker(A - I)$), or the one sent to its opposite by an antirotation.
Trace | $\operatorname{tr}A$, sum of the entries on the diagonal; for the isometries of $\R^3$, $\cos\vartheta = \frac{\operatorname{tr}A - \det A}{2}$.
Cross product | $v \times w = (v_2w_3 - v_3w_2,\ v_3w_1 - v_1w_3,\ v_1w_2 - v_2w_1)$, defined only in $\R^3$.
Minors $d_i$ | $2 \times 2$ determinants of the $3 \times 2$ matrix with columns $v, w$ without row $i$; $v \times w = (d_1, -d_2, d_3)$.
Mnemonic rule | $v \times w$ as a formal determinant with $e_1, e_2, e_3$ in the last column, expanded with Laplace.
Anticommutativity | $w \times v = -(v \times w)$; in particular $v \times v = 0$.
```

## Checklist

```checklist
- I can write $\mathrm{Rot}_\vartheta$ and $\mathrm{Rif}_\vartheta$ and derive them from the images of $e_1$ and $e_2$.
- I know that the axis of $\mathrm{Rif}_\vartheta$ has angle $\frac\vartheta2$ and I can find it as the eigenspace of the eigenvalue 1.
- I can write the matrix of the reflection in a given line (with the angle, with the projection or with the change of basis).
- I know the definition of isometry and why it is enough to check it on a basis.
- I know that, with a positive definite product, isometry means preserving norms or distances.
- I can recognise an orthogonal matrix (${}^tAA = I$, orthonormal columns) and use its properties ($A^{-1} = {}^tA$, $\det = \pm1$).
- I can classify an isometry of the plane with the determinant and find the angle or the axis.
- I know that the isometries of $\R^3$ are rotations and antirotations and I tell them apart with the determinant.
- I can compute $v \times w$ with the formula, with the minors or with the mnemonic rule, and check the result with orthogonality.
- I can use the cross product to find a vector normal to a plane or the direction of the line of intersection of two planes.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 22 "Lo spazio euclideo I", pp. 111–115: sections 22.A (linear isometries of the plane), 22.B (isometries of space) and 22.C (cross product), followed in order with their numbering (Definitions 22.1, 22.3, 22.5, 22.10, 22.14; Propositions 22.2, 22.4, 22.6, 22.7, 22.8, 22.11, 22.15, 22.16; Corollaries 22.9, 22.12, 22.17; Theorem 22.13; the Remark on the convenient basis for reflections). The handouts have no exercises for this lesson. Reminders: Proposition 8.6 (row rank), Theorem 9.6 (Laplace), Theorem 10.4 (Binet), lessons L16, L17, L19–L21.
- **B. Martelli, *Geometria e algebra lineare***: §4.4.8–4.4.9 and §4.4.11 (proofs of Propositions 22.2 and 22.4 with polar coordinates), §7.5 (isometries), §8.2 (Proposition 8.2.1, orthogonal matrices, reflections, rotations and antirotations, Theorem 8.2.13 and the formula with the trace), §9.1 (cross product). The book is free: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf).
- **Exam papers** (Moodle 2025/26): question 2 of 10/07/2024; problems 12 of 24/01/2024, 10/07/2024, 06/09/2024 and 15/01/2026; questions on the distance between lines of 08/02/2024, 06/09/2024, 05/02/2026, 03/06/2026 and 07/09/2026. **Tutoring sheet 4** (exercise 7, cross product and area). The two questions reported are solved in these notes.
- The **"Beyond the handouts"** parts (composition and inverse of rotations, properties of orthogonal matrices, axis and angle of the isometries of $\R^3$, other properties of the cross product, where to find it in the book), the proofs taken from Martelli's book and all the exercises are additions in these notes, to connect the lesson to the rest of the course and to the exam.
