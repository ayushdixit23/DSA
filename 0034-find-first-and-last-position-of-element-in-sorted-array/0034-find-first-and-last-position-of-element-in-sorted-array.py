class Solution:
    def lower_bound(self, nums, target):
        start = 0
        end = len(nums) - 1
        index = -1

        while start <= end:
            mid = (start + end) // 2
            if nums[mid] == target:
                index = mid
                end = mid - 1
            elif nums[mid] > target:
                end = mid - 1
            else:
                start = mid + 1

        return index


    def upper_bound(self, nums, target):
        start = 0
        end = len(nums) - 1
        index = -1

        while start <= end:
            mid = (start + end) // 2
            if nums[mid] == target:
                index = mid
                start = mid + 1
            elif nums[mid] > target:
                end = mid - 1
            else:
                start = mid + 1

        return index
    
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        lower_index = self.lower_bound(nums,target)
        upper_index = self.upper_bound(nums,target)

        return [lower_index,upper_index]