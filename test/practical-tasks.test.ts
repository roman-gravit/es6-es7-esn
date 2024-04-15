import { IsPalindrome, IsPalindromeIgnoreSpecialSymbols, FindShortestWordSplitFor, FindShortestWordSort, StringToInitials, 
	StringToInitialsMap, SumDigits, GetMinMaxInArray, GetMinMaxInArraySort, GetMinMaxInArrayMath, StringDuplicateIndexReduce, 
	StringDuplicateIndexMap, FindStringCapitalLettersForLoop, FindStringCapitalLettersReduce, FooBarNumber, 
	GetUniqueArrayElements, CreatePhoneNumber, FindStringVowels, CapitalizeFirstWordLetterFor, CapitalizeFirstWordLetterMap } from "../src/practical-tasks";

	

test("CapitalizeFirstWordLetter", () => {
	expect(CapitalizeFirstWordLetterFor("a asd dfg  d asdasdads")).toEqual("A Asd Dfg  D Asdasdads");
	expect(CapitalizeFirstWordLetterFor("hello world")).toEqual("Hello World");
	expect(CapitalizeFirstWordLetterFor(" hello world")).toEqual(" Hello World");

	expect(CapitalizeFirstWordLetterMap("a asd dfg  d asdasdads")).toEqual("A Asd Dfg  D Asdasdads");
	expect(CapitalizeFirstWordLetterMap("hello world")).toEqual("Hello World");
	expect(CapitalizeFirstWordLetterMap(" hello world")).toEqual(" Hello World");
});

test("FindStringVowels", () => {
	expect(FindStringVowels("hello")).toEqual(2);
	expect(FindStringVowels("hello world")).toEqual(3);
});

test("CreatePhoneNumber", () => {
	expect(CreatePhoneNumber(123456789)).toEqual("(123) 456-789");
	expect(CreatePhoneNumber(555095611)).toEqual("(555) 095-611");
});

test("GetUniqueArrayElements", () => {
	expect(GetUniqueArrayElements([[1,2,3], [4,1,5], [6,7,8,5]])).toEqual([1,2,3,4,5,6,7,8]);
	expect(GetUniqueArrayElements([[1], [2], [3,2,2], [4,1,1,2]])).toEqual([1,2,3,4]);
});

test("FooBarNumber", () => {
	expect(FooBarNumber(5)).toEqual("1,2,foo,4,bar");
	expect(FooBarNumber(15)).toEqual("1,2,foo,4,bar,foo,7,8,foo,bar,11,foo,13,14,foobar");
});

test("FindStringCapitalLettersForLoop", () => {
	expect(FindStringCapitalLettersForLoop("CodEWaRs")).toEqual([0, 3, 4, 6]);
	expect(FindStringCapitalLettersForLoop("justForTest")).toEqual([4, 7]);
	expect(FindStringCapitalLettersForLoop("CodEWaRsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaavvvvvvvvvvvvvvv")).toEqual([0, 3, 4, 6]);

	expect(FindStringCapitalLettersReduce("CodEWaRs")).toEqual([0, 3, 4, 6]);
	expect(FindStringCapitalLettersReduce("justForTest")).toEqual([4, 7]);
	expect(FindStringCapitalLettersReduce("CodEWaRsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaavvvvvvvvvvvvvvv")).toEqual([0, 3, 4, 6]);
});

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
