import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#33333d" }}
      >
        <div class="container-fluid">
          <div className="d-flex flex-row">
            <a
              href="/"
              className="d-flex align-items-center mb-md-0 me-md-auto text-decoration-none"
            >
              <span className="bi bi-graph-up title"> Wall Street </span>
            </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div>
              {/* <!-- Side Bar --> */}
              <div className="d-flex flex-column align-items-center align-items-sm-center px-3 pt-5 text-white min-vh-100 sidebar">
                {/* <!-- Title  --> */}

                {/* <!-- Nav items list --> */}
                <ul
                  className="nav nav-pills flex-column mb-0 align-items-center align-items-sm-start my-auto"
                  id="menu"
                >
                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/stocks"
                      className="nav-link align-middle px-0 py-4"
                    >
                      <span className="bi bi-bar-chart navitems h3">
                        {" "}
                        Stocks{" "}
                      </span>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/news"
                      className="nav-link align-middle px-0 py-4"
                    >
                      <span className="bi bi-bar-chart navitems h3 bi bi-newspaper">
                        {" "}
                        News
                      </span>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/ipo"
                      className="nav-link align-middle px-0 py-4"
                    >
                      <span className="bi bi-bar-chart navitems h3 bi bi-clipboard-data">
                        {" "}
                        Ipo
                      </span>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      exact
                      to="#"
                      className="nav-link align-middle px-0 py-4"
                    >
                      <span className="bi bi-bar-chart navitems h3 bi bi-pie-chart">
                        {" "}
                        Portfolio
                      </span>
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/ranking"
                      className="nav-link align-middle px-0 py-4"
                    >
                      <span className="bi bi-bar-chart navitems h3 bi bi-box-arrow-left bi bi-people">
                        {" "}
                        Ranking
                      </span>
                    </NavLink>
                  </li>
                </ul>

                <btn className="bi bi-bar-chart h5 bi bi-box-arrow-left align-items-center align-items-sm-start my-4 mt-auto logoutbtn py-2 px-3">
                  {" "}
                  Logout
                </btn>

                <hr />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
