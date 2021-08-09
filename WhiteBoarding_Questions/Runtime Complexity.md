# Runtime Complexity

# What is Runtime Complexity?

 알고리즘의 성능을 표현하는 방식으로서 인풋의 갯수가 증가할수록 얼마나 더 많은 시간과 연산과정이 필요한가에 대한 기준으로 측정할 수 있다.

- 가령, 만약 인풋의 갯수를 일반적인 경우와 그 보다 두 배로 측정할 경우, 연산 과정에서 얼마나 더 많은 시간이 걸리고, 과정이 필요한가?
- Steps 알고리즘의 경우, 인풋을 1씩 증가할때마다 n*n만큼 연산 과정이 더 늘어난다. (1일때는 1번, 2일때는 4번, 3일 때는 9번...)

    ⇒ 즉 Steps의 runtime 복잡도는 $N^2$ 이며 quadratic runtime이라고도 한다. 

### Examples

### String Reverse

- Each additional character = 1 step through 1 loop
- This would be 'N', or 'linear' runtime'.

# Varieties of runtime complexity

## Constant Time

### Expression : $1$

### Description

- No matter how many elements we're working with, the algorithm/operation/whatever will always take the same amount of time

## Logarithmic Time

### Expression : $log(n)$

### Description

- You have this if doubling the number of elements you are iterating over doesn't double the amount of work. Always assume that searching operations are $log(n)$

## Linear Time

### Expression: $n$

### Description

- Iterating through all elements in a collection of data. If you see a for loop spanning from '0' to 'array.length', you probably have 'n', or linear runtime

## Quasilinear Time

### Expression : $nlog(n)$

### Description

- You have this if doubling the number of elements you are iterating over doesn't double the amount of work.
- Always assume that any sorting operation is $nlog(n)$

## Quadratic Time

### Expression : $n^2$

### Description

- Every element in a collection has to be compared to every other element. 'The handshake problem'

## Exponential Time

### Expression: $2^n$

### Description

- If you add a `single` element to a collection, the processing power required doubles

# Big 'O' Notation

- Another way to describe runtime complexity

### $O(n)$ ⇒ Linear

### $O(1)$ ⇒ Constant

### $O(n^2)$ ⇒ Quadratic

# Identifying Runtime Complexity

### Iterating with a simple for loop through a single collection?

⇒ Probably $O(n)$

- String Reverse

### Iterating through half a collection?

⇒ Still $O(n)$. There are no constants in runtime.

### Iterating through two 'different' collections with separate for loops?

⇒ $O(n+m)$

### Two nested for loops iterating over the same collection?

⇒ $O(n^2)$

- Pyramids Algorithms

### Two nested for loops iterating over different collections?

⇒ $O(n*m)$

### Sorting?

⇒ $O(nlog(n))$

### Searching a sorted array?

⇒ $O(log(n))$