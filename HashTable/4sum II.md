# 4sum II

Given four integer arrays `nums1`, `nums2`, `nums3`, and `nums4` all of length `n`, return the number of tuples `(i, j, k, l)` such that:

- `0 <= i, j, k, l < n`
- `nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0`

**Example 1:**

```
Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
Output: 2
Explanation:
The two tuples are:
1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0

```

**Example 2:**

```
Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
Output: 1

```

**Constraints:**

- `n == nums1.length`
- `n == nums2.length`
- `n == nums3.length`
- `n == nums4.length`
- `1 <= n <= 200`
- `228 <= nums1[i], nums2[i], nums3[i], nums4[i] <= 228`

# Solutions

### Solution #1

### 아이디어

1. 두 개의 map을 활용해 (A,B) 쌍과 (C,D) 쌍의 2가지 sum의 문제로 줄인다. key는 sum이 되고, 값은 sum의 빈도수가 된다.
2. map1을 순회하면서 각각의 상쇄되는 값 (0 - 현재 값)을 계산한다. 만약 상쇄되는 값이 map2에 있다면 빈도수를 가져와서 둘을 곱하고 total에 더한다.

```jsx
var fourSumCount = function(A, B, C, D) {
  
	const sumTwoList = function(x,y){
        let len = x.length;
        let result = new Map();
        for(let i = 0; i < len; i++){
            for(let j = 0; j < len; j++){
               let c = x[i] + y[j];
               result.set(c, result.get(c) + 1 || 1); 
            }
        }
        return result;
    }
    
    let sum1 = sumTwoList(A,B);
    let sum2 = sumTwoList(C,D);
    let total = 0;
   
    sum1.forEach((value,key) =>{
        let offset = 0 - key;
        if(sum2.has(offset)){
            total += (sum2.get(offset) * sum1.get(key));
        }
    })
    return total;
}
```

# Feedback

- 핵심 아이디어는 4개를 한꺼번에 계산하려고 하기 보다는 둘을 쪼개서 경우의 수를 나눠서 합치는 방식으로 생각하는 것이다. ⇒ 나눠서 계산하려고 생각하지 못했다.
- map의 사용방식에 더욱 익숙해질 것 ⇒ object와 유사한점이 많이 때문에 외우는 것은 어렵지 않을 것.
- map을 iterating 할 때 value가 첫 번째, key가 두 번째 인자로 온다는 것을 기억할 것.