class Solution:
    def backtrack(self, board, word, i, j, k, m, n):
        if k == len(word):
            return True
        if i < 0 or i >= m:
            return False

        if j < 0 or j >= n:
            return False

        if board[i][j] != word[k]:
            return False

        board[i][j] = "!"

        if (
            self.backtrack(board, word, i, j - 1, k + 1, m, n)
            or self.backtrack(board, word, i, j + 1, k + 1, m, n)
            or self.backtrack(board, word, i + 1, j, k + 1, m, n)
            or self.backtrack(board, word, i - 1, j, k + 1, m, n)
        ):
            return True

        board[i][j] = word[k]

    def exist(self, board: list[list[str]], word: str) -> bool:
        m = len(board)
        n = len(board[0])

        for i in range(m):
            for j in range(n):
                if self.backtrack(board, word, i, j, 0, m, n):
                    return True

        return False
