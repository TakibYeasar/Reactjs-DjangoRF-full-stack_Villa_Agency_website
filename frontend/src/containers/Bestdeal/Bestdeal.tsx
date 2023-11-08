import React, { useState } from 'react';
import "./Bestdeal.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { FaCalendar } from "react-icons/fa";
import deal01 from "../../../../assets/deal-01.jpg";
import deal02 from "../../../../assets/deal-02.jpg";
import deal03 from "../../../../assets/deal-03.jpg";

const apartment = [
    {
        flat: "185 m2",
        floor_num: "26th",
        rooms: "4",
        parking: "Yes",
        payment: "Bank",
        image: deal01,
        category: "property",
        title: "Extra Info About Property",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. < br /> <br />When you need free CSS templates, you can simply type TemplateMo in any search engine website.In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.",
    },
    {
        flat: "185 m2",
        floor_num: "26th",
        rooms: "4",
        parking: "Yes",
        payment: "Bank",
        image: deal02,
        category: "pentahouse",
        title: "Extra Info About Pentahouse",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. < br /> <br />When you need free CSS templates, you can simply type TemplateMo in any search engine website.In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.",
    },
    {
        flat: "185 m2",
        floor_num: "26th",
        rooms: "4",
        parking: "Yes",
        payment: "Bank",
        image: deal03,
        category: "villa",
        title: "Extra Info About Villa",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse. < br /> <br />When you need free CSS templates, you can simply type TemplateMo in any search engine website.In addition, you can type TemplateMo Portfolio, TemplateMo One Page Layouts, etc.",
    },
]

const Bestdeal = () => {

    const [items, setItems] = useState(apartment)
    const filterItems = (catItem: any) => {
        const updateItems = apartment.filter((currElem) => {
            return currElem.category == catItem;
        });
        setItems(updateItems);
    }

    return (
        <div className="bestdeal_sec">
            <div className="container">
                <div className="row d-flex">

                    <div className="col-lg-4">
                        <div className="section-heading">
                            <h6 className='title-two'>| Best Deal</h6>
                            <h2 className='main-title'>Find Your Best Deal Right Now!</h2>
                        </div>
                    </div>

                    <div className="nav-wrapper col-lg-8">
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="btn-style active" id="appartment-tab" data-bs-toggle="tab" data-bs-target="#appartment" type="button" role="tab" aria-controls="appartment" aria-selected="true" onClick={() => filterItems('appartment')}>Appartment</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="btn-style" id="villa-tab" data-bs-toggle="tab" data-bs-target="#villa" type="button" role="tab" aria-controls="villa" aria-selected="false" onClick={() => filterItems('villa')}>Villa House</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="btn-style" id="penthouse-tab" data-bs-toggle="tab" data-bs-target="#penthouse" type="button" role="tab" aria-controls="penthouse" aria-selected="false" onClick={() => filterItems('pentahouse')}>Penthouse</button>
                            </li>
                        </ul>
                    </div>

                </div>


                <div className="row">
                    <div className="tab-content" id="myTabContent">
                        
                        {apartment.map((item, i) => (
                            <div className="tab-pane fade show active" key={i} role="tabpanel" aria-labelledby="appartment-tab">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="info-table">
                                            <ul>
                                                <li>Total Flat Space <span>{item?.flat}</span></li>
                                                <li>Floor number <span>{item?.floor_num}</span></li>
                                                <li>Number of rooms <span>{item?.rooms}</span></li>
                                                <li>Parking Available <span>{item?.parking}</span></li>
                                                <li>Payment Process <span>{item?.payment}</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <img src={item?.image} alt="" className='image' />
                                    </div>
                                    <div className="col-lg-3">
                                        <h4>{item?.title}</h4>
                                        <p>{item?.desc}</p>
                                        <div className="icon-button">
                                            <a href=""><FaCalendar className='icon' /> Schedule a visit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bestdeal