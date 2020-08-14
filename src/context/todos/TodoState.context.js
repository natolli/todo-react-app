import React, { createContext, useReducer } from "react";
import { todoTypes } from "./types";
import TodoReducer from "./TodoReducer";

//Initial State
const INITIAL_STATE = {
  todos: [
    {
      id: 1,
      title: "Clean the house",
      description: "Take out the trash then clean the backyard",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Make Dinner",
      description: "Buy some onions and make a burger",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Watch Movie",
      description: "Avangers:endgame, Spiderman or Hulk",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Get a job",
      description: "Checkout the new jop opening down the street",
      isCompleted: false,
    },
  ],
  addModal: false,
};

// Create Context
export const TodoContext = createContext(INITIAL_STATE);

// Provider Component
export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, INITIAL_STATE);

  //Actions
  const completeTask = (id) => {
    dispatch({ type: todoTypes.COMPLETE_TASK, payload: id });
  };

  const openModal = () => {
    dispatch({ type: todoTypes.OPEN_MODAL });
  };

  const addTodo = (userFormInput) => {
    const newId = state.todos.length + 1;
    const newTodoItem = { id: newId, isCompleted: false, ...userFormInput };

    dispatch({ type: todoTypes.ADD_TODO, payload: newTodoItem });
  };

  const deleteTask = (id) => {
    dispatch({ type: todoTypes.DELETE_TASK, payload: id });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addModal: state.addModal,
        completeTask,
        openModal,
        deleteTask,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
