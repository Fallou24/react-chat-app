import React from "react";
import { Link } from "react-router-dom";
import "./register.scss";

const Login = () => {
  return (
    <div className="register">
      <div className="register__container">
        <h1>Chat App</h1>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
        </form>
        <p>
          You don't have an account ? <Link to="/register">register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
