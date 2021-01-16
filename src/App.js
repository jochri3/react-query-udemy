import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/posts";
import Navbar from "./components/navbar/navbar";
import "./components/style.scss";


export default function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
