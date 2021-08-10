# Events

# Directions

Create an 'eventing' library out of the Events class.  

The Events ***class*** should have methods 'on', 'trigger', and 'off'.

# Implementation

## Class Events

```jsx
class Events {
  constructor() {
    this.events = {};
  }
}
```

## On Method

```jsx
// Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }
```

- 만약 events 객체에 eventName에 해당하는 event가 있다면, callback 내용을 추가하고, 없으면 새로운 callback 배열을 삽입한다.

## Trigger Method

```jsx
// Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  }
```

- 만약 events 객체에 eventName에 해당하는 값이 있다면, callback 배열을 순회하면서 실행한다.

## Off Method

```jsx
// Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName];
  }
```

- delete operator는 object에서 해당 키 값에 관한 내용을 지워준다.