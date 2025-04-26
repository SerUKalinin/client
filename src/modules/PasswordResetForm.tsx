import React, { useState } from 'react';
import { forgotPassword } from '../services/authService';

type PasswordResetFormProps = {
  onBack: () => void;
};

const PasswordResetForm: React.FC<PasswordResetFormProps> = ({ onBack }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!email) {
      setError('Введите email');
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError('Некорректный email');
      return;
    }
    setLoading(true);
    try {
      await forgotPassword(email);
      setSuccess('Письмо с инструкцией отправлено');
    } catch (err: any) {
      setError(err.message || 'Ошибка отправки письма');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#282c34', padding: 24, borderRadius: 12, minWidth: 320, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <h2 style={{ color: '#fff', margin: 0 }}>Восстановление пароля</h2>
      <input
        type="email"
        placeholder="Почта"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{ padding: 8, borderRadius: 6, border: '1px solid #393e47', background: '#23272f', color: '#fff' }}
        autoComplete="email"
      />
      {error && <div style={{ color: '#e57373', fontSize: 14 }}>{error}</div>}
      {success && <div style={{ color: '#81c784', fontSize: 14 }}>{success}</div>}
      <button type="submit" disabled={loading} style={{ padding: 10, borderRadius: 8, background: '#393e47', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
        {loading ? 'Отправка...' : 'Восстановить пароль'}
      </button>
      <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: 14 }}>
        <span style={{ color: '#61dafb', cursor: 'pointer' }} onClick={onBack}>Назад ко входу</span>
      </div>
    </form>
  );
};

export default PasswordResetForm; 