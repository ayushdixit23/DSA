import { LinkedList } from "./linkedlist.js";

const consoleIfIsEmplty = () => {
  console.log(list.isEmpty());
  return;
};

const consoleSize = () => {
  console.log(list.length());
  return;
};

const list = new LinkedList();
// consoleIfIsEmplty();
list.add(1);
list.add(10);
list.add(10);
list.addFirst(100);
list.add(3);
list.addFirst(40);
list.addAtIndex(5,20)
list.add(10);

// consoleIfIsEmplty();

list.display();
consoleSize()

// list.reverse()
list.reverseUsingRecursion()

// list.removeFirst()
// list.removeLast()
// list.removeByIndex(3)
// list.removeByValueAll(10)
list.display();
consoleSize()

// const deleteDuplicates = () => {
//   let temp = list.head;

//   while (temp !== null && temp.next !== null) {
//     const nextNode = temp.next
//     const nextsNextNode = nextNode.next

//     if(temp.val===nextNode.val){
//         temp.next = nextsNextNode
//         nextNode.next = null
//     }else{
//         temp = temp.next
//     }
//   }
// };

// deleteDuplicates()