# Find the Winner of the Circular Game

There are `n` friends that are playing a game. The friends are sitting in a circle and are numbered from `1` to `n` in **clockwise order**. More formally, moving clockwise from the `ith` friend brings you to the `(i+1)th` friend for `1 <= i < n`, and moving clockwise from the `nth` friend brings you to the `1st` friend.

The rules of the game are as follows:

1. **Start** at the `1st` friend.
2. Count the next `k` friends in the clockwise direction **including** the friend you started at. The counting wraps around the circle and may count some friends more than once.
3. The last friend you counted leaves the circle and loses the game.
4. If there is still more than one friend in the circle, go back to step `2` **starting** from the friend **immediately clockwise** of the friend who just lost and repeat.
5. Else, the last friend in the circle wins the game.

Given the number of friends, `n`, and an integer `k`, return *the winner of the game*.

번역 :

- 게임을 플레이하고 있는 n명의 친구들이 있다.
- 친구들은 1번부터 n번까지 시계 방향으로 원을 그려 앉아 있다.
- i 번째에서 시계 방향으로 움직이면 i+1번째로 가고, n번째에서 시계 방향으로 가면 1번째 친구로 간다. (순환)
- 게임의 룰은 다음과 같다.
    1. 1번 친구부터 시작한다.
    2. 시계 방향으로 k명의 친구들을 센다. 
    3. 마지막으로 카운트된 친구는 게임에서 탈락한다.
    4. 1 명 이상의 친구들이 남아 있으면 탈락한 친구로부터 2번째 단계를 반복한다.
    5. 마지막으로 남은 친구가 게임에서 승리한다.
- 친구의 수 n과, 정수 k가 주어질 때, 게임의 승자를 반환하라.

**Example 1:**

![https://assets.leetcode.com/uploads/2021/03/25/ic234-q2-ex11.png](https://assets.leetcode.com/uploads/2021/03/25/ic234-q2-ex11.png)

```
Input: n = 5, k = 2
Output: 3
Explanation: Here are the steps of the game:
1) Start at friend 1.
2) Count 2 friends clockwise, which are friends 1 and 2.
3) Friend 2 leaves the circle. Next start is friend 3.
4) Count 2 friends clockwise, which are friends 3 and 4.
5) Friend 4 leaves the circle. Next start is friend 5.
6) Count 2 friends clockwise, which are friends 5 and 1.
7) Friend 1 leaves the circle. Next start is friend 3.
8) Count 2 friends clockwise, which are friends 3 and 5.
9) Friend 5 leaves the circle. Only friend 3 is left, so they are the winner.
```

**Example 2:**

```
Input: n = 6, k = 5
Output: 1
Explanation: The friends leave in this order: 5, 4, 6, 2, 3. The winner is friend 1.

```

**Constraints:**

- `1 <= k <= n <= 500`

# Solutions

### Solution #1

```jsx
function Node (val) {
    this.val = val;
    this.before = null;
    this.next = null;
}

function LinkedList () {
    this.head = null;
}

var findTheWinner = function(n, k) {
    
    const ll = new LinkedList();
    
    ll.head = new Node(1);
    
    let first = ll.head;
    
    for(let i = 2; i<=n; i++) {
        let temp = first;
        first.next = new Node(i);
        first = first.next;
        first.before = temp;
    }
    let temp = first;
    first.next = ll.head;
    first = ll.head;
    first.before = temp;
    
    for(let i = 0; i<k-1; i++) {
        first = first.next;
    }
    while(first.next) {

        first.next.before = first.before;
        first.before.next = first.next;
        if(first.before === first.next) return first.next.val;
        for(let i = 0; i<k; i++) {
            first = first.next;
        }

    }

};
```

### Solution #2

```jsx
var findTheWinner = function(n, k) {
  
    let arr = [];

    for(let i=1;i<=n;i++){
        arr.push(i)
    }

    function recursive(arr,index){
        if(arr.length>1){
            arr.splice(index,1);
            let count=k;
			      index-=1;
            while(count--){
                index += 1;
                if(!arr[index]) index=0
            }
            recursive(arr,index);
        }
        return arr
    }

    return recursive(arrr,k-1)[0]
};
```