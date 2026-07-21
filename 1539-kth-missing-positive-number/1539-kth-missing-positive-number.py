class Solution:
    def findKthPositive(self, nums: List[int], k: int) -> int:
        hash_map = {}
        n = len(nums)

        for index in range(n):
            hash_map[nums[index]] = True

        i = 1
        j = 0
        while True:
            if i in hash_map:
                i+=1
                continue
            else:     
                j+=1
                if j == k:
                    return i
                i+=1
                
                