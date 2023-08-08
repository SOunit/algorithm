import { ListNode } from "../../lib/utils.mjs";

export function answer(head) {
  // empty case
  if (!head || !head.val) {
    return null;
  }

  // 1 case
  if (!head.next) {
    return new ListNode(head.val, null);
  }

  // multiple node case

  // last node
  var resNode = new ListNode(head.val, null);

  // 4, 3, 2, 1
  var cur = head.next;
  while (cur.next) {
    var newNode = new ListNode(cur.val, resNode);
    resNode = newNode;

    cur = cur.next;
  }
  var firstNode = new ListNode(cur.val, resNode);

  var res = firstNode;
  console.log({ res });
}
