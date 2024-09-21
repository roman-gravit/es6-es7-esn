export { searchLNTTree, BinaryTreeNode, Result };

class BinaryTreeNode<T> {
	value: T;
	left: BinaryTreeNode<T> | undefined;
	right: BinaryTreeNode<T> | undefined;

	constructor(value: T) {
		this.value = value;
	}
}

interface Result<T> {
	found: boolean;
	path: T[];
}


function searchLNTTree<T>(root: BinaryTreeNode<T>, search: number, result: Result<T>): void {
	if(root.left !== undefined) {
		searchLNTTree(root.left, search, result);
	}

	if(!result.found) {
		result.path.push(root.value);
	}

	if(root.value === search) {
		result.found = true;
		return;
	}

	if(root.right !== undefined) {
		searchLNTTree(root.right, search, result);
	}
} 


/*
class BinaryTreeNode<T> {
	value: T;
	left: BinaryTreeNode<T> | undefined;
	right: BinaryTreeNode<T> | undefined;

	constructor(value: T) {
		this.value = value;
	}

	[Symbol.iterator](): Iterator<T> {
		return new BinaryTreeNodeIterator<T>(this);
	}
}

class BinaryTreeNodeIterator<T> implements Iterator<T> {
	private values: T[];
	private root: BinaryTreeNode<T>;

	constructor(root: BinaryTreeNode<T>) {
		this.values = [];
		this.root = root;
		this.inOrder(this.root);
	}

	private inOrder(node: BinaryTreeNode<T>): void {
		if(node.left !== undefined) {
			this.inOrder(node.left);
		}

		this.values.push(node.value);

		if(node.right !== undefined) {
			this.inOrder(node.right);
		}
	}

	next(): IteratorResult<T> {
		const result: T | undefined = this.values.shift();
		if(!result) {
			return  { done: true, value: -1 };
		}

		return { done: false, value: result };
	}
}
*/