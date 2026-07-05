class Solution:
    def removeElement(self, nums: List[int], value: int) -> int:
        n = len(nums)

        if n == 0:
            return 0

        j = 0

        for i in range(n):
            if nums[i] == value:
                continue
            
            nums[j] = nums[i]
            j+=1
        return j