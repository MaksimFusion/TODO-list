import "./Todo.css"
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {deleteTodo, toggleTodo} from '../Redux/actions';



export const Todo = ({todo}) => {

    const dispatch = useDispatch();

    const [cheked, setCheked] = useState(false);
    const handleCheked = () => dispatch(toggleTodo(todo.id));

    useEffect(() => {
        setCheked(todo.completed);
    }, [todo]);

    return (
        <div>
            <div className="item-todo">
                <form className="item-todo__check" >
                    <input className="input-check" onClick={handleCheked} checked={cheked}
                           id="checkbox"
                           type="checkbox">
                    </input>
                    <label className={`task-item ${todo.completed ? "completed" : ""}`}>
                        {todo.content}
                    </label>
                </form>
                <label className="item-delete"
                    onClick={() => dispatch(deleteTodo(todo.id))}>
                    ✖
                </label>
            </div>

        </div>
    )
}