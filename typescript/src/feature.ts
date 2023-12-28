/*
  Given two arrays of integers, both of which are sorted in ascending order, 
  create a function in TypeScript that merges these two arrays into a single
  array, which is also sorted in ascending order.
*/
export function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
  // console.log([...arr1, ...arr2])
  return [...arr1, ...arr2].sort();
}

/*
  Given an array of size 'n', find the majority element. The majority element 
  is the element that appears more than 'n/2' times. You may assume that the 
  array is non-empty and the majority element always exists in the array.
*/
export function findMajorityElement(nums: number[]): any {
  // Your code here
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

/*
  Write a function in TypeScript that rotates an array to the right by 'k' steps, 
  where 'k' is non-negative.
*/
export function rotateArray(nums: number[], k: number): void {
  if (nums.length === 0) return;

  // Ensure k is within the bounds of the array length
  k = k % nums.length;

  // Function to reverse a portion of the array
  function reverse(start: number, end: number): void {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  // Reverse the entire array
  reverse(0, nums.length - 1);
  // Reverse the first part
  reverse(0, k - 1);
  // Reverse the second part
  reverse(k, nums.length - 1);
}

/*
  Given a sorted array 'nums', remove the duplicates in-place such that each 
  element appears only once and returns the new length. Do not allocate extra 
  space for another array; you must do this by modifying the input array 
  in-place with O(1) extra memory.
*/
export function removeDuplicates(nums: number[]): number {
  // Check if the array is empty
  if (nums.length === 0) return 0;

  // Initialize a pointer for the position of the unique element
  let uniqueIndex = 0;

  // Iterate through the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    // If the current element is not equal to the last unique element,
    // update the next unique position
    if (nums[i] !== nums[uniqueIndex]) {
      uniqueIndex++;
      nums[uniqueIndex] = nums[i];
    }
  }

  // Return the new length, which is uniqueIndex + 1
  return uniqueIndex + 1;
}


export function checkIfExist(nums: number[]): boolean {
  // Create a hash map to store the elements
  const hashMap: { [key: number]: boolean } = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // Check if the double of the current number or half of it (if it's even) exists in the hash map
    if (hashMap[num * 2] || (num % 2 === 0 && hashMap[num / 2])) {
      return true;
    }

    // Add the current number to the hash map
    hashMap[num] = true;
  }

  // Return false if no such pair is found
  return false;
}
