import React, { useState } from 'react';
import "./Contactus.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import phone from "../../../../assets/phone-icon.png";
import email from "../../../../assets/email-icon.png";
import contact_bg from "../../../../assets/contact-bg.jpg";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { domain } from "../../env";


const Contactus = () => {

    const token = localStorage.getItem('access');
    const navigate = useNavigate();
    const data = Object.freeze({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [contact, setContact] = useState(data);
    (!token || navigate('/'));
    const getData = (e) => {
        setContact({ ...contact, [e.target.name.trim()]: e.target.value.trim(), });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${domain}/core/contact/`, user).then(res => {
            console.log(res.data);
            navigate('/');
        }).catch(err => {
            console.log(err);
        });
    };


    return (
        <div className="contactus_sec">

            <div className="contact-heading">
                <img src={contact_bg} alt='' className='image' />
                <div className="section-heading text-center">
                    <h6>| Contact Us</h6>
                    <h2>Get In Touch With Our Agents</h2>
                </div>
            </div>

            
            <div className="container">

                <div className="row">
                    <div className="col-lg-6 contact-content">
                        
                        <div className="row d-flex">
                            <div className="col-lg-6">
                                <div className="item phone">
                                    <img src={phone} alt='' />
                                    <h6>010-020-0340<br /><span>Phone Number</span></h6>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="item email">
                                    <img src={email} alt='' />
                                    <h6>info@villa.co<br /><span>Business Email</span></h6>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <form id="contact-form" action="" method="post" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name">Full Name</label>
                                <input type="name" name="name" id="name" placeholder="Your Name..." autoComplete='on' required onChange={getData} />
                            </div>
                            <div>
                                <label htmlFor="email">Email Address</label>
                                <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your E-mail..." required onChange={getData} />
                            </div>
                            <div>
                                <label htmlFor="subject">Subject</label>
                                <input type="subject" name="subject" id="subject" placeholder="Subject..." autoComplete='on' onChange={getData} />
                            </div>
                            <div>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" placeholder="Your Message" onChange={getData} ></textarea>
                            </div>
                            <div>
                                <button type="submit" id="form-submit" className="orange-button">Send Message</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contactus