import React, { useState, useEffect } from "react";
//
import Map from "./components/Map";
import Loader from "./components/Loader";
import {Event} from './models'


function App() {
  const [eventData, setEventData] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };
    fetchEvents();
  }, []);
  return <div>{!loading ? <Map eventData={eventData} /> : <Loader />}</div>;
}

export default App;
