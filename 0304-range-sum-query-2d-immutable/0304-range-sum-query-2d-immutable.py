class NumMatrix:
    def __init__(self, matrix: list[list[int]]):
        rows = len(matrix)
        cols = len(matrix[0])
        self.prefix_sum = [[0] * cols for _ in range(rows)]

        self.prefix_sum[0][0] = matrix[0][0]

        for col in range(1, cols):
            self.prefix_sum[0][col] = (
                self.prefix_sum[0][col - 1] + matrix[0][col]
            )

        for row in range(1, rows):
            self.prefix_sum[row][0] = (
                self.prefix_sum[row - 1][0] + matrix[row][0]
            )

        for i in range(1, rows):
            for j in range(1, cols):
                self.prefix_sum[i][j] = (
                    matrix[i][j]
                    + self.prefix_sum[i - 1][j]
                    + self.prefix_sum[i][j - 1]
                    - self.prefix_sum[i - 1][j - 1]
                )

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        total = self.prefix_sum[row2][col2]

        if row1 > 0:
            total -= self.prefix_sum[row1 - 1][col2]

        if col1 > 0:
            total -= self.prefix_sum[row2][col1 - 1]

        if row1 > 0 and col1 > 0:
            total += self.prefix_sum[row1 - 1][col1 - 1]

        return total


# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# param_1 = obj.sumRegion(row1,col1,row2,col2)
