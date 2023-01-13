import { HTMLAttributes, ReactNode } from "react";

// import * as Styled from "./JobCard.styled";
interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  // children: ReactNode;
  jobPerPage: any;
  totalJobs: number;
  paginate: (number:number) => void;
}

export function Pagination({jobPerPage, totalJobs, paginate, ...props}: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalJobs / jobPerPage); i++) {
//   for (let i = 1; i <= 5; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number: any) => {
          return (
            <li key={number} className="page-item">
              <a onClick={() => paginate(number)} href="!#" className="page-link">
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
