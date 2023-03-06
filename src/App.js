import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home";
import News from "../src/Pages/News";
import NewsDetail from "../src/Pages/NewsDetail";
import Stocks from "../src/Pages/Stocks";
import StocksDetail from "../src/Pages/StocksDetail";
import Ipo from "../src/Pages/Ipo";
import IpoDetail from "../src/Pages/IpoDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/newsdetail" element={<NewsDetail />} />
        <Route exact path="/stocks" element={<Stocks />} />
        <Route exact path="/stocksdetail" element={<StocksDetail />} />
        <Route exact path="/ipo" element={<Ipo />} />
        <Route exact path="/ipodetail" element={<IpoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
