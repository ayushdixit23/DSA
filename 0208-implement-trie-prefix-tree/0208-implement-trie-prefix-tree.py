class Node:
    def __init__(self):
        self.children = {}
        self.is_end = False

class Trie:
    def __init__(self):
        self.root = Node()

    def insert(self, word: str) -> None:
        root = self.root
        size = len(word)
        for i in range(size):
            ch = word[i]
            if ch not in root.children:
                root.children[ch] = Node()
            
            root = root.children[ch]
            if i == (size - 1):
                root.is_end = True

    def search(self, word: str) -> bool:
        root = self.root
        size = len(word)

        for i in range(size):
            ch = word[i]

            if ch not in root.children:
                return False

            root = root.children[ch]
            if i == (size - 1) and not root.is_end:
                return False 

        return True

    def startsWith(self, prefix: str) -> bool:
        root = self.root
        size = len(prefix)

        for i in range(size):
            ch = prefix[i]

            if ch not in root.children:
                return False
            
            root = root.children[ch]
        return True


# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)