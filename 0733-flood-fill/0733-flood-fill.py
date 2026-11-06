from collections import deque
class Solution:
    def floodFill(
        self, image: list[list[int]], sr: int, sc: int, color: int
    ) -> list[list[int]]:
        q = deque()
        n = len(image)
        m = len(image[0])

        visited = [[False for _ in range(m)] for _ in range(n)]

        q.append((sr, sc))
        visited[sr][sc] = True

        intial = image[sr][sc]

        while q:
            row, col = q.popleft()
            image[row][col] = color

            if row - 1 >= 0:
                if image[row - 1][col] == intial and not visited[row - 1][col]:
                    q.append((row - 1, col))
                    visited[row - 1][col] = True

            if row + 1 < n:
                if image[row + 1][col] == intial and not visited[row + 1][col]:
                    q.append((row + 1, col))
                    visited[row + 1][col] = True
            
            if col - 1 >= 0:
                if image[row][col - 1] == intial and not visited[row][col - 1]:
                    q.append((row, col - 1))
                    visited[row][col - 1] = True

            if col + 1 < m:
                if image[row][col + 1] == intial and not visited[row][col + 1]:
                    q.append((row, col + 1))
                    visited[row][col + 1] = True

        return image
