# Tree Width with Level Width

# Directions

Given the root node of a tree, return an array where each element is the width of the tree at each level.

# Example

```jsx
Given:

  0

/ |  \

1   2   3

|       |

4       5

Answer: [1, 3, 2]
```

# Pseudo Code

- BFS와 유사, 단 특정 식별자에 해당하는 문자를 추가하고, 해당 문자가 처음으로 왔다는 것은 모든 탐색이 끝났다는 카운터를 계산하도록 로직 설정

# Solution

```jsx
function levelWidth(root) {
  const array = [root, "s"];
  const counters = [0];

  while (array.length > 1) {
    const node = array.shift();

    if (node === "s") {
      counters.push(0);
      array.push("s");
    } else {
      array.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}
```