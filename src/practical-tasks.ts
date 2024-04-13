export { IsPalindrome, IsPalindromeIgnoreSpecialSymbols };
export { FindShortestWordSplitFor, FindShortestWordSort };
export { StringToInitials, StringToInitialsMap };


function StringToInitials(str: string): string {
	let words =  str.split(" ");
	const first = words[0][0].toUpperCase();
	const second = words[1][0].toUpperCase();

	words = words.map((value, index) => {
		return value.substring(0, 1).toUpperCase();
	});
	return `${first}.${second}.`;
}

function StringToInitialsMap(str: string): string {
	return str.split(" ")
		      .map((value) => {
				  return `${value.substring(0, 1).toUpperCase()}.`;})
			  .join("");
}

function FindShortestWordSort(str: string): string {
	return str.split(" ").sort( (a, b) => a.length - b.length)[0];
}

function FindShortestWordSplitFor(str: string): string {
	const words = str.split(" ");
	let min_word = words[0];
	for(let i =1; i < words.length; i++) {
		if(words[i].length < min_word.length) {
			min_word = words[i];
		}
	}
	return min_word;
}

function IsPalindrome(str: string): boolean {
	let backword = "";

	for(let char of str) {
		backword = char + backword;
	}

	return backword===str;
}

function IsPalindromeIgnoreSpecialSymbols(str: string): boolean {
	str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

	let left = 0;
	let right = str.length - 1;

	while(left < right) {
		if(str[left]!==str[right]) {
			return false;
		}
		left++;
		right--;
	}

	return true;
}