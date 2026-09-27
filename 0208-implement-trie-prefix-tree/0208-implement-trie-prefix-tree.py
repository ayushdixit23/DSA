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
        

# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)