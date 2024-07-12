import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './AboutUs';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about">
          <AboutUs />
        </Route>
        <Route path="/">
          <Body />
        </Route>
      </Switch>
      <Footer />
      <Analytics />
    </Router>
  );
}

export default App;
