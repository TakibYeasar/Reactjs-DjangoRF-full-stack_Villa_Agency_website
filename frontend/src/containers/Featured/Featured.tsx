import React, { useEffect, useState } from 'react';
import "./Featured.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import info01 from "../../../../assets/info-icon-01.png";
import info02 from "../../../../assets/info-icon-02.png";
import info03 from "../../../../assets/info-icon-03.png";
import info04 from "../../../../assets/info-icon-04.png";
import featured from "../../../../assets/featured.jpg";
import featured_icon from "../../../../assets/featured-icon.png";
import axios from 'axios';
import axiosInstance from '../../axios';

const Featured = () => {

    const [IsLoading, setIsLoading] = useState(true);
    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        axios.all([
            axiosInstance.get('core/featured/'),
        ]).then(axios.spread((res) => {
            setFeatured(res.data)
            console.log(res.data)
            setIsLoading(false)

        })).catch(err => {
            console.log(err);
        })
    }, [])

    if (IsLoading) {
        return <h3>loading ...</h3>
    }


    return (
        <div className="featured_sec">
            <div className="container">
                <div className="row">

                    <div className="featured col-lg-4">
                        <div className="left-image">
                            <img src={featured} alt="" className='image' />
                            <a href="/Propertydetails/Propertydetails"><img src={featured_icon} alt="" className='image' /></a>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <div className="section-heading">
                            <h6 className='title-two'>| Featured</h6>
                            <h2 className='main-title'>Best Appartment &amp; Sea view</h2>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Best useful links ?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Get <strong>the best villa</strong> website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the <a href="https://www.google.com/search?q=best+free+css+templates" target="_blank">best free CSS templates</a> in the world. Please tell your friends about it.</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        How does this work ?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Why is Villa Agency the best ?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <div className="info-table">
                            <ul>
                                <li>
                                    <img src={info01} alt="" />
                                    <h4>250 m2<br /><span>Total Flat Space</span></h4>
                                </li>
                                <li>
                                    <img src={info02} alt="" />
                                    <h4>Contract<br /><span>Contract Ready</span></h4>
                                </li>
                                <li>
                                    <img src={info03} alt="" />
                                    <h4>Payment<br /><span>Payment Process</span></h4>
                                </li>
                                <li>
                                    <img src={info04} alt="" />
                                    <h4>Safety<br /><span>24/7 Under Control</span></h4>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Featured