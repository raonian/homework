const mockhost = 'http://localhost:3001';
export function fetchList(id) {
    return fetch(`${mockhost}/agents/${id}`);
}
