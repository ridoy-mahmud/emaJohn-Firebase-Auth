import React from 'react';
import { Link } from 'react-router-dom';
import "./Register.css";

const Register = () => {
    return (
        <div className="login-c">
            <div>
                <h2>Register : Create Account</h2>
                <form onSubmit="">
                    <input type="email" placeholder="Enter Email" />
                    <br /> <br />
                    <input type="Password" placeholder="Enter Password" />
                    <br /> <br />
                    <input type="password" placeholder="Re-Enter Password" />
                    <br /> <br />
                    <input type="submit" className="btn btn-regular" value="Submit" ></input>
                </form>
                <p>Allready registared? Login here <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;