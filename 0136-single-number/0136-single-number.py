class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        n = len(nums)
        if n == 1:
            return nums[0]

        hash_map = {}

        for i in range(n):
            if nums[i] in hash_map:
                hash_map.pop(nums[i])
            else:
                hash_map[nums[i]] = True

        return list(hash_map)[0]