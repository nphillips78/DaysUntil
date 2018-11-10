import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import countdownView from './countdownView';


const App = () => {
  return ( 
    
  <BrowserRouter>
    <Route path="/login" component = {Login}></Route>
    <Route path="/countdownView" component = {countdownView}></Route>
  </BrowserRouter> 
  );
  }

export default App;
