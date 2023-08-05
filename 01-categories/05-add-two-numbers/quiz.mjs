/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import { convertNumberToReverseLinkedList } from "../../lib/utils.mjs";
import { answer } from "./answer.mjs";

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  return answer(l1, l2);
};

// create test data
const listNode1 = convertNumberToReverseLinkedList(342);
const listNode2 = convertNumberToReverseLinkedList(465);

// execute
addTwoNumbers(listNode1, listNode2);
