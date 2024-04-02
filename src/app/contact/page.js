"use client";

import Footer from "@/components/footer";
import Loader from "@/components/loader";
import Navigation from "@/components/navigation/page";
import TopHeader from "@/components/topHeader/page";
import React, { useEffect, useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1400);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <div className="min-h-[100vh] bg-white">

      <div className="lg:mt-[187px] mt-[90px] lg:px-[105px] px-[17px]">
        <p className="lg:text-[40px] text-[25px] text-black font-semibold ">
          Kontakt
        </p>
        <p className="text-[12px] mt-[7px] text-black">
          Tu nájdete všetky potrebné informácie
        </p>
        <img
          src="/Map2.png"
          alt=""
          className="w-[100%] md:mt-[56px] mt-[30px]"
        />
        <div className="lg:flex justify-between sm:mt-[105px] mt-[40px]">
          <div>
            <p className="gradient uppercase font-semibold text-[12px]">
              Kontaktujte nás
            </p>
            <p className="lg:text-[29px] text-[22px] font-semibold mt-[7px] text-black">
              Kontaktujte nás a zistite viac.
            </p>
            <div className="sm:w-[432px] w-[100%]  sm:flex justify-between mt-[42px]">
              <div className="flex ">
                <div className="w-[60px] h-[60px] rounded-full border border-[#C7D5E1] flex justify-center items-center">
                  <img src="/world1.svg" />
                </div>
                <div className="ml-[12px]">
                  <p className="text-[18px] font-semibold text-black">
                    Viac o nás
                  </p>
                  <a href="https://www.zentury.sk" target="__blank">
                    <p className="text-[#44525E] underline">www.zentury.sk</p>
                  </a>
                </div>
              </div>
              <div className="flex sm:mt-0 mt-5">
                <div className="w-[60px] h-[60px] rounded-full border border-[#C7D5E1] flex justify-center items-center">
                  <img src="/phone.svg" />
                </div>
                <div className="ml-[12px]">
                  <p className="text-[18px] font-semibold text-black">
                    Telefón
                  </p>
                  <a href="tel:+421 37/381 12 73">
                    <p className="text-[#44525E]">+421 37/381 12 73</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="sm:w-[432px] w-[100%]  sm:flex justify-between sm:mt-[42px] mt-5">
              <div className="flex ">
                <div className="w-[60px] h-[60px] rounded-full border border-[#C7D5E1] flex justify-center items-center">
                  <img src="/location3.svg" />
                </div>
                <div className="ml-[12px]">
                  <p className="text-[18px] font-semibold text-black">Adresa</p>
                  <p className="text-[#44525E]">Piaristická 1, Nitra</p>
                </div>
              </div>
              <div className="flex sm:mt-0 mt-5 ">
                <div className="w-[60px] h-[60px] rounded-full border border-[#C7D5E1] flex justify-center items-center">
                  <img src="/me.svg" />
                </div>
                <div className="ml-[12px]">
                  <p className="text-[18px] font-semibold text-black">Email</p>
                  <a href="mailto:drazby@zentury.sk">
                    <p className="text-[#44525E]">drazby@zentury.sk</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className=" max-w-[603px] w-[100%] border border-[#C7D5E1] lg:mt-0 mt-10  rounded-[39px] px-[30px] pt-[40px] pb-[17px] bg-white text-black "
            style={{ boxShadow: "0px 0px 30px 0px #AEC0CECC" }}
          >
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div>
                <p className="text-[18px] font-semibold">Meno</p>
                <input
                  type="text"
                  placeholder="Vaše meno"
                  className="w-[100%] h-[44px] rounded-[12px] border border-[#C7D5E1] indent-[30px] mt-3"
                />
              </div>
              <div>
                <p className="text-[18px] font-semibold">Priezvisko</p>
                <input
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
                  type="text"
                  placeholder="váš@email.com"
                  className="w-[100%] h-[44px] rounded-[12px] border border-[#C7D5E1] indent-[30px] mt-3"
                />
              </div>
              <div>
                <p className="text-[18px] font-semibold">Telefón</p>
                <input
                  type="text"
                  placeholder="+421"
                  className="w-[100%] h-[44px] rounded-[12px] border border-[#C7D5E1] indent-[30px] mt-3"
                />
              </div>
            </div>
            <div className="mt-[24px]">
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
  );
}

// "use client";
// import React, { useState } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import TopHeader from "@/components/topHeader/page";
// import Navigation from "@/components/navigation/page";
// import ContactUs from "@/components/contact-us";
// import Footer from "@/components/footer";
// import { Views } from "react-big-calendar";

// moment.locale("en-GB");
// const localizer = momentLocalizer(moment);

// const events = [
//   // Define your events data here
// ];

// export const CalendarPage = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [modalEvents, setModalEvents] = useState([]);
//   const [currentDate, setCurrentDate] = useState(new Date(2015, 3, 1));
//   const handleShowMore = (events, date) => {
//     setShowModal(true);
//     setModalEvents(events);
//   };
//   const handleNavigate = (newDate, view) => {
//     console.log("New Date:", newDate);
//     setCurrentDate(newDate); // Update the current date
//   };
//   const [view, setView] = useState(Views.WEEK);
//   const [date, setDate] = useState(new Date());

//   return (
//     <div className="bg-[white] min-h-[100vh]">
//       <TopHeader />
//       <Navigation />
//       <div className="lg:mt-[200px] mt-[90px] xl:px-[75px] px-[24px]">
//         <p className="text-black font-semibold lg:text-[40px] text-[25px]">
//           Dražobný kalendár
//         </p>
//         <div className="overflow-scroll">
//           <div
//             className="lg:mt-[52px] mt-[20px] bg-gradient-to-b from-[#D3A86B] to-[#A3784A] min-w-[1200px]"
//             style={{ height: 500 }}
//           >
//             <Calendar
//               localizer={localizer}
//               events={events}
//               views={[Views.MONTH, Views.WEEK, Views.DAY]}
//               defaultView={view}
//               view={view} // Include the view prop
//               date={date} // Include the date prop
//               onView={(view) => setView(view)}
//               onNavigate={(date) => {
//                 setDate(new Date(date));
//               }}
//             />
//           </div>
//         </div>
//       </div>
//       <div>
//         <ContactUs />
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default CalendarPage;
