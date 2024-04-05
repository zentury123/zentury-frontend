"use client";
import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Views } from "react-big-calendar";




 const CalendarPage = () => {

  moment.locale("en-GB");
const localizer = momentLocalizer(moment);
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());


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
