class Solution:
    def findRotation(self, mat: List[List[int]], target: List[List[int]]) -> bool:
        n = len(mat)
        
        if n == 1:
            return mat[0][0] == target[0][0]
        
        is_all_equal = True
        for i in range(n):
            for j in range(n):
                if mat[i][j] != target[i][j]:
                    is_all_equal = False
                    break
        
        if is_all_equal:
            return True
        turns = 1

        while turns <= 3:
            is_all_equal = True
            for i in range(n):
                for j in range(i+1,n):
                    mat[i][j] , mat[j][i] =  mat[j][i] , mat[i][j]

            for i in range(n):
                element = mat[i]
                left = 0
                right = n-1

                while left < right:
                    element[left] , element[right] = element[right], element[left]
                    left+=1
                    right-=1
            
            for i in range(n):
                for j in range(n):
                    if mat[i][j] != target[i][j]:
                        is_all_equal = False
                        break
            
            if is_all_equal:
                return True
            turns+=1

        return is_all_equal