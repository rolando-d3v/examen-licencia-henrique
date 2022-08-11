import React, { useContext } from "react";
import { QuizContext } from "../../../context/quizContext/quizContext";
import types from "../../../context/quizContext/types";
import "./sidePuntos.scss";

export default function SidePuntos({ RRGG, preguntaActual, toggleBoolean }) {
  const { state, dispatch } = useContext(QuizContext);
  const { arrayRespuestas } = state;

  const idPuntoNumero = (id, index) => {
    // console.log(index);
    // console.log(id);
    dispatch({ type: types.RESPUESTA_ACTUAL, respuestaActual: "" });
    dispatch({ type: types.PREGUNTA_ACTUAL, preguntaActual: index });
  };

  return (
    <div className={`sidePuntos ${toggleBoolean ? "themeDark" : "themeLight"}`}>
      {/* <div className="sidePuntos"> */}
      <section className="list_puntosx">
        {RRGG.map((pun, index) => {
          const indexArr = arrayRespuestas.find(
            (ix) => ix.questionId === pun.id
          );

        
          return (
            <button
              className={`btn_puntosx ${
                preguntaActual === index ? "select_punto" : ""
              }`}
              key={pun.id}
              onClick={() => idPuntoNumero(pun.id, index)}
            >
              <span className="punto_numerox"> {index + 1}</span>
              <span className="punto_marca"></span>
              <span
                className={` ${indexArr?.respuesta === undefined ? "normal" : indexArr?.respuesta === pun.respuesta_correcta ? "p_correcto" : "p_incorrecto"}`}

              ></span>
            </button>
          );
        })}
      </section>
    </div>
  );
}
