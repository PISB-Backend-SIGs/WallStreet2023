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
import Login from "./Pages/Login";
import Login1 from "./Pages/Login1";
import { UseAuthContext } from "./Hooks/UseAuthContext";

function App() {

  const { user } = UseAuthContext()

  return (
    <div>

      <div className="d-sm-none">
        <Navbar />
      </div>

      <div className={`container-fluid`}>
        <div className="row flex-nowrap">
          {/* Sidebar */}
          <div className="d-none d-sm-block col-0 col-md-3 col-xl-2 px-0 position-fixed">
            <Sidebar />
          </div>
          <div className="d-none d-sm-block col-0 col-md-3 col-xl-2 px-0">

          </div>
          {/* All content */}
          <div className="col-md-9 col-xl-10 col-12 content">
            <Routes>
              <Route exact path="/" element={user ? <Home /> : <Navigate to="/login"/>} />
              <Route exact path="/news" element={user ? <News /> : <Navigate to="/login"/>} />
              <Route exact path="/:newsdetail" element={user ? <NewsDetail /> : <Navigate to="/login"/>} />
              <Route exact path="/stocks" element={user ? <Stocks /> : <Navigate to="/login"/> }/>
              <Route exact path="/stocksdetail" element={user ? <StocksDetail /> : <Navigate to="/login"/>} />
              <Route exact path="/ipo" element={user ? <Ipo /> : <Navigate to="/login"/>} />
              <Route exact path="/ipodetail" element={user ? <IpoDetail /> : <Navigate to="/login"/>} />
              <Route exact path="/ranking" element={<Ranking />} />
              <Route exact path="/login" element={!user ? <Login1/> : <Navigate to="/"/>} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
