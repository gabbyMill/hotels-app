import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CallNowButton from "./Components/CallNowButton";
import HotelCard from "./Components/HotelCard";
import HotelPage from "./Components/HotelPage";
import HotelsGallery from "./Components/HotelsGallery";
import data from "./assets/hotels.js";
import kebabCase from "./helpers/kebab";

// ReactDOM.render(
// <BrowserRouter>
//   <Routes>
//     <Route path="/" element={<App />} />
//     <Route path="hotelName" element={<HotelPage />} />
//     <Route path="hotelsGallery" element={<HotelsGallery />} />

//     {data.map((obj, i) => {
//       return (
//         <Route
//           key={i}
//           path={`/${kebabCase(obj["מלון מרום"])}}`}
//           element={<HotelPage hotelName={obj["מלון מרום"]} />}
//         />
//       );
//     })}
//   </Routes>
// </BrowserRouter>,
//   document.getElementById("root")
// );

ReactDOM.render(<App />, document.getElementById("root"));
