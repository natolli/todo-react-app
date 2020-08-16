import React from "react";
import { SignIn } from "../../components/sign-in/sign-in.component";
import { Container } from "./sign-in-and-sign-up.styles";
import { SignUp } from "../../components/sign-up/sign-up.component";

export const SignInSignUpPage = () => {
  return (
    <Container>
      <SignIn />
      <SignUp />
    </Container>
  );
};
