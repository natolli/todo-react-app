import React, { useContext, useState } from "react";
import { ModalStyle, FormStyles } from "./add-todo.styles";
import { TodoContext } from "../../context/todos/TodoState.context";
import { FormInput } from "../form-input/form-input.component";
import { CustomButton } from "../custom-button/custom-button.component";

export const AddTodo = () => {
  const { addModal, openModal, addTodo } = useContext(TodoContext);

  const [userFormInput, setFormInput] = useState({
    title: "",
    description: "",
  });
  const { title, description } = userFormInput;

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(userFormInput);
    setFormInput({
      title: "",
      description: "",
    });
    openModal();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setFormInput({ ...userFormInput, [name]: value });
  };

  return (
    <ModalStyle addModal={addModal}>
      <div id="myModal" class="modal">
        <div class="content">
          <div class="header">
            <span
              class="close"
              onClick={() => {
                openModal();
              }}
            >
              &times;
            </span>
            <h2>Add Todo</h2>
          </div>
          <div class="body">
            <FormStyles>
              <FormInput
                name="title"
                type="text"
                handleChange={handleChange}
                value={title}
                label="Title"
                required
              />
              <FormInput
                name="description"
                type="text"
                handleChange={handleChange}
                value={description}
                label="Description"
                required
              />
              <CustomButton
                typr="submit"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Add
              </CustomButton>
            </FormStyles>
          </div>
        </div>
      </div>
    </ModalStyle>
  );
};
