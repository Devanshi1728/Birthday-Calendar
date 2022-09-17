import "./App.css";
import Calendar from "./components/Calendar";
import UserForm from "./components/UserForm";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const existingEvents = JSON.parse(localStorage.getItem("events"));
    if (existingEvents) setEvents(existingEvents);
  }, []);

  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return (
    <div className="App">
      <h1>Calendar </h1>
      <UserForm setEvents={setEvents} />
      <Calendar events={events} />
    </div>
  );
}

export default App;
