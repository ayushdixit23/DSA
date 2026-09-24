# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
from collections import deque
class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.
        
        :type root: TreeNode
        :rtype: str
        """
        if root is None:
            return ""
        
        q = deque()
        q.append(root)

        arr = []

        while q:
            node = q.popleft()

            if node is None:
                arr.append("N")
                continue
            
            arr.append(str(node.val))
            q.append(node.left)
            q.append(node.right)
        
        return ",".join(arr)


    def deserialize(self, data):
        """Decodes your encoded data to tree.
        
        :type data: str
        :rtype: TreeNode
        """
        if data == "":
            return None
        data = data.split(",")
        i = 1
        length = len(data)
        q = deque()
        root = TreeNode(int(data[0]))
        q.append(root)

        while q:
            node = q.popleft()

            if i < length and data[i] != "N":
                val = int(data[i])
                left = TreeNode(val)
                node.left = left
                q.append(left)
            
            i+=1

            if i < length and data[i] != "N":
                val = int(data[i])
                right = TreeNode(val)
                node.right = right
                q.append(right)
            
            i+=1
        
        return root
        

# Your Codec object will be instantiated and called as such:
# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# tree = ser.serialize(root)
# ans = deser.deserialize(tree)
# return ans