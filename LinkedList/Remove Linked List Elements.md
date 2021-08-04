# Remove Linked List Elements

# Solution

- iterate the nodes in original order and move them to the head of the list one by one.

(노드들을 원래 순서대로 순회하고 그것들을 하나씩 헤드로 옮긴다.)

```jsx
let removeElements = function(head, val) {
    let dummy=new ListNode(-1);

    dummy.next=head;

    head=dummy;

    while(dummy.next!==null){
        if(dummy.next.val===val){
            dummy.next=dummy.next.next;
        }
        else{
            dummy=dummy.next;
        }
    }
    return head.next;  
};
```

### 해설

- 처음 시작하는 dummy 노드를 -1 값으로 설정한다. (0으로 하지 않는 이유는 undefined나 null 등도 0으로 들어가기 때문에 확실히 구분해주기 위해서)  ⇒ 순회하며 값을 제거하기 위한 리스트가 필요함.
- head는 dummy node가 앞에 추가된 새로운 링크드 리스트로 교체한다.
- 언제까지 반복하냐 ⇒ [dummy.next](http://dummy.next)가 null 일 때, 즉 linkedList가 끝날때까지 반복한다.
