from collections import deque

class Solution:
    def highestPeak(self, mat: list[list[int]]) -> list[list[int]]:
        m = len(mat)
        n = len(mat[0])

        q = deque()
        visited = [[False for _ in range(n)] for _ in range(m)]

        ans = [[0 for _ in range(n)] for _ in range(m)]

        for i in range(m):
            for j in range(n):
                if mat[i][j] == 1:
                    visited[i][j] = True
                    q.append((i, j, 0))

        while q:
            row, col, step = q.popleft()
            directions = [(-1, 0), (1, 0), (0, 1), (0, -1)]

            for dr, dc in directions:
                nr = dr + row
                nc = dc + col

                if 0 <= nr < m and 0 <= nc < n:
                    if not visited[nr][nc]:
                        ans[nr][nc] = step + 1
                        visited[nr][nc] = True
                        q.append((nr, nc, step + 1))

        return ans