import React, { Component } from "react";
import data from "../assets/hotels";
import HotelCard from "./HotelCard";

class HotelsGallery extends Component {
  render() {
    return (
      <div className="hotel-list">
        {data.map(obj => {
          return (
            <HotelCard key={obj["number"]} name={obj["name"]} pic={obj.img} />
          );
        })}
      </div>
    );
  }
}
export default HotelsGallery;
