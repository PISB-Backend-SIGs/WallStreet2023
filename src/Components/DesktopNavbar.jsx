import React from "react";
import { NavLink } from "react-router-dom";

const DesktopNavbar = () => {
  return (
    <div>
      <div>
        <div>
          <nav className="desktopNavbar navbar navbar-expand-md navbar-light mx-0">
            <div className="container">

              <NavLink to="/" className="navbar-brand">
                <span className="navbartitle"> Wallstreet </span>
              </NavLink>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#main-nav"
                aria-controls="main-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse justify-content-end align-center"
                id="main-nav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link text-light navItem">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/ranking"
                      className="nav-link text-light navItem"
                    >
                      Rankings
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/ipo"
                      className="nav-link text-light navItem"
                    >
                      IPOs
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/rules"
                      className="nav-link text-light navItem"
                    >
                      Rules
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/login"
                      className="nav-link text-light navItem"
                    >
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;