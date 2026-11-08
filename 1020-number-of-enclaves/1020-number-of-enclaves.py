from collections import deque
class Solution:
    def numEnclaves(self, grid: list[list[int]]) -> int:
        m = len(grid)
        n = len(grid[0])

        q = deque()

        visited = [[False for _ in range(n)] for _ in range(m)]

        for i in range(m):
            for j in range(n):
                if (i == 0 or i == m - 1 or j == 0 or j == n - 1) and grid[i][j] == 1:
                    q.append((i, j))
                    visited[i][j] = True
        
        directions = [(-1, 0), (1, 0), (0, 1), (0, -1)]

        while q:
            row , col = q.popleft()

            for dr, dc in directions:
                nr = row + dr
                nc = col + dc

                if 0 <= nr < m and 0 <= nc < n:
                    if grid[nr][nc] == 1 and not visited[nr][nc]:
                        q.append((nr, nc))
                        visited[nr][nc] = True
        
        count = 0

        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1 and not visited[i][j]:
                    count += 1
        
        return count