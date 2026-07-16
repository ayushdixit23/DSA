class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        index = 0
        i = 0
        j = n-1

        while index <= j:
            if nums[index] == 1:
                index+=1
            elif nums[index] == 0:
                nums[index] , nums[i] = nums[i] , nums[index]
                index+=1
                i+=1
            else:
                nums[index] , nums[j] = nums[j] , nums[index]
                j-=1