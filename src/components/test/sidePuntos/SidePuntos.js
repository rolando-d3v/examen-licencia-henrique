import React, { useContext } from "react";
import types from "../../../context/testContext/types";
import { TestContext } from "../../../context/testContext/testContext";
import "./sidePuntos.scss";

export default function SidePuntos({ RRGG, preguntaActual, toggleBoolean }) {
  const { testState, testDispatch } = useContext(TestContext);
  const { arrayRespuestas } = testState;

  const idPuntoNumero = (id, index) => {
    // console.log(index);
    // console.log(id);
    testDispatch({ type: types.RESPUESTA_ACTUAL, respuestaActual: "" });
    testDispatch({ type: types.PREGUNTA_ACTUAL, preguntaActual: index });
  };

  return (
    <div className={`sidePuntos ${toggleBoolean ? "themeDark" : "themeLight"}`} >
      {/* <div className="sidePuntos"> */}
      <section className="list_puntos">
        {RRGG.map((pun, index) => {
          const indexArr = arrayRespuestas.find(
            (ix) => ix.questionId === pun.id
          );

          return (
            <button
              className={`btn_puntos ${
                preguntaActual === index ? "select_punto" : ""
              }`}
              key={pun.id}
              onClick={() => idPuntoNumero(pun.id, index)}
            >
              <span className="punto_numero"> {index + 1}</span>
              <span
                className={`${
                  indexArr?.idIndex === index ? "marca_numero" : ""
                }`}
              ></span>
            </button>
          );
        })}
      </section>
    </div>
  );
}
