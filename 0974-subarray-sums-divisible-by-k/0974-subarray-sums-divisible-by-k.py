class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        prefix_sum = 0
        hash_map = {}
        count = 0

        hash_map[0] = 1

        for num in nums:
            prefix_sum += num
            target = prefix_sum % k
            if target in hash_map:
                count += hash_map[target]
            
            hash_map[target] = hash_map.get(target, 0) + 1
        
        return count