# Happy Number

Write an algorithm to determine if a number `n` is happy.

A **happy number** is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it **loops endlessly in a cycle** which does not include 1.
- Those numbers for which this process **ends in 1** are happy.

Return `true` *if* `n` *is a happy number, and* `false` *if not*.

숫자 n이 해피한지 정의하는 알고리즘을 작성하라.

해피 숫자는 다음과 같은 과정으로 정의된다.

- 특정한 양의 정수로 시작해서, 그것을 제곱한 수의 합의 자릿수로 대체된다.
- 숫자가 1이 될 때까지 해당 과정을 반복하거나, 순환이 있어 1을 포함하지 않으면 무한으로 루프한다.
- 1로 끝나는 경우엔 해피한 숫자다.

**Example 1:**

Input: n = 19

Output: true

Explanation:
$1^2 + 9^2 = 82$
$8^2 + 2^2 = 68$

$6^2 + 8^2 = 100$
$1^2+0^2+0^2 = 1$

**Example 2:**

```
Input: n = 2
Output: false
```

# Solutions

### Solution #1

```jsx
const isHappy = (n, map = {}) => {
    if(n === 1) return true; // 1이면 happyNumber
    if(map[n]) return false; // map에 해당하는 값이 있다면 cycle이 존재한다는 말이므로 false
    
    map[n] = n;
    
    let strDigits = n.toString().split('');
    let digits = strDigits.map(Number) // 각 값들을 숫자 타입으로 변환
    
    let newNum = 0;
    
    for (let i = 0; i<digits.length; i++) {
        newNum += Math.pow(digits[i], 2);
    }
    
    return isHappy(newNum, map)

};
```

### Solution #2

```jsx
const isHappy = (n, counter = 0) => {
    if (counter < 8) {
        let sq = n.toString().split('').map((x) => x * x);
        let sumSq = sq.reduce((a, b) => a + b, 0);
        
        if (sumSq !== 1) {
            return isHappy(sumSq, counter + 1);
        }
        
        return true;
    }
    
    return false;
}
```

### Solution #3

```jsx
const squares = {'0':0, '1':1, '2':4, '3':9, '4':16, '5':25, '6':36, '7':49, '8':64, '9':81}

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    /**
	 * Not necessary I think, but the OJ algorithm appears
	 * to return false for non-positive numbers also.
	 */
    if (n < 1) return false;
	
	/**
	 * This set will store numbers as we create them.
	 * If we create a number already in the set, we
	 * assume we're in an infinite cycle.
	 */
    let set = new Set();
	
    while (!set.has(n)) {
        set.add(n);
        let s = n.toString();
        n = 0;
        for (let i = 0; i < s.length; ++i) {
            n += squares[s[i]];
        }
        if (n == 1) return true;
    }
	
    return false;
};
```