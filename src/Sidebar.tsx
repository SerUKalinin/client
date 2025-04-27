import React, { useState } from 'react';
import './Sidebar.css';
import { MdDashboard, MdPerson, MdCalendarToday, MdBarChart, MdCloud, MdMap, MdSettings, MdLogout, MdExpandMore, MdExpandLess } from 'react-icons/md';
import { IconType } from 'react-icons';

const Sidebar = () => {
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [tasksOpen, setTasksOpen] = useState(true);

  const renderIcon = (Icon: IconType) => {
    const IconComponent = Icon as React.ComponentType<{ size?: number }>;
    return <IconComponent size={20} />;
  };

  return (
    <div className="sidebar sidebar-wide">
      <div className="sidebar-header">
        <span className="sidebar-title">Projects</span>
        <button className="sidebar-add-btn">+</button>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-section-header" onClick={() => setProjectsOpen(!projectsOpen)}>
          <span>Projects</span>
          {projectsOpen ? renderIcon(MdExpandLess) : renderIcon(MdExpandMore)}
        </div>
        {projectsOpen && (
          <div className="sidebar-sublist">
            <div className="sidebar-subitem">All projects (3)</div>
            <div className="sidebar-subitem sidebar-subitem-active">Design system</div>
            <div className="sidebar-subitem">User flow</div>
            <div className="sidebar-subitem">Ux research</div>
          </div>
        )}
      </div>
      <div className="sidebar-section">
        <div className="sidebar-section-header" onClick={() => setTasksOpen(!tasksOpen)}>
          <span>Tasks</span>
          {tasksOpen ? renderIcon(MdExpandLess) : renderIcon(MdExpandMore)}
        </div>
        {tasksOpen && (
          <div className="sidebar-sublist">
            <div className="sidebar-subitem">All tasks (11)</div>
            <div className="sidebar-subitem">To do (4)</div>
            <div className="sidebar-subitem sidebar-subitem-active">In progress (4)</div>
            <div className="sidebar-subitem">Done (3)</div>
          </div>
        )}
      </div>
      <div className="sidebar-divider" />
      <div className="sidebar-link">Reminders {renderIcon(MdExpandMore)}</div>
      <div className="sidebar-link">Messengers {renderIcon(MdExpandMore)}</div>
      <div className="sidebar-footer">
        <div className="sidebar-theme-switch">
          <span className="sidebar-theme-btn sidebar-theme-btn-light">☀️ </span>
          <span className="sidebar-theme-btn sidebar-theme-btn-dark sidebar-theme-btn-active">🌙 </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 