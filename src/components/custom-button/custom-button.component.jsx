import React from "react";
import { StyledButton } from "./custom-button.styles";

export const CustomButton = ({ children, ...otherProps }) => {
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};
