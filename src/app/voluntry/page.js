"use client";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation/page";
import Pagination from "@/components/pagination/page";
import TopHeader from "@/components/topHeader/page";
import React, { useEffect, useRef, useState } from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import { useRouter } from "next/navigation";
import Loader from "@/components/loader";

export default function Voluntry() {
  const arrayData = [
    {
      label: "Prvá",
      img: "/1.png",
      price: "148.000 €",
      title: "Nehnuteľnosť na vydraženie ...",
      address: "Nitrianský kraj",
      date: "15.02.2024",
    },
    {
      label: "Prvá",
      img: "/2.png",
      price: "148.000 €",
      title: "Nehnuteľnosť na vydraženie ...",
      address: "Nitrianský kraj",
      date: "15.02.2024",
    },
    {
      label: "Prvá",
      img: "/3.png",
      price: "148.000 €",
      title: "Nehnuteľnosť na vydraženie ...",
      address: "Nitrianský kraj",
      date: "15.02.2024",
    },
    {
      label: "Prvá",
      img: "/4.png",
      price: "148.000 €",
      title: "Nehnuteľnosť na vydraženie ...",
      address: "Nitrianský kraj",
      date: "15.02.2024",
    },
    {
      label: "Opakovaná",
      img: "/5.png",
      price: "148.000 €",
      title: "Nehnuteľnosť na vydraženie ...",
      address: "Bratislavský kraj",
      date: "15.02.2024",
    },
    {
      label: "Opakovaná",
      img: "/6.png",
      price: "148.000 €",
      title: "Nehnuteľnosť na vydraženie ...",
      address: "Bratislavský kraj",
      date: "15.02.2024",
    },
    {
      label: "Opakovaná",
      img: "/7.png",
      price: "148.000 €",
      title: "Nehnuteľnosť na vydraženie ...",
      address: "Bratislavský kraj",
      date: "15.02.2024",
    },
    {
      label: "Opakovaná",
      img: "/8.png",
      price: "148.000 €",
      title: "Nehnuteľnosť na vydraženie ...",
      address: "Bratislavský kraj",
      date: "15.02.2024",
    },
    {
      label: "Prvá",
      img: "/9.png",
      price: "148.000 €",
      title: "Nehnuteľnosť na vydraženie ...",
      address: "Nitrianský kraj",
      date: "15.02.2024",
    },
    {
      label: "Prvá",
      img: "/10.png",
      price: "148.000 €",
      title: "Nehnuteľnosť na vydraženie ...",
      address: "Nitrianský kraj",
      date: "15.02.2024",
    },
    {
      label: "Prvá",
      img: "/11.png",
      price: "148.000 €",
      title: "Nehnuteľnosť na vydraženie ...",
      address: "Nitrianský kraj",
      date: "15.02.2024",
    },
    {
      label: "Prvá",
      img: "/12.png",
      price: "148.000 €",
      title: "Nehnuteľnosť na vydraženie ...",
      address: "Nitrianský kraj",
      date: "15.02.2024",
    },
    {
      label: "Opakovaná",
      img: "/13.png",
      price: "148.000 €",
      title: "Nehnuteľnosť na vydraženie ...",
      address: "Bratislavský kraj",
      date: "15.02.2024",
    },
    {
      label: "Opakovaná",
      img: "/14.png",
      price: "148.000 €",
      title: "Nehnuteľnosť na vydraženie ...",
      address: "Bratislavský kraj",
      date: "15.02.2024",
    },
    {
      label: "Opakovaná",
      img: "/16.png",
      price: "148.000 €",
      title: "Nehnuteľnosť na vydraženie ...",
      address: "Bratislavský kraj",
      date: "15.02.2024",
    },
    {
      label: "Opakovaná",
      img: "/17.png",
      price: "148.000 €",
      title: "Nehnuteľnosť na vydraženie ...",
      address: "Bratislavský kraj",
      date: "15.02.2024",
    },
  ];
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [isOpen1, setIsOpen1] = useState(false);

  const toggleMenu1 = () => {
    setIsOpen1(!isOpen1);
  };
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleMenu2 = () => {
    setIsOpen2(!isOpen2);
  };
  const [isOpen3, setIsOpen3] = useState(false);

  const toggleMenu3 = () => {
    setIsOpen3(!isOpen3);
  };
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
        <div className="flex flex-wrap  lg:mt-[57px] mt-[30px]">
          <input
            className="bg-[#F9FCFF] border border-[#C7D5E1] indent-4 w-[280px] h-[49px] rounded-[18px] mr-[17px] mt-3"
            type="text"
            placeholder="Kĺúčové slovo"
          />
          <div>
            <div
              onClick={toggleMenu}
              className=" w-[98px] mr-[17px] mt-3  h-[49px] cursor-pointer rounded-[18px] bg-[#F9FCFF] border border-[#C7D5E1] flex justify-center items-center"
            >
              <p>Cena</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-6 ml-[10px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            <div
              className={`fixed ${
                isOpen ? "block" : "hidden"
              } top-0 left-0 w-full h-full bg-black opacity-0 z-10`}
              onClick={() => setIsOpen(false)}
            ></div>
            {isOpen && (
              <div className="absolute mt-2 bg-white border rounded shadow-lg z-10 px-[20px] w-[250px]">
                <div className="flex justify-between mt-[16px]">
                  <p className="text-[12px] text-[#848484]">0 €</p>
                  <p className="text-[12px] text-[#848484]">1 000 000 €</p>
                </div>
                <Box sx={{ width: "100%" }}>
                  <Slider
                    defaultValue={50}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    className="slider-class"
                  />
                </Box>
                <p className="text-[12px] text-[#000000] pb-[20px]">Uložiť</p>
              </div>
            )}
          </div>
          <div className="relative">
            <div
              onClick={toggleMenu1}
              className=" w-[98px] mr-[17px] mt-3 h-[49px] cursor-pointer rounded-[18px] bg-[#F9FCFF] border border-[#C7D5E1] flex justify-center items-center"
            >
              <p>Kraj</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-6 ml-[20px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div
                className={`fixed ${
                  isOpen1 ? "block" : "hidden"
                } top-0 left-0 w-full h-full bg-black opacity-0 z-10`}
                onClick={() => setIsOpen1(false)}
              ></div>
              {isOpen1 && (
                <div className="absolute top-12 mt-2 bg-white border rounded shadow-lg z-10 px-[20px] w-[250px]">
                  <div className="flex justify-between mt-[16px]">
                    <p className="text-[12px] text-[#848484]">0 €</p>
                    <p className="text-[12px] text-[#848484]">1 000 000 €</p>
                  </div>
                  <Box sx={{ width: "100%" }}>
                    <Slider
                      defaultValue={50}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                      className="slider-class"
                    />
                  </Box>
                  <p className="text-[12px] text-[#000000] pb-[20px]">Uložiť</p>
                </div>
              )}
            </div>
          </div>
          <div className="relative">
            <div
              onClick={toggleMenu2}
              className=" w-[187px] mr-[17px] mt-3 h-[49px] cursor-pointer rounded-[18px] bg-[#F9FCFF] border border-[#C7D5E1] flex justify-center items-center"
            >
              <p>Typ nehnuteľnosti</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-6 ml-[20px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div
                className={`fixed ${
                  isOpen2 ? "block" : "hidden"
                } top-0 left-0 w-full h-full bg-black opacity-0 z-10`}
                onClick={() => setIsOpen2(false)}
              ></div>
              {isOpen2 && (
                <div className="absolute top-12 mt-2 bg-white border rounded shadow-lg z-10 px-[20px] w-[250px]">
                  <div className="flex justify-between mt-[16px]">
                    <p className="text-[12px] text-[#848484]">0 €</p>
                    <p className="text-[12px] text-[#848484]">1 000 000 €</p>
                  </div>
                  <Box sx={{ width: "100%" }}>
                    <Slider
                      defaultValue={50}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                      className="slider-class"
                    />
                  </Box>
                  <p className="text-[12px] text-[#000000] pb-[20px]">Uložiť</p>
                </div>
              )}
            </div>
          </div>
          <div className="relative">
            <div
              onClick={toggleMenu3}
              className=" w-[112px] mr-[17px] mt-3 h-[49px] cursor-pointer rounded-[18px] bg-[#F9FCFF] border border-[#C7D5E1] flex justify-center items-center"
            >
              <p>Dražba</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-6 ml-[20px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              <div
                className={`fixed ${
                  isOpen3 ? "block" : "hidden"
                } top-0 left-0 w-full h-full bg-black opacity-0 z-10`}
                onClick={() => setIsOpen3(false)}
              ></div>
              {isOpen3 && (
                <div className="absolute top-12 mt-2 bg-white border rounded shadow-lg z-10 px-[20px] w-[250px]">
                  <div className="flex justify-between mt-[16px]">
                    <p className="text-[12px] text-[#848484]">0 €</p>
                    <p className="text-[12px] text-[#848484]">1 000 000 €</p>
                  </div>
                  <Box sx={{ width: "100%" }}>
                    <Slider
                      defaultValue={50}
                      aria-label="Default"
                      valueLabelDisplay="auto"
                      className="slider-class"
                    />
                  </Box>
                  <p className="text-[12px] text-[#000000] pb-[20px]">Uložiť</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  mt-[31px] gap-6">
          {arrayData.map((item) => (
            <div
              onClick={() => router.push("/one-action")}
              className="p-[12px] bg-[#F9FCFF] border border-[#C7D5E1] rounded-[18px] cursor-pointer"
            >
              <div className="relative">
                <img src={item?.img} alt="" className="object-cover w-[100%]" />
                <div className="px-[15px] py-[5px] border border-white rounded-[7px] absolute top-[18px] left-[17px] bg-[#C6A15A]">
                  <p className=" text-[12px] text-white font-semibold">
                    {item?.label}
                  </p>
                </div>
                <p className="text-white text-[18px] bottom-3 absolute left-3">
                  {item?.price}
                </p>
              </div>
              <p className="font-semibold text-black text-[13px] mt-5">
                {item?.title}
              </p>
              <div className="mt-[9px] flex items-center">
                <img src="/location1.svg" alt="" />
                <p className="text-[12px] ml-[7px]">{item?.address}</p>
              </div>
              <div className="flex">
                <div className="flex items-center mt-[13px]">
                  <img src="/icon-home.svg" alt="" />
                  <p className="text-[#44525E] text-[12px] ml-[7px] font-semibold">
                    Dom
                  </p>
                </div>
                <div className="flex items-center mt-[13px] ml-[40%]">
                  <img src="/calendar.svg" alt="" />
                  <p className="text-[#44525E] text-[12px] ml-[7px] font-semibold">
                    {item?.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination />
      </div>
      <div className="mt-[89px]">
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
}
