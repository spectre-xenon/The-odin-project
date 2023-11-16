import Node from "./node.js";
import mergeSort from "./mergeSort.js";

// Sort and Remove duplicates
const sortArr = (array) => [...new Set(mergeSort(array))];

const treeBuilder = (array) => {
  if (array.length === 1) return Node(array[0]);
  const halfPoint = Math.trunc(array.length / 2);
  // Return tree root at the end
  return Node(
    array[halfPoint],
    treeBuilder(array.slice(halfPoint)),
    treeBuilder(array.slice(0, halfPoint))
  );
};

export default function Tree(array) {
  let root = treeBuilder(sortArr(array));

  const insert = (value, pointer = root, prevPointer = null) => {
    // If there's no next node create a node
    if (!pointer) {
      if (prevPointer.value < value) prevPointer.right = Node(value);
      else prevPointer.left = Node(value);
      return 0;
    }

    if (pointer.value === value) return 1;
    // Traverse tree whether value is < or > node value
    return insert(
      value,
      pointer.value < value ? pointer.right : pointer.left,
      pointer
    );
  };

  const remove = (value, pointer = root, prevPointer = null) => {
    if (!pointer) return 1;
    if (pointer.value === value) {
      if (!prevPointer) {
        pointer = null;
        return 0;
      }

      const rightOrLeft = prevPointer.value < value ? "right" : "left";

      if (!pointer.right && !pointer.left) prevPointer[rightOrLeft] = null;
      else if (pointer.right && !pointer.left)
        prevPointer[rightOrLeft] = pointer.right;
      else if (!pointer.right && pointer.left)
        prevPointer[rightOrLeft] = pointer.left;
      else {
        // Todo finish remove case of node having two children
        const inOrderTest = inOrder(pointer);
        console.log(inOrderTest);
        inOrderTest.splice(Math.trunc(inOrderTest.length / 2), 1);
        console.log(inOrderTest);
        const testRoot = treeBuilder(inOrderTest);
        prevPointer[rightOrLeft] = testRoot;
      }
    }

    return remove(
      value,
      pointer.value < value ? pointer.right : pointer.left,
      pointer
    );
  };

  const inOrderArr = [];

  const inOrder = (pointer = root) => {
    if (!pointer) return 1;
    inOrder(pointer.left);
    inOrderArr.push(pointer.value);
    inOrder(pointer.right);
    return inOrderArr;
  };

  const reBalance = () => {
    const sortedArr = sortArr(inOrder());
    root = treeBuilder(sortedArr);
  };

  const getRoot = () => root;

  return { insert, remove, inOrder, reBalance, getRoot };
}
