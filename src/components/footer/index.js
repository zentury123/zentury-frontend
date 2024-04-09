"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Login from "../loginModal";
import Register from "../registerModal";
import ResetPassword from "../resetPassword";
import VerificationCode from "../verificationCode";
import UpdatePassword from "../password";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Footer() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const [isRegister, setIsRegister] = useState(false);

  const openModalRegister = () => {
    setIsRegister(true);
  };

  const closeModalRegister = () => {
    setIsRegister(false);
  };
  const [isResetPassword, setIsResetPassword] = useState(false);

  const openModalResetModal = () => {
    setIsResetPassword(true);
  };

  const closeModalResetModal = () => {
    setIsResetPassword(false);
  };
  const [verificationCode, setVerificationCode] = useState(false);

  const openModalVerificationCode = () => {
    setVerificationCode(true);
  };

  const closeModalVerificationCode = () => {
    setVerificationCode(false);
  };
  const [updatePassword, setUpdatePassword] = useState(false);

  const openModalUpdatePassword = () => {
    setUpdatePassword(true);
  };

  const closeModalUpdatePassword = () => {
    setUpdatePassword(false);
  };


  function scrollTop(){

    setTimeout(() => {
      window.scroll({
        top: 0,
        behavior:'smooth'
      });
    }, 100);

  }
  return (
    <div>
      <div className="xl:pl-[75px] pl-[30px] xl:pr-[68px] pr-[30px] pt-[81px] pb-[22px] bg-[#010101]  text-white">
        <div className="grid grid-cols-12 ">
          <div className="col-span-12 lg:hidden">
            <div className="px-4 py-[25px] bg-gradient-to-b from-[#D3A86B] to-[#A3784A] rounded-[20px]">
              <img src="/home1.png" alt="" />
              <p className="text-[24px] font-semibold leading-[28px] text-white mt-[27px]">
                Chcete dať svoju nehnuteľnosť do dražby?
              </p>
              <p className="text-white leading-[24px] text-[15px] mt-2">
                Využite našu dražobnú spoločnosť Zentury.
              </p>
              <Link

                href="/contact"
                onClick={scrollTop}
                className="bg-[#010101] rounded-[18px] py-[10px] px-[20px] w-fit flex items-center mt-[19px]"
              >
                <img src="/message.svg" alt="" />
                <p className="text-[13px] font-semibold text-white ml-[10px]">
                  Kontakt
                </p>
              </Link>
            </div>
          </div>
          <div className="col-span-4 mt-[50px] lg:block hidden">
            <img src="/logo-10.svg" alt="" />
            <p className="text-white leading-[24px] mt-[13px]">
              V našej licencovanej dražobnej spoločnosti Zentury poskytujeme
              dražbu rôznych nehnuteľností
            </p>
            <p className="text-[18px] font-semibold mt-[49px] text-white">
              Sledujte nás
            </p>
            <div className="flex mt-[30px]">
              {" "}
              <a href="https://www.facebook.com/zentury." target="__blank">
                <img src="/facebook.svg" alt="" />
              </a>
              <a
                href="https://www.secure.instagram.com/zentury.sk/?hl=sk"
                target="__blank"
              >
                <img src="/Twitter.svg" alt="" className="ml-[15px]" />
              </a>
            </div>
          </div>
          <div className="col-span-3 pl-5 mt-[50px] lg:block hidden">
            <p className="text-[18px] font-semibold text-white">
              Firemné údaje
            </p>
            <p className="text-white leading-[24px] font-[400] mt-[25px] hover:text-[#D3A86B] cursor-pointer">
              Firma: ZENTURY, s. r. o.
            </p>
            <p className="text-white leading-[24px] font-[400] mt-[16px] hover:text-[#D3A86B] cursor-pointer">
              Adresa: Piaristická 1 949 01 Nitra
            </p>
            <p className="text-white leading-[24px] font-[400] mt-[16px] hover:text-[#D3A86B] cursor-pointer">
              IČO: 53148797
            </p>
            <p className="text-white leading-[24px] font-[400] mt-[16px] hover:text-[#D3A86B] cursor-pointer">
              DIČ: 2121291876
            </p>
            <p className="text-white leading-[24px] font-[400] mt-[16px] gradient">
              IČ DPH: SK2121291876
            </p>
          </div>
          <div className="lg:col-span-2 sm:col-span-4 col-span-12 mt-[50px]">
            <p className="text-[18px] font-semibold text-white">
              Rýchle odkazy
            </p>
            <p
              className="leading-[24px] font-[400] mt-[25px] text-white hover:text-[#D3A86B] cursor-pointer"
              onClick={() => router.push("/business-conditions")}
            >
              Obchodné podmienky
            </p>
            {!session?.user?.accessToken && (
              <>
                {" "}
                <p
                  onClick={() => setIsOpen(true)}
                  className="leading-[24px] font-[400] text-white mt-[16px] hover:text-[#D3A86B] cursor-pointer"
                >
                  Prihlásiť sa
                </p>
                <p
                  onClick={() => setIsRegister(true)}
                  className="leading-[24px] font-[400] text-white mt-[16px] hover:text-[#D3A86B] cursor-pointer"
                >
                  Registrácia
                </p>
              </>
            )}
          </div>
          <div className="lg:col-span-3 sm:col-span-4 col-span-12 sm:pl-5 mt-[50px] lg:hidden">
            <p className="text-[18px] text-white font-semibold hover:text-[#D3A86B] cursor-pointer">
              Firemné údaje
            </p>
            <p className="leading-[24px] text-white font-[400] mt-[25px] hover:text-[#D3A86B] cursor-pointer">
              Firma: ZENTURY, s. r. o.
            </p>
            <p className="leading-[24px] text-white font-[400] mt-[16px] hover:text-[#D3A86B] cursor-pointer">
              Adresa: Piaristická 1 949 01 Nitra
            </p>
            <p className="leading-[24px] text-white font-[400] mt-[16px] hover:text-[#D3A86B] cursor-pointer">
              IČO: 53148797
            </p>
            <p className="leading-[24px] text-white font-[400] mt-[16px] hover:text-[#D3A86B] cursor-pointer">
              DIČ: 2121291876
            </p>
            <p className="leading-[24px] text-white font-[400] mt-[16px] gradient">
              IČ DPH: SK2121291876
            </p>
          </div>
          <div className="col-span-3 lg:block hidden">
            <div className="px-4 py-[25px] bg-gradient-to-b from-[#D3A86B] to-[#A3784A] rounded-[20px]">
              <img src="/home-7.svg" alt="" />
              <p className="text-[24px] font-semibold leading-[28px] text-white mt-[27px]">
                Chcete dať svoju nehnuteľnosť do dražby?
              </p>
              <p className="text-white leading-[24px] text-[15px] mt-2">
                Využite našu dražobnú spoločnosť Zentury.
              </p>
              <Link
                href="/contact"
                onClick={scrollTop}
                className="bg-[#010101] rounded-[18px] py-[10px] px-[20px] w-fit flex items-center mt-[19px] cursor-pointer"
              >
                <img src="/message.svg" alt="" />
                <p className="text-[13px] font-semibold text-white ml-[10px]">
                  Kontakt
                </p>
              </Link>
            </div>
          </div>
          <div className="md:col-span-4 col-span-12 mt-[50px] lg:hidden">
            <img src="/logo2.svg" alt="" />
            <p className="text-white leading-[24px] mt-[13px]">
              V našej licencovanej dražobnej spoločnosti Zentury poskytujeme
              dražbu rôznych nehnuteľností
            </p>
            <p className="text-[18px] font-semibold mt-[49px] text-white">
              Sledujte nás
            </p>
            <div className="flex mt-[30px]">
              {" "}
              <a href="https://www.facebook.com/zentury." target="__blank">
                <img src="/facebook.svg" alt="" className="w-[30px] h-[30px]" />
              </a>
              <a
                href="https://www.secure.instagram.com/zentury.sk/?hl=sk"
                target="__blank"
              >
                <img
                  src="/Twitter.svg"
                  alt=""
                  className="ml-[15px] w-[30px] h-[30px]"
                />
              </a>
            </div>
          </div>
        </div>
        <p className="max-w-[474px] m-auto w-[100%] text-white leading-[24px] text-center mt-[71px]">
          Zentury dražobná spoločnosť © Všetky práva vyhradené 2024 | Tvorba web
          stránok{" "}
          <a href="https://wavenet.sk" target="__target">
            {" "}
            <span className="gradient">WaveNet</span>
          </a>
        </p>
      </div>
      <Login
        isOpen={isOpen}
        onClose={closeModal}
        forgotPassword={openModalResetModal}
      />
      <Register
        isOpen={isRegister}
        onClose={closeModalRegister}
        setIsOpen={setIsOpen}
      />
      <ResetPassword
        isOpen={isResetPassword}
        onClose={closeModalResetModal}
        setIsOpen={setIsOpen}
        openModalVerificationCode={openModalVerificationCode}
      />
      <VerificationCode
        isOpen={verificationCode}
        onClose={closeModalVerificationCode}
        setIsOpen={setIsOpen}
        setUpdatePassword={setUpdatePassword}
      />
      <UpdatePassword
        isOpen={updatePassword}
        onClose={closeModalUpdatePassword}
        setIsOpen={setIsOpen}
      />
    </div>
  );
}
