class Solution:
    def backtrack(self, index, expr, value, last_operand, n, num, ans, target):
        if index == n:
            if value == target:
                ans.append(expr)
            return

        for end in range(index, n):
            if end > index and num[index] == "0":
                break

            operand = int(num[index : end + 1])
            operand_str = num[index : end + 1]

            if index == 0:
                self.backtrack(
                    end + 1, operand_str, operand, operand, n, num, ans, target
                )
            else:
                self.backtrack(
                    end + 1,
                    expr + "+" + operand_str,
                    value + operand,
                    operand,
                    n,
                    num,
                    ans,
                    target,
                )
                self.backtrack(
                    end + 1,
                    expr + "-" + operand_str,
                    value - operand,
                    -operand,
                    n,
                    num,
                    ans,
                    target,
                )
                self.backtrack(
                    end + 1,
                    expr + "*" + operand_str,
                    value - last_operand + last_operand * operand,
                    last_operand * operand,
                    n,
                    num,
                    ans,
                    target,
                )

    def addOperators(self, num: str, target: int) -> list[str]:
        ans = []
        n = len(num)

        self.backtrack(0, "", 0, 0, n, num, ans, target)
        return ans
