class Solution:
    def backtrack(self, lcount, rcount, ans, curr):
        if lcount == 0 and rcount == 0:
            string = "".join(curr)
            ans.append(string)
            return

        if lcount != rcount:
            curr.append(")")
            self.backtrack(lcount, rcount - 1, ans, curr)
            curr.pop()

        if lcount > 0:
            curr.append("(")
            self.backtrack(lcount - 1, rcount, ans, curr)
            curr.pop()

        return

    def generateParenthesis(self, n: int) -> List[str]:
        ans = []
        curr = []

        self.backtrack(n, n, ans, curr)

        return ans
