# Jewels and Stones

You're given strings `jewels` representing the types of stones that are jewels, and `stones` representing the stones you have. Each character in `stones` is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so `"a"` is considered a different type of stone from `"A"`.

**Example 1:**

```
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

```

**Example 2:**

```
Input: jewels = "z", stones = "ZZ"
Output: 0

```

**Constraints:**

- `1 <= jewels.length, stones.length <= 50`
- `jewels` and `stones` consist of only English letters.
- All the characters of `jewels` are **unique**.

# Solutions

### Solution #1

```jsx
var numJewelsInStones = function(jewels, stones) {
    // jewels를 Map으로 치환하
    let jewelMap = {};
    let count = 0;
    jewels.split('').forEach(char => {
        jewelMap[char] = 1;
    })
    
    stones.split('').forEach(stone => {
        jewelMap[stone] ? count++ : null;
    })
    
    return count
    
};
```

### Solution #2

```jsx
var numJewelsInStones = function(jewels, stones) {
    const jewelsSet = new Set (jewels);
    return stones.split("").reduce((acc, curChar) => {
        if (jewelsSet.has(curChar)) {
            return acc + 1;
        } 
        return acc
    }, 0)
};
```