"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Login from "../loginModal";
import Register from "../registerModal";
import ResetPassword from "../resetPassword";
import VerificationCode from "../verificationCode";
import UpdatePassword from "../password";
import Drawer from "../drawer.js";
import { useSession, signOut } from "next-auth/react";

export default function TopHeader() {
  const router = useRouter();
  const [showMenu, setShowMenu] = useState(false);
  const [drawer, setDrawer] = useState(false);
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
  const [scrollPixels, setScrollPixels] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollPixels(scrollTop);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const pathname = usePathname();
  const toggleDrawer = () => {
    setDrawer(!drawer);
  };
  return (
    <div className="">
      <div className="grid lg:grid-cols-12 grid-cols-1 lg:h-[50px] sm:h-[60px] xl:px-[56px] px-[20px] bg-[#010101] ">
        <div className="lg:hidden flex justify-between items-center fixed top-0 left-0 right-0 py-[15px] bg-[#010101] px-5 z-50">
          <img src="/small-logo.svg" alt="" onClick={() => router.push("/")} />
          <div className="flex items-center">
            <img
              src="/check.svg"
              alt=""
              className={`w-[20px] h-[15px] mr-[25px] ${
                location.pathname === "/register-for" ||
                location.pathname === "/my-account"
                  ? "block"
                  : "hidden"
              } `}
              onClick={() => router.push("/register-for")}
            />
            <img
              src="/Vector (2).svg"
              alt=""
              className={`w-[19px] h-[21px] mr-[25px] ${
                location.pathname === "/register-for" ||
                location.pathname === "/my-account"
                  ? "block"
                  : "hidden"
              } `}
              onClick={() => router.push("/my-account")}
            />
            {drawer ? (
              <img
                src="/Close_round.svg"
                alt=""
                onClick={() => setDrawer(!drawer)}
              />
            ) : (
              <img src="/menu.svg" alt="" onClick={() => setDrawer(!drawer)} />
            )}
          </div>
        </div>
        <div className="xl:col-span-6 col-span-7  hidden lg:flex items-center justify-between">
          <div className="flex items-cente">
            <img src="/Exclude.svg" alt="" />
            <p className="ml-3 text-white">Piaristická 1, 949 01 Nitra</p>
          </div>
          <div className="flex items-cente">
            <img src="/Vector.svg" alt="" />
            <p className="ml-3 text-white">
              <a
                className="text-white hover:text-[#D3A86B]"
                href="tel:+421 37/381 12 73"
              >
                {" "}
                +421 37/381 12 73
              </a>
            </p>
          </div>
          <div className="flex items-cente">
            <img src="/world.svg" alt="" />
            <p className="ml-3 ">
              <a
                className="text-white hover:text-[#D3A86B] underline"
                href="https://zentury.sk"
                target="__blank"
              >
                {" "}
                www.zentury.sk
              </a>
            </p>
          </div>
        </div>
        <div className="xl:col-span-6 col-span-5 lg:flex hidden items-center justify-end">
          <div className="flex items-cente">
            <img src="/clock.svg" alt="" />
            <p className="ml-3 text-white">Po až Pi&nbsp; 08:00 - 17:00</p>
          </div>
          <div className="ml-[88px] flex">
            <a href="https://www.facebook.com/zentury." target="__blank">
              {" "}
              <img src="/facebook.svg" alt="" className="cursor-pointer" />
            </a>
            <a
              href="https://www.secure.instagram.com/zentury.sk/?hl=sk"
              target="__blank"
            >
              <img
                src="/Twitter.svg"
                alt=""
                className="ml-[15px] cursor-pointer"
              />
            </a>
          </div>
        </div>
      </div>
      {scrollPixels > 150 ? (
        <div>
          <div className="lg:block hidden">
            <div className="xl:px-[56px] px-[20px] bg-[#000000]  py-[7px] fixed top-0 left-0 right-0 z-10">
              <div className="flex items-center  my-[10px] ">
                <img
                  src="/logo-10.svg"
                  className="cursor-pointer"
                  alt=""
                  onClick={() => router.push("/")}
                />
                <div className="flex xl:ml-[80px] ml-[20px] xl:mr-[80px] mr-[20px] w-[100%] justify-between">
                  <p
                    className={`${
                      pathname === "/" ? "text-[#D3A86B]" : "text-white"
                    } font-semibold cursor-pointer hover:text-[#D3A86B] `}
                    onClick={() => router.push("/")}
                  >
                    Domov
                  </p>
                  <p
                    className={`font-semibold cursor-pointer hover:text-[#D3A86B] ${
                      pathname === "/about-comany"
                        ? "text-[#D3A86B]"
                        : "text-white"
                    }`}
                    onClick={() => router.push("/about-comany")}
                  >
                    O spoločnosti
                  </p>
                  <p
                    className={`font-semibold cursor-pointer hover:text-[#D3A86B] ${
                      pathname === "/about" ? "text-[#D3A86B]" : "text-white"
                    }`}
                    onClick={() => router.push("/about")}
                  >
                    O dražbách
                  </p>

                  <p
                    className={`font-semibold cursor-pointer hover:text-[#D3A86B] ${
                      pathname === "/calendar" ? "text-[#D3A86B]" : "text-white"
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
                          className="fixed h-full w-full bg-transparent left-0 right-0 "
                          onClick={() => setShowMenu(false)}
                        />
                        <div className="w-[305px] bg-[black] p-[17px] rounded-[7px] absolute top-[65px]">
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
                    className={`font-semibold cursor-pointer hover:text-[#D3A86B] ${
                      pathname === "/contact" ? "text-[#D3A86B]" : "text-white"
                    }`}
                    onClick={() => router.push("/contact")}
                  >
                    Kontakt
                  </p>
                </div>
                {pathname === "/register-for" ||
                pathname === "/registration" ||
                pathname === "/my-account" ? (
                  <div className="flex w-[150px]">
                    <img src="/Vector (2).svg" alt="" />
                    <p
                      className={`font-semibold cursor-pointer hover:text-[#D3A86B] ml-[11px] ${
                        pathname === "/my-account"
                          ? "text-[#D3A86B]"
                          : "text-white"
                      }`}
                      onClick={() => router.push("/my-account")}
                    >
                      Môj účet
                    </p>
                  </div>
                ) : (
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
                        <span
                          className="hover:text-[#D3A86B] text-white"
                          onClick={() => signOut({ callbackUrl: "/" })}
                        >
                          Odhlásiť
                        </span>
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
      ) : (
        ""
      )}
      <Drawer drawer={drawer} toggleDrawer={toggleDrawer} />
    </div>
  );
}
