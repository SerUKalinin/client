import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AppPage from './pages/AppPage';
// import IconSidebar from './IconSidebar';
// import Sidebar from './Sidebar';
// import logo from './logo.svg';
// import './App.css';

// Компонент для защиты маршрутов
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route 
          path="/app/*" 
          element={
            <ProtectedRoute>
              <AppPage />
            </ProtectedRoute>
          } 
        />
        {/* Здесь позже будут другие маршруты для основного приложения */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
