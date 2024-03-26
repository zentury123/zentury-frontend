"use client";

import Footer from "@/components/footer";
import Loader from "@/components/loader";
import Navigation from "@/components/navigation/page";
import TopHeader from "@/components/topHeader/page";
import React, { useEffect, useState } from "react";

export default function MyAccount() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1400);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="bg-white min-h-[100vh]">
      <TopHeader />
      <Navigation />
      <div className="lg:mt-[200px] mt-[90px] text-black px-[24px]">
        <p className="lg:text-[40px] text-[24px] font-[600] text-center ">
          Môj účet
        </p>
        <p className="text-[12px] text-[#44525E] mt-[21px] leading-[18px] text-center">
          V tejto časti uvidíte všetky údaje vášho účtu
        </p>
        <div className="lg:px-[115px] px-[30px] py-[57px] border border-[#C7D5E1] rounded-[29px] max-w-[788px] sm:mt-[91px] mt-[55px] m-auto">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
            <div>
              <p className="text-[18px] font-semibold">Meno</p>
              <input
                type="text"
                placeholder="Vaše meno"
                className="w-[100%] h-[44px] rounded-[13px] border border-[#C7D5E1] indent-[30px] mt-[9px]"
              />
            </div>
            <div>
              <p className="text-[18px] font-semibold">Priezvisko</p>
              <input
                type="text"
                placeholder="Vaše priezvisko"
                className="w-[100%] h-[44px] rounded-[13px] border border-[#C7D5E1] indent-[30px] mt-[9px]"
              />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mt-[33px]">
            <div>
              <p className="text-[18px] font-semibold">Email</p>
              <input
                type="text"
                placeholder="your@email.com"
                className="w-[100%] h-[44px] rounded-[13px] border border-[#C7D5E1] indent-[30px] mt-[9px]"
              />
            </div>
            <div>
              <p className="text-[18px] font-semibold">Telefón</p>
              <input
                type="text"
                placeholder="+421"
                className="w-[100%] h-[44px] rounded-[13px] border border-[#C7D5E1] indent-[30px] mt-[9px]"
              />
            </div>
          </div>
          <div className="bg-gradient-to-b from-[#D3A86B] to-[#A3784A] cursor-pointer w-[162px] h-[44px] rounded-[13px] text-white  mt-[46px] sm:hidden flex  justify-center items-center">
            <p className="font-semibold ml-[10px] text-[12px] text-white">
              Zmena údajov
            </p>
          </div>
          <div className="bg-gradient-to-b from-[#D3A86B] to-[#A3784A] cursor-pointer w-[162px] h-[44px] rounded-[13px] text-white m-auto mt-[46px] sm:flex hidden justify-center items-center">
            <p className="font-semibold ml-[10px] text-[12px] text-white">
              Zmena údajov
            </p>
          </div>
        </div>
      </div>
      <div className="mt-[133px]">
        <Footer />
      </div>
    </div>
  );
}
