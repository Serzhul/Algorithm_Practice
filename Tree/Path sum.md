# Path sum

Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a **root-to-leaf** path such that adding up all the values along the path equals `targetSum`.

A **leaf** is a node with no children.

**Example 1:**

![https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg](https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg)

```
Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
Output: true

```

**Example 2:**

![https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg](https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg)

```
Input: root = [1,2,3], targetSum = 5
Output: false

```

**Example 3:**

```
Input: root = [1,2], targetSum = 0
Output: false

```

**Constraints:**

- The number of nodes in the tree is in the range `[0, 5000]`.
- `1000 <= Node.val <= 1000`
- `1000 <= targetSum <= 1000`

# Solutions

### Solution #1

```tsx
var hasPathSum = function(root, sum) {

	if(!root) return false
	
	if(!root.left && !root.right) {
		return sum === root.val;
	}

	return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);

}
```

### Feedback

- 회귀에 대한 연습이 많이 필요해 보인다.
- 안 풀릴 때는 고정관념을 깨자. 이번 문제의 경우 노드의 값을 더할 생각만 했지 주어진 sum 값에서 node를 뺄 생각을 못했다... 풀 수 있다는 집착이 오히려 내 사고를 가로막았던 케이스.
- Symmetric과 targetsum문제의 공통점은 root를 기준으로 left와 right로 나눠서 양 쪽의 값을 비교했다는 점이 있다. 앞으로 비슷한 문제가 나오면 비슷한 방식으로 접근할 수 있을 것.