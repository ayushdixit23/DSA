class Solution:
    def checkValidString(self, s: str) -> bool:
        s1 = []
        s2 = []

        n = len(s)

        for i in range(n):
            elem = s[i]

            if elem == "(":
                s1.append(i)
            elif elem == "*":
                s2.append(i)
            else:
                if s1:
                    s1.pop()
                elif s2:
                    s2.pop()
                else:
                    return False
        
        while s1:
            if not s2:
                return False
            
            if s1.pop() > s2.pop():
                return False
                
        return len(s1) == 0