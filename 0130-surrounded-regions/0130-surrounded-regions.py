from collections import deque

class Solution:
    def bfs(self, board, m, n, i, j, visited, q):
        q.append((i, j))
        visited[i][j] = True

        while q:
            row, col = q.popleft()

            if row - 1 >= 0:
                if board[row - 1][col] == "O" and not visited[row - 1][col]:
                    q.append((row - 1, col))
                    visited[row - 1][col] = True

            if row + 1 < m:
                if board[row + 1][col] == "O" and not visited[row + 1][col]:
                    q.append((row + 1, col))
                    visited[row + 1][col] = True

            if col - 1 >= 0:
                if board[row][col - 1] == "O" and not visited[row][col - 1]:
                    q.append((row, col - 1))
                    visited[row][col - 1] = True

            if col + 1 < n:
                if board[row][col + 1] == "O" and not visited[row][col + 1]:
                    q.append((row, col + 1))
                    visited[row][col + 1] = True

    def solve(self, board: list[list[str]]) -> None:
        m = len(board)
        n = len(board[0])

        q = deque()
        visited = [[False for _ in range(n)] for _ in range(m)]

        for i in range(m):
            for j in range(n):
                if board[i][j] == "O" and not visited[i][j]:
                    if i == 0 or i == m - 1 or j == 0 or j == n - 1:
                        self.bfs(board, m, n, i, j, visited, q)

        for i in range(m):
            for j in range(n):
                if board[i][j] == "O" and not visited[i][j]:
                    board[i][j] = "X"