import React from 'react';
import "./Singleproperty.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Singleproperty = (property) => {

    // const addToCart = (item_id) => {
    //     axiosInstance.get(`products/add-to-cart/${item_id}`).then(res => {
    //         console.log(res);
    //         window.location.reload()
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }

    
  return (
      <div className="singleproperty_sec">
          <div className="align-self-center mb-30 properties-items" >
              <div className="item">
                  <a href="property-details.html"><img src={property?.image} alt="" /></a>
                  <span className="category">{property?.category}</span>
                  <h6>${property?.price}</h6>
                  <h4><a href="property-details.html">{property?.title}</a></h4>
                  <ul>
                      <li>Bedrooms: <span>{property?.room}</span></li>
                      <li>Bathrooms: <span>{property?.bathrooms}</span></li>
                      <li>Area: <span>{property?.flat}</span></li>
                      <li>Floor: <span>{property?.floor}</span></li>
                      <li>Parking: <span>{property?.parking}</span></li>
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