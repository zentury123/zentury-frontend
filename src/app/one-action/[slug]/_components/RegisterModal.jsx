"use client";
import React, { useRef, useState } from "react";
import useRegisterForAuction from "@/customHooks/useRegisterForAuction";
import { RadioGroup } from "@mui/material";
import { useSession } from "next-auth/react";
import { Toast } from "@/components/Toaster";
const RegisterModal = ({ id }) => {

  const [isOpen, setIsOpen] = useState(false);
  const { loading, registerForAuction } = useRegisterForAuction();
  const formRef = useRef(null);
  const [permission, setPermission] = useState(false);
  const { data: session } = useSession();
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
      city,
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
        city: city.value,
        representative: representative.value,
        street: street.value,
        houseNumber: houseNumber.value,
      },
      id
    );
    setIsOpen(false);
  };

  function handleOpen() {
    if (session) {
      setIsOpen(true)
    } else {
      Toast.fire({ icon: "error", title: "Pre registráciu na dražbu sa musíte prihlásiť" });
    }
  }
  return (
    <>
      <button
        onClick={handleOpen}
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
                    required={true}
                    name="typeOfPerson"
                    defaultValue="Právnická osoba"
                    placeholder="Typ osoby"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] bg-transparent indent-[30px]"
                  >
                    <option value={"Právnická osoba"}>Právnická osoba</option>
                    <option value={"Fizická osoba"}>Fizická osoba</option>

                  </select>
                  <input
                    type="text"
                    name="ico"
                    required={true}
                    placeholder="IČO"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
                  />
                  <p className="text-[#44525E] text-[10px] mt-3">
                    Napríklad: 46141341
                  </p>
                  <input
                    type="text"
                    name="firstName"
                    required={true}
                    placeholder="Meno"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[15px]"
                  />
                  <input
                    type="text"
                    name="street"
                    required={true}
                    placeholder="Ulica"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
                  />
                  <input
                    type="text"
                    name="postalCode"
                    required={true}
                    placeholder="PSČ"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
                  />
                  <input
                    type="text"
                    name="email"
                    required={true}
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
                         required={true}
                          type="radio"
                          className=""
                          value='V hotovosti'
                          name="security"
                          id="security"
                        />
                        <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                          V hotovosti
                        </p>
                      </div>
                      <div className="flex mt-2">
                        <input
                         required={true}
                          type="radio"
                          className=""
                          name="security"
                          value={" Na účet"}
                          id="security"
                        />
                        <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                          Na účet
                        </p>
                      </div>
                      <div className="flex mt-2">
                        <input
                         required={true}
                          type="radio"
                          className=""
                          value={" Banková záruka"}
                          name="security"
                          id="security"
                        />
                        <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                          Banková záruka
                        </p>
                      </div>
                      <div className="flex mt-2">
                        <input
                         required={true}
                          value={"Notárska úschova"}
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
                    required={true}
                    placeholder="Názov spoločnosti"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px]"
                  />
                  <p className="text-[#44525E] text-[10px] mt-3 ">
                    Napríklad: Aukčná spoločnosť
                  </p>
                  <select
                   required={true}
                    type="text"
                    name="representative"
                    defaultValue="Štatutárny zástupca"
                    placeholder="Zastúpená"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] bg-transparent indent-[30px] mt-[15px]"
                  >
                    <option value={"Štatutárny zástupca"}>Štatutárny zástupca</option>
                    <option value={"Prokurista"}>Prokurista</option>
                    <option value={"Splnomocnenie"}>Splnomocnenie</option>

                  </select>
                  <input
                   required={true}
                    type="text"
                    name="lastName"
                    placeholder="Priezvisko"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
                  />

                  <input
                   required={true}
                    type="text"
                    name={"houseNumber"}
                    placeholder="Číslo ulice"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
                  />
                  <input
                   required={true}
                    type="text"
                    placeholder="Mesto"
                    name="city"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
                  />
                  <input
                   required={true}
                    name="telephone"
                    type="text"
                    placeholder="Telefón"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
                  />
                  <input
                   required={true}
                    type="text"
                    name="ownership"
                    placeholder="Vlastníctvo"
                    className="w-full h-[44px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-[38px]"
                  />
                  <div className="sm:hidden flex   mt-[48px]">
                    <p className="text-[#44525E] text-[12px]">
                      Zábezpeka zložená:
                    </p>
                    <RadioGroup defaultValue={"V hotovosti"} className="ml-[22px]">
                      <div className="flex">
                        <input type="radio"  required={true} className="" value='V hotovosti' name="security" />
                        <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                          V hotovosti
                        </p>
                      </div>
                      <div className="flex mt-2">
                        <input type="radio"  required={true} className="" value='Na účet' name="security" />
                        <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                          Na účet
                        </p>
                      </div>
                      <div className="flex mt-2">
                        <input type="radio"  required={true} className="" value='Banková záruka' name="security" />
                        <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                          Banková záruka
                        </p>
                      </div>
                      <div className="flex mt-2">
                        <input type="radio"  required={true} className="" value='Notárska úschova' name="security" />
                        <p className="ml-[12px] text-[12px] font-semibold text-[#44525E]">
                          Notárska úschova
                        </p>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="flex mt-[75px]">
                    <input
                     required={true}
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
