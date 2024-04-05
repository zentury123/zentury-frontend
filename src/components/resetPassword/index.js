"use client";
import React, { useRef, useState } from "react";
import useForgotPassword from "@/customHooks/useForgetPassword";
const ResetPassword = ({
  isOpen,
  onClose,
  setIsOpen,
  openModalVerificationCode,
}) => {
  const { loading, sendVerificationEmail } = useForgotPassword();
  const formRef = useRef(null);
  const handleSendVerificationEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const email = formData.get("email");
    try {
      await sendVerificationEmail(email);
      openModalVerificationCode();
      onClose();
    } catch (error) {}
  };
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
            <form ref={formRef} onSubmit={handleSendVerificationEmail}>
              <div className="sm:mt-[38px] mt-[20px]">
                <input
                  name="email"
                  type="email"
                  placeholder="Váš email"
                  className="h-[57px] w-[100%] border border-[#C7D5E1] rounded-[18px] indent-4 text-black"
                />

                <button
                  type="submit"
                  className="text-white flex cursor-pointer justify-center items-center h-[59px] w-[100%] bg-gradient-to-b from-[#D3A86B] rounded-[18px] mt-[18px] to-[#A3784A] font-semibold"
                >
                  {loading
                    ? "Odosielanie overovacieho e-mailu"
                    : "Zmeniť heslo"}
                </button>
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
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ResetPassword;
