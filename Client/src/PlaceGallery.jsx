import { useState } from "react";
import Image from "./Image.jsx";

export default function PlaceGallery({ place }) {
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  if (showAllPhotos) {
    return (
      <div className="absolute inset-0 bg-black text-white min-h-screen">
        <div className="bg-black p-8 grid gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-3xl">Photos of {place.title}</h2>
            <button onClick={() => setShowAllPhotos(false)} className="bg-gray-500 p-2 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 9.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 14.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                />
              </svg>
              Close photos
            </button>
          </div>
          <div className="grid gap-4 mt-4">
            {place?.photos?.length > 0 &&
              place.photos.map((photo, index) => (
                <div key={index} className="flex justify-center">
                  <Image src={photo} alt={`Place photo ${index + 1}`} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
        <div>
          {place.photos?.[0] && (
            <div>
              <Image
                onClick={() => setShowAllPhotos(true)}
                className="w-full h-auto object-cover cursor-pointer"
                src={place.photos[0]}
                alt="Main photo"
              />
            </div>
          )}
        </div>
        <div className="grid gap-2">
          {place.photos?.[1] && (
            <Image
              onClick={() => setShowAllPhotos(true)}
              className="w-full h-auto object-cover cursor-pointer"
              src={place.photos[1]}
              alt="Second photo"
            />
          )}
          <div className="overflow-hidden">
            {place.photos?.[2] && (
              <Image
                onClick={() => setShowAllPhotos(true)}
                className="w-full h-auto object-cover cursor-pointer"
                src={place.photos[2]}
                alt="Third photo"
              />
            )}
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowAllPhotos(true)}
        className="mt-4 w-full text-blue-600 underline flex justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            fillRule="evenodd"
            d="M1.5 6a2.25 2.25 0 012.25-2.25h17.25A2.25 2.25 0 0123 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6z"
          />
        </svg>
        Show More Photos
      </button>
    </div>
  );
}
