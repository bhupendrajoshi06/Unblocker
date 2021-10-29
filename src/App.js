
import React from "react";


import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';
 import Home from './components/Home';
 import {
 Route
 
} from "react-router-dom";

import './App.css';

function App() {

 
  return (
    
    
    <div >

      <Header bg="black"></Header>

      <Route exact path="/" component={Home} />
      <Route exact path="/profile" component={Profile} />
   
      <Footer bg="black"></Footer>


    </div>
  )
}

export default App