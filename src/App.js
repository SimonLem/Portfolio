import React from "react";
import "./App.css";
import Home from "./screens/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App() {
  return (
    <Router>
      <Switch >
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
