import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { dataAction } from "../components/store";
import "../App.css";
import Header from "../components/header";
//import { Chart } from "react-google-charts";
import { Bar } from "react-chartjs-2";
//import { Bar } from "react-chartjs";
// import Chart from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

export default function Home() {
  const [data, setdata] = useState([]);
  const [TotalCases, setTotal] = useState(0);
  const [TotalRecovered, setRecovered] = useState(0);
  const [ActiveCases, setActive] = useState(0);
  const [TotalDeaths, setDeath] = useState(0);

  const val = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  const change = () => {
    // dispatch(dataAction.addData("okay fine"));
    // console.log("click ");
    // console.log("click " + aa);
  };

  // console.log(`haii ${aa}`);
  useEffect(() => {
    setdata(val);
    fetch("https://covidpagination.herokuapp.com/country")
      .then((response) => response.json())
      .then((data) => {
        setTotal(
          // data.data.reduce((total, pre) => {
          //   return Number(total) + Number(pre.TotalCases);
          // }, 0)
          100
        );
        setRecovered(
          data.data.reduce((total, pre) => {
            return Number(total) + Number(pre.TotalRecovered);
          }, 0)
        );
        setActive(
          data.data.reduce((total, pre) => {
            return Number(total) + Number(pre.ActiveCases);
          }, 0)
        );
        setDeath(
          data.data.reduce((total, pre) => {
            return Number(total) + Number(pre.TotalDeaths);
          }, 0)
        );
        dispatch(dataAction.addData(data.data));
      });
  }, []);

  console.log("haii");
  // const info = [["City", "2010 Population", "2000 Population"]];

  // data.map((d) => {
  //   info.push([d.Country, d.TotalCases, d.TotalCases]);
  // });

  // const options = {
  //   chart: {
  //     title: "Population of Largest U.S. Cities",
  //     subtitle: "Based on most recent and previous census data",
  //   },
  //   hAxis: {
  //     title: "Total Population",
  //     minValue: 0,
  //   },
  //   vAxis: {
  //     title: "City",
  //   },
  //   bars: "horizontal",
  //   axes: {
  //     y: {
  //       0: { side: "left" },
  //     },
  //   },
  // };

  const datas = {
    labels: data.map((d) => d.Country),
    datasets: [
      {
        label: "TotalCases",
        data: data.map((d) => d.TotalCases),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: false,
        Yaxis: "y",
      },
      {
        label: "ActiveCases",
        data: data.map((d) => d.ActiveCases),
        backgroundColor: "green",
        fill: false,
        Yaxis: "y",
      },
    ],
  };
  const options = {
    scales: {
      y: {
        stepSize: 5,
      },
      x: {},
    },
  };
  return (
    <div>
      <Header val={data} />
      <div className="flex px-md-3">
        <div className="row">
          <div className="left col">
            <div className="left-body">
              <h2 className="text-design">World wide covid-19 status</h2>
              <br />
              <p>Total cases :</p>
              {TotalCases === 0 ? (
                <div>
                  <div className="spinner-grow spinner-grow-sm  mx-1"></div>
                  <div className="spinner-grow spinner-grow-sm mx-1"></div>
                  <div className="spinner-grow spinner-grow-sm  mx-1"></div>
                </div>
              ) : (
                <h2>{TotalCases}</h2>
              )}
              <p>Received cases :</p>
              {TotalRecovered === 0 ? (
                <div>
                  <div className="spinner-grow spinner-grow-sm mx-1"></div>
                  <div className="spinner-grow spinner-grow-sm mx-1"></div>
                  <div className="spinner-grow spinner-grow-sm mx-1"></div>
                </div>
              ) : (
                <h2>{TotalRecovered}</h2>
              )}
              <p>Active cases :</p>
              {ActiveCases === 0 ? (
                <div>
                  <div className="spinner-grow spinner-grow-sm mx-1"></div>
                  <div className="spinner-grow spinner-grow-sm mx-1"></div>
                  <div className="spinner-grow spinner-grow-sm mx-1"></div>
                </div>
              ) : (
                <h2>{ActiveCases}</h2>
              )}
              <p>Deaths :</p>
              {TotalDeaths === 0 ? (
                <div>
                  <div className="spinner-grow spinner-grow-sm mx-1"></div>
                  <div className="spinner-grow spinner-grow-sm mx-1"></div>
                  <div className="spinner-grow spinner-grow-sm mx-1"></div>
                </div>
              ) : (
                <h2>{TotalDeaths}</h2>
              )}
            </div>
          </div>
          <div className="col">
            {/* <Chart data={data} /> */}
            <p>chart </p>
            <div className="barchart">
              <Bar
                data={datas}
                width={400}
                options={options}
                height={200}
              ></Bar>
              <button className="btn" onClick={change}>
                click
              </button>

              {/* <Chart
                chartType="Bar"
                width="100%"
                height="10000px"
                data={info}
                options={options}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
