//const actionMethods = {
//    addTodo(title) {
//        return {
//            type: 'TODO_ADDED',
//            value: title
//        };
//    },
//
//    deleteTodo(todo) {
//        return {
//            type: 'TODO_REMOVED',
//            value: todo
//        };
//    },
//
//    toggleTodo(todo) {
//        return {
//            type: 'TODO_TOGGLED',
//            value: todo
//        };
//    }
//};

const addTodo = (title) => ({ type: 'TODO_ADD', value: title});
const deleteTodo = (title) => ({ type: 'TODO_REMOVE', value: title});
const toggleTodo = (title) => ({ type: 'TODO_TOGGLE', value: title});

export default {addTodo, deleteTodo, toggleTodo};
