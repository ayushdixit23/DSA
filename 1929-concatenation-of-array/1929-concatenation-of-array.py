class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
        n = len(nums)
        length = 2 * n
        ans = [0] * length

        for i in range(length):
            ans[i] = nums[i % n]

        return ans