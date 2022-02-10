import { useOpenAuthModal, useSignOut, useStore } from '@/context';
import { Button } from '@/components';

import styles from './accountMenu.module.css';

const AccountMenu = () => {
  const openAuthModal = useOpenAuthModal();
  const { loading, signOut } = useSignOut();

  const {
    user: { displayName, email },
  } = useStore();

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
          <div className={styles.user}>{displayName || email}</div>
          <Button
            onClick={() => {
              signOut();
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
