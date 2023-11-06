import Node from "./node.js";

export default function LinkedList() {
  let _head = null;
  let _tail = null;

  const prepend = (value) => {
    const newNode = Node(value);
    if (_head) newNode.nextNode = _head;
    if (_head && !_tail) _tail = _head;
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

  const toArray = (pointer = _head, Arr = []) => {
    if (!pointer) return Arr;
    return toArray(pointer.nextNode, [...Arr, pointer]);
  };

  const size = () => toArray().length;

  const at = (index) => toArray()[index];

  const contains = (value, pointer = _head) => {
    if (!pointer) return false;
    if (pointer.value === value) return true;
    return contains(value, pointer.nextNode);
  };

  const find = (value, pointer = _head, index = 0) => {
    if (!pointer) return null;
    if (pointer.value === value) return index;
    return find(value, pointer.nextNode, index + 1);
  };

  const toString = (pointer = _head, string = "") => {
    if (!pointer) return string + "null";
    return toString(pointer.nextNode, string + `(${pointer.value}) -> `);
  };

  const insertAt = (value, index) => {
    const newNode = Node(value);
    newNode.nextNode = at(index);
    at(index - 1).nextNode = newNode;
  };

  const removeAt = (index) => {
    if (!at(index + 1)) return;
    at(index - 1).nextNode = at(index + 1);
  };

  const pop = (pointer = _head) => {
    if (!pointer) return;
    if (pointer.nextNode === _tail) {
      pointer.nextNode = null;
      _tail = pointer;
      return;
    }
    return pop(pointer.nextNode);
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
    insertAt,
    removeAt,
  };
}
