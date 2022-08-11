import React, { createContext, useReducer } from "react";
import { quizReducer } from "./quizReducer";
import types from "./types";

//usecontext hook
export const QuizContext = createContext();

//useReducer hook
const QuizStateProvider = ({ children }) => {
  //valores iniciales
  const initialState = {
    preguntaActual: 0,
    respuestaActual: "",
    arrayRespuestas: [],
    mostrarResultados: false,
    showError: "",
    temaPreguntas: null,
    tipoExamen: null,
    clicked: null,
  };

  const [state, dispatch] = useReducer(quizReducer, initialState);

  const resetQuiz = () => {
    dispatch({ type: types.RESTAR_PREGUNTAS });
  }


  const resetClicked = () => {
    dispatch({type: types.CLICKED_TEMA, clicked: null})
  }



  return (
    <QuizContext.Provider value={{ state, dispatch, resetQuiz, resetClicked }}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizStateProvider;



