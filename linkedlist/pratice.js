import { LinkedList } from "./linkedlist/linkedlist.js";

const list = new LinkedList();
list.add(1);
list.add(1);
list.add(2);
list.add(2);
list.add(3);
list.add(3);

list.display()

const deleteDuplicates = () => {
  let temp = list.head;

  while (temp !== null && temp.next !== null) {
    const nextNode = temp.next
    const nextsNextNode = nextNode.next

    if(temp.val===nextNode.val){
        temp.next = nextsNextNode
        nextNode.next = null
    }else{
        temp = temp.next
    }
  }
};

deleteDuplicates()

list.display()

