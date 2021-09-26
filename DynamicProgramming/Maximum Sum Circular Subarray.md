# Maximum Sum Circular Subarray

Given a **circular integer array** `nums` of length `n`, return *the maximum possible sum of a non-empty **subarray** of* `nums`.

A **circular array** means the end of the array connects to the beginning of the array. Formally, the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.

A **subarray** may only include each element of the fixed buffer `nums` at most once. Formally, for a subarray `nums[i], nums[i + 1], ..., nums[j]`, there does not exist `i <= k1`, `k2 <= j` with `k1 % n == k2 % n`.

 번역 :

- n의 길이를 가진 순환하는 정수배열이 주어졌을 때, 최대 요소의 합을 가진 서브배열을 반환하라.
- 순환 배열은 배열의 마지막 요소가 배열의 시작 요소와 연결되어있음을 의미한다. 식으로 표현하자면 nums[i]의 다음 요소는 nums[(i+1) % n] 이며 nums[i]의 이전 요소는 nums[(i-1+n)%n]이다.
- 서브배열은 최대 한번의 수정된 버퍼를 포함하고 있다. 식으로 표현하자면 , nums[i], nums[i+1], ..., nums[j]이며, k1% n == k2% n 이면서 i ≤ k1, k2 ≤j 인 경우는 존재하지 않는다.

**Example 1:**

```
Input: nums = [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3

```

**Example 2:**

```
Input: nums = [5,-3,5]
Output: 10
Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10

```

**Example 3:**

```
Input: nums = [3,-1,2,-1]
Output: 4
Explanation: Subarray [2,-1,3] has maximum sum 2 + (-1) + 3 = 4

```

**Example 4:**

```
Input: nums = [3,-2,2,-3]
Output: 3
Explanation: Subarray [3] and [3,-2,2] both have maximum sum 3

```

**Example 5:**

```
Input: nums = [-2,-3,-1]
Output: -1
Explanation: Subarray [-1] has maximum sum -1

```

**Constraints:**

- `n == nums.length`
- `1 <= n <= 3 * 104`
- `3 * 104 <= nums[i] <= 3 * 104`

# Solutions

 이 문제에 대해선 leetcode의 discuss 에 좋은 해설이 있어서 가져와 봤다. 역시 같은 문제라 하더라도 접근법에 따라 풀이법도 천차만별임을 다시 한번 깨달을 수 있었다.

## 해설

 이 문제는 2가지 케이스로 구성되어있다.

- 중간 부분만 subArray인 케이스. 이 경우는 일반적인 최대 subarray의 합을 구하는 방식과 동일하다.
- subarray가 배열의 머리 혹은 꼬리 부분을 가져가는 케이스
    - 이 경우, 첫 번째 케이스 방식으로 접근해보면 최대 결괏값은 전체 sum값에서 최소 subarray의 -의 합을 뺀 것과 같다.

### 다이어그램

![https://assets.leetcode.com/users/motorix/image_1538888300.png](https://assets.leetcode.com/users/motorix/image_1538888300.png)

따라서 이를 식으로 표현하면,

```jsx
max(the max subarray sum, the total sum - the min subarray sum
```

### 2 번째 케이스의 증명

```jsx
max(prefix+suffix)
= max(total sum - subarray)
= total sum + max(-subarray)
= total sum - min(subarray)
```

### 코너 케이스

 한 가지 주의해야할 점은 모든 숫자가 음의 정수일 경우, `maxSum = max(A)` 이고 `minSum = sum(A)` 다.

이 경우, `max(maxSum, total - minSum) = 0` 이며 빈 subArray를 의미한다.

문제에 따르면, 우리는 빈 배열이 아닌 `max(A)` 를 반환해야 한다. 따라서 `maxSum` 을 반환한다.

## 복잡도

- 시간 복잡도는 $O(N)$, 공간 복잡도는 $O(1)$

### Solution #1

```jsx
function maxSubarraySumCircular(A) {
        let total = 0, maxSum = A[0], curMax = 0, minSum = A[0], curMin = 0;
        for (let a of A) {
            curMax = Math.max(curMax + a, a);
            maxSum = Math.max(maxSum, curMax);
            curMin = Math.min(curMin + a, a);
            minSum = Math.min(minSum, curMin);
            total += a;
        }
        return maxSum > 0 ? Math.max(maxSum, total - minSum) : maxSum;
    }
```

- total은 모든 배열의 요소의 합을 의미한다.
- maxSum은 최대 서브배열의 합을 의미한다.
- curMax은 현재 index기준 서브배열의 최댓값을 의미한다.
- minSum은 최소 서브배열의 합을 의미한다.
- curMin은 현재 index 기준 서브배열의 최솟값을 의미한다.