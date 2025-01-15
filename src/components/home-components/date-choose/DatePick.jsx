"use client";

import React, { useState, useEffect, useRef } from "react";

export default function DatePick() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const datepickerContainerRef = useRef(null);

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];

    // Add empty slots for the days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} />);
    }

    // Add actual days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const dateValue = `${month + 1}/${i}/${year}`;
      days.push(
        <div
          key={i}
          className={`flex h-[38px] w-[38px] items-center justify-center rounded-[7px] border-[.5px] ${
            selectedDate === dateValue
              ? "bg-primary text-white"
              : "border-transparent text-black hover:border-stroke hover:bg-gray-2"
          } sm:h-[46px] sm:w-[47px] mb-2 cursor-pointer`}
          onClick={() => setSelectedDate(dateValue)}
        >
          {i}
        </div>
      );
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.setMonth(prevDate.getMonth() - 1)));
  };

  const handleNextMonth = () => {
    setCurrentDate((prevDate) => new Date(prevDate.setMonth(prevDate.getMonth() + 1)));
  };

  const handleApply = () => {
    if (selectedDate) setIsCalendarOpen(false);
  };

  const handleCancel = () => {
    setSelectedDate(null);
    setIsCalendarOpen(false);
  };

  const handleToggleCalendar = () => {
    setIsCalendarOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      datepickerContainerRef.current &&
      !datepickerContainerRef.current.contains(event.target)
    ) {
      setIsCalendarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="container">
        <div className="mx-auto w-full max-w-[510px]">
          <div className="relative mb-3">
            <input
              id="datepicker"
              type="text"
              placeholder="Pick a date"
              className="h-12 w-full appearance-none rounded-lg border border-stroke bg-white pl-12 pr-4 text-dark outline-none focus:border-primary"
              value={selectedDate || ""}
              readOnly
              onClick={handleToggleCalendar}
            />
            <span
              id="toggleDatepicker"
              onClick={handleToggleCalendar}
              className="absolute inset-y-0 flex h-12 w-12 items-center justify-center text-dark-5"
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Calendar Icon */}
                <path
                  d="M18 3.3125H16.3125V2.625..."
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>

          {isCalendarOpen && (
            <div
              ref={datepickerContainerRef}
              id="datepicker-container"
              className="flex w-full flex-col rounded-xl bg-white p-4 shadow-four sm:p-[30px]"
            >
              <div className="flex items-center justify-between pb-4">
                <button
                  id="prevMonth"
                  className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-[7px] border-[.5px] border-stroke bg-gray-2 text-dark hover:border-primary hover:bg-primary hover:text-white sm:h-[46px] sm:w-[46px]"
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
                  className="flex h-[38px] w-[38px] cursor-pointer items-center justify-center rounded-[7px] border-[.5px] border-stroke bg-gray-2 text-dark hover:border-primary hover:bg-primary hover:text-white sm:h-[46px] sm:w-[46px]"
                  onClick={handleNextMonth}
                >
                  &#8250;
                </button>
              </div>
              <div className="grid grid-cols-7 gap-2 text-center">
                {renderCalendarDays()}
              </div>
              <div className="mt-4 flex justify-end gap-2">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleApply}
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
