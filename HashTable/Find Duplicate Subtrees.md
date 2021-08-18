# Find Duplicate Subtrees

Given the `root` of a binary tree, return all **duplicate subtrees**.

For each kind of duplicate subtrees, you only need to return the root node of any **one** of them.

Two trees are **duplicate** if they have the **same structure** with the **same node values**.

**Example 1:**

![https://assets.leetcode.com/uploads/2020/08/16/e1.jpg](https://assets.leetcode.com/uploads/2020/08/16/e1.jpg)

```
Input: root = [1,2,3,4,null,2,4,null,null,4]
Output: [[2,4],[4]]

```

**Example 2:**

![https://assets.leetcode.com/uploads/2020/08/16/e2.jpg](https://assets.leetcode.com/uploads/2020/08/16/e2.jpg)

```
Input: root = [2,1,1]
Output: [[1]]

```

**Example 3:**

![https://assets.leetcode.com/uploads/2020/08/16/e33.jpg](https://assets.leetcode.com/uploads/2020/08/16/e33.jpg)

```
Input: root = [2,2,2,3,null,3,null]
Output: [[2,3],[3]]

```

**Constraints:**

- The number of the nodes in the tree will be in the range `[1, 10^4]`
- `200 <= Node.val <= 200`

# Solutions

### Solution #1

```jsx
var findDuplicateSubtrees = function(root) {
  const map = new Map(), res = []
  dfs(root, map, res)
  return res
};

function dfs(root, map, res){
  if(!root) return '#'
  const subtree = `${root.val}.${dfs(root.left,map,res)}.${dfs(root.right, map,res)}`
  map.set(subtree,(map.get(subtree)||0) + 1)
  if(map.get(subtree) === 2){
    res.push(root)
  }
  return subtree
}
```

해설 :

- 키 값으로 분류하기 위한 Map을 선언하고, 중복된 노드를 담기 위한 배열을 선언한다.
- DFS로 순회하기 위해 함수를 만드는데, root와 위에서 선언한 두 개의 콜렉션을 인자로 갖는다.
- 만약 루트에 값이 없다면 #을 반환하고 subtree라는 임시변수를 만들어 노드들의 val 값을 조합해서 string으로 만든다. (중복값을 체크하기 위함)
- map에다가는 subtree값을 set하는데 map에 subtree값이 있다면 1을 아니면 0을 추가한다.
- map에서 subtree 값을 가져왔을 때 2라는 것은 중복이 있단 의미이므로, res 배열에 root값을 담는다.
- subtree를 반환해 재귀적으로 반복되도록 한다.