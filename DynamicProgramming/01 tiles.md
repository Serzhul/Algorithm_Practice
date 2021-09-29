# 01타일

## 문제

지원이에게 2진 수열을 가르쳐 주기 위해, 지원이 아버지는 그에게 타일들을 선물해주셨다. 그리고 이 각각의 타일들은 0 또는 1이 쓰여 있는 낱장의 타일들이다.

어느 날 짓궂은 동주가 지원이의 공부를 방해하기 위해 0이 쓰여진 낱장의 타일들을 붙여서 한 쌍으로 이루어진 00 타일들을 만들었다. 결국 현재 1 하나만으로 이루어진 타일 또는 0타일을 두 개 붙인 한 쌍의 00타일들만이 남게 되었다.

그러므로 지원이는 타일로 더 이상 크기가 N인 모든 2진 수열을 만들 수 없게 되었다. 예를 들어, N=1일 때 1만 만들 수 있고, N=2일 때는 00, 11을 만들 수 있다. (01, 10은 만들 수 없게 되었다.) 또한 N=4일 때는 0011, 0000, 1001, 1100, 1111 등 총 5개의 2진 수열을 만들 수 있다.

우리의 목표는 N이 주어졌을 때 지원이가 만들 수 있는 모든 가짓수를 세는 것이다. 단 타일들은 무한히 많은 것으로 가정하자.

### 입력

첫 번째 줄에 자연수 N이 주어진다. (1 ≤ N ≤ 1,000,000)

### 출력

첫 번째 줄에 지원이가 만들 수 있는 길이가 N인 모든 2진 수열의 개수를 15746으로 나눈 나머지를 출력한다.

# 문제 풀이 핵심 아이디어

- 사용할 수 있는 타일의 종류는 2개
- 두 가지 종류의 타일을 이용하여, N 길이의 수열을 만드는 `**모든 경우의 수**`를 구한다.
- N이 최대 1,000,000이므로 시간 복잡도 $O(N)$으로 해결해야 함
- 한번 계산한 값은 다시 구하지 않는다.
- 작은 문제에서 구한 값들을 다시 풀어야 될 때 반환하는 식으로 작성

### 타일을 왼쪽에서 오른쪽으로 이어서 붙인다고 가정

- N이 3일 경우 ⇒ 111, 100, 001 3가지
- N이 4일 경우 ⇒ 1111, 1100, 1001, 0011, 0000 5가지

### 동적 프로그래밍 문제를 풀기 위해서는 `점화식(인접한 항들 사이의 관계식)`을 세워야 함

ex)

- D[i] = '수열의 길이가 i일때의 경우의 수'
- D[3] = '3', D[4] = '5'
- 타일을 왼쪽에서 오른쪽으로 이어서 붙인다고 가정할 때, 길이가 i인 수열을 형성하는 방법은 다음의 2가지 방법 뿐
    - 1 타일을 붙이거나 (i-1 + 1)
    - 00 타일을 붙인다. (i-2 + 2)
- 따라서 D[i] 가 수열의 길이가 i일 때의 경우의 수 라고 한다면, $D[i] = D[i-1] + D[i-2]$

```jsx
function cal(n) {
		const dp = Array.from({length: 30}, (_) => 0);

		dp[1] = 1;
		dp[2] = 2;

		for(let i = 3; i<n;i++) {
			dp[i] = dp[i-1] + dp[i-2];
		}

		return dp[n];

}
```