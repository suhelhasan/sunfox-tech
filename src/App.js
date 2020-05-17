import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Container/layout/Layout';
// import UserData from './Container/UserData'

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
