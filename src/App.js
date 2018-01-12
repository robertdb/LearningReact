import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

//import { getAbsoluteFilePath } from "./util";
import Home from "./_container/Home";
import Login from "./_container/Login";
import Register from "./_container/Register";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){

      function Root() {
        return(
          <div className="root">
            <h1>React + Redux</h1>
            <ul className="rootList">

              <li>
                <Link to="/">App favoritos spotify</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </ul>
          </div>
        );
      }
      return(
        <BrowserRouter>
              <Switch>
                <Route component={Root} />
                <Route path="/login" component={Login} />
                <Route path="/" component={Home} />
                <Route path="/register" component={Register} />


              </Switch>
        </BrowserRouter>

      );
    }
}

export default App;
