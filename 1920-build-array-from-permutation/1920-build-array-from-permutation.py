class Solution:
    def buildArray(self, nums: List[int]) -> List[int]:
        length = len(nums)
        ans = [0] * length

        for i in range(length):
            ans[i] = nums[nums[i]]

        return ans