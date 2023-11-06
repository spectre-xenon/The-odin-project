import LinkedList from "./linkedList.js";

const testList = LinkedList();
testList.append(1);
testList.prepend(4);
testList.append(2);
testList.append(5);
testList.prepend(6);
testList.append(100);
testList.pop();
testList.insertAt(666, 1);
testList.insertAt(666, 1);
testList.insertAt(666, 1);
testList.removeAt(5);

console.log(`toArray: ${JSON.stringify(testList.toArray())}`);
console.log(`head: ${JSON.stringify(testList.head())}`);
console.log(`tail: ${JSON.stringify(testList.tail())}`);
console.log(`size: ${testList.size()}`);
console.log(`at: ${JSON.stringify(testList.at(1))}`);
console.log(`contains: ${testList.contains(4)}`);
console.log(`find: ${testList.find(4)}`);
console.log(`toString: ${testList.toString()}`);
