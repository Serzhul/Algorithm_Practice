# Valid Sudoku

Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated **according to the following rules**:

1. Each row must contain the digits `1-9` without repetition.
2. Each column must contain the digits `1-9` without repetition.
3. Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.

**Note:**

- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
- Only the filled cells need to be validated according to the mentioned rules.

**Example 1:**

![https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)

```
Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

```

**Example 2:**

```
Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the5 in the top left corner being modified to8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

```

**Constraints:**

- `board.length == 9`
- `board[i].length == 9`
- `board[i][j]` is a digit or `'.'`.

# Solutions

### Solution #1

**Thinking**

기본적으로 3가지 부분을 확인해야 한다:

1. 각 행에 중복이 있는가? 있으면 `return false`
2. 각 열에 중복이 있는가? 있으면 `return false`
3. 각 3x3 박스에 중복이 있는가? 있으면 `return false`

모든 조건을 통과하면 마지막에 return true.

해시 셋을 사용해서 문제를 품

**Representations**

먼저 행과 열 부분을 해결한다.

- 다차원 배열이므로, 각각의 인덱스를 이중 for문으로 반복한다.

```jsx
for (let i = 0; i < 9; i++) {
	let row = new Set(); /* row Set */
	let col = new Set(); /* column Set */
	for(let j = 0; j < 9; j++) {
		board[i][j] /* iterating row by row */
		board[j][i] /* iterating column by column */
	}
}
```

만약에 보지 않은 숫자가 있으면, set에 추가하되, set에 이미 있으면 중복이 있다는 의미이므로 false를 반환한다.

```jsx
/* example */
if (item != '.') {
	if (row.has(item)) return false;
	row.add(item);
}
```

3x3 박스는 ij로 표시할 수 있다(i는 행의, j는 열의 index를 의미

```
00 01 02 | 03 04 05 | 06 07 08
10 11 12 | 13 14 15 | 16 17 18  // i = 0, 1, 2
20 21 22 | 23 24 25 | 26 27 28
------------------------------
30 31 32 | 33 34 35 | 36 37 38
40 41 42 | 43 44 45 | 46 47 48  // i = 3, 4, 5
50 51 52 | 53 54 55 | 56 57 58
------------------------------
60 61 62 | 63 64 65 | 66 67 68
70 71 72 | 73 74 75 | 76 77 78  // i = 6, 7, 8
80 81 82 | 83 84 85 | 86 87 88

```

# `i`,`j`, `3` 그리고 `/` `%`을  사용해 횡단 로직 구현하기

```
- 수평 횡단이 끝나면 수직 횡단을 시작한다.

/ 을 사용해 수직 횡단을 한다.

Math.floor(0 / 3) = 0
Math.floor(1 / 3) = 0
Math.floor(2 / 3) = 0

% 을 사용해 수평 횡단을 한다.
0 % 3 = 0
1 % 3 = 1
2 % 3 = 2

```

3x3 박스를 다음과 같이 표현할 수 있다.

```jsx
for (let i = 0; i < 9; i++) {
	for(let j = 0; j < 9; j++) {
		board[3 * Math.floor(i/3) + Math.floor(j/3)][3 * i%3 + j%3]
	}
}
```

```jsx
var isValidSudoku = function(board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set(),
        col = new Set(),
        box = new Set();

    for (let j = 0; j < 9; j++) {
      let _row = board[i][j];
      let _col = board[j][i];
      let _box = board[3*Math.floor(i/3)+Math.floor(j/3)][3*(i%3)+(j%3)]

      if (_row != '.') {
        if (row.has(_row)) return false;
        row.add(_row);
      }
      if (_col != '.') {
        if (col.has(_col)) return false;
        col.add(_col);
      }

      if (_box != '.') {
        if (box.has(_box)) return false;
        box.add(_box);
      }
    }
  }
  return true
};
```