import Image from "./Image.jsx";

export default function PlaceImg({ place, index = 0, className = null }) {
  // Check if the place has photos
  if (!place.photos?.length) {
    return null; // Return null if no photos are available
  }

  // Set default className if none is provided
  if (!className) {
    className = 'object-cover'; // Default to 'object-cover' for image sizing
  }

  return (
    <Image
      className={className}
      src={place.photos[index]}
      alt={`Photo of ${place.title}`}
    />
  );
}
