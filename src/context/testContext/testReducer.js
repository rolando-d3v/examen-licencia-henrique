import types from "./types";

export const testReducer = (state, action) => {
  switch (action.type) {
    case types.ARRAY_ESPECIALIDAD:
      return {
        ...state,
        arrayEspecialidad: action.arrayEspecialidad,
      };
    case types.TIPO_TEST:
      return {
        ...state,
        tipoTest: action.tipoTest,
      };
    case types.PREGUNTA_ACTUAL:
      return {
        ...state,
        preguntaActual: action.preguntaActual,
      };
    case types.RESPUESTA_ACTUAL:
      return {
        ...state,
        respuestaActual: action.respuestaActual,
      };
    case types.ARRAY_RESPUESTAS:
      return {
        ...state,
        arrayRespuestas: action.arrayRespuestas,
      };
    case types.DATA_TIME:
      return {
        ...state,
        data_time: action.data_time,
      };
    case types.TIME_ACTIVE:
      return {
        ...state,
        timeActive: action.timeActive,
      };
    case types.ARRAY_ESP:
      return {
        ...state,
        arrayEsp: action.arrayEsp,
      };
    case types.ARRAY_RRGG:
      return {
        ...state,
        arrayRRGG: action.arrayRRGG,
      };
    case types.ARRAY_INGLES:
      return {
        ...state,
        arrayIngles: action.arrayIngles,
      };

    case types.ARRAY_RESPUESTAS_ESP:
      return {
        ...state,
        arrayRespuestasEsp: action.arrayRespuestasEsp,
      };
    case types.ARRAY_RESPUESTAS_RRGG:
      return {
        ...state,
        arrayRespuestasRRGG: action.arrayRespuestasRRGG,
      };
    case types.ARRAY_RESPUESTAS_INGLES:
      return {
        ...state,
        arrayRespuestasIngles: action.arrayRespuestasIngles,
      };
    case types.RESULT_TEST_TEMA:
      return {
        ...state,
        resultTestTema: action.resultTestTema,
      };
    case types.TEST_OPEN:
      return {
        ...state,
        testOpen: action.testOpen,
      };
    case types.EXIT_TEST:
      return {
        ...state,
        arrayRespuestas: [],
        preguntaActual: 0,
        respuestaActual: "",
        // mostrarResultados: false,
        arrayEspecialidad: [],
        tipoTest: "",

        // las cantidad array de respuestas
        arrayEsp: [],
        arrayRRGG: [],
        arrayIngles: [],
        // las respuestas
        arrayRespuestasEsp: [],
        arrayRespuestasRRGG: [],
        arrayRespuestasIngles: [],
      };

    case types.RESTAR_PREGUNTAS:
      return {
        ...state,
        arrayRespuestas: [],
        preguntaActual: 0,
        respuestaActual: "",
        // mostrarResultados: false,
        arrayEspecialidad: [],
        tipoTest: "",

        //para evaluar
        temaPreguntas: "",
        tipoExamen: "",
      };

    default:
      return state;
  }
};
