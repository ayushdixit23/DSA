class Solution {
public:
    bool isSafe(vector<vector<char>>& board, int row, int col, char ch) {
        for (int i = 0; i < 9; i++) {
            if (board[row][i] == ch) {
                return false;
            }

            if (board[i][col] == ch) {
                return false;
            }

            int r = 3 * (row / 3) + (i / 3);
            int c = 3 * (col / 3) + (i % 3);

            if (board[r][c] == ch) {
                return false;
            }
        }

        return true;
    }

    bool backtrack(vector<vector<char>>& board, int row, int col) {
        if (col == 9) {
            row++;
            col = 0;
        }

        if (row == 9) {
            return true;
        }

        if (board[row][col] != '.') {
            return backtrack(board, row, col + 1);
        }

        for (int i = 1; i <= 9; i++) {
            char ch = '0' + i;

            if (isSafe(board, row, col, ch)) {
                board[row][col] = ch;

                if (backtrack(board, row, col + 1)) {
                    return true;
                }

                board[row][col] = '.';
            }
        }

        return false;
    }

    void solveSudoku(vector<vector<char>>& board) {
        backtrack(board, 0, 0);
    }
};