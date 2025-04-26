import React, { useState } from 'react';
import { registerUser } from '../services/authService';

type RegisterFormProps = {
  onLogin: () => void;
  onVerify: (email: string) => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({ onLogin, onVerify }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!username || !email || !password) {
      setError('Пожалуйста, заполните все поля');
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Некорректный email');
      return;
    }
    setLoading(true);
    try {
      await registerUser(username, email, password);
      onVerify(email);
    } catch (err: any) {
      setError(err.message || 'Ошибка регистрации');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#282c34', padding: 24, borderRadius: 12, minWidth: 320, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <h2 style={{ color: '#fff', margin: 0 }}>Регистрация</h2>
      <input
        type="text"
        placeholder="Логин"
        value={username}
        onChange={e => setUsername(e.target.value)}
        style={{ padding: 8, borderRadius: 6, border: '1px solid #393e47', background: '#23272f', color: '#fff' }}
        autoComplete="username"
      />
      <input
        type="email"
        placeholder="Почта"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ padding: 8, borderRadius: 6, border: '1px solid #393e47', background: '#23272f', color: '#fff' }}
        autoComplete="email"
      />
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ padding: 8, borderRadius: 6, border: '1px solid #393e47', background: '#23272f', color: '#fff' }}
        autoComplete="new-password"
      />
      {error && <div style={{ color: '#e57373', fontSize: 14 }}>{error}</div>}
      <button type="submit" disabled={loading} style={{ padding: 10, borderRadius: 8, background: '#393e47', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
        {loading ? 'Регистрация...' : 'Зарегистрироваться'}
      </button>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
        <span style={{ color: '#61dafb', cursor: 'pointer' }} onClick={onLogin}>Уже есть аккаунт? Войти</span>
      </div>
    </form>
  );
};

export default RegisterForm; 