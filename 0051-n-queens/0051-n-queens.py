class Solution:
    def isSafe(self, board, row , col, n):
        # vertical
        for i in range(n):
            if board[i][col] == 'Q':
                return False

        # horizontal
        for i in range(n):
            if board[row][i] == 'Q':
                return False
        
        r = row
        c = col

        while r >= 0 and c >= 0:
            if board[r][c] == 'Q':
                return False
            r-=1
            c-=1

        r = row
        c = col
        while c < n and r >= 0:
            if board[r][c] == 'Q':
                return False
            c+=1
            r-=1
        
        return True

    def backtrack(self, board, row, ans, n):
        if row == n:
            arr = []
            for i in range(n):
                string = "".join(board[i])
                arr.append(string)
            
            ans.append(arr)
            return
        
        for i in range(n):
            if self.isSafe(board, row , i, n):
                board[row][i] = 'Q'
                self.backtrack(board, row+1, ans, n)
                board[row][i] = '.'
        
        return

    def solveNQueens(self, n: int) -> list[list[str]]:
        board = [['.'] * n for _ in range(n)]
        ans = []

        self.backtrack(board, 0, ans, n)

        return ans