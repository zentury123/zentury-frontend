import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import Login from "../loginModal";
import Register from "../registerModal";
import ResetPassword from "../resetPassword";
import VerificationCode from "../verificationCode";
import UpdatePassword from "../password";
import { useSession, signOut } from "next-auth/react";

const Drawer = ({ toggleDrawer, drawer, loginOpen }) => {
  const pathname = usePathname();
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



  return (
    <div className="flex">
      <button
        className="fixed inset-0 bg-black opacity-50 cursor-default z-10 w-full h-full"
        onClick={toggleDrawer}
        style={{ display: drawer ? "block" : "none" }}
      ></button>
      <div
        className={`fixed inset-y-0 left-0 z-20 w-full h-[100vh] overflow-scroll bg-black shadow-lg ${drawer ? "block" : "hidden"
          }`}
      >
        <div className="p-4">
          <div className="flex justify-end mt-[49px]">
            <p
              className={`${pathname === "/" ? "!text-[#D3A86B]" : "text-white"
                } font-semibold cursor-pointer `}
              onClick={() => router.push("/")}
            >
              Domov
            </p>
          </div>
          <div className="flex justify-end mt-[23px]">
            <p
              className={`font-semibold cursor-pointer ${pathname === "/about-comany" ? "!text-[#D3A86B]" : "text-white"
                }`}
              onClick={() => router.push("/about-comany")}
            >
              O spoločnosti
            </p>
          </div>
          <div className="flex justify-end mt-[23px]">
            <p
              className={`font-semibold cursor-pointer ${pathname === "/about" ? "!text-[#D3A86B]" : "text-white"
                }`}
              onClick={() => router.push("/about")}
            >
              O dražbách
            </p>
          </div>
          <div
            onClick={() => router.push("/calendar")}
            className={`font-semibold ${pathname === "/calendar" ? "!text-[#D3A86B]" : "text-white"
              }  flex justify-end mt-[23px] text-white`}
          >
            <p>Dražobný kalendár</p>
          </div>

          <div className="font-semibold  flex justify-end mt-[23px] text-white">
            <p>Služby</p>
          </div>
          <div className="flex justify-end mt-[23px] ">
            <p
              className={`font-semibold cursor-pointer ${pathname === "/contact" ? "!text-[#D3A86B]" : "text-white"
                }`}
              onClick={() => router.push("/contact")}
            >
              Kontakt
            </p>
          </div>
          {/* <div className="flex justify-end mt-6">
            <div
              onClick={() => {
                setIsOpen(true);
                toggleDrawer();
              }}
              className="w-[106px] h-[34px] text-white cursor-pointer flex justify-center items-center font-semibold bg-gradient-to-b from-[#D3A86B] to-[#A3784A] rounded-[10px]"
            >
              Prihlásiť sa
            </div>
          </div>
          <div className="flex justify-end mt-[15px]">
            <div
              onClick={() => {
                setIsRegister(true);
                toggleDrawer();
              }}
              className="w-[106px] h-[34px] text-white cursor-pointer flex justify-center items-center font-semibold bg-gradient-to-b from-[#D3A86B] to-[#A3784A] rounded-[10px]"
            >
              Registrácia
            </div>
          </div> */}


          {!session?.user?.accessToken ? (
            <div className="flex justify-end mt-[15px]">
              <div
                onClick={() => {
                  setIsOpen(true);
                  toggleDrawer();
                }}
                className="w-[106px] h-[34px] text-white cursor-pointer flex justify-center items-center font-semibold bg-gradient-to-b from-[#D3A86B] to-[#A3784A] rounded-[10px]"
              >
                Prihlásiť sa
              </div>
            </div>
          ) : (
            <div className="flex gap-4 items-end flex-col mt-[15px]">
                      <div className="flex ">
                <img src="/Vector (2).svg" alt="" />
                <p
                  className={`font-semibold cursor-pointer hover:text-[#D3A86B] ml-[11px] ${pathname === "/my-account" ? "text-[#D3A86B]" : "text-white"
                    }`}
                  onClick={() => router.push("/my-account")}
                >
                  Môj účet
                </p>
              </div>
              <span
                className="w-[106px] h-[34px] text-white cursor-pointer flex justify-center items-center font-semibold bg-gradient-to-b from-[#D3A86B] to-[#A3784A] rounded-[10px]"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Odhlásiť
              </span>

      
            </div>
          )}
          {!session?.user?.accessToken && (
            <div className="flex justify-end mt-[15px]">
              <div
                onClick={() => {
                  setIsRegister(true);
                  toggleDrawer();
                }}
                className="w-[106px] h-[34px] text-white cursor-pointer flex justify-center items-center font-semibold bg-gradient-to-b from-[#D3A86B] to-[#A3784A] rounded-[10px]"
              >
                Registrácia
              </div>
            </div>
          )}
          <div className="flex justify-end mt-[74px]">
            <img src="/location1.svg" alt="" />
            <p className="ml-3 text-white">Piaristická 1, 949 01 Nitra</p>
          </div>
          <div className="flex justify-end mt-[27px]">
            <img src="/clock.svg" alt="" />
            <p className="ml-3 text-white">Po až Pi&nbsp; 08:00 - 17:00</p>
          </div>
          <div className="flex mt-[27px] justify-end">
            <img src="/Vector.svg" alt="" />
            <p className="ml-3 text-white">
              <a href="tel:+421 37/381 12 73"> +421 37/381 12 73</a>
            </p>
          </div>
          <div className="flex justify-end mt-[27px]">
            <img src="/world.svg" alt="" />
            <p className="ml-3 text-white">
              <a
                href="https://zentury.sk"
                target="__blank"
                className="underline"
              >
                {" "}
                www.zentury.sk
              </a>
            </p>
          </div>
          <div className="ml-[88px] flex justify-end mt-[27px]">
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
};

export default Drawer;
