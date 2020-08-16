import React from "react";
import {
  NavbarContainer,
  Title,
  ListContainer,
  LinkStyled,
  ListStyled,
  ButtonStyled,
} from "./navbar.styles";
import { auth } from "../../firebase/firebase.utils";

export const Navbar = ({ currentUser }) => {
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
          {currentUser ? (
            <ButtonStyled
              onClick={() => {
                auth.signOut();
              }}
            >
              Sign Out({currentUser.displayName})
            </ButtonStyled>
          ) : (
            <LinkStyled to="/signin">Sign In</LinkStyled>
          )}
        </ListStyled>
      </ListContainer>
    </NavbarContainer>
  );
};
