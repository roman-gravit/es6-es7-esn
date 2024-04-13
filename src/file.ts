export { sum }; 

function sum(a: number, b: number): number {
	return a + b;
}


console.time("map");
const map = new Map<number, number>();
for(let i =0; i< 1000000; i++) {
	map.set(i, i);
}
console.timeEnd("map");

// Object is faster than map
console.time("object");
const obj: any = {};
for(let i =0; i< 1000000; i++) {
	obj[i] = i;
}
console.timeEnd("object");


const fetchUrl = function (this: any, url: string) {
	console.log(`fetching ${url}...`, this.firstName)
}

const user = {
	firstName: "Bob"
}

const fetch_bind = fetchUrl.bind(user);
const fetch_bind2 = fetch_bind.bind({})


function debounce(callback: any, delay: number) {
	let timer: any = null

	return (arg: number) => {

		if(timer) {
			clearTimeout(timer);
		}
	
		timer = setTimeout(() => {
			callback(arg);
		}, delay);
	}
}

const fetching = debounce(fetch_bind2, 300);

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);