import React from "react";
import { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./app.scss";
import { authContext } from "./context/AuthContextProvider";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

const App = () => {
  const user = useContext(authContext);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
        <Route path="/register" element={user?.photoURL ? <Navigate to='/'/> : <Register />} />
        <Route path="/login" element={user?.photoURL ? <Navigate to='/'/> :<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
