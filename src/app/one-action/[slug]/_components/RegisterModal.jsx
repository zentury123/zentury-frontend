"use client";
import React, { useState } from "react";

const RegisterModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="text-[white] bg-gradient-to-b from-[#D3A86B] to-[#A3784A] cursor-pointer w-[308px] h-[44px] rounded-full flex justify-center items-center  mt-[30px]"
      >
        <p className="font-semibold text-[12px] ml-[10px]">
          Chcem sa zaregistrovať na dražbu
        </p>
      </button>
      {isOpen && (
        <div className="fixed inset-0 top-0 flex items-center justify-center z-50 ">
          <div
            className=" relative h-[80vh] overflow-y-auto max-w-[603px] w-[100%] border border-[#C7D5E1] lg:mt-0 mt-10  rounded-[39px] px-[30px] pt-[40px] pb-[17px] bg-white text-black "
            style={{ boxShadow: "0px 0px 30px 0px #AEC0CECC" }}
          >
            <div className="absolute top-3 right-5 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 mt-[59px] lg:gap-[120px] gap-[30px]">
              <form>
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
                    <p className="text-[#44525E] text-[12px]">
                      Zábezpeka zložená:
                    </p>
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
                    <p className="text-[#44525E] text-[12px]">
                      Zábezpeka zložená:
                    </p>
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
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterModal;
