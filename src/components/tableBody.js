import React from "react";

export default function TableBody({ row }) {
  return (
    <>
      {row.map((data, index) => {
        return (
          <tr key={index}>
            <td className="font-weight-bold">{data.Country}</td>
            <td>{data.ThreeLetterSymbol}</td>
            <td>{data.Population}</td>
            <td>{data.TotalTests}</td>
            <td>{data.TotalCases}</td>
            <td>{data.ActiveCases}</td>
            <td>{data.TotalRecovered}</td>
            <td className="font-weight-bold">{data.TotalDeaths}</td>
          </tr>
        );
      })}
    </>
  );
}
