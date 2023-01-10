import React, { useState, createContext, useContext } from 'react';

const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
  const [user] = useState({
    name: 'John',
    age: 34
  });
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
