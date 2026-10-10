class Solution:
    def jump(self, nums: list[int]) -> int:
        n = len(nums)
        if n == 1:
            return 0
        
        jumps = 0
        destination = n - 1
        coverage = 0
        lastJumpIndex = 0

        for i in range(n):
            coverage = max(coverage, i + nums[i])

            if i == lastJumpIndex:
                lastJumpIndex = coverage
                jumps+=1

                if coverage >= destination:
                    break 

        return jumps