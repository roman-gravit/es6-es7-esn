
import { ShowLastFetch, ShowLastFetchWithBob, ShowLastFetchWithBob2 } from "./debounce";

//ShowLastFetch();
//ShowLastFetchWithBob();
ShowLastFetchWithBob2();


const person = Object.create(
	// prototype
	{
		age: 26
	}, 
	{
		name: {
			value: "Roman",

			// PropertyDescriptors
			// false by default
			enumerable: true,
			// false by default
			writable: true, 
			// false by default
			configurable: true
		},
		birthYear: { 
			value: 1975,
			enumerable: false,
			writable: false,
			configurable: false
		}
	}
);


let data = person.propertyIsEnumerable("birthYear");
data = person.hasOwnProperty("birthYear");

data = person.propertyIsEnumerable("name");
data = person.hasOwnProperty("name");

data = person.hasOwnProperty("toString");

// include with prototype properties
for(let key in person) {
	console.log(`key=${key}  value=${person[key]}`);
}

console.log(`keys=${person.keys}`);
console.log(`values=${person.values}`);