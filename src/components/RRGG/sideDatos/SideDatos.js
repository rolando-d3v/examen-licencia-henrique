import React from "react";
import "./sideDatos.scss";

export default function SideDatos(props) {
  return (
    <div className="sideDatos">
      <div className="sideDatos__progress">
        <span className="sideDatos__progress--pre">
          Pregunta:
          <strong className="sideDatos__numero"> {props.current}</strong>
        </span>
        <p className="sideDatos__progress--pre">
          Total:<strong> {props.total} </strong>
        </p>
      </div>
    </div>
  );
}
