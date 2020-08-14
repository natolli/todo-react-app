import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import { TodoPage } from "./pages/todo-page/todo-page.component";
import { HomePage } from "./pages/home-page/home-page.component";
import { Navbar } from "./components/navbar/navbar.component";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/todo" component={TodoPage} />
      </Switch>
    </>
  );
}

export default App;
