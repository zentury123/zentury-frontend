import { useRouter } from "next/navigation";
import React from "react";

export default function HeroBanner({ openModalVideo }) {
  const router = useRouter();
  return (
    <div>
      <div className=" sm:h-[calc(100vh-50px)] h-[calc(100vh-50px)]  relative">
        <img
          src="/Hero Banner.png"
          alt=""
          className="h-[100%] object-cover w-full sm:block hidden "
        />
        <img
          src="/Hero Banner (1).png"
          alt=""
          className="h-[100%] object-cover w-full sm:hidden "
        />
        <div className="left-0 right-0 top-0 bottom-0 h-[100%]  max-w-[1000px] m-auto absolute flex sm:justify-center flex-col items-center">
          <div className="sm:mt-0 mt-[120px]">
            <p className="text-[#D3A86B] font-[800] lg:text-[93px] text-[45px] lg:leading-[100px] leading-[50px] text-center px-[10px]">
              Dražby nehnuteľností{" "}
            </p>
            <p className="text-white lg:text-[58px] text-[33px] font-[600] text-center lg:leading-[64px] leading-[40px] px-[10px]">
              Vaša príležitosť získať nehnuteľnosť{" "}
              <br className="sm:hidden block " /> za výhodnú cenu
            </p>
          </div>
          <div className=" sm:flex items-center fl mt-[42px]">
            <div
              onClick={() => router.push("/voluntry")}
              className="bg-gradient-to-b from-[#D3A86B] to-[#A3784A] cursor-pointer w-[250px] sm:h-[60px] h-[50px] rounded-[18px] flex justify-center items-center"
            >
              <img src="/Vector (1).svg" alt="" />
              <p className="font-semibold ml-[10px] text-white">
                Dobrovolné dražby
              </p>
            </div>
            <div
              onClick={() => router.push("/direct-sale")}
              className="bg-white w-[212px] sm:h-[60px] h-[50px] rounded-[18px] cursor-pointer flex justify-center items-center sm:ml-[49px] sm:m-0 m-auto sm:mt-0 mt-[29px]"
            >
              <img src="/home.svg" alt="" />
              <p className="font-semibold ml-[10px] text-black">
                Priamy predaj
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() => openModalVideo()}
          className="w-[247px]  bg-gradient-to-b from-[#D3A86B] to-[#A3784A] flex justify-center items-center right-0 h-[62px] cursor-pointer absolute sm:bottom-[20px] bottom-[40px] rounded-l-[11px]"
        >
          <img src="/play.svg" alt="" />
          <p className="font-semibold  ml-[14px] text-white">
            Ako sa k nám dostanete
          </p>
        </div>
        {/* <div
          onClick={() => openModalVideo()}
          className="w-[247px]  bg-gradient-to-b from-[#D3A86B] to-[#A3784A] sm:hidden flex top-[90px] justify-center items-center right-0 h-[62px] cursor-pointer absolute bottom-[20px] rounded-l-[11px]"
        >
          <img src="/play.svg" alt="" />
          <p className="font-semibold  ml-[14px]">Ako sa k nám dostanete</p>
        </div> */}
      </div>
    </div>
  );
}
