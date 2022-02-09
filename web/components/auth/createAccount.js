import React, { useState } from 'react';

import { registerWithEmailAndPassword } from '@/lib/auth';
import { useSignIn } from '@/context';

import { AuthCard, Loading } from '@/components/auth';
import { Button } from '@/components';
import { Input } from '@/components/form';
import { Google } from '@/icons';

import styles from './createAccount.module.css';

const CreateAccount = ({ onChangeAuthForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { loading, signIn } = useSignIn();

  const register = () => {
    if (!name) alert('Please enter name');
    registerWithEmailAndPassword(name, email, password);
  };

  return (
    <AuthCard title="Create account">
      {!loading ? (
        <form>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
          />
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
          <Button type="submit" onClick={register}>
            Register
          </Button>

          <div className={styles['login-buttons']}>
            <Button
              dark
              onClick={(e) => {
                e.preventDefault();
                onChangeAuthForm && onChangeAuthForm('login');
              }}
              small
            >
              Login
            </Button>
            <Button
              dark
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
              small
            >
              Sign in with Google
              <Google size={12} />
            </Button>
          </div>
        </form>
      ) : (
        <Loading />
      )}
    </AuthCard>
  );
};
export default CreateAccount;
