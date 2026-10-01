---
course: MDAG
module: AG
lesson: L16
title: Linear maps III
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Part 2 · Linear Algebra and Geometry · Channels A, B and C · Lesson L16
description: >-
  Notes on lesson L16 of Linear Algebra and Geometry (MDAG, part 2): change-of-basis matrix, composition of linear
  maps and product of matrices, endomorphisms and similar matrices, with exam-style quizzes and worked exercises.
lede: >-
  How to go from the coordinates in one basis to the coordinates in another with the matrix $[\id]^{\mathcal B}_{\mathcal C}$,
  why composing two linear maps means multiplying their matrices, and how the matrix of an endomorphism changes when
  you change basis: $[f]^{\mathcal B}_{\mathcal B} = M^{-1}[f]^{\mathcal C}_{\mathcal C}M$. The matrices linked by
  this formula are called similar, and they are the starting point of eigenvalues.
material: handouts
facts:
  Handouts: lesson 16 · pp. 79–84
  Book: Martelli, §4.2.4, §4.3.3, §4.3.5 and §4.4
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 100–130 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 16 "Applicazioni lineari III"; B. Martelli, Geometria e algebra lineare, §4.2.4, §4.3 and §4.4
italian_file: L16_applicazioni_lineari_3.html
html_notes: notes/MDAG/L16_linear_maps_3.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L16_applicazioni_lineari_3.md
---

## In brief

- The **change-of-basis matrix** from $\mathcal B$ to $\mathcal C$ is $[\id]^{\mathcal B}_{\mathcal C}$: its column $j$ contains the coordinates of the $j$-th vector of $\mathcal B$ with respect to $\mathcal C$. Its inverse $[\id]^{\mathcal C}_{\mathcal B}$ goes the other way.
- It converts coordinates: $[v]_{\mathcal C} = [\id]^{\mathcal B}_{\mathcal C}\,[v]_{\mathcal B}$. If $\mathcal C$ is the standard basis of $\K^n$, you just put the vectors of $\mathcal B$ in columns.
- The **composition** of linear maps is linear, and in coordinates it becomes the **product** of the matrices: $L_A \circ L_B = L_{AB}$ and $[g \circ f]^{\mathcal B}_{\mathcal D} = [g]^{\mathcal C}_{\mathcal D}\,[f]^{\mathcal B}_{\mathcal C}$ (the basis in the middle "cancels").
- $f$ is an isomorphism if and only if its matrix is invertible, and then $[f^{-1}]^{\mathcal C}_{\mathcal B} = \big([f]^{\mathcal B}_{\mathcal C}\big)^{-1}$.
- To change the bases of a map you multiply on the left and on the right by change-of-basis matrices: $[f]^{\mathcal B_2}_{\mathcal C_2} = [\id_W]^{\mathcal C_1}_{\mathcal C_2}\,[f]^{\mathcal B_1}_{\mathcal C_1}\,[\id_V]^{\mathcal B_2}_{\mathcal B_1}$.
- An **endomorphism** is a linear map $f : V \to V$; you use the same basis at the start and at the end. With $M = [\id]^{\mathcal B}_{\mathcal C}$ we have $[f]^{\mathcal B}_{\mathcal B} = M^{-1}[f]^{\mathcal C}_{\mathcal C}M$.
- Two square matrices are **similar** if $A = M^{-1}BM$ with $M$ invertible: they describe the same endomorphism in different bases. Similarity is an equivalence relation.
- Similar matrices have the same **rank** and the same **determinant** (and, as you will see in lesson L17, the same characteristic polynomial). Having equal rank and determinant, though, is not enough to be similar.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## The change-of-basis matrix (pp. 79–80)

In lesson L15 you saw the associated matrix $[f]^{\mathcal B}_{\mathcal C}$: column $j$ contains the coordinates of $f(v_j)$ with respect to the target basis. Now we take as $f$ the simplest map of all, the identity $\id(v) = v$, but with **two different bases**. The result is a tool to translate coordinates from one basis to the other.

As in the handouts, the vectors of $\K^n$ are columns; in the text we write them as rows, $(1, 2)$, to save space.

### An example to start

In $\R^2$ take the basis $\mathcal B = \{v_1, v_2\}$ with $v_1 = (1, 1)$ and $v_2 = (1, -1)$, and the standard basis $\mathcal C = \{e_1, e_2\}$. A vector $v$ has coordinates $[v]_{\mathcal B} = (2, 1)$. Who is $v$? By definition of coordinates
$$v = 2v_1 + 1v_2 = 2(1, 1) + (1, -1) = (3, 1).$$
The same calculation can be written as a product, putting the vectors of $\mathcal B$ **in columns**:
$$\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} 2 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 + 1 \\ 2 - 1 \end{pmatrix} = \begin{pmatrix} 3 \\ 1 \end{pmatrix} = [v]_{\mathcal C}.$$
The matrix with columns $v_1, v_2$ turns the coordinates with respect to $\mathcal B$ into the coordinates with respect to $\mathcal C$. It is exactly $[\id]^{\mathcal B}_{\mathcal C}$: column $j$ is $[\id(v_j)]_{\mathcal C} = [v_j]_{\mathcal C}$.

> [!DEF] 16.1 · Change-of-basis matrix
> Let $V$ be a vector space and $\mathcal B = \{v_1, \dots, v_n\}$ and $\mathcal C = \{w_1, \dots, w_n\}$ two bases of $V$. The **change-of-basis matrix from $\mathcal B$ to $\mathcal C$** is the matrix
> $$A = [\id]^{\mathcal B}_{\mathcal C}.$$

Piece by piece:

- It is the matrix associated with the identity $\id : V \to V$, with $\mathcal B$ at the start (at the top) and $\mathcal C$ at the end (at the bottom). It is square $n \times n$.
- **Column $j$** of $A$ contains the coordinates of $v_j$ with respect to $\mathcal C$: $A^j = [v_j]_{\mathcal C}$.
- **The inverse** $A^{-1} = [\id]^{\mathcal C}_{\mathcal B}$ is the change-of-basis matrix from $\mathcal C$ to $\mathcal B$: its columns contain the coordinates of the vectors of $\mathcal C$ with respect to $\mathcal B$. (That it really is the inverse is proved by Corollary 16.7 below: the identity is an isomorphism and its inverse is again the identity.)

From Proposition 15.9 of lesson L15, $[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C}[v]_{\mathcal B}$, applied to $f = \id$, you get:

> [!PROP] 16.2
> For every $v \in V$
> $$[v]_{\mathcal C} = A \cdot [v]_{\mathcal B}.$$

> [!NOTE] A cross-reference to correct
> In the handouts, on p. 79, Proposition 16.2 is introduced with "From Proposition 15.10 we get". The result used is **Proposition 15.9** ($[f(v)]_{\mathcal C} = [f]^{\mathcal B}_{\mathcal C}[v]_{\mathcal B}$); number 15.10 is an example.

> [!PITFALL] Which way does the matrix go?
> $[\id]^{\mathcal B}_{\mathcal C}$ **takes** coordinates with respect to $\mathcal B$ (at the top) and **returns** coordinates with respect to $\mathcal C$ (at the bottom), and its columns are the vectors **of $\mathcal B$** written in the basis $\mathcal C$. The typical mistake is to use the matrix with the vectors of $\mathcal B$ in columns to go from standard coordinates to coordinates with respect to $\mathcal B$: for that you need the **inverse**.
>
> In the example: from $[v]_{\mathcal C} = (3, 1)$ you go back to $[v]_{\mathcal B}$ with $\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}^{-1} = \frac 12 \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$, and indeed $\frac 12 (3 + 1,\ 3 - 1) = (2, 1)$.

> [!METHOD] The change-of-basis matrix, two cases
> 1. **$\mathcal C$ is the standard basis of $\K^n$.** The coordinates of a vector with respect to the standard basis are its components, so $[\id]^{\mathcal B}_{\mathcal C}$ is written straight away: **the vectors of $\mathcal B$ in columns**, in order. If you need the opposite direction, $[\id]^{\mathcal C}_{\mathcal B}$, you compute the inverse.
> 2. **Neither of the two is standard.** Either you solve $n$ systems (one for each vector of $\mathcal B$, as in Solution 1 below), or you go through the standard basis $\mathcal E$: $[\id]^{\mathcal B}_{\mathcal C} = [\id]^{\mathcal E}_{\mathcal C}\,[\id]^{\mathcal B}_{\mathcal E} = \big([\id]^{\mathcal C}_{\mathcal E}\big)^{-1}[\id]^{\mathcal B}_{\mathcal E}$ (it is the composition rule you see in the next section).

### An example worked in two ways

The handouts call this example "Exercise 16.3" and solve it in the text, with two methods.

> [!EXAMPLE] Exercise 16.3 · From the standard basis to the basis $\mathcal B$
> Let $\mathcal A = \{e_1, e_2, e_3\}$ be the standard basis of $\R^3$ and $\mathcal B = \{w_1, w_2, w_3\}$ defined by
> $$w_1 = \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix}, \qquad w_2 = \begin{pmatrix} 0 \\ 2 \\ 1 \end{pmatrix}, \qquad w_3 = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}.$$
> We want to find the change-of-basis matrix $A = [\id]^{\mathcal A}_{\mathcal B}$.
>
> **Solution 1.** By construction $A = (a_{ij})$, where the $a_{ij}$ are the solutions of the system
> $$\begin{cases} e_1 = a_{11} w_1 + a_{21} w_2 + a_{31} w_3 \\ e_2 = a_{12} w_1 + a_{22} w_2 + a_{32} w_3 \\ e_3 = a_{13} w_1 + a_{23} w_2 + a_{33} w_3. \end{cases}$$
> The first equation, component by component, becomes
> $$\begin{cases} a_{11} = 1 \\ 2a_{11} + 2a_{21} + a_{31} = 0 \\ 3a_{11} + a_{21} + a_{31} = 0 \end{cases}$$
> With $a_{11} = 1$: $2a_{21} + a_{31} = -2$ and $a_{21} + a_{31} = -3$. Subtracting, $a_{21} = 1$, and then $a_{31} = -3 - 1 = -4$. In a similar way:
> - for $e_2$: $a_{12} = 0$, $2a_{22} + a_{32} = 1$, $a_{22} + a_{32} = 0$, so $a_{22} = 1$ and $a_{32} = -1$;
> - for $e_3$: $a_{13} = 0$, $2a_{23} + a_{33} = 0$, $a_{23} + a_{33} = 1$, so $a_{23} = -1$ and $a_{33} = 2$.
>
> Putting the solutions in columns:
> $$A = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & -1 \\ -4 & -1 & 2 \end{pmatrix}.$$
>
> **Solution 2.** We first compute $A^{-1} = [\id]^{\mathcal B}_{\mathcal A}$. Its column $j$ is $[w_j]_{\mathcal A}$, and since $\mathcal A$ is the standard basis $[w_j]_{\mathcal A} = w_j$. So
> $$A^{-1} = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 2 & 1 \\ 3 & 1 & 1 \end{pmatrix}, \qquad A = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 2 & 1 \\ 3 & 1 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & -1 \\ -4 & -1 & 2 \end{pmatrix}.$$

The inverse in Solution 2 is computed with cofactors (lesson L10). The determinant, expanding along the first row, is $1 \cdot (2 \cdot 1 - 1 \cdot 1) = 1$. The transposed cofactor matrix, divided by $\det = 1$, gives exactly $A$. Check on the first column: $1 \cdot w_1 + 1 \cdot w_2 - 4 \cdot w_3 = (1 + 0 - 0,\ 2 + 2 - 4,\ 3 + 1 - 4) = (1, 0, 0) = e_1$.

In the tool below the matrix is already $A^{-1}$ (the vectors of $\mathcal B$ in columns, that is written by rows as $1\ 0\ 0;\ 2\ 2\ 1;\ 3\ 1\ 1$). Press the button and watch the Gauss–Jordan moves that turn $(A^{-1} \mid I)$ into $(I \mid A)$.

```widget gauss
title: The inverse of $[\id]^{\mathcal B}_{\mathcal A}$ is $[\id]^{\mathcal A}_{\mathcal B}$
matrice: 1 0 0; 2 2 1; 3 1 1
modo: inversa
modi: inversa, determinante
```

## Composition of linear maps (pp. 80–81)

Besides the operations of sum and product by a scalar (lesson L15), linear maps can be **composed**: first you apply $f$, then $g$.

> [!EXAMPLE] · composing and multiplying
> Let $f, g : \R^2 \to \R^2$ with $f(x, y) = (x + y,\ y)$ and $g(u, v) = (2u,\ u - v)$. Then
> $$(g \circ f)(x, y) = g(x + y,\ y) = \big(2(x + y),\ (x + y) - y\big) = (2x + 2y,\ x).$$
> The matrices in the standard bases are $[f] = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$, $[g] = \begin{pmatrix} 2 & 0 \\ 1 & -1 \end{pmatrix}$, and the product
> $$[g]\,[f] = \begin{pmatrix} 2 & 0 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 2 \cdot 1 + 0 \cdot 0 & 2 \cdot 1 + 0 \cdot 1 \\ 1 \cdot 1 - 1 \cdot 0 & 1 \cdot 1 - 1 \cdot 1 \end{pmatrix} = \begin{pmatrix} 2 & 2 \\ 1 & 0 \end{pmatrix}$$
> is exactly the matrix of $g \circ f$. Check on a vector: $f(3, 5) = (8, 5)$ and $g(8, 5) = (16, 3)$; with the matrix, $(2 \cdot 3 + 2 \cdot 5,\ 3) = (16, 3)$.

> [!PROP] 16.4
> If $f : V \to W$ and $g : W \to Z$ are linear functions, the composition
> $$g \circ f : V \to Z$$
> is linear too.

> [!PROOF] of Proposition 16.4 (the handouts do not include it)
> For $v, v' \in V$ and $\lambda \in \K$:
> $$(g \circ f)(v + v') = g\big(f(v) + f(v')\big) = g(f(v)) + g(f(v')), \qquad (g \circ f)(\lambda v) = g\big(\lambda f(v)\big) = \lambda\, g(f(v)).$$
> In the first step of each chain you use the linearity of $f$, in the second that of $g$.

For maps of the form $L_A$ the composition corresponds precisely to the product of matrices:

> [!PROP] 16.5
> Let $A \in M(k, m, \K)$ and $B \in M(m, n, \K)$. Consider
> $$L_A : \K^m \to \K^k, \qquad L_B : \K^n \to \K^m.$$
> Then
> $$L_A \circ L_B = L_{AB}.$$

The handouts' explanation: for every $x \in \K^n$,
$$L_A(L_B(x)) = A(Bx) = (AB)x = L_{AB}(x),$$
where the middle step is the **associativity** of the product of matrices (lesson L08). The sizes match: $B$ is $m \times n$ and sends $\K^n$ to $\K^m$, then $A$ is $k \times m$ and sends $\K^m$ to $\K^k$; the product $AB$ is $k \times n$.

The same holds with any bases:

> [!PROP] 16.6
> Let $f : U \to V$ and $g : V \to W$ be two linear maps. Let $\mathcal B$, $\mathcal C$ and $\mathcal D$ be bases of $U$, $V$ and $W$. We find
> $$[g \circ f]^{\mathcal B}_{\mathcal D} = [g]^{\mathcal C}_{\mathcal D}\,[f]^{\mathcal B}_{\mathcal C}.$$

The handouts' proof, step by step:

1. Let $\mathcal B = \{v_1, \dots, v_n\}$. By definition of associated matrix, column $i$ of $[g \circ f]^{\mathcal B}_{\mathcal D}$ is $[g(f(v_i))]_{\mathcal D}$.
2. By Proposition 15.9 applied to $g$ and to the vector $f(v_i)$: $[g(f(v_i))]_{\mathcal D} = [g]^{\mathcal C}_{\mathcal D}\,[f(v_i)]_{\mathcal C}$.
3. On the other hand $[f(v_i)]_{\mathcal C}$ is column $i$ of $[f]^{\mathcal B}_{\mathcal C}$. And column $i$ of a product $XY$ is $X$ times column $i$ of $Y$.
4. So the two matrices have the same columns, that is they are equal. $\square$

> [!PITFALL] The order: read from right to left
> $g \circ f$ means "first $f$, then $g$", and in the product the matrix of $f$ is **on the right**: $[g][f]$. The product of matrices is not commutative, so $[f][g]$ is in general another matrix (or cannot even be computed, if the sizes do not match). A memory aid: in the formula the bases fit together like domino tiles, $[g]^{\mathcal C}_{\mathcal D}[f]^{\mathcal B}_{\mathcal C}$, and the basis $\mathcal C$ "in the middle" must be the same above and below.

> [!EXAMPLE] · composition with polynomials
> Let $f : \R^2 \to \R_2[x]$, $f(u, v) = u x^2 + v$, and $g : \R_2[x] \to \R^2$, $g(p) = (p(1),\ p(2))$. With the standard bases $\mathcal E$ of $\R^2$ and $\mathcal B = \{1, x, x^2\}$ of $\R_2[x]$:
> - $f(e_1) = x^2$ and $f(e_2) = 1$, with coordinates $(0, 0, 1)$ and $(1, 0, 0)$, so $[f]^{\mathcal E}_{\mathcal B} = \begin{pmatrix} 0 & 1 \\ 0 & 0 \\ 1 & 0 \end{pmatrix}$;
> - $g(1) = (1, 1)$, $g(x) = (1, 2)$, $g(x^2) = (1, 4)$, so $[g]^{\mathcal B}_{\mathcal E} = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 4 \end{pmatrix}$.
>
> By Proposition 16.6:
> $$[g \circ f]^{\mathcal E}_{\mathcal E} = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 4 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 0 & 0 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 4 & 1 \end{pmatrix}.$$
> Direct check: $(g \circ f)(u, v) = g(ux^2 + v) = (u + v,\ 4u + v)$, which has exactly this matrix.

### Isomorphisms and invertible matrices

> [!COROLLARY] 16.7
> The function $f$ is an isomorphism if and only if the associated matrix $[f]^{\mathcal B}_{\mathcal C}$ is invertible, and in this case its inverse is
> $$\big[f^{-1}\big]^{\mathcal C}_{\mathcal B}.$$

The handouts' proof, explained:

1. **($\Rightarrow$)** If $f$ is an isomorphism there exists $f^{-1} : W \to V$, and $f^{-1} \circ f = \id_V$, $f \circ f^{-1} = \id_W$. By Proposition 16.6 and Proposition 15.11 ($[\id]^{\mathcal B}_{\mathcal B} = I_n$):
$$[f^{-1}]^{\mathcal C}_{\mathcal B}\,[f]^{\mathcal B}_{\mathcal C} = [f^{-1} \circ f]^{\mathcal B}_{\mathcal B} = I_n \qquad\text{and}\qquad [f]^{\mathcal B}_{\mathcal C}\,[f^{-1}]^{\mathcal C}_{\mathcal B} = [f \circ f^{-1}]^{\mathcal C}_{\mathcal C} = I_n,$$
so $[f^{-1}]^{\mathcal C}_{\mathcal B}$ is the inverse of $[f]^{\mathcal B}_{\mathcal C}$.
2. **($\Leftarrow$)** If $A = [f]^{\mathcal B}_{\mathcal C}$ is invertible, by the theorem of lesson 15 on associated matrices (Theorem 15.12: every matrix is the matrix of a linear map) there exists a linear $g : W \to V$ with $[g]^{\mathcal C}_{\mathcal B} = A^{-1}$. Then $[g \circ f]^{\mathcal B}_{\mathcal B} = A^{-1}A = I_n = [\id_V]^{\mathcal B}_{\mathcal B}$, and since the matrix determines the map, $g \circ f = \id_V$; in the same way $f \circ g = \id_W$. So $g = f^{-1}$ and $f$ is an isomorphism.

In practice, to decide whether $f$ is an isomorphism it is enough to choose any two bases and check that the matrix is square with non-zero determinant.

> [!EXAMPLE] · an isomorphism between polynomials and pairs of numbers
> Let $f : \R_1[x] \to \R^2$, $f(p) = (p(0),\ p(1))$. With $\mathcal B = \{1, x\}$ and the standard basis: $f(1) = (1, 1)$ and $f(x) = (0, 1)$, so
> $$[f] = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}, \qquad \det [f] = 1 \neq 0.$$
> $f$ is an isomorphism, and $[f^{-1}] = [f]^{-1} = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$ (for a $2 \times 2$: you swap the diagonal entries, change the sign of the other two, divide by the determinant). So $f^{-1}(a, b)$ has coordinates $(a,\ b - a)$:
> $$f^{-1}(a, b) = a + (b - a)x.$$
> It is the polynomial of degree at most 1 that is $a$ at $0$ and $b$ at $1$: check, $p(0) = a$ and $p(1) = a + b - a = b$.

### Changing the bases of a map

> [!COROLLARY] 16.8
> Let $f : V \to W$ be a linear map. Let $\mathcal B_1, \mathcal B_2$ be two bases of $V$ and $\mathcal C_1, \mathcal C_2$ two bases of $W$. Applying Proposition 16.6 we find
> $$[f]^{\mathcal B_2}_{\mathcal C_2} = [\id_W]^{\mathcal C_1}_{\mathcal C_2} \cdot [f]^{\mathcal B_1}_{\mathcal C_1} \cdot [\id_V]^{\mathcal B_2}_{\mathcal B_1}.$$

This corollary tells us that to go from $[f]^{\mathcal B_1}_{\mathcal C_1}$ to $[f]^{\mathcal B_2}_{\mathcal C_2}$ it is enough to multiply on the left and on the right by change-of-basis matrices. The reason: $f = \id_W \circ f \circ \id_V$, and you apply Proposition 16.6 twice choosing the bases like domino tiles. It is read from right to left:

1. $[\id_V]^{\mathcal B_2}_{\mathcal B_1}$ translates the starting coordinates from $\mathcal B_2$ to $\mathcal B_1$;
2. $[f]^{\mathcal B_1}_{\mathcal C_1}$ applies $f$ in the bases you already know;
3. $[\id_W]^{\mathcal C_1}_{\mathcal C_2}$ translates the result from $\mathcal C_1$ to $\mathcal C_2$.

> [!EXAMPLE] · Example 15.8 redone with Corollary 16.8
> In lesson L15 the same $f : \R_2[x] \to \R^2$, $f(p) = (p(2), p(-2))$, had matrix $\begin{pmatrix} 1 & 2 & 4 \\ 1 & -2 & 4 \end{pmatrix}$ with the standard basis $\mathcal C$ at the end, and the basis $\mathcal C' = \{(1, -1), (0, 1)\}$ required three systems. With the corollary (at the start the basis does not change, so the factor on the right is $I_3$):
> - $[\id]^{\mathcal C'}_{\mathcal C} = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}$ (the vectors of $\mathcal C'$ in columns), so $[\id]^{\mathcal C}_{\mathcal C'} = \begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix}^{-1} = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$;
> - $$[f]^{\mathcal B}_{\mathcal C'} = [\id]^{\mathcal C}_{\mathcal C'}\,[f]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 2 & 4 \\ 1 & -2 & 4 \end{pmatrix} = \begin{pmatrix} 1 & 2 & 4 \\ 2 & 0 & 8 \end{pmatrix}.$$
>
> It is the matrix of Example 15.8. (The same calculation is Example 4.3.14 of Martelli's book.)

## Endomorphisms and similar matrices (pp. 81–83)

> [!DEF] 16.9 · Endomorphism
> Let $V$ be a vector space. An **endomorphism** is a linear map
> $$f : V \to V.$$

Examples you already know: every $L_A$ with $A$ square $n \times n$ is an endomorphism of $\K^n$; the derivative is an endomorphism of $\R_n[x]$; transposition $A \mapsto {}^tA$ is an endomorphism of $M(n, \K)$; multiplication by a fixed scalar, $v \mapsto \lambda v$, is an endomorphism of any $V$.

For an endomorphism it is natural to use **the same basis** at the start and at the end. If we fix a basis $\mathcal B$ for $V$, every endomorphism $f$ is represented by a square matrix $[f]^{\mathcal B}_{\mathcal B}$, and composition corresponds to the product (Proposition 16.6 with $\mathcal B = \mathcal C = \mathcal D$):
$$[f \circ g]^{\mathcal B}_{\mathcal B} = [f]^{\mathcal B}_{\mathcal B}\,[g]^{\mathcal B}_{\mathcal B}.$$

### How the matrix of an endomorphism changes

If $\mathcal B$ and $\mathcal C$ are two bases of $V$ and
$$M = [\id]^{\mathcal B}_{\mathcal C},$$
then
$$[f]^{\mathcal B}_{\mathcal B} = M^{-1}\,[f]^{\mathcal C}_{\mathcal C}\,M.$$

Where it comes from: it is Corollary 16.8 with $\mathcal B_1 = \mathcal C_1 = \mathcal C$ and $\mathcal B_2 = \mathcal C_2 = \mathcal B$:
$$[f]^{\mathcal B}_{\mathcal B} = [\id]^{\mathcal C}_{\mathcal B}\,[f]^{\mathcal C}_{\mathcal C}\,[\id]^{\mathcal B}_{\mathcal C} = M^{-1}\,[f]^{\mathcal C}_{\mathcal C}\,M,$$
because $[\id]^{\mathcal C}_{\mathcal B}$ is the inverse of $M = [\id]^{\mathcal B}_{\mathcal C}$. So the matrices that represent the same endomorphism with respect to different bases are linked by a relation of the form $A = M^{-1}BM$.

> [!METHOD] Change of basis for an endomorphism of $\K^n$, in four steps
> 1. $A = [f]^{\mathcal C}_{\mathcal C}$ in the standard basis $\mathcal C$: you read it off the coefficients.
> 2. $M = [\id]^{\mathcal B}_{\mathcal C}$: the vectors of the new basis $\mathcal B$ **in columns**.
> 3. $M^{-1}$ (for a $2 \times 2$: $\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$; for a $3 \times 3$ with cofactors or with Gauss–Jordan).
> 4. $[f]^{\mathcal B}_{\mathcal B} = M^{-1}AM$. **Check** without the inverse: $M \cdot [f]^{\mathcal B}_{\mathcal B} = A \cdot M$ must hold, or column $j$ must give the coordinates of $f(v_j)$ with respect to $\mathcal B$.

> [!EXAMPLE] 16.10 · A basis in which the matrix becomes diagonal
> Consider $f : \R^2 \to \R^2$ given by
> $$f\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x + y \\ -y \end{pmatrix}.$$
> With respect to the standard basis $\mathcal C = \{e_1, e_2\}$ we find
> $$[f]^{\mathcal C}_{\mathcal C} = \begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}.$$
> Now we take as basis
> $$\mathcal B = \left\{ \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \begin{pmatrix} -1 \\ 2 \end{pmatrix} \right\}.$$
> The change-of-basis matrix from $\mathcal B$ to $\mathcal C$ has the vectors of $\mathcal B$ in columns:
> $$M = [\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & -1 \\ 0 & 2 \end{pmatrix},$$
> and its inverse ($\det M = 2$) is
> $$M^{-1} = [\id]^{\mathcal C}_{\mathcal B} = \frac 12 \begin{pmatrix} 2 & 1 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 1/2 \\ 0 & 1/2 \end{pmatrix}.$$
> So the matrix associated with $f$ in the basis $\mathcal B$ is
> $$[f]^{\mathcal B}_{\mathcal B} = M^{-1}[f]^{\mathcal C}_{\mathcal C}M = \begin{pmatrix} 1 & 1/2 \\ 0 & 1/2 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}\begin{pmatrix} 1 & -1 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}.$$
> Intermediate step: $[f]^{\mathcal C}_{\mathcal C}M = \begin{pmatrix} 1 & 1 \\ 0 & -2 \end{pmatrix}$, and $M^{-1}$ times this gives $\begin{pmatrix} 1 + 0 & 1 - 1 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$.
>
> We can check the result directly: the first vector of the basis $\mathcal B$ is sent to itself, while the second is sent to its opposite:
> $$f\begin{pmatrix} 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}, \qquad f\begin{pmatrix} -1 \\ 2 \end{pmatrix} = \begin{pmatrix} 1 \\ -2 \end{pmatrix}.$$

> [!NOTE] A missing symbol
> In the handouts, on p. 82, the last formula of Example 16.10 starts with "${}^{\mathcal B}_{\mathcal B} = M^{-1}[f]^{\mathcal C}_{\mathcal C}M$": the $[f]$ in front is missing, it should read $[f]^{\mathcal B}_{\mathcal B} = M^{-1}[f]^{\mathcal C}_{\mathcal C}M$.

Geometrically $f$ is a **reflection** (in Martelli's book it is Example 4.4.2): it keeps the line $\Span(1, 0)$ fixed and flips the line $\Span(-1, 2)$. In the standard basis the matrix does not show this; in the basis $\mathcal B$, made of vectors that are "special" for $f$, the matrix is diagonal and you read everything. It is exactly the idea of the **eigenvectors** of lesson L17.

```graph
title: $f(x, y) = (x + y, -y)$ fixes $v_1$ and flips $v_2$: in the basis $\{v_1, v_2\}$ the matrix is diagonal
x: -2.5 2.5
y: -2.5 2.5
line: 0 0 1 0 | accent | dashed | thin
line: 0 0 -1 2 | violet | dashed | thin
vector: 1 0 | accent | thick | $v_1 = f(v_1)$ | n
vector: -1 2 | violet | thick | $v_2$ | w
vector: 1 -2 | pink | thick | $f(v_2) = -v_2$ | e
```

In the tool below the matrix is $[f]^{\mathcal C}_{\mathcal C}$ of Example 16.10. The two dashed lines that appear are those on which $f$ acts without turning the vectors: they are exactly $\Span(1, 0)$ and $\Span(-1, 2)$, spanned by the vectors of the basis $\mathcal B$. Drag the vector $x$ onto one of these lines and watch $Ax$.

```widget matrice
title: The reflection of Example 16.10
a: 1 1; 0 -1
x: -1 2
raggio: 3
```

### Similar matrices

> [!DEF] 16.11 · Similar matrices
> Let $M(n)$ be the set of square $n \times n$ matrices. We say that two matrices $A, B \in M(n)$ are **similar** (or **conjugate**) if there exists an invertible matrix $M \in M(n)$ such that
> $$A = M^{-1}BM.$$
> If $A$ and $B$ are similar we write $A \sim B$.

The interpretation is that similar matrices describe **the same endomorphism in different bases**. Piece by piece:

- $M$ must be **invertible**: it is a change-of-basis matrix, and its columns form a basis.
- If $A = M^{-1}BM$, then $B$ is the matrix in the "old" basis, $A$ the one in the basis whose coordinates (with respect to the old one) are the columns of $M$.
- In Example 16.10: $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \sim \begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}$, with $M = \begin{pmatrix} 1 & -1 \\ 0 & 2 \end{pmatrix}$.

> [!PROP] 16.12
> Similarity is an equivalence relation on $M(n)$.

The set $M(n)$ of square matrices is therefore partitioned into disjoint subsets made of matrices similar to each other: each "family" collects all the matrices of the same endomorphism, as the basis varies.

> [!PROOF] of Proposition 16.12 (from Martelli's book, Proposition 4.4.5)
> You have to check the three properties of an equivalence relation (Discrete Mathematics).
> 1. **Reflexive**, $A \sim A$: with $M = I_n$ we have $A = I_n^{-1} A I_n$.
> 2. **Symmetric**, $A \sim B \Rightarrow B \sim A$: from $A = M^{-1}BM$, multiplying on the left by $M$ and on the right by $M^{-1}$, you get $B = MAM^{-1}$. Setting $N = M^{-1}$ (invertible), $B = N^{-1}AN$.
> 3. **Transitive**, $A \sim B$ and $B \sim C \Rightarrow A \sim C$: if $A = M^{-1}BM$ and $B = N^{-1}CN$, then
> $$A = M^{-1}N^{-1}CNM = (NM)^{-1}\,C\,(NM),$$
> because $(NM)^{-1} = M^{-1}N^{-1}$. And $NM$ is invertible, as a product of invertible matrices.

> [!PROP] 16.13
> If $A \sim B$ then
> $$\rk(A) = \rk(B), \qquad \det(A) = \det(B).$$
> In particular
> $$A \text{ is invertible} \iff B \text{ is invertible}.$$

The handouts' explanation, with the steps. If $A = M^{-1}BM$:

1. **Determinant.** By Binet's theorem (lesson L10) and Corollary 10.5, $\det(M^{-1}) = \frac{1}{\det M}$:
$$\det A = \det(M^{-1})\,\det B\,\det M = \frac{1}{\det M}\,\det B\,\det M = \det B.$$
2. **Rank.** Multiplying on the left or on the right by an invertible matrix does not change the rank, so $\rk(A) = \rk(M^{-1}BM) = \rk(B)$.
3. **Invertibility.** A square matrix is invertible if and only if it has non-zero determinant (Proposition 10.8); the two determinants are equal.

> [!EXAMPLE] · similar or not?
> - $\begin{pmatrix} 1 & 2 \\ 1 & 1 \end{pmatrix}$ and $\begin{pmatrix} -1 & 2 \\ 1 & 1 \end{pmatrix}$ are **not** similar: the determinants are $1 - 2 = -1$ and $-1 - 2 = -3$.
> - $\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and $\begin{pmatrix} 4 & 3 \\ 2 & 1 \end{pmatrix}$ **are** similar: with $M = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ (which swaps the order of the two vectors of the basis, and has $M^{-1} = M$) you find $M^{-1}\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}M = \begin{pmatrix} 4 & 3 \\ 2 & 1 \end{pmatrix}$ (exercise 6).

> [!PITFALL] Same rank and same determinant are not enough
> Proposition 16.13 goes in one direction only. Counterexample: $I_2$ and $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ both have rank 2 and determinant 1, but they are **not** similar. Indeed $I_2$ is similar only to itself: $M^{-1}I_2M = M^{-1}M = I_2$ for every invertible $M$. The same holds for every $\lambda I_n$.

> [!BEYOND] the trace does not change either
> The **trace** (sum of the entries on the diagonal, lesson L08) is also the same for similar matrices. Using $\tr(XY) = \tr(YX)$ (Proposition 8.13) with $X = M^{-1}$ and $Y = BM$:
> $$\tr(M^{-1}BM) = \tr(BMM^{-1}) = \tr(B).$$
> In the quiz it is a quick way to rule out answers: two matrices with different traces are not similar. In lesson L17 you will see the most powerful invariant, the characteristic polynomial.

> [!BEYOND] where to find it in the book
> In Martelli's book: §4.2.4 "Composizione di applicazioni lineari" (pp. 126–127), §4.3.3 (pp. 132–134: composition and Corollary 4.3.10, which is our 16.7), §4.3.5 "Matrice di cambiamento di base" (pp. 135–137, with Examples 4.3.14 and 4.3.15 that redo the examples of lesson L15), §4.4.1–4.4.3 "Endomorfismi" and "Similitudine fra matrici" (pp. 137–140), §4.4.5 on the trace (p. 141).

## Towards the exam

The Linear Algebra and Geometry test has 10 multiple-choice questions (5 answers, one right) and 2 problems worth 11 points, which are marked only with at least 6 correct answers; it lasts 2 hours, with no calculator, and you may bring only a 4-page handwritten sheet. The 2026/27 exam sessions are on 22/01 and 05/02/2027 at 14:00. All the details are in lesson L01.

**What you need from this lesson for the exam.** Changes of basis and associated matrices are among the most recurrent Linear Algebra exercises. In the 2023–2026 exam papers:

| Type of question | Where |
|---|---|
| change-of-basis matrix in $\R^2$, $\R^3$ or $\R_1[x]$ | 10/06/2024 q. 8; 06/09/2024 q. 5; 10/07/2025 q. 6 (permuted standard bases); 02/09/2025 q. 8 (three bases) |
| matrix of a composition, or formula of the composition | 08/02/2024 q. 5; 16/01/2025 q. 5; 15/01/2026 q. 10 (kernel of $S \circ T$); 03/07/2026 q. 5 ($T \circ S = 0$) |
| matrix $[T]^{\mathcal B}_{\mathcal B}$ in a given basis, or $A$ obtained from $[L_A]^{\mathcal B}_{\mathcal B}$ | 24/01/2024 q. 3; 03/06/2025 q. 5; 15/01/2026 q. 8 |
| open problem: change-of-basis matrices, $[T]^{\mathcal A}_{\mathcal A}$ and $[T]^{\mathcal B}_{\mathcal B}$ | 07/09/2026 problem 11; matrix of $T^{-1}$: 10/07/2024 problem 11 |

### Three real exam questions, solved

> [!EXAM] Exam of 24/01/2024, question 3 (also tutoring sheet 3, exercise 5)
> *The matrix associated with $T(x, y) = (2x + y,\ x + 2y)$ with respect to the basis $\mathcal B = \{(0, 1), (1, 2)\}$ is …*
>
> Solution with the formula. $A = [T]^{\mathcal C}_{\mathcal C} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$, $M = [\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 0 & 1 \\ 1 & 2 \end{pmatrix}$, $\det M = -1$, $M^{-1} = \begin{pmatrix} -2 & 1 \\ 1 & 0 \end{pmatrix}$. Then
> $$AM = \begin{pmatrix} 1 & 4 \\ 2 & 5 \end{pmatrix}, \qquad M^{-1}(AM) = \begin{pmatrix} -2 + 2 & -8 + 5 \\ 1 & 4 \end{pmatrix} = \begin{pmatrix} 0 & -3 \\ 1 & 4 \end{pmatrix}.$$
> Direct check: $T(0, 1) = (1, 2) = 0 \cdot (0, 1) + 1 \cdot (1, 2)$, first column $(0, 1)$. Among the answers there was also the transpose $\begin{pmatrix} 0 & 1 \\ -3 & 4 \end{pmatrix}$.

> [!EXAM] Exam of 16/01/2025, question 5
> *Let $f : \R^2 \to \R_2[x]$, $f(u, v) = ux^2 + vx$, and $g : \R_2[x] \to \R^2$, $g(p) = (p(1) + p(2),\ p(1) - p(-1))$. The matrix of $g \circ f$ with respect to the standard bases is …*
>
> Solution. The shortest route is to compute $g \circ f$ on the basis vectors: $g(f(e_1)) = g(x^2) = (1 + 4,\ 1 - 1) = (5, 0)$ and $g(f(e_2)) = g(x) = (1 + 2,\ 1 - (-1)) = (3, 2)$. So the matrix is $\begin{pmatrix} 5 & 3 \\ 0 & 2 \end{pmatrix}$. With the product: $[g] = \begin{pmatrix} 2 & 3 & 5 \\ 0 & 2 & 0 \end{pmatrix}$ (columns $g(1), g(x), g(x^2)$), $[f] = \begin{pmatrix} 0 & 0 \\ 0 & 1 \\ 1 & 0 \end{pmatrix}$, and $[g][f] = \begin{pmatrix} 5 & 3 \\ 0 & 2 \end{pmatrix}$. One of the wrong answers contained the letters $u$ and $v$: an associated matrix contains only numbers.

> [!EXAM] Exam of 07/09/2026, problem 11 (points 1–3)
> *$\mathcal A$ standard basis of $\R^3$, $\mathcal B = \{v_1, v_2, v_3\}$ with $v_1 = (1, 1, 0)$, $v_2 = (1, 0, 1)$, $v_3 = (1, 1, 1)$, and $T(a, b, c) = (2a + c,\ a + b,\ -a + b + 3c)$. (1) Find $[\id]^{\mathcal B}_{\mathcal A}$ and $[\id]^{\mathcal A}_{\mathcal B}$. (2) Find $[T]^{\mathcal A}_{\mathcal A}$. (3) Find $[T]^{\mathcal B}_{\mathcal B}$.*
>
> Solution. (1) $M = [\id]^{\mathcal B}_{\mathcal A} = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 0 & 1 \\ 0 & 1 & 1 \end{pmatrix}$ (the $v_j$ in columns), $\det M = -1$, and $[\id]^{\mathcal A}_{\mathcal B} = M^{-1} = \begin{pmatrix} 1 & 0 & -1 \\ 1 & -1 & 0 \\ -1 & 1 & 1 \end{pmatrix}$ (check: $MM^{-1} = I_3$).
> (2) From the coefficients: $[T]^{\mathcal A}_{\mathcal A} = \begin{pmatrix} 2 & 0 & 1 \\ 1 & 1 & 0 \\ -1 & 1 & 3 \end{pmatrix}$.
> (3) $[T]^{\mathcal B}_{\mathcal B} = M^{-1}[T]^{\mathcal A}_{\mathcal A}M = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}$. Check without inverses: $T(v_1) = (2, 2, 0) = 2v_1$; $T(v_2) = (3, 1, 2) = v_1 + 2v_2$; $T(v_3) = (3, 2, 3) = v_2 + 2v_3$; the coordinates are exactly the columns. Point (4), the eigenvalues, is solved with lesson L17: the matrix $[T]^{\mathcal B}_{\mathcal B}$ is triangular, with 2 on the diagonal.

### Mistakes to avoid

- Confusing $[\id]^{\mathcal B}_{\mathcal C}$ with its inverse: the vectors of $\mathcal B$ in columns take you from $\mathcal B$ coordinates to standard coordinates, not the other way round.
- Writing $MAM^{-1}$ instead of $M^{-1}AM$ (or vice versa). With $M = [\id]^{\mathcal B}_{\mathcal C}$ (new basis in columns) the right formula for the matrix in the new basis is $M^{-1}[f]^{\mathcal C}_{\mathcal C}M$. When in doubt, check one column by computing $f(v_1)$.
- Reversing the order in the composition: $[g \circ f] = [g][f]$.
- Forgetting that the order of the vectors of a basis changes the order of the rows and of the columns.
- Thinking that equal rank and determinant are enough for similarity.

> [!EXAM] The 4-page sheet
> From this lesson: "columns of $[\id]^{\mathcal B}_{\mathcal C}$ = vectors of $\mathcal B$ in $\mathcal C$ coordinates; $[v]_{\mathcal C} = [\id]^{\mathcal B}_{\mathcal C}[v]_{\mathcal B}$"; "$[g \circ f] = [g][f]$, bases as in dominoes"; "$[f]^{\mathcal B}_{\mathcal B} = M^{-1}[f]^{\mathcal C}_{\mathcal C}M$ with $M = [\id]^{\mathcal B}_{\mathcal C}$"; the $2 \times 2$ inverse; "similar $\Rightarrow$ same rank, determinant, trace".

## Quiz

```quiz
Q: In $\R_1[x]$, the change-of-basis matrix $[\id]^{\mathcal B}_{\mathcal C}$ from $\mathcal B = \{3x, 2\}$ to $\mathcal C = \{x + 1, x - 1\}$ is:
+ $\begin{pmatrix} 3/2 & 1 \\ 3/2 & -1 \end{pmatrix}$
- $\begin{pmatrix} 3/2 & 3/2 \\ 1 & -1 \end{pmatrix}$
- $\begin{pmatrix} 1/3 & 1/3 \\ 1/2 & -1/2 \end{pmatrix}$
- $\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$
- $\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$
= Columns: the coordinates of the vectors of $\mathcal B$ with respect to $\mathcal C$. $3x = a(x + 1) + b(x - 1)$ gives $a + b = 3$ and $a - b = 0$, that is $a = b = \frac 32$. $2 = a(x + 1) + b(x - 1)$ gives $a + b = 0$ and $a - b = 2$, that is $a = 1$, $b = -1$. The second answer is the transpose, the third is the inverse $[\id]^{\mathcal C}_{\mathcal B}$. Similar to the exam of 10/06/2024, question 8.

Q: The change-of-basis matrix $[\id]^{\mathcal B}_{\mathcal C}$ from $\mathcal B = \{e_3, e_1, e_2\}$ to $\mathcal C = \{e_1, e_2, e_3\}$ in $\R^3$ is:
+ $\begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{pmatrix}$
- $\begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{pmatrix}$
- The problem is not well defined.
= Column $j$ = coordinates of the $j$-th vector of $\mathcal B$ with respect to $\mathcal C$: $[e_3]_{\mathcal C} = (0, 0, 1)$, $[e_1]_{\mathcal C} = (1, 0, 0)$, $[e_2]_{\mathcal C} = (0, 1, 0)$. The second answer is the transpose, that is $[\id]^{\mathcal C}_{\mathcal B}$. Similar to the exam of 10/07/2025, question 6.

Q: Let $\mathcal A, \mathcal B, \mathcal C$ be three bases of $\R^2$ with $[\id]^{\mathcal A}_{\mathcal B} = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ and $[\id]^{\mathcal C}_{\mathcal B} = \begin{pmatrix} 1 & 0 \\ 2 & 1 \end{pmatrix}$. Then $[\id]^{\mathcal A}_{\mathcal C}$ is:
+ $\begin{pmatrix} 1 & 1 \\ -2 & -1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 2 & 3 \end{pmatrix}$
- $\begin{pmatrix} -1 & 1 \\ -2 & 1 \end{pmatrix}$
- $\begin{pmatrix} -1 & -1 \\ 2 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$
= $[\id]^{\mathcal A}_{\mathcal C} = [\id]^{\mathcal B}_{\mathcal C}[\id]^{\mathcal A}_{\mathcal B}$ (the bases fit together) and $[\id]^{\mathcal B}_{\mathcal C} = \big([\id]^{\mathcal C}_{\mathcal B}\big)^{-1} = \begin{pmatrix} 1 & 0 \\ -2 & 1 \end{pmatrix}$. The product is $\begin{pmatrix} 1 & 1 \\ -2 & -1 \end{pmatrix}$. The other answers come from products in the wrong order or without the inverse. Similar to the exam of 02/09/2025, question 8.

Q: Let $f : \R^2 \to \R_2[x]$, $f(u, v) = ux^2 + v$, and $g : \R_2[x] \to \R^2$, $g(p) = (p(1),\ p(2))$. The matrix of $g \circ f$ with respect to the standard basis of $\R^2$ is:
+ $\begin{pmatrix} 1 & 1 \\ 4 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 4 \\ 1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 & 1 \\ 1 & 2 & 4 \end{pmatrix}$
- $\begin{pmatrix} u & 1 \\ v & 4 \end{pmatrix}$
- $\begin{pmatrix} 2 & 1 \\ 5 & 2 \end{pmatrix}$
= $(g \circ f)(e_1) = g(x^2) = (1, 4)$ and $(g \circ f)(e_2) = g(1) = (1, 1)$: they are the columns. The variables $u, v$ do not appear in an associated matrix; the third answer is $[g]$ alone, which is $2 \times 3$. Similar to the exam of 16/01/2025, question 5.

Q: Let $\mathcal B = \{(1, 1), (0, 1)\}$ and let $A \in M(2, \R)$ be such that $[L_A]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$. Then $A$ is:
+ $\begin{pmatrix} -1 & 2 \\ -2 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 3 & 2 \\ -2 & -1 \end{pmatrix}$
- $\begin{pmatrix} -1 & -2 \\ 2 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 1 & 3 \end{pmatrix}$
= With $M = [\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}$ we have $[L_A]^{\mathcal B}_{\mathcal B} = M^{-1}AM$, so $A = M\,[L_A]^{\mathcal B}_{\mathcal B}\,M^{-1} = \begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} -1 & 2 \\ -2 & 3 \end{pmatrix}$. Check: $A(1, 1) = (1, 1)$, with coordinates $(1, 0)$ with respect to $\mathcal B$: it is the first given column. The third answer uses the formula the wrong way round, $M^{-1}\,[L_A]^{\mathcal B}_{\mathcal B}\,M$. Similar to the exam of 03/06/2025, question 5.

Q: If $A, B \in M(2, \R)$ are similar, which statement is necessarily true?
+ $\det A = \det B$
- $A = B$
- $AB = BA$
- $A$ and $B$ have the same first row.
- $\rk(A) = \rk(B) + 1$
= Proposition 16.13: similar matrices have the same determinant and the same rank (so the last answer is always false). The other three are not necessary: $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ and $\begin{pmatrix} 1 & 1 \\ 0 & -1 \end{pmatrix}$ are similar (Example 16.10) but they are different, do not commute and have different first rows.

Q: Which of these matrices is similar to the identity matrix $I_2$?
+ $\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 0 \\ 0 & 1/2 \end{pmatrix}$
- $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$
- $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$
= $M^{-1}I_2M = I_2$ for every invertible $M$: $I_2$ is similar only to itself. The other four all have rank 2 and determinant $\pm 1$ (three of them exactly 1, like $I_2$), but they are not $I_2$: having the same determinant is not enough to be similar.

Q: Let $f, g : \R^3 \to \R^3$ be linear with $g \circ f = 0$ (the zero map) and $f \neq 0$. Which statement is always true?
+ $\Imm f \subseteq \Ker g$
- $\Ker g = \{0\}$
- $g$ is an isomorphism.
- $\Imm g \subseteq \Ker f$
- $f$ is surjective.
= For every $v$, $g(f(v)) = 0$: every vector of the image of $f$ lies in the kernel of $g$. If $\Ker g = \{0\}$ held (or $g$ were an isomorphism) then $f(v) = 0$ for every $v$, against $f \neq 0$. With $f(x, y, z) = (0, x, 0)$ and $g(x, y, z) = (x, 0, 0)$ we have $g \circ f = 0$ but $f(g(e_1)) = e_2 \neq 0$, so $\Imm g \not\subseteq \Ker f$; and this $f$ is not surjective. Similar to the exam of 03/07/2026, question 5.

Q: Let $T : \R^2 \to \R^3$, $T(x, y) = (x,\ x + y,\ y)$, and $S : \R^3 \to \R^2$, $S(a, b, c) = (a - b,\ b + c)$. The composition $S \circ T$ is:
+ $(x, y) \mapsto (-y,\ x + 2y)$
- $(x, y, z) \mapsto (x - y,\ y + z)$
- $(x, y) \mapsto (x - y,\ 2y)$
- $(x, y, z) \mapsto (x - y,\ x + z,\ y + z)$
- It is not well defined.
= $S(T(x, y)) = S(x,\ x + y,\ y) = \big(x - (x + y),\ (x + y) + y\big) = (-y,\ x + 2y)$. It is a map $\R^2 \to \R^2$, so the answers with three variables are wrong already because of the domain. Similar to the exam of 08/02/2024, question 5.

Q: Let $T(x, y) = (4x - 2y,\ x + y)$ and let $\mathcal B = \{(1, 1), (2, 1)\}$. The matrix $[T]^{\mathcal B}_{\mathcal B}$ is:
+ $\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$
- $\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$
- $\begin{pmatrix} 4 & -2 \\ 1 & 1 \end{pmatrix}$
- $\begin{pmatrix} 2 & 6 \\ 2 & 3 \end{pmatrix}$
- $\begin{pmatrix} 1 & 2 \\ 1 & 1 \end{pmatrix}$
= $T(1, 1) = (2, 2) = 2 \cdot (1, 1)$ and $T(2, 1) = (6, 3) = 3 \cdot (2, 1)$: the coordinates are $(2, 0)$ and $(0, 3)$. The order on the diagonal follows the order of the basis, so $\begin{pmatrix} 3 & 0 \\ 0 & 2 \end{pmatrix}$ is wrong; the fourth puts in the images without going to coordinates.
```

## Exercises

::: exercise intermediate Exercise 16.14 of the handouts: an endomorphism that becomes diagonal
Consider the endomorphism $f : \R^2 \to \R^2$ defined by $f(x, y) = (2x + y,\ x + 2y)$. Let $\mathcal C = \{e_1, e_2\}$ be the standard basis and $\mathcal B = \{v_1, v_2\}$ with $v_1 = (1, 1)$, $v_2 = (1, -1)$.
(1) Find the matrix $A = [f]^{\mathcal C}_{\mathcal C}$.
(2) Find the change-of-basis matrix $M = [\id]^{\mathcal B}_{\mathcal C}$.
(3) Compute $[f]^{\mathcal B}_{\mathcal B}$ using the change-of-basis formula.
(4) Check the result by computing $f(v_1)$ and $f(v_2)$ directly.
::: solution
(1) From the coefficients: $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ (columns $f(e_1) = (2, 1)$ and $f(e_2) = (1, 2)$).

(2) $\mathcal C$ is the standard basis, so you just put the vectors of $\mathcal B$ in columns: $M = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$.

(3) $\det M = -1 - 1 = -2$, so
$$M^{-1} = \frac{1}{-2}\begin{pmatrix} -1 & -1 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{pmatrix}.$$
Then, one product at a time:
$$M^{-1}A = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{pmatrix}\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix} = \begin{pmatrix} 3/2 & 3/2 \\ 1/2 & -1/2 \end{pmatrix}, \qquad (M^{-1}A)M = \begin{pmatrix} 3/2 & 3/2 \\ 1/2 & -1/2 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}.$$
So $[f]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}$.

(4) $f(v_1) = f(1, 1) = (3, 3) = 3v_1 + 0v_2$ and $f(v_2) = f(1, -1) = (1, -1) = 0v_1 + 1v_2$. The coordinates $(3, 0)$ and $(0, 1)$ are the columns found. In the basis $\mathcal B$, $f$ stretches the direction $(1, 1)$ by 3 and leaves the direction $(1, -1)$ fixed.
:::

::: exercise basic Change of basis in $\R^3$ (tutoring sheet 3, exercise 1)
Let $v_1 = (1, 0, 2)$, $v_2 = (2, 0, 1)$, $v_3 = (0, 1, 1)$. Check that $\mathcal B = \{v_1, v_2, v_3\}$ is a basis of $\R^3$ and find the change-of-basis matrix from $\mathcal B$ to the standard basis $\mathcal E$ and vice versa.
::: solution
$M = [\id]^{\mathcal B}_{\mathcal E} = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 0 & 1 \\ 2 & 1 & 1 \end{pmatrix}$ (the vectors in columns). Expanding along the second row, which has a single non-zero entry (place $(2, 3)$, sign $(-1)^{2+3} = -1$):
$$\det M = -1 \cdot \det\begin{pmatrix} 1 & 2 \\ 2 & 1 \end{pmatrix} = -(1 - 4) = 3 \neq 0,$$
so the three vectors are independent and, being three in $\R^3$, they form a basis (Theorem 7.12).

The inverse, $[\id]^{\mathcal E}_{\mathcal B}$, with cofactors (or with Gauss–Jordan):
$$M^{-1} = \frac 13 \begin{pmatrix} -1 & -2 & 2 \\ 2 & 1 & -1 \\ 0 & 3 & 0 \end{pmatrix}.$$
Check on one column: the first column of $M^{-1}$ must give the coordinates of $e_1$: $-\frac 13 v_1 + \frac 23 v_2 + 0 v_3 = \left(-\frac 13 + \frac 43,\ 0,\ -\frac 23 + \frac 23\right) = (1, 0, 0)$.
:::

::: exercise intermediate Polynomials centred at 1 (tutoring sheet 3, exercise 2)
In $\R_3[x]$ compute the change-of-basis matrix from $\mathcal B = \{1,\ x - 1,\ (x - 1)^2,\ (x - 1)^3\}$ to the standard basis $\mathcal C = \{1, x, x^2, x^3\}$, and vice versa.
::: solution
**From $\mathcal B$ to $\mathcal C$**: I expand every polynomial of $\mathcal B$ and read the coefficients (constant term, $x$, $x^2$, $x^3$):
- $1 \to (1, 0, 0, 0)$;
- $x - 1 \to (-1, 1, 0, 0)$;
- $(x - 1)^2 = 1 - 2x + x^2 \to (1, -2, 1, 0)$;
- $(x - 1)^3 = -1 + 3x - 3x^2 + x^3 \to (-1, 3, -3, 1)$.

$$[\id]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 1 & -1 & 1 & -1 \\ 0 & 1 & -2 & 3 \\ 0 & 0 & 1 & -3 \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$

**From $\mathcal C$ to $\mathcal B$**: instead of inverting, I write $x = (x - 1) + 1$ and expand the powers with the binomial formula:
- $1 = 1 \to (1, 0, 0, 0)$;
- $x = 1 + (x - 1) \to (1, 1, 0, 0)$;
- $x^2 = \big(1 + (x - 1)\big)^2 = 1 + 2(x - 1) + (x - 1)^2 \to (1, 2, 1, 0)$;
- $x^3 = 1 + 3(x - 1) + 3(x - 1)^2 + (x - 1)^3 \to (1, 3, 3, 1)$.

$$[\id]^{\mathcal C}_{\mathcal B} = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$
In the columns the binomial coefficients appear (Pascal's triangle). Check: the product of the two matrices is $I_4$.
:::

::: exercise basic Compositions in both orders
Let $f : \R^2 \to \R^3$, $f(x, y) = (x,\ x + y,\ 2y)$, and $g : \R^3 \to \R^2$, $g(a, b, c) = (a + c,\ b - c)$. Compute the matrices of $g \circ f$ and of $f \circ g$ in the standard bases, and check the result with the formulas.
::: solution
$[f] = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 0 & 2 \end{pmatrix}$ ($3 \times 2$), $[g] = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & -1 \end{pmatrix}$ ($2 \times 3$).

$$[g \circ f] = [g][f] = \begin{pmatrix} 1 + 0 + 0 & 0 + 0 + 2 \\ 0 + 1 + 0 & 0 + 1 - 2 \end{pmatrix} = \begin{pmatrix} 1 & 2 \\ 1 & -1 \end{pmatrix}.$$
Check: $g(f(x, y)) = g(x,\ x + y,\ 2y) = (x + 2y,\ x + y - 2y) = (x + 2y,\ x - y)$.

$$[f \circ g] = [f][g] = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 2 & -2 \end{pmatrix}.$$
Check: $f(g(a, b, c)) = f(a + c,\ b - c) = (a + c,\ a + b,\ 2b - 2c)$.

Notice that $f \circ g : \R^3 \to \R^3$ passes through $\R^2$, so its image has dimension at most 2: indeed $\det [f \circ g] = 1 \cdot (-2 - 0) - 0 + 1 \cdot (2 - 0) = 0$ and the rank is 2.
:::

::: exercise intermediate An isomorphism and its inverse with matrices
Let $f : \R_2[x] \to \R^3$, $f(p) = (p(-1),\ p(0),\ p(1))$. (a) Write $[f]$ with respect to $\{1, x, x^2\}$ and to the standard basis and show that $f$ is an isomorphism. (b) Use Corollary 16.7 to write $f^{-1}(a, b, c)$. (c) Which polynomial of degree at most 2 is $1$ at $-1$, $0$ at $0$ and $3$ at $1$?
::: solution
(a) $f(1) = (1, 1, 1)$, $f(x) = (-1, 0, 1)$, $f(x^2) = (1, 0, 1)$:
$$[f] = \begin{pmatrix} 1 & -1 & 1 \\ 1 & 0 & 0 \\ 1 & 1 & 1 \end{pmatrix}.$$
Expanding along the second row (a single non-zero entry, place $(2, 1)$, sign $-1$): $\det [f] = -1 \cdot \det\begin{pmatrix} -1 & 1 \\ 1 & 1 \end{pmatrix} = -(-1 - 1) = 2 \neq 0$. So $[f]$ is invertible and $f$ is an isomorphism.

(b) $[f^{-1}] = [f]^{-1} = \frac 12 \begin{pmatrix} 0 & 2 & 0 \\ -1 & 0 & 1 \\ 1 & -2 & 1 \end{pmatrix}$ (check: $[f]\,[f]^{-1} = I_3$). The coordinates of $f^{-1}(a, b, c)$ are $\left(b,\ \frac{c - a}{2},\ \frac{a - 2b + c}{2}\right)$, so
$$f^{-1}(a, b, c) = b + \frac{c - a}{2}\,x + \frac{a - 2b + c}{2}\,x^2.$$
Check: at $0$ it is $b$; at $1$ it is $b + \frac{c - a}{2} + \frac{a - 2b + c}{2} = b + \frac{2c - 2b}{2} = c$; at $-1$ it is $b - \frac{c - a}{2} + \frac{a - 2b + c}{2} = b + \frac{2a - 2b}{2} = a$.

(c) $a = 1$, $b = 0$, $c = 3$: $p = 0 + \frac{3 - 1}{2}x + \frac{1 - 0 + 3}{2}x^2 = x + 2x^2$. Check: $p(-1) = -1 + 2 = 1$, $p(0) = 0$, $p(1) = 3$.
:::

::: exercise intermediate Similar or not
(a) Show that $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and $B = \begin{pmatrix} 4 & 3 \\ 2 & 1 \end{pmatrix}$ are similar, finding $M$. (b) Show that $A$ and $C = \begin{pmatrix} 1 & 2 \\ 3 & 5 \end{pmatrix}$ are not similar. (c) Can $A$ and $D = \begin{pmatrix} 4 & 2 \\ 3 & 1 \end{pmatrix}$ be similar?
::: solution
(a) Think of $A$ as $[L_A]$ in the basis $\{e_1, e_2\}$ and try the basis in reverse order, $\{e_2, e_1\}$: $M = [\id]^{\{e_2, e_1\}}_{\{e_1, e_2\}} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$, with $M^{-1} = M$ (swapping twice changes nothing). Then
$$M^{-1}AM = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 3 & 4 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 4 & 3 \\ 2 & 1 \end{pmatrix} = B.$$
Multiplying on the left by $M$ swaps the rows, on the right it swaps the columns.

(b) $\det A = 4 - 6 = -2$ and $\det C = 5 - 6 = -1$: different determinants, so not similar (Proposition 16.13).

(c) Here the invariants seen so far do not help: $\det D = 4 - 6 = -2 = \det A$, the rank is 2 for both and the trace is the same too ($\tr A = 1 + 4 = 5$, $\tr D = 4 + 1 = 5$). So they can be similar, but these equalities alone do not prove it. In lesson L17 you will see that they have the same characteristic polynomial $\lambda^2 - 5\lambda - 2$, with two distinct real roots; in lesson L18, that because of this they are both similar to the same diagonal matrix, and hence (by transitivity) similar to each other.
:::

::: exercise intermediate A matrix with different bases at the start and at the end (tutoring sheet 3, exercise 3)
Let $T : \R^3 \to \R^3$, $T(x_1, x_2, x_3) = (3x_1 + x_2,\ x_1 + x_3,\ x_2 - x_3)$. Let $\mathcal A$ be the standard basis, $\mathcal B = \{(1, -1, 1), (0, 3, 1), (0, 2, 1)\}$ and $\mathcal C = \{(1, 2, 3), (0, 2, 1), (0, 1, 1)\}$. Find $[T]^{\mathcal A}_{\mathcal A}$ and $[T]^{\mathcal B}_{\mathcal C}$.
::: solution
$[T]^{\mathcal A}_{\mathcal A} = \begin{pmatrix} 3 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 1 & -1 \end{pmatrix}$ from the coefficients.

By Corollary 16.8: $[T]^{\mathcal B}_{\mathcal C} = [\id]^{\mathcal A}_{\mathcal C}\,[T]^{\mathcal A}_{\mathcal A}\,[\id]^{\mathcal B}_{\mathcal A}$. The basis $\mathcal C$ is the one of Exercise 16.3, so $[\id]^{\mathcal A}_{\mathcal C} = \begin{pmatrix} 1 & 0 & 0 \\ 1 & 1 & -1 \\ -4 & -1 & 2 \end{pmatrix}$ is already computed. Instead of multiplying three matrices, it is better to compute the images of the vectors of $\mathcal B$ and then their coordinates with respect to $\mathcal C$ with that matrix:
- $T(1, -1, 1) = (3 - 1,\ 1 + 1,\ -1 - 1) = (2, 2, -2)$, coordinates $[\id]^{\mathcal A}_{\mathcal C}(2, 2, -2) = (2,\ 2 + 2 + 2,\ -8 - 2 - 4) = (2, 6, -14)$;
- $T(0, 3, 1) = (3, 1, 2)$, coordinates $(3,\ 3 + 1 - 2,\ -12 - 1 + 4) = (3, 2, -9)$;
- $T(0, 2, 1) = (2, 1, 1)$, coordinates $(2,\ 2 + 1 - 1,\ -8 - 1 + 2) = (2, 2, -7)$.

$$[T]^{\mathcal B}_{\mathcal C} = \begin{pmatrix} 2 & 3 & 2 \\ 6 & 2 & 2 \\ -14 & -9 & -7 \end{pmatrix}.$$
Check on the first column: $2(1, 2, 3) + 6(0, 2, 1) - 14(0, 1, 1) = (2,\ 4 + 12 - 14,\ 6 + 6 - 14) = (2, 2, -2)$.
:::

::: exercise hard Similarity: equivalence and trace
(a) Prove Proposition 16.12 (similarity is an equivalence relation). (b) Prove that similar matrices have the same trace. (c) Find two $2 \times 2$ matrices with the same trace and the same determinant that are not similar.
::: solution
(a) Reflexive with $M = I_n$; symmetric: from $A = M^{-1}BM$ follows $B = MAM^{-1} = (M^{-1})^{-1}A(M^{-1})$; transitive: from $A = M^{-1}BM$ and $B = N^{-1}CN$ follows $A = (NM)^{-1}C(NM)$. The details are in the proof box, in the section on similar matrices.

(b) With $\tr(XY) = \tr(YX)$ (Proposition 8.13), $X = M^{-1}$ and $Y = BM$: $\tr(M^{-1}BM) = \tr(BMM^{-1}) = \tr B$.

(c) $I_2$ and $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$: trace 2 and determinant 1 for both, but $I_2$ is similar only to itself.
:::

::: exercise exam As at the exam: two bases and an endomorphism of $\R^3$
Let $\mathcal A$ be the standard basis of $\R^3$ and let $\mathcal B = \{v_1, v_2, v_3\}$ with $v_1 = (1, 0, 1)$, $v_2 = (0, 1, 1)$, $v_3 = (1, 1, 1)$. Let $T : \R^3 \to \R^3$, $T(a, b, c) = (2a + 2b - c,\ a + 3b - c,\ 2b + c)$.
(1) Find $[\id]^{\mathcal B}_{\mathcal A}$ and $[\id]^{\mathcal A}_{\mathcal B}$.
(2) Write $[T]^{\mathcal A}_{\mathcal A}$.
(3) Compute $[T]^{\mathcal B}_{\mathcal B}$ with the change-of-basis formula.
(4) Check the result by computing $T(v_1)$, $T(v_2)$, $T(v_3)$, and check that $\det [T]^{\mathcal A}_{\mathcal A} = \det [T]^{\mathcal B}_{\mathcal B}$.
::: solution
(1) $M = [\id]^{\mathcal B}_{\mathcal A} = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}$. Determinant along the first row: $1 \cdot (1 - 1) - 0 + 1 \cdot (0 - 1) = -1$. The inverse (cofactors, divided by $-1$):
$$[\id]^{\mathcal A}_{\mathcal B} = M^{-1} = \begin{pmatrix} 0 & -1 & 1 \\ -1 & 0 & 1 \\ 1 & 1 & -1 \end{pmatrix}.$$
Check: the first row of $M$ times the columns of $M^{-1}$ gives $(0 + 0 + 1,\ -1 + 0 + 1,\ 1 + 0 - 1) = (1, 0, 0)$, and so on.

(2) $A = [T]^{\mathcal A}_{\mathcal A} = \begin{pmatrix} 2 & 2 & -1 \\ 1 & 3 & -1 \\ 0 & 2 & 1 \end{pmatrix}$.

(3) First $AM$: column by column, $A v_1 = (2 - 1,\ 1 - 1,\ 0 + 1) = (1, 0, 1)$, $A v_2 = (2 - 1,\ 3 - 1,\ 2 + 1) = (1, 2, 3)$, $A v_3 = (2 + 2 - 1,\ 1 + 3 - 1,\ 2 + 1) = (3, 3, 3)$. Then $M^{-1}$ times each column:
- $M^{-1}(1, 0, 1) = (0 + 0 + 1,\ -1 + 0 + 1,\ 1 + 0 - 1) = (1, 0, 0)$;
- $M^{-1}(1, 2, 3) = (0 - 2 + 3,\ -1 + 0 + 3,\ 1 + 2 - 3) = (1, 2, 0)$;
- $M^{-1}(3, 3, 3) = (0 - 3 + 3,\ -3 + 0 + 3,\ 3 + 3 - 3) = (0, 0, 3)$.

$$[T]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}.$$

(4) $T(v_1) = (1, 0, 1) = v_1$; $T(v_2) = (1, 2, 3) = v_1 + 2v_2$ (indeed $(1, 0, 1) + (0, 2, 2) = (1, 2, 3)$); $T(v_3) = (3, 3, 3) = 3v_3$. The coordinates $(1, 0, 0)$, $(1, 2, 0)$, $(0, 0, 3)$ are the columns found. Determinants: $\det [T]^{\mathcal B}_{\mathcal B} = 1 \cdot 2 \cdot 3 = 6$ (triangular matrix) and $\det A = 2(3 + 2) - 2(1 - 0) + (-1)(2 - 0) = 10 - 2 - 2 = 6$. Equal, as Proposition 16.13 requires.
:::

::: exercise exam As at the exam: the translation of polynomials
Let $f : \R_2[x] \to \R_2[x]$, $f(p)(x) = p(x + 1)$ (for example $f(x^2) = (x + 1)^2$).
(1) Show that $f$ is linear and write its matrix with respect to $\mathcal B = \{1, x, x^2\}$.
(2) Show that $f$ is an isomorphism and write the matrix of $f^{-1}$; what is $f^{-1}(x^2)$?
(3) Write the matrix of $f \circ f$ and explain the result.
::: solution
(1) Linearity: $f(p + q)(x) = (p + q)(x + 1) = p(x + 1) + q(x + 1)$ and $f(\lambda p)(x) = \lambda p(x + 1)$. Images of the basis: $f(1) = 1$, $f(x) = x + 1$, $f(x^2) = x^2 + 2x + 1$, with coordinates $(1, 0, 0)$, $(1, 1, 0)$, $(1, 2, 1)$:
$$[f]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{pmatrix}.$$

(2) The matrix is triangular with determinant $1 \cdot 1 \cdot 1 = 1 \neq 0$, so $f$ is an isomorphism (Corollary 16.7). The inverse is the backward translation $p(x) \mapsto p(x - 1)$: $1 \mapsto 1$, $x \mapsto x - 1$, $x^2 \mapsto x^2 - 2x + 1$, so
$$[f^{-1}]^{\mathcal B}_{\mathcal B} = \begin{pmatrix} 1 & -1 & 1 \\ 0 & 1 & -2 \\ 0 & 0 & 1 \end{pmatrix},$$
and you check that the product with $[f]$ is $I_3$. Then $[f^{-1}(x^2)] = [f^{-1}](0, 0, 1) = (1, -2, 1)$, that is $f^{-1}(x^2) = 1 - 2x + x^2 = (x - 1)^2$.

(3) $[f \circ f] = [f]^2 = \begin{pmatrix} 1 & 2 & 4 \\ 0 & 1 & 4 \\ 0 & 0 & 1 \end{pmatrix}$. Translating twice by 1 is translating by 2: $f(f(p))(x) = p(x + 2)$, and indeed $(x + 2)^2 = 4 + 4x + x^2$ has coordinates $(4, 4, 1)$, the third column.
:::

## Review questions

::: question What is the change-of-basis matrix from $\mathcal B$ to $\mathcal C$, and what does it look like?
It is $[\id]^{\mathcal B}_{\mathcal C}$, the matrix of the identity with $\mathcal B$ at the start and $\mathcal C$ at the end. Column $j$ contains the coordinates of the $j$-th vector of $\mathcal B$ with respect to $\mathcal C$.
:::

::: question What is it for? Write the formula.
To translate coordinates: $[v]_{\mathcal C} = [\id]^{\mathcal B}_{\mathcal C}[v]_{\mathcal B}$ (Proposition 16.2). For the opposite direction you use the inverse, $[\id]^{\mathcal C}_{\mathcal B}$.
:::

::: question How do you quickly write $[\id]^{\mathcal B}_{\mathcal C}$ if $\mathcal C$ is the standard basis of $\K^n$?
By putting the vectors of $\mathcal B$ in columns, in order: the coordinates with respect to the standard basis are the components.
:::

::: question Why is the composition of linear maps linear?
Because $(g \circ f)(v + v') = g(f(v) + f(v')) = g(f(v)) + g(f(v'))$ and $(g \circ f)(\lambda v) = g(\lambda f(v)) = \lambda g(f(v))$: you use first the linearity of $f$, then that of $g$.
:::

::: question What is the matrix of a composition?
$[g \circ f]^{\mathcal B}_{\mathcal D} = [g]^{\mathcal C}_{\mathcal D}[f]^{\mathcal B}_{\mathcal C}$ (Proposition 16.6): the matrix of $f$, which acts first, is on the right; the basis $\mathcal C$ of the space in the middle is the same in the two factors. For the $L_A$: $L_A \circ L_B = L_{AB}$.
:::

::: question How do you recognise an isomorphism from the matrix, and what is the matrix of the inverse?
$f$ is an isomorphism if and only if $[f]^{\mathcal B}_{\mathcal C}$ is invertible (square with non-zero determinant), and then $[f^{-1}]^{\mathcal C}_{\mathcal B} = \big([f]^{\mathcal B}_{\mathcal C}\big)^{-1}$ (Corollary 16.7).
:::

::: question How do you go from $[f]^{\mathcal B_1}_{\mathcal C_1}$ to $[f]^{\mathcal B_2}_{\mathcal C_2}$?
By multiplying on the left and on the right by change-of-basis matrices: $[f]^{\mathcal B_2}_{\mathcal C_2} = [\id_W]^{\mathcal C_1}_{\mathcal C_2}[f]^{\mathcal B_1}_{\mathcal C_1}[\id_V]^{\mathcal B_2}_{\mathcal B_1}$ (Corollary 16.8).
:::

::: question What is an endomorphism? How does its matrix change with the basis?
A linear map $f : V \to V$. With the same basis at the start and at the end, if $M = [\id]^{\mathcal B}_{\mathcal C}$ then $[f]^{\mathcal B}_{\mathcal B} = M^{-1}[f]^{\mathcal C}_{\mathcal C}M$.
:::

::: question When are two matrices called similar, and what does it mean?
$A \sim B$ if $A = M^{-1}BM$ for some invertible $M$. It means that $A$ and $B$ represent the same endomorphism in two different bases.
:::

::: question Why is similarity an equivalence relation?
Reflexive with $M = I_n$; symmetric because $A = M^{-1}BM$ gives $B = MAM^{-1}$; transitive because $A = M^{-1}BM$ and $B = N^{-1}CN$ give $A = (NM)^{-1}C(NM)$.
:::

::: question What do two similar matrices have in common?
Rank and determinant (Proposition 16.13), so they are both invertible or both not invertible. The trace too, and from lesson L17 the characteristic polynomial.
:::

::: question Are two matrices with the same determinant and the same rank similar?
Not necessarily: $I_2$ and $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ have rank 2 and determinant 1, but $I_2$ is similar only to itself.
:::

## Glossary

```glossary
Change-of-basis matrix | $[\id]^{\mathcal B}_{\mathcal C}$: column $j$ is $[v_j]_{\mathcal C}$; it turns coordinates with respect to $\mathcal B$ into coordinates with respect to $\mathcal C$ (Definition 16.1).
Inverse change of basis | $[\id]^{\mathcal C}_{\mathcal B} = \big([\id]^{\mathcal B}_{\mathcal C}\big)^{-1}$.
Composition | $g \circ f$: first $f$, then $g$; it is linear if $f$ and $g$ are (Proposition 16.4).
Matrix of the composition | $[g \circ f]^{\mathcal B}_{\mathcal D} = [g]^{\mathcal C}_{\mathcal D}[f]^{\mathcal B}_{\mathcal C}$; for the $L_A$, $L_A \circ L_B = L_{AB}$.
Associativity | $A(BC) = (AB)C$: it is the reason why $L_A(L_B(x)) = L_{AB}(x)$.
Isomorphism and invertible matrix | $f$ is an isomorphism if and only if $[f]^{\mathcal B}_{\mathcal C}$ is invertible; then $[f^{-1}]^{\mathcal C}_{\mathcal B} = [f]^{-1}$ (Corollary 16.7).
Change-of-basis formula | $[f]^{\mathcal B_2}_{\mathcal C_2} = [\id_W]^{\mathcal C_1}_{\mathcal C_2}[f]^{\mathcal B_1}_{\mathcal C_1}[\id_V]^{\mathcal B_2}_{\mathcal B_1}$ (Corollary 16.8).
Endomorphism | Linear map from a space to itself, $f : V \to V$ (Definition 16.9).
Matrix of an endomorphism | $[f]^{\mathcal B}_{\mathcal B}$, with the same basis at the start and at the end.
Similar (conjugate) matrices | $A \sim B$ if $A = M^{-1}BM$ with $M$ invertible (Definition 16.11).
Equivalence relation | Reflexive, symmetric and transitive relation; similarity is one (Proposition 16.12).
Similarity invariants | Quantities that are equal for similar matrices: rank, determinant, trace (and the characteristic polynomial, lesson L17).
Binet's theorem | $\det(AB) = \det A \det B$ (lesson L10); it gives $\det(M^{-1}BM) = \det B$.
Inverse of a $2 \times 2$ | $\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$ if $ad - bc \neq 0$.
```

## Checklist

```checklist
- I can write the change-of-basis matrix $[\id]^{\mathcal B}_{\mathcal C}$ and I know which way it transforms coordinates.
- I can write $[\id]^{\mathcal B}_{\mathcal E}$ in a moment when $\mathcal E$ is the standard basis, and I can get $[\id]^{\mathcal E}_{\mathcal B}$ with the inverse.
- I can go from one non-standard basis to another, by solving systems or by going through the standard basis.
- I can explain why the composition of linear maps is linear and why $L_A \circ L_B = L_{AB}$.
- I can compute the matrix of a composition with $[g \circ f] = [g][f]$, in the right order and with the right sizes.
- I can recognise an isomorphism from the matrix and write the matrix of the inverse.
- I can use the formula $[f]^{\mathcal B_2}_{\mathcal C_2} = [\id]^{\mathcal C_1}_{\mathcal C_2}[f]^{\mathcal B_1}_{\mathcal C_1}[\id]^{\mathcal B_2}_{\mathcal B_1}$.
- I can compute $[f]^{\mathcal B}_{\mathcal B} = M^{-1}[f]^{\mathcal C}_{\mathcal C}M$ for an endomorphism and check the result with $f(v_j)$.
- I know the definition of similar matrices and why similarity is an equivalence relation.
- I know that similar matrices have the same rank, determinant and trace, and that the converse is false.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 16 "Applicazioni lineari III", pp. 79–84: sections 16.A (change-of-basis matrix), 16.B (composition), 16.C (endomorphisms and similarity) are followed in order, with the page next to each heading; definitions, propositions and examples keep their numbering (Definitions 16.1, 16.9, 16.11; Propositions 16.2, 16.4–16.6, 16.12, 16.13; Corollaries 16.7 and 16.8; Example 16.10); Exercise 16.3, solved in the text of the handouts, is reported as an example, and Exercise 16.14 of section 16.D is worked out in the exercises.
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §4.2.4 (composition), §4.3.3 and §4.3.5 (properties of the associated matrix, change of basis, Examples 4.3.14–4.3.15), §4.4.1–4.4.3 (endomorphisms and similarity, with the proof of Proposition 16.12 and Example 4.4.2 of the reflection), §4.4.5 (trace).
- **Exam**: exam sessions of 24/01/2024 (question 3), 08/02/2024 (question 5), 10/06/2024 (question 8), 10/07/2024 (problem 11), 06/09/2024 (question 5), 16/01/2025 (question 5), 03/06/2025 (question 5), 10/07/2025 (question 6), 02/09/2025 (question 8), 15/01/2026 (questions 8 and 10), 03/07/2026 (question 5), 07/09/2026 (problem 11); tutoring sheet 3, 2025/26 (exercises 1, 2, 3 and 5). Official papers and solutions on the 2025/26 Moodle ([id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)); the solutions reported here are written from scratch.
- The **"Beyond the handouts"** parts (the proof of Proposition 16.4, that of 16.12 from the book, the trace as an invariant, the added examples and exercises) serve to connect the lesson to the rest of the course and to the exam.
