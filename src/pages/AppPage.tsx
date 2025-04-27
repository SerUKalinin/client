import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import IconSidebar from '../IconSidebar';
import Header from '../Header';
import './AppPage.css';

const AppPage = () => {
  const navigate = useNavigate();
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className="app-page">
      <IconSidebar 
        onToggleSidebar={toggleSidebar} 
        isSidebarVisible={isSidebarVisible} 
      />
      {isSidebarVisible && <Sidebar />}
      <div className={`app-content ${isSidebarVisible ? 'with-sidebar' : 'without-sidebar'}`}>
        <Header />
        <div className="app-main">
          <p>Добро пожаловать в ваш личный кабинет!</p>
        </div>
      </div>
    </div>
  );
};

export default AppPage; 