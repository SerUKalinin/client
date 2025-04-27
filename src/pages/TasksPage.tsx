import React from 'react';
import IconSidebar from '../IconSidebar';
import Header from '../Header';
import './AppPage.css';

const TasksPage = () => (
  <div className="app-page">
    <IconSidebar onToggleSidebar={() => {}} isSidebarVisible={true} />
    <div className="app-content with-sidebar">
      <Header />
      <div className="app-main">
        <h2>Задачи</h2>
        <p>Здесь будет список задач или другая информация.</p>
      </div>
    </div>
  </div>
);

export default TasksPage; 