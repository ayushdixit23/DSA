from collections import deque
class Solution:
    def bfs(self, grid, row, col, q, visited, m, n):
        area = 1
        q.append((row, col))
        visited[row][col] = True 

        while q:
            row, col = q.popleft()
            
            if row - 1 >= 0:
                if grid[row - 1][col] == 1 and not visited[row - 1][col]:
                    q.append((row - 1, col))
                    area+=1
                    visited[row - 1][col] = True

            if row + 1 < n:
                if grid[row + 1][col] == 1 and not visited[row + 1][col]:
                    q.append((row + 1, col))
                    area+=1
                    visited[row + 1][col] = True
            
            if col - 1 >= 0:
                if grid[row][col - 1] == 1 and not visited[row][col - 1]:
                    q.append((row, col - 1))
                    area+=1
                    visited[row][col - 1] = True

            if col + 1 < m:
                if grid[row][col + 1] == 1 and not visited[row][col + 1]:
                    q.append((row, col + 1))
                    area+=1
                    visited[row][col + 1] = True
        
        return area
        
    def maxAreaOfIsland(self, grid: list[list[int]]) -> int:
        q = deque()
        maxArea = 0

        n = len(grid)
        m = len(grid[0])

        visited = [[False for _ in range(m)] for _ in range(n)]

        for i in range(n):
            for j in range(m):
                if grid[i][j] == 0 or visited[i][j]:
                    continue
                
                area = self.bfs(grid, i, j, q, visited, m, n)
                maxArea = max(area, maxArea)
        
        return maxArea
