class Solution:
    def search(self, nums: List[int], target: int) -> int:
        start = 0
        end = len(nums) - 1

        while start <= end:
            mid = (start + end) // 2
            element = nums[mid]

            if element == target:
                return mid
            elif element > target:
                end = mid - 1
            else:
                start = mid + 1
        return -1
