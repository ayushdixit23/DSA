class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m = len(matrix)
        n = len(matrix[0])

        row = 0
        col = n - 1

        while row <= m - 1 and col >= 0:
            element = matrix[row][col]
            if element == target:
                return True
            elif element > target:
                col-=1
            else:
                row += 1
        
        return False