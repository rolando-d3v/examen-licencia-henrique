import React from "react";
import "./aswer.scss";

export default function Answer(props) {
  let classes = ["btn_opcion"];

  if (props.selected) {
    classes.push("selected");
  }

  return (
    <div className="answer">
      <button
        onClick={props.handleClick}
        value={props.letter}
        className={classes.join(" ")}
      >
        {props.letter}
      </button>
      <p className="respuesta_opcion">{props.answer}</p>
      <img src={props.answer_img} alt="" />
    </div>
  );
}
