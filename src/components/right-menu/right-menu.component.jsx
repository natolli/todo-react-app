import React, { useContext } from "react";
import {
  RightMenuContainer,
  DateButton,
  DateButtonText,
} from "./right-menu.styles";
import { ReactComponent as SunLogo } from "../../assets/sun.svg";
import { ReactComponent as ImportantLogo } from "../../assets/important.svg";
import { CustomButton } from "../custom-button/custom-button.component";
import { TodoContext } from "../../context/todos/TodoState.context";

export const RightMenu = () => {
  const { openModal } = useContext(TodoContext);

  return (
    <RightMenuContainer>
      <DateButton>
        <SunLogo />
        <DateButtonText>Day</DateButtonText>
      </DateButton>
      <DateButton>
        <ImportantLogo />
        <DateButtonText>Important</DateButtonText>
      </DateButton>
      <CustomButton
        onClick={() => {
          openModal();
        }}
      >
        Add Todo
      </CustomButton>
    </RightMenuContainer>
  );
};
