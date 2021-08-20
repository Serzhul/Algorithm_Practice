# Max Points on a Line

Given an array of `points` where `points[i] = [xi, yi]` represents a point on the **X-Y** plane, return *the maximum number of points that lie on the same straight line*.

**Example 1:**

![https://assets.leetcode.com/uploads/2021/02/25/plane1.jpg](https://assets.leetcode.com/uploads/2021/02/25/plane1.jpg)

```
Input: points = [[1,1],[2,2],[3,3]]
Output: 3

```

**Example 2:**

![https://assets.leetcode.com/uploads/2021/02/25/plane2.jpg](https://assets.leetcode.com/uploads/2021/02/25/plane2.jpg)

```
Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4

```

**Constraints:**

- `1 <= points.length <= 300`
- `points[i].length == 2`
- `104 <= xi, yi <= 104`
- All the `points` are **unique**.

# Solutions

### Solution #1

### T**he Idea**

1. 기본적으로 브루트 포스 방식(이중 for문)이고, 주어진 점에 대해 같은 선 위에 있는 모든 점을 찾는 것이다.
2. 중복되는 점들도 카운트 된다는 것을 명심할 것.
3. JS에서 큰 숫자들을 계산할 때는 1000000.0 * 을 사용할 것.

```jsx
var maxPoints = function(points) {
    if (points.length < 2|| points == null) return points.length;
    let max = 2;
    for (let i=0;i<points.length;i++) {
        let [p1x, p1y] = points[i];
        let samePoint = 1, map = {'base':0}; // to avoid when map = {}, the max value is -Infinity
        for (let j=i+1;j<points.length;j++) {
            if (points[i][0] == points[j][0] && points[i][1] == points[j][1]) {
                samePoint++;
            } else {
                let [p2x, p2y] = points[j];
                let slope = 1000000.0 * (p2y - p1y)/(p2x - p1x);
                if (!Number.isFinite(slope)) slope = "v";
                else if (Number.isNaN(slope)) slope = "h";
                map[slope] = map[slope]+1||1;
            }   
        }
        max = Math.max(Math.max(...Object.values(map))+samePoint, max);
    }
    return max;
};
```

해설 :

- 만약 포인트의 점이 2보다 작거나 null이면 그대로 return (최대 개수와 동일)
- max는 2점 ⇒ 문제에서 최대 점의 한 쌍은 2개라고 했으므로
- points 각 요소의 점들을 p1x, p1y라고 정의
- 같은 점(samePoint)은 1, map이라는 객체를 선언 해 'base'라는 키 값에 0을 부여함
- 투 포인트로 두 점을 비교하는데, 만약 x,y 좌표가 같다면 같은 점이므로 samePoint를 증가시킴
- 만약 다르다면 p1x, p1y 와 p2x, p2y을 비교해서, 경사(slope)를 구함.
- 만약 경사가 수직이면(slope가 유한하지 않다. 즉 무한하다) slope = 'v'
- 만약 경사가 수평이면(slope가 없다는 의미이므로) slope = h
- 만약 둘다 아니라면 계산된 값이 slope값이 들어갈 것이므로, 같은 경사에 있는 값들을 카운트해서 map에 넣어준다.
- 다 계산이 됐으면 마지막으로 최댓값을 계산한다. 만약 samePoint가 있다면 그것을 포함한 최댓값을 최댓값으로 한다.

### Solution #2

```jsx
var getGCD = function(a, b) {
    return b === 0 ? a : getGCD(b, a % b);
}

var getSlope = function (p1, p2) {
    var xDiff = p1[0] - p2[0];
    var yDiff = p1[1] - p2[1];
    if (xDiff === 0) return 'y';
    if (yDiff === 0) return 'x';
    var gcd = getGCD(xDiff, yDiff);
    xDiff /= gcd;
    yDiff /= gcd;
    return `${xDiff}/${yDiff}`;
}

/**
 *@param {number[][]} points
 *@return {number}
 */
var maxPoints = function(points) {
    var len = points.length;
    if (len < 3) return len;
    var max = 0;
    for (var i = 0; i < len; i++) {
        var map = new Map();
        var sameCount = 0;
        var curMax = 0;
        for (var j = i + 1; j < len; j++) {
            if (points[j][0] === points[i][0] && points[j][1] === points[i][1]) {
                sameCount++;
                continue;
            }
            var slope = getSlope(points[i], points[j]);
            if (!map.has(slope)) map.set(slope, 1);
            else map.set(slope, map.get(slope) + 1);
            curMax = Math.max(curMax, map.get(slope));
        }
        max = Math.max(max, curMax + sameCount + 1);
    }
    return max;
};
```

### 핵심 아이디어

- 경사를 어떻게 계산할 것인가 ⇒ 두 점의 좌표를 비교해서 경사를 구함.
- 두 점의 좌표를 어떻게 비교할 것인가 ⇒ 이중 포문을 사용해 각 좌표끼리의 경사를 모두 구함
- 최댓값을 어떻게 구할 것인가 ⇒ 같은 점 역시 최댓값에 포함한다, hash map을 사용해 경사를 키 값으로 해서 중복된 값이 있으면 그 값을 추가해서 점의 갯수를 구한다.