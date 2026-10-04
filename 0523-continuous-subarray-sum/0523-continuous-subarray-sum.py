class Solution:
    def checkSubarraySum(self, nums: list[int], k: int) -> bool:
        prefix_sum = 0
        hash_map = {}
        hash_map[0] = -1

        for i in range(len(nums)):
            prefix_sum += nums[i]
            target = prefix_sum % k
            
            if target in hash_map:
                length = i - hash_map[target]
                if length > 1:
                    return True
            else:
                hash_map[target] = i
        
        return False