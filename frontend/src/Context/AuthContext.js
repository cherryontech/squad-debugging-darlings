import React, { createContext, useState, useMemo } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();

  const login = (token) => {

    setToken(token);
  };
  const logout = () => {
    setToken(null);
  };

  const contextValue = useMemo(() => {
    return { token, login, logout };
  }, [token]);


  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};
