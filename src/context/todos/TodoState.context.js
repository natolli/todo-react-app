import React, { createContext, useReducer, useContext } from "react";
import { todoTypes } from "./types";
import TodoReducer from "./TodoReducer";
import { firestore } from "../../firebase/firebase.utils";
import { UserContext } from "../users/UserState.context";

//Initial State
const INITIAL_STATE = {
  todos: [],
  addModal: false,
};

// Create Context
export const TodoContext = createContext(INITIAL_STATE);

// Provider Component
export const TodoProvider = ({ children }) => {
  const { currentUser } = useContext(UserContext);
  const [state, dispatch] = useReducer(TodoReducer, INITIAL_STATE);

  //Actions
  const openModal = () => {
    dispatch({ type: todoTypes.OPEN_MODAL });
  };

  const addTodo = async (userFormInput) => {
    const newTodoItem = { isCompleted: false, ...userFormInput };

    await firestore
      .collection("users")
      .doc(currentUser.id)
      .collection("todos")
      .add(newTodoItem);
    getTodos();
  };

  const getTodos = async () => {
    const todoSnapshot = await firestore
      .collection("users")
      .doc(currentUser.id)
      .collection("todos")
      .get();
    const todoArray = [];
    todoSnapshot.forEach((todoitem) => {
      let todoObj = {};
      todoObj.id = todoitem.id;
      todoObj = { ...todoObj, ...todoitem.data() };
      todoArray.push(todoObj);
    });

    dispatch({ type: todoTypes.GET_TODOS, payload: todoArray });
  };

  const deleteTask = async (id) => {
    await firestore
      .collection("users")
      .doc(currentUser.id)
      .collection("todos")
      .doc(id)
      .delete();
    getTodos();
  };

  const completeTask = async (id, isCompleted) => {
    await firestore
      .collection("users")
      .doc(currentUser.id)
      .collection("todos")
      .doc(id)
      .update({ isCompleted: !isCompleted });
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
        getTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
