// import styled from "styled-components";
import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { DarkContext } from "../context/darkContext/DarkContext";
import { ToggleConten } from "../context/togleContext/TogleContext";
import Navegador from "../layout/navegador/Navegador";
import Athoq from "../pages/examen/Athoq";
import TestLayout from "../components/test/tesLayout/TestLayout";
import CreatePokemon from "../pages/CreatePokemon";
import Home from "../pages/home/Home";

import "./homeRouter.scss";
import LayoutResultTest from "../components/result_Test/layout/LayoutResultTest";
import ResultTest from "../components/result_Test/result_test/ResultTest";

export default function HomeRouter() {
  const { toggleState } = useContext(ToggleConten);
  const { toggleBoolean } = useContext(DarkContext);
 

  return (
    <div className={`div_mainx ${toggleState ? "marginOFFx" : "marginONx"}`}>
      <Navegador />
      <div
        className={`div_routes ${toggleBoolean ? "themeDark" : "themeLight"}`}
      >
        <Switch>
          <Route exact path="/preguntas" component={CreatePokemon} />
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/examen" component={Athoq} />
          <Route exact={true} path="/test" component={TestLayout} />
          <Route exact={true} path="/result-test" component={LayoutResultTest} />
          <Route exact={true} path="/result-test-tema" component={ResultTest} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}
