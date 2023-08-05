export function answer(l1, l2) {
  console.log({ l1, l2 });

  var num1 = convertToNumber(l1);

  var result = num1;

  console.log({ result });

  return result;
}

function convertToNumber(linkedListNode) {
  // num342 -> list243
  console.log({ linkedListNode });

  // get last, 2
  var char = `${linkedListNode.val}`;
  console.log({ char });

  // get next
  var currentNode = linkedListNode;
  while (linkedListNode.next) {
    var nextNode = currentNode.next;
    char += nextNode.val;

    currentNode = nextNode;
  }

  return char;
}

function convertToReverseLinkedList(params) {}
