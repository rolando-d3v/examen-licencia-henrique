import React, { createContext, useReducer } from "react";
import { testReducer } from "./testReducer";

export const TestContext = createContext();

const TestProvider = ({ children }) => {
  const initialState = {
    arrayEspecialidad: [],
    tipoTest: "",
    preguntaActual: 0,
    respuestaActual: "",
    // mostrarResultados: false,
    arrayRespuestas: [],

    // las cantidad array de respuestas
    arrayEsp: [],
    arrayRRGG: [],
    arrayIngles: [],
    // las respuestas
    arrayRespuestasEsp: [],
    arrayRespuestasRRGG: [],
    arrayRespuestasIngles: [],
    resultTestTema: {},
    data_time: {},
    testOpen: false,
    timeActive: false,
  };

  const [testState, testDispatch] = useReducer(testReducer, initialState);

  return (
    <TestContext.Provider value={{ testState, testDispatch }}>
      {children}
    </TestContext.Provider>
  );
};

export default TestProvider;
