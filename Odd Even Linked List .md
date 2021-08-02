# Odd Even Linked List

Given the `head` of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return *the reordered list*.

The **first** node is considered **odd**, and the **second** node is **even**, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in `O(1)` extra space complexity and `O(n)` time complexity.

**Example 1:**

![https://assets.leetcode.com/uploads/2021/03/10/oddeven-linked-list.jpg](https://assets.leetcode.com/uploads/2021/03/10/oddeven-linked-list.jpg)

```
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]

```

**Example 2:**

![https://assets.leetcode.com/uploads/2021/03/10/oddeven2-linked-list.jpg](https://assets.leetcode.com/uploads/2021/03/10/oddeven2-linked-list.jpg)

```
Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]

```

**Constraints:**

- `n ==` number of nodes in the linked list
- `0 <= n <= 104`
- `106 <= Node.val <= 106`

# Solution

```jsx
var oddEvenList = function(head) {
  if (!head || !head.next) return head;
  let odd = head;
  let even = evenTop = head.next;
  
  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }
  
  odd.next = evenTop;
  return head;
};
```

### 해설

- 링크드리스트의 홀수 노드들과 짝수 노드들은 다르다. 그렇다면 짝수 리스트를 홀수 리스트의 꼬리에 붙이면 된다.
- 다른 링크드리스트와 마찬가지로 투 포인터를 설정한다. 하나는 홀수번째 노드 (odd), 다른 하나는 짝수번째 노드(even)
- 홀수번째노드는 첫번째 노드부터 시작하며, 짝수번째노드는 2번째 노드부터 시작한다. 그리고 먼저 홀수노드들이 정렬(1-3-5-7-9 ... )이 된다음 그 뒤에 짝수 노드들이 정렬되는 방식으로 반환해야한다.
- evenTop는 짝수 노드들의 시작점을 저장해놓는 변수로서 사용한다.
- 

```jsx
var oddEvenList = function(head) {
    let odds = new ListNode(0);
    let evens = new ListNode(0);
    let oddHead = odds
    let evenHead = evens
    let isOdd = true;
    
    while(head !== null) {
        if(isOdd) {
            odds.next = head;
            odds = odds.next;
        }
        else {
            evens.next = head;
            evens = evens.next
        }
    
        isOdd = !isOdd;
        head = head.next
    }
    evens.next = null;
    odds.next = evenHead.next
    return oddHead.next;
    
};
```

### 해설

- 홀수번째 노드와 짝수번째 노드를 만들기 위한 새로운 링크드 리스트를 만든다.
- 각각의 시작점을 head값으로 정하고 순회한다. 이때, 홀수째인지 아닌지를 체크하기 위한 변수(isOdd)도 선언한다.
- 순회하면서 각 노드들은 각각의 링크드리스트에 추가한다.
- 마지막에 짝수번째 링크드 리스트의 값은 null로 넣어주고 홀수번째 링크드리스트는 짝수번째 링크드 리스트의 값으로 넣어준다.
- 둘을 합친 링크드리스트를 반환한다.