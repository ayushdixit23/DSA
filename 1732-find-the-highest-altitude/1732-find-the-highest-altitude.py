class Solution:
    def largestAltitude(self, gains: list[int]) -> int:
        maxAlt = 0
        curr = 0

        for gain in gains:
            curr += gain
            maxAlt = max(maxAlt, curr)
        
        return maxAlt