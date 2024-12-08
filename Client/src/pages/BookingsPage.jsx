import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";
import PlaceImg from "../PlaceImg";
import { Link } from "react-router-dom";
import BookingDates from "../BookingDates";

export default function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch the bookings from the backend
    axios.get('/bookings').then(response => {
      setBookings(response.data);
    });
  }, []);

  return (
    <div>
      <AccountNav />
      <div className="my-8">
        {/* Render all the bookings */}
        {bookings?.length > 0 ? (
          bookings.map(booking => (
            <Link
              to={`/account/bookings/${booking._id}`}
              key={booking._id}
              className="flex mb-4 border-b pb-4"
            >
              {/* Place image */}
              <div className="w-48">
                <PlaceImg place={booking.place} />
              </div>
              <div className="py-3 pr-3 grow">
                {/* Place Title */}
                <h2 className="text-xl font-semibold">{booking.place.title}</h2>

                {/* Booking Dates */}
                <div className="text-xl mb-2">
                  <BookingDates booking={booking} />
                </div>

                {/* Price and Additional Details */}
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
                      d="M3 7h18M3 12h18M3 17h18"
                    />
                  </svg>
                  <span className="text-2xl">
                    Total price: ₹{booking.price}
                  </span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </div>
  );
}
