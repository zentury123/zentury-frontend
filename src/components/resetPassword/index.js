"use client";
import React, { useState } from "react";

const ResetPassword = ({
  isOpen,
  onClose,
  setIsOpen,
  openModalVerificationCode,
}) => {
  const [show, setShow] = useState(false);
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="fixed inset-0 bg-black opacity-50 "></div>
          <div className="bg-white p-8 rounded-[30px] z-50 max-w-[649px] w-[100%]  overflow-scroll">
            <div className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black cursor-pointer"
                onClick={onClose}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </div>
            <p className="text-[15px] font-semibold gradient uppercase text-center">
              zentury dražby
            </p>
            <p className="text-[39px] font-semibold text-center text-black mt-2">
              Obnova hesla
            </p>
            <div className="max-w-[360px] m-auto mt-2">
              <p className="text-center text-[#44525E]">
                Zabudli ste Vaše heslo? Môžete si ho obnoviť zadaním emailu
              </p>
            </div>
            <div className="sm:mt-[38px] mt-[20px]">
              <input
                type="text"
                placeholder="Váš email"
                className="h-[57px] w-[100%] border border-[#C7D5E1] rounded-[18px] indent-4 text-black"
              />

              <div
                onClick={() => {
                  openModalVerificationCode();
                  onClose();
                }}
                className="text-white flex cursor-pointer justify-center items-center h-[59px] w-[100%] bg-gradient-to-b from-[#D3A86B] rounded-[18px] mt-[18px] to-[#A3784A] font-semibold"
              >
                Zmeniť heslo
              </div>
              <div className="mt-[31px] pb-[20px]">
                <p className="text-black text-center cursor-pointer">
                  Späť na &nbsp;
                  <span
                    className="text-[#D3A86B] cursor-pointer underline"
                    onClick={() => {
                      onClose();
                      setIsOpen(true);
                    }}
                  >
                    prihlásenie
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
