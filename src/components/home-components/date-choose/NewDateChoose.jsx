"use client"

import { useState, useRef, useEffect } from "react";

export default function NewDateChoose() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const datepickerContainerRef = useRef(null);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const generateCalendarDays = () => {
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const startDate = new Date(startOfMonth);
    startDate.setDate(startDate.getDate() - startOfMonth.getDay());

    const endDate = new Date(endOfMonth);
    endDate.setDate(endDate.getDate() + (6 - endOfMonth.getDay()));

    const calendarDays = [];
    const date = new Date(startDate);

    while (date <= endDate) {
      calendarDays.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return calendarDays;
  };

  const calendarDays = generateCalendarDays();

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setIsCalendarOpen(false);
  };

  const handlePrevMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  const handleToggleCalendar = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  const renderCalendarDays = () => {
    return calendarDays.map((date, index) => (
      <div
        key={index}
        onClick={() => handleDateClick(date)}
        className={`cursor-pointer rounded-lg p-2 text-sm ${
          date.getMonth() !== currentDate.getMonth()
            ? "text-gray-400"
            : date.toDateString() === selectedDate?.toDateString()
            ? "bg-black text-white"
            : "hover:bg-black hover:text-white"
        }`}
      >
        {date.getDate()}
      </div>
    ));
  };

  // Close the calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        datepickerContainerRef.current &&
        !datepickerContainerRef.current.contains(event.target)
      ) {
        setIsCalendarOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  console.log(selectedDate)

  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="mx-auto w-full max-w-[510px]">
          {/* Input field */}
          <div className="relative mb-3">
            <input
              id="datepicker"
              type="text"
              placeholder="Pick a date"
              className="h-12 w-full appearance-none rounded-lg border border-stroke bg-white pl-12 pr-4 text-dark outline-none focus:border-primary"
              value={selectedDate ? selectedDate.toDateString() : ""}
              readOnly
              onClick={handleToggleCalendar}
            />
            <span
              id="toggleDatepicker"
              onClick={handleToggleCalendar}
              className="absolute inset-y-0 left-4 flex items-center text-dark-5 cursor-pointer"
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 3.3125H16.3125V2.625..."
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>

          {/* Calendar */}
          {isCalendarOpen && (
            <div
              ref={datepickerContainerRef}
              id="datepicker-container"
              className="flex w-full flex-col rounded-xl bg-white p-4 shadow-lg sm:p-6"
            >
              {/* Month Navigation */}
              <div className="flex items-center justify-between pb-4">
                <button
                  id="prevMonth"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border bg-gray-200 text-dark hover:border-primary hover:bg-primary hover:text-white"
                  onClick={handlePrevMonth}
                >
                  &#8249;
                </button>
                <p className="text-lg font-medium">
                  {currentDate.toLocaleDateString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </p>
                <button
                  id="nextMonth"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border bg-gray-200 text-dark hover:border-primary hover:bg-primary hover:text-white"
                  onClick={handleNextMonth}
                >
                  &#8250;
                </button>
              </div>

              {/* Days of the Week */}
              <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-gray-600">
                {daysOfWeek.map((day) => (
                  <div key={day}>{day}</div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="mt-2 grid grid-cols-7 gap-2 text-center">
                {renderCalendarDays()}
              </div>

              {/* Action Buttons */}
              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={() => setIsCalendarOpen(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => alert("Date Applied!")}
                  className="px-4 py-2 text-sm font-medium text-white bg-primary rounded hover:bg-primary-dark"
                >
                  Apply
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
