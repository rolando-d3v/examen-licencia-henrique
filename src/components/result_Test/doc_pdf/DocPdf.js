import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
// import styles from "./doc.module.scss";
// import "./doc.scss";
import * as FaIcons from "react-icons/fa";
import * as dayjs from "dayjs";

export default function DocPdf(props) {
  //ordenad  el array de forma ascendente
  // props.arrayRespuestas.sort((a, b) => {
  //   if (a.idIndex > b.idIndex) {
  //     return 1;
  //   }
  //   if (a.idIndex < b.idIndex) {
  //     return -1;
  //   }
  //   return;
  // });

  let respuCorrectas = props.arrayRespuestas.filter(
    (rex) => rex.resCorrecta === "1"
  );
  // console.log(props.arrayRespuestas);

  let fechax = dayjs()
    .locale("es")
    .format("DD-MMMM-YYYY, hh-mm-a");

  //css

  const styles = StyleSheet.create({
    calificacion_nota: {
      borderRadius: "4px",
      border: "2px solid #008250",
    },
    nota_title: {
      fontSize: "15px",
      fontWeight: "bold",
      padding: "5px",
      color: "black",
      border: "1px solid #5d5d5d",
      backgroundColor: "#dee2e6",
    },
    nota_total: {
      display: "flex",
      justifyContent: "center",
      // alignItems: "center",
      border: "1px solid #5d5d5d",
    },
    strongx: {
      backgroundColor: "#454",
      // width: 200,
      padding: "5px",
      color: "black",
      fontWeight: "600px",
      display: "inline-flex",
    },
    spanx: {
      marginLeft: "8px",
      textAlign: "center",
      display: "inline-flex",
      padding: "5px",
    },
    flex_resultados: {
      display: "flex",
      margin: "30px 0px",
    },
    sideDatos_result: {
      padding: "0px 16px 0px 0px",
    },
    sideDatosProgress: {
      backgroundColor: "#4242424",
      padding: "10px 0px 8px 6px",
      width: "100px",
      height: "150px",
      borderRadius: "4px",
      border: "1px solid #42424242",
    },
    pre: {
      fontSize: "14px",
      color: "#000",
    },
    numero: {
      fontWeight: "bold",
      fontSize: "17px",
    },
  });

  return (
    <Document file="/cv.pdf">
      <Page
        size="A4"
        style={{
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
          backgroundColor: "white",
        }}
      >
        {props.arrayRespuestas && props.RRGG && (
          <View className="layout_rrgg">
            <View style={styles.calificacion_nota}>
              <Text style={styles.nota_title}>Resultados de notas 2021</Text>

              <Text style={styles.nota_total}>
                <Text style={styles.strongx}>Fecha de examen:</Text>
                <Text style={styles.spanx}> {fechax} </Text>
              </Text>
              <Text style={styles.nota_total}>
                <Text style={styles.strongx}> Numero de preguntas:</Text>
                <Text style={styles.spanx}>{props.arrayRespuestas.length}</Text>
              </Text>
              <Text style={styles.nota_total}>
                <Text style={styles.strongx}>Preguntas Correctas:</Text>
                <Text style={styles.spanx}> {respuCorrectas.length} </Text>
                {/* <FaIcons.FaCheckCircle
      style={{ color: "green", marginLeft: 6 }}
    /> */}
              </Text>

              <Text style={styles.nota_total}>
                <Text>Preguntas Incorrectas:</Text>
                <Text>
                  {props.arrayRespuestas.length - respuCorrectas.length}{" "}
                </Text>
                {/* <FaIcons.FaTimesCircle style={{ color: "red", marginLeft: 6 }} /> */}
              </Text>
            </View>

            <View>
              {props.arrayRespuestas.map((respuesta, index) => {
                const pregunta = props.RRGG.find(
                  (pregunta) => pregunta.id === respuesta.questionId
                );

                return (
                  <View style={styles.flex_resultados} key={index}>
                    <View style={styles.sideDatos_result}>
                      <Text style={styles.sideDatosProgress}>
                        <Text style={styles.pre}>
                          Pregunta:
                          <Text style={styles.numero}>
                            {respuesta.idIndex + 1}
                          </Text>
                        </Text>
                        {/* {ResultadoMarcadoSide(pregunta, respuesta)} */}
                      </Text>
                    </View>

                    {/* <View className={styles.respuesta_resultados}>
<Text className={styles.question_result}>
{pregunta.pregunta}
</Text>
<Text
className={styles.pregunta2}
style={{
  marginTop: pregunta.pre2.length > 0 && 30,
}}
>
{pregunta.pre2}
</Text>
<View
className={` 
${styles.pregunta_result} 
${pregunta.respuesta_correcta === "a" && styles.r_correcta}`}
>
<Text> A: </Text> <Text>{pregunta.respuesta_a}</Text>
</View>
<Text
className={` 
${styles.pregunta_result} 
${pregunta.respuesta_correcta === "b" && styles.r_correcta}`}
>
<Text> B: </Text> <Text> {pregunta.respuesta_b}</Text>
</Text>
<Text
className={` 
${styles.pregunta_result} 
${pregunta.respuesta_correcta === "c" && styles.r_correcta}`}
>
<Text> C: </Text> {pregunta.respuesta_c}
</Text>
<Text
className={` 
${styles.pregunta_result} 
${pregunta.respuesta_correcta === "d" && styles.r_correcta}`}
>
<Text> D: </Text> {pregunta.respuesta_d}
</Text>
<Text
className={` 
${styles.pregunta_result} 
${pregunta.respuesta_correcta === "e" && styles.r_correcta}`}
>
<Text> E: </Text> {pregunta.respuesta_e}
</Text>
{mostrarResultadoMarcado(pregunta, respuesta)}
</View> */}
                  </View>
                );
              })}
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
}

//mostrar resultado total correcta o Incorrecta
// const mostrarResultadoMarcado = (pregunta, respuesta) => {
//   if (pregunta.respuesta_correcta === respuesta.respuesta) {
//     return (
//       <Text style={{ marginTop: 28 }}>
//         <Text style={{ color: "green" }}>
//           Respuesta correcta:{" "}
//           <Text style={{ textTransform: "uppercase" }}>
//             {pregunta.respuesta_correcta}
//           </Text>
//         </Text>
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={{ display: "flex", marginTop: 28, alignItems: "center" }}>
//         <Text style={{ color: "green", marginRight: 30 }}>
//           Respuesta correcta:{" "}
//           <Text style={{ textTransform: "uppercase" }}>
//             {pregunta.respuesta_correcta}
//           </Text>
//         </Text>
//         <Text
//           style={{
//             display: "flex",
//             alignItems: "center",
//             marginRight: 30,
//             color: "#000",
//             fontSize: 19,
//           }}
//         >
//           <FaIcons.FaAngleDoubleRight />
//         </Text>
//         <Text style={{ color: "red" }}>
//           Respuesta incorecta seleccionada:
//           <Text style={{ textTransform: "uppercase" }}>
//             {respuesta.respuesta}
//           </Text>
//         </Text>
//       </Text>
//     );
//   }
// };

// //mostrar resultado total correcta o Incorrecta en side
// const ResultadoMarcadoSide = (pregunta, respuesta) => {
//   if (pregunta.respuesta_correcta === respuesta.respuesta) {
//     return (
//       <Text style={{ color: "green", display: "flex", alignItems: "center" }}>
//         <Text style={{ fontSize: 14 }}>Correcta: </Text>
//         <FaIcons.FaCheckCircle />
//       </Text>
//     );
//   } else {
//     return (
//       <Text style={{ color: "red", display: "flex", alignItems: "center" }}>
//         <Text style={{ fontSize: 14 }}>Incorrecta: </Text>
//         <FaIcons.FaTimesCircle />
//       </Text>
//     );
//   }
// };
