import styled, { css } from "styled-components";

const googleButton = css`
  background: #4688f1;
`;
const normalButton = css`
  background: #3d518c;
  -webkit-box-shadow: 0px 0px 9px -2px rgba(97, 97, 97, 1);
  -moz-box-shadow: 0px 0px 9px -2px rgba(97, 97, 97, 1);
  box-shadow: 0px 0px 9px -2px rgba(97, 97, 97, 1);
`;

const getButtonStyles = ({ isGoogleSignIn }) => {
  return isGoogleSignIn ? googleButton : normalButton;
};

export const StyledButton = styled.button`
  border: none;
  padding: 15px 30px;
  font-size: 1.5rem;
  font-weight: 500;
  border-radius: 5px;
  ${getButtonStyles}
  color: #fff;

  cursor: pointer;
  transition: all 0.2s;

  :hover {
    opacity: 0.95;
    transform: scale(1.02);
  }
  :focus {
    outline: none;
  }
`;
