# Palindrome

# Directions

Given a string, return true if the string is a palindrome

or false if it is not.  Palindromes are strings that

form the same word if it is reversed. *Do* include spaces

and punctuation in determining if the string is a palindrome.

# Examples:

```jsx
palindrome("abba") === true
```

```jsx
palindrome("abcdefg") === false
```

# Solutions

## Solution #1

```jsx
function palindrome(str) {
  const reversed = str.split("").reverse().join("");

  return str === reversed;
}
```

## Solution #2

- Use Every()
- [0, 10, 14] is 'every' value greater than 5?

    ```jsx
    array.every((val) => val > 5); 
    ```

```jsx
function palindrome(str) {
  return str.split("").every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
```