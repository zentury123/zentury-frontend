import React from "react";

export default function Partners() {
  return (
    <div className="sm:pt-[90px] pt-[51px] xl:pl-[104px] pl-[30px] xl:pr-[86px] pr-[30px] sm:pb-[112px] pb-[51px]">
      <p className="gradient font-semibold uppercase text-center">
        zentury dražby
      </p>
      <p className="text-[39px] font-[600] text-black text-center mt-[9px]">
        Naši partneri
      </p>
      <div className="flex justify-between flex-wrap items-center">
        {/* <img
          src="/csob-logo.svg"
          alt=""
          className="sm:h-auto sm:w-auto w-[100px] h-[100px] sm:mt-0 mt-3"
        /> */}
        <img
          src="/csob.svg"
          alt=""
          className="sm:h-auto sm:w-auto w-[100px] h-[100px] sm:mt-0 mt-3"
        />
        <img
          src="/resize.svg"
          alt=""
          className=" sm:mt-0 mt-3 sm:block hidden"
        />
        <img src="/444.svg" alt="" className=" sm:mt-0 mt-3 sm:hidden" />
        <img src="/szrb.svg" alt="" className="sm:mt-0 mt-3 sm:block hidden" />
      </div>
      <div className="flex justify-between flex-wrap items-center">
        <img
          src="/222.svg"
          alt=""
          className="sm:h-fit sm:mt-16  sm:w-auto   mt-3"
        />

        <img src="/333.svg" alt="" className="h-fit sm:mt-0 " />
        <img src="/szrb.svg" alt="" className="sm:mt-0 mt-5 sm:hidden" />
        <img
          src="/Tatra.png"
          alt=""
          className="h-fit sm:m-0 m-auto sm:mt-0  mt-3"
        />
      </div>
    </div>
  );
}
