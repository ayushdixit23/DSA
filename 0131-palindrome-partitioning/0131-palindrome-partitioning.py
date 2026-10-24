class Solution:
    def isPalindrome(self, s):
        left = 0
        right = len(s) - 1

        while left < right:
            if s[left] != s[right]:
                return False
            left += 1
            right -= 1
        return True
    
    def backtrack(self, s, curr, ans):
        if len(s) == 0:
            ans.append(curr.copy())
            return
            
        for i in range(len(s)):
            part1 = s[0:i+1]

            if self.isPalindrome(part1):
                curr.append(part1)
                self.backtrack(s[i+1:], curr, ans)
                curr.pop()
        return

    def partition(self, s: str) -> list[list[str]]:
        curr = []
        ans = []

        self.backtrack(s, curr, ans)

        return ans

