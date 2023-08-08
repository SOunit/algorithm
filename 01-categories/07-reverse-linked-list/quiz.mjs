/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import { ListNode, convertNumberToLinkedList } from "../../lib/utils.mjs";
import { answer } from "./answer.mjs";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  answer(head);
};

// test data
var head = convertNumberToLinkedList(12345);

// execute
reverseList(head);
