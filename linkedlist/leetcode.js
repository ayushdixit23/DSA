import { LinkedList, Node } from "./linkedlist.js";

const deleteNode = function () {
  let tempHead = linkedList.head;
  while (tempHead.next.value !== node.value) {
    tempHead = tempHead.next;
  }

  tempHead.next = node.next;
  node.next = null;

  linkedList.head = tempHead;
};
let linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);

// linkedList.display();
// deleteNode()

class Solution {
  construct(arr) {
    if (arr.length === 0) return null;
    let head = new Node(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
      let newNode = new Node(arr[i]);
      current.next = newNode;
      current = newNode;
    }

    return head;
  }
}

// const sol = new Solution();
// const list = sol.construct([1, 2, 3, 5]);

// console.log(list)

const oddEvenList = function (head) {
  if (!head || !head.next) return head;

  let oddLinkedList = head;
  let evenLinkedList = head.next;
  let evenHead = evenLinkedList;

  while (evenLinkedList !== null && evenLinkedList.next !== null) {
    oddLinkedList.next = evenLinkedList.next;
    oddLinkedList = oddLinkedList.next;
    evenLinkedList.next = oddLinkedList.next;
    evenLinkedList = evenLinkedList.next;
  }

  oddLinkedList.next = evenHead;
  return head;
};

// const answer = oddEvenList(linkedList.head);

// console.log(answer);
const reorderList = function (head) {
  if (!head || !head.next) return;

  let slow = head, fast = head;
  while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
  }

  let prev = null, curr = slow.next;
  slow.next = null; 
  while (curr) {
      let nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
  }
  let first = head, second = prev;
  while (second) {
      let tmp1 = first.next, tmp2 = second.next;
      first.next = second;
      second.next = tmp1;
      first = tmp1;
      second = tmp2;
  }
};
