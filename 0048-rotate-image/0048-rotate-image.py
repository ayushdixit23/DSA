class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        n = len(matrix)

        for i in range(n):
            for j in range(i+1,n):
                matrix[i][j] , matrix[j][i] =  matrix[j][i] , matrix[i][j]

        for i in range(n):
            element = matrix[i]
            left = 0
            right = n-1

            while left < right:
                element[left] , element[right] = element[right], element[left]
                left+=1
                right-=1
        