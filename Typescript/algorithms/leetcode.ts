// works by looping over all the data and getting the difference of the item from the target.
// if the difference is found in the map of values, return the index of the item subtracted from
// the target and the stored index of the complement in the map.
function twoSum(nums: number[], target: number): number[] {
  const hash = new Map();
  const output = [];
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (hash.has(complement)) {
      output.push(hash.get(complement));
      output.push(i);
      break;
    }
    hash.set(nums[i], i);
  }
  return output;
}
console.log(twoSum([2, 7, 11, 15], 9));

// works by sorting the array and using two pointers in an inner loop to calculate the sum and see
// if it adds up to 0. If it doesn't, it moves ahead until it reaches an item that hasn't been found or used.
function threeSum(nums: number[]): number[][] {
  const output: number[][] = [];
  if (nums.length <= 0) {
    return output;
  }

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        output.push([nums[i], nums[left], nums[right]]);

        left++;
        while (nums[left] == nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }
  return output;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
