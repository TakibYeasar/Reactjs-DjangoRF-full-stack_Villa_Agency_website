import React from 'react';
import "./Singleproperty.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Singleproperty = (item) => {
  return (
      <div className="singleproperty_sec">
          <div className="align-self-center mb-30 properties-items" >
              <div className="item">
                  <a href="property-details.html"><img src={item?.image} alt="" /></a>
                  <span className="category">{item?.category}</span>
                  <h6>${item?.price}</h6>
                  <h4><a href="property-details.html">{item?.title}</a></h4>
                  <ul>
                      <li>Bedrooms: <span>{item?.room}</span></li>
                      <li>Bathrooms: <span>{item?.bathrooms}</span></li>
                      <li>Area: <span>{item?.flat}</span></li>
                      <li>Floor: <span>{item?.floor}</span></li>
                      <li>Parking: <span>{item?.parking}</span></li>
                  </ul>
                  <div className="main-button">
                      <button className="btn-style" type="button" aria-selected="false">Schedule a visit</button>
                      {/* <button className="btn-style" type="button" aria-selected="false" onClick={() => { addToCart(item.id) }}>Schedule a visit</button> */}
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Singleproperty