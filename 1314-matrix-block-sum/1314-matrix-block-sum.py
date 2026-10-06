class Solution:
    def sumRegion(self, matrix, row1: int, col1: int, row2: int, col2: int) -> int:
        total = matrix[row2][col2]

        if row1 > 0:
            total -= matrix[row1 - 1][col2]

        if col1 > 0:
            total -= matrix[row2][col1 - 1]

        if row1 > 0 and col1 > 0:
            total += matrix[row1 - 1][col1 - 1]

        return total

    def matrixBlockSum(self, matrix: list[list[int]], k: int) -> list[list[int]]:
        rows = len(matrix)
        cols = len(matrix[0])
        prefix_sum = [[0] * cols for _ in range(rows)]

        prefix_sum[0][0] = matrix[0][0]

        for col in range(1, cols):
            prefix_sum[0][col] = prefix_sum[0][col - 1] + matrix[0][col]

        for row in range(1, rows):
            prefix_sum[row][0] = prefix_sum[row - 1][0] + matrix[row][0]

        for i in range(1, rows):
            for j in range(1, cols):
                prefix_sum[i][j] = (
                    matrix[i][j]
                    + prefix_sum[i - 1][j]
                    + prefix_sum[i][j - 1]
                    - prefix_sum[i - 1][j - 1]
                )

        for i in range(rows):
            for j in range(cols):
                r1 = max(0, i - k)
                c1 = max(0, j - k)
                r2 = min(len(matrix) - 1, i + k)
                c2 = min(len(matrix[0]) - 1, j + k)

                matrix[i][j] = self.sumRegion(prefix_sum, r1, c1, r2, c2)

        return matrix
