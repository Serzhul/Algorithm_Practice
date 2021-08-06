# Array Chunking

# Directions

Given an array and chunk size, divide the array into many subarrays where each subarray is of length size

$cf) Chunk : 덩어리로 나누다$

# Examples

```jsx
chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
```

```jsx
chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
```

```jsx
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
```

```jsx
chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
```

```jsx
chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
```

# Pseudo codes

## Basic

- Create empty array to hold chunks called 'chunked'
- For Each element in the 'unchunked' array
    - Retrieve the last element in 'chunked'
    - If last element does not exist, or if its length is equal to chunk size
        - Push a new chunk into 'chunked' with the current element
    - else add the current element into the chunk

## Using Slice

- Create empty 'chunked' array
- Create 'index' start at 0
- While index is less than array.length
    - Push a slice of length 'size' from 'array' into 'chunked'
    - Add 'size' to 'index'

# Solutions

### Solution#1

- slice function 사용

```jsx
function chunk(array, size) {
  const chunks = [];

  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }

  return chunks;
}
```

### Solution#2

- 새롭게 배열을 만들어가면서 size 크기와 일치할 때까지 추가.

```jsx
function chunk(array, size) {
  const chunked = [];

  for (let element of array) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}
```

### Solution#3

- slice 사용 2

```jsx
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}
```