import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Link from 'next/link';
import { auth, sendPasswordResetEmail } from '@/lib/auth';
import { AuthCard } from '.';

import styles from './resetPassword.module.css';

function Reset() {
  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) console.log(['logged in']);
  }, [user, loading]);
  return (
    <AuthCard>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="E-mail Address"
      />
      <button onClick={() => sendPasswordResetEmail(email)}>
        Send password reset email
      </button>
      <div>
        Don't have an account? <Link href="/register">Register</Link> now.
      </div>
    </AuthCard>
  );
}
export default Reset;
