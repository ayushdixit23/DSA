class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        m = len(matrix)
        n = len(matrix[0])
        temp = []

        for i in range(m):
            for j in range(n):
                element = matrix[i][j]
                if element == 0:
                    temp.append([i,j])

        for i in range(len(temp)):
            element = temp[i]
            row = element[0]
            column = element[1]

            for k in range(m):
                matrix[k][column] = 0
            for k in range(n):
                matrix[row][k] = 0