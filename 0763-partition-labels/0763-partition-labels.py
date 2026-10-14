class Solution:
    def partitionLabels(self, s: str) -> list[int]:
        n = len(s)
        hash_map = {}
        partition = []

        for i in range(n):
            hash_map[s[i]] = i

        i = 0

        while i < n:
            startIndex = i
            endIndex = hash_map[s[i]]

            j = startIndex

            while j <= endIndex:
                lastIndexOfJ = hash_map[s[j]]

                if lastIndexOfJ > endIndex:
                    endIndex = lastIndexOfJ
                
                j+=1
            
            partition.append(endIndex - startIndex + 1)
            i = endIndex + 1
        
        return partition