# FizzBuzz

# Directions

Write a program that console logs the numbers from 1 to n. But for multiples of three print

“fizz” instead of the number and for the multiples of five print “buzz”. For numbers which are multiples of both three and five print “fizzbuzz”.

# Example

```jsx
fizzBuzz(5);
1
2
fizz
4
Buzz
```

- Modulo operator(%, 나머지를 구하는 연산자)를 사용해 계산하는 것이 핵심.
- 예를 들어 3의 배수이면 3으로 나눴을 때 나머지가 0, 5의 배수이면 5로 나눴을때 나머지가 0

## Solutions

### Solution#1

```jsx
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
```