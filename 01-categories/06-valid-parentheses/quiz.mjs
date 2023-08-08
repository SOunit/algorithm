import { answer } from "./answer.mjs";

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var res = answer(s);
  console.log({ res });
};

// test data
var test1 = "()()";
var test2 = "{[](){}})))";
var test3 = "{[]{}()(())()}{[](){}}";

// execute
isValid(test1);
isValid(test2);
isValid(test3);
