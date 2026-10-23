class Solution:
    def backtrack(self, index,nums, ans, curr, target):
        if index == len(nums):
            if target == 0:
                ans.append(curr.copy())
            return

        if nums[index] <= target:
            curr.append(nums[index])
            self.backtrack(index,nums, ans, curr, target-nums[index])
            curr.pop()
        self.backtrack(index+1,nums, ans, curr, target)
        return

    def combinationSum(self, nums: list[int], target: int) -> list[list[int]]:
        ans = []
        curr = []

        self.backtrack(0,nums, ans, curr, target)
        return ans