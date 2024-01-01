/*
  Given two arrays of integers, create a function that concatenates these two arrays 
  and then sorts the resulting array in descending order.
*/
export function concatenateAndSort(arr1: number[], arr2: number[]): number[] {
    return [...arr1, ...arr2].sort((a, b) => b - a);
}

/*
  Given an array of integers 'nums' and an integer 'target', 
  write a function to find all unique pairs in the array that sum up to 'target'.
  Return an array of pairs.
*/
export function findAllPairs(
    nums: number[],
    target: number,
): [number, number][] {
    let pairs: [number, number][] = [];
    let nums1 = nums.filter(
        (item, index) => nums.indexOf(item) == index || item == target / 2,
    );
    console.log(nums);
    for (let i = nums1.length - 1; i > 0; i--) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums1[j] + nums1[i] === target) {
                const pair: [number, number] = [nums1[j], nums1[i]];
                pairs.push(pair);
            }
        }
    }
    return pairs;
}

/*
  Given an unsorted array of integers 'nums',
  write a function to find the length of the longest consecutive elements sequence.
*/
export function longestConsecutiveSequence(nums: number[]): number {
    if (nums.length === 0) return 0;
    let acc: number = 1;
    nums.sort((a, b) => b - a).forEach((num, i) => {
        if (num - nums[i + 1] === 1) acc++;
    });

    return acc;
}

/*
  Given an array of integers 'nums' and an integer 'k',
  write a function to remove all elements that are divisible by 'k'
  and return the new length of the array.
*/
export function removeDivisibleBy(nums: number[], k: number): number {
    const divisibleByArr = nums.filter((num) => num % k !== 0);
    nums.length = 0;
    nums.push(...divisibleByArr);
    return nums.length;
}

/*
  Given an array of integers, where every element appears twice except for one,
  write a function to find that single one that does not appear twice.
*/
export function findSingleElement(nums: number[]): number {
    let numCount: Record<number, number> = {};

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        numCount[num] = (numCount[num] || 0) + 1;
    }

    for (let key in numCount) {
        if (numCount[key] === nums.length || numCount[key] === 1) {
            return +key;
        }
    }

    return 0;
}
