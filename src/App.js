import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {  Route } from 'react-router';
import Layout from './Container/layout/Layout';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
// import UserData from './Container/UserData'

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <Layout/>
      </div>
    </BrowserRouter>
  );
}

export default App;
