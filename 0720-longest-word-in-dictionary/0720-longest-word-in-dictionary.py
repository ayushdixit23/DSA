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
        
        root.is_end = True

class Solution:
    def helper(self,root, temp, i):
        if not root.is_end:
            return
        
        ch = chr(ord('a') + i)
        temp.append(ch)

        if len(temp) > len(self.string):
            self.string = "".join(temp)

        for index in range(26):
            child = root.children[index]
            if child is not None:
                self.helper(child, temp, index)
        
        temp.pop()
        return

    def longestWord(self, words: list[str]) -> str:
        trie = Trie()
        length = len(words)
        self.string = ""

        for i in range(length):
            trie.insert(words[i])

        root = trie.root
        temp = []

        for i in range(26):
            child = root.children[i]
            if child is not None:
                self.helper(child , temp, i)

        return self.string
