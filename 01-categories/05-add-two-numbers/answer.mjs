export function answer(l1, l2) {
  console.log({ l1, l2 });

  var num1 = convertToNumber(l1);
  var num2 = convertToNumber(l2);
  var sum = num1 + num2;
  var reversedLinkedList = convertToReverseLinkedList(sum);

  var result = reversedLinkedList;

  console.log({ result });

  return result;
}

// helper functions

function convertToNumber(reversedLinkedListNode) {
  // list243 -> num342
  console.log({ reversedLinkedListNode });

  // get last, 2
  var char = `${reversedLinkedListNode.val}`;
  console.log({ char });

  // get next
  var currentNode = reversedLinkedListNode;
  while (currentNode.next) {
    var nextNode = currentNode.next;
    char = nextNode.val + char;
    currentNode = nextNode;
  }

  return +char;
}

function convertToReverseLinkedList(number) {
  var numberString = `${number}`;

  var firstChar = numberString[0];
  var lastNode = createNode(firstChar, null);

  var currentNode = lastNode;
  for (let index = 1; index < numberString.length; index++) {
    var val = numberString[index];
    var newNode = createNode(val, currentNode);

    currentNode = newNode;
  }

  var res = currentNode;
  return res;
}

function createNode(val, next) {
  return { val, next };
}
