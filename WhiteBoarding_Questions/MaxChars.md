# MaxChars

# Directions

 Given a string, return the character that is most commonly used in the string.

## Examples

```jsx
maxChar("abcccccccd") === "c"
```

```jsx
maxChar("apple 1231111") === "1"
```

## Common String Questions

- What is the most common character in the string?
- Does string A have the same characters as string B ( is it an anagram)?
- Does the given string have any repeated characters in it?

⇒ 각각의 캐릭터에 대한 내용을 객체로 구현하여 표현하면 해당 문제들에 대해 쉽게 접근할 수 있다.

### Ex)

```jsx
"Hello There!" => {
	H: 1,
	e: 3,
	l: 2,
	o: 1,
	" ": 1,
	t: 1,
	h: 1,
	r: 1,
	!: 1
}
```

# Solutions

### Solution#1

```jsx
function maxChar(str) {
  let max = 0;
  let count = 0;
  let answer = "";

  for (let char of str) {
    if (answer === "") {
      answer = char;
      count = 1;
      max = 1;
      continue;
    }

    *if (answer === char) {
      count++;
    } else {
      if (max <= count) {
        answer = char;
        max = count;
        continue;
      }
      count = 1;
    }
  }
  return answer;
}*
```

### Solution#2

```jsx
function maxChar(str) {
  const chars = {};
  let max = 0;
  let answer = "";

  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }

  Object.entries(chars).forEach((key, val) => {
    if (key[1] > max) {
      answer = key[0];
      max = key[1];
    }
  });
  return answer;
}
```

### Solution#3

```jsx
function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = "";

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}
```