import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

interface UserProps {
  name: string;
  email: string;
}

interface AuthContextProps {
  isLogin: boolean;
  user: UserProps | undefined;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactElement }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState<UserProps>();

  const getCookieValue = (name: string) => {
    const value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value ? value[2] : null;
  };

  const getUserFromCookies = useCallback(() => {
    const email = getCookieValue('email');
    const name = getCookieValue('name');

    if (email && name) {
      return { email: decodeURIComponent(email), name: decodeURIComponent(name) };
    }
  }, []);

  const logout = useCallback(() => {
    document.cookie = 'email=; Path=/; Max-Age=0';
    document.cookie = 'name=; Path=/; Max-Age=0';
    setUser(undefined);
    setIsLogin(false);
  }, []);

  useEffect(() => {
    const userData = getUserFromCookies();

    if (userData) {
      setUser(userData);
      setIsLogin(true);
    }
  }, [getUserFromCookies]);

  return <AuthContext.Provider value={{ user, isLogin, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
