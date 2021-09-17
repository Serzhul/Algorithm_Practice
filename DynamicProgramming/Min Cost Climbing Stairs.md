# Min Cost Climbing Stairs

You are given an integer array `cost` where `cost[i]` is the cost of `ith` step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index `0`, or the step with index `1`.

Return *the minimum cost to reach the top of the floor*.

번역 : 

 당신에게 cost라는 정수 배열이 주어졌다. cost[i]는 i번째 계단의 비용을 말한다.

비용을 지불하면, 당신은 1단 혹은 2단씩 올라갈 수 있다.

당신은 또한 index 0 혹은 1부터 출발 할 수 있다.

꼭대기에 도달하기 위한 최소 비용을 반환하라.

**Example 1:**

```
Input: cost = [10,15,20]
Output: 15
Explanation: Cheapest is: start on cost[1], pay that cost, and go to the top.

```

**Example 2:**

```
Input: cost = [1,100,1,1,1,100,1,1,100,1]
Output: 6
Explanation: Cheapest is: start on cost[0], and only step on 1s, skipping cost[3].

```

**Constraints:**

- `2 <= cost.length <= 1000`
- `0 <= cost[i] <= 999`

# Solutions

### Solution #1

```jsx
var minCostClimbingStairs = function(cost) {
    /*
	- Bottom up strategy
	- Iterative
	- Memoization
	
	Trick: At index [i], you only need to know the min cost 
					when stepping on [i - 1] and [i - 2]. 
					This is a slight variation on fibonacci.
    */
    
    if (cost.length === 1) return 0;
    if (cost.length === 2) return Math.min(cost[0], cost[1]);
    
    let minCostTwoBefore = cost[0];
    let minCostOneBefore = cost[1];
    
    for (let n = 2; n < cost.length; n++) {
        const minCostAtCurrent = cost[n] + Math.min(minCostOneBefore, minCostTwoBefore);
        
        minCostTwoBefore = minCostOneBefore;
        minCostOneBefore = minCostAtCurrent;
    }
        
    return Math.min(minCostOneBefore, minCostTwoBefore);
};
```

- DP 대표적인 문제 피보나치 수열을 응용한 문제이다.
- 문제의 핵심은 두 가지다.
    - top에 도달하기 까지 1~2스텝씩 이동할 수 있다는 점
    - 시작점을 index 0 또는 index 1로 시작할 수 있다는 점이다.
- 위 조건들을 통해 전체 계단의 길이가 1 또는 2일 때는 쉽게 구할 수 있다.
    - 1일 때는 당연히 하나 밖에 없으므로 코스트가 들지 않는다. ⇒ 0을 반환한다.
    - 2일 때는 index 0과 index 1 중 코스트가 낮은 계단을 선택하면 된다. ⇒ 둘 중 최솟값 return
- 그 다음 부터가 핵심인데, 먼저 초깃값을 저장하기 위해 2개의 변수(index 0, index 1)를 선언한다.
- 반복문을 시행하는데 2부터 끝까지 반복하되, cost를 누적하게 된다.
    - minCostAtCurrent라는 변수는 둘 중에 작은 값을 선택하고 거기다 현재 위치의 코스트를 더한 값을 구한다. (이 과정이 총 코스트가 더 작은 값으로 이동한 것이다.)

### 참조

- Leetcode Discussion에서 최다 투표를 받은 문제 접근법
- 일반적으로 재귀함수와 메모아이제이션을 활용한 방식을 Top-down 방식이라고 한다.
- 일반적으로 반복문을 통해 값을 저장하는 형태를 Bottom-up 방식이라고 한다.

**Step 1 - sub문제들의 참조 관계를 파악한다. 이 문제에서 참조 관계는 다음과 같다.**

```jsx
// mincost(i) = cost[i]+min(mincost(i-1), mincost(i-2))

// Base cases:
mincost(0) = cost[0]
mincost(1) = cost[1]
```

- 최소 비용은 인덱스의 비용 + (한 칸 이전 비용 혹은 두 칸 이전 비용 중 작은 값)
    - 기본 케이스(시작점)는 0 또는 1

**Step 2 - 참조 관계를 재귀형태로 변형한다.**

```jsx
// Recursive Top Down - O(2^n) Time Limit Exceeded
function minCostClimbingStairs(cost) {
	let n = cost.length;
	return Math.min(minCost(cost, n-1), minCost(cost, n-2));
}
function minCost(cost, n) {
	if (n < 0) return 0;
	if (n==0 || n==1) return cost[n];
	return cost[n] + Math.min(minCost(cost, n-1), minCost(cost, n-2));
}

```

- 탑 다운 방식의 재귀 함수
- 이 방식으로도 값은 구할 수 있지만 시간 복잡도가 $O(2^n)$ 으로 매우 비효율적이다.

**Step 3 - 최적화 1 재귀를 위한 memoization을 추가한다.**

```jsx
// Top Down Memoization - O(n) 1ms
let dp = [];

function minCostClimbingStairs(cost) {
	let n = cost.length;
	dp = new Array(n)
	return Math.min(minCost(cost, n-1), minCost(cost, n-2));
}
 function minCost(cost, n) {
	if (n < 0) return 0;
	if (n==0 || n==1) return cost[n];
	if (dp[n] != 0) return dp[n];
	dp[n] = cost[n] + Math.min(minCost(cost, n-1), minCost(cost, n-2));

	return dp[n];
}

```

**Step 4 - 최적화 2 Bottom Up DP - 재귀방식을 반복방식으로 변환한다. - 재귀 스택을 제거한다.**

```jsx
// Bottom up tabulation - O(n) 1ms
function minCostClimbingStairs(cost) {
	let n = cost.length;
	let dp = new Array(n);
	for (let i=0; i<n; i++) {
		if (i<2) dp[i] = cost[i];
		else dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]);
	}
	return Math.min(dp[n-1], dp[n-2]);
}

```

**Step 5 - 최적화 3 공간 복잡도 개선**

```jsx
// Bottom up computation - O(n) time, O(1) space
function minCostClimbingStairs(cost) {
	let n = cost.length;
	let first = cost[0];
	let second = cost[1];
	if (n<=2) return Math.min(first, second);
	for (let i=2; i<n; i++) {
		let curr = cost[i] + Math.min(first, second);
		first = second;
		second = curr;
	}
	return Math.min(first, second);
}
```