import heapq


class Solution:
    def swimInWater(self, grid: list[list[int]]) -> int:
        n = len(grid)
        visited = [[False] * n for _ in range(n)]

        heap = [(grid[0][0], 0, 0)]
        visited[0][0] = True

        t = 0
        directions = [(-1, 0), (1, 0), (0, 1), (0, -1)]

        while heap:
            time, row, col = heapq.heappop(heap)

            t = max(t, time)

            if row == n - 1 and col == n - 1:
                return t

            for dr, dc in directions:
                nr = row + dr
                nc = col + dc

                if 0 <= nr < n and 0 <= nc < n:
                    if not visited[nr][nc]:
                        visited[nr][nc] = True
                        heapq.heappush(heap, (grid[nr][nc], nr, nc))

        return t
