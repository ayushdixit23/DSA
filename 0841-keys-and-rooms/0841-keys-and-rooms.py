from collections import deque
class Solution:
    def canVisitAllRooms(self, rooms: list[list[int]]) -> bool:
        n = len(rooms)
        visited = [False] * n

        q = deque()
        q.append(0)
        visited[0] = True

        while q:
            node = q.popleft()

            for neighbour in rooms[node]:
                if not visited[neighbour]:
                    visited[neighbour] = True
                    q.append(neighbour)

        for elem in visited:
            if not elem:
                return False
        
        return True