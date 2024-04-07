import React from "react";
import "./index.css";
export default function Loader() {
  return (
    <div className="flex  justify-center items-center h-[100vh] fixed top-0 left-0 z-[9999999] w-full bg-black">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
