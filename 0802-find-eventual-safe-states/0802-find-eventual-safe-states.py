class Solution:
    def dfs(self, visited, safeNodes, path, graph, i):
        visited[i] = True
        path[i] = True

        for v in graph[i]:
            if not visited[v]:
                if self.dfs(visited, safeNodes, path, graph, v):
                    return True
            else:
                if path[v]:
                    return True
        
        path[i] = False
        safeNodes[i] = True
        return False

    def eventualSafeNodes(self, graph: list[list[int]]) -> list[int]:
        n = len(graph)

        visited = [False] * n
        safeNodes = [False] * n
        path = [False] * n

        ans = []

        for i in range(n):
            if not visited[i]:
                self.dfs(visited, safeNodes, path, graph, i)

        
        for i in range(n):
            if safeNodes[i]:
                ans.append(i)
        
        return ans