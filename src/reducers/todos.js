import uuid from 'uuid';

const initialState = {
  todos: [],
  isLoading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        //case "TODO_ADD":
        //    //return {
        //    //    ...state,
        //    //    todos: [...todos, {
        //    //        id: uuid.v4(),
        //    //        title: action.value,
        //    //        done: false
        //    //    }]
        //    //};
        //    return state.concat({
        //            id: uuid.v4(),
        //            title: action.value,
        //            done: false
        //        });
        //case "TODO_REMOVE":
        //    return state.filter(t => t.id !== action.value.id);
        //case "TODO_TOGGLE":
        //    return state.map(t => t.id === action.value.id ? Object.assign(t, {done: !t.done}) : t);
        case "TODOS_RECEIVED":
          return Object.assign(state, {todos: action.value});
        case "ITEMS_LOADING":
          return Object.assign(state, {isItemsLoading: action.value});
        //case "TODOS_ADDED":
        //  return state.concat(action.value);
        default:
            return state;
    }
};
