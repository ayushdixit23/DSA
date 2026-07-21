class Solution:
    def findMin(self, nums: List[int]) -> int:
        n = len(nums)
        start = 0
        end = n - 1
        minimumValue = float("inf")

        while start <= end:
            mid = (start + end) // 2

            if nums[start] <= nums[mid]:
                minimumValue = min(minimumValue, nums[start])
                start = mid + 1
            else:
                minimumValue = min(minimumValue, nums[mid])
                end = mid - 1

        return minimumValue
