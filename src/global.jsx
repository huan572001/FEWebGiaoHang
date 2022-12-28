import React, { useCallback, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import auth from '@/utils/auth';
import { keyRefreshToken, keyToken, keyUser } from '@/variable';

export const AuthContext = React.createContext({
  user: {},
  permission: {},
  title: '',
  formatDate: 'YYYY-MM-DD',
  setTitlePage: () => {},
  login: () => {},
  logout: () => {},
  changeLanguage: () => {},
  changePermission: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

const Global = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem(keyUser)));
  const [authorization, setAuth] = useState(auth.isAuthenticated());
  const [title, setTitle] = useState('');

  const login = (data) => {
    localStorage.setItem(keyUser, JSON.stringify({ ...data.data }));
    setUser({ ...data.data });
    localStorage.setItem(keyToken, data.token);
    localStorage.setItem(keyRefreshToken, data.refreshToken);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(keyUser);
  };
  const setTitlePage = useCallback(
    (name) => {
      document.title = name;
      setTitle(name);
    },
    [title]
  );
  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        setTitlePage,
        authorization,
        setAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default Global;
