import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CallNowButton from "./Components/CallNowButton";
import HotelCard from "./Components/HotelCard";
import HotelPage from "./Components/HotelPage";
import HotelsGallery from "./Components/HotelsGallery";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="hotelName" element={<HotelPage />} />
          <Route path="kebab-case" element={<HotelCard />} />
          <Route path="hotelsGallery" element={<HotelsGallery />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
