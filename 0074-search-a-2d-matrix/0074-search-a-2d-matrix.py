class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m = len(matrix)
        n = len(matrix[0])

        start = 0
        end = (m * n) - 1

        while start <= end:
            mid = (start + end) // 2

            col = mid % n
            row = mid // n

            element = matrix[row][col]

            if element == target:
                return True
            elif element > target:
                end = mid - 1
            else:
                start = mid + 1
        
        return False