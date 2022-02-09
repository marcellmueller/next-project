import React, { useState } from 'react';

import { sendPasswordReset } from '@/lib/auth';

import { AuthCard } from '.';
import { Button } from '@/components';
import { Input } from '@/components/form';
import { Loading } from '@/components/auth';
import styles from './resetPassword.module.css';

function Reset({ onChangeAuthForm }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handlePasswordReset = async () => {
    setLoading(true);
    const res = await sendPasswordReset(email).then(() => {
      setLoading(false);
      setMessage('Password reset email sent!');
    });
  };

  return (
    <AuthCard title="Reset password">
      {!loading ? (
        <>
          {!message ? (
            <form>
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mail Address"
              />
              <Button type="submit" onClick={handlePasswordReset}>
                Send password reset email
              </Button>
            </form>
          ) : (
            <div>{message}</div>
          )}
          <div className={styles['login-buttons']}>
            <Button
              dark
              onClick={() => {
                onChangeAuthForm && onChangeAuthForm('login');
              }}
              small
            >
              Login
            </Button>
            <Button
              dark
              onClick={() => {
                onChangeAuthForm && onChangeAuthForm('create');
              }}
              small
            >
              Create Account
            </Button>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </AuthCard>
  );
}
export default Reset;
