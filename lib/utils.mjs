export function convertNumberToReverseLinkedList(number) {
  var stringNumber = `${number}`;

  // create last
  var char1 = stringNumber[0];
  var lastNode = createLinkedListNode(char1, null);

  var latestNode = lastNode;
  for (let index = 1; index < stringNumber.length; index++) {
    // create next
    var char = +stringNumber[index];
    var newNode = createLinkedListNode(char, latestNode);

    latestNode = newNode;
  }

  var result = latestNode;

  return result;
}

function createLinkedListNode(val, next) {
  return { val, next };
}
