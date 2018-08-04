import fetchie8 from 'fetch-ie8';
const mockhost = 'http://localhost:3001';

fetch = fetch || fetchie8;

export function fetchList() {
    return fetch(`${mockhost}/agents`).then(response => response.json());
}

export function addData(data) {
    return fetch(`${mockhost}/agents/${data.id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(response => response.json());
}

export function addItem(data) {
	return fetch(`${mockhost}/agents`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(response => response.json());
}