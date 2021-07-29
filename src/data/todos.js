export function get() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(data => data.json())
}