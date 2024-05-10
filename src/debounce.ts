export { ShowLastFetch, ShowLastFetchWithBob, curry };

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

	const fetching = debounce2(fetch_bind, 0);

	fetching(1);
	fetching(2);
	fetching(3);
	fetching(4);
	fetching(5);
}
