import "./Todo.css"

function Todo({todos, text, todo, setTodos}) {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map((item) => {
                if (item.id === todo.id) {
                    return {...item, completed: !item.completed}
                }
                return item;
            }
        ))
    }

    return (
        <div>
            <div key={todos.id} className="item-todo">
                <form className="item-todo__check" >
                    <input className="input-check" onChange={completeHandler}
                           id="checkbox"
                           type="checkbox">
                    </input>
                </form>
                <label className={`task-item ${todo.completed ? "completed" : ""}`}>
                    {text}
                </label>
                <div className="item-delete" onClick={deleteHandler}>
                    ✖
                </div>

            </div>

        </div>
    )
}

export default Todo;