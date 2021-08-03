# Merge Two Sorted List

Merge two sorted linked lists and return it as a **sorted** list. The list should be made by splicing together the nodes of the first two lists.

**Example 1:**

![https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)

```
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

```

**Example 2:**

```
Input: l1 = [], l2 = []
Output: []

```

**Example 3:**

```
Input: l1 = [], l2 = [0]
Output: [0]

```

**Constraints:**

- The number of nodes in both lists is in the range `[0, 50]`.
- `100 <= Node.val <= 100`
- Both `l1` and `l2` are sorted in **non-decreasing** order.

# Solution

```jsx
var mergeTwoLists = function(l1, l2) {
    
    let mergedList = new ListNode();
    let pointer = mergedList;
    
    while(l1 !== null && l2 !== null) {
        
        if(l1.val <= l2.val) {
            mergedList.next = l1;
            l1 = l1.next;
        }
        else {
            mergedList.next = l2;
            l2 = l2.next;
        }
        
        mergedList = mergedList.next
    }
    
    mergedList.next = l1||l2;
    
    return pointer.next

};
```

### 해설 :

- 먼저 두 list를 병합하기 위해서 하나의 빈 링크드리스트가 필요하다. 그래서 mergedList라는 변수로 Node를 만들어 준다. 단, 이 노드는 직접 추가하면서 순회를 해야 하므로, return값을 보여주기 위한 pointer 변수 역시 만들어준다.
- 이제 while문을 사용해 순회하게 되는데, 순회 범위는 두 개의 list가 모두 끝에 도달할 때까지이다. 따라서 l1 ≠= null, l2 ≠= null 이라는 조건으로 순회한다.
- 병합 정렬 방식은 두 값을 비교해 작은 값이 먼저 들어가는 것이므로, 두 개를 비교해 작은 값을 먼저 추가해준다. 단 여기서 주의할 점은 값을 넣는 것이 아닌 node를 넣는다는 점이다.
- node를 넣고 나서는 각각의 리스트와 mergedList도 다음 스텝으로 넘어간다.
- 순회가 끝나고 나면 마지막으로 남은 node를 mergedList에 추가하고, 앞서 선언한 pointer의 next값을 반환한다. (pointer가 아닌 next를 반환하는 이유는 초깃값은 0으로 들어가 있기 때문)