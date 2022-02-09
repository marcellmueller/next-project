import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import { Button } from '@/components';
import { AuthCard, Loading } from '@/components/auth';
import { Input } from '@/components/form';
import { Google } from '@/icons';

import { checkEmail } from '@/tools';
import { useSignIn } from '@/context';

import styles from './login.module.css';

const Login = ({ onChangeAuthForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { loading, signIn } = useSignIn();

  useEffect(() => {
    if (checkEmail(email)) {
      setError('');
    }
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkEmail(email) && password) {
      const res = await signIn(email, password);

      if (res.user) {
        setError('');
      } else {
        setError('The was an error with your request. Please try again.');
      }
    } else if (!checkEmail(email)) {
      setError('Please enter a valid email.');
    } else {
      setError('Please enter your password.');
    }
  };

  return (
    <AuthCard error={error} title="Sign in">
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
            <Button type="submit" onClick={handleSubmit}>
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
        <Loading />
      )}
    </AuthCard>
  );
};
export default Login;
