# Two-Pointer in Linked List

고전적인 문제부터 시작해보자.

> 연결리스트가 주어지면, 그 안에 사이클이 있는지 정의하라.

 당신은 아마 **`해쉬테이블`** 을 떠올렸을 것이다. 하지만 `**투포인트 테크닉**`이라는 더 효율 좋은 해결법이 있다.

나머지 내용들을 읽기전에 스스로 한번 생각해보기 바란다.

 

 다른 두 주자가 다른 속도로 달리고 있다고 상상해보라. 만약 그들이 직선 도로를 달리고 있다면, 빠른 주자는 먼저 목적지에 도착할 것이다. 그러나 원형 트랙을 달리고 있다면 빠른 주자는 계속 달린다면 느린 주자를 따라잡을 수 있을 것이다.

 이것이 바로 연결리스트에서 두 포인터를 사용해 다른 속도를 만드는 방법이다.

1. 만약 사이클이 없다면, 빠른 포인터는 연결 리스트의 끝에서 멈출 것이다.
2. 만약 사이클이 있다면, 빠른 포인터는 결국 느린 포인터를 만날 것이다.

 이제 남은 문제는 이것이다.

> 두 포인터의 적절한 속도는 어떻게 되는가?

안전한 선택으로 빠른 포인터가 한 번에 `두 단계` 씩 움직일 때 느린 포인터는 `한 단계` 씩 움직일 수 있다.

 각각의 반복에서 빠른 포인터는 하나의 추가적 단계를 나아간다. 만약 사이클의 길이가 M이고, M번 반복한 후에 빠른 포인터는 분명히 한 사이클을 더 돌아 느린 포인터를 따라잡았을 것이다.

> 다른 방법은 무엇인가? 그것들이 작동하는가? 그것들이 좀 더 효율적인가?

# Linked List Cycle I

Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. **Note that `pos` is not passed as a parameter**.

Return `true` *if there is a cycle in the linked list*. Otherwise, return `false`.

**Example 1:**

```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

```

**Example 2:**

```
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

```

**Example 3:**

```
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.

```

**Constraints:**

- The number of the nodes in the list is in the range `[0, 104]`.
- `105 <= Node.val <= 105`
- `pos` is `1` or a **valid index** in the linked-list.

**Follow up:** Can you solve it using `O(1)` (i.e. constant) memory?

```jsx
var hasCycle = function(head) {
    
    let tortoise = hare = head;
    while (hare!== null && hare.next !== null) {
        tortoise = tortoise.next
        hare = hare.next.next
        if(tortoise === haree) {
            return true;
        }
    }

    return false;

};
```

해설 :

- 시작점을 각각 빠른(토끼) 포인터와, 느린 (거북이) 포인터로 선언한다.
- 반복할 때 토끼는 두 스텝씩(next.next), 거북이는 한 스텝씩 움직인다.
- 이 때 둘이 만나는 지점이 있다는 것은 사이클이 있다는 것이므로 true를 반환한다.
- 만약 토끼 포인터가 null에 도착할 때까지 만나지 못했다면 중간에 끝났다는 것이므로 false를 반환한다.
