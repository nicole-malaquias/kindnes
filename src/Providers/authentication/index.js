import { createContext, useContext, useState } from "react";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("@gestao:token")) || ""
  );
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <AuthenticationContext.Provider
      value={{ token, setToken, authenticated, setAuthenticated }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
export const useAuthentication = () => useContext(AuthenticationContext);
