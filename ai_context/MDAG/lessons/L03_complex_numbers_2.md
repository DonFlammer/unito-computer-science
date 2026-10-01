---
course: MDAG
module: AG
lesson: L03
title: Complex numbers II
lecturers: Reto Buzano and Marco Radeschi
eyebrow: Part 2 · Linear Algebra and Geometry · Channels A, B and C · Lesson L03
description: >-
  Notes on lesson L03 of Linear Algebra and Geometry (MDAG, part 2): polar coordinates, exponential form, modulus and
  argument of a complex number, product and inverse in polar form, Euler's identity, powers and n-th roots, with a
  review of sine and cosine, exam-style quizzes and worked exercises.
lede: >-
  A non-zero complex number can be described by its distance from the origin and by an angle:
  $z = re^{i\vartheta}$. In this form the product becomes simple (the moduli multiply, the angles add up), and a few
  lines are enough to compute powers like $(1 + i)^{10}$ and all the solutions of $z^n = z_0$. In nine exam sessions
  out of fifteen the question on complex numbers was precisely on these topics.
material: handouts
facts:
  Handouts: lesson 3 · pp. 10–14
  Book: Martelli, §1.4.4–1.4.6 (pp. 27–31)
  Lecturers: Reto Buzano and Marco Radeschi · A.Y. 2026/27
  Study time: 120–150 minutes
source: >-
  2026 course handouts (Buzano, Radeschi), lesson 3 "Numeri complessi II"; B. Martelli, Geometria e algebra lineare, §1.4.4–1.4.6
italian_file: L03_numeri_complessi_2.html
html_notes: notes/MDAG/L03_complex_numbers_2.html
generate_html: true
italian_original: https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/MDAG/lezioni/L03_numeri_complessi_2.md
---

## In brief

- A point $(x, y) \neq (0, 0)$ of the plane can be described with the **polar coordinates** $(r, \vartheta)$: $r$ is the distance from the origin, $\vartheta$ the angle with the real axis. You go from one description to the other with $x = r\cos\vartheta$ and $y = r\sin\vartheta$.
- A complex number $z \neq 0$ is written $z = r(\cos\vartheta + i\sin\vartheta) = re^{i\vartheta}$, where $e^{i\vartheta}$ is **a symbol** for $\cos\vartheta + i\sin\vartheta$. The number $r = |z|$ is the **modulus**, the angle $\vartheta$ is the **argument** (or phase).
- $e^{i(\vartheta + \varphi)} = e^{i\vartheta}e^{i\varphi}$ holds (Proposition 3.2). So in the **product** of two complex numbers **the moduli multiply and the arguments add up**.
- The inverse of $re^{i\vartheta}$ is $r^{-1}e^{-i\vartheta}$; the conjugate is $re^{-i\vartheta}$, that is the mirror image with respect to the real axis.
- Two polar forms $r_0e^{i\vartheta_0}$ and $r_1e^{i\vartheta_1}$ give the same number if and only if $r_0 = r_1$ and the angles differ by a multiple of $2\pi$.
- The numbers $e^{i\vartheta}$ form the **unit circle**; in particular $e^{i\pi} = -1$ (Euler's identity) and $e^{2\pi i} = 1$.
- **Powers**: $\left(re^{i\vartheta}\right)^n = r^ne^{in\vartheta}$. **Roots**: if $z_0 = r_0e^{i\vartheta_0} \neq 0$, the equation $z^n = z_0$ has exactly $n$ solutions, with modulus $\sqrt[n]{r_0}$ and arguments $\frac{\vartheta_0}n + \frac{2k\pi}n$ for $k = 0, 1, \dots, n - 1$: the vertices of a regular polygon with $n$ sides.
- At the exam: high powers, products in polar form and $n$-th roots were the question on complex numbers in 9 exam sessions out of 15 from 2024 to 2026.

> [!CHANNELS]
> The Linear Algebra and Geometry handouts are the same for channels A, B and C (Buzano teaches in channels A and B, Radeschi in channels B and C), so these notes hold for all three. Only the days of the lessons change: the announcements are on the course's Moodle page (MDAG2, [id 3831](https://informatica.i-learn.unito.it/course/view.php?id=3831)). Exam and quiz are the same for everyone.

## Review: angles, sine and cosine (beyond the handouts)

The handouts use sine, cosine and angles in radians without recalling them. Here you find everything you need, and nothing more.

### Angles in radians

In mathematics an angle is measured in **radians**: the measure of an angle is the **length of the arc** that the angle cuts on the circle of radius $1$ centred at the vertex. The full turn is as long as the whole circle, $2\pi \cdot 1 = 2\pi$. So $360° = 2\pi$, $180° = \pi$ and in general

$$\vartheta_{\text{radians}} = \vartheta_{\text{degrees}} \cdot \frac{\pi}{180}.$$

| Degrees | $0°$ | $30°$ | $45°$ | $60°$ | $90°$ | $120°$ | $135°$ | $150°$ | $180°$ | $270°$ | $360°$ |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Radians | $0$ | $\frac\pi6$ | $\frac\pi4$ | $\frac\pi3$ | $\frac\pi2$ | $\frac{2\pi}3$ | $\frac{3\pi}4$ | $\frac{5\pi}6$ | $\pi$ | $\frac{3\pi}2$ | $2\pi$ |

Angles are measured starting from the positive real half-axis, **anticlockwise**. A negative angle turns clockwise: $-\frac\pi2$ leads to the same point as $\frac{3\pi}2$.

### Sine and cosine on the unit circle

The **unit circle** is the circle with centre the origin and radius $1$. Start from the point $(1, 0)$ and go around the circle anticlockwise through an angle $\vartheta$: the point you reach has coordinates

$$(\cos\vartheta,\ \sin\vartheta).$$

This is the definition of cosine (the abscissa) and sine (the ordinate). All the rules that follow can be read off the drawing.

```graph
title: On the unit circle the point with angle $\vartheta$ is $(\cos\vartheta, \sin\vartheta)$; here $\vartheta = \frac\pi3$, $\cos\vartheta = \frac 12$, $\sin\vartheta = \frac{\sqrt 3}2$
x: -0.3 1.5
y: -0.3 1.3
names: $x$ $y$
arc: 0 0 1 0 pi/2 | grey
arc: 0 0 0.25 0 pi/3 | amber
segment: 0 0 1/2 sqrt(3)/2 | accent | thick
segment: 1/2 0 1/2 sqrt(3)/2 | grey | dashed
segment: 0 sqrt(3)/2 1/2 sqrt(3)/2 | grey | dashed
point: 1 0 | blue | $0$ | ne
point: sqrt(3)/2 1/2 | blue | $\frac\pi6$ | e
point: sqrt(2)/2 sqrt(2)/2 | blue | $\frac\pi4$ | ne
point: 1/2 sqrt(3)/2 | accent | $\frac\pi3$ | ne
point: 0 1 | blue | $\frac\pi2$ | ne
text: 0.3 0.12 | amber | $\vartheta$
text: 0.5 -0.1 | $\frac 12$
text: -0.14 0.866 | $\frac{\sqrt 3}2$
```

| $\vartheta$ | $0$ | $\frac\pi6$ | $\frac\pi4$ | $\frac\pi3$ | $\frac\pi2$ | $\pi$ | $\frac{3\pi}2$ |
|---|---|---|---|---|---|---|---|
| $\cos\vartheta$ | $1$ | $\frac{\sqrt 3}2$ | $\frac{\sqrt 2}2$ | $\frac 12$ | $0$ | $-1$ | $0$ |
| $\sin\vartheta$ | $0$ | $\frac 12$ | $\frac{\sqrt 2}2$ | $\frac{\sqrt 3}2$ | $1$ | $0$ | $-1$ |

A way to remember the table: from $0$ to $\frac\pi2$ the sine takes the values $\frac{\sqrt 0}2, \frac{\sqrt 1}2, \frac{\sqrt 2}2, \frac{\sqrt 3}2, \frac{\sqrt 4}2$, and the cosine does the same in reverse.

In the other quadrants the values are the same, but **the signs change**: in the second quadrant (angles between $\frac\pi2$ and $\pi$) the cosine is negative and the sine positive; in the third both are negative; in the fourth the cosine is positive and the sine negative. For example:

- $\frac{2\pi}3 = \pi - \frac\pi3$ lies in the second quadrant: $\cos\frac{2\pi}3 = -\frac 12$ and $\sin\frac{2\pi}3 = \frac{\sqrt 3}2$;
- $\frac{5\pi}4 = \pi + \frac\pi4$ lies in the third quadrant: $\cos\frac{5\pi}4 = \sin\frac{5\pi}4 = -\frac{\sqrt 2}2$;
- $\frac{5\pi}3 = 2\pi - \frac\pi3$ lies in the fourth quadrant: $\cos\frac{5\pi}3 = \frac 12$ and $\sin\frac{5\pi}3 = -\frac{\sqrt 3}2$.

### The rules you need

| Rule | Why | Example |
|---|---|---|
| $\cos^2\vartheta + \sin^2\vartheta = 1$ | the point is at distance $1$ from the origin (Pythagoras) | $\left(\frac 12\right)^2 + \left(\frac{\sqrt 3}2\right)^2 = 1$ |
| $\cos(-\vartheta) = \cos\vartheta$, $\sin(-\vartheta) = -\sin\vartheta$ | $-\vartheta$ is the mirror image with respect to the $x$ axis | $\sin\left(-\frac\pi6\right) = -\frac 12$ |
| $\cos(\vartheta + 2\pi) = \cos\vartheta$, $\sin(\vartheta + 2\pi) = \sin\vartheta$ | a full turn brings you back to the same point | $\cos\frac{7\pi}3 = \cos\frac\pi3 = \frac 12$ |
| $\cos(\vartheta + \pi) = -\cos\vartheta$, $\sin(\vartheta + \pi) = -\sin\vartheta$ | half a turn leads to the opposite point | $\cos\frac{4\pi}3 = -\frac 12$ |

And the **addition formulas**, which are needed for Proposition 3.2:

$$\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta,$$

$$\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta.$$

## Polar coordinates (pp. 10–11)

In lesson L02 you located a point of the plane with its **Cartesian coordinates** $(x, y)$: how far you move horizontally and how far vertically. There is another way, as when you give a direction: "walk $2$ kilometres towards the north-east". As the handouts recall (Figure 3), a point $(x, y)$ **other than the origin** can be located with

- the **length** $r$ of the vector that goes from the origin to the point;
- the **angle** $\vartheta$ that the vector forms with the real axis.

```graph
title: Polar coordinates of the point $1 + i\sqrt 3$: distance $r = 2$ from the origin and angle $\vartheta = \frac\pi3$ with the real axis
x: -1 3
y: -0.5 2.5
names: $\operatorname{Re}$ $\operatorname{Im}$
arc: 0 0 0.5 0 pi/3 | amber
segment: 1 0 1 sqrt(3) | grey | dashed
segment: 0 sqrt(3) 1 sqrt(3) | grey | dashed
vector: 1 sqrt(3) | accent | thick | $1 + i\sqrt 3$ | ne
text: 0.35 1.05 | accent | $r = 2$
text: 0.72 0.25 | amber | $\vartheta = \frac\pi3$
text: 1 -0.2 | $x = 1$
text: -0.45 1.732 | $y = \sqrt 3$
```

> [!DEF] 3.1 · Polar coordinates
> A point $(x, y)$ of the plane other than the origin can be identified with the length $r$ of the corresponding vector and the angle $\vartheta$ formed by the vector with the real axis. The **polar coordinates** of the point are the pair $(r, \vartheta)$. To go from polar coordinates to Cartesian coordinates $(x, y)$ it is enough to use the formulas
> $$x = r\cos\vartheta, \qquad y = r\sin\vartheta.$$
> Conversely,
> $$r = \sqrt{x^2 + y^2}, \qquad \cos\vartheta = \frac{x}{\sqrt{x^2 + y^2}}, \qquad \sin\vartheta = \frac{y}{\sqrt{x^2 + y^2}}.$$

Piece by piece:

- $r$ is a **distance**, so it is always a **positive** real number ($r > 0$, because the point is not the origin).
- $\vartheta$ is measured in radians, from the positive real half-axis, anticlockwise.
- $x = r\cos\vartheta$ and $y = r\sin\vartheta$: the point with angle $\vartheta$ on the unit circle is $(\cos\vartheta, \sin\vartheta)$; moving away from the origin $r$ times as far you get $(r\cos\vartheta, r\sin\vartheta)$.
- To go back: $r$ is found with Pythagoras; then $\cos\vartheta = \frac xr$ and $\sin\vartheta = \frac yr$. You need **both** equations to determine the angle, as you see in the pitfall below.
- The origin is excluded: for the point $(0, 0)$ we have $r = 0$, and the angle makes no sense.
- The angle is not unique: $\vartheta$ and $\vartheta + 2\pi$ (or $\vartheta - 2\pi$, or $\vartheta + 4\pi$…) indicate the same direction. We come back to this in the section on equal polar forms.

> [!EXAMPLE] · From polar to Cartesian
> - $(r, \vartheta) = \left(2, \frac\pi6\right)$: $x = 2\cos\frac\pi6 = 2 \cdot \frac{\sqrt 3}2 = \sqrt 3$ and $y = 2\sin\frac\pi6 = 2 \cdot \frac 12 = 1$. The point is $(\sqrt 3, 1)$.
> - $(r, \vartheta) = \left(4, \frac{3\pi}4\right)$: $x = 4 \cdot \left(-\frac{\sqrt 2}2\right) = -2\sqrt 2$ and $y = 4 \cdot \frac{\sqrt 2}2 = 2\sqrt 2$.
> - $(r, \vartheta) = (3, \pi)$: $x = 3 \cdot (-1) = -3$ and $y = 3 \cdot 0 = 0$. The point $(-3, 0)$ lies on the negative real half-axis.

> [!EXAMPLE] · From Cartesian to polar
> - $(1, 1)$: $r = \sqrt{1 + 1} = \sqrt 2$; $\cos\vartheta = \frac 1{\sqrt 2} = \frac{\sqrt 2}2$ and $\sin\vartheta = \frac{\sqrt 2}2$, so $\vartheta = \frac\pi4$.
> - $(-\sqrt 3, 1)$: $r = \sqrt{3 + 1} = 2$; $\cos\vartheta = -\frac{\sqrt 3}2$ and $\sin\vartheta = \frac 12$. Negative cosine and positive sine: second quadrant. The angle of the first quadrant with cosine $\frac{\sqrt 3}2$ and sine $\frac 12$ is $\frac\pi6$; its mirror image in the second quadrant is $\pi - \frac\pi6 = \frac{5\pi}6$.
> - $(0, -2)$: $r = 2$; $\cos\vartheta = 0$ and $\sin\vartheta = -1$, so $\vartheta = \frac{3\pi}2$ (or, equivalently, $-\frac\pi2$).
> - $(1, -\sqrt 3)$: $r = 2$; $\cos\vartheta = \frac 12$ and $\sin\vartheta = -\frac{\sqrt 3}2$, fourth quadrant, $\vartheta = -\frac\pi3$ (or $\frac{5\pi}3$).

> [!METHOD] Finding the polar coordinates of $(x, y)$
> 1. Compute $r = \sqrt{x^2 + y^2}$.
> 2. Compute $\cos\vartheta = \frac xr$ and $\sin\vartheta = \frac yr$.
> 3. Look at the **signs** of cosine and sine to find the quadrant.
> 4. Find in the table the angle of the first quadrant with the same values, without signs, and bring it into the right quadrant: $\pi - \alpha$ in the second, $\pi + \alpha$ in the third, $-\alpha$ (that is $2\pi - \alpha$) in the fourth.
> 5. Check: $r\cos\vartheta$ and $r\sin\vartheta$ must give back $x$ and $y$.

> [!PITFALL] One equation alone is not enough for the angle
> The points $(1, 1)$ and $(-1, -1)$ have the same ratio $\frac yx = 1$, but different angles: $\frac\pi4$ and $\frac{5\pi}4$. Whoever uses only $\tan\vartheta = \frac yx$ (or the arctangent of the calculator, which in any case is not allowed at the exam) gets the quadrant wrong. In the same way $(1, \sqrt 3)$ and $(1, -\sqrt 3)$ have the same cosine $\frac 12$ but angles $\frac\pi3$ and $-\frac\pi3$. Always look at cosine **and** sine, or at the drawing.

## The polar form of a complex number (pp. 10–11)

Back to complex numbers: if $z = x + yi$ corresponds to the point $(x, y)$ with polar coordinates $(r, \vartheta)$, then

$$z = x + yi = r\cos\vartheta + (r\sin\vartheta)i = r(\cos\vartheta + i\sin\vartheta).$$

The handouts immediately note that

$$|z| = \sqrt{x^2 + y^2} = r:$$

the **modulus** of $z$ is the length of the vector that describes $z$. The expression $r(\cos\vartheta + i\sin\vartheta)$ is also called the **trigonometric form** of $z$: in the exam papers it often appears like this, for example $z = 2\cos\frac\pi4 + 2i\sin\frac\pi4$.

**The conjugate.** The conjugate $\bar z = x - yi$ is the point obtained by changing the sign of the imaginary coordinate: geometrically it is the **reflection** of $z$ with respect to the real axis. In polar coordinates this corresponds to changing $\vartheta$ into $-\vartheta$ while keeping $r$ fixed (Figure 4 of the handouts, on the left). Indeed, with the rules of the review,
$$r\bigl(\cos(-\vartheta) + i\sin(-\vartheta)\bigr) = r(\cos\vartheta - i\sin\vartheta) = x - yi.$$

### The complex exponential

The handouts introduce a convenient notation:

> [!DEF] Polar form, modulus and argument (pp. 10–11)
> We write
> $$e^{i\vartheta} = \cos\vartheta + i\sin\vartheta.$$
> In this way every complex number $z \neq 0$ can be written as
> $$z = re^{i\vartheta}.$$
> The number $r = |z|$ is the **modulus** of $z$ and the angle $\vartheta$ is called the **argument** (or **phase**) of $z$.

Piece by piece:

- $e^{i\vartheta}$ is, for the course, **a symbol**: it means exactly $\cos\vartheta + i\sin\vartheta$, nothing more. The handouts call it the "mysterious complex exponential".
- $e^{i\vartheta}$ has modulus $1$: $\left|e^{i\vartheta}\right| = \sqrt{\cos^2\vartheta + \sin^2\vartheta} = 1$. Multiplying it by $r$ stretches the vector to length $r$.
- The expression only works for $z \neq 0$: zero has modulus $0$ and no argument.
- In the polar form **$r$ must be positive**. An expression like $-2e^{i\pi/4}$ denotes a complex number, but it is not a polar form (see the pitfall further down).

> [!BEYOND] · why the letter $e$
> The handouts explain that the deep reason lies in the representations of $e^x$, $\sin x$ and $\cos x$ as **power series**, which you will see in Calculus:
> $$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \frac{x^4}{4!} + \cdots$$
> $$\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots \qquad \sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$$
> Substituting $x = i\vartheta$ in the first series and using $i^2 = -1$, $i^3 = -i$, $i^4 = 1$, the even terms give the series of the cosine and the odd ones $i$ times the series of the sine: $e^{i\vartheta} = \cos\vartheta + i\sin\vartheta$. For the course the definition as a symbol is enough; the name fits because $e^{i\vartheta}$ has the properties of the exponential (Proposition 3.2).

Here are the numbers worth recognising at a glance:

| $z$ | $\lvert z \rvert$ | argument | polar form |
|---|--:|---|---|
| $1$ | $1$ | $0$ | $e^{0} = e^{i \cdot 0}$ |
| $i$ | $1$ | $\frac\pi2$ | $e^{i\pi/2}$ |
| $-1$ | $1$ | $\pi$ | $e^{i\pi}$ |
| $-i$ | $1$ | $\frac{3\pi}2$ (or $-\frac\pi2$) | $e^{3\pi i/2}$ |
| $1 + i$ | $\sqrt 2$ | $\frac\pi4$ | $\sqrt 2\,e^{i\pi/4}$ |
| $1 - i$ | $\sqrt 2$ | $-\frac\pi4$ (or $\frac{7\pi}4$) | $\sqrt 2\,e^{-i\pi/4}$ |
| $-1 + i$ | $\sqrt 2$ | $\frac{3\pi}4$ | $\sqrt 2\,e^{3\pi i/4}$ |
| $\sqrt 3 + i$ | $2$ | $\frac\pi6$ | $2e^{i\pi/6}$ |
| $1 + i\sqrt 3$ | $2$ | $\frac\pi3$ | $2e^{i\pi/3}$ |
| $-\sqrt 3 + i$ | $2$ | $\frac{5\pi}6$ | $2e^{5\pi i/6}$ |
| $-2$ | $2$ | $\pi$ | $2e^{i\pi}$ |
| $3i$ | $3$ | $\frac\pi2$ | $3e^{i\pi/2}$ |

The trick for numbers like $\frac{\sqrt 3}2 - \frac 12 i$: the modulus is $1$ and the two parts are cosine and sine of a special angle ($\cos\vartheta = \frac{\sqrt 3}2$, $\sin\vartheta = -\frac 12$, so $\vartheta = -\frac\pi6$). If instead the modulus is not $1$, you factor it out: $\sqrt 3 + i = 2\left(\frac{\sqrt 3}2 + \frac 12 i\right) = 2e^{i\pi/6}$.

> [!EXAMPLE] · From the polar form to the form $a + bi$
> $2e^{2\pi i/3} = 2\left(\cos\frac{2\pi}3 + i\sin\frac{2\pi}3\right) = 2\left(-\frac 12 + \frac{\sqrt 3}2 i\right) = -1 + i\sqrt 3$.
>
> $\sqrt 2\,e^{-3\pi i/4} = \sqrt 2\left(-\frac{\sqrt 2}2 - \frac{\sqrt 2}2 i\right) = -1 - i$.

> [!PITFALL] The modulus cannot be negative
> $-6e^{3\pi i/4}$ is a complex number, but it is **not** written in polar form: the factor in front must be the modulus, which is positive. Since $-1 = e^{i\pi}$, you fix it like this: $-6e^{3\pi i/4} = 6e^{i\pi}e^{3\pi i/4} = 6e^{7\pi i/4}$. The exam of 16/01/2025 (question 1) asked for a product "in polar coordinates" and among the answers there were both $6e^{7\pi i/4}$ and $-6e^{3\pi i/4}$: only the first one is a polar form.

## The product in polar form (p. 11)

The expression $e^{i\vartheta}$ is convenient because it behaves like an exponential.

> [!PROP] 3.2
> The following relation holds
> $$e^{i(\vartheta + \varphi)} = e^{i\vartheta} \cdot e^{i\varphi}.$$

The handouts say that the relation follows from the addition formulas for sine and cosine, by substituting $e^{i\alpha} = \cos\alpha + i\sin\alpha$. Here is the complete computation.

1. Write the product on the right with the definition: $e^{i\vartheta} \cdot e^{i\varphi} = (\cos\vartheta + i\sin\vartheta)(\cos\varphi + i\sin\varphi)$.
2. Carry out the product as in lesson L02, with $i^2 = -1$:
   $$= (\cos\vartheta\cos\varphi - \sin\vartheta\sin\varphi) + i(\sin\vartheta\cos\varphi + \cos\vartheta\sin\varphi).$$
3. Recognise the addition formulas: the real part is $\cos(\vartheta + \varphi)$, the imaginary part is $\sin(\vartheta + \varphi)$.
4. So the product equals $\cos(\vartheta + \varphi) + i\sin(\vartheta + \varphi) = e^{i(\vartheta + \varphi)}$. $\square$

The consequence is the most important rule of the lesson. If

$$z_1 = r_1e^{i\vartheta_1}, \qquad z_2 = r_2e^{i\vartheta_2},$$

then, reordering the factors and using Proposition 3.2,

$$z_1z_2 = r_1r_2\,e^{i(\vartheta_1 + \vartheta_2)}.$$

> [!IDEA] · the product rule
> When you multiply two complex numbers, **the moduli multiply and the arguments add up**. Geometrically, multiplying by $z_2$ means **rotating** by an angle $\vartheta_2$ and **stretching** by a factor $r_2$. For example multiplying by $i = e^{i\pi/2}$ rotates by a right angle, as you saw in lesson L02, and multiplying by $2$ doubles the distance from the origin without rotating.

> [!EXAMPLE] · $(1 + i)(\sqrt 3 + i)$ in two ways
> **In polar form.** $1 + i = \sqrt 2\,e^{i\pi/4}$ and $\sqrt 3 + i = 2e^{i\pi/6}$. So
> $$(1 + i)(\sqrt 3 + i) = \sqrt 2 \cdot 2\,e^{i(\pi/4 + \pi/6)} = 2\sqrt 2\,e^{5\pi i/12}.$$
> The modulus is $2\sqrt 2$ and the argument $\frac\pi4 + \frac\pi6 = \frac{3\pi + 2\pi}{12} = \frac{5\pi}{12}$, that is $75°$.
>
> **In Cartesian form.** $(1 + i)(\sqrt 3 + i) = \sqrt 3 + i + i\sqrt 3 + i^2 = (\sqrt 3 - 1) + (\sqrt 3 + 1)i$.
>
> The two results are the same number. Comparing them you also get, for free, $\cos\frac{5\pi}{12} = \frac{\sqrt 3 - 1}{2\sqrt 2} = \frac{\sqrt 6 - \sqrt 2}4$: the polar form and the Cartesian form check each other.

```graph
title: The product $(1 + i)(\sqrt 3 + i)$: the angles $\frac\pi4$ and $\frac\pi6$ add up to $\frac{5\pi}{12}$, the moduli $\sqrt 2$ and $2$ multiply to $2\sqrt 2$
x: -0.6 3
y: -0.4 3
names: $\operatorname{Re}$ $\operatorname{Im}$
arc: 0 0 0.45 0 pi/4 | accent
arc: 0 0 0.7 0 pi/6 | blue
arc: 0 0 0.95 0 5pi/12 | amber
vector: 1 1 | accent | $1 + i$ | e
vector: sqrt(3) 1 | blue | $\sqrt 3 + i$ | e
vector: 0.732 2.732 | amber | thick | $2\sqrt 2\,e^{5\pi i/12}$ | ne
```

Try it with the tool: in **z · w** mode drag $z$ and $w$ and look at the arcs; the arc of the product is always the sum of the two arcs, and below you read that the modulus of the product is the product of the moduli. Then choose **powers zⁿ**: you see the points $z, z^2, z^3, \dots$ turn around the origin, each time by the same angle.

```widget complessi
title: Product and powers in polar form
z: 1+i
w: 1.732+i
modo: prodotto
modi: prodotto potenza
n: 3
raggio: 4
```

### The inverse and the quotient

The handouts note in particular that, if $z = re^{i\vartheta} \neq 0$, its inverse is

$$z^{-1} = r^{-1}e^{-i\vartheta}.$$

Check with the product rule: $z \cdot z^{-1} = r \cdot r^{-1}\,e^{i(\vartheta - \vartheta)} = 1 \cdot e^{0} = \cos 0 + i\sin 0 = 1$. The inverse has argument $-\vartheta$, opposite to that of $z$, and modulus $|z^{-1}| = r^{-1}$, the inverse of $|z| = r$ (Figure 4 of the handouts, on the right): if $z$ lies outside the unit circle, $z^{-1}$ lies inside, and vice versa.

Putting the two rules together you get the **quotient**: $\frac{z_1}{z_2} = z_1 \cdot z_2^{-1} = \frac{r_1}{r_2}\,e^{i(\vartheta_1 - \vartheta_2)}$. The moduli divide, the arguments subtract.

> [!EXAMPLE] · The same inverse as in lesson L02
> $1 + i = \sqrt 2\,e^{i\pi/4}$, so $(1 + i)^{-1} = \frac 1{\sqrt 2}e^{-i\pi/4} = \frac 1{\sqrt 2}\left(\frac{\sqrt 2}2 - \frac{\sqrt 2}2 i\right) = \frac 12 - \frac 12 i$. It is the same result as the formula $z^{-1} = \frac{\bar z}{|z|^2} = \frac{1 - i}2$.

```graph
title: Figure 4 of the handouts with $z = 2e^{i\pi/3}$: the conjugate $\bar z = 2e^{-i\pi/3}$ is the reflection of $z$; the inverse $z^{-1} = \frac 12 e^{-i\pi/3}$ has the opposite angle and lies inside the unit circle
x: -2.4 2.4
y: -2 2
names: $\operatorname{Re}$ $\operatorname{Im}$
circle: 0 0 1 | grey
arc: 0 0 0.4 0 pi/3 | accent
arc: 0 0 0.4 -pi/3 0 | violet
segment: 1 sqrt(3) 1 -sqrt(3) | grey | dashed
vector: 1 sqrt(3) | accent | $z$ | ne
vector: 1 -sqrt(3) | violet | $\bar z$ | se
vector: 1/4 -sqrt(3)/4 | amber | thick | $z^{-1}$ | e
text: 1.18 0.12 | grey | $1$
```

## When two polar forms give the same number (p. 11)

An angle and the same angle plus a full turn indicate the same direction. This is why the handouts note:

> [!PROP] · Equality of two polar forms (p. 11)
> Two non-zero complex numbers expressed in polar form $r_0e^{i\vartheta_0}$ and $r_1e^{i\vartheta_1}$ are the same complex number if and only if both of the following facts hold:
> - $r_0 = r_1$;
> - $\vartheta_1 = \vartheta_0 + 2k\pi$ for some $k \in \Z$.

In words: same distance from the origin, and angles that differ by a whole number of turns. For example

$$e^{i\pi/2} = e^{5\pi i/2} = e^{-3\pi i/2} = i, \qquad 2e^{7\pi i/4} = 2e^{-\pi i/4} = \sqrt 2 - i\sqrt 2.$$

This fact has two uses: **reducing** the large angles that come out of powers, and **solving** the equations $z^n = z_0$ in the section on roots.

> [!METHOD] Reducing an angle
> To simplify $e^{i\alpha}$ with $\alpha$ large, take away from (or add to) $\alpha$ multiples of $2\pi$ until you reach a convenient interval, $[0, 2\pi)$ or $(-\pi, \pi]$.
>
> With $\alpha = \frac{p}{q}\pi$ the computation is done on integers: a turn, $2\pi$, equals $\frac{2q}{q}\pi$; so you divide $p$ by $2q$ and keep the **remainder**. Example: $\alpha = \frac{2025}4\pi$. A turn equals $\frac 84\pi$, and $2025 = 8 \cdot 253 + 1$; so $\frac{2025}4\pi = 253 \cdot 2\pi + \frac\pi4$ and $e^{2025\pi i/4} = e^{i\pi/4}$.

> [!BEYOND] · the principal argument
> The handouts do not fix an interval for the argument: $\frac{7\pi}4$ and $-\frac\pi4$ are both fine. Many books call **principal argument** the one in $(-\pi, \pi]$ (others use $[0, 2\pi)$). In the quiz the answers use both conventions: if an answer does not match yours, try adding or taking away $2\pi$.

## The unit circle and Euler's identity (p. 12)

Since $\left|e^{i\vartheta}\right| = 1$, the complex numbers $e^{i\vartheta}$, as $\vartheta$ varies, are **precisely the points of the unit circle**: the point with angle $\vartheta$ is $e^{i\vartheta}$. In particular:

- for $\vartheta = \frac\pi2$: $e^{i\pi/2} = \cos\frac\pi2 + i\sin\frac\pi2 = i$;
- for $\vartheta = \pi$: $e^{i\pi} = \cos\pi + i\sin\pi = -1$. It is the famous **Euler's identity**, often written $e^{i\pi} + 1 = 0$;
- for $\vartheta = 2\pi$: $e^{2\pi i} = \cos 2\pi + i\sin 2\pi = 1$.

These three equalities are needed all the time: $-1 = e^{i\pi}$ is the way to bring a minus sign inside the angle, and $e^{2k\pi i} = 1$ for every $k \in \Z$ is the reason why angles can be reduced.

## Powers (p. 12)

Applying the product rule $n$ times to the same number $z = re^{i\vartheta}$, the moduli multiply $n$ times and the angles add up $n$ times:

$$z^n = \underbrace{re^{i\vartheta} \cdots re^{i\vartheta}}_{n \text{ times}} = r^ne^{in\vartheta}.$$

It is the formula that the handouts use at the beginning of section 3.B. The modulus must be raised to the $n$, the angle must be multiplied by $n$.

> [!BEYOND] · the name
> In trigonometric form the formula is written $\bigl(r(\cos\vartheta + i\sin\vartheta)\bigr)^n = r^n(\cos n\vartheta + i\sin n\vartheta)$ and is known as **De Moivre's formula**.

> [!EXAMPLE] · $(1 + i)^8$ and $(1 + i)^{10}$
> $1 + i = \sqrt 2\,e^{i\pi/4}$, so
> $$(1 + i)^8 = (\sqrt 2)^8e^{8\pi i/4} = 16\,e^{2\pi i} = 16.$$
> Check in Cartesian form: $(1 + i)^2 = 2i$, so $(1 + i)^8 = (2i)^4 = 16i^4 = 16$.
>
> In the same way $(1 + i)^{10} = (\sqrt 2)^{10}e^{10\pi i/4} = 32\,e^{5\pi i/2}$. I reduce the angle: $\frac{5\pi}2 = 2\pi + \frac\pi2$, so $(1 + i)^{10} = 32\,e^{i\pi/2} = 32i$.

> [!EXAMPLE] · $(\sqrt 3 + i)^6$
> $\sqrt 3 + i = 2e^{i\pi/6}$, so $(\sqrt 3 + i)^6 = 2^6e^{6\pi i/6} = 64\,e^{i\pi} = -64$. A complex number with non-zero imaginary part, raised to the sixth power, gives a negative real number: in Cartesian form it would take five multiplications.

```graph
title: The powers of $z = 1 + i$: each time the modulus is multiplied by $\sqrt 2$ and the angle grows by $\frac\pi4$
x: -5.5 2
y: -1.5 3
names: $\operatorname{Re}$ $\operatorname{Im}$
segment: 1 1 0 2 | grey | dashed
segment: 0 2 -2 2 | grey | dashed
segment: -2 2 -4 0 | grey | dashed
vector: 1 1 | accent | $z = 1 + i$ | e
vector: 0 2 | blue | $z^2 = 2i$ | ne
vector: -2 2 | violet | $z^3 = -2 + 2i$ | nw
vector: -4 0 | amber | $z^4 = -4$ | nw
```

> [!METHOD] A high power without a calculator
> 1. Write $z$ in polar form $re^{i\vartheta}$ (in the exam papers the modulus is almost always $1$, $\sqrt 2$ or $2$ and the angle is a special one).
> 2. Apply $z^n = r^ne^{in\vartheta}$.
> 3. Reduce the angle $n\vartheta$ by taking away multiples of $2\pi$.
> 4. Go back to the form $a + bi$ with the table of sine and cosine, and compare with the answers.
>
> Alternatively, for small exponents: compute $z^2$ or $z^3$ in Cartesian form until you get a real or purely imaginary number, then continue with the powers of that one. For example $(1 + i)^2 = 2i$, and from there $(1 + i)^{10} = (2i)^5 = 32i^5 = 32i$.

## The n-th roots (pp. 12–13)

Now the inverse problem: given a complex number $z_0 \neq 0$, find **all** the $z$ with

$$z^n = z_0.$$

The solutions are called the **$n$-th roots** of $z_0$. Among the reals the equation $z^2 = -4$ has no solutions and $z^3 = 8$ has only one ($z = 2$); among the complex numbers, as you will see, there are always exactly $n$.

### The handouts' reasoning, step by step

1. Write the given number in polar form, $z_0 = r_0e^{i\vartheta_0}$, and the unknown too: $z = re^{i\vartheta}$, with $r > 0$ and $\vartheta$ to be found.
2. By the formula for powers the equation becomes
   $$z^n = r^ne^{in\vartheta} = r_0e^{i\vartheta_0}.$$
3. Two polar forms are equal if and only if the moduli are equal and the angles differ by a multiple of $2\pi$. So the equation holds exactly when:
   - $r^n = r_0$, that is $r = \sqrt[n]{r_0}$ (the usual positive real root: $r_0 > 0$ and also $r > 0$);
   - $n\vartheta = \vartheta_0 + 2k\pi$ for some $k \in \Z$.
4. Dividing the second condition by $n$:
   $$\vartheta = \frac{\vartheta_0}n + \frac{2k\pi}n \quad \text{for some } k \in \Z.$$
5. For $k = 0, 1, \dots, n - 1$ you get the arguments
   $$\frac{\vartheta_0}n, \quad \frac{\vartheta_0}n + \frac{2\pi}n, \quad \dots, \quad \frac{\vartheta_0}n + \frac{2(n - 1)\pi}n.$$
6. These $n$ angles all lie in an interval shorter than a turn, from $\frac{\vartheta_0}n$ to less than $\frac{\vartheta_0}n + 2\pi$: so they give $n$ **different** points. The other values of $k$ give nothing new: $k = n$ gives the angle $\frac{\vartheta_0}n + 2\pi$, that is the same point as $k = 0$; $k = n + 1$ the same as $k = 1$, and so on.

> [!PROP] · The $n$-th roots (pp. 12–13)
> Let $z_0 = r_0e^{i\vartheta_0}$ be a non-zero complex number. The equation $z^n = z_0$ has precisely $n$ distinct solutions:
> $$z_k = \sqrt[n]{r_0}\;e^{i\left(\frac{\vartheta_0}n + \frac{2k\pi}n\right)}, \qquad k = 0, 1, \dots, n - 1.$$
> They all have the same modulus $\sqrt[n]{r_0}$ and arguments separated by a constant step $\frac{2\pi}n$. Geometrically, they form the vertices of a **regular polygon** centred at the origin with $n$ sides and radius $\sqrt[n]{r_0}$.

> [!EXAMPLE] 3.3 · The $n$-th roots of unity
> The equation $z^n = 1$ has as solutions the complex numbers
> $$z = e^{i\frac{2k\pi}n}, \qquad k = 0, 1, \dots, n - 1.$$
> These $n$ solutions are the vertices of a regular polygon of radius $1$ with $n$ sides, having $1$ as a vertex. They are the **$n$-th roots of unity**.
>
> The computation: $1 = 1 \cdot e^{i \cdot 0}$, so $r_0 = 1$, $\vartheta_0 = 0$, and the roots have modulus $\sqrt[n]1 = 1$ and arguments $\frac{2k\pi}n$.
> - $n = 2$: $e^{0} = 1$ and $e^{i\pi} = -1$.
> - $n = 3$: $1$, $e^{2\pi i/3} = -\frac 12 + \frac{\sqrt 3}2 i$, $e^{4\pi i/3} = -\frac 12 - \frac{\sqrt 3}2 i$: an equilateral triangle.
> - $n = 4$: $1$, $i$, $-1$, $-i$: a square.
> - $n = 6$: the angles are multiples of $\frac\pi3$, and the roots are $\pm 1$, $\pm\frac 12 \pm \frac{\sqrt 3}2 i$: a hexagon (Figure 5 of the handouts, on the left).

```graph
title: Figure 5 (left): the sixth roots of $1$ are the vertices of a regular hexagon with a vertex at $1$
x: -1.8 1.8
y: -1.3 1.3
names: $\operatorname{Re}$ $\operatorname{Im}$
circle: 0 0 1 | grey | thin
polygon: 1 0 1/2 sqrt(3)/2 -1/2 sqrt(3)/2 -1 0 -1/2 -sqrt(3)/2 1/2 -sqrt(3)/2 | amber | dashed
point: 1 0 | amber | $1$ | ne
point: 1/2 sqrt(3)/2 | amber | $\frac 12 + \frac{\sqrt 3}2 i$ | ne
point: -1/2 sqrt(3)/2 | amber | $-\frac 12 + \frac{\sqrt 3}2 i$ | nw
point: -1 0 | amber | $-1$ | nw
point: -1/2 -sqrt(3)/2 | amber | $-\frac 12 - \frac{\sqrt 3}2 i$ | sw
point: 1/2 -sqrt(3)/2 | amber | $\frac 12 - \frac{\sqrt 3}2 i$ | se
```

> [!EXAMPLE] 3.4 · The three solutions of $z^3 = -8$
> As in Figure 5 of the handouts (on the right), the three solutions of the equation $z^3 = -8$ have modulus $\sqrt[3]8 = 2$ and arguments $\frac\pi3$, $\pi$ and $\frac{5\pi}3$. They are the complex numbers
> $$z_1 = 2e^{i\pi/3} = 2\left(\cos\frac\pi3 + i\sin\frac\pi3\right) = 1 + \sqrt 3 i,$$
> $$z_2 = 2e^{i\pi} = -2,$$
> $$z_3 = 2e^{5\pi i/3} = 2\left(\cos\frac{5\pi}3 + i\sin\frac{5\pi}3\right) = 1 - \sqrt 3 i.$$
>
> **Where the angles come from.** $-8$ is a negative real number: it lies on the negative real half-axis, so $-8 = 8e^{i\pi}$, with $r_0 = 8$ and $\vartheta_0 = \pi$. The first angle is $\frac\pi3$; then you add the step $\frac{2\pi}3$ twice: $\frac\pi3 + \frac{2\pi}3 = \pi$ and $\pi + \frac{2\pi}3 = \frac{5\pi}3$.
>
> **Check** on $z_1$: $(1 + i\sqrt 3)^2 = 1 + 2i\sqrt 3 - 3 = -2 + 2i\sqrt 3$, and then $(-2 + 2i\sqrt 3)(1 + i\sqrt 3) = -2 - 2i\sqrt 3 + 2i\sqrt 3 + 2i^2 \cdot 3 = -2 - 6 = -8$.

```graph
title: Figure 5 (right): the solutions of $z^3 = -8$ are the vertices of an equilateral triangle of radius $\sqrt[3]8 = 2$
x: -3 3
y: -2.5 2.5
names: $\operatorname{Re}$ $\operatorname{Im}$
circle: 0 0 2 | grey | thin
polygon: 1 sqrt(3) -2 0 1 -sqrt(3) | amber | dashed
point: 1 sqrt(3) | amber | $z_1 = 1 + \sqrt 3 i$ | ne
point: -2 0 | amber | $z_2 = -2$ | nw
point: 1 -sqrt(3) | amber | $z_3 = 1 - \sqrt 3 i$ | se
```

In the tool below you find the same example. Change $n$ to see triangles, squares, pentagons; change $z$ (for example $1$, $i$ or $-4$) and watch how the polygon rotates and changes radius.

```widget complessi
title: $n$-th roots: always $n$ of them, on the vertices of a regular polygon
z: -8
modo: radici
modi: radici
n: 3
raggio: 3
```

> [!METHOD] Finding the $n$-th roots of $z_0$
> 1. Write $z_0 = r_0e^{i\vartheta_0}$. Watch out for real numbers: a positive real has argument $0$, a negative real has argument $\pi$.
> 2. The modulus of all the roots is $\sqrt[n]{r_0}$.
> 3. The first argument is $\frac{\vartheta_0}n$; the others are obtained by adding $\frac{2\pi}n$, until you have $n$ of them.
> 4. If the angles are special, go to the form $a + bi$.
> 5. Draw: the points must form a regular polygon with $n$ sides.

### The case $n = 2$: square roots

For $n = 2$ the step is $\frac{2\pi}2 = \pi$: the two square roots of $z_0$ are **opposite**, $w$ and $-w$. Three examples that you will find again in lesson L04, inside the formula for second-degree equations:

- $z^2 = -4$: $-4 = 4e^{i\pi}$, roots $2e^{i\pi/2} = 2i$ and $2e^{3\pi i/2} = -2i$. In general the square roots of a negative real number $-a$ are $\pm i\sqrt a$.
- $z^2 = 2i$: $2i = 2e^{i\pi/2}$, roots $\sqrt 2\,e^{i\pi/4} = 1 + i$ and $\sqrt 2\,e^{5\pi i/4} = -1 - i$. They are the same ones found with coordinates in exercise 7 of lesson L02.
- $z^2 = -3 + 4i$: here the angle is not a special one, and the method of lesson L02 is more convenient ($z = x + yi$, then $x^2 - y^2 = -3$ and $2xy = 4$): the roots are $\pm(1 + 2i)$.

> [!PITFALL] The symbol $\sqrt{\ }$ among the complex numbers
> Among the positive reals $\sqrt a$ denotes **the** positive root. Among the complex numbers there is no "positive" root: there are two opposite square roots, and writing $\sqrt{z_0}$ is ambiguous. This is why the rules of L01 like $\sqrt a\sqrt b = \sqrt{ab}$ no longer hold: $\sqrt{-1}\cdot\sqrt{-1}$ "should" be $\sqrt{(-1)(-1)} = \sqrt 1 = 1$, but with $\sqrt{-1} = i$ you get $i \cdot i = -1$. In lesson L04 the handouts write $\pm\sqrt\Delta$ precisely to indicate **the two** square roots of $\Delta$.

> [!BEYOND] · where to find it in the book
> In Martelli's book the lesson corresponds to §1.4, parts 1.4.4 "Coordinate polari" (pp. 27–29, with the proof of Proposition 1.4.2, which is 3.2 in the handouts), 1.4.5 "Proprietà dei numeri complessi" (p. 30, Exercise 1.4.3) and 1.4.6 "Radici $n$-esime di un numero complesso" (pp. 30–31, with Examples 1.4.4 and 1.4.5, that is 3.3 and 3.4 in the handouts, and Exercise 1.4.6, which is 3.5). At the end of chapter 1 (p. 37) Exercises 1.13 and 1.14 are solved here as exercises 9 and 10.

## Towards the exam

**The test in two lines.** 10 multiple-choice questions (5 answers, one right) and 2 problems worth 11 points, marked only with at least 6 points in the quiz; 2 hours, no calculator, only 4 handwritten pages of notes. 2026/27 Linear Algebra exam sessions: 22/01/2027 and 05/02/2027 at 14:00. Complete rules and sources in lesson L01.

**What they ask.** In 9 of the 15 exam sessions from 24/01/2024 to 07/09/2026 the question on complex numbers was about this lesson:

| Type of question | Exam sessions (question) |
|---|---|
| high power ($z^8$, $z^9$, $z^{12}$, $z^{2025}$) of a number given in the form $a + bi$ | 24/01/2024 (2), 10/07/2024 (1), 07/02/2025 (1), 15/01/2026 (5) |
| power of a number given in trigonometric form | 06/09/2024 (1) |
| product to be written in polar form | 16/01/2025 (1) |
| roots: which number is (or is not) a solution of $z^n = z_0$, or what an expression with a square root equals | 10/06/2024 (1), 02/09/2025 (2), 05/02/2026 (1) |

Here are three of these questions, with the solution.

> [!EXAMPLE] · Exam of 16/01/2025, question 1
> Given $z = 2\cos\frac\pi4 + 2i\sin\frac\pi4$, then $-3iz$ in polar coordinates is equal to: (a) $-6i\cos\frac\pi4 - 6i\sin\frac\pi4$; (b) $-6e^{3\pi i/4}$; (c) $-6i\cos\frac\pi4 + 6i\sin\frac\pi4$; (d) $6e^{7\pi i/4}$; (e) $0$.
>
> **Solution.** $z = 2e^{i\pi/4}$. The number $-3i$ lies on the negative imaginary half-axis: modulus $3$, argument $\frac{3\pi}2$, that is $-3i = 3e^{3\pi i/2}$. Moduli multiplied, arguments added:
> $$-3iz = 6\,e^{i(\pi/4 + 3\pi/2)} = 6\,e^{7\pi i/4}.$$
> Answer (d). Answer (b) denotes the same number ($-6e^{3\pi i/4} = 6e^{i\pi}e^{3\pi i/4} = 6e^{7\pi i/4}$) but it is not in polar coordinates, because the factor in front is negative. Answer (a) equals $-6\sqrt 2\,i$ and (c) equals $0$: they are numbers different from the result $6e^{7\pi i/4} = 3\sqrt 2 - 3\sqrt 2\,i$.

> [!EXAMPLE] · Exam of 15/01/2026, question 5
> Given $z = \frac{\sqrt 3}2 - \frac 12 i$, then $z^9$ is equal to: (a) $1$; (b) $\frac 12 - \frac{\sqrt 3}2 i$; (c) $-\frac{9\sqrt 3}2 + \frac 92 i$; (d) $i$; (e) $-\frac{\sqrt 3^9}{2^9} + \frac 1{2^9}i$.
>
> **Solution.** $|z| = \sqrt{\frac 34 + \frac 14} = 1$; $\cos\vartheta = \frac{\sqrt 3}2$ and $\sin\vartheta = -\frac 12$, fourth quadrant: $\vartheta = -\frac\pi6$. So
> $$z^9 = e^{-9\pi i/6} = e^{-3\pi i/2}.$$
> I add a turn: $-\frac{3\pi}2 + 2\pi = \frac\pi2$, so $z^9 = e^{i\pi/2} = i$. Answer (d). Answers (c) and (e) come from computations done on the two parts separately (multiplied by $9$, or raised to the ninth power, and then with the signs changed), which make no sense for complex numbers.

> [!EXAMPLE] · Exam of 02/09/2025, question 2
> Which of the following is a cube root of $z = 8e^{3\pi i/5}$? (a) $4e^{\pi i/5}$; (b) $2e^{\pi i/5 + 2\pi i/3}$; (c) $8e^{\pi i/3 + 2\pi ik}$; (d) $2e^{3\pi i/5}$; (e) $2e^{3\pi i/5 + \pi i/3}$.
>
> **Solution.** Modulus of the roots: $\sqrt[3]8 = 2$ (so (a) and (c) are excluded). Arguments: $\frac{3\pi/5}3 + \frac{2k\pi}3 = \frac\pi5 + \frac{2k\pi}3$ for $k = 0, 1, 2$. With $k = 1$ you get $2e^{\pi i/5 + 2\pi i/3}$: answer (b). Direct check: $\left(2e^{i(\pi/5 + 2\pi/3)}\right)^3 = 8e^{i(3\pi/5 + 2\pi)} = 8e^{3\pi i/5}$. Answer (d) has the angle not divided by $3$: its cube is $8e^{9\pi i/5}$; the cube of (e) is $8e^{9\pi i/5 + \pi i} = 8e^{4\pi i/5}$.

> [!METHOD] Questions on complex numbers in polar form
> 1. Bring **everything** into polar form: $z$, and also factors like $-3i$, $-1$, $2i$.
> 2. Apply the rules: product (moduli times, angles plus), inverse (inverse modulus, opposite angle), power ($r^n$, $n\vartheta$), roots ($\sqrt[n]{r_0}$, $\frac{\vartheta_0 + 2k\pi}n$).
> 3. Reduce the angles by taking away multiples of $2\pi$.
> 4. Discard at once the answers with the wrong modulus: it is the fastest check.
> 5. For "which one is a root", raise the candidate answer to the $n$: you must get $z_0$ back.

**Mistakes to avoid.** Writing a negative modulus in a polar form; raising the modulus to the $n$ but not multiplying the angle (or vice versa); taking $\vartheta_0$ instead of $\frac{\vartheta_0}n$ as the first angle of the roots; forgetting that a negative real number has argument $\pi$; getting the quadrant wrong by looking only at the cosine; finding only one root instead of $n$.

> [!EXAM] The 4-page sheet
> From this lesson: the table of sine and cosine at the special angles; $x = r\cos\vartheta$, $y = r\sin\vartheta$; $e^{i\vartheta} = \cos\vartheta + i\sin\vartheta$; $e^{i\pi} = -1$, $e^{i\pi/2} = i$; product, inverse and power in polar form; the formula for the roots $z_k = \sqrt[n]{r_0}\,e^{i(\vartheta_0 + 2k\pi)/n}$; the method for reducing an angle.

## Quiz

```quiz
Q: Given $z = 1 + i$, then $z^{10}$ is equal to:
+ $32i$
- $-32i$
- $32$
- $1024\,i$
- $10 + 10i$
= $1 + i = \sqrt 2\,e^{i\pi/4}$, so $z^{10} = (\sqrt 2)^{10}e^{10\pi i/4} = 32\,e^{5\pi i/2} = 32\,e^{i\pi/2} = 32i$ (you take away a turn, $2\pi$). Check: $(1 + i)^2 = 2i$ and $(2i)^5 = 32i^5 = 32i$. $1024 = 2^{10}$ comes from raising the modulus $2$ to the tenth power instead of $\sqrt 2$. Similar to the exams of 10/07/2024 and 24/01/2024.

Q: Given $z = 2\cos\frac{\pi}{12} + 2i\sin\frac{\pi}{12}$, then $z^6$ is equal to:
+ $64i$
- $2i$
- $64$
- $-64$
- $12i$
= $z = 2e^{i\pi/12}$, so $z^6 = 2^6e^{6\pi i/12} = 64\,e^{i\pi/2} = 64i$. $2i$ forgets to raise the modulus to the power; $12i$ multiplies the modulus by $6$ instead of raising it to the sixth power. Similar to the exam of 06/09/2024, question 1.

Q: Given $z = 3e^{i\pi/3}$, the number $-2iz$ written in polar form $re^{i\vartheta}$ with $r > 0$ and $0 \le \vartheta < 2\pi$ is:
+ $6e^{11\pi i/6}$
- $-6e^{5\pi i/6}$
- $6e^{5\pi i/6}$
- $5e^{11\pi i/6}$
- $6e^{4\pi i/3}$
= $-2i = 2e^{3\pi i/2}$, so $-2iz = 6\,e^{i(\pi/3 + 3\pi/2)} = 6\,e^{11\pi i/6}$. $-6e^{5\pi i/6}$ is the same number but it is not a polar form ($r$ negative); $6e^{5\pi i/6}$ comes from taking $-2i = 2e^{i\pi/2}$ (wrong angle); $5$ adds the moduli instead of multiplying them; $6e^{4\pi i/3}$ uses the angle $\pi$ for $-i$. Similar to the exam of 16/01/2025, question 1.

Q: Which of the following numbers is a cube root of $8i$?
+ $-2i$
- $2i$
- $2e^{i\pi/3}$
- $8e^{i\pi/6}$
- $\frac 83\,i$
= $8i = 8e^{i\pi/2}$: the cube roots have modulus $2$ and arguments $\frac\pi6 + \frac{2k\pi}3$, that is $\frac\pi6$, $\frac{5\pi}6$, $\frac{3\pi}2$. The last one is $2e^{3\pi i/2} = -2i$. Check: $(-2i)^3 = -8i^3 = 8i$. Instead $(2i)^3 = -8i$, $\left(2e^{i\pi/3}\right)^3 = 8e^{i\pi} = -8$; $8e^{i\pi/6}$ and $\frac 83 i$ have the wrong modulus. Similar to the exam of 02/09/2025, question 2.

Q: Which of the following numbers is **not** a solution of $z^6 = 1$?
+ $e^{i\pi/6}$
- $1$
- $-1$
- $e^{i\pi/3}$
- $e^{2\pi i/3}$
= The solutions are the sixth roots of unity $e^{2k\pi i/6} = e^{k\pi i/3}$: they include $1$ ($k = 0$), $e^{i\pi/3}$ ($k = 1$), $e^{2\pi i/3}$ ($k = 2$), $-1 = e^{i\pi}$ ($k = 3$). Instead $\left(e^{i\pi/6}\right)^6 = e^{i\pi} = -1 \neq 1$. Similar to the exam of 05/02/2026, question 1.

Q: Given $z = \frac{\sqrt 2}2(1 + i)$, then $z^{2027}$ is equal to:
+ $\frac{\sqrt 2}2(-1 + i)$
- $\frac{\sqrt 2}2(1 + i)$
- $2027(1 + i)$
- $-1$
- $i$
= $z = e^{i\pi/4}$ (modulus $1$). $z^{2027} = e^{2027\pi i/4}$; a turn equals $\frac 84\pi$ and $2027 = 8 \cdot 253 + 3$, so $z^{2027} = e^{3\pi i/4} = -\frac{\sqrt 2}2 + \frac{\sqrt 2}2 i$. The answer $2027(1 + i)$ multiplies instead of raising to the power. Similar to the exam of 07/02/2025, question 1.

Q: If $z = 3e^{2\pi i/5}$, the conjugate $\bar z$ is:
+ $3e^{8\pi i/5}$
- $-3e^{2\pi i/5}$
- $3e^{3\pi i/5}$
- $\frac 13e^{-2\pi i/5}$
- $3e^{-8\pi i/5}$
= The conjugate has the same modulus and the opposite argument: $\bar z = 3e^{-2\pi i/5} = 3e^{8\pi i/5}$ (adding $2\pi$). $-3e^{2\pi i/5}$ is $-z$; $3e^{3\pi i/5}$ is the mirror image with respect to the imaginary axis; $\frac 13e^{-2\pi i/5}$ is the inverse $z^{-1}$; $3e^{-8\pi i/5} = 3e^{2\pi i/5}$ is $z$ itself.

Q: If $z = 2e^{i\pi/3}$, the inverse $z^{-1}$ is:
+ $\frac 14 - \frac{\sqrt 3}4 i$
- $\frac 14 + \frac{\sqrt 3}4 i$
- $1 - \sqrt 3 i$
- $\frac 12 - \frac{\sqrt 3}2 i$
- $-\frac 14 + \frac{\sqrt 3}4 i$
= $z^{-1} = \frac 12e^{-i\pi/3} = \frac 12\left(\frac 12 - \frac{\sqrt 3}2 i\right) = \frac 14 - \frac{\sqrt 3}4 i$. $1 - \sqrt 3 i = \bar z$ (modulus not inverted); $\frac 12 - \frac{\sqrt 3}2 i = e^{-i\pi/3}$ forgets the modulus.

Q: What is the real part of $(1 + i\sqrt 3)^5$? Write a number.
N: 16
= $1 + i\sqrt 3 = 2e^{i\pi/3}$, so $(1 + i\sqrt 3)^5 = 32\,e^{5\pi i/3} = 32\left(\frac 12 - \frac{\sqrt 3}2 i\right) = 16 - 16\sqrt 3\,i$. The real part is $16$.

Q: The four solutions of $z^4 = -16$, in the complex plane, are:
+ the vertices of a square centred at the origin with a vertex at $\sqrt 2 + \sqrt 2\,i$
- the vertices of a square centred at the origin with a vertex at $2$
- the vertices of a square centred at the origin with a vertex at $4$
- the vertices of an equilateral triangle centred at the origin
- two real numbers and two complex conjugate numbers
= $-16 = 16e^{i\pi}$: the roots have modulus $\sqrt[4]{16} = 2$ and arguments $\frac\pi4 + \frac{k\pi}2$, that is $\frac\pi4, \frac{3\pi}4, \frac{5\pi}4, \frac{7\pi}4$: they are $\pm\sqrt 2 \pm \sqrt 2\,i$. The square with vertices $\pm 2, \pm 2i$ is the one of the solutions of $z^4 = 16$; the one with vertices $\pm 4, \pm 4i$ comes from taking $\sqrt{16} = 4$ instead of $\sqrt[4]{16} = 2$; the solutions are four, not three. No solution is real: $x^4 \ge 0$ for every real $x$.
```

## Exercises

::: exercise basic Conversions
(a) Write in polar form: $-\sqrt 3 + i$, $-4$, $3i$, $-1 - i$. (b) Write in the form $a + bi$: $4e^{2\pi i/3}$, $\sqrt 2\,e^{-3\pi i/4}$, $5e^{i\pi}$.
::: solution
(a)
- $-\sqrt 3 + i$: $r = \sqrt{3 + 1} = 2$; $\cos\vartheta = -\frac{\sqrt 3}2$, $\sin\vartheta = \frac 12$, second quadrant: $\vartheta = \pi - \frac\pi6 = \frac{5\pi}6$. So $2e^{5\pi i/6}$.
- $-4$: negative real, $r = 4$, $\vartheta = \pi$: $4e^{i\pi}$.
- $3i$: on the positive imaginary half-axis, $r = 3$, $\vartheta = \frac\pi2$: $3e^{i\pi/2}$.
- $-1 - i$: $r = \sqrt 2$; $\cos\vartheta = \sin\vartheta = -\frac{\sqrt 2}2$, third quadrant: $\vartheta = \pi + \frac\pi4 = \frac{5\pi}4$. So $\sqrt 2\,e^{5\pi i/4}$.

(b)
- $4e^{2\pi i/3} = 4\left(-\frac 12 + \frac{\sqrt 3}2 i\right) = -2 + 2\sqrt 3\,i$.
- $\sqrt 2\,e^{-3\pi i/4} = \sqrt 2\left(-\frac{\sqrt 2}2 - \frac{\sqrt 2}2 i\right) = -1 - i$.
- $5e^{i\pi} = 5 \cdot (-1) = -5$.
:::

::: exercise intermediate Exercise 3.5 of the handouts: $z^4 = i$
Compute the solutions of the equation $z^4 = i$ and draw them in the complex plane.
::: solution
1. $i = 1 \cdot e^{i\pi/2}$: $r_0 = 1$, $\vartheta_0 = \frac\pi2$.
2. Modulus of the roots: $\sqrt[4]1 = 1$. They all lie on the unit circle.
3. Arguments: $\frac{\pi/2}4 + \frac{2k\pi}4 = \frac\pi8 + \frac{k\pi}2$ for $k = 0, 1, 2, 3$:
   $$\frac\pi8, \qquad \frac{5\pi}8, \qquad \frac{9\pi}8, \qquad \frac{13\pi}8.$$
4. The solutions are $z_k = e^{i(\pi/8 + k\pi/2)}$: in degrees, the angles $22.5°$, $112.5°$, $202.5°$ and $292.5°$. They form a square inscribed in the unit circle.

Check: $z_0^4 = e^{4\pi i/8} = e^{i\pi/2} = i$. Note that going from one root to the next means rotating by $\frac\pi2$, that is multiplying by $i$: the four roots are $w$, $iw$, $-w$, $-iw$ with $w = z_0$.

```graph
title: The four solutions of $z^4 = i$: a square on the unit circle, with a vertex at angle $\frac\pi8$
x: -1.6 1.6
y: -1.3 1.3
names: $\operatorname{Re}$ $\operatorname{Im}$
circle: 0 0 1 | grey | thin
polygon: 0.9239 0.3827 -0.3827 0.9239 -0.9239 -0.3827 0.3827 -0.9239 | amber | dashed
point: 0 1 | pink | $i$ | ne
point: 0.9239 0.3827 | amber | $z_0$ | e
point: -0.3827 0.9239 | amber | $z_1$ | nw
point: -0.9239 -0.3827 | amber | $z_2$ | w
point: 0.3827 -0.9239 | amber | $z_3$ | se
arc: 0 0 0.35 0 pi/8 | accent
```

> [!BEYOND] · the form $a + bi$
> The angles $\frac\pi8$ are not in the table, but with the half-angle formula $\cos^2\alpha = \frac{1 + \cos 2\alpha}2$ you find $\cos\frac\pi8 = \frac{\sqrt{2 + \sqrt 2}}2 \approx 0.924$ and $\sin\frac\pi8 = \frac{\sqrt{2 - \sqrt 2}}2 \approx 0.383$. So $z_0 = \frac{\sqrt{2 + \sqrt 2}}2 + \frac{\sqrt{2 - \sqrt 2}}2 i$, and the other roots are obtained by multiplying by $i$, $-1$, $-i$. The exercise does not ask for it: the polar form is already a complete answer.
:::

::: exercise intermediate Exercise 3.6 of the handouts: polar coordinates
Determine polar coordinates for the following complex numbers:
$$\sin(2), \qquad \cos(2) + i\sin(2), \qquad \cos(2) - i\sin(2), \qquad \frac{1 + i}2, \qquad 1 - i\sqrt 3.$$
::: solution
Here "$2$" is an angle of $2$ radians, about $114.6°$: it lies in the second quadrant, where the sine is positive and the cosine negative.

- **$\sin(2)$** is a **real** number, about $0.909$, and positive. A positive real lies on the positive real half-axis: $r = \sin 2$ and $\vartheta = 0$. So $\sin 2 = (\sin 2)\,e^{i \cdot 0}$. (Had it been negative, the argument would have been $\pi$ and the modulus $-\sin 2$.)
- **$\cos(2) + i\sin(2)$** is by definition $e^{2i}$: $r = 1$, $\vartheta = 2$. No computation: the form is already the polar one.
- **$\cos(2) - i\sin(2)$**: since $\cos(-2) = \cos 2$ and $\sin(-2) = -\sin 2$, it is $\cos(-2) + i\sin(-2) = e^{-2i}$. So $r = 1$, $\vartheta = -2$ (or $2\pi - 2$). It is the conjugate of the previous number.
- **$\frac{1 + i}2$**: $r = \sqrt{\frac 14 + \frac 14} = \frac{\sqrt 2}2$; $\cos\vartheta = \frac{1/2}{\sqrt 2/2} = \frac 1{\sqrt 2} = \frac{\sqrt 2}2$ and also $\sin\vartheta = \frac{\sqrt 2}2$, so $\vartheta = \frac\pi4$. In short $\frac{1 + i}2 = \frac{\sqrt 2}2\,e^{i\pi/4}$.
- **$1 - i\sqrt 3$**: $r = \sqrt{1 + 3} = 2$; $\cos\vartheta = \frac 12$, $\sin\vartheta = -\frac{\sqrt 3}2$, fourth quadrant: $\vartheta = -\frac\pi3$ (or $\frac{5\pi}3$). So $1 - i\sqrt 3 = 2e^{-i\pi/3}$.
:::

::: exercise basic Exercise 3.7 of the handouts: three sets in polar coordinates
Draw the following subsets in the complex plane:
1. $A = \{z = re^{i\vartheta} \in \C \text{ such that } \vartheta = \frac\pi2\}$;
2. $B = \{z = re^{i\vartheta} \in \C \text{ such that } \vartheta = (2k + 1)\pi,\ k \in \Z\}$;
3. $C = \{z = re^{i\vartheta} \in \C \text{ such that } r = 1 \text{ and } 0 \le \vartheta \le \pi\}$.
::: solution
In all three sets $z$ is written in polar form, so $z \neq 0$ and $r > 0$.

1. **$A$**: the numbers $re^{i\pi/2} = ri$ with $r > 0$, that is the **positive imaginary half-axis**, origin excluded.
2. **$B$**: the angles $(2k + 1)\pi$ are the **odd** multiples of $\pi$: $\pi, 3\pi, -\pi, \dots$ They all differ from $\pi$ by a multiple of $2\pi$, so they all indicate the direction of $-1$: $B$ is the **negative real half-axis**, origin excluded, that is the negative real numbers.
3. **$C$**: modulus $1$ means unit circle; the angle from $0$ to $\pi$ (endpoints included) selects its **upper half**, from $1$ to $-1$, with the two endpoints $1$ and $-1$ included.

```graph
title: $A$ (positive imaginary half-axis), $B$ (negative real half-axis), $C$ (upper half of the circle); the origin belongs neither to $A$ nor to $B$
x: -2.5 2.5
y: -1 2
names: $\operatorname{Re}$ $\operatorname{Im}$
segment: 0 0 0 2 | blue | thick
segment: 0 0 -2.5 0 | amber | thick
arc: 0 0 1 0 pi | violet | thick
point: 1 0 | violet | $1$ | s
point: -1 0 | violet | $-1$ | s
point: 0 0 | grey | hollow
text: 0.25 1.7 | blue | $A$
text: -2 0.25 | amber | $B$
text: 0.85 0.85 | violet | $C$
```
:::

::: exercise basic Exercise 3.8 of the handouts: $(1 - i)^3$ in two ways
Compute $(1 - i)^3$ using polar coordinates, and check the result with Cartesian coordinates.
::: solution
**In polar coordinates.** $|1 - i| = \sqrt 2$; $\cos\vartheta = \frac{\sqrt 2}2$ and $\sin\vartheta = -\frac{\sqrt 2}2$, so $\vartheta = -\frac\pi4$ and $1 - i = \sqrt 2\,e^{-i\pi/4}$. Then
$$(1 - i)^3 = (\sqrt 2)^3e^{-3\pi i/4} = 2\sqrt 2\left(\cos\frac{3\pi}4 - i\sin\frac{3\pi}4\right),$$
and since $\cos\frac{3\pi}4 = -\frac{\sqrt 2}2$ and $\sin\frac{3\pi}4 = \frac{\sqrt 2}2$,
$$(1 - i)^3 = 2\sqrt 2\left(-\frac{\sqrt 2}2 - \frac{\sqrt 2}2 i\right) = -2 - 2i.$$
Here $(\sqrt 2)^3 = \sqrt 2 \cdot \sqrt 2 \cdot \sqrt 2 = 2\sqrt 2$, and $2\sqrt 2 \cdot \frac{\sqrt 2}2 = \frac{2 \cdot 2}2 = 2$.

**In Cartesian coordinates.** $(1 - i)^2 = 1 - 2i + i^2 = -2i$, and then $(1 - i)^3 = (-2i)(1 - i) = -2i + 2i^2 = -2 - 2i$. The two methods give the same result.
:::

::: exercise intermediate Product and quotient in polar form
Let $z = 2e^{i\pi/3}$ and $w = 4e^{3\pi i/4}$. Compute in polar form $zw$, $\frac zw$, $w^{-1}$ and $\bar z\,w$.
::: solution
- $zw = 2 \cdot 4\,e^{i(\pi/3 + 3\pi/4)} = 8e^{13\pi i/12}$, because $\frac\pi3 + \frac{3\pi}4 = \frac{4\pi + 9\pi}{12} = \frac{13\pi}{12}$.
- $\frac zw = \frac 24\,e^{i(\pi/3 - 3\pi/4)} = \frac 12\,e^{-5\pi i/12}$, because $\frac{4\pi - 9\pi}{12} = -\frac{5\pi}{12}$. Adding a turn: $\frac 12\,e^{19\pi i/12}$.
- $w^{-1} = \frac 14\,e^{-3\pi i/4} = \frac 14\,e^{5\pi i/4}$.
- $\bar z = 2e^{-i\pi/3}$, so $\bar z\,w = 8\,e^{i(-\pi/3 + 3\pi/4)} = 8e^{5\pi i/12}$, because $\frac{-4\pi + 9\pi}{12} = \frac{5\pi}{12}$.
:::

::: exercise intermediate From tutoring sheet 1: $z^{10}\bar z$
Write $z = \frac 12(-\sqrt 3 + i)$ in polar coordinates and compute $z^{10}\bar z$ in the form $a + bi$.
::: solution
1. $z = -\frac{\sqrt 3}2 + \frac 12 i$: $|z| = \sqrt{\frac 34 + \frac 14} = 1$; $\cos\vartheta = -\frac{\sqrt 3}2$, $\sin\vartheta = \frac 12$, second quadrant: $\vartheta = \frac{5\pi}6$. So $z = e^{5\pi i/6}$.
2. $z^{10} = e^{50\pi i/6}$ and $\bar z = e^{-5\pi i/6}$, so $z^{10}\bar z = e^{(50 - 5)\pi i/6} = e^{45\pi i/6} = e^{15\pi i/2}$.
3. I reduce: a turn equals $\frac 42\pi$ and $15 = 4 \cdot 3 + 3$, so $\frac{15\pi}2 = 3 \cdot 2\pi + \frac{3\pi}2$.
4. $z^{10}\bar z = e^{3\pi i/2} = -i$.

A shortcut: since $|z| = 1$, $\bar z = z^{-1}$ (exercise 8 of lesson L02), so $z^{10}\bar z = z^9 = e^{45\pi i/6}$, the same computation.
:::

::: exercise intermediate From tutoring sheet 1: three root computations
Compute: (a) the fourth roots of $-i$; (b) the cube roots of $8$; (c) the fifth roots of $\frac 12(-\sqrt 3 + i)$.
::: solution
(a) $-i = e^{3\pi i/2}$. Modulus of the roots $1$; arguments $\frac{3\pi}8 + \frac{k\pi}2$: $\frac{3\pi}8$, $\frac{7\pi}8$, $\frac{11\pi}8$, $\frac{15\pi}8$. The roots are $e^{3\pi i/8}$, $e^{7\pi i/8}$, $e^{11\pi i/8}$, $e^{15\pi i/8}$.

(b) $8 = 8e^{i \cdot 0}$. Modulus $\sqrt[3]8 = 2$; arguments $0$, $\frac{2\pi}3$, $\frac{4\pi}3$. The roots are
$$2, \qquad 2e^{2\pi i/3} = -1 + i\sqrt 3, \qquad 2e^{4\pi i/3} = -1 - i\sqrt 3.$$
Among the reals there was only $2$; the other two are complex conjugates.

(c) From the previous exercise $\frac 12(-\sqrt 3 + i) = e^{5\pi i/6}$. Modulus $1$; arguments $\frac{5\pi/6}5 + \frac{2k\pi}5 = \frac\pi6 + \frac{2k\pi}5$. In thirtieths of $\pi$: $\frac\pi6 = \frac{5\pi}{30}$ and the step is $\frac{2\pi}5 = \frac{12\pi}{30}$. The arguments are
$$\frac{5\pi}{30} = \frac\pi6, \qquad \frac{17\pi}{30}, \qquad \frac{29\pi}{30}, \qquad \frac{41\pi}{30}, \qquad \frac{53\pi}{30},$$
and the roots are $e^{i\pi/6} = \frac{\sqrt 3}2 + \frac 12 i$ and the other four $e^{17\pi i/30}$, $e^{29\pi i/30}$, $e^{41\pi i/30}$, $e^{53\pi i/30}$, vertices of a regular pentagon.
:::

::: exercise intermediate From Martelli's book (Exercise 1.13): $z^4 = -16$
Determine all the solutions of $z^4 = -16$ and draw them.
::: solution
$-16 = 16e^{i\pi}$. Modulus of the solutions: $\sqrt[4]{16} = 2$. Arguments: $\frac\pi4 + \frac{k\pi}2$, that is $\frac\pi4$, $\frac{3\pi}4$, $\frac{5\pi}4$, $\frac{7\pi}4$. In the form $a + bi$, with $2\cos\frac\pi4 = 2 \cdot \frac{\sqrt 2}2 = \sqrt 2$:
$$\sqrt 2 + \sqrt 2\,i, \qquad -\sqrt 2 + \sqrt 2\,i, \qquad -\sqrt 2 - \sqrt 2\,i, \qquad \sqrt 2 - \sqrt 2\,i.$$
They are the vertices of a square of radius $2$, rotated by $45°$ with respect to the axes. Check: $(\sqrt 2 + \sqrt 2\,i)^2 = 2 + 4i + 2i^2 = 4i$, and $(4i)^2 = -16$.

```graph
title: The solutions of $z^4 = -16$: a square of radius $2$ with its vertices on the bisectors
x: -3 3
y: -2.5 2.5
names: $\operatorname{Re}$ $\operatorname{Im}$
circle: 0 0 2 | grey | thin
polygon: sqrt(2) sqrt(2) -sqrt(2) sqrt(2) -sqrt(2) -sqrt(2) sqrt(2) -sqrt(2) | amber | dashed
point: sqrt(2) sqrt(2) | amber | $\sqrt 2 + \sqrt 2 i$ | ne
point: -sqrt(2) sqrt(2) | amber | $-\sqrt 2 + \sqrt 2 i$ | nw
point: -sqrt(2) -sqrt(2) | amber | $-\sqrt 2 - \sqrt 2 i$ | sw
point: sqrt(2) -sqrt(2) | amber | $\sqrt 2 - \sqrt 2 i$ | se
```
:::

::: exercise hard From Martelli's book (Exercise 1.14): $z^4 = \bar z^3$
Determine all the complex numbers $z$ such that $z^4 = \bar z^3$.
::: solution
**The case $z = 0$.** $0^4 = 0 = \bar 0^3$: zero is a solution.

**The case $z \neq 0$.** I write $z = re^{i\vartheta}$ with $r > 0$. Then $\bar z = re^{-i\vartheta}$ and
$$z^4 = r^4e^{4i\vartheta}, \qquad \bar z^3 = r^3e^{-3i\vartheta}.$$
Two polar forms are equal if and only if:
1. the moduli are equal: $r^4 = r^3$, that is (dividing by $r^3 > 0$) $r = 1$;
2. the angles differ by a multiple of $2\pi$: $4\vartheta = -3\vartheta + 2k\pi$, that is $7\vartheta = 2k\pi$, that is $\vartheta = \frac{2k\pi}7$.

For $k = 0, 1, \dots, 6$ you get seven different points; the other $k$ repeat the same ones. The non-zero solutions are therefore the **seventh roots of unity** $e^{2k\pi i/7}$, vertices of a regular heptagon inscribed in the unit circle.

**8 solutions in total**: $0$ and the seven seventh roots of $1$. Check on one of them, $z = e^{2\pi i/7}$: $z^4 = e^{8\pi i/7}$ and $\bar z^3 = e^{-6\pi i/7}$; the angles differ by $\frac{8\pi}7 + \frac{6\pi}7 = 2\pi$, so they are the same number.
:::

::: exercise exam As at the exam: a very high power
Given $z = -\frac 12 + \frac{\sqrt 3}2 i$, then $z^{2026}$ is equal to: (a) $z$; (b) $1$; (c) $-1$; (d) $\bar z$; (e) $2026\,z$.
::: solution
1. **Polar form.** $|z| = \sqrt{\frac 14 + \frac 34} = 1$; $\cos\vartheta = -\frac 12$, $\sin\vartheta = \frac{\sqrt 3}2$, second quadrant: $\vartheta = \frac{2\pi}3$. So $z = e^{2\pi i/3}$.
2. **Power.** $z^{2026} = e^{2026 \cdot 2\pi i/3} = e^{4052\pi i/3}$.
3. **Reduction.** A turn equals $\frac 63\pi$; $4052 = 6 \cdot 675 + 2$, so $\frac{4052\pi}3 = 675 \cdot 2\pi + \frac{2\pi}3$.
4. $z^{2026} = e^{2\pi i/3} = z$: answer (a).

Shortcut: $z$ is a cube root of unity ($z^3 = e^{2\pi i} = 1$), so only the remainder of $2026$ divided by $3$ matters: $2026 = 3 \cdot 675 + 1$, and $z^{2026} = (z^3)^{675} \cdot z = z$. Answer (e) is the mistake of those who multiply instead of raising to the power.
:::

::: exercise exam As at the exam: which one is a root
Which of the following numbers is a fourth root of $-4$? (a) $1 + i$; (b) $\sqrt 2$; (c) $2i$; (d) $\sqrt 2\,i$; (e) $1 + 2i$.
::: solution
**With the formula.** $-4 = 4e^{i\pi}$: the fourth roots have modulus $\sqrt[4]4 = \sqrt 2$ and arguments $\frac\pi4 + \frac{k\pi}2$. For $k = 0$: $\sqrt 2\,e^{i\pi/4} = \sqrt 2\left(\frac{\sqrt 2}2 + \frac{\sqrt 2}2 i\right) = 1 + i$. Answer (a); the other roots are $-1 + i$, $-1 - i$, $1 - i$.

**Discarding answers.** $|2i| = 2$ and $|1 + 2i| = \sqrt 5$ have the wrong modulus (it must be $\sqrt 2$). $\sqrt 2$ and $\sqrt 2\,i$ have the right modulus but arguments $0$ and $\frac\pi2$, which are not of the form $\frac\pi4 + \frac{k\pi}2$: indeed $(\sqrt 2)^4 = 4$ and $(\sqrt 2\,i)^4 = 4i^4 = 4$, not $-4$. Check of (a): $(1 + i)^2 = 2i$ and $(2i)^2 = -4$.
:::

## Review questions

::: question What are the polar coordinates of a point $(x, y) \neq (0, 0)$? How do you go from the Cartesian ones and back?
The pair $(r, \vartheta)$: $r$ is the distance from the origin, $\vartheta$ the angle with the positive real half-axis. From polar to Cartesian: $x = r\cos\vartheta$, $y = r\sin\vartheta$. Conversely: $r = \sqrt{x^2 + y^2}$, $\cos\vartheta = \frac xr$, $\sin\vartheta = \frac yr$ (Definition 3.1).
:::

::: question Why do you need both the cosine and the sine to find the angle?
Because a value of the cosine (or of the tangent) corresponds to two different angles: $(1, \sqrt 3)$ and $(1, -\sqrt 3)$ have the same cosine $\frac 12$, but angles $\frac\pi3$ and $-\frac\pi3$. The signs of cosine and sine together determine the quadrant.
:::

::: question What does $e^{i\vartheta}$ mean, and what are the modulus and argument of $z = re^{i\vartheta}$?
$e^{i\vartheta}$ is a symbol for $\cos\vartheta + i\sin\vartheta$, a point of the unit circle. In $z = re^{i\vartheta}$ the number $r = |z| > 0$ is the modulus and the angle $\vartheta$ is the argument (or phase).
:::

::: question What does Proposition 3.2 say and why is it true?
$e^{i(\vartheta + \varphi)} = e^{i\vartheta}e^{i\varphi}$. Carrying out the product $(\cos\vartheta + i\sin\vartheta)(\cos\varphi + i\sin\varphi)$ you find as real part and imaginary part the addition formulas of $\cos(\vartheta + \varphi)$ and $\sin(\vartheta + \varphi)$.
:::

::: question How do you multiply two complex numbers in polar form? What does it mean geometrically?
$r_1e^{i\vartheta_1} \cdot r_2e^{i\vartheta_2} = r_1r_2e^{i(\vartheta_1 + \vartheta_2)}$: the moduli multiply, the arguments add up. Multiplying by $r_2e^{i\vartheta_2}$ rotates by $\vartheta_2$ and stretches by a factor $r_2$.
:::

::: question What are the inverse and the conjugate of $z = re^{i\vartheta}$?
$z^{-1} = r^{-1}e^{-i\vartheta}$ (inverse modulus, opposite angle) and $\bar z = re^{-i\vartheta}$ (same modulus, opposite angle: reflection with respect to the real axis).
:::

::: question When do two polar forms represent the same number?
$r_0e^{i\vartheta_0} = r_1e^{i\vartheta_1}$ if and only if $r_0 = r_1$ and $\vartheta_1 = \vartheta_0 + 2k\pi$ for some $k \in \Z$.
:::

::: question What is Euler's identity? What are $e^{i\pi/2}$ and $e^{2\pi i}$?
$e^{i\pi} = -1$, that is $\cos\pi + i\sin\pi$. Moreover $e^{i\pi/2} = i$ and $e^{2\pi i} = 1$.
:::

::: question How do you compute $z^n$ in polar form? Give an example.
$\left(re^{i\vartheta}\right)^n = r^ne^{in\vartheta}$. For example $(1 + i)^8 = (\sqrt 2)^8e^{2\pi i} = 16$.
:::

::: question How many solutions does $z^n = z_0$ have with $z_0 \neq 0$, and how do you find them?
Exactly $n$. If $z_0 = r_0e^{i\vartheta_0}$, they are $\sqrt[n]{r_0}\,e^{i(\vartheta_0/n + 2k\pi/n)}$ for $k = 0, \dots, n - 1$.
:::

::: question What figure do the $n$-th roots of a complex number form?
The vertices of a regular polygon with $n$ sides, centred at the origin, of radius $\sqrt[n]{r_0}$. For the roots of unity one of the vertices is $1$.
:::

::: question What are the cube roots of $-8$? Why is the first angle $\frac\pi3$?
$1 + \sqrt 3 i$, $-2$, $1 - \sqrt 3 i$ (Example 3.4). Because $-8 = 8e^{i\pi}$ and the first angle is $\frac\pi3$, a third of the argument $\pi$; then you add $\frac{2\pi}3$ twice.
:::

::: question Why is $-6e^{3\pi i/4}$ not a polar form? How do you fix it?
Because the modulus must be positive. With $-1 = e^{i\pi}$: $-6e^{3\pi i/4} = 6e^{7\pi i/4}$.
:::

## Glossary

```glossary
Radian | Unit of measure of angles: the angle measures as much as the arc it cuts on the circle of radius $1$. A turn equals $2\pi$.
Unit circle | The circle with centre $0$ and radius $1$; its points are $(\cos\vartheta, \sin\vartheta)$, that is the numbers $e^{i\vartheta}$.
Polar coordinates | The pair $(r, \vartheta)$ that locates a point other than the origin: distance from the origin and angle with the positive real half-axis (Definition 3.1).
Trigonometric form | The expression $z = r(\cos\vartheta + i\sin\vartheta)$.
Complex exponential $e^{i\vartheta}$ | Symbol for $\cos\vartheta + i\sin\vartheta$; it satisfies $e^{i(\vartheta + \varphi)} = e^{i\vartheta}e^{i\varphi}$.
Polar form | The expression $z = re^{i\vartheta}$ with $r > 0$, for $z \neq 0$.
Modulus | $r = \lvert z \rvert$, the length of the vector that describes $z$.
Argument (phase) | The angle $\vartheta$ of $z = re^{i\vartheta}$; it is determined up to multiples of $2\pi$.
Principal argument | The argument chosen in a fixed interval, usually $(-\pi, \pi]$ or $[0, 2\pi)$.
Addition formulas | $\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta$ and $\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$.
Product rule | In the product of two complex numbers the moduli multiply and the arguments add up.
Euler's identity | $e^{i\pi} = -1$.
De Moivre's formula | $\left(re^{i\vartheta}\right)^n = r^ne^{in\vartheta}$.
$n$-th roots | The $n$ solutions of $z^n = z_0$ ($z_0 \neq 0$): $\sqrt[n]{r_0}\,e^{i(\vartheta_0 + 2k\pi)/n}$, $k = 0, \dots, n - 1$.
$n$-th roots of unity | The solutions of $z^n = 1$: $e^{2k\pi i/n}$, vertices of a regular polygon with a vertex at $1$.
Regular polygon | Polygon with all sides and all angles equal; the $n$-th roots are its vertices.
```

## Checklist

```checklist
- I can convert between degrees and radians and I know the table of sine and cosine at the special angles, with the signs in the four quadrants.
- I can go from Cartesian to polar coordinates and back, choosing the angle with cosine and sine together.
- I can write a complex number in trigonometric form and in polar form $re^{i\vartheta}$, with $r > 0$.
- I can prove Proposition 3.2 with the addition formulas.
- I can multiply, invert and divide in polar form, and I know what happens in the drawing.
- I can recognise when two polar forms indicate the same number and I can reduce a large angle.
- I know that $e^{i\pi} = -1$, $e^{i\pi/2} = i$, $e^{2\pi i} = 1$ and I can use them to bring a minus sign inside the angle.
- I can compute high powers like $(1 + i)^{10}$ without a calculator.
- I can find all the $n$ $n$-th roots of a complex number and draw them as a regular polygon.
- I can solve the exam questions on powers and roots by first discarding the answers with the wrong modulus.
```

## Sources

- **2026 course handouts** (Buzano, Radeschi), lesson 3 "Numeri complessi II", pp. 10–14: sections 3.A–3.C are followed in order, with the page next to each heading; Definition 3.1, Proposition 3.2 and Examples 3.3 and 3.4 keep their numbering; exercises 3.5, 3.6, 3.7 and 3.8 are solved in the "Exercises" section (exercises 2, 3, 4 and 5); Figures 3, 4 and 5 are redrawn with the graphs.
- **B. Martelli, *Geometria e algebra lineare***, the course's reference textbook, free online: [people.dm.unipi.it/martelli](https://people.dm.unipi.it/martelli/Alg%20Lin.pdf). Here: §1.4.4–1.4.6 (pp. 27–31) and Exercises 1.13 and 1.14 (p. 37).
- **Tutoring exercise sheet 1** (Buzano, Radeschi, 27/10/2025, Moodle 2025/26): exercises 2 and 3, solved as exercises 7 and 8.
- **Exam papers** (Moodle 2025/26, [id 3503](https://informatica.i-learn.unito.it/course/view.php?id=3503)): question 1 of 16/01/2025, question 5 of 15/01/2026 and question 2 of 02/09/2025, reported with solutions written for these notes; the table of the other exam sessions only indicates their type. Exam rules 2025/26 and dates 2026/27 as in lesson L01.
- The **"Beyond the handouts"** parts (the trigonometry review, the power series, the principal argument, the method for reducing angles, De Moivre's formula, the pitfall on square roots, the exercises that do not come from the handouts) are additions in these notes to connect the lesson to the rest of the course and to the exam.
