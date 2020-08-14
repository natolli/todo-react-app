import styled, { css } from "styled-components";
import { ReactComponent as Tick } from "../../assets/tick.svg";

export const Container = styled.div`
  position: relative;
`;

const uncheckedTodo = css`
  background: #7692ff;
`;
const checkedTodo = css`
  background: #72ff37;

  text-decoration: line-through;
`;

const getTodoStyles = ({ isCompleted }) => {
  return isCompleted ? checkedTodo : uncheckedTodo;
};

export const TodoItemContainer = styled.div`
  border: 1px solid #3d518c;
  border-radius: 15px;
  padding: 30px 50px 40px 40px;
  display: grid;
  grid-template-columns: 80% 20%;
  position: relative;
  margin-bottom: 60px;

  grid-gap: 50px;
  ${getTodoStyles}
`;
export const TodoItemText = styled.div``;
export const TodoItemMainText = styled.h1`
  font-size: 2.5rem;
  padding-bottom: 5px;
  border-bottom: 1px solid #000;
  margin-bottom: 20px;
  font-weight: 500;
`;
export const TodoItemDescription = styled.p`
  font-weight: 500;
  color: #091540;
`;

const uncheckStyle = css`
  border: 3px solid #091540;
  background: #fff;
  transition: all 0.3s;

  :hover {
    border: 10px solid #091540;
  }
`;

const checkedStyle = css`
  border: 1px solid #fff;
  background: #72ff37;
  transition: all 0.3s;

  :hover {
    opacity: 0.5;
  }
`;

const getButtonStyles = ({ isCompleted }) => {
  return isCompleted ? checkedStyle : uncheckStyle;
};

export const CheckBoxContainer = styled.button`
  height: 90%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  ${getButtonStyles}
  &:focus {
    outline: none;
  }
`;

const uncheckedSvg = css`
  fill: #091540;
`;
const checkedSvg = css`
  fill: #fff;
`;

const getSvgStyles = ({ isCompleted }) => {
  return isCompleted ? checkedSvg : uncheckedSvg;
};

export const TickStyled = styled(Tick)`
  height: 30px;
  ${getSvgStyles}
`;

export const DeleteButton = styled.button`
  height: 25px;
  width: 100px;
  font-size: 1.2rem;
  border: none;
  border-radius: 0 0 5px 5px;

  position: absolute;
  top: 99.5%;
  right: 10%;
  border-top: 1px solid #3d518c;
  background: #ff6363;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  :hover {
    background: #f73838;
  }
  :focus {
    outline: none;
  }
`;
