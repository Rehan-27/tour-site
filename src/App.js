import './App.css';
import About from './components/About';
import Destinations from './components/Destinations';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/destinations">
            <Destinations />
          </Route>
        </Switch>
      </Router>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
