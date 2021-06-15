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
  const [authy, setAuthy] = useState({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const updateAuthy = (token, id) => {
    setToken(token);
    setUserId(id);
    localStorage.setItem("@gestao:token", token);
    localStorage.setItem("@gestao:user_Id", id);
  };

  const handleLogout = () => {
    setToken("");
    setUserId("");
    localStorage.setItem("@gestao:token", "");
    localStorage.setItem("@gestao:user_Id", "");
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
