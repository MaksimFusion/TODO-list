import { VISIBILITY_FILTER } from "../contants";

export const getTodosByVisibilityFilter = (store, visibilityFiler) => {
    switch(visibilityFiler) {
        case VISIBILITY_FILTER.COMPLETED:
            return store.todos.filter(todo => todo.completed);
        case VISIBILITY_FILTER.ACTIVE:
            return store.todos.filter(todo => !todo.completed);
        default:
            return store.todos;
    }
}

export const getCountNumber = (store, visibilityFiler) => {
    switch (visibilityFiler) {
        case VISIBILITY_FILTER.COMPLETED:
            return store.todos.filter(todo => todo.completed).length;
        case VISIBILITY_FILTER.ACTIVE:
            return store.todos.filter(todo => !todo.completed).length;
        default:
            return store.todos.length;
    }
}