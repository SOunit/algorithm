export function CreateClass(k, nums) {
  this.nth = k;
  this.nums = nums;
}

export function add(val) {
  // add number
  this.nums.push(val);

  // order by desc
  this.nums.reverse();

  // return nth number
  return this.nums[this.nth];
}
