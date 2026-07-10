class Solution:
    def firstMissingPositive(self, nums: List[int]) -> int:
        n = len(nums)
        hash_map = {}

        for i in range(n):
            hash_map[nums[i]] = True

        i = 1

        while True:
            if i in hash_map:
                i+=1
            else:
                return i