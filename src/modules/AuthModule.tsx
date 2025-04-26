import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import PasswordResetForm from './PasswordResetForm';
import EmailVerificationForm from './EmailVerificationForm';

export type AuthView = 'login' | 'register' | 'reset' | 'verify';

const AuthModule = () => {
  const [view, setView] = useState<AuthView>('login');
  const [emailForVerify, setEmailForVerify] = useState<string>('');

  return (
    <div>
      {view === 'login' && (
        <LoginForm onRegister={() => setView('register')} onReset={() => setView('reset')} />
      )}
      {view === 'register' && (
        <RegisterForm onLogin={() => setView('login')} onVerify={email => { setEmailForVerify(email); setView('verify'); }} />
      )}
      {view === 'reset' && (
        <PasswordResetForm onBack={() => setView('login')} />
      )}
      {view === 'verify' && (
        <EmailVerificationForm email={emailForVerify} onSuccess={() => setView('login')} />
      )}
    </div>
  );
};

export default AuthModule; 