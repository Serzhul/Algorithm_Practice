# Reverse String

# Directions

 Given a string, return a new string with the reversed

order of characters

# Examples

```jsx
reverse('apple') === 'leppa'
reverse('hello') === 'olleh'
reverse('Greetings!') === '!sgniteerG'
```

# Solutions

## Solution#1

- Turn 'str' into an array
- Call 'reverse' method on the array
- Join the array back  into a string
- Return the result

```jsx
function reverse(str) {
	// const arr = str.split(''); // String to Array
	// arr.reverse();
  // return arr.join('');

  return str.split('').reverse().join('');
}
```

## Solution#2

- Create an empty string called 'reversed'
- for each character in the provided string
    - Take the character and add it to the start of 'reversed'
- return the variable 'reversed'

```jsx
function reverse(str) {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}
```

## Solution#3

 Same with Solution#2 but by using Reduce Function

```jsx
function reverse(str) {
  return str.split("").reduce((reversed, character) => {
    return character + reversed;
  }, "");
}
```