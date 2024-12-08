import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext.jsx";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <header className="flex gap-8 justify-between items-center p-4 border-b">
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-4">
        <span className="font-bold text-3xl text-blue-600">
          Guest<span className="text-black">Scape</span>
        </span>
      </Link>
      
      {/* Search Bar */}
      <div className="flex gap-12 border border-gray-300 rounded-full py-2 px-4 shadow-md">
        <div>Anywhere</div>
        <div className="border-l border-gray-300"></div>
        <div>Any week</div>
        <div className="border-l border-gray-300"></div>
        <div>Add guests</div>
        <button className="bg-blue-600 text-white p-2 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.25 6.75h9m-18 6h18m-18 6h9"
            />
          </svg>
        </button>
      </div>

      {/* Profile Section */}
      <Link
        to={user ? "/account" : "/login"}
        className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4"
      >
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
            d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 21a8.25 8.25 0 1115 0H4.5z"
          />
        </svg>
        <div className="bg-gray-500 text-white rounded-full overflow-hidden w-8 h-8 flex items-center justify-center">
          {user ? user.name[0].toUpperCase() : <span>?</span>}
        </div>
        {!!user && <div>{user.name}</div>}
      </Link>
    </header>
  );
}
