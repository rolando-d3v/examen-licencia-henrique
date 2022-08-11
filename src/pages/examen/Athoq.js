import React, { useContext, useEffect } from "react";
import LayoutRRGG from "../../components/result_RRGG/layout/LayoutRRGG";
import AnswerAll from "../../components/RRGG/answersAll/AnswerAll";
import Question from "../../components/RRGG/question/Question";
import Question2 from "../../components/RRGG/question2/Question2";
import SideDatos from "../../components/RRGG/sideDatos/SideDatos";
import SidePuntos from "../../components/RRGG/sidePuntos/SidePuntos";
import { DarkContext } from "../../context/darkContext/DarkContext";
import { QuizContext } from "../../context/quizContext/quizContext";
import types from "../../context/quizContext/types";
import { Redirect } from "react-router-dom";

import dataxes from "../../data/data.json";
import ingles from "../../data/ingles.json";
import rrgg from "../../data/rrgg.json";

import { ToastSuccess, ToastResult, ToastError } from "../../tools/Toasting";

import "./Athoq.scss";
import Img_pre from "../../components/RRGG/img_pre/Img_pre";

function Buscar() {
  const { state, dispatch } = useContext(QuizContext);
  const { toggleBoolean } = useContext(DarkContext);

  const {
    preguntaActual,
    respuestaActual,
    arrayRespuestas,
    mostrarResultados,
    showError,
    temaPreguntas,
    tipoExamen,
  } = state;

  // console.log(temaPreguntas);
  // console.log(state);
  // console.log(state.arrayRespuestas[3]);
  console.log(state.respuestaActual);

  //selecciona tipo de examen
  let beta =
    tipoExamen === "esp" ? dataxes : tipoExamen === "rrgg" ? rrgg : ingles;

  const RRGG = beta?.preguntas.filter((exa) => {
    if (temaPreguntas === "todos") {
      return exa;
    } else {
      return exa.tema === temaPreguntas;
    }
  });

 
let ordenado = RRGG.sort(function(a, b) {
  return a.id - b.id;
});
console.log(ordenado);


  const data = RRGG[preguntaActual];
  

  let resp_corr = data?.respuesta_correcta;
  console.log(resp_corr);

  const renderError = () => {
    if (!showError) {
      return;
    }
    return <div className="error"> {showError} </div>;
  };

  //reinicia todo de cero para dar el examen
  // const restart = () => {
  //   dispatch({ type: types.RESTAR_PREGUNTAS });
  // };

  //selected la opcion
  const handleClick = (e) => {
    dispatch({ type: types.RESPUESTA_ACTUAL, respuestaActual: e.target.value });
    dispatch({ type: types.SHOW_ERROR, showError: "" });
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

    console.log(respuestax.resCorrecta);

    if (respuestaActual) {
      const nuevoFind = arrayRespuestas.find(
        (ev) => ev.idIndex === preguntaActual
      );
      if (nuevoFind?.idIndex === preguntaActual) {
        const saveFilter = arrayRespuestas.filter(
          (rex) => rex.idIndex !== preguntaActual
        );
        // console.log(saveFilter);

        let updateArray = saveFilter.push(respuestax);
        console.log(updateArray);

        //guarda la respuesta del ultimo pregunta en un array y no borra el selected
        if (RRGG.length === preguntaActual + 1) {
          arrayRespuestas.push(respuestax);

          console.log("toy aca");
          state.respuestaActual === resp_corr
            ? ToastSuccess("Respuesta Correcta ✅")
            : ToastError("Respuesta Incorrecta ❌");
          dispatch({ type: types.RESPUESTAS, arrayRespuestas: saveFilter });
          return;
        }

        state.respuestaActual === resp_corr
          ? ToastSuccess("Respuesta Correcta ✅")
          : ToastError("Respuesta Incorrecta ❌");
        dispatch({ type: types.RESPUESTAS, arrayRespuestas: saveFilter });
        dispatch({ type: types.RESPUESTA_ACTUAL, respuestaActual: "" });

        //no deja que avance si para pregunta actual es mayor que el total preguntas k hay el
        if (preguntaActual + 1 < RRGG.length) {
          dispatch({
            type: types.PREGUNTA_ACTUAL,
            preguntaActual: preguntaActual + 1,
          });
          return;
        }
      }

      // //guarda la respuesta en el ultimo array y no borra el selected
      // if (RRGG.length === preguntaActual + 1) {
      //   arrayRespuestas.push(respuestax);

      //   console.log("toy aca");
      //   state.respuestaActual === resp_corr
      //     ? ToastSuccess("Respuesta Correcta ✅")
      //     : ToastError("Respuesta Incorrecta ❌");
      //   dispatch({ type: types.RESPUESTAS, arrayRespuestas: arrayRespuestas });
      //   return;
      // }

      console.log(arrayRespuestas);

      arrayRespuestas.push(respuestax);

      state.respuestaActual === resp_corr
        ? ToastSuccess("Respuesta Correcta ✅")
        : ToastError("Respuesta Incorrecta ❌");

      dispatch({ type: types.RESPUESTAS, arrayRespuestas: arrayRespuestas });
      dispatch({ type: types.RESPUESTA_ACTUAL, respuestaActual: "" });
    }

    //no deja que avance si para pregunta actual es mayor que el total preguntas k hay el
    if (preguntaActual + 1 < RRGG.length) {
      dispatch({
        type: types.PREGUNTA_ACTUAL,
        preguntaActual: preguntaActual + 1,
      });
      return;
    }
  };

  const guardarMostarResultados = () => {
    //muestra  todo el resultado
    ToastResult(`Resultado del test`);
    dispatch({ type: types.SHOW_RESULTADOS, mostrarResultados: true });
  };

  //saber si esta marcado las respuesta actual
  useEffect(() => {
    const nuevoFilter = arrayRespuestas.find(
      (nu) => nu.idIndex === preguntaActual
    );
    if (nuevoFilter?.idIndex === preguntaActual) {
      console.log("ya esta marcado");
      console.log(nuevoFilter);
      dispatch({
        type: types.RESPUESTA_ACTUAL,
        respuestaActual: nuevoFilter?.respuesta,
      });
    }
  }, [preguntaActual, arrayRespuestas]); // ojo sin arrayrespuestas

  //no deja que  retrocedas
  const regresar = () => {
    dispatch({ type: types.RESPUESTA_ACTUAL, respuestaActual: "" });
    if (preguntaActual === 0) {
      return console.log("no puedes retroceder");
    }
    dispatch({
      type: types.PREGUNTA_ACTUAL,
      preguntaActual: preguntaActual - 1,
    });
  };

  if (mostrarResultados) {
    return (
      <LayoutRRGG
        arrayRespuestas={arrayRespuestas}
        RRGG={RRGG}
        // restart={restart}
      />
    );
  } else if (!data) {
    return <Redirect to="/" />;
  } else {
    return (
      <div className="examen_athoq">
        <SidePuntos
          RRGG={RRGG}
          preguntaActual={preguntaActual}
          toggleBoolean={toggleBoolean}
        />
        <SideDatos total={RRGG.length} current={preguntaActual + 1} />
        <section className="preguntas_athoq">
          <Question question={data?.pregunta} />
          <Question2 question2={data?.pre2} />
          <Img_pre img_pre={data?.img_pre}   />
          {renderError()}
          <AnswerAll
            data={data}
            currentAnswer={respuestaActual}
            handleClick={handleClick}
          />
        </section>
        <section className="lista_btn">
          <button className="btn_pregunta" onClick={regresar}>
            Pregunta anterior{" "}
          </button>

          {RRGG.length === arrayRespuestas.length ? (
            <button
              className="btn_pregunta btn_resultados"
              onClick={guardarMostarResultados}
            >
              <span className="manito_test">"👇"</span>
              Mostrar resultados
            </button>
          ) : (
            <button className="btn_pregunta btn_next" onClick={next}>
              Siguiente pregunta
            </button>
          )}
        </section>
      </div>
    );
  }
}

export default Buscar;
