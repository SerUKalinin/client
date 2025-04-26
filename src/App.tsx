import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
// import IconSidebar from './IconSidebar';
// import Sidebar from './Sidebar';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        {/* Здесь позже будут другие маршруты для основного приложения */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
