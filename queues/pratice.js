import { Queue } from "./queue.js";

const logFunctionOutput = (fn) => {
 console.log(fn());
};

const queue = new Queue();

logFunctionOutput(() => queue.isEmpty());

queue.push(3);
queue.push(32);
queue.push(5);
queue.push(77);
queue.pop();
queue.push(80);

queue.display();

logFunctionOutput(() => queue.size());
queue.removeAtIndex(3);

logFunctionOutput(() => queue.peek());

queue.display();
logFunctionOutput(() => queue.size());

logFunctionOutput(() => queue.isEmpty());
