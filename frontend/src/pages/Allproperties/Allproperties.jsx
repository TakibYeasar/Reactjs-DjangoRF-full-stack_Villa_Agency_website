import React, { useEffect, useState } from 'react';
import "./Allproperties.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import page_heading from "../../../../assets/page-heading-bg.jpg";
import axios from 'axios';
import { Singleproperty } from '../../containers';
import { useParams } from 'react-router-dom';


const Allproperties = () => {

    const [IsLoading, setIsLoading] = useState(true);
    const [properties, setProperties] = useState([]);
    const [cats, setCats] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/core/property-cat/')
            .then(response => {
                console.log(response.data);
                setCats(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    }, [])

    // const addToCart = (item_id) => {
    //     axiosInstance.get(`products/add-to-cart/${item_id}`).then(res => {
    //         console.log(res);
    //         window.location.reload()
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }

    if (IsLoading) {
        return <h3>loading ...</h3>
    }

    // const category = useParams();
    // console.log(category);
    // const catProperty = (category) => {
    //     axiosInstance.get(`core/cat-properties/${category.category}`).then(res => {
    //         setProperties(res.data)
    //         console.log(res.data);
    //     }).catch(err => {
    //         console.log(err);
    //     });
    // }


    return (
        <div className="allproperties_sec">

            <div className="page-heading text-center">
                <img src={page_heading} alt='' className='image' />
                <div className="section-heading text-center">
                    <span className="breadcrumb"><a href="#">Home</a>  /  All Property</span>
                    <h3>All Property</h3>
                </div>
            </div>

            <div className="container">
                <div className="row text-center">
                    <ul className="properties-filter d-flex" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="btn-style" id="penthouse-tab" data-bs-toggle="tab" data-bs-target="#penthouse" type="button" role="tab" aria-controls="penthouse" aria-selected="false">Show All</button>
                        </li>
                        {cats.map((item, i) => (
                            <li className="nav-item" role="presentation" key={i}>
                                {/* <button className="btn-style active" id="appartment-tab" data-bs-toggle="tab" data-bs-target="#appartment" type="button" role="tab" aria-controls="appartment" aria-selected="true" onClick={() => { catProperty(category.id) }}>{item?.title}</button> */}
                                <button className="btn-style active" id="appartment-tab" data-bs-toggle="tab" data-bs-target="#appartment" type="button" role="tab" aria-controls="appartment" aria-selected="true" >{item?.title}</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="row properties-box">
                    {properties.map((item, i) => (
                        <div className="col-lg-4 col-md-6 ">
                            <Singleproperty item={item} key={i} />
                        </div>
                    ))}
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <ul className="pagination">
                            <li><a href="#">1</a></li>
                            <li><a className="is_active" href="#">2</a></li>
                            <li><a href="#">3</a></li>
                            <li><a href="#"> </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Allproperties