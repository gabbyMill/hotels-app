import React, { Component } from "react";
import data from "../assets/hotels";
import HotelCard from "./HotelCard";
class HotelsGallery extends Component {
  render() {
    return (
      <div className="hotels-gallery">
        <ul>
          {data.map(obj => {
            return <HotelCard key={obj["051"]} name={obj["מלון מרום"]} />;
            // return <li>{obj["מלון מרום"]}</li>;
            // will render HotelCard Component with prop name
          })}
        </ul>
      </div>
    );
  }
}
export default HotelsGallery;
