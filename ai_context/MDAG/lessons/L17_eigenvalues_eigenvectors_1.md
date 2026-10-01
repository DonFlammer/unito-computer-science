---
course: MDAG
module: AG
lesson: L17
title: Eigenvalues and eigenvectors I
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Part 2 · Linear Algebra and Geometry · Channels A, B and C · Lesson L17
description: >-
  Notes on lesson L17 of Linear Algebra and Geometry (MDAG, part 2): eigenvectors and eigenvalues of an endomorphism,
  diagonalisable endomorphisms and matrices, powers of matrices and the characteristic polynomial, with exam-style
  quizzes and worked exercises.
lede: >-
  An endomorphism can turn almost every vector, but along certain lines it only stretches, shrinks or flips them: the
  vectors of those lines are the eigenvectors, and the factor is the eigenvalue. If the eigenvectors are enough to
  form a basis, the matrix becomes diagonal and even $A^{100}$ is computed in one line. To find them you use the
  characteristic polynomial $p_A(\lambda) = \det(A - \lambda I_n)$.
material: handouts
facts:
  Handouts: lesson 17 · pp. 85–89
  Book: Martelli, §5.1
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 100–130 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 17 "Autovalori e autovettori I"; B. Martelli, Geometria e algebra lineare, §5.1
italian_file: L17_autovalori_autovettori_1.html
html_notes: notes/MDAG/L17_eigenvalues_eigenvectors_1.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L17_autovalori_autovettori_1.md
---

## In brief

- An **eigenvector** of an endomorphism $T : V \to V$ is a vector $v \neq 0$ with $T(v) = \lambda v$ for some scalar $\lambda \in \K$, called the **eigenvalue**. The eigenvalue can be $0$; the eigenvector cannot be the zero vector.
- Geometrically, $T$ sends the line $\Span(v)$ into itself. All the non-zero multiples of an eigenvector are eigenvectors with the same eigenvalue.
- In coordinates $T(v) = \lambda v$ becomes $Ax = \lambda x$, with $A = [T]^{\mathcal B}_{\mathcal B}$ and $x = [v]_{\mathcal B}$: it is enough to study matrices.
- A **rotation** of the plane by an angle $\vartheta \neq 0, \pi$ has no real eigenvectors: every non-zero vector changes direction.
- $T$ is **diagonalisable** if $V$ has a basis of eigenvectors; in that basis the matrix of $T$ is **diagonal**, with the eigenvalues on the diagonal.
- A matrix $A$ is diagonalisable if $D = M^{-1}AM$ is diagonal for some invertible $M$: the columns of $M$ are eigenvectors, $D$ has the corresponding eigenvalues, in the same order.
- With diagonal matrices products, determinants and powers are done entry by entry, and $A^k = MD^kM^{-1}$.
- The **characteristic polynomial** $p_A(\lambda) = \det(A - \lambda I_n)$ has degree $n$ and is the same for similar matrices. The eigenvalues are exactly its roots; the eigenvectors are the non-zero solutions of $(A - \lambda I_n)x = 0$.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## Eigenvectors and eigenvalues (p. 85)

In lesson L16 you saw that the reflection $f(x, y) = (x + y, -y)$ has in the standard basis the matrix $\begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}$, which does not show what it does, and in the basis $\{(1, 0), (-1, 2)\}$ a diagonal matrix: the first vector stays still, the second is flipped. This lesson explains how to find, in general, the "special" vectors that make the matrix diagonal.

As in the handouts, the vectors of $\K^n$ are columns; in the text we write them as rows, $(1, 2)$, to save space.

### An example to start

Take $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$ and look at what $L_A$ does to some vectors:

| $v$ | $Av$ | Is $Av$ a multiple of $v$? |
|---|---|---|
| $e_1 = (1, 0)$ | $(3, 0)$ | yes: $Av = 3v$ |
| $e_2 = (0, 1)$ | $(4, 2)$ | no: the first component of $v$ is 0, that of $Av$ is not |
| $(-4, 1)$ | $(-12 + 4,\ 2) = (-8, 2)$ | yes: $Av = 2v$ |
| $(1, 1)$ | $(7, 2)$ | no: $7 \neq 2$ |

Almost all the vectors change direction, but two directions do not: on the line of $e_1$ vectors are stretched by 3, on the line of $(-4, 1)$ by 2. In the drawing the light arrows are the vectors, the dark ones their images: $e_2$ "turns", the other two do not.

```graph
title: $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$: $e_1$ and $(-4, 1)$ stay on their line, $e_2$ does not
x: -9 5
y: -2 4
line: 0 0 1 0 | accent | dashed | thin
line: 0 0 -4 1 | violet | dashed | thin
vector: 1 0 | accent | faint | $e_1$ | s
vector: 3 0 | accent | thick | $Ae_1 = 3e_1$ | n
vector: -4 1 | violet | faint | $u$ | s
vector: -8 2 | violet | thick | $Au = 2u$ | n
vector: 0 1 | amber | faint | $e_2$ | e
vector: 4 2 | amber | thick | $Ae_2$ | e
```

> [!DEF] 17.1 · Eigenvector and eigenvalue
> Let $T : V \to V$ be an endomorphism of a vector space $V$ defined over a field $\K$. An **eigenvector** of $T$ is a vector $v \neq 0$ in $V$ for which
> $$T(v) = \lambda v$$
> for some scalar $\lambda \in \K$, which we will call the **eigenvalue** of $T$ relative to $v$.
>
> Notice that $\lambda$ can be any scalar, even zero. On the other hand, the eigenvector $v$ cannot be zero by definition. In words: an eigenvector is a (non-zero) vector that $T$ sends to a multiple of itself.

Piece by piece:

- **$T$ is an endomorphism**: start and target are the same space $V$, otherwise it would make no sense to compare $T(v)$ with $v$.
- **$v \neq 0$**: the zero vector satisfies $T(0) = 0 = \lambda \cdot 0$ for **every** $\lambda$; if we allowed it, every scalar would be an eigenvalue and the definition would say nothing.
- **$\lambda = 0$ is allowed**: $T(v) = 0 \cdot v = 0$ means that $v$ is a non-zero vector of the kernel. So $0$ is an eigenvalue exactly when $\Ker T \neq \{0\}$.
- **$\lambda \in \K$**: the eigenvalue must lie in the field you are working over. You will see that a rotation has no real eigenvalues but has complex ones.
- **"Relative to $v$"**: each eigenvector corresponds to exactly one eigenvalue, because from $\lambda v = \mu v$ with $v \neq 0$ follows $\lambda = \mu$.

> [!EXAMPLE] 17.2 · Two eigenvectors of a $2 \times 2$ matrix
> Consider the endomorphism $L_A : \R^2 \to \R^2$ with
> $$A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}.$$
> Since $L_A(e_1) = (3, 0) = 3e_1$, the vector $e_1$ is an eigenvector of $L_A$ with eigenvalue $3$. Instead $L_A(e_2) = (4, 2) \neq \lambda e_2$ for any $\lambda$ (a multiple of $e_2$ has first component 0), so $e_2$ is not an eigenvector.
>
> Notice that
> $$L_A\begin{pmatrix} -4 \\ 1 \end{pmatrix} = \begin{pmatrix} -8 \\ 2 \end{pmatrix} = 2\begin{pmatrix} -4 \\ 1 \end{pmatrix},$$
> and so the vector $(-4, 1)$ is an eigenvector with eigenvalue $2$.

In the tool below drag the vector $x$: when $Ax$ (in amber) falls on the same line as $x$ you have found an eigenvector, and the tool points it out. The two dashed lines are the directions of the eigenvectors. Then try the 90° rotation matrix from the buttons: the dashed lines disappear.

```widget matrice
title: Look for the eigenvectors of $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$
a: 3 4; 0 2
x: -2 1
raggio: 5
```

> [!BEYOND] eigenvalue 0 and eigenvalue 1
> Two special cases, from Martelli's book (Remarks 5.1.5 and 5.1.6). The eigenvectors with eigenvalue $0$ are the **non-zero vectors of the kernel**: $T(v) = 0$. The eigenvectors with eigenvalue $1$ are the non-zero **fixed points**: $T(v) = v$. For example, for the projection $T(x, y) = (x, 0)$ the vectors $(x, 0)$ with $x \neq 0$ have eigenvalue 1 and the vectors $(0, y)$ with $y \neq 0$ have eigenvalue 0.

## In coordinates matrices are enough (p. 85)

> [!REMARK] Eigenvectors in coordinates
> Eigenvectors and eigenvalues are easily studied in coordinates with respect to a basis. Let $T : V \to V$ be an endomorphism, let $\mathcal B$ be a basis of $V$ and $A = [T]^{\mathcal B}_{\mathcal B}$ the associated matrix. Let $v \in V$ and let $x = [v]_{\mathcal B} \in \K^n$ be its coordinate vector. Then
> $$T(v) = \lambda v \iff Ax = \lambda x.$$
> The equation $T(v) = \lambda v$ corresponds in coordinates to $Ax = \lambda x$: it is enough to understand well the case in which the endomorphism is given by $L_A$.

The reason, with lesson L15: the coordinates of $T(v)$ are $[T(v)]_{\mathcal B} = A[v]_{\mathcal B} = Ax$ (Proposition 15.9), those of $\lambda v$ are $\lambda x$; and two vectors are equal if and only if they have the same coordinates. Moreover $v \neq 0$ if and only if $x \neq 0$. That is why we talk about **eigenvalues and eigenvectors of a matrix** $A$: they are those of $L_A$.

> [!EXAMPLE] · eigenvectors among polynomials
> Let $T : \R_1[x] \to \R_1[x]$, $T(a + bx) = b + ax$ (it swaps the two coefficients). In the basis $\mathcal B = \{1, x\}$: $T(1) = x$ and $T(x) = 1$, so $A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.
> - $A(1, 1) = (1, 1)$: the coordinate vector $(1, 1)$, that is the polynomial $1 + x$, is an eigenvector with eigenvalue $1$. Check: $T(1 + x) = 1 + x$.
> - $A(1, -1) = (-1, 1) = -(1, -1)$: the polynomial $1 - x$ is an eigenvector with eigenvalue $-1$. Check: $T(1 - x) = -1 + x = -(1 - x)$.
>
> You work on the matrix, then translate the coordinates back into polynomials.

## Rotations have no eigenvectors (p. 85)

> [!EXAMPLE] 17.3 · A rotation
> Let $L_A : \R^2 \to \R^2$ with $A = \mathrm{Rot}_\vartheta$ be a rotation by an angle $\vartheta \neq 0, \pi$. Every non-zero vector $v \in \R^2$ is rotated by an angle $\vartheta \neq 0, \pi$, and so its image $L_A(v)$ cannot be a multiple of $v$: the multiples of $v$ lie on the line of $v$, that is they form with $v$ an angle of $0$ (positive multiples) or of $\pi$ (negative multiples). The endomorphism $L_A$ has no eigenvectors.

```graph
title: Rotating by $60°$, $v$ leaves its line: no multiple of $v$ is equal to $\mathrm{Rot}_{60°}\,v$
x: -3 3
y: -1.5 3
line: 0 0 2 1 | accent | dashed | thin
vector: 2 1 | accent | thick | $v$ | e
vector: 0.134 2.232 | amber | thick | $\mathrm{Rot}_{60°}\,v$ | n
arc: 0 0 0.9 0.4636 1.5108 | grey
text: 0.85 0.95 | $60°$
```

> [!BEYOND] the rotation matrix and a check with calculations
> The matrix of the anticlockwise rotation by an angle $\vartheta$ is $\mathrm{Rot}_\vartheta = \begin{pmatrix} \cos\vartheta & -\sin\vartheta \\ \sin\vartheta & \cos\vartheta \end{pmatrix}$ (you will see it in lesson L22). For $\vartheta = \frac{\pi}{2}$ it is $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ and it sends $(x, y)$ to $(-y, x)$. If $(-y, x) = \lambda (x, y)$ held, we would have $-y = \lambda x$ and $x = \lambda y$; substituting, $x = \lambda(-\lambda x) = -\lambda^2 x$, that is $(1 + \lambda^2)x = 0$. Since $1 + \lambda^2 > 0$ for every real $\lambda$, $x = 0$ and then $y = -\lambda x = 0$: only the zero vector, which does not count. For $\vartheta = 0$ the rotation is the identity, for $\vartheta = \pi$ it is $v \mapsto -v$: in these two cases **every** non-zero vector is an eigenvector.

## An example in $\R^3$ and the multiples of an eigenvector (p. 86)

> [!EXAMPLE] 17.4 · An eigenvector of a $3 \times 3$ matrix
> Consider the endomorphism $L_A : \R^3 \to \R^3$ with
> $$A = \begin{pmatrix} 1 & 1 & -1 \\ 2 & 1 & 1 \\ 3 & 0 & 2 \end{pmatrix}.$$
> Notice that $L_A(e_1) = (1, 2, 3)$ (the first column), which is not a multiple of $e_1$: so $e_1$ is not an eigenvector. Instead for $v = (0, 1, 1)$ we find
> $$Av = \begin{pmatrix} 0 + 1 - 1 \\ 0 + 1 + 1 \\ 0 + 0 + 2 \end{pmatrix} = \begin{pmatrix} 0 \\ 2 \\ 2 \end{pmatrix} = 2v,$$
> so $v$ is an eigenvector with eigenvalue 2. Similarly, for $w = (0, 3, 3)$ we find $Aw = (0, 6, 6) = 2w$: $w$ is also an eigenvector with eigenvalue 2. Notice that $w = 3v$.

> [!REMARK] The multiples of an eigenvector
> Let $f : V \to V$ be an endomorphism. If $v \in V$ is an eigenvector for $f$ with eigenvalue $\lambda$, then any multiple $w = \mu v$ of $v$ with $\mu \neq 0$ is also an eigenvector with the same eigenvalue $\lambda$. Indeed
> $$f(\mu v) = \mu f(v) = \mu \lambda v = \lambda(\mu v).$$
> If $v \in V$ is an eigenvector, all the non-zero vectors of the line $\Span(v)$ are eigenvectors too, with the same eigenvalue $\lambda$.

The steps of the formula: the first uses the linearity of $f$, the second the definition of eigenvector, the third only the order of the factors. The condition $\mu \neq 0$ is needed because $0 \cdot v = 0$ is not an eigenvector. That is why, when an exercise asks for "an eigenvector", the answer is not unique: any non-zero multiple works, and it pays to choose the one with the simplest numbers.

> [!PITFALL] The sum of eigenvectors is not always an eigenvector
> With $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$: $e_1$ (eigenvalue 3) and $u = (-4, 1)$ (eigenvalue 2) are eigenvectors, but $e_1 + u = (-3, 1)$ has image $A(-3, 1) = (-9 + 4,\ 2) = (-5, 2)$, which is not a multiple of $(-3, 1)$: you would need $\frac{-5}{-3} = \frac 21$, false. Adding eigenvectors with **different** eigenvalues takes you off the special lines. (With the **same** eigenvalue, instead, the sum, if it is not zero, is still an eigenvector: $T(v + w) = \lambda v + \lambda w = \lambda(v + w)$. This is where the eigenspace of lesson L18 comes from.)

## Diagonalisable endomorphisms and matrices (pp. 86–87)

We come to the real reason why eigenvectors and eigenvalues are introduced.

> [!DEF] 17.5 · Diagonalisable endomorphism
> An endomorphism $T : V \to V$ is **diagonalisable** if $V$ has a basis $\mathcal B = \{v_1, \dots, v_n\}$ made of eigenvectors for $T$.

The term "diagonalisable" is due to the following fact, which is crucial.

> [!PROP] 17.6
> Let $\mathcal B = \{v_1, \dots, v_n\}$ be any basis of $V$. The associated matrix $A = [T]^{\mathcal B}_{\mathcal B}$ is diagonal if and only if the vectors $v_1, \dots, v_n$ are all eigenvectors for $T$.

The reason, column by column:

1. $v_i$ is an eigenvector $\iff T(v_i) = \lambda_i v_i$ for some $\lambda_i \in \K$.
2. $T(v_i) = \lambda_i v_i = 0 \cdot v_1 + \dots + \lambda_i v_i + \dots + 0 \cdot v_n$ means that $[T(v_i)]_{\mathcal B} = \lambda_i e_i$: a column with $\lambda_i$ in place $i$ and zeros elsewhere.
3. Column $i$ of $A$ is exactly $[T(v_i)]_{\mathcal B}$. So this happens for every $i = 1, \dots, n$ if and only if $A$ is diagonal, with the eigenvalues on the main diagonal:
$$A = \begin{pmatrix} \lambda_1 & 0 & \cdots & 0 \\ 0 & \lambda_2 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & \lambda_n \end{pmatrix}.$$

We have found out that an endomorphism $T$ is diagonalisable if and only if there is a basis $\mathcal B$ such that $A = [T]^{\mathcal B}_{\mathcal B}$ is a diagonal matrix. This happens precisely when $\mathcal B$ is a basis of eigenvectors, and the entries on the main diagonal of $A$ are their eigenvalues. In coordinates:

> [!DEF] 17.7 · Diagonalisable matrix
> A matrix $A \in M(n, \K)$ is **diagonalisable** if it is similar to a diagonal matrix $D$. So $A$ is diagonalisable $\iff$ there is an invertible matrix $M$ such that
> $$D = M^{-1}AM$$
> is diagonal.

The link with endomorphisms is very close:

> [!PROP] 17.8
> Let $\mathcal B$ be a basis of $V$. An endomorphism $T : V \to V$ is diagonalisable $\iff$ the associated matrix $A = [T]^{\mathcal B}_{\mathcal B}$ is diagonalisable.

The handouts' proof, step by step:

1. **($\Rightarrow$)** If $T$ is diagonalisable, there is a basis $\mathcal C$ of $V$ (of eigenvectors) for which $D = [T]^{\mathcal C}_{\mathcal C}$ is diagonal. Let $M = [\id]^{\mathcal C}_{\mathcal B}$ be the change-of-basis matrix from $\mathcal C$ to $\mathcal B$. By the formula of lesson L16, $[T]^{\mathcal C}_{\mathcal C} = M^{-1}[T]^{\mathcal B}_{\mathcal B}M$, that is $D = M^{-1}AM$: $A$ is diagonalisable.
2. **($\Leftarrow$)** If $D = M^{-1}AM$ is diagonal for some invertible $M$, let $\mathcal C$ be the basis of $V$ formed by the vectors whose coordinates with respect to $\mathcal B$ are the columns of $M$ (they are a basis because $M$ is invertible). By construction $M = [\id]^{\mathcal C}_{\mathcal B}$, and so $[T]^{\mathcal C}_{\mathcal C} = M^{-1}AM = D$ is diagonal: $\mathcal C$ is a basis of eigenvectors.

> [!EXAMPLE] 17.9 · $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$ is diagonalisable
> The endomorphism $L_A : \R^2 \to \R^2$ of Example 17.2 is diagonalisable: $v_1 = (1, 0)$ and $v_2 = (-4, 1)$ are both eigenvectors and are linearly independent (neither is a multiple of the other), so they form a basis of $\R^2$. Their eigenvalues are $3$ and $2$. Taking $\mathcal B = \{v_1, v_2\}$ we get
> $$[L_A]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}.$$

> [!EXAMPLE] 17.10 · Rotations
> The rotation by an angle $\vartheta$ of Example 17.3 is not diagonalisable for $\vartheta \neq 0, \pi$, because it has no eigenvectors. For $\vartheta = 0$ and $\vartheta = \pi$ the rotation becomes $f(v) = v$ and $f(v) = -v$ respectively, and so it is diagonalisable: in these two cases every non-zero vector is an eigenvector, and every basis is a basis of eigenvectors.

> [!METHOD] From a basis of eigenvectors to $M$ and $D$
> 1. Put the eigenvectors **in columns** in $M$, in the order you prefer: $M = [\id]^{\mathcal B}_{\mathcal C}$ with $\mathcal B$ the basis of eigenvectors.
> 2. Put the eigenvalues on the diagonal of $D$ **in the same order**: column $j$ of $M$ has eigenvalue $d_{jj}$.
> 3. Check that $M$ is invertible ($\det M \neq 0$): you need $n$ independent eigenvectors.
> 4. Then $D = M^{-1}AM$, that is $A = MDM^{-1}$. **Check without the inverse**: $AM = MD$, because column $j$ of $AM$ is $Av_j$ and column $j$ of $MD$ is $d_{jj}v_j$.
>
> In Example 17.9: $AM = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} 1 & -4 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 3 & -8 \\ 0 & 2 \end{pmatrix}$ and $MD = \begin{pmatrix} 1 & -4 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 3 & -8 \\ 0 & 2 \end{pmatrix}$.

> [!PITFALL] The order of $D$ and the columns of $M$
> If you swap the order of the columns of $M$ you must also swap the eigenvalues in $D$: with $M = \begin{pmatrix} -4 & 1 \\ 1 & 0 \end{pmatrix}$ the right matrix is $D = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$. And the columns of $M$ must be **independent** eigenvectors: $(0, 1, 1)$ and $(0, 3, 3)$ of Example 17.4 are two eigenvectors, but they cannot be together in a basis.

## Why diagonal matrices are handy (p. 88)

Diagonal matrices are much easier to handle than the others. Here are the calculations that become entry by entry.

**Matrix times vector**: each component is multiplied by its diagonal entry,
$$\begin{pmatrix} \lambda_1 & 0 & \dots & 0 \\ 0 & \lambda_2 & \dots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \dots & \lambda_n \end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end{pmatrix} = \begin{pmatrix} \lambda_1 x_1 \\ \lambda_2 x_2 \\ \vdots \\ \lambda_n x_n \end{pmatrix}.$$
For example $\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} 5 \\ -1 \end{pmatrix} = \begin{pmatrix} 15 \\ -2 \end{pmatrix}$.

**Determinant**: the product of the entries on the diagonal, $\det A = \lambda_1 \cdots \lambda_n$.

**Product of two diagonal matrices**: diagonal, with the products entry by entry,
$$\begin{pmatrix} \lambda_1 & & \\ & \ddots & \\ & & \lambda_n \end{pmatrix}\begin{pmatrix} \mu_1 & & \\ & \ddots & \\ & & \mu_n \end{pmatrix} = \begin{pmatrix} \lambda_1\mu_1 & & \\ & \ddots & \\ & & \lambda_n\mu_n \end{pmatrix}$$
(the empty spaces are zeros).

**Powers**: applying the product rule $k$ times,
$$A = \begin{pmatrix} \lambda_1 & & \\ & \ddots & \\ & & \lambda_n \end{pmatrix} \Longrightarrow A^k = \begin{pmatrix} \lambda_1^k & & \\ & \ddots & \\ & & \lambda_n^k \end{pmatrix}.$$
For example $\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}^3 = \begin{pmatrix} 27 & 0 \\ 0 & 8 \end{pmatrix}$.

### The powers of a diagonalisable matrix

If $A$ is diagonalisable, $A = MDM^{-1}$, and powers are computed by going through $D$. With $k = 3$ you see the mechanism: the pairs $M^{-1}M$ in the middle cancel,
$$A^3 = (MDM^{-1})(MDM^{-1})(MDM^{-1}) = MD(M^{-1}M)D(M^{-1}M)DM^{-1} = MD^3M^{-1},$$
and in the same way $A^k = MD^kM^{-1}$ for every $k$.

> [!EXAMPLE] 17.11 · Computing $A^{100}$
> We take $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$ and compute $A^{100}$. The matrix $A$ is not diagonal, so computing one of its powers directly would require 99 products. We know, though, that $A$ is diagonalisable: from Example 17.9 we deduce that $M^{-1}AM = D = \begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$, where
> $$M = [\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & -4 \\ 0 & 1 \end{pmatrix} \Longrightarrow M^{-1} = [\id]^{\mathcal C}_{\mathcal B} = \begin{pmatrix} 1 & 4 \\ 0 & 1 \end{pmatrix}.$$
> Here $\mathcal B = \{(1, 0), (-4, 1)\}$ and $\mathcal C$ is the standard basis of $\R^2$. So
> $$\begin{aligned} A^{100} &= (MDM^{-1})^{100} = MD^{100}M^{-1} = \begin{pmatrix} 1 & -4 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 3^{100} & 0 \\ 0 & 2^{100} \end{pmatrix}\begin{pmatrix} 1 & 4 \\ 0 & 1 \end{pmatrix} \\ &= \begin{pmatrix} 1 & -4 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 3^{100} & 4 \cdot 3^{100} \\ 0 & 2^{100} \end{pmatrix} = \begin{pmatrix} 3^{100} & 4\,(3^{100} - 2^{100}) \\ 0 & 2^{100} \end{pmatrix}. \end{aligned}$$

A check with a small exponent: the same formula with $2$ in place of $100$ gives $\begin{pmatrix} 9 & 4(9 - 4) \\ 0 & 4 \end{pmatrix} = \begin{pmatrix} 9 & 20 \\ 0 & 4 \end{pmatrix}$, and the direct product is $A^2 = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 9 & 12 + 8 \\ 0 & 4 \end{pmatrix} = \begin{pmatrix} 9 & 20 \\ 0 & 4 \end{pmatrix}$.

## The characteristic polynomial (p. 89)

In the examples seen so far the eigenvectors were given and you just had to check them. How do you **find** them? An idea in two lines: $Ax = \lambda x$ can be rewritten $Ax - \lambda x = 0$, that is $(A - \lambda I_n)x = 0$. We are looking for a **non-zero** solution of a square homogeneous system, and it exists exactly when the matrix $A - \lambda I_n$ is not invertible, that is when its determinant is zero. The determinant, written with an unknown $\lambda$, is a polynomial in $\lambda$.

> [!DEF] 17.12 · Characteristic polynomial
> Let $A \in M(n, \K)$. The **characteristic polynomial** of $A = (a_{ij})$ is defined as follows:
> $$p_A(\lambda) = \det(A - \lambda I_n) = \det\begin{pmatrix} a_{11} - \lambda & a_{12} & \dots & a_{1n} \\ a_{21} & a_{22} - \lambda & \dots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{n1} & a_{n2} & \dots & a_{nn} - \lambda \end{pmatrix}.$$

Piece by piece:

- **$A - \lambda I_n$** is obtained by taking $\lambda$ away **only on the diagonal**; the other entries stay the same.
- **$\lambda$ is a variable**: the determinant is an expression in $\lambda$. You use $\lambda$ instead of $x$ because $x$ already denotes vectors.
- **The subscript $A$** in $p_A$ reminds you which matrix you start from.

> [!REMARK] It really is a polynomial of degree $n$
> The product of the entries on the diagonal, $(a_{11} - \lambda)\cdots(a_{nn} - \lambda)$, contains $(-\lambda)^n$; all the other terms of the determinant have at most $n - 2$ factors with $\lambda$. So $p_A$ has degree $n$ and leading coefficient $(-1)^n$.

> [!BEYOND] the formula for $2 \times 2$ matrices
> For $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:
> $$p_A(\lambda) = (a - \lambda)(d - \lambda) - bc = \lambda^2 - (a + d)\lambda + (ad - bc) = \lambda^2 - \tr(A)\,\lambda + \det A.$$
> In general (Martelli, Proposition 5.1.23) the constant term of $p_A$ is $p_A(0) = \det A$ and the coefficient of $\lambda^{n-1}$ is $(-1)^{n-1}\tr A$. For example, for $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$: $p_A(\lambda) = \lambda^2 - 5\lambda - 2$.

> [!REMARK] Similar matrices have the same characteristic polynomial
> If $A$ and $B$ are similar, then $p_A(\lambda) = p_B(\lambda)$. Indeed, if $A = M^{-1}BM$ for some invertible $M$, we use $\lambda I_n = \lambda M^{-1}M = M^{-1}(\lambda I_n)M$ to get
> $$\begin{aligned} p_A(\lambda) &= \det(A - \lambda I_n) = \det(M^{-1}BM - M^{-1}\lambda I_n M) \\ &= \det\big(M^{-1}(B - \lambda I_n)M\big) = \det(M^{-1})\det(B - \lambda I_n)\det(M) \\ &= \det(B - \lambda I_n) = p_B(\lambda) \end{aligned}$$
> thanks to Binet's theorem. For an endomorphism $T : V \to V$ of a vector space $V$ we then define the characteristic polynomial $p_T(\lambda)$ as the characteristic polynomial $p_A(\lambda)$ of the associated matrix $A = [T]^{\mathcal B}_{\mathcal B}$ with respect to any basis $\mathcal B$ of $V$. The definition does not depend on the basis chosen because the characteristic polynomial is invariant under similarity.

The steps of the chain: in the second you collect $M^{-1}$ on the left and $M$ on the right (distributive property of the product of matrices); in the third you use Binet, $\det(XYZ) = \det X \det Y \det Z$; in the fourth $\det(M^{-1})\det M = \det(M^{-1}M) = \det I_n = 1$.

> [!PROP] 17.13
> The eigenvalues of $T$ are precisely the roots of the characteristic polynomial $p_T(\lambda)$.

The handouts' proof is a chain of equivalences. We choose a basis $\mathcal B$ and write $A = [T]^{\mathcal B}_{\mathcal B}$. A scalar $\lambda \in \K$ is an eigenvalue for $T$ if and only if there is a non-zero $x \in \K^n$ with $Ax = \lambda x$ (Remark in coordinates). Then:

1. $\exists\, x \neq 0$ with $Ax = \lambda x$ $\iff$ $\exists\, x \neq 0$ with $(A - \lambda I_n)x = 0$: you bring $\lambda x = \lambda I_n x$ to the left;
2. $\iff$ $\exists\, x \neq 0$ with $x \in \Ker(A - \lambda I_n)$: it is the definition of kernel;
3. $\iff$ $A - \lambda I_n$ is not invertible: a square matrix is invertible if and only if its kernel is $\{0\}$ (lessons L10 and L14);
4. $\iff$ $\det(A - \lambda I_n) = 0$ $\iff$ $p_A(\lambda) = 0$: a square matrix is invertible if and only if it has non-zero determinant (Proposition 10.8). $\square$

> [!EXAMPLE] 17.14 · The eigenvalues found again
> We take $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$. We find
> $$p_A(\lambda) = \det(A - \lambda I_2) = \det\begin{pmatrix} 3 - \lambda & 4 \\ 0 & 2 - \lambda \end{pmatrix} = (3 - \lambda)(2 - \lambda).$$
> The roots of this polynomial are exactly $\lambda = 2$ and $\lambda = 3$: the eigenvalues found by hand in Example 17.2.

> [!METHOD] Eigenvalues and eigenvectors of a matrix, step by step
> 1. **Write $A - \lambda I_n$** (take $\lambda$ away on the diagonal) and compute $p_A(\lambda) = \det(A - \lambda I_n)$. For $3 \times 3$ matrices expand along the row or column with the most zeros, and **leave the polynomial factored** when you can: $(2 - \lambda)(\dots)$ is more useful than $-\lambda^3 + \dots$
> 2. **Find the roots** in $\K$: they are the eigenvalues. Check with the trace: if you have found all the $n$ roots (counted with multiplicity), their sum is $\tr A$ and their product is $\det A$.
> 3. **For each eigenvalue $\lambda_0$** solve the homogeneous system $(A - \lambda_0 I_n)x = 0$ (with Gauss). The non-zero solutions are the eigenvectors relative to $\lambda_0$. The system must have infinitely many solutions: if you only get $x = 0$, there is a mistake in the calculation of $\lambda_0$.
> 4. **Check** an eigenvector $v$ by computing $Av$ and comparing it with $\lambda_0 v$.

> [!EXAMPLE] · the whole recipe on a $2 \times 2$ matrix
> Let $A = \begin{pmatrix} -1 & 2 \\ -4 & 5 \end{pmatrix}$ (from Martelli's book, Example 5.1.29).
>
> **Step 1.** $p_A(\lambda) = (-1 - \lambda)(5 - \lambda) - 2 \cdot (-4) = \lambda^2 - 4\lambda - 5 + 8 = \lambda^2 - 4\lambda + 3$. Check with the formula: $\tr A = 4$, $\det A = -5 + 8 = 3$.
>
> **Step 2.** $\lambda^2 - 4\lambda + 3 = (\lambda - 1)(\lambda - 3)$: eigenvalues $1$ and $3$. Check: $1 + 3 = 4 = \tr A$ and $1 \cdot 3 = 3 = \det A$.
>
> **Step 3.**
> - $\lambda = 1$: $A - I_2 = \begin{pmatrix} -2 & 2 \\ -4 & 4 \end{pmatrix}$, that is $-2x + 2y = 0$ (the second equation is twice the first): $y = x$, eigenvectors $t(1, 1)$ with $t \neq 0$.
> - $\lambda = 3$: $A - 3I_2 = \begin{pmatrix} -4 & 2 \\ -4 & 2 \end{pmatrix}$, that is $-4x + 2y = 0$: $y = 2x$, eigenvectors $t(1, 2)$ with $t \neq 0$.
>
> **Step 4.** $A(1, 1) = (-1 + 2,\ -4 + 5) = (1, 1)$ and $A(1, 2) = (-1 + 4,\ -4 + 10) = (3, 6) = 3(1, 2)$.
>
> The two eigenvectors are independent, so $A$ is diagonalisable: with $M = \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}$ and $D = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}$ we have $D = M^{-1}AM$.

> [!BEYOND] triangular matrices and rotations
> **Triangular** (Martelli, Proposition 5.1.34). If $A$ is triangular (all zeros below, or above, the diagonal), so is $A - \lambda I_n$, and the determinant of a triangular matrix is the product of the diagonal: $p_A(\lambda) = (a_{11} - \lambda)\cdots(a_{nn} - \lambda)$. **The eigenvalues are the entries on the diagonal.** It happens often in the exam papers (03/07/2026, question 3; 07/09/2026, problem 11).
>
> **Rotations.** $p_{\mathrm{Rot}_\vartheta}(\lambda) = \lambda^2 - 2\cos\vartheta\,\lambda + 1$, with discriminant $4\cos^2\vartheta - 4 < 0$ for $\vartheta \neq 0, \pi$: no real root, as predicted by Example 17.3. Over $\C$ instead the roots exist: for $\vartheta = \frac{\pi}{2}$, $p(\lambda) = \lambda^2 + 1$ has roots $\pm i$ (exercise 6). That is why, when you talk about eigenvalues, you must always say which field you are working over.

The tool below computes the characteristic polynomial of a $2 \times 2$ or $3 \times 3$ matrix, its rational roots and, for each one, a basis of the solutions of $(A - \lambda I)x = 0$. It is set up with the matrix of Example 17.4: you find the eigenvalue 2 with the eigenvector $(0, 1, 1)$, and a second-degree factor with no real roots (exercise 4). Then try the matrix $1\ 2\ 0;\ 2\ 1\ 0;\ 1\ 1\ 2$ of exercise 10.

```widget gauss
title: Characteristic polynomial and eigenvectors
matrice: 1 1 -1; 2 1 1; 3 0 2
modo: autovalori
modi: autovalori, nucleo, determinante
```

> [!BEYOND] where to find it in the book
> In Martelli's book: §5.1.1–5.1.2 "Autovettori e autovalori", "Endomorfismi diagonalizzabili" (pp. 151–154), §5.1.3–5.1.4 "Matrici diagonali", "Matrici diagonalizzabili", with the example of $A^{100}$ (pp. 154–156), §5.1.6–5.1.7 "Polinomio caratteristico", "Le radici del polinomio caratteristico" (pp. 157–161, with the $2 \times 2$ examples over $\R$ and over $\C$), §5.1.8 "Matrici triangolari" (p. 162). The relation between trace, determinant and eigenvalues is Proposition 5.2.15 (p. 169).

## Towards the exam

The Linear Algebra and Geometry test has 10 multiple-choice questions (5 answers, one right) and 2 problems worth 11 points, which are marked only with at least 6 correct answers; it lasts 2 hours, with no calculator, and you may bring only a 4-page handwritten sheet. The 2026/27 exam sessions are on 22/01 and 05/02/2027 at 14:00. All the details are in lesson L01.

**What you need from this lesson for the exam.** Eigenvalues and eigenvectors are present in **every** exam session 2023–2026: almost always in one or two quiz questions and very often in an open problem (which will also use lesson L18).

| Type of question | Where |
|---|---|
| which of these vectors is an eigenvector? | 03/07/2026 q. 2 |
| the set of eigenvalues of a $3 \times 3$ | 06/09/2024 q. 10; 07/02/2025 q. 8; 05/02/2026 q. 8; 03/07/2026 q. 3 (triangular) |
| given an eigenvalue, find the others (also complex) | 02/09/2025 q. 4 |
| the basis of eigenvectors of a $2 \times 2$ | 03/06/2026 q. 6 |
| what cannot happen if $\lambda$ is an eigenvalue | 03/06/2025 q. 8 |
| problem: matrix of $T$ and eigenvalues | 10/07/2024 problem 11; 07/09/2026 problem 11 |

### Three real exam questions, solved

> [!EXAM] Exam of 03/07/2026, question 2
> *Let $T(x, y) = (2x + y,\ 3y)$. Which of the vectors $(1, 1)$, $(0, 1)$, $(2, 1)$, $(-1, 1)$ is an eigenvector (or: $T$ has no real eigenvectors)?*
>
> Solution. You do not need the characteristic polynomial: you try. With $A = \begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$: $A(1, 1) = (3, 3) = 3(1, 1)$, yes; $A(0, 1) = (1, 3)$, $A(2, 1) = (5, 3)$, $A(-1, 1) = (-1, 3)$, none of the three is a multiple of the starting vector. The answer is $(1, 1)$, with eigenvalue 3. "No real eigenvector" is also ruled out because $A$ is triangular with real eigenvalues 2 and 3.

> [!EXAM] Exam of 05/02/2026, question 8
> *Find the set of eigenvalues of $T(x, y, z) = (2x + y - 2z,\ -x + 2z,\ 3z)$.*
>
> Solution. $A = \begin{pmatrix} 2 & 1 & -2 \\ -1 & 0 & 2 \\ 0 & 0 & 3 \end{pmatrix}$. The third row of $A - \lambda I_3$ is $(0, 0, 3 - \lambda)$: expanding along that row,
> $$p_A(\lambda) = (3 - \lambda)\det\begin{pmatrix} 2 - \lambda & 1 \\ -1 & -\lambda \end{pmatrix} = (3 - \lambda)\big(-\lambda(2 - \lambda) + 1\big) = (3 - \lambda)(\lambda^2 - 2\lambda + 1) = (3 - \lambda)(\lambda - 1)^2.$$
> The set of eigenvalues is $\{1, 3\}$. Check with the trace: $1 + 1 + 3 = 5 = 2 + 0 + 3$.

> [!EXAM] Exam of 02/09/2025, question 4
> *$T(x, y, z) = (2x + 2y,\ -2x - 2y + 2z,\ 2x)$ has eigenvalue $\lambda_1 = 2$. What are the other eigenvalues?* The answers were $\pm(1 + i\sqrt 2)$, $2 \pm i\sqrt 2$, $1 + i\sqrt 2$ and $1 + i\sqrt 3$, $2 + i\sqrt 2$ and $1 - i\sqrt 3$, $-1 \pm i\sqrt 3$.
>
> Quick solution. The trace of $A = \begin{pmatrix} 2 & 2 & 0 \\ -2 & -2 & 2 \\ 2 & 0 & 0 \end{pmatrix}$ is $2 - 2 + 0 = 0$, and the sum of the three eigenvalues (over $\C$) is the trace: $\lambda_2 + \lambda_3 = 0 - 2 = -2$. Only $-1 \pm i\sqrt 3$ has sum $-2$. Full solution: expanding along the third row, $p_A(\lambda) = -\lambda^3 + 8 = -(\lambda - 2)(\lambda^2 + 2\lambda + 4)$, and $\lambda^2 + 2\lambda + 4 = 0$ gives $\lambda = -1 \pm i\sqrt 3$.

### Mistakes to avoid

- Accepting $v = 0$ as an eigenvector, or ruling out $\lambda = 0$ as an eigenvalue.
- Taking $\lambda$ away off the diagonal too: in $A - \lambda I_n$ **only** the diagonal changes.
- Expanding the whole determinant into a third-degree polynomial and then not managing to factor it: expand along the row or column with the most zeros and factor out $(a - \lambda)$ straight away.
- Forgetting to check: sum of the eigenvalues = trace, product = determinant (if you have all the roots), and $Av = \lambda v$ on an eigenvector.
- Putting the eigenvalues in $D$ in an order different from that of the columns of $M$.

> [!EXAM] The 4-page sheet
> From this lesson: "$v \neq 0$, $T(v) = \lambda v$"; "$p_A(\lambda) = \det(A - \lambda I)$, $2 \times 2$: $\lambda^2 - \tr A\,\lambda + \det A$"; "eigenvalues = roots, eigenvectors = $\Ker(A - \lambda I) \setminus \{0\}$"; "triangular: eigenvalues on the diagonal"; "sum = trace, product = determinant"; "$D = M^{-1}AM$, $M$ = eigenvectors in columns, $A^k = MD^kM^{-1}$".

## Quiz

```quiz
Q: Let $T : \R^2 \to \R^2$, $T(x, y) = (x + 2y,\ 3y)$. Which of these vectors is an eigenvector of $T$?
+ $(1, 1)$
- $(0, 1)$
- $(1, 2)$
- $(2, 1)$
- $T$ has no real eigenvectors.
= $T(1, 1) = (3, 3) = 3(1, 1)$. The others: $T(0, 1) = (2, 3)$, $T(1, 2) = (5, 6)$, $T(2, 1) = (4, 3)$, none a multiple of the starting vector. The matrix $\begin{pmatrix} 1 & 2 \\ 0 & 3 \end{pmatrix}$ is triangular with real eigenvalues 1 and 3, so the last answer is false. Similar to the exam of 03/07/2026, question 2.

Q: The set of eigenvalues of $T : \R^3 \to \R^3$, $T(x, y, z) = (2x + z,\ x + 3y - z,\ z)$, is:
+ $\{1, 2, 3\}$
- $\{2, 3\}$
- $\{0, 1, 3\}$
- $\{-1, 2, 3\}$
- $\{\}$ (no real eigenvalue)
= $A = \begin{pmatrix} 2 & 0 & 1 \\ 1 & 3 & -1 \\ 0 & 0 & 1 \end{pmatrix}$. Expanding $\det(A - \lambda I_3)$ along the third row $(0, 0, 1 - \lambda)$: $p_A(\lambda) = (1 - \lambda)\big((2 - \lambda)(3 - \lambda) - 0\big)$. Roots $1, 2, 3$; check: $1 + 2 + 3 = 6 = \tr A$. Similar to the exams of 07/02/2025 (question 8) and 05/02/2026 (question 8).

Q: The endomorphism $T(x, y, z) = (x,\ y - 2z,\ y + z)$ of $\R^3$ has eigenvalue $\lambda_1 = 1$. What are the other eigenvalues (in $\C$)?
+ $1 \pm i\sqrt 2$
- $\pm(1 + i\sqrt 2)$
- $1 \pm \sqrt 2$
- $-1 \pm i\sqrt 2$
- $2 \pm i$
= Expanding along the first row $(1 - \lambda, 0, 0)$: $p(\lambda) = (1 - \lambda)\big((1 - \lambda)^2 + 2\big)$. From $(1 - \lambda)^2 = -2$ you get $\lambda = 1 \pm i\sqrt 2$. Check with the trace: $1 + (1 + i\sqrt 2) + (1 - i\sqrt 2) = 3 = 1 + 1 + 1$. Similar to the exam of 02/09/2025, question 4.

Q: $T(x, y) = (2x,\ x + 3y)$ has eigenvalues 2 and 3. A basis of eigenvectors is:
+ $\{(1, -1), (0, 1)\}$
- $\{(2, 1), (0, 3)\}$
- $\{(1, 1), (0, 1)\}$
- $\{(1, 0), (0, 1)\}$
- $\{(1, -1), (2, -2)\}$
= For $\lambda = 3$: $T(0, 1) = (0, 3) = 3(0, 1)$. For $\lambda = 2$: $(A - 2I)x = 0$ with $A - 2I = \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix}$ gives $x + y = 0$, that is $(1, -1)$; check $T(1, -1) = (2, -2)$. The second answer is the columns of $A$; the last is not a basis (proportional vectors). Similar to the exam of 03/06/2026, question 6.

Q: Let $\lambda$ be an eigenvalue of the endomorphism $T : \R^n \to \R^n$. Which of these statements is **always false**?
+ $\Ker(T - \lambda\,\id) = \{0\}$
- $\lambda = 0$
- $T$ is invertible.
- $p_T(\lambda) = 0$
- $T - \lambda\,\id$ is not injective.
= If $\lambda$ is an eigenvalue there is $v \neq 0$ with $(T - \lambda\,\id)(v) = 0$, so the kernel of $T - \lambda\,\id$ is never $\{0\}$. The last two are always true (Proposition 17.13). $\lambda = 0$ can happen (when $T$ is not invertible), and $T$ invertible can happen (when $0$ is not an eigenvalue). Similar to the exam of 03/06/2025, question 8.

Q: The characteristic polynomial of $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ is:
+ $\lambda^2 - 5\lambda - 2$
- $\lambda^2 + 5\lambda - 2$
- $\lambda^2 - 5\lambda + 10$
- $(1 - \lambda)(4 - \lambda)$
- $\lambda^2 - 2\lambda - 5$
= $(1 - \lambda)(4 - \lambda) - 2 \cdot 3 = \lambda^2 - 5\lambda + 4 - 6 = \lambda^2 - 5\lambda - 2$. With the formula: $\tr A = 5$ and $\det A = -2$. The fourth answer forgets the term $-bc$ (that formula holds only for triangular matrices).

Q: Let $A = \begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$. What is the entry in position $(1, 2)$ of $A^{10}$?
N: 1023
= Eigenvectors: $(1, 0)$ with eigenvalue 1 and $(1, 1)$ with eigenvalue 2 (indeed $A(1, 1) = (2, 2)$). With $M = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ and $M^{-1} = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$: $A^n = M\begin{pmatrix} 1 & 0 \\ 0 & 2^n \end{pmatrix}M^{-1} = \begin{pmatrix} 1 & 2^n - 1 \\ 0 & 2^n \end{pmatrix}$. For $n = 10$: $2^{10} - 1 = 1023$. Check with $n = 2$: $A^2 = \begin{pmatrix} 1 & 3 \\ 0 & 4 \end{pmatrix}$.

Q: If $v$ is an eigenvector of $T$ with eigenvalue $\lambda$, then the vector $3v$ is:
+ an eigenvector of $T$ with eigenvalue $\lambda$.
- an eigenvector of $T$ with eigenvalue $3\lambda$.
- an eigenvector of $T$ with eigenvalue $\lambda / 3$.
- an eigenvector only if $\lambda \neq 0$.
- not an eigenvector.
= $T(3v) = 3T(v) = 3\lambda v = \lambda(3v)$ and $3v \neq 0$: same eigenvalue $\lambda$, whatever $\lambda$ is (even $0$). It is the remark on multiples after Example 17.4.

Q: Which of these real matrices has **no** real eigenvalues?
+ $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 0 \\ 0 & -3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix}$
= Characteristic polynomials: $\lambda^2 + 1$ (no real root: it is the $90°$ rotation); $\lambda^2 - 1$ (roots $\pm 1$); $(\lambda - 1)^2$; $(2 - \lambda)(-3 - \lambda)$; $\lambda^2 - 2\lambda - 3 = (\lambda - 3)(\lambda + 1)$.

Q: The matrices $A$ and $B$ are similar and $p_A(\lambda) = \lambda^2 - 3\lambda + 2$. Which statement is true?
+ $B$ has eigenvalues $1$ and $2$.
- $B = A$.
- $A$ and $B$ have the same eigenvectors.
- $\det B = 3$.
- $\tr B = 2$.
= Similar matrices have the same characteristic polynomial, so $p_B(\lambda) = \lambda^2 - 3\lambda + 2 = (\lambda - 1)(\lambda - 2)$. From the $2 \times 2$ formula: $\tr B = 3$ and $\det B = 2$. The eigenvectors usually change: in Example 16.10, $e_2$ is an eigenvector of $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ but not of the similar matrix $\begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}$.
```

## Exercises

::: exercise basic Checking whether a vector is an eigenvector
Let $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$. Which of $(1, 1)$, $(1, -1)$, $(1, 0)$ are eigenvectors of $A$, and with which eigenvalue?
::: solution
- $A(1, 1) = (2 + 1,\ 1 + 2) = (3, 3) = 3(1, 1)$: eigenvector with eigenvalue $3$.
- $A(1, -1) = (2 - 1,\ 1 - 2) = (1, -1) = 1 \cdot (1, -1)$: eigenvector with eigenvalue $1$.
- $A(1, 0) = (2, 1)$: to be a multiple of $(1, 0)$ it would need second component 0. It is not an eigenvector.

Check: $p_A(\lambda) = \lambda^2 - 4\lambda + 3 = (\lambda - 1)(\lambda - 3)$ (trace 4, determinant 3), roots 1 and 3.
:::

::: exercise basic Eigenvalues, eigenvectors, $M$ and $D$
Find eigenvalues and eigenvectors of $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ and write an invertible $M$ and a diagonal $D$ with $D = M^{-1}AM$.
::: solution
**Characteristic polynomial**: $\tr A = 7$, $\det A = 12 - 2 = 10$, so $p_A(\lambda) = \lambda^2 - 7\lambda + 10 = (\lambda - 2)(\lambda - 5)$. Eigenvalues $2$ and $5$ (check: $2 + 5 = 7$, $2 \cdot 5 = 10$).

**$\lambda = 2$**: $A - 2I_2 = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}$, equation $2x + y = 0$, that is $y = -2x$: eigenvector $(1, -2)$. Check: $A(1, -2) = (4 - 2,\ 2 - 6) = (2, -4) = 2(1, -2)$.

**$\lambda = 5$**: $A - 5I_2 = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}$, equation $-x + y = 0$: eigenvector $(1, 1)$. Check: $A(1, 1) = (5, 5)$.

$$M = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}, \qquad D = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix}.$$
$\det M = 1 + 2 = 3 \neq 0$. Check $AM = MD$: $AM = \begin{pmatrix} 2 & 5 \\ -4 & 5 \end{pmatrix}$ and $MD = \begin{pmatrix} 2 & 5 \\ -4 & 5 \end{pmatrix}$.
:::

::: exercise intermediate A formula for all the powers
With the matrix $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ of the previous exercise, find a formula for $A^n$ and check it for $n = 2$.
::: solution
$M^{-1} = \frac 13 \begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}$ ($\det M = 3$). Then
$$A^n = MD^nM^{-1} = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix}\begin{pmatrix} 2^n & 0 \\ 0 & 5^n \end{pmatrix}\frac 13\begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix} = \frac 13\begin{pmatrix} 2^n & 5^n \\ -2^{n+1} & 5^n \end{pmatrix}\begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix}$$
$$= \frac 13\begin{pmatrix} 2^n + 2 \cdot 5^n & -2^n + 5^n \\ -2^{n+1} + 2 \cdot 5^n & 2^{n+1} + 5^n \end{pmatrix}.$$
For $n = 2$: $\frac 13\begin{pmatrix} 4 + 50 & -4 + 25 \\ -8 + 50 & 8 + 25 \end{pmatrix} = \frac 13\begin{pmatrix} 54 & 21 \\ 42 & 33 \end{pmatrix} = \begin{pmatrix} 18 & 7 \\ 14 & 11 \end{pmatrix}$. The direct product: $A^2 = \begin{pmatrix} 16 + 2 & 4 + 3 \\ 8 + 6 & 2 + 9 \end{pmatrix} = \begin{pmatrix} 18 & 7 \\ 14 & 11 \end{pmatrix}$.
:::

::: exercise intermediate The characteristic polynomial of Example 17.4
Compute the characteristic polynomial of $A = \begin{pmatrix} 1 & 1 & -1 \\ 2 & 1 & 1 \\ 3 & 0 & 2 \end{pmatrix}$. What are the real eigenvalues? And the complex ones? Is $A$ diagonalisable over $\R$?
::: solution
I expand $\det(A - \lambda I_3)$ along the second column $(1,\ 1 - \lambda,\ 0)$, which has a zero:
$$\det\begin{pmatrix} 1 - \lambda & 1 & -1 \\ 2 & 1 - \lambda & 1 \\ 3 & 0 & 2 - \lambda \end{pmatrix} = -1 \cdot \det\begin{pmatrix} 2 & 1 \\ 3 & 2 - \lambda \end{pmatrix} + (1 - \lambda)\det\begin{pmatrix} 1 - \lambda & -1 \\ 3 & 2 - \lambda \end{pmatrix}.$$
The signs: place $(1, 2)$ sign $-$, place $(2, 2)$ sign $+$. The two minors:
- $\det\begin{pmatrix} 2 & 1 \\ 3 & 2 - \lambda \end{pmatrix} = 4 - 2\lambda - 3 = 1 - 2\lambda$;
- $\det\begin{pmatrix} 1 - \lambda & -1 \\ 3 & 2 - \lambda \end{pmatrix} = (1 - \lambda)(2 - \lambda) + 3 = \lambda^2 - 3\lambda + 5$.

So
$$p_A(\lambda) = -(1 - 2\lambda) + (1 - \lambda)(\lambda^2 - 3\lambda + 5) = -1 + 2\lambda + \lambda^2 - 3\lambda + 5 - \lambda^3 + 3\lambda^2 - 5\lambda = -\lambda^3 + 4\lambda^2 - 6\lambda + 4.$$
We know from Example 17.4 that $2$ is an eigenvalue: indeed $p_A(2) = -8 + 16 - 12 + 4 = 0$. Dividing by $\lambda - 2$ (Ruffini, lesson L04): $p_A(\lambda) = -(\lambda - 2)(\lambda^2 - 2\lambda + 2)$. The factor $\lambda^2 - 2\lambda + 2$ has discriminant $4 - 8 = -4 < 0$: roots $1 \pm i$.

Real eigenvalues: only $2$. Over $\C$: $2$, $1 + i$, $1 - i$. Check: $2 + (1 + i) + (1 - i) = 4 = \tr A$ and $2(1 + i)(1 - i) = 2 \cdot 2 = 4 = \det A$.

Over $\R$ the eigenvectors are only those with eigenvalue 2, and $(A - 2I_3)x = 0$ has solutions $t(0, 1, 1)$ (a line): there are not three independent eigenvectors, so $A$ is **not** diagonalisable over $\R$.
:::

::: exercise intermediate An endomorphism of $\R_1[x]$
Let $T : \R_1[x] \to \R_1[x]$, $T(a + bx) = b + ax$. Find eigenvalues and eigenvectors (as polynomials). Is $T$ diagonalisable? Write the matrix of $T$ in a basis of eigenvectors.
::: solution
In the basis $\{1, x\}$: $A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, $p_A(\lambda) = \lambda^2 - 0 \cdot \lambda + (0 - 1) = \lambda^2 - 1 = (\lambda - 1)(\lambda + 1)$.

- $\lambda = 1$: $A - I_2 = \begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix}$, $y = x$: coordinates $(1, 1)$, polynomial $1 + x$.
- $\lambda = -1$: $A + I_2 = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$, $y = -x$: coordinates $(1, -1)$, polynomial $1 - x$.

$\{1 + x,\ 1 - x\}$ is a basis of eigenvectors, so $T$ is diagonalisable and in this basis $[T] = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$. Check: $T(1 + x) = 1 + x$, $T(1 - x) = -1 + x = -(1 - x)$.
:::

::: exercise intermediate The $90°$ rotation over $\R$ and over $\C$ (beyond the handouts)
Let $A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$. (a) Show that $L_A : \R^2 \to \R^2$ has no eigenvalues. (b) Consider $L_A : \C^2 \to \C^2$ with the same matrix: find eigenvalues and eigenvectors. Is $A$ diagonalisable over $\C$?
::: solution
(a) $p_A(\lambda) = \lambda^2 - 0 \cdot \lambda + (0 + 1) = \lambda^2 + 1$, which has no real roots ($\lambda^2 \ge 0$). No real eigenvalue, so no eigenvector in $\R^2$.

(b) Over $\C$: $\lambda^2 + 1 = 0$ for $\lambda = \pm i$.
- $\lambda = i$: $A - iI_2 = \begin{pmatrix} -i & -1 \\ 1 & -i \end{pmatrix}$. The second equation is $x - iy = 0$, that is $x = iy$: eigenvector $(i, 1)$. Check: $A(i, 1) = (-1, i) = i\,(i, 1)$, because $i \cdot i = -1$.
- $\lambda = -i$: $x + iy = 0$, that is $x = -iy$: eigenvector $(-i, 1)$. Check: $A(-i, 1) = (-1, -i) = -i\,(-i, 1)$.

The two eigenvectors are independent ($\det\begin{pmatrix} i & -i \\ 1 & 1 \end{pmatrix} = i + i = 2i \neq 0$), so over $\C$ the matrix is diagonalisable with $D = \begin{pmatrix} i & 0 \\ 0 & -i \end{pmatrix}$. The same matrix is diagonalisable over $\C$ but not over $\R$ (Martelli, Example 5.1.31): in the exam papers with a parameter $k \in \C$ this matters.
:::

::: exercise basic Eigenvalues of a triangular matrix
Find the eigenvalues of $A = \begin{pmatrix} 2 & 5 & -1 \\ 0 & -1 & 7 \\ 0 & 0 & 3 \end{pmatrix}$ explaining why you do not need to expand the whole determinant. Then find an eigenvector for the eigenvalue $2$.
::: solution
$A - \lambda I_3 = \begin{pmatrix} 2 - \lambda & 5 & -1 \\ 0 & -1 - \lambda & 7 \\ 0 & 0 & 3 - \lambda \end{pmatrix}$ is still upper triangular, and the determinant of a triangular matrix is the product of the diagonal (lesson L09). So $p_A(\lambda) = (2 - \lambda)(-1 - \lambda)(3 - \lambda)$ and the eigenvalues are $2, -1, 3$: the entries of the diagonal.

Eigenvector for $2$: $A - 2I_3 = \begin{pmatrix} 0 & 5 & -1 \\ 0 & -3 & 7 \\ 0 & 0 & 1 \end{pmatrix}$. From the third row $z = 0$, then from the first $5y = 0$: $y = 0$; $x$ is free. Eigenvector $e_1 = (1, 0, 0)$. Check: $Ae_1$ is the first column, $(2, 0, 0) = 2e_1$.
:::

::: exercise hard Zero eigenvalue, powers and inverse
Let $A \in M(n, \K)$. (a) Prove that $0$ is an eigenvalue of $A$ if and only if $A$ is not invertible. (b) Prove that if $v$ is an eigenvector of $A$ with eigenvalue $\lambda$, then $v$ is an eigenvector of $A^2$ with eigenvalue $\lambda^2$. (c) If $A$ is invertible and $Av = \lambda v$ with $v \neq 0$, prove that $\lambda \neq 0$ and that $v$ is an eigenvector of $A^{-1}$ with eigenvalue $\frac 1\lambda$.
::: solution
(a) By Proposition 17.13, $0$ is an eigenvalue $\iff p_A(0) = 0 \iff \det(A - 0 \cdot I_n) = \det A = 0 \iff A$ is not invertible.

(b) $A^2v = A(Av) = A(\lambda v) = \lambda Av = \lambda \cdot \lambda v = \lambda^2 v$, and $v \neq 0$.

(c) If $\lambda = 0$, we would have $Av = 0$ with $v \neq 0$, that is $\Ker A \neq \{0\}$, impossible for an invertible matrix. Multiplying $Av = \lambda v$ on the left by $A^{-1}$: $v = \lambda A^{-1}v$, so $A^{-1}v = \frac 1\lambda v$.

Example: $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$ has eigenvalues $3, 2$; $A^2 = \begin{pmatrix} 9 & 20 \\ 0 & 4 \end{pmatrix}$ has eigenvalues $9, 4$, and $A^{-1} = \frac 16\begin{pmatrix} 2 & -4 \\ 0 & 3 \end{pmatrix}$ has eigenvalues $\frac 13, \frac 12$.
:::

::: exercise hard A matrix and its transpose
(a) Prove that $A$ and ${}^tA$ have the same characteristic polynomial. (b) Show with $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$ that they do not, however, have the same eigenvectors.
::: solution
(a) ${}^tA - \lambda I_n = {}^t(A - \lambda I_n)$, because $I_n$ is symmetric and the transpose of a sum is the sum of the transposes. A matrix and its transpose have the same determinant (lesson L09), so $p_{{}^tA}(\lambda) = \det\big({}^t(A - \lambda I_n)\big) = \det(A - \lambda I_n) = p_A(\lambda)$.

(b) ${}^tA = \begin{pmatrix} 3 & 0 \\ 4 & 2 \end{pmatrix}$ has the same eigenvalues $3$ and $2$. But ${}^tA\,e_1 = (3, 4)$, which is not a multiple of $e_1$: $e_1$ is an eigenvector of $A$ and not of ${}^tA$. The eigenvectors of ${}^tA$: for $\lambda = 3$, ${}^tA - 3I_2 = \begin{pmatrix} 0 & 0 \\ 4 & -1 \end{pmatrix}$ gives $y = 4x$, eigenvector $(1, 4)$; for $\lambda = 2$, ${}^tA - 2I_2 = \begin{pmatrix} 1 & 0 \\ 4 & 0 \end{pmatrix}$ gives $x = 0$, eigenvector $(0, 1)$.
:::

::: exercise exam As at the exam: eigenvalues, eigenvectors and diagonalisation in $\R^3$
Let $T : \R^3 \to \R^3$, $T(x, y, z) = (x + 2y,\ 2x + y,\ x + y + 2z)$.
(1) Write the matrix $A$ of $T$ in the standard basis and compute the characteristic polynomial.
(2) Find the eigenvalues and, for each one, an eigenvector.
(3) Show that the eigenvectors found form a basis of $\R^3$ and write $M$ and $D$ with $D = M^{-1}AM$.
::: solution
(1) $A = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 1 & 0 \\ 1 & 1 & 2 \end{pmatrix}$. The third column of $A - \lambda I_3$ is $(0, 0, 2 - \lambda)$: expanding along it,
$$p_A(\lambda) = (2 - \lambda)\det\begin{pmatrix} 1 - \lambda & 2 \\ 2 & 1 - \lambda \end{pmatrix} = (2 - \lambda)\big((1 - \lambda)^2 - 4\big) = (2 - \lambda)(\lambda - 3)(\lambda + 1),$$
because $(1 - \lambda)^2 - 4 = (1 - \lambda - 2)(1 - \lambda + 2) = (-1 - \lambda)(3 - \lambda)$.

(2) Eigenvalues $3, -1, 2$ (check: $3 - 1 + 2 = 4 = \tr A$).
- $\lambda = 3$: $A - 3I_3 = \begin{pmatrix} -2 & 2 & 0 \\ 2 & -2 & 0 \\ 1 & 1 & -1 \end{pmatrix}$: from the first row $y = x$, from the third $z = x + y = 2x$. Eigenvector $(1, 1, 2)$; check $A(1, 1, 2) = (3, 3, 6)$.
- $\lambda = -1$: $A + I_3 = \begin{pmatrix} 2 & 2 & 0 \\ 2 & 2 & 0 \\ 1 & 1 & 3 \end{pmatrix}$: $y = -x$, then $x + y + 3z = 0$ gives $z = 0$. Eigenvector $(1, -1, 0)$; check $A(1, -1, 0) = (-1, 1, 0)$.
- $\lambda = 2$: $A - 2I_3 = \begin{pmatrix} -1 & 2 & 0 \\ 2 & -1 & 0 \\ 1 & 1 & 0 \end{pmatrix}$: from the first two rows $x = 2y$ and $y = 2x$, so $x = y = 0$; $z$ is free. Eigenvector $e_3 = (0, 0, 1)$; check $Ae_3 = (0, 0, 2)$.

(3) $M = \begin{pmatrix} 1 & 1 & 0 \\ 1 & -1 & 0 \\ 2 & 0 & 1 \end{pmatrix}$, with $\det M = 1 \cdot (-1 - 0) - 1 \cdot (1 - 0) + 0 = -2 \neq 0$ (expansion along the first row): the columns are a basis. $D = \begin{pmatrix} 3 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$, in the same order. Check: $AM = \begin{pmatrix} 3 & -1 & 0 \\ 3 & 1 & 0 \\ 6 & 0 & 2 \end{pmatrix} = MD$.
:::

::: exercise exam As at the exam: $A = PDP^{-1}$ for a triangular matrix
Let $A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 3 & 1 \\ 0 & 0 & -1 \end{pmatrix}$.
(1) Find the eigenvalues of $A$.
(2) Find an eigenvector for each eigenvalue.
(3) Find an invertible matrix $P$ and a diagonal $D$ such that $A = PDP^{-1}$, and check the result without computing $P^{-1}$.
::: solution
(1) $A$ is triangular: eigenvalues $1, 3, -1$.

(2)
- $\lambda = 1$: $A - I_3 = \begin{pmatrix} 0 & 2 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & -2 \end{pmatrix}$: $z = 0$, then $y = 0$, $x$ free. Eigenvector $(1, 0, 0)$.
- $\lambda = 3$: $A - 3I_3 = \begin{pmatrix} -2 & 2 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & -4 \end{pmatrix}$: $z = 0$, $-2x + 2y = 0$ that is $y = x$. Eigenvector $(1, 1, 0)$.
- $\lambda = -1$: $A + I_3 = \begin{pmatrix} 2 & 2 & 0 \\ 0 & 4 & 1 \\ 0 & 0 & 0 \end{pmatrix}$: $z = -4y$ and $x = -y$. With $y = -1$: eigenvector $(1, -1, 4)$.

(3) $P = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & -1 \\ 0 & 0 & 4 \end{pmatrix}$ (eigenvectors in columns), $D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & -1 \end{pmatrix}$. $P$ is triangular with $\det P = 1 \cdot 1 \cdot 4 = 4 \neq 0$. $A = PDP^{-1}$ is equivalent to $AP = PD$: the columns of $AP$ are $A(1, 0, 0) = (1, 0, 0)$, $A(1, 1, 0) = (3, 3, 0)$, $A(1, -1, 4) = (1 - 2,\ -3 + 4,\ -4) = (-1, 1, -4)$, and the columns of $PD$ are $1 \cdot (1, 0, 0)$, $3 \cdot (1, 1, 0)$, $-1 \cdot (1, -1, 4)$: they coincide.
:::

## Review questions

::: question What is an eigenvector? And an eigenvalue?
An eigenvector of $T : V \to V$ is a vector $v \neq 0$ such that $T(v) = \lambda v$ for some $\lambda \in \K$; the scalar $\lambda$ is the eigenvalue relative to $v$.
:::

::: question Why can the zero vector not be an eigenvector, while $0$ can be an eigenvalue?
Because $T(0) = \lambda \cdot 0$ holds for every $\lambda$: every scalar would be an eigenvalue. The eigenvalue $0$ instead has a precise meaning: its eigenvectors are the non-zero vectors of the kernel.
:::

::: question What happens to the multiples of an eigenvector?
Every multiple $\mu v$ with $\mu \neq 0$ is an eigenvector with the same eigenvalue: $T(\mu v) = \mu T(v) = \lambda(\mu v)$. The whole line $\Span(v)$, without zero, is made of eigenvectors.
:::

::: question Why can eigenvectors be studied using only matrices?
Because, with $A = [T]^{\mathcal B}_{\mathcal B}$ and $x = [v]_{\mathcal B}$, $T(v) = \lambda v \iff Ax = \lambda x$ holds (the coordinates of $T(v)$ are $Ax$ and those of $\lambda v$ are $\lambda x$).
:::

::: question Why does a rotation by an angle $\vartheta \neq 0, \pi$ have no real eigenvectors?
Because every non-zero vector is rotated by $\vartheta$, and its multiples form with it an angle of $0$ or $\pi$. With calculations: $p(\lambda) = \lambda^2 - 2\cos\vartheta\,\lambda + 1$ has negative discriminant.
:::

::: question When is an endomorphism called diagonalisable? Where does the name come from?
When $V$ has a basis of eigenvectors. The name comes from Proposition 17.6: the matrix of $T$ in a basis is diagonal if and only if the basis is made of eigenvectors, and then the eigenvalues are on the diagonal.
:::

::: question When is a matrix diagonalisable, and who are $M$ and $D$?
When it is similar to a diagonal matrix: $D = M^{-1}AM$ with $M$ invertible. The columns of $M$ are independent eigenvectors, and $D$ has on the diagonal the corresponding eigenvalues, in the same order.
:::

::: question How do you compute $A^k$ if $A$ is diagonalisable?
$A = MDM^{-1}$, so $A^k = MD^kM^{-1}$ (the pairs $M^{-1}M$ in the middle cancel), and $D^k$ is obtained by raising the diagonal entries to the power $k$.
:::

::: question What is the characteristic polynomial and what degree does it have?
$p_A(\lambda) = \det(A - \lambda I_n)$: the determinant of the matrix with $\lambda$ taken away on the diagonal. It is a polynomial of degree $n$; for a $2 \times 2$ it is $\lambda^2 - \tr A\,\lambda + \det A$.
:::

::: question Why does the characteristic polynomial of an endomorphism not depend on the basis?
Because similar matrices have the same characteristic polynomial: $\det(M^{-1}BM - \lambda I) = \det\big(M^{-1}(B - \lambda I)M\big) = \det(B - \lambda I)$ by Binet's theorem.
:::

::: question Why are the eigenvalues the roots of the characteristic polynomial?
$\lambda$ is an eigenvalue $\iff$ there is $x \neq 0$ with $(A - \lambda I)x = 0$ $\iff$ $A - \lambda I$ is not invertible $\iff$ $\det(A - \lambda I) = 0$ (Proposition 17.13).
:::

::: question How do you find the eigenvectors once an eigenvalue $\lambda_0$ is known?
You solve the homogeneous system $(A - \lambda_0 I)x = 0$: the non-zero solutions are the eigenvectors. The system always has infinitely many solutions, because $A - \lambda_0 I$ is not invertible.
:::

## Glossary

```glossary
Endomorphism | Linear map $T : V \to V$, with start and target equal.
Eigenvector | Vector $v \neq 0$ with $T(v) = \lambda v$ for some scalar $\lambda$ (Definition 17.1).
Eigenvalue | The scalar $\lambda$ such that $T(v) = \lambda v$ for some eigenvector $v$; it can be $0$.
Invariant line | Line $\Span(v)$ sent by $T$ into itself; it happens exactly when $v$ is an eigenvector.
Fixed point | Vector with $T(v) = v$; the non-zero fixed points are the eigenvectors with eigenvalue 1.
Diagonalisable endomorphism | $V$ has a basis of eigenvectors of $T$ (Definition 17.5).
Diagonalisable matrix | Matrix similar to a diagonal one: $D = M^{-1}AM$ (Definition 17.7).
Diagonal matrix | Matrix with zeros off the main diagonal; products, determinant and powers are computed entry by entry.
$M$ and $D$ | In diagonalisation, $M$ has the eigenvectors in columns and $D$ the eigenvalues on the diagonal, in the same order; $AM = MD$.
Power of a diagonalisable matrix | $A^k = MD^kM^{-1}$.
Characteristic polynomial | $p_A(\lambda) = \det(A - \lambda I_n)$, polynomial of degree $n$ (Definition 17.12).
Invariance under similarity | Similar matrices have the same characteristic polynomial; that is why $p_T$ of an endomorphism is well defined.
$2 \times 2$ formula | $p_A(\lambda) = \lambda^2 - \tr A\,\lambda + \det A$.
Triangular matrix | Zeros below (or above) the diagonal; its eigenvalues are the diagonal entries.
Rotation $\mathrm{Rot}_\vartheta$ | $\begin{pmatrix} \cos\vartheta & -\sin\vartheta \\ \sin\vartheta & \cos\vartheta \end{pmatrix}$; for $\vartheta \neq 0, \pi$ it has no real eigenvalues.
Trace and eigenvalues | If $p_A$ has all its roots in $\K$: sum of the eigenvalues = $\tr A$, product = $\det A$.
```

## Checklist

```checklist
- I can say what an eigenvector and an eigenvalue are, and why $v \neq 0$ but $\lambda = 0$ is allowed.
- I can check in a moment whether a given vector is an eigenvector, by computing $Av$.
- I know that the non-zero multiples of an eigenvector are eigenvectors with the same eigenvalue, and that the sum of eigenvectors with different eigenvalues generally is not.
- I can explain why a rotation by an angle $\vartheta \neq 0, \pi$ has no real eigenvectors.
- I know the definition of endomorphism and of diagonalisable matrix and the link between a basis of eigenvectors and a diagonal matrix.
- I can build $M$ and $D$ from a basis of eigenvectors and check with $AM = MD$.
- I can compute $A^k$ with $A^k = MD^kM^{-1}$.
- I can compute the characteristic polynomial of a $2 \times 2$ (with trace and determinant) and of a $3 \times 3$ (expanding along the row or column with the most zeros).
- I know why the eigenvalues are the roots of $p_A$ and I find the eigenvectors by solving $(A - \lambda I)x = 0$.
- I can recognise at a glance the eigenvalues of a triangular matrix and I check the results with trace and determinant.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 17 "Autovalori e autovettori I", pp. 85–89: sections 17.A (definition and examples), 17.B (diagonalisable endomorphisms and matrices), 17.C (diagonal matrices) and 17.D (characteristic polynomial) are followed in order, with the page next to each heading; definitions, propositions and examples keep their numbering (Definitions 17.1, 17.5, 17.7, 17.12; Propositions 17.6, 17.8, 17.13; Examples 17.2–17.4, 17.9–17.11, 17.14). Lesson 17 of the handouts has no exercise section: the exercises here are all added.
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §5.1.1–5.1.8 (eigenvectors, diagonalisability, diagonal and diagonalisable matrices, characteristic polynomial, $2 \times 2$ examples over $\R$ and $\C$, triangular matrices) and Proposition 5.2.15 (trace, determinant and eigenvalues).
- **Exam**: exam sessions of 10/07/2024 (problem 11), 06/09/2024 (question 10), 07/02/2025 (question 8), 03/06/2025 (question 8), 02/09/2025 (question 4), 05/02/2026 (question 8), 03/06/2026 (question 6), 03/07/2026 (questions 2 and 3), 07/09/2026 (problem 11). Official papers and solutions on the 2025/26 Moodle ([id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); the solutions reported here are written from scratch.
- The **"Beyond the handouts"** parts (eigenvalues 0 and 1, the rotation matrix, the $2 \times 2$ formula, triangular matrices, the checks with trace and determinant, the rotation over $\C$, the added examples and exercises) serve to connect the lesson to the rest of the course and to the exam.
