class Solution:
    def backtrack(self, index, nums, ans, curr, target, hash_map):
        if index == len(nums):
            if target == 0:
                ans.append(curr.copy())
            return

        if nums[index] <= target:
            if not (
                index > 0 and nums[index] == nums[index - 1] and not hash_map[index - 1]
            ):
                curr.append(nums[index])
                hash_map[index] = True
                self.backtrack(
                    index + 1, nums, ans, curr, target - nums[index], hash_map
                )
                curr.pop()
                hash_map[index] = False
        self.backtrack(index + 1, nums, ans, curr, target, hash_map)
        return

    def combinationSum2(self, nums: list[int], target: int) -> list[list[int]]:
        nums.sort()
        hash_map = {}

        ans = []
        curr = []

        for i in range(len(nums)):
            hash_map[i] = False

        self.backtrack(0, nums, ans, curr, target, hash_map)
        return ans
