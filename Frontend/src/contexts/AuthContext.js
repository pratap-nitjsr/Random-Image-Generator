import { createContext } from 'react';

const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  token: '',
  setToken: () => {},
});

export default AuthContext;
