import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ImageGenerator from './components/ImageGenerator';
import AuthContext from './contexts/AuthContext';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, token, setToken }}>
      <Router>
        <div className="app">
          <Routes>
            <Route
              path = "/"
              element={isAuthenticated ? <Navigate to="/image-generator" /> : <Login />}
            />
            <Route
              path={"/login"}
              element={isAuthenticated ? <Navigate to="/image-generator" /> : <Login />}
            />
            <Route
              path={"/register"}
              element={<Register />}
            />
            <Route
              path="/image-generator"
              element={isAuthenticated ? <ImageGenerator /> : <Navigate to="/" />}
            />
            
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
