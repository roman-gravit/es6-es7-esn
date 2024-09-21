export { searchDikstra, Node }; 

interface Node {
	[key: string]: {  [key: string]: number };
}

/**
 * @param root 
 * @param name searched node name 
 * @returns shortes way from root to searched node
 */
function searchDikstra(graph: Node, 
	                   start: string, 
					   end: string
					   ): number 
{
	const distances: Map<string, number> = initGraphDistances(start);

	const unvisited = new Set<string>(distances.keys());
	while(unvisited.size > 0) {
		const node = getNearestUnvisitedNode(distances, unvisited);
		updateNodeNeighoursDistances(node, distances)
		unvisited.delete(node);
	}

	return distances.get(end) || 0;

	/**
	 * 
	 * @param node 
	 * @param distances 
	 */
	function updateNodeNeighoursDistances(node: string,
										  distances: Map<string, number>,
										  ) 
	{
		const neighbours = graph[node]
		for(const child in neighbours) {
			const newDistance = (distances.get(node) || 0) + neighbours[child];
			if(newDistance < (distances.get(child) || 0)) {
				distances.set(child, newDistance);
			}
		}
	}

	/**
	 * 
	 * @param distances 
	 * @param visited 
	 * @returns 
	 */
	function getNearestUnvisitedNode(distances: Map<string, number>, 
		                             unvisited: Set<string>
							         ): string 
	{
		let nearest = Infinity;
		let result = "";
		for(const [node, distance] of distances) {
			if(nearest > distance  && unvisited.has(node)) {
				nearest = distance;
				result = node;
			}
		}
		return result;
	}

	/**
	 * For start node distance is 0
	 * For others we dont know yet => Infinity
	 * @param distances 
	 * @param start 
	 */
	function initGraphDistances(start: string): Map<string, number> {
		const distances = new Map<string, number>();
		for(const key in graph) {
			distances.set(key, Infinity);
		}
		distances.set(start, 0);
		return distances;
	}
}