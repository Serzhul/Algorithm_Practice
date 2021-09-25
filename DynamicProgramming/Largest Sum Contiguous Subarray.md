# Largest Sum Contiguous Subarray

1차원 배열에서, 연속하는 서브 배열의 가장 큰 값을 반환하는 효과적인 프로그램 작성하기

![https://media.geeksforgeeks.org/wp-content/cdn-uploads/kadane-Algorithm.png](https://media.geeksforgeeks.org/wp-content/cdn-uploads/kadane-Algorithm.png)

### 카데인 알고리즘(**Kadane’s Algorithm):**

- 카데인 알고리즘은 greedy 알고리즘과 동적프로그래밍(DP) 두 가지 방식으로 풀 수 있다.
- greedy 방식으로 풀 경우, 우리는 sum을 계속 더하되, 만약 sum이 0보다 작아질 경우 0으로 다시 초기화한다.
    - 그 이유는 합이 -가 되는 경우가 새로운 범위에서 합을 구하는 것이 더 합이 작을 것이기 때문이다.
- DP 방식으로 풀 경우 각 단계별로 2가지 선택이 있다.
    - 현재 요소 값과 이전의 sum 값 둘 중에 선택하거나
    - 새로운 범위로 다시 시작하는 것
    - 이 선택들을 고려해 알고리즘을 구현해야한다.

### DP 방식으로 구현하기

```jsx
var maxSubArray = function(nums) {
    
    const dp = [nums[0]];
    let max = nums[0]

    for(let i = 1; i<nums.length; i++) {
        dp[i] = Math.max(nums[i], dp[i-1]+nums[i]) // 새로운 요소값 vs 이전까지의 sum 비교
        if(max < dp[i]) max = dp[i];
    }
    
    return max 
};
```

### Greedy 방식으로 구현하기

```jsx
var maxSubArray(nums) {
        let sum = 0;
        let curmax = Math.MIN_VALUE;
        for (int i = 0; i < nums.length; i ++) {
            if (sum >= 0) {
                sum += nums[i];
            } else {
                sum = nums[i];
            }
            curmax = Math.max(sum, curmax);
        }
        return curmax;
    }
```