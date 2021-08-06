# Sentence Capitalization

# Directions

Write a ***function*** that accepts a string.  The function should capitalize the first letter of each word in the string then return the capitalized string.

# Examples

```jsx
capitalize('a short sentence') --> 'A Short Sentence'
```

```jsx
capitalize('a lazy fox') --> 'A Lazy Fox'
```

```jsx
capitalize('look, it is working!') --> 'Look, It Is Working!'
```

### Technique

- slice() 함수 사용 ⇒ str.slice(beginIndex[, endIndex])
- toUpperCase() 함수 사용

# Pseudo Code 1

- Make an empty array 'words'
- Split the input string by spaces to get an array
- For each word in the array
    - Uppercase the first letter of the word
    - Join first letter with rest of the string
    - Push result into 'words' array
- Join 'words' into a string and return it

# Pseudo Code 2

- Create an empty string called 'result'
- For Each character in the string
    - IF the character to the left space
        - Capitalize it and add it to 'result'
    - ELSE
        - Add it to 'result'

# Solutions

### Solution #1

- slice(), toUpperCase() 사용

```jsx
function capitalize(str) {
  const strArr = str.split(" ");
  let answer = [];
  for (let el of strArr) {
    answer.push(el[0].toUpperCase() + el.slice(1));
  }
  return answer.join(" ");
}
```

### Solution #2

- 첫 글자일 경우 대문자
- 배열을 순회하면서 character하나씩 추가하되, 전 인덱스가 공백이면 대문자로 변경후 추가

```jsx
function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
```