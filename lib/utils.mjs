export function convertNumberToReverseLinkedList(number) {
  var stringNumber = `${number}`;

  // create first
  var lastChar = stringNumber[stringNumber.length - 1];
  var linkedList = createLinkedList(lastChar, null);

  var result = linkedList;

  console.log({ result });

  return result;
}

function createLinkedList(val, next) {
  return { val, next };
}
