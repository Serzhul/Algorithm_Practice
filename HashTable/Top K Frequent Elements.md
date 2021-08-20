# Top K Frequent Elements

Given an integer array `nums` and an integer `k`, return *the* `k` *most frequent elements*. You may return the answer in **any order**.

**Example 1:**

```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

```

**Example 2:**

```
Input: nums = [1], k = 1
Output: [1]

```

**Constraints:**

- `1 <= nums.length <= 105`
- `k` is in the range `[1, the number of unique elements in the array]`.
- It is **guaranteed** that the answer is **unique**.

**Follow up:** Your algorithm's time complexity must be better than `O(n log n)`, where n is the array's size.

# Solutions

### Solution #1

```jsx
var topKFrequent = function(nums, k) {
    let obj = new Map();
    let max = 0;
    let answer = [];
    
    for (let j = 0; j < nums.length; j++) {
            obj.set(nums[j], obj.get(nums[j]) + 1 || 1);
     }

    for(let i = 1; i<= k; i++) {
        max = Math.max(...obj.values());
        let len = 0;
        
        obj.forEach((val,key) => {
            if(answer.length===k) return;
            if(val === max) {
            answer.push(key)
            obj.delete(key);
            }
        })
    }
    
    return answer

};
```

### Solution #2

```jsx
var topKFrequent = function(nums, k) {
    const freqMap = new Map();
    const bucket = [];
    const result = [];
    
    for(let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    for(let [num, freq] of freqMap) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }
    
    for(let i = bucket.length-1; i >= 0; i--) {
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length === k) break;
    }
    return result;
};
```

해석

- 각 반복 횟수를 구하기 위한 map(freqMap)과, 그 횟수를 저장하기 위한 배열 bucket, 그리고 그 중에서 max인 값을 구하기 위한 배열 result를 선언한다.
- 첫 번째 반복문은 nums 배열을 순회하면서 각 횟수마다 value를 더해 각 숫자가 몇번씩 반복되었는지 map에 저장한다.
- 두 번째 반복문은  freqMap에 저장한 key,value를 `가장 큰 횟수의 역순`으로 정렬하여 set로 추가함
- 세 번째 반복문은 해당 배열의 마지막 자리는 가장 횟수가 많은 숫자 이므로 뒤에서 부터 k를 만족할 때까지 추가한다.
- 추가한 값을 return 한다.

FeedBack

- 풀긴 풀었지만 정렬이 되있지 않아서 좋지 못한 알고리즘이 되었다. ⇒ 일단 횟수를 구했으면 새롭게 정렬하는 로직을 추가하면 훨씬 코드가 개선될 것 (속도)
- set를 사용해 중복을 제거하는 경우는 많으므로, 적극적으로 활용할 수 있도록 하자. map, set, object, array 활용법 숙달될 때까지 반복 연습