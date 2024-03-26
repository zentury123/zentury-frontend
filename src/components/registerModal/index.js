"use client";
import React, { useState } from "react";

const Register = ({ isOpen, onClose, setIsOpen }) => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 ">
          <div className="fixed inset-0 bg-black opacity-50 "></div>
          <div className="bg-white p-8 rounded-[30px] z-50 max-w-[649px] sm:w-[100%] w-[95%] min-h-fit max-h-[95vh] overflow-scroll my-scroller">
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
            <p className="sm:text-[39px] text-[25px] font-semibold text-center text-black mt-2">
              Vytvorte si účet
            </p>
            <div className="max-w-[380px] m-auto mt-2">
              <p className="text-center text-[#44525E] sm:text-base text-sm">
                V prípade záujmu o registráciu na dražbu si vytvorte účet, alebo
                sa prihláste.
              </p>
            </div>
            <div className="sm:mt-[38px] mt-[20px]">
              <input
                type="text"
                placeholder="Vaše meno"
                className="h-[57px] w-[100%] border border-[#C7D5E1] rounded-[18px] indent-4 text-black"
              />
              <input
                type="text"
                placeholder="Vaše priezvisko"
                className="h-[57px] w-[100%] border border-[#C7D5E1] rounded-[18px] indent-4 text-black mt-5"
              />
              <input
                type="text"
                placeholder="Email"
                className="h-[57px] w-[100%] border border-[#C7D5E1] rounded-[18px] indent-4 text-black mt-5"
              />
              <div className="relative">
                <input
                  type={show ? "text" : "password"}
                  placeholder="Heslo"
                  className="h-[57px] w-[100%] border border-[#C7D5E1] rounded-[18px] indent-4 text-black mt-[19px]"
                />
                {show ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute top-9 right-5 text-black cursor-pointer"
                    onClick={() => setShow(!show)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute top-9 right-5 text-black cursor-pointer"
                    onClick={() => setShow(!show)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </div>
              <div className="relative">
                <input
                  type={show1 ? "text" : "password"}
                  placeholder="Zopakujte heslo"
                  className="h-[57px] w-[100%] border border-[#C7D5E1] rounded-[18px] indent-4 text-black mt-[19px]"
                />
                {show1 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute top-9 right-5 text-black cursor-pointer"
                    onClick={() => setShow1(!show1)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 absolute top-9 right-5 text-black cursor-pointer"
                    onClick={() => setShow1(!show1)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                )}
              </div>

              <div className="cursor-pointer text-white flex justify-center items-center h-[59px] w-[100%] bg-gradient-to-b from-[#D3A86B] rounded-[18px] mt-[43px] to-[#A3784A] font-semibold">
                Vytvoriť účet
              </div>
              <div className="mt-[31px] pb-[20px]">
                <p
                  className="text-black text-center cursor-pointer underline"
                  onClick={() => {
                    setIsOpen(true);
                    onClose();
                  }}
                >
                  Už mám účet
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;