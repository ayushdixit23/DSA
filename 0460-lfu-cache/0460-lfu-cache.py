class Node:
    def __init__(self, key, value):
        self.key = key
        self.value = value
        self.freq = 1
        self.prev = None
        self.next = None


class DoublyLinkedList:
    def __init__(self):
        self.head = Node(0, 0)
        self.tail = Node(0, 0)

        self.head.next = self.tail
        self.tail.prev = self.head

        self.size = 0

    def add_front(self, node):
        node.next = self.head.next
        node.prev = self.head

        self.head.next.prev = node
        self.head.next = node

        self.size += 1

    def remove(self, node):
        node.prev.next = node.next
        node.next.prev = node.prev

        node.prev = None
        node.next = None

        self.size -= 1

    def remove_last(self):
        if self.size == 0:
            return None

        node = self.tail.prev
        self.remove(node)
        return node


class LFUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.size = 0
        self.key_map = {}
        self.freq_map = {}
        self.min_freq = 0

    def get(self, key: int) -> int:

        if key not in self.key_map:
            return -1

        node = self.key_map[key]
        self.increase_freq(node)

        return node.value

    def put(self, key: int, value: int) -> None:

        if self.capacity == 0:
            return

        if key in self.key_map:

            node = self.key_map[key]
            node.value = value

            self.increase_freq(node)

            return

        if self.size >= self.capacity:

            dll = self.freq_map[self.min_freq]

            node = dll.remove_last()

            del self.key_map[node.key]

            self.size -= 1

        node = Node(key, value)

        self.key_map[key] = node

        if 1 not in self.freq_map:
            self.freq_map[1] = DoublyLinkedList()

        self.freq_map[1].add_front(node)

        self.min_freq = 1

        self.size += 1

    def increase_freq(self, node):

        old_freq = node.freq

        old_dll = self.freq_map[old_freq]
        old_dll.remove(node)

        if old_freq == self.min_freq and old_dll.size == 0:
            self.min_freq += 1

        node.freq += 1

        if node.freq not in self.freq_map:
            self.freq_map[node.freq] = DoublyLinkedList()

        self.freq_map[node.freq].add_front(node)