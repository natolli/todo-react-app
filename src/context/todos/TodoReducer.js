import { todoTypes } from "./types";

const TodoReducer = (state, action) => {
  switch (action.type) {
    case todoTypes.COMPLETE_TASK:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.isCompleted = !todo.isCompleted;
          }
          return todo;
        }),
      };
    case todoTypes.GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case todoTypes.OPEN_MODAL:
      return {
        ...state,
        addModal: !state.addModal,
      };
    default:
      return state;
  }
};

export default TodoReducer;
