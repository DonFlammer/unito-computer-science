---
course: MDAG
module: AG
lesson: L18
title: Eigenvalues and eigenvectors II
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Linear Algebra and Geometry · Channels A, B and C · Lesson L18
description: >-
  Notes on lesson L18 of Linear Algebra and Geometry (MDAG, part 2): independence of eigenvectors with distinct
  eigenvalues, eigenspaces and direct sum, algebraic and geometric multiplicity, the diagonalisability theorem and
  matrices with a parameter, with exam-style quizzes and worked exercises.
lede: >-
  When is a matrix diagonalisable? Eigenvectors with different eigenvalues are always independent, and the
  eigenvectors of one and the same eigenvalue form a subspace, the eigenspace $V_\lambda$. Comparing the algebraic
  multiplicity (how many times $\lambda$ is a root of $p_A$) with the geometric one ($\dim V_\lambda$) gives the
  diagonalisability theorem, which solves the most frequent open problem of the exam: matrices with a parameter $k$.
material: handouts
facts:
  Handouts: lesson 18 · pp. 90–95
  Book: Martelli, §5.2
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 120–150 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 18 "Autovalori e autovettori II"; B. Martelli, Geometria e algebra lineare, §5.1 and §5.2
italian_file: L18_autovalori_autovettori_2.html
html_notes: notes/MDAG/L18_eigenvalues_eigenvectors_2.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L18_autovalori_autovettori_2.md
---

## In brief

- **Eigenvectors with distinct eigenvalues are linearly independent** (Proposition 18.1). So if $p_T$ has $n$ **distinct** roots in $\K$, $T$ is diagonalisable. The converse does not hold: $I_n$ is diagonal with a single eigenvalue.
- The **eigenspace** of an eigenvalue $\lambda$ is $V_\lambda = \{v \in V \mid T(v) = \lambda v\} = \Ker(T - \lambda\,\id)$: all the eigenvectors of $\lambda$ plus the zero vector. It is a subspace.
- The eigenspaces are always in **direct sum**; $T$ is diagonalisable if and only if their sum is the whole of $V$.
- **Algebraic multiplicity** $m_a(\lambda)$: how many times $\lambda$ is a root of $p_T$. **Geometric multiplicity** $m_g(\lambda) = \dim V_\lambda = n - \rk(A - \lambda I_n)$.
- $1 \le m_g(\lambda) \le m_a(\lambda)$ always holds: a simple eigenvalue ($m_a = 1$) always has $m_g = 1$ and causes no problems.
- **Diagonalisability theorem**: $T$ is diagonalisable if and only if (1) $p_T$ has $n$ roots in $\K$ counted with multiplicity and (2) $m_a(\lambda) = m_g(\lambda)$ for every eigenvalue.
- The field matters: the $90°$ rotation is diagonalisable over $\C$ but not over $\R$; $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ is not diagonalisable over either.
- With a parameter $k$: find the eigenvalues as functions of $k$; where they are distinct the matrix is diagonalisable; at the values of $k$ where two eigenvalues coincide, compute the rank of $A - \lambda I_n$.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## Eigenvectors with distinct eigenvalues (p. 90)

In lesson L17 you saw that an endomorphism $T : V \to V$ is diagonalisable if $V$ has a basis $\mathcal B = \{v_1, \dots, v_n\}$ made of eigenvectors for $T$. To find such a basis you need to know when some eigenvectors are **independent**.

As in the handouts, the vectors of $\K^n$ are columns; in the text we write them as rows, $(1, 2)$, to save space.

A first example: for $A = \begin{pmatrix} 3 & 4 \\ 0 & 2 \end{pmatrix}$ from lesson L17, the eigenvectors $(1, 0)$ (eigenvalue 3) and $(-4, 1)$ (eigenvalue 2) are independent. It is not a coincidence.

> [!PROP] 18.1
> If $v_1, \dots, v_k \in V$ are eigenvectors for $T$ with distinct eigenvalues $\lambda_1, \dots, \lambda_k$, then they are linearly independent.

Let us first look at the case of **two** eigenvectors, which already contains the whole idea. Let $T(v_1) = \lambda_1 v_1$ and $T(v_2) = \lambda_2 v_2$ with $\lambda_1 \neq \lambda_2$, and suppose
$$\alpha_1 v_1 + \alpha_2 v_2 = 0.$$
1. We apply $T$ (which is linear and sends $0$ to $0$): $\alpha_1 \lambda_1 v_1 + \alpha_2 \lambda_2 v_2 = 0$.
2. Instead, we multiply the first equation by $\lambda_2$: $\alpha_1 \lambda_2 v_1 + \alpha_2 \lambda_2 v_2 = 0$.
3. We subtract: the term with $v_2$ disappears and what remains is $\alpha_1(\lambda_1 - \lambda_2)v_1 = 0$.
4. $v_1 \neq 0$ (it is an eigenvector) and $\lambda_1 - \lambda_2 \neq 0$, so $\alpha_1 = 0$. Then $\alpha_2 v_2 = 0$ and, since $v_2 \neq 0$, also $\alpha_2 = 0$.

The zero combination has only zero coefficients: $v_1$ and $v_2$ are independent. With more vectors you repeat the same trick, eliminating one vector at a time: it is the proof by induction in the handouts.

> [!PROOF] of Proposition 18.1 (from the handouts)
> We proceed by induction on $k$. If $k = 1$, the vector $v_1$ is independent simply because it is not zero (by definition, an eigenvector is never zero).
>
> We take the case $k - 1$ for granted and prove the case $k$. Suppose we have a zero linear combination
> $$\alpha_1 v_1 + \dots + \alpha_k v_k = 0.$$
> We must prove that $\alpha_i = 0$ for every $i$. Applying $T$ we get
> $$\alpha_1 T(v_1) + \dots + \alpha_k T(v_k) = \alpha_1 \lambda_1 v_1 + \dots + \alpha_k \lambda_k v_k = T(0) = 0.$$
> Multiplying the first equation by $\lambda_k$ we find
> $$\alpha_1 \lambda_k v_1 + \dots + \alpha_k \lambda_k v_k = 0$$
> and taking the difference between these two equations we deduce that
> $$\alpha_1(\lambda_1 - \lambda_k)v_1 + \dots + \alpha_{k-1}(\lambda_{k-1} - \lambda_k)v_{k-1} = 0.$$
> This is a zero linear combination of $k - 1$ eigenvectors with distinct eigenvalues: by the inductive hypothesis all the coefficients $\alpha_i(\lambda_i - \lambda_k)$ must be zero. Since $\lambda_i \neq \lambda_k$, we deduce that $\alpha_i = 0$ for every $i = 1, \dots, k - 1$, and with the first equation also $\alpha_k = 0$ (what remains is $\alpha_k v_k = 0$ with $v_k \neq 0$).

> [!COROLLARY] 18.2
> If the characteristic polynomial $p_T(\lambda)$ has $n$ distinct roots in $\K$, the endomorphism $T$ is diagonalisable.

Why (it is the proof in Martelli's book, Corollary 5.2.2): the $n$ roots $\lambda_1, \dots, \lambda_n$ are eigenvalues (Proposition 17.13), so each one has an eigenvector $v_i$. By Proposition 18.1 the vectors $v_1, \dots, v_n$ are independent; there are $n$ of them in a space of dimension $n$, so they form a basis (Theorem 7.12). It is a basis of eigenvectors.

> [!EXAMPLE] · diagonalisable without looking for the eigenvectors
> $A = \begin{pmatrix} 1 & 7 & -1 \\ 0 & 2 & 8 \\ 0 & 0 & 3 \end{pmatrix}$ is triangular, so its eigenvalues are $1, 2, 3$ (lesson L17). They are three, distinct, in $\R^3$: by Corollary 18.2, $A$ is diagonalisable. You do not need to compute the eigenvectors to know it (if you need them: $(1, 0, 0)$, $(7, 1, 0)$ and $(55, 16, 2)$).

> [!PITFALL] Corollary 18.2 goes in one direction only
> "$n$ distinct eigenvalues" is a **sufficient** condition, not a necessary one. $I_3$ has a single eigenvalue (1, counted three times) and is diagonal. When some eigenvalue repeats you cannot conclude anything: you need the diagonalisability theorem of a later section.

## Eigenspaces and direct sum (pp. 90–91)

Eigenvectors with the **same** eigenvalue behave well: if $T(v) = \lambda v$ and $T(w) = \lambda w$, then $T(v + w) = \lambda(v + w)$ and $T(\mu v) = \lambda(\mu v)$. Put together, with the zero vector added, they form a subspace.

> [!DEF] 18.3 · Eigenspace
> Let $T : V \to V$ be an endomorphism. For every eigenvalue $\lambda$ of $T$ we define the **eigenspace**
> $$V_\lambda = \{v \in V \mid T(v) = \lambda v\} = \Ker(T - \lambda\,\id)$$
> as the set of all the eigenvectors $v$ with eigenvalue $\lambda$, plus the origin $0 \in V$ (recall that $0 \in V$ is not an eigenvector by definition).

Piece by piece:

- **$T - \lambda\,\id$** is the endomorphism $v \mapsto T(v) - \lambda v$. Its kernel is made of the $v$ with $T(v) - \lambda v = 0$, that is $T(v) = \lambda v$: this is why the two ways of writing $V_\lambda$ coincide.
- **It is a subspace**: for every endomorphism $S : V \to V$ the kernel $\Ker(S)$ is a subspace of $V$ (Proposition 14.10), and $V_\lambda$ is the kernel of $S = T - \lambda\,\id$.
- **In coordinates**: with $A = [T]^{\mathcal B}_{\mathcal B}$, the eigenspace corresponds to the solutions of the homogeneous system $(A - \lambda I_n)x = 0$. A basis of $V_\lambda$ is found with Gauss, as for every kernel.
- **It is never $\{0\}$**, because $\lambda$ is an eigenvalue: it contains at least one eigenvector.

> [!EXAMPLE] · the eigenspaces of a $3 \times 3$ matrix
> Let $A = \begin{pmatrix} 3 & 0 & 0 \\ -4 & -1 & -8 \\ 0 & 0 & 3 \end{pmatrix}$ (the matrix of Example 18.11, further on). Its eigenvalues are $3$ and $-1$.
> - $V_3 = \Ker(A - 3I_3)$ with $A - 3I_3 = \begin{pmatrix} 0 & 0 & 0 \\ -4 & -4 & -8 \\ 0 & 0 & 0 \end{pmatrix}$: a single equation, $-4x - 4y - 8z = 0$, that is $x = -y - 2z$. With $y = 1, z = 0$ and with $y = 0, z = 1$: $V_3 = \Span\big((-1, 1, 0),\ (-2, 0, 1)\big)$, a plane.
> - $V_{-1} = \Ker(A + I_3)$ with $A + I_3 = \begin{pmatrix} 4 & 0 & 0 \\ -4 & 0 & -8 \\ 0 & 0 & 4 \end{pmatrix}$: from the first row $x = 0$, from the third $z = 0$, and $y$ is free. $V_{-1} = \Span\big((0, 1, 0)\big)$, a line.

For the next definition you need the **sum** of subspaces: $V_1 + \dots + V_k$ is the set of all the vectors that can be written as $v_1 + \dots + v_k$ with $v_i \in V_i$. It is the smallest subspace that contains all of them.

> [!DEF] 18.4 · Direct sum
> Let $V_1, \dots, V_k$ be subspaces of a vector space $V$. We say that their sum is **direct** if every vector
> $$v \in V_1 + \dots + V_k$$
> can be written in a unique way in the form
> $$v = v_1 + \dots + v_k, \qquad v_i \in V_i.$$
> In this case we write $V_1 \oplus \dots \oplus V_k$.
>
> Equivalently, the only relation $v_1 + \dots + v_k = 0$ with $v_i \in V_i$ is the one in which $v_1 = \dots = v_k = 0$.

> [!EXAMPLE] · lines in direct sum, and not
> In $\R^3$ the three lines $\Span(e_1)$, $\Span(e_2)$, $\Span(e_3)$ are in direct sum: if $a e_1 + b e_2 + c e_3 = 0$ then $(a, b, c) = 0$, so the three summands are zero. Instead $\Span(e_1)$, $\Span(e_2)$ and $\Span(e_1 + e_2)$ are **not**: $e_1 + e_2 + \big(-(e_1 + e_2)\big) = 0$ is a relation with non-zero summands. The vector $e_1 + e_2$ can be written in two ways: $e_1 + e_2 + 0$ or $0 + 0 + (e_1 + e_2)$.

> [!PROP] 18.5
> Let $T : V \to V$ be an endomorphism and let $\lambda_1, \dots, \lambda_k$ be its eigenvalues. The corresponding eigenspaces are always in direct sum:
> $$V_{\lambda_1} \oplus \dots \oplus V_{\lambda_k}.$$

The handouts' explanation, made explicit: take a relation $v_1 + \dots + v_k = 0$ with $v_i \in V_{\lambda_i}$ and suppose that some $v_i$ is not zero. The non-zero $v_i$ are eigenvectors with distinct eigenvalues, and the relation says that their sum (with all coefficients equal to 1) is zero: they are dependent. This contradicts Proposition 18.1. So all the $v_i$ are zero, which is the equivalent form of Definition 18.4.

> [!COROLLARY] 18.6
> The endomorphism $T$ is diagonalisable if and only if
> $$V = V_{\lambda_1} \oplus \dots \oplus V_{\lambda_k}.$$

The handouts' proof, step by step: we already know that the eigenspaces are in direct sum, so we need to show that $V = V_{\lambda_1} + \dots + V_{\lambda_k}$ if and only if there is a basis of eigenvectors.

1. **($\Rightarrow$)** Take a basis of each $V_{\lambda_i}$ and put them together. They are all eigenvectors. They span the sum, which is $V$; and they are independent, because a zero combination splits into one piece for each eigenspace, the direct sum forces every piece to be zero, and inside each $V_{\lambda_i}$ the chosen vectors are a basis. So it is a basis of $V$ made of eigenvectors.
2. **($\Leftarrow$)** If there is a basis of eigenvectors, each vector $v$ is a linear combination of eigenvectors, and grouping those with the same eigenvalue you get $v \in V_{\lambda_1} + \dots + V_{\lambda_k}$.

In practice: **$T$ is diagonalisable if and only if $\dim V_{\lambda_1} + \dots + \dim V_{\lambda_k} = n$**. In the example above: $\dim V_3 + \dim V_{-1} = 2 + 1 = 3$, so that matrix is diagonalisable.

## Algebraic and geometric multiplicity (pp. 91–92)

Recall from lesson L04 (Definition 4.3) that the **multiplicity** of a root $a$ of a polynomial $p$ is the largest $k$ such that $(x - a)^k$ divides $p$: for example $(x - 1)^3(x + 1)$ has the root 1 with multiplicity 3.

> [!DEF] 18.7 · Algebraic and geometric multiplicity
> Let $T : V \to V$ be an endomorphism and let $\lambda$ be an eigenvalue for $T$. The **algebraic multiplicity** $m_a(\lambda)$ is the multiplicity of $\lambda$ as a root of the characteristic polynomial $p_T$. The **geometric multiplicity** $m_g(\lambda)$ is the dimension of the eigenspace associated with $\lambda$, that is
> $$m_g(\lambda) = \dim V_\lambda.$$

Piece by piece:

- **$m_a$ is read from the factorised polynomial**: in $p_A(\lambda) = (3 - \lambda)^2(-1 - \lambda)$ the eigenvalue 3 has $m_a = 2$ and the eigenvalue $-1$ has $m_a = 1$.
- **$m_g$ is computed with the rank**: by the rank–nullity theorem (lesson L14, which for systems is the Rouché–Capelli theorem)
$$m_g(\lambda) = \dim \Ker(A - \lambda I_n) = n - \rk(A - \lambda I_n).$$
- **Names**: "algebraic" because it comes from the polynomial, "geometric" because it measures the space of the eigenvectors (a line, a plane, …).

> [!EXAMPLE] 18.8 · The two multiplicities can be different
> Let $L_A : \R^2 \to \R^2$ be the endomorphism given by
> $$A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}.$$
> The characteristic polynomial is $p_A(\lambda) = (1 - \lambda)^2 = \lambda^2 - 2\lambda + 1 = (\lambda - 1)^2$. We find a single eigenvalue $\lambda_1 = 1$, with algebraic multiplicity $m_a(1) = 2$. On the other hand,
> $$m_g(1) = \dim V_1 = \dim \Ker(A - I_2) = 2 - \rk(A - I_2) = 2 - \rk\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix} = 2 - 1 = 1.$$
> So in this case we have found $m_a(1) = 2$ and $m_g(1) = 1$.

In this example the eigenvectors are only the non-zero multiples of $e_1$ (the system $(A - I_2)x = 0$ says $y = 0$): a single line of eigenvectors in $\R^2$, so no basis of eigenvectors. $L_A$ is a **shear**: it moves every point horizontally by an amount equal to its height. In the tool below drag $x$: only on the horizontal axis does $Ax$ stay on the same line.

```widget matrice
title: The shear $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ has a single line of eigenvectors
a: 1 1; 0 1
x: 1 1
raggio: 3
```

The example shows that the two multiplicities can be different. In general, the geometric multiplicity always lies between 1 and the algebraic multiplicity:

> [!THEOREM] 18.9
> Let $T : V \to V$ be an endomorphism. For every eigenvalue $\lambda_0$ of $T$ the following inequalities hold
> $$1 \le m_g(\lambda_0) \le m_a(\lambda_0).$$

The idea of the proof, from the handouts:

1. **The first inequality** follows from the existence of a non-zero eigenvector: $V_{\lambda_0}$ contains at least one vector $v \neq 0$, so it has dimension at least 1.
2. **For the second**, we choose a basis of $V_{\lambda_0}$ and complete it to a basis of $V$. A diagonal block $\lambda_0 I_{m_g(\lambda_0)}$ then appears in the matrix of $T$, so $p_T(\lambda)$ contains the factor $(\lambda_0 - \lambda)^{m_g(\lambda_0)}$, and $m_g(\lambda_0) \le m_a(\lambda_0)$.

> [!PROOF] of Theorem 18.9, second part, with the details (from Martelli's book, Proposition 5.2.10)
> Let $k = m_g(\lambda_0)$ and let $\{v_1, \dots, v_k\}$ be a basis of $V_{\lambda_0}$, completed to a basis $\mathcal B = \{v_1, \dots, v_n\}$ of $V$. For $i \le k$ we have $T(v_i) = \lambda_0 v_i$, so the first $k$ columns of $[T]^{\mathcal B}_{\mathcal B}$ are $\lambda_0 e_1, \dots, \lambda_0 e_k$ and the matrix has the block form
> $$[T]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} \lambda_0 I_k & C \\ 0 & D \end{pmatrix}, \qquad D \in M(n - k).$$
> The determinant of a block matrix of this kind (with the bottom-left block zero) is the product of the determinants of the diagonal blocks. So
> $$p_T(\lambda) = \det(\lambda_0 I_k - \lambda I_k) \cdot \det(D - \lambda I_{n-k}) = (\lambda_0 - \lambda)^k \, p_D(\lambda).$$
> The factor $(\lambda_0 - \lambda)^k$ divides $p_T$, so $\lambda_0$ has multiplicity at least $k$: $m_a(\lambda_0) \ge k = m_g(\lambda_0)$.

> [!IDEA] Simple eigenvalues never cause problems
> If $m_a(\lambda) = 1$, Theorem 18.9 gives $1 \le m_g(\lambda) \le 1$, so $m_g(\lambda) = 1$ without any computation. In the exercises the rank $\rk(A - \lambda I_n)$ must be computed **only** for the eigenvalues with $m_a \ge 2$.

## The diagonalisability theorem (pp. 92–93)

We can finally state the main theorem. Let $V$ be a vector space of dimension $n$ over $\K$.

> [!THEOREM] 18.10 · Diagonalisability theorem
> An endomorphism $T : V \to V$ is diagonalisable if and only if both of the following facts hold:
> 1. $p_T(\lambda)$ has $n$ roots in $\K$, counted with multiplicity.
> 2. $m_a(\lambda) = m_g(\lambda)$ for every eigenvalue $\lambda$ of $T$.

Piece by piece:

- **Condition (1)**: the polynomial splits completely into factors of degree one **in the field $\K$**. Over $\C$ it always holds (fundamental theorem of algebra, lesson L04); over $\R$ it fails if there is a factor of degree two with negative discriminant, such as $\lambda^2 + 1$.
- **Condition (2)**: for every eigenvalue the eigenspace is "as big as it should be". For simple eigenvalues it is automatic (previous box).
- The two conditions together say that the dimensions of the eigenspaces add up to $n$.

The handouts' proof, step by step:

1. The eigenspaces are in direct sum (Proposition 18.5); we call $W \subseteq V$ their sum, $W = V_{\lambda_1} \oplus \dots \oplus V_{\lambda_k}$.
2. $T$ is diagonalisable $\iff W = V$ (Corollary 18.6) $\iff \dim W = n$.
3. In a direct sum the dimensions add up, so
$$\dim W = \dim V_{\lambda_1} + \dots + \dim V_{\lambda_k} = m_g(\lambda_1) + \dots + m_g(\lambda_k) \le m_a(\lambda_1) + \dots + m_a(\lambda_k) \le n.$$
The first inequality uses $m_g(\lambda_i) \le m_a(\lambda_i)$ (Theorem 18.9); the second uses the fact that $\lambda_1, \dots, \lambda_k$ are roots of the characteristic polynomial, which has degree $n$ and so has at most $n$ roots counted with multiplicity.
4. $\dim W = n$ if and only if both inequalities are equalities. The first one is an equality precisely when $m_g(\lambda_i) = m_a(\lambda_i)$ for every $i$ (condition 2); the second precisely when $p_T(\lambda)$ has $n$ roots in $\K$, counted with multiplicity (condition 1). $\square$

The four possible behaviours, with $2 \times 2$ matrices (from the summary in Martelli's book, §5.1.7):

| Matrix | Eigenvalues | Diagonalisable over $\R$? | Over $\C$? | Why |
|---|---|---|---|---|
| $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$ | 1 ($m_a = m_g = 2$) | yes | yes | it is already diagonal |
| $\begin{pmatrix} -1 & 2 \\ -4 & 5 \end{pmatrix}$ | 1 and 3 | yes | yes | two distinct eigenvalues |
| $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ | $\pm i$ | **no** | yes | over $\R$ condition (1) fails |
| $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ | 1 ($m_a = 2$, $m_g = 1$) | **no** | **no** | condition (2) fails |

> [!METHOD] Deciding whether a matrix is diagonalisable
> 1. **Factorised characteristic polynomial**: $p_A(\lambda) = \det(A - \lambda I_n)$, expanded along the row or column with the most zeros.
> 2. **Condition (1)**: do all the roots lie in $\K$? Over $\R$, a factor $\lambda^2 + b\lambda + c$ with $b^2 - 4c < 0$ is enough to answer **no**.
> 3. **Algebraic multiplicities** from the factorised polynomial. If they are all 1 (distinct eigenvalues): **yes**, by Corollary 18.2.
> 4. **Condition (2)**, only for the eigenvalues with $m_a \ge 2$: $m_g(\lambda) = n - \rk(A - \lambda I_n)$. If for one of them $m_g < m_a$: **no**. Otherwise: **yes**.
> 5. **If a basis of eigenvectors is needed**: a basis of each $V_\lambda$ (Gauss on $A - \lambda I_n$), put together. $M$ has these vectors as columns, $D$ the corresponding eigenvalues in the same order; check $AM = MD$.

> [!EXAMPLE] 18.11 · A double eigenvalue that causes no problems
> Let us study the diagonalisability over $\R$ of the matrix
> $$A = \begin{pmatrix} 3 & 0 & 0 \\ -4 & -1 & -8 \\ 0 & 0 & 3 \end{pmatrix}.$$
> The characteristic polynomial is computed by expanding $\det(A - \lambda I_3)$ along the first row, which has a single non-zero entry, $3 - \lambda$; what remains is the minor $\begin{pmatrix} -1 - \lambda & -8 \\ 0 & 3 - \lambda \end{pmatrix}$, which is triangular:
> $$p_A(\lambda) = (3 - \lambda)(-1 - \lambda)(3 - \lambda),$$
> so it has roots $\lambda_1 = 3$ with $m_a(\lambda_1) = 2$ and $\lambda_2 = -1$ with $m_a(\lambda_2) = 1$. All the roots of $p_A(\lambda)$ are real, so $A$ is diagonalisable if and only if the algebraic and geometric multiplicities of each eigenvalue coincide. For the second eigenvalue $\lambda_2$ Theorem 18.9 implies that $m_g(\lambda_2) = m_a(\lambda_2) = 1$, and so we are fine.
>
> We only need to concentrate on the eigenvalue $\lambda_1$, which has $m_a(\lambda_1) = 2$. Theorem 18.9 tells us that $m_g(\lambda_1)$ can be 1 or 2: in the first case $A$ is not diagonalisable, in the second it is. Let us do the computation:
> $$m_g(3) = \dim V_3 = \dim \Ker(A - 3I_3) = 3 - \rk(A - 3I_3),$$
> where the last equality uses the rank–nullity theorem (or Rouché–Capelli). So
> $$m_g(3) = 3 - \rk\begin{pmatrix} 0 & 0 & 0 \\ -4 & -4 & -8 \\ 0 & 0 & 0 \end{pmatrix} = 3 - 1 = 2.$$
> We have found that $m_a(\lambda_1) = m_g(\lambda_1) = 2$, and so $A$ is diagonalisable.

The handouts stop here. With the eigenspaces computed in the previous section the diagonalisation can be completed: $V_3 = \Span\big((-1, 1, 0), (-2, 0, 1)\big)$ and $V_{-1} = \Span\big((0, 1, 0)\big)$, so
$$M = \begin{pmatrix} -1 & -2 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & 0 \end{pmatrix}, \qquad D = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & -1 \end{pmatrix}.$$
Check: $\det M = 1 \neq 0$, and $AM = MD$ column by column: $A(-1, 1, 0) = (-3, 3, 0)$, $A(-2, 0, 1) = (-6, 0, 3)$, $A(0, 1, 0) = (0, -1, 0)$.

## Diagonalisability with a parameter (pp. 94–95)

It is the most frequent kind of exercise in the open problems of the exam.

> [!EXAMPLE] 18.12 · A matrix with a parameter $k$
> Let us study the diagonalisability over $\R$ of the matrix
> $$A = \begin{pmatrix} 3 & k + 4 & 1 \\ -1 & -3 & -1 \\ 0 & 0 & 2 \end{pmatrix}$$
> as the parameter $k \in \R$ varies.
>
> **The characteristic polynomial.** The third row of $A - \lambda I_3$ is $(0, 0, 2 - \lambda)$: expanding along it,
> $$p_A(\lambda) = (2 - \lambda)\det\begin{pmatrix} 3 - \lambda & k + 4 \\ -1 & -3 - \lambda \end{pmatrix} = (2 - \lambda)\big((3 - \lambda)(-3 - \lambda) + (k + 4)\big) = (2 - \lambda)(\lambda^2 + k - 5),$$
> because $(3 - \lambda)(-3 - \lambda) = \lambda^2 - 9$ and $-9 + k + 4 = k - 5$.
>
> **If $k > 5$**, the factor $\lambda^2 + k - 5$ has no real roots ($\lambda^2 = 5 - k < 0$): so $p_A(\lambda)$ has only one root in $\R$ and $A$ is not diagonalisable (condition 1 fails).
>
> **If $k \le 5$**, the polynomial has three real roots
> $$\lambda_1 = 2, \qquad \lambda_2 = \sqrt{5 - k}, \qquad \lambda_3 = -\sqrt{5 - k}.$$
> If the three roots are distinct, the matrix $A$ is diagonalisable (Corollary 18.2). It remains to consider the cases in which the three roots are **not** distinct:
> - $\lambda_2 = \lambda_3$ when $\sqrt{5 - k} = 0$, that is $k = 5$;
> - $\lambda_2 = \lambda_1$ when $\sqrt{5 - k} = 2$, that is $5 - k = 4$, $k = 1$ (whereas $\lambda_3 = -\sqrt{5 - k}$ is never equal to 2).
>
> These two cases must be analysed separately with the techniques of the previous example.
>
> **If $k = 1$**, the eigenvalues are $\lambda_1 = 2$, $\lambda_2 = 2$ and $\lambda_3 = -2$, and the matrix is
> $$A = \begin{pmatrix} 3 & 5 & 1 \\ -1 & -3 & -1 \\ 0 & 0 & 2 \end{pmatrix}.$$
> We compute the geometric multiplicity of the eigenvalue 2:
> $$m_g(2) = 3 - \rk\begin{pmatrix} 1 & 5 & 1 \\ -1 & -5 & -1 \\ 0 & 0 & 0 \end{pmatrix} = 3 - 1 = 2$$
> (the second row is the opposite of the first). We get $m_g(2) = 2 = m_a(2)$, and so $A$ is diagonalisable.
>
> **If $k = 5$**, the eigenvalues are $\lambda_1 = 2$, $\lambda_2 = 0$ and $\lambda_3 = 0$, and the matrix is
> $$A = \begin{pmatrix} 3 & 9 & 1 \\ -1 & -3 & -1 \\ 0 & 0 & 2 \end{pmatrix}.$$
> The geometric multiplicity of the eigenvalue 0 is $m_g(0) = 3 - \rk(A) = 3 - 2 = 1 \neq 2 = m_a(0)$: the first two columns are proportional ($(9, -3, 0) = 3 \cdot (3, -1, 0)$) but the third is not a combination of them, so the rank is 2. So $A$ is not diagonalisable.
>
> Summing up, the matrix $A$ is diagonalisable if and only if $k < 5$.

> [!PITFALL] A special value does not mean "not diagonalisable"
> At $k = 1$ two eigenvalues coincide, and yet the matrix is diagonalisable; at $k = 5$ it is not. At the special values **always compute** the rank, do not guess. And the rank must be computed **after** substituting the value of $k$.

> [!BEYOND] the same matrix over $\C$
> If you study the same matrix over $\C$ (with $k$ real), for $k > 5$ the roots $\pm i\sqrt{k - 5}$ exist and are distinct from each other and from 2: the matrix is diagonalisable over $\C$. The answer would become "diagonalisable over $\C$ if and only if $k \neq 5$". This is why the text of an exercise always says which field to work over (in the 2023–2026 exam sessions both $k \in \R$ and $k \in \C$ appear).

The tool below computes eigenvalues, multiplicities and eigenspaces. It is set to Example 18.12 with $k = 1$: look at $m_g(2) = 2$. Then type in the matrix with $k = 5$, that is $3\ 9\ 1;\ -1\ -3\ -1;\ 0\ 0\ 2$, and watch $m_g(0) = 1 < 2$ appear.

```widget gauss
title: Multiplicities and eigenspaces: Example 18.12 with $k = 1$
matrice: 3 5 1; -1 -3 -1; 0 0 2
modo: autovalori
modi: autovalori, rango, nucleo
```

> [!BEYOND] where to find it in the book
> In Martelli's book: §5.2.1 "Autovettori con autovalori distinti" (pp. 163–165), §5.2.2 "Autospazio" (pp. 165–166), §5.2.3 "Molteplicità algebrica e geometrica" (pp. 166–167, with the complete proof of Theorem 18.9), §5.2.4 "Matrici simili" (p. 167: similar matrices also have the same geometric multiplicities), §5.2.5–5.2.6 "Teorema di diagonalizzabilità" and "Esempi" (pp. 167–169; the parameter there is called $t$). The end-of-chapter exercises (p. 170) are good practice.

## Towards the exam

The Linear Algebra and Geometry test has 10 multiple-choice questions (5 answers, one right) and 2 problems worth 11 points, which are marked only with at least 6 correct answers; it lasts 2 hours, with no calculator, and you may bring only a 4-page handwritten sheet. The 2026/27 exam sessions are on 22/01 and 05/02/2027 at 14:00. All the details are in lesson L01.

**What you need from this lesson for the exam.** Diagonalisability is **the** most frequent open problem: in the 2023–2026 exam sessions it appears as problem 11 in at least eight sessions out of fifteen.

| Exam session | What problem 11 asks |
|---|---|
| 24/01/2024 | for $k = 1$: eigenvalues with $m_a$ and $m_g$, diagonalisable? |
| 08/02/2024 | $k \in \C$: eigenvalues as $k$ varies, for which $k$ it is diagonalisable, basis of eigenvectors for $k = i$ |
| 10/06/2024 | $k = i$: eigenvalues with $m_a$, $m_g$; for which $k \in \C$ it is diagonalisable |
| 06/09/2024 | $k \in \R$: invertibility, basis of $\Ker A$, for which $k$ it is diagonalisable |
| 16/01/2025 | basis of $\Ker(A - kI)$, for which $k$ it is diagonalisable, $P$ and $D$ for $k = 0$ |
| 03/06/2025 | eigenvalues $1, k, k^2$; basis of the eigenspace of 1; multiplicities; for which $k$ |
| 10/07/2025 | triangular matrix with $k$: multiplicities, diagonalisability, $P$ and $D$ for $k = 1$ |
| 03/06/2026 | $k = i$: eigenvalues, multiplicities, bases of the eigenspaces; for which $k \in \C$ |

In the quiz: the eigenspace of a given eigenvalue (24/01/2024 q. 9; 10/06/2024 q. 6; 07/02/2025 q. 9; 05/02/2026 q. 9, the last three for endomorphisms of $\R_2[x]$), what follows from the characteristic polynomial (10/07/2024 q. 8), for which $k$ a triangular matrix is diagonalisable (02/09/2025 q. 6). Tutoring sheet 3 (exercises 7–10) is entirely on this.

> [!METHOD] The problem with the parameter, step by step
> 1. **$p_A(\lambda)$ as a function of $k$, factorised.** Expand along the row or column with the most zeros; often a factor $(a - \lambda)$ can be collected right away.
> 2. **Eigenvalues as functions of $k$.** Over $\R$, if a factor of degree two has negative discriminant for certain $k$, for those $k$ the answer is "not diagonalisable".
> 3. **Special values**: solve $\lambda_i(k) = \lambda_j(k)$ for every pair of eigenvalues. For all the other $k$ the eigenvalues are distinct and the matrix is diagonalisable.
> 4. **For every special value**: substitute $k$, find the multiple eigenvalue and compute $m_g = n - \rk(A - \lambda I_n)$.
> 5. **Conclusion in one sentence**: "$A$ is diagonalisable if and only if $k \neq \dots$" (or "$k < \dots$").
> 6. **If asked**, bases of the eigenspaces, $P$ (or $M$) and $D$, with the check $AP = PD$.

### Three real exam questions, solved

> [!EXAM] Exam of 24/01/2024, question 9
> *The matrix $A = \begin{pmatrix} 3 & -4 & 4 \\ 2 & -3 & 2 \\ 0 & 0 & -1 \end{pmatrix}$ has eigenvalue $\lambda = -1$. What is the eigenspace?* Among the answers: $\Span\big((2, 1, -1), (2, 1, 0)\big)$, $\Span\big((2, 1, -1)\big)$, $\Span\big((1, 0, -1), (1, 1, 0)\big)$ and others.
>
> Solution. $A + I_3 = \begin{pmatrix} 4 & -4 & 4 \\ 2 & -2 & 2 \\ 0 & 0 & 0 \end{pmatrix}$ has rank 1, so $V_{-1}$ has dimension $3 - 1 = 2$: the answer is the Span of **two** independent vectors that satisfy $x - y + z = 0$. $(1, 0, -1)$: $1 - 0 - 1 = 0$, yes; $(1, 1, 0)$: $1 - 1 + 0 = 0$, yes. Instead $(2, 1, 0)$ gives $2 - 1 = 1 \neq 0$. The right answer is $\Span\big((1, 0, -1), (1, 1, 0)\big)$.

> [!EXAM] Exam of 10/07/2024, question 8
> *Let $A$ be a square matrix with characteristic polynomial $t(t - 1)^2(t - 2)$. Which of the following is not automatically true?* ($A$ is not invertible; $A$ has eigenvalues $0, 1, 2$; $A$ has an eigenvalue with algebraic multiplicity 2; $A$ has a basis of eigenvectors; $A$ is $4 \times 4$.)
>
> Solution. From the polynomial: degree 4, so $A$ is $4 \times 4$; roots $0, 1, 2$ with $m_a(1) = 2$; $0$ is an eigenvalue, so $\det A = 0$ and $A$ is not invertible. But for the eigenvalue 1 we may have $m_g(1) = 1 < 2$, and then there is no basis of eigenvectors: **"$A$ has a basis of eigenvectors" is not automatic**.

> [!EXAM] Exam of 02/09/2025, question 6
> *For which value of $k$ is the matrix $\begin{pmatrix} 4 & k - 1 & k - 3 \\ 0 & 4 & 1 \\ 0 & 0 & 2 \end{pmatrix}$ diagonalisable?* (Answers: $k = 1, 2, 4, 0, 3$.)
>
> Solution. Triangular: eigenvalues $4$ ($m_a = 2$) and $2$ (simple). We need $m_g(4) = 2$, that is $\rk(A - 4I_3) = 1$, with $A - 4I_3 = \begin{pmatrix} 0 & k - 1 & k - 3 \\ 0 & 0 & 1 \\ 0 & 0 & -2 \end{pmatrix}$. If $k \neq 1$ the first two rows are independent (the first has a non-zero entry in the second column, the second does not) and the rank is 2. If $k = 1$ the first row is $(0, 0, -2)$, proportional to the other two: rank 1. Answer: $k = 1$.

### Mistakes to avoid

- Concluding "not diagonalisable" as soon as two eigenvalues coincide: you have to compute $m_g$.
- Computing $m_g$ for the simple eigenvalues (time wasted: it is 1) and forgetting it for the multiple ones.
- Computing the rank of $A - \lambda I$ with $k$ still generic instead of substituting the special value.
- Swapping the conditions of the theorem, or forgetting condition (1) over $\R$: with a factor $\lambda^2 + 1$ the matrix is not diagonalisable over $\R$, even if everything else is fine.
- Writing an eigenspace with the wrong number of generators: $\dim V_\lambda = n - \rk(A - \lambda I)$ tells you how many vectors you need.
- In problems over $\C$, making mistakes in the computations with $i$: remember $i^2 = -1$ and $\frac 1i = -i$.

> [!EXAM] The 4-page sheet
> From this lesson: "distinct eigenvalues $\Rightarrow$ independent eigenvectors; $n$ distinct $\Rightarrow$ diagonalisable"; "$V_\lambda = \Ker(A - \lambda I)$, $m_g = n - \rk(A - \lambda I)$"; "$1 \le m_g \le m_a$"; "diagonalisable $\iff$ (1) $n$ roots in $\K$ and (2) $m_a = m_g$ for every $\lambda$"; the recipe for the problem with a parameter in six lines.

## Quiz

```quiz
Q: The matrix $A = \begin{pmatrix} 1 & 2 & -2 \\ 0 & 3 & 0 \\ 0 & 0 & 3 \end{pmatrix}$ has eigenvalue $\lambda = 3$. What is the eigenspace $V_3$?
+ $\Span\big((1, 1, 0), (-1, 0, 1)\big)$
- $\Span\big((1, 1, 0)\big)$
- $\Span\big((1, 0, 0)\big)$
- $\Span\big((1, 1, 0), (1, 0, 1)\big)$
- $\Span\big((1, 0, 0), (0, 1, 1)\big)$
= $A - 3I_3 = \begin{pmatrix} -2 & 2 & -2 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$ has rank 1, so $\dim V_3 = 2$ and the equation is $x = y - z$. $(1, 1, 0)$ and $(-1, 0, 1)$ satisfy it and are independent. A line is not enough; $(1, 0, 1)$ and $(1, 0, 0)$ do not satisfy $x = y - z$ ($(1, 0, 0)$ is an eigenvector, but with eigenvalue 1; $(1, 0, 1)$ is not an eigenvector). Similar to the exam of 24/01/2024, question 9.

Q: The endomorphism $T : \R_2[x] \to \R_2[x]$, $T(a + bx + cx^2) = (a + c) + 2bx + (a + c)x^2$, has eigenvalue $2$. What is the eigenspace $V_2$?
+ $\Span(x,\ 1 + x^2)$
- $\Span(1 + x^2)$
- $\Span(x,\ 1 - x^2)$
- $\Span(1,\ x^2)$
- $\Span(x)$
= In the basis $\{1, x, x^2\}$ the matrix is $\begin{pmatrix} 1 & 0 & 1 \\ 0 & 2 & 0 \\ 1 & 0 & 1 \end{pmatrix}$ and $A - 2I_3 = \begin{pmatrix} -1 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & -1 \end{pmatrix}$: equation $a = c$, with $b$ free. Solutions: $(0, 1, 0) \to x$ and $(1, 0, 1) \to 1 + x^2$. Check: $T(x) = 2x$ and $T(1 + x^2) = 2 + 2x^2$. Instead $T(1 - x^2) = 0$: eigenvalue 0. Similar to the exams of 10/06/2024 (question 6), 07/02/2025 (question 9) and 05/02/2026 (question 9).

Q: A matrix $A$ has characteristic polynomial $p_A(\lambda) = (\lambda - 2)^2(\lambda + 1)(\lambda - 3)$. Which statement is **not** necessarily true?
+ $A$ is diagonalisable.
- $A$ is a $4 \times 4$ matrix.
- $A$ is invertible.
- $A$ has an eigenvalue with algebraic multiplicity 2.
- $\det A = -12$.
= The degree is 4, so $A$ is $4 \times 4$; $\det A = p_A(0) = 4 \cdot 1 \cdot (-3) = -12 \neq 0$, so $A$ is invertible; $m_a(2) = 2$. But $m_g(2)$ can be 1: for example with a block $\begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$ on the diagonal the matrix is not diagonalisable. Similar to the exam of 10/07/2024, question 8.

Q: For which value of $k$ is the matrix $\begin{pmatrix} 3 & k - 2 & k \\ 0 & 3 & 1 \\ 0 & 0 & 1 \end{pmatrix}$ diagonalisable?
+ $k = 2$
- $k = 0$
- $k = 3$
- $k = 1$
- $k = -2$
= Eigenvalues $3$ ($m_a = 2$) and $1$. We need $\rk(A - 3I_3) = 1$ with $A - 3I_3 = \begin{pmatrix} 0 & k - 2 & k \\ 0 & 0 & 1 \\ 0 & 0 & -2 \end{pmatrix}$: if $k \neq 2$ the first two rows are independent and the rank is 2 ($m_g(3) = 1$); if $k = 2$ all the rows are proportional to $(0, 0, 1)$, rank 1, $m_g(3) = 2$. Similar to the exam of 02/09/2025, question 6.

Q: For $A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{pmatrix}$, the multiplicities of the eigenvalue 2 are:
+ $m_a(2) = 3$, $m_g(2) = 2$
- $m_a(2) = 3$, $m_g(2) = 3$
- $m_a(2) = 3$, $m_g(2) = 1$
- $m_a(2) = 2$, $m_g(2) = 2$
- $m_a(2) = 1$, $m_g(2) = 1$
= $p_A(\lambda) = (2 - \lambda)^3$, so $m_a(2) = 3$. $A - 2I_3 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$ has rank 1, so $m_g(2) = 3 - 1 = 2$. Since $2 < 3$, $A$ is not diagonalisable.

Q: Let $A = \begin{pmatrix} 5 & 1 & 0 \\ 0 & 5 & 0 \\ 0 & 0 & 5 \end{pmatrix}$. What is $\dim \Ker(A - 5I_3)$?
N: 2
= $A - 5I_3 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$ has rank 1, so $\dim \Ker = 3 - 1 = 2$ (it is $m_g(5)$; a basis is $e_1, e_3$). Similar to part (1) of problem 11 of the exam of 16/01/2025 (a basis of $\Ker(A - kI)$).

Q: Which of these statements is true?
+ If $A \in M(3, \R)$ has three distinct real eigenvalues, then $A$ is diagonalisable.
- If $A \in M(n, \R)$ is diagonalisable, then it has $n$ distinct eigenvalues.
- The geometric multiplicity of an eigenvalue can be 0.
- It can happen that $m_g(\lambda) > m_a(\lambda)$.
- The eigenspaces of an endomorphism $T : V \to V$ always have sum equal to $V$.
= The first is Corollary 18.2. Counterexamples to the others: $I_n$ is diagonal with a single eigenvalue; $m_g(\lambda) \ge 1$ because an eigenvalue has at least one eigenvector, and $m_g \le m_a$ by Theorem 18.9; for $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ the only eigenspace is a line of $\R^2$.

Q: Which of these matrices is diagonalisable over $\C$ but **not** over $\R$?
+ $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$
= $\lambda^2 + 1$ has distinct roots $\pm i$: diagonalisable over $\C$, and over $\R$ condition (1) fails. The second and the fourth have a double eigenvalue with $m_g = 1$ (not diagonalisable over any field); the third (eigenvalues 1, 2) and the fifth (eigenvalues 1, 3) have two distinct real eigenvalues and are diagonalisable over both.

Q: Let $A = \begin{pmatrix} k & 0 & 0 \\ 0 & 0 & -1 \\ 0 & 1 & 0 \end{pmatrix}$ with $k \in \C$. For which $k$ is the matrix diagonalisable over $\C$?
+ For every $k \in \C$.
- For every $k \neq \pm i$.
- For no $k$.
- Only for $k \in \R$.
- Only for $k = 0$.
= $p_A(\lambda) = (k - \lambda)(\lambda^2 + 1)$: eigenvalues $k$, $i$, $-i$. If $k \neq \pm i$ they are distinct. If $k = i$: $m_a(i) = 2$ and $A - iI_3 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & -i & -1 \\ 0 & 1 & -i \end{pmatrix}$ has rank 1 (the second row is the third multiplied by $-i$), so $m_g(i) = 2$: diagonalisable; the same for $k = -i$. Similar to problems 11 of the exams of 10/06/2024 and 03/06/2026, where however for $k = i$ the rank was 2 and the matrix was not diagonalisable: at the special values you must always compute.

Q: Let $A \in M(4, \R)$ with $\rk(A - 3I_4) = 1$. Which statement is necessarily true?
+ $3$ is an eigenvalue with $m_a(3) \ge 3$.
- $A$ is diagonalisable.
- $A$ is not invertible.
- $m_g(3) = 1$.
- $3$ is not an eigenvalue.
= $m_g(3) = 4 - 1 = 3$, and $m_a(3) \ge m_g(3) = 3$ (Theorem 18.9). Nothing else follows: $\mathrm{diag}(3, 3, 3, 5)$ is diagonalisable and invertible; instead $3I_4$ with a 1 in position $(3, 4)$ (that is, with the block $\begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}$ in the last two places of the diagonal) still has $\rk(A - 3I_4) = 1$, but $m_a(3) = 4 > 3 = m_g(3)$: not diagonalisable.
```

## Exercises

::: exercise intermediate Exercise 18.13 of the handouts: eigenspaces and a basis of eigenvectors
Consider the matrix $A = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 3 & 0 \\ 0 & 0 & 3 \end{pmatrix}$.
(1) Compute the characteristic polynomial of $A$ and determine the eigenvalues.
(2) Find the corresponding eigenspaces.
(3) Compute the algebraic and geometric multiplicity of each eigenvalue.
(4) Decide whether $A$ is diagonalisable.
(5) If so, find a basis of $\R^3$ made of eigenvectors.
::: solution
(1) $A$ is upper triangular, so $p_A(\lambda) = (2 - \lambda)(3 - \lambda)^2$. Eigenvalues: $2$ and $3$.

(2) $V_2 = \Ker(A - 2I_3)$ with $A - 2I_3 = \begin{pmatrix} 0 & 1 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$: from the third row $z = 0$, from the second $y = 0$; $x$ free. $V_2 = \Span\big((1, 0, 0)\big)$.

$V_3 = \Ker(A - 3I_3)$ with $A - 3I_3 = \begin{pmatrix} -1 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$: a single equation $-x + y + z = 0$, that is $x = y + z$. With $(y, z) = (1, 0)$ and $(0, 1)$: $V_3 = \Span\big((1, 1, 0), (1, 0, 1)\big)$.

(3) $m_a(2) = 1 = m_g(2)$; $m_a(3) = 2$ and $m_g(3) = \dim V_3 = 3 - \rk(A - 3I_3) = 3 - 1 = 2$.

(4) All the roots are real and $m_a = m_g$ for both eigenvalues: by Theorem 18.10 $A$ is diagonalisable.

(5) $\mathcal B = \{(1, 0, 0), (1, 1, 0), (1, 0, 1)\}$. Check: $A(1, 1, 0) = (3, 3, 0)$ and $A(1, 0, 1) = (3, 0, 3)$. With $M$ = these vectors as columns ($\det M = 1$) and $D = \mathrm{diag}(2, 3, 3)$ we have $AM = MD$.
:::

::: exercise intermediate Exercise 18.14 of the handouts: same polynomial, different behaviour
Consider the two matrices $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$ and $B = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$.
(1) Check that $A$ and $B$ have the same characteristic polynomial.
(2) Compute the geometric multiplicity of the eigenvalue 1 for both matrices.
(3) Decide which of the two matrices is diagonalisable.
::: solution
(1) Both are triangular with diagonal $1, 1, 2$: $p_A(\lambda) = p_B(\lambda) = (1 - \lambda)^2(2 - \lambda)$.

(2) $A - I_3 = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ has rank 1: $m_g^A(1) = 3 - 1 = 2$. $B - I_3 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$ has rank 2: $m_g^B(1) = 3 - 2 = 1$.

(3) In both $m_a(1) = 2$. For $A$: $m_g = 2 = m_a$ ($A$ is already diagonal). For $B$: $m_g = 1 < 2$, so $B$ is **not** diagonalisable.

Consequence: $A$ and $B$ **are not similar**, even though they have the same characteristic polynomial (so the same eigenvalues, trace and determinant). If they were, $B$ would be similar to a diagonal matrix, that is diagonalisable. The characteristic polynomial is not enough to recognise similar matrices.
:::

::: exercise basic A double eigenvalue with a single line of eigenvectors
Decide whether $A = \begin{pmatrix} 5 & -1 \\ 1 & 3 \end{pmatrix}$ is diagonalisable.
::: solution
$\tr A = 8$, $\det A = 15 + 1 = 16$, so $p_A(\lambda) = \lambda^2 - 8\lambda + 16 = (\lambda - 4)^2$: a single eigenvalue, $4$, with $m_a(4) = 2$.

$A - 4I_2 = \begin{pmatrix} 1 & -1 \\ 1 & -1 \end{pmatrix}$ has rank 1 (equal rows), so $m_g(4) = 2 - 1 = 1 < 2$. It is not diagonalisable. The eigenvectors are the non-zero multiples of $(1, 1)$.

Another way: if it were diagonalisable with the only eigenvalue 4, it would be similar to $4I_2$, and so equal to $4I_2$ (exercise 8). But $A \neq 4I_2$.
:::

::: exercise intermediate A double eigenvalue that works: find $M$ and $D$
Let $A = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 3 & 0 \\ -2 & 0 & 3 \end{pmatrix}$. Show that it is diagonalisable and find $M$ and $D$ with $D = M^{-1}AM$.
::: solution
$A$ is lower triangular: $p_A(\lambda) = (1 - \lambda)(3 - \lambda)^2$. Eigenvalues $1$ ($m_a = 1$) and $3$ ($m_a = 2$).

$A - 3I_3 = \begin{pmatrix} -2 & 0 & 0 \\ 2 & 0 & 0 \\ -2 & 0 & 0 \end{pmatrix}$: all the rows are multiples of $(1, 0, 0)$, rank 1, so $m_g(3) = 2 = m_a(3)$. $A$ is diagonalisable. The only equation is $x = 0$: $V_3 = \Span(e_2, e_3)$.

$A - I_3 = \begin{pmatrix} 0 & 0 & 0 \\ 2 & 2 & 0 \\ -2 & 0 & 2 \end{pmatrix}$: $x + y = 0$ and $-x + z = 0$, that is $y = -x$, $z = x$. $V_1 = \Span\big((1, -1, 1)\big)$.

$$M = \begin{pmatrix} 1 & 0 & 0 \\ -1 & 1 & 0 \\ 1 & 0 & 1 \end{pmatrix}, \qquad D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 3 \end{pmatrix}.$$
$\det M = 1$. Check $AM = MD$: $A(1, -1, 1) = (1,\ 2 - 3,\ -2 + 3) = (1, -1, 1)$, $Ae_2 = (0, 3, 0)$, $Ae_3 = (0, 0, 3)$.
:::

::: exercise intermediate A parameter off the diagonal (tutoring sheet 3, exercise 7)
Determine for which $k \in \R$ the matrix $A = \begin{pmatrix} 1 & 1 & k \\ 0 & 1 & 0 \\ 0 & 1 & 2 \end{pmatrix}$ is diagonalisable.
::: solution
Expanding $\det(A - \lambda I_3)$ along the first column $(1 - \lambda, 0, 0)$:
$$p_A(\lambda) = (1 - \lambda)\det\begin{pmatrix} 1 - \lambda & 0 \\ 1 & 2 - \lambda \end{pmatrix} = (1 - \lambda)^2(2 - \lambda).$$
The eigenvalues do not depend on $k$: $1$ with $m_a = 2$ and $2$ simple. Everything is decided by $m_g(1)$:
$$A - I_3 = \begin{pmatrix} 0 & 1 & k \\ 0 & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix}.$$
The non-zero rows are $(0, 1, k)$ and $(0, 1, 1)$: they are proportional (in fact equal) only if $k = 1$. So $\rk(A - I_3) = 1$ if $k = 1$ and $= 2$ if $k \neq 1$.

- $k = 1$: $m_g(1) = 2 = m_a(1)$, **diagonalisable**. ($V_1 = \Span\big((1, 0, 0), (0, -1, 1)\big)$, $V_2 = \Span\big((1, 0, 1)\big)$.)
- $k \neq 1$: $m_g(1) = 1 < 2$, not diagonalisable.

$A$ is diagonalisable if and only if $k = 1$.
:::

::: exercise intermediate Transposition as an endomorphism (tutoring sheet 3, exercise 8.1)
Let $T : M(2, \R) \to M(2, \R)$, $T(A) = {}^tA$. Find eigenvalues and eigenspaces and decide whether $T$ is diagonalisable.
::: solution
In the basis $E_{11}, E_{12}, E_{21}, E_{22}$ (a 1 in the indicated position, zeros elsewhere): $T(E_{11}) = E_{11}$, $T(E_{12}) = E_{21}$, $T(E_{21}) = E_{12}$, $T(E_{22}) = E_{22}$, so
$$[T] = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}, \qquad p_T(\lambda) = (1 - \lambda)^2(\lambda^2 - 1) = (\lambda - 1)^3(\lambda + 1)$$
(the central block $\begin{pmatrix} -\lambda & 1 \\ 1 & -\lambda \end{pmatrix}$ has determinant $\lambda^2 - 1$).

Without computations, from the equation ${}^tA = \lambda A$:
- $\lambda = 1$: ${}^tA = A$, the **symmetric** matrices. $V_1 = \Span\left(\begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}, \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\right)$, dimension 3.
- $\lambda = -1$: ${}^tA = -A$, the **skew-symmetric** matrices. $V_{-1} = \Span\left(\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}\right)$, dimension 1.

$m_g(1) = 3 = m_a(1)$ and $m_g(-1) = 1 = m_a(-1)$: $T$ is diagonalisable, and in the basis formed by these four matrices $[T] = \mathrm{diag}(1, 1, 1, -1)$ (it is Example 5.1.14 of Martelli's book). In particular every $2 \times 2$ matrix is in a unique way the sum of a symmetric and a skew-symmetric one: $M(2, \R) = V_1 \oplus V_{-1}$.
:::

::: exercise intermediate An endomorphism of $\R_2[x]$ with complex eigenvalues (tutoring sheet 3, exercise 8.2)
Let $T : \R_2[x] \to \R_2[x]$, $T(p) = p(0) + p(1)\,x + p(-1)\,x^2$. Find the real eigenvalues and the corresponding eigenvectors. Is $T$ diagonalisable?
::: solution
In the basis $\{1, x, x^2\}$: $T(1) = 1 + x + x^2$, $T(x) = 0 + x - x^2$, $T(x^2) = 0 + x + x^2$, so
$$[T] = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & 1 \\ 1 & -1 & 1 \end{pmatrix}.$$
Expanding along the first row $(1 - \lambda, 0, 0)$:
$$p_T(\lambda) = (1 - \lambda)\det\begin{pmatrix} 1 - \lambda & 1 \\ -1 & 1 - \lambda \end{pmatrix} = (1 - \lambda)\big((1 - \lambda)^2 + 1\big).$$
The second factor never vanishes over $\R$ ($(1 - \lambda)^2 + 1 \ge 1$): the other roots are $1 \pm i$. The only real eigenvalue is $1$.

$[T] - I_3 = \begin{pmatrix} 0 & 0 & 0 \\ 1 & 0 & 1 \\ 1 & -1 & 0 \end{pmatrix}$: $x + z = 0$ and $x - y = 0$ (here $x, y, z$ are the coordinates), so $(1, 1, -1)$: the polynomial $1 + x - x^2$. Check: with $p = 1 + x - x^2$, $p(0) = 1$, $p(1) = 1$, $p(-1) = 1 - 1 - 1 = -1$, and $T(p) = 1 + x - x^2 = p$.

$T$ is **not** diagonalisable over $\R$: condition (1) of Theorem 18.10 fails.
:::

::: exercise hard A single eigenvalue and diagonalisable: then it is $\lambda I$
(a) Prove that if $A \in M(n, \K)$ has a single eigenvalue $\lambda$ and is diagonalisable, then $A = \lambda I_n$. (b) Deduce in one line that $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ is not diagonalisable.
::: solution
(a) If $A$ is diagonalisable, $M^{-1}AM = D$ with $D$ diagonal, and on the diagonal of $D$ there are the eigenvalues, so only $\lambda$: $D = \lambda I_n$. Then
$$A = MDM^{-1} = M(\lambda I_n)M^{-1} = \lambda MM^{-1} = \lambda I_n.$$
(Another way: $m_g(\lambda) = m_a(\lambda) = n$, so $V_\lambda = V$ and $Av = \lambda v$ for every $v$.)

(b) It has the only eigenvalue 1 and is not $I_2$: if it were diagonalisable it would be $I_2$.
:::

::: exercise hard Two eigenspaces have zero intersection
Let $\lambda \neq \mu$ be two eigenvalues of $T$. (a) Prove directly that $V_\lambda \cap V_\mu = \{0\}$. (b) Deduce that $V_\lambda$ and $V_\mu$ are in direct sum. (c) Why, with three eigenspaces, is it not enough to check the intersections two at a time?
::: solution
(a) If $v \in V_\lambda \cap V_\mu$, then $T(v) = \lambda v$ and $T(v) = \mu v$. Subtracting, $(\lambda - \mu)v = 0$, and since $\lambda - \mu \neq 0$ we get $v = 0$.

(b) If $v_1 + v_2 = 0$ with $v_1 \in V_\lambda$ and $v_2 \in V_\mu$, then $v_1 = -v_2$ lies in both eigenspaces (an eigenspace contains the opposites of its vectors), so $v_1 = 0$ by part (a), and then $v_2 = 0$. It is the equivalent form of Definition 18.4.

(c) For three subspaces the pairwise intersections can be zero without the sum being direct: the lines $\Span(e_1)$, $\Span(e_2)$, $\Span(e_1 + e_2)$ of $\R^3$ meet two at a time only in $0$, but $e_1 + e_2 - (e_1 + e_2) = 0$. For eigenspaces the sum is direct anyway, but you need Proposition 18.1 (proof by induction), not just part (a).
:::

::: exercise exam As at the exam: a real parameter
Consider the matrix $A = \begin{pmatrix} k & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 1 & 2 \end{pmatrix}$ with $k \in \R$.
(1) Compute the eigenvalues of $A$ as $k$ varies.
(2) Determine for which values of $k$ the matrix is diagonalisable.
(3) For $k = 0$, find $M$ invertible and $D$ diagonal with $D = M^{-1}AM$.
::: solution
(1) Expanding $\det(A - \lambda I_3)$ along the first column $(k - \lambda, 0, 0)$:
$$p_A(\lambda) = (k - \lambda)\det\begin{pmatrix} 1 - \lambda & 0 \\ 1 & 2 - \lambda \end{pmatrix} = (k - \lambda)(1 - \lambda)(2 - \lambda).$$
Eigenvalues: $k$, $1$, $2$.

(2) They are all real. If $k \neq 1$ and $k \neq 2$ they are distinct: diagonalisable. Special values:
- $k = 1$: eigenvalue $1$ with $m_a = 2$. $A - I_3 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix}$ has non-zero rows $(0, 1, 0)$ and $(0, 1, 1)$, independent: rank 2, $m_g(1) = 1 < 2$. **Not** diagonalisable.
- $k = 2$: eigenvalue $2$ with $m_a = 2$. $A - 2I_3 = \begin{pmatrix} 0 & 1 & 0 \\ 0 & -1 & 0 \\ 0 & 1 & 0 \end{pmatrix}$ has all its rows multiples of $(0, 1, 0)$: rank 1, $m_g(2) = 2 = m_a(2)$. Diagonalisable.

Conclusion: $A$ is diagonalisable if and only if $k \neq 1$.

(3) With $k = 0$ the eigenvalues are $0, 1, 2$.
- $\lambda = 0$: $A = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 1 & 2 \end{pmatrix}$: $y = 0$, then $2z = 0$; $x$ free. Eigenvector $(1, 0, 0)$.
- $\lambda = 1$: $A - I_3 = \begin{pmatrix} -1 & 1 & 0 \\ 0 & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix}$: $y = x$ and $z = -y$. Eigenvector $(1, 1, -1)$.
- $\lambda = 2$: $A - 2I_3 = \begin{pmatrix} -2 & 1 & 0 \\ 0 & -1 & 0 \\ 0 & 1 & 0 \end{pmatrix}$: $y = 0$, then $x = 0$; $z$ free. Eigenvector $(0, 0, 1)$.
$$M = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & -1 & 1 \end{pmatrix}, \qquad D = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}.$$
$\det M = 1$ (block triangular). Check $AM = MD$: $A(1, 0, 0) = (0, 0, 0)$, $A(1, 1, -1) = (1, 1, -1)$, $A(0, 0, 1) = (0, 0, 2)$.
:::

::: exercise exam As at the exam: a complex parameter
Consider $A = \begin{pmatrix} k & 0 & 0 \\ 1 & 0 & -4 \\ 0 & 1 & 0 \end{pmatrix} \in M(3, \C)$ with $k \in \C$.
(1) Setting $k = 2i$, compute the eigenvalues with algebraic and geometric multiplicity and a basis of each eigenspace. Is $A$ diagonalisable?
(2) Determine for which $k \in \C$ the matrix is diagonalisable over $\C$. And over $\R$, for real $k$?
::: solution
Characteristic polynomial, expanding along the first row $(k - \lambda, 0, 0)$:
$$p_A(\lambda) = (k - \lambda)\det\begin{pmatrix} -\lambda & -4 \\ 1 & -\lambda \end{pmatrix} = (k - \lambda)(\lambda^2 + 4).$$
From $\lambda^2 = -4$: $\lambda = \pm 2i$. Eigenvalues: $k$, $2i$, $-2i$.

(1) With $k = 2i$: $\lambda = 2i$ with $m_a = 2$, and $\lambda = -2i$ with $m_a = 1$ (so $m_g(-2i) = 1$).
$$A - 2iI_3 = \begin{pmatrix} 0 & 0 & 0 \\ 1 & -2i & -4 \\ 0 & 1 & -2i \end{pmatrix}.$$
The rows $(1, -2i, -4)$ and $(0, 1, -2i)$ are independent (the second has 0 in the first position, the first does not): rank 2, $m_g(2i) = 3 - 2 = 1 < 2$. **Not** diagonalisable.

Bases: from the third row $y = 2iz$; from the second $x = 2iy + 4z = 2i \cdot 2iz + 4z = -4z + 4z = 0$. With $z = 1$: $V_{2i} = \Span\big((0, 2i, 1)\big)$. For $-2i$: $A + 2iI_3 = \begin{pmatrix} 4i & 0 & 0 \\ 1 & 2i & -4 \\ 0 & 1 & 2i \end{pmatrix}$ gives $x = 0$, $y = -2iz$ (and the second row checks out: $2i \cdot (-2i) - 4 = 4 - 4 = 0$). $V_{-2i} = \Span\big((0, -2i, 1)\big)$. Check: $A(0, 2i, 1) = (0,\ -4,\ 2i) = 2i\,(0, 2i, 1)$.

(2) Over $\C$ condition (1) always holds. If $k \neq \pm 2i$ the eigenvalues are distinct: diagonalisable. For $k = 2i$ no (part 1); for $k = -2i$, with the same computation, $A + 2iI_3 = \begin{pmatrix} 0 & 0 & 0 \\ 1 & 2i & -4 \\ 0 & 1 & 2i \end{pmatrix}$ has rank 2 and $m_g(-2i) = 1 < 2$: no. So: diagonalisable over $\C$ if and only if $k \neq \pm 2i$.

Over $\R$ (with real $k$) **never**: the factor $\lambda^2 + 4$ has no real roots. Compare with question 9 of the quiz: there, at the special value, the matrix was diagonalisable. The difference that matters is the 1 in position $(2, 1)$, which is there here and not in the quiz: without it the second row of $A - 2iI_3$ would be $(0, -2i, -4) = -2i \cdot (0, 1, -2i)$, the rank would drop to 1 and $m_g(2i)$ would rise to 2.
:::

## Review questions

::: question Why are eigenvectors with distinct eigenvalues independent?
From a zero combination $\sum \alpha_i v_i = 0$ you apply $T$ and subtract $\lambda_k$ times the combination: $v_k$ disappears and coefficients $\alpha_i(\lambda_i - \lambda_k)$ remain on $k - 1$ eigenvectors. By induction they are zero, and since $\lambda_i \neq \lambda_k$ you get $\alpha_i = 0$ (Proposition 18.1).
:::

::: question What does Corollary 18.2 say, and does the converse hold?
If $p_T$ has $n$ distinct roots in $\K$, $T$ is diagonalisable. The converse is false: $I_n$ is diagonal and has a single eigenvalue.
:::

::: question What is the eigenspace $V_\lambda$? Why is it a subspace?
$V_\lambda = \{v \mid T(v) = \lambda v\} = \Ker(T - \lambda\,\id)$: the eigenvectors of $\lambda$ plus the zero vector. It is the kernel of a linear map, so a subspace.
:::

::: question When is a sum of subspaces called direct?
When every vector of the sum can be written in only one way as $v_1 + \dots + v_k$ with $v_i \in V_i$; equivalently, when $v_1 + \dots + v_k = 0$ implies $v_1 = \dots = v_k = 0$.
:::

::: question What is the link between eigenspaces and diagonalisability?
The eigenspaces are always in direct sum (Proposition 18.5), and $T$ is diagonalisable if and only if their sum is $V$, that is if their dimensions add up to $n$ (Corollary 18.6).
:::

::: question What is the difference between algebraic and geometric multiplicity? How are they computed?
$m_a(\lambda)$ is the multiplicity of $\lambda$ as a root of $p_T$ (read from the factorised polynomial); $m_g(\lambda) = \dim V_\lambda = n - \rk(A - \lambda I_n)$.
:::

::: question What does Theorem 18.9 say? What practical consequence does it have?
$1 \le m_g(\lambda) \le m_a(\lambda)$. So for a simple eigenvalue ($m_a = 1$) you immediately have $m_g = 1$: the rank needs to be computed only for the multiple eigenvalues.
:::

::: question State the diagonalisability theorem.
$T : V \to V$, with $\dim V = n$, is diagonalisable if and only if (1) $p_T$ has $n$ roots in $\K$ counted with multiplicity and (2) $m_a(\lambda) = m_g(\lambda)$ for every eigenvalue $\lambda$.
:::

::: question Why can the same matrix be diagonalisable over $\C$ and not over $\R$?
Because condition (1) depends on the field: $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ has $p(\lambda) = \lambda^2 + 1$, with no real roots but with two distinct complex roots $\pm i$.
:::

::: question How do you tackle a matrix with a parameter $k$?
You compute $p_A$ factorised as a function of $k$, find the eigenvalues, and identify the $k$ at which two eigenvalues coincide (and, over $\R$, those at which real roots are missing). For the other $k$ the matrix is diagonalisable; at the special values you substitute $k$ and compute $m_g = n - \rk(A - \lambda I_n)$.
:::

::: question In Example 18.12, why is the matrix diagonalisable for $k = 1$ and not for $k = 5$?
For $k = 1$ the eigenvalue 2 is double and $\rk(A - 2I_3) = 1$, so $m_g(2) = 2 = m_a(2)$. For $k = 5$ the eigenvalue 0 is double but $\rk(A) = 2$, so $m_g(0) = 1 < 2$.
:::

::: question Are two matrices with the same characteristic polynomial similar?
Not always: $\mathrm{diag}(1, 1, 2)$ and $\begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}$ have the same polynomial, but the first is diagonalisable and the second is not (Exercise 18.14).
:::

## Glossary

```glossary
Independent eigenvectors | Eigenvectors with distinct eigenvalues are always linearly independent (Proposition 18.1).
Distinct-eigenvalue criterion | If $p_T$ has $n$ distinct roots in $\K$, $T$ is diagonalisable (Corollary 18.2); the converse does not hold.
Eigenspace $V_\lambda$ | $\{v \mid T(v) = \lambda v\} = \Ker(T - \lambda\,\id)$: eigenvectors of $\lambda$ plus zero (Definition 18.3).
Sum of subspaces | $V_1 + \dots + V_k$: all the vectors $v_1 + \dots + v_k$ with $v_i \in V_i$.
Direct sum $\oplus$ | Sum in which every vector can be written in a unique way; equivalently $v_1 + \dots + v_k = 0$ only with all the summands zero (Definition 18.4).
Multiplicity of a root | The largest $k$ such that $(x - a)^k$ divides the polynomial (Definition 4.3).
Algebraic multiplicity $m_a(\lambda)$ | Multiplicity of $\lambda$ as a root of the characteristic polynomial.
Geometric multiplicity $m_g(\lambda)$ | $\dim V_\lambda = n - \rk(A - \lambda I_n)$.
Simple eigenvalue | Eigenvalue with $m_a = 1$; then also $m_g = 1$.
Multiplicity inequalities | $1 \le m_g(\lambda) \le m_a(\lambda)$ (Theorem 18.9).
Diagonalisability theorem | Diagonalisable $\iff$ $n$ roots in $\K$ with multiplicity and $m_a = m_g$ for every eigenvalue (Theorem 18.10).
Shear | $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$: a double eigenvalue with a single line of eigenvectors; not diagonalisable.
Special value of the parameter | Value of $k$ at which two eigenvalues coincide: there the answer is decided by computing a rank.
Field of scalars | $\R$ or $\C$: diagonalisability depends on the field, because over $\R$ roots can be missing.
Basis of eigenvectors | Union of the bases of the eigenspaces; it exists if and only if $T$ is diagonalisable.
```

## Checklist

```checklist
- I can prove that two eigenvectors with distinct eigenvalues are independent, and I can state the general case.
- I can use the criterion "$n$ distinct eigenvalues $\Rightarrow$ diagonalisable" and I know that the converse is false.
- I can define the eigenspace $V_\lambda$ and I find a basis of it by solving $(A - \lambda I)x = 0$.
- I know what a direct sum of several subspaces is and why the eigenspaces are in direct sum.
- I can compute $m_a(\lambda)$ from the factorised polynomial and $m_g(\lambda) = n - \rk(A - \lambda I)$.
- I know that $1 \le m_g \le m_a$ and so I compute the rank only for the multiple eigenvalues.
- I can state the diagonalisability theorem and apply it step by step, over $\R$ and over $\C$.
- I can solve a problem with a parameter: eigenvalues as functions of $k$, special values, ranks, conclusion.
- I can build a basis of eigenvectors, $M$ and $D$, and check with $AM = MD$.
- I can explain why matrices with the same characteristic polynomial may not be similar.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 18 "Autovalori e autovettori II", pp. 90–95: sections 18.A (eigenvectors with distinct eigenvalues), 18.B (eigenspace), 18.C (multiplicity) and 18.D (diagonalisability theorem) are followed in order, with the page next to each heading; definitions, propositions and examples keep their numbering (Propositions 18.1, 18.5; Corollaries 18.2, 18.6; Definitions 18.3, 18.4, 18.7; Theorems 18.9, 18.10; Examples 18.8, 18.11, 18.12); Exercises 18.13 and 18.14 of section 18.E are solved in the exercises.
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §5.1.7 (summary of the $2 \times 2$ examples over $\R$ and $\C$), §5.2.1–5.2.6 (eigenvectors with distinct eigenvalues, eigenspaces, multiplicities with the complete proof of Theorem 18.9, diagonalisability theorem and examples), Example 5.1.14 (transposition).
- **Exam**: problems 11 of the exam sessions of 24/01/2024, 08/02/2024, 10/06/2024, 06/09/2024, 16/01/2025, 03/06/2025, 10/07/2025, 03/06/2026; questions 9 of 24/01/2024, 6 of 10/06/2024, 8 of 10/07/2024, 9 of 07/02/2025, 6 of 02/09/2025, 9 of 05/02/2026; tutoring sheet 3, 2025/26 (exercises 7–10). Official papers and solutions on the 2025/26 Moodle ([id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); the solutions reported here are written from scratch.
- The **"Beyond the handouts"** parts (the complete proof of Theorem 18.9, the table of the four behaviours, the matrix over $\C$, the added examples and exercises) serve to connect the lesson to the rest of the course and to the exam.
