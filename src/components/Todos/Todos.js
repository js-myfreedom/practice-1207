import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { get, getAll, add } from '../../data/todos';

const Todos = () => {
    const [data, setData] = useState({});
    const [todos, setTodos] = useState([]);

    const onFormSubmit = (evt) => {
        evt.preventDefault();
        const title = evt.target.title.value;
        const newObj = {
            title,
            completed: false,
            userId: 12,
            id: 203
        };

        add(newObj).then(() => {
            setTodos([...todos, newObj]);
            evt.target.title.value = "";
        });
    }

    useEffect(() => {
        get().then(serverData => {
            setData(serverData);
        });
    }, []);

    useEffect(() => {
        getAll().then(serverData => {
            setTodos(serverData);
        });
    }, []);

    return <div>
        <br />
        <h1>TODOS</h1>
        <form onSubmit={onFormSubmit}>
            <input name="title" />
            <button type="submit">Submit</button>
        </form>

        TODO:
        <br />
        {data.title}
        <br />
        <br />
        TODOS:
        {todos.map((todo, idx) =>
            <div key={idx}>
                {todo.title} <Link to={`/todos/${todo.uniqueId}`}>Edit</Link>
            </div>)}
    </div>;
}

export default Todos;