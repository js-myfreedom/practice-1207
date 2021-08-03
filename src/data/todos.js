export async function get() {
    const response = await fetch('https://todos-7be86-default-rtdb.firebaseio.com/data.json');
    const data = await response.json();
    return data;
}

export async function getAll() {
    const response = await fetch('https://todos-7be86-default-rtdb.firebaseio.com/todos.json');
    const object = await response.json();
    const array = Object.values(object);
    return array;
}

export async function add(obj) {
    await fetch('https://todos-7be86-default-rtdb.firebaseio.com/todos.json', {
        method: 'POST',
        body: JSON.stringify(obj)
    });
}