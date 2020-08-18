import React, { useContext, useEffect } from "react";
import { TodoContext } from "../../context/todos/TodoState.context";
import {
  Container,
  TodoItemContainer,
  TodoItemText,
  TodoItemMainText,
  TodoItemDescription,
  CheckBoxContainer,
  LabelStyle,
  TickMarkStyled,
  TickStyled,
  DeleteButton,
} from "./todo-item.styles";

export const TodoItem = ({ todo: { id, title, description, isCompleted } }) => {
  const { completeTask, deleteTask } = useContext(TodoContext);

  return (
    <Container>
      <TodoItemContainer isCompleted={isCompleted}>
        <TodoItemText>
          <TodoItemMainText>{title}</TodoItemMainText>
          <TodoItemDescription>{description}</TodoItemDescription>
        </TodoItemText>
        <CheckBoxContainer
          isCompleted={isCompleted}
          onClick={() => {
            completeTask(id, isCompleted);
          }}
        >
          <TickStyled isCompleted={isCompleted} />
        </CheckBoxContainer>
      </TodoItemContainer>
      <DeleteButton
        onClick={() => {
          deleteTask(id);
        }}
      >
        Delete
      </DeleteButton>
    </Container>
  );
};
