import React from "react";

const Sidebar = () => {
  return (
    <div>
      {/* <!-- Side Bar --> */}
      <div className="d-flex flex-column align-items-center align-items-sm-center px-3 pt-5 text-white min-vh-100 sidebar">
        {/* <!-- Title  --> */}
        <div className="d-flex flex-row">
          <a
            href="/"
            className="d-flex align-items-center mb-md-0 me-md-auto text-decoration-none"
          >
            <span className="bi bi-graph-up title"> Wall Street </span>
          </a>
        </div>

        {/* <!-- Nav items list --> */}
        <ul
          className="nav nav-pills flex-column mb-0 align-items-center align-items-sm-start my-auto"
          id="menu"
        >
          <li className="nav-item">
            <a href="#" className="nav-link align-middle px-0 py-4">
              <span className="bi bi-bar-chart navitems h3"> Stocks </span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link align-middle px-0 py-4">
              <span className="bi bi-bar-chart navitems h3 bi bi-newspaper">
                {" "}
                News
              </span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link align-middle px-0 py-4">
              <span className="bi bi-bar-chart navitems h3 bi bi-clipboard-data">
                {" "}
                Ipo
              </span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link align-middle px-0 py-4">
              <span className="bi bi-bar-chart navitems h3 bi bi-pie-chart">
                {" "}
                Portfolio
              </span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link align-middle px-0 py-4">
              <span className="bi bi-bar-chart navitems h3 bi bi-box-arrow-left bi bi-people">
                {" "}
                Ranking
              </span>
            </a>
          </li>
        </ul>

        <btn className="bi bi-bar-chart h5 bi bi-box-arrow-left align-items-center align-items-sm-start my-4 mt-auto logoutbtn py-2 px-3">
          {" "}
          Logout
        </btn>

        <hr />
      </div>
    </div>
  );
};

export default Sidebar;
