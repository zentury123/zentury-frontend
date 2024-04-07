"use client";
import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Views } from "react-big-calendar";
import { useRouter } from "next/navigation";



moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const CalendarComp = ({ auctions }) => {
  const [view, setView] = useState(Views.MONTH);
  const [date, setDate] = useState(new Date());

  const router = useRouter()

  function handleSelectedEvent(event) {

    router.push(`/one-action/${event.slug}`)
  }
  return (

    <Calendar
      localizer={localizer}
      events={auctions}
      onSelectEvent={(event) => handleSelectedEvent(event)}
      // views={[Views.MONTH, Views.WEEK, Views.DAY]}
      defaultView={view}
      view={view} // Include the view prop
      date={date} // Include the date prop
      onView={(view) => setView(view)}
      onNavigate={(date) => {
        setDate(new Date(date));
      }}
    />

  );
};

export default CalendarComp;
