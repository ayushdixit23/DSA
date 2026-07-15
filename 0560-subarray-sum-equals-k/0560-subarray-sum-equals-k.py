class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        n = len(nums)
        hash_map = {}
        hash_map[0] = 1
        count = 0
        prefix_sum = 0

        for i in range(n):
            prefix_sum += nums[i]

            result = prefix_sum - k
            if result in hash_map:
                count += hash_map[result]
            
            if prefix_sum in hash_map:
                hash_map[prefix_sum]+=1
            else:
                hash_map[prefix_sum] = 1

        return count