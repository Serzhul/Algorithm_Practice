# Validating a Binary Search Tree

# Directions

Given a node, validate the binary search tree, ensuring that every node's left hand child is

less than the parent node's value, and that every node's right hand child is greater than

the parent.

# Pseudo Code

- 온전한 Binary Search 구조가 되려면 root 노드의 왼쪽은 root 노드 값보다 작은값이 와야 하고 오른쪽은 큰 값이 와야한다. 또한 이 구조는 child 노드로 내려갈 때마다 동일하게 적용되야 한다.
- 이 값을 저장하기 위해 재귀함수를 호출할 때, 최솟값과 최댓값을 저장한다. 현재 노드를 기준으로 최솟값 최댓값을 계산하여 저장하고, 자식 노드들이 그 기준에 맞는지 체크한다.
- 한 번이라도 조건에 부합하지 않는 값이 나오면 false를 반환하고 모든 순회가 끝나도 이상이 없다면 true를 반환한다.

# Solution

```jsx
function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) {
    return false;
  }
  if (min !== null && node.data < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}
```