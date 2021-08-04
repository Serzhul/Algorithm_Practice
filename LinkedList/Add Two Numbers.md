# Add Two Numbers

You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order**, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example 1:**

![https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)

```
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

```

**Example 2:**

```
Input: l1 = [0], l2 = [0]
Output: [0]

```

**Example 3:**

```
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

```

**Constraints:**

- The number of nodes in each linked list is in the range `[1, 100]`.
- `0 <= Node.val <= 9`
- It is guaranteed that the list represents a number that does not have leading zeros.

# Solution

```jsx
const addTwoNumbers = (l1, l2) => {
    let result = new ListNode();
    let head = result;
    let carry = 0;
    
    while (l1 || l2) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        carry = parseInt(sum / 10);
        head.val = sum % 10;
        
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
        if (l1 || l2) {
            head.next = new ListNode();
            head = head.next;
        }
    }
    
    if (carry > 0) {
        head.next = new ListNode(carry);
    }
    
    return result;
};
```

### 해설

- merge 방식과 유사하게 풀이한다. 먼저 결괏값을 담을 노드(result)를 선언하고, 시작 포인터(head)를 설정한다.
- 또한 10보다 클 경우 십의 자리수는 그 다음 노드의 값에 더해야하기 때문에 저장하기 위한 변수(carry)를 선언한다.
- l1과 l2가 끝날때 까지 순회한다. 이때 l1, l2중 존재하는 값을 체크해서 sum 값을 구한다.
- carry는 10보다 작으면 0, 10보다 크면 1로 들어간다.
- head.val 는 sum을 10으로 나눈 나머지값으로 들어간다.
- l1 혹은 l2는 다음 값이 있다면 순회하고, l1과 l2 값이 하나라도 있다면 head에 빈 노드를 추가한다. ⇒ 다음 순회때 값을 담을 노드
- 순회가 끝나고 마지막에 carry가 남아있다면 마지막 노드에 carry값을 추가한다.

### Focus : Carry값을 어떻게 처리할 것인지, l1,l2 둘다 순회하는 경우를 어떻게 제어할 것인지 문제에 집중할 것.
