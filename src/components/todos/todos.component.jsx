import React, { useContext } from "react";
import { TodosStyled } from "./todos.styles";
import { TodoItem } from "../todo-item/todo-item.component";
import { TodoContext } from "../../context/todos/TodoState.context";

export const Todos = () => {
  const { todos, getTodos } = useContext(TodoContext);

  getTodos();

  return (
    <TodosStyled>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </TodosStyled>
  );
};
