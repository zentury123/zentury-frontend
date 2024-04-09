"use client";
import React, { useState } from "react";
import useDirectSaleContact from "@/customHooks/useDirectSaleContact";
import { Toast } from "@/components/Toaster";

const DirectSaleModal = ({ propertyId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [formData, setFormData] = React.useState({
    id: propertyId,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const { loading, contactDirectSale } = useDirectSaleContact();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contactDirectSale(formData);
      setIsOpen(false);
    } catch (error) {
      setIsOpen(false);
    }
  };

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleOpen(params) {
    if(session){
      setIsOpen(true)
    }else{
      Toast.fire({ icon: "error", title: "Pre registráciu na dražbu sa musíte prihlásiť" });
    }
  
  }
  return (
    <>
      <button
        onClick={handleOpen}
        className="text-[white] bg-gradient-to-b from-[#D3A86B] to-[#A3784A] cursor-pointer w-[308px] h-[44px] rounded-full flex justify-center items-center  mt-[30px]"
      >
        Kontaktujte nás
      </button>
      {isOpen && (
        <div className="fixed inset-0 top-0 flex items-center justify-center z-50 ">
          <div className="fixed inset-0 bg-black opacity-50 "></div>
          <div
            className=" relative max-w-[603px] w-[100%] border border-[#C7D5E1] lg:mt-0 mt-10  rounded-[39px] px-[30px] pt-[40px] pb-[17px] bg-white text-black "
          // style={{ boxShadow: "0px 0px 30px 0px #AEC0CECC" }}
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
            <form onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                <div>
                  <p className="text-[18px] font-semibold">Meno</p>
                  <input
                    onChange={handleChange}
                    required={true}
                    type="text"
                    name="firstName"
                    placeholder="Vaše meno"
                    className="w-[100%] h-[44px] rounded-[12px] border border-[#C7D5E1] indent-[30px] mt-3"
                  />
                </div>
                <div>
                  <p className="text-[18px] font-semibold">Priezvisko</p>
                  <input
                    name="lastName"
                    onChange={handleChange}
                    required={true}
                    type="text"
                    placeholder="Vaše priezvisko"
                    className="w-[100%] h-[44px] rounded-[12px] border border-[#C7D5E1] indent-[30px] mt-3"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-[33px]">
                <div>
                  <p className="text-[18px] font-semibold">Email</p>
                  <input
                    name="email"
                    onChange={handleChange}
                    required={true}
                    type="email"
                    placeholder="váš@email.com"
                    className="w-[100%] h-[44px] rounded-[12px] border border-[#C7D5E1] indent-[30px] mt-3"
                  />
                </div>
                <div>
                  <p className="text-[18px] font-semibold">Telefón</p>
                  <input
                    name="phone"
                    type="text"
                    onChange={handleChange}
                    required={true}
                    placeholder="+421"
                    className="w-[100%] h-[44px] rounded-[12px] border border-[#C7D5E1] indent-[30px] mt-3"
                  />
                </div>
              </div>
              <div className="mt-[24px]">
                <p className="text-[18px] font-semibold">Správa</p>
                <textarea
                  name="message"
                  onChange={handleChange}
                  required={true}
                  className="rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-3 w-[100%] h-[129px] pt-[20px]"
                  style={{ resize: "none" }}
                  placeholder="Tu prosím napíšte poznámku..."
                />
              </div>
              <button
                type="submit"
                className="w-[108px] h-[46px] bg-[#010101] rounded-[18px] flex justify-center items-center text-[14px] mt-[17px] cursor-pointer font-semibold text-white"
              >
                {loading ? "odosielanie" : "poslať "}
              </button>
            </form>
          </div>
        </div>
      )}

    </>
  );
};

export default DirectSaleModal;
