import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../src/Pages/Home";
import News from "../src/Pages/News";
import NewsDetail from "../src/Pages/NewsDetail";
import Stocks from "../src/Pages/Stocks";
import StocksDetail from "../src/Pages/StocksDetail";
import Ipo from "../src/Pages/Ipo";
import IpoDetail from "../src/Pages/IpoDetail";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Ranking from "./Pages/Ranking";
import Login1 from "./Pages/Login1";
import Portfolio from "./Pages/Portfolio";
import { UseAuthContext } from "./Hooks/UseAuthContext";
import { ToastContainer } from "react-toastify";
import DesktopNavbar from "./Components/DesktopNavbar";
import Footer from "./Components/Footer";
import OurTeam from "./Pages/OurTeam";
import Rules from "./Pages/Rules";
import CommingSoon from "./Pages/CommingSoon";

function App() {
  const { user } = UseAuthContext();
  const css = user ? "col-md-9 col-xl-10 col-12 content" : "col-12 content";

  return (
    <div>
      <ToastContainer theme="dark" />

      {/* MOBILE NAVBAR */}
      <div className="d-sm-none">
        <Navbar />
      </div>

      {/* DESKTOP NAVBAR */}
      <div className="d-none d-sm-block">{!user && <DesktopNavbar />}</div>

      {!user && <Footer />}

      <div className={`container-fluid`}>
        <div className="row flex-nowrap">
          {/* Sidebar */}
          {user && (
            <div className="d-none d-sm-block col-0 col-md-3 col-xl-2 px-0 position-fixed">
              <Sidebar />
            </div>
          )}
          {user && (
            <div className="d-none d-sm-block col-0 col-md-3 col-xl-2 px-0"></div>
          )}

          {/* All content */}
          <div className={css}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/news"
                element={user ? <News /> : <Navigate to="/login" />}
              />
              <Route
                exact
                path="/newsdetail/:id"
                element={user ? <NewsDetail /> : <Navigate to="/login" />}
              />
              <Route
                exact
                path="/stocks"
                element={user ? <Stocks /> : <Navigate to="/login" />}
              />
              <Route
                exact
                path="/stocksdetail/:id"
                element={user ? <StocksDetail /> : <Navigate to="/login" />}
              />
              <Route exact path="/ipo" element={<Ipo />} />
              <Route
                exact
                path="/ipodetail"
                element={user ? <IpoDetail /> : <Navigate to="/login" />}
              />
              <Route exact path="/ranking" element={<Ranking />} />
              <Route
                exact
                path="/login"
                element={!user ? <Login1 /> : <Navigate to="/" />}
              />
              <Route
                exact
                path="/portfolio"
                element={user ? <Portfolio /> : <Navigate to="/login" />}
              />
              <Route exact path="/team" element={<OurTeam />} />
              <Route exact path="/rules" element={<Rules />} />
              <Route exact path="/comingsoon" element={<CommingSoon />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
