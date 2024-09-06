export { wrap };

const SPACE = " ";
const CRLF = "\n";
function wrap(str: string, width: number): string {
	if(width <= 0) {
		return ""
	}

	if(width >= str.length) {
		return str;

	} else {
		let space = str.lastIndexOf(SPACE, width);

		if(space===-1) {
			space = width;
		}
		return str.substring(0, space).trim() 
			+ CRLF 
			+ wrap(str.substring(space).trim(), width);
	}
}