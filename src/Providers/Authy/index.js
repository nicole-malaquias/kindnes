import { createContext, useContext, useState } from "react";
import { Redirect } from "react-router";

const AuthyContext = createContext();

export const AuthyProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("@gestao:token") || ""
  );
  const [userId, setUserId] = useState(
    localStorage.getItem("@gestao:userId") || ""
  );
  const authy = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const updateAuthy = (token, id) => {
    setToken(token);
    setUserId(id);
    localStorage.clear();
  };

  const handleLogout = () => {
    setToken("");
    setUserId("");
    localStorage.clear();
    return <Redirect to="/login" />;
  };

  return (
    <AuthyContext.Provider
      value={{ token, userId, authy, updateAuthy, handleLogout }}
    >
      {children}
    </AuthyContext.Provider>
  );
};

export const useAuthy = () => useContext(AuthyContext);
