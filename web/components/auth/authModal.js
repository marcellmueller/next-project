import { useState } from 'react';
import { Modal } from 'components';
import { CreateAccount, Login, ResetPassword } from '@/components/auth';
import { useCloseAuthModal, useStore } from '@/context';

const AuthModal = () => {
  const [authForm, setAuthForm] = useState('login');
  const { authModal } = useStore();
  const closeAuthModal = useCloseAuthModal();

  return (
    <Modal closeModal={() => closeAuthModal()} modalState={authModal}>
      {authForm === 'login' && (
        <Login onChangeAuthForm={(form) => setAuthForm(form)} />
      )}
      {authForm === 'create' && (
        <CreateAccount onChangeAuthForm={(form) => setAuthForm(form)} />
      )}
      {authForm === 'reset' && (
        <ResetPassword onChangeAuthForm={(form) => setAuthForm(form)} />
      )}
    </Modal>
  );
};

export default AuthModal;
