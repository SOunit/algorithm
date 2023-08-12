export function CreateClass(k, nums) {
  this.nth = k - 1;
  this.nums = nums;
}

export function add(val) {
  // add number
  this.nums.push(val);

  // order by desc
  this.nums.sort((a, b) => b - a);

  // return nth number
  return this.nums[this.nth];
}
