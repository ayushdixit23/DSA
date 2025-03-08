import { Stack } from "./stack.js";

const logFunctionOutput = (fn) => {
    console.log(fn());
}

const stack = new Stack();

logFunctionOutput(() => stack.isEmpty());

stack.push(2);
stack.push(3);
stack.push(5);
stack.pop();
stack.push(12);
stack.removeAtIndex(2)
stack.push(20);

logFunctionOutput(() => stack.peek());
logFunctionOutput(() => stack.size());
logFunctionOutput(() => stack.isEmpty());

stack.display();
