
/*class HelloWorld extends HTMLElement {
	connectedCallback() {
		  this.textContent = 'Hello World!';
	}
}

customElements.define("hello-world", HelloWorld);

customElements.define("apocalyptic-warning", class extends HTMLElement {
	constructor() {
  		super();
		let warning = document.getElementById("warningtemplate");
 		let mywarning = warning.content;
  		const shadowRoot = this.attachShadow({mode: "open"}).appendChild(mywarning.cloneNode(true));
	}
});*/

/*
function Animal(options) {
	this.name = options.name;
	this.age = options.age;
}

Animal.prototype.voiceProto = function() {
	console.log(`voiceProto from ${this.name}`);
}

const dog = new Animal({ name: "Sharik", age: 10});

console.dir(dog);
//dog.voiceClass();
dog.voiceProto();

function Cat(options) {
	Animal.apply(this, arguments);
	this.hasTail = options.hasTail;
	this.type = "cat";
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;


Animal.prototype.voiceProto = function() {
	console.log(`voiceProto reloaded from ${this.name}`);
}

Cat.prototype.voiceProto = function() {
	Animal.prototype.voiceProto.apply(this, arguments);
	console.log(`CAT voiceProto says maya from ${this.name}`);
}

const cat = new Cat({name: "Kitte", age: 5, hasTail: true});

console.dir(cat);
cat.voiceProto(); */
//dog.voiceProto();