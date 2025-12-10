import React, { createContext, useState, useContext } from 'react';


const INITIAL_USERS = [
  { id: 1, name: 'Олена', email: 'olena@example.com', role: 'Адмін' },
  { id: 2, name: 'Ігор', email: 'igor@example.com', role: 'Користувач' },
  { id: 3, name: 'Софія', email: 'sofia@example.com', role: 'Модератор' },
];


const defaultContextValue = {
  users: [],
  activeUser: null,
  selectUser: () => {},
  theme: 'light',
  toggleTheme: () => {},
};

export const AppContext = createContext(defaultContextValue);


export const useAppContext = () => useContext(AppContext);


export const AppContextProvider = ({ children }) => {
  const [users, setUsers] = useState(INITIAL_USERS);
  const [activeUserId, setActiveUserId] = useState(null);
  const [theme, setTheme] = useState('light');

  const activeUser = users.find(u => u.id === activeUserId) || null;

  const selectUser = (userId) => {
    setActiveUserId(userId);
  };

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = {
    users,
    activeUser,
    selectUser,
    theme,
    toggleTheme,
   
    addUser: (newUser) => setUsers([...users, { ...newUser, id: Date.now() }]),
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};