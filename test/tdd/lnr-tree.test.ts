import { searchLNTTree, BinaryTreeNode, Result } from "../../src/tdd/lnr-tree";

describe("searchLNTTree",  () => {
	
	test("function exists", () => {
		expect(searchLNTTree).not.toEqual(undefined);
	});

	test("single node", () => {
		const root: BinaryTreeNode<number> = new BinaryTreeNode(1);
		const result: Result<number> = { found: false, path: []};
		searchLNTTree(root, 1, result)
		expect(result).toEqual({found: true, path: [1]});
	});

	test("two nodes left", () => {
		const root: BinaryTreeNode<number> = new BinaryTreeNode(1);
		root.left = new BinaryTreeNode(2)
		const result: Result<number> = { found: false, path: []};
		searchLNTTree(root, 2, result)
		expect(result).toEqual( {found: true, path: [2]} );
	});

	test("two nodes right", () => {
		const root: BinaryTreeNode<number> = new BinaryTreeNode(1);
		root.left = new BinaryTreeNode(2)
		root.right = new BinaryTreeNode(3);
		const result: Result<number> = { found: false, path: []};
		searchLNTTree(root, 3, result)
		expect(result).toEqual({found: true, path: [2, 1, 3]});
	});

	test("several nodes right", () => {
		const root: BinaryTreeNode<number> = new BinaryTreeNode(1);
		root.left = new BinaryTreeNode(2)
		root.left.right = new BinaryTreeNode(3)
		root.right = new BinaryTreeNode(4);
		const result: Result<number> = { found: false, path: []};
		searchLNTTree(root, 4, result)
		expect(result).toEqual({found: true, path: [2, 3, 1, 4]});
	});


});