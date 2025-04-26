import React from 'react';
import './Sidebar.css';
import { MdDashboard, MdPerson, MdCalendarToday, MdBarChart, MdCloud, MdMap, MdSettings, MdLogout } from 'react-icons/md';

const Icon = (IconComponent: any) => <IconComponent />;

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-icon active">{Icon(MdDashboard)}</div>
      <div className="sidebar-icon">{Icon(MdPerson)}</div>
      <div className="sidebar-icon">{Icon(MdCalendarToday)}</div>
      <div className="sidebar-icon">{Icon(MdBarChart)}</div>
      <div className="sidebar-icon">{Icon(MdCloud)}</div>
      <div className="sidebar-icon">{Icon(MdMap)}</div>
      <div className="sidebar-icon">{Icon(MdSettings)}</div>
      <div className="sidebar-icon logout">{Icon(MdLogout)}</div>
    </div>
  );
};

export default Sidebar; 