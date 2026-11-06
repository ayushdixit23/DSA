from collections import deque
class Solution:
    def findCircleNum(self, isConnected: List[List[int]]) -> int:
        q = deque()
        visited = set()
        count = 0
        n = len(isConnected)

        for i in range(n):
            if i in visited:
                continue

            visited.add(i)
            q.append(i)
            count += 1

            while q:
                node = q.popleft()

                for j in range(n):
                    if isConnected[node][j] == 1 and j not in visited:
                        visited.add(j)
                        q.append(j)
        return count