class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        length = 2 * len(nums)
        ans = [0] * length

        for i in range(length):
            ans[i] = nums[i % len(nums)]

        return ans