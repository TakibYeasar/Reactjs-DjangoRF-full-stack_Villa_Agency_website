import React, { useState } from 'react';
import "./Registrations.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import page_heading from "../../../../assets/page-heading-bg.jpg";
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import { domain } from "../../env";

const Registrations = () => {

    const navigate = useNavigate();
    const token = localStorage.getItem('access');
    const user_info = Object.freeze({
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        password: "",
        confirm_password: "",
    });
    const [user, setUser] = useState(user_info);
    (!token || navigate('/'));
    const getData = (e) => {
        setUser({ ...user, [e.target.name.trim()]: e.target.value.trim() });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${domain}/auth/register/`, user).then(res => {
            console.log(res.data);
            navigate('/')
        }).catch(err => {
            console.log(err);
        })
    }


    return (
        <div className="registrations_sec">

            <div className="page-heading text-center">
                <img src={page_heading} alt='' className='image' />
                <div className="section-heading text-center">
                    <span className="breadcrumb"><a href="#">Home</a>  /  Registration</span>
                    <h3>Registration</h3>
                </div>
            </div>


            <div className="container">

                <div className="body-content">
                    <div className="row">
                        <div className="sign-in-page">
                            <div className="row">
                                <div className=" col-lg-12 col-md-6 col-sm-6 create-new-account">
                                    <h4 className="checkout-subtitle">Create a new account</h4>
                                    <p className="text title-tag-line">Create your new account.</p>
                                    <form className="register-form outer-top-xs" role="form" onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label className="info-title" htmlFor="exampleInputEmail2">Email Address <span>*</span></label>
                                            <input type="email" className="form-control unicase-form-control text-input" id="exampleInputEmail2" placeholder="email" onChange={getData} />
                                        </div>
                                        <div className="form-group">
                                            <label className="info-title" htmlFor="exampleInputEmail1">Username <span>*</span></label>
                                            <input type="text" className="form-control unicase-form-control text-input" id="exampleInputEmail1" placeholder="username" onChange={getData} />
                                        </div>
                                        <div className="form-group">
                                            <label className="info-title" htmlFor="exampleInputEmail1">Password <span>*</span></label>
                                            <input type="text" className="form-control unicase-form-control text-input" id="exampleInputEmail1" placeholder="password" onChange={getData} />
                                        </div>
                                        <div className="form-group">
                                            <label className="info-title" htmlFor="exampleInputEmail1">Confirm Password <span>*</span></label>
                                            <input type="text" className="form-control unicase-form-control text-input" id="exampleInputEmail1" placeholder="confirm_password" onChange={getData} />
                                        </div>
                                        <button type="submit" className="btn-upper btn btn-primary checkout-page-button">Sign Up</button>
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

export default Registrations