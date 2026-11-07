from collections import deque
class Solution:
    def orangesRotting(self, grid: list[list[int]]) -> int:
        q = deque()

        n = len(grid)
        m = len(grid[0])

        visited = [[False for _ in range(m)] for _ in range(n)]

        for i in range(n):
            for j in range(m):
                if grid[i][j] == 2:
                    q.append((i, j))
                    visited[i][j] = True
        
        minute = -1
        while q:
            for _ in range(len(q)):
                row, col = q.popleft()
                if row - 1 >= 0:
                    if grid[row - 1][col] == 1 and not visited[row - 1][col]:
                        q.append((row - 1, col))
                        grid[row - 1][col] = 2
                        visited[row - 1][col] = True

                if row + 1 < n:
                    if grid[row + 1][col] == 1 and not visited[row + 1][col]:
                        q.append((row + 1, col))
                        grid[row + 1][col] = 2
                        visited[row + 1][col] = True
                
                if col - 1 >= 0:
                    if grid[row][col - 1] == 1 and not visited[row][col - 1]:
                        q.append((row, col - 1))
                        grid[row][col - 1] = 2
                        visited[row][col - 1] = True

                if col + 1 < m:
                    if grid[row][col + 1] == 1 and not visited[row][col + 1]:
                        q.append((row, col + 1))
                        grid[row][col + 1] = 2
                        visited[row][col + 1] = True
            minute += 1

        for i in range(n):
            for j in range(m):
                if grid[i][j] == 1:
                    return -1
        
        return max(0, minute)