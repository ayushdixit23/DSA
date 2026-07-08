class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        s_length = len(s)
        t_length = len(t)

        if s_length != t_length:
            return False

        hash_set = set()
        hash_map_s = {}
        hash_map_t = {}

        for i in range(s_length):
            element = s[i]
            if element in hash_map_s:
                hash_map_s[element]+=1
            else:
                hash_map_s[element] =1
            
            hash_set.add(element)
        
        for i in range(t_length):
            element = t[i]
            if element in hash_map_t:
                hash_map_t[element]+=1
            else:
                hash_map_t[element] =1
            
            hash_set.add(element)

        for element in hash_set:
            if element not in hash_map_s:
                return False
            if element not in hash_map_t:
                return False
            
            if hash_map_t[element] != hash_map_s[element]:
                return False
        
        return True