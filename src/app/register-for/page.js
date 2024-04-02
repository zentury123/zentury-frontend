"use client";

import Footer from "@/components/footer";
import Loader from "@/components/loader";
import Navigation from "@/components/navigation/page";
import Pagination from "@/components/pagination/page";
import TopHeader from "@/components/topHeader/page";
import React, { useEffect, useState } from "react";

export default function RegisterFor() {
  const array = [
    {
      title: "Názov nehnuteľnosti",
      address: "Adresa nehnuteľnosti",
      label: "Neoverené",
    },
    {
      title: "Názov nehnuteľnosti",
      address: "Adresa nehnuteľnosti",
      label: "Overené",
    },
    {
      title: "Názov nehnuteľnosti",
      address: "Adresa nehnuteľnosti",
      label: "Overené",
    },
    {
      title: "Názov nehnuteľnosti",
      address: "Adresa nehnuteľnosti",
      label: "Overené",
    },
    {
      title: "Názov nehnuteľnosti",
      address: "Adresa nehnuteľnosti",
      label: "Overené",
    },
    {
      title: "Názov nehnuteľnosti",
      address: "Adresa nehnuteľnosti",
      label: "Overené",
    },
    {
      title: "Názov nehnuteľnosti",
      address: "Adresa nehnuteľnosti",
      label: "Ukončené",
    },
    {
      title: "Názov nehnuteľnosti",
      address: "Adresa nehnuteľnosti",
      label: "Ukončené",
    },
  ];
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1400);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="bg-white min-h-[100vh]">

      <div className="text-black lg:mt-[200px] mt-[90px] xl:px-[75px] px-[24px]">
        <p className="lg:text-[40px] text-[25px] font-semibold">
          Dražby, na ktoré som prihlásený
        </p>
        <p className="max-w-[512px] text-[12px] leading-[18px] text-[#44525E] mt-[21px]">
          V tejto časti uvidíte všetky nehnuteľnosti, na ktoré ste prihlásení.
          Administrátor vým musí pred vždy overiť vaše zúčastnenia na dražbe
        </p>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-y-px sm:gap-[72px]  mt-[25px]">
          {array.map((item) => (
            <div className="p-[12px] border-[#C7D5E1] border rounded-[29px] mt-[21px]">
              <div className="flex">
                <div className="relative">
                  <img src="/village.png" alt="" />
                  <div className="absolute left-[11px] top-2 text-[10px] font-semibold text-white w-[84px] h-[22px] bg-[#ECD06C] border-white border rounded-[7px] flex justify-center items-center">
                    {item?.label}
                  </div>
                </div>
                <div className="ml-[28px] mt-[15px]">
                  <p className="text-[13px] font-semibold leading-[16px]">
                    {item?.title}
                  </p>
                  <div className="flex items-center mt-[11px]">
                    <img src="/location1.svg" alt="" />
                    <p className="text-[12px] leading-[18px] ml-[8px]">
                      {item?.address}
                    </p>
                  </div>
                  <div className="mt-[17px] bg-gradient-to-b from-[#D3A86B] text-white to-[#A3784A] cursor-pointer w-[90px] h-[21px] rounded-[9px] flex justify-center items-center">
                    <p className="font-semibold text-[10px] ml-[10px]">
                      Otvoriť
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination />
      </div>

    </div>
  );
}
