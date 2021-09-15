# Climbing Stairs

You are climbing a staircase. It takes `n` steps to reach the top.

Each time you can either climb `1` or `2` steps. In how many distinct ways can you climb to the top?

번역 

당신은 계단을 오르고 있다. 꼭대기에 도착할 때까지 걸리기 까지 n개의 단을 올라야한다.

당신은 한번에 1계단 혹은 2계단씩 오를 수 있다. 꼭대기에 도착할 때까지 경우의 수는 총 몇가지인가?

**Example 1:**

```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

```

**Example 2:**

```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

```

**Constraints:**

- `1 <= n <= 45`

# Solutions

- 피보나치 수열과 거의 유사한 문제로 2가지 방식(재귀, 반복문)으로 풀 수 있다.

### Solution #1 Iteration

```jsx
var climbStairs = function(n) {    
    let prev = 0;
    let cur = 1;
    let temp;
    
    for (let i = 0; i < n; i++) {
        temp = prev;
        prev = cur;
        cur += temp; 
    }
    return cur;
};
```

- 반복문을 통해 해당 값을 누적해서 반환하는 방식이다.
- 임시 변수를 선언해 값을 누적하는 방식으로 반복문을 반복한다.

### Solution #2 Recursion

```jsx
var climbStairs = function(n, memo = new Array()) {
    if (n === 1) {
        return 1;
    }
    if (n === 2) {
        return 2;
    }
    if (memo[n] !== undefined) {
        return memo[n];
    }
    let res = climbStairs(n-1, memo) + climbStairs(n-2, memo);
    memo[n] = res;
    return res;
    // T.C: O(N)
    // S.C: O(N)
};
```

- 여기서 주목해야할 점은 memoization을 위해 배열을 선언했다는 점이다.
- 인덱스 n에 우리는 결괏값을 담아 넣는다. (즉, 배열에 미리 결괏값을 담아놓는다.)
- 그리고 재귀로 함수를 호출할 때마다 1,2 를 체크하고, memo배열의 인덱스를 체크한다. 만약 undefined가 아니라면 값이 있다는 것이므로 재귀를 다시 할 필요없이 배열에 있는 값을 반환하면 된다.