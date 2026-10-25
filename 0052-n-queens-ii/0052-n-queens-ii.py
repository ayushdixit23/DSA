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

    def backtrack(self, board, row, n):
        if row == n:
            self.count += 1
            return
        
        for i in range(n):
            if self.isSafe(board, row , i, n):
                board[row][i] = 'Q'
                self.backtrack(board, row+1, n)
                board[row][i] = '.'
        
        return

    def totalNQueens(self, n: int) -> int:
        self.count = 0
        board = [['.'] * n for _ in range(n)]

        self.backtrack(board, 0, n)

        return self.count