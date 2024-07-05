import React from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Body from './Components/Body';
import { Analytics } from "@vercel/analytics/react"

function App() {

  return (
    <>
      <Header />
      <Body />
      <Footer /> 
      <Analytics/>
    </>
  )
}

export default App;