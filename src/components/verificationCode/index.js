"use client";
import React, { useRef, useState } from "react";
import useResetPassword from "@/customHooks/useResetPassword";
const VerificationCode = ({
  isOpen,
  onClose,
  setIsOpen,
  setUpdatePassword,
}) => {
  const formRef = useRef(null);
  const { loading, resetUserPassword } = useResetPassword();
  const [passwordError, setPasswordError] = useState(false);
  const handleUpdatePassword = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const code = formData.get("code");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");
    if (password !== confirmPassword) {
      setPasswordError(true);
    } else {
      try {
        await resetUserPassword(code, password, confirmPassword);

        onClose();
      } catch (error) {}
    }
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
              Verifikácia
            </p>
            <div className="max-w-[360px] m-auto mt-2">
              <p className="text-center text-[#44525E]">
                Na Váš email sme zaslali unikátny verifikačný kód
              </p>
            </div>
            <form ref={formRef} onSubmit={handleUpdatePassword}>
              <div className="sm:mt-[38px] mt-[20px]">
                <input
                  required
                  name="code"
                  type="text"
                  placeholder="Verifikačný kód"
                  className="h-[57px] w-[100%] border border-[#C7D5E1] rounded-[18px] indent-4 text-black"
                />

                <input
                  type="text"
                  name="password"
                  placeholder="Nové heslo"
                  className="h-[57px] w-[100%] border border-[#C7D5E1] rounded-[18px] indent-4 text-black mt-[17px]"
                />
                <input
                  type="text"
                  name="confirmPassword"
                  placeholder="Zopakujte nové heslo"
                  className="h-[57px] w-[100%] border border-[#C7D5E1] rounded-[18px] indent-4 text-black mt-[17px]"
                />
                {passwordError && (
                  <p className=" text-sm text-[red] my-1">Heslá sa nezhodujú</p>
                )}
                <button
                  type="submit"
                  className="text-white flex cursor-pointer justify-center items-center h-[59px] w-[100%] bg-gradient-to-b from-[#D3A86B] rounded-[18px] mt-[18px] to-[#A3784A] font-semibold"
                >
                  {loading ? "resetovanie hesla" : "Zmeniť heslo"}
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

export default VerificationCode;
