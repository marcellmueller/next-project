import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuthState } from 'react-firebase-hooks/auth';
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from '@/lib/auth';
import { AuthCard } from '.';
import { Button } from '@/components';
import { Input } from '@/components/form';
import { Google } from '@/icons';

import styles from './createAccount.module.css';

const CreateAccount = ({ onChangeAuthForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, loading, error] = useAuthState(auth);

  const register = () => {
    if (!name) alert('Please enter name');
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
  }, [user, loading]);
  return (
    <AuthCard>
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
      <Button onClick={register}>Register</Button>
      <Button onClick={signInWithGoogle}>
        <Google />
      </Button>
      <div>
        <Button
          onClick={() => {
            onChangeAuthForm && onChangeAuthForm('login');
          }}
        >
          Login
        </Button>
      </div>
    </AuthCard>
  );
};
export default CreateAccount;
