# Intersection of Two Arrays II

Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must appear as many times as it shows in both arrays and you may return the result in **any order**.

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

```

**Example 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
```

# Solutions

### Solution #1

```jsx
var intersect = function(nums1, nums2) {
    
    let obj = {};
    
    let mainArr = nums1.length > nums2.length ? nums1 : nums2;
    let subArr = mainArr === nums1 ? nums2 : nums1;
    
    for(let i = 0; i<mainArr.length; i++) {
        if(!obj["main" + mainArr[i]]) obj["main"+mainArr[i]] = 1;
        else obj["main"+mainArr[i]]++;
    }
    
    for(let j = 0; j<subArr.length; j++) {
        if(obj["main"+subArr[j]] && obj["main"+subArr[j]] >= 1) {
            if(obj["intersect"]) obj["intersect"] = [...obj["intersect"], subArr[j]]
            else obj["intersect"] = [subArr[j]]
            obj["main"+subArr[j]]--;
        }
    }
    
    if(!obj["intersect"]) return [];
    
    return obj["intersect"]
    // nums1의 배열에서 있던 값이 num2의 배열에도 있는지 여부를 판단하면 된다. 
    // 2개의 배열을 정렬하고 겹치는 부분만 반환하는 방법
    //
```

### Solution #2

```jsx
var intersect = function(nums1, nums2) {
    obj = {};
    result = [];
    for(let i of nums1){
        obj[i] = obj[i] ? obj[i]+1 : 1
    }
    for(let i of nums2){
        if(obj[i]){
            obj[i]--
            result.push(i)
        }
    }
    return result
};
```