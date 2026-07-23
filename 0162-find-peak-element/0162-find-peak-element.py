class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        n = len(nums)

        if n == 1:
            return 0

        if nums[0] > nums[1]:
            return 0

        if nums[n-1] > nums[n-2]:
            return n-1

        start = 1
        end = n - 2

        while start <= end:
            mid = (start + end) // 2

            if nums[mid-1] < nums[mid] and nums[mid] > nums[mid+1]:
                return mid
            elif nums[mid-1] > nums[mid] and nums[mid] > nums[mid+1]:
                end = mid - 1
            elif nums[mid-1] < nums[mid] and nums[mid] < nums[mid+1]:
                start = mid + 1
            else:
                start = mid + 1
        return -1 