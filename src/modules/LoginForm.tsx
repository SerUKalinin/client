import React, { useState } from 'react';
import { login as loginApi } from '../services/authService';
import { useNavigate } from 'react-router-dom';

type LoginFormProps = {
  onRegister: () => void;
  onReset: () => void;
};

const LoginForm: React.FC<LoginFormProps> = ({ onRegister, onReset }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!login || !password) {
      setError('Пожалуйста, заполните все поля');
      return;
    }
    setLoading(true);
    try {
      const res = await loginApi(login, password);
      if (res.jwtToken) {
        localStorage.setItem('token', res.jwtToken);
        navigate('/app');
      } else {
        setError('Ошибка авторизации');
      }
    } catch (err: any) {
      setError(err.message || 'Ошибка авторизации');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#282c34', padding: 24, borderRadius: 12, minWidth: 320, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <h2 style={{ color: '#fff', margin: 0 }}>Вход</h2>
      <input
        type="text"
        placeholder="Логин или почта"
        value={login}
        onChange={e => setLogin(e.target.value)}
        style={{ padding: 8, borderRadius: 6, border: '1px solid #393e47', background: '#23272f', color: '#fff' }}
        autoComplete="username"
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ padding: 8, borderRadius: 6, border: '1px solid #393e47', background: '#23272f', color: '#fff' }}
        autoComplete="current-password"
      />
      {error && <div style={{ color: '#e57373', fontSize: 14 }}>{error}</div>}
      <button type="submit" disabled={loading} style={{ padding: 10, borderRadius: 8, background: '#393e47', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
        {loading ? 'Вход...' : 'Войти'}
      </button>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
        <span style={{ color: '#61dafb', cursor: 'pointer' }} onClick={onReset}>Забыли пароль?</span>
        <span style={{ color: '#61dafb', cursor: 'pointer' }} onClick={onRegister}>Зарегистрироваться</span>
      </div>
    </form>
  );
};

export default LoginForm; 