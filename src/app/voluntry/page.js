"use client";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation/page";
import Pagination from "@/components/pagination/page";
import TopHeader from "@/components/topHeader/page";
import React, { useEffect, useRef, useState } from "react";
import Slider from "@mui/material/Slider";
import { Select } from "@mui/material";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader";
import SearchContent from "./(SearchContent)/index"

export default function Voluntry() {

  const router = useRouter();







  // useEffect(() => {
  //   getRealStates(
  //     keywords,
  //     priceRange,
  //     region,
  //     propertyType,
  //     auctionType,
  //     pageNumber
  //   );
  // }, [pageNumber, keywords, priceRange, propertyType, auctionType]);
  return (
    <div className="bg-white min-h-[100vh]">

      <div className="lg:mt-[190px] mt-[90px] text-black xl:px-[81px] px-[24px]">
        <p className="lg:text-[40px] text-[25px] font-semibold  lg:leading-[48px] leading-[35px]">
          Výkon záložného práva prostredníctvom dobrovoľných dražieb
        </p>
        <div className="text-[#44525E] text-[12px]">
          <p className="text-[#44525E]  lg:mt-[34px] mt-[25px]">
            Portfólio našich služieb taktiež zahŕňa výkon záložného práva
            prostredníctvom dobrovoľných dražieb. Poskytujeme kompletný servis s
            organizáciou dobrovoľných dražieb od oznámenia o začatí výkonu
            záložného práva až po uspokojenie pohľadávky veriteľa. Tím skúsených
            dražobníkov vykonávajúcich dobrovoľné dražby, viac ako 15 rokov vám
            garantuje profesionalitu a odbornosť.
          </p>
          <br />
          <p className="text-[#44525E] text-[12] font-semibold">
            Výhody dobrovoľných dražieb:
          </p>
          <div className="flex ml-2 items-center">
            <div className="w-[2px] h-[2px] rounded-full bg-[#44525E]" />
            <p className="ml-2">najbezpečnejšie nadobudnutie nehnuteľnosti,</p>
          </div>
          <div className="flex ml-2 items-center">
            <div className="w-[2px] h-[2px] rounded-full bg-[#44525E]" />
            <p className="ml-2">garancia účasti notára priamo na dražbe,</p>
          </div>
          <div className="flex ml-2 items-center">
            <div className="w-[2px] h-[2px] rounded-full bg-[#44525E]" />
            <p className="ml-2">
              garancia nadobudnutia nehnuteľnosti nezaťaženej záložnými právami,
            </p>
          </div>
          <div className="flex ml-2 items-center">
            <div className="w-[2px] h-[2px] rounded-full bg-[#44525E]" />
            <p className="ml-2">
              bezproblémový prechod nehnuteľnosti zápisom do katastra
              prostredníctvom záznamu,
            </p>
          </div>
          <div className="flex ml-2 ">
            <div className="w-[2px] h-[2px] rounded-full bg-[#44525E]" />
            <p className="ml-2">
              všetko bez poplatkov, bez kolkov, bez rizika, bez zbytočného
              overovania podpisov u notára,
              <br />
              vlastníkom sa stávate príklepom na dražbe,
            </p>
          </div>
          <div className="flex ml-2 items-center">
            <div className="w-[2px] h-[2px] rounded-full bg-[#44525E]" />
            <p className="ml-2">
              pre navrhovateľa – minimálne náklady vymoženia pohľadávky
              zabezpečenej záložným právom.
            </p>
          </div>
        </div>
        <p className="lg:text-[40px] text-[25px] font-semibold  lg:leading-[48px] leading-[35px] lg:mt-[60px] mt-[30px]">
          Ponuka dobrovolných dražieb
        </p>
   <SearchContent />
      </div>

    </div>
  );
}
