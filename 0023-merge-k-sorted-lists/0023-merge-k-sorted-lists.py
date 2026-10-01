# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
import heapq
class Solution:
    # def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
    #     dummyNode = ListNode(-1)
    #     curr = dummyNode
        
    #     curr1 = list1
    #     curr2 = list2

    #     while curr1 and curr2:
    #         if curr1.val <= curr2.val:
    #             next = curr1.next
    #             curr.next = curr1
    #             curr = curr1
    #             curr1 = next
    #         else:
    #             next = curr2.next
    #             curr.next = curr2
    #             curr = curr2
    #             curr2 = next
        
    #     if curr1:
    #         curr.next = curr1
        
    #     if curr2:
    #         curr.next = curr2
        
    #     return dummyNode.next

    # def mergeSort(self, lists, start, end):
    #     if start == end:
    #         return lists[start]

    #     mid = (start + end) // 2
    #     head1 = self.mergeSort(lists, start, mid)
    #     head2 = self.mergeSort(lists, mid + 1, end)

    #     return self.mergeTwoLists(head1,head2)

    # def mergeKLists(self, lists: list[ListNode | None]) -> ListNode | None:
    #     n = len(lists)

    #     if n == 0:
    #         return None

    #     if n == 1:
    #         return lists[0]

    #     head = self.mergeSort(lists, 0, n - 1)
    #     return head

    def mergeKLists(self, lists: list[ListNode | None]) -> ListNode | None:
        n = len(lists)
        heap = []
        dummyNode = ListNode(0)
        curr = dummyNode

        for i in range(n):
            head = lists[i]
            while head:
                heapq.heappush(heap, head.val)
                head = head.next
        
        while heap:
            val = heapq.heappop(heap)
            node = ListNode(val)
            curr.next = node
            curr = node
        
        return dummyNode.next