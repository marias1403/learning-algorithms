function solution(node) {
    let prev = null;
    let next = null;
    let current = node;
    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}