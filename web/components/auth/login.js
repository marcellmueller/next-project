import React, { useEffect, useState } from 'react';
import cx from 'classnames';
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
    <AuthCard title="Sign in">
      {!loading ? (
        <form>
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
          <div className={styles['login-buttons']}>
            <Button
              type="submit"
              onClick={() => {
                if (email && password) {
                  signIn(email, password);
                }
              }}
            >
              Login
            </Button>
            <Button onClick={() => signIn()}>
              Sign in with google <Google size={16} />
            </Button>
          </div>

          <div className={cx(styles['login-buttons'], styles['lower-buttons'])}>
            <Button
              dark
              onClick={() => {
                onChangeAuthForm && onChangeAuthForm('reset');
              }}
              small
            >
              Forgot Password
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
        </form>
      ) : (
        <div className={styles.loading}>
          <Spinner />
        </div>
      )}
    </AuthCard>
  );
};
export default Login;
