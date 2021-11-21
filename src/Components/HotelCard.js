import React, { Component } from "react";
import hotel1 from "../assets/hotel1.jpg";
class HotelCard extends Component {
  render() {
    return (
      <div className="hotel-card">
        <img src={hotel1} alt="hotel pic"></img>
        <li>{this.props.name}</li>
      </div>
    );
  }
}
export default HotelCard;
