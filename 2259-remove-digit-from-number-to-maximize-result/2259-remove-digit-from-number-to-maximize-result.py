class Solution:
    def removeDigit(self, number: str, digit: str) -> str:
        arr = []
        n = len(number)

        for i in range(n):
            if digit == number[i]:
                numstr = number[0:i]
                if i + 1 < n:
                    numstr += number[i+1:]
                
                arr.append((numstr))
        string = (max(arr))
        return string