class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m = len(matrix)
        n = len(matrix[0])

        for i in range(m):
            start = 0
            end = n - 1

            while start <= end:
                mid = (start + end) // 2
                element = matrix[i][mid]
                if element == target:
                    return True
                elif element > target:
                    end = mid - 1
                else:
                    start = mid + 1

        return False