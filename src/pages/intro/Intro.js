import React from "react";
import { Link } from "react-router-dom";
// import Pork from "./Pork";
import Fondo from "./Fondo";
import data from "../../data/data.json";
// import "./intro.scss";
import sass from "./intro.module.scss";
import * as ImIcons from "react-icons/im";

export default function Intro() {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setParticula("#fff");
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <div className={sass.content_intro}>
      <Fondo />

      <div className={sass.content_bienvenido}>
        <h4 className={sass.text_app}>
          Examen App - {""}
          <span className={sass.text_app} style={{ color: "#0de99f" }}>
            {" "}
            {data?.tipo_examen}{" "}
          </span>
        </h4>
        <h4 className={sass.bienvenido_text}>Bienvenido: {data?.nombre} </h4>
      </div>

      <div className={sass.cubo_gif}>
        <img
          src="https://res.cloudinary.com/perusap/image/upload/v1630218186/EXAM/logo_gif_sa2pvb.gif"
          alt="alt"
        />
      </div>

      <section className={sass.content_data}>
        <div className={sass.container_footer}>
          <div className={sass.data_intro}>
            <span className={sass.text_intro}>
              Desarrolador: Mamani Flores Rolando A.{" "}
            </span>
            <span className={`${sass.text_intro} ${sass.icon_wasap}`}>
              Tel: 985503581 <ImIcons.ImWhatsapp />
            </span>
            <a
              href="https://www.d3vrolando.com/"
              target="blank"
              className={`${sass.text_intro} ${sass.text_portafolio}`}
            >
              Mi portafolio
            </a>
          </div>
          <Link
            to="/login2"
            // className="animate__animated animate__bounceInLeft"
            className={`${sass.btn_login} "animate__animated animate__bounceInLeft"  `}
          >
            <span>Ir a Login </span>
            <ImIcons.ImArrowRight />
            <img
              src="https://res.cloudinary.com/perusap/image/upload/v1653543834/EXAM/3_u8kl7v.png"
              alt="ddd"
              style={{ width: 32 }}
            />
          </Link>
        </div>
      </section>

      <div className={sass.logo_png}>
        {/* <div className="logo_png animate__animated animate__tada"> */}
        <img
          src="https://res.cloudinary.com/perusap/image/upload/v1630220972/EXAM/logo_final_png_rroxof.png"
          alt="dddd"
        />
      </div>

      <Link
        to="/login2"
        // className="animate__animated animate__bounceInLeft"
        className={`${sass.btn_login2} "animate__animated animate__bounceInLeft"  `}
      >
        <span  className={`${sass.text_login2}`} >
          Ir a Login
          <ImIcons.ImArrowRight  className={sass.icon_login2}/>
        </span>
        <img
          src="https://res.cloudinary.com/perusap/image/upload/v1653543834/EXAM/3_u8kl7v.png"
          alt="ddd"
          style={{ width: 32 }}
        />
      </Link>
    </div>
  );
}
