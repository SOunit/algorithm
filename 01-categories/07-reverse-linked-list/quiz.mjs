/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import { ListNode } from "../../lib/utils.mjs";
import { answer } from "./answer.mjs";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  answer(head);
};

// test data
var lastNode = new ListNode(5, null);
var currentNode = lastNode;
for (let index = 4; 0 < index; index--) {
  var newNode = new ListNode(index, currentNode);
  currentNode = newNode;
}

var testData = JSON.stringify(currentNode);
console.log({ testData });

// execute
reverseList();
