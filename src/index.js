import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "rc-pagination/assets/index.css";
import "react-toastify/dist/ReactToastify.css";
import AuthState from "./context/auth/authState";
import TogleContext from "./context/togleContext/TogleContext";
import DarkContextProvider from "./context/darkContext/DarkContext";
import QuizStateProvider from "./context/quizContext/quizContext";
import TestProvider from "./context/testContext/testContext";
import "./sass/index.scss";


ReactDOM.render(
  <React.Fragment>
    <QuizStateProvider>
      <DarkContextProvider>
        <TogleContext>
          <TestProvider>
            <AuthState>
              <App />
            </AuthState>
          </TestProvider>
        </TogleContext>
      </DarkContextProvider>
    </QuizStateProvider>
  </React.Fragment>,
  document.getElementById("root")
);
