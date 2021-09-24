# Jump Game II

Given an array of non-negative integers `nums`, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

You can assume that you can always reach the last index.

번역

 양의 정수 배열 nums가 주어졌을 때, 당신은 배열의 첫번째 인덱스에 위치해 있다.

각 요소들은 해당 위치에서 최대로 점프할 수 있는 길이를 나타낸다.

당신의 목표는 최소의 점프 숫자로 목적지인 마지막 인덱스에 도달하는 것이다.

마지막 인덱스에 도달하지 못하는 경우는 없다.

**Example 1:**

```
Input: nums = [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.

```

**Example 2:**

```
Input: nums = [2,3,0,1,4]
Output: 2

```

**Constraints:**

- `1 <= nums.length <= 104`
- `0 <= nums[i] <= 1000`

# Solutions

- Jump game이 value가 0일 때(끝까지 도달하지 못하는 경우) 어떻게 처리할 것인가가 관건이었다면, Jump game II는 count가 올라가는 조건을 고려해서 로직을 작성해야 한다.
- 먼저 이전 값을 저장해두기 위해 prev라는 변수를 선언한다.(prev는 선언시점에 어떤 index도 가리키고 있지 않으므로 -1를 부여한다.
- 그리고 현재 인덱스 위치를 가리키기 위한 cur 변수를 선언한다.(문제에서 시작점이 index 최초라고 했으므로 0을 선언한다.)
- 마지막으로 정답을 계산하기 위한 count 변수를 선언한다.

- 반복문을 작성하되, cur가 nums.length-1보다 크거나 같게 되면 반복문을 종료해야 하므로 cur<nums.length-1을 조건으로 하는 for문을 작성한다.
- prev(이전에 도달했던 최대 index위치) 보다 i가 크다는 것은 아직 순회하지 못했다는 의미이므로, count를 증가시키며 prev를 cur로 갱신한다.
- cur는 매 순회마다 갱신하며,  기존의 cur와, 새로운 index를 비교해 더 큰 값으로 한다.

### Solution #1

```jsx
var jump = function(nums) {
    
    let prev = -1;
    let cur = 0;
    let count = 0;
    
    for(let i = 0; cur<nums.length-1; i++) {
        
        if(i>prev) {
            count++;
            prev = cur
        }
				cur = Math.max(cur, nums[i]+i);
    }
    return count
};
```