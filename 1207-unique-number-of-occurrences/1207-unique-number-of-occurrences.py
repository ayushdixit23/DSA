class Solution:
    def uniqueOccurrences(self, arr: list[int]) -> bool:
        n = len(arr)

        if n == 1:
            return True

        hash_map = {}
        hast_set = set()

        for i in range(n):
            hash_map[arr[i]] = hash_map.get(arr[i], 0) + 1
        
        for key, value in hash_map.items():
            if value in hast_set:
                return False
            
            hast_set.add(value)
        
        return True