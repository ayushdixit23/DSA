class Solution:
    def build_adj_list(self, prerequisites, n):
        adj_list = [[] for _ in range(n)]

        for v, u in prerequisites:
            adj_list[u].append(v)

        return adj_list

    def findOrder(self, n: int, prerequisites: list[list[int]]) -> bool:
        adj = self.build_adj_list(prerequisites, n)

        indegree = [0] * n
        ans = []
        q = deque()
        
        for i in range(n):
            arr = adj[i]
            for num in arr:
                indegree[num] += 1
                
        for i in range(n):
            if indegree[i] == 0:
                q.append(i)
                
        while q:
            node = q.popleft()
            
            ans.append(node)
            
            for v in adj[node]:
                indegree[v] -= 1
                if indegree[v] == 0:
                    q.append(v)
        
        if len(ans) != n:
            return []
                
        return ans