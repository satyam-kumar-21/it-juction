import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../about/About";
import Home from "../home/Home";
import Project from "../projects/Project";
import Contact from "../contact/Contact";

function Header() {
  return (
    <Router>
      <div className="h-16 w-full bg-green-400 fixed flex justify-between pl-20 pr-20 z-50">
        <div className="flex items-center">
          {/* Logo */}
          <h1 className="text-blue-900  text-2xl font-bold">IT JUCTION</h1>
        </div>

        <div className="flex items-center text-blue-900 font-bold space-x-8 text-lg">
          {/* Home Link */}
          <Link to="/" >
            Home
          </Link>

          {/* About Link */}
          <Link to="/about" >
            About
          </Link>

          {/* Projects */}
          <Link to="/projects" >
            Projects
          </Link>

          {/* Contact us */}
          <Link to="/contact" >
            Contact
          </Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default Header;
