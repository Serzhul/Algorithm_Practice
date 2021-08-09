# Fibonacci Series

# Directions

Print out the n-th entry in the fibonacci series.

The fibonacci series is an ordering of numbers where each number is the sum of the preceeding two.

For example, the sequence

[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

forms the first ten entries of the fibonacci series.

# Example:

```jsx
fib(4) === 3
```

# Pseudo Code

### Iterative way

### Recursive Way

### Memoization way(improved recursive way)

 Store the arguments of each function call along with the result. If the function is called again with the same arguments, return the precomputed result, rather than running the function again.

# Solutions

### Solutions #1 Iterative way

```jsx
function fib(n) {
	const result = [0, 1];
	
	for(let i = 2; i <= n; i++) {
		let a = result[i-1];
		let b = result[i-2];

		result.push(a+b);
	}

return result[n];
	
}
```

### Solution #2 recursive way

```jsx
function fib(n) {
    if (n < 2) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
}
```

### Solution #3 memoization way

```jsx
function memoize(fn) {
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);
```

$cf)$  apply() 메서드는 주어진 this 값과 배열 (또는 유사 배열 객체) 로 제공되는 arguments 로 함수를 호출한다.