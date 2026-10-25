class Solution:
    def backtrack(self,index, s, ansSet, curr, count):
        if count < 0:
            return
        if index >= len(s):
            if count == 0:
                string = "".join(curr)
                if len(string) > self.maxLen:
                    ansSet.clear()
                    self.maxLen = len(string)
                    ansSet.add(string)
                elif len(string) == self.maxLen:
                    ansSet.add(string)
            return

        if s[index] != '(' and s[index] != ')':
            curr.append(s[index])
            newCount = count
            if s[index] == "(":
                newCount += 1
            elif s[index] == ")":
                newCount -= 1
            self.backtrack(index + 1,s, ansSet, curr, newCount)
            curr.pop()
            
            return
        
        curr.append(s[index])
        newCount = count
        if s[index] == "(":
            newCount += 1
        elif s[index] == ")":
            newCount -= 1
        self.backtrack(index + 1,s, ansSet, curr, newCount)
        curr.pop()
        self.backtrack(index + 1,s, ansSet, curr, count)
        return

    def removeInvalidParentheses(self, s: str) -> list[str]:
        ansSet = set()
        curr = []

        self.maxLen = 0
        self.backtrack(0,s, ansSet, curr, 0)

        ans = [x for x in ansSet]

        return ans