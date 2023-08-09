/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

import { ListNode, convertNumberListToLinkedList } from "../../lib/utils.mjs";
import { answer } from "./answer.mjs";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  answer(head);
};

// test data
var head = convertNumberListToLinkedList([1, 2, 3, 4, 5]);

// execute
reverseList(head);
