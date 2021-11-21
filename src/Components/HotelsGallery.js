import React, { Component } from "react";
import data from "../assets/hotels";
import HotelCard from "./HotelCard";
import HotelPage from "./HotelPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import kebabCase from "../helpers/kebab";

class HotelsGallery extends Component {
  render() {
    return (
      <div className="hotels-gallery">
        <div className="hotel-list">
          {data.map(obj => {
            return <HotelCard key={obj["051"]} name={obj["מלון מרום"]} />;
            // return <li>{obj["מלון מרום"]}</li>;
            // will render HotelCard Component with prop name
          })}
        </div>
      </div>
    );
  }
}
export default HotelsGallery;
