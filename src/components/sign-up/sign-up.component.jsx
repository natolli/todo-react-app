import React, { useState, useContext } from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";
import { FormStyles, SignUpTitle } from "./sign-up.styles";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

export const SignUp = () => {
  const [signUpForm, setSignUpForm] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password, displayName, confirmPassword } = signUpForm;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password dont match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setSignUpForm({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpForm({ ...signUpForm, [name]: value });
  };
  return (
    <div>
      <SignUpTitle>Sign Up</SignUpTitle>
      <FormStyles>
        <FormInput
          name="displayName"
          type="text"
          handleChange={handleChange}
          label="Username"
          value={displayName}
          required
        />
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
        <FormInput
          name="confirmPassword"
          type="password"
          handleChange={handleChange}
          label="Confirm Password"
          value={confirmPassword}
          required
        />

        <CustomButton
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Sign Up
        </CustomButton>
      </FormStyles>
    </div>
  );
};
