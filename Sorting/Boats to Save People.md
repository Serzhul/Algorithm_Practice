# Boats to Save People

You are given an array `people` where `people[i]` is the weight of the `ith` person, and an **infinite number of boats** where each boat can carry a maximum weight of `limit`. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most `limit`.

Return *the minimum number of boats to carry every given person*.

번역 :

 사람들의 몸무게를 담고있는 배열 people이 주어지고, limit의 크기만큼 최대 몸무게를 태울 수 있는 보트가 무한대로 있다. 각각의 보트는 최대 두 사람을 동시에 태울 수 있으며, 최대 몸무게의 합이 limit 만큼 태울 수 있다.

 보트로 모든 사람을 옮기는 데 가장 적은 횟수는 얼마인지 구하고 반환하라.

**Example 1:**

```
Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)

```

**Example 2:**

```
Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)

```

**Example 3:**

```
Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)

```

**Constraints:**

- `1 <= people.length <= 5 * 104`
- `1 <= people[i] <= limit <= 3 * 104`

# Solutions

### Solution #1

```jsx
var numRescueBoats = function(people, limit) {
    
    people.sort((a,b) => a-b);
    
    let curIdx = 0;
    let count = 0;
    let rest = 0;
    
    for(let i = people.length - 1; i>=0; i--) {
        if(people[curIdx] + people[i] <= limit) {
            count++;
            curIdx++;
        }
        else {
            rest++;
        }
        
        if(curIdx >= i) {
            break;
        }
    }
    
    return count + rest;
}
```

- 문제의 핵심은 한번에 1 사람만 태울지 2 사람을 태울지를 구분해서 보트의 개수를 최적화 하는 것이다.
- 한 사람만 태우는 경우는 다음과 같다.
    - 한 사람이 limit와 동일할 때
    - 한 사람과 가장 몸무게가 작은 사람의 몸무게를 합쳤을 때 limit를 초과할 때
- 위 조건에 따라 한 사람만 태울 때와 두 사람을 태울 때를 구분한 후 두 값을 합친 값이 최적화된 보트의 수가 된다.
- 투 포인터 전략을 사용한다.

## 의사코드

- 배열을 정렬해 사람을 몸무게 순으로 나열한다.
- 현재 비교할 사람의 인덱스를 curIdx라 정의한다. 그리고 두 사람이 타는 보트의 수를 count라고 하고 한 사람이 타는 보트의 수를 rest라 한다. (남아 있는 사람들은 1사람씩 타야 된다는 의미)
- 현재 비교할 사람은 0번부터 시작하므로, 배열은 마지막 사람(몸무게가 가장 많은 사람)부터 비교한다. 그 이유는 위에서도 언급했듯이 현재 비교하는 사람의 몸무게와 비교하는 사람의 몸무게를 합쳐서 limit를 초과하면 한 사람씩 타야되기 때문이다.
- 조건에 따라 두 사람이 타는 조건을 만족하면  count와 curIdx를 하나씩 증가한다.
- 만약 조건에 만족하지 못하는 경우 한명씩 배를 타야 하므로 rest 값을 증가한다.
- 만약 curIdx가 배열의 index와 만나면 반복문을 종료한다.
- 마지막에 count와 rest를 합한 값을 반환한다.