# Tree

# Directions

1) Create a node class.  The constructor should accept an argument that gets assigned

to the data property and initialize an empty array for storing children. 

The node ***class*** should have methods 'add' and 'remove'.

⇒ Node 

2) Create a tree class. 

The tree constructor should initialize a 'root' property to null.

⇒ Tree

3) Implement 'traverseBF' and 'traverseDF' on the tree class.  

Each method should accept a

function that gets called with each element in the tree.

# Node Implementation

### add(data)

 Given some data, create a new node and add it to the current node's 'children' array

```jsx
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }
  
}
```

## remove(data)

 Given some data, look at each child of the current node and remove any node with data === data

```jsx
remove(data) {
    this.children = this.children.filter((child) => child.data !== data);
  }
```

# Tree Implement

### Tree ⇒ set the constructor as null

```jsx
class Tree {
  constructor() {
    this.root = null;
  }

  
}
```

### Breadth First Traverse

```jsx
traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }
```

- root node를 배열에 담는다.
- 해당 배열의 값이 모두 없어질 때 까지 반복한다.
- root의 children(노드들) 값을 node에 저장한다.
- 그 다음 array의 뒤 쪽에 다시 추가하고

### Depth First Traverse

```jsx
traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
```