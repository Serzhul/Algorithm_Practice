# Circular Lists

# Directions

Given a linked list, return true if the list is circular, false if it is not.

# Examples

```jsx
*const* l = new List();

*const* a = new Node('a');

*const* b = new Node('b');

*const* c = new Node('c');

l.head = a;

a.next = b;

b.next = c;

c.next = b;

circular(l) // true
```

# Solutions

### Solution #1

```jsx
function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (slow !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
```

### Solution #2

```jsx
function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
```