// import React from "react";

// export default function Pagination({ setPageNumber, currentPage }) {
//   return (
//     <div>
//       <div className="flex items-center justify-between w-[190px] m-auto mt-[49px]">
//         <div className="w-[37px] h-[37px] rounded-full bg-gradient-to-b from-[#D3A86B] to-[#A3784A] flex justify-center items-center text-white font-semibold text-[13px]">
//           1
//         </div>
//         <div className="w-[37px] h-[37px] rounded-full border border-[#C7D5E1] flex justify-center items-center text-black font-semibold text-[13px]">
//           2
//         </div>
//         <div className="w-[37px] h-[37px] rounded-full border border-[#C7D5E1] flex justify-center items-center text-black font-semibold text-[13px]">
//           3
//         </div>
//         <div className="w-[37px] h-[37px] rounded-full border border-[#C7D5E1] flex justify-center items-center text-black font-semibold text-[13px]">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-4 h-4 font-semibold"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";

const Pagination = ({ currentPage, totalPages, limit, setPageNumber }) => {
  const handlePageClick = (newPage) => {
    setPageNumber(newPage);
  };

  return (
    <nav className="pagination-container">
      <ul className="pagination">
        <li className="page-item">
          <button
            className="page-link"
            disabled={currentPage === 1}
            onClick={() => handlePageClick(currentPage - 1)}
          >
            Previous
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => (
          <li
            key={i + 1}
            className={`page-item ${i + 1 === currentPage ? "active" : ""}`}
          >
            <button
              className="page-link"
              onClick={() => handlePageClick(i + 1)}
            >
              {i + 1}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button
            className="page-link"
            disabled={currentPage === totalPages}
            onClick={() => handlePageClick(currentPage + 1)}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
