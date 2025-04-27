import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

interface RealEstateObject {
  id: number;
  name: string;
}

interface Task {
  id: number;
  title: string;
}

const Sidebar = () => {
  const [projectsOpen, setProjectsOpen] = useState(true);
  const [tasksOpen, setTasksOpen] = useState(true);
  const [objects, setObjects] = useState<RealEstateObject[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loadingObjects, setLoadingObjects] = useState(true);
  const [loadingTasks, setLoadingTasks] = useState(true);

  useEffect(() => {
    fetch('/real-estate-objects', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(data => {
        setObjects(data);
        setLoadingObjects(false);
      })
      .catch(() => setLoadingObjects(false));
  }, []);

  useEffect(() => {
    fetch('/tasks', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(data => {
        setTasks(data);
        setLoadingTasks(false);
      })
      .catch(() => setLoadingTasks(false));
  }, []);

  return (
    <div className="sidebar sidebar-wide">
      <div className="sidebar-header">
        <span className="sidebar-title">Главная</span>
      </div>
      <div className="sidebar-section">
        <div className="sidebar-section-header" onClick={() => setProjectsOpen(!projectsOpen)}>
          <span>Проекты</span>
          {projectsOpen ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
        </div>
        {projectsOpen && (
          <div className="sidebar-sublist">
            {loadingObjects ? (
              <div className="sidebar-subitem">Загрузка...</div>
            ) : objects.length === 0 ? (
              <div className="sidebar-subitem">Нет объектов</div>
            ) : (
              objects.map(obj => (
                <div className="sidebar-subitem" key={obj.id}>{obj.name || `Объект #${obj.id}`}</div>
              ))
            )}
          </div>
        )}
      </div>
      <div className="sidebar-section">
        <div className="sidebar-section-header" onClick={() => setTasksOpen(!tasksOpen)}>
          <span>Задачи</span>
          {tasksOpen ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
        </div>
        {tasksOpen && (
          <div className="sidebar-sublist">
            {loadingTasks ? (
              <div className="sidebar-subitem">Загрузка...</div>
            ) : tasks.length === 0 ? (
              <div className="sidebar-subitem">Нет задач</div>
            ) : (
              tasks.map(task => (
                <div className="sidebar-subitem" key={task.id}>{task.title || `Задача #${task.id}`}</div>
              ))
            )}
          </div>
        )}
      </div>
      <div className="sidebar-divider" />
      <div className="sidebar-link">Reminders {<MdExpandMore size={20} />}</div>
      <div className="sidebar-link">Messengers {<MdExpandMore size={20} />}</div>
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