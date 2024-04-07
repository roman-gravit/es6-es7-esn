
import { sum } from "../src/file";

// size | has | add | delete | forEach
test("set", () => {

	console.log(sum(1,2));

	let set = new Set<number>();
	expect(set.size).toEqual(0);

	set.add(1);
	expect(set.size).toEqual(1);

	set.add(1);
	set.add(1);
	set.add(1);
	expect(set.size).toEqual(1);

	expect(set.has(1)).toEqual(true);
	expect(set.has(2)).toEqual(false);

	set.delete(1);
	expect(set.has(1)).toEqual(false);
	expect(set.size).toEqual(0);

	set.add(1);
	set.add(2);
	expect(set.has(1)).toEqual(true);
	expect(set.has(2)).toEqual(true);
	expect(set.size).toEqual(2);

	set.clear();
	expect(set.has(1)).toEqual(false);
	expect(set.has(2)).toEqual(false);
	expect(set.size).toEqual(0);

});

// The Map object holds key-value pairs and remembers the original insertion order of the keys.
// Any value (both objects and primitive values) may be used as either a key or a value.

// set | get | size | has | delete |  clear | forEach
test("map", () => {

	let map1 = new Map<string, number>();
	expect(map1.size).toEqual(0);

	map1.set("a", 1);
	map1.set("b", 2);
	map1.set("c", 3);
	expect(map1.size).toEqual(3);

	expect(map1.get("a")).toEqual(1);
	expect(map1.has("a")).toEqual(true);
	expect(map1.get("a1")).toEqual(undefined);

	map1.delete("a");
	expect(map1.size).toEqual(2);
	expect(map1.get("a")).toEqual(undefined);

	map1.clear();
	expect(map1.size).toEqual(0);
	expect(map1.get("b")).toEqual(undefined);
	expect(map1.get("c")).toEqual(undefined);

});

// A WeakMap can be used to associate metadata with an object, without affecting the lifetime of the object itself. 
// This is very similar to the private members example, since private members are also modelled as external metadata 
// that doesn't participate in prototypical inheritance.

// only code that has access to clicked knows the clicked state of each button, and external code can't modify the states. 
// In addition, if any of the buttons gets removed from the DOM, the associated metadata will automatically get garbage-collected.


// A WeakSet is a collection of garbage-collectable values, including objects and non-registered symbols. 
// A value in the WeakSet may only occur once. It is unique in the WeakSet's collection.
// Values of WeakSets must be garbage-collectable. Most primitive data types can be arbitrarily created 
// and don't have a lifetime, so they cannot be stored. Objects and non-registered symbols can be stored because they are garbage-collectable.