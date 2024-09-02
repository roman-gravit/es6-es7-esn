export { Queue };

class Queue {

	private size = 0;
	private front = 0;
	private rear = 0;
	private queue:number[] = Array<number>(5);

	push(value: number) {
		this.size++;
		this.queue[this.rear++] = value;
	}

	pop() {
		if(this.size===0) {
			throw "Queue is empty"
		}
		
		const popped =  this.queue[this.front];
		// Shift all elements from index 1 till rear to the left by one
		for (let i = 0; i < this.rear; i++) {
            this.queue[i] = this.queue[i + 1];
        }
		--this.rear;
		--this.size;
		return popped;
	}

	getSize(): number {
		return this.size;
	}

	isEmpty(): boolean {
		return this.size === 0;
	}
}