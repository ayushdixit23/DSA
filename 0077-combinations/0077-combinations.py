class Solution:
    def backtrack(self, n , k , arr, ans, start):
        if len(arr) == k:
            ans.append(arr.copy())
            return
        
        for i in range(start, n+1):
            arr.append(i)

            self.backtrack(n , k , arr, ans, i + 1)

            arr.pop()
        
        return

    def combine(self, n: int, k: int) -> list[list[int]]:
        ans = []
        arr = []

        self.backtrack(n , k , arr, ans, 1)
        
        return ans