# Contains Duplicate II

Given an integer array `nums` and an integer `k`, return `true` if there are two **distinct indices** `i` and `j` in the array such that `nums[i] == nums[j]` and `abs(i - j) <= k`.

**Example 1:**

```
Input: nums = [1,2,3,1], k = 3
Output: true

```

**Example 2:**

```
Input: nums = [1,0,1,1], k = 1
Output: true

```

**Example 3:**

```
Input: nums = [1,2,3,1,2,3], k = 2
Output: false

```

**Constraints:**

- `1 <= nums.length <= 105`
- `109 <= nums[i] <= 109`
- `0 <= k <= 105`

# Solutions

### Solution #1

- Obj 사용

```jsx
var containsNearbyDuplicate = function(nums, k) {
    // nums[i] == nums[j] 
    // abs(i - j) <= k.
    
    let obj = {};
    
    for(let i = 0; i<nums.length; i++) {
        if(!obj[nums[i]]) {
            obj[nums[i]] = [i];
        }
        else {
            for(let el of obj[nums[i]]) {
                if(Math.abs(el-i) <= k) return true;
            }
                obj[nums[i]] = [...obj[nums[i]], i];
            }
        }
    return false
};
```

### Solution #2

- Two pointer 사용

```jsx
var containsNearbyDuplicate = function(nums, k) {
    if(!k) return false;
    const set = new Set();
    let i=0;
    let j =1;
    
    set.add(nums[0]);
    while(j<nums.length){
        if(j-i>k){
            set.delete(nums[i]);
            i++;
        }
        if(set.has(nums[j])) return true;
        set.add(nums[j]);
        j++;
    }
    
    return false;
};
```