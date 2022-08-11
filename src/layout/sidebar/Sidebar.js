import React, { useState, useEffect, useContext } from "react";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
import "./sidebar.scss";
import Swal from "sweetalert2";
import datax from '../../data/data.json'


import Dropdown from "../dropdown/Dropdown";
import types from "../../context/testContext/types";
import AuthContext from "../../context/auth/authContext";
import { ToggleConten } from "../../context/togleContext/TogleContext";
import { TestContext } from "../../context/testContext/testContext";
import { QuizContext } from "../../context/quizContext/quizContext";

const linkSidebar = [
  { name: "Tools", url: "/", icon: <FaIcons.FaTools /> },
  { name: "Config", url: "/preguntas", icon: <FaIcons.FaFolder /> },
];

const linkTest = [
  {
    name: "Especialidad",
    url: "/test",
    tipo: "esp",
    tipoIndex: 0,
    img_url:
      "https://res.cloudinary.com/perusap/image/upload/v1644783206/EXAM/Especialista-o-Generalista_gmhsky.jpg",
  },
  {
    name: "RRGG",
    url: "/test",
    tipo: "rrgg",
    tipoIndex: 1,
    img_url:
      "https://res.cloudinary.com/perusap/image/upload/v1644783204/EXAM/reglamento_wyppir.jpg",
  },
  {
    name: "Ingles",
    url: "/test",
    tipo: "ingles",
    tipoIndex: 2,
    img_url:
      "https://res.cloudinary.com/perusap/image/upload/v1644781409/EXAM/dddd_twanxf.png",
  },
];

export default function Sidebar() {
  const history = useHistory();

  const { toggle, toggleState } = useContext(ToggleConten);
  const { user } = useContext(AuthContext);

  const { state, resetQuiz } = useContext(QuizContext);

  const { testState, testDispatch } = useContext(TestContext);
  const {
    tipoTest,
    arrayRespuestasEsp,
    arrayRespuestasRRGG,
    arrayRespuestasIngles,
    testOpen,
    timeActive,
  } = testState;

  //para saber si esta completo
  let nu_esp = arrayRespuestasEsp.length;
  let nu_rrgg = arrayRespuestasRRGG.length;
  let nu_ingles = arrayRespuestasIngles.length;
  let totalArray = nu_esp + nu_rrgg + nu_ingles;

  //METODO DE TIEMPO PARA CRONOMETRO
  const [horas, setHoras] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const timerHoras = horas < 10 ? `0${horas}` : horas;
  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  // console.log(timerHoras, timerMinutes, timerSeconds);
  // console.log(testState);

  //Cronometro de tiempo para test
  useEffect(() => {
    if (testOpen === false) {
      setSeconds(0);
      setMinutes(0);
      setHoras(0);
    }

    if (timeActive === true) {
      let interval = setInterval(() => {
        clearInterval(interval);

        if (seconds === 59) {
          setMinutes(minutes + 1);
          setSeconds(0);
        } else {
          setSeconds(seconds + 1);
        }

        if (minutes === 59 && seconds === 59) {
          setHoras(horas + 1);
          setMinutes(0);
          setSeconds(0);
        }
      }, 1000);
    }
  }, [seconds, timeActive, testOpen]);

  //saber si se completo el tema uno por uno con su index
  const openTest = () => {
    Swal.fire({
      title: "Desea Realizar el Test?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Comenzar el Test!",
      imageUrl:
        "https://res.cloudinary.com/perusap/image/upload/v1645593204/EXAM/estudiar-estudio_olhefl.gif",
      imageWidth: 400,
      imageHeight: 240,
      imageAlt: "Custom image",
      background: testOpen ? "#131c21" : "#fff",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-right",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Buena Suerte en su Test",
        });

        console.log("cominza tiempo");
        // setTimeActive(timeActive === false ? true : false);
        testDispatch({ type: types.TIME_ACTIVE, timeActive: true });

        testDispatch({ type: types.TEST_OPEN, testOpen: true });
        testDispatch({ type: types.RESTAR_PREGUNTAS });
        resetQuiz();
      }
    });
  };

  const closeTest = () => {
    Swal.fire({
      title: "Desea Salir del Test",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Salir del Test!",
      background: "#fff",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-right",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Logro salir del Test",
        });

       
        // testDispatch({ type: types.TEST_OPEN, testOpen: false ? true : false });
        testDispatch({ type: types.TEST_OPEN, testOpen: false });
        testDispatch({ type: types.EXIT_TEST });
        resetQuiz();
        history.replace("/");
        testDispatch({ type: types.TIME_ACTIVE, timeActive: false });
       
      }
    });
  };

  const clickTest = (tipo) => {
    testDispatch({ type: types.RESTAR_PREGUNTAS });
    testDispatch({ type: types.TIPO_TEST, tipoTest: tipo });
  };

  const result_btn = () => {
    // setTimeActive(false);
    testDispatch({ type: types.TIME_ACTIVE, timeActive: false });
    testDispatch({
      type: types.DATA_TIME,
      data_time: { h: horas, m: minutes, s: seconds },
    });
  };

  return (
    <div
      style={{ display: !user.logged && "none" }}
      className={`sidebar ${toggleState ? "sidebar-visible" : ""}`}
    >
      <div className="header_logo">
        <div>
          <img
            src="https://res.cloudinary.com/perusap/image/upload/v1653543834/EXAM/3_u8kl7v.png"
            alt="icono"
            style={{ width: 38 }}
          />
          <span className="text_logo">Examen App</span>
        </div>
      </div>

      <div className="header_avatar">
        <div>
          <img
            src="https://res.cloudinary.com/perusap/image/upload/v1652250991/EXAM/user_f3llgz.png"
            alt="alt"
          />
          <span className="text_user_name">{datax?.tipo_examen}  </span>
        </div>
      </div>

      {/* components de link de link */}
      {/* {testOpen === false && (
        <div className="div_links">
          {linkSidebar.map((li, index) => (
            <Link className="sidebar_link" key={index} to={li.url}>
              {li.icon} {li.name}
            </Link>
          ))}
        </div>
      )} */}

      {/* components de link de test */}
      <div className="div_buttonx">
        {/* {testOpen ? (
          <button className="buttonx btn_exit_test" onClick={closeTest}>
            <MdIcons.MdExitToApp style={{ fontSize: "25", marginRight: "4" }} />
            Exit / Simulador Test
          </button>
        ) : (
          <button className="buttonx btn_iniciador" onClick={openTest}>
            Modo / Simulador Test
            <img
              src="https://res.cloudinary.com/perusap/image/upload/v1652160883/EXAM/test_xcp0rf.jpg"
              alt="red"
              width={120}
            />
            <span className="punto_img punto-animate"></span>
          </button>
        )} */}

        <div className={`div_link_test ${testOpen ? "open_test" : ""}`}>
          {/* time de Test */}
          <div className="div_crono">
            <h5 className="crono_title">Cronometro: </h5>
            <MdIcons.MdTimer className="separador" />
            {/* <span className='separador' >  </span> */}
            <span className="crono_time">
              {timerHoras}:{timerMinutes}:{timerSeconds}
            </span>
          </div>

          {linkTest.map((li, index) => (
            <Link
              className={`link_test
               ${tipoTest === li.tipo ? "index_test" : ""}  
               ${nu_esp > 0 && 0 === li.tipoIndex && "tema_terminado"} 
               ${nu_rrgg > 0 && 1 === li.tipoIndex && "tema_terminado"} 
               ${nu_ingles > 0 && 2 === li.tipoIndex && "tema_terminado"} 
              `}
              key={index}
              to={li.url}
              onClick={() => clickTest(li.tipo)}
              disabled
            >
              <strong className="text_test"> {li.name}</strong>
              <div className="div_test_img">
                <img src={li.img_url} className="icon_test_img" alt="red" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* nota  =>   cantidad total de preguntas para que se visualice ek boton de ver test final   */}
      {totalArray === 100 && (
        <div className="content_btn_result" >
          <span className="manito">"👇"</span>
          <Link to="/result-test" onClick={() => result_btn()}>
            <div className="div_btn">
              <button className="btn_resultados">
                <strong className="link_tex">Resultado del Test</strong>
              </button>
            </div>
          </Link>
          <p className="text_info_result">Click para terminar el Test</p>
        </div>
      )}

      {testOpen === false && <Dropdown />}
    </div>
  );
}
