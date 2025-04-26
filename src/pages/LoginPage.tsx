import React from 'react';
import AuthModule from '../modules/AuthModule';
import './LoginPage.css';

const LoginPage = () => (
  <div className="login-page">
    <h1 className="login-title">Вход в систему</h1>
    <AuthModule />
  </div>
);

export default LoginPage; 