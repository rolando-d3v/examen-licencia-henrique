import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import types from "../../../context/testContext/types";
import * as FaIcons from "react-icons/fa";
import { TestContext } from "../../../context/testContext/testContext";
import sass from "./layoutResult.module.scss";
import { DarkContext } from "../../../context/darkContext/DarkContext";

export default function LayoutResultTest() {
  const { testState, testDispatch } = useContext(TestContext);
  const { toggleBoolean, toggleTheme } = useContext(DarkContext);

  const {
    arrayEsp,
    arrayRRGG,
    arrayIngles,

    arrayRespuestasEsp,
    arrayRespuestasRRGG,
    arrayRespuestasIngles,
    resultTestTema,
    data_time,
  } = testState;

  // console.log(resultTestTema);

  console.log(toggleBoolean);

  //calculo de respuestad correctas en especialidad
  let correctEsp = arrayRespuestasEsp.filter((x) => x.resCorrecta === "1");
  let IncorrectEsp = arrayRespuestasEsp.filter((x) => x.resCorrecta === "0");
  //calculo de respuestad correctas en rrgg
  let correctRRGG = arrayRespuestasRRGG.filter((x) => x.resCorrecta === "1");
  let IncorrectRRGG = arrayRespuestasRRGG.filter((x) => x.resCorrecta === "0");
  //calculo de respuestad correctas en ingles
  let correctIng = arrayRespuestasIngles.filter((x) => x.resCorrecta === "1");
  let IncorrectIng = arrayRespuestasIngles.filter((x) => x.resCorrecta === "0");

  ///principal coeficiente
  let coefienteRRGG = 3.5;
  // SO2
  let coefienteEsp = 6;
  let coefienteIngles = 0.5;

  // //SO1
  // let coefienteEsp = 5.8;
  // let coefienteIngles = 0.7;

  //TCO3
  // let coefienteEsp = 5.6;
  // let coefienteIngles = 0.9;

  //TCO2
  // let coefienteEsp = 5.5;
  // let coefienteIngles = 1;

  //calcula el aprobado de coeficiente
  let coefiRRGG = (correctRRGG.length * coefienteRRGG) / arrayRRGG.length;
  let coefiEsp = (correctEsp.length * coefienteEsp) / arrayEsp.length;
  let coefiIngles = (correctIng.length * coefienteIngles) / arrayIngles.length;

  //para el porcentaje
  let coefienteEspx10 = coefienteEsp * 10;
  let coefienteRRGGx10 = coefienteRRGG * 10;
  let coefienteInglesx10 = coefienteIngles * 10;

  //para notas sobre 100
  let coEspx100 = coefiEsp * 10;
  let coRRGGx100 = coefiRRGG * 10;
  let coInglesx100 = coefiIngles * 10;

  //para notas sobre 20
  let coEspx20 = coefiEsp * 2;
  let coRRGGx20 = coefiRRGG * 2;
  let coInglesx20 = coefiIngles * 2;

  const fechaYear = new Date().getFullYear();

  console.log((coefiEsp + coefiRRGG + coefiIngles) * 2);



  function round(num, decimalPlaces = 0) {
    num = Math.round(num + "e" + decimalPlaces);
    return Number(num + "e" + -decimalPlaces);
  }

  // test rounding of half
  // console.log(round(0.5)); // 1
  // console.log(round(-0.5)); // 0

  // // testing edge cases
  // console.log(round(1.005, 2)); // 1.01
  // console.log(round(2.175, 2)); // 2.18
  console.log(round(5.015, 2)); // 5.02
  console.log(round(coEspx20 + coRRGGx20 + coInglesx20, 3)); // 5.02
  console.log(coEspx20 + coRRGGx20 + coInglesx20); // 5.02

  // console.log(round(-1.005, 2)); // -1
  // console.log(round(-2.175, 2)); // -2.17
  // console.log(round(-5.015, 2)); // -5.01


  return (
    <div className={sass.layout_result_test}>
      <section>
        <h3 className={sass.text_title_result}>
          Resultado del Test {fechaYear}{" "}
        </h3>

        <div className={sass.content_table}>
          <div className={sass.content}>
            <div className={sass.content_div1}>
              <div className={sass.content_div2}>
                <div className={sass.content_div3}>
                  <table className={sass.table}>
                    <thead>
                      <tr>
                        <th
                          className={sass.theadItem}
                          style={{ textAlign: "start" }}
                        >
                          Tema
                        </th>
                        <th className={sass.theadItem}>Vizualizar Test </th>
                        <th className={sass.theadItem}>Total</th>
                        <th className={sass.theadItem}>Incorrect</th>
                        <th className={sass.theadItem}>Correct</th>
                        <th className={sass.theadItem}>sobre 100</th>
                        <th className={sass.theadItem}>sobre 20</th>
                        <th className={sass.theadItem}>Estado</th>
                      </tr>
                    </thead>
                    {/* <br /> */}
                    <tbody className={sass.tbody}>
                      <tr className={sass.row_tabla}>
                        <td className={sass.tbodyItem}>
                          <div className={sass.tbodyItem_div}>
                            <div className={sass.tbodyItem_div_img}>
                              <img
                                src="https://res.cloudinary.com/perusap/image/upload/v1644783206/EXAM/Especialista-o-Generalista_gmhsky.jpg"
                                alt="nuevo"
                              />
                            </div>
                            <div className={sass.tbodyItem_divText}>
                              <div
                                className={sass.text}
                                style={{
                                  color:
                                    toggleBoolean === false
                                      ? "#4f46e5"
                                      : "#0de99f",
                                  fontSize: 14,
                                }}
                              >
                                Especialidad{" "}
                              </div>
                              <div className={sass.text}>
                                Coeficiente{" "}
                                <strong style={{ color: "red" }}>
                                  {coefienteEspx10}%
                                </strong>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className={sass.tbodyItem2}>
                          <Link
                            to="/result-test-tema"
                            className={sass.tbodyItem2}
                            onClick={() =>
                              testDispatch({
                                type: types.RESULT_TEST_TEMA,
                                resultTestTema: {
                                  array: arrayEsp,
                                  resArray: arrayRespuestasEsp,
                                },
                              })
                            }
                          >
                            <strong
                              style={{
                                color:
                                  toggleBoolean === false
                                    ? "#4f46e5"
                                    : "#0de99f",
                              }}
                              className={sass.text2}
                            >
                              Ver
                            </strong>
                            <FaIcons.FaEye
                              style={{
                                color:
                                  toggleBoolean === false
                                    ? "#4f46e5"
                                    : "#0de99f",
                                fontSize: 16,
                              }}
                            />
                          </Link>
                        </td>

                        <td className={sass.tbodyItem5}>
                          <span className={sass.text5}>{arrayEsp.length}</span>
                        </td>
                        <td className={sass.tbodyItem3}>
                          <span className={sass.text3}>
                            {IncorrectEsp.length}{" "}
                          </span>
                        </td>

                        <td className={sass.tbodyItem4}>
                          <span className={sass.text4}>
                            {correctEsp.length}
                          </span>
                        </td>

                        <td className={sass.tbodyItem5}>
                          <span className={sass.text5}> {coEspx100} pt </span>
                        </td>
                        <td className={sass.tbodyItem5}>
                          <span className={sass.text5}> {coEspx20} </span>
                        </td>

                        <td className={sass.tbodyItem6}>
                          <a href="#" className={sass.text6}>
                            Finalizado
                          </a>
                        </td>
                      </tr>
                      {/* rrgg */}

                      <tr className={sass.row_tabla}>
                        <td className={sass.tbodyItem}>
                          <div className={sass.tbodyItem_div}>
                            <div className={sass.tbodyItem_div_img}>
                              <img
                                src="https://res.cloudinary.com/perusap/image/upload/v1644783204/EXAM/reglamento_wyppir.jpg"
                                alt="nuevo"
                              />
                            </div>
                            <div className={sass.tbodyItem_divText}>
                              <div
                                className={sass.text}
                                style={{
                                  color:
                                    toggleBoolean === false
                                      ? "#4f46e5"
                                      : "#0de99f",
                                  fontSize: 14,
                                }}
                              >
                                RRGG
                              </div>
                              <div className={sass.text}>
                                Coeficiente{" "}
                                <strong style={{ color: "red" }}>
                                  {coefienteRRGGx10}%
                                </strong>{" "}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className={sass.tbodyItem2}>
                          <Link
                            className={sass.tbodyItem2}
                            to="/result-test-tema"
                            onClick={() =>
                              testDispatch({
                                type: types.RESULT_TEST_TEMA,
                                resultTestTema: {
                                  array: arrayRRGG,
                                  resArray: arrayRespuestasRRGG,
                                },
                              })
                            }
                          >
                            <strong
                              style={{
                                color:
                                  toggleBoolean === false
                                    ? "#4f46e5"
                                    : "#0de99f",
                              }}
                              className={sass.text2}
                            >
                              Ver
                            </strong>
                            <FaIcons.FaEye
                              style={{
                                color:
                                  toggleBoolean === false
                                    ? "#4f46e5"
                                    : "#0de99f",
                                fontSize: 16,
                              }}
                            />
                          </Link>
                        </td>
                        <td className={sass.tbodyItem5}>
                          <span className={sass.text5}>{arrayRRGG.length}</span>
                        </td>

                        <td className={sass.tbodyItem3}>
                          <span className={sass.text3}>
                            {IncorrectRRGG.length}{" "}
                          </span>
                        </td>

                        <td className={sass.tbodyItem4}>
                          <span className={sass.text4}>
                            {correctRRGG.length}
                          </span>
                        </td>

                        <td className={sass.tbodyItem5}>
                          <span className={sass.text5}>{coRRGGx100} pt </span>
                        </td>
                        <td className={sass.tbodyItem5}>
                          <span className={sass.text5}>{coRRGGx20} </span>
                        </td>

                        <td className={sass.tbodyItem6}>
                          <a href="#" className={sass.text6}>
                            Finalizado
                          </a>
                        </td>
                      </tr>

                      {/* Ingles */}

                      <tr className={sass.row_tabla}>
                        <td className={sass.tbodyItem}>
                          <div className={sass.tbodyItem_div}>
                            <div className={sass.tbodyItem_div_img}>
                              <img
                                src="https://res.cloudinary.com/perusap/image/upload/v1644781409/EXAM/dddd_twanxf.png"
                                alt="nuevo"
                              />
                            </div>
                            <div className={sass.tbodyItem_divText}>
                              <div
                                className={sass.text}
                                style={{
                                  color:
                                    toggleBoolean === false
                                      ? "#4f46e5"
                                      : "#0de99f",
                                  fontSize: 14,
                                }}
                              >
                                Ingles
                              </div>
                              <div className={sass.text}>
                                Coeficiente{" "}
                                <strong style={{ color: "red" }}>
                                  {coefienteInglesx10}%
                                </strong>{" "}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td className={sass.tbodyItem2}>
                          <Link
                            to="/result-test-tema"
                            className={sass.tbodyItem2}
                            onClick={() =>
                              testDispatch({
                                type: types.RESULT_TEST_TEMA,
                                resultTestTema: {
                                  array: arrayIngles,
                                  resArray: arrayRespuestasIngles,
                                },
                              })
                            }
                          >
                            <strong
                              style={{
                                color:
                                  toggleBoolean === false
                                    ? "#4f46e5"
                                    : "#0de99f",
                              }}
                              className={sass.text2}
                            >
                              Ver
                            </strong>
                            <FaIcons.FaEye
                              style={{
                                color:
                                  toggleBoolean === false
                                    ? "#4f46e5"
                                    : "#0de99f",
                                fontSize: 16,
                              }}
                            />
                          </Link>
                        </td>

                        <td className={sass.tbodyItem5}>
                          <span className={sass.text5}>
                            {arrayIngles.length}
                          </span>
                        </td>

                        <td className={sass.tbodyItem3}>
                          <span className={sass.text3}>
                            {IncorrectIng.length}{" "}
                          </span>
                        </td>

                        <td className={sass.tbodyItem4}>
                          <span className={sass.text4}>
                            {correctIng.length}
                          </span>
                        </td>

                        <td className={sass.tbodyItem5}>
                          <span className={sass.text5}>{coInglesx100} pt</span>
                        </td>
                        <td className={sass.tbodyItem5}>
                          <span className={sass.text5}>{coInglesx20} </span>
                        </td>

                        <td className={sass.tbodyItem6}>
                          <a href="#" className={sass.text6}>
                            Finalizado
                          </a>
                        </td>
                      </tr>
                      {/* <br /> */}
                      {/* total final nota */}
                      <tr className={sass.final}>
                        <td className={sass.tbodyItem}>
                          <div className={sass.tbodyItem_div}>
                            <div className={sass.tbodyItem_div_img}>
                              <img
                                src="https://res.cloudinary.com/perusap/image/upload/v1652250991/EXAM/user_f3llgz.png"
                                alt="nuevo"
                              />
                            </div>
                            <div className={sass.tbodyItem_divText_final}>
                              <div className={sass.text_final}>
                                Nota Final del Test
                              </div>
                            </div>
                          </div>
                        </td>

                        <td></td>

                        <td className={sass.tbodyItem5}>
                          <span className={sass.text5}>
                            {arrayEsp.length +
                              arrayRRGG.length +
                              arrayIngles.length}
                          </span>
                        </td>

                        <td className={sass.tbodyItem3}>
                          <span
                            className={sass.text3}
                            style={{
                              width: "40px",
                              borderRadius: "8px",
                              border: "1px solid #900",
                            }}
                          >
                            {IncorrectEsp.length +
                              IncorrectRRGG.length +
                              IncorrectIng.length}
                          </span>
                        </td>

                        <td className={sass.tbodyItem4}>
                          <span
                            className={sass.text4}
                            style={{
                              width: "40px",
                              borderRadius: "8px",
                              border: "1px solid #090",
                            }}
                          >
                            {correctEsp.length +
                              correctRRGG.length +
                              correctIng.length}
                          </span>
                        </td>

                        <td className={sass.tbodyItem5}>
                          <span
                            className={sass.text5}
                            style={{
                              color:
                                toggleBoolean === false ? "#4f46e5" : "#0de99f",
                              fontSize: 14,
                            }}
                          >
                            {" "}
                            {round(coEspx100 + coRRGGx100 + coInglesx100, 1)} pts{" "}
                          </span>
                        </td>
                        <td className={sass.tbodyItem5}>
                          <span
                            className={sass.text5}
                            style={{
                              color:
                                toggleBoolean === false ? "#4f46e5" : "#0de99f",
                              fontSize: 14,
                            }}
                          >
                            {round(coEspx20 + coRRGGx20 + coInglesx20, 1)  }
                          </span>
                        </td>

                        <td className={sass.tbodyItem6}>
                          {coEspx20 + coRRGGx20 + coInglesx20 < 13 ? (
                            <a
                              href="#"
                              className={sass.text6}
                              style={{ color: "red", fontSize: 14 }}
                            >
                              Desaprobado
                            </a>
                          ) : (
                            <a
                              href="#"
                              className={sass.text6}
                              style={{
                                color:
                                  toggleBoolean === false
                                    ? "#4f46e5"
                                    : "#0de99f",
                              }}
                            >
                              Aprobado
                            </a>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* dddddddddddddd */}
      </section>

      <section className={sass.description_nota_final}>
        <article className={sass.div_content}>
          <div className={sass.div_texto}>
            <h3 className={sass.text_final}  style={{ textTransform: "uppercase" }}>Nota Final</h3>

            <h5 className={sass.text_title_nota}>Tiempo de Examen: </h5>
            <span className={sass.text_time}>
              {" "}
              {data_time.h} horas: {data_time.m} minutos: {data_time.s} segundos{" "}
            </span>
            <h4 className={sass.text_title_nota}>
              Nota Sobre 100:{" "}
              <span
                style={{
                  color: toggleBoolean === false ? "#4f46e5" : "#0de99f",
                  fontSize: 14,
                }}
                className={sass.text_nota}
              >
                {" "}
                {round(coEspx100 + coRRGGx100 + coInglesx100, 1)} pts{" "}
              </span>{" "}
            </h4>

            <h4>
              Nota Sobre 20:{" "}
              <span
                style={{
                  color: toggleBoolean === false ? "#4f46e5" : "#0de99f",
                  fontSize: 14,
                }}
                className={sass.text_nota}
              >
                {" "}
                {round(coEspx20 + coRRGGx20 + coInglesx20, 1)} pts{" "}
              </span>
            </h4>
            {coEspx20 + coRRGGx20 + coInglesx20 < 13 ? (
              <h3 className={sass.text_msn_desaprobado} >"Desaprobastes" "Sigue intentando" 🤔</h3>
            ) : (
              <h3 className={sass.text_msn_aprobado}>"Felicidades" "Aprobastes"  😃</h3>
            )}
          </div>
          <div className={sass.div_img}>
            {coEspx20 + coRRGGx20 + coInglesx20 < 13 ? (
              <img
                src="https://res.cloudinary.com/perusap/image/upload/v1651894016/EXAM/desaprobado_hhqkfr.jpg"
                alt="desaprobado"
              />
            ) : (
              <img
                src="https://res.cloudinary.com/perusap/image/upload/v1651894016/EXAM/apro_c3l6wc.jpg"
                alt="aprobado"
              />
            )}
          </div>
          <div className={sass.div_img2}>
            {coEspx20 + coRRGGx20 + coInglesx20 < 13 ? (
              <img
                src="https://res.cloudinary.com/perusap/image/upload/v1654740864/EXAM/2ed_pcjobu.gif"
                alt="desaprobado"
              />
            ) : (
              <img
                src="https://res.cloudinary.com/perusap/image/upload/v1654740592/EXAM/crash-crash-bandicoot_jpa27h.gif"
                alt="aprobado"
              />
            )}
          </div>
        </article>
      </section>
    </div>
  );
}
