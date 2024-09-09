export { Stack };

class Stack {
	private size: number = 0;
	private element: Array<number> = Array<number>(2);

	pop(): number {
		if(this.size === 0) {
			throw "Stack is empty";
		}
		return this.element[--this.size];
	}

	push(value: number) {
		this.element[this.size++] = value; 
	}

	isEmpty(): boolean {
		return this.size === 0;
	}

	getSize(): any {
		return this.size;
	}
}
