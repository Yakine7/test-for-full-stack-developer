import {
  mergeSortedArrays,
  checkIfExist,
  findMajorityElement,
  removeDuplicates,
  rotateArray,
} from "./feature";

describe("mergeSortedArrays", () => {
  test("merges two empty arrays", () => {
    expect(mergeSortedArrays([], [])).toEqual([]);
  });

  test("merges two sorted arrays of equal length", () => {
    console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
    expect(mergeSortedArrays([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("merges two sorted arrays of different lengths", () => {
    expect(mergeSortedArrays([1, 3], [2, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("merges arrays where one is empty", () => {
    expect(mergeSortedArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(mergeSortedArrays([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  test("merges arrays with duplicate elements", () => {
    expect(mergeSortedArrays([1, 2, 2], [2, 3, 4])).toEqual([1, 2, 2, 2, 3, 4]);
  });
});

describe("findMajorityElement", () => {
  test("finds majority element in a small array", () => {
    expect(findMajorityElement([3, 3, 4])).toBe(3);
  });

  test("finds majority element in a larger array", () => {
    expect(findMajorityElement([2, 2, 1, 1, 2, 2])).toBe(2);
  });

  test("works with a single-element array", () => {
    expect(findMajorityElement([1])).toBe(1);
  });
});

describe("rotateArray", () => {
  test("rotates array by a non-zero steps", () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    rotateArray(arr, 3);
    expect(arr).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  test("rotates array by zero steps", () => {
    let arr = [1, 2, 3];
    rotateArray(arr, 0);
    expect(arr).toEqual([1, 2, 3]);
  });

  test("rotates array by steps greater than array length", () => {
    let arr = [1, 2, 3];
    rotateArray(arr, 4);
    expect(arr).toEqual([3, 1, 2]);
  });
});

describe("removeDuplicates", () => {
  test("removes duplicates from an array with duplicates", () => {
    let arr = [1, 1, 2];
    let newLength = removeDuplicates(arr);
    expect(newLength).toBe(2);
    expect(arr.slice(0, newLength)).toEqual([1, 2]);
  });

  test("handles array with no duplicates", () => {
    let arr = [1, 2, 3];
    let newLength = removeDuplicates(arr);
    expect(newLength).toBe(3);
    expect(arr.slice(0, newLength)).toEqual([1, 2, 3]);
  });

  test("handles an empty array", () => {
    let arr: number[] = [];
    let newLength = removeDuplicates(arr);
    expect(newLength).toBe(0);
    expect(arr).toEqual([]);
  });
});

describe("checkIfExist", () => {
  test("returns true when a number and its double exist", () => {
    expect(checkIfExist([10, 2, 5, 3])).toBe(true);
  });

  test("returns false when no number and its double exist", () => {
    expect(checkIfExist([3, 1, 7, 11])).toBe(false);
  });

  test("handles an empty array", () => {
    expect(checkIfExist([])).toBe(false);
  });

  test("handles array with zero", () => {
    expect(checkIfExist([0, 0])).toBe(true);
  });
});
