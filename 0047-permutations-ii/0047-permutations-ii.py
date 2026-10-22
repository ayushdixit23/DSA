# class Solution:
#     def permuteUnique(self, nums: list[int]) -> list[list[int]]:
#         pass


class Solution:
    def backtrack(self, nums, hash_map, curr, ans, n):
        if len(curr) == n:
            arr = tuple(curr)
            if arr not in ans:
                ans.add(arr)
            
            return

        for i in range(n):
            if hash_map[i]:
                continue

            hash_map[i] = True
            curr.append(nums[i])

            self.backtrack(nums, hash_map, curr, ans, n)

            curr.pop()
            hash_map[i] = False

        return

    def permuteUnique(self, nums: list[int]) -> list[list[int]]:
        nums.sort()

        ans = set()
        curr = []

        n = len(nums)

        hash_map = {}

        for i in range(n):
            hash_map[i] = False

        self.backtrack(nums, hash_map, curr, ans, n)
        return [list(x) for x in ans]
