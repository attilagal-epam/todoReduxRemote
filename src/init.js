import todos from './reducers/todos';

const todoApp = angular.module('todoApp', ['ngRedux'])
  .config(($ngReduxProvider) => {

    //var todosChangedReducer = (state = { todos: [] }, action) => {
    //  let todos = state.todos;
    //
    //  switch (action.type) {
    //    case "TODO_ADDED":
    //      return {
    //        ...state,
    //        todos: [...todos, {
    //          id: uuid.v4(),
    //          title: action.value,
    //          done: false
    //        }]
    //      };
    //    case "TODO_REMOVED":
    //      return {
    //        ...state,
    //        todos: todos.filter(t => t.id !== action.value.id)
    //      };
    //    case "TODO_TOGGLED":
    //      return {
    //        ...state,
    //        todos: todos.map(t => t.id === action.value.id ? {...t, done: !t.done} : t)
    //      };
    //    default:
    //      return state;
    //  }
    //}
    //
    //
    //$ngReduxProvider.createStoreWith(todosChangedReducer);
    $ngReduxProvider.createStoreWith(todos);
  });
