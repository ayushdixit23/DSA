class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash_map = {}
        for i in range(len(nums)):
            value = target - nums[i]
            if value in hash_map:
                return [hash_map[value], i]
            hash_map[nums[i]] = i
