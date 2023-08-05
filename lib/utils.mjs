export function convertNumberToReverseLinkedList(number) {
  var stringNumber = `${number}`;

  // create last
  var char1 = stringNumber[0];
  var linkedList1 = createLinkedList(char1, null);

  // create next
  var char2 = stringNumber[1];
  var linkedList2 = createLinkedList(char2, linkedList1);

  // create next
  var char3 = stringNumber[2];
  var linkedList3 = createLinkedList(char3, linkedList2);

  var result = JSON.stringify(linkedList3);

  console.log({ result });

  return result;
}

function createLinkedList(val, next) {
  return { val, next };
}
