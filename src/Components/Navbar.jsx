import React from "react";
import { NavLink } from "react-router-dom";
import { UseAuthContext } from "../Hooks/UseAuthContext";
import { UseLogout } from "../Hooks/UseLogout";
import image from "../Images/stockwhite.svg"

const Navbar = () => {
  const { user } = UseAuthContext();
  const { logout } = UseLogout();

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#33333d" }}
      >
        <div class="container-fluid">
          <div className="d-flex flex-row">
            <NavLink
              to="/"
              className="d-flex align-items-center mb-md-0 me-md-auto text-decoration-none"
            >
              <div>
                <img src={image} alt="" id="logo"/>
                <div className="desktoptitle"> Wall Street </div>
              </div>
            </NavLink>
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
            <div class="navbar-toggler-icon"></div>
          </button>
          <div
            class="collapse navbar-collapse mt-1"
            id="navbarSupportedContent"
          >
            <div>
              {/* <!-- Side Bar --> */}
              <div className="d-flex flex-column align-items-center align-items-sm-center text-white Navbar">
                {/* <!-- Title  --> */}

                {/* <!-- Nav items list --> */}
                <ul
                  className="nav nav-pills flex-column mb-0 align-items-center align-items-sm-start mt-4"
                  id="menu"
                >
                  
                  {user && <li className="nav-item">
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
                  </li>}

                  {user && <li className="nav-item">
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
                  </li>}

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

                  {user && <li className="nav-item">
                    <NavLink
                      exact
                      to="portfolio"
                      className="nav-link align-middle px-0 py-4"
                    >
                      <span className="bi bi-bar-chart navitems h3 bi bi-pie-chart">
                        {" "}
                        Portfolio
                      </span>
                    </NavLink>
                  </li>}

                  {/* <li className="nav-item">
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
                  </li> */}

                  <li className="nav-item">
                    <NavLink
                      exact
                      to="/rules"
                      className="nav-link align-middle px-0 py-4"
                    >
                      <span className="bi bi-bar-chart navitems h3 bi bi-file-earmark-ruled">
                        {" "}
                        Rules
                      </span>
                    </NavLink>
                  </li>

                  {!user && <li className="nav-item">
                    <NavLink
                      exact
                      to="/login"
                      className="nav-link align-middle px-0 py-4"
                    >
                      <span className="bi bi-box-arrow-in-right navitems h3">
                        {" "}
                        Login
                      </span>
                    </NavLink>
                  </li>}

                  {user && <li className="nav-item">
                    <p
                      className="align-middle px-0 py-4"
                    >
                      <span className="bi bi-wallet navitemwallet h3 bi bi-clipboard-data">
                        {" "}
                        ₹1,00,00,000
                      </span>
                    </p>
                  </li>}


                  {user && <btn className="h5 bi bi-box-arrow-left align-items-center align-items-sm-start my-5 mt-5 logoutbtn py-2 px-3" onClick={handleLogout}>
                    {" "}
                    Logout
                  </btn>}

                </ul>
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
