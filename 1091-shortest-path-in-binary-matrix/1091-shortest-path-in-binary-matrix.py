from collections import deque

class Solution:
    def shortestPathBinaryMatrix(self, grid: list[list[int]]) -> int:
        q = deque()
        n = len(grid)
        visited = [[False for _ in range(n)] for _ in range(n)]

        if grid[0][0] == 1 or grid[n-1][n-1] == 1:
            return -1

        minimum_length = n
        q.append((0, 0, 1))

        while q:
            row, col, step = q.popleft()
            directions = [
                [1, 0],
                [0, 1],
                [-1, 0],
                [0, -1],
                [1, 1],
                [-1, -1],
                [1, -1],
                [-1, 1],
            ]

            if row == n - 1 and col == n - 1:
                return step

            for dr, dc in directions:
                nr = dr + row
                nc = dc + col

                if 0 <= nr < n and 0 <= nc < n:
                    if grid[nr][nc] == 0 and not visited[nr][nc]:
                        visited[nr][nc] = True
                        q.append((nr, nc, step + 1))
            
        return -1