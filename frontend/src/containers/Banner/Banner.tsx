import React, { useEffect, useState } from 'react';
import "./Banner.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
// import banner01 from "../../../../assets/banner-01.jpg";
// import banner02 from "../../../../assets/banner-02.jpg";
// import banner03 from "../../../../assets/banner-03.jpg";
import { motion, AnimatePresence } from "framer-motion";
import axios from 'axios';
import axiosInstance from '../../axios';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';


// const banner = [
//     {
//         img: banner01,
//         category: "Toronto, Canada",
//         title: "Hurry! Get the Best Villa for you",
//     },
//     // {
//     //     img: banner02,
//     //     category: "Melbourne, Australia",
//     //     title: "Be Quick! Get the best villa in town",
//     // },
//     // {
//     //     img: banner03,
//     //     category: "Miami, South Florida",
//     //     title: "Act Now! Get the highest level penthouse",
//     // },
// ]

const variants = {
    initial: derection => {
        return {
            x: derection > 0 ? 200 : -200,
            opacity: 0,
        }
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: "ease-in",
        // transition: {
        //   x: {type: "spring", stiffness: 300, damping: 20}
        // }
    },
    exit: derection => {
        return {
            x: derection > 0 ? -200 : 200,
            opacity: 0,
        }
    }
}

const Banner = () => {

    const [IsLoading, setIsLoading] = useState(true);
    const [banners, setBanners] = useState([]);
    const [derection, setDerection] = useState(0);

    useEffect(() => {
        axios.all([
            axiosInstance.get('core/banners/'),
        ]).then(axios.spread((res) => {
            setBanners(res.data)
            setIsLoading(false)
            console.log(res.data)
        })).catch(err => {
            console.log(err);
        })
    }, [])

    if (IsLoading) {
        return <h3>loading ...</h3>
    }

    function nextStep() {
        setDerection(+1);
        if (banners == banners.length - 1) {
            setBanners(0);
            return
        }
        setBanners(banners + 1);
    }

    function prevStep() {
        setDerection(-1);
        if (banners == 0) {
            setBanners(banners.length - 1);
            return
        }
        setBanners(banners - 1);
    }


    return (
        <div className="banner_sec">
            <div className="main-banner">

                {banners.map((item, i) => (
                    <motion.div className="banner-item" variants={variants} animate="animate" initial="initial" exit="exit" custom={derection} key={i} item>
                        <AnimatePresence initial={false}>
                        <img src={item?.image} alt='' className='banner-image' />
                        <div className="header-text">
                            <span className="location">
                                <p>{item?.city}</p>
                                <p>{item?.country}</p>
                            </span>
                            <h2>{item?.title}</h2>
                            </div>
                        </AnimatePresence>
                        <div className="button d-flex">
                            <a href="" onClick={prevStep} className="prev_button"><FaAngleLeft className='icon' /></a>
                            <a href="" onClick={nextStep} className="next_button"><FaAngleRight className='icon' /></a>
                        </div>
                    </motion.div>
                ))}


            </div>
        </div>
    )
}

export default Banner