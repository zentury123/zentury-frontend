"use client";

import Pagination from "@/components/pagination/page";
import React, { useState } from "react";
import useGetMyAuctions from "../../customHooks/useGetMyAuctions";
import Spinner from "@/components/Spinner";
import Link from "next/link";

export default function RegisterFor() {

  const [pageNumber, setPageNumber] = useState(1);

  const { data, pagination, loading } = useGetMyAuctions(pageNumber);

  function handlePageNumber(page) {
    setPageNumber(page)
  }


  if (loading) {
    return (<div className="flex items-center justify-center h-[70vh]">
      <Spinner />
    </div>)
  }
  return (
    <div className="bg-white min-h-[100vh]">

      <div className="text-black lg:mt-[200px] mt-[90px] xl:px-[75px] px-[24px]">
        <p className="lg:text-[40px] text-[25px] font-semibold">
          Dražby, na ktoré som prihlásený
        </p>
        <p className="max-w-[512px] text-[12px] leading-[18px] text-[#44525E] mt-[21px]">
          V tejto časti uvidíte všetky nehnuteľnosti, na ktoré ste prihlásení.
          Administrátor Vám musí pred vždy overiť vaše zúčastnenia na dražbe
        </p>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-y-px sm:gap-[72px]  mt-[25px]">

          {data?.map((item) => (
            <div className="p-[12px] border-[#C7D5E1] border rounded-[29px] mt-[21px]">
              <div className="flex">
                <div className="relative">
                  <img src={item?.realEstateId?.mainImage} width={160} height={120} className="rounded-2xl object-cover" />
                  <div className={`absolute left-[11px] top-2 text-[10px] font-semibold text-white w-[84px] h-[22px]  border-white border rounded-[7px] flex justify-center items-center ${item?.status === "pending" ? "bg-[#ECD06C]" :(item?.status === "verfied" ?  "bg-gradient-to-b from-[#D3A86B] to-[#A3784A]" : "bg-[#D3D3D3]")}`}>
                    {item?.status === "pending" ? "čakajúce" :(item?.status === "verfied" ?  "Overené" : "Ukončené")}
                  </div>
                </div>
                <div className="ml-[28px] mt-[15px]">
                  <p className="text-[13px] font-semibold leading-[16px]">
                    {item?.title}
                  </p>
                  <div className="flex items-center mt-[11px]">
                    <img src="/location1.svg" alt="" />
                    <p className="text-[12px] leading-[18px] ml-[8px]">
                      {item?.realEstateId?.address}
                    </p>
                  </div>
                  <Link href={`/one-action/${item?.realEstateId?.slug}`} className="mt-[17px] bg-gradient-to-b from-[#D3A86B] text-white to-[#A3784A] cursor-pointer w-[90px] h-[21px] rounded-[9px] flex justify-center items-center">
                    <p className="font-semibold text-[10px] ml-[10px]">
                      Otvoriť
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        { data.length<1 && "Neuskutočnili sa žiadne aukcie."}
     { data.length>0 &&   <Pagination totalPages={pagination.pages} count={pagination.count} currentPage={pageNumber} setPageNumber={handlePageNumber} />}

      </div>

    </div>
  );
}
