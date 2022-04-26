import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { dataAction } from "./components/store";
import Home from "./screen/home";
import Search from "./screen/search";
import Global from "./screen/global";
import Country from "./country";
import Charts from "./components/chart";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://covidpagination.herokuapp.com/country")
      .then((response) => response.json())
      .then((data) => {
        dispatch(dataAction.addData(data.data));
        dispatch(
          dataAction.setTotal(
            data.data.reduce((total, pre) => {
              return Number(total) + Number(pre.TotalCases);
            }, 0)
          )
        );
      });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/search" exact element={<Search />} />
        <Route path="/global" exact element={<Global />} />
        <Route path="/country" exact element={<Country />} />
        <Route path="/charts" exact element={<Charts />} />
      </Routes>
    </Router>
  );
}

export default App;
