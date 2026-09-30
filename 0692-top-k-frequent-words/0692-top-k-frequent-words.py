import heapq

class Item:
    def __init__(self, freq, word):
        self.freq = freq
        self.word = word

    def __lt__(self, other):
        if self.freq != other.freq:
            return self.freq < other.freq

        return self.word > other.word

class Solution:
    def topKFrequent(self, words: list[str], k: int) -> list[str]:
        n = len(words)
        hash_map = {}
        for i in range(n):
            hash_map[words[i]] = hash_map.get(words[i], 0) + 1

        heap = []
        for key, value in hash_map.items():
            heapq.heappush(heap, Item(value, key))
            if len(heap) > k:
                heapq.heappop(heap)

        ans = []
        while heap:
            elem = heapq.heappop(heap)
            ans.append(elem.word)

        return ans[::-1]
