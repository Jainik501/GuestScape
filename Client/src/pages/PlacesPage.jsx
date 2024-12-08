import { Link, useParams } from "react-router-dom";
import PlacesFormPage from "../PlacesFormPage.jsx";
import AccountNav from "../AccountNav.jsx";
import { useEffect, useState } from "react";
import PlaceImg from "../PlaceImg";
import axios from "axios";

export default function PlacesPage() {
  const { action } = useParams();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('/user-places').then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  return (
    <div>
      <AccountNav />
      {/* Add new place button */}
      <div className="text-center mb-4">
        <Link
          to="/account/places/new"
          className="bg-blue-600 text-white py-2 px-6 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 inline"
          >
            <path
              fillRule="evenodd"
              d="M12 3.75a.75.75 0 01.75.75v7.5h7.5a.75.75 0 010 1.5h-7.5v7.5a.75.75 0 01-1.5 0v-7.5h-7.5a.75.75 0 010-1.5h7.5v-7.5a.75.75 0 01.75-.75z"
            />
          </svg>
          Add New Place
        </Link>
      </div>

      {/* Places listing */}
      <div className="mt-4 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {places.length > 0 &&
          places.map((place) => (
            <Link
              to={`/account/places/${place._id}`}
              key={place._id}
              className="flex border rounded-xl shadow-md overflow-hidden"
            >
              <div className="w-32 h-32 flex-shrink-0">
                <PlaceImg
                  className="rounded-xl object-cover w-full h-full"
                  place={place}
                />
              </div>
              <div className="flex flex-col justify-center p-4">
                <h2 className="text-xl font-semibold">{place.title}</h2>
                <p className="text-sm text-gray-500 mt-2">{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
