class Solution:
    def dfs(self, visited, path, safe, i, adj):
        visited[i] = True
        path[i] = True

        for v in adj[i]:
            if not visited[v]:
                if self.dfs(visited, path, safe, v, adj):
                    return True

            elif path[v]:
                return True

        path[i] = False
        safe[i] = True
        return False

    def eventualSafeNodes(self, graph: list[list[int]]) -> list[int]:
        n = len(graph)

        visited = [False] * n
        path = [False] * n
        safe = [False] * n

        for i in range(n):
            if not visited[i]:
                self.dfs(visited, path, safe, i, graph)

        ans = []
        for i in range(n):
            if safe[i]:
                ans.append(i)

        return ans