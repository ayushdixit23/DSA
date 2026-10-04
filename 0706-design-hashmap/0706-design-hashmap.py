class MyHashMap:
    def __init__(self):
        self.number = 10 ** 6
        self.arr = [-1] * self.number

    def put(self, key: int, value: int) -> None:
        index = key % self.number
        self.arr[index] = value
        return

    def get(self, key: int) -> int:
        index = key % self.number
        return self.arr[index]

    def remove(self, key: int) -> None:
        index = key % self.number
        self.arr[index] = -1
        return

# Your MyHashMap object will be instantiated and called as such:
# obj = MyHashMap()
# obj.put(key,value)
# param_2 = obj.get(key)
# obj.remove(key)