class Node:
    def __init__(self):
        self.children = [None] * 26
        self.is_end = False 

class Trie:
    def __init__(self):
        self.root = Node()

    def insert(self, word: str) -> None:
        root = self.root
        size = len(word)

        if word == "":
            root.is_end = True
            return

        for i in range(size):
            index = ord(word[i]) - ord('a')

            if root.children[index] == None:
                root.children[index] = Node()

            root = root.children[index]

            if i == (size - 1):
                root.is_end = True

    def search(self, word: str) -> bool:
        root = self.root
        size = len(word)

        for i in range(size):
            index = ord(word[i]) - ord('a')
            if root.children[index] == None:
                return False
            
            root = root.children[index]
        
        return root.is_end

    def startsWith(self, prefix: str) -> bool:
        root = self.root
        size = len(prefix)

        for i in range(size):
            index = ord(prefix[i]) - ord('a')
            if root.children[index] == None:
                return False
            
            root = root.children[index]
        
        return True

class Solution:
    def helper(self, root, temp):
        if root.is_end:
            self.string = "".join(temp)
            return
        
        count = 0
        node = None
        index = -1
        for i in range(26):
            child = root.children[i]
            if child is not None:
                node = child
                index = i
                count += 1
        if count == 1:
            ch = chr(ord('a') + index)
            temp.append(ch)
            self.helper(node, temp)
            return
        else:
            self.string = "".join(temp)
            return

    def longestCommonPrefix(self, strs: list[str]) -> str:
        trie = Trie()
        for word in strs:
            trie.insert(word)
        
        root = trie.root
        self.string = ""
        temp = []
        self.helper(root, temp)
        return self.string
