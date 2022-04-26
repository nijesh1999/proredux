import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import Header from "../components/header";

export default function Search() {
  const { state } = useLocation();
  const [data, setdata] = useState(state);

  const searchTitle = (e) => {
    let temp = [];

    if (e.target.value !== "") {
      temp = state.filter(function (employee) {
        return employee.Country.toLowerCase().match(
          e.target.value.toLowerCase()
        );
      });
      setdata(temp);
    } else {
      setdata(state);
    }
  };

  return (
    <div>
      <Header val={state} />
      <div className="row  bg-light">
        <div className="col-md-4"></div>
        <div className="col-md-4 p-2 text-left">
          <h1 className="py-3">Select a country</h1>
          <input
            className="form-control form-control-mg rounded-3"
            type="text"
            onChange={searchTitle}
            placeholder="search a country"
          />
          <h6 className="py-3">Suggestions</h6>
          <div className="sugg-body text-left">
            {data.map((data, index) => {
              return (
                <Link className="link" to={"/country"} key={index} state={data}>
                  <div className="country py-2">
                    <div className="container"> {data.Country}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
