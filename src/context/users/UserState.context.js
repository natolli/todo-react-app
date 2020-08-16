import React, { createContext, useReducer } from "react";
import { userTypes } from "./types";
import UserReducer from "./UserReducer";

//Initial State
const INITIAL_STATE = {
  currentUser: null,
};

// Create Context
export const UserContext = createContext(INITIAL_STATE);

// Provider Component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch({ type: userTypes.SET_CURRENT_USER, payload: user });
  };

  return (
    <UserContext.Provider
      value={{
        currentUser: state.currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
