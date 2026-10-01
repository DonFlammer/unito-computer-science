---
course: MDAG
module: AG
lesson: L02
title: Complex numbers I
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Part 2 (modB) · Linear Algebra and Geometry · Channels A, B and C · Lesson L02
description: >-
  Notes on lesson L02 of Linear Algebra and Geometry (MDAG, part 2): complex numbers, sum and product, real part and
  imaginary part, conjugate, modulus, inverse and division, the complex plane and the parallelogram rule, with
  exam-style quizzes and worked exercises.
lede: >-
  The equation $x^2 = -1$ has no real solutions. By adding a single new symbol, the imaginary unit $i$ with
  $i^2 = -1$, you get the field $\C$ of complex numbers. Here you learn to compute with the numbers $a + bi$ (sums,
  products, conjugate, modulus, inverse, divisions) and to see them as points of the plane. In every exam session from
  2024 to 2026 there is at least one quiz question that starts from these computations.
material: handouts
facts:
  Handouts: lesson 2 · pp. 6–9
  Book: Martelli, §1.4.1–1.4.3 (pp. 25–27)
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 90–120 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 2 "Numeri complessi I"; B. Martelli, Geometria e algebra lineare, §1.4.1–1.4.3 and Exercise 1.4.3
italian_file: L02_numeri_complessi_1.html
html_notes: notes/MDAG/L02_complex_numbers_1.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L02_numeri_complessi_1.md
---

## In brief

- No real number solves $x^2 = -1$. The **complex numbers** add to the reals a new symbol, the **imaginary unit** $i$, with a single new rule: $i^2 = -1$.
- A complex number is written $z = a + bi$ with $a, b \in \R$. The real number $a$ is the **real part** $\operatorname{Re}(z)$, the real number $b$ (without the $i$) is the **imaginary part** $\operatorname{Im}(z)$.
- You add real part to real part and imaginary part to imaginary part. You multiply as with letters, then replace $i^2$ with $-1$: $(7 + i)(4 - i) = 29 - 3i$.
- $\C$ is a **field**, with the same nine properties as $\R$, but it **is not ordered**: between two complex numbers it makes no sense to say which one is bigger.
- The **conjugate** of $z = a + bi$ is $\bar z = a - bi$. The **modulus** is the real number $|z| = \sqrt{a^2 + b^2}$, and $z\bar z = |z|^2$ holds.
- Every $z \neq 0$ has an **inverse** $z^{-1} = \frac{\bar z}{|z|^2}$. To divide, you multiply numerator and denominator by the conjugate of the denominator.
- Complex numbers are the points of the **complex plane**: $a + bi$ is the point $(a, b)$, the sum follows the **parallelogram rule**, the modulus is the distance from the origin.
- At the exam: in three exam sessions question 1 of the quiz was an equation like $(1 + i)z = 3 + 2i$, to be solved precisely with the conjugate.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## Why we need complex numbers (p. 6)

In lesson L01 you saw that every new number set arises from an equation that has no solution in the old set. The last row of that table was

$$x^2 = -1.$$

No real number solves it, because the square of a real number is never negative:

- if $x \ge 0$, then $x^2 = x \cdot x \ge 0$;
- if $x < 0$, then $-x$ is positive and $x^2 = (-x) \cdot (-x) > 0$.

So $x^2 + 1 \ge 1$ for every $x \in \R$: it is never $0$.

The handouts present the complex numbers as an **extension** of $\R$, "built with the aim of obtaining better algebraic properties". In practice you add to the reals **a single** new object, $i$, whose square is $-1$, and you keep computing with the usual rules. The gain is large: in the complex numbers **every** polynomial equation of degree at least 1 has a solution. It is the fundamental theorem of algebra (lesson L04), and it is the reason why the course uses $\C$, for example when it looks for the eigenvalues of a matrix (lessons L17 and L18).

> [!BEYOND] · where they really come from
> Historically the complex numbers were born from equations of the **third degree**. In the sixteenth century Gerolamo Cardano published a formula to solve equations like $x^3 = 15x + 4$. Applied to this equation, the formula asks you to compute $\sqrt{-121}$, which does not exist among the reals. Yet the equation has a very simple real solution, $x = 4$: indeed $4^3 = 64$ and $15 \cdot 4 + 4 = 64$. Rafael Bombelli had the idea of computing with $\sqrt{-121} = 11i$ as if it were any other number: the formula becomes
> $$x = \sqrt[3]{2 + 11i} + \sqrt[3]{2 - 11i},$$
> and since $(2 + i)^3 = 2 + 11i$ and $(2 - i)^3 = 2 - 11i$ (you check it in exercise 1), you find $x = (2 + i) + (2 - i) = 4$. The "imaginary" numbers served to find real numbers.

## What a complex number is (p. 6)

> [!DEF] 2.1 · Complex numbers
> A **complex number** is an algebraic object written in the following way:
> $$a + bi$$
> where $a$ and $b$ are arbitrary real numbers and $i$ is a new symbol called the **imaginary unit**.

Piece by piece:

- $a + bi$ is read "$a$ plus $b$ $i$". It is **a single number**, built with two real numbers: the first, $a$, stands alone; the second, $b$, is multiplied by $i$.
- $a$ and $b$ are **any** reals: positive, negative, zero, fractions, roots. Writing $bi$ means $b \cdot i$. One also writes $ib$, especially with roots: $i\sqrt 3$ is clearer than $\sqrt 3 i$, where the $i$ might seem to be under the root.
- $i$ **is not a real number**: it is a new symbol. The name "imaginary" is only historical. For us $i$ is an object you compute with following just one extra rule, which you will see shortly: $i^2 = -1$.
- The $+$ in $a + bi$ cannot be "carried out": $a$ and $bi$ stay separate, as in $3 + 2\sqrt 2$ in lesson L01, which does not reduce to a single simpler number.

Here are the handouts' examples, with the two components highlighted:

| Complex number | $a$ | $b$ | Remark |
|---|--:|--:|---|
| $\sqrt 7$ | $\sqrt 7$ | $0$ | a real number is complex: $\sqrt 7 = \sqrt 7 + 0i$ |
| $2 + i$ | $2$ | $1$ | $i$ alone means $1 \cdot i$ |
| $23i$ | $0$ | $23$ | the part without $i$ is missing: $23i = 0 + 23i$ |
| $4 - i$ | $4$ | $-1$ | $-i$ means $(-1) \cdot i$ |
| $-1 + \pi i$ | $-1$ | $\pi$ | $b$ too can be irrational |

Two special cases come up often:

- if $b = 0$, the number $a + 0i = a$ is a **real number**: the reals are contained in the complex numbers;
- if $a = 0$, the number $bi$ is called **purely imaginary** (for example $23i$, $-i$, $i\sqrt 2$).

> [!NOTE] When two complex numbers are equal
> $a + bi = c + di$ exactly when $a = c$ **and** $b = d$. In the handouts this is implicit in the way a complex number is written, and it becomes evident in section 2.D: each $a + bi$ corresponds to a single point $(a, b)$ of the plane, and two points coincide when they have the same coordinates. For example $x + yi = 3 - 2i$, with $x, y$ real, means $x = 3$ and $y = -2$. An equality between complex numbers is therefore equivalent to **two** equalities between real numbers: it is the trick for solving many equations (exercises 6 and 7).

> [!PITFALL] The imaginary part does not contain $i$
> Shortly the number $b$ will be called the **imaginary part** of $a + bi$. It is the real number $b$, not $bi$: the imaginary part of $4 - i$ is $-1$, not $-i$.

## Sum and product (p. 6)

The handouts say that complex numbers are added and multiplied "in the usual way", keeping in mind a single new relation:

$$i^2 = -1.$$

"In the usual way" means: as you do with literal expressions, treating $i$ as a letter (like the $x$ of $3 + 2x$) and using the commutative, associative and distributive properties. The only novelty is that, every time $i^2$ appears, you replace it with $-1$.

### The sum

$$(a + bi) + (c + di) = (a + c) + (b + d)i$$

You add the parts without $i$ together and the parts with $i$ together, exactly as $(3 + 2x) + (1 - 5x) = 4 - 3x$.

> [!EXAMPLE] · Sum and difference
> $$(3 + 2i) + (1 - 5i) = (3 + 1) + (2 - 5)i = 4 - 3i.$$
> The difference is done in the same way, taking care that the minus sign changes **both** parts of the second number:
> $$(3 + 2i) - (1 - 5i) = (3 - 1) + (2 + 5)i = 2 + 7i.$$

### The product

To multiply $(a + bi)$ by $(c + di)$ you proceed like this.

1. Distributive property: each term of the first bracket times each term of the second,
   $$(a + bi)(c + di) = ac + a \cdot di + bi \cdot c + bi \cdot di.$$
2. Reorder the factors: $ac + adi + bci + bd\,i^2$.
3. Use the new rule: $bd\,i^2 = bd \cdot (-1) = -bd$.
4. Collect the parts without $i$ and those with $i$:
   $$(a + bi) \cdot (c + di) = (ac - bd) + (ad + bc)i.$$

In the product a minus sign appears ($ac - bd$) that is not there in the sum: it all comes from $i^2 = -1$.

> [!EXAMPLE] · The handouts' product: $(7 + i)(4 - i) = 29 - 3i$
> The four products:
> - $7 \cdot 4 = 28$;
> - $7 \cdot (-i) = -7i$;
> - $i \cdot 4 = 4i$;
> - $i \cdot (-i) = -i^2 = -(-1) = +1$.
>
> Adding up: $28 + 1 + (-7 + 4)i = 29 - 3i$. With the formula: $a = 7$, $b = 1$, $c = 4$, $d = -1$, so $ac - bd = 28 - (1)(-1) = 29$ and $ad + bc = 7 \cdot (-1) + 1 \cdot 4 = -3$.

More products, all with the same method:

| Product | Computation | Result |
|---|---|---|
| $3(2 - i)$ | a real number multiplies both parts | $6 - 3i$ |
| $i(2 + 3i)$ | $2i + 3i^2 = 2i - 3$ | $-3 + 2i$ |
| $(1 + 2i)(3 - i)$ | $3 - i + 6i - 2i^2 = 3 + 5i + 2$ | $5 + 5i$ |
| $(1 + i)^2$ | $1 + 2i + i^2 = 1 + 2i - 1$ | $2i$ |
| $(2 + 3i)^2$ | $4 + 12i + 9i^2 = 4 + 12i - 9$ | $-5 + 12i$ |
| $(1 + i)(1 - i)$ | $1 - i + i - i^2 = 1 + 1$ | $2$ |

The last product is a **real** number. It is not a coincidence: you will understand why shortly, with the conjugate.

> [!METHOD] Multiplying two complex numbers
> 1. Carry out the four products: each term of the first bracket times each term of the second.
> 2. Replace $i^2$ with $-1$: the term $bi \cdot di = bd\,i^2$ **changes sign** and becomes $-bd$.
> 3. Collect the parts without $i$ and those with $i$.
>
> There is no need to learn the formula by heart: these three steps are enough.

> [!PITFALL] You do not multiply "part by part"
> $(1 + 2i)(3 - i)$ is **not** $1 \cdot 3 + 2 \cdot (-1)\,i = 3 - 2i$: the two mixed terms $1 \cdot (-i)$ and $2i \cdot 3$ are missing. The right result is $5 + 5i$. The second typical mistake is forgetting the change of sign: with $i^2 = +1$ you would get $3 + 5i - 2 = 1 + 5i$, which is wrong.

### The powers of $i$ (beyond the handouts)

The powers of $i$ repeat every four:

| $n$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ | $6$ | $7$ | $8$ |
|---|---|---|---|---|---|---|---|---|---|
| $i^n$ | $1$ | $i$ | $-1$ | $-i$ | $1$ | $i$ | $-1$ | $-i$ | $1$ |

Indeed $i^3 = i^2 \cdot i = -i$ and $i^4 = i^2 \cdot i^2 = (-1)(-1) = 1$. From there it starts again: $i^5 = i^4 \cdot i = i$, and so on. So to compute $i^n$ you only need the **remainder** of the division of $n$ by $4$: if $n = 4k + r$, then
$$i^n = (i^4)^k \cdot i^r = 1^k \cdot i^r = i^r.$$

- $i^{15}$: $15 = 4 \cdot 3 + 3$, so $i^{15} = i^3 = -i$ (needed in exercise 2).
- $i^{100}$: $100 = 4 \cdot 25 + 0$, so $i^{100} = 1$.
- $i^{2026}$: $2026 = 4 \cdot 506 + 2$, so $i^{2026} = i^2 = -1$.

$-i$ too has square $-1$: $(-i)^2 = (-1)^2 \cdot i^2 = -1$. So $x^2 = -1$ has **two** solutions in $\C$, $i$ and $-i$.

### The set of complex numbers

The set of complex numbers is denoted by $\C$, and the chain of number sets of lesson L01 gets longer:

$$\N \subsetneq \Z \subsetneq \Q \subsetneq \R \subsetneq \C.$$

The inclusion $\R \subsetneq \C$ is strict because $i \in \C$ but $i \notin \R$: its square is $-1$, and no real number has a negative square. Moreover, computations between real numbers do not change when you look at them inside $\C$: with the product formula, $(a + 0i)(c + 0i) = (ac - 0 \cdot 0) + (a \cdot 0 + 0 \cdot c)i = ac$. This is why we say that $\C$ **extends** $\R$.

## The properties of C: a field that is not ordered (pp. 6–7)

> [!PROP] 2.2
> With the addition and multiplication defined above, the set $\C$ has the following properties:
> 1. there is an **identity element** $0$ for addition $+$, such that $0 + a = a + 0 = a$, $\forall a \in \C$;
> 2. the **commutative** property holds $a + b = b + a$, $\forall a, b \in \C$;
> 3. the **associative** property holds $a + (b + c) = (a + b) + c$, $\forall a, b, c \in \C$;
> 4. every element $a \in \C$ has an **inverse** (or **opposite**) $-a$, such that $a + (-a) = (-a) + a = 0$;
> 5. there is an **identity element** $1$ for multiplication, such that $1 \cdot a = a \cdot 1 = a$, $\forall a \in \C$;
> 6. the **commutative** property holds $a \cdot b = b \cdot a$, $\forall a, b \in \C$;
> 7. the **associative** property holds $a \cdot (b \cdot c) = (a \cdot b) \cdot c$, $\forall a, b, c \in \C$;
> 8. every element $a \in \C$ with $a \neq 0$ has an **inverse** $a^{-1}$, such that $a \cdot a^{-1} = a^{-1} \cdot a = 1$;
> 9. the **distributive** property holds $a \cdot (b + c) = a \cdot b + a \cdot c$, $\forall a, b, c \in \C$.

They are **the same nine properties** as Proposition 1.5 for $\R$ (lesson L01). Watch out for the letters: here $a, b, c$ denote **complex** numbers, not the components of $a + bi$. In $\C$:

- zero is $0 = 0 + 0i$ and one is $1 = 1 + 0i$;
- the opposite of $a + bi$ is $-a - bi$, because $(a + bi) + (-a - bi) = 0 + 0i = 0$;
- the only property that requires a real computation is 8, the inverse: you will see it in the section on the inverse.

The handouts conclude: "So, like $\R$, $\C$ is also a **field**." From this lesson on, when the course says "a field $\K$", it will almost always mean $\K = \R$ or $\K = \C$ (lesson L05).

> [!BEYOND] · what you gain
> Since the nine properties hold, all the computation rules valid in $\R$ work in $\C$: special products like $(z + w)^2 = z^2 + 2zw + w^2$ and $(z - w)(z + w) = z^2 - w^2$, factoring out, the zero-product rule (if $zw = 0$ and $z \neq 0$, multiplying by $z^{-1}$ you get $w = 0$). You will use it in lesson L04 to find the roots of polynomials.

### C is not ordered

The handouts stress a fundamental difference between $\C$ and all the number sets seen before ($\N$, $\Z$, $\Q$ and $\R$): **$\C$ is not ordered**. There is no notion of greater and smaller between complex numbers. The reason, in one line from the handouts: in an ordered field a square is always positive, but here $i^2 = -1$.

> [!PROOF] · why $\C$ cannot be ordered
> In an ordered field like $\R$ (lesson L01: $a > b$ means $a - b > 0$) the positive numbers obey two rules:
> 1. sum and product of positive numbers are positive;
> 2. for every $a \neq 0$, **one and only one** of $a$ and $-a$ is positive.
>
> From these two rules it follows that the square of a non-zero number is positive: if $a > 0$, then $a \cdot a > 0$ by rule 1; if instead $a < 0$, then $-a > 0$ and $a^2 = (-a) \cdot (-a) > 0$, again by rule 1.
>
> Suppose by contradiction that $\C$ has an order with these rules. Then $1 = 1^2$ is positive, because it is the square of $1 \neq 0$. But $-1 = i^2$ is positive too, because it is the square of $i \neq 0$. So $1$ and $-1$ would both be positive, against rule 2. Contradiction.
>
> (Complex numbers can also be lined up in some way, for example first by real part and then by imaginary part; but no order of this kind respects the rules of computation. It is in this sense that $\C$ is not ordered.)

> [!PITFALL] No inequalities between complex numbers
> Expressions like $z > 0$, $3i > 2i$ or $1 + i < 2$ **make no sense**. You can only compare **real** numbers linked to $z$, like the real part, the imaginary part or the modulus: $|3i| = 3 > 2 = |2i|$ is perfectly fine.

## Real part, imaginary part and conjugate (p. 7)

> [!DEF] Real part and imaginary part (p. 7)
> Let $z = a + bi$ be a complex number. The numbers $a$ and $b$ are called respectively the **real part** and the **imaginary part** of $z$. We write $a = \operatorname{Re}(z)$ and $b = \operatorname{Im}(z)$. The number $z$ is real, that is it belongs to the subset $\R \subset \C$, if and only if its imaginary part is zero.

> [!DEF] Conjugate (p. 7)
> The **conjugate** of $z = a + bi$ is the complex number
> $$\bar z = a - bi$$
> obtained from $z$ by changing the sign of its imaginary part.

Piece by piece:

- $\operatorname{Re}(z)$ and $\operatorname{Im}(z)$ are two **real numbers**: they associate a real number with each complex number.
- $\bar z$ is read "z bar" (or "z conjugate"): it is written with a small bar on top. With a long expression the bar covers everything: $\overline{z + w}$ is the conjugate of the sum.
- The conjugate changes the sign **only** of the imaginary part: the real part stays as it is.

| $z$ | $\operatorname{Re}(z)$ | $\operatorname{Im}(z)$ | $\bar z$ |
|---|--:|--:|---|
| $3 + 4i$ | $3$ | $4$ | $3 - 4i$ |
| $-2 + i$ | $-2$ | $1$ | $-2 - i$ |
| $1 - 3i$ | $1$ | $-3$ | $1 + 3i$ |
| $5i$ | $0$ | $5$ | $-5i$ |
| $7$ | $7$ | $0$ | $7$ |

The last number, $7$, coincides with its own conjugate. The handouts note that this happens **exactly** for the real numbers:

$$z \in \R \iff z = \bar z.$$

Why, step by step: $a + bi = a - bi$ means (comparing the imaginary parts) $b = -b$, that is $2b = 0$, that is $b = 0$, that is $z$ is real.

> [!BEYOND] · four useful rules on the conjugate
> - $z + \bar z = (a + bi) + (a - bi) = 2a$: the sum of a number and its conjugate is **always real**, and $\operatorname{Re}(z) = \frac{z + \bar z}2$.
> - $z - \bar z = 2bi$: the difference is always **purely imaginary**, and $\operatorname{Im}(z) = \frac{z - \bar z}{2i}$.
> - $\bar{\bar z} = z$: conjugating twice brings you back to the starting point.
> - The conjugate "goes inside" sums and products: $\overline{z + w} = \bar z + \bar w$ and $\overline{zw} = \bar z\,\bar w$ (you prove it in exercise 3). Check with $z = 1 + 2i$ and $w = 3 - i$: $zw = 3 - i + 6i - 2i^2 = 5 + 5i$, so $\overline{zw} = 5 - 5i$; and $\bar z\,\bar w = (1 - 2i)(3 + i) = 3 + i - 6i - 2i^2 = 5 - 5i$. Equal.

## The modulus (p. 7)

> [!DEF] Modulus (p. 7)
> The **modulus** of $z = a + bi$ is the real number
> $$|z| = \sqrt{a^2 + b^2}.$$

Piece by piece:

- $a^2 + b^2$ is a sum of squares of real numbers, so it is $\ge 0$ and the root exists: $|z|$ is a **real, non-negative** number.
- If $z = a$ is real, $|a| = \sqrt{a^2}$ is the usual absolute value (lesson L01: $\sqrt{x^2} = |x|$). This is why the same symbol is used.
- In the complex plane $|z|$ is the **distance** of the point $z$ from the origin (you see it in the section on the complex plane).

| $z$ | $a^2 + b^2$ | $\lvert z \rvert$ |
|---|---|--:|
| $3 + 4i$ | $9 + 16 = 25$ | $5$ |
| $1 - i$ | $1 + 1 = 2$ | $\sqrt 2$ |
| $1 + 2i$ | $1 + 4 = 5$ | $\sqrt 5$ |
| $-5$ | $25 + 0 = 25$ | $5$ |
| $2i$ | $0 + 4 = 4$ | $2$ |
| $5 - 12i$ | $25 + 144 = 169$ | $13$ |

The handouts observe that the modulus $|z|$ is zero when $z = 0$, that is when $a = b = 0$, and it is **strictly positive** if $z \neq 0$. The reason: $a^2 \ge 0$ and $b^2 \ge 0$, and a sum of two non-negative numbers is $0$ only if both are zero.

### The most used formula: $z\bar z = |z|^2$

Let us multiply a number by its conjugate:

1. $(a + bi)(a - bi) = a^2 - abi + abi - b^2 i^2$ (four products);
2. the two terms with $i$ cancel out: $-abi + abi = 0$;
3. $-b^2 i^2 = -b^2 \cdot (-1) = +b^2$.

So

$$z \cdot \bar z = (a + bi)(a - bi) = a^2 + b^2 = |z|^2.$$

For example $(3 + 4i)(3 - 4i) = 9 - 12i + 12i - 16i^2 = 9 + 16 = 25 = 5^2$. And this also explains the product $(1 + i)(1 - i) = 2$ in the table above: it is $|1 + i|^2 = (\sqrt 2)^2$.

> [!IDEA] · the conjugate "makes the $i$ disappear"
> Whatever $z$ is, the product $z\bar z$ is a **real** and **non-negative** number. Multiplying by the conjugate is the way to turn a complex number into a real number: the inverse and the division are based on this.

> [!PITFALL] $|z|^2$ is not $z^2$
> $|z|^2 = a^2 + b^2$ is always real; $z^2 = a^2 - b^2 + 2abi$ in general is not. With $z = i$: $|i|^2 = 1$ but $i^2 = -1$. With $z = 1 + i$: $|z|^2 = 2$ but $z^2 = 2i$. And the modulus is not the sum of the parts: $|3 + 4i| = 5$, not $3 + 4 = 7$.

## The inverse and division (pp. 7–8)

Property 8 of Proposition 2.2 promises that every $z \neq 0$ has an inverse. The handouts show it with an explicit formula: it is an important fact, because at first sight it is not clear how to write $\frac 1{2 + i}$ in the form $c + di$.

> [!PROP] · Inverse of a complex number (p. 7)
> As in the rational and real numbers, every complex number $z \neq 0$ has an **inverse** $z^{-1}$ with respect to the multiplication operation, given by
> $$z^{-1} = \frac{\bar z}{|z|^2}.$$

Piece by piece:

- $|z|^2 = a^2 + b^2$ is a **real, non-zero** number (because $z \neq 0$): dividing by it means multiplying the two parts of $\bar z$ by the real number $\frac 1{a^2 + b^2}$.
- In coordinates:
  $$(a + bi)^{-1} = \frac{a - bi}{a^2 + b^2} = \frac{a}{a^2 + b^2} - \frac{b}{a^2 + b^2}\,i.$$
- Instead of $z^{-1}$ one also writes $\frac 1z$.

**Why it works** (it is the handouts' check). Let us multiply $z$ by the candidate inverse and use $z\bar z = |z|^2$:

$$z \cdot z^{-1} = \frac{z \bar z}{|z|^2} = \frac{|z|^2}{|z|^2} = 1.$$

By the commutative property, $z^{-1} \cdot z = 1$ holds as well.

> [!IDEA] · where the formula comes from
> To write $\frac 1{a + bi}$ in the form $c + di$ you need to remove the $i$ from the denominator. It is done as with roots in lesson L01 (for $\frac 1{\sqrt 2 - 1}$ you multiplied top and bottom by $\sqrt 2 + 1$): you multiply numerator and denominator by the **conjugate** of the denominator,
> $$\frac 1{a + bi} = \frac{a - bi}{(a + bi)(a - bi)} = \frac{a - bi}{a^2 + b^2}.$$

> [!EXAMPLE] 2.3 · The inverses of $i$ and of $2 + i$
> The inverse of $i$ is $-i$: indeed $i \cdot (-i) = -i^2 = 1$. With the formula: $\bar i = -i$ and $|i|^2 = 1$, so $i^{-1} = -i$.
>
> The inverse of $2 + i$ is
> $$(2 + i)^{-1} = \frac{2 - i}{|2 + i|^2} = \frac{2 - i}5 = \frac 25 - \frac 15 i,$$
> because $|2 + i|^2 = 4 + 1 = 5$. You can check that indeed
> $$(2 + i) \cdot \frac{2 - i}5 = \frac{4 - 2i + 2i - i^2}5 = \frac{4 + 1}5 = 1.$$

Two more examples with the same pattern:

- $(3 + 4i)^{-1} = \frac{3 - 4i}{25} = \frac 3{25} - \frac 4{25}i$, because $|3 + 4i|^2 = 25$;
- $(1 - i)^{-1} = \frac{1 + i}{2} = \frac 12 + \frac 12 i$, because $|1 - i|^2 = 2$.

### Dividing two complex numbers

Dividing by $z \neq 0$ means multiplying by its inverse: $\frac wz = w \cdot z^{-1} = \frac{w\bar z}{|z|^2}$. In practice:

> [!METHOD] Dividing two complex numbers
> 1. Write the fraction $\frac wz$.
> 2. Multiply numerator and denominator by $\bar z$, the conjugate **of the denominator**.
> 3. In the denominator you get $z\bar z = |z|^2$, a positive real number; in the numerator carry out the product $w\bar z$.
> 4. Divide the real part and the imaginary part of the numerator by $|z|^2$.
> 5. **Check**: multiply the result by $z$; you must get $w$ back.

> [!EXAMPLE] · $\frac{4 + 3i}{1 + 2i}$
> The conjugate of the denominator is $1 - 2i$:
> $$\frac{4 + 3i}{1 + 2i} = \frac{(4 + 3i)(1 - 2i)}{(1 + 2i)(1 - 2i)} = \frac{4 - 8i + 3i - 6i^2}{1 + 4} = \frac{10 - 5i}5 = 2 - i.$$
> Check: $(2 - i)(1 + 2i) = 2 + 4i - i - 2i^2 = 4 + 3i$. Correct.

> [!EXAMPLE] · $\frac{1 + i}{1 - i}$
> $$\frac{1 + i}{1 - i} = \frac{(1 + i)(1 + i)}{(1 - i)(1 + i)} = \frac{1 + 2i + i^2}{2} = \frac{2i}2 = i.$$
> Check: $i(1 - i) = i - i^2 = 1 + i$.

> [!PITFALL] You do not divide "part by part"
> $\frac{4 + 3i}{1 + 2i}$ is **not** $\frac 41 + \frac 32 i$. Check: $(1 + 2i)(4 + \frac 32 i) = 4 + \frac 32 i + 8i + 3i^2 = 1 + \frac{19}2 i$, which is not $4 + 3i$. You can divide part by part only by a **real** number: this is why you first bring the real number $|z|^2$ into the denominator.

### First-degree equations in C

An equation like $(1 + 2i)z = 4 + 3i$ is solved as among the reals: you divide by the coefficient of $z$, which is not zero. So $z = \frac{4 + 3i}{1 + 2i} = 2 - i$, the quotient just computed.

> [!EXAM] The most direct kind of question
> "Find $z$ such that $(\ldots)z = \ldots$" was question 1 of the quiz in the exam sessions of 08/02/2024, 03/06/2025 and 03/06/2026. The method is always this: simplify the products, divide with the conjugate, **check by multiplying**. The three questions, solved, are in the section "Towards the exam".

## The complex plane (pp. 8–9)

While the real numbers $\R$ form a **line**, the complex numbers $\C$ form a **plane**, called the **complex plane**. Each complex number $a + bi$ is identified with the point with coordinates $(a, b)$ of the Cartesian plane, or, equivalently, with the **vector** applied at the origin $0$ and pointing to $(a, b)$ (Figure 1 of the handouts).

- The horizontal axis is the **real axis**: it is exactly the subset $\R \subset \C$ of the real numbers.
- The vertical axis is the **imaginary axis**: it contains all the numbers of the form $bi$, as $b \in \R$ varies.

```graph
title: In the complex plane the number $a + bi$ is the point $(a, b)$: the real part is read horizontally, the imaginary part vertically
x: -4 4
y: -3 3
names: $\operatorname{Re}$ $\operatorname{Im}$
segment: 2 0 2 1 | grey | dashed
segment: 0 1 2 1 | grey | dashed
vector: 2 1 | accent | $2 + i$ | ne
point: -1 2 | blue | $-1 + 2i$ | nw
point: -3 0 | amber | $-3$ | n
point: 0 2 | violet | $2i$ | ne
point: -2 -2 | pink | $-2 - 2i$ | sw
point: 3 -2 | green | $3 - 2i$ | se
```

The number $-3$ lies on the real axis and $2i$ on the imaginary axis. The number $2 + i$ is drawn as an arrow: it is the vector that starts at the origin and ends at the point $(2, 1)$.

### The modulus is a distance

The modulus $|a + bi| = \sqrt{a^2 + b^2}$ is the length of the vector, that is the **distance of the point from the origin**: by Pythagoras' theorem, in the right triangle with legs of length $|a|$ and $|b|$ the hypotenuse has length $\sqrt{a^2 + b^2}$. The handouts note it in lesson L03, when they introduce polar coordinates.

```graph
title: $\lvert 3 + 4i \rvert = 5$: the modulus is the hypotenuse of a triangle with legs $3$ and $4$
x: -1 5
y: -1 5
names: $\operatorname{Re}$ $\operatorname{Im}$
polygon: 0 0 3 0 3 4 | blue | faint
vector: 3 4 | accent | thick | $3 + 4i$ | ne
text: 1.5 -0.35 | $3$
text: 3.35 2 | $4$
text: 1.1 2.3 | accent | $\lvert z \rvert = 5$
```

### Conjugate and opposite

In the plane, the conjugate $\bar z = a - bi$ has the same abscissa and the ordinate with its sign changed: it is the **mirror image of $z$ with respect to the real axis** (the handouts say this too, in lesson L03). The opposite $-z = -a - bi$ is instead the mirror image with respect to the **origin**.

```graph
title: Conjugate: symmetry with respect to the real axis. Opposite: symmetry with respect to the origin
x: -6 6
y: -3 3
names: $\operatorname{Re}$ $\operatorname{Im}$
segment: 3 2 3 -2 | grey | dashed
segment: 3 2 -3 -2 | grey | dashed
vector: 3 2 | accent | $z = 3 + 2i$ | ne
vector: 3 -2 | violet | $\bar z = 3 - 2i$ | se
vector: -3 -2 | amber | $-z = -3 - 2i$ | sw
```

### The sum: the parallelogram rule

The sum $z_1 + z_2$ is computed by interpreting $z_1$ and $z_2$ as vectors and adding them with the **parallelogram** rule: the point $z_1 + z_2$ is the fourth vertex of the parallelogram that has three vertices at $0$, $z_1$ and $z_2$. It works because the sum is done coordinate by coordinate, exactly like the sum of vectors in the plane (you will meet it again in lesson L05).

```graph
title: Figure 2 of the handouts: $z_1 = 1 + 3i$, $z_2 = 4 + i$, $z_1 + z_2 = 5 + 4i$
x: -1 7
y: -1 5
names: $\operatorname{Re}$ $\operatorname{Im}$
polygon: 0 0 1 3 5 4 4 1 | amber | faint
segment: 1 3 5 4 | grey | dashed
segment: 4 1 5 4 | grey | dashed
vector: 1 3 | accent | $z_1$ | nw
vector: 4 1 | blue | $z_2$ | se
vector: 5 4 | amber | thick | $z_1 + z_2$ | ne
```

Read the drawing like this: start from $0$, go to $z_1$ and from there make the same move that takes $0$ to $z_2$ ($4$ to the right and $1$ up): you arrive at $5 + 4i$. Or do $z_2$ first and then $z_1$: you arrive at the same point, because the sum is commutative.

> [!BEYOND] · the difference and the distance between two points
> The difference $z - w$ is the vector that goes **from $w$ to $z$**. Its modulus is the distance between the two points: with $z = a + bi$ and $w = c + di$,
> $$|z - w| = \sqrt{(a - c)^2 + (b - d)^2},$$
> which is the distance formula of analytic geometry. For example the distance between $1 + i$ and $4 + 5i$ is $|3 + 4i| = 5$. Consequently $\{z \in \C \mid |z - c| = r\}$ is the **circle** with centre $c$ and radius $r$: it is needed in exercise 4.

### And the product?

The product $z_1 \cdot z_2$ also has a geometric meaning, which can be seen clearly only with **polar coordinates**: you study it in lesson L03. A foretaste: multiplying by $i$ **rotates** the point by a right angle anticlockwise. For example $i(2 + i) = 2i + i^2 = -1 + 2i$, and $i(-1 + 2i) = -i + 2i^2 = -2 - i$.

```graph
title: Multiplying by $i$ rotates by $90°$ around the origin (preview of lesson L03)
x: -3 3
y: -3 3
names: $\operatorname{Re}$ $\operatorname{Im}$
arc: 0 0 0.8 0.4636 2.0344 | grey
arc: 0 0 0.8 2.0344 3.6052 | grey
vector: 2 1 | accent | $z = 2 + i$ | ne
vector: -1 2 | blue | $iz = -1 + 2i$ | nw
vector: -2 -1 | amber | $i^2 z = -2 - i$ | sw
```

Try it yourself with the tool below. In **z + w** mode drag the points $z$ and $w$: the parallelogram updates and below it you read the coordinates of the sum. Then choose **conjugate and inverse of z**: you see $\bar z$ mirrored with respect to the real axis and $1/z$, which lies inside the unit circle when $|z| > 1$ and outside when $|z| < 1$ (you will understand why in lesson L03).

```widget complessi
title: Sum, conjugate and inverse in the complex plane
z: 1+3i
w: 4+i
modo: somma
modi: somma coniugato
raggio: 6
```

## Drawing sets of complex numbers (beyond the handouts)

Exercise 2.6 of the handouts asks you to draw sets of complex numbers defined by a condition. The method is always the same.

> [!METHOD] From a condition on $z$ to a drawing
> 1. Write $z = x + yi$ with $x, y$ real: $\operatorname{Re}(z) = x$, $\operatorname{Im}(z) = y$, $\bar z = x - yi$, $|z| = \sqrt{x^2 + y^2}$.
> 2. Translate the condition into a condition on $x$ and $y$. If it is an equality between complex numbers, equate real parts and imaginary parts.
> 3. Recognise the figure: line, half-plane, circle, disc. Remember that $|z - c|$ is the distance of $z$ from the point $c$.

| Condition | In $x$ and $y$ | Figure |
|---|---|---|
| $\operatorname{Re}(z) = 2$ | $x = 2$ | vertical line |
| $\operatorname{Im}(z) > 1$ | $y > 1$ | half-plane above the line $y = 1$, line excluded |
| $\lvert z \rvert = 3$ | $x^2 + y^2 = 9$ | circle with centre $0$ and radius $3$ |
| $\lvert z - i \rvert \le 1$ | $x^2 + (y - 1)^2 \le 1$ | disc with centre $i$ and radius $1$, boundary included |
| $\lvert z - 1 \rvert = \lvert z + 1 \rvert$ | $x = 0$ | the imaginary axis |

Let us check the last row, which cannot be guessed by eye. $|z - 1|$ is the distance from $1$ and $|z + 1| = |z - (-1)|$ is the distance from $-1$: the points equidistant from $1$ and from $-1$ form the perpendicular bisector of the segment joining them, that is the imaginary axis. With the computations: squaring, $(x - 1)^2 + y^2 = (x + 1)^2 + y^2$, that is $x^2 - 2x + 1 = x^2 + 2x + 1$, that is $-4x = 0$, that is $x = 0$.

```graph
title: The disc $\lvert z - (1 + i) \rvert \le 2$: all the points at distance at most $2$ from the centre $1 + i$
x: -2 4
y: -2 4
names: $\operatorname{Re}$ $\operatorname{Im}$
polygon: 3 1 2.932 1.518 2.732 2 2.414 2.414 2 2.732 1.518 2.932 1 3 0.482 2.932 0 2.732 -0.414 2.414 -0.732 2 -0.932 1.518 -1 1 -0.932 0.482 -0.732 0 -0.414 -0.414 0 -0.732 0.482 -0.932 1 -1 1.518 -0.932 2 -0.732 2.414 -0.414 2.732 0 2.932 0.482 | blue
point: 1 1 | blue | $1 + i$ | sw
segment: 1 1 3 1 | accent | $2$ | n
```

> [!BEYOND] · where to find it in the book
> In Martelli's book this lesson corresponds to §1.4, parts 1.4.1 "Definizione", 1.4.2 "Coniugio, norma e inverso" (with Example 1.4.1, which is 2.3 in the handouts) and 1.4.3 "Il piano complesso", on pp. 25–27 of the book. Exercise 1.4.3 (p. 30) lists the properties of the modulus and of the conjugate, including those of exercise 2.5 of the handouts; §1.5.3 (p. 36) defines fields in general.

## Towards the exam

**The test in two lines.** 10 multiple-choice questions (5 answers, one right) and 2 problems worth 11 points, marked only with at least 6 points in the quiz; 2 hours, no calculator, only 4 handwritten pages of notes. 2026/27 Linear Algebra exam sessions: 22/01/2027 and 05/02/2027 at 14:00. Complete rules and sources in lesson L01.

**Complex numbers in the exam sessions.** In **each** of the 15 exam sessions from 24/01/2024 to 07/09/2026 there is at least one quiz question on complex numbers or on the roots of a polynomial, and in 11 sessions out of 15 it is question 1. They split like this among lessons L02–L04:

| Type of question | Exam sessions (question) | Lesson |
|---|---|---|
| find $z$ from a first-degree equation, then compute an expression | 08/02/2024 (1), 03/06/2025 (1), 03/06/2026 (1) | L02 |
| high powers, product in polar form, $n$-th roots | 24/01/2024 (2), 10/06/2024 (1), 10/07/2024 (1), 06/09/2024 (1), 16/01/2025 (1), 07/02/2025 (1), 02/09/2025 (2), 15/01/2026 (5), 05/02/2026 (1) | L03 |
| which number is a root of a polynomial | 10/07/2025 (1), 03/07/2026 (7), 07/09/2026 (1) | L04 |

The questions of lessons L03 and L04 too almost always end with the computations of this lesson: a product, an inverse, a division. Here are the three questions of type L02, with the solution.

> [!EXAMPLE] · Exam of 08/02/2024, question 1
> Find $z \in \C$ such that $(i - 1)(i - 2)z = (i + 1)(i + 2)(i + 3)$. Answers: $10 + 3i$; $i - 3$; $30 + 10i$; $3i - 1$; $1 - 30i$.
>
> **Solution.** First simplify the two sides.
> - $(i - 1)(i - 2) = i^2 - 2i - i + 2 = -1 - 3i + 2 = 1 - 3i$.
> - $(i + 1)(i + 2) = i^2 + 3i + 2 = 1 + 3i$, and then $(1 + 3i)(i + 3) = i + 3 + 3i^2 + 9i = 3 - 3 + 10i = 10i$.
>
> The equation becomes $(1 - 3i)z = 10i$, so
> $$z = \frac{10i}{1 - 3i} = \frac{10i(1 + 3i)}{(1 - 3i)(1 + 3i)} = \frac{10i + 30i^2}{10} = \frac{-30 + 10i}{10} = -3 + i.$$
> It is the answer $i - 3$. Check: $(1 - 3i)(-3 + i) = -3 + i + 9i - 3i^2 = -3 + 10i + 3 = 10i$.

> [!EXAMPLE] · Exam of 03/06/2025, question 1
> Given $z \in \C$ satisfying $(1 + i)z = 3 + 2i$, what is $2z(5 + i)$? Answers: $13 + 13i$; $26i$; $1 + i$; $13 - 13i$; $26$.
>
> **Solution.** $z = \frac{3 + 2i}{1 + i} = \frac{(3 + 2i)(1 - i)}{2} = \frac{3 - 3i + 2i - 2i^2}2 = \frac{5 - i}2$. Then
> $$2z(5 + i) = (5 - i)(5 + i) = 25 - i^2 = 26.$$
> The product is real because $5 - i$ and $5 + i$ are conjugates: $(5 - i)(5 + i) = |5 + i|^2 = 25 + 1$. Answer: $26$.

> [!EXAMPLE] · Exam of 03/06/2026, question 1
> If $(1 + i)z = 2i$, what is $\frac 1{z + i}$? Answers: $0$; $\frac 1{1 + i}$; $\frac{1 - 2i}5$; $\frac i{1 + i}$; $\frac{2 + i}5$.
>
> **Solution.** $z = \frac{2i}{1 + i} = \frac{2i(1 - i)}{2} = i - i^2 = 1 + i$. So $z + i = 1 + 2i$ and
> $$\frac 1{1 + 2i} = \frac{1 - 2i}{(1 + 2i)(1 - 2i)} = \frac{1 - 2i}{5}.$$
> Answer: $\frac{1 - 2i}5$. Watch out for answers written in different forms: $\frac 1{1 + i} = \frac{1 - i}2$ and $\frac i{1 + i} = \frac{1 + i}2$ are numbers different from the right one, and it is always best to reduce everything to the form $a + bi$ before comparing.

> [!METHOD] The "find $z$" questions in five steps
> 1. Carry out the products of known numbers, so that the equation becomes $\alpha z = \beta$ with $\alpha, \beta$ numbers.
> 2. Divide: $z = \frac{\beta}{\alpha}$, multiplying top and bottom by $\bar\alpha$.
> 3. Check by multiplying: $\alpha \cdot z$ must give $\beta$.
> 4. Compute the required expression (sum, product, inverse).
> 5. Reduce the five answers to the form $a + bi$ before choosing. In the quiz you can also **substitute** the answers into the equation: with one product per answer you find the right one.

**Mistakes to avoid.** Forgetting that $i^2 = -1$ changes the sign; multiplying by the conjugate of the numerator instead of the denominator; confusing $|z|^2$ with $z^2$; dividing part by part; writing inequalities between complex numbers.

> [!EXAM] The 4-page sheet
> From this lesson a few lines are enough: $i^2 = -1$ and the powers of $i$ with period 4; $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$; $\bar z = a - bi$, $|z| = \sqrt{a^2 + b^2}$, $z\bar z = |z|^2$; $z^{-1} = \frac{\bar z}{|z|^2}$; "to divide, I multiply by the conjugate of the denominator"; $|z - c|$ is the distance from $c$.

## Quiz

```quiz
Q: The number $z \in \C$ such that $(1 - i)z = 2 + 4i$ is:
+ $-1 + 3i$
- $3 + i$
- $-1 - 3i$
- $1 + 3i$
- $-2 + 4i$
= $z = \frac{2 + 4i}{1 - i} = \frac{(2 + 4i)(1 + i)}{2} = \frac{2 + 2i + 4i + 4i^2}2 = \frac{-2 + 6i}2 = -1 + 3i$. Check: $(1 - i)(-1 + 3i) = -1 + 3i + i - 3i^2 = 2 + 4i$. The other answers, multiplied by $1 - i$, give $4 - 2i$, $-4 - 2i$, $4 + 2i$ and $2 + 6i$. Similar to the exams of 08/02/2024 and 03/06/2025, question 1.

Q: If $(1 + 2i)z = 5$, then $\frac 1{z + i}$ is equal to:
+ $\frac{1 + i}2$
- $\frac{1 - i}2$
- $1 + i$
- $\frac 12$
- $\frac{1 - 3i}{10}$
= $z = \frac 5{1 + 2i} = \frac{5(1 - 2i)}5 = 1 - 2i$, so $z + i = 1 - i$ and $\frac 1{1 - i} = \frac{1 + i}{(1 - i)(1 + i)} = \frac{1 + i}2$. The answer $\frac{1 - 3i}{10}$ is $\frac 1{1 + 3i}$: it comes out if you get the sign of $z$ wrong. Similar to the exam of 03/06/2026, question 1.

Q: What is $(2 + 3i)(1 - 2i)$?
+ $8 - i$
- $-4 - i$
- $2 - 6i$
- $8 + i$
- $8 - 7i$
= $(2 + 3i)(1 - 2i) = 2 - 4i + 3i - 6i^2 = 2 - i + 6 = 8 - i$. The answer $-4 - i$ comes from using $i^2 = +1$; $2 - 6i$ from multiplying "part by part". These are the computations with which question 1 of the exam of 08/02/2024 starts, where you had to carry out products like $(i - 1)(i - 2)$.

Q: What is $i^{2026}$?
+ $-1$
- $1$
- $i$
- $-i$
- $2026\,i$
= The powers of $i$ repeat every 4: $2026 = 4 \cdot 506 + 2$, so $i^{2026} = (i^4)^{506} \cdot i^2 = 1 \cdot (-1) = -1$. The same computation was needed in the exam of 05/02/2026 (question 1), to check that $(\pm i)^{2026} = -1$.

Q: Which statement is true for **every** $z \in \C$?
+ $z + \bar z$ is a real number.
- $z - \bar z$ is a real number.
- $z^2 = |z|^2$.
- $|z| = \operatorname{Re}(z) + \operatorname{Im}(z)$.
- $\bar z = -z$.
= With $z = a + bi$: $z + \bar z = 2a$ is real. Instead $z - \bar z = 2bi$ is not real if $b \neq 0$ (for example with $z = i$ it is $2i$); $i^2 = -1$ but $|i|^2 = 1$; $|1 + i| = \sqrt 2 \neq 2$; $\bar 1 = 1 \neq -1$.

Q: The inverse of $3 - 4i$ is:
+ $\frac{3 + 4i}{25}$
- $\frac{3 + 4i}5$
- $\frac 13 - \frac 14 i$
- $-3 + 4i$
- $\frac{-3 + 4i}{25}$
= $(3 - 4i)^{-1} = \frac{\overline{3 - 4i}}{|3 - 4i|^2} = \frac{3 + 4i}{9 + 16} = \frac{3 + 4i}{25}$. Check: $(3 - 4i)(3 + 4i) = 25$. With $\frac{3 + 4i}5$ you divided by $|z|$ instead of $|z|^2$ (the product comes out $5$); $\frac 13 - \frac 14 i$ inverts the parts separately (the product comes out $-\frac{25}{12}i$). An inverse to be computed like this was also in the exam of 10/06/2024 (question 1).

Q: Which statement about $\C$ is true?
+ $\C$ is a field, but it is not ordered.
- $\C$ is not a field, because $i$ has no inverse.
- $\C$ is ordered: for example $2i > i$.
- $\R$ is not contained in $\C$.
- $0$ too has an inverse in $\C$.
= $\C$ has the nine properties of Proposition 2.2, so it is a field; $i$ has inverse $-i$. It is not ordered: if it were, $1 = 1^2$ and $-1 = i^2$ would both be positive. $\R \subset \C$ (the numbers $a + 0i$) and $0$ never has an inverse.

Q: What is the imaginary part of $\frac{3 - i}{1 + i}$? Write a number.
N: -2
= $\frac{3 - i}{1 + i} = \frac{(3 - i)(1 - i)}{2} = \frac{3 - 3i - i + i^2}{2} = \frac{2 - 4i}2 = 1 - 2i$. The imaginary part is the real number $-2$ (not $-2i$). The same division by $1 + i$ was needed in the exam of 03/06/2025, question 1.

Q: In the complex plane, the set $\{z \in \C \mid |z - i| = 2\}$ is:
+ the circle with centre $i$ and radius $2$
- the circle with centre $-i$ and radius $2$
- the circle with centre $i$ and radius $4$
- the full disc with centre $i$ and radius $2$
- the horizontal line $\operatorname{Im}(z) = 2$
= $|z - i|$ is the distance of $z$ from the point $i$: the points at distance exactly $2$ from $i$ form the circle with centre $i$ and radius $2$. In coordinates: $x^2 + (y - 1)^2 = 4$. The full disc would be $|z - i| \le 2$.

Q: In the complex plane, $0$, $z = 1 + 3i$ and $w = 4 + i$ are three vertices of a parallelogram. The fourth vertex, opposite $0$, is:
+ $5 + 4i$
- $3 - 2i$
- $-3 + 2i$
- $1 + 13i$
- $5 + 3i$
= By the parallelogram rule the fourth vertex is the sum $z + w = (1 + 4) + (3 + 1)i = 5 + 4i$: it is Figure 2 of the handouts. $3 - 2i$ and $-3 + 2i$ are the differences $w - z$ and $z - w$; $1 + 13i$ is the product $zw$.
```

## Exercises

::: exercise basic Computations with the form $a + bi$
Compute and write in the form $a + bi$: (a) $(3 - 2i) + (-1 + 5i)$; (b) $(3 - 2i) - (-1 + 5i)$; (c) $(3 - 2i)(-1 + 5i)$; (d) $(1 - 2i)^2$; (e) $(2 + i)^3$ and $(2 - i)^3$ (they are the cubes of Bombelli's story).
::: solution
(a) Real parts and imaginary parts separately: $(3 - 1) + (-2 + 5)i = 2 + 3i$.

(b) The minus changes both parts of $-1 + 5i$: $(3 + 1) + (-2 - 5)i = 4 - 7i$.

(c) Four products: $3 \cdot (-1) = -3$; $3 \cdot 5i = 15i$; $-2i \cdot (-1) = 2i$; $-2i \cdot 5i = -10i^2 = 10$. Sum: $(-3 + 10) + (15 + 2)i = 7 + 17i$.

(d) Square of a binomial: $(1 - 2i)^2 = 1 - 4i + 4i^2 = 1 - 4i - 4 = -3 - 4i$.

(e) First the square: $(2 + i)^2 = 4 + 4i + i^2 = 3 + 4i$. Then $(2 + i)^3 = (3 + 4i)(2 + i) = 6 + 3i + 8i + 4i^2 = 2 + 11i$. In the same way $(2 - i)^2 = 3 - 4i$ and $(2 - i)^3 = (3 - 4i)(2 - i) = 6 - 3i - 8i + 4i^2 = 2 - 11i$. The two bases added together give $(2 + i) + (2 - i) = 4$: the real solution of $x^3 = 15x + 4$ found by Bombelli.
:::

::: exercise intermediate Exercise 2.4 of the handouts: real part and imaginary part
Compute the real part and the imaginary part of the following complex numbers:
$$\frac{6 + 5i}{3 - i}, \qquad \frac{(2 + i)^3}{5i^{15}}, \qquad \frac{3 - 2i}{1 + 5i} + \frac{2 - 3i}{2 - i}.$$
::: solution
**First number.** I multiply top and bottom by the conjugate of the denominator, $3 + i$; in the denominator $|3 - i|^2 = 9 + 1 = 10$:
$$\frac{6 + 5i}{3 - i} = \frac{(6 + 5i)(3 + i)}{10} = \frac{18 + 6i + 15i + 5i^2}{10} = \frac{13 + 21i}{10}.$$
Real part $\frac{13}{10}$, imaginary part $\frac{21}{10}$.

**Second number.** You computed the numerator in exercise 1: $(2 + i)^3 = 2 + 11i$. In the denominator $i^{15} = i^3 = -i$ (because $15 = 4 \cdot 3 + 3$), so $5i^{15} = -5i$. Then
$$\frac{2 + 11i}{-5i} = \frac{(2 + 11i) \cdot i}{-5i \cdot i} = \frac{2i + 11i^2}{-5i^2} = \frac{-11 + 2i}{5}.$$
Here I multiplied top and bottom by $i$, which is enough because the denominator is purely imaginary: $-5i \cdot i = -5i^2 = 5$. Real part $-\frac{11}5$, imaginary part $\frac 25$.

**Third number.** Two divisions and a sum.
- $\frac{3 - 2i}{1 + 5i} = \frac{(3 - 2i)(1 - 5i)}{1 + 25} = \frac{3 - 15i - 2i + 10i^2}{26} = \frac{-7 - 17i}{26}$.
- $\frac{2 - 3i}{2 - i} = \frac{(2 - 3i)(2 + i)}{4 + 1} = \frac{4 + 2i - 6i - 3i^2}{5} = \frac{7 - 4i}5$.
- Sum, with common denominator $130$:
  $$\frac{-7 - 17i}{26} + \frac{7 - 4i}{5} = \frac{5(-7 - 17i) + 26(7 - 4i)}{130},$$
  and the numerator is $-35 - 85i + 182 - 104i = 147 - 189i$. So the sum is $\frac{147 - 189i}{130}$.

Real part $\frac{147}{130}$, imaginary part $-\frac{189}{130}$ (the fractions cannot be simplified: $147 = 3 \cdot 7^2$, $189 = 3^3 \cdot 7$ and $130 = 2 \cdot 5 \cdot 13$ have no common factors).
:::

::: exercise intermediate Exercise 2.5 of the handouts: properties of modulus and conjugate
Prove that for every $z, w \in \C$ the following hold:
$$|\bar z| = |z|, \qquad |z^{-1}| = \frac 1{|z|} \ (z \neq 0), \qquad \overline{z + w} = \bar z + \bar w, \qquad \overline{zw} = \bar z\,\bar w.$$
::: solution
I write $z = a + bi$ and $w = c + di$ with $a, b, c, d$ real.

**1. $|\bar z| = |z|$.** $\bar z = a + (-b)i$, so $|\bar z| = \sqrt{a^2 + (-b)^2} = \sqrt{a^2 + b^2} = |z|$, because $(-b)^2 = b^2$. In the plane: a point and its mirror image with respect to the real axis have the same distance from the origin.

**2. $|z^{-1}| = \frac 1{|z|}$.** For $z \neq 0$, $z^{-1} = \frac{a}{a^2 + b^2} - \frac{b}{a^2 + b^2}\,i$. I call $m = a^2 + b^2 = |z|^2 > 0$. Then
$$|z^{-1}| = \sqrt{\frac{a^2}{m^2} + \frac{b^2}{m^2}} = \sqrt{\frac{a^2 + b^2}{m^2}} = \sqrt{\frac{m}{m^2}} = \frac{1}{\sqrt m} = \frac 1{|z|}.$$

**3. $\overline{z + w} = \bar z + \bar w$.** $z + w = (a + c) + (b + d)i$, so $\overline{z + w} = (a + c) - (b + d)i$. On the other hand $\bar z + \bar w = (a - bi) + (c - di) = (a + c) - (b + d)i$. They are equal.

**4. $\overline{zw} = \bar z\,\bar w$.** From the product formula $zw = (ac - bd) + (ad + bc)i$, so $\overline{zw} = (ac - bd) - (ad + bc)i$. On the other hand
$$\bar z\,\bar w = (a - bi)(c - di) = ac - adi - bci + bd\,i^2 = (ac - bd) - (ad + bc)i.$$
They are equal. In words: you can conjugate before or after doing the computations. This rule will be needed in lesson L04 (Proposition 4.11).
:::

::: exercise intermediate Exercise 2.6 of the handouts: three sets to draw
Draw the following subsets in the complex plane:
1. $A = \{z \in \C \text{ such that } \operatorname{Re}(z) > \operatorname{Im}(z)\}$;
2. $B = \{z \in \C \text{ such that } z + \bar z = i\}$;
3. $C = \{z \in \C \text{ such that } |z - 2| \ge 2\}$.
::: solution
I always write $z = x + yi$.

**1. The set $A$.** The condition is $x > y$: the points that lie **below** the bisector $y = x$. It is an open half-plane: the line $y = x$ is excluded, because there $x = y$ holds and not $x > y$. Check with a point: $z = 1$ has $x = 1 > 0 = y$, and indeed it lies below the bisector.

```graph
title: $A = \{\operatorname{Re}(z) > \operatorname{Im}(z)\}$: the half-plane below the bisector, bisector excluded (dashed)
x: -4 4
y: -4 4
names: $\operatorname{Re}$ $\operatorname{Im}$
polygon: -6 -6 6 -6 6 6 | blue | dashed
point: 1 0 | accent | $1$ | s
text: 2 -1.8 | blue | $A$
```

**2. The set $B$.** $z + \bar z = (x + yi) + (x - yi) = 2x$, which is a **real** number. A real number cannot be equal to $i$, which has imaginary part $1$: equating the imaginary parts you would get $0 = 1$. So $B = \emptyset$, the empty set: there is nothing to draw.

If the condition had been $z - \bar z = i$, we would have $2yi = i$, that is $y = \frac 12$: the horizontal line $\operatorname{Im}(z) = \frac 12$. It is always worth noticing when a condition is impossible: "the set is empty" is a complete answer, to be justified as above.

**3. The set $C$.** $|z - 2|$ is the distance of $z$ from the point $2$. The condition asks for a distance of **at least** $2$: these are the points **outside** the circle with centre $2$ and radius $2$, together with the circle itself. In coordinates: $(x - 2)^2 + y^2 \ge 4$. The open disc $(x - 2)^2 + y^2 < 4$ is excluded; the circle passes through the origin, which therefore belongs to $C$ ($|0 - 2| = 2$).

```graph
title: $C = \{\lvert z - 2 \rvert \ge 2\}$: the whole plane except the inside of the circle; the circle is part of $C$
x: -3 7
y: -4 4
names: $\operatorname{Re}$ $\operatorname{Im}$
polygon: 9 0 9 6 -5 6 -5 -6 9 -6 9 0 4 0 3.932 -0.518 3.732 -1 3.414 -1.414 3 -1.732 2.518 -1.932 2 -2 1.482 -1.932 1 -1.732 0.586 -1.414 0.268 -1 0.068 -0.518 0 0 0.068 0.518 0.268 1 0.586 1.414 1 1.732 1.482 1.932 2 2 2.518 1.932 3 1.732 3.414 1.414 3.732 1 3.932 0.518 4 0 | violet | thin
circle: 2 0 2 | violet | thick
point: 2 0 | grey | hollow | $2$ | s
point: 0 0 | violet | $0 \in C$ | nw
text: 5.5 2.8 | violet | $C$
```
:::

::: exercise basic Inverses and quotients
Write in the form $a + bi$: (a) $(1 + i)^{-1}$; (b) $(2 - 3i)^{-1}$; (c) $\frac{5 + 5i}{1 - 2i}$; (d) $\frac{i}{1 + i}$.
::: solution
(a) $|1 + i|^2 = 2$, so $(1 + i)^{-1} = \frac{1 - i}2 = \frac 12 - \frac 12 i$. Check: $(1 + i)(1 - i) = 2$, divided by $2$ gives $1$.

(b) $|2 - 3i|^2 = 4 + 9 = 13$, so $(2 - 3i)^{-1} = \frac{2 + 3i}{13} = \frac 2{13} + \frac 3{13}i$.

(c) Conjugate of the denominator: $1 + 2i$; $|1 - 2i|^2 = 5$.
$$\frac{(5 + 5i)(1 + 2i)}{5} = \frac{5 + 10i + 5i + 10i^2}{5} = \frac{-5 + 15i}5 = -1 + 3i.$$
Check: $(-1 + 3i)(1 - 2i) = -1 + 2i + 3i - 6i^2 = 5 + 5i$.

(d) $\frac{i}{1 + i} = \frac{i(1 - i)}{2} = \frac{i - i^2}2 = \frac{1 + i}2$.
:::

::: exercise intermediate An equation with the conjugate
Find all $z \in \C$ such that $z + 2\bar z = 3 - i$.
::: solution
Here you cannot "divide by the coefficient", because both $z$ and $\bar z$ appear. You use the method of coordinates: $z = x + yi$ with $x, y$ real, so $\bar z = x - yi$.

1. Left-hand side: $z + 2\bar z = x + yi + 2x - 2yi = 3x - yi$.
2. The equation is $3x - yi = 3 - i$. Two complex numbers are equal when they have equal real parts and equal imaginary parts: $3x = 3$ and $-y = -1$.
3. So $x = 1$, $y = 1$: the only solution is $z = 1 + i$.

Check: $(1 + i) + 2(1 - i) = 1 + i + 2 - 2i = 3 - i$.
:::

::: exercise hard Two second-degree equations solved with coordinates
(a) Find all $z \in \C$ with $z^2 = 2i$. (b) Find all $z \in \C$ with $|z|^2 + z = 7 + i$.
::: solution
**(a)** I write $z = x + yi$. Then $z^2 = x^2 - y^2 + 2xyi$, and the equation $z^2 = 0 + 2i$ becomes the system
$$\begin{cases} x^2 - y^2 = 0 \\ 2xy = 2 \end{cases}$$
From the first, $y = x$ or $y = -x$. With $y = -x$ the second gives $-2x^2 = 2$, that is $x^2 = -1$: impossible for real $x$. With $y = x$ the second gives $2x^2 = 2$, that is $x = \pm 1$. Solutions: $z = 1 + i$ and $z = -1 - i$, that is $z = \pm(1 + i)$. Check: $(1 + i)^2 = 1 + 2i + i^2 = 2i$. In lesson L03 you will find these two **square roots** of $2i$ again with polar coordinates; they are needed in Example 4.10 of lesson L04.

**(b)** $|z|^2 = x^2 + y^2$ is real, so $|z|^2 + z = (x^2 + y^2 + x) + yi$. Equating real part and imaginary part with those of $7 + i$:
$$\begin{cases} x^2 + y^2 + x = 7 \\ y = 1 \end{cases}$$
Substituting $y = 1$: $x^2 + x + 1 = 7$, that is $x^2 + x - 6 = 0$, that is $(x + 3)(x - 2) = 0$. Two solutions: $z = 2 + i$ and $z = -3 + i$. Check: $|2 + i|^2 + 2 + i = 5 + 2 + i = 7 + i$ and $|-3 + i|^2 - 3 + i = 10 - 3 + i = 7 + i$.
:::

::: exercise hard The numbers of modulus 1
(a) Prove that if $|z| = 1$ then $z^{-1} = \bar z$. (b) Use it to compute the inverse of $\frac 35 + \frac 45 i$.
::: solution
(a) If $|z| = 1$, then also $|z|^2 = 1$, and the inverse formula gives $z^{-1} = \frac{\bar z}{|z|^2} = \frac{\bar z}1 = \bar z$. In other words, $z\bar z = |z|^2 = 1$.

(b) $\left|\frac 35 + \frac 45 i\right| = \sqrt{\frac 9{25} + \frac{16}{25}} = \sqrt{\frac{25}{25}} = 1$. So the inverse is the conjugate: $\frac 35 - \frac 45 i$. Check: $\left(\frac 35 + \frac 45 i\right)\left(\frac 35 - \frac 45 i\right) = \frac 9{25} + \frac{16}{25} = 1$. In the plane, the numbers of modulus 1 form the **unit circle**, the protagonist of lesson L03.
:::

::: exercise intermediate Two more sets
Draw: (a) $D = \{z \in \C \mid \operatorname{Im}(\bar z + 2i) > 0\}$; (b) $E = \{z \in \C \mid |z| = |z - 2i|\}$.
::: solution
(a) With $z = x + yi$: $\bar z + 2i = x - yi + 2i = x + (2 - y)i$, so $\operatorname{Im}(\bar z + 2i) = 2 - y$. The condition $2 - y > 0$ is $y < 2$: the half-plane **below** the horizontal line $\operatorname{Im}(z) = 2$, line excluded. Watch out for the conjugate: it changes the sign of $y$, and this is why the half-plane lies below and not above.

(b) $|z|$ is the distance from $0$, $|z - 2i|$ the distance from $2i$: the points equidistant from $0$ and from $2i$ lie on the perpendicular bisector of the segment joining them, that is on the horizontal line $\operatorname{Im}(z) = 1$. With the computations: $x^2 + y^2 = x^2 + (y - 2)^2$, that is $y^2 = y^2 - 4y + 4$, that is $y = 1$.
:::

::: exercise exam As at the exam: find $z$
Find the number $z \in \C$ such that $(1 + i)(2 - i)\,z = (3 + i)(1 - i)$. Possible answers: (a) $1 - i$; (b) $1 + i$; (c) $2 - i$; (d) $-1 + i$; (e) $10 - 10i$.
::: solution
1. **I simplify the two sides.** $(1 + i)(2 - i) = 2 - i + 2i - i^2 = 3 + i$. $(3 + i)(1 - i) = 3 - 3i + i - i^2 = 4 - 2i$.
2. **I divide.** $(3 + i)z = 4 - 2i$, so
   $$z = \frac{4 - 2i}{3 + i} = \frac{(4 - 2i)(3 - i)}{9 + 1} = \frac{12 - 4i - 6i + 2i^2}{10} = \frac{10 - 10i}{10} = 1 - i.$$
3. **Check.** $(3 + i)(1 - i) = 3 - 3i + i - i^2 = 4 - 2i$. Correct: the answer is (a).

As a check, or as an alternative strategy in the quiz, you can multiply the other answers by $3 + i$: (b) gives $2 + 4i$, (c) gives $7 - i$, (d) gives $-4 + 2i$, (e) gives $40 - 20i$. None is $4 - 2i$. Answer (e) is the trap for those who forget to divide by $|3 + i|^2 = 10$.
:::

::: exercise exam As at the exam: first $z$, then an expression
If $(2 - i)z = 5i$, then $z\bar z + z$ is: (a) $4 + 2i$; (b) $6 + 2i$; (c) $-4 - 2i$; (d) $5$; (e) $4 - 2i$.
::: solution
1. $z = \frac{5i}{2 - i} = \frac{5i(2 + i)}{4 + 1} = i(2 + i) = 2i + i^2 = -1 + 2i$. Check: $(2 - i)(-1 + 2i) = -2 + 4i + i - 2i^2 = 5i$.
2. $z\bar z = |z|^2 = (-1)^2 + 2^2 = 5$.
3. $z\bar z + z = 5 + (-1 + 2i) = 4 + 2i$: answer (a).

Where the others come from: (b) is the result with $z = 1 + 2i$, that is with a sign mistake; (c) uses $z^2 = -3 - 4i$ instead of $z\bar z$; (d) forgets to add $z$; (e) uses $\bar z$ instead of $z$ in the last sum.
:::

## Review questions

::: question Why does the equation $x^2 = -1$ have no real solutions, and how do complex numbers solve it?
The square of a real number is never negative: $x^2 \ge 0$ for every $x \in \R$. The complex numbers add the symbol $i$ with $i^2 = -1$: in $\C$ the equation has two solutions, $i$ and $-i$.
:::

::: question What is a complex number? What are its real part and its imaginary part?
An object of the form $a + bi$, with $a, b$ arbitrary reals and $i$ the imaginary unit (Definition 2.1). The real part is $\operatorname{Re}(z) = a$, the imaginary part is the real number $\operatorname{Im}(z) = b$, without the $i$.
:::

::: question How do you multiply two complex numbers?
With the distributive property, each term times each term, then replacing $i^2$ with $-1$ and collecting: $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$. For example $(7 + i)(4 - i) = 29 - 3i$.
:::

::: question What is $i^n$? How do you compute it for large $n$?
The powers of $i$ repeat every 4: $1, i, -1, -i$. Divide $n$ by 4 and look at the remainder $r$: $i^n = i^r$. For example $i^{15} = i^3 = -i$.
:::

::: question Is $\C$ a field? Is it ordered?
It is a field: the nine properties of Proposition 2.2 hold, as in $\R$. It is not ordered: in an ordered field the squares of non-zero numbers are positive, so both $1 = 1^2$ and $-1 = i^2$ would be, which is impossible.
:::

::: question What is the conjugate of $z$? When is $z = \bar z$?
$\bar z = a - bi$: you change the sign of the imaginary part. $z = \bar z$ if and only if $b = 0$, that is if and only if $z$ is real.
:::

::: question What is the modulus of $z$ and what does it mean in the plane?
$|z| = \sqrt{a^2 + b^2}$, a non-negative real number, zero only for $z = 0$. It is the distance of the point $(a, b)$ from the origin, by Pythagoras' theorem.
:::

::: question What is $z\bar z$? Why is it important?
$z\bar z = a^2 + b^2 = |z|^2$: it is always a non-negative real number. Multiplying by the conjugate removes the $i$, and it is the trick on which inverse and division are based.
:::

::: question What is the inverse of $z \neq 0$? How do you check it?
$z^{-1} = \frac{\bar z}{|z|^2}$. Check: $z \cdot \frac{\bar z}{|z|^2} = \frac{|z|^2}{|z|^2} = 1$. For example $(2 + i)^{-1} = \frac{2 - i}5$.
:::

::: question How do you compute $\frac{w}{z}$?
You multiply numerator and denominator by $\bar z$: the denominator becomes the real number $|z|^2$ and you divide the real part and the imaginary part of $w\bar z$ by it. At the end you check by multiplying by $z$.
:::

::: question What are the real axis and the imaginary axis of the complex plane?
The real axis (horizontal) is the set of real numbers, $b = 0$; the imaginary axis (vertical) is the set of numbers $bi$, $a = 0$. The number $a + bi$ is the point $(a, b)$.
:::

::: question How do you see the sum of two complex numbers in the plane?
With the parallelogram rule: $z_1 + z_2$ is the fourth vertex of the parallelogram with vertices $0$, $z_1$, $z_2$. For example $(1 + 3i) + (4 + i) = 5 + 4i$.
:::

::: question What figure is $\{z \in \C \mid |z - c| = r\}$, with $r > 0$?
The circle with centre $c$ and radius $r$, because $|z - c|$ is the distance between $z$ and $c$. With $\le$ you get the disc, with $\ge$ the outside of the disc (circle included).
:::

## Glossary

```glossary
Imaginary unit $i$ | The new symbol of the complex numbers, with the rule $i^2 = -1$.
Complex number | Object $a + bi$ with $a, b$ arbitrary reals (Definition 2.1). The set of complex numbers is $\C$.
Real part $\operatorname{Re}(z)$ | The real number $a$ of $z = a + bi$.
Imaginary part $\operatorname{Im}(z)$ | The real number $b$ of $z = a + bi$ (without the $i$).
Purely imaginary | Complex number with zero real part, like $23i$ or $-i$.
Form $a + bi$ | The way of writing a complex number that separates real part and imaginary part; it is also called algebraic or Cartesian form.
Conjugate $\bar z$ | $\overline{a + bi} = a - bi$: you change the sign of the imaginary part; in the plane it is the mirror image with respect to the real axis.
Modulus $\lvert z \rvert$ | $\sqrt{a^2 + b^2}$: non-negative real number, distance of $z$ from the origin.
Inverse $z^{-1}$ | For $z \neq 0$, the number $\frac{\bar z}{\lvert z \rvert^2}$, which multiplied by $z$ gives $1$.
Field | Set with sum and product that have the nine properties of Proposition 2.2: $\Q$, $\R$, $\C$.
Ordered field | Field with a notion of greater and smaller compatible with the computations; $\R$ is one, $\C$ is not.
Complex plane | The plane in which $a + bi$ is the point $(a, b)$, or the vector from the origin to $(a, b)$.
Real axis | The horizontal axis of the complex plane: the real numbers.
Imaginary axis | The vertical axis of the complex plane: the numbers $bi$.
Parallelogram rule | $z_1 + z_2$ is the fourth vertex of the parallelogram with vertices $0$, $z_1$, $z_2$.
Powers of $i$ | $i^0 = 1$, $i^1 = i$, $i^2 = -1$, $i^3 = -i$, then they repeat with period 4.
Distance between two complex numbers | $\lvert z - w \rvert$: the length of the segment joining the points $z$ and $w$.
```

## Checklist

```checklist
- I can explain why $x^2 = -1$ has no real solutions and what the symbol $i$ adds.
- I can recognise the real part and the imaginary part of a complex number, and I know that the imaginary part is a real number.
- I can add, subtract and multiply complex numbers without forgetting that $i^2 = -1$.
- I can compute $i^n$ for large $n$ with the remainder of the division by 4.
- I can say why $\C$ is a field but is not ordered.
- I can compute conjugate and modulus and use $z\bar z = |z|^2$.
- I can compute the inverse of a complex number and divide by multiplying by the conjugate of the denominator, with the final check.
- I can solve an equation like $(1 + i)z = 3 + 2i$ and, with coordinates, an equation in which $\bar z$ also appears.
- I can draw a complex number in the plane, its conjugate, and the sum with the parallelogram rule.
- I can turn conditions like $\operatorname{Re}(z) > \operatorname{Im}(z)$ and $|z - c| \le r$ into figures.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 2 "Numeri complessi I", pp. 6–9: sections 2.A–2.E are followed in order, with the page next to each heading; Definition 2.1, Proposition 2.2 and Example 2.3 keep their numbering; exercises 2.4, 2.5 and 2.6 are solved in the "Exercises" section (exercises 2, 3 and 4); Figures 1 and 2 are redrawn with the graphs.
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §1.4.1–1.4.3 (pp. 25–27), Exercise 1.4.3 (p. 30), §1.5.3 on fields (p. 36).
- **Exam papers** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): questions 1 of 08/02/2024, 03/06/2025 and 03/06/2026, reported with solutions written for these notes; the table of the other exam sessions only indicates their type. Exam rules 2025/26 and dates 2026/27 as in lesson L01.
- The **"Beyond the handouts"** parts (the story of Cardano and Bombelli, the powers of $i$, the rules on the conjugate, the distance, the method for drawing sets, why $\C$ is not ordered, the exercises that do not come from the handouts) are additions in these notes to connect the lesson to the rest of the course and to the exam.
