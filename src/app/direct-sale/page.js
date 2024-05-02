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
import SearchContent from "./(SearchContent)/index";
export default function DirectSale() {

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
  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1400);
  // }, []);
  // if (loading) {
  //   return <Loader />;
  // }
  return (
    <div className="bg-white min-h-[100vh]">
      <div className="lg:mt-[190px] mt-[90px] text-black xl:px-[81px] px-[24px]">
        <p className="lg:text-[40px] text-[25px] font-semibold  lg:leading-[48px] leading-[35px]">
          Priamy predaj
        </p>
        <div className="text-[#44525E] text-[12px]">
          <p className="text-[#44525E]  lg:mt-[34px] mt-[25px]">
            Služba priameho predaja vám umožňuje inzerovať na našom webe a v
            sieti našich inzertných partnerov. Záujemcom dávame možnosť získať
            rýchlu a spravodlivú hodnotu za vašu nehnuteľnosť, bez zbytočných
            obmedzení a zložitostí. Vaša nehnuteľnosť bude viditeľná pre široký
            okruh potenciálnych záujemcov.
          </p>
          <br />
          <p className="text-[#44525E]  lg:mt-[34px] mt-[25px]">
            Spojte sa s nami a zistite, ako môžeme spoločne nájsť optimálne
            riešenie pre váš majetok prostredníctvom priameho predaja. Naši
            odborníci v oblasti dražieb a realít vám poskytnú odborné
            poradenstvo a podporu počas celého procesu. Tešíme sa, že môžeme byť
            vaším spoľahlivým partnerom v oblasti správy nehnuteľností a
            nájdenia najlepšieho spôsobu, ako dosiahnuť úspešný predaj vášho
            majetku.
          </p>
          <br />
          <p className="text-[#44525E] text-[12] font-semibold">
            Výhody priameho predaja:
          </p>
          <div className="flex ml-2 items-center">
            <div className="w-[2px] h-[2px] rounded-full bg-[#44525E]" />
            <p className="ml-2">
              široká sieť inzertných možností – automaticky dostupná pre vašu
              nehnuteľnosť,
            </p>
          </div>
          <div className="flex ml-2 items-center">
            <div className="w-[2px] h-[2px] rounded-full bg-[#44525E]" />
            <p className="ml-2">
              profesionálny prístup – zabezpečujeme konzultáciu, koncipovanie
              inzerátu, možnosť nafotenia nehnuteľnosti či znalecký posudok,
            </p>
          </div>
          <div className="flex ml-2 items-center">
            <div className="w-[2px] h-[2px] rounded-full bg-[#44525E]" />
            <p className="ml-2">
              diskrétnosť – predajom cez našu spoločnosť nie sú nikde
              zverejňované vaše osobné údaje,
            </p>
          </div>
          <div className="flex ml-2 items-center">
            <div className="w-[2px] h-[2px] rounded-full bg-[#44525E]" />
            <p className="ml-2">
              rýchlosť a efektivita – priamy predaj umožňuje čo najrýchlejšie
              uzatvorenie obchodu.
            </p>
          </div>
        </div>
        <p className="lg:text-[40px] text-[25px] font-semibold  lg:leading-[48px] leading-[35px] lg:mt-[60px] mt-[30px]">
        Ponuka priameho predaja
        </p>
        <SearchContent />
        
      </div>

    </div>
  );
}
