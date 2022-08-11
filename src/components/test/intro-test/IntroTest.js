import React from "react";

import sass from "./introTest.module.scss";

export default function IntroTest({ rendirEsp, tipoTest }) {


 



  return (
    <section className={sass.content_introTest}>
      {tipoTest === "esp" ? (
        <div className={sass.div_image}>
          <img
            className={sass.image_introTest}
            src="https://res.cloudinary.com/perusap/image/upload/v1645596424/EXAM/Reglamento_05_th4uid.png"
            alt="ded"
          />
          <div className={sass.div_text}>
            <h3>Examen de Especialidad</h3>
          </div>
          <button className={sass.btn_intro_test} onClick={() => rendirEsp()}>
          <span className={sass.manito} >"👇"</span>
            Rendir Test de Especialidad
          </button>
        </div>
      ) : tipoTest === "rrgg" ? (
        <div className={sass.div_image}>
          <img
            className={sass.image_introTest}
            src="https://res.cloudinary.com/perusap/image/upload/v1654365225/EXAM/Clases-de-reglamentos_yok20i.jpg"
            alt="ded"
          />
          <div className={sass.div_text}>
            <h3>Examen de RRGG</h3>
          </div>
          <button className={sass.btn_intro_test} onClick={() => rendirEsp()}>
          <span className={sass.manito} >"👇"</span>
            Rendir Examen de RRGG
          </button>
        </div>
      ) : (
        <div className={sass.div_image}>
          <img
            className={sass.image_introTest}
            src="https://res.cloudinary.com/perusap/image/upload/v1645595998/EXAM/ingles_skfkcu.jpg"
            alt="ded"
          />
          <div className={sass.div_text}>
            <h3>Examen de Ingles</h3>
          </div>
          <button className={sass.btn_intro_test} onClick={() => rendirEsp()}>
          <span className={sass.manito} >"👇"</span>
            Rendir Examen Ingles
          </button>
        </div>
      )}
    </section>
  );
}
