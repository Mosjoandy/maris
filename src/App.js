import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Pages
import Home from "./pages/Home/Home";
import Animations from "./pages/Animations/Animations";
import FoodieCats from "./pages/Animations/FoodieCats";
import Illustrations from "./pages/Illustrations/Illustrations";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ControlPanel from "./pages/ControlPanel/ControlPanel";

//Components
import Topper from "./components/Topper/Topper";
import Navigation from "./components/Navi/Navigation";
import Footer from "./components/Footer/Footer";

class App extends React.Component {

  render() {
    return (

      <Router>
        <div>
          <Topper />
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/animations" component={Animations} />
            <Route exact path="/foodiecats" component={FoodieCats} />
            <Route exact path="/illustrations" component={Illustrations} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/cp" component={ControlPanel} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  };
};

export default App;
