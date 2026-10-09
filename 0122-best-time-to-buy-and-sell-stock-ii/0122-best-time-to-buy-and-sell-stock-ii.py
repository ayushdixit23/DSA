class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        n = len(prices)
        minimum = float("inf")
        profit = 0

        for i in range(n):
            if prices[i] < minimum:
                minimum = prices[i]
            else:
                profit += (prices[i] - minimum)
                minimum = prices[i]
        
        return profit