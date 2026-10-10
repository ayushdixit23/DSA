class Solution:
    def canJump(self, nums: list[int]) -> bool:
        n = len(nums)

        goal = n - 1

        i = n - 2
        
        while i >= 0:
            if (i + nums[i]) >= goal:
                goal = i
            i-=1
        
        return goal == 0