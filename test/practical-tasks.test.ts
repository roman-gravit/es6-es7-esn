import { IsPalindrome, IsPalindromeIgnoreSpecialSymbols, FindShortestWordSplitFor, FindShortestWordSort } from "../src/practical-tasks";
import { StringToInitials, StringToInitialsMap, SumDigits, GetMinMaxInArray, GetMinMaxInArraySort, GetMinMaxInArrayMath } from "../src/practical-tasks";
import { StringDuplicateIndexReduce, StringDuplicateIndexMap } from "../src/practical-tasks";

test("StringDuplicateIndex", () => {
	expect(StringDuplicateIndexReduce("aBcd")).toEqual("A-Bb-Ccc-Dddd");
	expect(StringDuplicateIndexReduce("cWAt")).toEqual("C-Ww-Aaa-Tttt");

	expect(StringDuplicateIndexMap("aBcd")).toEqual("A-Bb-Ccc-Dddd");
	expect(StringDuplicateIndexMap("cWAt")).toEqual("C-Ww-Aaa-Tttt");
});

test("GetMinMaxInArray", () => {
	expect(GetMinMaxInArray([1, 2, 3, 4, 5, 12, 0, 11])).toEqual([0, 12]);
	expect(GetMinMaxInArray([1])).toEqual([1, 1]);

	expect(GetMinMaxInArraySort([1, 2, 3, 4, 5, 12, 0, 11])).toEqual([0, 12]);
	expect(GetMinMaxInArraySort([1])).toEqual([1, 1]);
	
	expect(GetMinMaxInArrayMath([1, 2, 3, 4, 5, 12, 0, 11])).toEqual([0, 12]);
	expect(GetMinMaxInArrayMath([1])).toEqual([1, 1]);
});

test("SumDigits", () => {
	expect(SumDigits(99)).toBe(18);
	expect(SumDigits(-32)).toBe(5);
});

test("StringToInitials", () => {
	expect(StringToInitials("Bill Gates")).toBe("B.G.");
	expect(StringToInitials("Elon Mask")).toBe("E.M.");
	expect(StringToInitialsMap("Bill Gates")).toBe("B.G.");
	expect(StringToInitialsMap("Elon Mask")).toBe("E.M.");
});

test("FindShortestWordSort", () => {
	expect(FindShortestWordSort("rev d erse asda asd")).toBe("d");
	expect(FindShortestWordSort("abcde asdad asd asd")).toBe("asd");
	expect(FindShortestWordSort("abcde")).toBe("abcde");
	expect(FindShortestWordSort("aaa bbb ccc ddd")).toBe("aaa");
});

test("FindShortestWordSplitFor", () => {
	expect(FindShortestWordSplitFor("rev d erse asda asd")).toBe("d");
	expect(FindShortestWordSplitFor("abcde asdad asd asd")).toBe("asd");
	expect(FindShortestWordSplitFor("abcde")).toBe("abcde");
	expect(FindShortestWordSplitFor("aaa bbb ccc ddd")).toBe("aaa");
});

test("IsPalindrome", () => {
	expect(IsPalindrome("reverse")).toBe(false);
	expect(IsPalindrome("")).toBe(true);
	expect(IsPalindrome("abcde")).toBe(false);
	expect(IsPalindrome("kyayk")).toBe(true);
	expect(IsPalindrome("racecar")).toBe(true);
});

test("IsPalindromeIgnoreSpecialSymbols", () => {
	expect(IsPalindromeIgnoreSpecialSymbols( "A ' bacab ''A")).toBe(true);
	expect(IsPalindromeIgnoreSpecialSymbols("")).toBe(true);
	expect(IsPalindromeIgnoreSpecialSymbols("reverse")).toBe(false);
	expect(IsPalindromeIgnoreSpecialSymbols("kyayk")).toBe(true);
	expect(IsPalindromeIgnoreSpecialSymbols("abcde")).toBe(false);
	expect(IsPalindromeIgnoreSpecialSymbols("racecar")).toBe(true);
	expect(IsPalindromeIgnoreSpecialSymbols("A ' bacab   ''A")).toBe(true);
});
