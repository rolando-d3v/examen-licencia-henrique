import React, { useContext, useEffect, useState } from "react";
import esp from "../../../data/data.json";
import ingles from "../../../data/ingles.json";
import rrgg from "../../../data/rrgg.json";
import { TestContext } from "../../../context/testContext/testContext";
import { ToggleConten } from "../../../context/togleContext/TogleContext";
import types from "../../../context/testContext/types";

import SidePuntos from "../sidePuntos/SidePuntos";

import sass from "./test.module.scss";
import SideDatos from "../sideDatos/SideDatos";
import Question from "../question/Question";
import Question2 from "../question2/Question2";
import AnswerAll from "../answersAll/AnswerAll";
import { DarkContext } from "../../../context/darkContext/DarkContext";
// import LayoutRRGG from "../../result_RRGG/layout/LayoutRRGG";
import { Redirect } from "react-router-dom";
import IntroTest from "../intro-test/IntroTest";

export default function TestLayout() {
  const [btnRendir, setBtnRendir] = useState(false);
  const { testState, testDispatch } = useContext(TestContext);
  const { toggleBoolean } = useContext(DarkContext);
  const { toggle, toggleState } = useContext(ToggleConten);

  const {
    tipoTest,
    arrayEspecialidad,
    preguntaActual,
    respuestaActual,
    arrayRespuestas,
  } = testState;

  let beta = tipoTest === "esp" ? esp : tipoTest === "rrgg" ? rrgg : ingles;

  const data = arrayEspecialidad[preguntaActual];

  // console.log(beta.preguntas);
  // console.log(data);

  const rendirEsp = () => {
    let dataTest = beta.preguntas;
    let cantidad = tipoTest === "esp" ? 50 : tipoTest === "rrgg" ? 35 : 15; //OJO ES PARA PONER LAS CANTIDAD DE PREGUNTAS **********

    let espRamdon = dataTest.sort(function() {
      return Math.random() - 0.5;
    });

    const espSelect = espRamdon.slice(0, cantidad);
    console.log(espSelect);

    setBtnRendir(true);

    testDispatch({
      type: types.ARRAY_ESPECIALIDAD,
      arrayEspecialidad: espSelect,
    });
  };

  //selected la opcion
  const handleClick = (e) => {
    testDispatch({
      type: types.RESPUESTA_ACTUAL,
      respuestaActual: e.target.value,
    });
    // dispatch({ type: types.SHOW_ERROR, showError: "" });
  };

  //no deja que  retrocedas
  const regresar = () => {
    testDispatch({ type: types.RESPUESTA_ACTUAL, respuestaActual: "" });
    if (preguntaActual === 0) {
      return console.log("no puedes retroceder");
    }
    testDispatch({
      type: types.PREGUNTA_ACTUAL,
      preguntaActual: preguntaActual - 1,
    });
  };

  //avanzar pregunta
  const next = () => {
    //nuevos datos
    const respuestax = {
      idIndex: preguntaActual,
      questionId: data.id,
      respuesta: respuestaActual,
      resCorrecta: respuestaActual === data.respuesta_correcta ? "1" : "0",
    };

    console.log(respuestax);

    if (respuestaActual) {
      const nuevoFind = arrayRespuestas.find(
        (ev) => ev.idIndex === preguntaActual
      );
      if (nuevoFind?.idIndex === preguntaActual) {
        const saveFilter = arrayRespuestas.filter(
          (rex) => rex.idIndex !== preguntaActual
        );
        console.log(saveFilter);

        let updateArray = saveFilter.push(respuestax);
        console.log(updateArray);

        // ToastSuccess(`Pregunta: Nº ${preguntaActual + 1} Guardada`);
        testDispatch({
          type: types.ARRAY_RESPUESTAS,
          arrayRespuestas: saveFilter,
        });
        testDispatch({ type: types.RESPUESTA_ACTUAL, respuestaActual: "" });

        //no deja que avance si para pregunta actual es mayor que el total preguntas k hay el
        if (preguntaActual + 1 < arrayEspecialidad.length) {
          testDispatch({
            type: types.PREGUNTA_ACTUAL,
            preguntaActual: preguntaActual + 1,
          });
          return;
        }
      }

      //guarda la respuesta en el ultimo array y no borra el selected
      if (arrayEspecialidad.length === preguntaActual + 1) {
        arrayRespuestas.push(respuestax);
        // ToastSuccess(`Pregunta: Nº ${preguntaActual + 1} Guardada`);
        testDispatch({
          type: types.ARRAY_RESPUESTAS,
          arrayRespuestas: arrayRespuestas,
        });
        return;
      }

      console.log(arrayRespuestas);
      arrayRespuestas.push(respuestax);
      // ToastSuccess(`Pregunta: Nº ${preguntaActual + 1} Guardada`);
      testDispatch({
        type: types.ARRAY_RESPUESTAS,
        arrayRespuestas: arrayRespuestas,
      });
      testDispatch({ type: types.RESPUESTA_ACTUAL, respuestaActual: "" });
    }

    //no deja que avance si para pregunta actual es mayor que el total preguntas k hay el
    if (preguntaActual + 1 < arrayEspecialidad.length) {
      testDispatch({
        type: types.PREGUNTA_ACTUAL,
        preguntaActual: preguntaActual + 1,
      });
      return;
    }
  };

  //muestra  todo el resultado
  const guardarResultados = () => {
    let base_esp = {
      type: types.ARRAY_ESP,
      arrayEsp: arrayEspecialidad,
    };
    let base_rg = {
      type: types.ARRAY_RRGG,
      arrayRRGG: arrayEspecialidad,
    };
    let base_ing = {
      type: types.ARRAY_INGLES,
      arrayIngles: arrayEspecialidad,
    };

    testDispatch(
      tipoTest === "esp" ? base_esp : tipoTest === "rrgg" ? base_rg : base_ing
    );

    let res_esp = {
      type: types.ARRAY_RESPUESTAS_ESP,
      arrayRespuestasEsp: arrayRespuestas,
    };
    let res_rrgg = {
      type: types.ARRAY_RESPUESTAS_RRGG,
      arrayRespuestasRRGG: arrayRespuestas,
    };
    let res_ingles = {
      type: types.ARRAY_RESPUESTAS_INGLES,
      arrayRespuestasIngles: arrayRespuestas,
    };
    // ToastResult(`Resultado del test`);
    // testDispatch({ type: types.SHOW_RESULTADOS, mostrarResultados: true });
    testDispatch({ type: types.RESTAR_PREGUNTAS });
    testDispatch(
      tipoTest === "esp" ? res_esp : tipoTest === "rrgg" ? res_rrgg : res_ingles
    );
  };

  //saber si esta marcado las respuesta actual
  useEffect(() => {
    const nuevoFilter = arrayRespuestas.find(
      (nu) => nu.idIndex === preguntaActual
    );
    if (nuevoFilter?.idIndex === preguntaActual) {
      console.log("ya esta marcado");
      console.log(nuevoFilter);
      testDispatch({
        type: types.RESPUESTA_ACTUAL,
        respuestaActual: nuevoFilter?.respuesta,
      });
    }
  }, [preguntaActual, arrayRespuestas]); // ojo sin arrayrespuestas

  // si no tiene seleccionado un tipo de test regresa a home
  if (tipoTest === "") {
    return <Redirect to="/" />;
  }

  return (
    <div>
      {btnRendir === false ? (
        <IntroTest rendirEsp={rendirEsp} tipoTest={tipoTest} />
      ) : (
        <div className={sass.examen_athoq}>
          <SidePuntos
            RRGG={arrayEspecialidad}
            preguntaActual={preguntaActual}
            toggleBoolean={toggleBoolean}
          />
          <SideDatos
            total={arrayEspecialidad.length}
            current={preguntaActual + 1}
          />

          <section className={sass.preguntas_athoq}>
            <Question question={data?.pregunta} />
            <Question2 question2={data?.pre2} />
            {/* {renderError()} */}
            <AnswerAll
              data={data}
              currentAnswer={respuestaActual}
              handleClick={handleClick}
            />
          </section>

          <section className={sass.lista_btn}>
            <button className={sass.btn_pregunta} onClick={regresar}>
              Pregunta anterior{" "}
            </button>

            {arrayEspecialidad.length === arrayRespuestas.length ? (
              <>
                <button
                  className={`${sass.btn_pregunta} ${sass.btn_resultados1} `}
                  onClick={() => {
                    guardarResultados();
                  }}
                >
                  <span className={sass.manito_test}>"👇"</span>
                  Guadar Respuestas
                </button>
                <button
                  className={`${sass.btn_pregunta} ${sass.btn_resultados2} `}
                  onClick={() => {
                    guardarResultados();
                    toggle();
                  }}
                >
                  <span className={sass.manito_test}>"👇"</span>
                  Guadar Respuestas
                </button>
              </>
            ) : (
              <button
                // className="btn_pregunta btn_next"
                className={`${sass.btn_pregunta} ${sass.btn_next} `}
                onClick={next}
              >
                Siguiente pregunta
              </button>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
