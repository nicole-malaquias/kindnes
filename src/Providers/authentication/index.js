import { createContext, useContext, useState } from "react";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@gestao:token")) || ""
  );
  const [authenticated, setAuthenticated] = useState(false);

  const isAuthenticated = () => {
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{ token, setToken, isAuthenticated, authenticated }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
export const useAuthentication = () => useContext(AuthenticationContext);
