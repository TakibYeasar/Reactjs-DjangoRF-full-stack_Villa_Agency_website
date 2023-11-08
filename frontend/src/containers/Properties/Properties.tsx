import React, { useState, useEffect } from 'react';
import "./Properties.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import axiosInstance from '../../axios';
// import { Link } from 'react-router-dom';
// import property01 from "../../../../assets/property-01.jpg";
// import property02 from "../../../../assets/property-02.jpg";
// import property03 from "../../../../assets/property-03.jpg";
// import property04 from "../../../../assets/property-04.jpg";
// import property05 from "../../../../assets/property-05.jpg";
// import property06 from "../../../../assets/property-06.jpg";
import { Singleproperty } from '../../containers';

// const properties = [
//     {
//         image: property01,
//         category: "Luxury Villa",
//         price: "1.180.000",
//         title: "18 Old Street Miami, OR 97219",
//         bedroom: "8",
//         bathroom: "6",
//         area: "545m2",
//         floor: "3",
//         parking: "9 spots",
//     },
//     {
//         image: property02,
//         category: "Penthouse",
//         price: "1.180.000",
//         title: "34 Hope Street Portland, OR 42680",
//         bedroom: "8",
//         bathroom: "6",
//         area: "545m2",
//         floor: "3",
//         parking: "9 spots",
//     },
//     {
//         image: property03,
//         category: "Luxury Villa",
//         price: "1.180.000",
//         title: "18 Old Street Miami, OR 97219",
//         bedroom: "8",
//         bathroom: "6",
//         area: "545m2",
//         floor: "3",
//         parking: "9 spots",
//     },
//     {
//         image: property04,
//         category: "Modern Condo",
//         price: "1.180.000",
//         title: "22 Hope Street Portland, OR 16540",
//         bedroom: "8",
//         bathroom: "6",
//         area: "545m2",
//         floor: "3",
//         parking: "9 spots",
//     },
//     {
//         image: property05,
//         category: "Penthouse",
//         price: "1.180.000",
//         title: "34 Hope Street Portland, OR 42680",
//         bedroom: "8",
//         bathroom: "6",
//         area: "545m2",
//         floor: "3",
//         parking: "9 spots",
//     },
//     {
//         image: property06,
//         category: "Modern Condo",
//         price: "1.180.000",
//         title: "22 Hope Street Portland, OR 16540",
//         bedroom: "8",
//         bathroom: "6",
//         area: "545m2",
//         floor: "3",
//         parking: "9 spots",
//     },
// ]


const Properties = () => {

    const [IsLoading, setIsLoading] = useState(true);
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        axios.all([
            axiosInstance.get('core/properties/'),
        ]).then(axios.spread((res) => {
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
                        <div className="col-lg-4 col-md-6 ">
                            <Singleproperty item={item} key={i} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Properties