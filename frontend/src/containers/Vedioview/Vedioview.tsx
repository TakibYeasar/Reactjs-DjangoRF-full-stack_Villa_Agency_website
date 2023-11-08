import React, { useEffect, useState } from 'react';
import "./Vedioview.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import frame from "../../../../assets/video-frame.jpg";
import vedio_bg from "../../../../assets/video-bg.jpg";
import { FaPlay } from 'react-icons/fa';
import axios from 'axios';
import axiosInstance from '../../axios';


const Vedioview = () => {

    const [IsLoading, setIsLoading] = useState(true);
    const [vedioview, setVedioview] = useState([]);

    useEffect(() => {
        axios.all([
            axiosInstance.get('core/vedioview/'),
        ]).then(axios.spread((res) => {
            setVedioview(res.data)
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
        <div className="vedioview_sec">

            <div className="vedio-image">
                <img src={vedio_bg} alt='' className='back_image' />
                <div className="section-heading text-center">
                    <h6 className='title-two'>| Video View</h6>
                    <h2 className='main-title'>Get Closer View & Different Feeling</h2>
                </div>
            </div>

            <div className="container">

                {vedioview.map((item) => (
                    <>
                        <div className="video-content">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    <div className="video-frame">
                                        <img src={item?.bg_image} alt="" className='image' />
                                        <a href={item?.vedio} target="_blank"><FaPlay className='icon' /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fun-facts">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="counter">
                                        <h2 className="timer count-title count-number" data-to={item?.building} data-speed="1000"></h2>
                                        <p className="count-text ">Buildings<br />Finished Now</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="counter">
                                        <h2 className="timer count-title count-number" data-to={item?.experience} data-speed="1000"></h2>
                                        <p className="count-text ">Years<br />Experience</p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="counter">
                                        <h2 className="timer count-title count-number" data-to={item?.awards} data-speed="1000"></h2>
                                        <p className="count-text ">Awwards<br />Won 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div></>
                ))}


            </div>
        </div>
    )
}

export default Vedioview