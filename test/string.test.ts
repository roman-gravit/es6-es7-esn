// The padStart() method 
// pads this string with another string (multiple times, if needed) until the resulting 
// string reaches the given length. The padding is applied from the start of this string.

test("string padStart", () => {
	{
		expect("abc".padStart(10)).toEqual("       abc");
		expect("abc".padStart(10, "foo")).toEqual("foofoofabc");
		expect("abc".padStart(6, "123465")).toEqual("123abc");
		expect("abc".padStart(8, "0")).toEqual("00000abc");
		expect("abc".padStart(1)).toEqual("abc");
	}
});


//  The padEnd() method 
//  pads this string with a given string (repeated, if needed)
//  so that the resulting string reaches a given length. The padding is applied from the end of this string.

test("string padStart", () => {
	{
		expect("abc".padEnd(10)).toEqual("abc       ");
		expect("abc".padEnd(10, "foo")).toEqual("abcfoofoof");
		expect("abc".padEnd(6, "123456")).toEqual("abc123");
		expect("abc".padEnd(1)).toEqual("abc");
	}
});