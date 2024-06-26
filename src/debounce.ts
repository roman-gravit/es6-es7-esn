export { ShowLastFetch, ShowLastFetchWithBob, ShowLastFetchWithBob2 };

const fetchUrl = function (url: string) {
	console.log(`fetching ${url}...`);
}

function debounce(func: Function, delay: number) {
	let timer: NodeJS.Timeout | null = null;
	return (arg: number)=> {

		if(timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			func(arg);
		}, delay);
	}
}

function debounce_2(fn: Function, ms: number) {
	let timer: any = null;
	return (...args: any[]) => {
		const fn_call = () => { fn.apply(null, args); }

		if(timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			fn_call();
		}, ms);
	}
}


function ShowLastFetch() {

	const fetching = debounce_2(fetchUrl, 0);

	fetching(1);
	fetching(2);
	fetching(3);
	fetching(4);
	fetching(5);
}

//////////////////////////////////
const fetchUrl2 = function (this: any, url: string) {
	console.log(`fetching ${url}...`, this.name);
}

const user = {
	name: "Bob"
}

const fetch_bind = fetchUrl2.bind(user);

function debounce2(func: Function, delay: number) {
	let timer: NodeJS.Timeout | null = null;
	return (arg: number)=> {

		if(timer) {
			clearTimeout(timer);
		}

		timer = setTimeout(() => {
			func(arg);
		}, delay);
	}
}

function ShowLastFetchWithBob() {

	const fetching = debounce2(fetch_bind, 100);

	fetching(1);
	fetching(2);
	fetching(3);
	fetching(4);
	fetching(5);
}

function debounce3(func: Function, delay: number) {
	let timer: any;

	return (...args: number[]) => {
		if(timer) {
			clearTimeout(timer);
			timer = undefined;
		}

		timer = setTimeout(()=> {
			func(args);
		}, delay);		
	}
}

function ShowLastFetchWithBob2() {

	const fetching = debounce3(fetch_bind, 100);

	fetching(1);
	fetching(2);
	fetching(3);
	fetching(4);
	fetching(5);
}


//console.log("1");  // sync = 1 

//setTimeout(()=>console.log("2"));  // macro = 4

//setTimeout(()=>{
//	console.log("3"); // macro = 5
//	Promise.resolve().then(()=>console.log("3.1"));  // micro = 6
//}, 0);  

//Promise.resolve().then(()=>console.log("4"));   // micro = 3

//setTimeout(()=>console.log("5"));  // macro = 7

//console.log("6");    // sync = 2

// 1 6 4 3 3.1 2 5

type callback = (n: number) => void;
function debounce5(fn: callback, delay: number): any {
	let timer: any;
	return function(n: number) {
		if(timer) {
			clearTimeout(timer)
		}
		timer = setTimeout(() => {
			fn(n)	
		}, delay);

	}
}

function logNumber(n: number): void {
	console.log(n);
}
const test5 = debounce5(logNumber, 100);


test5(10);
test5(12);
test5(14);
test5(16);
test5(20);