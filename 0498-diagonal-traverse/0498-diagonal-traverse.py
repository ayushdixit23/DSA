class Solution:
    def findDiagonalOrder(self, mat: List[List[int]]) -> List[int]:
        hash_map = {}
        m = len(mat)
        n = len(mat[0])
        answer_list = []

        for i in range(m):
            for j in range(n):
                index_sum = i + j
                if index_sum in hash_map:
                    hash_map[index_sum].append(mat[i][j])
                else:
                    hash_map[index_sum] = [mat[i][j]]
        
        end = m-1 + n-1 + 1
        for key in range(end):
            value = hash_map[key]
            if key % 2 == 0:
                value.reverse()
            
            for j in range(len(value)):
                answer_list.append(value[j])
        return answer_list
            


