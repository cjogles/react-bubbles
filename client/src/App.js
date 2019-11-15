import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { PrivateRoute } from './components/PrivateRoute';
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Login Page</Link>
              </li>
              <li>
                <Link to="/api/colors">Bubble Page</Link>
              </li>
            </ul>
          </nav>
        </div>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          {/* 
            Build a PrivateRoute component that will 
            display BubblePage when you're authenticated 
          */}
          <PrivateRoute>
            <Route path="/api/colors" component={BubblePage}/>
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
