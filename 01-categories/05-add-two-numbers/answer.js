// functions

export var getNumberFromLinkedList = function (linkedList) {
  var values = [];

  // add first value
  values.push(linkedList.val);

  while (linkedList.next) {
    values.push(linkedList.val);
  }

  return values;
};
