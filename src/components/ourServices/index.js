"use client";
import { useRouter } from "next/navigation";
import React from "react";

export default function OurServices() {
  const router = useRouter();
  const servicesArray = [
    {
      no: "01",
      heading: "Vymáhanie pohľadávok",
      des: "Sme expertom na mandátne vymáhanie pohľadávok, ktoré ponúka Vašej spoločnosti chytré a efektívne riešenie problémov s dlžníkmi.",
      label: "Viac o službe",
      link: "/obligations",
    },
    {
      no: "02",
      heading: "Sprostredkovanie právneho poradenstva",
      des: "Táto služba zahŕňa poskytovanie odborných právnych rad a služieb klientom prostredníctvom kvalifikovaných právnikov a poradcov.",
      label: "www.zentury.sk",
      link: "/",
    },
    {
      no: "03",
      heading: "Dobrovoľné dražby",
      des: "Portfólio našich služieb taktiež zahŕňa výkon záložného práva prostredníctvom dobrovoľných dražieb.",
      label: "Viac o službe",
      link: "/voluntry",
    },
    {
      no: "04",
      heading: "Priamy predaj",
      des: "Služba priameho predaja vám umožňuje inzerovať na našom webe a v sieti našich inzertných partnerov. ",
      label: "Viac o službe",
      link: "/direct-sale",
    },
    {
      no: "05",
      heading: "Ekonomické služby",
      des: "Poskytujeme kľúčovú podporu pre správne fungovanie podnikov v účtovných a finančných poradenstiev.",
      label: "www.zentury.sk",
      link: "/",
    },
  ];
  return (
    <div>
      <div
        style={{ backgroundImage: "url(/bg.png)" }}
        className="text-black bg-no-repeat object-cover bg-cover xl:px-[85px] px-[30px] sm:pt-[67px] pt-[51px] sm:pb-[94px] pb-[68px]"
      >
        <p className="font-semibold text-[black] text-[15px] text-center uppercase">
          zentury dražby
        </p>
        <p className="font-semibold text-[#FFFFFF] text-[39px] text-center mt-[9px]">
          Naše služby
        </p>
        <div className="grid grid-cols-12 xl:gap-20 md:gap-10 mt-[38px] gap-4">
          {servicesArray.map((item, index) =>
            index + 1 === servicesArray.length ? (
              <div key={index} className="col-span-12">
                <div
                  className={`border-[black] m-auto md:w-[47%] w-[100%] border-2 pt-[27px] pb-[19px] md:px-[40px] px-[10px] rounded-[49px] bg-white`}
                >
                  <div className="flex items-center font-semibold">
                    <p className="linear font-semibold leading-[64px]">
                      {item?.no}
                    </p>
                    <p className="text-[#000000] sm:text-[24px] text-[17px] ml-[10px]">
                      {item?.heading}
                    </p>
                  </div>
                  <p className="text-[#44525E] leading-[24px]">{item?.des}</p>
                  {item?.label === "www.zentury.sk" ? (
                    <a href="https://zentury.sk/" target="__blank">
                      <div className="cursor-pointer mt-[12px] text-[13px] font-semibold bg-[#010101] w-fit text-white rounded-full px-[20px] py-[10px] flex justify-center items-center">
                        {item?.label}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5 ml-[10px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </div>
                    </a>
                  ) : (
                    <div
                      onClick={() => {
                        router.push(item?.link);
                      }}
                      className="cursor-pointer mt-[12px] text-[13px] font-semibold bg-[#010101] w-fit text-white rounded-full px-[20px] py-[10px] flex justify-center items-center"
                    >
                      {item?.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 ml-[10px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div
                className={`border-[black]  md:col-span-6 col-span-12  border-2 pt-[27px] pb-[19px] md:px-[40px] px-[20px] rounded-[49px] bg-white`}
              >
                <div className="flex items-center font-semibold">
                  <p className="linear font-semibold leading-[64px]">
                    {" "}
                    {item?.no}
                  </p>
                  <p className="text-[#000000] sm:text-[24px] text-[17px] ml-[10px]">
                    {item?.heading}
                  </p>
                </div>
                <p className="text-[#44525E] leading-[24px]">{item?.des}</p>
                {item?.label === "www.zentury.sk" ? (
                  <a href="https://zentury.sk/" target="__blank">
                    <div className="cursor-pointer mt-[12px] text-[13px] font-semibold bg-[#010101] w-fit text-white rounded-full px-[20px] py-[10px] flex justify-center items-center">
                      {item?.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 ml-[10px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </div>
                  </a>
                ) : (
                  <div
                    onClick={() => {
                      router.push(item?.link);
                    }}
                    className="cursor-pointer mt-[12px] text-[13px] font-semibold bg-[#010101] w-fit text-white rounded-full px-[20px] py-[10px] flex justify-center items-center"
                  >
                    {item?.label}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 ml-[10px]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
