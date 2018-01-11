import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { getAbsoluteFilePath } from "./util";
import Inicio from "./inicio";
import Login from "./_container/Login";
import Register from "./_container/Register";

// import registerServiceWorker from "./registerServiceWorker";
import "normalize.css";
import "./index.css";

function Root() {
  return (
    <div className="root">
      <h1>Workshop: Pensando en React</h1>
      <ul className="rootList">

        <li>
          <Link to="/home">Versión inicial (estática) de la aplicación</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/Register">Register</Link>
        </li>
      </ul>
    </div>
  );
}

ReactDOM.render(

  <BrowserRouter>
    <Switch>
      <Route path="/home" component={Inicio} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route component={Root} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// registerServiceWorker();
