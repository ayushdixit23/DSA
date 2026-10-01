import heapq


class Solution:
    def reorganizeString(self, s: str) -> str:
        hash_map = {}
        heap = []

        length = len(s)

        for i in range(length):
            hash_map[s[i]] = hash_map.get(s[i], 0) + 1

        string = ""

        for key, value in hash_map.items():
            heapq.heappush(heap, (-value, key))

        prev = (0, "")

        while heap:
            freq, ch = heapq.heappop(heap)
            freq += 1

            string += ch

            prev_freq, prev_char = prev

            if prev_freq < 0:
                heapq.heappush(heap, (prev_freq, prev_char))

            prev = (freq, ch)
        
        if prev[0] != 0:
            return ""

        return string
