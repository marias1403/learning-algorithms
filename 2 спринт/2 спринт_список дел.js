function solution(node) {
	let current = node;
    while (current !== null) {
    	console.log(current.value);
        current = current.next;
    }
}