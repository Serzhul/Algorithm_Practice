# Jump game

You are given an integer array `nums`. You are initially positioned at the array's **first index**, and each element in the array represents your maximum jump length at that position.

Return `true` *if you can reach the last index, or* `false` *otherwise*.

번역: 당신에게는 정수형 배열 nums가 주어졌다. 당신은 배열의 맨 첫번째 인덱스에 위치해 있으며, 각각의 요소는 해당 위치에서 최대로 건너뛸 수 있는 길이를 나타낸다. (만약 2이면 1칸, 2칸 이동할 수 있음)

만약 마지막 index에 도달할 수 있으면 true를 아니면 false를 반환하라

**Example 1:**

```
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

```

**Example 2:**

```
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

```

**Constraints:**

- `1 <= nums.length <= 104`
- `0 <= nums[i] <= 105`

# Solutions

### Greedy Solution

 전형적인 그리디 알고리즘으로 풀 수 있는 문제이며, 각 단계별로 최적화 해나가는 문제라고 할 수 있다.

0부터 마지막까지 nums 배열을 순회하면서, max 값을 갱신한다.

max 값은 다음과 같이 표시할 수 있다. 

```jsx
max = Math.max(max, idx + nums[idx])
```

 또한 max가 target(마지막 index)보다 큰지 단계별로 체크한다.

하지만 조건에 도달하기 전에 체크를 통해 최적화를 해줄 필요가 있다. 가령 value가 0이면 점프할 수 없지만, 이전 단계에 점프할 수 있는 가능성이 있는지 찾아봐야한다.

즉, 이런 경우에는 최대값을 다시 구한다. 

종료 조건은 다음과 같다.

```jsx
if (max <= idx && nums[idx] === 0) { return false; }
```

## Solution code

```jsx
let max = 0;
    let idx = 0;
    let target = nums.length -1
    
    while(idx < nums.length) {
        max = Math.max(max, idx + nums[idx]);
        
        if(max >= target) return true;
        
        if(max <= idx && nums[idx] === 0 ) return false;
        
        idx++
    }

    
};
```

### Dynamic Programming

- greedy 방식을 응용하여 풀지만, 해시맵을 통한 최적화를 이용한다.
- 인덱스를 key로 하고 해당 위치에 도달가능한지 여부를 값으로 해서 기록한다.
- helper 함수 로직
    - 먼저 idx가 해시 맵에 있는지 체크한다. 체크해서 있으면 그 값을 가져와 반환한다.
    - 만약 idx가 nums의 마지막 인덱스보다 크거나 같으면 true를 반환한다.
    - 만약 nums[idx]가 0이면 false를 반환한다.

```jsx
var canJump = function(nums) {
    const memo = new Map();
    
    function permute(idx) {
        if(memo.has(idx)) return memo.get(idx)
        if(idx >= nums.length-1) return true;
        if(nums[idx] === 0) return false;
        
        for(let i = nums[idx]; i >= 1; i--) {
            if(permute(idx + i)) {
                memo.set(idx, true);
                return true
            }
        }
        memo.set(idx, false);
        return false;
    }
    return permute(0);
};
```