class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        n = len(mat)
        total_sum = 0

        for i in range(n):
            total_sum += mat[i][i]
            total_sum += mat[i][n-1-i]

        if n % 2 == 1:
            value = n // 2
            total_sum -= mat[value][value]

        return total_sum