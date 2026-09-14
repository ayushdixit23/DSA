class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        n = len(nums)
        elem = nums[0]

        for i in range(1,n):
            elem ^= nums[i]
        
        return elem