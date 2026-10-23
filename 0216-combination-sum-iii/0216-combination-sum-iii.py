class Solution:
    def backtrack(self, k, target, number, arr, ans):
        if len(arr) == k:
            if target == 0:
                ans.append(arr.copy())
            return

        if number > 9 or target <= 0:
            return
        
        if number <= target:
            arr.append(number)
            self.backtrack(k, target-number, number + 1, arr, ans)
            arr.pop()
        
        self.backtrack(k, target, number + 1, arr, ans)
        return

    def combinationSum3(self, k: int, target: int) -> list[list[int]]:
        arr = []
        ans = []

        self.backtrack(k, target, 1, arr, ans)
        return ans