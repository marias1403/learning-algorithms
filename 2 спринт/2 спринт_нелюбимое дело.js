function solution(node, idx) {
    let head = node;
	let current = node;
    if (idx === 0) {
        head = current.next
        return head;
    }
    for (i = 0; current !== null && i < idx - 1; i++) {
        current = current.next;
    }
    let next = current.next.next;
    current.next = next;
    return head;
}