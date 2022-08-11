import React, { useEffect, useState } from "react";
import sass from "./sideDatos.module.scss";

export default function SideDatos(props) {
  return (
    <div className={sass.sideDatos}>
      <div className={sass.content_progress}>
        <span className={sass.progress_pregunta}>
          <strong className={sass.pregunta}>Pregunta </strong>
          <strong className={sass.numero}>Nº:{props.current}</strong>
        </span>

        <img
          className={sass.img_datos}
          src="https://res.cloudinary.com/perusap/image/upload/v1652154342/EXAM/Qd4H_f88cs9.gif"
          alt="red"
        />

        <strong className={sass.total_pre}>
          Total:<strong> {props.total} </strong>
        </strong>
      </div>
    </div>
  );
}
