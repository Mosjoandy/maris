import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import Topper from "./components/Topper/Topper";

class App extends React.Component {

  render() {
    return (

      <Router>

        <div>
          <Topper />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;
