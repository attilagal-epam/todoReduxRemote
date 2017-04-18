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

const serverUrl = 'http://localhost:3000/todos';
const createPayload = (entity) => {
  const data = new FormData();
  data.append( "json", JSON.stringify( entity ) );
  return data;
};

const createTodoPayload = (todoTitle) => {
  return createPayload({
    title: todoTitle,
    done: false
  });
};
//const addTodo = (title) => ({ type: 'TODO_ADD', value: title});
const addTodo = (title) => {
  return (dispatch) => {
//    dispatch(itemsIsLoading(true));
    fetch(serverUrl, {
      method: "POST",
      body: createTodoPayload(title)
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
//        dispatch(itemsIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((item) => dispatch(todoAdded(item)))
      .then(() => dispatch(fetchData()))
      /*      .catch(() => dispatch(itemsHasErrored(true)))*/;
  };
};

const todoAdded = (todo) => ({ type: 'TODO_ADDED', value: todo});
const deleteTodo = (todo) => ({ type: 'TODO_REMOVE', value: todo});
const toggleTodo = (todo) => ({ type: 'TODO_TOGGLE', value: todo});
const todosFetchedSuccess = (todos) => ({ type: 'TODOS_RECEIVED', value: todos});
const fetchData = () => {
  return (dispatch) => {
//    dispatch(itemsIsLoading(true));
    fetch(serverUrl)
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
