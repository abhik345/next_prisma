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
    <section className="bg-white">
      <div className="container">
        <div className="mx-auto max-w-full">
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
              className="absolute inset-y-0 flex h-12 w-12 items-center justify-center text-dark-5"
            >
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 3.3125H16.3125V2.625C16.3125 2.25 16 1.90625 15.5937 1.90625C15.1875 1.90625 14.875 2.21875 14.875 2.625V3.28125H6.09375V2.625C6.09375 2.25 5.78125 1.90625 5.375 1.90625C4.96875 1.90625 4.65625 2.21875 4.65625 2.625V3.28125H3C1.9375 3.28125 1.03125 4.15625 1.03125 5.25V16.125C1.03125 17.1875 1.90625 18.0938 3 18.0938H18C19.0625 18.0938 19.9687 17.2187 19.9687 16.125V5.25C19.9687 4.1875 19.0625 3.3125 18 3.3125ZM3 4.71875H4.6875V5.34375C4.6875 5.71875 5 6.0625 5.40625 6.0625C5.8125 6.0625 6.125 5.75 6.125 5.34375V4.71875H14.9687V5.34375C14.9687 5.71875 15.2812 6.0625 15.6875 6.0625C16.0937 6.0625 16.4062 5.75 16.4062 5.34375V4.71875H18C18.3125 4.71875 18.5625 4.96875 18.5625 5.28125V7.34375H2.46875V5.28125C2.46875 4.9375 2.6875 4.71875 3 4.71875ZM18 16.6562H3C2.6875 16.6562 2.4375 16.4062 2.4375 16.0937V8.71875H18.5312V16.125C18.5625 16.4375 18.3125 16.6562 18 16.6562Z"
                  fill="currentColor"
                />
                <path
                  d="M9.5 9.59375H8.8125C8.625 9.59375 8.5 9.71875 8.5 9.90625V10.5938C8.5 10.7812 8.625 10.9062 8.8125 10.9062H9.5C9.6875 10.9062 9.8125 10.7812 9.8125 10.5938V9.90625C9.8125 9.71875 9.65625 9.59375 9.5 9.59375Z"
                  fill="currentColor"
                />
                <path
                  d="M12.3438 9.59375H11.6562C11.4687 9.59375 11.3438 9.71875 11.3438 9.90625V10.5938C11.3438 10.7812 11.4687 10.9062 11.6562 10.9062H12.3438C12.5312 10.9062 12.6562 10.7812 12.6562 10.5938V9.90625C12.6562 9.71875 12.5312 9.59375 12.3438 9.59375Z"
                  fill="currentColor"
                />
                <path
                  d="M15.1875 9.59375H14.5C14.3125 9.59375 14.1875 9.71875 14.1875 9.90625V10.5938C14.1875 10.7812 14.3125 10.9062 14.5 10.9062H15.1875C15.375 10.9062 15.5 10.7812 15.5 10.5938V9.90625C15.5 9.71875 15.375 9.59375 15.1875 9.59375Z"
                  fill="currentColor"
                />
                <path
                  d="M6.5 12H5.8125C5.625 12 5.5 12.125 5.5 12.3125V13C5.5 13.1875 5.625 13.3125 5.8125 13.3125H6.5C6.6875 13.3125 6.8125 13.1875 6.8125 13V12.3125C6.8125 12.125 6.65625 12 6.5 12Z"
                  fill="currentColor"
                />
                <path
                  d="M9.5 12H8.8125C8.625 12 8.5 12.125 8.5 12.3125V13C8.5 13.1875 8.625 13.3125 8.8125 13.3125H9.5C9.6875 13.3125 9.8125 13.1875 9.8125 13V12.3125C9.8125 12.125 9.65625 12 9.5 12Z"
                  fill="currentColor"
                />
                <path
                  d="M12.3438 12H11.6562C11.4687 12 11.3438 12.125 11.3438 12.3125V13C11.3438 13.1875 11.4687 13.3125 11.6562 13.3125H12.3438C12.5312 13.3125 12.6562 13.1875 12.6562 13V12.3125C12.6562 12.125 12.5312 12 12.3438 12Z"
                  fill="currentColor"
                />
                <path
                  d="M15.1875 12H14.5C14.3125 12 14.1875 12.125 14.1875 12.3125V13C14.1875 13.1875 14.3125 13.3125 14.5 13.3125H15.1875C15.375 13.3125 15.5 13.1875 15.5 13V12.3125C15.5 12.125 15.375 12 15.1875 12Z"
                  fill="currentColor"
                />
                <path
                  d="M6.5 14.4062H5.8125C5.625 14.4062 5.5 14.5312 5.5 14.7187V15.4062C5.5 15.5938 5.625 15.7188 5.8125 15.7188H6.5C6.6875 15.7188 6.8125 15.5938 6.8125 15.4062V14.7187C6.8125 14.5312 6.65625 14.4062 6.5 14.4062Z"
                  fill="currentColor"
                />
                <path
                  d="M9.5 14.4062H8.8125C8.625 14.4062 8.5 14.5312 8.5 14.7187V15.4062C8.5 15.5938 8.625 15.7188 8.8125 15.7188H9.5C9.6875 15.7188 9.8125 15.5938 9.8125 15.4062V14.7187C9.8125 14.5312 9.65625 14.4062 9.5 14.4062Z"
                  fill="currentColor"
                />
                <path
                  d="M12.3438 14.4062H11.6562C11.4687 14.4062 11.3438 14.5312 11.3438 14.7187V15.4062C11.3438 15.5938 11.4687 15.7188 11.6562 15.7188H12.3438C12.5312 15.7188 12.6562 15.5938 12.6562 15.4062V14.7187C12.6562 14.5312 12.5312 14.4062 12.3438 14.4062Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>

          {/* Calendar */}
          {isCalendarOpen && (
            <div className="absolute z-10 max-w-full">
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
            </div>
            
          )}
        </div>
      </div>
    </section>
  );
}
