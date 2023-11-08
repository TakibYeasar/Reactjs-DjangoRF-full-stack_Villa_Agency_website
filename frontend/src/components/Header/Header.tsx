import React, { useEffect, useState } from 'react';
import "./Header.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaCalendar } from "react-icons/fa";
// import axios from 'axios';
// import axiosInstance from '../../axios';
// import { useHistory } from 'react-router-dom';


const Header = () => {

  // const history = useHistory();
  // const token = localStorage.getItem('refresh');
  // (token || history.push('/'));
  // const data = { refresh_token: token };
  // axiosInstance.post('auth/logout/', data).then(res => {
  //   localStorage.clear();
  //   history.push('/login');
  // }).catch(err => {
  //   console.log(err);
  // })


  return (
    <div className="header_sec">
      <div className="container">

        <div className="row">
          <div className="header-section">
            <nav className="main-nav d-flex">
              <a href="i/" className="logo">
                <h1>Villa</h1>
              </a>
              <ul className="nav">
                <li><a href="/" className="active">Home</a></li>
                <li><a href="#properties">Properties</a></li>
                <li><a href="/propertydetails">Property Details</a></li>
                <li><a href="#contact">Contact Us</a></li>
                {/* {
                  token ?
                    <>
                      <li><a href='/Logout'>Logout</a></li>
                      <li><a href='/login'>Account</a></li>
                    </>
                    :
                    <>
                      <li><a href='/register'>Register</a></li>
                      <li><a href='/login'>Login</a></li>
                    </>
                } */}
                <li><a href="#bestdeal"><FaCalendar className='icon' /> Schedule a visit</a></li>
              </ul>
              <a className='menu-trigger'>
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Header