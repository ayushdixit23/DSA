class Solution:
    def backtrack(self, nums, hash_map, curr, ans, n):
        if len(curr) == n:
            ans.append(curr.copy())
            return

        for i in range(n):
            if hash_map[i]:
                continue

            if i > 0 and nums[i] == nums[i - 1] and not hash_map[i - 1]:
                continue

            hash_map[i] = True
            curr.append(nums[i])

            self.backtrack(nums, hash_map, curr, ans, n)

            curr.pop()
            hash_map[i] = False

    def permuteUnique(self, nums: list[int]) -> list[list[int]]:
        nums.sort()

        ans = []
        curr = []
        n = len(nums)

        hash_map = {}

        for i in range(n):
            hash_map[i] = False

        self.backtrack(nums, hash_map, curr, ans, n)

        return ans