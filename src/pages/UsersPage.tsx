import React from 'react';
import IconSidebar from '../IconSidebar';
import Header from '../Header';
import './AppPage.css';

const UsersPage = () => (
  <div className="app-page">
    <IconSidebar onToggleSidebar={() => {}} isSidebarVisible={true} />
    <div className="app-content with-sidebar">
      <Header />
      <div className="app-main">
        <h2>Пользователь</h2>
        <p>Здесь будет информация о пользователе.</p>
      </div>
    </div>
  </div>
);

export default UsersPage; 