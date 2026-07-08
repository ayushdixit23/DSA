class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        n = len(nums)
        if n == 1:
            return False
        hash_map = {}

        for i in range(n):
            if nums[i] in hash_map:
                return True
            else:
                hash_map[nums[i]] = True

        return False