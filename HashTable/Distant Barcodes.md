# Distant Barcodes

In a warehouse, there is a row of barcodes, where the `ith` barcode is `barcodes[i]`.

Rearrange the barcodes so that no two adjacent barcodes are equal. You may return any answer, and it is guaranteed an answer exists.

번역 :

 창고에는 가공되지 않은 바코드들이 barcodes 배열로 표현할 수 있다.

바코드들을 재정렬해서 두 인접한 바코드가 동등하도록 만들어라. 모든 값 들에는 정답이 있다.

**Example 1:**

```
Input: barcodes = [1,1,1,2,2,2]
Output: [2,1,2,1,2,1]

```

**Example 2:**

```
Input: barcodes = [1,1,1,1,2,2,3,3]
Output: [1,3,1,3,1,2,1,2]

```

**Constraints:**

- `1 <= barcodes.length <= 10000`
- `1 <= barcodes[i] <= 10000`

# Solutions

문제 접근 방법

- 바코드를 새로 나열하는 방식을 정의한다. 단 인접하는 바코드의 숫자는 서로 다른 패턴이 와야한다.
- 예시를 살펴보면 숫자가 번갈아 가면서 나오는 걸 알 수 있는데, 문제에서도 밝혔듯이 패턴만 일치하면 숫자가 먼저 오고 나중에 오고는 상관 없다.
- 그 패턴은 빈도수에 따라 달려있는데, 가장 많은 빈도수의 숫자들이 가장 먼저 채워자고, 그 다음 많은 숫자, 그 다음 많은 숫자로 반복되는 것이다. 따라서 가장 먼저 구해야 할 것은 반복되는 숫자들의 빈도수를 구하는 것이다.
- 이를 구하기 위한 방법으로 JavaScript에서는 객체나 해시맵을 사용할 수 있다. 이번 문제에서는 해시맵을 사용해 접근했다.

### Solution #1

```jsx
var rearrangeBarcodes = function(barcodes) {
    
    let map = new Map();
    const ans = [];
    
    for (let code of barcodes) {
        map.set(code, (map.get(code) ||  0) + 1);
    }
    
    // maxHeap => hashMap에서 빈도수 높은 순으로 정렬
    const maxHeap = Array.from(map.keys()).sort(((a,b) => map.get(b) - map.get(a)))
    const len = barcodes.length;
    let idx = 0;
    
    for(let i = 0; i<maxHeap.length; i++) {
        
        let count = map.get(maxHeap[i]);
        
        while(count--) {
            ans[idx] = maxHeap[i];
            
            idx += 2
            
            if(idx >= len) idx = 1;
            
        }
    }
    
    return ans
};
```

- 문제해서 map은 해시맵을, ans는 반환하기 위한 값을 담기 위한 배열을 의미한다.
- for문을 통해 barcodes 배열의 값을 해시맵에 set한다. 이 때 주의 할점은 map.get 값이 존재하지 않으면 0, 존재하면 + 1에 해당하는 값을 넣어준다.
- 반복문이 끝나면 해시맵이 구성되는데, 우리는 빈도수에 따라 우선적으로 배열을 채울것이기 때문에 정렬을 해줄 필요가 있다. 이는 maxHeap 방식으로 구현할 수 있는데, 해시맵을 maxHeap 방식으로 구성하는 것은 다음과 같다.

```jsx
const maxHeap = Array.from(map.keys()).sort(((a,b) => map.get(b) - map.get(a)))
```

사견) 해당 패턴은 이 문제 외에도 유용하게 사용될 수 있으므로 외워두는 것이 좋을 것 같다.

- 이제 maxHeap 배열을 얻었는데 이는 빈도수에 따른 숫자 바코드 숫자를 순서대로 담고 있다. 이제 이 배열로 채워주는 방식을 정의해야한다.
- 먼저 우리는 barcodes 배열의 길이를 초과하지 않아야하므로 해당 값을 사용하기 위해  변수로 정의한다.
- 또한 빈도수 만큼 반복해서 채워줄 것이기 때문에 while문을 사용한다. 또한 한 칸씩 떨어뜨려서 넣을 것이므로 인덱스 값도 필요하다.
- 이제 실제 삽입하는 로직은 다음과 같다.
    - 먼저 maxHeap에서 구한 키 값들을 for문으로 반복한다. (순서대로 채워넣기 위해)
    - 해당 key의 값들을 해시맵에서 가져온다. 빈도수 만큼 똑같이 바코드를 채우기 위함이다.
    - 이제 while문을 통해 빈도수만큼 배열을 채워나간다. 값은 maxHeap의 값이 되고, 인덱스는 0부터 시작한다. 단 1칸씩 띄어서 삽입하므로 2씩 더해준다.
    - 주의할 점은 barcodes 길이를 초과하면 안된다는 것이다. 따라서 인덱스가 barcodes 배열 길이보다 커지면 값을 1로 초기화 해준다. (0은 빈도수가 가장 높은 값이 이미 들어가 있으므로)
    - 완성한 배열을 반환한다.