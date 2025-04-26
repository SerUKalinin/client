import React, { useState } from 'react';
import { verifyEmail, resendVerification } from '../services/authService';

type EmailVerificationFormProps = {
  email: string;
  onSuccess: () => void;
};

const EmailVerificationForm: React.FC<EmailVerificationFormProps> = ({ email, onSuccess }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendSuccess, setResendSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!code) {
      setError('Введите код');
      return;
    }
    setLoading(true);
    try {
      await verifyEmail(email, code);
      setSuccess('Почта подтверждена!');
      setTimeout(() => onSuccess(), 1000);
    } catch (err: any) {
      setError(err.message || 'Ошибка подтверждения');
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResendLoading(true);
    setResendSuccess('');
    setError('');
    try {
      await resendVerification(email);
      setResendSuccess('Код отправлен повторно');
    } catch (err: any) {
      setError(err.message || 'Ошибка отправки кода');
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ background: '#282c34', padding: 24, borderRadius: 12, minWidth: 320, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <h2 style={{ color: '#fff', margin: 0 }}>Подтверждение почты</h2>
      <p style={{ color: '#b0b3b8', margin: 0 }}>Код отправлен на: {email}</p>
      <input
        type="text"
        placeholder="Код из письма"
        value={code}
        onChange={e => setCode(e.target.value)}
        style={{ padding: 8, borderRadius: 6, border: '1px solid #393e47', background: '#23272f', color: '#fff' }}
      />
      {error && <div style={{ color: '#e57373', fontSize: 14 }}>{error}</div>}
      {success && <div style={{ color: '#81c784', fontSize: 14 }}>{success}</div>}
      <button type="submit" disabled={loading} style={{ padding: 10, borderRadius: 8, background: '#393e47', color: '#fff', border: 'none', fontWeight: 600, cursor: 'pointer' }}>
        {loading ? 'Проверка...' : 'Подтвердить'}
      </button>
      <button type="button" disabled={resendLoading} onClick={handleResend} style={{ padding: 8, borderRadius: 8, background: '#23272f', color: '#61dafb', border: '1px solid #393e47', fontWeight: 500, cursor: 'pointer' }}>
        {resendLoading ? 'Отправка...' : 'Отправить код повторно'}
      </button>
      {resendSuccess && <div style={{ color: '#81c784', fontSize: 14 }}>{resendSuccess}</div>}
    </form>
  );
};

export default EmailVerificationForm; 