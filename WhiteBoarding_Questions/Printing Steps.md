# Printing Steps

# Directions

Write a ***function*** that accepts a positive number N.

The function should console log a step shape with N levels using the # character.  

Make sure the step has spaces on the right hand side!

# Examples

```jsx
steps(2)
'# '
'##'
```

```jsx
steps(3)
'#  '
'## '
'###'
```

```jsx
steps(4)
'#   '
'##  '
'### '
'####'
```

# Pseudo Code

### Iterative way

- From 0 to n
    - Create an empty string, 'stair'
    - From 0 to n (iterate through columns)
        - If the current column is equal to our less than the current row
            - Add a '#' to 'stair'
        - ELSE
            - Add a space to 'stair'
    - Console log 'stair'

## Recursive way

- If (row === n) then we have hit the end of our problem
- If the 'stair' string has a length === n then we are at the end of a row
- If the length of the stair string is less than or equal to the row number we're working on, we add a '#', otherwise add a space

# Recursion

```jsx
ex) function printNumber(n, dec = 1) {
	if (n === 0 ) {
			return;		
	}
	console.log(n);

	printNumber(n - dec);
} 

printNumber(10) // 10 9 8 7 6 5 4 3 2 1

```

- Set the base case ⇒  The case when we want to stop the recursion.
- Call Function again ⇒ To make sure change argument to pass.

## Tips

- Figure out the bare minimum pieces of information to represent your problem.
- Give reasonable defaults to the bare minimum pieces of info
- Check the base case. Is there any work left to do? If not, return
- Do some work. Call your function again, making sure the arguments have changed in some fashion.

# Solutions

### Solution # 1

```jsx
function steps(n) {
  let step = "";

  for (let i = 1; i <= n; i++) {
    step += "#".repeat(i);
    step += " ".repeat(n - i);
    console.log(step);
    step = "";
  }
}
```

### Solution # 2

```jsx
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}
```

### Solution # 3

- use Recursion

```jsx
function steps(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? "#" : " ";
  steps(n, row, stair + add);
}
```