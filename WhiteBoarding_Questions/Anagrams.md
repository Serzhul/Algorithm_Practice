# Anagrams

# Directions

Check to see if two provided strings are anagrams of each other.

One string is an anagram of another if it uses the same characters in the same quantity. 

Only consider characters, not spaces or punctuation.  

Consider capital letters to be the same **as** lower case.

- 공백과 구두점은 고려하지 않음.
- 대문자는 소문자 처럼 취급함.

# Pseudo Code

- Regular Expression(정규식) 사용

```jsx
Ex) const word = "HI THERE!!!!!!";

console.log(word.replace(/[^\w]/g, "").toLowerCase());  // 'hithere'
```

# Examples

anagrams('rail safety', 'fairy tales') --> True

anagrams('RAIL! SAFETY!', 'fairy tales') --> True

anagrams('Hi there', 'Bye there') --> False

# Solutions

### Solution #1

- regExp 사용 (helper Function)
- characterMap 사용 (Object)

```jsx
function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}
```

### Solution #2

- use sort();

```jsx
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}
```