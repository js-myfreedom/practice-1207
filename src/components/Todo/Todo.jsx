import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
// import { useHistory, useParams } from "react-router-dom";
import { withRouter } from "react-router";

// export const redirectTo = url => window.location.assign(url);

function Todo({ history, location, match, getById }) {
    const {params: {todo: todoParam}} = match;
    const [todo, setTodo] = useState({});
    
    useEffect(() => {
        getById({uniqueId: todoParam}).then(todo => {
            setTodo(todo);
        });
    }, [todoParam, getById]);

    const onFeedbacksClick = (evt) => {
        evt.preventDefault();
        history.push('/feedbacks');
        // redirectTo('/feedbacks');
    }
    
    // const history = useHistory();
    // const params = useParams();
    return (
        <>
            <h1>TODO</h1>
            <br />
            completed: {todo.completed ? 'true' : 'false'}
            <br />
            id: {todo.id}
            <br />
            title: {todo.title}
            <br />
            userId: {todo.userId}
            <br />
            <Link to="/todos">Back to TODOS</Link>
            <br />            
            <Link to="#" onClick={onFeedbacksClick}>Feedbacks</Link>
        </>
    );
}


export default withRouter(Todo);