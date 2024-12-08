import { differenceInCalendarDays, format } from "date-fns";

export default function BookingDates({ booking, className = "" }) {
  return (
    <div className={"flex gap-1 " + className}>
      {/* Duration icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-gray-600"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12M6 12h12"
        />
      </svg>
      {/* Duration text */}
      {differenceInCalendarDays(
        new Date(booking.checkOut),
        new Date(booking.checkIn)
      )}{" "}
      nights

      {/* Check-in date */}
      <div className="flex gap-1 items-center ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 0h4m-4 0h-4m1-5h2m-1-3a2 2 0 110 4 2 2 0 010-4z"
          />
        </svg>
        {format(new Date(booking.checkIn), "yyyy-MM-dd")}
      </div>
      &rarr;
      {/* Check-out date */}
      <div className="flex gap-1 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4m0 0h4m-4 0h-4m1-5h2m-1-3a2 2 0 110 4 2 2 0 010-4z"
          />
        </svg>
        {format(new Date(booking.checkOut), "yyyy-MM-dd")}
      </div>
    </div>
  );
}
