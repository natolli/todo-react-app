import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Text = css`
  color: #fff;
`;

export const NavbarContainer = styled.div`
  width: 100vw;
  height: 65px;
  background: #3d518c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`;

export const Title = styled.h1`
  ${Text}
  font-size:2.8rem;
  font-style: italic;
`;
export const ListContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  *:not(:last-child) {
    padding-right: 40px;
  }
`;
export const ListStyled = styled.li``;

export const LinkStyled = styled(Link)`
  ${Text}
  transition:all .2s ease-in-out;
  :hover {
    color: #abd2fa;
  }
`;
