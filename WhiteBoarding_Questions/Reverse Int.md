# Reverse Int

# Directions

Given an integer, return an integer that is the reverse

ordering of numbers.

# Examples

```jsx
reverseInt(15) === 51
```

```jsx
reverseInt(981) === 189
```

```jsx
reverseInt(500) === 5
```

```jsx
reverseInt(-15) === -51
```

```jsx
reverseInt(-90) === -9
```

## Tricks for this problem

1. use toString()

```jsx
function reverse(n) { // n: number type
	return n.toString().split('').join('')
}
// n (string type)
```

1. Math.sign() : 만약 파라미터가 양수라면 1을 반환하고, 음수라면 -1을 반환한다.
2. parseInt(): string to Int

# Solutions

```jsx
function reverseInt(n) {
  const reversed = n.toString().split("").reverse().join("");

  return parseInt(reversed) * Math.sign(n);
```

Keys of solution : 

- Number을 어떻게 reverse 할 것인가? ⇒ String으로 변환 후 다시 Number로 변환
- Math.sign을 활용해 파라미터가 양수이면 1을 곱하고, 음수이면 -1을 곱한 값으로 반환