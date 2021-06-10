import { createContext, useContext, useState } from "react";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const isAuthenticated = (token) => {
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  };

  return (
    <AuthenticationContext.Provider value={{ isAuthenticated, authenticated }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
export const useAuthentication = () => useContext(AuthenticationContext);
