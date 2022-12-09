import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import "./register.scss";

const Login = () => {
  const [err, setErr] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("")
    const email = e.target[0].value;
    const password = e.target[1].value;
    if (email && password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          setErr(error.message);
        });
        document.querySelector("form").reset()
    }
  };
  return (
    <div className="register">
      <div className="register__container">
        <h1>Chat App</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
        </form>
        {err && <p className="err">{err}</p>}
        <p>
          You don't have an account ? <Link to="/register">register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
