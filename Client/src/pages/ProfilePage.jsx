import { useContext, useState } from "react";
import { UserContext } from "../UserContext.jsx";
import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import PlacesPage from "./PlacesPage.jsx";
import AccountNav from "../AccountNav.jsx";

export default function ProfilePage() {
  const { ready, user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);
  const { pathname } = useLocation();

  // Determine the current subpage
  let subpage = pathname.split('/')?.[2];
  if (subpage === undefined) {
    subpage = 'profile';
  }

  // Logout function
  async function logout() {
    await axios.post('/logout');
    setRedirect('/');
    setUser(null);
  }

  // Handle loading state
  if (!ready) {
    return 'Loading...';
  }

  // Redirect to login if the user is not logged in
  if (ready && !user && !redirect) {
    return <Navigate to="/login" />;
  }

  // Handle redirect logic
  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <AccountNav />
      {subpage === 'profile' && (
        <div className="text-center max-w-lg mx-auto">
          Logged in as {user.name} ({user.email})<br />
          <button
            onClick={logout}
            className="primary max-w-sm bg-blue-600 text-white py-2 px-4 rounded-xl mt-4"
          >
            Logout
          </button>
        </div>
      )}
      {subpage === 'places' && <PlacesPage />}
    </div>
  );
}
