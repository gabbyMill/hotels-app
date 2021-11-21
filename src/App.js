import "./App.scss";
import React from "react";
import kebabCase from "./helpers/kebab";
import { Link, Outlet } from "react-router-dom";
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
          </div>
          <Outlet />
          <Routes>
            <Route path="hotelsGallery" element={<HotelsGallery />} />
            {data.map((obj, i) => {
              return (
                <Route
                  key={obj["number"]}
                  path={`hotelsGallery/${encodeURI(kebabCase(obj["name"]))}`}
                  element={<HotelPage pic={obj.img} hotelName={obj["name"]} />}
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
