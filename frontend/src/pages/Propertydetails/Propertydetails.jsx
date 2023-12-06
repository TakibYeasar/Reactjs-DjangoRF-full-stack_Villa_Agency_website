import React from 'react';
import "./Propertydetails.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import page_heading from "../../../../assets/page-heading-bg.jpg";
import property from "../../../../assets/single-property.jpg";
import icon01 from "../../../../assets/info-icon-01.png";
import icon02 from "../../../../assets/info-icon-02.png";
import icon03 from "../../../../assets/info-icon-03.png";
import icon04 from "../../../../assets/info-icon-04.png";
import { Bestdeal } from '../../containers';

const Propertydetails = () => {
    return (

        <div className="propertydetails_sec">

            <div className="page-heading text-center">
                <img src={page_heading} alt='' className='image' />
                <div className="section-heading text-center">
                    <span className="breadcrumb"><a href="#">Home</a>  /  Single Property</span>
                    <h3>Single Property</h3>
                </div>
            </div>

            <div className="container">

                <div className="single-property">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="main-image">
                                <img src={property} alt="" />
                            </div>
                            <div className="main-content">
                                <span className="category">Apparment</span>
                                <h4>24 New Street Miami, OR 24560</h4>
                                <p>Get <strong>the best villa agency</strong> HTML CSS Bootstrap Template for your company website. TemplateMo provides you the <a href="https://www.google.com/search?q=best+free+css+templates" target="_blank">best free CSS templates</a> in the world. Please tell your friends about it. Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee schlitz enamel pin you probably haven't heard of them ugh hella.<br />When you look for free CSS templates, you can simply type TemplateMo in any search engine website. In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra cardigan hoodie pop-up.</p>
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
                                            Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
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
                                            Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Why is Villa the best ?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            Dolor <strong>almesit amet</strong>, consectetur adipiscing elit, sed doesn't eiusmod tempor kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave vexillologist incididunt ut labore consectetur <code>adipiscing</code> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="info-table">
                                <ul>
                                    <li>
                                        <img src={icon01} alt="" />
                                        <h4>450 m2<br /><span>Total Flat Space</span></h4>
                                    </li>
                                    <li>
                                        <img src={icon02} alt="" />
                                        <h4>Contract<br /><span>Contract Ready</span></h4>
                                    </li>
                                    <li>
                                        <img src={icon03} alt="" />
                                        <h4>Payment<br /><span>Payment Process</span></h4>
                                    </li>
                                    <li>
                                        <img src={icon04} alt="" />
                                        <h4>Safety<br /><span>24/7 Under Control</span></h4>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Bestdeal />

        </div>
    )
}

export default Propertydetails