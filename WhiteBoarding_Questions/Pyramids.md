# Pyramids

# Directions

Write a ***function*** that accepts a positive number N.

The function should console log a pyramid shape

with N levels using the # character.  Make sure the

pyramid has spaces on both the left *and* right hand sides

# Examples

```jsx
pyramid(1)
'#'
```

```jsx
pyramid(2)
' # '
'###'
```

```jsx
 pyramid(3)
'  #  '
' ### '
'#####'
```

# Pseudo Code

### Iterative Way

- From 0 to n (iterate through rows)
    - Create an empty string, 'level'
    - From 0 to ???(columns)
        - If the column should have a #
            - Add a '#' to 'level'
        - ELSE
            - Add a space to 'level'
    - Console log 'stair'

### Recursive Way

# Solutions

### Solution #1

```jsx
function pyramid(n) {
  for (let row = 1; row <= n; row++) {
    let stair = "";

    for (let column = 1; column <= n * 2 - 1; column++) {
      if (column <= n - row) {
        stair += " ";
      } else if (column >= n + row) {
        stair += " ";
      } else {
        stair += "#";
      }
    }
    console.log(stair);
  }
}
```

### Solution #2

```jsx
function pyramid(n) {
  const midpoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let level = "";

    for (let column = 0; column < n * 2 - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
}
```

### Solution #3

```jsx
function pyramid(n, row = 0, stair = "") {
  // Set up a basecase
  if (n === row) {
    return;
  }

  if (n * 2 - 1 === stair.length) {
    console.log(stair);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((n * 2 - 1) / 2);

  const add =
    midpoint - row <= stair.length && midpoint + row >= stair.length
      ? "#"
      : " ";
  pyramid(n, row, stair + add);
}
```