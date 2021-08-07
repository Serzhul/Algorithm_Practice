# Find the Vowels

# Directions

Write a ***function*** that returns the number of vowels used in a string.  

Vowels are the characters 'a', 'e', 'i', 'o', and 'u'.  ⇒ 모음

# Examples

```jsx
vowels('Hi There!') --> 3
```

```jsx
vowels('Why do you ask?') --> 4
```

```jsx
vowels('Why?') --> 0
```

# Pseudo Code

### Iterative way

- includes() 사용

### Regular Expression way

- regExp 사용

# Solutions

### Solution #1

```jsx
function vowels(str) {
  let count = 0;
  let voewl = ["a", "e", "i", "o", "u"];

  for (let char of str) {
    voewl.includes(char.toLowerCase()) ? count++ : null;
  }
  return count;
}
```

### Solution #2

```jsx
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
```