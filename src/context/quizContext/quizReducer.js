// import React from "react";
import types from "./types";

export const quizReducer = (state, action) => {
  switch (action.type) {
    case types.SET_TEMA_PREGUNTAS:
      return {
        ...state,
        temaPreguntas: action.temaPreguntas,
      };
    case types.SET_TIPO_EXAMEN:
      return {
        ...state,
        tipoExamen: action.tipoExamen,
      };
    case types.PREGUNTA_ACTUAL:
      return {
        ...state,
        preguntaActual: action.preguntaActual,
      };
    case types.CLICKED_TEMA:
      return {
        ...state,
        clicked: action.clicked,
      };
    case types.RESPUESTA_ACTUAL:
      return {
        ...state,
        respuestaActual: action.respuestaActual,
      };
    case types.SHOW_ERROR:
      return {
        ...state,
        showError: action.showError,
      };
    case types.RESPUESTAS:
      return {
        ...state,
        arrayRespuestas: action.arrayRespuestas,
      };
    case types.SHOW_RESULTADOS:
      return {
        ...state,
        mostrarResultados: action.mostrarResultados,
      };
    case types.RESTAR_PREGUNTAS:
      return {
        ...state,
        arrayRespuestas: [],
        preguntaActual: 0,
        respuestaActual: "",
        mostrarResultados: false,
        showError: "",
        temaPreguntas: "",
        tipoExamen: '',
      };

    default:
      return state;
  }
};
