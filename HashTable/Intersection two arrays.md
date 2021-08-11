# Intersection two arrays

Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must be **unique** and you may return the result in **any order**.

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

```

**Example 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

```

**Constraints:**

- `1 <= nums1.length, nums2.length <= 1000`
- `0 <= nums1[i], nums2[i] <= 1000`

# Solutions

Solution #1

- Use Object

```jsx
var intersection = function(nums1, nums2) {
    let numbers1 = {};
    let numbers2 = {};
    let answer = [];
    
    for(let num of nums1) {
        numbers1[num] ? numbers1[num]++ : numbers1[num] = 1;
    }
    
    for(let num of nums2) {
        numbers2[num] ? numbers2[num]++ : numbers2[num] = 1;
    }

    if(Object.keys(numbers1) >= Object.keys(numbers2)) {
        for(let num in numbers2) {
            if(Object.keys(numbers1).includes(num)) {
                answer.push(num)
            }
        } 
    }
    
    else if(Object.keys(numbers2) >= Object.keys(numbers1)) {
        for(let num in numbers1) {
            if(Object.keys(numbers2).includes(num)) {
                answer.push(num)
            }
        } 
    }
    
    return answer

};
```

### Solution #2

This is a Facebook interview question.They ask for the intersection, which has a trivial solution using a hash or a set.

Then they ask you to solve it under these constraints:O(n) time and O(1) space (the resulting array of intersections is not taken into consideration).You are told the lists are sorted.

Cases to take into consideration include:duplicates, negative values, single value lists, 0's, and empty list arguments. Other considerations might includes parse arrays.

```jsx
function intersections(l1, l2) {
    l1.sort((a, b) => a - b) // assume sorted
    l2.sort((a, b) => a - b) // assume sorted
    const intersections = []
    let l = 0, r = 0;
    while ((l2[l] && l1[r]) !== undefined) {
       const left = l1[r], right = l2[l];
        if (right === left) {
            intersections.push(right)
            while (left === l1[r]) r++;
            while (right === l2[l]) l++;
            continue;
        }
        if (right > left) while (left === l1[r]) r++;
         else while (right === l2[l]) l++;

    }
    return intersections;
}
```