import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
  return ( 
  <BrowserRouter>
    <Route path="/login" component = {Login}></Route>
    <Route path="/CountdownView" component = {}
  </BrowserRouter> 
  );
  }

export default App;
