import React, { Component } from "react";
import "./App.css";
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TableData from './TableData';

class App extends Component {

  render() {

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Form} />
            <Route path="/table" component={TableData} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
