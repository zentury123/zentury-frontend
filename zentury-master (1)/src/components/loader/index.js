import React from "react";
import "./index.css";
export default function Loader() {
  return (
    <div className="flex  justify-center items-center h-[100vh] bg-black">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
