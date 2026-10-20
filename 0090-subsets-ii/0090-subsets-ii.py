class Solution:
    def recursion(self, nums, i, curr , ans):
        if i == len(nums):
            ans.append(curr.copy())
            return
        
        curr.append(nums[i])
        self.recursion(nums,i+1,curr, ans)
        curr.pop()

        idx = i + 1

        while idx < len(nums) and nums[idx] == nums[idx-1]:
            idx+=1
         
        self.recursion(nums,idx,curr, ans)
        return

    def subsetsWithDup(self, nums: list[int]) -> list[list[int]]:
        nums.sort()

        ans = []
        curr = []

        self.recursion(nums,0,curr, ans)
        return ans
        