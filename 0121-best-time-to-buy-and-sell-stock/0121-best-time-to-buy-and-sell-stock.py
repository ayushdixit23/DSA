class Solution:
    def maxProfit(self, nums: List[int]) -> int:
        n = len(nums)

        if n == 1:
            return 0

        minimum = float("inf")
        max_profit = 0

        for i in range(n):
            element = nums[i]
            if element < minimum:
                minimum = element
            else:
                max_profit = max(max_profit, (element - minimum))
        return max_profit
