import React, { useState, useContext } from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";
import { FormStyles, ButtonContainer, SignInTitle } from "./sign-in.styles";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

export const SignIn = () => {
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = signInForm;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setSignInForm({
        email: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignInForm({ ...signInForm, [name]: value });
  };
  return (
    <div>
      <SignInTitle>Sign In</SignInTitle>
      <FormStyles>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          label="Email"
          value={email}
          required
        />
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          label="Password"
          value={password}
          required
        />
        <ButtonContainer>
          <CustomButton
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Sign In
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </ButtonContainer>
      </FormStyles>
    </div>
  );
};
