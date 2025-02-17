import { createContext, useContext, useState, useEffect } from "react";

const SessionContext = createContext(null);

export const useSession = () => useContext(SessionContext);

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch("http://localhost:8080/session-data");
        if (response.ok) {
          const data = await response.json();
          setSession(data);
        } else {
          console.log("no response-- session=null");
          setSession(null);
        }
      } catch (error) {
        console.log("Catch-- error ", error);
        setSession(null);
      }
    };

    fetchSession();

  },[]);

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
