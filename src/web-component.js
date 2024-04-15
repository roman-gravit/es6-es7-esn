
class HelloWorld extends HTMLElement {
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
});