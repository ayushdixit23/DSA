class Solution:
    def backtrack(self, index, digits, curr, ans):
        if index >= len(digits):
            string = "".join(curr)
            ans.append(string)
            return
        
        arr = self.hash_map[digits[index]]

        for i in range(len(arr)):
            elem = arr[i]
            curr.append(elem)
            self.backtrack(index+1, digits, curr, ans)
            curr.pop()
        
        return


    def letterCombinations(self, digits: str) -> list[str]:
        self.hash_map = {
            "2": ["a", "b", "c"],
            "3": ["d", "e", "f"],
            "4": ["g", "h", "i"],
            "5": ["j", "k", "l"],
            "6": ["m", "n", "o"],
            "7": ["p", "q", "r", "s"],
            "8": ["t", "u", "v"],
            "9": ["w", "x", "y", "z"],
        }
        curr = []
        ans = []

        self.backtrack(0, digits, curr, ans)
        return ans

