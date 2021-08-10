# Binary Search Tree

# Directions

1) Implement the Node ***class*** to create a binary search tree.  The constructor

should initialize values 'data', 'left', and 'right'.

2) Implement the 'insert' method for the Node class.  Insert should accept an argument

'data', then create an insert a new node at the appropriate location in the tree.

3) Implement the 'contains' method for the Node class.  

Contains should accept a 'data' argument and return the Node in the tree with the same value.

# Implementation

## Constructor

```jsx
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
```

- Binary Search는 항상 부모 노드보다 자식 노드의 왼쪽은 작은 값, 오른 쪽은 큰 값이 와야한다. 따라서 이를 구분 짓기 위해서 left와 right 값이 생성자로 선언되야 한다.

## Insert

```jsx
insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data && !this.left) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }
```

- 만약 삽입하려는 데이터가 현재 노드의 값보다 작다면 그 자식 노드가 있는지 찾아본다. 자식노드가 있다면 다시 그 자식 노드를 재귀함수로 호출해서 자식 노드가 없을 때  까지 찾은 후, 값을 비교해 값이 작다면 왼쪽, 크다면 오른쪽으로 삽입한다.

```jsx
contains(data) {
    console.log(this.data, data);
    if (this.data === data) {
      return this;
    }

    if (this.data < data && this.right) {
      this.right.contains(data);
    } else if (this.data > data && this.left) {
      this.left.contains(data);
    }

    return null;
  }
```

- 찾는 값이 갔다면 해당 트리가 값을 갖고 있다는 의미이므로 해당 값을 반환한다.
- 만약 값이 작거나 크다면 재귀를 통해 찾고 끝까지 같은 값을 못 찾으면 null을 반환한다.ㄴ