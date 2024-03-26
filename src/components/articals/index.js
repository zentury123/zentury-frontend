"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function Articals() {
  const router = useRouter();
  const servicesArray = [
    {
      img: "/Image (1).png",
      heading: "Dlhy zobrali slovákom tisícky bytov",
      des: "Každý deň skončí v dražbe takmer 11 bytov či domov",
      link: "/debt-took",
    },
    {
      img: "/Image (2).png",
      heading: "Dlhy vám nenarastú, ak ich včas uhradíte",
      des: "V súčasnosti má každý z nás veľmi málo času",
      link: "/your-debates",
    },
    {
      img: "/Image (3).png",
      heading: "Kladivo na veriteľov",
      des: "Ministerstvo spravodlivosti dosiaľ zaostávalo",
      link: "/hammer",
    },
  ];
  return (
    <div>
      <div
        style={{ backgroundImage: "url(/bg.png)" }}
        className="text-black bg-no-repeat object-cover bg-cover xl:px-[85px] px-[30px] sm:pt-[67px] pt-[51px] sm:pb-[127px] pb-[51px]"
      >
        <p className="font-semibold text-[black] text-[15px] text-center uppercase">
          zentury dražby
        </p>
        <p className="font-semibold text-[#FFFFFF] sm:text-[39px] text-[25px] text-center mt-[9px]">
          Najzaujímavejšie články
        </p>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7 md:mt-[76px] mt-[50px]">
          {servicesArray.map((item) => (
            <div className="border-2 border-black p-[16px] bg-white rounded-[39px]">
              <div className="relative">
                <img src={item?.img} alt="" className="object-cover" />
                <div className="bg-gradient-to-b from-[#D3A86B] to-[#A3784A] text-white font-semibold absolute bottom-3 h-[32px] w-[174px] rounded-[20px] flex justify-center items-center">
                  FEBRUÁR 06, 2024
                </div>
              </div>
              <div className="min-h-[85px] flex justify-between flex-col">
                <p className="text-[24px] font-semibold text-black leading-[28px] mt-[18px]">
                  {item?.heading}
                </p>
                <p className="text-[#44525E] text-[14px] mt-[3px] leading-[24px]">
                  {item?.des}
                </p>
              </div>
              <div
                onClick={() => router.push(item?.link)}
                className="flex items-center pb-[12px] mt-[12px] cursor-pointer"
              >
                <p className="text-black font-semibold ">Čítať viac</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
