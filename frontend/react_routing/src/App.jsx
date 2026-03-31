import { NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <>
      {/* Navbar */}
      <nav style={{ marginBottom: "20px" }}>

        <NavLink to="/" style={navStyle}>Home</NavLink>
        <NavLink to="/about" style={navStyle}>About</NavLink>
        <NavLink to="/contacts" style={navStyle}>Contact</NavLink>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactS" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

// Active link styling
const navStyle = ({ isActive }) => ({
  color: isActive ? "red" : "blue",
  margin: "10px",
  textDecoration: "none",
});

export default App;