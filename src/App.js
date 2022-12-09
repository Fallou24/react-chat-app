import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./app.scss";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;