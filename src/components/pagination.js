import React from "react";

export default function Pagination({ total_page, page_length, cur_page }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(page_length / total_page); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          {pageNumbers.map((number) => {
            return (
              <li key={number} className="page-item">
                <a className="page-link" onClick={() => cur_page(number)}>
                  {number}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
