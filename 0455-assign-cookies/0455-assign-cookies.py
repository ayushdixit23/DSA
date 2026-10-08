class Solution:
    def findContentChildren(self, children: list[int], cookies: list[int]) -> int:
        n = len(children)
        m = len(cookies)

        children.sort()
        cookies.sort()

        i , j = 0 , 0
        count = 0

        while i < n and j < m:
            if children[i] <= cookies[j]:
                count += 1
                i+=1
                j+=1
            else:
                j+=1
        
        return count