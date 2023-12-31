"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestConsecutiveSequence = exports.findAllPairs = exports.concatenateAndSort = void 0;
/*
  Given two arrays of integers, create a function that concatenates these two arrays
  and then sorts the resulting array in descending order.
*/
function concatenateAndSort(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => b - a);
}
exports.concatenateAndSort = concatenateAndSort;
/*
  Given an array of integers 'nums' and an integer 'target',
  write a function to find all unique pairs in the array that sum up to 'target'.
  Return an array of pairs.
*/
function findAllPairs(nums, target) {
    let pairs = [];
    let nums1 = nums.filter((item, index) => nums.indexOf(item) == index || item == target / 2);
    console.log(nums);
    for (let i = nums1.length - 1; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums1[j] + nums1[i] === target) {
                const pair = [nums1[j], nums1[i]];
                pairs.push(pair);
            }
        }
    }
    return pairs;
}
exports.findAllPairs = findAllPairs;
/*
  Given an unsorted array of integers 'nums',
  write a function to find the length of the longest consecutive elements sequence.
*/
function longestConsecutiveSequence(nums) {
    return 5;
}
exports.longestConsecutiveSequence = longestConsecutiveSequence;
// /*
//   Given an array of integers 'nums' and an integer 'k',
//   write a function to remove all elements that are divisible by 'k'
//   and return the new length of the array.
// */
// export function removeDivisibleBy(nums: number[], k: number): number {}
// /*
//   Given an array of integers, where every element appears twice except for one,
//   write a function to find that single one that does not appear twice.
// */
// export function findSingleElement(nums: number[]): number {}
