import React, { Component } from "react";
class HotelPage extends Component {
  render() {
    return (
      <div className="hotel-page">
        <h1>{this.props.hotelName}</h1>
        <img src={this.props.pic} alt="hotel-pic"></img>
        <button className="call-btn">Tap to Call</button>
        <p className="hotel-desc">
          לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולהע צופעט למרקוח
          איבן איף, ברומץ כלרשט מיחוצים. קלאצי סחטיר בלובק. תצטנפל בלינדו למרקל
          אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור
          ליאמום בלינך רוגצה. לפמעט
        </p>
      </div>
    );
  }
}
export default HotelPage;
