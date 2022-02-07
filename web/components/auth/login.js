import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import { auth, logInWithEmailAndPassword, signInWithGoogle } from 'lib/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { AuthCard } from '.';
import { Input } from '@/components/form';
import styles from './login.module.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
  }, [user, loading]);
  return (
    <AuthCard>
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
      <button onClick={() => logInWithEmailAndPassword(email, password)}>
        Login
      </button>
      <button onClick={signInWithGoogle}>Login with Google</button>
      <div>
        <Link href="/reset">Forgot Password</Link>
      </div>
      <div>
        Don&lsquo;t have an account? <Link href="/register">Register</Link> now.
      </div>
    </AuthCard>
  );
}
export default Login;
