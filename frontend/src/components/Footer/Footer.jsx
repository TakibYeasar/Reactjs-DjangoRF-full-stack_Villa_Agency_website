import React, { useEffect, useState } from 'react';
import "./Footer.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMap, FaTwitter } from "react-icons/fa";
import axios from 'axios';
import axiosInstance from '../../axios';


const Footer = () => {

  const [IsLoading, setIsLoading] = useState(true);
  const [contactinfo, setContactinfo] = useState([]);

  useEffect(() => {
    axios.all([
      axiosInstance.get('core/contact-info/'),
    ]).then(axios.spread((res) => {
      setContactinfo(res.data)
      setIsLoading(false)
      // console.log(res.data)
    })).catch(err => {
      console.log(err);
    })
  }, [])

  if (IsLoading) {
    return <h3>loading ...</h3>
  }


  return (
    <footer className="footer_sec">
      <div className="container">

        <div className="row">
          <div className="contact-section d-flex">
            <div className="col-lg-8">
              <ul className="info d-flex">
                <li><FaEnvelope className='icon' />{contactinfo?.email}</li>
                <li><FaMap className='icon' />{contactinfo?.address}</li>
              </ul>
            </div>
            <div className="col-lg-4">
              <ul className="social-links d-flex">
                <li><a href={contactinfo?.facebook_link}><FaFacebook className='icon' /></a></li>
                <li><a href={contactinfo?.twitter_link}><FaTwitter className='icon' /></a></li>
                <li><a href={contactinfo?.linkedin_link}><FaLinkedin className='icon' /></a></li>
                <li><a href={contactinfo?.instagram_link}><FaInstagram className='icon' /></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="copyright">
            <p>Copyright © 2048 Villa Agency Co., Ltd. All rights reserved. Design: <a rel="nofollow" href="https://templatemo.com" target="_blank">TemplateMo</a></p>
          </div>
        </div>

      </div>

    </footer>
  )
}

export default Footer