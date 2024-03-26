import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = (props) => {
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  //fixed-top for sticky navbar
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"> 
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/headline'?"active":""}`} aria-current="page" to="/headline">Top-Headlines</Link>
                
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname==='/home'?"active":""}`} aria-current="page" to="/home">Home</Link>
                
              </li>
              <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/news'?"active":""}`} aria-current="page" to="/news">News</Link>
              </li>

              <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/about'?"active":""}`} aria-current="page" to="/about">About</Link>
              </li>
              <li className="nav-item">
              <Link className={`nav-link ${location.pathname==='/contact'?"active":""}`} aria-current="page" to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
