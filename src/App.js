import "./App.css";
import { Link, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="links">
        <Link to="/">Home Page</Link>
        <Link to="hotelsGallery">Hotels Gallery</Link>
        <Link to="hotelName">Hotel Name</Link>
        <Link to="kebab-case">Hotels Gallery</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
