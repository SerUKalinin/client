import React, { useEffect, useState } from 'react';
import './Header.css';
import { FiSearch } from 'react-icons/fi';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineCalendarToday } from 'react-icons/md';

function formatDateTime(date: Date) {
  const day = date.getDate();
  const month = date.toLocaleString('en', { month: 'short' });
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${day} ${month} ${year}, ${hours}:${minutes}`;
}

interface UserInfo {
  firstName?: string;
  lastName?: string;
  avatarUrl?: string;
  email?: string;
  username?: string;
}

const Header: React.FC = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [user, setUser] = useState<UserInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch('/users/info', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then(res => {
        if (!res.ok) {
          console.error('Ошибка ответа /users/info:', res.status, res.statusText);
          throw new Error('Ошибка ответа');
        }
        return res.json();
      })
      .then(data => {
        console.log('Данные пользователя с /users/info:', data);
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Ошибка получения пользователя:', err);
        setUser(null);
        setLoading(false);
      });
  }, []);

  let displayName = '';
  if (user) {
    if (user.firstName && user.lastName) displayName = `${user.firstName} ${user.lastName}`;
    else if (user.firstName) displayName = user.firstName;
    else if (user.lastName) displayName = user.lastName;
    else displayName = user.email || user.username || 'User';
  }

  const avatar = user?.avatarUrl || 'https://randomuser.me/api/portraits/men/32.jpg';

  return (
    <header className="header-bar">
      <div className="header-left">
        <span className="header-welcome">
          <b>
            Добро пожаловать,{' '}
            {loading ? <span className="header-skeleton" style={{width: 80, display: 'inline-block', background: '#444', borderRadius: 4, height: 18}} /> : displayName}
          </b> <span className="header-emoji">👋</span>
        </span>
      </div>
      <div className="header-right">
        {FiSearch({ className: "header-icon", size: 20 })}
        <div className="header-icon notification">
          {IoMdNotificationsOutline({ size: 22 })}
          <span className="header-notification-dot" />
        </div>
        <div className="header-date">
          {MdOutlineCalendarToday({ size: 18, style: { marginRight: 4 } })}
          {formatDateTime(dateTime)}
        </div>
        <img className="header-avatar" src={avatar} alt="User avatar" />
      </div>
    </header>
  );
};

export default Header; 