class Solution:
    def recursion(self, nums, i, curr , ans):
        if i == len(nums):
            ans.append(curr.copy())
            return
        
        curr.append(nums[i])
        self.recursion(nums,i+1,curr, ans)
        curr.pop()
        self.recursion(nums,i+1,curr, ans)
        return

    def subsets(self, nums: list[int]) -> list[list[int]]:
        ans = []
        curr = []

        self.recursion(nums,0,curr, ans)
        return ans