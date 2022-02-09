import { useOpenAuthModal, useStore } from '@/context';
import { Button } from '@/components';

import styles from './accountMenu.module.css';

const AccountMenu = () => {
  const openAuthModal = useOpenAuthModal();
  const { email } = useStore();

  return (
    <div className={styles.account}>
      {!email ? (
        <Button
          onClick={() => {
            openAuthModal();
          }}
        >
          Sign In
        </Button>
      ) : (
        <div className={styles.account}>
          <div>{email}</div>
          <Button
            onClick={() => {
              openAuthModal();
            }}
            warning
          >
            Sign Out
          </Button>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
