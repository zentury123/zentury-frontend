"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Login from "../loginModal";
import Register from "../registerModal";
import ResetPassword from "../resetPassword";
import VerificationCode from "../verificationCode";
import UpdatePassword from "../password";
import VideoModal from "../videoModal";
import { useSession, signOut } from "next-auth/react";
export default function Navigation() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const { data: session } = useSession();
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
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <div>
      <div className="lg:block hidden">
        <div className="xl:px-[56px] px-[20px] bg-[#00000090]  py-[7px] absolute left-0 right-0 z-10">
          <div className="flex items-center mt-[10px] mb-[10px] ">
            <img
              src="/logo-10.svg"
              className="cursor-pointer"
              alt=""
              onClick={() => router.push("/")}
            />
            <div className="flex xl:ml-[80px] ml-[20px] xl:mr-[80px] mr-[20px] w-[100%] justify-between">
              <p
                className={`${pathname === "/" ? "text-[#D3A86B]" : "text-white"
                  } font-semibold cursor-pointer  hover:text-[#D3A86B]`}
                onClick={() => router.push("/")}
              >
                Domov
              </p>
              <p
                className={`font-semibold cursor-pointer hover:text-[#D3A86B] ${pathname === "/about-comany" ? "text-[#D3A86B]" : "text-white"
                  }`}
                onClick={() => router.push("/about-comany")}
              >
                O spoločnosti
              </p>
              <p
                className={`font-semibold cursor-pointer hover:text-[#D3A86B] ${pathname === "/about" ? "text-[#D3A86B]" : "text-white"
                  }`}
                onClick={() => router.push("/about")}
              >
                O dražbách
              </p>

              <p
                className={`font-semibold cursor-pointer hover:text-[#D3A86B] ${pathname === "/calendar" ? "text-[#D3A86B]" : "text-white"
                  }`}
                onClick={() => router.push("/calendar")}
              >
                Dražobný kalendár
              </p>
              <div className="relative">
                <p
                  onClick={() => setShowMenu(!showMenu)}
                  className="text-white font-semibold cursor-pointer hover:text-[#D3A86B]"
                >
                  Služby
                </p>
                {showMenu && (
                  <div>
                    <div
                      className="fixed h-full w-full bg-transparent left-0 right-0"
                      onClick={() => setShowMenu(false)}
                    />
                    <div className="w-[305px] bg-[black] p-[17px] rounded-[7px] absolute">
                      <p
                        onClick={() => router.push("/voluntry")}
                        className="cursor-pointer text-[#F9FCFF] hover:text-[#D3A86B]"
                      >
                        Dobrovolné dražba
                      </p>

                      <p
                        onClick={() => router.push("/direct-sale")}
                        className="cursor-pointer text-[#F9FCFF] hover:text-[#D3A86B] mt-[15px]"
                      >
                        Priamy predaj
                      </p>
                      <p className="cursor-pointer text-[#F9FCFF] hover:text-[#D3A86B] mt-[15px]">
                        Vymáhanie pohľadávok
                      </p>
                      <a href="https://zentury.sk" target="__blnak">
                        <p className="cursor-pointer text-[#F9FCFF] hover:text-[#D3A86B] mt-[15px]">
                          Sprostredkovanie právneho poradenstva
                        </p>
                      </a>
                      <a href="https://zentury.sk" target="__blnak">
                        <p className="cursor-pointer text-[#F9FCFF] hover:text-[#D3A86B] mt-[15px]">
                          Ekonomické služby
                        </p>
                      </a>
                    </div>
                  </div>
                )}
              </div>
              <p
                className={`font-semibold cursor-pointer hover:text-[#D3A86B] ${pathname === "/contact" ? "text-[#D3A86B]" : "text-white"
                  }`}
                onClick={() => router.push("/contact")}
              >
                Kontakt
              </p>
            </div>
            {(
              <div className="flex items-center w-[400px]">
                <img src="/group-165.svg" alt="" />
                <p className="font-semibold ml-[11px] cursor-pointer">
                  {!session?.user?.accessToken ? (
                    <span
                      className="hover:text-[#D3A86B] text-white"
                      onClick={() => openModal()}
                    >
                      Prihlásenie
                    </span>
                  ) : (
                    <div className="flex gap-4 items-center">
                      <span
                        className="hover:text-[#D3A86B] text-white"
                        onClick={() => signOut({ callbackUrl: "/" })}
                      >
                        Odhlásiť
                      </span>

                      <div className="flex w-[150px]">
                        <img src="/Vector (2).svg" alt="" />
                        <p
                          className={`font-semibold cursor-pointer hover:text-[#D3A86B] ml-[11px] ${pathname === "/my-account" ? "text-[#D3A86B]" : "text-white"
                            }`}
                          onClick={() => router.push("/my-account")}
                        >
                          Môj účet
                        </p>
                      </div>
                    </div>
                  )}
                  {!session?.user?.accessToken && (
                    <span
                      className="hover:text-[#D3A86B] ml-3 text-white"
                      onClick={() => openModalRegister()}
                    >
                      Registrácia
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Login
        isOpen={isOpen}
        onClose={closeModal}
        forgotPassword={openModalResetModal}
        setIsRegister={setIsRegister}
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
