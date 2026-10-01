---
course: MDAG
module: AG
lesson: L26
title: Spectral theorem II
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Part 2 (modB) · Linear Algebra and Geometry · Channels A, B and C · Lesson L26
description: >-
  Notes on lesson L26 of Linear Algebra and Geometry (MDAG, part 2): the spectral theorem for self-adjoint
  endomorphisms, its proof, the version with symmetric and orthogonal matrices, the link with PCA and all the
  exercises of the handouts worked out, with exam-style quizzes.
lede: >-
  When can you diagonalise with a basis that is also orthonormal? Exactly when the endomorphism is self-adjoint: it is
  the spectral theorem. For real matrices it means that $A$ is symmetric if and only if there is an orthogonal matrix
  $M$ with ${}^tM A M$ diagonal. Here you find the proof, the step-by-step method and the exercises of the handouts,
  including the one with complex numbers.
material: handouts
facts:
  Handouts: lesson 26 · pp. 134–138
  Book: Martelli, §11.3
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 110–140 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 26 "Teorema spettrale II"; B. Martelli, Geometria e algebra lineare, §11.3
italian_file: L26_teorema_spettrale_2.html
html_notes: notes/MDAG/L26_spectral_theorem_2.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L26_teorema_spettrale_2.md
---

## In brief

- A diagonalisable endomorphism has a basis of eigenvectors; the spectral theorem says **when that basis can be chosen orthonormal**.
- **Spectral theorem** (Theorem 26.1): $T$ is self-adjoint $\iff$ it has an **orthonormal basis of eigenvectors** and all its **eigenvalues are real**. It holds for real spaces with a positive definite scalar product and for complex spaces with a positive definite Hermitian product.
- An important consequence: **a real symmetric matrix has all its eigenvalues real** and is always diagonalisable.
- Version with matrices (Corollary 26.2): for a real $n \times n$ matrix $A$ the following are equivalent: **$A$ symmetric**, **$L_A$ has an orthonormal basis of eigenvectors**, **there is an orthogonal $M$ with ${}^tM A M = M^{-1} A M = D$ diagonal**.
- Eigenvectors of **different** eigenvalues of a symmetric matrix are **automatically orthogonal**; inside an eigenspace of dimension $\ge 2$ the orthogonal basis is built with **Gram–Schmidt**.
- Method: eigenvalues, bases of the eigenspaces, Gram–Schmidt inside each eigenspace, normalisation; the columns form $M$, and $M^{-1} = {}^tM$ without computing inverses.
- In the complex case (Hermitian matrices) you use the **Hermitian** product to normalise, and the matrix $W$ satisfies ${}^t\bar W W = I$.
- Application: **PCA** (principal component analysis) diagonalises a symmetric data matrix; the eigenvectors with the largest eigenvalues are the directions of greatest variability.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## The problem: eigenvectors that are also orthonormal (p. 134)

In lessons L17–L18 you saw that the simplest endomorphisms to study are the **diagonalisable** ones, that is those that have a basis of eigenvectors: in that basis the matrix is diagonal, $M^{-1} A M = D$, where the columns of $M$ are the eigenvectors.

But look at two diagonalisable matrices of $\R^2$.

- $S = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ has eigenvectors $(1, 1)$ (eigenvalue $3$) and $(1, -1)$ (eigenvalue $1$): they are **perpendicular**, $\langle (1, 1), (1, -1) \rangle = 0$.
- $B = \begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix}$ has eigenvectors $(1, 0)$ (eigenvalue $3$) and $(-1, 2)$ (eigenvalue $1$): they are **not** perpendicular, $\langle (1, 0), (-1, 2) \rangle = -1$.

```graph
title: The two lines of eigenvectors of $B = \begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix}$ are not perpendicular: they form an angle of about $63.4^\circ$
x: -2.5 2.5
y: -2.2 2.6
line: -2 0 2 0 | accent | thick | $V_3$ | ne
line: -1 2 1 -2 | violet | thick | $V_1$ | e
vector: 0 0 1 0 | accent | $(1, 0)$ | se
vector: 0 0 -1 2 | violet | $(-1, 2)$ | w
arc: 0 0 0.6 2.0344 pi | amber | $63.4^\circ$
```

With an orthonormal basis of eigenvectors you gain a lot: the matrix $M$ that has those vectors as columns is **orthogonal** (lesson L22), so $M^{-1} = {}^tM$ and no inverse needs to be computed; moreover the coordinates of a vector in that basis are found with scalar products (Fourier coefficients, lesson L21). The natural question is: **when** can we ask for the basis of eigenvectors to be orthonormal too? The handouts announce it straight away: **precisely for self-adjoint endomorphisms**.

## The spectral theorem (p. 134)

As in lesson L25, $V$ is a real vector space with a positive definite scalar product, or a complex one with a positive definite Hermitian product, of finite dimension $n$.

> [!THEOREM] 26.1 · Spectral theorem
> An endomorphism $T \colon V \to V$ is self-adjoint $\iff$ it has an orthonormal basis of eigenvectors and all its eigenvalues are in $\R$.

Piece by piece:

- **self-adjoint**: $\langle T(v), w \rangle = \langle v, T(w) \rangle$ for every $v, w$ (Definition 25.5); in an orthonormal basis it means a **Hermitian** matrix, or a **symmetric** one in the real case (Proposition 25.6);
- **orthonormal basis of eigenvectors**: vectors $v_1, \dots, v_n$ with $T(v_i) = \lambda_i v_i$, of norm $1$ and pairwise orthogonal;
- **eigenvalues in $\R$**: in the real case it is automatic (the eigenvalues of a real endomorphism are real numbers by definition); in the complex case it is an extra condition, and it is needed.

> [!EXAMPLE] Why the complex case needs "real eigenvalues"
> On $\C^2$ with the Euclidean Hermitian product, the endomorphism $T(x, y) = (ix, y)$ has matrix $\begin{pmatrix} i & 0 \\ 0 & 1 \end{pmatrix}$: the canonical basis is an **orthonormal basis of eigenvectors** (eigenvalues $i$ and $1$). And yet $T$ is **not** self-adjoint, because the matrix is not Hermitian (lesson L25). The theorem is not contradicted: the eigenvalue $i$ is not real.

The name "spectral" comes from *spectrum*, the set of the eigenvalues of an endomorphism. The theorem links two topics of the course: **diagonalisability** (lessons L17–L18) and positive definite **scalar or Hermitian products** (lessons L19–L21 and L25).

## The proof (pp. 134–135)

The handouts' proof has three parts: the easy direction ($\Leftarrow$), the complex case of the hard direction ($\Rightarrow$), and the real case.

**($\Leftarrow$) If there is an orthonormal basis of eigenvectors with real eigenvalues, $T$ is self-adjoint.**

1. Let $\mathcal B$ be the orthonormal basis of eigenvectors. The matrix $A = [T]^{\mathcal B}_{\mathcal B}$ is **diagonal**, with the eigenvalues on the diagonal.
2. The eigenvalues are real, so $A$ is diagonal with real numbers: ${}^tA = A = \bar A$, that is $A$ is Hermitian.
3. The basis is orthonormal, so by Proposition 25.6 the endomorphism $T$ is self-adjoint.

**($\Rightarrow$), complex case. First step: the eigenvalues of a self-adjoint endomorphism are real.** If $\lambda$ is an eigenvalue, there is an eigenvector $v \neq 0$ with $T(v) = \lambda v$, and

$$\lambda \langle v, v \rangle = \langle \lambda v, v \rangle = \langle T(v), v \rangle = \langle v, T(v) \rangle = \langle v, \lambda v \rangle = \bar\lambda \langle v, v \rangle.$$

The steps: the first uses linearity in the first slot; the second $T(v) = \lambda v$; the third that $T$ is self-adjoint; the fourth $T(v) = \lambda v$ again; the last property (5) of Hermitian products (the scalar comes out conjugated from the second slot). Since $\langle v, v \rangle > 0$ (the product is positive definite and $v \neq 0$), you can divide: $\lambda = \bar\lambda$, so **$\lambda \in \R$**.

**Second step: the orthonormal basis of eigenvectors, by induction on the dimension $n$.**

> [!PROOF] of Theorem 26.1, induction on the dimension
> 1. **Case $n = 1$.** In a space of dimension one every non-zero vector is an eigenvector (every endomorphism is multiplication by a number). A vector of norm $1$ forms on its own an orthonormal basis of eigenvectors.
> 2. **Inductive hypothesis.** Suppose the result true in dimension $n - 1$ and take $V$ of dimension $n$.
> 3. **There is an eigenvector.** We are over the complex numbers: the characteristic polynomial of $T$ has at least one root by the **fundamental theorem of algebra** (lesson L04), so $T$ has an eigenvalue and an eigenvector $v \in V$.
> 4. **An invariant subspace of dimension $n - 1$.** The line $\Span(v)$ is $T$-invariant (it is spanned by an eigenvector). By Proposition 25.10 $U = \Span(v)^\perp$ is $T$-invariant too: $T(U) \subseteq U$. Moreover $\dim U = n - 1$ (orthogonal decomposition, lesson L21).
> 5. **The restriction is self-adjoint.** $T|_U \colon U \to U$ is an endomorphism of $U$ (thanks to point 4) and it is self-adjoint, because the equality $\langle T(u), u' \rangle = \langle u, T(u') \rangle$ holds for all the vectors of $V$, so in particular for those of $U$.
> 6. **The inductive hypothesis applies.** $U$ has an orthonormal basis $v_2, \dots, v_n$ made of eigenvectors of $T|_U$, that is of $T$.
> 7. **We add $v$.** I renormalise $v$ so that it has norm $1$. It is orthogonal to all the $v_2, \dots, v_n$, which lie in $U = \Span(v)^\perp$. So $\mathcal B = \{v, v_2, \dots, v_n\}$ is an orthonormal basis of $V$ made of eigenvectors of $T$. $\square$

> [!IDEA] The proof in a picture
> You "peel off" one eigenvector at a time. Once $v$ is found, the space splits into $\Span(v)$ and its orthogonal $U$, and $T$ does not mix the two pieces (both invariant). Inside $U$ you start again: another eigenvector, another orthogonal piece, and so on until the dimensions run out. Each vector peeled off is orthogonal to all the following ones by construction.

**An important consequence.** The handouts stress it: **a real symmetric matrix $S$ always has all its eigenvalues real.** Indeed $S$ is real and symmetric, so Hermitian; then $L_S \colon \C^n \to \C^n$ is self-adjoint with respect to the Euclidean Hermitian product (Corollary 25.7), and by the complex case just proved it has all its eigenvalues real and an orthonormal basis of eigenvectors in $\C^n$.

> [!BEYOND] The $2 \times 2$ case by hand
> For a real $S = \begin{pmatrix} a & b \\ b & c \end{pmatrix}$, the characteristic polynomial is $\lambda^2 - (a + c)\lambda + (ac - b^2)$, with discriminant
> $$(a + c)^2 - 4(ac - b^2) = a^2 - 2ac + c^2 + 4b^2 = (a - c)^2 + 4b^2 \ge 0.$$
> So the roots are always real. And they are equal only if $a = c$ and $b = 0$, that is if $S$ is already a multiple of the identity.

**($\Rightarrow$), real case.** A delicate point remains: over the reals a polynomial may have no roots, so point 3 of the induction is not free. The handouts solve it like this.

1. I take an orthonormal basis $\mathcal B$ of $V$ and set $S = [T]^{\mathcal B}_{\mathcal B}$: it is a **real symmetric** matrix (Proposition 25.6).
2. Considered as a complex matrix, by the complex case just proved **all its eigenvalues are real**. So the characteristic polynomial of $S$ has a root $\lambda \in \R$.
3. Since $\det(S - \lambda I_n) = 0$ with $S - \lambda I_n$ real, there is a non-zero **real** vector $v$ with $S v = \lambda v$ (the real homogeneous system has non-zero solutions): a real eigenvector.
4. With this eigenvector you repeat the same induction as in the complex case. $\square$

## The spectral theorem with matrices (p. 135)

In the case of $\R^n$ with the Euclidean scalar product the theorem translates into a statement about matrices.

> [!COROLLARY] 26.2
> Let $A$ be a real $n \times n$ matrix. The following facts are equivalent:
> 1. $A$ is symmetric;
> 2. $L_A$ has an orthonormal basis of eigenvectors;
> 3. there is an orthogonal matrix $M$ such that
> $${}^tM A M = M^{-1} A M = D$$
> is a diagonal matrix.

Piece by piece:

- **orthogonal matrix** (Definition 22.10): ${}^tM M = I_n$, that is $M^{-1} = {}^tM$; equivalently, the **columns** of $M$ form an orthonormal basis of $\R^n$;
- in (3) the two expressions ${}^tM A M$ and $M^{-1} A M$ are the same matrix precisely because $M^{-1} = {}^tM$;
- $D$ has the eigenvalues on the diagonal, in the same order in which the columns of $M$ list the eigenvectors.

The handouts' explanation, one step at a time:

1. **(1) $\iff$ (2)** is the spectral theorem: $L_A$ is self-adjoint with respect to the Euclidean product if and only if $A$ is symmetric (Corollary 25.7), and the eigenvalues of a real symmetric matrix are real.
2. **(2) $\Rightarrow$ (3)**: an orthonormal basis of eigenvectors, put in columns, forms an **orthogonal** matrix $M$, and $M^{-1} A M$ is diagonal (it is the diagonalisation of lessons L17–L18).
3. **(3) $\Rightarrow$ (2)**: if $M^{-1} A M = D$ is diagonal, the columns of $M$ are eigenvectors; if moreover $M$ is orthogonal, they form an orthonormal basis.
4. In every case $M^{-1} = {}^tM$.

> [!PITFALL] Diagonalisable does not mean symmetric
> The matrix $B = \begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix}$ is **diagonalisable** (two distinct eigenvalues), but it is not symmetric: there is a basis of eigenvectors, but not an **orthonormal** basis of eigenvectors (Exercise 26.3). The spectral theorem characterises the **orthogonally** diagonalisable matrices, not all the diagonalisable ones.

### Two facts that make the computation quick

> [!BEYOND] Eigenvectors of different eigenvalues are orthogonal
> If $A$ is symmetric (or $T$ self-adjoint), $A v = \lambda v$, $A w = \mu w$ and $\lambda \neq \mu$, then $\langle v, w \rangle = 0$. Indeed, with $\mu$ real,
> $$\lambda \langle v, w \rangle = \langle A v, w \rangle = \langle v, A w \rangle = \mu \langle v, w \rangle,$$
> so $(\lambda - \mu)\langle v, w \rangle = 0$ and $\langle v, w \rangle = 0$. The handouts use this fact in Exercise 26.4 ("the eigenvector in $V_{\lambda_1}$ is always automatically orthogonal to all the vectors in $V_{\lambda_2}$").
>
> Practical consequence: **Gram–Schmidt is needed only inside each eigenspace** of dimension $\ge 2$. Between different eigenspaces orthogonality comes for free.

The second fact: since a symmetric matrix is diagonalisable, **for every eigenvalue the geometric multiplicity equals the algebraic one** (Theorem 18.10). There is no need to check it: the dimension of each eigenspace can already be read off the characteristic polynomial.

> [!METHOD] Finding an orthonormal basis of eigenvectors (and the matrix $M$)
> 1. **Check** that $A$ is symmetric (if it is not, by Corollary 26.2 an orthonormal basis of eigenvectors does not exist).
> 2. **Eigenvalues**: roots of $p_A(\lambda) = \det(A - \lambda I)$, with their multiplicities.
> 3. **Eigenspaces**: for each eigenvalue solve $(A - \lambda I)x = 0$ and find a basis.
> 4. **Orthogonalise inside each eigenspace** of dimension $\ge 2$ with Gram–Schmidt (or by choosing orthogonal vectors right away).
> 5. **Normalise** each vector by dividing it by its norm.
> 6. Put the vectors in columns: that is $M$, orthogonal. Then ${}^tM A M = D = \operatorname{diag}(\lambda_1, \dots, \lambda_n)$, with the eigenvalues in the order of the columns.
> 7. **Check**: the vectors found must have scalar product $0$ pairwise and norm $1$.

> [!EXAMPLE] A $2 \times 2$ matrix
> $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ is symmetric. $p_A(\lambda) = (2 - \lambda)^2 - 1 = \lambda^2 - 4\lambda + 3 = (\lambda - 3)(\lambda - 1)$.
> - $\lambda = 3$: $(A - 3I)x = 0$ gives $-x_1 + x_2 = 0$, eigenvector $(1, 1)$;
> - $\lambda = 1$: $(A - I)x = 0$ gives $x_1 + x_2 = 0$, eigenvector $(1, -1)$.
>
> They are already orthogonal (different eigenvalues). I normalise: $\frac{1}{\sqrt 2}(1, 1)$ and $\frac{1}{\sqrt 2}(1, -1)$. Then
> $$M = \frac{1}{\sqrt 2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}, \qquad {}^tM A M = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}.$$
> Check of one product: $A\,(1, 1) = (3, 3) = 3\,(1, 1)$ and $A\,(1, -1) = (1, -1)$.

> [!EXAMPLE] A $3 \times 3$ matrix with a double eigenvalue
> $A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$ is symmetric.
>
> **Eigenvalues.** With Sarrus, and calling $t = 2 - \lambda$:
> $$\det(A - \lambda I) = t^3 + 1 + 1 - t - t - t = t^3 - 3t + 2 = (t - 1)^2 (t + 2).$$
> Since $t - 1 = 1 - \lambda$ and $t + 2 = 4 - \lambda$, the eigenvalues are $\lambda = 1$ (double) and $\lambda = 4$ (simple).
>
> **Eigenspaces.** For $\lambda = 4$: $(A - 4I)x = 0$ has solutions $\Span((1, 1, 1))$ (every row of $A$ adds up to $4$). For $\lambda = 1$: $A - I$ has all its rows equal to $(1, 1, 1)$, so $V_1 = \{x_1 + x_2 + x_3 = 0\}$, of dimension $2$, with basis $(1, -1, 0)$ and $(1, 0, -1)$.
>
> **Gram–Schmidt inside $V_1$.** $w_1 = (1, -1, 0)$ and
> $$\begin{aligned} w_2 &= (1, 0, -1) - \frac{\langle (1, 0, -1), (1, -1, 0) \rangle}{\langle (1, -1, 0), (1, -1, 0) \rangle}(1, -1, 0) \\ &= (1, 0, -1) - \tfrac 12 (1, -1, 0) = \left(\tfrac 12, \tfrac 12, -1\right), \end{aligned}$$
> which I multiply by $2$: $(1, 1, -2)$. Check: $\langle (1, -1, 0), (1, 1, -2) \rangle = 0$, and $(1, 1, -2)$ satisfies $x_1 + x_2 + x_3 = 0$.
>
> **Normalisation and matrix.** The orthonormal basis of eigenvectors is
> $$\tfrac{1}{\sqrt 3}(1, 1, 1), \qquad \tfrac{1}{\sqrt 2}(1, -1, 0), \qquad \tfrac{1}{\sqrt 6}(1, 1, -2),$$
> and with these columns $M$ is orthogonal and ${}^tM A M = \operatorname{diag}(4, 1, 1)$. The vector $(1, 1, 1)$ is orthogonal to the other two without any need for Gram–Schmidt: different eigenvalues.

With the calculator below you can check eigenvalues and eigenspaces (the tool also writes the multiplicities), and with the second one redo Gram–Schmidt inside the eigenspace $V_1$.

```widget gauss
title: Eigenvalues and eigenspaces of the symmetric matrix of the example
matrice: 2 1 1; 1 2 1; 1 1 2
modo: autovalori
```

```widget gauss
title: Gram–Schmidt inside the eigenspace $V_1 = \{x_1 + x_2 + x_3 = 0\}$
matrice: 1 -1 0; 1 0 -1
modo: gram-schmidt
```

### The complex case

For a **Hermitian** matrix $H$ the procedure is the same, with two differences: products and norms are computed with the **Hermitian product** $\langle x, y \rangle = {}^t x\, \bar y$, and the matrix $W$ with the eigenvectors as columns is not orthogonal but satisfies ${}^t\bar W W = I$, that is $W^{-1} = {}^t\bar W$ (the conjugate transpose). Exercise 26.5 of the handouts shows it in full.

> [!PITFALL] Normalising a complex vector
> The norm of $(1, i, i)$ is $\sqrt{\lvert 1 \rvert^2 + \lvert i \rvert^2 + \lvert i \rvert^2} = \sqrt 3$, not $\sqrt{1 + i^2 + i^2} = \sqrt{-1}$. In complex vectors you add up the **squared moduli**.

## Link with computer science: PCA (pp. 135–136)

> [!NOTE] PCA and dimensionality reduction
> The handouts close the theoretical part with an application to data analysis: **Principal Component Analysis** (PCA). You have **centred** data $x_1, \dots, x_N \in \R^n$ (that is with mean zero) and you consider the matrix
> $$S = \frac 1N \sum_{i=1}^N x_i\, {}^t x_i.$$
> $S$ is **symmetric**, so by the spectral theorem it has an orthonormal basis of eigenvectors. The eigenvectors with the largest eigenvalues indicate the **directions** along which the data vary most. Projecting the data onto the subspace spanned by a few of these directions you get a lower-dimensional representation, which keeps an important part of the information. It is the mathematical principle of PCA.

Piece by piece: each $x_i\, {}^t x_i$ is an $n \times n$ matrix (column times row), and it is symmetric because ${}^t(x_i\, {}^t x_i) = x_i\, {}^t x_i$; the mean of symmetric matrices is symmetric.

> [!BEYOND] An example with four points
> Take in $\R^2$ the points $(2, 2)$, $(-2, -2)$, $(1, -1)$, $(-1, 1)$: their mean is $(0, 0)$, so they are centred.
> - $(2, 2)\,{}^t(2, 2) = \begin{pmatrix} 4 & 4 \\ 4 & 4 \end{pmatrix}$, and the same for $(-2, -2)$;
> - $(1, -1)\,{}^t(1, -1) = \begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix}$, and the same for $(-1, 1)$.
>
> So $S = \frac 14 \begin{pmatrix} 10 & 6 \\ 6 & 10 \end{pmatrix} = \begin{pmatrix} 5/2 & 3/2 \\ 3/2 & 5/2 \end{pmatrix}$, with eigenvalues $\frac 52 \pm \frac 32$, that is $4$ (eigenvector $(1, 1)$) and $1$ (eigenvector $(1, -1)$). The **first principal component** is the direction $u_1 = \frac{1}{\sqrt 2}(1, 1)$. The coordinates of the points along $u_1$ are $\langle x_i, u_1 \rangle = 2\sqrt 2,\ -2\sqrt 2,\ 0,\ 0$, and the mean of their squares is $\frac{8 + 8 + 0 + 0}{4} = 4$: exactly the eigenvalue. Along $u_2 = \frac{1}{\sqrt 2}(1, -1)$ the mean of the squares is $1$. Keeping only the coordinate along $u_1$ reduces the data to one dimension, losing the smaller part of the variability.

```graph
title: The four points and the two principal directions: along $u_1$ the data vary more (eigenvalue 4) than along $u_2$ (eigenvalue 1)
x: -3 3
y: -3 3
line: -2 -2 2 2 | accent | dashed | thin
line: -2 2 2 -2 | violet | dashed | thin
point: 2 2 | amber | $(2, 2)$ | se
point: -2 -2 | amber | $(-2, -2)$ | nw
point: 1 -1 | amber | $(1, -1)$ | se
point: -1 1 | amber | $(-1, 1)$ | nw
vector: 0 0 1.4 1.4 | accent | thick | $u_1$ | nw
vector: 0 0 0.7 -0.7 | violet | thick | $u_2$ | se
```

> [!BEYOND] Where to find it in the book
> In Martelli's book the spectral theorem is §11.3 (pp. 352–355): Theorem 11.3.1 = 26.1, Corollary 11.3.2 = 26.2. Right after (Example 11.3.3) the book observes that orthogonal projections and reflections are self-adjoint and so represented by symmetric matrices, and uses the theorem to compute the signature of a symmetric matrix by counting the positive, negative and zero eigenvalues (Proposition 11.3.4, with Descartes' rule). Exercises 11.1 and 11.2 at the end of the chapter (p. 355) are similar to 26.3 and to our exercise on the matrix $\begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$.

## Towards the exam

The written test of Linear Algebra and Geometry has **10 quiz questions** with 5 answers (only one right) and **2 problems worth 11 points**, marked only with **at least 6 correct quiz answers**; it lasts **2 hours**, **with no calculator**, and you may bring only a sheet of **4 handwritten pages**. The 2026/27 exam sessions are on **22/01/2027** and **05/02/2027** at 14:00. All the details are in lesson L01.

**What of this lesson appears in the 2023–2026 exam sessions.**

- **Open problems with a matrix with a parameter**: you compute ${}^tA - A$ to find for which $k$ the matrix is symmetric, and you conclude with the spectral theorem. Exam of 24/01/2024 (problem 11, part 3: with $k = -1$ the matrix is symmetric, so diagonalisable) and of 15/01/2026 (problem 11, parts 2 and 3: for which $k$ there are real eigenvalues and an orthonormal basis of eigenvectors, and then compute it).
- **Orthonormal basis of an eigenspace**: exam of 02/09/2025 (problem 11, part 3).
- **Theory quiz questions**: exam of 16/01/2025 (question 7).

Three real texts, solved.

*Exam of 16/01/2025, question 7.* Let $A \in M(4, \R)$ be a symmetric matrix with exactly 2 distinct real eigenvalues. Which of the following statements is true? (a) At least one eigenvalue of $A$ must have multiplicity greater than 1. (b) $A$ must be orthogonal. (c) The eigenvectors of $A$ are orthonormal. (d) $A$ has at least one complex eigenvalue. (e) $A$ cannot be diagonalisable.

Working: by the spectral theorem $A$ is diagonalisable with real eigenvalues, so the algebraic multiplicities of the two eigenvalues add up to $4$: at least one is $\ge 2$. **Answer (a).** (b) is false ($\operatorname{diag}(2, 2, 3, 3)$ is symmetric but not orthogonal); (c) confuses "there is an orthonormal basis of eigenvectors" with "all the eigenvectors are orthonormal" (twice an eigenvector does not have norm 1); (d) and (e) contradict the spectral theorem.

*Exam of 02/09/2025, problem 11, part 3.* Given $A = \begin{pmatrix} -6 & 3 & 3 \\ 3 & -6 & 3 \\ 3 & 3 & -6 \end{pmatrix}$, compute an orthonormal basis of the eigenspace of $A$ with eigenvalue $-9$.

Working: $A + 9I$ has all its rows equal to $(3, 3, 3)$, so $V_{-9} = \{x_1 + x_2 + x_3 = 0\}$, with basis $(1, -1, 0)$, $(1, 0, -1)$. It is the same plane as in the $3 \times 3$ example of the previous section: Gram–Schmidt gives $(1, -1, 0)$ and $(1, 1, -2)$, and normalising, the orthonormal basis is $\frac{1}{\sqrt 2}(1, -1, 0)$, $\frac{1}{\sqrt 6}(1, 1, -2)$.

The third, the exam of 15/01/2026 (problem 11), is worked out in full in the exercises.

> [!METHOD] The reasoning with ${}^tA - A$
> 1. Compute ${}^tA - A$: it is the zero matrix exactly when $A$ is symmetric.
> 2. For the values of the parameter at which $A$ is symmetric: real eigenvalues, diagonalisable, orthonormal basis of eigenvectors (Corollary 26.2).
> 3. For the other values: **no orthonormal basis of eigenvectors** (again by Corollary 26.2), even though the matrix may be diagonalisable; for diagonalisability you need the methods of lessons L17–L18.

**Mistakes to avoid.**

- Forgetting to **normalise**: an orthogonal basis of eigenvectors is not yet orthonormal.
- Doing Gram–Schmidt **between different eigenspaces** (useless) and **not** doing it inside an eigenspace of dimension $2$ (necessary, if the basis found with Gauss is not orthogonal).
- Writing $M^{-1}$ by computing it by hand when $M$ is orthogonal: transposing is enough.
- Deducing "not symmetric, so not diagonalisable": it is false (see $B = \begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix}$).
- In complex vectors, normalising with $\sqrt{\sum x_k^2}$ instead of with $\sqrt{\sum \lvert x_k \rvert^2}$.

> [!EXAM] The 4-page sheet
> From this lesson: the statement of the spectral theorem and of Corollary 26.2; "real symmetric $\Rightarrow$ real eigenvalues"; "different eigenvalues $\Rightarrow$ orthogonal eigenvectors"; the recipe in seven steps; in the complex case $W^{-1} = {}^t\bar W$.

## Quiz

```quiz
Q: With the Euclidean scalar product of $\R^2$, which of these matrices **certainly** has an orthonormal basis of eigenvectors?
+ $\begin{pmatrix} 1 & 3 \\ 3 & -2 \end{pmatrix}$
- $\begin{pmatrix} 1 & 3 \\ -3 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 \\ 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$
= By Corollary 26.2 the real matrices with an orthonormal basis of eigenvectors are exactly the symmetric ones: only the first. The second has non-real eigenvalues ($1 \pm 3i$), the third is not diagonalisable, the fourth is diagonalisable but with eigenvectors $(1, 0)$ and $(1, 1)$ that are not orthogonal, the fifth is not symmetric. Similar to the exam of 15/01/2026 (problem 11, part 2).

Q: Let $A \in M(3, \R)$ be symmetric with exactly two distinct eigenvalues. Which statement is true?
+ One of the two eigenspaces has dimension 2.
- $A$ is orthogonal.
- $A$ is not diagonalisable.
- $A$ has a non-real eigenvalue.
- Every basis of eigenvectors of $A$ is orthonormal.
= $A$ is diagonalisable (spectral theorem), so the dimensions of the two eigenspaces add up to 3: one is 2 and the other 1. The other statements are false: for example $\operatorname{diag}(1, 1, 2)$ is not orthogonal, and $\{e_1, 2e_2, e_3\}$ is a basis of eigenvectors that is not orthonormal. Similar to the exam of 16/01/2025 (question 7).

Q: The eigenvalues of a real symmetric matrix are:
+ always real
- always positive
- always distinct
- sometimes non-real complex numbers
- always integers
= It is the consequence of the spectral theorem highlighted in the handouts. They are not always positive ($\operatorname{diag}(1, -1)$), nor distinct ($I_2$), nor integers (Exercise 26.3 has $2 \pm \sqrt 2$).

Q: A real symmetric $2 \times 2$ matrix has eigenvalues $1$ and $3$, and $(1, 2)$ is an eigenvector with eigenvalue $1$. Which of these vectors is an eigenvector with eigenvalue $3$?
+ $(-2, 1)$
- $(2, 1)$
- $(1, 2)$
- $(1, -2)$
- $(3, 6)$
= Eigenvectors of different eigenvalues of a symmetric matrix are orthogonal, and in $\R^2$ the vectors orthogonal to $(1, 2)$ form the line $\Span((-2, 1))$. $(1, 2)$ and $(3, 6)$ belong to the eigenvalue $1$; $(2, 1)$ and $(1, -2)$ are not orthogonal to $(1, 2)$.

Q: If $M \in M(n, \R)$ is orthogonal, what is $M^{-1}$?
+ ${}^tM$
- $M$
- $-M$
- $\frac{1}{\det M}\, M$
- $M^2$
= Orthogonal means ${}^tM M = I_n$, that is ${}^tM$ is the inverse. This is why in Corollary 26.2 ${}^tM A M = M^{-1} A M$. $M^{-1} = M$ holds only for the orthogonal matrices that are also symmetric, like reflections.

Q: Which matrix $M$ is orthogonal and makes ${}^tM A M$ diagonal for $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$?
+ $\frac{1}{\sqrt 2}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$
- $\frac 12\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$
- $\frac{1}{\sqrt 2}\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$
- $\frac{1}{\sqrt 5}\begin{pmatrix} 1 & 2 \\ 2 & -1 \end{pmatrix}$
= The columns must be eigenvectors of norm 1 and orthogonal: $\frac{1}{\sqrt 2}(1, 1)$ and $\frac{1}{\sqrt 2}(1, -1)$. Without the factor, or with $\frac 12$, the columns do not have norm 1 (the matrix is not orthogonal); with equal columns $M$ is not invertible; the last one is orthogonal but its columns are not eigenvectors, and ${}^tM A M = \begin{pmatrix} 14/5 & 3/5 \\ 3/5 & 6/5 \end{pmatrix}$ is not diagonal. Similar to the exams of 15/01/2026 and 02/09/2025 (problem 11).

Q: The vector $(1, 1, 0)$ is an eigenvector of the symmetric matrix $A = \begin{pmatrix} 1 & 2 & 0 \\ 2 & 1 & 0 \\ 0 & 0 & 5 \end{pmatrix}$. What is its eigenvalue?
N: 3
= $A\,(1, 1, 0) = (1 + 2,\ 2 + 1,\ 0) = (3, 3, 0) = 3\,(1, 1, 0)$.

Q: What are the eigenvalues of the Hermitian matrix $H = \begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$?
+ $0$ and $2$
- $i$ and $-i$
- $1 + i$ and $1 - i$
- $1$ (double)
- $0$ and $-2$
= $p_H(\lambda) = (1 - \lambda)^2 - i \cdot (-i) = (1 - \lambda)^2 - 1 = \lambda(\lambda - 2)$. The eigenvalues of a Hermitian matrix are real (spectral theorem): the answers with $i$ are excluded from the start.

Q: An endomorphism $T$ of $\C^n$ has an orthonormal basis of eigenvectors with respect to the Euclidean Hermitian product. Which statement is true?
+ $T$ is self-adjoint if and only if all its eigenvalues are real.
- $T$ is always self-adjoint.
- $T$ is never self-adjoint.
- The eigenvalues of $T$ are always real.
- The matrix of $T$ in the canonical basis is diagonal.
= With the orthonormal basis of eigenvectors already guaranteed, Theorem 26.1 says that $T$ is self-adjoint exactly when the eigenvalues are real. $T(x, y) = (ix, y)$ has the canonical basis as an orthonormal basis of eigenvectors but it is not self-adjoint (eigenvalue $i$).

Q: For which $k \in \R$ does the matrix $A_k = \begin{pmatrix} 1 & k \\ k^2 & 2 \end{pmatrix}$ have an orthonormal basis of eigenvectors (Euclidean product)?
+ For $k = 0$ and $k = 1$.
- Only for $k = 1$.
- For every $k$.
- For no $k$.
- For $k = -1$ and $k = 1$.
= ${}^tA_k - A_k = \begin{pmatrix} 0 & k^2 - k \\ k - k^2 & 0 \end{pmatrix}$ is zero if and only if $k^2 = k$, that is $k = 0$ or $k = 1$. By Corollary 26.2 these are exactly the values with an orthonormal basis of eigenvectors. For $k = -1$ the matrix is $\begin{pmatrix} 1 & -1 \\ 1 & 2 \end{pmatrix}$, not symmetric. Similar to the exams of 24/01/2024 and 15/01/2026 (problem 11).
```

## Exercises

::: exercise basic Exercise 26.3 of the handouts: symmetric yes, symmetric no
Check that the matrix $A$ has an orthonormal basis of eigenvectors while the matrix $B$ does not:
$$A = \begin{pmatrix} 3 & 1 \\ 1 & 1 \end{pmatrix}, \qquad B = \begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix}.$$
::: solution
Corollary 26.2 answers at once: $A$ is symmetric and $B$ is not. The handouts, however, ask you to check it **without** using the spectral theorem.

**The matrix $A$.** $p_A(\lambda) = (3 - \lambda)(1 - \lambda) - 1 = \lambda^2 - 4\lambda + 2$, with roots $\lambda_{1,2} = \frac{4 \pm \sqrt{16 - 8}}{2} = 2 \pm \sqrt 2$. To find the eigenvectors I use the first row of $A - \lambda I$: $(3 - \lambda)x + y = 0$, that is $y = (\lambda - 3)x$.
- $\lambda_1 = 2 + \sqrt 2$: $y = (\sqrt 2 - 1)x$. With $x = 1 + \sqrt 2$ you get $y = (\sqrt 2 - 1)(\sqrt 2 + 1) = 2 - 1 = 1$, so $v_1 = (1 + \sqrt 2, 1)$.
- $\lambda_2 = 2 - \sqrt 2$: $y = (-1 - \sqrt 2)x$. With $x = 1 - \sqrt 2$ you get $y = -(1 + \sqrt 2)(1 - \sqrt 2) = -(1 - 2) = 1$, so $v_2 = (1 - \sqrt 2, 1)$.

$\langle v_1, v_2 \rangle = (1 + \sqrt 2)(1 - \sqrt 2) + 1 = (1 - 2) + 1 = 0$: they are orthogonal. Normalising ($\lVert v_1 \rVert^2 = 4 + 2\sqrt 2$, $\lVert v_2 \rVert^2 = 4 - 2\sqrt 2$) you get an orthonormal basis of eigenvectors.

**The matrix $B$.** It is triangular: eigenvalues $\lambda_1 = 3$ and $\lambda_2 = 1$. For $\lambda_1 = 3$: $(B - 3I)x = 0$ gives $y = 0$, eigenvector $v_1 = (1, 0)$. For $\lambda_2 = 1$: $(B - I)x = 0$ gives $2x + y = 0$, eigenvector $v_2 = (-1, 2)$. Now $\langle v_1, v_2 \rangle = -1 \neq 0$.

Why no choice works: every eigenvector of $\lambda_1$ is a multiple of $v_1$ and every eigenvector of $\lambda_2$ is a multiple of $v_2$. Multiplying by numbers does not change the line, so every pair of eigenvectors forms the same angle $\vartheta$ or $\pi - \vartheta$, with $\cos\vartheta = \frac{-1}{1 \cdot \sqrt 5}$: it is not a right angle. It is impossible to choose orthonormal eigenvectors.
:::

::: exercise intermediate Exercise 26.4 of the handouts: an orthonormal basis of eigenvectors
Find an orthonormal basis of eigenvectors for the matrix
$$A = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 2 & 0 \\ 1 & 0 & 1 \end{pmatrix}.$$
::: solution
$A$ is symmetric, so the basis exists.

**Characteristic polynomial**, expanding along the second row (which has only one non-zero entry):
$$\begin{aligned} p_A(\lambda) &= \det\begin{pmatrix} 1 - \lambda & 0 & 1 \\ 0 & 2 - \lambda & 0 \\ 1 & 0 & 1 - \lambda \end{pmatrix} = (2 - \lambda)\det\begin{pmatrix} 1 - \lambda & 1 \\ 1 & 1 - \lambda \end{pmatrix} \\ &= (2 - \lambda)\big[(1 - \lambda)^2 - 1\big]. \end{aligned}$$
Since $(1 - \lambda)^2 - 1 = \lambda^2 - 2\lambda = \lambda(\lambda - 2)$, you get $p_A(\lambda) = -\lambda(2 - \lambda)^2$. Eigenvalues: $\lambda_1 = 0$ with algebraic multiplicity $1$, $\lambda_2 = 2$ with algebraic multiplicity $2$; since $A$ is diagonalisable, the geometric multiplicities are the same.

**Eigenspaces.**
- $\lambda_1 = 0$: $Ax = 0$ gives $x_1 + x_3 = 0$ and $x_2 = 0$, so $V_0 = \Span((1, 0, -1))$.
- $\lambda_2 = 2$: $(2I - A)x = 0$ with $2I - A = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 0 & 0 \\ -1 & 0 & 1 \end{pmatrix}$ gives only $x_1 = x_3$, with $x_2$ free: $V_2 = \Span((1, 0, 1), (0, 1, 0))$.

**Orthogonality.** The two vectors chosen in $V_2$ are already orthogonal: $\langle (1, 0, 1), (0, 1, 0) \rangle = 0$ (the handouts warn: they must be chosen like this, otherwise Gram–Schmidt is needed). The vector of $V_0$ is automatically orthogonal to the whole of $V_2$ (different eigenvalues): $\langle (1, 0, -1), (1, 0, 1) \rangle = 0$ and $\langle (1, 0, -1), (0, 1, 0) \rangle = 0$.

**Normalisation.** $v_1 = (1, 0, -1)$ and $v_2 = (1, 0, 1)$ have norm $\sqrt 2$, $v_3 = (0, 1, 0)$ already has norm $1$:
$$w_1 = \tfrac{1}{\sqrt 2}(1, 0, -1) = \left(\tfrac{\sqrt 2}{2}, 0, -\tfrac{\sqrt 2}{2}\right), \qquad w_2 = \tfrac{1}{\sqrt 2}(1, 0, 1) = \left(\tfrac{\sqrt 2}{2}, 0, \tfrac{\sqrt 2}{2}\right),$$
$$w_3 = v_3 = (0, 1, 0).$$
$\{w_1, w_2, w_3\}$ is an orthonormal basis of eigenvectors. With $M = (w_1 \mid w_2 \mid w_3)$ we have ${}^tM A M = \operatorname{diag}(0, 2, 2)$.
:::

::: exercise hard Exercise 26.5 of the handouts: a Hermitian matrix
Compute the diagonalisation of the following matrix:
$$A = \begin{pmatrix} 2 & i & i \\ -i & 1 & 0 \\ -i & 0 & 1 \end{pmatrix}.$$
::: solution
$A$ is Hermitian (real diagonal, $\overline{-i} = i$), so there is an orthonormal basis of eigenvectors (with respect to the Euclidean Hermitian product) and the eigenvalues are real.

**Characteristic polynomial**, expanding along the first row:
$$\det(A - \lambda I) = (2 - \lambda)(1 - \lambda)^2 - i\,\big[(-i)(1 - \lambda) - 0\big] + i\,\big[0 - (1 - \lambda)(-i)\big].$$
The second term is $-i \cdot (-i)(1 - \lambda) = i^2 (1 - \lambda) = -(1 - \lambda)$; the third is $i \cdot i(1 - \lambda) = -(1 - \lambda)$. So
$$\begin{aligned} \det(A - \lambda I) &= (1 - \lambda)\big[(2 - \lambda)(1 - \lambda) - 2\big] \\ &= (1 - \lambda)(\lambda^2 - 3\lambda) = (1 - \lambda)\lambda(\lambda - 3). \end{aligned}$$
Eigenvalues $\lambda_1 = 0$, $\lambda_2 = 1$, $\lambda_3 = 3$, each with algebraic multiplicity $1$: all real, as predicted.

**Eigenvectors.**
- $\lambda_1 = 0$: from the second row $-ix + y = 0$, that is $y = ix$; from the third $z = ix$. The first works out: $2x + i(ix) + i(ix) = 2x - x - x = 0$. With $x = 1$: $v_1 = (1, i, i)$.
- $\lambda_2 = 1$: $A - I = \begin{pmatrix} 1 & i & i \\ -i & 0 & 0 \\ -i & 0 & 0 \end{pmatrix}$; the second row gives $x = 0$ and the first $iy + iz = 0$, that is $z = -y$: $v_2 = (0, 1, -1)$.
- $\lambda_3 = 3$: $A - 3I = \begin{pmatrix} -1 & i & i \\ -i & -2 & 0 \\ -i & 0 & -2 \end{pmatrix}$; from the second row $y = -\frac{i}{2}x$, from the third $z = -\frac{i}{2}x$. With $x = 2i$: $y = -\frac i2 \cdot 2i = 1$ and $z = 1$, so $v_3 = (2i, 1, 1)$. Check on the first row: $-2i + i + i = 0$.

**Orthogonality** with the Hermitian product $\langle x, y \rangle = \sum x_k \bar y_k$: $\langle v_1, v_2 \rangle = 0 + i - i = 0$; $\langle v_1, v_3 \rangle = 1 \cdot \overline{2i} + i + i = -2i + 2i = 0$; $\langle v_2, v_3 \rangle = 0 + 1 - 1 = 0$. They are already orthogonal (distinct eigenvalues): it is enough to normalise them.

**Normalisation**, with the squared moduli: $\lVert v_1 \rVert^2 = 1 + 1 + 1 = 3$, $\lVert v_2 \rVert^2 = 2$, $\lVert v_3 \rVert^2 = 4 + 1 + 1 = 6$. The normalised columns form
$$W = \begin{pmatrix} \frac{\sqrt 3}{3} & 0 & \frac{i\sqrt 6}{3} \\ \frac{\sqrt 3\, i}{3} & \frac{\sqrt 2}{2} & \frac{\sqrt 6}{6} \\ \frac{\sqrt 3\, i}{3} & -\frac{\sqrt 2}{2} & \frac{\sqrt 6}{6} \end{pmatrix}$$
(for example $\frac{2i}{\sqrt 6} = \frac{2i\sqrt 6}{6} = \frac{i\sqrt 6}{3}$), and
$$\Lambda = W^{-1} A W = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 3 \end{pmatrix}.$$

**The inverse without computations.** The handouts note that ${}^t\bar W \cdot W = I_3$, so $W^{-1} = {}^t\bar W$: the entry $(j, k)$ of ${}^t\bar W W$ is $\sum_l \overline{W_{lj}} W_{lk} = \langle w_k, w_j \rangle$, which equals $1$ if $j = k$ and $0$ otherwise because the columns are orthonormal. Careful: without conjugation it does not work, for example the entry $(1, 1)$ of ${}^tW W$ is $\frac 13 + \left(\frac{\sqrt 3 i}{3}\right)^2 + \left(\frac{\sqrt 3 i}{3}\right)^2 = \frac 13 - \frac 13 - \frac 13 = -\frac 13 \neq 1$.
:::

::: exercise basic An orthogonal diagonalisation $2 \times 2$
Find an orthogonal matrix $M$ such that ${}^tM A M$ is diagonal, for $A = \begin{pmatrix} 5 & 2 \\ 2 & 2 \end{pmatrix}$.
::: solution
$p_A(\lambda) = (5 - \lambda)(2 - \lambda) - 4 = \lambda^2 - 7\lambda + 6 = (\lambda - 6)(\lambda - 1)$.
- $\lambda = 6$: $(A - 6I)x = 0$ gives $-x_1 + 2x_2 = 0$, eigenvector $(2, 1)$.
- $\lambda = 1$: $(A - I)x = 0$ gives $4x_1 + 2x_2 = 0$, eigenvector $(1, -2)$.

Orthogonal: $2 - 2 = 0$. Norms $\sqrt 5$. So
$$M = \frac{1}{\sqrt 5}\begin{pmatrix} 2 & 1 \\ 1 & -2 \end{pmatrix}, \qquad {}^tM A M = \begin{pmatrix} 6 & 0 \\ 0 & 1 \end{pmatrix}.$$
Check: $A\,(2, 1) = (12, 6) = 6\,(2, 1)$ and $A\,(1, -2) = (1, -2)$.
:::

::: exercise intermediate A double eigenvalue with Gram–Schmidt
Find an orthonormal basis of eigenvectors for $A = \begin{pmatrix} 2 & 2 & 2 \\ 2 & 5 & 4 \\ 2 & 4 & 5 \end{pmatrix}$.
::: solution
**Characteristic polynomial**, expanding along the first row:
$$\det(A - \lambda I) = (2 - \lambda)\big[(5 - \lambda)^2 - 16\big] - 2\big[2(5 - \lambda) - 8\big] + 2\big[8 - 2(5 - \lambda)\big].$$
$(5 - \lambda)^2 - 16 = \lambda^2 - 10\lambda + 9 = (\lambda - 1)(\lambda - 9)$; $2(5 - \lambda) - 8 = 2 - 2\lambda$; $8 - 2(5 - \lambda) = -2 + 2\lambda$. So
$$\begin{aligned} \det(A - \lambda I) &= (2 - \lambda)(\lambda - 1)(\lambda - 9) + 8(\lambda - 1) \\ &= (\lambda - 1)\big[(2 - \lambda)(\lambda - 9) + 8\big] = -(\lambda - 1)^2(\lambda - 10), \end{aligned}$$
because $(2 - \lambda)(\lambda - 9) + 8 = -\lambda^2 + 11\lambda - 10 = -(\lambda - 1)(\lambda - 10)$. Eigenvalues: $1$ (double) and $10$.

**Eigenspaces.** $A - I = \begin{pmatrix} 1 & 2 & 2 \\ 2 & 4 & 4 \\ 2 & 4 & 4 \end{pmatrix}$ has rank $1$: $V_1 = \{x_1 + 2x_2 + 2x_3 = 0\}$, with basis $(-2, 1, 0)$ and $(-2, 0, 1)$. For $\lambda = 10$: $A\,(1, 2, 2) = (10, 20, 20)$, so $V_{10} = \Span((1, 2, 2))$ (it is the line orthogonal to the plane $V_1$, as it must be).

**Gram–Schmidt in $V_1$.** $w_1 = (-2, 1, 0)$ and
$$\begin{aligned} w_2 &= (-2, 0, 1) - \frac{\langle (-2, 0, 1), (-2, 1, 0) \rangle}{\langle (-2, 1, 0), (-2, 1, 0) \rangle}(-2, 1, 0) \\ &= (-2, 0, 1) - \tfrac 45(-2, 1, 0) = \left(-\tfrac 25, -\tfrac 45, 1\right), \end{aligned}$$
which I multiply by $5$: $(-2, -4, 5)$. Checks: $\langle (-2, 1, 0), (-2, -4, 5) \rangle = 4 - 4 = 0$ and $-2 - 8 + 10 = 0$ (it lies in $V_1$).

**Normalisation.** $\lVert (1, 2, 2) \rVert = 3$, $\lVert (-2, 1, 0) \rVert = \sqrt 5$, $\lVert (-2, -4, 5) \rVert = \sqrt{45} = 3\sqrt 5$. Orthonormal basis of eigenvectors:
$$\tfrac 13 (1, 2, 2), \qquad \tfrac{1}{\sqrt 5}(-2, 1, 0), \qquad \tfrac{1}{3\sqrt 5}(-2, -4, 5),$$
with ${}^tM A M = \operatorname{diag}(10, 1, 1)$.
:::

::: exercise intermediate A $2 \times 2$ Hermitian matrix
Find an orthonormal basis of eigenvectors (Euclidean Hermitian product) for $H = \begin{pmatrix} 1 & i \\ -i & 1 \end{pmatrix}$ and write $W$ with $W^{-1} H W$ diagonal.
::: solution
$p_H(\lambda) = (1 - \lambda)^2 - i(-i) = (1 - \lambda)^2 - 1 = \lambda(\lambda - 2)$: eigenvalues $0$ and $2$, real.
- $\lambda = 0$: $x_1 + i x_2 = 0$, that is $x_1 = -i x_2$: with $x_2 = i$ we have $x_1 = 1$, eigenvector $(1, i)$. Check: $H\,(1, i) = (1 + i \cdot i,\ -i + i) = (0, 0)$.
- $\lambda = 2$: $-x_1 + i x_2 = 0$, that is $x_1 = i x_2$: with $x_2 = -i$ we have $x_1 = 1$, eigenvector $(1, -i)$. Check: $H\,(1, -i) = (1 + 1,\ -i - i) = 2\,(1, -i)$.

$\langle (1, i), (1, -i) \rangle = 1 + i \cdot \overline{-i} = 1 + i \cdot i = 0$, and the norms equal $\sqrt 2$. So
$$W = \frac{1}{\sqrt 2}\begin{pmatrix} 1 & 1 \\ i & -i \end{pmatrix}, \qquad W^{-1} = {}^t\bar W = \frac{1}{\sqrt 2}\begin{pmatrix} 1 & -i \\ 1 & i \end{pmatrix},$$
$$W^{-1} H W = \begin{pmatrix} 0 & 0 \\ 0 & 2 \end{pmatrix}.$$
:::

::: exercise hard The easy converse, with matrices
Let $A \in M(n, \R)$ and suppose that there is an orthogonal matrix $M$ with ${}^tM A M = D$ diagonal. Prove directly that $A$ is symmetric.
::: solution
From ${}^tM A M = D$, multiplying on the left by $M$ and on the right by ${}^tM$ and using $M\,{}^tM = I$ (for a square matrix ${}^tM M = I$ also implies $M\,{}^tM = I$):
$$A = M D\, {}^tM.$$
Transposing, with the rule for the transpose of a product and ${}^tD = D$ (a diagonal matrix is symmetric):
$${}^tA = {}^t({}^tM)\, {}^tD\, {}^tM = M D\, {}^tM = A.$$
So $A$ is symmetric. It is the direction (3) $\Rightarrow$ (1) of Corollary 26.2, without going through endomorphisms.
:::

::: exercise hard Real eigenvalues for $2 \times 2$ symmetric matrices, by hand
(a) Prove that $S = \begin{pmatrix} a & b \\ b & c \end{pmatrix}$ with $a, b, c \in \R$ always has real eigenvalues. (b) When do the two eigenvalues coincide? (c) Check that, if $b \neq 0$, the eigenvectors are orthogonal.
::: solution
(a) $p_S(\lambda) = \lambda^2 - (a + c)\lambda + (ac - b^2)$, with discriminant
$$\Delta = (a + c)^2 - 4(ac - b^2) = (a - c)^2 + 4b^2 \ge 0.$$
The roots are real.

(b) $\Delta = 0$ if and only if $a = c$ and $b = 0$, that is $S = aI$: a single eigenvalue, and every vector is an eigenvector.

(c) If $b \neq 0$ the eigenvalues $\lambda_1 \neq \lambda_2$ are distinct. From the first row of $S - \lambda I$, $(a - \lambda)x + by = 0$, an eigenvector of $\lambda$ is $v = (b, \lambda - a)$. Then
$$\langle v_1, v_2 \rangle = b^2 + (\lambda_1 - a)(\lambda_2 - a) = b^2 + \lambda_1\lambda_2 - a(\lambda_1 + \lambda_2) + a^2.$$
With $\lambda_1 + \lambda_2 = a + c$ and $\lambda_1 \lambda_2 = ac - b^2$ (coefficients of $p_S$): $b^2 + ac - b^2 - a^2 - ac + a^2 = 0$.
:::

::: exercise exam A matrix with a parameter (exam of 15/01/2026, problem 11)
Consider the matrix $A = \begin{pmatrix} 1 & k^2 & 0 \\ k & k + 1 & k \\ 0 & k & 1 \end{pmatrix}$ in $M(3, \R)$, where $k$ is a real parameter. (1) Determine for which values of $k$ the matrix $A$ is invertible. (2) Compute ${}^tA - A$, and decide for which values of $k$ the matrix $A$ has both real eigenvalues and an orthonormal basis of eigenvectors. (3) Setting $k = 1$, compute an orthonormal basis of eigenvectors.
::: solution
(1) I expand along the first row:
$$\det A = 1 \cdot \big((k + 1) \cdot 1 - k \cdot k\big) - k^2 \cdot (k \cdot 1 - k \cdot 0) + 0 = k + 1 - k^2 - k^3.$$
I factor: $-k^3 - k^2 + k + 1 = -k^2(k + 1) + (k + 1) = (k + 1)(1 - k^2) = -(k + 1)^2 (k - 1)$. So $A$ is invertible for $k \neq 1$ and $k \neq -1$.

(2) ${}^tA = \begin{pmatrix} 1 & k & 0 \\ k^2 & k + 1 & k \\ 0 & k & 1 \end{pmatrix}$, so
$${}^tA - A = \begin{pmatrix} 0 & k - k^2 & 0 \\ k^2 - k & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}.$$
$A$ is symmetric if and only if $k^2 = k$, that is $k = 0$ or $k = 1$. By Corollary 26.2, $A$ has an orthonormal basis of eigenvectors if and only if it is symmetric, and in that case it also has real eigenvalues. Answer: $k \in \{0, 1\}$.

(3) With $k = 1$: $A = \begin{pmatrix} 1 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 1 \end{pmatrix}$. Expanding along the first row,
$$\begin{aligned} p_A(\lambda) &= (1 - \lambda)\big[(2 - \lambda)(1 - \lambda) - 1\big] - 1 \cdot \big[(1 - \lambda) - 0\big] \\ &= (1 - \lambda)\big[\lambda^2 - 3\lambda + 1 - 1\big] = (1 - \lambda)\,\lambda\,(\lambda - 3). \end{aligned}$$
Eigenvalues $0$, $1$, $3$, distinct.
- $\lambda = 0$: $x_1 + x_2 = 0$ and $x_2 + x_3 = 0$: $(1, -1, 1)$.
- $\lambda = 1$: $A - I = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 1 & 1 \\ 0 & 1 & 0 \end{pmatrix}$ gives $x_2 = 0$ and $x_1 + x_3 = 0$: $(1, 0, -1)$.
- $\lambda = 3$: $A - 3I = \begin{pmatrix} -2 & 1 & 0 \\ 1 & -1 & 1 \\ 0 & 1 & -2 \end{pmatrix}$ gives $x_2 = 2x_1$ and $x_2 = 2x_3$: $(1, 2, 1)$.

They are pairwise orthogonal (distinct eigenvalues; check: $1 - 1 + 0 = 0$, $1 - 2 + 1 = 0$, $1 + 0 - 1 = 0$). Normalising:
$$\tfrac{1}{\sqrt 3}(1, -1, 1), \qquad \tfrac{1}{\sqrt 2}(1, 0, -1), \qquad \tfrac{1}{\sqrt 6}(1, 2, 1).$$
Note: $0$ is an eigenvalue precisely for $k = 1$, consistent with part (1) ($A$ not invertible).
:::

::: exercise exam Symmetric for a single value of the parameter
Let $A_k = \begin{pmatrix} 2 & k & 0 \\ 1 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$ with $k \in \R$. (1) Compute ${}^tA_k - A_k$ and find for which $k$ the matrix is symmetric. (2) For that value find an orthogonal matrix $M$ and a diagonal one $D$ with ${}^tM A_k M = D$. (3) For $k = 4$ is the matrix diagonalisable? Does it have an orthonormal basis of eigenvectors?
::: solution
(1) ${}^tA_k - A_k = \begin{pmatrix} 0 & 1 - k & 0 \\ k - 1 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$: zero only for $k = 1$.

(2) With $k = 1$ the top-left block is $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$, with eigenvalues $3$ and $1$ and eigenvectors $(1, 1)$ and $(1, -1)$; the third vector of the canonical basis gives the eigenvalue $3$. So
- $\lambda = 3$ (double): $V_3 = \Span((1, 1, 0), (0, 0, 1))$, already orthogonal;
- $\lambda = 1$: $V_1 = \Span((1, -1, 0))$.

Check with the polynomial: $p(\lambda) = (3 - \lambda)\big[(2 - \lambda)^2 - 1\big] = (3 - \lambda)(\lambda - 1)(\lambda - 3)$. Normalising:
$$M = \begin{pmatrix} \frac{1}{\sqrt 2} & 0 & \frac{1}{\sqrt 2} \\ \frac{1}{\sqrt 2} & 0 & -\frac{1}{\sqrt 2} \\ 0 & 1 & 0 \end{pmatrix}, \qquad D = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{pmatrix}.$$

(3) With $k = 4$ the block $\begin{pmatrix} 2 & 4 \\ 1 & 2 \end{pmatrix}$ has $p(\lambda) = (2 - \lambda)^2 - 4 = \lambda(\lambda - 4)$: eigenvalues $0$ and $4$, plus the eigenvalue $3$. Three **distinct** real eigenvalues: $A_4$ is diagonalisable (lesson L18). But it is not symmetric, so by Corollary 26.2 it does **not** have an orthonormal basis of eigenvectors. Indeed the eigenvectors of $4$ and of $0$ are $(2, 1, 0)$ and $(-2, 1, 0)$, with scalar product $-4 + 1 = -3 \neq 0$.
:::

## Review questions

::: question What does the spectral theorem say?
An endomorphism $T$ of a real space with a positive definite scalar product (or of a complex one with a positive definite Hermitian product) is self-adjoint if and only if it has an orthonormal basis of eigenvectors and all its eigenvalues are real (Theorem 26.1).
:::

::: question Why is the condition "real eigenvalues" needed in the complex case?
Because there are endomorphisms with an orthonormal basis of eigenvectors that are not self-adjoint: $T(x, y) = (ix, y)$ on $\C^2$. Their diagonal matrix has a non-real entry, so it is not Hermitian.
:::

::: question How do you prove that the eigenvalues of a self-adjoint endomorphism are real?
If $T(v) = \lambda v$ with $v \neq 0$: $\lambda \langle v, v \rangle = \langle T(v), v \rangle = \langle v, T(v) \rangle = \bar\lambda \langle v, v \rangle$, and since $\langle v, v \rangle > 0$ we have $\lambda = \bar\lambda$.
:::

::: question What is the idea of the induction in the proof?
You take an eigenvector $v$ (it exists over the complex numbers by the fundamental theorem of algebra). $\Span(v)$ is invariant, so $U = \Span(v)^\perp$ is too (Proposition 25.10); $T|_U$ is self-adjoint on a space of dimension $n - 1$, and by induction it has an orthonormal basis of eigenvectors, to which you add $v$ normalised.
:::

::: question How do you go from the complex case to the real case?
You write $T$ in an orthonormal basis with a real symmetric matrix $S$; considered as complex, it has real eigenvalues; so the characteristic polynomial has a real root $\lambda$, and $\det(S - \lambda I) = 0$ gives a real eigenvector. Then the same induction.
:::

::: question What does Corollary 26.2 say?
For a real matrix $A$ the following are equivalent: $A$ symmetric; $L_A$ has an orthonormal basis of eigenvectors; there is an orthogonal $M$ with ${}^tM A M = M^{-1} A M$ diagonal.
:::

::: question What is an orthogonal matrix and why is it convenient?
A real matrix with ${}^tM M = I$: its columns form an orthonormal basis. It is convenient because $M^{-1} = {}^tM$, without computations.
:::

::: question Why are eigenvectors of different eigenvalues of a symmetric matrix orthogonal?
From $\lambda \langle v, w \rangle = \langle Av, w \rangle = \langle v, Aw \rangle = \mu \langle v, w \rangle$ it follows that $(\lambda - \mu)\langle v, w \rangle = 0$, and $\lambda \neq \mu$.
:::

::: question When is Gram–Schmidt needed to diagonalise a symmetric matrix?
Only inside an eigenspace of dimension at least 2, if the basis found by solving the system is not already orthogonal. Between different eigenspaces orthogonality is automatic.
:::

::: question Is a diagonalisable matrix always symmetric?
No. $\begin{pmatrix} 3 & 1 \\ 0 & 1 \end{pmatrix}$ is diagonalisable but not symmetric: it has a basis of eigenvectors, but not an orthonormal basis of eigenvectors.
:::

::: question How does the method change for a Hermitian matrix?
Products and norms are computed with the Hermitian product (squared moduli); the matrix $W$ of the normalised eigenvectors satisfies ${}^t\bar W W = I$, so $W^{-1} = {}^t\bar W$.
:::

::: question What does the spectral theorem have to do with PCA?
The matrix $S = \frac 1N \sum x_i\, {}^t x_i$ of the centred data is symmetric, so it has an orthonormal basis of eigenvectors; those with the largest eigenvalues are the directions of greatest variability, and projecting onto them reduces the dimension of the data.
:::

## Glossary

```glossary
Spectrum | The set of the eigenvalues of an endomorphism or of a matrix.
Spectral theorem | $T$ self-adjoint $\iff$ orthonormal basis of eigenvectors and real eigenvalues (Theorem 26.1).
Self-adjoint endomorphism | $T$ with $\langle T(v), w \rangle = \langle v, T(w) \rangle$ for every $v, w$ (lesson L25).
Orthonormal basis of eigenvectors | Basis made of eigenvectors of norm 1, pairwise orthogonal; in it the matrix of the endomorphism is diagonal.
Orthogonal matrix | Real matrix with ${}^tM M = I$; the columns are an orthonormal basis and $M^{-1} = {}^tM$.
Orthogonal diagonalisation | Expression ${}^tM A M = D$ with $M$ orthogonal and $D$ diagonal; possible exactly for symmetric matrices (Corollary 26.2).
Symmetric matrix | Real matrix with ${}^tA = A$; it has real eigenvalues and is diagonalisable with an orthogonal matrix.
Hermitian matrix | Complex matrix with ${}^tH = \bar H$; it has real eigenvalues and an orthonormal basis of eigenvectors for the Hermitian product.
Conjugate transpose | ${}^t\bar W$; for a matrix with orthonormal columns (Hermitian product) it is the inverse.
Eigenspace | $V_\lambda = \{v \mid A v = \lambda v\}$; for symmetric matrices its dimension is the algebraic multiplicity of $\lambda$.
Algebraic and geometric multiplicity | Multiplicity of $\lambda$ as a root of $p_A$, and dimension of $V_\lambda$; for symmetric matrices they coincide.
Induction on the dimension | Technique of the proof: you peel off an eigenvector and apply the hypothesis to its orthogonal complement.
Fundamental theorem of algebra | Every non-constant complex polynomial has a complex root; it guarantees an eigenvalue over the complex numbers.
PCA | Principal component analysis: it diagonalises the symmetric data matrix to find the directions of greatest variability.
```

## Checklist

```checklist
- I can state the spectral theorem and explain why in the complex case the condition on real eigenvalues is needed.
- I can prove that the eigenvalues of a self-adjoint endomorphism are real.
- I can tell the proof by induction: eigenvector, invariant orthogonal complement, inductive hypothesis.
- I know that a real symmetric matrix has real eigenvalues and is diagonalisable with an orthogonal matrix.
- I can state Corollary 26.2 and use $M^{-1} = {}^tM$.
- I can prove that eigenvectors of different eigenvalues of a symmetric matrix are orthogonal.
- I can find an orthonormal basis of eigenvectors even with a double eigenvalue, using Gram–Schmidt inside the eigenspace.
- I can diagonalise a Hermitian matrix using the Hermitian product and $W^{-1} = {}^t\bar W$.
- I can use ${}^tA - A$ to decide, as a parameter varies, when an orthonormal basis of eigenvectors exists.
- I can tell "diagonalisable" apart from "diagonalisable with an orthonormal basis".
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 26 "Teorema spettrale II", pp. 134–138: introduction, section 26.A (Theorem 26.1 with the proof, Corollary 26.2, link with PCA) and section 26.B (Exercises 26.3, 26.4 and 26.5, worked out in full in the exercises). From the previous lessons: diagonalisation (lessons 17–18), scalar products and Gram–Schmidt (lessons 19–21), orthogonal matrices (Definition 22.10), Hermitian products and self-adjoint endomorphisms (lesson 25).
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §11.3 (spectral theorem, Corollary 11.3.2, consequences) and Exercises 11.1–11.2.
- **Exam papers** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): text reported from 16/01/2025 (question 7), 02/09/2025 (problem 11, part 3) and 15/01/2026 (problem 11), with solutions written for these notes; the exam of 24/01/2024 (problem 11) is cited by type of question.
- The **"Beyond the handouts"** parts ($2 \times 2$ case by hand, orthogonality of the eigenvectors of different eigenvalues, numerical example of PCA, additional examples and exercises) are additions in these notes to connect the lesson to the book and to the exam.
