import "./Filter.css"

function Filter({todo, setStatus}) {
    const statusHandler = (e) => {
setStatus(e.target.value)
    }
    return (
        <div className="filter">
            <label className="items">
            {todo.length} items left
            </label>
            <div  className="buttons">
                <button onClick={statusHandler} value="all" className="buttons__All"
                >All</button>
                <button onClick={statusHandler} value="active" className="buttons__Active"
                >Active</button>
                <button onClick={statusHandler} value="completed" className="buttons__Completed"

                >Completed</button>
            </div>
        </div>

    )
}
export default Filter;