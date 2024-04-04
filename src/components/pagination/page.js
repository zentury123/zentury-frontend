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
  console.log(totalPages)
  return (
    <nav className="pagination-container mt-20">
      <ul className="flex items-center justify-center gap-2">
        <li className="h-10 w-10 flex items-center justify-center rounded-full text-lg ">
          <button
            className="page-link"
            disabled={currentPage === 1}
            onClick={() => handlePageClick(currentPage - 1)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none" className="rotate-180">
              <path d="M0.691406 6.74996C0.691406 6.96613 0.779763 7.17345 0.937038 7.32631C1.09431 7.47917 1.30763 7.56504 1.53005 7.56504H12.0842L7.78504 11.7435C7.70716 11.8192 7.64538 11.909 7.60324 12.0079C7.56109 12.1068 7.5394 12.2128 7.5394 12.3198C7.5394 12.4269 7.56109 12.5329 7.60324 12.6318C7.64538 12.7307 7.70716 12.8205 7.78504 12.8962C7.86291 12.9719 7.95537 13.0319 8.05712 13.0729C8.15887 13.1139 8.26793 13.135 8.37807 13.135C8.4882 13.135 8.59726 13.1139 8.69901 13.0729C8.80076 13.0319 8.89322 12.9719 8.97109 12.8962L14.7 7.32817C14.7395 7.28996 14.775 7.24807 14.806 7.20311C14.8189 7.18398 14.828 7.16339 14.8393 7.14352C14.8556 7.11743 14.8703 7.0904 14.8832 7.0626C14.8933 7.03609 14.9018 7.00908 14.9089 6.98168C14.9165 6.95814 14.9256 6.93534 14.9309 6.90812C14.9525 6.80273 14.9525 6.69424 14.9309 6.58885C14.9256 6.56458 14.9165 6.54177 14.9089 6.51529C14.9019 6.48788 14.8933 6.46087 14.8832 6.43437C14.8703 6.40656 14.8556 6.37954 14.8393 6.35345C14.828 6.33359 14.8189 6.31299 14.806 6.29386C14.7751 6.24885 14.7396 6.20696 14.7 6.1688L8.97109 0.605171C8.81266 0.458295 8.60141 0.37746 8.38248 0.379938C8.16355 0.382416 7.9543 0.46801 7.79943 0.618432C7.64456 0.768855 7.55636 0.972177 7.55367 1.18496C7.55098 1.39774 7.63402 1.60311 7.78504 1.75718L12.0834 5.93487H1.53005C1.30763 5.93487 1.09431 6.02074 0.937038 6.1736C0.779763 6.32646 0.691406 6.53378 0.691406 6.74996Z" fill="black" />
            </svg>
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, i) => (
          <li
            key={i + 1}
            className={`h-10 w-10 flex items-center justify-center rounded-full text-lg  ${i + 1 === currentPage ? "bg-gradient-to-b from-[#D3A86B] to-[#A3784A] text-white" : " border-[1px] "}`}
          >
            <button
              className="page-link"
              onClick={() => handlePageClick(i + 1)}
            >
              {i + 1}
            </button>
          </li>
        ))}
        <li className="h-10 w-10 flex items-center justify-center rounded-full text-lg">
          <button
            className="page-link"
            disabled={currentPage === totalPages}
            onClick={() => handlePageClick(currentPage + 1)}
          >
               <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none" >
              <path d="M0.691406 6.74996C0.691406 6.96613 0.779763 7.17345 0.937038 7.32631C1.09431 7.47917 1.30763 7.56504 1.53005 7.56504H12.0842L7.78504 11.7435C7.70716 11.8192 7.64538 11.909 7.60324 12.0079C7.56109 12.1068 7.5394 12.2128 7.5394 12.3198C7.5394 12.4269 7.56109 12.5329 7.60324 12.6318C7.64538 12.7307 7.70716 12.8205 7.78504 12.8962C7.86291 12.9719 7.95537 13.0319 8.05712 13.0729C8.15887 13.1139 8.26793 13.135 8.37807 13.135C8.4882 13.135 8.59726 13.1139 8.69901 13.0729C8.80076 13.0319 8.89322 12.9719 8.97109 12.8962L14.7 7.32817C14.7395 7.28996 14.775 7.24807 14.806 7.20311C14.8189 7.18398 14.828 7.16339 14.8393 7.14352C14.8556 7.11743 14.8703 7.0904 14.8832 7.0626C14.8933 7.03609 14.9018 7.00908 14.9089 6.98168C14.9165 6.95814 14.9256 6.93534 14.9309 6.90812C14.9525 6.80273 14.9525 6.69424 14.9309 6.58885C14.9256 6.56458 14.9165 6.54177 14.9089 6.51529C14.9019 6.48788 14.8933 6.46087 14.8832 6.43437C14.8703 6.40656 14.8556 6.37954 14.8393 6.35345C14.828 6.33359 14.8189 6.31299 14.806 6.29386C14.7751 6.24885 14.7396 6.20696 14.7 6.1688L8.97109 0.605171C8.81266 0.458295 8.60141 0.37746 8.38248 0.379938C8.16355 0.382416 7.9543 0.46801 7.79943 0.618432C7.64456 0.768855 7.55636 0.972177 7.55367 1.18496C7.55098 1.39774 7.63402 1.60311 7.78504 1.75718L12.0834 5.93487H1.53005C1.30763 5.93487 1.09431 6.02074 0.937038 6.1736C0.779763 6.32646 0.691406 6.53378 0.691406 6.74996Z" fill="black" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
