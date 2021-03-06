export function get(url) {
    return fetch(url).then(d => d.json())
}

export function post(url, item) {
    return fetch(url, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(d => d.json())
}
export function put(url, am) {
    return fetch(url, {
        method: 'PUT',
        body: JSON.stringify({amount: am}),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(d => d.json())
}
export function deleteReq(url) {
    return fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(d => d.json())
}
