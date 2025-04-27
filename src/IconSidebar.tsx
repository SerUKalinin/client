import React from 'react';
import './IconSidebar.css';
import { MdDashboard, MdPerson, MdCalendarToday, MdBarChart, MdCloud, MdMap, MdSettings, MdLogout } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Icon = (IconComponent: any) => <IconComponent />;

type IconSidebarProps = {
  onToggleSidebar: () => void;
  isSidebarVisible: boolean;
};

const IconSidebar: React.FC<IconSidebarProps> = ({ onToggleSidebar, isSidebarVisible }) => {
  const navigate = useNavigate();
  return (
    <div className="icon-sidebar">
      <div 
        className={`icon-sidebar-icon`} 
        onClick={() => navigate('/app')}
        style={{cursor: 'pointer'}}
      >
        {Icon(MdDashboard)}
      </div>
      <div className="icon-sidebar-icon" onClick={() => navigate('/tasks')} style={{cursor: 'pointer'}}>{Icon(MdCalendarToday)}</div>
      <div className="icon-sidebar-icon" onClick={() => navigate('/users')} style={{cursor: 'pointer'}}>{Icon(MdPerson)}</div>
      <div className="icon-sidebar-icon" onClick={() => navigate('/objects')} style={{cursor: 'pointer'}}>{Icon(MdBarChart)}</div>
      <div className="icon-sidebar-icon">{Icon(MdCloud)}</div>
      <div className="icon-sidebar-icon">{Icon(MdMap)}</div>
      <div className="icon-sidebar-icon">{Icon(MdSettings)}</div>
      <div className="icon-sidebar-icon logout">{Icon(MdLogout)}</div>
    </div>
  );
};

export default IconSidebar; 