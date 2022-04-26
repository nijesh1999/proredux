import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement } from "chart.js";
ChartJS.register(ArcElement);

export default function Country() {
  const { state } = useLocation();
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-light shadow-sm bg-light">
        <span className="navbar-brand mb-0 mx-3 h1">
          <i className="fa-solid fa-angle-left"></i>
          Covid-19 detective
        </span>
      </nav>
      <div className="row bg-light h-100">
        <div className="col-3"></div>
        <div className="col-6 country-bg my-3 text-left">
          <h2 className="py-3 ">{state.Country} covid-19 status</h2>
          <h6>Cases details</h6>
          <div className="row">
            <div className="col mx-2 bg-light">
              <h4 className="text-primary py-1">Confirmed Cases</h4>
              <p>{state.TotalCases}</p>
            </div>
            <div className="col mx-2 bg-light">
              <h4 className="text-secondary py-1">Active Cases</h4>
              <p>{state.ActiveCases}</p>
            </div>
          </div>

          <div className="row my-3">
            <div className="col mx-2 bg-light py-1">
              <h4 className="text-success">Recovered Cases</h4>
              <p>{state.TotalRecovered}</p>
            </div>
            <div className="col mx-2 bg-light">
              <h4 className="text-danger py-1">Deaths</h4>
              <p>{state.TotalDeaths}</p>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <h6>Total Cases</h6>
              <div className="my-3">
                <Pie
                  data={{
                    labels: [
                      "Population",
                      "TotalCases",
                      "ActiveCases",
                      "TotalDeaths",
                    ],
                    datasets: [
                      {
                        data: [
                          state.Population,
                          state.TotalCases,
                          state.ActiveCases,
                          state.TotalDeaths,
                        ],
                        backgroundColor: ["yellow", "green", "orange", "red"],
                      },
                    ],
                  }}
                ></Pie>
                {/* <button onClick={() => navigate(-1)}>back</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
