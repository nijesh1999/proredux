import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/header";
import Pagination from "../components/pagination";
import TableBody from "../components/tableBody";

export default function Global() {
  // const { state } = useLocation();
  const state = useSelector((state) => state.data.data);
  const [data, setdata] = useState(state);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPageSize] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = state.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(state);
  return (
    <div>
      <Header val={state} />
      <div className="container text-center">
        <h2 className="py-3">Combined covid-19 details</h2>
        <div
          className="d-sm-flex justify-content-end my-2"
          style={{ lineHeight: "20px" }}
        >
          {/* <button
            className="btn btn-primary px-3 py-1 rounded-4"
            onClick={() => {
              setCurrentPage(data.sort((a, b) => a.TotalCases - b.TotalCases));
            }}
          >
            filter
          </button> */}
          <div className="p-2">per page :</div>
          <select
            value={postsPerPage}
            onChange={(e) => {
              setPageSize(e.target.value);
            }}
          >
            {[10, 20, 30].map((x, index) => {
              return (
                <option key={index} value={x}>
                  {x}
                </option>
              );
            })}
          </select>
        </div>
        <table className="table border border-secondary table-striped table-bordered">
          <thead>
            <tr>
              <th>Country</th>
              <th>ISO CODE</th>
              <th>Population</th>
              <th>TotalTests</th>
              <th>TotalCases</th>
              <th>ActiveCases</th>
              <th>Recovered</th>
              <th>Deaths</th>
            </tr>
          </thead>
          <tbody>
            <TableBody row={currentPosts} />
          </tbody>
        </table>
        <div className="d-flex justify-content-center">
          <Pagination
            total_page={postsPerPage}
            page_length={state.length}
            cur_page={paginate}
          />
        </div>
      </div>
    </div>
  );
}
