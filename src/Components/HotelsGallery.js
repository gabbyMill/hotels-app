import React, { Component } from "react";
import data from "../hotel-data/hotels";
import HotelCard from "./HotelCard";
class HotelsGallery extends Component {
  render() {
    return (
      <div className="hotels-gallery">
        <ul>
          {data.map(obj => {
            return <li>{obj["מלון מרום"]}</li>;
            // will render HotelCard Component with prop name
          })}
        </ul>
      </div>
    );
  }
}
export default HotelsGallery;
