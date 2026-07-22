class Solution:
    def singleNonDuplicate(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]

        if nums[0] != nums[1]:
            return nums[0]
        
        if nums[n-1] != nums[n-2]:
            return nums[n-1]

        start = 1
        end = n - 2

        while start <= end:
            mid = (start + end) // 2
            if mid % 2 == 0:
                if nums[mid] != nums[mid - 1] and nums[mid] != nums[mid + 1]:
                    return nums[mid]
                elif nums[mid] == nums[mid - 1]:
                    end = mid - 2
                else:
                    start = mid + 2
            else:
                if nums[mid] != nums[mid - 1] and nums[mid] != nums[mid + 1]:
                    return nums[mid]
                elif nums[mid] == nums[mid - 1]:
                    start = mid + 1
                else:
                    end = mid - 1
