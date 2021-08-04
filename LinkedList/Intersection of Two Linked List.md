# Intersection of Two Linked List

Given the heads of two singly linked-lists `headA` and `headB`, return *the node at which the two lists intersect*. If the two linked lists have no intersection at all, return `null`.

For example, the following two linked lists begin to intersect at node `c1`:

![https://assets.leetcode.com/uploads/2021/03/05/160_statement.png](https://assets.leetcode.com/uploads/2021/03/05/160_statement.png)

The test cases are generated such that there are no cycles anywhere in the entire linked structure.

**Note** that the linked lists must **retain their original structure** after the function returns.

**Custom Judge:**

The inputs to the **judge** are given as follows (your program is **not** given these inputs):

- `intersectVal` - The value of the node where the intersection occurs. This is `0` if there is no intersected node.
- `listA` - The first linked list.
- `listB` - The second linked list.
- `skipA` - The number of nodes to skip ahead in `listA` (starting from the head) to get to the intersected node.
- `skipB` - The number of nodes to skip ahead in `listB` (starting from the head) to get to the intersected node.

The judge will then create the linked structure based on these inputs and pass the two heads, `headA` and `headB` to your program. If you correctly return the intersected node, then your solution will be **accepted**.

**Example 1:**

```
Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Intersected at '8'
Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes before the intersected node in A; There are 3 nodes before the intersected node in B.

```

**Example 2:**

```
Input: intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1
Output: Intersected at '2'
Explanation: The intersected node's value is 2 (note that this must not be 0 if the two lists intersect).
From the head of A, it reads as [1,9,1,2,4]. From the head of B, it reads as [3,2,4]. There are 3 nodes before the intersected node in A; There are 1 node before the intersected node in B.

```

**Example 3:**

```
Input: intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2
Output: No intersection
Explanation: From the head of A, it reads as [2,6,4]. From the head of B, it reads as [1,5]. Since the two lists do not intersect, intersectVal must be 0, while skipA and skipB can be arbitrary values.
Explanation: The two lists do not intersect, so return null.

```

**Constraints:**

- The number of nodes of `listA` is in the `m`.
- The number of nodes of `listB` is in the `n`.
- `0 <= m, n <= 3 * 104`
- `1 <= Node.val <= 105`
- `0 <= skipA <= m`
- `0 <= skipB <= n`
- `intersectVal` is `0` if `listA` and `listB` do not intersect.
- `intersectVal == listA[skipA] == listB[skipB]` if `listA` and `listB` intersect.

**Follow up:**

Could you write a solution that runs in

```
O(n)
```

time and use only

```
O(1)
```

memory?

## My solution

```jsx
var getIntersectionNode = function (headA, headB) {
  let nodeA = headA;
  let nodeB = headB;
  let i = 0;
  let j = 0;
  while (nodeA !== null) {
    nodeA = nodeA.next;
    i++;
  }
  while (nodeB !== null) {
    nodeB = nodeB.next;
    j++;
  }
  if (i > j) {
    for (let k = 0; k < i - j; k++) {
      headA = headA.next;
    }

    while (headA !== null && headB !== null) {
      if (headA === headB) {
        return headA;
      }
      headA = headA.next;
      headB = headB.next;
    }
  } else {
    for (let k = 0; k < j - i; k++) {
      headB = headB.next;
    }

    while (headA !== null && headB !== null) {
      if (headA === headB) {
        return headA;
      }
      headA = headA.next;
      headB = headB.next;
    }
  }
  return null;
};
```

해설 :

- 교차점을 찾기 위해서 두 리스트 간의 길이의 차이를 구해야 한다고 생각했다. 그래서 원본을 복사하고 처음부터 끝까지 순회하면서 각 리스트의 길이를 알아냈다.(i, j)
- 그 다음에는 둘의 차이만큼 스킵하는 과정을 거쳤다. 더 노드가 많다는 것은 교차점 이전의 노드가 많다는 것을 의미하기 때문에 그만큼 생략할 수 있기 때문이다.
- 스킵한 후에는 서로 겹치는 부분을 찾을때까지 순회하고 찾으면 return, 못찾으면 null을 return한다.

### Better Solution

```jsx
let getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }
  let r1 = headA;
  let r2 = headB;
  while (r1 !== r2) {
    r1 = r1.next;
    r2 = r2.next;
    if (r1 === r2) {
      return r1;
    }
    if (r1 === null) {
      r1 = headB;
    }
    if (r2 === null) {
      r2 = headA;
    }
  }
  return r1;
};
```

해설 :

- 앞서 풀어본 사이클을 응용해 푼 방식이다. 처음엔 시작점이 다르기 때문에 먼저 도착한 리스트는 반대쪽 리스트부터 순회를 시작한다.
- 그럼 두 리스트의 차이가 줄어듦으로 서로 교차점에서 만나게 된다.
-
