from collections import deque
class Solution:
    def build_list(self , n , edges):
        adj_list = [[] for _ in range(n)]
        
        for u , v in edges:
            adj_list[u].append(v)
            adj_list[v].append(u)

        return adj_list

    def validPath(self, n: int, edges: list[list[int]], source: int, destination: int) -> bool:
        if source == destination:
            return True
            
        adj_list = self.build_list(n,edges)
        visited = set()
        q = deque()

        visited.add(source)
        q.append(source)

        while q:
            node = q.popleft()

            for neighbour in adj_list[node]:
                if destination == neighbour:
                    return True
                
                if neighbour not in visited:
                    visited.add(neighbour)
                    q.append(neighbour)
        
        return False