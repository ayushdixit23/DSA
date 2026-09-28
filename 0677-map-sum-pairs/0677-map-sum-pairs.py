class Node:
    def __init__(self):
        self.children = [None] * 26
        self.is_end = False 
        self.value = None

class Trie:
    def __init__(self):
        self.root = Node()

    def insert(self, word: str, value) -> None:
        root = self.root
        size = len(word)
        for i in range(size):
            index = ord(word[i]) - ord('a')

            if root.children[index] == None:
                root.children[index] = Node()

            root = root.children[index]

        root.is_end = True
        root.value = value

class MapSum:
    def __init__(self):
        self.trie = Trie()

    def insert(self, key: str, val: int) -> None:
        self.trie.insert(key, val)
    
    def dfs(self, root):
        if root.is_end:
            self.total_sum += root.value

        for i in range(26):
            child = root.children[i]

            if child is not None:
                self.dfs(child)

    def sum(self, prefix: str) -> int:
        self.total_sum = 0
        root = self.trie.root
        for i , ch in enumerate(prefix):
            index = ord(ch) - ord('a')
            if root.children[index] is not None:
                root = root.children[index]
            else:
                return 0
        
        if root.is_end:
            self.total_sum += root.value

        for i in range(26):
            child = root.children[i]

            if child is not None:
                self.dfs(child)
                
        return self.total_sum


# Your MapSum object will be instantiated and called as such:
# obj = MapSum()
# obj.insert(key,val)
# param_2 = obj.sum(prefix)