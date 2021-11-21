import "./App.scss";
import React from "react";
import kebabCase from "./helpers/kebab";
import { Link, Outlet } from "react-router-dom";

import CallNowButton from "./Components/CallNowButton";
import HotelCard from "./Components/HotelCard";
import HotelPage from "./Components/HotelPage";
import HotelsGallery from "./Components/HotelsGallery";
import data from "./assets/hotels.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="links">
            <Link to="/">Home Page</Link>
            <Link to="hotelsGallery">Hotels Gallery</Link>
            <Link to="hotelName">Hotel Name</Link>
          </div>

          <Outlet />
          <Routes>
            <Route path="hotelName" element={<HotelPage />} />
            <Route path="hotelsGallery" element={<HotelsGallery />} />

            {data.map((obj, i) => {
              return (
                <Route
                  key={i}
                  path={`hotelsGallery/${encodeURI(
                    kebabCase(obj["מלון מרום"])
                  )}`}
                  element={<HotelPage hotelName={obj["מלון מרום"]} />}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
