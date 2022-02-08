import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Link from 'next/link';
import { auth, sendPasswordReset } from '@/lib/auth';
import { AuthCard } from '.';
import { Button } from '@/components';

import styles from './resetPassword.module.css';

function Reset({ onChangeAuthForm }) {
  const [email, setEmail] = useState('');
  const [user, loading, error] = useAuthState(auth);
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
      <Button onClick={() => sendPasswordReset(email)}>
        Send password reset email
      </Button>
      <div>
        <Button
          onClick={() => {
            onChangeAuthForm && onChangeAuthForm('login');
          }}
        >
          Login
        </Button>
        <Button
          onClick={() => {
            onChangeAuthForm && onChangeAuthForm('create');
          }}
        >
          Create Account
        </Button>
      </div>
    </AuthCard>
  );
}
export default Reset;
