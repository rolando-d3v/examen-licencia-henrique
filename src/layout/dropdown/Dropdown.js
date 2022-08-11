import React, { useContext, useState } from "react";
import * as FaIcon from "react-icons/fa";
import { Link } from "react-router-dom";
import { QuizContext } from "../../context/quizContext/quizContext";
import { ToggleConten } from "../../context/togleContext/TogleContext";
import types from "../../context/quizContext/types";
import "./dropdown.scss";
import { Data } from "./dataLinks";

export default function Dropdown() {
  const { state, dispatch } = useContext(QuizContext);

  const { toggle, toggleState } = useContext(ToggleConten);

  const { clicked } = state;

  // console.log(clicked);
  // console.log(state);

  //funcion para cuando da click en dropdown
  const toggleDrop = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return dispatch({ type: types.CLICKED_TEMA, clicked: null });
    }

    dispatch({ type: types.CLICKED_TEMA, clicked: index });
  };

  const clickTemaPreguntas = (tema, tipo) => {
    dispatch({ type: types.RESTAR_PREGUNTAS });
    dispatch({ type: types.SET_TIPO_EXAMEN, tipoExamen: tipo });
    dispatch({ type: types.SET_TEMA_PREGUNTAS, temaPreguntas: tema });
  };

  return (
    <div className="container_drop">
      <h4 className="title_drop">Modo Practica</h4>
      {Data.map((item, index) => {
        return (
          <div key={index}>
            <div
              className="headContent"
              onClick={() => toggleDrop(index)}
              style={{
                backgroundColor: clicked === index && "#3179a8",
                color: clicked === index && "#fff",
              }}
            >
              <div>
                {item.icon}
                <span>{item.title}</span>
              </div>
              <span>
                {clicked === index ? (
                  <FaIcon.FaChevronUp />
                ) : (
                  <FaIcon.FaChevronLeft />
                )}
              </span>
            </div>
            {clicked === index && (
              <>
                <div className="dropdown_item1">
                  {item.links.map((drop, index) => (
                    <Link
                      className={`link-item ${state.temaPreguntas ===
                        drop.tema && "select_item"}`}
                      key={index}
                      to={drop.url}
                      onClick={() => {
                        clickTemaPreguntas(drop.tema, drop.tipo_exam);
                      }}
                    >
                      {drop.icon} <span>{drop.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="dropdown_item2">
                  {item.links.map((drop, index) => (
                    <Link
                      className={`link-item ${state.temaPreguntas ===
                        drop.tema && "select_item"}`}
                      key={index}
                      to={drop.url}
                      onClick={() => {
                        clickTemaPreguntas(drop.tema, drop.tipo_exam);
                        toggle();
                      }}
                    >
                      {drop.icon} <span>{drop.name}</span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
