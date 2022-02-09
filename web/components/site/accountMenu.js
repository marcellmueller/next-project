import { User } from 'react-feather';

import { useOpenAuthModal, useStore } from '@/context';
import { Button } from '@/components';

import styles from './accountMenu.module.css';

const AccountMenu = () => {
  const openAuthModal = useOpenAuthModal();
  const { email } = useStore();

  return (
    <div className={styles.account}>
      <User />
      {!email ? (
        <Button
          onClick={() => {
            openAuthModal();
          }}
        >
          Sign In
        </Button>
      ) : (
        <div>{email}</div>
      )}
    </div>
  );
};

export default AccountMenu;
