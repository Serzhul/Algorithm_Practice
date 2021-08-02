# Doubly Linked List Overview

# 정의

---

양방향 링크드 리스트는 단방향 링크드 리스트와 비슷하게 동작하지만, `prev라는 참조 필드가 추가된다`.  

prev를 통해 현재 노드의 이전 노드를 알 수 있다. 

예시를 살펴보자.

![https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/17/screen-shot-2018-04-17-at-161130.png](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/17/screen-shot-2018-04-17-at-161130.png)

녹색 화살표는 prev 필드가 어떻게 동작하는 지 보여준다.

# 노드 구조

---

단방향 링크드 리스트와 유사하며 head node를 전체 리스트를 대표하는 노드로 사용한다.

# 동작

---

단방향 링크드 리스트와 정확히 같은 방식으로 데이터에 접근할 수 있다 :

1. `무작위 위치에 접근할 수 없다.`
2. `head부터 i번째까지 노드를 순회해야한다.`
3. 시간복잡도는 최악의 경우 $O(N)$이며, N은 링크드 리스트의 길이이다.

    추가와 삭제에 관해서는 prev 속성때문에 좀더 까다로워졌다. 

# 추가하기  - 양방향 링크드 리스트

---

만약 `현재 노드(cur)` 뒤에 새로운 노드를 추가하고 싶다면, 두 가지 단계로 나눠야 한다.

1. `cur의` `prev를 prev의` `next`와 연결하고, `next`는 원래 `next 노드의 prev`와 연결한다.

![https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/28/screen-shot-2018-04-28-at-173045.png](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/28/screen-shot-2018-04-28-at-173045.png)

1. `prev의 next`를 다시 `cur`와 연결한다. 

    ![https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/29/screen-shot-2018-04-28-at-173055.png](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/29/screen-shot-2018-04-28-at-173055.png)

단방향 링크드 리스트와 유사하며 노드 추가의 시간과 공간 복잡도는 둘다 $O(1)$이다. 

# ***An Example***

---

![https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/17/screen-shot-2018-04-17-at-161130.png](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/17/screen-shot-2018-04-17-at-161130.png)

노드 9를 6번 노드 뒤에 추가한다고 가정한다.

1. cur(노드9)의 `prev` (node 6) 와 `next` (node 15)에 각각 연결한다.

    ![https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/17/screen-shot-2018-04-17-at-202600.png](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/17/screen-shot-2018-04-17-at-202600.png)

2.  `prev` (node 6) 와 `next` (node 15) 를 `cur` (node 9)와 다시 연결한다.

    ![https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/18/screen-shot-2018-04-17-at-202643.png](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/18/screen-shot-2018-04-17-at-202643.png)

# 삭제하기 - 양방향 링크드 리스트

---

만약 현재 존재하는 노드를 양방향 링크드 리스트로부터 삭제하고 싶다면, 단순히 이전 노드(prev)를 다음 노드(next)에 연결하면 된다.

> 단항뱡 링크드리스트와 다르게, prev 필드를 통해 이전 노드를 쉽게 찾을 수 있다.

 이전 노드를 순회하지 않아도 되기 때문에 시간복잡도와 공간복잡도 둘 다 $O(1)$이다. 

# ***An Example***

---

![https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/17/screen-shot-2018-04-17-at-161130.png](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/17/screen-shot-2018-04-17-at-161130.png)

우리의 목표는 노드 6을 삭제하는 것이다.

따라서 이전 노드인 23과 다음 노드인 15를 서로 연결한다.

![https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/18/screen-shot-2018-04-18-at-142428.png](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/18/screen-shot-2018-04-18-at-142428.png)

노드 6은 이제 리스트안에 없다.