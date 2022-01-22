import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from "../Redux/selector";
import { Todo } from "./Todo";
import {VisibilityFilter} from "./VisibilityFilter";


export const TodoList = () => {
    const { todos, visibilityFilter } = useSelector(state => state);
    const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter);
    return (
        <div>
            {filterTodos.map(todo => (
                <Todo key={`todo-${todo.id}`} todo={todo} />
            ))}
            <VisibilityFilter />
        </div>
    )
}