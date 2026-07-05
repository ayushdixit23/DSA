class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        n = len(nums)

        if n == 1:
            return 1

        j = 1
        element = nums[0]

        for i in range(1, n):
            if nums[i] != element:
                nums[j] = nums[i]
                j+=1
                element = nums[i]
        
        return j