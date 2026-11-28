class Solution:
    def build_adj(self, edges, n):
        adj = [[] for _ in range(n)]
        
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)
        
        return adj
    
    def dfs(self, node, parent, bridges, low , tin, visited, adj):
        visited[node] = True
        self.timer += 1
        tin[node] = low[node] = self.timer
        
        for v in adj[node]:
            if v == parent:
                continue
            if not visited[v]:
                self.dfs(v, node, bridges, low , tin, visited, adj)
                low[node] = min(low[node], low[v])
                if low[v] > tin[node]:
                    bridges.append([node, v])
            else:
                low[node] = min(low[node], low[v])
    
    def criticalConnections(self, n: int, connections: list[list[int]]) -> list[list[int]]:
        inf = float("inf")
        low = [inf] * n
        tin = [inf] * n
        self.timer = 0
        
        bridges = []
        
        visited = [False] * n
        
        adj = self.build_adj(connections, n)
        
        for i in range(n):
            if not visited[i]:
                self.dfs(i, -1, bridges, low , tin, visited, adj)
        
        return bridges