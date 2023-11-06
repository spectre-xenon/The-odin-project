import Node from "./node.js";

export default function LinkedList() {
  let _head = null;
  let _tail = null;

  const prepend = (value) => {
    const newNode = Node(value);
    if (_head) newNode.nextNode = _head;
    _head = newNode;
  };

  const append = (value) => {
    const newNode = Node(value);

    if (!_head) return prepend(value);

    if (_tail) {
      _tail.nextNode = newNode;
      _tail = newNode;
    } else {
      _tail = newNode;
      _head.nextNode = _tail;
    }
  };

  const head = () => _head;
  const tail = () => _tail;

  const toArray = () => {
    let pointer = _head;
    const Arr = [];

    while (pointer) {
      Arr.push(pointer);
      pointer = pointer.nextNode;
    }

    return Arr;
  };

  const size = () => toArray().length;

  const at = (index) => toArray()[index];

  const contains = (value) => {
    let pointer = _head;
    while (pointer) {
      if (pointer.value === value) return true;
      pointer = pointer.nextNode;
    }
    return false;
  };

  const find = (value) => {
    let pointer = _head;
    let index = 0;
    while (pointer) {
      if (pointer.value === value) return index;
      index++;
      pointer = pointer.nextNode;
    }
    return null;
  };

  const toString = () => {
    let pointer = _head;
    let string = "";
    while (pointer) {
      string += `(${pointer.value}) -> `;
      pointer = pointer.nextNode;
    }
    string += "null";
    return string;
  };

  const pop = () => {
    let pointer = _head;
    while (pointer) {
      if (pointer.nextNode === _tail) {
        pointer.nextNode = null;
        _tail = pointer;
        return;
      }
      pointer = pointer.nextNode;
    }
  };

  return {
    prepend,
    append,
    head,
    tail,
    toArray,
    size,
    at,
    pop,
    contains,
    find,
    toString,
  };
}
