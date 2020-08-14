import React, { useContext } from "react";
import { RightMenu } from "../../components/right-menu/right-menu.component";
import { TodoPageContainer, TodosContainer } from "./todo-page.styles";
import { Todos } from "../../components/todos/todos.component";
import { AddTodo } from "../../components/add-todo/add-todo.component";
import { TodoContext } from "../../context/todos/TodoState.context";

export const TodoPage = () => {
  const { addModal } = useContext(TodoContext);
  return (
    <>
      {addModal && <AddTodo />}
      <TodoPageContainer>
        <RightMenu />
        <TodosContainer>
          <Todos />
        </TodosContainer>
      </TodoPageContainer>
    </>
  );
};
