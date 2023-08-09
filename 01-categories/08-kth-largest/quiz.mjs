import { CreateClass, add } from "./answer.mjs";

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = CreateClass;

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = add;

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

// test data
var k = 3;
var nums = [4, 5, 8, 2];

// execute
var obj = new KthLargest(k, nums);

var param_1 = obj.add(3);
var param_2 = obj.add(5);
var param_3 = obj.add(10);
var param_4 = obj.add(9);
var param_5 = obj.add(4);

console.log({ expected: 4, val: param_1 });
console.log({ expected: 5, val: param_2 });
console.log({ expected: 5, val: param_3 });
console.log({ expected: 8, val: param_4 });
console.log({ expected: 8, val: param_5 });
