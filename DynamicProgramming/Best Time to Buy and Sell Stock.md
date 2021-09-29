# Best Time to Buy and Sell Stock

You are given an array `prices` where `prices[i]` is the price of a given stock on the `ith` day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return `0`.

번역 

 price라는 배열은 각 요소가 i번째 날의 주식 가격을 의미한다.

이익을 극대화하기 위해 특정 날을 골라 주식을 다고 미래의 다른 날에 주식을 판다.

이 거래를 통해 낼 수 있는 최대 이익을 반환하라. 어떤 이익도 낼 수 없다면 0을 반환하라.

**Example 1:**

```
Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

```

**Example 2:**

```
Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

```

**Constraints:**

- `1 <= prices.length <= 105`
- `0 <= prices[i] <= 104`

# Solutions

### Solution #1

```jsx
var maxProfit = function(prices) {    

    let max = 0;
    let buyPrice = prices[0];
    let curMax = 0;
    
    for(let i = 1; i<prices.length; i++) {
        if(prices[i]-buyPrice < 0) {
            buyPrice = prices[i]
            continue;
        }
         curMax = Math.max(max, prices[i]-buyPrice);
        
         if(max < curMax) {
             max = curMax;
         }
    }
    return max
    
    
};
```