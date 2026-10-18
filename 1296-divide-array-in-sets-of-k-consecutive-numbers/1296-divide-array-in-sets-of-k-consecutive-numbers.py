class Solution:
    def isPossibleDivide(self, nums: list[int], k: int) -> bool:
        if k == 1:
            return True
        
        n = len(nums)

        if (n % k) != 0:
            return False

        nums.sort()
        
        hash_map = {}

        for num in nums:
            hash_map[num] = hash_map.get(num, 0) + 1
        
        while len(hash_map):
            first = next(iter(hash_map))

            for i in range(k):
                elem = first + i
                if elem not in hash_map:
                    return False
                
                hash_map[elem] -= 1
                if hash_map[elem] == 0:
                    del hash_map[elem]
        
        return True