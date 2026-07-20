class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        start = 0
        end = len(nums) - 1

        if nums[end] < target:
            return end + 1
        
        if nums[start] > target:
            return 0

        index = -1

        while start <= end:
            mid = (start + end) // 2
            element = nums[mid]

            if element >= target:
                index = mid
                end = mid - 1
            else:
                start = mid + 1

        return index
