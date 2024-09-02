import { SearchBinary } from "../src/search";

test("Binary.Search", () => {
	const arr0 = Array<number>();
	expect(SearchBinary(arr0, 2)).toBe(-1);

	const arr1 = [1];
	expect(SearchBinary(arr1, 2)).toBe(-1);

	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	expect(SearchBinary(arr, 2)).toBe(1);
	expect(SearchBinary(arr, 8)).toBe(7);
	expect(SearchBinary(arr, 1)).toBe(0);
	expect(SearchBinary(arr, 9)).toBe(8);
	expect(SearchBinary(arr, 5)).toBe(4);
	expect(SearchBinary(arr, 4)).toBe(3);
	expect(SearchBinary(arr, 5)).toBe(4);
});


// The flat() method of Array instances creates a new array with all sub-array elements 
// concatenated into it recursively up to the specified depth.
test("Array.flat", () => {
	const arr1 = [1, 2, [3, 4]];
	expect(arr1.flat()).toEqual([1, 2, 3, 4]);

	const arr2 = [1, 2, [3, 4, [5, 6]]];
	expect(arr2.flat()).toEqual([1, 2, 3, 4, [5, 6]]);
	arr2.flat();

	const arr3 = [1, 2, [3, 4, [5, 6]]];
	expect(arr3.flat(2)).toEqual([1, 2, 3, 4, 5, 6]);
	arr3.flat(2);

	const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
	expect(arr4.flat(Infinity)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

	// remove mepty values
	const arr5 = [1, 2, , [3, 4]];
	expect(arr5.flat()).toEqual([1, 2, 3, 4]);
});

// The includes() method of Array instances determines whether an array includes a certain value among its entries, 
// returning true or false as appropriate.
test("Array.includes", () => {

	const array1 = [1, 2, 3];
	expect(array1.includes(2)).toEqual(true);
	
	const pets = ['cat', 'dog', 'bat'];
	expect(pets.includes("cat")).toEqual(true);
	expect(pets.includes("cat1")).toEqual(false);
	expect(pets.includes("cat", 1)).toEqual(false);

	//  NaN can be correctly searched for.
	const array2 = [1, 2, 3, NaN];
	expect(array2.includes(NaN)).toEqual(true);

	//Using includes() on sparse arrays
	const array3 = [1, 2, , NaN];
	expect(array3.includes(undefined)).toEqual(true);
});
