class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        n = len(nums)
        hash_map = {}

        for i in range(n):
            if nums[i] in hash_map:
                hash_map[nums[i]] += 1
            else:
                hash_map[nums[i]] = 1
        print(hash_map)
        majority = nums[0]
        rounds = 1
        for key, value in hash_map.items():
            if value >= rounds:
                majority = key
                rounds = value
        return majority