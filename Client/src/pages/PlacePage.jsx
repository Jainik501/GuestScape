import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BookingWidget from "../BookingWidget";
import PlaceGallery from "../PlaceGallery";
import AddressLink from "../AddressLink";

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return ''; // If no place is found, return an empty string or you can render a loading state here.

  return (
    <div className="mt-4 bg-gray-100 -mx-8 px-8 pt-8">
      {/* Place Title */}
      <h1 className="text-3xl">{place.title}</h1>
      <AddressLink>{place.address}</AddressLink>

      {/* Place Gallery */}
      <PlaceGallery place={place} />

      {/* Place Details */}
      <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-2">
        {/* Description */}
        <div>
          <div className="my-4">
            <h2 className="font-semibold text-2xl">Description</h2>
            <p>{place.description}</p>
          </div>

          {/* Check-in, Check-out, and Max guests */}
          <div>
            <div>Check-in: {place.checkIn}</div>
            <div>Check-out: {place.checkOut}</div>
            <div>Max number of guests: {place.maxGuests}</div>
          </div>
        </div>

        {/* Booking Widget */}
        <div>
          <BookingWidget place={place} />
        </div>
      </div>

      {/* Extra Information */}
      <div className="bg-white -mx-8 px-8 py-8 border-t">
        <h2 className="font-semibold text-2xl">Extra Info</h2>
        <div className="mb-4 mt-2 text-sm text-gray-700 leading-relaxed">
          {place.extraInfo}
        </div>
      </div>
    </div>
  );
}
