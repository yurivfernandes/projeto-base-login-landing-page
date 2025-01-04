import React from 'react';
  import ReactDOM from 'react-dom';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import './index.css';
  import LandingPage from './pages/LandingPage';
  import LoginPage from './pages/LoginPage';
  import RegisterPage from './pages/RegisterPage';
  import WelcomePage from './pages/WelcomePage';
  import { AuthProvider } from './context/AuthContext';
  import ProtectedRoute from './components/ProtectedRoute';

  ReactDOM.render(
    <React.StrictMode>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/welcome"
              element={
                <ProtectedRoute>
                  <WelcomePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
