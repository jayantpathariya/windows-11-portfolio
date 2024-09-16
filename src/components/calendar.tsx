import { cn } from "@/lib/utils";
import {
  addDays,
  addMonths,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from "date-fns";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">
          {format(currentDate, "MMMM yyyy")}
        </h2>
        <div className="space-x-4">
          <button
            onClick={() => setCurrentDate(subMonths(currentDate, 1))}
            className="p-2 hover:bg-gray-700 rounded-md cursor-auto"
          >
            <ChevronUp className="size-6 text-gray-300" />
          </button>
          <button
            onClick={() => setCurrentDate(addMonths(currentDate, 1))}
            className="p-2 hover:bg-gray-700 rounded-md cursor-auto"
          >
            <ChevronDown className="size-6 text-gray-300" />
          </button>
        </div>
      </div>
    );
  };

  const renderDays = () => {
    const dateFormat = "EEEEEE";
    const days = [];
    let startDate = startOfWeek(currentDate);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center font-semibold pb-4 pt-6">
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = addDays(endOfWeek(monthEnd), 7);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            key={day.toString()}
            className={cn(
              "p-4 text-center rounded-full hover:bg-gray-700 cursor-auto",
              !isSameMonth(day, monthStart)
                ? "text-gray-500 "
                : isSameDay(day, new Date())
                ? "bg-sky-500 text-black hover:bg-sky-600"
                : "text-white"
            )}
            onClick={() => console.log(cloneDay)}
          >
            {formattedDate}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day.toString()} className="grid grid-cols-7 gap-2">
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div className="text-white w-full">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};
