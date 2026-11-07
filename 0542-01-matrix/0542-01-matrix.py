from collections import deque

class Solution:
    def updateMatrix(self, mat: list[list[int]]) -> list[list[int]]:
        m, n = len(mat), len(mat[0])
        q = deque()
        ans = [[-1] * n for _ in range(m)]

        for i in range(m):
            for j in range(n):
                if mat[i][j] == 0:
                    q.append((i, j))
                    ans[i][j] = 0

        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]

        while q:
            row, col = q.popleft()

            for dr, dc in directions:
                nr, nc = row + dr, col + dc

                if 0 <= nr < m and 0 <= nc < n:
                    if ans[nr][nc] == -1:
                        ans[nr][nc] = ans[row][col] + 1
                        q.append((nr, nc))

        return ans