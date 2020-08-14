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
    case todoTypes.OPEN_MODAL:
      return {
        ...state,
        addModal: !state.addModal,
      };
    case todoTypes.DELETE_TASK:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case todoTypes.ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    default:
      return state;
  }
};

export default TodoReducer;
