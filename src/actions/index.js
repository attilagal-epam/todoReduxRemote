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
import 'redux';

const addTodo = (title) => ({ type: 'TODO_ADD', value: title});
const deleteTodo = (todo) => ({ type: 'TODO_REMOVE', value: todo});
const toggleTodo = (todo) => ({ type: 'TODO_TOGGLE', value: todo});
const todosFetchedSuccess = (todos) => ({ type: 'TODOS_RECEIVED', value: todos});
const fetchData = (url) => {
  return (dispatch) => {
//    dispatch(itemsIsLoading(true));
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
//        dispatch(itemsIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(todosFetchedSuccess(items)))
/*      .catch(() => dispatch(itemsHasErrored(true)))*/;
  };
};

//export default {addTodo, deleteTodo, toggleTodo, fetchData: (url) => dispatch(itemsFetchData(url))};
export default {addTodo, deleteTodo, toggleTodo, fetchData};
