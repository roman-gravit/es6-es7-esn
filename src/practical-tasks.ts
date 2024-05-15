export { IsPalindrome, IsPalindromeIgnoreSpecialSymbols, FindShortestWordSplitFor, FindShortestWordSort, StringDuplicateIndexReduce,
	StringToInitials, StringToInitialsMap, SumDigits, GetMinMaxInArray, GetMinMaxInArraySort, GetMinMaxInArrayMath, StringDuplicateIndexMap,
	FindStringCapitalLettersForLoop, FindStringCapitalLettersReduce, FooBarNumber, GetUniqueArrayElements, CreatePhoneNumber, FindStringVowels,
	CapitalizeFirstWordLetterFor, CapitalizeFirstWordLetterMap, GetTwoDigitsArrayIndeces, GetTwoDigitsArrayIndecesMemo };

function GetTwoDigitsArrayIndecesMemo(arr: Array<number>, num: number): [number, number] {

	const cache= new Map<number, number>();
	
	for(let i = 0; i < arr.length; i++) {
		const current = arr[i];
		const needed = num - current;

		// try to find it in the cache
		if(!cache.has(needed)) {
			cache.set(current, i);
		} else {
			return [cache.get(needed)||0, i];
		}
	}


	return [-1, -1];
}

function GetTwoDigitsArrayIndeces(arr: Array<number>, num: number): [number, number] {
	
	for(let i = 0; i < arr.length-1; i++) {
		const current = arr[i];
		
		// try to find in array num-arr[i]
		const second_index = arr.findIndex((second, index) => {
			if(index<=i) {
				return false;
			}
			return second===(num-current);
		}
		);
		if(second_index===-1) {
			continue;
		} 

		return [i, second_index];
	}
	
	
	return [-1, -1];
}

function CapitalizeFirstWordLetterFor(str: string): string {
	// Variant 1: check every symbol
	let result = "";

	for(let i =0; i<str.length; i++) {
		if(str[i]===" ") {
			result+=" ";
		
		} else {
			if(str[i-1] ===" " || i==0) {
				result+=str[i].toUpperCase();
		
			} else {
				result+=str[i];
			}
		}
	}

	return result;
}


function CapitalizeFirstWordLetterMap(str: string): string {
	// Variant 2: map
	return str.split(" ")
			  .map( (word) => {
						if(word ==="") {
							return "";
						}
						return `${word[0].toUpperCase()}${word.slice(1)}`;
					})
			  .join(" ");
}


function FindStringVowels(str: string): number {
	// Variant 1: regexp
	//const vowels = /[aeiou]/gi;
	//return str.match(vowels)?.length || 0;

	//Variant 2: array includes
	const vowels = ["a", "e", "i", "o", "u"];
	let result = 0;
	str = str.toLowerCase();
	for(const char of str) {
		if(vowels.includes(char)) {
			result++;
		}
	}
	return result;
}

function CreatePhoneNumber(num: number): string {
	// Variant 1
	//const arr = num.toString().split("");
	//return `(${arr[0]}${arr[1]}${arr[2]}) ${arr[3]}${arr[4]}${arr[5]}-${arr[6]}${arr[7]}${arr[8]}`;

	// Variant 2
	const str = num.toString();
	return `(${str.substring(0,3)}) ${str.substring(3,6)}-${str.substring(6)}`;
}

function GetUniqueArrayElements(arrs: number[][]): Array<number> {
	return [...new Set(arrs.flat())];
}

/** num is > 0
 */
function FooBarNumber(num: number): string {
	let result = "1";
	for(let i= 2; i <= num; i++) {
		if(i%15===0) {
			result+=",foobar";

		} else if(i%3===0) {
			result+=",foo";

		} else if(i%5===0) {
			result+=",bar";

		} else {
			result+=`,${i}`;
		}
	}
	return result;
}

function FindStringCapitalLettersForLoop(str: string): Array<number> {
	const result = Array<number>();
	for(let i=0; i< str.length; i++) {
		if(str[i].toUpperCase() === str[i]) {
			result.push(i);
		}
	}
	return result;
}

function FindStringCapitalLettersReduce(str: string): Array<number> {
	return str.split("")
	          .reduce( (acc:  Array<number>, current: string, index: number) => {
					if(current.toUpperCase() === current) {
						acc.push(index);
					}
					return acc;
			  	}, []);
}

function StringDuplicateIndexReduce(str: string): string {
	return str.toLowerCase()
			  .split("")
			  .reduce((acc, current, index) => {
					if(!index) {
						return current.toUpperCase();
					} else {
						return `${acc}-${current.toUpperCase()}${current.repeat(index)}` 
					}
					
			  }, "");
}

function StringDuplicateIndexMap(str: string): string {
	return  str.toLowerCase()
	           .split("")
			   .map((letter, index) => {
					return `${letter.toUpperCase()}${letter.repeat(index)}`	
			       })
			   .join("-");
}

function GetMinMaxInArray(arr: Array<number>): Array<number> {
	let min = arr[0];
	let max = arr[0];

	for(let i =1; i < arr.length; i++) {
		if(arr[i]< min) {
			min = arr[i];
		}
		if(arr[i]> max) {
			max = arr[i];
		}
	}

	return [min, max];
} 

function GetMinMaxInArrayMath(arr: Array<number>): Array<number> {
	return [Math.min(...arr), Math.max(...arr)]
}

function GetMinMaxInArraySort(arr: Array<number>): Array<number> {
	arr = arr.sort((a, b) => a - b);
	return [arr[0], arr[arr.length-1]];
} 

function SumDigits(num: number): number {
	return Math.abs(num)
	           .toString()
	    	   .split("")
			   .reduce((acc, current) => {
					return acc + parseInt(current); 
				}, 0);
}

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