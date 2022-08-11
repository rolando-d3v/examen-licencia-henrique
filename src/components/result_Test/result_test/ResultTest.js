import React, { useState, useContext } from "react";
import { TestContext } from "../../../context/testContext/testContext";
import styles from "./Result.module.scss";
// import { Document, Page, Text, PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import * as FaIcons from "react-icons/fa";
import * as dayjs from "dayjs";
import { Redirect } from "react-router-dom";
// import DocPdf from "../doc_pdf/DocPdf";

// export default function ResultTest({ arrayRespuestas, RRGG, restart }) {
export default function ResultTest() {
  const { testState, testDispatch } = useContext(TestContext);

  const { resultTestTema } = testState;

  // let arrayRespuestas = arrayRespuestasEsp
  // let RRGG = arrayEsp

  let { array, resArray } = resultTestTema;

  let RRGG = array;
  let arrayRespuestas = resArray;

  if (!arrayRespuestas) {
    return <Redirect to="/" />;
  }

  console.log(resultTestTema);

  //ordenad  el array de forma ascendente
  arrayRespuestas.sort((a, b) => {
    if (a.idIndex > b.idIndex) {
      return 1;
    }
    if (a.idIndex < b.idIndex) {
      return -1;
    }
    return;
  });

  let respuCorrectas = arrayRespuestas.filter((rex) => rex.resCorrecta === "1");
  // console.log(arrayRespuestas);

  let fechax = dayjs()
    .locale("es")
    .format("DD-MMMM-YYYY, hh-mm-a");

  const fechaYear = new Date().getFullYear();

  return (
    <div className={styles.layout_rrgg}>
      <section className={styles.calificacion_nota}>
        <h3 className={styles.nota_title}> Resultados de notas {fechaYear} </h3>
        <div className={styles.nota_total}>
          <strong>Fecha de examen:</strong>
          <span style={{ fontSize: 14 }}> {fechax} </span>
        </div>
        <div className={styles.nota_total}>
          <strong>Numero de preguntas:</strong>
          <span>{arrayRespuestas.length}</span>
        </div>
        <div className={styles.nota_total}>
          <strong>Preguntas Correctas:</strong>
          <span>{respuCorrectas.length} </span>
          <FaIcons.FaCheckCircle style={{ color: "green", marginLeft: 6 }} />
        </div>

        <div className={styles.nota_total}>
          <strong>Preguntas Incorrectas:</strong>
          <span>{arrayRespuestas.length - respuCorrectas.length} </span>
          <FaIcons.FaTimesCircle style={{ color: "red", marginLeft: 6 }} />
        </div>
      </section>
      <ul>
        {arrayRespuestas.map((respuesta) => {
          const pregunta = RRGG.find(
            (pregunta) => pregunta.id === respuesta.questionId
          );

          console.log(pregunta);
          console.log(respuesta);

          return (
            <div className={styles.flex_resultados} key={pregunta.id}>
              <section className={styles.sideDatos_result}>
                <div className={styles.sideDatos__progress}>
                  <span className={styles.pre}>
                    Pregunta:
                    <strong className={styles.numero}>
                      {respuesta.idIndex + 1}
                    </strong>
                  </span>
                  {ResultadoMarcadoSide(pregunta, respuesta)}
                </div>
              </section>
              {/*  */}
              <section className={styles.respuesta_resultados}>
                <h3 className={styles.question_result}>{pregunta.pregunta}</h3>
                <pre
                  className={styles.pregunta2}
                  style={{
                    marginTop: pregunta.pre2.length > 0 && 30,
                    // marginBottom: question2.length > 0 && 30,
                  }}
                >
                  {pregunta.pre2}
                </pre>
                <div
                  className={` 
                  ${styles.pregunta_result} 
                  ${pregunta.respuesta_correcta === "a" && styles.r_correcta}`}
                >
                  <strong> A: </strong> <span>{pregunta.respuesta_a}</span>
                </div>
                <div
                  className={` 
                 ${styles.pregunta_result} 
                 ${pregunta.respuesta_correcta === "b" && styles.r_correcta}`}
                >
                  <strong> B: </strong> <span> {pregunta.respuesta_b}</span>
                </div>
                <div
                  className={` 
                 ${styles.pregunta_result} 
                 ${pregunta.respuesta_correcta === "c" && styles.r_correcta}`}
                >
                  <strong> C: </strong> {pregunta.respuesta_c}
                </div>
                <div
                  className={` 
                 ${styles.pregunta_result} 
                 ${pregunta.respuesta_correcta === "d" && styles.r_correcta}`}
                >
                  <strong> D: </strong> {pregunta.respuesta_d}
                </div>
                <div
                  className={` 
                ${styles.pregunta_result} 
                ${pregunta.respuesta_correcta === "e" && styles.r_correcta}`}
                >
                  <strong> E: </strong> {pregunta.respuesta_e}
                </div>
                {mostrarResultadoMarcado(pregunta, respuesta)}
              </section>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

//mostrar resultado total correcta o Incorrecta
const mostrarResultadoMarcado = (pregunta, respuesta) => {
  if (pregunta.respuesta_correcta === respuesta.respuesta) {
    return (
      <div style={{ marginTop: 28 }}>
        <span style={{ color: "green" }}>
          Respuesta correcta:{" "}
          <strong style={{ textTransform: "uppercase" }}>
            {pregunta.respuesta_correcta}
          </strong>
        </span>
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex", marginTop: 28, alignItems: "center" }}>
        <span style={{ color: "green", marginRight: 30 }}>
          Respuesta correcta:{" "}
          <strong style={{ textTransform: "uppercase" }}>
            {pregunta.respuesta_correcta}
          </strong>
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: 30,
            color: "#000",
            fontSize: 19,
          }}
        >
          <FaIcons.FaAngleDoubleRight />
        </div>
        <span style={{ color: "red" }}>
          Respuesta incorecta seleccionada:
          <strong style={{ textTransform: "uppercase" }}>
            {respuesta.respuesta}
          </strong>
        </span>
      </div>
    );
  }
};

//mostrar resultado total correcta o Incorrecta en side
const ResultadoMarcadoSide = (pregunta, respuesta) => {
  if (pregunta.respuesta_correcta === respuesta.respuesta) {
    return (
      <div style={{ color: "green", display: "flex", alignItems: "center" }}>
        <span style={{ fontSize: 14 }}>Correcta: </span>
        <FaIcons.FaCheckCircle />
      </div>
    );
  } else {
    return (
      <div style={{ color: "red", display: "flex", alignItems: "center" }}>
        <span style={{ fontSize: 14 }}>Incorrecta: </span>
        <FaIcons.FaTimesCircle />
      </div>
    );
  }
};
