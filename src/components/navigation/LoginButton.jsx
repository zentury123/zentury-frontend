"use client"
import React, { useState } from 'react'
import Login from "../loginModal";
import Register from "../registerModal";
import ResetPassword from "../resetPassword";
import VerificationCode from "../verificationCode";
import UpdatePassword from "../password";
function LoginButton() {


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
    <>
        <button
                      onClick={() => openModal()}

          className="text-[white] bg-gradient-to-b from-[#D3A86B] to-[#A3784A] cursor-pointer w-[308px] h-[44px] rounded-full flex justify-center items-center  mt-[30px]"
        >
          Prihlásenie
        </button>
    
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
    </>

  )
}

export default LoginButton