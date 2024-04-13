import { IsPalindrome, IsPalindromeIgnoreSpecialSymbols } from "../src/practical-tasks";
import { FindShortestWordSplitFor, FindShortestWordSort } from "../src/practical-tasks";
import { StringToInitials, StringToInitialsMap } from "../src/practical-tasks";

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
