const API_URL = 'http://localhost:8080/auth';

export async function registerUser(username: string, email: string, password: string) {
  const res = await fetch(`${API_URL}/register-user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password })
  });
  if (!res.ok) throw new Error(await res.text());
}

export async function login(username: string, password: string) {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function verifyEmail(email: string, code: string) {
  const res = await fetch(`${API_URL}/verify-email`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, code })
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function resendVerification(email: string) {
  const res = await fetch(`${API_URL}/resend-verification?email=${encodeURIComponent(email)}`, {
    method: 'POST'
  });
  if (!res.ok) throw new Error(await res.text());
}

export async function forgotPassword(email: string) {
  const res = await fetch(`${API_URL}/forgot-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  if (!res.ok) throw new Error(await res.text());
}

export async function resetPassword(token: string, newPassword: string) {
  const res = await fetch(`${API_URL}/reset-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token, newPassword })
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function logout(token: string) {
  const res = await fetch(`${API_URL}/logout`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if (!res.ok) throw new Error(await res.text());
} 