import React, { useState, useEffect } from 'react';
import "./Properties.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import axiosInstance from '../../axios';
import { Singleproperty } from '..';

const Properties = () => {

    const [IsLoading, setIsLoading] = useState(true);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.all([
            axiosInstance.get('core/properties/'),
        ]).then(axios.spread((res) => {
            console.log(res.data)
            setProperties(res.data)
            setIsLoading(false)
        })).catch(err => {
            console.log(err);
        })
    }, [])

    if (IsLoading) {
        return <h3>loading ...</h3>
    }



    return (
        <div className="properties_sec">
            <div className="container">

                <div className="row">
                    <div className="section-heading">
                        <h6 className='title-two'>| PROPERTIES</h6>
                        <h2 className='main-title'>We Provide The Best Property You Like</h2>
                    </div>
                </div>

                <div className="row properties-box">
                    {properties.map((item, i) => (
                        <div className="col-lg-4 col-md-6 " key={i} item={item}>
                            <Singleproperty property={item} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Properties