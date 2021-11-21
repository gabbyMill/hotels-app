import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import kebabCase from "../helpers/kebab";
class HotelCard extends Component {
  render() {
    return (
      <div className="hotel-card">
        <img src={this.props.pic} alt="hotel pic" className="hotel-pic"></img>
        <Link className="card-link" to={`${kebabCase(this.props.name)}`}>
          {this.props.name}
        </Link>
        <Outlet />
      </div>
    );
  }
}
export default HotelCard;
