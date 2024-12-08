import { createContext, useEffect, useState } from "react";
import axios from "axios";

// Create the UserContext
export const UserContext = createContext({});

// UserContextProvider component
export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null); // Stores user information
  const [ready, setReady] = useState(false); // Tracks if user data is ready

  // Fetch user profile data on mount
  useEffect(() => {
    if (!user) {
      axios.get('/profile')
        .then(({ data }) => {
          setUser(data);
          setReady(true);
        })
        .catch(() => setReady(true)); // Handle case when user is not logged in
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserContext.Provider>
  );
}
