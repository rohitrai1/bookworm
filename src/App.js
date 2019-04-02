import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={LoginPage} />
      </div>
    );
  }
}

export default App;
