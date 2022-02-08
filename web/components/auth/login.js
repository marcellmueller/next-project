import React, { useEffect, useState } from 'react';

import { auth } from 'lib/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Button } from '@/components';
import { AuthCard } from '@/components/auth';
import { Input } from '@/components/form';
import { Google, Spinner } from '@/icons';
import styles from './login.module.css';
import { useSignIn } from '@/context';

const Login = ({ onChangeAuthForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [user, loading, error] = useAuthState(auth);
  const { loading, signIn } = useSignIn();
  // useEffect(() => {
  //   if (loading) {
  //     // maybe trigger a loading screen
  //     return;
  //   }
  // }, [user, loading]);

  return (
    <AuthCard>
      {!loading ? (
        <>
          <Input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail Address"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <Button
            onClick={() => {
              if (email && password) {
                signIn(email, password);
              }
            }}
          >
            Login
          </Button>
          <Button onClick={() => signIn()}>
            <Google />
          </Button>
          <div>
            <Button
              onClick={() => {
                onChangeAuthForm && onChangeAuthForm('reset');
              }}
            >
              Forgot Password
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                onChangeAuthForm && onChangeAuthForm('create');
              }}
            >
              Create Account
            </Button>
          </div>
        </>
      ) : (
        <div className={styles.loading}>
          <Spinner />
        </div>
      )}
    </AuthCard>
  );
};
export default Login;
