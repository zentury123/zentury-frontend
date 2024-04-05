"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function ActionCenter({ openModalVideo }) {
  const actionArray = [
    "Široká ponuka nehnuteľností",
    "Konkurenčné ceny",
    "Transparentný dražobný proces",
    "Jednoduchý a rýchly proces",
    "Odborné poradenstvo a podpora",
  ];
  const router = useRouter();
  return (
    <div className="text-white">
      <div className="grid md:grid-cols-2 grid-cols-1 xl:pl-[142px] pl-[30px] xl:pr-[115px] pr-[30px] md:py-[94px] py-[60px] xl:gap-8 gap-2">
        <div className="md:block hidden">
          <img src="/Image.png" alt="" />
        </div>
        <div className="">
          <p className="text-[#D3A86B] font-semibold text-[15px] mt-[20px] uppercase">
            zentury dražby
          </p>
          <p className="md:text-[39px] text-[25px] text-[#000000] md:leading-[39px] leading-[30px] font-semibold mt-[9px]">
            Prečo si vybrať našu dražobnú spoločnosť?
          </p>
          <p className="text-[#44525E] mt-[9px] leading-[24px] md:text-base text-[13px]">
            Ponúkame transparentný dražobný proces, odborné poradenstvo a širokú
            ponuku nehnuteľností. Získajte svoj vysnívaný domov efektívne a za
            výhodnú cenu.
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 text-[#44525E] font-[300] md:mt-[63px] mt-[29px] gap-4">
            {actionArray.map((item) => (
              <div className="flex items-center">
                <img
                  src="/Exclude (1).svg"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                <p className="leading-[24px] ml-[10px]">{item}</p>
              </div>
            ))}
          </div>
          <div className=" lg:flex items-center md:mt-[73px] mt-[29px]">
            <div
              onClick={() => router.push("/voluntry")}
              className="bg-gradient-to-b from-[#D3A86B] to-[#A3784A] cursor-pointer w-[250px] h-[60px] rounded-[18px] flex justify-center items-center"
            >
              <img src="/Vector (1).svg" alt="" />
              <p className="font-semibold ml-[10px] text-white">
                Dobrovolné dražby
              </p>
            </div>
            <div
              onClick={() => openModalVideo()}
              className="bg-[#010101] w-[262px] h-[60px] rounded-[18px] cursor-pointer flex justify-center items-center lg:ml-[39px] lg:mt-0 mt-[23px]"
            >
              <img src="/Video.svg" alt="" />
              <p className="font-semibold ml-[10px] text-white">
                Ako prebieha dražba
              </p>
            </div>
          </div>
        </div>
        <div className="md:hidden block ">
          <img src="/Image.png" alt="" />
        </div>
      </div>
    </div>
  );
}
