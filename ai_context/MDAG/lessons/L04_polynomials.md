---
course: MDAG
module: AG
lesson: L04
title: Polynomials
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Linear Algebra and Geometry · Channels A, B and C · Lesson L04
description: >-
  Notes on lesson L04 of Linear Algebra and Geometry (MDAG, part 2): polynomials and degree, division with remainder
  and Ruffini's rule, roots and multiplicity, how many roots a polynomial can have, the fundamental theorem of
  algebra, second-degree equations in the complex numbers and polynomials with real coefficients, with exam-style
  quizzes and worked exercises.
lede: >-
  Polynomials like $x^3 - 2x + 5$ can be added, multiplied and divided with remainder, just like integers. Their
  roots correspond to the factors $x - a$ and are counted with multiplicity: a polynomial of degree $n$ has at most
  $n$ of them, and in the complex numbers exactly $n$ (fundamental theorem of algebra). They are needed throughout the
  course: eigenvalues, determinants with a parameter and spaces of polynomials $\R_k[x]$ all start from here.
material: handouts
facts:
  Handouts: lesson 4 · pp. 15–19
  Book: Martelli, §1.3 (pp. 21–25) and §1.4.7–1.4.8 (pp. 31–33)
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 90–120 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 4 "Polinomi"; B. Martelli, Geometria e algebra lineare, §1.3 and §1.4.7–1.4.8
italian_file: L04_polinomi.html
html_notes: notes/MDAG/L04_polynomials.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L04_polinomi.md
---

## In brief

- A **polynomial** in one variable, written in normal form, is $p(x) = a_nx^n + \dots + a_1x + a_0$ with $a_n \neq 0$; the number $n$ is its **degree**. $\R[x]$ and $\C[x]$ are the polynomials with real and complex coefficients, $\R_k[x]$ the real ones of degree at most $k$.
- As among the integers, you can **divide with remainder**: given $p(x)$ and $d(x) \neq 0$ there exist unique $q(x)$ and $r(x)$ with $p(x) = q(x)d(x) + r(x)$ and the degree of $r$ smaller than the degree of $d$. If $r = 0$ we say that $d(x)$ **divides** $p(x)$.
- A number $a$ is a **root** of $p(x)$ if $p(a) = 0$. Proposition 4.2: $a$ is a root if and only if $(x - a)$ divides $p(x)$. Moreover the remainder of the division by $x - a$ is exactly $p(a)$.
- The **multiplicity** of a root $a$ is the largest $k$ for which $(x - a)^k$ divides $p(x)$: in $(x - 1)^3(x + 1)$ the root $1$ has multiplicity $3$.
- Theorem 4.6: a polynomial of degree $n \ge 1$ has **at most $n$ roots**, counted with multiplicity. Among the reals there may be fewer: $x^2 + 1$ has none.
- **Fundamental theorem of algebra** (4.8): a polynomial with complex coefficients of degree $n$ has **exactly $n$ roots** in the complex numbers, counted with multiplicity.
- The formula $x_\pm = \frac{-b \pm \sqrt\Delta}{2a}$ also works in $\C$, with $\pm\sqrt\Delta$ the two complex square roots of $\Delta$.
- Proposition 4.11: if the coefficients are **real** and $z$ is a root, so is $\bar z$. At the exam: "which of these numbers is a root of $p(z)$?" was the question on complex numbers in three exam sessions.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## Monomials and polynomials (p. 15)

The handouts describe polynomials as particularly simple functions, obtained by combining numbers and variables with only the operations $+$, $-$ and $\cdot$. No divisions by a variable, no roots of variables, no negative exponents: $x^2 + 3$ is a polynomial, $\frac 1x$ and $\sqrt x$ are not.

### Monomials

A **monomial** is an expression with a **numerical part**, the **coefficient**, and a **literal part**, made of variables raised to natural exponents. The **degree** of a monomial is the sum of the exponents of the variables.

| Monomial | Coefficient | Literal part | Degree |
|---|---|---|--:|
| $4x$ | $4$ | $x$ | $1$ |
| $-2xy$ | $-2$ | $xy$ | $1 + 1 = 2$ |
| $\sqrt 5\,x^3$ | $\sqrt 5$ | $x^3$ | $3$ |
| $7$ | $7$ | none | $0$ |

These are the three examples of the handouts, plus the last row: a monomial of degree zero is simply a number.

### Polynomials and normal form

A **polynomial** is a sum of monomials, for example $7 + 3x^2 - \sqrt 2\,y^3$ (here there are two variables, $x$ and $y$). The same polynomial can be written in many ways; to compare them a standard way of writing is used.

> [!DEF] Normal form and degree (p. 15)
> A polynomial is **reduced to normal form** if it is written as a sum of monomials with different literal parts and non-zero coefficients, or it is the polynomial $0$. To reduce it to normal form it is enough to collect the monomials with the same literal part and then eliminate those with zero coefficient.
>
> The **degree** of a polynomial written in normal form is the largest degree of its monomials.

> [!EXAMPLE] · Reduce, then read the degree
> $3x^2 + 2x - x^2 + 5 - 2x$: collect the similar monomials, $(3 - 1)x^2 + (2 - 2)x + 5 = 2x^2 + 0x + 5$, and eliminate the one with zero coefficient. Normal form: $2x^2 + 5$, degree $2$.
>
> $7 + 3x^2 - \sqrt 2\,y^3$ is already in normal form: the monomials have degrees $0$, $2$ and $3$, so the polynomial has degree $3$.

> [!PITFALL] The degree is read after reducing
> $(x + 1)^2 - x^2$ looks like a second-degree polynomial, but expanding you get $x^2 + 2x + 1 - x^2 = 2x + 1$: the degree is $1$. First reduce to normal form, then look at the degree.

### Polynomials in one variable

In the course we are interested above all in polynomials with a single variable $x$, denoted by $p(x)$ or simply by $p$. Ordering the monomials from the highest degree to the lowest you get the expression

$$p(x) = a_nx^n + \dots + a_1x + a_0, \qquad a_n \neq 0,$$

where $n$ is the degree of $p(x)$. The numbers $a_n, \dots, a_1, a_0$ are the **coefficients**; $a_0$ is called the **constant term**. Two examples from the handouts:

- $x^3 - 2x + 5$ has degree $3$, with $a_3 = 1$, $a_2 = 0$ (the term in $x^2$ is missing), $a_1 = -2$, $a_0 = 5$;
- $4x^2 - 7$ has degree $2$, with $a_2 = 4$, $a_1 = 0$, $a_0 = -7$.

A polynomial of degree zero is simply a number $a_0 \neq 0$.

> [!DEF] The sets of polynomials (p. 15)
> $\R[x]$ is the set of polynomials with coefficients in $\R$ in which a single variable $x$ appears, and $\C[x]$ the set of polynomials with coefficients in $\C$ in which a single variable $x$ appears. $\R_k[x]$ denotes the polynomials in $\R[x]$ that have degree $\le k$ (similarly $\C_k[x]$).

Piece by piece:

- $\R[x] \subset \C[x]$, because real numbers are complex. For example $x^2 + 1$ belongs to both, while $ix + 1$ belongs to $\C[x]$ but not to $\R[x]$.
- $\R_k[x]$ contains **all** the real polynomials of degree at most $k$, including those of lower degree and the zero polynomial. For example $\R_2[x] = \{ax^2 + bx + c \mid a, b, c \in \R\}$ contains $x^2 - 3$, $5x$, $7$ and $0$ (with $a = 0$ the degree drops), but not $x^3$.
- From lesson L05 on, $\R_k[x]$ will be one of the main examples of a **vector space**: in the exam papers there are often questions on sets like $\{p(x) \in \R_3[x] \mid p(6) = 0\}$.

> [!BEYOND] · the zero polynomial and the degree of products
> The polynomial $0$ has no monomials, so its degree is not defined (some books give it degree $-\infty$). For two non-zero polynomials two useful rules hold:
> - $\deg(pq) = \deg p + \deg q$: the terms of highest degree multiply, $a_nx^n \cdot b_mx^m = a_nb_m\,x^{n + m}$, and $a_nb_m \neq 0$. For example $(x^2 + 1)(x^3 - x)$ has degree $5$.
> - $\deg(p + q) \le$ the larger of $\deg p$ and $\deg q$, and it can be smaller if the highest terms cancel out, as in the pitfall above.
>
> Martelli also calls a polynomial with $a_n = 1$ **monic**.

## Division with remainder (pp. 15–16)

Polynomials resemble integers: they can be added and multiplied, and **divisions with remainder** can be done. Among the integers, dividing $44$ by $6$ you find quotient $7$ and remainder $2$:

$$44 = 7 \cdot 6 + 2,$$

and the remainder $2$ is smaller than the divisor $6$. For polynomials "smaller" means "of lower degree".

> [!PROP] · Division with remainder (p. 16)
> Given two polynomials $p(x)$ (the **dividend**) and $d(x) \neq 0$ (the **divisor**), there always exist, and they are unique, two polynomials $q(x)$ (the **quotient**) and $r(x)$ (the **remainder**) such that
> $$p(x) = q(x)d(x) + r(x),$$
> with the property that the remainder $r(x)$ has degree strictly smaller than the divisor $d(x)$.

Piece by piece:

- $d(x) \neq 0$: as among numbers, you do not divide by zero.
- The condition on the degree is what makes quotient and remainder **unique**. Without it you could write infinitely many equalities of the form $p = qd + r$ (you find an example in the quiz).
- The remainder can be the polynomial $0$: it is the important case, the one of divisibility.

The handouts say that divisions are done with pen and paper using the same procedure as for integers. Here it is, step by step.

> [!METHOD] Long division
> 1. Write dividend and divisor in order of decreasing degree; in the dividend put $0$ in place of the missing degrees.
> 2. Divide the highest-degree term of the dividend by the highest-degree term of the divisor: it is the first term of the quotient.
> 3. Multiply the divisor by this term and **subtract** the result from the dividend: the highest term cancels out.
> 4. Repeat steps 2 and 3 with the polynomial obtained, until its degree becomes **smaller** than the degree of the divisor. What is left is the remainder.
> 5. Check: $q(x)d(x) + r(x)$ must give back $p(x)$.

> [!EXAMPLE] · The handouts' example: $x^3 + 1$ divided by $x^2 - 1$
> 1. $x^3 : x^2 = x$: the quotient starts with $x$.
> 2. $x \cdot (x^2 - 1) = x^3 - x$, and $(x^3 + 1) - (x^3 - x) = x + 1$.
> 3. $x + 1$ has degree $1$, smaller than the degree $2$ of the divisor: we stop.
>
> Quotient $q(x) = x$, remainder $r(x) = x + 1$:
> $$x^3 + 1 = x\left(x^2 - 1\right) + (x + 1).$$
> Check: $x^3 - x + x + 1 = x^3 + 1$.

> [!EXAMPLE] · A division in two steps: $2x^3 + 3x^2 - x + 5$ divided by $x^2 - x + 1$
> 1. $2x^3 : x^2 = 2x$. Then $2x(x^2 - x + 1) = 2x^3 - 2x^2 + 2x$, and subtracting:
>    $$(2x^3 + 3x^2 - x + 5) - (2x^3 - 2x^2 + 2x) = 5x^2 - 3x + 5.$$
> 2. The degree is still $2$, so we continue: $5x^2 : x^2 = 5$. Then $5(x^2 - x + 1) = 5x^2 - 5x + 5$, and subtracting:
>    $$(5x^2 - 3x + 5) - (5x^2 - 5x + 5) = 2x.$$
> 3. $2x$ has degree $1 < 2$: end.
>
> Quotient $q(x) = 2x + 5$, remainder $r(x) = 2x$. Check: $(2x + 5)(x^2 - x + 1) + 2x = 2x^3 - 2x^2 + 2x + 5x^2 - 5x + 5 + 2x = 2x^3 + 3x^2 - x + 5$.

### When a polynomial divides another

Among the integers, $7$ divides $14$ but not $15$: the division of $14$ by $7$ has zero remainder, that of $15$ by $7$ does not. For polynomials the same word is used.

> [!DEF] Divisibility (p. 16)
> If the division between two polynomials $p(x)$ and $d(x)$ has zero remainder, then $p(x) = q(x)d(x)$ for some quotient $q(x)$, and we say that $d(x)$ **divides** $p(x)$. The vertical bar $\mid$ is used as a synonym of "divides":
> $$9 \mid 18, \qquad (x + 1) \mid \left(x^3 + 1\right).$$

Let us check the second example with the long division of $x^3 + 0x^2 + 0x + 1$ by $x + 1$:

1. $x^3 : x = x^2$; $x^2(x + 1) = x^3 + x^2$; subtracting, what is left is $-x^2 + 0x + 1$.
2. $-x^2 : x = -x$; $-x(x + 1) = -x^2 - x$; subtracting, what is left is $x + 1$.
3. $x : x = 1$; $1 \cdot (x + 1) = x + 1$; subtracting, what is left is $0$.

The remainder is zero, and the quotient is $x^2 - x + 1$: indeed, as the handouts note, $\left(x^3 + 1\right) = \left(x^2 - x + 1\right)(x + 1)$.

> [!PITFALL] The zeros and the stopping condition
> If some degrees are missing in the dividend, as in $x^3 + 1$, you must write the zeros ($x^3 + 0x^2 + 0x + 1$), otherwise you subtract terms of different degrees. And you stop when the degree of what is left is **smaller** than that of the divisor, not when "a number is left": dividing by $x^2 - x + 1$, the remainder $2x$ is perfectly fine.

## Ruffini's rule (beyond the handouts)

When the divisor has the form $x - a$ (degree $1$), the long division can be written in a table that contains only the coefficients: it is **Ruffini's rule** (synthetic division). It is the fastest way to use Proposition 4.2 of the next section.

> [!METHOD] Dividing $p(x)$ by $x - a$ with Ruffini
> 1. Write the coefficients of $p(x)$ in a row, from the highest degree to the constant term, with **zeros** for the missing degrees. Write $a$ on the left. Watch out for the sign: to divide by $x + 2$ you use $a = -2$.
> 2. Bring the first coefficient down to the last row.
> 3. Multiply by $a$ the last number written at the bottom, write the product in the next column (middle row) and add: the result goes at the bottom.
> 4. Repeat until the last column. The last number at the bottom is the **remainder**; the others are the coefficients of the **quotient**, which has degree one less.

> [!EXAMPLE] · $2x^3 - 3x^2 + 4x - 5$ divided by $x - 2$
> Coefficients $2, -3, 4, -5$ and $a = 2$:
>
> | | $2$ | $-3$ | $4$ | $-5$ |
> |---|--:|--:|--:|--:|
> | $a = 2$ | | $4$ | $2$ | $12$ |
> | | $2$ | $1$ | $6$ | $7$ |
>
> Column by column: bring down the $2$; $2 \cdot 2 = 4$ and $-3 + 4 = 1$; $1 \cdot 2 = 2$ and $4 + 2 = 6$; $6 \cdot 2 = 12$ and $-5 + 12 = 7$. So quotient $q(x) = 2x^2 + x + 6$ and remainder $7$:
> $$2x^3 - 3x^2 + 4x - 5 = (2x^2 + x + 6)(x - 2) + 7.$$
> Note: $p(2) = 16 - 12 + 8 - 5 = 7$, exactly the remainder. It is not a coincidence: the next section explains it.

With the tool below you can repeat the division with other polynomials and other values of $a$ (the coefficients are written from the highest degree, separated by spaces). The button **Factor with the rational roots** tries all the candidates $\pm\frac{\text{divisors of the constant term}}{\text{divisors of the leading coefficient}}$ and factors the polynomial: try it with `1 -6 11 -6` and with `1 -1 -3 5 -2`.

```widget ruffini
title: Division by $x - a$ with Ruffini's table
coefficienti: 2 -3 4 -5
a: 2
```

## Roots of a polynomial (p. 16)

If $p(x)$ is a polynomial and $a$ is a number, $p(a)$ is the number you get by **substituting** $a$ in place of $x$. For example, if $p(x) = x^2 - 3$, then $p(-2) = (-2)^2 - 3 = 4 - 3 = 1$, $p(0) = -3$ and $p(\sqrt 3) = 3 - 3 = 0$.

> [!DEF] 4.1
> A number $a$ is a **root** of a polynomial $p(x)$ if $p(a) = 0$.

In other words, the roots of $p(x)$ are the **solutions of the equation** $p(x) = 0$. Some examples:

- $-1$ is a root of $p(x) = x^3 + 1$, because $p(-1) = (-1)^3 + 1 = 0$ (example from the handouts); instead $2$ is not, because $p(2) = 9$;
- $\sqrt 3$ and $-\sqrt 3$ are roots of $x^2 - 3$;
- $i$ is a root of $x^2 + 1$, because $i^2 + 1 = -1 + 1 = 0$: roots can be complex numbers, and to check them you need the computations of lessons L02 and L03.

The handouts recall that finding the roots of a polynomial is one of the most classical problems of algebra. The criterion that follows links the roots to division.

## Roots and factors: Proposition 4.2 (pp. 16–17)

> [!PROP] 4.2
> The number $a$ is a root of $p(x)$ if and only if $(x - a) \mid p(x)$.

**Proof** (from the handouts, with every step explained).

1. Divide $p(x)$ by $(x - a)$: by division with remainder, $p(x) = q(x)(x - a) + r(x)$, with $q(x)$ the quotient and $r(x)$ the remainder.
2. The degree of $r(x)$ is strictly smaller than that of $x - a$, which is $1$. So $r(x)$ has degree zero (or it is the zero polynomial): it is a **constant**, which we write $r_0$. Then
   $$p(x) = q(x)(x - a) + r_0.$$
3. Substitute $a$ in place of $x$: the factor $a - a$ vanishes, and what is left is
   $$p(a) = q(a)(a - a) + r_0 = 0 + r_0 = r_0.$$
4. So $a$ is a root of $p(x)$ (that is $p(a) = 0$) if and only if $r_0 = 0$.
5. On the other hand $r_0 = 0$ if and only if the division by $x - a$ has zero remainder, that is if and only if $(x - a)$ divides $p(x)$. $\square$

> [!IDEA] · the remainder is the value
> Step 3 says something more than the statement: **the remainder of the division of $p(x)$ by $x - a$ is $p(a)$**. It is what you saw with Ruffini: dividing by $x - 2$ the remainder was $7 = p(2)$. So to know whether $a$ is a root it is enough to compute $p(a)$; and to know the remainder of the division by $x - a$ you do not need to do the division.

> [!METHOD] Factoring a polynomial starting from a root
> 1. Look for a root $a$ by trying simple numbers: $0$, $\pm 1$, $\pm 2$, … If the coefficients are integers, an integer root divides the constant term (see the box below).
> 2. Divide by $x - a$ with Ruffini: $p(x) = (x - a)q(x)$, with $q(x)$ of degree one less.
> 3. Repeat with $q(x)$. When you reach degree two use the formula with $\Delta$.

> [!EXAMPLE] · $x^3 - 6x^2 + 11x - 6$
> 1. I try $x = 1$: $1 - 6 + 11 - 6 = 0$. So $1$ is a root and $(x - 1)$ divides the polynomial.
> 2. Ruffini with $a = 1$ on the coefficients $1, -6, 11, -6$: bring down $1$; $1 - 6 = -5$; $-5 + 11 = 6$; $6 - 6 = 0$. Quotient $x^2 - 5x + 6$, remainder $0$.
> 3. $x^2 - 5x + 6 = (x - 2)(x - 3)$: two numbers with sum $5$ and product $6$.
>
> So $x^3 - 6x^2 + 11x - 6 = (x - 1)(x - 2)(x - 3)$, with roots $1$, $2$, $3$.

> [!BEYOND] · rational roots
> If $p(x)$ has **integer** coefficients and $\frac uv$ is a rational root in lowest terms, then $u$ divides the constant term $a_0$ and $v$ divides the leading coefficient $a_n$. In particular, if $a_n = 1$, every rational root is an **integer that divides $a_0$**. For $x^3 - 6x^2 + 11x - 6$ the candidates were only $\pm 1, \pm 2, \pm 3, \pm 6$. The reason: from $p\left(\frac uv\right) = 0$, multiplying by $v^n$, you get $a_nu^n + a_{n-1}u^{n-1}v + \dots + a_0v^n = 0$; all the terms except the last are multiples of $u$, so $a_0v^n$ is one too, and since $u$ and $v$ have no common factors, $u$ divides $a_0$. In the same way $v$ divides $a_n$.

## Multiplicity (p. 17)

A root can appear "several times". In $(x - 2)^2 = (x - 2)(x - 2)$ the factor $x - 2$ is there twice.

> [!DEF] 4.3
> The **multiplicity** of a root $a$ of a polynomial $p(x)$ is the largest number $k$ such that $(x - a)^k$ divides $p(x)$.

Informally, the handouts say, the multiplicity of $a$ measures "how many times" $a$ is a root of $p(x)$. A root of multiplicity $1$ is called **simple**, of multiplicity $2$ **double**, of multiplicity $3$ **triple**.

> [!EXAMPLE] 4.4 · Multiplicity $1$ and $2$
> The polynomial $x^3 - 1$ has the root $1$ with multiplicity $1$, because
> $$x^3 - 1 = (x - 1)\left(x^2 + x + 1\right)$$
> and $(x - 1)$ does not divide $x^2 + x + 1$, simply because $1$ is not a root of $x^2 + x + 1$: indeed $1 + 1 + 1 = 3 \neq 0$.
>
> Similarly the polynomial $x^3 - 2x^2 + x = x\left(x^2 - 2x + 1\right) = (x - 1)^2x$ has the root $1$ with multiplicity $2$ and the root $0$ with multiplicity $1$.

> [!EXAMPLE] 4.5 · In the product the multiplicities add up
> The polynomials $q_1(x) = x^2 - 2x + 1$ and $q_2(x) = x^2 - 1$ can be written
> $$q_1(x) = (x - 1)^2, \qquad q_2(x) = (x + 1)(x - 1).$$
> The first has the root $1$ with multiplicity $2$; the second has the roots $-1$ and $1$, both with multiplicity $1$. The product
> $$p(x) = q_1(x)q_2(x) = (x - 1)^3(x + 1)$$
> has the root $1$ with multiplicity $2 + 1 = 3$ and the root $-1$ with multiplicity $1$.

When the polynomial is not already factored, the multiplicity is found by dividing several times.

> [!METHOD] Computing the multiplicity of a root $a$
> Divide $p(x)$ by $x - a$ (with Ruffini). If the quotient still has $a$ as a root, divide again. Continue until $a$ is no longer a root of the quotient: the number of divisions done is the multiplicity.

> [!EXAMPLE] · $p(x) = x^4 - x^3 - 3x^2 + 5x - 2$ and the root $1$
> $p(1) = 1 - 1 - 3 + 5 - 2 = 0$, so $1$ is a root.
> 1. Ruffini with $a = 1$ on $1, -1, -3, 5, -2$: at the bottom $1, 0, -3, 2$ and remainder $0$. Quotient $x^3 - 3x + 2$.
> 2. $1 - 3 + 2 = 0$: $1$ is still a root. Ruffini on $1, 0, -3, 2$: at the bottom $1, 1, -2$ and remainder $0$. Quotient $x^2 + x - 2$.
> 3. $1 + 1 - 2 = 0$: still a root. Ruffini on $1, 1, -2$: at the bottom $1, 2$ and remainder $0$. Quotient $x + 2$.
> 4. $1 + 2 = 3 \neq 0$: $1$ is not a root of $x + 2$. Stop.
>
> Three divisions: the root $1$ has multiplicity $3$, and $p(x) = (x - 1)^3(x + 2)$.

### What you see in the graph (beyond the handouts)

For a real polynomial, the real roots are the points where the graph of $y = p(x)$ touches the $x$ axis. The multiplicity can be seen from the shape: at a root of **odd** multiplicity the graph **crosses** the axis, at a root of **even** multiplicity it **touches** it and turns back, because the factor $(x - a)^2$ does not change sign.

```graph
title: $y = (x - 1)^2(x + 2) = x^3 - 3x + 2$: at $-2$ (simple root) the graph crosses the axis, at $1$ (double root) it only touches it
proportions: free
x: -3 3
y: -2 6
segment: -2.4 -4.624 -2.2 -2.048 | accent | thick
segment: -2.2 -2.048 -2.0 0 | accent | thick
segment: -2.0 0 -1.8 1.568 | accent | thick
segment: -1.8 1.568 -1.6 2.704 | accent | thick
segment: -1.6 2.704 -1.4 3.456 | accent | thick
segment: -1.4 3.456 -1.2 3.872 | accent | thick
segment: -1.2 3.872 -1.0 4.0 | accent | thick
segment: -1.0 4.0 -0.8 3.888 | accent | thick
segment: -0.8 3.888 -0.6 3.584 | accent | thick
segment: -0.6 3.584 -0.4 3.136 | accent | thick
segment: -0.4 3.136 -0.2 2.592 | accent | thick
segment: -0.2 2.592 0 2 | accent | thick
segment: 0 2 0.2 1.408 | accent | thick
segment: 0.2 1.408 0.4 0.864 | accent | thick
segment: 0.4 0.864 0.6 0.416 | accent | thick
segment: 0.6 0.416 0.8 0.112 | accent | thick
segment: 0.8 0.112 1.0 0 | accent | thick
segment: 1.0 0 1.2 0.128 | accent | thick
segment: 1.2 0.128 1.4 0.544 | accent | thick
segment: 1.4 0.544 1.6 1.296 | accent | thick
segment: 1.6 1.296 1.8 2.432 | accent | thick
segment: 1.8 2.432 2.0 4.0 | accent | thick
segment: 2.0 4.0 2.2 6.048 | accent | thick
point: -2 0 | pink
point: 1 0 | amber
```

## How many roots: Theorem 4.6 (p. 18)

> [!THEOREM] 4.6
> A polynomial $p(x)$ of degree $n \ge 1$ has at most $n$ roots, counted with multiplicity.

"Counted with multiplicity" means that you add up, for each root, its multiplicity: $(x - 1)^3(x + 1)$ has two different roots, but counted with multiplicity they are $3 + 1 = 4$, as many as the degree. The theorem says that this sum never exceeds the degree.

The proof uses **induction** on the degree $n$, which you will see in detail in Discrete Mathematics: you prove the statement for $n = 1$ (**base case**), then you show that, if it holds for degree $n - 1$, it also holds for degree $n$ (**inductive step**). So it holds for $n = 1$, hence for $n = 2$, hence for $n = 3$, and so on.

> [!PROOF] of Theorem 4.6
> **Base case, $n = 1$.** The polynomial is $p(x) = a_1x + a_0$ with $a_1 \neq 0$, and $p(x) = 0$ means $x = -\frac{a_0}{a_1}$: there is a single root, of multiplicity $1$. The statement holds.
>
> **Inductive step.** Suppose the statement is true for polynomials of degree $n - 1$ and take $p(x)$ of degree $n$.
> 1. If $p(x)$ has no roots, there is nothing to prove: $0 \le n$.
> 2. If it has at least one root $a$, by Proposition 4.2 we can write $p(x) = (x - a)q(x)$, and $q(x)$ has degree $n - 1$ (the degrees of the factors add up).
> 3. By the inductive hypothesis $q(x)$ has at most $n - 1$ roots counted with multiplicity.
> 4. The roots of $p(x)$, counted with multiplicity, are exactly those of $q(x)$ plus $a$. Indeed for $b \neq a$ we have $p(b) = (b - a)q(b)$ with $b - a \neq 0$, so $p(b) = 0$ if and only if $q(b) = 0$; and the multiplicity of $a$ in $p$ is the one in $q$ plus one, as in Example 4.5.
> 5. So $p(x)$ has at most $(n - 1) + 1 = n$ roots, counted with multiplicity. $\square$

> [!EXAMPLE] 4.7 · Polynomials of the first and second degree
> A polynomial of degree $1$ is always of the form $p(x) = ax + b$ with $a \neq 0$, and always has a single root $x = -\frac ba$.
>
> A polynomial of degree $2$ is of the form $p(x) = ax^2 + bx + c$ with $a \neq 0$, and its roots depend on the **discriminant** $\Delta = b^2 - 4ac$ in the following way.
> - If $\Delta > 0$, the polynomial $p(x)$ has two distinct roots $x_\pm = \frac{-b \pm \sqrt\Delta}{2a}$, both of multiplicity one.
> - If $\Delta = 0$, the polynomial $p(x)$ has a single root $x = -\frac b{2a}$, with multiplicity two.
> - If $\Delta < 0$, the polynomial $p(x)$ has no real roots.
>
> In particular, there are polynomials that have no real roots.

Three examples, one per case:

| Polynomial | $\Delta = b^2 - 4ac$ | Real roots | Factorisation |
|---|---|---|---|
| $x^2 - 5x + 6$ | $25 - 24 = 1 > 0$ | $\frac{5 \pm 1}2$, that is $3$ and $2$ | $(x - 2)(x - 3)$ |
| $x^2 - 4x + 4$ | $16 - 16 = 0$ | $\frac 42 = 2$, double | $(x - 2)^2$ |
| $x^2 + x + 1$ | $1 - 4 = -3 < 0$ | none | does not factor in $\R$ |

> [!BEYOND] · where the formula comes from
> You "complete the square". For $a \neq 0$:
> $$ax^2 + bx + c = a\left(x + \frac b{2a}\right)^2 - \frac{\Delta}{4a}.$$
> (To check it, expand the square: $a\left(x^2 + \frac bax + \frac{b^2}{4a^2}\right) - \frac{b^2 - 4ac}{4a} = ax^2 + bx + c$.) So $p(x) = 0$ is equivalent to $\left(x + \frac b{2a}\right)^2 = \frac\Delta{4a^2}$. If $\Delta > 0$ you take the square root of both sides, with both signs; if $\Delta = 0$ what is left is $x = -\frac b{2a}$; if $\Delta < 0$ a real square would have to be negative, which is impossible. It is the proof of Proposition 1.3.8 of Martelli's book.

## The fundamental theorem of algebra (p. 18)

The handouts thus arrive "at the real reason why we introduced complex numbers in this course".

> [!THEOREM] 4.8 · Fundamental theorem of algebra
> A polynomial $p(x)$ with complex coefficients of degree $n$ has exactly $n$ roots, counted with multiplicity.

Piece by piece:

- Theorem 4.6 said "**at most** $n$". In the complex numbers the inequality becomes an **equality**: the roots are always all there.
- It also holds for polynomials with real coefficients, which are particular polynomials with complex coefficients: $x^2 + 1$ has no real roots, but it has the two complex roots $i$ and $-i$.
- The handouts do not prove it: the most accessible proofs use tools from calculus that are far from the course.

> [!BEYOND] · another form of the same theorem
> In Martelli's book the fundamental theorem (Theorem 1.4.7) says that **every non-constant polynomial with complex coefficients has at least one root**; from this you obtain the handouts' version (Corollary 1.4.8) with the same induction as Theorem 4.6: once a root $z_1$ is found, you write $p(x) = (x - z_1)q(x)$ and repeat on $q(x)$. The final result can also be written as a **factorisation into factors of degree one** (Corollary 1.4.10):
> $$p(x) = a_n(x - z_1)(x - z_2)\cdots(x - z_n),$$
> where $z_1, \dots, z_n$ are the roots repeated according to their multiplicity. For example $x^4 - 1 = (x - 1)(x + 1)(x - i)(x + i)$.

## Second-degree equations in C (p. 19)

> [!EXAMPLE] 4.9 · The usual formula, in the complex numbers
> For a second-degree polynomial $p(x) = ax^2 + bx + c$ the two complex roots are found using the usual formula
> $$x_\pm = \frac{-b \pm \sqrt\Delta}{2a}.$$
> This time, $\pm\sqrt\Delta$ denotes the **two complex square roots** of $\Delta$, which always exist, as seen in lesson L03.

Here $a$, $b$, $c$ can be complex, and then $\Delta$ too can be a complex number: the distinction "$\Delta > 0$, $\Delta = 0$, $\Delta < 0$" only makes sense if $\Delta$ is real.

> [!METHOD] A second-degree equation in $\C$
> 1. Read off $a$, $b$, $c$ and compute $\Delta = b^2 - 4ac$.
> 2. Find the two square roots $\pm w$ of $\Delta$: if $\Delta$ is a negative real number, $\pm w = \pm i\sqrt{|\Delta|}$; if $\Delta$ is complex, use the polar form or the method $w = u + vi$ (lessons L02 and L03).
> 3. The roots are $x_\pm = \frac{-b \pm w}{2a}$.
> 4. Check by substituting, or with sum and product: $x_+ + x_- = -\frac ba$ and $x_+x_- = \frac ca$.

> [!EXAMPLE] 4.10 · Two examples from the handouts
> **$x^2 + 1$.** $a = 1$, $b = 0$, $c = 1$, so $\Delta = -4$, whose square roots are $\pm 2i$. The roots are $x_\pm = \frac{\pm 2i}2 = \pm i$.
>
> **$x^2 + (1 - i)x - i$.** Here $a = 1$, $b = 1 - i$, $c = -i$, and
> $$\Delta = (1 - i)^2 - 4 \cdot 1 \cdot (-i) = (1 - 2i + i^2) + 4i = -2i + 4i = 2i.$$
> The square roots of $2i$ are $\pm(1 + i)$ (lesson L03: $2i = 2e^{i\pi/2}$ and $\sqrt 2\,e^{i\pi/4} = 1 + i$). So
> $$x_\pm = \frac{-1 + i \pm \sqrt{2i}}{2} = \frac{-1 + i \pm (1 + i)}{2} \implies x_+ = \frac{2i}2 = i, \quad x_- = \frac{-2}2 = -1.$$
> Check: $i^2 + (1 - i)i - i = -1 + i + 1 - i = 0$ and $(-1)^2 + (1 - i)(-1) - i = 1 - 1 + i - i = 0$.

Two more examples with the same method:

- $x^2 + 2x + 5$: $\Delta = 4 - 20 = -16$, square roots $\pm 4i$, so $x_\pm = \frac{-2 \pm 4i}2 = -1 \pm 2i$. Check with the product: $(-1 + 2i)(-1 - 2i) = 1 + 4 = 5 = \frac ca$.
- $x^2 - 2ix - 2$: $\Delta = (-2i)^2 - 4 \cdot (-2) = -4 + 8 = 4$, square roots $\pm 2$, so $x_\pm = \frac{2i \pm 2}2 = \pm 1 + i$. Here the roots $1 + i$ and $-1 + i$ are **not** conjugate: the coefficients are not real (see the next section).

## Polynomials with real coefficients (p. 19)

A polynomial of degree $n$ has exactly $n$ complex roots counted with multiplicity. If its coefficients are **real**, something more can be said.

> [!PROP] 4.11
> Let $p(x)$ be a polynomial with real coefficients. If $z$ is a complex root of $p(x)$, then $\bar z$ is also a root of $p(x)$.

**Proof** (from the handouts, with the rules used).

1. The polynomial is $p(x) = a_nx^n + \dots + a_1x + a_0$, and by hypothesis the coefficients $a_n, \dots, a_0$ are all real.
2. If $z$ is a root, then $p(z) = a_nz^n + \dots + a_1z + a_0 = 0$.
3. Apply conjugation to both sides. The conjugate of a sum is the sum of the conjugates and the conjugate of a product is the product of the conjugates (exercise 2.5, lesson L02); in particular $\overline{z^k} = \bar z^k$. So
   $$\overline{a_n}\,\bar z^n + \dots + \overline{a_1}\,\bar z + \overline{a_0} = \bar 0 = 0.$$
4. Since the coefficients are real, the conjugate of $a_i$ is always $a_i$ (lesson L02: $z \in \R \iff z = \bar z$). So
   $$a_n\bar z^n + \dots + a_1\bar z + a_0 = 0,$$
   that is $p(\bar z) = 0$: $\bar z$ too is a root of $p(x)$. $\square$

> [!EXAMPLE] · $x^3 - 1$ and the cube roots of unity
> $x^3 - 1 = (x - 1)(x^2 + x + 1)$ (Example 4.4). The factor $x^2 + x + 1$ has $\Delta = -3$, square roots $\pm i\sqrt 3$, so roots $\frac{-1 \pm i\sqrt 3}2$. The three roots of $x^3 - 1$ are $1$ and the conjugate pair $-\frac 12 \pm \frac{\sqrt 3}2 i$: they are the three cube roots of unity of lesson L03, and the triangle they form is symmetric with respect to the real axis.

> [!PITFALL] The coefficients need to be real
> In Example 4.10 the polynomial $x^2 + (1 - i)x - i$ has the root $i$, but $-i$ is **not** a root: the roots are $i$ and $-1$. Proposition 4.11 does not apply, because the coefficient $1 - i$ is not real. In the same way, in problem 11 of the exam of 03/06/2026 a characteristic polynomial with complex coefficients had the root $i$ double and the root $-i$ simple.

> [!BEYOND] · three consequences
> - The **non-real** roots of a polynomial with real coefficients come in **pairs** $z, \bar z$ (with the same multiplicity, even though Proposition 4.11 alone does not say so). So there is an even number of them.
> - A polynomial with real coefficients of **odd degree** always has at least one **real** root: the $n$ complex roots are an odd number, and the non-real ones an even number (Proposition 1.4.13 of Martelli's book).
> - For $z = u + vi$ with $v \neq 0$: $(x - z)(x - \bar z) = x^2 - 2ux + (u^2 + v^2)$, a **real** polynomial of degree two with $\Delta = -4v^2 < 0$. This is why every real polynomial factors into real factors of degree one and of degree two with $\Delta < 0$ (Corollary 1.4.12). For example $x^3 - 1 = (x - 1)(x^2 + x + 1)$ and $x^4 - 1 = (x - 1)(x + 1)(x^2 + 1)$.

> [!BEYOND] · where to find it in the book
> In Martelli's book this lesson corresponds to §1.3 "Polinomi" (pp. 21–25: definition, division with remainder, roots, Proposition 1.3.2 = 4.2, multiplicity, Theorem 1.3.7 = 4.6, the second-degree formula with proof) and to parts 1.4.7 "Teorema fondamentale dell'algebra" and 1.4.8 "Polinomi a coefficienti reali" of §1.4 (pp. 31–33). The examples are the same as in the handouts (in Martelli the first division between integers is $26 = 2 \cdot 11 + 4$). Exercise 1.12 (p. 37) links multiplicity to the derivative, which you will see in Calculus.

## Towards the exam

**The test in two lines.** 10 multiple-choice questions (5 answers, one right) and 2 problems worth 11 points, marked only with at least 6 points in the quiz; 2 hours, no calculator, only 4 handwritten pages of notes. 2026/27 Linear Algebra exam sessions: 22/01/2027 and 05/02/2027 at 14:00. Complete rules and sources in lesson L01.

**Where polynomials appear in the exam sessions from 2023/24 to 2025/26.**

| Use | Examples in the exam sessions | Lessons |
|---|---|---|
| "which of these numbers is a root of $p(z)$?" | 10/07/2025 (question 1), 03/07/2026 (question 7), 07/09/2026 (question 1) | this one |
| roots of the characteristic polynomial, often of degree three, to be factored by finding a root and dividing | 02/09/2025 (question 4, with $-t^3 + 8$), problems on eigenvalues in almost every exam session | L17, L18 |
| a determinant that depends on a parameter $k$ is a polynomial in $k$: you find a root and divide | 15/01/2026 (problem 11: a double root) | L09, L10 |
| spaces of polynomials: $\{p \in \R_3[x] \mid p(a) = 0\}$ is made of the polynomials $(x - a)q(x)$ (Proposition 4.2) | 24/01/2024 (question 1), 10/07/2025 (question 2), 03/07/2026 (question 1) | L05–L07 |

Here are the three questions of the first type, with the solution.

> [!EXAMPLE] · Exam of 10/07/2025, question 1
> Which of the following is a root of $p(z) = z^4 + 7z^2 + 12$? (a) $z = -2i$; (b) $z = -2$; (c) the polynomial has no roots; (d) $z = 3 + 4i$; (e) $z = 4$.
>
> **Solution.** Only even powers appear: I set $w = z^2$ and get $w^2 + 7w + 12 = (w + 3)(w + 4)$, with roots $w = -3$ and $w = -4$. So $z^2 = -3$ or $z^2 = -4$, that is $z = \pm i\sqrt 3$ or $z = \pm 2i$. Answer (a). Answer (c) is false by the fundamental theorem (there are four roots); (b) and (e) are real, and for real $z$ $z^4 + 7z^2 + 12 \ge 12 > 0$.

> [!EXAMPLE] · Exam of 03/07/2026, question 7
> Which of the following is a root of the polynomial $p(z) = z^3 + 2z^2 + z + 2$? (a) $z = 0$; (b) $z = i$; (c) $z = 1 + i$; (d) $z = 1$; (e) $z^3 + 2z^2 + z + 2 = 0$.
>
> **Solution.** Factoring by grouping: $p(z) = z^2(z + 2) + (z + 2) = (z^2 + 1)(z + 2)$. The roots are $-2$, $i$, $-i$: answer (b). Without factoring, it is enough to substitute: $p(i) = i^3 + 2i^2 + i + 2 = -i - 2 + i + 2 = 0$, while $p(0) = 2$ and $p(1) = 6$. Answer (e) is not a number but the equation itself.

> [!EXAMPLE] · Exam of 07/09/2026, question 1
> Which of the following is a root of the polynomial $p(z) = z^4 + 5z^2 + 4$? (a) $z = -3 + i$; (b) $z = 1 - i$; (c) $z = -1$; (d) $z = -2i$; (e) the polynomial has no roots.
>
> **Solution.** With $t = z^2$: $t^2 + 5t + 4 = (t + 1)(t + 4)$, roots $t = -1$ and $t = -4$. So $z^2 = -1$ or $z^2 = -4$: $z = \pm i$ and $z = \pm 2i$. Answer (d). Direct check: $(-2i)^2 = -4$ and $(-2i)^4 = 16$, so $p(-2i) = 16 - 20 + 4 = 0$.

> [!METHOD] Finding the roots of a polynomial of degree 3 or 4 without a calculator
> 1. **In the quiz, substitute the answers**: with $p(i)$, $p(2i)$, $p(-1)$… you find the right answer in a few computations.
> 2. **Only even powers** ($z^4$, $z^2$, constant term): set $t = z^2$, solve the second-degree equation, then $z = \pm\sqrt t$ (with $t$ negative, $\pm i\sqrt{|t|}$).
> 3. **Factoring by grouping**: $z^3 + 2z^2 + z + 2 = z^2(z + 2) + 1 \cdot (z + 2)$.
> 4. **Try the integer roots** among the divisors of the constant term, then divide with Ruffini.
> 5. **A second-degree factor is left**: formula with $\Delta$; if the coefficients are real and $\Delta < 0$, the two roots are conjugate.

**Mistakes to avoid.** Forgetting the zeros in Ruffini's table; getting the sign of $a$ wrong (for $x + 2$ you use $a = -2$); stopping the division too early or too late; confusing the number of distinct roots with the number of roots counted with multiplicity; applying Proposition 4.11 to polynomials with complex coefficients; in biquadratic equations, forgetting the two opposite roots of each $t$.

> [!EXAM] The 4-page sheet
> From this lesson: the scheme of long division and of Ruffini; "$a$ is a root $\iff (x - a) \mid p(x)$, and the remainder of the division by $x - a$ is $p(a)$"; multiplicity and the method of repeated divisions; $\Delta$ and the second-degree formula with complex $\pm\sqrt\Delta$; "real coefficients $\Rightarrow$ non-real roots in conjugate pairs"; the substitution $t = z^2$ and factoring by grouping.

## Quiz

```quiz
Q: Which of the following is a root of $p(z) = z^4 + 10z^2 + 9$?
+ $z = 3i$
- $z = 3$
- $z = -1$
- $z = 1 + i$
- The polynomial has no roots.
= With $t = z^2$: $t^2 + 10t + 9 = (t + 1)(t + 9)$, so $z^2 = -1$ or $z^2 = -9$, that is $z = \pm i$ or $z = \pm 3i$. Check: $(3i)^2 = -9$, $(3i)^4 = 81$, and $81 - 90 + 9 = 0$. For real $z$ $p(z) \ge 9$; $p(1 + i) = 5 + 20i$. By the fundamental theorem the roots always exist. Similar to the exams of 07/09/2026 and 10/07/2025, question 1.

Q: Which of the following is a root of $p(z) = z^3 - 2z^2 + 4z - 8$?
+ $z = -2i$
- $z = -2$
- $z = 2 + 2i$
- $z = 4$
- $z = 1 - i$
= Factoring by grouping: $p(z) = z^2(z - 2) + 4(z - 2) = (z^2 + 4)(z - 2)$, roots $2$ and $\pm 2i$. Check: $(-2i)^3 = 8i$ and $(-2i)^2 = -4$, so $p(-2i) = 8i + 8 - 8i - 8 = 0$. Instead $p(-2) = -32$, $p(4) = 40$, $p(2 + 2i) = -16 + 8i$, $p(1 - i) = -6 - 2i$. Similar to the exam of 03/07/2026, question 7.

Q: What is the remainder of the division of $x^4 - 3x^2 + 2x - 1$ by $x + 1$? Write a number.
N: -5
= The remainder of the division by $x - a$ is $p(a)$; here $x + 1 = x - (-1)$, so $a = -1$ and the remainder is $p(-1) = 1 - 3 - 2 - 1 = -5$. With Ruffini on the coefficients $1, 0, -3, 2, -1$ and $a = -1$ you get at the bottom $1, -1, -2, 4$ and remainder $-5$.

Q: What is the multiplicity of the root $1$ in the polynomial $x^4 - x^3 - 3x^2 + 5x - 2$?
- $1$
- $2$
+ $3$
- $4$
- $0$
= Dividing several times by $x - 1$ with Ruffini you get the quotients $x^3 - 3x + 2$, then $x^2 + x - 2$, then $x + 2$, which at $1$ equals $3 \neq 0$. Three divisions: $x^4 - x^3 - 3x^2 + 5x - 2 = (x - 1)^3(x + 2)$. Recognising a multiple root was also needed in problem 11 of the exam of 15/01/2026, where a determinant with a parameter had a double root.

Q: The quotient and remainder of the division of $x^3 + 2x^2 - x + 3$ by $x^2 + 1$ are:
+ $q(x) = x + 2$ and $r(x) = -2x + 1$
- $q(x) = x + 2$ and $r(x) = 1$
- $q(x) = x + 2$ and $r(x) = -2x + 5$
- $q(x) = x$ and $r(x) = 2x^2 - 2x + 3$
- $q(x) = x + 2$ and $r(x) = -2x - 1$
= $x^3 : x^2 = x$, and $(x^3 + 2x^2 - x + 3) - x(x^2 + 1) = 2x^2 - 2x + 3$; then $2x^2 : x^2 = 2$, and $(2x^2 - 2x + 3) - 2(x^2 + 1) = -2x + 1$, of degree $1 < 2$. Watch out for the fourth answer: $x \cdot (x^2 + 1) + (2x^2 - 2x + 3)$ really gives back the dividend, but the "remainder" has degree $2$, not smaller than the divisor, so the division is not finished.

Q: A polynomial with **real** coefficients of degree $4$ has the roots $1 + i$ and $2i$. What are the other two roots?
+ $1 - i$ and $-2i$
- $-1 - i$ and $-2i$
- $-1 + i$ and $2$
- $1 - i$ and $2$
- Nothing can be said without knowing the coefficients.
= By Proposition 4.11 the conjugates $\overline{1 + i} = 1 - i$ and $\overline{2i} = -2i$ are roots too. They are four distinct roots, and by the fundamental theorem a polynomial of degree $4$ has no others. The monic polynomial is $(x^2 - 2x + 2)(x^2 + 4) = x^4 - 2x^3 + 6x^2 - 8x + 8$.

Q: In which of these polynomials is the number $2$ a root with multiplicity **exactly** $2$?
+ $(x - 2)^2(x + 2)$
- $(x^2 - 4)(x + 2)$
- $(x - 2)^3$
- $x^2 + 4$
- $x^2(x - 2)$
= $(x^2 - 4)(x + 2) = (x - 2)(x + 2)^2$: there $2$ is simple (it is $-2$ that is double). In $(x - 2)^3$ the multiplicity is $3$, in $x^2(x - 2)$ it is $1$; $x^2 + 4$ at $2$ equals $8$, so $2$ is not even a root.

Q: Which of these polynomials belongs to $\R_2[x]$?
+ $(x + 1)^2 - x^2$
- $x^3 - 1$
- $ix + 1$
- $(x - 1)(x^2 + 1)$
- $\frac 1x + x$
= $(x + 1)^2 - x^2 = 2x + 1$ has degree $1 \le 2$ and real coefficients. $x^3 - 1$ and $(x - 1)(x^2 + 1)$ have degree $3$; $ix + 1$ has a non-real coefficient (it belongs to $\C_1[x]$); $\frac 1x + x$ is not a polynomial. The space $\R_2[x]$ appears in many questions on subspaces, for example in the exams of 08/02/2024 and 05/02/2026 (question 2).

Q: The complex roots of $z^2 - 2z + 5$ are:
+ $1 \pm 2i$
- $-1 \pm 2i$
- $1 \pm 4i$
- $2 \pm 4i$
- there are none: $\Delta < 0$
= $\Delta = 4 - 20 = -16$, with square roots $\pm 4i$; so $z_\pm = \frac{2 \pm 4i}2 = 1 \pm 2i$. $\Delta < 0$ only means that there are no **real** roots; the complex roots are conjugate because the coefficients are real. Similar to the exam of 02/09/2025 (question 4), where two eigenvalues were the complex conjugate roots of $t^2 + 2t + 4$.

Q: The polynomial $x^2 - (1 + i)x + i$ has the root $i$. Which statement is true?
+ The other root is $1$, and $-i$ is not a root.
- $-i$ is also a root, by Proposition 4.11.
- $i$ is a double root.
- It has three roots, counted with multiplicity.
- It has no other roots besides $i$.
= Dividing by $x - i$ (or noting that the sum and product of the roots are $1 + i$ and $i$) you find $x^2 - (1 + i)x + i = (x - i)(x - 1)$. Proposition 4.11 does not apply, because the coefficients are not all real: indeed at $-i$ the polynomial equals $-2 + 2i \neq 0$. The degree is $2$, so the roots counted with multiplicity are exactly two. In problem 11 of the exam of 03/06/2026 too, a polynomial with complex coefficients had $i$ and $-i$ as roots with different multiplicities.
```

## Exercises

> [!NOTE] The exercises of this lesson
> The handouts have no exercise section for lesson 4: the exercises below were written for these notes, the last two modelled on the exam papers.

::: exercise basic Normal form, degree and sets of polynomials
Reduce to normal form and find the degree: (a) $(x + 1)^2 - (x - 1)^2$; (b) $(x^2 + 1)(x - 1) - x^3$; (c) $3x^2y - 2x^2y + xy - x^2y$. Then say whether polynomials (a) and (b) belong to $\R_1[x]$, to $\R_2[x]$, to $\C_2[x]$.
::: solution
(a) $(x^2 + 2x + 1) - (x^2 - 2x + 1) = 4x$: degree $1$.

(b) $(x^2 + 1)(x - 1) = x^3 - x^2 + x - 1$, so the polynomial is $-x^2 + x - 1$: degree $2$.

(c) The three monomials with literal part $x^2y$ have coefficients $3 - 2 - 1 = 0$ and disappear: what is left is $xy$, of degree $1 + 1 = 2$.

Membership: (a) has degree $1$, so it belongs to $\R_1[x]$, to $\R_2[x]$ and to $\C_2[x]$. (b) has degree $2$: it belongs to $\R_2[x]$ and to $\C_2[x]$, but not to $\R_1[x]$. (Every $\R_k[x]$ is contained in $\C_k[x]$ and in $\R_{k+1}[x]$.)
:::

::: exercise basic A long division
Divide $x^4 - 1$ by $x^2 + x + 1$ and check the result.
::: solution
Dividend with the zeros: $x^4 + 0x^3 + 0x^2 + 0x - 1$.

1. $x^4 : x^2 = x^2$. $x^2(x^2 + x + 1) = x^4 + x^3 + x^2$; subtracting, what is left is $-x^3 - x^2 + 0x - 1$.
2. $-x^3 : x^2 = -x$. $-x(x^2 + x + 1) = -x^3 - x^2 - x$; subtracting, what is left is $x - 1$.
3. $x - 1$ has degree $1 < 2$: stop.

Quotient $q(x) = x^2 - x$, remainder $r(x) = x - 1$. Check: $(x^2 - x)(x^2 + x + 1) = x^4 + x^3 + x^2 - x^3 - x^2 - x = x^4 - x$, and $x^4 - x + (x - 1) = x^4 - 1$.
:::

::: exercise basic Ruffini and complete factorisation
Check that $2$ is a root of $p(x) = x^4 - 5x^2 + 4$, divide by $x - 2$ with Ruffini and factor $p(x)$ into factors of degree one.
::: solution
$p(2) = 16 - 20 + 4 = 0$. Ruffini on the coefficients $1, 0, -5, 0, 4$ (watch out for the two zeros) with $a = 2$:

| | $1$ | $0$ | $-5$ | $0$ | $4$ |
|---|--:|--:|--:|--:|--:|
| $a = 2$ | | $2$ | $4$ | $-2$ | $-4$ |
| | $1$ | $2$ | $-1$ | $-2$ | $0$ |

Quotient $x^3 + 2x^2 - x - 2$, remainder $0$. Factoring by grouping: $x^2(x + 2) - (x + 2) = (x + 2)(x^2 - 1) = (x + 2)(x - 1)(x + 1)$. So
$$x^4 - 5x^2 + 4 = (x - 2)(x + 2)(x - 1)(x + 1).$$
You could also start from $t = x^2$: $t^2 - 5t + 4 = (t - 1)(t - 4)$, and then $x^2 - 1$ and $x^2 - 4$ factor as differences of squares.
:::

::: exercise intermediate Roots and multiplicity
Find all the roots of $p(x) = x^3 - 3x + 2$ with their multiplicity.
::: solution
Integer candidates: the divisors of $2$, that is $\pm 1, \pm 2$. $p(1) = 1 - 3 + 2 = 0$: a root. Ruffini on $1, 0, -3, 2$ with $a = 1$: at the bottom $1, 1, -2$ and remainder $0$, quotient $x^2 + x - 2$. This equals $0$ at $1$ ($1 + 1 - 2 = 0$): Ruffini again, at the bottom $1, 2$ and remainder $0$, quotient $x + 2$, which at $1$ equals $3 \neq 0$.

So $p(x) = (x - 1)^2(x + 2)$: the root $1$ has multiplicity $2$ and the root $-2$ has multiplicity $1$. Counted with multiplicity there are $2 + 1 = 3$ roots, as many as the degree. It is the polynomial of the graph in the section on multiplicity.
:::

::: exercise intermediate Imposing a double root
Find the real numbers $a$ and $b$ for which $(x - 1)^2$ divides $x^3 + ax + b$.
::: solution
$(x - 1)^2$ divides the polynomial if and only if $1$ is a root with multiplicity at least $2$: the polynomial is divisible by $x - 1$ and the quotient still has the root $1$.

1. Ruffini on $1, 0, a, b$ with $1$: at the bottom $1$, $1$, $1 + a$ and remainder $1 + a + b$. The remainder must be $0$: $a + b = -1$.
2. The quotient is $x^2 + x + (1 + a)$, and it must equal $0$ at $1$: $1 + 1 + 1 + a = 0$, that is $a = -3$.
3. Then $b = -1 - a = 2$.

The polynomial is $x^3 - 3x + 2 = (x - 1)^2(x + 2)$, the one of the previous exercise.
:::

::: exercise intermediate A second-degree equation with complex coefficients
Find the roots of $z^2 + (2 - i)z - 2i$.
::: solution
$a = 1$, $b = 2 - i$, $c = -2i$.
1. $\Delta = (2 - i)^2 - 4(-2i) = (4 - 4i + i^2) + 8i = 3 - 4i + 8i = 3 + 4i$.
2. Square roots of $3 + 4i$: I look for $w = u + vi$ with $w^2 = u^2 - v^2 + 2uvi = 3 + 4i$, that is $u^2 - v^2 = 3$ and $uv = 2$. With $u = 2$, $v = 1$ it works: $(2 + i)^2 = 4 + 4i - 1 = 3 + 4i$. So $\pm w = \pm(2 + i)$.
3. $z_\pm = \frac{-(2 - i) \pm (2 + i)}2$: with the plus, $\frac{-2 + i + 2 + i}2 = i$; with the minus, $\frac{-2 + i - 2 - i}2 = -2$.

The roots are $i$ and $-2$: indeed $(z - i)(z + 2) = z^2 + 2z - iz - 2i = z^2 + (2 - i)z - 2i$. Here too $-i$ is not a root: the coefficients are not real.
:::

::: exercise intermediate A biquadratic, factored in R and in C
Find the roots of $z^4 + 3z^2 - 4$ and factor the polynomial into factors with real coefficients and then into factors of degree one with complex coefficients.
::: solution
With $t = z^2$: $t^2 + 3t - 4 = (t + 4)(t - 1)$, roots $t = -4$ and $t = 1$. So $z^2 = 1$ (that is $z = \pm 1$) or $z^2 = -4$ (that is $z = \pm 2i$).

- In $\R$: $z^4 + 3z^2 - 4 = (z^2 - 1)(z^2 + 4) = (z - 1)(z + 1)(z^2 + 4)$, where $z^2 + 4$ has $\Delta = -16 < 0$ and does not factor further in $\R$.
- In $\C$: $(z - 1)(z + 1)(z - 2i)(z + 2i)$.

Four roots, as many as the degree; the two non-real ones are conjugate, as Proposition 4.11 requires.
:::

::: exercise hard All the roots, knowing one of them
Knowing that $i$ is a root of $p(x) = x^4 - 2x^3 + 6x^2 - 2x + 5$, find all the roots.
::: solution
1. The coefficients are real, so by Proposition 4.11 $-i$ is a root too. Then $(x - i)(x + i) = x^2 + 1$ divides $p(x)$.
2. I divide by $x^2 + 1$: $x^4 : x^2 = x^2$, and $p(x) - x^2(x^2 + 1) = -2x^3 + 5x^2 - 2x + 5$; then $-2x^3 : x^2 = -2x$, and what is left is $5x^2 + 5$; then $5x^2 : x^2 = 5$, and what is left is $0$. Quotient $x^2 - 2x + 5$.
3. $x^2 - 2x + 5$: $\Delta = 4 - 20 = -16$, roots $\frac{2 \pm 4i}2 = 1 \pm 2i$.

The roots are $i$, $-i$, $1 + 2i$, $1 - 2i$, and $p(x) = (x^2 + 1)(x^2 - 2x + 5)$.
:::

::: exercise hard Building a polynomial from its roots
Find the **monic** polynomial with real coefficients of degree $3$ that has the roots $2$ and $1 + i$. Is it unique?
::: solution
Real coefficients, so $1 - i$ is a root too. A polynomial of degree $3$ has exactly three roots counted with multiplicity (fundamental theorem), so they are $2$, $1 + i$, $1 - i$, and the monic polynomial is
$$(x - 2)(x - 1 - i)(x - 1 + i) = (x - 2)(x^2 - 2x + 2) = x^3 - 4x^2 + 6x - 4.$$
Here $(x - 1 - i)(x - 1 + i) = (x - 1)^2 - i^2 = (x - 1)^2 + 1 = x^2 - 2x + 2$, as for every conjugate pair. It is unique: the three roots are forced, and a monic polynomial is determined by its roots (it is the product of the factors $x - z_k$).
:::

::: exercise hard A remainder without doing the division
Find the remainder of the division of $p(x) = x^{100} + 1$ by $x^2 - 1$.
::: solution
The divisor has degree $2$, so the remainder has degree at most $1$: $r(x) = ax + b$, and
$$x^{100} + 1 = q(x)(x^2 - 1) + ax + b.$$
I substitute the roots of the divisor, where $x^2 - 1$ vanishes:
- $x = 1$: $1 + 1 = 0 + a + b$, that is $a + b = 2$;
- $x = -1$: $(-1)^{100} + 1 = 2 = -a + b$.

Adding, $2b = 4$, so $b = 2$ and $a = 0$. The remainder is the constant $r(x) = 2$. It is the same idea as in the proof of Proposition 4.2: you substitute a value that makes the divisor vanish.
:::

::: exercise exam As at the exam: a determinant with a parameter
In an exam problem the determinant of a matrix that depends on a real parameter $k$ equals $-k^3 + 3k + 2$. For which values of $k$ is the determinant non-zero? Which value of $k$ is a double root?
::: solution
1. **I look for a root** among the divisors of the constant term $2$: $\pm 1, \pm 2$. With $k = 2$: $-8 + 6 + 2 = 0$. So $(k - 2)$ divides the polynomial.
2. **Ruffini** on the coefficients $-1, 0, 3, 2$ with $a = 2$: bring down $-1$; $-1 \cdot 2 = -2$ and $0 - 2 = -2$; $-2 \cdot 2 = -4$ and $3 - 4 = -1$; $-1 \cdot 2 = -2$ and $2 - 2 = 0$. Quotient $-k^2 - 2k - 1 = -(k + 1)^2$.
3. **Factorisation**: $-k^3 + 3k + 2 = -(k - 2)(k + 1)^2$.
4. **Conclusion**: the determinant vanishes only for $k = 2$ and $k = -1$, and it is non-zero for every $k \neq 2, -1$. The root $-1$ is double.

It is the scheme of problem 11 of the exam of 15/01/2026, where the determinant was another polynomial of degree three in $k$ with a double root: you find a root by eye, divide, and factor the second-degree part.
:::

::: exercise exam As at the exam: which one is a root
Which of the following is a root of $p(z) = z^4 - 2z^2 - 8$? (a) $z = i\sqrt 2$; (b) $z = 2i$; (c) $z = \sqrt 2$; (d) $z = 1 + i$; (e) the polynomial has no roots.
::: solution
**By factoring.** With $t = z^2$: $t^2 - 2t - 8 = (t - 4)(t + 2)$, so $z^2 = 4$ or $z^2 = -2$: the roots are $\pm 2$ and $\pm i\sqrt 2$. Answer (a).

**By substituting the answers.** (a) $(i\sqrt 2)^2 = -2$ and $(i\sqrt 2)^4 = 4$: $p = 4 + 4 - 8 = 0$. (b) $(2i)^2 = -4$ and $(2i)^4 = 16$: $p = 16 + 8 - 8 = 16$. (c) $p(\sqrt 2) = 4 - 4 - 8 = -8$. (d) $(1 + i)^2 = 2i$ and $(1 + i)^4 = -4$: $p = -4 - 4i - 8 = -12 - 4i$. (e) is false by the fundamental theorem. Here too the answer is (a).
:::

## Review questions

::: question What is the degree of a polynomial? Why must you first reduce it to normal form?
It is the largest degree of its monomials, once it is written in normal form (monomials with different literal parts and non-zero coefficients). You must reduce first because some terms can cancel out: $(x + 1)^2 - x^2 = 2x + 1$ has degree $1$.
:::

::: question What are $\R[x]$, $\C[x]$ and $\R_k[x]$?
The polynomials in one variable $x$ with real coefficients, with complex coefficients, and with real coefficients of degree $\le k$. $\R_2[x]$ also contains the constants and the zero polynomial.
:::

::: question What does division with remainder between polynomials say?
Given $p(x)$ and $d(x) \neq 0$, there exist unique $q(x)$ and $r(x)$ with $p(x) = q(x)d(x) + r(x)$ and the degree of $r$ strictly smaller than the degree of $d$.
:::

::: question When does a polynomial $d(x)$ divide $p(x)$? Give an example.
When the division of $p(x)$ by $d(x)$ has zero remainder, that is $p(x) = q(x)d(x)$. For example $(x + 1) \mid (x^3 + 1)$, because $x^3 + 1 = (x^2 - x + 1)(x + 1)$.
:::

::: question What is a root of a polynomial?
A number $a$ such that $p(a) = 0$, that is a solution of the equation $p(x) = 0$ (Definition 4.1). It can be real or complex.
:::

::: question What does Proposition 4.2 say and how is it proved?
$a$ is a root of $p(x)$ if and only if $(x - a) \mid p(x)$. You divide: $p(x) = q(x)(x - a) + r_0$ with $r_0$ constant (the remainder has degree smaller than $1$); substituting $x = a$ you get $p(a) = r_0$. So $p(a) = 0$ if and only if the remainder is zero.
:::

::: question What is the remainder of the division of $p(x)$ by $x - a$?
It is $p(a)$: it is the central step of the proof of Proposition 4.2. For example the remainder of $2x^3 - 3x^2 + 4x - 5$ divided by $x - 2$ is $p(2) = 7$.
:::

::: question What is the multiplicity of a root and how is it computed?
It is the largest $k$ for which $(x - a)^k$ divides $p(x)$ (Definition 4.3). It is computed by dividing by $x - a$ several times, until $a$ is no longer a root of the quotient.
:::

::: question How many roots can a polynomial of degree $n \ge 1$ have? And in the complex numbers?
At most $n$, counted with multiplicity (Theorem 4.6). In the complex numbers exactly $n$, counted with multiplicity (Theorem 4.8, fundamental theorem of algebra).
:::

::: question How do you solve $ax^2 + bx + c = 0$ in the complex numbers?
With the formula $x_\pm = \frac{-b \pm \sqrt\Delta}{2a}$, $\Delta = b^2 - 4ac$, where $\pm\sqrt\Delta$ are the two complex square roots of $\Delta$ (Example 4.9). For example the roots of $x^2 + 2x + 5$ are $-1 \pm 2i$.
:::

::: question What does Proposition 4.11 say? Why are real coefficients needed?
If $p(x)$ has real coefficients and $p(z) = 0$, then also $p(\bar z) = 0$. In the proof you conjugate $p(z) = 0$ and use $\bar a_i = a_i$, which holds only for real coefficients: $x^2 + (1 - i)x - i$ has the root $i$ but not $-i$.
:::

::: question Why does a real polynomial of odd degree have at least one real root?
Because it has $n$ complex roots (an odd number) and the non-real ones come in conjugate pairs (an even number): at least one must be real.
:::

## Glossary

```glossary
Monomial | Product of a numerical coefficient and a literal part, like $-2xy$; the degree is the sum of the exponents.
Polynomial | Sum of monomials, like $7 + 3x^2 - \sqrt 2\,y^3$.
Normal form | Way of writing a polynomial as a sum of monomials with different literal parts and non-zero coefficients (or the polynomial $0$).
Degree | The largest degree of the monomials of a polynomial in normal form.
Constant term | The coefficient $a_0$, the monomial of degree zero.
Monic polynomial | Polynomial whose highest-degree term has coefficient $1$.
$\R[x]$, $\C[x]$ | Polynomials in one variable with real, complex coefficients.
$\R_k[x]$ | Real polynomials of degree at most $k$ (including the zero polynomial).
Division with remainder | $p(x) = q(x)d(x) + r(x)$ with $\deg r < \deg d$: $q$ quotient, $r$ remainder.
Divisibility | $d(x) \mid p(x)$: the division has zero remainder, that is $p(x) = q(x)d(x)$.
Ruffini's rule | Scheme with only the coefficients for dividing by $x - a$; the last number is the remainder, equal to $p(a)$.
Root | A number $a$ with $p(a) = 0$ (Definition 4.1).
Multiplicity | The largest $k$ for which $(x - a)^k$ divides $p(x)$ (Definition 4.3); simple, double, triple root.
Discriminant | $\Delta = b^2 - 4ac$ for $ax^2 + bx + c$; among the reals it decides how many roots there are.
Fundamental theorem of algebra | Every polynomial with complex coefficients of degree $n$ has exactly $n$ complex roots, counted with multiplicity (Theorem 4.8).
Conjugate roots | If the coefficients are real and $z$ is a root, so is $\bar z$ (Proposition 4.11).
Biquadratic equation | Equation with only even powers, like $z^4 + 5z^2 + 4 = 0$: it is solved with $t = z^2$.
```

## Checklist

```checklist
- I can reduce a polynomial to normal form, read its degree and say whether it belongs to $\R_k[x]$ or to $\C_k[x]$.
- I can carry out long division between polynomials, with the zeros in the right place, and check it.
- I can use Ruffini's rule, also to divide by $x + a$.
- I can state and prove Proposition 4.2, and I know that the remainder of the division by $x - a$ is $p(a)$.
- I can factor a polynomial by finding a root among the divisors of the constant term and dividing.
- I can compute the multiplicity of a root with repeated divisions.
- I can state Theorem 4.6 and the fundamental theorem of algebra, and explain the difference between "at most $n$" and "exactly $n$".
- I can solve a second-degree equation in $\C$, even with a complex $\Delta$.
- I can use Proposition 4.11 and I know that it holds only with real coefficients.
- I can answer the "which one is a root" questions by substituting or with the substitution $t = z^2$.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 4 "Polinomi", pp. 15–19: sections 4.A–4.E are followed in order, with the page next to each heading; Definitions 4.1 and 4.3, Propositions 4.2 and 4.11, Theorems 4.6 and 4.8 and Examples 4.4, 4.5, 4.7, 4.9 and 4.10 keep their numbering. The handouts have no exercises for this lesson.
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §1.3 (pp. 21–25, with Proposition 1.3.8 on the second-degree formula) and §1.4.7–1.4.8 (pp. 31–33: Theorem 1.4.7, Corollaries 1.4.8, 1.4.10 and 1.4.12, Proposition 1.4.13).
- **Exam papers** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): question 1 of 10/07/2025, question 7 of 03/07/2026 and question 1 of 07/09/2026, reported with solutions written for these notes; the table of the other uses of polynomials in the exam papers only indicates their type. Exam rules 2025/26 and dates 2026/27 as in lesson L01.
- The **"Beyond the handouts"** parts (Ruffini's rule, the degree of products, rational roots, the graph and multiplicity, the proof of the second-degree formula, the consequences of Proposition 4.11, all the exercises) are additions in these notes to connect the lesson to the rest of the course and to the exam.
