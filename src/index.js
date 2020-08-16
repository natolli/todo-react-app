import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TodoProvider } from "./context/todos/TodoState.context";
import { UserProvider } from "./context/users/UserState.context";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <TodoProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TodoProvider>
    </UserProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
