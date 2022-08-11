import React, { useContext } from "react";
import { FaIndent, FaOutdent } from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
import { types } from "../../context/auth/types";
import type from "../../context/testContext/types";

import AuthContext from "../../context/auth/authContext";
import "./navegador.scss";
import { ToggleConten } from "../../context/togleContext/TogleContext";
import { DarkContext } from "../../context/darkContext/DarkContext";
import { QuizContext } from "../../context/quizContext/quizContext";
import { TestContext } from "../../context/testContext/testContext";

export default function Navegador() {
  const { user, dispatch } = useContext(AuthContext);
  const { toggle, toggleState } = useContext(ToggleConten);
  const { toggleBoolean, toggleTheme } = useContext(DarkContext);
  const { state, resetQuiz, resetClicked } = useContext(QuizContext);

  const { testState, testDispatch } = useContext(TestContext);

  const history = useHistory();

  const navLink = [
    { name: "Home", url: "/preguntas" },
    { name: "Contact", url: "/" },
  ];

  const exitUser = async () => {
    resetQuiz();
    resetClicked();
    dispatch({
      type: types.LOGOUT,
    });

    testDispatch({ type: type.EXIT_TEST });
    testDispatch({ type: type.TIME_ACTIVE, timeActive: false });
    // testDispatch({ type: type.TEST_OPEN, testOpen: false ? true : false });
    testDispatch({ type: type.TEST_OPEN, testOpen: false });
    history.replace("/intro");
  };

  return (
    <nav style={{ display: !user.logged && "none" }} className="nav_container">
      <div>
        <div className="nav_seccion01">
          {toggleState ? (
            <FaOutdent className="sidebar__close " onClick={toggle} />
          ) : (
            <FaIndent className="sidebar__close " onClick={toggle} />
          )}

          {/* {navLink.map((link, index) => (
            <Link
              className="nav_link"
              key={index}
              to={link.url}
              onClick={() => resetQuiz()}
            >
              {link.name}
            </Link>
          ))} */}
        </div>

        <h3 className="text_temaPreguntas"> {state.temaPreguntas}</h3>

        <div className="nav_seccion2">
          <section
            className="div_use_dark"
            onClick={toggleTheme}
            style={{ backgroundColor: `${toggleBoolean ? "aqua" : "yellow"}` }}
          >
            <FaIcons.FaMoon className="dark" />
            <FaIcons.FaSun className="dark" />
            <span
              className={`togg ${toggleBoolean ? "toggTrue" : "toggFalse "} `}
            ></span>
          </section>

          <button className="btn_exit" onClick={exitUser}>
            salir
          </button>

          {toggleState ? (
            <FaOutdent className="sidebar__close2 " onClick={toggle} />
          ) : (
            <FaIndent className="sidebar__close2 " onClick={toggle} />
          )}
        </div>
      </div>
    </nav>
  );
}
