class Node:
    def __init__(self, key, value,next=None, prev=None):
        self.key = key
        self.value = value
        self.next = next
        self.prev = prev

class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.head = None
        self.tail = None
        self.hash_map = {}
        self.size = 0
    
    def addNode(self, key, value):
        node = Node(key, value)

        if self.tail is None:
            self.head = node
        else:
            self.tail.next = node
            node.prev = self.tail
        
        self.tail = node
        self.size += 1
    
    def removeNode(self, node):
        if node is None:
            return

        if node.prev:
            node.prev.next = node.next
        else:
            self.head = node.next

        if node.next:
            node.next.prev = node.prev
        else:
            self.tail = node.prev

        node.next = None
        node.prev = None

        self.size -= 1

    def get(self, key: int) -> int:
        if key in self.hash_map:
            node = self.hash_map[key]
            if node != self.tail:
                self.removeNode(node)
                self.addNode(node.key, node.value)
                self.hash_map[key] = self.tail
            
            return node.value
        else:
            return -1

    def put(self, key: int, value: int) -> None:
        if key in self.hash_map:
            self.removeNode(self.hash_map[key])
            del self.hash_map[key]
            self.addNode(key, value)
        else:
            if self.size >= self.capacity:
                old_key = self.head.key
                self.removeNode(self.head)
                del self.hash_map[old_key]
            self.addNode(key, value)
        
        self.hash_map[key] = self.tail
            


# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)