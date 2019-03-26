import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Resume from "./components/Resume";
import Projects from "./components/Projects.js";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/projects" component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;
