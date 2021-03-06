import 'redux';

const serverUrl = 'http://localhost:3000/todos';
const createTodoPayload = (todoTitle) => {
  return JSON.stringify({
    title: todoTitle,
    done: false
  });
};

const itemsIsLoading = (isLoading) => ({ type: 'ITEMS_LOADING', value: isLoading});

//const addTodo = (title) => ({ type: 'TODO_ADD', value: title});
const addTodo = (title) => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    fetch(serverUrl, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: createTodoPayload(title)
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((item) => dispatch(todoAdded(item)))
      .then(() => dispatch(fetchData()))
      /*      .catch(() => dispatch(itemsHasErrored(true)))*/;
  };
};

const todoAdded = (todo) => ({ type: 'TODO_ADDED', value: todo});
//const deleteTodo = (todo) => ({ type: 'TODO_REMOVE', value: todo});

const deleteTodo = (todo) => {
  return (dispatch) => {
//    dispatch(itemsIsLoading(true));
    fetch(`${serverUrl}/${todo.id}`, {
      method: "DELETE"
    }).then((response) => {
//        dispatch(itemsIsLoading(false));
        return response;
      })
      .then((item) => dispatch(todoDeleted(item)))
      .then(() => dispatch(fetchData()))
      /*      .catch(() => dispatch(itemsHasErrored(true)))*/;
  };
};

const todoDeleted = (todo) => ({ type: 'TODO_DELETED', value: todo});

const toggleTodo = (todo) => {
  return (dispatch) => {
//    dispatch(itemsIsLoading(true));
    fetch(`${serverUrl}/${todo.id}`, {
      method: "PUT",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(Object.assign(todo, {done: todo.done}))
    })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
//        dispatch(itemsIsLoading(false));
      return response;
    })
    .then((response) => response.json())
    .then((item) => dispatch(todoToggled(item)))
    .then(() => dispatch(fetchData()))
    /*      .catch(() => dispatch(itemsHasErrored(true)))*/;
  };
};

const todoToggled = (todo) => ({ type: 'TODO_TOGGLED', value: todo});

const todosFetchedSuccess = (todos) => ({ type: 'TODOS_RECEIVED', value: todos});
const fetchData = () => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    fetch(serverUrl)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(itemsIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(todosFetchedSuccess(items)))
/*      .catch(() => dispatch(itemsHasErrored(true)))*/;
  };
};

//export default {addTodo, deleteTodo, toggleTodo, fetchData: (url) => dispatch(itemsFetchData(url))};
export default {addTodo, deleteTodo, toggleTodo, fetchData};
