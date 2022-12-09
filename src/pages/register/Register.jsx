import React from 'react';
import { Link } from 'react-router-dom';
import "./register.scss";

const Register = () => {
    return (
        <div className='register'>
             <div className="register__container">
                 <h1>Chat App</h1>
                 <form>
                    <input type="text"  placeholder='Display Name'/>
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <label htmlFor="file">
                        <img src="/img/addAvatar.png" alt="" />
                        <span>Add an avatar</span>
                    </label>
                    <input type="file" id='file' style={{display:"none"}}/>
                    <button>Sign up</button>
                 </form>
                 <p>You have an account ? <Link to="/login">login</Link></p>
             </div>
        </div>
    );
};

export default Register;