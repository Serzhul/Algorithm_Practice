# House Robber II

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are **arranged in a circle.** That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and **it will automatically contact the police if two adjacent houses were broken into on the same night**.

Given an integer array `nums` representing the amount of money of each house, return *the maximum amount of money you can rob tonight **without alerting the police***.

**Example 1:**

```
Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

```

**Example 2:**

```
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

```

**Example 3:**

```
Input: nums = [1,2,3]
Output: 3

```

**Constraints:**

- `1 <= nums.length <= 100`
- `0 <= nums[i] <= 1000`

# Solutions

### Solution #1

```jsx
function helper(arr) {
    let prev = 0;
    let curr = 0;
    let temp;
    
    for (let num of arr) {
        temp = curr;
        curr = Math.max(num + prev, curr);
        prev = temp;
    }
    return curr; 
}

function rob(nums) {
    if (nums.length === 1) return nums[0];
    let rob1 = nums.slice(0, nums.length - 1);
    let rob2 = nums.slice(1);

    rob1 = helper(rob1);
    rob2 = helper(rob2);

    return rob1 >= rob2 ? rob1 : rob2;  
};
```

### Solution #2

```jsx
var rob = function(nums) {
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);
    
    const dp1 = [nums[0]];
    
    const dp2 = [0, nums[1]];
    
    for(let i = 1; i<nums.length - 1; i++) {
        dp1[i] = Math.max((nums[i] + (dp1[i-2] || 0)), dp1[i-1]);
    }
    
    for(let i = 2; i<nums.length; i++) {
        dp2[i] = Math.max((nums[i] + dp2[i-2]), dp2[i-1]);
    }

    
    return Math.max(dp1.pop(), dp2.pop())
};
```