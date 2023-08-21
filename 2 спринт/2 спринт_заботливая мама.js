function solution(node, elem) {
    let current = node;
    let idx = 0;
    for (let i = 0; current !== null; i++) {
        if (elem === current.value) {
            return idx;
        }
        current = current.next;
        idx++;
    }
    return(-1);
}