class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        n = len(nums)
        i = 0
        j = n-1
        index = 0

        while index <= j:
            element = nums[index]

            if element == 0:
                nums[i] , nums[index] = nums[index], nums[i]
                i+=1
                index+=1
            elif element == 1:
                index+=1
            else:
                nums[j], nums[index] = nums[index], nums[j]
                j-=1
