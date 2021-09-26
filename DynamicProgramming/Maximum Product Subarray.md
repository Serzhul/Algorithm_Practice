# Maximum Product Subarray

Given an integer array `nums`, find a contiguous non-empty subarray within the array that has the largest product, and return *the product*.

It is **guaranteed** that the answer will fit in a **32-bit** integer.

A **subarray** is a contiguous subsequence of the array.

번역:

 정수 배열 nums가 주어졌을 때, 최대 곱을 가지면서 비어있지 않은 연속하는 서브배열을 찾아, 그 곱한 값을 반환하라.

 정답은 32비트 이내 크기의 정수이다.

 서브배열은 연속하는 배열의 일부이다.

**Example 1:**

```
Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

```

**Example 2:**

```
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

```

**Constraints:**

- `1 <= nums.length <= 2 * 104`
- `10 <= nums[i] <= 10`
- The product of any prefix or suffix of `nums` is **guaranteed** to fit in a **32-bit** integer.

# Solutions

### 접근

- 이전 최댓값과 이전 최솟값을 저장한다. (최솟값을 저장하는 이유는 -일 경우 다시 -를 곱했을 때 최댓값이 될 가능성이 있기 때문
- 비교할 대상은 3가지로, 셋 중에 가장 큰 값은 curMax로, 가장 작은 값은 curMin으로 들어간다.
    - prevMax(이전 최댓값)에 현재 값을 곱한 것
    - prevMin(이전 최솟값)에 현재 값을 곱한 것
    - 현재 값
- 답은 최댓값을 갱신하며 구한다. (ans)

## Solution #1

```jsx
var maxProduct = function(nums) {
    
    let prevMax = prevMin = ans = nums[0];
    
    for(let i = 1; i<nums.length; i++) {
        let curMax, curMin;
        
        curMax = Math.max(prevMax * nums[i], nums[i], prevMin*nums[i]);
        curMin = Math.min(prevMax * nums[i], nums[i], prevMin*nums[i]);
        
        prevMax = curMax;
        prevMin = curMin;
        
        ans = Math.max(curMax, ans);
        
    }
    return ans

};
```