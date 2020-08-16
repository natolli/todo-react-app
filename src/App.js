import React, { useEffect, useContext } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { TodoPage } from "./pages/todo-page/todo-page.component";
import { HomePage } from "./pages/home-page/home-page.component";
import { Navbar } from "./components/navbar/navbar.component";
import { SignInSignUpPage } from "./pages/sign-in-sign-up-page/sign-in-and-sign-up.component";
import { UserContext } from "./context/users/UserState.context";

function App() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  let unsubscribeFromAuth = null;

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <>
      <Navbar currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/todo" component={TodoPage} />
        <Route exact path="/signin" component={SignInSignUpPage} />
      </Switch>
    </>
  );
}

export default App;
