# Symmetric Tree

Given the `root` of a binary tree, *check whether it is a mirror of itself* (i.e., symmetric around its center).

**Example 1:**

![https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg](https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg)

```
Input: root = [1,2,2,3,4,4,3]
Output: true

```

**Example 2:**

![https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg](https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg)

```
Input: root = [1,2,2,null,3,null,3]
Output: false

```

**Constraints:**

- The number of nodes in the tree is in the range `[1, 1000]`.
- `100 <= Node.val <= 100`

# Solutions

### Solution #1

```tsx
var isSymmetric = function(root) {
    if (root == null) return true;
    
    return symmetryChecker(root.left, root.right);
};

function symmetryChecker(left, right) {
    if (left == null && right == null) return true; // If both sub trees are empty
    if (left == null || right == null) return false; // If only one of the sub trees are empty

    if (left.val !== right.val) return false; // If the values dont match up
    
	// Check both subtrees but travelled in a mirrored/symmetric fashion
	// (one goes left, other goes right)  and make sure they're both symmetric
    return symmetryChecker(left.left, right.right) &&
    symmetryChecker(left.right, right.left);
}
```

### Solution #2

```tsx
var isSymmetric = function(root) {
    return isMirror(root,root);
};

function isMirror(r1,r2){
    if (!r1 && !r2){
        return true;
    } else if (!r1 || !r2){
        return false;
    } else {
        return r1.val === r2.val && isMirror(r1.left, r2.right) && isMirror(r1.right,r2.left);
    }
}
```

### feedback

- Recursively 방식에 대한 연습이 더욱 필요하다.
- 이번 문제에서의 핵심은 left와 right 두 개를 다 비교해서 조건을 만족시켜야만 true를 반환하도록 유도하는데 있다. 즉, left, right 각각만 순회했던 때랑 달리. left의 left,right 그리고 right의 left right까지 다 비교하는 방식인 것이다.
- && 연산자를 사용해 결괏값을 비교해줄 수 있기 때문에 하나라도 false가 나왔다면 false, 둘 다 조건을 만족하면 true가 나오는 것을 통해 쉽게 구할 수 있다.