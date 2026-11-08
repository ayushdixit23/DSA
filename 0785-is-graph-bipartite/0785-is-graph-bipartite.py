from collections import deque

class Solution:
    def bfs(self, node, graph, color, visited, q, currentColor):
        q.append(node)
        visited[node] = True
        color[node] = currentColor

        while q:
            value = q.popleft()

            nodeColor = color[value]

            for neighbour in graph[value]:
                if color[neighbour] == -1:
                    colorToPut = 1 - nodeColor
                    color[neighbour] = colorToPut
                    visited[neighbour] = True
                    q.append(neighbour)
                elif color[neighbour] == nodeColor:
                    return False
        
        return True

    def isBipartite(self, graph: list[list[int]]) -> bool:
        q = deque()
        n = len(graph)
        visited = [False] * n
        color = [-1] * n

        for i in range(n):
            if visited[i]:
                continue

            value = self.bfs(i, graph, color, visited, q, 0)
            if not value:
                return False

        return True
