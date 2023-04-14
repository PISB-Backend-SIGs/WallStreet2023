import { Route, Routes } from "react-router-dom";
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

function App() {

  return (
    <div>

      <div className="d-sm-none">
        <Navbar />
      </div>

      <div className={`container-fluid`}>
        <div className="row flex-nowrap">
          {/* Sidebar */}
          <div className="d-none d-sm-block col-0 col-md-3 col-xl-2 px-0">
            <Sidebar />
          </div>
          {/* All content */}
          <div className="col-md-9 col-xl-10 col-12 content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/news" element={<News />} />
              <Route exact path="/:newsdetail" element={<NewsDetail />} />
              <Route exact path="/stocks" element={<Stocks />} />
              <Route exact path="/stocksdetail" element={<StocksDetail />} />
              <Route exact path="/ipo" element={<Ipo />} />
              <Route exact path="/ipodetail" element={<IpoDetail />} />
              <Route exact path="/ranking" element={<Ranking />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
