"use client";
import React, { useEffect, useState } from "react";

const time = [
  "08:00 AM",
  "08:30 AM",
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
  "09:00 PM",
  "09:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
];

function getWeek(fromDate) {
  var sunday = new Date(
      fromDate.setDate(fromDate.getDate() - fromDate.getDay())
    ),
    result = [new Date(sunday)];
  while (sunday.setDate(sunday.getDate() + 1) && sunday.getDay() !== 0) {
    result.push(new Date(sunday));
  }
  return result;
}

const DayTasks = (props) => {
  const [checked, setChecked] = useState(
    JSON.parse(localStorage.getItem("checked")) || []
  );

  const week = getWeek(props.currentDate).filter(
    (day) => day.getDay() > 0 && day.getDay() < 6
  );

  useEffect(() => {
    localStorage.setItem("checked", JSON.stringify(checked));
  }, [checked]);

  function handleChecked(e, day, time) {
    if (e.target.checked === true) {
      setChecked([
        ...checked,
        {
          Id: JSON.stringify(day.getDate()) + JSON.stringify(time),
          Date: day,
          Time: time,
          isChecked: true,
        },
      ]);
    } else {
      setChecked(
        checked.filter(
          (item) =>
            item.Id !== JSON.stringify(day.getDate()) + JSON.stringify(time)
        )
      );
    }
  }
  return (
    <div className=" h-full flex flex-col justify-between gap-4">
      {week.map((day, i) => (
        <div key={i} className="flex">
          <div className="bg-gray-200 w-14 text-center">
            <p className="text-rose-600 text-xl">
              {new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
                day
              )}
            </p>
            <p>
              {new Intl.DateTimeFormat("en-US", {
                month: "numeric",
                day: "numeric",
              }).format(day)}
            </p>
          </div>
          <div className=" flex flex-wrap w-[80%] ml-5">
            {time.map((time, i) => (
              <div key={i} className="w-24">
                <input
                  type="checkbox"
                  checked={
                    checked.filter(
                      (item) =>
                        item.Id ===
                        JSON.stringify(day.getDate()) + JSON.stringify(time)
                    ).length > 0
                  }
                  onChange={(e) => handleChecked(e, day, time)}
                  className="checked:bg-amber-400"
                />
                <span className="text-sm mx-2">{time}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DayTasks;
