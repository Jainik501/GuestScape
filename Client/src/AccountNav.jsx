import { Link, useLocation } from "react-router-dom";

export default function AccountNav() {
  const { pathname } = useLocation();
  let subpage = pathname.split('/')?.[2];
  if (subpage === undefined) {
    subpage = 'profile';
  }

  function linkClasses(type = null) {
    let classes = 'inline-flex gap-1 py-2 px-6 rounded-full ';
    if (type === subpage) {
      classes += 'bg-blue-600 text-white'; // Active state style
    } else {
      classes += 'bg-gray-200'; // Inactive state style
    }
    return classes;
  }

  return (
    <nav className="w-full flex justify-center mt-8 gap-2 mb-8">
      <Link className={linkClasses('profile')} to="/account">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 21a8.25 8.25 0 1115 0H4.5z" />
        </svg>
        My Profile
      </Link>
      <Link className={linkClasses('bookings')} to="/account/bookings">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5m-10.5 3h13.5m-13.5 3h10.5M12 18.75h5.25" />
        </svg>
        My Bookings
      </Link>
      <Link className={linkClasses('places')} to="/account/places">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 9.75h17.25m-15.75 4.5h14.25m-12.75 4.5h11.25" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 5.625A2.25 2.25 0 015.625 3.375h12.75a2.25 2.25 0 012.25 2.25v14.25a2.25 2.25 0 01-2.25 2.25H5.625a2.25 2.25 0 01-2.25-2.25V5.625z" />
        </svg>
        My Accommodations
      </Link>
    </nav>
  );
}
