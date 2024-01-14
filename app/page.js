"use client";
import TimezoneSelect from "react-timezone-select";
import { useState } from "react";
import DayTasks from "@/components/DayTasks";
import Download from "@/components/Download";

export default function Home() {
  const [timezone, setTimezone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  const [currentDate, setCurrentDate] = useState(new Date());

  const topDate = {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: timezone.value,
  };

  return (
    <main className="p-5 h-full">
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
          <p>{new Intl.DateTimeFormat("en-US", topDate).format(currentDate)}</p>
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

      {/* checklist */}
      <DayTasks currentDate={currentDate} />

      {/* download button */}
      <Download />
    </main>
  );
}
