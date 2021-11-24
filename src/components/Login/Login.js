import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";
const Login = () => {
    return (
        <div className="login-c">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Your Email" />
                    <br /> <br />
                    <input type="password" placeholder="your Password" />
                    <br /> <br />
                    <input className="btn btn-regular" type="submit" value="Submit" />
                </form>
                <p>New to ema-john ?<Link to="/register">Create New Account</Link> </p>
                <div>-----------or------------</div>
                <button className="btn btn-regular">Google Sign In</button>
            </div>

        </div >
    );
};

export default Login;