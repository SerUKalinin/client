import React, { useState } from 'react';
import './IconSidebar.css';
import { MdDashboard, MdPerson, MdCalendarToday, MdBarChart, MdCloud, MdMap, MdSettings, MdLogout } from 'react-icons/md';

const Icon = (IconComponent: any) => <IconComponent />;

type IconSidebarProps = {
  onToggleSidebar: () => void;
  isSidebarVisible: boolean;
};

const IconSidebar: React.FC<IconSidebarProps> = ({ onToggleSidebar, isSidebarVisible }) => {
  return (
    <div className="icon-sidebar">
      <div 
        className={`icon-sidebar-icon ${isSidebarVisible ? 'active' : ''}`} 
        onClick={onToggleSidebar}
      >
        {Icon(MdDashboard)}
      </div>
      <div className="icon-sidebar-icon">{Icon(MdPerson)}</div>
      <div className="icon-sidebar-icon">{Icon(MdCalendarToday)}</div>
      <div className="icon-sidebar-icon">{Icon(MdBarChart)}</div>
      <div className="icon-sidebar-icon">{Icon(MdCloud)}</div>
      <div className="icon-sidebar-icon">{Icon(MdMap)}</div>
      <div className="icon-sidebar-icon">{Icon(MdSettings)}</div>
      <div className="icon-sidebar-icon logout">{Icon(MdLogout)}</div>
    </div>
  );
};

export default IconSidebar; 