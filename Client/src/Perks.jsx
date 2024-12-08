export default function Perks({ selected, onChange }) {
    // Handle checkbox click
    function handleCbClick(ev) {
      const { checked, name } = ev.target;
      if (checked) {
        onChange([...selected, name]); // Add the perk to the selected list
      } else {
        onChange(selected.filter(selectedName => selectedName !== name)); // Remove the perk
      }
    }
  
    return (
      <>
        {/* Wifi Perk */}
        <label className="border p-4 flex rounded-2xl gap-2 items-center">
          <input
            type="checkbox"
            name="wifi"
            checked={selected.includes('wifi')}
            onChange={handleCbClick}
            className="cursor-pointer"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.75C16.071 18.75 20.25 14.571 20.25 10.5S16.071 2.25 12 2.25 3.75 6.429 3.75 10.5 7.929 18.75 12 18.75z"
            />
          </svg>
          <span>Wifi</span>
        </label>
  
        {/* Free Parking Spot Perk */}
        <label className="border p-4 flex rounded-2xl gap-2 items-center">
          <input
            type="checkbox"
            name="free-parking"
            checked={selected.includes('free-parking')}
            onChange={handleCbClick}
            className="cursor-pointer"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L10.5 4.5L14.25 4.5C16.035 4.5 17.5 5.965 17.5 7.75L17.5 14.25C17.5 16.035 16.035 17.5 14.25 17.5L9.75 17.5C7.965 17.5 6.5 16.035 6.5 14.25L6.5 10.5L10.5 10.5L10.5 19.5z"
            />
          </svg>
          <span>Free parking spot</span>
        </label>
  
        {/* TV Perk */}
        <label className="border p-4 flex rounded-2xl gap-2 items-center">
          <input
            type="checkbox"
            name="tv"
            checked={selected.includes('tv')}
            onChange={handleCbClick}
            className="cursor-pointer"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.75 5.25l14.5 0c.414 0 .75.336.75.75l0 12c0 .414-.336.75-.75.75l-14.5 0c-.414 0-.75-.336-.75-.75l0-12c0-.414.336-.75.75-.75zM6 5.25L6 18.75M18 5.25L18 18.75"
            />
          </svg>
          <span>TV</span>
        </label>
  
        {/* Radio Perk */}
        <label className="border p-4 flex rounded-2xl gap-2 items-center">
          <input
            type="checkbox"
            name="radio"
            checked={selected.includes('radio')}
            onChange={handleCbClick}
            className="cursor-pointer"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.25 4.25C6.25 5.492 7.258 6.5 8.5 6.5C9.742 6.5 10.75 5.492 10.75 4.25C10.75 3.008 9.742 2 8.5 2C7.258 2 6.25 3.008 6.25 4.25Z"
            />
          </svg>
          <span>Radio</span>
        </label>
  
        {/* Pets Perk */}
        <label className="border p-4 flex rounded-2xl gap-2 items-center">
          <input
            type="checkbox"
            name="pets"
            checked={selected.includes('pets')}
            onChange={handleCbClick}
            className="cursor-pointer"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.373 9.373 0 001.417-.354C10.498 9.592 10.636 10 10.75 10c.057 0 .1-.043.1-.1V5.1c0-.056-.043-.1-.1-.1a2.004 2.004 0 01-.468.004c-.357.12-.67.265-.943.43"
            />
          </svg>
          <span>Pets</span>
        </label>
  
        {/* Private Entrance Perk */}
        <label className="border p-4 flex rounded-2xl gap-2 items-center">
          <input
            type="checkbox"
            name="private-entrance"
            checked={selected.includes('private-entrance')}
            onChange={handleCbClick}
            className="cursor-pointer"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 12L12 16L8 12"
            />
          </svg>
          <span>Private entrance</span>
        </label>
      </>
    );
  }
  