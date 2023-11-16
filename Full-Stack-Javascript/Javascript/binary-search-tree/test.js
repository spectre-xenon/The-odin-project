import Tree from "./binarySearchTree.js";

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const random = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10));
console.log(random);

const testTree = Tree(random);

prettyPrint(testTree.getRoot());

testTree.insert(1000);
testTree.insert(1000);
testTree.insert(1000);
testTree.insert(1000);
testTree.insert(1000);

prettyPrint(testTree.getRoot());

testTree.remove(1);

prettyPrint(testTree.getRoot());

testTree.reBalance();

prettyPrint(testTree.getRoot());
