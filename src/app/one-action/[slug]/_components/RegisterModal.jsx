"use client";
import React, { useRef, useState } from "react";
import useRegisterForAuction from "@/customHooks/useRegisterForAuction";
const RegisterModal = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { loading, registerForAuction } = useRegisterForAuction();
  const formRef = useRef(null);
  const [permission, setPermission] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      postalCode,
      email,
      telephone,
      ownership,
      typeOfPerson,
      firstName,
      lastName,
      security,
      companyName,
      ico,
      representative,
      street,
      houseNumber,
    } = formRef.current;

    await registerForAuction(
      {
        postalCode: postalCode.value,
        email: email.value,
        telephone: telephone.value,
        ownership: ownership.value,
        typeOfPerson: typeOfPerson.value,
        firstName: firstName.value,
        lastName: lastName.value,
        security: security.value,
        companyName: companyName.value,
        ico: ico.value,
        representative: representative.value,
        street: street.value,
        houseNumber: houseNumber.value,
      },
      id
    );
    setIsOpen(false);
  };
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
          <div className="fixed inset-0 bg-black opacity-50 "></div>

          <div
            className=" relative h-[80vh] overflow-y-auto max-w-[603px] w-full border border-[#C7D5E1] lg:mt-0 mt-10  rounded-[39px] px-[30px] pt-[40px] pb-[17px] bg-white text-black "

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
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 grid-cols-1 mt-[29px] gap-[30px]">
                <div>
                  <select
                    type="text"
                    required
                    name="typeOfPerson"
                    placeholder="Typ osoby"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] bg-transparent indent-[30px]"
                  >
                    <option value={"Právnická osoba"}>Právnická osoba</option>
                    <option value={"Fizická osoba"}>Fizická osoba</option>

                  </select>
                  <input
                    type="text"
                    name="ico"
                    required
                    placeholder="IČO"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
                  />
                  <p className="text-[#44525E] text-[10px] mt-3">
                    Napríklad: 46141341
                  </p>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="Meno"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[15px]"
                  />
                  <input
                    type="text"
                    name="street"
                    required
                    placeholder="Ulica"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
                  />
                  <input
                    type="text"
                    name="postalCode"
                    required
                    placeholder="PSČ"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
                  />
                  <input
                    type="text"
                    name="email"
                    required
                    placeholder="E-mail"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
                  />
                  <div className="sm:flex hidden  mt-[48px]">
                    <p className="text-[#44525E] text-[12px]">
                      Zábezpeka zložená:
                    </p>
                    <div className="ml-[22px]">
                      <div className="flex">
                        <input
                          type="radio"
                          className=""
                          value={"SecurityType1"}
                          name="security"
                          id="security"
                        />
                        <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                          V hotovosti
                        </p>
                      </div>
                      <div className="flex mt-2">
                        <input
                          type="radio"
                          className=""
                          name="security"
                          value={"SecurityType2"}
                          id="security"
                        />
                        <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                          Na účet
                        </p>
                      </div>
                      <div className="flex mt-2">
                        <input
                          type="radio"
                          className=""
                          value={"SecurityType3"}
                          name="security"
                          id="security"
                        />
                        <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                          Banková záruka
                        </p>
                      </div>
                      <div className="flex mt-2">
                        <input
                          value={"SecurityType4"}
                          type="radio"
                          className=""
                          name="security"
                          id="security"
                        />
                        <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                          Notárska úschova
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <input
                    name="companyName"
                    type="text"
                    required
                    placeholder="Názov spoločnosti"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px]"
                  />
                  <p className="text-[#44525E] text-[10px] mt-3 ">
                    Napríklad: Aukčná spoločnosť
                  </p>
                  <select
                    type="text"
                    name="representative"
                    placeholder="Zastúpená"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] bg-transparent indent-[30px] mt-[15px]"
                  >
                    <option value={"Štatutárny zástupca"}>Štatutárny zástupca</option>
                    <option value={"Prokurista"}>Prokurista</option>
                    <option value={"Splnomocnenie"}>Splnomocnenie</option>

                  </select>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Priezvisko"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
                  />

                  <input
                    type="text"
                    name={"houseNumber"}
                    placeholder="Číslo ulice"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
                  />
                  <input
                    type="text"
                    placeholder="Mesto"
                    name="city"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
                  />
                  <input
                    name="telephone"
                    type="text"
                    placeholder="Telefón"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
                  />
                  <input
                    type="text"
                    placeholder="Vlastníctvo"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
                  />
                  <div className="sm:hidden flex   mt-[48px]">
                    <p className="text-[#44525E] text-[12px]">
                      Zábezpeka zložená:
                    </p>
                    <div className="ml-[22px]">
                      <div className="flex">
                        <input type="checkbox" className="" name="ownership" />
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
                    <input
                      type="checkbox"
                      id="custom-checkbox"
                      onChange={(e) => setPermission(e.target.checked)}
                    />
                    <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                      Súhlasím so spracovaním osobných údajov
                    </p>
                  </div>
                </div>
              </div>
              <div className=" w-full flex justify-center">
                <button
                  className={` text-white rounded-lg p-3 w-full mt-2 ${permission ? "bg-black" : "bg-gray-300"
                    }`}
                  disabled={!permission}
                >
                  {loading ? "Registrácia" : "Registrovať"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterModal;
