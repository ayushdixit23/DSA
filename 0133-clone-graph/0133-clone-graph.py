"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

from typing import Optional
class Solution:
    def dfs(self, node, hash_map):
        if node.val not in hash_map:
            newNode = Node(node.val)
            hash_map[node.val] = newNode

            for neighbors in node.neighbors:
                neighborNode = self.dfs(neighbors, hash_map)
                newNode.neighbors.append(neighborNode)
            
            return newNode
        else:
            return hash_map[node.val]


    def cloneGraph(self, node: Optional['Node']) -> Optional['Node']:
        if node is None:
            return node

        hash_map = {}
        clonedNode = self.dfs(node, hash_map)
        return clonedNode