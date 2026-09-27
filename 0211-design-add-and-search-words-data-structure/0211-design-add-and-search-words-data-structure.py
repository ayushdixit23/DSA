class Node:
    def __init__(self):
        self.children = [None] * 26
        self.is_end = False 
        
class WordDictionary:
    def __init__(self):
        self.root = Node()

    def addWord(self, word: str) -> None:
        root = self.root
        size = len(word)
        for i in range(size):
            index = ord(word[i]) - ord('a')

            if root.children[index] == None:
                root.children[index] = Node()

            root = root.children[index]

            if i == (size - 1):
                root.is_end = True

    def dfs(self, node, word, i):
        if i == len(word):
            return node.is_end

        ch = word[i]

        if ch == ".":
            for child in node.children:
                if child is not None:
                    if self.dfs(child, word, i + 1):
                        return True

            return False

        index = ord(ch) - ord('a')
        child = node.children[index]

        if child is None:
            return False

        return self.dfs(child, word, i + 1)

    def search(self, word: str) -> bool:
        return self.dfs(self.root, word, 0)
        
# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)