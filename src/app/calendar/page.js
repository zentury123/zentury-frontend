"use client";
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import TopHeader from "@/components/topHeader/page";
import Navigation from "@/components/navigation/page";
import ContactUs from "@/components/contact-us";
import Footer from "@/components/footer";
import { Views } from "react-big-calendar";
import Loader from "@/components/loader";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

 const CalendarPage = () => {
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1400);
  }, []);
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-[white] min-h-[100vh]">

      <div className="lg:mt-[200px] mt-[90px] xl:px-[75px] px-[24px]">
        <p className="text-black font-semibold lg:text-[40px] text-[25px]">
          Dražobný kalendár
        </p>
        <div className="overflow-scroll">
          <div
            className="!text-white lg:mt-[52px] mt-[20px] bg-gradient-to-b from-[#D3A86B] to-[#A3784A] min-w-[1200px]"
            style={{ height: 500 }}
          >
            <Calendar
              localizer={localizer}
              events={[
                {
                  title: "Meeting",
                  start: new Date(),
                  end: new Date(
                    new Date().setMinutes(new Date().getMinutes() + 30)
                  ),
                },
              ]}
              // views={[Views.MONTH, Views.WEEK, Views.DAY]}
              defaultView={view}
              view={view} // Include the view prop
              date={date} // Include the date prop
              onView={(view) => setView(view)}
              onNavigate={(date) => {
                setDate(new Date(date));
              }}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default CalendarPage;
