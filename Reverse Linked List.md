# Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

**Example 1:**

```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

**Example 2:**

```
Input: head = [1,2]
Output: [2,1]

```

**Example 3:**

```
Input: head = []
Output: []
```

# Solution

```jsx
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var reverseList = function(head) {
    if(!head) return null;
    let first = head;
    let reverse = new ListNode(first.val, null);
    let length = 0;
    
    while(first !== null) {
        length++;
        first = first.next;
    }
    first = head.next;
    while(length > 1) {
        reverse = new ListNode(first.val, reverse);
        first = first.next;
        length--;
    }
    
    return reverse

};
```

### 해설 (Top and Down)

- head 값이 없으면 null을 반환한다.
- 시작점 first에 head을 할당하고, reverse할 링크드 리스트를 선언한다.
- 링크드 리스트의 length를 구하기 위한 변수를 선언후, first(시작점) 부터 리스트 끝에 도달할때까지 반복해서 길이를 구한다.
- 그 다음 head의 next부터 순회하면서 reverse에 새로운 노드를 추가하는 방식으로 완성후 반환한다.