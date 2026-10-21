class Solution:
    def backtrack(self, hash_map, ans, nums,curr):
        if len(curr) == len(nums):
            ans.append(curr.copy())
            return
        
        for i in range(len(nums)):
            if hash_map.get(nums[i]):
                continue
            
            curr.append(nums[i])
            hash_map[nums[i]] = True

            self.backtrack(hash_map, ans, nums,curr)

            curr.pop()
            hash_map[nums[i]] = False
        
        return


        
    def permute(self, nums: list[int]) -> list[list[int]]:
        hash_map = {}
        ans = []
        curr = []
        self.backtrack(hash_map, ans, nums,curr)
        return ans