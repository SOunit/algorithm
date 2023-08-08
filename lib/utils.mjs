export function convertNumberToReverseLinkedList(number) {
  var stringNumber = `${number}`;

  // create last
  var char1 = stringNumber[0];
  var lastNode = new ListNode(char1, null);

  var latestNode = lastNode;
  for (let index = 1; index < stringNumber.length; index++) {
    // create next
    var char = +stringNumber[index];
    var newNode = new ListNode(char, latestNode);

    latestNode = newNode;
  }

  var result = latestNode;

  return result;
}

export function ListNode(val, next) {
  return { val, next };
}
