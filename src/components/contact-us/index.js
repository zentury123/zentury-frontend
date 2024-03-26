import React from "react";

export default function ContactUs() {
  return (
    <div>
      <div className="md:mt-[158px] mt-[51px]">
        <p className="uppercase gradient sm:pl-[84px] sm:text-start text-center font-semibold">
          zentury dražby
        </p>
        <p className="text-[39px] text-black sm:text-start text-center font-semibold mt-[9px] sm:pl-[84px] leading-[46px]">
          Kontaktujte nás
        </p>
        <div className=" mt-[62px] relative">
          <img
            src="/Map.png"
            alt=""
            className="md:h-[549px] h-[950px] object-cover w-[100%]"
          />
          <div className="px-[30px]">
            <div
              className="xl:top-[-150px] sm:top-[-10px] top-[100px]  xl:right-[60px] right-0 xl:left-auto left-0 xl:m-0 m-auto  max-w-[805px] xl:w-[100%] w-[90%] border border-[#C7D5E1]  rounded-[39px] sm:px-[30px] px-[15px] pt-[40px] pb-[17px] bg-white text-black absolute"
              style={{ boxShadow: "0px 0px 30px 0px #AEC0CECC" }}
            >
              <div className="grid md:grid-cols-2 md:gap-5">
                <div>
                  <p className="text-[18px] font-semibold">Meno</p>
                  <input
                    type="text"
                    placeholder="Vaše meno"
                    className="w-[100%] h-[59px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-3"
                  />
                </div>
                <div className="md:mt-0 mt-[20px]">
                  <p className="text-[18px] font-semibold">Priezvisko</p>
                  <input
                    type="text"
                    placeholder="Vaše priezvisko"
                    className="w-[100%] h-[59px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-3"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-5 mt-[33px]">
                <div>
                  <p className="text-[18px] font-semibold">Email</p>
                  <input
                    type="text"
                    placeholder="váš@email.com"
                    className="w-[100%] h-[59px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-3"
                  />
                </div>
                <div className="md:mt-0 mt-[20px]">
                  <p className="text-[18px] font-semibold">Telefón</p>
                  <input
                    type="text"
                    placeholder="+421"
                    className="w-[100%] h-[59px] rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-3"
                  />
                </div>
              </div>
              <div className="mt-[33px]">
                <p className="text-[18px] font-semibold">Správa</p>
                <textarea
                  className="rounded-[18px] border border-[#C7D5E1] indent-[30px] mt-3 w-[100%] h-[129px] pt-[20px]"
                  style={{ resize: "none" }}
                  placeholder="Tu prosím napíšte poznámku..."
                />
              </div>
              <div className="w-[108px] h-[46px] bg-[#010101] rounded-[18px] flex justify-center items-center text-[14px] mt-[17px] cursor-pointer font-semibold text-white">
                Odoslať
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
