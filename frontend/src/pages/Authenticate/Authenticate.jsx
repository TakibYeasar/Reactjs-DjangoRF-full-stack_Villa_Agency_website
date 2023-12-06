import React, { useState } from 'react';
import "./Authenticate.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import page_heading from "../../../../assets/page-heading-bg.jpg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { domain } from "../../env";


const Authenticate = () => {

    const token = localStorage.getItem('access');
    const navigate = useNavigate();
    const data = Object.freeze({
        email: "",
        password: ""
    })
    const [user, setUser] = useState(data);
    (!token || navigate('/'));
    const getData = (e) => {
        setUser({ ...user, [e.target.name.trim()]: e.target.value.trim(), });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${domain}/auth/login/`, user).then(res => {
            console.log(res.data);
            localStorage.setItem('refresh', res.data.token['refresh']);
            localStorage.setItem('access', res.data.token['access']);
            navigate('/');
        }).catch(err => {
            console.log(err);
        });
    };


    return (
        <div className="authenticate_sec">

            <div className="page-heading text-center">
                <img src={page_heading} alt='' className='image' />
                <div className="section-heading text-center">
                    <span className="breadcrumb"><a href="#">Home</a>  /  Authenticate</span>
                    <h3>Authenticate</h3>
                </div>
            </div>


            <div className="container">

                <div className="body-content">
                    <div className="row">
                        <div className="sign-in-page">
                            <div className="row">
                                <div className="col-lg-12 col-md-6 col-sm-6 sign-in">
                                    <h4 className="">Sign in</h4>
                                    <p className="">Hello, Welcome to your account.</p>
                                    <div className="social-sign-in outer-top-xs">
                                        <a href="#" className="facebook-sign-in"><FaFacebook className='icon' /> Sign In with Facebook</a>
                                        <a href="#" className="twitter-sign-in"><FaTwitter className='icon' /> Sign In with Twitter</a>
                                    </div>
                                    <form className="register-form outer-top-xs" role="form" onSubmit={handleSubmit}>
                                        <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail1" placeholder='Email Address' onChange={getData} />
                                        <input type="password" className="form-control unicase-form-control text-input" id="exampleInputPassword1" placeholder='Password' onChange={getData} />
                                        <div className="radio outer-xs">
                                            <label>
                                                <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />Remember me!
                                            </label><br />
                                            <a href="#" className="forgot-password pull-right">Forgot your Password?</a>
                                        </div>
                                        <button type="submit" className="btn-upper btn btn-primary checkout-page-button">Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authenticate