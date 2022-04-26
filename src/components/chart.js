import React, { useState } from "react";
import Chart from "react-google-charts";
import { useLocation, Link } from "react-router-dom";

export default function Charts() {
  const { state } = useLocation();
  console.log(state);
  const [data, setdata] = useState(state);
  const info = [["City", "2010 Population", "2000 Population"]];

  data.map((d) => {
    info.push([d.Country, d.TotalCases, d.TotalCases]);
  });
  const datas = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2014", 1000, 400, 200],
    ["2015", 1170, 460, 250],
    ["2016", 660, 1120, 300],
    ["2017", 1030, 540, 350],
  ];
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

  const options = {
    width: 900,
    title: "Nearby galaxies",
    curveType: "function",
    seriesType: "bars",
    series: {
      3: { targetAxisIndex: 1 },
    },
    vAxes: {
      0: { title: "primary" },
      1: { title: "secondary" },
    },
    legend: { position: "bottom" },
  };

  return (
    <div>
      {/* <Chart
        chartType="Bar"
        width="100%"
        height="1000px"
        data={info}
        options={options}
      /> */}
      <Chart
        chartType="Bar"
        // data={info}
        data={datas}
        width="100%"
        height="400px"
        options={options}
      />
    </div>
  );
}
