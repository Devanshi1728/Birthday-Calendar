import React, { useMemo } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarForm = ({ events }) => {
  const eventList = useMemo(() => {
    return events.map((user) => ({
      start: user.dob,
      end: user.dob,
      title: user.firstName + " " + user.lastName,
    }));
  }, [events]);

  return (
    <div className="calendar-wrapper">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={eventList}
      />
    </div>
  );
};

export default CalendarForm;
