# Trim a Binary Search Tree

Given the `root` of a binary search tree and the lowest and highest boundaries as `low` and `high`, trim the tree so that all its elements lies in `[low, high]`. Trimming the tree should **not** change the relative structure of the elements that will remain in the tree (i.e., any node's descendant should remain a descendant). It can be proven that there is a **unique answer**.

Return *the root of the trimmed binary search tree*. Note that the root may change depending on the given bounds.

### 문제 해석

- 이진 탐색 트리의 root 그리고 가장 작고, 가장 큰 범위 low와 high가 주어질 때, 트리를 다듬어서 low, high만 남게 하라. 트리를 다듬는 것은 요소들의 상대관계를 바꾸는 것은 아니고 트리 안에 남겨야 한다.
- 다듬어진 이진 탐색 트리의 root를 반환하라. root

**Example 1:**

![https://assets.leetcode.com/uploads/2020/09/09/trim1.jpg](https://assets.leetcode.com/uploads/2020/09/09/trim1.jpg)

```
Input: root = [1,0,2], low = 1, high = 2
Output: [1,null,2]

```

**Example 2:**

![https://assets.leetcode.com/uploads/2020/09/09/trim2.jpg](https://assets.leetcode.com/uploads/2020/09/09/trim2.jpg)

```
Input: root = [3,0,4,null,2,null,null,1], low = 1, high = 3
Output: [3,2,null,1]

```

**Example 3:**

```
Input: root = [1], low = 1, high = 2
Output: [1]

```

**Example 4:**

```
Input: root = [1,null,2], low = 1, high = 3
Output: [1,null,2]

```

**Example 5:**

```
Input: root = [1,null,2], low = 2, high = 4
Output: [2]

```

**Constraints:**

- The number of nodes in the tree in the range `[1, 104]`.
- `0 <= Node.val <= 104`
- The value of each node in the tree is **unique**.
- `root` is guaranteed to be a valid binary search tree.
- `0 <= low <= high <= 104`

### 제약조건:

- 트리의 노드 숫의 범위는 1~$10^4$
- 노드의 값은 0~ $10^4$
- 각각 트리의 노드는 유일한 값이다.
- root는 이진 탐색 트리를 보장한다.

# 접근법

### 이진 탐색 트리의 규칙

- 노드의 left는 항상 작은 값, 노드의 right는 항상 큰 값이 와야 한다.

### 문제의 조건

- low, high에 의해 노드의 최솟값, 노드의 최댓값 범위가 제한된다.

# Solutions

### Solution #1

```tsx
var trimBST = function(root, low, high) {
    if(!root) return null;
    
    if(root.val < low) {
        return trimBST(root.right, low, high)
    }
    
    if(root.val > high) {
        return trimBST(root.left, low, high) 
    }
    
    root.left = trimBST(root.left, low, high);
    root.right = trimBST(root.right, low, high);
    
    return root;
};
```

### 해설

- 회귀와 DFS를 사용해 풀이한다.
- root 값이 없으면 null을 반환한다.
- root 값이 high 보다 크거나, low보다 작으면 제한에 벗어나는 값이므로, 트리에서 제외한다. 이 때 high보다 더 크다는 것은 이진 트리에 법칙에 의해 right 값도 high보다 당연히 클 것이므로 root의 left로 해서 다시 함수를 호출한다. 반대의 경우도 마찬가지.
- 값이 high low 범위내에 있다면 이제 다음 레벨로 옮기므로 각각 left, right로 호출한다.
- 즉, high low 범위에서 벗어난 값들은 제외하고 root부터 tree node를 붙여나간다고 생각하면 된다.