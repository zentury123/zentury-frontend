"use client";

import Footer from "@/components/footer";
import Loader from "@/components/loader";
import Navigation from "@/components/navigation/page";
import TopHeader from "@/components/topHeader/page";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Registration() {
  const router = useRouter();
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
      <div className="lg:mt-[190px] mt-[90px] text-black px-[24px]">
        <p className="lg:text-[40px] text-[25px] font-semibold text-center leading-[48px]">
          Názov nehnuteľnosti v dražbe
        </p>
        <div className="sm:flex justify-between max-w-[891px] w-[100%] m-auto border border-[#C7D5E1] rounded-[36px] lg:pl-[114px] lg:pr-[40px] pl-[30px] pr-[30px] py-[25px] mt-[21px]">
          <div className="sm:w-[50%] w-[100%]">
            <p className="text-[21px] font-semibold">Dražba</p>
            <div className="sm:w-[308px] w-[100%]  mt-[20px]">
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1]">
                <p className="text-[13px] font-semibold">Dátum dražby:</p>
                <p className="text-[#44525E] text-[12px]">22.02.2024 16:30</p>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-[#C7D5E1] mt-[13px]">
                <p className="text-[13px] font-semibold">Výška zábezbeky:</p>
                <p className="text-[#44525E] text-[12px]">15 000 €</p>
              </div>
              <div className="flex justify-between items-center pb-3  mt-[13px]">
                <p className="text-[13px] font-semibold">
                  Minimálne prihodenie:
                </p>
                <p className="text-[#44525E] text-[12px]">200 €</p>
              </div>
            </div>
          </div>
          <div className="sm:w-[50%] w-[100%]">
            <p className="text-[21px] font-semibold sm:text-center">
              Dôležité dokumenty
            </p>{" "}
            <div className="w-[151px] sm:m-auto ">
              <div className="flex items-center mt-[20px]">
                <div className="w-[2px] h-[2px] rounded-full bg-[#44525E]"></div>
                <p className="text-[#44525E] ml-2  text-[12px] border-b border-[#44525E] w-fit">
                  Ochrana osobných údajov
                </p>
              </div>

              <div className="flex items-center mt-[20px]">
                <div className="w-[2px] h-[2px] rounded-full bg-[#44525E]"></div>
                <p className="text-[#44525E] ml-2  text-[12px] border-b border-[#44525E] w-fit">
                  Čestné vyhlásenie
                </p>
              </div>

              <div className="flex items-center mt-[20px]">
                <div className="w-[2px] h-[2px] rounded-full bg-[#44525E]"></div>
                <p className="text-[#44525E] ml-2  text-[12px] border-b border-[#44525E] w-fit">
                  (vzor) Dražobný poriadok
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-[891px] w-[100%] m-auto border border-[#C7D5E1] rounded-[36px] lg:px-[123px] px-[30px] py-[61px] mt-[35px]">
          <p className="gradient uppercase font-semibold text-[11px] flex justify-center w-[100%]">
            zentury dražby
          </p>
          <p className="mt-[7px]  text-[29px] font-semibold flex justify-center w-[100%]">
            Prihlásiť sa na dražbu
          </p>
          <p className=" text-[12px]  flex justify-center w-[100%] text-[#44525E]">
            Pre prihlásenie sa na dražbu vyplňte nasledovné údaje
          </p>
          <div className="grid sm:grid-cols-2 grid-cols-1 mt-[59px] lg:gap-[120px] gap-[30px]">
            <div>
              <input
                type="text"
                placeholder="Typ osoby"
                className="w-[100%] h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px]"
              />
              <input
                type="text"
                placeholder="IČO"
                className="w-[100%] h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
              />
              <p className="text-[#44525E] text-[10px] mt-3">
                Napríklad: 46141341
              </p>
              <input
                type="text"
                placeholder="Meno"
                className="w-[100%] h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[15px]"
              />
              <input
                type="text"
                placeholder="Ulica"
                className="w-[100%] h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
              />
              <input
                type="text"
                placeholder="PSČ"
                className="w-[100%] h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
              />
              <input
                type="text"
                placeholder="E-mail"
                className="w-[100%] h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
              />
              <div className="sm:flex hidden  mt-[48px]">
                <p className="text-[#44525E] text-[12px]">Zábezpeka zložená:</p>
                <div className="ml-[22px]">
                  <div className="flex">
                    <input type="checkbox" className="" />
                    <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                      V hotovosti
                    </p>
                  </div>
                  <div className="flex mt-2">
                    <input type="checkbox" className="" />
                    <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                      Na účet
                    </p>
                  </div>
                  <div className="flex mt-2">
                    <input type="checkbox" className="" />
                    <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                      Banková záruka
                    </p>
                  </div>
                  <div className="flex mt-2">
                    <input type="checkbox" className="" />
                    <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                      Notárska úschova
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Názov spoločnosti"
                className="w-[100%] h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px]"
              />
              <p className="text-[#44525E] text-[10px] mt-3 ">
                Napríklad: Aukčná spoločnosť
              </p>
              <input
                type="text"
                placeholder="Zastúpená"
                className="w-[100%] h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[15px]"
              />
              <input
                type="text"
                placeholder="Priezvisko"
                className="w-[100%] h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
              />

              <input
                type="text"
                placeholder="Číslo ulice"
                className="w-[100%] h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
              />
              <input
                type="text"
                placeholder="Mesto"
                className="w-[100%] h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
              />
              <input
                type="text"
                placeholder="Telefón"
                className="w-[100%] h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
              />
              <input
                type="text"
                placeholder="Vlastníctvo"
                className="w-[100%] h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
              />
              <div className="sm:hidden flex   mt-[48px]">
                <p className="text-[#44525E] text-[12px]">Zábezpeka zložená:</p>
                <div className="ml-[22px]">
                  <div className="flex">
                    <input type="checkbox" className="" />
                    <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                      V hotovosti
                    </p>
                  </div>
                  <div className="flex mt-2">
                    <input type="checkbox" className="" />
                    <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                      Na účet
                    </p>
                  </div>
                  <div className="flex mt-2">
                    <input type="checkbox" className="" />
                    <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                      Banková záruka
                    </p>
                  </div>
                  <div className="flex mt-2">
                    <input type="checkbox" className="" />
                    <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                      Notárska úschova
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex mt-[75px]">
                <input type="checkbox" id="custom-checkbox" />
                <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                  Súhlasím so spracovaním osobných údajov
                </p>
              </div>
            </div>
          </div>
          <div
            onClick={() => router.push("/register-for")}
            className="text-[white] bg-gradient-to-b from-[#D3A86B] to-[#A3784A] cursor-pointer max-w-[460px] h-[60px] rounded-[18px] flex justify-center items-center m-auto mt-[60px]"
          >
            <p className="font-semibold ml-[10px]">Prihlásiť sa na dražbu</p>
          </div>
        </div>
      </div>
      <div className="mt-[89px]">
        <Footer />
      </div>
    </div>
  );
}
