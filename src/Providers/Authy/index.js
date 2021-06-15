import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
const AuthyContext = createContext();

export const AuthyProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("@gestao:token") || ""
  );
  const [userId, setUserId] = useState(
    localStorage.getItem("@gestao:user_Id") || ""
  );

  const [authy, setAuthy] = useState({});

  const updateAuthy = (token, id) => {
    localStorage.clear();
    localStorage.setItem("@gestao:user_Id", id);
    localStorage.setItem("@gestao:token", token);
    setToken(token);
    setUserId(id);
    setAuthy({
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
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
