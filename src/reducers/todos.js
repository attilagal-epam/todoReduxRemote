import uuid from 'uuid';

export default function (state = [], action) {
    switch (action.type) {
        case "TODO_ADD":
            //return {
            //    ...state,
            //    todos: [...todos, {
            //        id: uuid.v4(),
            //        title: action.value,
            //        done: false
            //    }]
            //};
            return state.concat({
                    id: uuid.v4(),
                    title: action.value,
                    done: false
                });
        case "TODO_REMOVE":
            return state.filter(t => t.id !== action.value.id);
        case "TODO_TOGGLE":
            return state.map(t => t.id === action.value.id ? Object.assign(t, {done: !t.done}) : t);
        default:
            return state;
    }
};