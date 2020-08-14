import React from "react";
import {
  NavbarContainer,
  Title,
  ListContainer,
  LinkStyled,
  ListStyled,
} from "./navbar.styles";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Title>Todo</Title>
      <ListContainer>
        <ListStyled>
          <LinkStyled to="/">Home</LinkStyled>
        </ListStyled>
        <ListStyled>
          <LinkStyled to="/todo">About</LinkStyled>
        </ListStyled>
        <ListStyled>
          <LinkStyled to="/">Sign In</LinkStyled>
        </ListStyled>
      </ListContainer>
    </NavbarContainer>
  );
};
