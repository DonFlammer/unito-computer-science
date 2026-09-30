# Programming I (Programmazione I) — typical exam exercises (with solutions)

> Italian original: <https://github.com/DonFlammer/unito-informatica/blob/main/contesto_ai/PROG1/esercizi_esame.md>

An annotated collection from past years — 2023/24 Moodle exercises from channel (canale) C, 2023/24 practice exam (pre-esame) texts, the 2025/26 channel C exam format — plus a constructed example for the "heap" type. It is meant for practising and for generating new exercises in the **same style** as the exam.

The original exam texts are in Italian: the texts below are translations, and the Italian identifiers in the code have been translated as well (`ric` → `rec`, `esisteR` → `existsR`); the logic of the code is unchanged.

**The solutions in sections C, D, E were compiled with `gcc -Wall -Werror` (C11, C17, C23) and tested**, edge cases included (empty arrays, empty string, rows without valid elements). The answers to quizzes B1 and B2 were checked by running the programs, those to B3 and B4 by hand. The quizzes in section B are fragments to read, not to compile as they are.

Rules to follow in the solutions (as at the exam): iterative functions with **only one `return`**, **no `break`/`switch`/`case`/`static`**, sentinel variables; recursive functions **without loops**. Arrays always passed as (length, pointer).

---

## A. Correctness: backward reasoning (weakest precondition)

**Text (Moodle 2023/24, "Corr. Ass. 1").** *Given the following C source, using backward reasoning, choose from the drop-down menus: 1. the predicate to assert in each `assert`; 2. the precondition; so that the truth of the precondition implies the truth of the postcondition.*
```c
// postcondition: 33 <= r && r <= 39
assert(?);      // (WP) precondition
r = r + 2;
assert(?);
r = r * 3;
assert(?);
```
**Method.** Start from the postcondition and work backwards: before `x = E`, `Q[E/x]` holds (in the condition `Q`, `x` is replaced by the expression `E`).

**Solution.**
- Last `assert`: the postcondition `33 <= r && r <= 39`.
- Before `r = r * 3`: `33 <= r*3 && r*3 <= 39`, i.e. `11 <= r && r <= 13`.
- Before `r = r + 2`: `33 <= (r+2)*3 && (r+2)*3 <= 39`, i.e. `9 <= r && r <= 11`.
- Precondition among the options: `33 <= (r+2)*3 && r <= 11`.

Variants seen: post `33 <= r` → pre `9 <= r`; post `r == 33` → `r*3 == 33` → `r == 11` → pre `r == 9`.
Pitfalls: substituting in the wrong direction; integer rounding (`33 <= 3r` ⇔ `11 <= r`, but `34 <= 3r` ⇔ `12 <= r`); confusing `<` and `<=` (the options differ exactly there).

---

## B. Memory model (stack of frames)

How to solve it: draw a frame for each call (parameters, local variables, return point, returned value); remember that **the arrays passed are the caller's** (all frames see and modify the same memory) and that **the base case creates a frame too**.

### B1 — returned values and aliasing (Moodle 2023/24, "Allocazione mem 1")
```c
#define DIM (size_t)(3)
int rec(size_t lenA, int a[], size_t i);
int main(void) {
    int v[DIM] = {10, 5, 1};
    int r = rec(DIM, v, 0);   // (A)
    return 0;
}
int rec(size_t lenA, int a[], size_t i) {
    if (i < lenA) {
        int n = a[i];
        a[i] = 0;
        return n + rec(lenA, a, i + 1);   // (B)
    } else {
        return 0;
    }
}
```
Questions: value returned by the frame with `i == 2`? with `i == 1`? value of `n` before line (B) in the frame with `i == 1`? value of `v[2]` right after (A)?
**Solution.** Frames: main, rec(0), rec(1), rec(2), rec(3). rec(3) → 0; rec(2) → 1 + 0 = **1**; rec(1) → 5 + 1 = **6**; `n` in the frame `i == 1` = **5**; `v[2]` = **0** (each frame sets `a[i]` to zero, i.e. in main's array). In addition, `r = 16`.

### B2 — instructions executed on the way back up (ExMem-03)
```c
#define DIM 3
void m(int aLen, int a[], int i) {
    if (i < aLen) {
        int x = a[i];
        m(aLen, a, i + 1);          // (B)
        a[aLen - (i + 1)] = x;
    }
}
// main: int a[DIM] = {1, 2, 3}; m(DIM, a, 0);   // (A)
```
Questions: `a[2]` just before the frame with `i == 0` is deallocated; how many frames (main excluded) have written to `a` before the frame with `i == 2` is deallocated; `a[0]` at that moment; `a[1]` before main is deallocated.
**Solution.** The `x` values are saved on the way down (1, 2, 3), the writes happen **on the way back up**: `i=2` writes `a[0]=3`, `i=1` writes `a[1]=2`, `i=0` writes `a[2]=1`. Answers: **1**; **1 frame**; **3**; **2**. Result: reversed array `{3, 2, 1}`.

### B3 — number of calls and return point (ExMem-04)
```c
#define DIM 2
void m(int lenX, int x[], int i) {
    if (i < lenX) {
        x[i]++;
        m(lenX, x, i + 1);          // (B)
    }
}
// main: int x[DIM] = {1, 2}; m(DIM, x, 0);   // (A)
```
**Solution.** Calls with `i = 0, 1, 2` → **3** (the base case counts). `x` becomes `{2, 3}`: `x[1] = 3`, `x[0] = 2`. The frame with `i == 1` was called by the frame `i == 0` at line (B), so it **returns to (B)**.

### B4 — uninitialised cells (Moodle 2023/24, reused in channel B 2024)
```c
#define ROWS (size_t)(2)
#define COLS (size_t)(3)
void x(int l, size_t aRows, size_t aCols, bool a[aRows][aCols], size_t aRags[aRows]) {
    aRags[l - 1] = l;
    for (int i = l - 1; i >= 0; i--) {
        a[l - 1][i] = !(l % 2 == 0);   // (B)
    }
}
// main: bool a[ROWS][COLS]; size_t aRags[ROWS];
//       for (size_t j = 0; j < ROWS; j++) x(j + 1, ROWS, COLS, a, aRags);   // (A)
```
**Solution.** l = 1: `aRags[0] = 1`, `a[0][0] = true`. l = 2: `aRags[1] = 2`, `a[1][1] = a[1][0] = false`. Calls: **2**; `false`: **2**; `aRags[1]` = **2**; `true`: **1**. Pitfall: the other cells are never written (indeterminate value); only the valid cells according to `aRags` are counted.

---

## C. Iterative programming (`e1`)

**Text (practice exam 2023/24).** *Write an iterative function `e1` that receives a ragged VLA matrix (`rows`, `cols`, `mat`, `rags`) of integers; `e1` determines whether the rows are all at least as long as `rows` and whether each row contains an element that is a multiple of 7. In that case it returns the sum of the first multiples of 7 (the leftmost ones) of each row, otherwise it returns 0.*

Pattern: formula with quantifiers → **for every** row (sentinel `ok = true`) **there exists** a multiple of 7 (sentinel `found = false`). The loop conditions include the sentinels, so no `break`.
```c
int e1(size_t rows, size_t cols, const int mat[rows][cols], const size_t rags[rows]) {
    int sum = 0;
    bool ok = true;                        // "for every row": starts as true
    for (size_t i = 0; i < rows && ok; i++) {
        ok = rags[i] >= rows;
        bool found = false;                // "there exists a multiple of 7": starts as false
        for (size_t j = 0; j < rags[i] && ok && !found; j++) {
            if (mat[i][j] % 7 == 0) {
                sum = sum + mat[i][j];
                found = true;
            }
        }
        ok = ok && found;
    }
    if (!ok) {
        sum = 0;
    }
    return sum;                            // only one return
}
```
Tested: correct sum; short row → 0; row without multiples of 7 → 0; `rows == 0` → 0 (vacuously true, empty sum). Pitfalls: scanning up to `cols` instead of `rags[i]`; forgetting to reset the result to zero when the property fails (a solution published by students has exactly this bug).

---

## D. Recursive programming (`e2` wrapper + `e2R`)

Patterns to know: **covariant** (co-variante: decreasing index, base case `n == 0`, works on `a[n-1]`); **contravariant** (contro-variante: increasing index, base case `i == aLen`); **dichotomic** (dicotomica) on `[l, r)` (empty `l == r`, one element `r - l == 1`, split at `m = l + (r - l) / 2`). The required type must be respected: a working solution of the wrong type does not count.

### D1 — contravariant with capacity (practice exam 2023/24)
*`e2` takes an array (`aLen`, `a`), a second array (`*p_bLen`, `b`) and a value `val`; it is a wrapper (involucro) that calls the recursive function `e2R`. `e2R` considers each element of `a`: if it is strictly greater than `val`, it copies into `b` its difference from `val`. At most `*p_bLen` elements are written; at the end `*p_bLen` contains the number of elements actually written.*
```c
void e2R(size_t aLen, const int a[], size_t *p_bLen, size_t cap, int b[], int val, size_t i) {
    if (i < aLen) {
        if (a[i] > val && *p_bLen < cap) {
            b[*p_bLen] = a[i] - val;
            *p_bLen = *p_bLen + 1;
        }
        e2R(aLen, a, p_bLen, cap, b, val, i + 1);
    }
}
void e2(size_t aLen, const int a[], size_t *p_bLen, int b[], int val) {
    size_t cap = *p_bLen;      // capacity of b on entry
    *p_bLen = 0;               // initial case: no element written
    e2R(aLen, a, p_bLen, cap, b, val, 0);
}
```

### D2 — dichotomic (practice exam 2023/24)
*`e2R` performs a dichotomic recursion and returns the sum of the elements of `a` between `-val` and `+val`, endpoints included; 0 if the array is empty.*
```c
int e2R(const int a[], size_t l, size_t r, int val) {
    if (l == r) {
        return 0;                                  // empty interval
    }
    if (r - l == 1) {
        return (a[l] >= -val && a[l] <= val) ? a[l] : 0;
    }
    size_t m = l + (r - l) / 2;
    return e2R(a, l, m, val) + e2R(a, m, r, val);
}
int e2(size_t aLen, const int a[], int val) {
    return e2R(a, 0, aLen, val);
}
```
Pitfall: treating `l == r` as "one element" reads `a[0]` even with an empty array (a bug present in solutions published by students).

### D3 — string filtered in place (practice exam 2023/24)
*`e2R` modifies the string in place: a character `c` is kept only if there are no other occurrences of `c` in the rest of the string; the string must be terminated with `'\0'`.*
```c
bool existsR(const char *s, char c) {
    if (*s == '\0') {
        return false;
    }
    if (*s == c) {
        return true;
    }
    return existsR(s + 1, c);
}
void e2R(char *w, const char *r) {           // w: where I write, r: where I read (w <= r)
    if (*r == '\0') {
        *w = '\0';
    } else if (existsR(r + 1, *r)) {
        e2R(w, r + 1);                        // c occurs again later: discard it
    } else {
        *w = *r;                              // no later occurrence: keep it
        e2R(w + 1, r + 1);
    }
}
void e2(char *s) {
    e2R(s, s);
}
```
Example: `"banana"` → `"bna"`. "In the rest of the string" means *after* `c`. The auxiliary function is recursive too (no loops in recursive functions).

---

## E. Heap (`malloc`) — constructed example

An exercise type found in channel C 2025/26 (a function that returns an allocated array and its length in an output parameter). The following text is an example in the same style, **not** a real exam text.

*`e3` receives an array (`aLen`, `a`) and returns a new array allocated on the heap with the even elements of `a`, in order; the length must be written to `*out_len`.*
```c
int *e3(size_t aLen, const int a[], size_t *out_len) {
    size_t cnt = 0;
    for (size_t i = 0; i < aLen; i++) {
        if (a[i] % 2 == 0) {
            cnt = cnt + 1;
        }
    }
    int *b = malloc(cnt * sizeof(int));
    size_t k = 0;
    if (b != NULL) {
        for (size_t i = 0; i < aLen; i++) {
            if (a[i] % 2 == 0) {
                b[k] = a[i];
                k = k + 1;
            }
        }
    }
    *out_len = k;
    return b;                              // the caller will have to call free()
}
```
Pitfall: for **odd** numbers do not use `a[i] % 2 == 1`, because with negative numbers `-3 % 2 == -1`; use `a[i] % 2 != 0` (an error found in the official channel A 2025/26 solutions).

---

## F. Java era (2016–2019) — for the logic only

Format: 4 exercises, 32 points — iterative (7, on the PC), recursive with an imposed type (7, on the PC), proof by induction or invariant (2+2+3+3, by hand), stack+heap memory state (8, by hand). The texts (in `guida_degli_studenti_di/Materie/PROG1/FacSimili/`) are good practice if rewritten in C with `(len, array)` instead of Java arrays.
