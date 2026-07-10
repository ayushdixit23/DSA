class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        n = len(nums)

        if n == 1:
            return nums[0]

        total_sum = 0
        maximum = float("-inf")

        for i in range(n):
            total_sum += nums[i]
            maximum = max(maximum, total_sum)

            if total_sum < 0:
                total_sum = 0

        return maximum
