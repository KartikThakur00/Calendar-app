"use client";
// import Nav from "@/components/Nav";
import TimezoneSelect from "react-timezone-select";
import { useState } from "react";

export default function Home() {
  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const [currentDate, setCurrentDate] = useState(new Date());

  const options = {
    timezone: timezone,
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  function handleTimeZone(value) {
    console.log(value);
    setCurrentDate(
      new Date(
        currentDate.setDate(currentDate.getDate() + value * 60 * 60 * 1000)
      )
    );
  }

  console.log(currentDate.getUTCMinutes());
  console.log(timezone.value);

  return (
    <main className="p-5">

      {/* navbar */}
      <nav className="flex justify-between">
        <div className="flex gap-14">
          <button
            className="text-blue-500"
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.setDate(currentDate.getDate() - 7))
              )
            }
          >
            <span>&#129168;</span> Previous Week
          </button>
          <p>
            {currentDate.toLocaleDateString(
              "en",
              options
            )}
          </p>
          <p>{currentDate.toLocaleDateString(
              "en",{
                timeZone:timezone,
                hour: "numeric",
              }
            )}</p>
        </div>

        <button
          className="text-blue-500"
          onClick={() =>
            setCurrentDate(
              new Date(currentDate.setDate(currentDate.getDate() + 7))
            )
          }
        >
          Next Week <span>&#129170;</span>
        </button>
      </nav>

      {/* timezone select */}
      <div className="p-4">
        <p>TimeZone :</p>
        <TimezoneSelect
          value={timezone}
          onChange={setTimezone}
          className="w-full"
          displayValue="UTC"
        />
      </div>
      {/* <TimeZone currentDate={currentDate} setTimezone={handleTimeZone} /> */}
    </main>
  );
}
