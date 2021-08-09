# Step Back From the Tail

# Directions

Given a linked list, return the element n spaces from the last node in the list.  Do not call the 'size'

method of the linked list.  Assume that n will always be less than the length of the list.

# Examples

```jsx
*const* list = new List();

list.insertLast('a');

list.insertLast('b');

list.insertLast('c');

list.insertLast('d');

fromLast(list, 2).data // 'b'
```

# Solutions

### Solution #1

```jsx
function fromLast(list, n) {
  let slow = list.getFirst();
  list = list.getFirst();
  for (let i = 0; i < n; i++) {
    list = list.next;
  }
  let fast = list;

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  return slow;
}
```

### Solution #2

```jsx
function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}
```