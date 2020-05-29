import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './header/header';
import MainContainer from './main-container/main-container';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <MainContainer />
      </BrowserRouter>

    </div>
  );
}

export default App;
