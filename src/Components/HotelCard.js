import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import hotel1 from "../assets/hotel1.jpg";
import kebabCase from "../helpers/kebab";
class HotelCard extends Component {
  render() {
    return (
      <div className="hotel-card">
        <img src={hotel1} alt="hotel pic" className="hotel-pic"></img>
        <Link to={`${kebabCase(this.props.name)}`}>{this.props.name}</Link>
        <Outlet />
      </div>
    );
  }
}
export default HotelCard;
