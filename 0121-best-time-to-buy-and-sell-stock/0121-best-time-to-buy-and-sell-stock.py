class Solution:
    def maxProfit(self, nums: List[int]) -> int:
        n = len(nums)
        minimum = float("inf")
        maximum = float("-inf")
        profit = 0

        for i in range(n):
            if nums[i] < minimum:
                minimum = nums[i]
                maximum = nums[i]
            else:
                maximum = max(maximum,nums[i])

                profit_here = maximum - minimum
                profit = max(profit, profit_here)
        return profit