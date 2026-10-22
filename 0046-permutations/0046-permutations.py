class Solution:
    def backtrack(self, nums, hash_map , curr, ans, n):
        if len(curr) == n:
            ans.append(curr.copy())
            return
        
        for i in range(n):
            if hash_map[nums[i]]:
                continue
            
            hash_map[nums[i]] = True
            curr.append(nums[i])

            self.backtrack(nums, hash_map , curr, ans, n)

            curr.pop()
            hash_map[nums[i]] = False

        return

    def permute(self, nums: list[int]) -> list[list[int]]:
        ans = []
        curr = []

        n = len(nums)

        hash_map = {}

        for i in range(n):
            hash_map[nums[i]] = False
        
        self.backtrack(nums, hash_map , curr, ans, n)
        return ans