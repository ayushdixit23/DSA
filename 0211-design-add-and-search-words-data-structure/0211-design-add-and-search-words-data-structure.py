class Node:
    def __init__(self):
        self.children = [None] * 26
        self.is_end = False


class WordDictionary:
    def __init__(self):
        self.root = Node()

    def addWord(self, word: str) -> None:
        root = self.root

        for ch in word:
            index = ord(ch) - ord("a")
            if root.children[index] is None:
                root.children[index] = Node()

            root = root.children[index]

        root.is_end = True

    def helper(self, root, word, i):
        if i == len(word):
            return root.is_end

        ch = word[i]

        if ch == ".":
            for j in range(26):
                child = root.children[j]
                if child is not None:
                    if self.helper(child, word, i+1):
                        return True
            
            return False
            
        index = ord(ch) - ord("a")
        if root.children[index] is None:
            return False

        return self.helper(root.children[index], word, i + 1)

    def search(self, word: str) -> bool:
        return self.helper(self.root, word, 0)


# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
