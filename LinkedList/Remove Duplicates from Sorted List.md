# Remove Duplicates from Sorted List

Given the `head` of a sorted linked list, *delete all duplicates such that each element appears only once*. Return *the linked list **sorted** as well*.

**Example 1:**

![https://assets.leetcode.com/uploads/2021/01/04/list1.jpg](https://assets.leetcode.com/uploads/2021/01/04/list1.jpg)

```
Input: head = [1,1,2]
Output: [1,2]

```

**Example 2:**

![https://assets.leetcode.com/uploads/2021/01/04/list2.jpg](https://assets.leetcode.com/uploads/2021/01/04/list2.jpg)

```
Input: head = [1,1,2,3,3]
Output: [1,2,3]

```

**Constraints:**

- The number of nodes in the list is in the range `[0, 300]`.
- `100 <= Node.val <= 100`
- The list is guaranteed to be **sorted** in ascending order.

# Solution

```jsx
var deleteDuplicates = function(head) {
    let dummy = new ListNode();
    dummy = head;
    
    while(head !== null) {
        if(head.next !== null && head.val === head.next.val) {
            head.next = head.next.next;
        }
        else {
            head = head.next;
        }
    }
    return dummy 
};
```

해설 :

- Pointer로 지정하기 위한 dummy 데이터를 선언한다.
- head를 순회하면서 head의 next값이 존재하고, head의 값과 head.next값이 같다면 중복이 있다는 의미이므로 제거한다.
- 만약 중복이 없다면 다음 노드로 넘어간다.
- head를 끝까지 순회하면 dummy를 반환한다.