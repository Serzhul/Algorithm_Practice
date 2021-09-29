# Best Time to Buy and Sell Stock II

You are given an integer array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

On each day, you may decide to buy and/or sell the stock. You can only hold **at most one** share of the stock at any time. However, you can buy it then immediately sell it on the **same day**.

Find and return *the **maximum** profit you can achieve*.

번역 :

정수 배열 prices가 주어졌고, price의 각 요소는 i번째 날의 주식의 가격을 의미한다.

각각의 날에 주식을 사거나 판다. 최대 하나의 주식을 킵할 수 있다. 

그러나 새로운 주식을 사려면 같은 날에 그 주식을 팔아야 한다.

얻을 수 있는 최대 이익을 찾아 반환하라.

**Example 1:**

```
Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7.

```

**Example 2:**

```
Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Total profit is 4.

```

**Example 3:**

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

```

**Constraints:**

- `1 <= prices.length <= 3 * 104`
- `0 <= prices[i] <= 104`

# Solutions

### Solution #1

```jsx
var maxProfit = function(prices) {
    
    let buyPrice = prices[0];
    let prevMax = 0;
    let curMax = 0; 
    let sum = 0;
    
    for(let i = 1; i<prices.length; i++) {
        
        if(prices[i] - buyPrice < 0) {
            buyPrice = prices[i];
        }
        
        curMax = Math.max(prevMax, prices[i]-buyPrice); 

        if(prevMax < curMax) {
            buyPrice = prices[i];
            sum += curMax;
            prevMax = 0;
        };
        
    }

    return sum
};
```