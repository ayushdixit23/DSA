class Solution:
    def countKDifference(self, nums: list[int], k: int) -> int:
        hash_map = {}
        count = 0
        n = len(nums)

        for i in range(n):
            x1 = k + nums[i]
            x2 = nums[i] - k

            if x1 in hash_map:
                count+= hash_map[x1]
            
            if x2 in hash_map:
                count+= hash_map[x2]

            hash_map[nums[i]] = hash_map.get(nums[i], 0) + 1
        
        return count