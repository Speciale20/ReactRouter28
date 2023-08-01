import "./App.css";
import Red from "./components/Red";
import Blue from "./components/Blue.jsx";
import Home from "./Home.jsx";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/red">Red</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/home">Home</Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/blue" element={<Blue />} />
            <Route path="/red" element={<Red />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
