export function answer(s) {
  var stack = [];
  var pairs = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let index = 0; index < s.length; index++) {
    if (s[index] === "(" || s[index] === "{" || s[index] === "[") {
      stack.push(s[index]);
    } else {
      // (
      var char = stack.pop();

      if (s[index] !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
