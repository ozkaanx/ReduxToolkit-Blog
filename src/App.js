import About from "Pages/About";
import Contact from "Pages/Contact";
import Details from "Pages/Details";
import Home from "Pages/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route  path="/news/:news_id" component={Details}/>
        <Route  path="/about" component={About}/>
        <Route  path="/contact" component={Contact}/>
      </Switch>
    </Router>
  );
};

export default App;
