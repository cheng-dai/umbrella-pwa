"use client";

import { CurrentWeatherResponse, Weather } from "@/app/lib/definitions";
import { useState } from "react";

interface Location {
  latitude: number;
  longitude: number;
}

export default function GetWeather({ mode }: { mode: string }) {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<Location | undefined>();
  const [weatherObj, setWeatherObj] = useState<CurrentWeatherResponse>();

  async function handleFetch() {
    console.log(`start fetch...`);
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        console.log(latitude, longitude);
        setLocation({ latitude, longitude });
      },
      (e) => console.log("location error is", e)
    );

    const result = await fetch(`/api`, {
      method: "POST",
      body: JSON.stringify({ ...location, mode: mode }),
    });
    const returned = await result.json();
    console.log(`fetched weather is ${JSON.stringify(returned.weather)}`);
    setLoading(false);
    setWeatherObj(returned);
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <button onClick={handleFetch}>Fetch</button>
        </div>
      )}
      {weatherObj ? <div>{weatherObj?.weather[0].main}</div> : null}
    </div>
  );
}
