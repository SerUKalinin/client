import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import IconSidebar from '../IconSidebar';
import './AppPage.css';

const AppPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="app-page">
      <IconSidebar />
      <Sidebar />
      <div className="app-content">
        <div className="app-header">
          <h1>Личный кабинет</h1>
          <button 
            onClick={handleLogout}
            className="logout-button"
          >
            Выйти
          </button>
        </div>
        <div className="app-main">
          <p>Добро пожаловать в ваш личный кабинет!</p>
        </div>
      </div>
    </div>
  );
};

export default AppPage; 